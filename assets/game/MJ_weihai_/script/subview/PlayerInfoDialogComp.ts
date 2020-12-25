//#region @import
import ConfirmDialogFactory from "../../../../comm/script/ConfirmDialogFactory";
import HeadImgLoader from "../../../../comm/script/HeadImgLoader";
import MsgBus from "../../../../comm/script/MsgBus";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";
//#endregion

// @const
const { ccclass } = cc._decorator;

/**
 * 玩家摘要数据
 */
type PlayerSummaryData = {
    /** 用户 Id */
    userId: number,
    /** 用户名称 */
    userName: string,
    /** 头像 */
    headImg: string,
    /** 客户端地址 */
    clientIpAddr: string,
}

/**
 * 玩家信息对话框组件
 */
@ccclass
export default class PlayerInfoDialogComp extends cc.Component {
    /**
     * 用户数据
     */
    _oPlayerData: PlayerSummaryData;

    /**
     * 是否可以开除玩家
     */
    _bCanFireAPlayer: boolean;

    // /**
    //  * onLoad
    //  */
    // onLoad(): void {
    // }

    /**
     * start
     */
    start(): void {
        // 注册 UI 事件
        __regUIEvent(this);
    }

    // /**
    //  * update
    //  * 
    //  * @param nDeltaTime 变化时间
    //  */
    // update(nDeltaTime: number): void {
    // }

    /**
     * 设置玩家 ( 摘要 ) 数据
     * 
     * @param oVal 对象值
     */
    putPlayerData(oVal: PlayerSummaryData): PlayerInfoDialogComp {
        this._oPlayerData = oVal;
        return this;
    }

    /**
     * 设置是否可以开除玩家
     * 
     * @param bVal 布尔值
     */
    putCanFireAPlayer(bVal: boolean): PlayerInfoDialogComp {
        this._bCanFireAPlayer = bVal;
        return this;
    }

    /**
     * 刷新显示
     */
    renewDisplay(): void {
        cc.find("PrimeDialog/Button_FireAPlayer_", this.node).active = this._bCanFireAPlayer;

        cc.find("PrimeDialog/UserName", this.node)
            .getComponent(cc.Label)
            .string = this._oPlayerData.userName;

        cc.find("PrimeDialog/UserId", this.node)
            .getComponent(cc.Label)
            .string = "ID " + this._oPlayerData.userId;

        let strClientIpAddr = this._oPlayerData.clientIpAddr;

        if (null == strClientIpAddr || 
            strClientIpAddr.length <= 0) {
            strClientIpAddr = "未取得 IP 地址";
        } else {
            strClientIpAddr = "当前 IP 地址 " + strClientIpAddr;
        }

        cc.find("PrimeDialog/ClientIpAddr", this.node)
            .getComponent(cc.Label)
            .string = strClientIpAddr;

        HeadImgLoader.loadAndShow(
            cc.find("PrimeDialog/HeadImg/Portrait", this.node), 
            this._oPlayerData.headImg
        );

        cc.tween(cc.find("PrimeDialog", this.node))
            .to(0.00, { position: cc.v3(0, 0), opacity: 128, })
            .to(0.12, { opacity: 255, scale: 1.20, })
            .to(0.12, { opacity: 255, scale: 1.00, })
            .start();
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 注册 UI 事件
 * 
 * @param SELF this 指针
 */
function __regUIEvent(SELF: PlayerInfoDialogComp): void {
    if (null == SELF) {
        return;
    }

    let funCloseDialog = () => {
        cc.tween(cc.find("PrimeDialog", SELF.node))
            .to(0.12, { position: cc.v3(0, 0), opacity: 128, scale: 0.84 })
            .call(() => { SELF.node.active = false; })
            .start();
    }

    // 关闭房间信息面板
    cc.find("PrimeDialog/Button_Close_", SELF.node).on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            funCloseDialog();
        }
    );

    // 开除一个玩家
    cc.find("PrimeDialog/Button_FireAPlayer_", SELF.node).on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            if (null == SELF._oPlayerData) {
                return;
            }

            ConfirmDialogFactory.getCreatedDialog()
                .putContentWordz(`是否将 ${SELF._oPlayerData.userName} ( ID ${SELF._oPlayerData.userId} ) 踢出该房间？`)
                .renewDisplay();

            ConfirmDialogFactory.getCreatedDialog().onCancel = () => {
                ConfirmDialogFactory.getCreatedDialog()
                    .hide();
            }

            ConfirmDialogFactory.getCreatedDialog().onOK = () => {
                // 发送踢出用户消息
                MsgBus.getInstance().sendMsg(
                    mod_MJ_weihai_Protocol.msg.MJ_weihai_MsgCodeDef._FireAPlayerCmd,
                    mod_MJ_weihai_Protocol.msg.FireAPlayerCmd.create({
                        targetUserId: SELF._oPlayerData.userId,
                    }),
                );

                funCloseDialog();
                ConfirmDialogFactory.getCreatedDialog()
                    .hide();
            }
        }
    );
}
