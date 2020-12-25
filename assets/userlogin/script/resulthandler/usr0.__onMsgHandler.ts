// @import
import MsgBus from "../../../comm/script/MsgBus";
// @handler
import CheckInTicketResultHandler from "./usr0.CheckInTicketResultHandler";
import UserLoginResultHandler from "./usr0.UserLoginResultHandler";
import UserLoginScene from "../usr0.UserLoginScene";

// 消息处理器字典
let g_oMsgHandlerMap_hall: { [strKey: string]: any, } = null;

/**
 * 获取消息处理器字典
 * 
 * @return 消息处理器字典
 */
function __getMsgHandlerMap(): { [strKey: string]: any, } {
    if (null != g_oMsgHandlerMap_hall) {
         return g_oMsgHandlerMap_hall;
    }

    let oMap = g_oMsgHandlerMap_hall = {};
    oMap["CheckInTicketResult"] = CheckInTicketResultHandler;
    oMap["UserLoginResult"] = UserLoginResultHandler;

    return oMap;
}

/**
 * 消息处理
 * 
 * @param SELF this 指针
 */
export function __onMsgHandler(SELF: UserLoginScene): void {
    if (null == SELF) {
        return;
    }

    // 设置消息处理函数
    MsgBus.getInstance().onMsgHandler = (strMsgClazzName, oMsgBody) => {
        if (null == strMsgClazzName || 
            null == oMsgBody) {
            return;
        }

        // 获取消息处理器字典
        const oMsgHandlerMap = __getMsgHandlerMap();

        if (!(strMsgClazzName in oMsgHandlerMap)) {
            cc.error(`无法处理的结果, resultClazzName = ${strMsgClazzName}`);
            return;
        }

        oMsgHandlerMap[strMsgClazzName].handle(oMsgBody);
    }
}
