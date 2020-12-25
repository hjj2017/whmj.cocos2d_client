// @const
const { ccclass } = cc._decorator;

/**
 * 房间信息对话框
 */
@ccclass
export default class RoomInfoDialogComp extends cc.Component {
    /**
     * 房间 Id
     */
    _nRoomId: number;

    /**
     * 最大玩家数量和最大局数说明
     */
    _strMaxPlayerAndMaxRoundDesc: string;

    /**
     * 支付方式说明
     */
    _strPaymentWayDesc: string;

    /**
     * 玩法说明
     */
    _strPlayMethodDesc: string;

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
     * 设置房间 Id
     * 
     * @param nVal 整数值
     */
    putRoomId(nVal: number): RoomInfoDialogComp {
        this._nRoomId = nVal;
        return this;
    }

    /**
     * 设置最大玩家数量和最大局数说明
     * 
     * @param strVal 字符串值
     */
    putMaxPlayerAndMaxRoundDesc(strVal: string): RoomInfoDialogComp {
        this._strMaxPlayerAndMaxRoundDesc = strVal;
        return this;
    }

    /**
     * 设置支付方式说明
     * 
     * @param strVal 字符串值
     */
    putPaymentWayDesc(strVal: string): RoomInfoDialogComp {
        this._strPaymentWayDesc = strVal;
        return this;
    }

    /**
     * 设置玩法说明
     * 
     * @param strVal 字符串值
     */
    putPlayMethodDesc(strVal: string): RoomInfoDialogComp {
        this._strPlayMethodDesc = strVal;
        return this;
    }

    /**
     * 刷新显示
     */
    renewDisplay(): void {
        cc.find("PrimeDialog/RoomIdAndMaxPlayerMaxRound/CurrRoomId", this.node)
            .getComponent(cc.Label)
            .string = this._nRoomId.toString();

        cc.find("PrimeDialog/RoomIdAndMaxPlayerMaxRound/MaxPlayerAndMaxRound", this.node)
            .getComponent(cc.Label)
            .string = this._strMaxPlayerAndMaxRoundDesc;

        cc.find("PrimeDialog/PlayMethodDesc", this.node)
            .getComponent(cc.Label)
            .string = this._strPaymentWayDesc + "，" + this._strPlayMethodDesc;

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
function __regUIEvent(SELF: RoomInfoDialogComp): void {
    if (null == SELF) {
        return;
    }

    // 关闭房间信息面板
    cc.find("PrimeDialog/Button_Close_", SELF.node).on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            cc.tween(cc.find("PrimeDialog", SELF.node))
                .to(0.12, { position: cc.v3(0, 0), opacity: 128, scale: 0.84 })
                .call(() => { SELF.node.active = false; })
                .start();
        }
    );
}
