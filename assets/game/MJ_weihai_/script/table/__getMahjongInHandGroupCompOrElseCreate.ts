// @import
import MahjongInHandGroupComp from "./MahjongInHandGroupComp";
import MahjongInHandGroupFactory from "./MahjongInHandGroupFactory";
import MahjongTableComp from "./MahjongTableComp";

/**
 * 获取麻将手牌分组组件, 如果为空就创建
 * 
 * @param SELF this 指针
 * @param nSeatIndexAtClient 座位索引
 * @return 麻将手牌分组组件
 */
export function __getMahjongInHandGroupCompOrElseCreate(SELF: MahjongTableComp, nSeatIndexAtClient: number): MahjongInHandGroupComp {
    if (null == SELF) {
        return null;
    }

    // 查找手牌区域节点
    const oAreaNode = cc.find(`Seat_${nSeatIndexAtClient}_/MahjongInHandArea`, SELF.node);

    if (null == oAreaNode) {
        // 如果区域节点为空,
        cc.error(`麻将手牌区域节点为空, seatIndex = ${nSeatIndexAtClient}`);
        return;
    }

    // 获取手牌分组组件
    let oGroupComp = oAreaNode.getComponentInChildren(
        MahjongInHandGroupComp
    );

    if (null == oGroupComp) {
        // 创建手牌节点
        let oNewNode = MahjongInHandGroupFactory.create(nSeatIndexAtClient);

        if (null == oNewNode) {
            cc.error("创建麻将手牌分组节点为空");
            return;
        }

        oAreaNode.addChild(oNewNode);
        oGroupComp = oNewNode.getComponent(MahjongInHandGroupComp);
    }

    return oGroupComp;
}
