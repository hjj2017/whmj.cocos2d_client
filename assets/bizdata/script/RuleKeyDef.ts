/**
 * 规则关键字定义
 */
export default class RuleKeyDef {
// 支付方式、人数、局数
///////////////////////////////////////////////////////////////////////

    /** 支付方式 */
    static readonly KEY_PAYMENT_WAY = 1002;
    /** 最大玩家数量 */
    static readonly KEY_MAX_PLAYER = 1003;
    /** 最大局数 */
    static readonly KEY_MAX_ROUND = 1004;
    /** 最大圈数 */
    static readonly KEY_MAX_CIRCLE = 1005;

// 玩法相关
///////////////////////////////////////////////////////////////////////

    /** 加档 */
    static readonly KEY_PLAY_METHOD_JIA_DANG = 2001;
    /** 一炮多响 */
    static readonly KEY_PLAY_METHOD_YI_PAO_DUO_XIANG = 2002;
    /** 乱锚 */
    static readonly KEY_PLAY_METHOD_LUAN_MAO = 2003;
    /** 不荒庄 */
    static readonly KEY_PLAY_METHOD_BU_HUANG_ZHUANG = 2004;
    /** 只碰不吃 */
    static readonly KEY_PLAY_METHOD_ZHI_PENG_BU_CHI = 2005;
    /** 夹五 */
    static readonly KEY_PLAY_METHOD_JIA_WU = 2006;
    /** 不带风 */
    static readonly KEY_PLAY_METHOD_BU_DAI_FENG = 2007;
    /** 亮杠腚 */
    static readonly KEY_PLAY_METHOD_LIANG_GANG_DING = 2008;
    /** 飘分 */
    static readonly KEY_PLAY_METHOD_PIAO_FEN = 2009;
    /** 64 番封顶 */
    static readonly KEY_PLAY_METHOD_64_FAN_FENG_DING = 2010;

    /**
     * 私有化类默认构造器
     */
    private constructor() {
    }
}
