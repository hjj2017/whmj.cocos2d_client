// @import
import MahjongTableComp from "../table/MahjongTableComp";
import MahjongTileDef from "../MahjongTileDef";
import TextSpineAnimUtil from "../TextSpineAnimUtil";
import UserData from "../../../../bizdata/script/UserData";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 麻将补风结果
 */
type MahjongBuFengResult = mod_MJ_weihai_Protocol.msg.MahjongBuFengResult;

/**
 * 麻将补风结果处理器
 */
export default class MahjongBuFengResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: MahjongBuFengResult): void {
        if (null == oResult || 
            null == oResult.mahjongLiangFeng) {
            return;
        }

        cc.log("我要补风");

        // 获取牌桌组件
        let oTableComp = cc.find("Canvas/MahjongTableArea").getComponentInChildren(MahjongTableComp);

        if (null == oTableComp) {
            return;
        }

        // 获取麻将补风
        let oMahjongLiangFeng = oResult.mahjongLiangFeng;
        let oCounterMap = {};
        oCounterMap[MahjongTileDef.DONG_FENG]  = oMahjongLiangFeng.numOfDongFeng;
        oCounterMap[MahjongTileDef.NAN_FENG]   = oMahjongLiangFeng.numOfNanFeng;
        oCounterMap[MahjongTileDef.XI_FENG]    = oMahjongLiangFeng.numOfXiFeng;
        oCounterMap[MahjongTileDef.BEI_FENG]   = oMahjongLiangFeng.numOfBeiFeng;
        oCounterMap[MahjongTileDef.HONG_ZHONG] = oMahjongLiangFeng.numOfHongZhong;
        oCounterMap[MahjongTileDef.FA_CAI]     = oMahjongLiangFeng.numOfFaCai;
        oCounterMap[MahjongTileDef.BAI_BAN]    = oMahjongLiangFeng.numOfBaiBan;

        // 更新麻将补风
        oTableComp.doUpdateMahjongLiangFeng(
            UserData.getMyData().getUserId(), 
            oMahjongLiangFeng.kind,
            oCounterMap
        );

        // 播放亮风动画
        TextSpineAnimUtil.showChiPengGangHuAnim(
            UserData.getMyData().getUserId(), 
            "BuFeng"
        );
    }
}
