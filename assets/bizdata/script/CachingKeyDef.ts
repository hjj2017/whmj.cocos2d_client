/**
 * 缓存关键字定义
 */
export default class CachingKeyDef {
    /**
     * 规则设置
     */
    static readonly RULE_ITEM_ARRAY: string = "HRYKN3wJ_RuleSetting";

    /**
     * 缓存的房间
     */
    static readonly CACHED_ROOM: string = "KsMJdcbU_CachedRoom";

    /**
     * 禁止自动登录
     */
    static readonly DISABLE_AUTO_LOGIN: string = "J8fAEezI_DisableAutoLogin";

    /**
     * 私有化类默认构造器
     */
    private constructor() {
        throw new Error("该类不能实例化");
    }
}
