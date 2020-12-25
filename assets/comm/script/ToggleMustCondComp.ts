// @const
const { ccclass, property } = cc._decorator;

/**
 * 选择框必要条件
 */
@ccclass
export default class ToggleMustCondComp extends cc.Component {
    /**
     * 目标节点
     */
    @property({ visible: true, displayName: "Target", tooltip: "目标节点", type: cc.Node })
    _oTarget: cc.Node = null;

    /**
     * 是否选中
     */
    @property({ visible: true, displayName: "Check", tooltip: "是否选中", })
    _bCheck: boolean = false;

    // /**
    //  * onLoad
    //  */
    // onLoad(): void {
    // }

    /**
     * start
     */
    start(): void {
        if (null == this._oTarget) {
            return;
        }

        this.checkMustCond();

        this.node.on("toggle", () => {
            this.checkMustCond();
        });

        this._oTarget.on("toggle", () => {
            if (!this._oTarget.getComponent(cc.Toggle).isChecked) {
                // 如果目标节点没有被选中,
                // 那么当前节点也取消选中状态...
                this.getComponent(cc.Toggle).isChecked = false;
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
     * 检查必要条件
     */
    private checkMustCond(): void {
        if (null == this._oTarget) {
            return;
        }

        if (this.getComponent(cc.Toggle).isChecked) {
            this._oTarget.getComponent(cc.Toggle).isChecked = this._bCheck;
        }
    }
}
