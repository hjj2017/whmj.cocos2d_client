// @const
const { ccclass } = cc._decorator;

/**
 * 确认对话框组件
 */
@ccclass
export default class ComfirmDialogComp extends cc.Component {
    /**
     * 内容文字
     */
    _strContentWordz: string = "";

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
     * 设置内容文字
     * 
     * @param strVal 字符串值
     */
    putContentWordz(strVal: string): ComfirmDialogComp {
        this._strContentWordz = strVal;
        return this;
    }

    /**
     * 刷新显示
     */
    renewDisplay(): void {
        cc.find("PrimeDialog/Center/ContentWordz", this.node)
            .getComponent(cc.Label)
            .string = this._strContentWordz;

        this.node.active = true;

        let oMaskNode = cc.find("Mask", this.node);
        let oPrimeDialogNode = cc.find("PrimeDialog", this.node);

        // 事先停止缓动效果
        cc.Tween.stopAllByTarget(oMaskNode);
        cc.Tween.stopAllByTarget(oPrimeDialogNode);

        // 增加缓动效果
        cc.tween(oMaskNode)
            .to(0.00, { opacity: 0, })
            .to(0.48, { opacity: 160, })
            .start();

        cc.tween(oPrimeDialogNode)
            .to(0.00, { position: cc.v3(0, 0), opacity: 128, })
            .to(0.12, { opacity: 255, scale: 1.20, })
            .to(0.12, { opacity: 255, scale: 1.00, })
            .start();
    }

    /**
     * 隐藏对话框
     */
    hide(): void {
        let oMaskNode = cc.find("Mask", this.node);
        let oPrimeDialogNode = cc.find("PrimeDialog", this.node);

        // 停止缓动效果
        cc.Tween.stopAllByTarget(oMaskNode);
        cc.Tween.stopAllByTarget(oPrimeDialogNode);

        this.node.active = false;
    }

    /**
     * 当点击 "确定"
     */
    onOK(): void {
    }

    /**
     * 当点击 "取消"
     */
    onCancel(): void {
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 注册 UI 事件
 * 
 * @param SELF this 指针
 */
function __regUIEvent(SELF: ComfirmDialogComp): void {
    if (null == SELF) {
        return;
    }

    cc.find("PrimeDialog/Bottom/Button_OK_", SELF.node)
        .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            if ("function" == typeof(SELF.onOK)) {
                __tweenOnOkOrCancel(
                    SELF, 
                    SELF.onOK
                );
            }
        }
    );

    cc.find("PrimeDialog/Bottom/Button_Cancel_", SELF.node)
        .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            if ("function" == typeof(SELF.onCancel)) {
                __tweenOnOkOrCancel(
                    SELF, 
                    SELF.onCancel
                );
            }
        }
    );
}

/**
 * 缓动效果, 当触发 Ok 或者 Cancel 时
 * 
 * @param SELF this 指针
 * @param funCb 回调函数
 */
function __tweenOnOkOrCancel(SELF: ComfirmDialogComp, funCb: () => void): void {
    if (null == SELF) {
        return;
    }

    let oMaskNode = cc.find("Mask", SELF.node);
    let oPrimeDialogNode = cc.find("PrimeDialog", SELF.node);

    // 事先停止缓动效果
    cc.Tween.stopAllByTarget(oMaskNode);
    cc.Tween.stopAllByTarget(oPrimeDialogNode);

    // 增加缓动效果
    cc.tween(oMaskNode)
        .to(0.12, { opacity: 0 })
        .start();

    cc.tween(oPrimeDialogNode)
        .to(0.12, { position: cc.v3(0, 0), opacity: 128, scale: 0.84, })
        .call(() => { funCb(); SELF.hide(); })
        .start();
}
