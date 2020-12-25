// @import
import RecordListWndComp from "../subview/rcd7.RecordListWndComp";
import { mod_recordServerProtocol } from "../msg/rcd7.AllMsg";

/**
 * 创建房间结果
 */
type GetRecordListResult = mod_recordServerProtocol.msg.GetRecordListResult;

/**
 * 获取战绩列表结果处理器
 */
export default class GetRecordListResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: GetRecordListResult): void {
        if (null == oResult) {
            return;
        }

        let oRecordArray = oResult.recordz;

        if (null != oRecordArray) {
            for (let nIndex = 0; nIndex < oRecordArray.length; nIndex++) {
                // 获取当前战绩
                let oCurrRecord = oRecordArray[nIndex];

                if (null != oCurrRecord) {
                    oCurrRecord["playerArray"] = oCurrRecord.player;
                }
            }
        }

        cc.find("Canvas/SubViewPlaceHolder").getComponentInChildren(RecordListWndComp)
            .putPageIndex(oResult.pageIndex)
            .putTotalCount(oResult.totalCount)
            .putRecordArray(oResult.recordz)
            .renewDisplay();
    }
}
