//#region @import
import MahjongTableComp from "./MahjongTableComp";
import { __getMahjongOutputGroupCompOrElseCreate } from "./__getMahjongOutputGroupCompOrElseCreate";
//#endregion

/**
 * 更新已打出的麻将牌数组
 * 
 * @param SELF this 指针
 * @param nUserId 用户 Id
 * @param bShow 是否展示
 */
export function __updatePendant(SELF: MahjongTableComp, nUserId: number): void {
    if (null == SELF || 
        nUserId <= 0) {
        return;
    }

    // 查找坠子节点
    let oPendantNode = cc.find("Pendant", SELF.node);

    if (null == oPendantNode) {
        cc.error("牌桌上没有找到坠子节点");
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
    const oGroupComp = __getMahjongOutputGroupCompOrElseCreate(
        SELF, nSeatIndexAtClient
    );

    if (oGroupComp.node.childrenCount <= 0) {
        return;
    }

    // 最后一张麻将牌节点
    let oLastMahjongNode = oGroupComp.getLastMahjongNode();

    if (null == oLastMahjongNode) {
        return;
    }

    let oNewPos = oLastMahjongNode.convertToWorldSpaceAR(cc.v3());
    oNewPos = SELF.node.convertToNodeSpaceAR(oNewPos);
    oNewPos.y += 64;

    oPendantNode.position = oNewPos;
    oPendantNode.active = true;
    cc.Tween.stopAllByTarget(oPendantNode);

    let oTween = cc.tween(oPendantNode);
    oTween.sequence(
        oTween.by(1.00, { y: -32, }),
        oTween.by(1.00, { y: +32, })
    ).repeatForever()
        .start();
}
