// @import
import MahjongOutputGroupComp from "./MahjongOutputGroupComp";
import MahjongOutputGroupFactory from "./MahjongOutputGroupFactory";
import MahjongTableComp from "./MahjongTableComp";

/**
 * 获取麻将输出分组组件, 如果为空就创建
 * 
 * @param SELF this 指针
 * @param nSeatIndexAtClient 座位索引
 * @return 已打出的麻将牌分组组件
 */
export function __getMahjongOutputGroupCompOrElseCreate(SELF: MahjongTableComp, nSeatIndexAtClient: number): MahjongOutputGroupComp {
    if (null == SELF) {
        return null;
    }

    // 先找到 MahjongOutputArea 节点
    let oAreaNode = cc.find(
        `Seat_${nSeatIndexAtClient}_/MahjongOutputArea`, 
        SELF.node
    );

    if (null == oAreaNode) {
        cc.error(`麻将输出区域节点为空, seatIndex = ${nSeatIndexAtClient}`);
        return null;
    }

    // 获取期望的组件
    let oGroupComp = oAreaNode.getComponentInChildren(
        MahjongOutputGroupComp
    );

    if (null == oGroupComp) {
        // 创建并添加新节点
        let oNewNode = MahjongOutputGroupFactory.create(nSeatIndexAtClient, SELF._nMaxPlayer);

        if (null == oNewNode) {
            cc.error("创建麻将输出分组节点为空");
            return;
        }

        oAreaNode.addChild(oNewNode);
        oGroupComp = oNewNode.getComponent(MahjongOutputGroupComp);
    }

    return oGroupComp;
}
