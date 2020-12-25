// @import
import AudioMajordomo from "../../../../comm/script/AudioMajordomo";
import MahjongTableComp from "../table/MahjongTableComp";
import ModConfig from "../ModConfig.ver_MJ_weihai_";
import TextSpineAnimUtil from "../TextSpineAnimUtil";
import UserData from "../../../../bizdata/script/UserData";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 麻将明杠结果
 */
type MahjongMingGangResult = mod_MJ_weihai_Protocol.msg.MahjongMingGangResult;

/**
 * 麻将杠牌结果处理器
 */
export default class MahjongMingGangResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: MahjongMingGangResult): void {
        if (null == oResult || 
            null == oResult.mahjongMingGang) {
            return;
        }

        // 获取牌桌组件
        let oTableComp = cc.find("Canvas/MahjongTableArea").getComponentInChildren(MahjongTableComp);

        if (null == oTableComp) {
            return;
        }

        // 更新手牌
        oTableComp.doMahjongMingGang(
            UserData.getMyData().getUserId(), 
            oResult.mahjongMingGang.tX, 
            oResult.mahjongMingGang.fromUserId,
        );

        // 播放杠牌动画
        TextSpineAnimUtil.showChiPengGangHuAnim(
            UserData.getMyData().getUserId(), 
            "Gang"
        );

        AudioMajordomo.getInstance().playVoice(
            ModConfig.BUNDLE_NAME,
            `res/1/audio/sex_${UserData.getMyData().getSafeSex()}_/Round_Gang_`
        );
    }
}
