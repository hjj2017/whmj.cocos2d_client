//#region @import
import ClubScene from "../ClubScene";
import MsgBus from "../../../comm/script/MsgBus";
// @handler
import AClubTableChangedBroadcastHandler from "./AClubTableChangedBroadcastHandler";
import ApprovalToJoinResultHandler from "./ApprovalToJoinResultHandler";
import CreateClubResultHandler from "./CreateClubResultHandler";
import CreateTableResultHandler from "./CreateTableResultHandler";
import DismissAMemberResultHandler from "./DismissAMemberResultHandler";
import ExchangeRoomCardResultHandler from "./ExchangeRoomCardResultHandler";
import GetClubDetailzResultHandler from "./GetClubDetailzResultHandler";
import GetJoinedClubListResultHandler from "./GetJoinedClubListResultHandler";
import GetMemberInfoListResultHandler from "./GetMemberInfoListResultHandler";
import GetTableDetailzResultHandler from "./GetTableDetailzResultHandler";
import GetTableListResultHandler from "./GetTableListResultHandler";
import JoinClubResultHandler from "./JoinClubResultHandler";
import JoinTableResultHandler from "./JoinTableResultHandler";
import ModifyFixGameResultHandler from "./ModifyFixGameResultHandler";
import QuitClubResultHandler from "./QuitClubResultHandler";
//#endregion

// 消息处理器字典
let g_oMsgHandlerMap_club: { [strKey: string]: any, } = null;

/**
 * 获取消息处理器字典
 * 
 * @return 消息处理器字典
 */
function __getMsgHandlerMap(): { [strKey: string]: any, } {
    if (null != g_oMsgHandlerMap_club) {
         return g_oMsgHandlerMap_club;
    }

    let oMap = g_oMsgHandlerMap_club = {};
    oMap["AClubTableChangedBroadcast"] = AClubTableChangedBroadcastHandler;
    oMap["ApprovalToJoinResult"] = ApprovalToJoinResultHandler;
    oMap["CreateClubResult"] = CreateClubResultHandler;
    oMap["CreateTableResult"] = CreateTableResultHandler;
    oMap["DismissAMemberResult"] = DismissAMemberResultHandler;
    oMap["ExchangeRoomCardResult"] = ExchangeRoomCardResultHandler;
    oMap["GetClubDetailzResult"] = GetClubDetailzResultHandler;
    oMap["GetJoinedClubListResult"] = GetJoinedClubListResultHandler;
    oMap["GetMemberInfoListResult"] = GetMemberInfoListResultHandler;
    oMap["GetTableDetailzResult"] = GetTableDetailzResultHandler;
    oMap["GetTableListResult"] = GetTableListResultHandler;
    oMap["JoinClubResult"] = JoinClubResultHandler;
    oMap["JoinTableResult"] = JoinTableResultHandler;
    oMap["ModifyFixGameResult"] = ModifyFixGameResultHandler;
    oMap["QuitClubResult"] = QuitClubResultHandler;

    return oMap;
}

/**
 * 消息处理
 * 
 * @param SELF this 指针
 */
export function __onMsgHandler(SELF: ClubScene): void {
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
