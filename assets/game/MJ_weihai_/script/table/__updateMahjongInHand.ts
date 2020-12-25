// @import
import MahjongTableComp from "./MahjongTableComp";
import { __getMahjongInHandGroupCompOrElseCreate } from "./__getMahjongInHandGroupCompOrElseCreate";
import { __updateMahjongMoPai } from "./__updateMahjongMoPai";

/**
 * 更新麻将手牌
 * 
 * @param SELF this 指针
 * @param nUserId 用户 Id
 * @param oMahjongInHand 手中的麻将牌数值数组
 * @param nMoPai 麻将摸牌
 * @param nState 状态, 0 = 正常状态, 1 = 躺倒 ( 正面朝上 ), 2 = 躺倒 ( 背面朝上 ), 3 = 提起
 */
export function __updateMahjongInHand(SELF: MahjongTableComp, nUserId: number, oMahjongInHand: Array<number>, nMoPai: number = -1, nState = 0): void {
    if (null == SELF ||
        nUserId <= 0) {
        return;
    }

    // 获取玩家
    let oPlayerData = SELF._oPlayerDataMap[nUserId];

    if (null == oPlayerData) {
        cc.error(`未找到玩家数据, userId = ${nUserId}`);
        return;
    }

    // 更新手中的麻将牌数值数组
    oPlayerData.mahjongInHand = oMahjongInHand;

    // 获取客户端座位索引
    const nSeatIndexAtClient = SELF._oMahjongSeatIndexer.getSeatIndexAtClient(oPlayerData.seatIndexAtServer);

    // 获取手牌分组组件
    const oGroupComp = __getMahjongInHandGroupCompOrElseCreate(
        SELF, nSeatIndexAtClient
    );

    if (null != oGroupComp) {
        oGroupComp.putCanInteractive(0 == nSeatIndexAtClient)
            .updateMahjongInHand(oMahjongInHand, nState);
    }

    // 更新麻将摸牌
    __updateMahjongMoPai(SELF, nUserId, nMoPai, nState);
}
