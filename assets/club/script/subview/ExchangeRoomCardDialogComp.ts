//#region @import
import ErrorHintFactory from "../../../comm/script/ErrorHintFactory";
import MsgBus from "../../../comm/script/MsgBus";
import { mod_clubServerProtocol } from "../msg/AllMsg.ver_Club";
//#endregion

// @const
const { ccclass } = cc._decorator;

/**
 * 亲友圈充房卡对话框组件
 */
@ccclass
export default class ExchangeRoomCardDialogComp extends cc.Component {
    /**
     * 亲友圈 Id
     */
    _nClubId: number = -1;

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

        // 增加缓动效果
        cc.tween(cc.find("Mask", this.node))
            .to(0.00, { opacity: 0 })
            .to(0.48, { opacity: 160 })
            .start();

        cc.tween(cc.find("PrimeDialog", this.node))
            .to(0.00, { position: cc.v3(0, 0), opacity: 128 })
            .to(0.12, { position: cc.v3(0, 0), opacity: 255, scale: 1.20 })
            .to(0.12, { position: cc.v3(0, 0), opacity: 255, scale: 1.00 })
            .start();
    }

    // /**
    //  * update
    //  * 
    //  * @param nDeltaTime 变化时间
    //  */
    // update(nDeltaTime: number): void {
    // }

    /**
     * 设置亲友圈 Id
     * 
     * @param nVal 整数值
     */
    putClubId(nVal: number): ExchangeRoomCardDialogComp {
        this._nClubId = nVal;
        return this;
    }

    /**
     * 刷新显示
     */
    renewDisplay(): void {
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 注册 UI 事件
 * 
 * @param SELF this 指针
 */
function __regUIEvent(SELF: ExchangeRoomCardDialogComp): void {
    if (null == SELF) {
        return;
    }

    // 关闭对话
    cc.find("PrimeDialog/Top/Button_Close_", SELF.node).on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            __closeDialog(SELF);
        }
    );

    cc.find("PrimeDialog/Center/Button_Yes_", SELF.node).on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            // 获取房卡数量
            let strRoomCard = cc.find("PrimeDialog/Center/EditBox_RoomCardNum_", SELF.node)
                .getComponent(cc.EditBox)
                .string;

            let oRegex = /^\+?[1-9][0-9]*$/g;

            if (!oRegex.test(strRoomCard).valueOf()) {
                ErrorHintFactory.getCreatedHint()
                    .putErrorCode(-1)
                    .putErrorMsg("房卡数量错误")
                    .renewDisplay();
                return;
            }

            MsgBus.getInstance().sendMsg(
                mod_clubServerProtocol.msg.ClubServerMsgCodeDef._ExchangeRoomCardCmd,
                mod_clubServerProtocol.msg.ExchangeRoomCardCmd.create({
                    clubId: SELF._nClubId,
                    roomCard: Number.parseInt(strRoomCard),
                })
            );
            
            __closeDialog(SELF);
        }
    );
}

/**
 * 关闭对话框
 * 
 * @param SELF this 指针
 */
function __closeDialog(SELF: ExchangeRoomCardDialogComp): void {
    if (null == SELF) {
        return;
    }

    // 增加缓动效果
    cc.tween(cc.find("Mask", SELF.node))
        .to(0.12, { opacity: 0 })
        .start();

    cc.tween(cc.find("PrimeDialog", SELF.node))
        .to(0.12, { position: cc.v3(0, 0), opacity: 128, scale: 0.84 })
        .call(() => { SELF.node.destroy(); })
        .start();
}
