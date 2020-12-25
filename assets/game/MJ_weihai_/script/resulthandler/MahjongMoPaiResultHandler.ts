// @import
import MahjongTableComp from "../table/MahjongTableComp";
import UserData from "../../../../bizdata/script/UserData";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 麻将摸牌结果
 */
type MahjongMoPaiResult = mod_MJ_weihai_Protocol.msg.MahjongMoPaiResult;

/**
 * 麻将摸牌结果处理器
 */
export default class MahjongMoPaiResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: MahjongMoPaiResult): void {
        if (null == oResult) {
            return;
        }

        cc.log(`我自己摸到一张牌, t = ${oResult.t}`);

        // 获取牌桌组件
        let oTableComp = cc.find("Canvas/MahjongTableArea").getComponentInChildren(MahjongTableComp);

        if (null != oTableComp) {
            // 更新手牌
            oTableComp.updateMahjongMoPai(
                UserData.getMyData().getUserId(), 
                oResult.t
            );
        }
    }
}
