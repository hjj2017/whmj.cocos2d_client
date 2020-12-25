// @import
import RecordDetailzDialogComp from "../subview/rcd7.RecordDetailzDialogComp";
import RecordDetailzDialogFactory from "../subview/rcd7.RecordDetailzDialogFactory";
import { mod_recordServerProtocol } from "../msg/rcd7.AllMsg";

/**
 * 获取战绩详情结果
 */
type GetRecordDetailzResult = mod_recordServerProtocol.msg.GetRecordDetailzResult;

/**
 * 获取战绩列表结果处理器
 */
export default class GetRecordDetailzResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: GetRecordDetailzResult): void {
        if (null == oResult) {
            return;
        }

        let oRoundArray = oResult.round;

        if (null != oRoundArray && 
            oRoundArray.length > 0) {
            for (let oCurrRound of oRoundArray) {
                if (null != oCurrRound) {
                    oCurrRound["playerArray"] = oCurrRound.player;
                }
            }
        }

        RecordDetailzDialogFactory.createAsync((oDialogNode) => {
            oDialogNode.getComponent(RecordDetailzDialogComp)
                .putRoomId(oResult.roomId)
                .putRoomUUId(oResult.roomUUId)
                .putGameType0(oResult.gameType0)
                .putGameType1(oResult.gameType1)
                .putActualRoundCount(oResult.actualRoundCount)
                .putCreateTime(oResult.createTime)
                .putRoundArray(oResult.round)
                .renewDisplay();

            cc.find("Canvas/SubViewPlaceHolder").addChild(oDialogNode);
        });
    }
}
