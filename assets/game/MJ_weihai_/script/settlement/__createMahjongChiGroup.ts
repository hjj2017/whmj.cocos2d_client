// @import
import AllMahjongValImg from "../AllMahjongValImg";
import ModConfig from "../ModConfig.ver_MJ_weihai_";
import RoundSettlementWndComp from "./RoundSettlementWndComp";

/**
 * 创建麻将吃牌分组
 * 
 * @param SELF this 指针
 * @param nT0 第一张麻将牌
 * @param nT1 第二张麻将牌
 * @param nT2 第三张麻将牌
 * @return Cocos 节点
 */
export function __createMahjongChiGroup(SELF: RoundSettlementWndComp, nT0: number, nT1: number, nT2: number): cc.Node {
    if (null == SELF || 
        nT0 <= 0 || 
        nT1 <= 0 || 
        nT2 <= 0) {
        return null;
    }

    // 获取 Bundle
    let oBundle = cc.assetManager.getBundle(ModConfig.BUNDLE_NAME);

    if (null == oBundle) {
        return null;
    }

    // 获取预制体
    let oPrefab = cc.find("Template/MahjongChiGroup", SELF.node);
    // 创建新节点
    let oNewNode = cc.instantiate(oPrefab);

    // 创建麻将数值数组
    let oTArray = [ nT0, nT1, nT2 ].sort();

    for (let nIndex = 0; nIndex < oTArray.length; nIndex++) {
        // 获取当前麻将数值
        let nTCurr = oTArray[nIndex];

        cc.find(`MahjongTile_${nIndex}_/Val`, oNewNode)
            .getComponent(cc.Sprite)
            .spriteFrame = AllMahjongValImg.getSpriteFrame(nTCurr);
    }

    return oNewNode;
}
