// @import
import MahjongTableComp from "../table/MahjongTableComp";
import PrefabXFactory from "../../../../comm/script/PrefabXFactory";
import { mod_chatServerProtocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 发送表情广播
 */
type ISendEmojiBroadcast = mod_chatServerProtocol.msg.ISendEmojiBroadcast;

/**
 * 发送快速消息广播处理器
 */
export default class SendQuickMsgBroadcastHandler {
    /**
     * 处理结果
     * 
     * @param oBroadcast 广播对象
     */
    static handle(oBroadcast: ISendEmojiBroadcast): void {
        if (null == oBroadcast) {
            return;
        }

        PrefabXFactory.useSpecifyFactoryCreate("chat", "chat.EmojiPopoFactory", (oPopoNode) => {
            if (null == oPopoNode) {
                return;
            }

            let oThatComp = cc.find("Canvas/MahjongTableArea")
                .getComponentInChildren(MahjongTableComp);

            if (null == oThatComp) {
                return;
            }

            // 获取当前玩家
            let oCurrPlayer = oThatComp._oPlayerDataMap[oBroadcast.fromUserId];

            if (null == oCurrPlayer) {
                return;
            }

            let nSeatIndexAtClient = oThatComp._oMahjongSeatIndexer.getSeatIndexAtClient(
                oCurrPlayer.seatIndexAtServer
            );

            cc.find(`Seat_${nSeatIndexAtClient}_/EmojiPos`, oThatComp.node).addChild(oPopoNode);

            oPopoNode.getComponent("chat.EmojiPopoComp")
                .putEmojiId(oBroadcast.emojiId)
                .renewDisplay();
        });
    }
}
