//#region @import
import MahjongTableComp from "./MahjongTableComp";
import { __getMahjongInHandGroupCompOrElseCreate } from "./__getMahjongInHandGroupCompOrElseCreate";
import { __getMahjongOutputGroupCompOrElseCreate } from "./__getMahjongOutputGroupCompOrElseCreate";
import { __updatePendant } from "./__updatePendant";
//#endregion

/**
 * 执行出牌
 * 
 * @param SELF this 指针
 * @param nUserId 用户 Id
 * @param nT 麻将牌
 */
export function __doMahjongChuPai(SELF: MahjongTableComp, nUserId: number, nT: number): void {
    if (nUserId <= 0) {
        return;
    }

    // 获取玩家
    let oPlayerData = SELF._oPlayerDataMap[nUserId];

    if (null == oPlayerData) {
        cc.error(`未找到玩家数据, userId = ${nUserId}`);
        return;
    }

    // 获取客户端座位索引
    const nSeatIndexAtClient = SELF._oMahjongSeatIndexer.getSeatIndexAtClient(oPlayerData.seatIndexAtServer);

    // 获取手牌分组组件
    let oGroupComp1 = __getMahjongInHandGroupCompOrElseCreate(
        SELF, nSeatIndexAtClient
    );

    if (null != oGroupComp1) {
        oGroupComp1.doMahjongChuPai(nT);
    }

    // 
    // 接下来还要修改麻将打出区域
    // 查找麻将输入区域节点
    let oGroupComp2 = __getMahjongOutputGroupCompOrElseCreate(
        SELF, nSeatIndexAtClient
    );

    if (null != oGroupComp2) {
        oGroupComp2.pushAMahjongVal(nT);
        __updatePendant(SELF, nUserId);
    }
}
