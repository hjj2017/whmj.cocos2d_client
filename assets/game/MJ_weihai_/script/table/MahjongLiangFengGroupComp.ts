// @import
import AllMahjongValImg from "../AllMahjongValImg";
import MahjongTileDef from "../MahjongTileDef";

// @const
const { ccclass } = cc._decorator;

/**
 * 麻将亮风分组组件
 */
@ccclass
export default class MahjongLiangFengGroupComp extends cc.Component {
    // /**
    //  * onLoad
    //  */
    // onLoad(): void {
    // }

    // /**
    //  * start
    //  */
    // start(): void {
    // }

    // /**
    //  * update
    //  * 
    //  * @param nDeltaTime 变化时间
    //  */
    // update(nDeltaTime: number): void {
    // }

    /**
     * 更新数量
     * 
     * @param nKind 亮风种类, 1 = 风牌, 2 = 箭牌, 3 = 乱锚
     * @param oCounterMap 计数器字典
     */
    updateCount(nKind: number, oCounterMap: {[nKey: number]: number, }): void {
        if (nKind < 1 || 
            nKind > 3 ||
            null == oCounterMap) {
            return;
        }

        if (1 == nKind || 
            2 == nKind) {
            // 更新亮风
            __updateLiangFeng(this, oCounterMap);
        } else if (3 == nKind) {
            // 更新乱锚
            __updateLuanMao(this, oCounterMap);
        }
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 更新亮风
 * 
 * @param SELF this 指针
 * @param oCounterMap 计数器字典
 */
function __updateLiangFeng(SELF: MahjongLiangFengGroupComp, oCounterMap: {[nKey: number]: number, }): void {
    if (null == SELF ||
        null == oCounterMap) {
        return;
    }

    let nIndex = 0;

    for (let strKey in oCounterMap) {
        // 获取数量
        let nCount = oCounterMap[strKey];

        if (nCount <= 0) {
            continue;
        }

        if (null == cc.find(`Layout/MahjongTile_${nIndex}_`, SELF.node)) {
            continue;
        }

        // 设置图片
        cc.find(`Layout/MahjongTile_${nIndex}_`, SELF.node).active = true;
        cc.find(`Layout/MahjongTile_${nIndex}_/Val`, SELF.node)
            .getComponent(cc.Sprite)
            .spriteFrame = AllMahjongValImg.getSpriteFrame(Number.parseInt(strKey));

        // 设置数量
        cc.find(`Layout/MahjongTile_${nIndex}_/Num`, SELF.node).active = nCount > 1;
        cc.find(`Layout/MahjongTile_${nIndex}_/Num`, SELF.node)
            .getComponent(cc.Label)
            .string = nCount.toString();

        ++nIndex;
    }
}

/**
 * 更新乱锚
 * 
 * @param SELF this 指针
 * @param oCounterMap 计数器字典
 */
function __updateLuanMao(SELF: MahjongLiangFengGroupComp, oCounterMap: {[nKey: number]: number, }): void {
    if (null == SELF ||
        null == oCounterMap) {
        return;
    }

    // 关键字数组
    const oKeyArray = [
        MahjongTileDef.DONG_FENG,
        MahjongTileDef.NAN_FENG,
        MahjongTileDef.XI_FENG,
        MahjongTileDef.BEI_FENG,
        MahjongTileDef.HONG_ZHONG,
        MahjongTileDef.FA_CAI,
        MahjongTileDef.BAI_BAN,
    ];

    for (let nIndex in oKeyArray) {
        // 获取数量
        let nCount = oCounterMap[oKeyArray[nIndex]];

        if (nCount <= 0) {
            continue;
        }

        cc.find(`Layout/MahjongTile_${nIndex}_/NumBG`, SELF.node).active = true;
        cc.find(`Layout/MahjongTile_${nIndex}_/Num`, SELF.node).active = true;
        cc.find(`Layout/MahjongTile_${nIndex}_/Num`, SELF.node)
            .getComponent(cc.Label)
            .string = nCount.toString();
    }
}
