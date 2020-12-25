// @import
import AudioMajordomo from "../../../../comm/script/AudioMajordomo";
import MahjongTableComp from "../table/MahjongTableComp";
import ModConfig from "../ModConfig.ver_MJ_weihai_";
import TextSpineAnimUtil from "../TextSpineAnimUtil";
import UserData from "../../../../bizdata/script/UserData";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 麻将吃牌广播
 */
type MahjongChiBroadcast = mod_MJ_weihai_Protocol.msg.MahjongChiBroadcast;

/**
 * 麻将吃牌广播处理器
 */
export default class MahjongChiResultHandler {
    /**
     * 处理结果
     * 
     * @param oBroadcast 广播对象
     */
    static handle(oBroadcast: MahjongChiBroadcast): void {
        if (null == oBroadcast || 
            null == oBroadcast.mahjongChi) {
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

        // 更新手牌
        oTableComp.doMahjongChi(
            oBroadcast.userId, 
            oBroadcast.mahjongChi.tX, 
            oBroadcast.mahjongChi.t0, 
            oBroadcast.mahjongChi.t1, 
            oBroadcast.mahjongChi.t2, 
            oBroadcast.mahjongChi.fromUserId,
        );

        // 播放吃牌动画
        TextSpineAnimUtil.showChiPengGangHuAnim(
            oBroadcast.userId, 
            "Chi"
        );

        let oUserData = UserData.getByUserId(oBroadcast.userId);

        if (null != oUserData) {
            let nSex = oUserData.getSafeSex();

            AudioMajordomo.getInstance().playVoice(
                ModConfig.BUNDLE_NAME,
                `res/1/audio/sex_${nSex}_/Round_Chi_`
            );
        }
    }
}
