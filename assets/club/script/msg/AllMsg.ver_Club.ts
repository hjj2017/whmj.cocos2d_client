// @import
import mod_clubServerProtocol = require("./mod_clubServerProtocol");
import { mod_commProtocol } from "../../../comm/script/msg/comm.AllMsg";

// 设置消息定义
if (null == mod_clubServerProtocol["msgCodeDef"]) {
    mod_clubServerProtocol["msgCodeDef"] = mod_clubServerProtocol.msg.ClubServerMsgCodeDef;
}

// @export
export { 
    mod_commProtocol,
    mod_clubServerProtocol,
};
