// @const
const {ccclass, property} = cc._decorator;

@ccclass
export default class RuleKeyAndValComp extends cc.Component {
    /**
     * 规则主键
     */
    @property({ visible: true, displayName: "Key", tooltip: "主键", })
    _nKey: number = -1;

    /**
     * 规则数值
     */
    @property({ visible: true, displayName: "Val", tooltip: "数值", })
    _nVal: number = -1;

    /**
     * 说明
     */
    @property({ visible: true, displayName: "Description", tooltip: "说明", })
    _strDescription: string = "说明";

    // /**
    //  * onLoad
    //  */
    // onLoad(): void {
    // }

    // /**
    //  * start
    //  */
    // start(): void {
    // }

    // /**
    //  * update
    //  * 
    //  * @param nDeltaTime 变化时间
    //  */
    // update(nDeltaTime: number): void {
    // }
}
