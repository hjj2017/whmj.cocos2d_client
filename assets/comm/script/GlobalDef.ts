/**
 * 全局配置
 */
export default class GlobalDef {
    /**
     * 服务器地址
     */
    static readonly _strServerAddr: string = "whmj.afrxvk.cn:20480";

    /**
     * CDN 静态页面地址
     */
    static readonly _strCdnStaticPageURI: string = "http://cdn0001.afrxvk.cn/whmj/static/v0.0.1";

    /**
     * App 分享 URL
     */
    static readonly _strShareAppURL: string = "http://cdn0001.afrxvk.cn/whmj/go.html";

    /**
     * 亲友圈统计链接
     */
    static readonly _strClubStatURL: string = "http://cdn0001.afrxvk.cn/whmj/dummy/hello.txt";

    /**
     * Ukey
     */
    static readonly _strLocalStorageUkey: string = "MJ_weihai__ukey_qi7CCyA2KfdTKqwWB1xx";

    /**
     * 标准屏幕宽度
     */
    static readonly _nStandardScreenWidth = 1920;

    /**
     * 标准屏幕高度
     */
    static readonly _nStandardScreenHeight = 1080;

    /**
     * 私有化类默认构造器
     */
    private constructor() {
    }
}
