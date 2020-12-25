// @import
import MahjongTableComp from "../table/MahjongTableComp";
import UserData from "../../../../bizdata/script/UserData";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 定飘广播
 */
type IDingPiaoBroadcast = mod_MJ_weihai_Protocol.msg.IDingPiaoBroadcast;

/**
 * 定飘广播处理器
 */
export default class PrepareBroadcastHandler {
    /**
     * 处理结果
     * 
     * @param oBroadcast 广播对象
     */
    static handle(oBroadcast: IDingPiaoBroadcast): void {
        if (null == oBroadcast) {
            return;
        }

        if (oBroadcast.userId == UserData.getMyData().getUserId()) {
            // 如果是广播给自己,
            // 直接忽略...
            return;
        }

        cc.log(`其他玩家已定飘, userId = ${oBroadcast.userId}, piaoX = ${oBroadcast.piaoX}, ok = ${oBroadcast.ok}`);

        // 获取牌桌组件
        let oTableComp = cc.find("Canvas/MahjongTableArea").getComponentInChildren(MahjongTableComp);

        if (null == oTableComp) {
            cc.error(`未找到牌桌组件`);
            return;
        }

        oTableComp.putPiaoX(oBroadcast.userId, oBroadcast.piaoX);
    }
}
