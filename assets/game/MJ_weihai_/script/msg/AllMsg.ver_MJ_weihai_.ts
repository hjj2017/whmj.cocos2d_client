// @import
import mod_chatServerProtocol = require("./mod_chatServerProtocol");
import mod_MJ_weihai_Protocol = require("./mod_MJ_weihai_Protocol");
import { mod_commProtocol } from "../../../../comm/script/msg/comm.AllMsg";

// 设置消息定义
if (null == mod_MJ_weihai_Protocol["msgCodeDef"]) {
    mod_MJ_weihai_Protocol["msgCodeDef"] = mod_MJ_weihai_Protocol.msg.MJ_weihai_MsgCodeDef;
}

if (null == mod_chatServerProtocol["msgCodeDef"]) {
    mod_chatServerProtocol["msgCodeDef"] = mod_chatServerProtocol.msg.ChatServerMsgCodeDef;
}

// @export
export { 
    mod_commProtocol,
    mod_chatServerProtocol,
    mod_MJ_weihai_Protocol,
};
