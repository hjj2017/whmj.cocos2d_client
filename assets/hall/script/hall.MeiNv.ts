// @import
import Async from "../../comm/script/Async";
import AudioMajordomo from "../../comm/script/AudioMajordomo";
import ModConfig from "./hall.ModConfig";

// @const
const SPINE_DIR = "res/1/spine/meiNv";
const PREFAB_MEI_NV = "res/1/prefab/MeiNv";
const SOUND_UH_HUH = "res/1/audio/Uh_Huh";

/**
 * 美女
 */
export default class MeiNv {
    /**
     * 单例对象
     */
    private static readonly _oInstance = new MeiNv();

    /**
     * 最后点击时间
     */
    private _nLastClickedTime: number = -1;

    /**
     * 私有化类默认构造器
     */
    private constructor() {
    }

    /**
     * 获取单例对象
     */
    static getInstance(): MeiNv {
        return this._oInstance;
    }

    /**
     * 美女登场
     */
    entry(): void {
        __loadSpineAnim((oMeiNv) => {
            if (null == oMeiNv) {
                return;
            }

            oMeiNv.on(cc.Node.EventType.TOUCH_END, () => {
                // 获取当前时间
                const nCurrTime = Date.now();

                if ((nCurrTime - this._nLastClickedTime) <= 10000) {
                    return;
                }

                this._nLastClickedTime = nCurrTime;

                let oSpSkeleton = oMeiNv.getComponent(sp.Skeleton);
                let oTrackEntry = oSpSkeleton.addAnimation(1, "Uh_Huh", false, 0);
                
                oSpSkeleton.setTrackCompleteListener(oTrackEntry, () => {
                    oSpSkeleton.clearTrack(1);
                });

                AudioMajordomo.getInstance().playVoice(
                    ModConfig.BUNDLE_NAME,
                    SOUND_UH_HUH
                );
            });

            cc.find("Canvas/MeiNvPlace").addChild(oMeiNv);

            cc.tween(oMeiNv)
                .to(0.24, { x: -580, })
                .start();
        });
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 加载 Spine 动画
 * 
 * @param funLoadFinished 加载完成回调
 */
function __loadSpineAnim(funLoadFinished: (oMeiNv: cc.Node) => void): void {
    if (null == funLoadFinished) {
        return;
    }

    // 获取 Bundle
    let oBundle = cc.assetManager.getBundle(ModConfig.BUNDLE_NAME);

    if (null == oBundle) {
        cc.error("oBundle is null");
        return null;
    }

    Async.serial(
        (funYesContinue) => {
            oBundle.preloadDir(SPINE_DIR, (oError) => {
                if (null != oError) {
                    cc.error(oError);
                    return;
                }

                funYesContinue();
            });
        },

        () => {
            // 获取已经缓存的预制体
            oBundle.load(PREFAB_MEI_NV, (oError, oPrefab: cc.Prefab) => {
                if (null != oError) {
                    cc.error(oError);
                    return;
                }

                let oMeiNv = cc.instantiate(oPrefab);

                if (null != oMeiNv) {
                    funLoadFinished(oMeiNv);
                }
            });
        },
    );
}
