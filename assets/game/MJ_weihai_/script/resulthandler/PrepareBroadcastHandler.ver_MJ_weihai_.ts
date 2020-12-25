// @import
import UserData from "../../../../bizdata/script/UserData";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 准备广播
 */
type PrepareBroadcast = mod_MJ_weihai_Protocol.msg.PrepareBroadcast;

/**
 * 准备广播处理器
 */
export default class PrepareBroadcastHandler {
    /**
     * 处理结果
     * 
     * @param oBroadcast 广播对象
     */
    static handle(oBroadcast: PrepareBroadcast): void {
        if (null == oBroadcast) {
            return;
        }

        if (oBroadcast.userId == UserData.getMyData().getUserId()) {
            // 如果是广播给自己,
            // 直接忽略...
            return;
        }

        cc.log(`其他玩家已准备好, userId = ${oBroadcast.userId}`);
    }
}
