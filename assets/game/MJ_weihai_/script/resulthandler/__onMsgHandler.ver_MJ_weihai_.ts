//#region @import
import MJ_weihai_Scene from "../MJ_weihai_Scene";
import MsgBus from "../../../../comm/script/MsgBus";
// @handler
import DingPiaoBroadcastHandler from "./DingPiaoBroadcastHandler";
import DingPiaoResultHandler from "./DingPiaoResultHandler";
import DissolutionVoteBroadcastHandler from "./DissolutionVoteBroadcastHandler.ver_MJ_weihai_";
import DissolveTheRoomBroadcastHandler from "./DissolveTheRoomBroadcastHandler.ver_MJ_weihai_";
import DissolveSuccezzBroadcastHandler from "./DissolveSuccezzBroadcastHandler.ver_MJ_weihai_";
import JoinRoomBroadcastHandler from "./JoinRoomBroadcastHandler.ver_MJ_weihai_";
import FireAPlayerBroadcastHandler from "./FireAPlayerBroadcastHandler";
import FireAPlayerResultHandler from "./FireAPlayerResultHandler";
import MahjongAnGangBroadcastHandler from "./MahjongAnGangBroadcastHandler";
import MahjongAnGangResultHandler from "./MahjongAnGangResultHandler";
import MahjongBuFengBroadcastHandler from "./MahjongBuFengBroadcastHandler";
import MahjongBuFengResultHandler from "./MahjongBuFengResultHandler";
import MahjongBuGangBroadcastHandler from "./MahjongBuGangBroadcastHandler";
import MahjongBuGangResultHandler from "./MahjongBuGangResultHandler";
import MahjongChiBroadcastHandler from "./MahjongChiBroadcastHandler";
import MahjongChiPengGangHuOpHintResultHandler from "./MahjongChiPengGangHuOpHintResultHandler";
import MahjongChiResultHandler from "./MahjongChiResultHandler";
import MahjongChuPaiBroadcastHandler from "./MahjongChuPaiBroadcastHandler";
import MahjongChuPaiResultHandler from "./MahjongChuPaiResultHandler";
import MahjongHuangZhuangBroadcastHandler from "./MahjongHuangZhuangBroadcastHandler";
import MahjongHuOrZiMoBroadcastHandler from "./MahjongHuOrZiMoBroadcastHandler";
import MahjongHuOrZiMoResultHandler from "./MahjongHuOrZiMoResultHandler";
import MahjongInHandChangedBroadcastHandler from "./MahjongInHandChangedBroadcastHandler";
import MahjongInHandChangedResultHandler from "./MahjongInHandChangedResultHandler";
import MahjongLiangDaoBroadcastHandler from "./MahjongLiangDaoBroadcastHandler";
import MahjongLiangDaoResultHandler from "./MahjongLiangDaoResultHandler";
import MahjongLiangFengBroadcastHandler from "./MahjongLiangFengBroadcastHandler";
import MahjongLiangFengResultHandler from "./MahjongLiangFengResultHandler";
import MahjongLiangGangDingBroadcastHandler from "./MahjongLiangGangDingBroadcastHandler";
import MahjongMingGangBroadcastHandler from "./MahjongMingGangBroadcastHandler";
import MahjongMingGangResultHandler from "./MahjongMingGangResultHandler";
import MahjongMoPaiBroadcastHandler from "./MahjongMoPaiBroadcastHandler";
import MahjongMoPaiResultHandler from "./MahjongMoPaiResultHandler";
import MahjongPengBroadcastHandler from "./MahjongPengBroadcastHandler";
import MahjongPengResultHandler from "./MahjongPengResultHandler";
import MeasureGeoDistanceResultHandler from "./MeasureGeoDistanceResultHandler.ver_MJ_weihai_";
import PrepareBroadcastHandler from "./PrepareBroadcastHandler.ver_MJ_weihai_";
import PrepareResultHandler from "./PrepareResultHandler.ver_MJ_weihai_";
import QuitRoomBroadcastHandler from "./QuitRoomBroadcastHandler";
import QuitRoomResultHandler from "./QuitRoomResultHandler";
import ReconnResultHandler from "./mwh0.ReconnResultHandler";
import RedirectActUserIdBroadcastHandler from "./RedirectActUserIdBroadcastHandler";
import RoomSettlementBroadcastHandler from "./RoomSettlementBroadcastHandler";
import RoundSettlementBroadcastHandler from "./RoundSettlementBroadcastHandler";
import RoundStartedBroadcastHandler from "./RoundStartedBroadcastHandler";
import SelectPiaoHintBroadcastHandler from "./SelectPiaoHintBroadcastHandler";
import SendEmojiResultHandler from "./SendEmojiResultHandler.ver_MJ_weihai_";
import SendEmojiBroadcastHandler from "./SendEmojiBroadcastHandler.ver_MJ_weihai_";
import SendQuickMsgResultHandler from "./SendQuickMsgResultHandler.ver_MJ_weihai_";
import SendQuickMsgBroadcastHandler from "./SendQuickMsgBroadcastHandler.ver_MJ_weihai_";
import SyncRoomDataResultHandler from "./SyncRoomDataResultHandler";
//#endregion

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
    oMap["DingPiaoBroadcast"] = DingPiaoBroadcastHandler;
    oMap["DingPiaoResult"] = DingPiaoResultHandler;
    oMap["DissolutionVoteBroadcast"] = DissolutionVoteBroadcastHandler;
    oMap["DissolveTheRoomBroadcast"] = DissolveTheRoomBroadcastHandler;
    oMap["DissolveSuccezzBroadcast"] = DissolveSuccezzBroadcastHandler;
    oMap["FireAPlayerBroadcast"] = FireAPlayerBroadcastHandler;
    oMap["FireAPlayerResult"] = FireAPlayerResultHandler;
    oMap["JoinRoomBroadcast"] = JoinRoomBroadcastHandler;
    oMap["MahjongAnGangBroadcast"] = MahjongAnGangBroadcastHandler;
    oMap["MahjongAnGangResult"] = MahjongAnGangResultHandler;
    oMap["MahjongBuFengBroadcast"] = MahjongBuFengBroadcastHandler;
    oMap["MahjongBuFengResult"] = MahjongBuFengResultHandler;
    oMap["MahjongBuGangBroadcast"] = MahjongBuGangBroadcastHandler;
    oMap["MahjongBuGangResult"] = MahjongBuGangResultHandler;
    oMap["MahjongChiBroadcast"] = MahjongChiBroadcastHandler;
    oMap["MahjongChiPengGangHuOpHintResult"] = MahjongChiPengGangHuOpHintResultHandler;
    oMap["MahjongChiResult"] = MahjongChiResultHandler;
    oMap["MahjongChuPaiBroadcast"] = MahjongChuPaiBroadcastHandler;
    oMap["MahjongChuPaiResult"] = MahjongChuPaiResultHandler;
    oMap["MahjongHuangZhuangBroadcast"] = MahjongHuangZhuangBroadcastHandler;
    oMap["MahjongHuOrZiMoBroadcast"] = MahjongHuOrZiMoBroadcastHandler;
    oMap["MahjongHuOrZiMoResult"] = MahjongHuOrZiMoResultHandler;
    oMap["MahjongInHandChangedBroadcast"] = MahjongInHandChangedBroadcastHandler;
    oMap["MahjongInHandChangedResult"] = MahjongInHandChangedResultHandler;
    oMap["MahjongLiangDaoBroadcast"] = MahjongLiangDaoBroadcastHandler;
    oMap["MahjongLiangDaoResult"] = MahjongLiangDaoResultHandler;
    oMap["MahjongLiangFengBroadcast"] = MahjongLiangFengBroadcastHandler;
    oMap["MahjongLiangFengResult"] = MahjongLiangFengResultHandler;
    oMap["MahjongLiangGangDingBroadcast"] = MahjongLiangGangDingBroadcastHandler;
    oMap["MahjongMingGangBroadcast"] = MahjongMingGangBroadcastHandler;
    oMap["MahjongMingGangResult"] = MahjongMingGangResultHandler;
    oMap["MahjongMoPaiBroadcast"] = MahjongMoPaiBroadcastHandler;
    oMap["MahjongMoPaiResult"] = MahjongMoPaiResultHandler;
    oMap["MahjongPengBroadcast"] = MahjongPengBroadcastHandler;
    oMap["MahjongPengResult"] = MahjongPengResultHandler;
    oMap["MeasureGeoDistanceResult"] = MeasureGeoDistanceResultHandler;
    oMap["PrepareBroadcast"] = PrepareBroadcastHandler;
    oMap["PrepareResult"] = PrepareResultHandler;
    oMap["QuitRoomBroadcast"] = QuitRoomBroadcastHandler;
    oMap["QuitRoomResult"] = QuitRoomResultHandler;
    oMap["ReconnResult"] = ReconnResultHandler;
    oMap["RedirectActUserIdBroadcast"] = RedirectActUserIdBroadcastHandler;
    oMap["RoomSettlementBroadcast"] = RoomSettlementBroadcastHandler;
    oMap["RoundSettlementBroadcast"] = RoundSettlementBroadcastHandler;
    oMap["RoundStartedBroadcast"] = RoundStartedBroadcastHandler;
    oMap["SelectPiaoHintBroadcast"] = SelectPiaoHintBroadcastHandler;
    oMap["SendEmojiResult"] = SendEmojiResultHandler;
    oMap["SendEmojiBroadcast"] = SendEmojiBroadcastHandler;
    oMap["SendQuickMsgResult"] = SendQuickMsgResultHandler;
    oMap["SendQuickMsgBroadcast"] = SendQuickMsgBroadcastHandler;
    oMap["SyncRoomDataResult"] = SyncRoomDataResultHandler;

    return oMap;
}

/**
 * 消息处理
 * 
 * @param SELF this 指针
 */
export function __onMsgHandler(SELF: MJ_weihai_Scene): void {
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
