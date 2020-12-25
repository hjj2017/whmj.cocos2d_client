// @import
import MahjongTableComp from "../table/MahjongTableComp";
import UserData from "../../../../bizdata/script/UserData";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 麻将手牌变化广播
 */
type MahjongInHandChangedBroadcast = mod_MJ_weihai_Protocol.msg.MahjongInHandChangedBroadcast;

/**
 * 麻将手牌变化广播处理器
 */
export default class MahjongInHandChangedBroadcastHandler {
    /**
     * 处理结果
     * 
     * @param oBroadcast 广播对象
     */
    static handle(oBroadcast: MahjongInHandChangedBroadcast): void {
        if (null == oBroadcast) {
            return;
        }

        if (oBroadcast.userId == UserData.getMyData().getUserId()) {
            // 如果是广播给自己,
            // 直接忽略...
            return;
        }

        cc.log(`其他玩家的麻将手牌发生变化, userId = ${oBroadcast.userId}, mahjongInHand = ${JSON.stringify(oBroadcast.mahjongInHand)}, moPai = ${oBroadcast.moPai}`);

        // 获取牌桌组件
        let oTableComp = cc.find("Canvas/MahjongTableArea").getComponentInChildren(MahjongTableComp);

        if (null != oTableComp) {
            // 更新手牌
            oTableComp.updateMahjongInHand(
                oBroadcast.userId, 
                oBroadcast.mahjongInHand, 
                oBroadcast.moPai
            );
        }
    }
}
