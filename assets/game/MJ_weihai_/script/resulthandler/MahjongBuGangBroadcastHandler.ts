// @import
import AudioMajordomo from "../../../../comm/script/AudioMajordomo";
import MahjongTableComp from "../table/MahjongTableComp";
import ModConfig from "../ModConfig.ver_MJ_weihai_";
import TextSpineAnimUtil from "../TextSpineAnimUtil";
import UserData from "../../../../bizdata/script/UserData";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 麻将补杠广播
 */
type MahjongBuGangBroadcast = mod_MJ_weihai_Protocol.msg.MahjongBuGangBroadcast;

/**
 * 麻将补杠广播处理器
 */
export default class MahjongAnGangBroadcastHandler {
    /**
     * 处理广播
     * 
     * @param oBroadcast 广播对象
     */
    static handle(oBroadcast: MahjongBuGangBroadcast): void {
        if (null == oBroadcast || 
            null == oBroadcast.mahjongBuGang) {
            return;
        }

        if (oBroadcast.userId == UserData.getMyData().getUserId()) {
            // 如果是广播给自己,
            // 直接忽略...
            return;
        }

        // 获取牌桌组件
        let oTableComp = cc.find("Canvas/MahjongTableArea").getComponentInChildren(MahjongTableComp);

        if (null == oTableComp) {
            return;
        }

        // 执行暗杠
        oTableComp.doMahjongBuGang(
            oBroadcast.userId, 
            oBroadcast.mahjongBuGang.tX,
        );

        // 播放杠牌动画
        TextSpineAnimUtil.showChiPengGangHuAnim(
            oBroadcast.userId, 
            "Gang"
        );

        let oUserData = UserData.getByUserId(oBroadcast.userId);

        if (null != oUserData) {
            let nSex = oUserData.getSafeSex();

            AudioMajordomo.getInstance().playVoice(
                ModConfig.BUNDLE_NAME,
                `res/1/audio/sex_${nSex}_/Round_Gang_`
            );
        }
    }
}
