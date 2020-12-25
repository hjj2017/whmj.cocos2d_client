// @import
import AllMahjongValImg from "../AllMahjongValImg";
import MahjongTileDef from "../MahjongTileDef";

// @const
const { ccclass } = cc._decorator;
const ATTR_CUSTOM_MAHJONG_VAL = "custom_mahjongVal";
const ATTR_CUSTOM_INDEX = "custom_index";

/**
 * 麻将亮风选择题组件
 */
@ccclass
export default class MahjongLiangFengChoiceQuestionComp extends cc.Component {
    /**
     * 手里的麻将牌
     */
    private _oMahjongInHand: Array<number> = null;

    /**
     * 摸牌
     */
    private _nMahjongMoPai: number = -1;

    /**
     * 乱锚
     */
    _bLuanMao: boolean = false;

    /**
     * 麻将牌节点数组
     */
    readonly _oMahjongTileOpNodeArray: Array<cc.Node> = [];


    // /**
    //  * onLoad
    //  */
    // onLoad(): void {
    // }

    /**
     * start
     */
    start(): void {
        cc.find("Button_Cancel_", this.node)
            .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            if (null != this.onCancelQuestion) {
                // 取消问题
                this.onCancelQuestion();
            }
        });

        cc.find("Button_OK_", this.node)
            .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            if (null == this.onAnswerQuestion) {
                return;
            }

            let oSelectedTArray = [];

            for (let oTempNode of this._oMahjongTileOpNodeArray) {
                if (null == oTempNode) {
                    continue;
                }

                if (cc.find("Flag", oTempNode).active) {
                    oSelectedTArray.push(oTempNode[ATTR_CUSTOM_MAHJONG_VAL]);
                }
            }

            if (3 == oSelectedTArray.length) {
                // 当且仅当选择 3 张牌时,
                // 才真正执行事件
                this.onAnswerQuestion(oSelectedTArray);
            }
        });
    }

    // /**
    //  * update
    //  * 
    //  * @param nDeltaTime 变化时间
    //  */
    // update(nDeltaTime: number): void {
    // }

    /**
     * 设置手里的麻将牌数值数组
     * 
     * @param oVal 麻将牌数值数组
     * @return this 指针
     */
    putMahjongInHand(oVal: Array<number>): MahjongLiangFengChoiceQuestionComp {
        this._oMahjongInHand = oVal;
        return this;
    }

    /**
     * 设置摸牌
     * 
     * @param nVal 麻将牌数值
     * @return this 指针
     */
    putMahjongMoPai(nVal: number): MahjongLiangFengChoiceQuestionComp {
        this._nMahjongMoPai = nVal;
        return this;
    }

    /**
     * 设置乱锚
     * 
     * @param bVal 乱锚
     * @return this 指针
     */
    putLuanMao(bVal: boolean): MahjongLiangFengChoiceQuestionComp {
        this._bLuanMao = bVal;
        return this;
    }

    /**
     * 刷新显示
     */
    renewDisplay(): void {
        cc.find("Box_0_", this.node).removeAllChildren();
        cc.find("Box_1_", this.node).removeAllChildren();

        if (null == this._oMahjongInHand && 
            this._oMahjongInHand.length <= 0) {
            return;
        }

        const oMahjongInHand = new Array<number>(...this._oMahjongInHand).sort((nA, nB) => nB - nA);

        const oBox_0_ = cc.find("Box_0_", this.node);
        const oBox_1_ = cc.find("Box_1_", this.node);

        let oNewNode: cc.Node = null;

        // 创建麻将牌节点
        oNewNode = __createMahjongTileNode(this, this._nMahjongMoPai);

        if (null != oNewNode) {
            oBox_0_.addChild(oNewNode);
            oNewNode.active = true;
        }

        for (let nCurrT of oMahjongInHand) {
            // 创建麻将牌节点
            oNewNode = __createMahjongTileNode(this, nCurrT);
            
            if (null != oNewNode) {
                oBox_1_.addChild(oNewNode);
                oNewNode.active = true;
            }
        }

        cc.find("Flag_LuanMao_0_", this.node).active = !this._bLuanMao;
        cc.find("Flag_LuanMao_1_", this.node).active = this._bLuanMao;
    }

    /**
     * 取消亮风
     * 
     * @override
     */
    onCancelQuestion(): void {
    }

    /**
     * 回答问题
     * 
     * @param oSelectedTArray 已经选择的麻将牌数组
     */
    onAnswerQuestion(oSelectedTArray: Array<number>): void {
        if (null == oSelectedTArray || 
            oSelectedTArray.length <= 0) {
            return;
        }
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 创建麻将牌节点
 * 
 * @param SELF this 指针
 * @param nT 麻将牌数值
 * @return Cocos 节点
 */
function __createMahjongTileNode(SELF: MahjongLiangFengChoiceQuestionComp, nT: number): cc.Node {
    if (null == SELF ||
        nT <= 0) {
        return null;
    }

    let oNewNode: cc.Node = null;

    if (MahjongTileDef.isFeng(nT) || 
        MahjongTileDef.isJian(nT)) {
        // 获取麻将牌操作节点
        const oMahjongTileOpTemplate = cc.find("MahjongTileOpTemplate", SELF.node);
        // 如果是风牌 ( 东南西北 ) 或者是箭牌 ( 中发白 )
        oNewNode = cc.instantiate(oMahjongTileOpTemplate);

        const oCustomAttr = {};
        oCustomAttr[ATTR_CUSTOM_MAHJONG_VAL] = nT;
        oCustomAttr[ATTR_CUSTOM_INDEX] = SELF._oMahjongTileOpNodeArray.length;
        // 设置自定义属性
        oNewNode.attr(oCustomAttr);
        // 添加到麻将牌操作节点数组中
        SELF._oMahjongTileOpNodeArray.push(oNewNode);

        oNewNode.on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            // 当点击该节点
            __mahjongTileOpNode_onTouchEnd(SELF, oNewNode);
        });
    } else {
        // 获取麻将牌暗黑模板
        const oMahjongDarkTemplate = cc.find("MahjongDarkTemplate", SELF.node);
        // 如果是其它麻将牌
        oNewNode = cc.instantiate(oMahjongDarkTemplate);
    }

    oNewNode.setPosition(0, 0);
    cc.find("Val", oNewNode).getComponent(cc.Sprite).spriteFrame = AllMahjongValImg.getSpriteFrame(nT);

    return oNewNode;
}

/**
 * 麻将牌操作节点点击事件
 * 
 * @param SELF this 指针
 * @param oUsedNode 选用节点
 */
function __mahjongTileOpNode_onTouchEnd(SELF: MahjongLiangFengChoiceQuestionComp, oUsedNode: cc.Node): void {
    if (null == SELF || 
        null == oUsedNode) {
        return;
    }

    let bSelected = !cc.find("Flag", oUsedNode).active;

    if (!bSelected) {
        // 如果是取消选中
        cc.find("Flag", oUsedNode).active = false;
        return;
    }

    // 如果是选中状态,
    // 那就得先看看是不是已经选中 3 个了...
    // 
    let nCounter = 0;
    let nSuit = -1;

    for (let oCurrNode of SELF._oMahjongTileOpNodeArray) {
        if (null == oCurrNode) {
            continue;
        }

        const bIzSelected = cc.find("Flag", oCurrNode).active;

        if (bIzSelected) {
            ++nCounter;

            if (oCurrNode != oUsedNode && 
                oCurrNode[ATTR_CUSTOM_MAHJONG_VAL] == oUsedNode[ATTR_CUSTOM_MAHJONG_VAL]) {
                cc.find("Flag", oCurrNode).active = false;
                cc.find("Flag", oUsedNode).active = true;
                
                cc.tween(cc.find("Flag", oUsedNode))
                    .by(0.12, { angle: -15 })
                    .by(0.12, { angle: +30 })
                    .by(0.12, { angle: -30 })
                    .by(0.12, { angle: +15 })
                    .start();
                return;
            }
        }

        if (nCounter > 0 && 
            nSuit < 0) {
            nSuit = MahjongTileDef.getSuit(oCurrNode[ATTR_CUSTOM_MAHJONG_VAL]);
        }
    }

    if (nCounter >= 3) {
        return;
    }

    // 如果没找过 3 个,
    // 
    if (-1 == nSuit || 
        SELF._bLuanMao) {
        // 如果麻将牌花色不确定 ( 就是还没有选中过任何牌 ), 
        // 或者如果选择了乱锚,
        // 那么当前节点可以直接选中...
        bSelected = true;
    } else {
        // 否则就看看花色是否一致
        bSelected = (nSuit == MahjongTileDef.getSuit(oUsedNode[ATTR_CUSTOM_MAHJONG_VAL]));

        if (!bSelected) {
            cc.tween(cc.find("Flag_LuanMao_0_", oUsedNode.parent.parent))
                .to(0.12, { angle: -15, scale: 1.6, })
                .to(0.12, { angle: +15 })
                .to(0.12, { angle: -15 })
                .to(0.12, { angle: 0, scale: 1, })
                .start();
        }
    }

    cc.find("Flag", oUsedNode).active = bSelected;

    if (bSelected) {
        cc.tween(cc.find("Flag", oUsedNode))
            .by(0.12, { angle: -15 })
            .by(0.12, { angle: +30 })
            .by(0.12, { angle: -30 })
            .by(0.12, { angle: +15 })
            .start();
    }
}
