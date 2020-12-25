// @const
const { ccclass } = cc._decorator;

/**
 * 错误提示组件
 */
@ccclass
export default class ErrorHintComp extends cc.Component {
    /**
     * 错误代码
     */
    _nErrorCode: number;

    /**
     * 错误消息
     */
    _strErrorMsg: string = "";

    // /**
    //  * onLoad
    //  */
    // onLoad(): void {
    // }

    /**
     * start
     */
    start(): void {
    }

    // /**
    //  * update
    //  * 
    //  * @param nDeltaTime 变化时间
    //  */
    // update(nDeltaTime: number): void {
    // }

    /**
     * 设置错误代号
     * 
     * @param nVal 整数值
     */
    putErrorCode(nVal: number): ErrorHintComp {
        this._nErrorCode = nVal;
        return this;
    }

    /**
     * 设置错误消息
     * 
     * @param strVal 字符串值
     */
    putErrorMsg(strVal: string): ErrorHintComp {
        this._strErrorMsg = strVal;
        return this;
    }

    /**
     * 刷新显示
     */
    renewDisplay(): void {
        cc.find("ErrorMsg", this.node)
            .getComponent(cc.Label)
            .string = `[ 错误 ${this._nErrorCode} ] ${this._strErrorMsg}`;

        this.node.active = true;

        this.node.x = 0;
        this.node.y = 0;
        this.node.getComponent(cc.Widget).updateAlignment();
        this.node.opacity = 255;
        this.node.scale = 1.0;

        // 事先停掉正在执行的缓动
        cc.Tween.stopAllByTarget(this.node);

        // 增加缓动效果
        cc.tween(this.node)
            .by(0.05, { x: +32, })
            .by(0.05, { x: -64, })
            .by(0.05, { x: +64, })
            .by(0.05, { x: -32, })
            .delay(2.0)
            .by(0.05, { y: 64, opacity: -255, scale: -0.32, })
            .call(() => { this.hide(); })
            .start();
    }

    /**
     * 隐藏对话框
     */
    hide(): void {
        cc.Tween.stopAllByTarget(this.node);
        this.node.active = false;
    }
}
