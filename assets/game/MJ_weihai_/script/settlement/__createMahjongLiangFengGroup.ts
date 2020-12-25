// @import
import RoundSettlementWndComp from "./RoundSettlementWndComp";
import MahjongTileDef from "../MahjongTileDef";

/**
 * 创建麻将亮风分组
 * 
 * @param SELF this 指针
 * @param oCounterMap 计数器字典
 * @return Cocos 节点
 */
export function __createMahjongLiangFengGroup(
    SELF: RoundSettlementWndComp, oCounterMap: { [nKey: number]: number, }): cc.Node {
    if (null == SELF || 
        null == oCounterMap) {
        return null;
    }

    // 获取预制体
    let oPrefab = cc.find("Template/MahjongLiangFengGroup", SELF.node);
    // 创建新节点
    let oNewNode = cc.instantiate(oPrefab);

    for (let strKey in oCounterMap) {
        // 数量
        let nCount = oCounterMap[strKey];

        if (nCount <= 0) {
            continue;
        }

        // 获取麻将牌名称
        let strMahjongTileName = __getMahjongTileName(Number.parseInt(strKey));

        cc.find(`MahjongTile_${strMahjongTileName}_`, oNewNode).active = true;

        if (nCount > 1) {
            cc.find(`MahjongTile_${strMahjongTileName}_/Num`, oNewNode).active = true;
            cc.find(`MahjongTile_${strMahjongTileName}_/Num`, oNewNode)
                .getComponent(cc.Label)
                .string = nCount.toString();
        }
    }

    return oNewNode;
}

/**
 * 根据数值获取麻将牌名称
 * 
 * @param nT 麻将牌数值
 */
function __getMahjongTileName(nT: number): string {
    switch (nT) {
        // 东南西北
        case MahjongTileDef.DONG_FENG:  return "DongFeng";
        case MahjongTileDef.NAN_FENG:   return "NanFeng";
        case MahjongTileDef.XI_FENG:    return "XiFeng";
        case MahjongTileDef.BEI_FENG:   return "BeiFeng";
        // 中发白
        case MahjongTileDef.HONG_ZHONG: return "HongZhong";
        case MahjongTileDef.FA_CAI:     return "FaCai";
        case MahjongTileDef.BAI_BAN:    return "BaiBan";
    }

    return null;
}
