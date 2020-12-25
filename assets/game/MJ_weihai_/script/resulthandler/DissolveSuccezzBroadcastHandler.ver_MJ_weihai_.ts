// @import
import CachedData from "../../../../bizdata/script/CachedData";
import CachingKeyDef from "../../../../bizdata/script/CachingKeyDef";
import ResKeyDef from "../../../../comm/script/ResKeyDef";
import RoomSettlementBroadcastHandler from "./RoomSettlementBroadcastHandler";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 解散成功广播
 */
type DissolveSuccezzBroadcast = mod_MJ_weihai_Protocol.msg.DissolveSuccezzBroadcast;

/**
 * 解散房间广播处理器
 */
export default class DissolveTheRoomBroadcastHandler {
    /**
     * 处理结果
     * 
     * @param oBroadcast 广播对象
     */
    static handle(oBroadcast: DissolveSuccezzBroadcast): void {
        if (null == oBroadcast) {
            return;
        }

        setTimeout(() => {
            // 如果所有人都同意解散,
            // 
            if (RoomSettlementBroadcastHandler.hasData()) {
                // 如果有房间结算数据,
                RoomSettlementBroadcastHandler.openWnd();
                return;
            }

            CachedData.getInstance().remove(CachingKeyDef.CACHED_ROOM);
            // 返回大厅
            cc.director.loadScene(ResKeyDef.SCENE_HALL);
        }, 2000);
    }
}
