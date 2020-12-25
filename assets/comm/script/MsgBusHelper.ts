// @import
import AlertDialogFactory from "./AlertDialogFactory";
import CachedData from "../../bizdata/script/CachedData";
import CachingKeyDef from "../../bizdata/script/CachingKeyDef";
import ErrorHintFactory from "./ErrorHintFactory";
import GlobalDef from "./GlobalDef";
import LocalBrowser from "./LocalBrowser";
import MsgBus from "./MsgBus";
import ResKeyDef from "./ResKeyDef";
import { mod_commProtocol } from "./msg/comm.AllMsg";

// @const
const { ccclass } = cc._decorator;
const DISCONN_CHECK_CD_LIMIT = 5000;
const PING_CD_LIMIT = 20000;

const g_oResultHandlerMap: { [strKey: string]: (SELF: MsgBusHelper, oParam: any) => void} = {
    "ErrorHintResult": __handleErrorHintResult,
    "KickOutUserResult": __handleKickOutUserResult,
    "PingResult": __handlePingResult,
    "ReconnResult": __handleReconnResult,
};

/**
 * 消息总线助手
 */
@ccclass
export default class MsgBusHelper extends cc.Component {
    /**
     * 断线检查 Cd 时间
     */
    _nDisconnCheckCdTime: number = 0;

    /**
     * Ping Cd 时间
     */
    _nPingCdTime: number = 0;

    /**
     * Ping Id
     */
    _pingId = 0;

    // /**
    //  * onLoad
    //  */
    // onLoad(): void {
    // }

    /**
     * start
     */
    start(): void {
        let strServerAddr: string = LocalBrowser.getParamValFromURL("serverAddr") || GlobalDef._strServerAddr;
        let bUseSSL: boolean = ("1" == LocalBrowser.getParamValFromURL("SSL"));

        // 初始化消息总线
        MsgBus.getInstance()
            .putServerAddr(strServerAddr)
            .putUseSSL(bUseSSL)
            .tryInit();
    }

    /**
     * update
     * 
     * @param nDeltaTime 变化时间
     */
    update(nDeltaTime: number): void {
        let nMS: number = nDeltaTime * 1000;

        // 更新 Cd 时间
        this._nDisconnCheckCdTime += nMS;
        this._nPingCdTime += nMS;

        // 执行断线检查
        this.disconnCheck();
        // 执行 Ping
        this.ping();

        while (MsgBus.getInstance().getMsgQLen() > 0) {
            // 获取并处理消息
            let oMsgWrapper = MsgBus.getInstance().doMsgQShift();
            __handleXResult(this, oMsgWrapper);
        }
    }

    /**
     * 断线检查
     */
    private disconnCheck(): void {
        if (this._nDisconnCheckCdTime < DISCONN_CHECK_CD_LIMIT || 
            1 == CachedData.getInstance().get(CachingKeyDef.DISABLE_AUTO_LOGIN)) {
            return;
        }

        // 归零 Cd 时间
        this._nDisconnCheckCdTime = 0;

        if (MsgBus.getInstance().isReady()) {
            return;
        }

        if (MsgBus.getInstance().getConnTryCount() == 3) {
            __disconnAlert();
        }

        // 尝试重新初始化
        let oFuture = MsgBus.getInstance().tryInit();

        if (null != oFuture) {
            oFuture.onOpen = () => {
                this.schedule(__reconnByUkey, 2, 16, 2);
            }

            oFuture.onError = () => {
                cc.error("重连失败");
            }
        }
    }

    /**
     * Ping
     */
    private ping(): void {
        if (this._nPingCdTime < PING_CD_LIMIT) {
            return;
        }

        // 归零 Cd 时间
        this._nPingCdTime = 0;

        if (!MsgBus.getInstance().isReady()) {
            return;
        }

        // 发送 Ping 命令,
        // 其目的主要在于保持服务器连接, 即实现: keep-alive
        MsgBus.getInstance().sendMsg(
            mod_commProtocol.msg.CommMsgCodeDef._PingCmd,
            mod_commProtocol.msg.PingCmd.create({
                pingId: ++this._pingId,
            })
        );
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 断开连接提示
 * 
 * @param strReason 原因
 */
function __disconnAlert(strReason: string = null): void {
    if (null == strReason) {
        strReason = "服务器连接已断开...";
    }

    AlertDialogFactory.getCreatedDialog().onOK = () => {
        // 取消自动登录并返回登录界面
        cc.director.loadScene(
            ResKeyDef.SCENE_USER_LOGIN
        );
    }

    AlertDialogFactory.getCreatedDialog()
        .putContentWordz(strReason)
        .renewDisplay();
}

/**
 * 通过 Ukey 重新连接服务器
 */
function __reconnByUkey(): void {
    let strUkey = cc.sys.localStorage.getItem(GlobalDef._strLocalStorageUkey);
    let oUkey = JSON.parse(strUkey);

    if (null == oUkey) {
        return;
    }

    if (oUkey.ukeyExpireAt <= Date.now()) {
        cc.warn(`Ukey 已经过期, userId = ${oUkey.userId}`);
        return;
    }

    cc.log("通过 Ukey 重新连接服务器...");

    MsgBus.getInstance().sendMsg(
        mod_commProtocol.msg.CommMsgCodeDef._ReconnCmd,
        mod_commProtocol.msg.ReconnCmd.create({
            userId: oUkey.userId,
            ukeyStr: oUkey.ukeyStr,
            ukeyExpireAt: oUkey.ukeyExpireAt,
        })
    );
}

/**
 * 处理消息结果
 * 
 * @param SELF this 指针
 * @param oMsgWrapper 消息包装对象
 */
function __handleXResult(SELF: MsgBusHelper, oMsgWrapper: { msgClazzName: string, msgBody: any, }): void {
    if (null == SELF || 
        null == oMsgWrapper) {
        return;
    }

    if (oMsgWrapper.msgClazzName in g_oResultHandlerMap) {
        let funHandler = g_oResultHandlerMap[oMsgWrapper.msgClazzName];
        funHandler(SELF, oMsgWrapper.msgBody);
        return;
    }

    if ("function" != typeof(MsgBus.getInstance().onMsgHandler)) {
        // 每次执行前都要进行检查,
        // 因为在处理消息的过程中有可能会将 onMsgHandler 设置为空...
        // 设置为空之后,
        // MsgBus 接到的消息会放置到 _oMsgQ 里,
        // 等到后续继续处理...
        return;
    }

    // 处理收到的消息
    MsgBus.getInstance().onMsgHandler(
        oMsgWrapper.msgClazzName, oMsgWrapper.msgBody
    );
}

/**
 * 处理错误结果
 * 
 * @param SELF this 指针
 * @param oResult 结果对象
 */
function __handleErrorHintResult(
    SELF: MsgBusHelper, oResult: mod_commProtocol.msg.IErrorHintResult): void {
    if (null == SELF ||
        null == oResult) {
        return;
    }

    cc.error(JSON.stringify(oResult));

    ErrorHintFactory.getCreatedHint()
        .putErrorCode(oResult.errorCode)
        .putErrorMsg(oResult.errorMsg)
        .renewDisplay();
}

/**
 * 处理踢出用户结果
 * 
 * @param SELF this 指针
 * @param oResult 结果对象
 */
function __handleKickOutUserResult(
    SELF: MsgBusHelper, oResult: mod_commProtocol.msg.IKickOutUserResult): void {
    if (null == SELF ||
        null == oResult) {
        return;
    }

    CachedData.getInstance().set(CachingKeyDef.DISABLE_AUTO_LOGIN, 1);
    __disconnAlert(oResult.reason);
}

/**
 * 处理 Ping 结果
 * 
 * @param SELF this 指针
 * @param oResult 结果对象
 */
function __handlePingResult(
    SELF: MsgBusHelper, oResult: mod_commProtocol.msg.IPingResult): void {
    if (null == SELF ||
        null == oResult) {
        return;
    }
}

/**
 * 处理重连结果
 * 
 * @param SELF this 指针
 * @param oResult 结果对象
 */
function __handleReconnResult(
    SELF: MsgBusHelper, oResult: mod_commProtocol.msg.IReconnResult): void {
    if (null == SELF ||
        null == oResult) {
        return;
    }

    // 取消调度
    SELF.unschedule(__reconnByUkey);

    // 处理收到的消息
    MsgBus.getInstance().onMsgHandler(
        "ReconnResult", oResult
    );
}
