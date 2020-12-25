// @import
import MahjongTableComp from "../table/MahjongTableComp";
import MJ_weihai_Scene from "../MJ_weihai_Scene";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 重定向活动用户 Id 广播
 */
type RedirectActUserIdBroadcast = mod_MJ_weihai_Protocol.msg.RedirectActUserIdBroadcast;

/**
 * 准备广播处理器
 */
export default class RedirectActUserIdBroadcastHandler {
    /**
     * 处理结果
     * 
     * @param oBroadcast 广播对象
     */
    static handle(oBroadcast: RedirectActUserIdBroadcast): void {
        if (null == oBroadcast) {
            return;
        }

        // 设置当前牌局索引
        cc.find("Canvas/Script").getComponent(MJ_weihai_Scene)
            .putCurrRoundIndex(oBroadcast.currRoundIndex);

        // 获取牌桌组件
        let oTableComp = cc.find("Canvas/MahjongTableArea").getComponentInChildren(MahjongTableComp);

        if (null != oTableComp) {
            // 更新手牌
            oTableComp.redirectActUserId(
                oBroadcast.userId, 
                oBroadcast.currRoundIndex,
                oBroadcast.remainCardNum, 
                oBroadcast.remainTime
            );
        }
    }
}
