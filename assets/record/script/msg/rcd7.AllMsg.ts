// @import
import mod_recordServerProtocol = require("./mod_recordServerProtocol");
import { mod_commProtocol } from "../../../comm/script/msg/comm.AllMsg";

// 设置消息定义
if (null == mod_recordServerProtocol["msgCodeDef"]) {
    mod_recordServerProtocol["msgCodeDef"] = mod_recordServerProtocol.msg.RecordServerMsgCodeDef;
}

// @export
export { 
    mod_commProtocol,
    mod_recordServerProtocol,
};
