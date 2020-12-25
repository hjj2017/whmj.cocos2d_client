// @import
import mod_commProtocol = require("./mod_commProtocol");

// 设置消息定义
if (null == mod_commProtocol["msgCodeDef"]) {
    mod_commProtocol["msgCodeDef"] = mod_commProtocol.msg.CommMsgCodeDef;
}

// @export
export { 
    mod_commProtocol,
};
