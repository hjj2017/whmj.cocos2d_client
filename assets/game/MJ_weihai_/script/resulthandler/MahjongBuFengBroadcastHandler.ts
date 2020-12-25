// @import
import MahjongTableComp from "../table/MahjongTableComp";
import MahjongTileDef from "../MahjongTileDef";
import TextSpineAnimUtil from "../TextSpineAnimUtil";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 麻将补风广播
 */
type MahjongBuFengBroadcast = mod_MJ_weihai_Protocol.msg.MahjongBuFengBroadcast;

/**
 * 麻将补风广播处理器
 */
export default class MahjongBuFengBroadcastHandler {
    /**
     * 处理结果
     * 
     * @param oBroadcast 广播对象
     */
    static handle(oBroadcast: MahjongBuFengBroadcast): void {
        if (null == oBroadcast || 
            null == oBroadcast.mahjongLiangFeng) {
            return;
        }

        cc.log(`玩家补风, userId = ${oBroadcast.userId}`);

        // 获取牌桌组件
        let oTableComp = cc.find("Canvas/MahjongTableArea").getComponentInChildren(MahjongTableComp);

        if (null == oTableComp) {
            return;
        }

        // 获取麻将补风
        let oMahjongLiangFeng = oBroadcast.mahjongLiangFeng;
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
            oBroadcast.userId,
            oMahjongLiangFeng.kind,
            oCounterMap
        );

        // 播放亮风动画
        TextSpineAnimUtil.showChiPengGangHuAnim(
            oBroadcast.userId,
            "BuFeng"
        );
    }
}
