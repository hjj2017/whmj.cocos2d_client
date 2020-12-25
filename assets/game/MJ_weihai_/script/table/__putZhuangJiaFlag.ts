// @import
import MahjongTableComp from "./MahjongTableComp";
import PlayerInfoPaneComp from "./PlayerInfoPaneComp";

/**
 * 设置庄家标志
 * 
 * @param SELF this 指针
 * @param nUserId 用户 Id
 */
export function __putZhuangJiaFlag(SELF: MahjongTableComp, nUserId: number): void {
    if (null == SELF) {
        return;
    }

    for (let strKey in SELF._oPlayerDataMap) {
        // 获取当前玩家数据
        let oCurrPlayer = SELF._oPlayerDataMap[strKey];

        if (null == oCurrPlayer) {
            continue;
        }

        // 设置庄家标志
        oCurrPlayer.zhuangJiaFlag = (oCurrPlayer.userId == nUserId);

        let nSeatIndexAtClient = SELF._oMahjongSeatIndexer.getSeatIndexAtClient(oCurrPlayer.seatIndexAtServer);
        let oAreaNode = cc.find(`Seat_${nSeatIndexAtClient}_/PlayerInfoArea`, SELF.node);

        if (null == oAreaNode) {
            cc.error(`未找到玩家信息区域, seatIndex = ${nSeatIndexAtClient}`);
            continue;
        }

        // 获取玩家信息组件
        let oPlayerInfoComp = oAreaNode.getComponentInChildren(PlayerInfoPaneComp)

        if (null == oPlayerInfoComp) {
            cc.error(`未找到玩家信息组件, seatIndex = ${nSeatIndexAtClient}`);
            continue;
        }

        // 重新设置玩家数据并刷新显示
        oPlayerInfoComp.putPlayerData(oCurrPlayer).renewDisplay();
    }

    // 获取玩家数据
    let oPlayerData = SELF._oPlayerDataMap[nUserId];

    if (null == oPlayerData) {
        cc.error(`未找到玩家, userId = ${nUserId}`);
        return;
    }

    // 获取客户端座位索引
    const nSeatIndexAtClient = SELF._oMahjongSeatIndexer.getSeatIndexAtClient(oPlayerData.seatIndexAtServer);

    let nAngle = 0;

    if (nSeatIndexAtClient == 1) {
        nAngle = +90;
    } else 
    if (nSeatIndexAtClient == 3) {
        nAngle = -90;
    } else
    if (nSeatIndexAtClient == 2) {
        nAngle = 180;
    }

    cc.find("PointerArea/Pointer_Direction_", SELF.node).angle = nAngle;
}
