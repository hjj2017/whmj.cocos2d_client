// @const
const LOCAL_STORAGE_KEY_APP_SETTING = "7HIZEV0JrGTvh_AppSetting_";

/**
 * App 设置
 */
export default class AppSetting {
    /**
     * 单例对象
     */
    private static _oInstance: AppSetting = null;

    /**
     * 是否开启背景音乐
     */
    _bEnableBGMusic: boolean;

    /**
     * 是否开启音效
     */
    _bEnableSound: boolean;

    /**
     * 是否开启语音
     */
    _bEnableVoice: boolean;

    /**
     * 私有化类默认构造器
     */
    private constructor() {
        if (null != AppSetting._oInstance) {
            throw new Error("该类为单例类");
        }

        this._bEnableBGMusic = true;
        this._bEnableSound = true;
        this._bEnableVoice = true;
    }

    /**
     * 获取单例对象
     * 
     * @return 单例对象
     */
    static getInstance(): AppSetting {
        if (null == AppSetting._oInstance) {
            AppSetting._oInstance = new AppSetting();
            AppSetting._oInstance.load();
        }

        return AppSetting._oInstance;
    }

    /**
     * 加载配置
     */
    private load(): void {
        // 获取 JSON 字符串
        let strJSON = cc.sys.localStorage.getItem(LOCAL_STORAGE_KEY_APP_SETTING);

        if (null == strJSON) {
            return;
        }
        
        let oJSON = JSON.parse(strJSON);
        this._bEnableBGMusic = oJSON["enableBGMusic"];
        this._bEnableSound = oJSON["enableSound"];
        this._bEnableVoice = oJSON["enableVoice"];
    }

    /**
     * 保存 App 配置
     */
    save(): void {
        cc.sys.localStorage.setItem(
            LOCAL_STORAGE_KEY_APP_SETTING, JSON.stringify({
                "enableBGMusic": this._bEnableBGMusic,
                "enableSound": this._bEnableSound,
                "enableVoice": this._bEnableVoice,
            })
        );
    }
}
