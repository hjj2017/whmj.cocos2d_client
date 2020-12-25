// @const
const {ccclass, property} = cc._decorator;

/**
 * 修改颜色组件, 
 * 主要是挂在创建房间对话框上, 用于修改文本颜色
 */
@ccclass
export default class ToggleDyeingComp extends cc.Component {
    /**
     * 目标节点
     */
    @property({ visible: true, displayName: "Target", tooltip: "目标节点", type: cc.Node, })
    _oTarget: cc.Node = null;

    /**
     * 新颜色
     */
    @property({ visible: true, displayName: "New Color", tooltip: "新颜色", })
    _oNewColor: cc.Color = cc.Color.BLACK;

    /**
     * 原始颜色
     */
    private _oPrimaryColor: cc.Color = null;

    /**
     * 切换按钮组件
     */
    private _oToggleComp: cc.Toggle = null;

    /**
     * 是否使用新颜色
     */
    private _bUsingNewColor: boolean = false;

    // /**
    //  * onLoad
    //  */
    // onLoad(): void {
    // }

    /**
     * start
     */
    start(): void {
        this._oPrimaryColor = this._oTarget.color;
        this._oToggleComp = this.getComponent(cc.Toggle);
        //
        // 本来是应该使用 toggle 事件来修改颜色值的,
        // 可是 Cocos 这个臭家伙竟然没有类似的 untoggle 事件...
        // 只能在 update 函数里干点累活了
        //
    }

    /**
     * update
     * 
     * @param nDeltaTime 变化时间
     */
    update(/*nDeltaTime: number*/): void {
        if (null == this._oToggleComp || 
            this._bUsingNewColor == this._oToggleComp.isChecked) {
            return;
        }

        // 修改标志位
        this._bUsingNewColor = this._oToggleComp.isChecked;
        // 修改显色前先禁用该节点,
        // 这是 Cocos Creator 2.4.0 的一个 Bug...
        this._oTarget.active = false;

        if (this._oToggleComp.isChecked) {
            // 使用新颜色
            this._oTarget.color = this._oNewColor;
        } else {
            // 使用旧颜色
            this._oTarget.color = this._oPrimaryColor;
        }

        // 修改颜色后启用该节点
        this._oTarget.active = true;
    }
}
