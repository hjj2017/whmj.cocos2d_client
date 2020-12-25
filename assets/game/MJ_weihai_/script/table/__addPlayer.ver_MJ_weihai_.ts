// @import
import MahjongTableComp from "./MahjongTableComp";
import PlayerInfoPaneComp from "./PlayerInfoPaneComp";
import PlayerInfoPaneFactory from "./PlayerInfoPaneFactory";
import { PlayerData } from "./MahjongTableComp";

/**
 * 添加玩家
 * 
 * @param SELF this 指针
 * @param oPlayerData 玩家数据
 * @param bIsFirst 是否是第一视角
 */
export function __addPlayer(SELF: MahjongTableComp, oPlayerData: PlayerData, bIsFirst: boolean = false): void {
    if (null == SELF ||
        null == oPlayerData || 
        oPlayerData.userId in SELF._oPlayerDataMap) {
        return;
    }

    // 将该玩家加入字典,
    // 避免重复添加
    oPlayerData.seatIndexAtServer = oPlayerData.seatIndex;
    SELF._oPlayerDataMap[oPlayerData.userId] = oPlayerData;

    if (bIsFirst) {
        // 如果是第一视角,
        // 则调整第一视角的座位索引
        SELF._oMahjongSeatIndexer.transformFirstSeatIndex(oPlayerData.seatIndexAtServer);
    }

    // 获取客户端座位索引
    const nSeatIndexAtClient = SELF._oMahjongSeatIndexer.getSeatIndexAtClient(
        oPlayerData.seatIndexAtServer
    );

    cc.log(`玩家就坐, userId = ${oPlayerData.userId}, seatIndexAtServer = ${oPlayerData.seatIndex}, seatIndexAtClient = ${nSeatIndexAtClient}`);

    // 创建玩家节点
    let oNewNode = PlayerInfoPaneFactory.create();

    if (null == oNewNode) {
        // 如果玩家节点为空,
        // 则删除关键字, 允许重新添加该玩家
        delete SELF._oPlayerDataMap[oPlayerData.userId];
        return;
    }

    // 设置玩家数据并刷新显示
    oNewNode.getComponent(PlayerInfoPaneComp)
        .putPlayerData(oPlayerData)
        .renewDisplay();

    let oWaitingUser = cc.find(
        `Seat_${nSeatIndexAtClient}_/PlayerInfoArea/Waiting4User`, 
        SELF.node
    );

    if (null != oWaitingUser) {
        oWaitingUser.active = false;
    }

    cc.find(`Seat_${nSeatIndexAtClient}_/PlayerInfoArea`, SELF.node).addChild(oNewNode);
}
