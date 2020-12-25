// @import
import AlertDialogFactory from "../../comm/script/AlertDialogFactory";
import CachedData from "../../bizdata/script/CachedData";
import CachingKeyDef from "../../bizdata/script/CachingKeyDef";
import ConfirmDialogFactory from "../../comm/script/ConfirmDialogFactory";
import ErrorHintFactory from "../../comm/script/ErrorHintFactory";
import GlobalDef from "../../comm/script/GlobalDef";
import LoadingWndFactory from "../../comm/script/LoadingWndFactory";
import LocalBrowser from "../../comm/script/LocalBrowser";
import MsgBus from "../../comm/script/MsgBus";
import MsgRecognizer from "../../comm/script/MsgRecognizer";
import SuccezzHintFactory from "../../comm/script/SuccezzHintFactory";
import Ver from "../../comm/script/Ver";
import { __onMsgHandler } from "./resulthandler/usr0.__onMsgHandler";
import { __regUIEvent } from "./usr0.__regUIEvent";
import { mod_passportServerProtocol } from "./msg/usr0.AllMsg";

// @const
const { ccclass } = cc._decorator;

/**
 * 用户登录场景
 */
@ccclass
export default class UserLoginScene extends cc.Component {
    /**
     * load
     */
    onLoad(): void {
        let oCanvasNode = cc.find("Canvas");
        let nCanvasW = oCanvasNode.width;

        if (nCanvasW < GlobalDef._nStandardScreenWidth) {
            oCanvasNode.scale = (nCanvasW / GlobalDef._nStandardScreenWidth);
        }
    }

    /**
     * start
     */
    start(): void {
        if (!CC_DEBUG) {
            cc.log = (oMsg: any): void => {
                console.log(oMsg);
            }

            cc.error = (oError: any): void => {
                console.error(oError);
            }

            cc.warn = (oMsg: any): void => {
                console.warn(oMsg);
            }

            cc.log("重新定义 log()、error()、warn() 函数");
        }

        // 注册 UI 事件
        __regUIEvent(this);

        // 添加协议
        MsgRecognizer.addProtocol("passport", mod_passportServerProtocol);

        // 消息处理
        __onMsgHandler(this);

        // 初始化全局对话框和窗口
        AlertDialogFactory.initByNode(cc.find("AlertDialog"));
        ConfirmDialogFactory.initByNode(cc.find("ConfirmDialog"));
        ErrorHintFactory.initByNode(cc.find("ErrorHint"));
        LoadingWndFactory.initByNode(cc.find("LoadingWnd"));
        SuccezzHintFactory.initByNode(cc.find("SuccezzHint"));

        if (1 != CachedData.getInstance().get(CachingKeyDef.DISABLE_AUTO_LOGIN)) {
            // 自动登录
            let funAutoLogin = () => {
                if (MsgBus.getInstance().isReady()) {
                    __tryUkeyLogin();
                    this.unschedule(funAutoLogin);
                }
            };

            // 执行自动登录
            this.schedule(funAutoLogin, 0.5, 16, 0.5);
        }

        // 设置版本号
        cc.find("Canvas/Label_Ver_").getComponent(cc.Label).string = Ver._strCurr;
    }

    // /**
    //  * update
    //  * 
    //  * @param nDeltaTime 变化时间
    //  */
    // update (nDeltaTime: number): void {
    // }

    /**
     * 保存 Ukey
     * 
     * @param nUserId 用户 Id
     * @param strUkeyStr Ukey 字符串
     * @param nUkeyExpireAt Ukey 过期时间
     */
    saveUkey(nUserId: number, strUkeyStr: string, nUkeyExpireAt: number): void {
        let oUkey = {
            userId: nUserId,
            ukeyStr: strUkeyStr,
            ukeyExpireAt: nUkeyExpireAt,
        };

        // 保存 Ukey
        cc.sys.localStorage.setItem(
            GlobalDef._strLocalStorageUkey, JSON.stringify(oUkey)
        );
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 尝试 Ukey 登录
 */
function __tryUkeyLogin(): void {
    if (cc.sys.isBrowser && 
        "1" == LocalBrowser.getParamValFromURL("DEV")) {
        return;
    }

    if (!MsgBus.getInstance().isReady()) {
        return;
    }

    let strUkey = cc.sys.localStorage.getItem(GlobalDef._strLocalStorageUkey);
    let oUkey = JSON.parse(strUkey);

    if (null == oUkey) {
        return;
    }

    if (oUkey.ukeyExpireAt <= Date.now()) {
        cc.warn(`Ukey 已经过期, userId = ${oUkey.userId}`);
        return;
    }

    cc.log("执行 Ukey 登录");

    MsgBus.getInstance().sendMsg(
        mod_passportServerProtocol.msg.PassportServerMsgCodeDef._UserLoginCmd,
        mod_passportServerProtocol.msg.UserLoginCmd.create({
            loginMethod: 2, // Ukey 登录
            propertyStr: strUkey,
        })
    );
}
