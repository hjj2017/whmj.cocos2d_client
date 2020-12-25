// @import
import MahjongTableComp from "./MahjongTableComp";
import MahjongTileOpComp from "./MahjongTileOpComp";
import { __getMahjongInHandGroupCompOrElseCreate } from "./__getMahjongInHandGroupCompOrElseCreate";

/**
 * 重制所有手中的麻将牌的状态
 * 
 * @param nSeatIndexAtClient 客户端座位索引
 */
export function __resetAllMahjongInHandState(SELF: MahjongTableComp, nSeatIndexAtClient: number = 0): void {
    if (null == SELF) {
        return;
    }

    // 获取手牌分组组件
    const oGroupComp = __getMahjongInHandGroupCompOrElseCreate(
        SELF, nSeatIndexAtClient
    );

    if (null == oGroupComp) {
        return;
    }

    // 获取麻将牌操作组件数组
    let oTempCompArray = oGroupComp.getComponentsInChildren(MahjongTileOpComp);

    if (null == oTempCompArray || 
        oTempCompArray.length <= 0) {
        return;
    }

    for (let oTempComp of oTempCompArray) {
        if (null != oTempComp) {
            oTempComp.setState(0);
        }
    }
}
