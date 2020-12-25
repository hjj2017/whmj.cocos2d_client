// @import
import MahjongTableComp from "../table/MahjongTableComp";
import MJ_weihai_Scene from "../MJ_weihai_Scene";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 牌局已开始广播
 */
type ReoundStartedBroadcast = mod_MJ_weihai_Protocol.msg.RoundStartedBroadcast;

/**
 * 开局广播处理器
 */
export default class RoundStartedBroadcastHandler {
    /**
     * 处理结果
     * 
     * @param oBroadcast 广播对象
     */
    static handle(oBroadcast: ReoundStartedBroadcast): void {
        if (null == oBroadcast) {
            return;
        }

        cc.log(`开局, currRoundIndex = ${oBroadcast.currRoundIndex}, zhuangJiaUserId = ${oBroadcast.zhuangJiaUserId}`);

        // 获取牌桌组件
        let oTableComp = cc.find("Canvas/MahjongTableArea").getComponentInChildren(MahjongTableComp);

        if (null == oTableComp) {
            cc.error(`未找到牌桌组件`);
            return;
        }

        oTableComp.putZhuangJiaFlag(oBroadcast.zhuangJiaUserId);

        // 隐藏解散和邀请
        cc.find("Canvas/Script").getComponent(MJ_weihai_Scene)
            .putCurrRoundIndex(oBroadcast.currRoundIndex)
            .hideInvite();
    }
}
