// @const
const { ccclass } = cc._decorator;

/**
 * 解散房间确认对话框
 */
@ccclass
export default class DissolveRoomConfirmDialogComp extends cc.Component {
    // /**
    //  * onLoad
    //  */
    // onLoad(): void {
    // }

    /**
     * start
     */
    start(): void {
        cc.find("Dialog/Button_Cancel_", this.node)
            .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            this.node.destroy();
        });

        cc.find("Dialog/Button_DissolveRoom_", this.node)
            .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            if ("function" == typeof(this.onDissolveRoom)) {
                // 获取所选原因
                let nSelectedReason = cc.find("Dialog/ToggleContainer/Reason_0_", this.node)
                    .getComponent(cc.Toggle)
                    .isChecked ? 0 : 1;

                // 执行回调函数...
                this.onDissolveRoom(nSelectedReason);
            }
        });
    }

    // /**
    //  * update
    //  * 
    //  * @param nDeltaTime 变化时间
    //  */
    // update(nDeltaTime: number): void {
    // }

    /**
     * 选择确定
     * 
     * @param nSelectedReason 所选原因
     */
    onDissolveRoom(nSelectedReason: number): void {
        if (nSelectedReason < 0) {
            return;
        }
    }
}
