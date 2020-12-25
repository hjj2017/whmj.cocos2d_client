// @import
import MahjongTableComp from "../table/MahjongTableComp";
import UserData from "../../../../bizdata/script/UserData";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 麻将手牌变化结果
 */
type MahjongInHandChangedResult = mod_MJ_weihai_Protocol.msg.MahjongInHandChangedResult;

/**
 * 麻将手牌变化结果处理器
 */
export default class MahjongInHandChangedResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: MahjongInHandChangedResult): void {
        if (null == oResult) {
            return;
        }

        cc.log(`我自己的麻将手牌发生变化, mahjongInHand = ${JSON.stringify(oResult.mahjongInHand)}, moPai = ${oResult.moPai}`);

        // 获取牌桌组件
        let oTableComp = cc.find("Canvas/MahjongTableArea").getComponentInChildren(MahjongTableComp);

        if (null != oTableComp) {
            // 更新手牌
            oTableComp.updateMahjongInHand(
                UserData.getMyData().getUserId(), 
                oResult.mahjongInHand, 
                oResult.moPai
            );
        }
    }
}
