// @import
import AudioMajordomo from "../../../../comm/script/AudioMajordomo";
import ModConfig from "../ModConfig.ver_MJ_weihai_";
import TextSpineAnimUtil from "../TextSpineAnimUtil";
import UserData from "../../../../bizdata/script/UserData";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 麻将胡或者自摸结果
 */
type MahjongHuOrZiMoResult = mod_MJ_weihai_Protocol.msg.MahjongHuOrZiMoResult;

/**
 * 麻将胡或者自摸结果处理器
 */
export default class MahjongHuOrZiMoResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: MahjongHuOrZiMoResult): void {
        if (null == oResult) {
            return;
        }

        cc.log(`我胡牌了, t = ${oResult.t}, huPattern = ${JSON.stringify(oResult.huPattern)}`);

        if (oResult.hu) {
            // 播放胡动画
            TextSpineAnimUtil.showChiPengGangHuAnim(
                UserData.getMyData().getUserId(), 
                "Hu",
                -1 // 一直显示
            );

            AudioMajordomo.getInstance().playVoice(
                ModConfig.BUNDLE_NAME,
                `res/1/audio/sex_${UserData.getMyData().getSafeSex()}_/Round_Hu_`
            );
        } else if (oResult.ziMo) {
            // 播放胡牌动画
            TextSpineAnimUtil.showChiPengGangHuAnim(
                UserData.getMyData().getUserId(), 
                "ZiMo",
                -1 // 一直显示
            );

            AudioMajordomo.getInstance().playVoice(
                ModConfig.BUNDLE_NAME,
                `res/1/audio/sex_${UserData.getMyData().getSafeSex()}_/Round_ZiMo_`
            );
        }
    }
}
