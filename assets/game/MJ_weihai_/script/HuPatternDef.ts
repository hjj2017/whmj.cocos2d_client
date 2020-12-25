// 人类语言字典
const HUMAN_LANGUAGE_DICT = {
    1: "平胡",
    1001: "庄家",
    1002: "自摸",
    1007: "七小对",
    1017: "豪华七小对",
    1027: "双豪华七小对",
    1037: "超豪华七小对",
    1111: "清一色",
    1112: "混一色",
    2222: "碰碰胡",
    4000: "门清",
    4001: "手把一",
    4003: "杠上开花",
    4004: "杠后炮",
    5001: "夹胡",
    5005: "夹五",
    9001: "天胡",
    9002: "地胡",
    9999: "海底捞月",
};

/**
 * 胡牌模式定义
 */
export default class HuPatternDef {
    /**
     * 私有化类默认构造器
     */
    private constructor() {
        throw new Error("该类不能实例化");
    }

    /**
     * 获取字符串值
     * 
     * @param nIntVal 整数值
     */
    static getStrVal(nIntVal: number): string {
        return HUMAN_LANGUAGE_DICT[nIntVal];
    }

    /**
     * 获取拼接好的字符串值
     * 
     * @param oKeyAndValArray 键值数值
     * @param strJoin 连接字符串
     * @return 连接好的字符串
     */
    static getConcatStrVal(oKeyAndValArray: Array<{ key: number, val: number, }>, strJoin: string = ","): string {
        let oStrValArray: Array<string> = [];

        for (let oKeyAndVal of oKeyAndValArray) {
            if (null == oKeyAndVal || 
                null == oKeyAndVal.key) {
                continue;
            }

            oStrValArray.push(HUMAN_LANGUAGE_DICT[oKeyAndVal.key] + ` ( x${oKeyAndVal.val} )`);
        }

        return oStrValArray.join(strJoin);
    }
}
