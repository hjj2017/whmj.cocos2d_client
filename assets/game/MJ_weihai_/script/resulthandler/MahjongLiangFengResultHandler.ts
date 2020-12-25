// @import
import MahjongTableComp from "../table/MahjongTableComp";
import MahjongTileDef from "../MahjongTileDef";
import TextSpineAnimUtil from "../TextSpineAnimUtil";
import UserData from "../../../../bizdata/script/UserData";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 麻将亮风结果
 */
type MahjongLiangFengResult = mod_MJ_weihai_Protocol.msg.MahjongLiangFengResult;

/**
 * 麻将亮风结果处理器
 */
export default class MahjongLiangFengResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: MahjongLiangFengResult): void {
        if (null == oResult || 
            null == oResult.mahjongLiangFeng) {
            return;
        }

        cc.log("我要亮风");

        // 获取牌桌组件
        let oTableComp = cc.find("Canvas/MahjongTableArea").getComponentInChildren(MahjongTableComp);

        if (null == oTableComp) {
            return;
        }

        // 获取麻将亮风
        let oMahjongLiangFeng = oResult.mahjongLiangFeng;
        let oCounterMap = {};
        oCounterMap[MahjongTileDef.DONG_FENG]  = oMahjongLiangFeng.numOfDongFeng;
        oCounterMap[MahjongTileDef.NAN_FENG]   = oMahjongLiangFeng.numOfNanFeng;
        oCounterMap[MahjongTileDef.XI_FENG]    = oMahjongLiangFeng.numOfXiFeng;
        oCounterMap[MahjongTileDef.BEI_FENG]   = oMahjongLiangFeng.numOfBeiFeng;
        oCounterMap[MahjongTileDef.HONG_ZHONG] = oMahjongLiangFeng.numOfHongZhong;
        oCounterMap[MahjongTileDef.FA_CAI]     = oMahjongLiangFeng.numOfFaCai;
        oCounterMap[MahjongTileDef.BAI_BAN]    = oMahjongLiangFeng.numOfBaiBan;

        // 更新麻将亮风
        oTableComp.doUpdateMahjongLiangFeng(
            UserData.getMyData().getUserId(), 
            oMahjongLiangFeng.kind,
            oCounterMap
        );

        // 播放亮风动画
        TextSpineAnimUtil.showChiPengGangHuAnim(
            UserData.getMyData().getUserId(), 
            "LiangFeng"
        );
    }
}
