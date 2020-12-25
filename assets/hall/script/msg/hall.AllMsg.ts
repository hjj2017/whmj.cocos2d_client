// @import
import mod_hallServerProtocol = require("./mod_hallServerProtocol");
import { mod_commProtocol } from "../../../comm/script/msg/comm.AllMsg";

// 设置消息定义
if (null == mod_hallServerProtocol["msgCodeDef"]) {
    mod_hallServerProtocol["msgCodeDef"] = mod_hallServerProtocol.msg.HallServerMsgCodeDef;
}

// @export
export { 
    mod_commProtocol,
    mod_hallServerProtocol,
};
