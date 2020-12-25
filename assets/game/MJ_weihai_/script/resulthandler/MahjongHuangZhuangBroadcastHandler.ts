// @import
import TextSpineAnimUtil from "../TextSpineAnimUtil";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 麻将麻将荒庄广播
 */
type MahjongHuangZhuangBroadcast = mod_MJ_weihai_Protocol.msg.MahjongHuangZhuangBroadcast

/**
 * 麻将麻将荒庄广播处理器
 */
export default class MahjongHuBroadcastHandler {
    /**
     * 处理结果
     * 
     * @param oBroadcast 广播对象
     */
    static handle(oBroadcast: MahjongHuangZhuangBroadcast): void {
        if (null == oBroadcast) {
            return;
        }

        cc.log("麻将荒庄");

        // 播放荒庄动画
        TextSpineAnimUtil.showHuangZhuang();
    }
}
