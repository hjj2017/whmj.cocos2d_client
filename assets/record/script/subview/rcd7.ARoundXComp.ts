// @import
import DateTimeUtil from "../../../comm/script/DateTimeUtil";
import HeadImgLoader from "../../../comm/script/HeadImgLoader";
import { ARound } from "../TypeDef.ver_Record";

// @const
const { ccclass } = cc._decorator;
const COLOR_RED = new cc.Color(200, 64, 64);
const COLOR_GRAY = new cc.Color(128, 160, 128);

/**
 * 说明
 */
@ccclass
export default class ARoundXComp extends cc.Component {
    /**
     * 单个牌局
     */
    _oRound: ARound = null;

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
     * 设置单个牌局
     * 
     * @param oVal 对象值
     * @return this 指针
     */
    putRound(oVal: ARound): ARoundXComp {
        this._oRound = oVal;
        return this;
    }

    /**
     * 刷新显示
     */
    renewDisplay(): void {
        if (null == this._oRound) {
            this.node.active = true;
            return;
        }

        cc.find("RoundInfoArea/RoundIndex", this.node)
            .getComponent(cc.Label)
            .string = `第${(this._oRound.roundIndex + 1)}局`;

        cc.find("RoundInfoArea/TimeStr", this.node)
            .getComponent(cc.Label)
            .string = DateTimeUtil.getMMddHHmmStr(this._oRound.createTime);

        // 获取玩家数组
        const oPlayerArray = this._oRound.playerArray;

        if (null != oPlayerArray && 
            oPlayerArray.length > 0) {
            for (let nIndex = 0; nIndex < 4 && nIndex < oPlayerArray.length; nIndex++) {
                // 获取当前玩家
                let oCurrPlayer = oPlayerArray[nIndex];

                if (null == oCurrPlayer) {
                    continue;
                }

                // 加载头像并显示
                HeadImgLoader.loadAndShow(
                    cc.find(`TranscriptArea/Player_${nIndex}_/HeadImgArea/HeadJPG`, this.node), 
                    oCurrPlayer.headImg
                );

                // 事先隐藏赢家标志, 后面再设置显示
                cc.find(`TranscriptArea/Player_${nIndex}_/HeadImgArea/ZhuangFlag`, this.node).active = oCurrPlayer.zhuangFlag;

                cc.find(`TranscriptArea/Player_${nIndex}_/UserName`, this.node)
                    .getComponent(cc.Label)
                    .string = oCurrPlayer.userName;

                const oCurrScoreNode = cc.find(`TranscriptArea/Player_${nIndex}_/CurrScore`, this.node);
                let strCurrScore = "";
                
                if (oCurrPlayer.currScore > 0) {
                    strCurrScore = "+" + oCurrPlayer.currScore;
                } else if (oCurrPlayer.currScore < 0) { 
                    strCurrScore = oCurrPlayer.currScore.toString();
                }

                oCurrScoreNode.color = (oCurrPlayer.currScore > 0) ? COLOR_RED : COLOR_GRAY;
                oCurrScoreNode.getComponent(cc.Label)
                    .string = strCurrScore;

                cc.find(`TranscriptArea/Player_${nIndex}_`, this.node).active = true;
            }
        }
    }
}
