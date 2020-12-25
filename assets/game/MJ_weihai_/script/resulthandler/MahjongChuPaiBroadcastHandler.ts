// @import
import AudioMajordomo from "../../../../comm/script/AudioMajordomo";
import MahjongTableComp from "../table/MahjongTableComp";
import ModConfig from "../ModConfig.ver_MJ_weihai_";
import UserData from "../../../../bizdata/script/UserData";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 麻将出牌广播
 */
type MahjongChuPaiBroadcast = mod_MJ_weihai_Protocol.msg.MahjongChuPaiBroadcast;

/**
 * 麻将出牌广播处理器
 */
export default class MahjongChuPaiBroadcastHandler {
    /**
     * 处理结果
     * 
     * @param oBroadcast 广播对象
     */
    static handle(oBroadcast: MahjongChuPaiBroadcast): void {
        if (null == oBroadcast) {
            return;
        }

        if (oBroadcast.userId == UserData.getMyData().getUserId()) {
            // 如果是广播给自己,
            // 直接忽略...
            return;
        }

        cc.log(`其他玩家出牌, userId = ${oBroadcast.userId}, mahjongChuPai = ${oBroadcast.t}`);

        // 获取牌桌组件
        let oTableComp = cc.find("Canvas/MahjongTableArea").getComponentInChildren(MahjongTableComp);

        if (null == oTableComp) {
            return;
        }

        // 更新手牌
        oTableComp.doMahjongChuPai(
            oBroadcast.userId, oBroadcast.t
        );

        AudioMajordomo.getInstance().playSound(
            ModConfig.BUNDLE_NAME, 
            `res/1/audio/ChuPai`
        );

        let oUserData = UserData.getByUserId(oBroadcast.userId);

        if (null != oUserData) {
            let nSex = oUserData.getSafeSex();

            AudioMajordomo.getInstance().playVoice(
                ModConfig.BUNDLE_NAME,
                `res/1/audio/sex_${nSex}_/MahjongVal_${oBroadcast.t}_`
            );
        }
    }
}
