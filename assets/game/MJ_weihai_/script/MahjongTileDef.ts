/** 未知 */
const SUIT_UNKNOWN = -1;
/** 麻将花色 - 万 */
const SUIT_WAN = 20;
/** 麻将花色 - 条 */
const SUIT_TIAO = 40;
/** 麻将花色 - 饼 */
const SUIT_BING = 80;
/** 麻将花色 - 风 */
const SUIT_FENG = 100;
/** 麻将花色 - 箭 */
const SUIT_JIAN = 200;

/**
 * 麻将牌定义
 */
export default class MahjongTileDef {
    /** 遮挡值 */
    static readonly MASK_VAL: number = 7;

    /** 1 万 */
    static readonly _1_WAN: number = 21;
    /** 2 万 */
    static readonly _2_WAN: number = 22;
    /** 3 万 */
    static readonly _3_WAN: number = 23;
    /** 4 万 */
    static readonly _4_WAN: number = 24;
    /** 5 万 */
    static readonly _5_WAN: number = 25;
    /** 6 万 */
    static readonly _6_WAN: number = 26;
    /** 7 万 */
    static readonly _7_WAN: number = 27;
    /** 8 万 */
    static readonly _8_WAN: number = 28;
    /** 9 万 */
    static readonly _9_WAN: number = 29;

    /** 1 条 */
    static readonly _1_TIAO: number = 41;
    /** 2 条 */
    static readonly _2_TIAO: number = 42;
    /** 3 条 */
    static readonly _3_TIAO: number = 43;
    /** 4 条 */
    static readonly _4_TIAO: number = 44;
    /** 5 条 */
    static readonly _5_TIAO: number = 45;
    /** 6 条 */
    static readonly _6_TIAO: number = 46;
    /** 7 条 */
    static readonly _7_TIAO: number = 47;
    /** 8 条 */
    static readonly _8_TIAO: number = 48;
    /** 9 条 */
    static readonly _9_TIAO: number = 49;

    /** 1 饼 */
    static readonly _1_BING: number = 81;
    /** 2 饼 */
    static readonly _2_BING: number = 82;
    /** 3 饼 */
    static readonly _3_BING: number = 83;
    /** 4 饼 */
    static readonly _4_BING: number = 84;
    /** 5 饼 */
    static readonly _5_BING: number = 85;
    /** 6 饼 */
    static readonly _6_BING: number = 86;
    /** 7 饼 */
    static readonly _7_BING: number = 87;
    /** 8 饼 */
    static readonly _8_BING: number = 88;
    /** 9 饼 */
    static readonly _9_BING: number = 89;

    /** 东风 */
    static readonly DONG_FENG: number = 101;
    /** 南风 */
    static readonly NAN_FENG: number = 103;
    /** 西风 */
    static readonly XI_FENG: number = 105;
    /** 北风 */
    static readonly BEI_FENG: number = 107;

    /** 红中 */
    static readonly HONG_ZHONG: number = 126;
    /** 发财 */
    static readonly FA_CAI: number = 188;
    /** 白板 */
    static readonly BAI_BAN: number = 255;

    /** 数值数组 */
    static readonly VALUE_ARRAY: Array<number> = [
        MahjongTileDef._1_WAN,
        MahjongTileDef._2_WAN,
        MahjongTileDef._3_WAN,
        MahjongTileDef._4_WAN,
        MahjongTileDef._5_WAN,
        MahjongTileDef._6_WAN,
        MahjongTileDef._7_WAN,
        MahjongTileDef._8_WAN,
        MahjongTileDef._9_WAN,

        MahjongTileDef._1_TIAO,
        MahjongTileDef._2_TIAO,
        MahjongTileDef._3_TIAO,
        MahjongTileDef._4_TIAO,
        MahjongTileDef._5_TIAO,
        MahjongTileDef._6_TIAO,
        MahjongTileDef._7_TIAO,
        MahjongTileDef._8_TIAO,
        MahjongTileDef._9_TIAO,

        MahjongTileDef._1_BING,
        MahjongTileDef._2_BING,
        MahjongTileDef._3_BING,
        MahjongTileDef._4_BING,
        MahjongTileDef._5_BING,
        MahjongTileDef._6_BING,
        MahjongTileDef._7_BING,
        MahjongTileDef._8_BING,
        MahjongTileDef._9_BING,

        MahjongTileDef.DONG_FENG,
        MahjongTileDef.NAN_FENG,
        MahjongTileDef.XI_FENG,
        MahjongTileDef.BEI_FENG,
        MahjongTileDef.HONG_ZHONG,
        MahjongTileDef.FA_CAI,
        MahjongTileDef.BAI_BAN,
    ];

    /**
     * 私有化类默认构造器
     */
    private constructor() {
        throw new Error("该类不能实例化");
    }

    /**
     * 获取合法的麻将牌数值
     * 
     * @param nVal 原数值
     * @return 合法的麻将牌数值, 如果不合法则返回 -1
     */
    static getValidVal(nVal: number): number {
        for (let nCurr of MahjongTileDef.VALUE_ARRAY) {
            if (nVal == nCurr) {
                return nVal;
            }
        }

        return -1;
    }

    /**
     * 是否是万
     * 
     * @param nVal true = 是, false = 不是
     */
    static isWan(nVal: number): boolean {
        return nVal == MahjongTileDef._1_WAN
            || nVal == MahjongTileDef._2_WAN
            || nVal == MahjongTileDef._3_WAN
            || nVal == MahjongTileDef._4_WAN
            || nVal == MahjongTileDef._5_WAN
            || nVal == MahjongTileDef._6_WAN
            || nVal == MahjongTileDef._7_WAN
            || nVal == MahjongTileDef._8_WAN
            || nVal == MahjongTileDef._9_WAN;
    }

    /**
     * 是否是条
     * 
     * @param nVal true = 是, false = 不是
     */
    static isTiao(nVal: number): boolean {
        return nVal == MahjongTileDef._1_TIAO
            || nVal == MahjongTileDef._2_TIAO
            || nVal == MahjongTileDef._3_TIAO
            || nVal == MahjongTileDef._4_TIAO
            || nVal == MahjongTileDef._5_TIAO
            || nVal == MahjongTileDef._6_TIAO
            || nVal == MahjongTileDef._7_TIAO
            || nVal == MahjongTileDef._8_TIAO
            || nVal == MahjongTileDef._9_TIAO;
    }

    /**
     * 是否是饼
     * 
     * @param nVal true = 是, false = 不是
     */
    static isBing(nVal: number): boolean {
        return nVal == MahjongTileDef._1_BING
            || nVal == MahjongTileDef._2_BING
            || nVal == MahjongTileDef._3_BING
            || nVal == MahjongTileDef._4_BING
            || nVal == MahjongTileDef._5_BING
            || nVal == MahjongTileDef._6_BING
            || nVal == MahjongTileDef._7_BING
            || nVal == MahjongTileDef._8_BING
            || nVal == MahjongTileDef._9_BING;
    }

    /**
     * 是否是万条饼
     * 
     * @param nVal true = 是, false = 不是
     */
    static isWanTiaoBing(nVal: number): boolean {
        return MahjongTileDef.isWan(nVal) || MahjongTileDef.isTiao(nVal) || MahjongTileDef.isBing(nVal);
    }

    /**
     * 是否为风牌 ( 东南西北 )
     * 
     * @param nVal true = 是, false = 不是
     */
    static isFeng(nVal: number): boolean {
        return nVal == MahjongTileDef.DONG_FENG
            || nVal == MahjongTileDef.NAN_FENG
            || nVal == MahjongTileDef.XI_FENG
            || nVal == MahjongTileDef.BEI_FENG;
    }

    /**
     * 是否是箭牌 ( 中发白 )
     * 
     * @param nVal true = 是, false = 不是
     */
    static isJian(nVal: number): boolean {
        return nVal == MahjongTileDef.HONG_ZHONG
            || nVal == MahjongTileDef.FA_CAI
            || nVal == MahjongTileDef.BAI_BAN;
    }

    /**
     * 获取麻将牌花色
     * 
     * @param nVal 麻将牌数值
     */
    static getSuit(nVal: number): number {
        if (MahjongTileDef.isWan(nVal)) {
            return SUIT_WAN;
        } else
        if (MahjongTileDef.isTiao(nVal)) {
            return SUIT_TIAO;
        } else
        if (MahjongTileDef.isBing(nVal)) {
            return SUIT_BING;
        } else
        if (MahjongTileDef.isFeng(nVal)) {
            return SUIT_FENG;
        } else
        if (MahjongTileDef.isJian(nVal)) {
            return SUIT_JIAN;
        } else {
            return SUIT_UNKNOWN;
        }
    }
}
