// @import
import AudioMajordomo from "../../../comm/script/AudioMajordomo";
import ModConfig from "../chat.ModConfig";

// @const
const { ccclass } = cc._decorator;

/**
 * 快速消息泡泡组件
 */
@ccclass
export default class QuickMsgPopoComp extends cc.Component {
    /**
     * 消息 Id
     */
    _nMsgId: number = -1;

    /**
     * 玩家性别
     */
    _nPlayerSex: number = -1;

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
     * 设置消息 Id
     * 
     * @param nVal 整数值
     */
    putMsgId(nVal: number): QuickMsgPopoComp {
        this._nMsgId = nVal;
        return this;
    }

    /**
     * 设置玩家性别
     * 
     * @param nVal -1 = 未知, 0 = 女, 1 = 男, 2 = 双性
     */
    putPlayerSex(nVal: number): QuickMsgPopoComp {
        this._nPlayerSex = nVal;
        return this;
    }

    /**
     * 刷新显示
     */
    renewDisplay(): void {
        for (let nIndex: number = 1000; nIndex <= 1007; nIndex++) {
            cc.find(`PrimePopo/QuickMsg_${nIndex}_`, this.node).active = (nIndex == this._nMsgId);
        }

        let nSex = this._nPlayerSex;

        if (1 != nSex) {
            nSex = 0;
        }

        AudioMajordomo.getInstance().playVoice(
            ModConfig.BUNDLE_NAME, 
            `res/1/audio/sex_${nSex}_/QuickMsg_${this._nMsgId}_`
        );

        this.scheduleOnce(() => {
            this.node.destroy();
        }, 4);
    }
}
