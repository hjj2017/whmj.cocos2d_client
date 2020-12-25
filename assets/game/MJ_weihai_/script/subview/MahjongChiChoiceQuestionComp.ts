// @import
import AllMahjongValImg from "../AllMahjongValImg";
import MahjongTileDef from "../MahjongTileDef";
import ModConfig from "../ModConfig.ver_MJ_weihai_";

// @const
const { ccclass } = cc._decorator;

/**
 * 麻将吃牌选择题组件
 */
@ccclass
export default class MahjongChiChoiceQuestionComp extends cc.Component {
    /**
     * 吃牌
     */
    private _nChiT: number = -1;

    /**
     * 显示选项 A
     */
    private _bDisplayOptionA: boolean = false;

    /**
     * 显示选项 B
     */
    private _bDisplayOptionB: boolean = false;

    /**
     * 显示选项 C
     */
    private _bDisplayOptionC: boolean = false;

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
     * 设置所有选项
     * 
     * @param nChiT 吃进来麻将牌
     * @param bDisplayOptionA 显示选项 A
     * @param bDisplayOptionB 显示选项 B
     * @param bDisplayOptionC 显示选项 C
     * @return this 指针
     */
    putAllOption(nChiT: number, bDisplayOptionA: boolean, bDisplayOptionB: boolean, bDisplayOptionC: boolean): MahjongChiChoiceQuestionComp {
        if (nChiT <= 0) {
            return this;
        }

        if (!bDisplayOptionA && 
            !bDisplayOptionB && 
            !bDisplayOptionC) {
            cc.error("没有可以展示的选项");
            return this;
        }

        this._nChiT = nChiT;
        this._bDisplayOptionA = bDisplayOptionA;
        this._bDisplayOptionB = bDisplayOptionB;
        this._bDisplayOptionC = bDisplayOptionC;

        return this;
    }

    /**
     * 刷新显示
     */
    renewDisplay(): void {
        let oTempOptionMap: { [strKey: string]: Array<number> } = {
            "OptionA": null,
            "OptionB": null,
            "OptionC": null,
        };

        if (this._bDisplayOptionA) {
            oTempOptionMap["OptionA"] = [
                MahjongTileDef.getValidVal(this._nChiT - 2),
                MahjongTileDef.getValidVal(this._nChiT - 1),
                this._nChiT,
            ];
        }

        if (this._bDisplayOptionB) {
            oTempOptionMap["OptionB"] = [
                MahjongTileDef.getValidVal(this._nChiT - 1),
                this._nChiT,
                MahjongTileDef.getValidVal(this._nChiT + 1),
            ];
        }

        if (this._bDisplayOptionC) {
            oTempOptionMap["OptionC"] = [
                this._nChiT,
                MahjongTileDef.getValidVal(this._nChiT + 1),
                MahjongTileDef.getValidVal(this._nChiT + 2),
            ];
        }

        // 获取 Bundle
        let oBundle = cc.assetManager.getBundle(ModConfig.BUNDLE_NAME);

        if (null == oBundle) {
            cc.error("oBundle is null");
            return;
        }

        for (let strOptionName in oTempOptionMap) {
            // 初始先隐藏
            cc.find(`Layout/${strOptionName}`, this.node).active = false;

            // 获取数组值
            let oArrayVal = oTempOptionMap[strOptionName];
            if (null == oArrayVal || 
                oArrayVal.length <= 0) {
                continue;
            }

            for (let nIndex = 0; nIndex < oArrayVal.length; nIndex++) {
                // 获取麻将牌数值
                let nMahjongVal = oArrayVal[nIndex];

                if (nMahjongVal <= 0) {
                    cc.error(`麻将牌数值错误, optionName = ${strOptionName}, index = ${nIndex}`);
                    break;
                }

                cc.find(`Layout/${strOptionName}/MahjongTile_${nIndex}_/Val`, this.node)
                    .getComponent(cc.Sprite)
                    .spriteFrame = AllMahjongValImg.getSpriteFrame(nMahjongVal);

                if (nIndex < 2) {
                    continue;
                }

                cc.find(`Layout/${strOptionName}`, this.node).active = true;
                cc.find(`Layout/${strOptionName}`, this.node)
                    .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
                    if ("function" == typeof this.onAnswerQuestion) {
                        this.onAnswerQuestion(strOptionName);
                    }
                });
            }
        }
    }

    /**
     * 当回答问题
     * 
     * @param nOptionX 某个选项
     * @override
     */
    onAnswerQuestion(strOptionX: string): void {
        if (null == strOptionX) {
            return;
        }
    }
}
