// @import
import MahjongLiangFengGroupComp from "./MahjongLiangFengGroupComp";
import MahjongTableComp from "./MahjongTableComp";
import MahjongLiangFengGroupFactory from "./MahjongLiangFengGroupFactory";

/**
 * 更新麻将亮风分组
 * 
 * @param SELF this 指针
 * @param nUserId 用户 Id
 * @param nKind 亮风种类, 1 = 风牌, 2 = 箭牌, 3 = 乱锚
 * @param oCounterMap 计数器字典, key = 麻将牌面值, val = 数量
 */
export function __updateMahjongLiangFengGroup(SELF: MahjongTableComp, nUserId: number, nKind: number, oCounterMap: { [nKey: number]: number, }): void {
    if (null == SELF || 
        nKind < 1 || 
        nKind > 3 ||
        null == oCounterMap) {
        return;
    }

    // 获取玩家数据
    let oPlayerData = SELF._oPlayerDataMap[nUserId];

    if (null == oPlayerData) {
        cc.error(`未找到玩家, userId = ${nUserId}`);
        return;
    }

    // 获取客户端座位索引
    const nSeatIndexAtClient = SELF._oMahjongSeatIndexer.getSeatIndexAtClient(oPlayerData.seatIndexAtServer);

    // 查找麻将吃碰杠区域拿到 MahjongLiangFengGroupComp 组件;
    // 如果没有就新建节点并绑定代码;
    // 调用 MahjongLiangFengGroupComp 更新计数器;

    // 获取麻将吃碰杠区域节点
    let oChiPengGangArea = cc.find(`Seat_${nSeatIndexAtClient}_/MahjongChiPengGangArea`, SELF.node);

    if (null == oChiPengGangArea) {
        cc.error(`吃碰杠区域节点为空, seatIndexAtClient = ${nSeatIndexAtClient}`);
        return;
    }

    // 获取麻将亮风组件
    let oLiangFengGroupComp = oChiPengGangArea.getComponentInChildren(MahjongLiangFengGroupComp);

    if (null == oLiangFengGroupComp) {
        // 创建新节点
        let oNewNode = MahjongLiangFengGroupFactory.create(nSeatIndexAtClient, nKind);
        oChiPengGangArea.addChild(oNewNode);
        // 获取亮风分组组件
        oLiangFengGroupComp = oNewNode.getComponent(MahjongLiangFengGroupComp);
    }

    // 更新数量
    oLiangFengGroupComp.updateCount(nKind, oCounterMap);
}
