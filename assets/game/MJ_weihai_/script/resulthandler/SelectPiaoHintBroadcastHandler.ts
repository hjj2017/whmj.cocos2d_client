// @import
import MJ_weihai_Scene from "../MJ_weihai_Scene";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 选飘提示广播
 */
type ISelectPiaoHintBroadcast = mod_MJ_weihai_Protocol.msg.ISelectPiaoHintBroadcast;

/**
 * 开局广播处理器
 */
export default class SelectPiaoHintBroadcastHandler {
    /**
     * 处理结果
     * 
     * @param oBroadcast 广播对象
     */
    static handle(oBroadcast: ISelectPiaoHintBroadcast): void {
        if (null == oBroadcast) {
            return;
        }

        cc.log(`定飘, buPiao = ${oBroadcast.buPiao}, piao1 = ${oBroadcast.piao1}, piao2 = ${oBroadcast.piao2}, piao3 = ${oBroadcast.piao3}, piao4 = ${oBroadcast.piao4}`);

        // 隐藏解散和邀请
        cc.find("Canvas/Script")
            .getComponent(MJ_weihai_Scene)
            .showSelectPiaoHint()
            .hideInvite();
    }
}
