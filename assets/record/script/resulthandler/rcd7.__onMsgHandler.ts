// @import
import MsgBus from "../../../comm/script/MsgBus";
import RecordListWndComp from "../subview/rcd7.RecordListWndComp";
// @handler
import GetRecordDetailzResultHandler from "./rcd7.GetRecordDetailzResultHandler";
import GetRecordListResultHandler from "./rcd7.GetRecordListResultHandler";

// 消息处理器字典
let g_oMsgHandlerMap_record: { [strKey: string]: any, } = null;

/**
 * 获取消息处理器字典
 * 
 * @return 消息处理器字典
 */
function __getMsgHandlerMap(): { [strKey: string]: any, } {
    if (null != g_oMsgHandlerMap_record) {
         return g_oMsgHandlerMap_record;
    }

    let oMap = g_oMsgHandlerMap_record = {};
    oMap["GetRecordDetailzResult"] = GetRecordDetailzResultHandler;
    oMap["GetRecordListResult"] = GetRecordListResultHandler;

    return g_oMsgHandlerMap_record;
}

/**
 * 消息处理
 * 
 * @param SELF this 指针
 */
export function __onMsgHandler(SELF: RecordListWndComp): void {
    if (null == SELF) {
        return;
    }

    // 获取消息处理器字典
    const oMsgHandlerMap = __getMsgHandlerMap();

    // 设置消息处理函数
    MsgBus.getInstance().onMsgHandler = (strMsgClazzName, oMsgBody) => {
        if (null == strMsgClazzName || 
            null == oMsgBody) {
            return;
        }

        if (!(strMsgClazzName in oMsgHandlerMap)) {
            if (null != SELF._funOrigMsgHandler) {
                // 尝试用原函数来处理消息
                SELF._funOrigMsgHandler(strMsgClazzName, oMsgBody);
            }
            return;
        }

        oMsgHandlerMap[strMsgClazzName].handle(oMsgBody);
    }
}
