/**
 * 规则条目
 */
type RuleItem = {
    /** 关键字 */
    key?: number,
    /** 数值 */
    val?: number,
}

const GAME_TYPE_0_KEY_MJ_weihai = 1001;
const GAME_TYPE_0_VAL_MJ_weihai = "威海麻将";

// 人类语言字典
const HUMAN_LANGUAGE_MAP = {
    // 支付方式
    "1002=0": "亲友圈圈主支付",
    "1002=1": "房主支付",
    "1002=2": "均摊支付",

    // 人数
    "1003=2": "2人",
    "1003=3": "3人",
    "1003=4": "4人",

    // 局数
    "1004=4": "4局",
    "1004=5": "5局",
    "1004=6": "6局",
    "1004=8": "8局",
    "1004=10": "10局",
    "1004=12": "12局",
    "1004=16": "16局",
    "1004=20": "20局",
    "1004=26": "26局",
    "1005=1": "1圈",
    "1005=2": "2圈",
    "1005=4": "4圈",

    // 玩法
    "2001=1": "夹档",
    "2002=1": "一炮多响",
    "2003=1": "乱锚",
    "2004=1": "不荒庄",
    "2005=1": "只碰不吃",
    "2006=1": "夹五",
    "2007=1": "不带风",
    "2008=1": "亮杠腚",
    "2009=1": "飘分",
    "2010=1": "64番封顶",
};

/**
 * 规则语言
 */
export default class RuleLanguage {
    /**
     * 私有化类默认构造器
     */
    private constructor() {
    }

    /**
     * 翻译游戏类型 1
     * 
     * @param nGameType1 游戏类型 1
     * @return 人类可以读的懂的词组
     */
    static translateGameType1(nGameType1: number): string {
        switch (nGameType1) {
            case GAME_TYPE_0_KEY_MJ_weihai:
                return GAME_TYPE_0_VAL_MJ_weihai;

            default:
                return "";
        }
    }

    /**
     * 根据规则条目数组翻译
     * 
     * @param oRuleItemArray 规则条目数组
     * @return 人类可以读的懂的词组
     */
    static translateByRuleItemArray(oRuleItemArray: Array<RuleItem>): Array<string> {
        if (null == oRuleItemArray || 
            oRuleItemArray.length <= 0) {
            return null;
        }

        oRuleItemArray = oRuleItemArray.sort((oA, oB) => oA.key - oB.key);
        let oTextArray: Array<string> = [];

        for (let oRuleItem of oRuleItemArray) {
            if (null == oRuleItem) {
                continue;
            }

            let strText = HUMAN_LANGUAGE_MAP[`${oRuleItem.key}=${oRuleItem.val}`];

            if (null != strText) {
                oTextArray.push(strText);
            }
        }

        return oTextArray;
    }

    /**
     * 根据规则字典翻译
     * 
     * @param oRuleMap 规则字典
     * @param oKeyArray 关键字数组
     * @return 人类可以读的懂的词组
     */
    static translateByRuleMap(oRuleMap: { [nKey: number]: number}, oKeyArray: Array<number>): Array<string> {
        if (null == oRuleMap || 
            null == oKeyArray || 
            oKeyArray.length <= 0) {
            return null;
        }

        let oTextArray: Array<string> = [];

        for (let nKey of oKeyArray) {
            if (!(nKey in oRuleMap)) {
                // 如果没有选中该选项,
                // 则直接跳过...
                continue;
            }

            let nVal = oRuleMap[nKey];
            let strText = HUMAN_LANGUAGE_MAP[`${nKey}=${nVal}`];

            if (null != strText) {
                oTextArray.push(strText);
            }
        }

        return oTextArray;
    }
}
