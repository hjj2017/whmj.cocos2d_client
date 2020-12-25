// @import
import MahjongTableComp from "./MahjongTableComp";
import PlayerInfoPaneComp from "./PlayerInfoPaneComp";

/**
 * 设置飘几标志
 * 
 * @param SELF this 指针
 * @param nUserId 用户 Id
 * @param nPiaoX 飘几, -1 = 未知, 0 = 不飘, 1 = 飘_1, 2 = 飘_2, 3 = 飘_3, 4 = 飘_4
 */
export function __putPiaoXFlag(SELF: MahjongTableComp, nUserId: number, nPiaoX: number): void {
    if (null == SELF) {
        return;
    }

    // 获取当前玩家数据
    let oCurrPlayer = SELF._oPlayerDataMap[nUserId];

    if (null == oCurrPlayer) {
        cc.error(`当前玩家为空, userId = ${nUserId}`);
        return;
    }    

    oCurrPlayer.piaoX = nPiaoX;

    let nSeatIndexAtClient = SELF._oMahjongSeatIndexer.getSeatIndexAtClient(oCurrPlayer.seatIndexAtServer);
    let oAreaNode = cc.find(`Seat_${nSeatIndexAtClient}_/PlayerInfoArea`, SELF.node);

    if (null == oAreaNode) {
        cc.error(`未找到玩家信息区域, seatIndex = ${nSeatIndexAtClient}`);
        return;
    }

    // 获取玩家信息组件
    let oPlayerInfoComp = oAreaNode.getComponentInChildren(PlayerInfoPaneComp)

    if (null == oPlayerInfoComp) {
        cc.error(`未找到玩家信息组件, seatIndex = ${nSeatIndexAtClient}`);
        return;
    }

    // 重新设置玩家数据并刷新显示
    oPlayerInfoComp.putPlayerData(oCurrPlayer).renewDisplay();
}
