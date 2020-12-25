//#region @import
import MahjongInHandGroupComp from "./MahjongInHandGroupComp";
import MahjongTableComp from "./MahjongTableComp";
//#endregion

/**
 * 播放出牌动画
 * 
 * @param SELF this 指针
 * @param nChuPai 要打出的麻将牌
 * @param nAtPos 所在位置
 * @param funCb 回调函数
 */
export function __checkChuPaiAndPlayAnim(
    SELF: MahjongTableComp, nChuPai: number, nAtPos: number, funCb: (bSuccezz: boolean) => void): void {
    if (null == SELF || 
        nChuPai <= 0) {
        return;
    }

    let oThatComp = cc.find("Seat_0_/MahjongInHandArea", SELF.node).getComponentInChildren(MahjongInHandGroupComp);

    if (null == oThatComp) {
        cc.error("未找到相关组件");
        return;
    }

    oThatComp.checkChuPaiAndPlayAnim(nChuPai, nAtPos, funCb);
}
