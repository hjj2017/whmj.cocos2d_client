// @import
import MahjongTableComp from "../table/MahjongTableComp";
import UserData from "../../../../bizdata/script/UserData";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 麻将摸牌广播
 */
type MahjongMoPaiBroadcast = mod_MJ_weihai_Protocol.msg.MahjongMoPaiBroadcast;

/**
 * 麻将摸牌广播处理器
 */
export default class MahjongMoPaiBroadcastHandler {
    /**
     * 处理结果
     * 
     * @param oBroadcast 广播对象
     */
    static handle(oBroadcast: MahjongMoPaiBroadcast): void {
        if (null == oBroadcast) {
            return;
        }

        if (oBroadcast.userId == UserData.getMyData().getUserId()) {
            // 如果是广播给自己,
            // 直接忽略...
            return;
        }

        cc.log(`其他玩家摸到一张牌, userId = ${oBroadcast.userId}, t = ${oBroadcast.t}`);

        // 获取牌桌组件
        let oTableComp = cc.find("Canvas/MahjongTableArea").getComponentInChildren(MahjongTableComp);

        if (null != oTableComp) {
            // 更新手牌
            oTableComp.updateMahjongMoPai(
                oBroadcast.userId, oBroadcast.t
            );
        }
    }
}
