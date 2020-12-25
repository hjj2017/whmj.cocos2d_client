// @import
import ModConfig from "../ModConfig.ver_MJ_weihai_";
import RoundSettlementWndComp from "./RoundSettlementWndComp";
import AllMahjongValImg from "../AllMahjongValImg";

/**
 * 创建麻将牌
 * 
 * @param SELF this 指针
 * @param nMahjongVal 麻将牌数值
 * @return Cocos 节点
 */
export function __createMahjongTile(SELF: RoundSettlementWndComp, nMahjongVal: number): cc.Node {
    if (null == SELF) {
        return null;
    }

    // 获取 Bundle
    let oBundle = cc.assetManager.getBundle(ModConfig.BUNDLE_NAME);

    if (null == oBundle) {
        return null;
    }

    // 获取预制体
    let oPrefab = cc.find("Template/MahjongTile", SELF.node);
    // 创建新节点
    let oNewNode = cc.instantiate(oPrefab);

    cc.find("Val", oNewNode).getComponent(cc.Sprite).spriteFrame = AllMahjongValImg.getSpriteFrame(nMahjongVal);

    return oNewNode;
}
