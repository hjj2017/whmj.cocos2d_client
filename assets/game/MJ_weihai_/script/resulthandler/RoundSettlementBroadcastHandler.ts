// @import
import CachedData from "../../../../bizdata/script/CachedData";
import CachingKeyDef from "../../../../bizdata/script/CachingKeyDef";
import MahjongTableComp from "../table/MahjongTableComp";
import MJ_weihai_Scene from "../MJ_weihai_Scene";
import MsgBus from "../../../../comm/script/MsgBus";
import RoomSettlementBroadcastHandler from "./RoomSettlementBroadcastHandler";
import RoundSettlementWndComp from "../settlement/RoundSettlementWndComp";
import RoundSettlementWndFactory from "../settlement/RoundSettlementWndFactory";
import RuleSetting from "../RuleSetting";
import TextSpineAnimUtil from "../TextSpineAnimUtil";
import UserData from "../../../../bizdata/script/UserData";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 牌局结算广播
 */
type RoundSettlementBroadcast = mod_MJ_weihai_Protocol.msg.RoundSettlementBroadcast;

/**
 * 牌局结算广播处理器
 */
export default class RoundSettlementBroadcastHandler {
    /**
     * 处理广播
     * 
     * @param oBroadcast 广播对象
     */
    static handle(oBroadcast: RoundSettlementBroadcast): void {
        if (null == oBroadcast) {
            return;
        }

        cc.log(`收到牌局结算广播`);

        setTimeout(() => {
            // 延迟创建牌局结算结果并显示
            __createRoundSettlementWndAndShow(oBroadcast)
        }, 5000);
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 创建牌局结算结果并显示
 * 
 * @param oBroadcast 牌局结算广播
 */
function __createRoundSettlementWndAndShow(oBroadcast: RoundSettlementBroadcast): void {
    if (null == oBroadcast) {
        return;
    }

    RoundSettlementWndFactory.createAsync((oNewWnd) => {
        if (null == oNewWnd) {
            return;
        }

        let oXArray = [];

        for (let oSettlementItem of oBroadcast.settlementItem) {
            if (null == oSettlementItem) {
                continue;
            }

            // 获取已缓存的用户
            let oCachedUser = UserData.getByUserId(oSettlementItem.userId);

            let oX = {
                userId:                     oSettlementItem.userId,
                userName:                   oCachedUser.getUserName(),
                headImg:                    oCachedUser.getHeadImg(),
                sex:                        oCachedUser.getSex(),
                currScore:                  oSettlementItem.currScore,
                totalScore:                 oSettlementItem.totalScore,
                seatIndexAtServer:          oSettlementItem.seatIndex,
                piaoX:                      oSettlementItem.piaoX,
                roomOwnerFlag:              oSettlementItem.roomOwnerFlag,
                zhuangJiaFlag:              oSettlementItem.zhuangJiaFlag,
                hu:                         oSettlementItem.hu,
                dianPao:                    oSettlementItem.dianPao,
                ziMo:                       oSettlementItem.ziMo,
                huPatternArray:             oSettlementItem.huPattern,
                gangPatternArray:           oSettlementItem.gangPattern,
                mahjongChiPengGangArray:    oSettlementItem.mahjongChiPengGang,
                mahjongInHand:              oSettlementItem.mahjongInHand,
                mahjongHuOrZiMo:            oSettlementItem.mahjongHuOrZiMo,
                mahjongLiangFeng:           oSettlementItem.mahjongLiangFeng,
            };

            oXArray.push(oX);
        }

        // 获取缓存的房间
        let oCachedRoom = CachedData.getInstance().get(CachingKeyDef.CACHED_ROOM);
        // 获取创建组件
        let oWndComp = oNewWnd.getComponent(RoundSettlementWndComp)
            .putMyUserId(UserData.getMyData().getUserId())
            .putRoomId(__getRoomId(oCachedRoom))
            .putPlayMethodDesc(__getPlayMethodDesc(oCachedRoom))
            .putSettlementItemArray(oXArray);

        oWndComp.renewDisplay();
        oWndComp.onContinueTheGame = () => {
            let oSceneComp = cc.find("Canvas/Script").getComponent(MJ_weihai_Scene);
            oSceneComp.hideChiPengGangHuOpHint();
            oSceneComp.hideInvite();

            // 隐藏可以胡牌的提示
            cc.find("Canvas/InteractionArea/HintMahjongCanHuArea").active = false;

            // 清理麻将桌
            cc.find("Canvas/MahjongTableArea")
                .getComponentInChildren(MahjongTableComp)
                .updateMahjongLiangGangDing(-1, -1)
                .updateAllTotalScore(oXArray)
                .clearDesktop();

            TextSpineAnimUtil.clear();

            if (RoomSettlementBroadcastHandler.hasData()) {
                // 如果房间结算有数据,
                RoomSettlementBroadcastHandler.openWnd();
                return;
            }

            // 发送数据同步指令
            MsgBus.getInstance().sendMsg(
                mod_MJ_weihai_Protocol.msg.MJ_weihai_MsgCodeDef._SyncRoomDataCmd,
                mod_MJ_weihai_Protocol.msg.SyncRoomDataCmd.create({
                })
            );

            // 发送已准备好指令
            MsgBus.getInstance().sendMsg(
                mod_MJ_weihai_Protocol.msg.MJ_weihai_MsgCodeDef._PrepareCmd,
                mod_MJ_weihai_Protocol.msg.PrepareCmd.create({ 
                    yes: 1,
                })
            );

            // 关闭窗口
            oNewWnd.destroy();
        };

        // 添加结算窗口
        cc.Canvas.instance.node.addChild(oNewWnd);
    });
}

/**
 * 获取房间 Id
 * 
 * @param oCachedRoom 已缓存的房间
 * @return 房间 Id
 */
function __getRoomId(oCachedRoom: any): number {
    return (null == oCachedRoom) ? -1 : oCachedRoom.roomId;
}

/**
 * 获取玩法说明文本
 * 
 * @param oCachedRoom 已缓存的房间
 * @return 玩法说明文本
 */
function __getPlayMethodDesc(oCachedRoom: any): string {
    if (null == oCachedRoom || 
        null == oCachedRoom.ruleSetting) {
        return "";
    }

    // 获取规则设置
    let oRuleSetting = oCachedRoom.ruleSetting as RuleSetting;

    if (null == oRuleSetting) {
        return "";
    }

    return oRuleSetting.getMaxPlayerAndMaxRoundDesc() 
        + "，" + oRuleSetting.getPaymentWayDesc() 
        + "，" + oRuleSetting.getPlayMethodDesc();
}
