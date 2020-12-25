//#region @import
import MahjongTableComp from "../table/MahjongTableComp";
import PrefabXFactory from "../../../../comm/script/PrefabXFactory";
import { mod_chatServerProtocol } from "../msg/AllMsg.ver_MJ_weihai_";
//#endregion

/**
 * 发送表情结果
 */
type ISendEmojiResult = mod_chatServerProtocol.msg.ISendEmojiResult;

/**
 * 发送快速消息结果处理器
 */
export default class SendQuickMsgResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: ISendEmojiResult): void {
        if (null == oResult) {
            return;
        }

        PrefabXFactory.useSpecifyFactoryCreate("chat", "chat.EmojiPopoFactory", (oPopoNode) => {
            if (null == oPopoNode) {
                return;
            }

            let oThatComp = cc.find("Canvas/MahjongTableArea")
                .getComponentInChildren(MahjongTableComp);

            if (null == oThatComp) {
                cc.error("牌桌组件为空");
                return;
            }

            cc.find("Seat_0_/EmojiPos", oThatComp.node).addChild(oPopoNode);

            oPopoNode.getComponent("chat.EmojiPopoComp")
                .putEmojiId(oResult.emojiId)
                .renewDisplay();
        });
    }
}
