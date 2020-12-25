// @import
import AudioMajordomo from "../../../../comm/script/AudioMajordomo";
import MahjongTableComp from "../table/MahjongTableComp";
import ModConfig from "../ModConfig.ver_MJ_weihai_";
import UserData from "../../../../bizdata/script/UserData";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 麻将出牌结果
 */
type MahjongChuPaiResult = mod_MJ_weihai_Protocol.msg.MahjongChuPaiResult;

/**
 * 麻将手牌变化结果处理器
 */
export default class MahjongChuPaiResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: MahjongChuPaiResult): void {
        if (null == oResult) {
            return;
        }

        cc.log(`我自己出牌, mahjongChuPai = ${oResult.t}`);

        // 获取牌桌组件
        let oTableComp = cc.find("Canvas/MahjongTableArea").getComponentInChildren(MahjongTableComp);

        if (null == oTableComp) {
            return;
        }

        // 更新手牌
        oTableComp.doMahjongChuPai(
            UserData.getMyData().getUserId(), 
            oResult.t
        );

        AudioMajordomo.getInstance().playSound(
            ModConfig.BUNDLE_NAME, 
            `res/1/audio/ChuPai`
        );

        AudioMajordomo.getInstance().playVoice(
            ModConfig.BUNDLE_NAME,
            `res/1/audio/sex_${UserData.getMyData().getSafeSex()}_/MahjongVal_${oResult.t}_`
        );
    }
}
