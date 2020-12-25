// @import
import AClubTableXComp from "../subview/AClubTableXComp";
import { mod_clubServerProtocol } from "../msg/AllMsg.ver_Club";

/**
 * 获取亲友圈牌桌详情结果
 */
type GetTableDetailzResult = mod_clubServerProtocol.msg.GetTableDetailzResult;

/**
 * 获取牌桌详情结果处理器
 */
export default class GetTableDetailzResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: GetTableDetailzResult): void {
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

        for (let oAClubTableXComp of oThatCompArray) {
            if (null == oAClubTableXComp || 
                oAClubTableXComp._nSeqNum != oResult.seqNum) {
                continue;
            }

            if (null == oResult.table) {
                // 如果牌桌为空, 则清空所有数据
                oAClubTableXComp.putCurrTable(null)
                    .renewDisplay();
            }
            else {
                oResult.table["ruleItemArray"] = oResult.table.ruleItem;
                oResult.table["playerArray"] = oResult.table.player;

                // 设置牌桌并刷新显示
                oAClubTableXComp.putCurrTable(oResult.table)
                    .renewDisplay();
            }
        }
    }
}
