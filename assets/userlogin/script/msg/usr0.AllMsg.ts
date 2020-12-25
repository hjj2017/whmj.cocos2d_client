// @import
import mod_passportServerProtocol = require("./mod_passportServerProtocol");
import { mod_commProtocol } from "../../../comm/script/msg/comm.AllMsg";

// 设置消息定义
if (null == mod_passportServerProtocol["msgCodeDef"]) {
    mod_passportServerProtocol["msgCodeDef"] = mod_passportServerProtocol.msg.PassportServerMsgCodeDef;
}

// @export
export { 
    mod_commProtocol,
    mod_passportServerProtocol,
};
