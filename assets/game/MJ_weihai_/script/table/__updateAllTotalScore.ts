// @import
import MahjongTableComp from "./MahjongTableComp";
import PlayerInfoPaneComp from "./PlayerInfoPaneComp";

/**
 * 更新所有用户的总分
 * 
 * @param SELF this 指针
 * @param oAllTotalScore 所有用户的总分
 */
export function __updateAllTotalScore(SELF: MahjongTableComp, oAllTotalScore: Array<{ userId: number, totalScore: number, }>): void {
    if (null == SELF || 
        null == oAllTotalScore || 
        oAllTotalScore.length <= 0) {
        return;
    }

    for (let oTotalScore of oAllTotalScore) {
        if (null == oTotalScore) {
            continue;
        }

        // 获取当前玩家数据
        let oCurrPlayer = SELF._oPlayerDataMap[oTotalScore.userId];

        if (null == oCurrPlayer) {
            return;
        }

        // 更新总分
        oCurrPlayer.totalScore = oTotalScore.totalScore;

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
}
