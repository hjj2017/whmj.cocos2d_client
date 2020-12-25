/**
 * 模块配置
 */
export default class ModConfig {
    /**
     * Bundle 名称
     */
    static readonly BUNDLE_NAME: string = "MJ_weihai_";

    /**
     * 私有化类默认构造器
     */
    private constructor() {
        throw new Error("该类不能实例化");
    }
}
