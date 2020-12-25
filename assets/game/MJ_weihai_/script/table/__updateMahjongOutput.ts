//#region @import
import MahjongTableComp from "./MahjongTableComp";
import { __getMahjongOutputGroupCompOrElseCreate } from "./__getMahjongOutputGroupCompOrElseCreate";
//#endregion

/**
 * 更新已打出的麻将牌数组
 * 
 * @param SELF this 指针
 * @param nUserId 用户 Id
 * @param oMahjongOutputArray 已打出的麻将牌数组
 */
export function __updateMahjongOutput(SELF: MahjongTableComp, nUserId: number, oMahjongOutputArray: Array<number>): void {
    if (null == SELF ||
        nUserId <= 0) {
        return;
    }

    // 确保参数不为空
    oMahjongOutputArray = oMahjongOutputArray || [];

    // 获取玩家数据
    let oPlayerData = SELF._oPlayerDataMap[nUserId];

    if (null == oPlayerData) {
        cc.error(`未找到玩家数据, userId = ${nUserId}`);
        return;
    }

    // 获取客户端座位索引
    const nSeatIndexAtClient = SELF._oMahjongSeatIndexer.getSeatIndexAtClient(oPlayerData.seatIndexAtServer);

    // 获取手牌分组组件
    const oGroupComp = __getMahjongOutputGroupCompOrElseCreate(
        SELF, nSeatIndexAtClient
    );

    if (null != oGroupComp) {
        oGroupComp.popAll();
        
        for (let nT of oMahjongOutputArray) {
            oGroupComp.pushAMahjongVal(nT);
        }
    }
}
