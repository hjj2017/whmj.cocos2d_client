// @import
import MahjongTableComp from "../table/MahjongTableComp";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 退出房间广播
 */
type IQuitRoomBroadcast = mod_MJ_weihai_Protocol.msg.IQuitRoomBroadcast;

/**
 * 退出房间广播处理器
 */
export default class QuitRoomBroadcastHandler {
    /**
     * 处理结果
     * 
     * @param oBroadcast 广播对象
     */
    static handle(oBroadcast: IQuitRoomBroadcast): void {
        if (null == oBroadcast) {
            return;
        }

        // 获取牌桌组件
        let oTableComp = cc.find("Canvas/MahjongTableArea").getComponentInChildren(MahjongTableComp);

        if (null != oTableComp) {
            oTableComp.removePlayerByUserId(
                oBroadcast.fromUserId
            );
        }
    }
}
