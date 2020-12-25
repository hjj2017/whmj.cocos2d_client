// @import
import MahjongTableComp from "../table/MahjongTableComp";
import UserData from "../../../../bizdata/script/UserData";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 麻将亮倒结果
 */
type MahjongLiangDaoResult = mod_MJ_weihai_Protocol.msg.MahjongLiangDaoResult;

/**
 * 麻将亮倒结果处理器
 */
export default class MahjongMahjongLiangDaoResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: MahjongLiangDaoResult): void {
        if (null == oResult) {
            return;
        }

        cc.log(`我亮倒自己的麻将牌, mahjongInHand = ${JSON.stringify(oResult.mahjongInHand)}, moPai = ${oResult.moPai}`);

        // 获取牌桌组件
        let oTableComp = cc.find("Canvas/MahjongTableArea").getComponentInChildren(MahjongTableComp);

        if (null != oTableComp) {
            // 更新手牌
            oTableComp.updateMahjongInHand(
                UserData.getMyData().getUserId(), 
                oResult.mahjongInHand, 
                oResult.moPai, 
                1 // 躺倒 ( 正面朝上 )
            );
        }
    }
}
