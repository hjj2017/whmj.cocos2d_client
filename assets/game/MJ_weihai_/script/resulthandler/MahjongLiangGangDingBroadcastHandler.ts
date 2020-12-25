// @import
import MahjongTableComp from "../table/MahjongTableComp";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 麻将亮杠腚广播
 */
type IMahjongLiangGangDingBroadcast = mod_MJ_weihai_Protocol.msg.IMahjongLiangGangDingBroadcast;

/**
 * 定飘广播处理器
 */
export default class MahjongLiangGangDingBroadcastHandler {
    /**
     * 处理结果
     * 
     * @param oBroadcast 广播对象
     */
    static handle(oBroadcast: IMahjongLiangGangDingBroadcast): void {
        if (null == oBroadcast) {
            return;
        }

        cc.log(`麻将亮杠腚, t0 = ${oBroadcast.t0}, t1 = ${oBroadcast.t1}`);

        // 获取牌桌组件
        let oTableComp = cc.find("Canvas/MahjongTableArea").getComponentInChildren(MahjongTableComp);

        if (null == oTableComp) {
            cc.error(`未找到牌桌组件`);
            return;
        }

        oTableComp.updateMahjongLiangGangDing(
            oBroadcast.t0, 
            oBroadcast.t1
        );
    }
}
