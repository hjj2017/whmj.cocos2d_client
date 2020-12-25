// @import
import AudioMajordomo from "../../../../comm/script/AudioMajordomo";
import MahjongTableComp from "../table/MahjongTableComp";
import ModConfig from "../ModConfig.ver_MJ_weihai_";
import TextSpineAnimUtil from "../TextSpineAnimUtil";
import UserData from "../../../../bizdata/script/UserData";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 麻将吃牌结果
 */
type MahjongChiResult = mod_MJ_weihai_Protocol.msg.MahjongChiResult;

/**
 * 麻将吃牌结果处理器
 */
export default class MahjongChiResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: MahjongChiResult): void {
        if (null == oResult || 
            null == oResult.mahjongChi) {
            return;
        }

        // 获取牌桌组件
        let oTableComp = cc.find("Canvas/MahjongTableArea").getComponentInChildren(MahjongTableComp);

        if (null == oTableComp) {
            return;
        }

        // 更新手牌
        oTableComp.doMahjongChi(
            UserData.getMyData().getUserId(), 
            oResult.mahjongChi.tX, 
            oResult.mahjongChi.t0, 
            oResult.mahjongChi.t1, 
            oResult.mahjongChi.t2, 
            oResult.mahjongChi.fromUserId,
        );

        // 播放吃牌动画
        TextSpineAnimUtil.showChiPengGangHuAnim(
            UserData.getMyData().getUserId(), 
            "Chi"
        );

        AudioMajordomo.getInstance().playVoice(
            ModConfig.BUNDLE_NAME,
            `res/1/audio/sex_${UserData.getMyData().getSafeSex()}_/Round_Chi_`
        );
    }
}
