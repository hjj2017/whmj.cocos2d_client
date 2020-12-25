// @import
import MahjongTableComp from "../table/MahjongTableComp";
import PrefabXFactory from "../../../../comm/script/PrefabXFactory";
import UserData from "../../../../bizdata/script/UserData";
import { mod_chatServerProtocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 发送快速消息结果
 */
type ISendQuickMsgResult = mod_chatServerProtocol.msg.ISendQuickMsgResult;

/**
 * 发送快速消息结果处理器
 */
export default class SendQuickMsgResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: ISendQuickMsgResult): void {
        if (null == oResult) {
            return;
        }

        PrefabXFactory.useSpecifyFactoryCreate("chat", "chat.QuickMsgPopoFactory", (oPopoNode) => {
            if (null == oPopoNode) {
                return;
            }

            let oThatComp = cc.find("Canvas/MahjongTableArea")
                .getComponentInChildren(MahjongTableComp);

            if (null == oThatComp) {
                cc.error("牌桌组件为空");
                return;
            }

            cc.find("Seat_0_/QuickMsgPos", oThatComp.node).addChild(oPopoNode);

            oPopoNode.getComponent("chat.QuickMsgPopoComp")
                .putMsgId(oResult.msgId)
                .putPlayerSex(UserData.getMyData().getSex())
                .renewDisplay();
        });
    }
}
