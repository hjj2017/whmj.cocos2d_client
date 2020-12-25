// @import
import AudioMajordomo from "./AudioMajordomo";

// @const
const { ccclass, property } = cc._decorator;

/**
 * 按钮点击声音组件
 */
@ccclass
export default class ClickedAudioComp extends cc.Component {
    /**
     * Bundle 名称
     */
    @property({ visible: true, displayName: "Bundle Name", })
    public _strBundleName: string = "";

    /**
     * 资源 URI
     */
    @property({ visible: true, displayName: "Res URI", })
    public _strResUri: string = "";

    // /**
    //  * onLoad
    //  */
    // onLoad(): void {
    // }

    /**
     * start
     */
    start(): void {
        this.node.on(cc.Node.EventType.TOUCH_START, (oEvent: any) => {
            // 播放按钮声音
            AudioMajordomo.getInstance().playSound(
                this._strBundleName, 
                this._strResUri
            );
        });
    }

    // /**
    //  * update
    //  * 
    //  * @param nDeltaTime 变化时间
    //  */
    // update(nDeltaTime: number): void {
    // }
}
