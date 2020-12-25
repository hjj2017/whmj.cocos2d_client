// @const
const { ccclass } = cc._decorator;

/**
 * 成功提示组件
 */
@ccclass
export default class SuccezzHintComp extends cc.Component {
    /**
     * 成功消息
     */
    _strSuccezzMsg: string = "";

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
     * 设置成功消息
     * 
     * @param strVal 字符串值
     */
    putSuccezzMsg(strVal: string): SuccezzHintComp {
        this._strSuccezzMsg = strVal;
        return this;
    }

    /**
     * 刷新显示
     */
    renewDisplay(): void {
        cc.find("SuccezzMsg", this.node)
            .getComponent(cc.Label)
            .string = this._strSuccezzMsg;

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
            .by(0.50, { y: 32, })
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
