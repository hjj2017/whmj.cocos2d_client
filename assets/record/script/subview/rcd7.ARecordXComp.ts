// @import
import DateTimeUtil from "../../../comm/script/DateTimeUtil";
import HeadImgLoader from "../../../comm/script/HeadImgLoader";
import { ARecord } from "../TypeDef.ver_Record";

// @const
const { ccclass } = cc._decorator;
const COLOR_RED = new cc.Color(200, 64, 64);
const COLOR_GRAY = new cc.Color(128, 160, 128);

/**
 * 单条战绩组件
 */
@ccclass
export default class ARecordXComp extends cc.Component {
    /**
     * 单条战绩
     */
    _oRecord: ARecord = null;

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
     * 设置战绩
     * 
     * @param oVal 对象值
     */
    putRecord(oVal: ARecord): ARecordXComp {
        this._oRecord = oVal;
        return this;
    }

    /**
     * 刷显示
     */
    renewDisplay(): void {
        if (null == this._oRecord) {
            this.node.active = false;
        }

        cc.find("TitleArea/RoomId", this.node)
            .getComponent(cc.Label)
            .string = "房间号: " + this._oRecord.roomId.toString();

        let strT0 = DateTimeUtil.getMMddHHmmStr(this._oRecord.createTime);
        let strT1 = DateTimeUtil.getMMddHHmmStr(this._oRecord.overTime);

        cc.find("TitleArea/StartTimeAndEndTime", this.node)
            .getComponent(cc.Label)
            .string = `从 ${strT0} 到 ${strT1}`;

        // 获取玩家数组
        const oPlayerArray = this._oRecord.playerArray;

        let nMaxScore = 0;
        let nMaxScoreAtIndexArray = [];

        if (null != oPlayerArray && 
            oPlayerArray.length > 0) {
            for (let nIndex = 0; nIndex < 4 && nIndex < oPlayerArray.length; nIndex++) {
                // 获取当前玩家
                let oCurrPlayer = oPlayerArray[nIndex];

                if (null == oCurrPlayer) {
                    continue;
                }

                if (oCurrPlayer.totalScore > 0 &&
                    oCurrPlayer.totalScore > nMaxScore) {
                    nMaxScore = oCurrPlayer.totalScore;
                    nMaxScoreAtIndexArray.push(nIndex);
                }

                // 加载头像并显示
                HeadImgLoader.loadAndShow(
                    cc.find(`TranscriptArea/Player_${nIndex}_/HeadImgArea/HeadJPG`, this.node), 
                    oCurrPlayer.headImg
                );

                // 事先隐藏赢家标志, 后面再设置显示
                cc.find(`TranscriptArea/Player_${nIndex}_/HeadImgArea/WinnerFlag`, this.node).active = false;

                cc.find(`TranscriptArea/Player_${nIndex}_/UserName`, this.node)
                    .getComponent(cc.Label)
                    .string = oCurrPlayer.userName;

                const oTotalScoreNode = cc.find(`TranscriptArea/Player_${nIndex}_/TotalScore`, this.node);
                let strTotalScore = "";
                
                if (oCurrPlayer.totalScore > 0) {
                    strTotalScore = "+" + oCurrPlayer.totalScore;
                } else if (oCurrPlayer.totalScore < 0) { 
                    strTotalScore = oCurrPlayer.totalScore.toString();
                }
                
                oTotalScoreNode.color = (oCurrPlayer.totalScore > 0) ? COLOR_RED : COLOR_GRAY;
                oTotalScoreNode.getComponent(cc.Label)
                    .string = strTotalScore;

                cc.find(`TranscriptArea/Player_${nIndex}_`, this.node).active = true;
            }
        }

        if (nMaxScore > 0 && 
            nMaxScoreAtIndexArray.length > 0) {
            for (let nIndex of nMaxScoreAtIndexArray) {
                // 显示赢家标志
                cc.find(`TranscriptArea/Player_${nIndex}_/HeadImgArea/WinnerFlag`, this.node).active = true;
            }
        }
    }

    /**
     * 当点击详情按钮
     * 
     * @param strRoomUUId 房间 UUId
     */
    onClickedDetailz(strRoomUUId: string): void {
        if (null == strRoomUUId) {
            return;
        }
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 注册 UI 事件
 * 
 * @param SELF this 指针
 */
function __regUIEvent(SELF: ARecordXComp): void {
    if (null == SELF) {
        return;
    }

    // 点击详情
    cc.find("ButtonArea/Button_RecordDetailz_", SELF.node).on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            if ("function" == typeof(SELF.onClickedDetailz) && 
                null != SELF._oRecord) {
                SELF.onClickedDetailz(SELF._oRecord.roomUUId);
            }
        }
    );
}
