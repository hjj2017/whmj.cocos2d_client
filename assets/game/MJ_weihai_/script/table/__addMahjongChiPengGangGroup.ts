// @import
import MahjongTableComp from "./MahjongTableComp";
import { __getMahjongOutputGroupCompOrElseCreate } from "./__getMahjongOutputGroupCompOrElseCreate";

/**
 * 自定义回调函数
 */
type NodeCreator = (
    nCmderSeatIndexAtClient: number, 
    nFromSeatIndexAtClient: number
) => cc.Node

/**
 * 添加麻将吃碰杠分组
 * 
 * @param SELF this 指针
 * @param strKind 种类 "chi" = 吃, "peng" = 碰, "mingGang" = 明杠, "anGang" = 暗杠, "buGang" = 补杠
 * @param nCmderUserId 命令者用户 Id
 * @param nT 吃碰杠牌
 * @param nFromUserId 来自用户 Id
 * @param funNodeCreator 节点创建函数
 */
export function __addMahjongChiPengGangGroup(
    SELF: MahjongTableComp, strKind: string, nCmderUserId: number, nT: number, nFromUserId: number, funNodeCreator: NodeCreator): void {
    if (null == SELF || 
        "function" != typeof(funNodeCreator)) {
        return;
    }

    // 获取玩家
    let oFromPlayer = SELF._oPlayerDataMap[nFromUserId];

    if (null == oFromPlayer) {
        cc.error(`未找到玩家数据, fromUserId = ${nFromUserId}`);
        return;
    }

    // 获取客户端座位索引
    const nFromSeatIndexAtClient = SELF._oMahjongSeatIndexer.getSeatIndexAtClient(
        oFromPlayer.seatIndexAtServer
    );

    if ("anGang" != strKind && 
        "buGang" != strKind) {
        // 
        // 如果不是暗杠或补杠, 也就是说: 吃、碰、明杠,
        // 都是从其他玩家已打出牌的牌堆里 "抢夺" 最后一张牌...
        // 所以需要找到相应的牌堆删除这张牌!
        // XXX 注意: MahjongOutput 不是像 MahjongInHand 那样通过服务器端消息进行强制同步,
        // 这是因为打出的牌会非常多, 
        // 考虑倒客户端的重算压力和服务器端的数据压力,
        // 所以这部分放弃了每次编号都同步的方案
        // 
        let oCurrComp = __getMahjongOutputGroupCompOrElseCreate(
            SELF, nFromSeatIndexAtClient
        );

        if (null != oCurrComp) {
            if (!oCurrComp.compareAMahjongValAndPop(nT)) {
                cc.warn(`未移除最后一张打出的牌, fromUserId = ${oFromPlayer.userId}, t = ${nT}`);
            }
        }
    }

    let oCmderPlayer = SELF._oPlayerDataMap[nCmderUserId];

    if (null == oCmderPlayer) {
        cc.error(`未找到玩家, cmderUserId = ${nCmderUserId}`);
        return;
    }

    // 获取客户端座位索引
    const nCmderSeatIndexAtClient = SELF._oMahjongSeatIndexer.getSeatIndexAtClient(
        oCmderPlayer.seatIndexAtServer
    );

    // 创建吃牌分组
    let oNewNode = funNodeCreator(
        nCmderSeatIndexAtClient, nFromSeatIndexAtClient
    );

    if (null == oNewNode) {
        return;
    }

    oNewNode.attr({
        chiPengGang_kind: strKind,
        chiPengGang_tX: nT,
    });

    let oMahjongChiPengGangArea = cc.find(`Seat_${nCmderSeatIndexAtClient}_/MahjongChiPengGangArea`, SELF.node);

    if ("buGang" != strKind || 
        oMahjongChiPengGangArea.childrenCount <= 0) {
        // 如果不是补杠,
        // 或者子节点数量 <= 0,
        // 直接加载末尾即可
        oMahjongChiPengGangArea.addChild(oNewNode);
        return;
    }

    // 如果是补杠,
    // 那就得找出之前的麻将碰牌节点
    let oMahjongPeng: cc.Node = null;

    for (let oChildren of oMahjongChiPengGangArea.children) {
        if (null != oChildren &&
            oChildren["chiPengGang_kind"] == "peng" &&
            oChildren["chiPengGang_tX"] == nT) {
            oMahjongPeng = oChildren;
        }
    }

    if (null != oMahjongPeng) {
        // 如果找到麻将碰牌节点,
        // 就 "盖在" 上面...
        oNewNode.scale = 1; // 修正缩放比例, 避免叠加
        oMahjongPeng.removeAllChildren();
        oMahjongPeng.addChild(oNewNode);
    } else {
        // 如果没找到,
        // 就在区域的末尾处添加
        oMahjongChiPengGangArea.addChild(oNewNode);
    }
}
