// @import
import AudioMajordomo from "../../../../comm/script/AudioMajordomo";
import MahjongTableComp from "../table/MahjongTableComp";
import ModConfig from "../ModConfig.ver_MJ_weihai_";
import TextSpineAnimUtil from "../TextSpineAnimUtil";
import UserData from "../../../../bizdata/script/UserData";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 麻将补杠结果
 */
type MahjongBuGangResult = mod_MJ_weihai_Protocol.msg.MahjongBuGangResult;

/**
 * 麻将暗杠结果处理器
 */
export default class MahjongAnGangResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: MahjongBuGangResult): void {
        if (null == oResult || 
            null == oResult.mahjongBuGang) {
            return;
        }

        // 获取牌桌组件
        let oTableComp = cc.find("Canvas/MahjongTableArea").getComponentInChildren(MahjongTableComp);

        if (null == oTableComp) {
            return;
        }

        // 执行暗杠
        oTableComp.doMahjongBuGang(
            UserData.getMyData().getUserId(), 
            oResult.mahjongBuGang.tX, 
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
