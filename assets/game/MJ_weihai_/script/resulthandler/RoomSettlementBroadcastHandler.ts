// @import
import CachedData from "../../../../bizdata/script/CachedData";
import CachingKeyDef from "../../../../bizdata/script/CachingKeyDef";
import ResKeyDef from "../../../../comm/script/ResKeyDef";
import RoomSettlementWndComp from "../settlement/RoomSettlementWndComp";
import RoomSettlementWndFactory from "../settlement/RoomSettlementWndFactory";
import RuleSetting from "../RuleSetting";
import UserData from "../../../../bizdata/script/UserData";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 房间结算广播
 */
type RoomSettlementBroadcast = mod_MJ_weihai_Protocol.msg.RoomSettlementBroadcast;

/**
 * 房间结算广播
 */
let g_oBroadcast: RoomSettlementBroadcast = null;

/**
 * 牌局结算广播处理器
 */
export default class RoundSettlementBroadcastHandler {
    /**
     * 处理广播
     * 
     * @param oBroadcast 广播对象
     */
    static handle(oBroadcast: RoomSettlementBroadcast): void {
        if (null == oBroadcast) {
            return;
        }

        cc.log(`收到房间结算广播`);

        // 记录房间结算广播,
        // 但是先不要弹出窗口显示...
        g_oBroadcast = oBroadcast;
    }

    /**
     * 是否有数据
     * 
     * @return true = 有数据, false = 没有数据
     */
    static hasData(): boolean {
        return null != g_oBroadcast;
    }

    /**
     * 打开房间结算窗口
     */
    static openWnd(): void {
        if (null == g_oBroadcast) {
            return;
        }

        // 清除数据
        let oBroadcast = g_oBroadcast;
        g_oBroadcast = null;

        // 创建房间结算窗口
        RoomSettlementWndFactory.createAsync((oNewWnd) => {
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
                    userId:            oSettlementItem.userId,
                    userName:          oCachedUser.getUserName(),
                    headImg:           oCachedUser.getHeadImg(),
                    sex:               oCachedUser.getSex(),
                    seatIndexAtServer: oSettlementItem.seatIndex,
                    roomOwnerFlag:     oSettlementItem.roomOwnerFlag,
                    zuoZhuangTimez:    oSettlementItem.zuoZhuangTimez,
                    huPaiTimez:        oSettlementItem.huPaiTimez,
                    ziMoTimez:         oSettlementItem.ziMoTimez,
                    dianPaoTimez:      oSettlementItem.dianPaoTimez,
                    totalScore:        oSettlementItem.totalScore,
                    bigWinner:         oSettlementItem.bigWinner,
                };
    
                oXArray.push(oX);
            }
    
            // 获取创建组件
            let oWndComp = oNewWnd.getComponent(RoomSettlementWndComp)
                .putSettlementItemArray(oXArray);

            // 获取缓存的房间
            let oCachedRoom = CachedData.getInstance().get(CachingKeyDef.CACHED_ROOM);

            if (null != oCachedRoom) {
                oWndComp.putRoomId(oCachedRoom.roomId)
                    .putRoomCreateTime(oCachedRoom.roomCreateTime)
                    .putPlayMethodDesc(__getPlayMethodDesc(oCachedRoom));
            }

            oWndComp.renewDisplay();
            oWndComp.onBackward = () => {
                // 清理临时数据
                g_oBroadcast = null;
                CachedData.getInstance().remove(CachingKeyDef.CACHED_ROOM);
                // 返回大厅
                cc.director.loadScene(ResKeyDef.SCENE_HALL);
            };
    
            // 添加结算窗口
            cc.Canvas.instance.node.addChild(oNewWnd); 
        });
    }
}

///////////////////////////////////////////////////////////////////////

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
