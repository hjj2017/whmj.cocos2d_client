// @import
import AllMahjongValImg from "../AllMahjongValImg";
import MahjongTableComp from "./MahjongTableComp";

/**
 * 更新麻将亮杠腚
 * 
 * @param SELF this 指针
 * @param nT0 第一张麻将牌
 * @param nT1 第二张麻将牌
 */
export function __updateMahjongLiangGangDing(SELF: MahjongTableComp, nT0: number, nT1: number): void {
    if (null == SELF) {
        return;
    }

    if (nT0 <= 0 && 
        nT1 <= 0) {
        cc.find("MahjongLiangGangDingArea", SELF.node).active = false;
        return;
    }

    cc.find("MahjongLiangGangDingArea", SELF.node).active = true;
    cc.find("MahjongLiangGangDingArea/Mahjong_0_", SELF.node).active = (nT0 > 0);
    cc.find("MahjongLiangGangDingArea/Mahjong_1_", SELF.node).active = (nT1 > 0);

    if (nT0 > 0) {
        // 更新第一张麻将牌
        cc.find("MahjongLiangGangDingArea/Mahjong_0_/Val", SELF.node)
            .getComponent(cc.Sprite)
            .spriteFrame = AllMahjongValImg.getSpriteFrame(nT0);
    }

    if (nT1 > 0) {
        // 更新第二张麻将牌
        cc.find("MahjongLiangGangDingArea/Mahjong_1_/Val", SELF.node)
            .getComponent(cc.Sprite)
            .spriteFrame = AllMahjongValImg.getSpriteFrame(nT1);
    }

    cc.find("MahjongLiangGangDingArea", SELF.node)
        .getComponent(cc.Layout)
        .updateLayout();
}
