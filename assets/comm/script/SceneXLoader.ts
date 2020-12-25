// @import
import Async from "./Async";
import LoadingWndFactory from "./LoadingWndFactory";

// @const
const RES_0 = "res/0";

/**
 * 场景 X 加载器
 */
export default class SceneXLoader {
    /**
     * 私有化类默认构造器
     */
    private constructor() {
    }

    /**
     * 开始加载场景
     * 
     * @param strBundleName Bundle 名称
     * @param strSceneName 场景名称
     */
    static startLoad(strBundleName: string, strSceneName: string): void {
        if (null == strBundleName || 
            null == strSceneName) {
            return;
        }

        // Bundle
        let oLoadedBundle: cc.AssetManager.Bundle = null;

        Async.serial(
            // step000:
            // 事先加载 Bundle
            (funYesContinue) => {
                cc.assetManager.loadBundle(strBundleName, (oError: Error, oBundle: cc.AssetManager.Bundle) => {
                    if (null != oError) {
                        cc.log(oError);
                        return;
                    }

                    oLoadedBundle = oBundle;
                    funYesContinue();
                });
            },

            // step010:
            // 预加载零级资源目录
            (funYesContinue) => {
                if (null == oLoadedBundle) {
                    cc.error("oLoadedBundle is null");
                    return;
                }

                oLoadedBundle.preloadDir(
                    RES_0, 
                
                    // onProgress
                    (nCompletedCount, nTotalCount/*, oItem*/) => {
                        LoadingWndFactory.getCreatedWnd()
                            .putCurrProgress(nCompletedCount / nTotalCount)
                            .putHint("请稍候...")
                            .renewDisplay();
                    },

                    // onComplete
                    (oError: Error/*, oItemArray: Array<cc.AssetManager.RequestItem>*/) => {
                        if (null != oError) {
                            cc.error(oError);
                            return;
                        }

                        // 预加载完成之后, 再单独加载一次!
                        // 这事 Cocos Creator 框架机制决定的...
                        oLoadedBundle.loadDir("res/0", (oError: Error) => {
                            if (null != oError) {
                                cc.error(oError);
                                return;
                            }

                            funYesContinue();
                        });
                    }
                );
            },

            // step020:
            // 预加载场景
            () => {
                oLoadedBundle.preloadScene(strSceneName, (oError: Error) => {
                    if (null != oError) {
                        cc.error(oError);
                        return;
                    }

                    oLoadedBundle.loadScene(strSceneName, (oError: Error) => {
                        if (null != oError) {
                            cc.error(oError);
                            return;
                        }

                        cc.director.loadScene(strSceneName);
                    });
                });
            },
        );
    }
}
