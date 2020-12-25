// @import
import AudioMajordomo from "../../../../comm/script/AudioMajordomo";
import ModConfig from "../ModConfig.ver_MJ_weihai_";
import TextSpineAnimUtil from "../TextSpineAnimUtil";
import UserData from "../../../../bizdata/script/UserData";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 麻将胡或者自摸广播
 */
type MahjongHuOrZiMoBroadcast = mod_MJ_weihai_Protocol.msg.MahjongHuOrZiMoBroadcast;

/**
 * 麻将胡牌广播处理器
 */
export default class MahjongHuOrZiMoBroadcastHandler {
    /**
     * 处理结果
     * 
     * @param oBroadcast 广播对象
     */
    static handle(oBroadcast: MahjongHuOrZiMoBroadcast): void {
        if (null == oBroadcast) {
            return;
        }

        if (oBroadcast.userId == UserData.getMyData().getUserId()) {
            // 如果是广播给自己,
            // 直接忽略...
            return;
        }

        cc.log(`其他玩家胡牌, userId = ${oBroadcast.userId}, t = ${oBroadcast.t}, huPattern = ${JSON.stringify(oBroadcast.huPattern)}`);

        // 获取用户数据
        let oUserData = UserData.getByUserId(oBroadcast.userId);

        if (null == oUserData) {
            return;
        }

        let nSex = oUserData.getSafeSex();

        if (oBroadcast.hu) {
            // 播放胡动画
            TextSpineAnimUtil.showChiPengGangHuAnim(
                oBroadcast.userId, 
                "Hu", 
                -1 // 一直显示
            );

            AudioMajordomo.getInstance().playVoice(
                ModConfig.BUNDLE_NAME,
                `res/1/audio/sex_${nSex}_/Round_Hu_`
            );
        } else if (oBroadcast.ziMo) {
            // 播放胡牌动画
            TextSpineAnimUtil.showChiPengGangHuAnim(
                oBroadcast.userId, 
                "ZiMo",
                -1 // 一直显示
            );

            AudioMajordomo.getInstance().playVoice(
                ModConfig.BUNDLE_NAME,
                `res/1/audio/sex_${nSex}_/Round_ZiMo_`
            );
        }
    }
}
