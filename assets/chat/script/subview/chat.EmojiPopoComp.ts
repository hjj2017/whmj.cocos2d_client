//#region  @import
import AudioMajordomo from "../../../comm/script/AudioMajordomo";
import ModConfig from "../chat.ModConfig";
//#endregion

// @const
const { ccclass } = cc._decorator;

/**
 * 表情泡泡组件
 */
@ccclass
export default class EmojiPopoComp extends cc.Component {
    /**
     * 消息 Id
     */
    _nEmojiId: number = -1;

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

    /**
     * 设置表情 Id
     * 
     * @param nVal 整数值
     */
    putEmojiId(nVal: number): EmojiPopoComp {
        this._nEmojiId = nVal;
        return this;
    }

    /**
     * 刷新显示
     */
    renewDisplay(): void {
        for (let nIndex: number = 1000; nIndex <= 1015; nIndex++) {
            if (nIndex != this._nEmojiId) {
                cc.find(`PrimePopo/Emoji_${nIndex}_`, this.node).active = false;
                continue;
            }

            cc.find(`PrimePopo/Emoji_${nIndex}_`, this.node).active = true;
            cc.find(`PrimePopo/Emoji_${nIndex}_/Anim`, this.node)
                .getComponent(cc.Animation)
                .play();

            AudioMajordomo.getInstance().playVoice(
                ModConfig.BUNDLE_NAME, 
                `res/1/audio/Emoji_X_`
            );
        }

        this.scheduleOnce(() => {
            this.node.destroy();
        }, 4);
    }
}
