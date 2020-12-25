// @import
import AudioMajordomo from "../../../../comm/script/AudioMajordomo";
import MahjongTableComp from "../table/MahjongTableComp";
import ModConfig from "../ModConfig.ver_MJ_weihai_";
import TextSpineAnimUtil from "../TextSpineAnimUtil";
import UserData from "../../../../bizdata/script/UserData";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 麻将碰牌结果
 */
type MahjongPengResult = mod_MJ_weihai_Protocol.msg.MahjongPengResult;

/**
 * 麻将碰牌结果处理器
 */
export default class MahjongPengResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: MahjongPengResult): void {
        if (null == oResult || 
            null == oResult.mahjongPeng) {
            return;
        }

        // 获取牌桌组件
        let oTableComp = cc.find("Canvas/MahjongTableArea").getComponentInChildren(MahjongTableComp);

        if (null == oTableComp) {
            return;
        }

        // 更新手牌
        oTableComp.doMahjongPeng(
            UserData.getMyData().getUserId(), 
            oResult.mahjongPeng.tX, 
            oResult.mahjongPeng.fromUserId,
        );

        // 播放碰牌动画
        TextSpineAnimUtil.showChiPengGangHuAnim(
            UserData.getMyData().getUserId(), 
            "Peng"
        );

        AudioMajordomo.getInstance().playVoice(
            ModConfig.BUNDLE_NAME,
            `res/1/audio/sex_${UserData.getMyData().getSafeSex()}_/Round_Peng_`
        );
    }
}
