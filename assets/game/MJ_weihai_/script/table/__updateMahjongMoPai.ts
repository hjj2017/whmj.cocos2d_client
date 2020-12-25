// @import
import MahjongTableComp from "./MahjongTableComp";
import { __getMahjongInHandGroupCompOrElseCreate } from "./__getMahjongInHandGroupCompOrElseCreate";

/**
 * 更新麻将摸牌
 * 
 * @param SELF this 指针
 * @param nUserId 用户 Id
 * @param nMahjongMoPai 麻将摸牌
 * @param nState 状态
 */
export function __updateMahjongMoPai(SELF: MahjongTableComp, nUserId: number, nMahjongMoPai: number, nState: number = 0): void {
    if (null == SELF ||
        nUserId <= 0) {
        return;
    }

    // 获取玩家数据
    let oPlayerData = SELF._oPlayerDataMap[nUserId];

    if (null == oPlayerData) {
        cc.error(`未找到玩家数据, userId = ${nUserId}`);
        return;
    }

    // 更新麻将摸牌
    oPlayerData.mahjongMoPai = nMahjongMoPai;

    // 获取客户端座位索引
    const nSeatIndexAtClient = SELF._oMahjongSeatIndexer.getSeatIndexAtClient(oPlayerData.seatIndexAtServer);
    // 获取手牌分组组件
    const oGroupComp = __getMahjongInHandGroupCompOrElseCreate(
        SELF, nSeatIndexAtClient
    );

    if (null != oGroupComp) {
        oGroupComp.updateMahjongMoPai(nMahjongMoPai, nState);
    }
}
