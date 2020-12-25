// @import
import RuleKeyDef from "../../../bizdata/script/RuleKeyDef";
import RuleLanguage from "../../../bizdata/script/RuleLanguage";

/**
 * 规则条目
 */
type RuleItem = {
    /** 关键字 */
    key?: number,
    /** 数值 */
    val?: number,
}

/**
 * 规则设置
 */
export default class RuleSetting {
    /**
     * 内置字典
     */
    private _oInnerMap: { [nKey: number]: number } = {};

    /**
     * 类参数构造器
     * 
     * @param oRuleItemArray 规则条目数组
     */
    constructor(oRuleItemArray: Array<RuleItem>) {
        if (!Array.isArray(oRuleItemArray)) {
            return;
        }

        for (let oRuleItem of oRuleItemArray) {
            if (null != oRuleItem) {
                this._oInnerMap[oRuleItem.key] = oRuleItem.val;
            }
        }
    }

    /**
     * 获取最大玩家数量
     * 
     * @return 最大玩家数量
     */
    getMaxPlayer(): number {
        return this._oInnerMap[RuleKeyDef.KEY_MAX_PLAYER];
    }

    /**
     * 获取最大局数
     * 
     * @return 最大局数
     */
    getMaxRound(): number {
        return this._oInnerMap[RuleKeyDef.KEY_MAX_ROUND];
    }

    /**
     * 获取最大圈数
     * 
     * @return 最大圈数
     */
    getMaxCircle(): number {
        return this._oInnerMap[RuleKeyDef.KEY_MAX_CIRCLE];
    }

    /**
     * 是否乱锚
     * 
     * @return true = 乱锚, false = 不乱锚
     */
    isLuanMao(): boolean {
        return this._oInnerMap[RuleKeyDef.KEY_PLAY_METHOD_LUAN_MAO] == 1;
    }

    /**
     * 获取最大玩家数量和最大局数
     * 
     * @return 最大玩家数量和最大局数
     */
    getMaxPlayerAndMaxRoundDesc(): string {
        // 局数关键字
        let nKeyRoundOrCircle: number = RuleKeyDef.KEY_MAX_ROUND;

        if (this.getMaxCircle()) {
            nKeyRoundOrCircle = RuleKeyDef.KEY_MAX_CIRCLE;
        }

        return (RuleLanguage.translateByRuleMap(this._oInnerMap, [
            RuleKeyDef.KEY_MAX_PLAYER, 
            nKeyRoundOrCircle,
        ]) ?? []).join(" / ");
    }

    /**
     * 获取支付方法说明
     * 
     * @return 支付方法说明
     */
    getPaymentWayDesc(): string {
        return RuleLanguage.translateByRuleMap(this._oInnerMap, [
            RuleKeyDef.KEY_PAYMENT_WAY,
        ] ?? []).join("");
    }

    /**
     * 获取玩法说明文本
     * 
     * @return 玩法说明文本
     */
    getPlayMethodDesc(): string {
        return (RuleLanguage.translateByRuleMap(this._oInnerMap, [
            RuleKeyDef.KEY_PLAY_METHOD_JIA_DANG,
            RuleKeyDef.KEY_PLAY_METHOD_YI_PAO_DUO_XIANG,
            RuleKeyDef.KEY_PLAY_METHOD_LUAN_MAO,
            RuleKeyDef.KEY_PLAY_METHOD_BU_HUANG_ZHUANG,
            RuleKeyDef.KEY_PLAY_METHOD_ZHI_PENG_BU_CHI,
            RuleKeyDef.KEY_PLAY_METHOD_JIA_WU,
            RuleKeyDef.KEY_PLAY_METHOD_BU_DAI_FENG,
            RuleKeyDef.KEY_PLAY_METHOD_LIANG_GANG_DING,
            RuleKeyDef.KEY_PLAY_METHOD_PIAO_FEN,
            RuleKeyDef.KEY_PLAY_METHOD_64_FAN_FENG_DING,
        ]) ?? []).join("、");
    }
}
