// @import
import MahjongTableComp from "../table/MahjongTableComp";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 踢出一个玩家广播
 */
type IFireAPlayerBroadcast = mod_MJ_weihai_Protocol.msg.IFireAPlayerBroadcast;

/**
 * 踢出一个玩家广播处理器
 */
export default class FireAPlayerBroadcastHandler {
    /**
     * 处理结果
     * 
     * @param oBroadcast 广播对象
     */
    static handle(oBroadcast: IFireAPlayerBroadcast): void {
        if (null == oBroadcast) {
            return;
        }

        // 获取牌桌组件
        let oTableComp = cc.find("Canvas/MahjongTableArea").getComponentInChildren(MahjongTableComp);

        if (null != oTableComp) {
            oTableComp.removePlayerByUserId(
                oBroadcast.targetUserId
            );
        }
    }
}
