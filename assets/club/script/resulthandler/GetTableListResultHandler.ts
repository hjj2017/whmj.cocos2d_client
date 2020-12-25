// @import
import AClubTableXComp from "../subview/AClubTableXComp";
import { mod_clubServerProtocol } from "../msg/AllMsg.ver_Club";

/**
 * 获取亲友圈牌桌列表结果
 */
type GetTableListResult = mod_clubServerProtocol.msg.GetTableListResult;

/**
 * 亲友圈牌桌
 */
type Table = mod_clubServerProtocol.msg.ITable;

/**
 * 获取牌桌详情结果处理器
 */
export default class GetTableListResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: GetTableListResult): void {
        if (null == oResult) {
            return;
        }

        // 获取组件数组
        let oThatCompArray = cc.find("Canvas/SubViewPlaceHolder").getComponentsInChildren(AClubTableXComp);

        if (null == oThatCompArray || 
            oThatCompArray.length <= 0) {
            // 如果没有找到组件数组,
            // 则很可能没有打开亲友圈详情界面
            return;
        }

        let oTableArray = oResult.table;
        let oTableMap: { [nTableSeqNum: number]: Table } = {};

        for (let oCurrTable of oTableArray) {
            if (null == oCurrTable) {
                continue;
            }

            oTableMap[oCurrTable.seqNum] = oCurrTable;
        }

        for (let oAClubTableXComp of oThatCompArray) {
            if (null == oAClubTableXComp) {
                continue;
            }

            let oCurrTable = oTableMap[oAClubTableXComp._nSeqNum];

            if (null == oCurrTable) {
                // 如果牌桌为空, 则清空所有数据
                oAClubTableXComp.putCurrTable(null)
                    .renewDisplay();
            }
            else {
                oCurrTable["ruleItemArray"] = oCurrTable.ruleItem;
                oCurrTable["playerArray"] = oCurrTable.player;

                // 设置牌桌并刷新显示
                oAClubTableXComp.putCurrTable(oCurrTable)
                    .renewDisplay();
            }
        }
    }
}
