// @import
import Async from "./Async";

// @const
const DIR_SCRIPT = "script";
const PROMISE___ES_MODULE = "__esModule";
const PROMISE_DEFAULT = "default";
const FUNC_CREATE_ASYNC = "createAsync";

/**
 * 预制体 X 工厂类
 */
export default class PrefabXFactory {
    /**
     * 私有化类默认构造器
     */
    private constructor() {
    }

    /**
     * 创建预制体, 
     * 
     * XXX 注意: 如果使用该函数创建预制体, 那么必须要保证相关的 Bundle 已经被加载过...
     * 0 级资源 ( 存放于 res/0 目录下的所有文件 ) 必然会被提前加载,
     * 而 1 级资源就必须使用 createAsync 来加载!
     * 
     * @param strBundleName Bundle 名称
     * @param strPrefabPath 预制体路径
     * @param oType 要绑定的组件类型, 也就是会调用 addComponent(...) 添加组件
     * @return Cocos 节点对象
     * @see createAsync
     */
    static create(strBundleName: string, strPrefabPath: string, oType: new() => cc.Component): cc.Node {
        if (null == strBundleName || 
            null == strPrefabPath) {
            return null;
        }

        // 获取 Bundle
        let oBundle = cc.assetManager.getBundle(strBundleName);

        if (null == oBundle) {
            cc.error(`Bundle is null, bundleName = ${strBundleName}`);
            return null;
        }

        // 获取已经缓存的预制体
        const oCachedPrefab = oBundle.get(strPrefabPath) as cc.Prefab;
        
        if (null == oCachedPrefab) {
            cc.log(`预制体为空, prefabPath = ${strPrefabPath}`);
            return null;
        }

        let oNewNode = cc.instantiate(oCachedPrefab);

        if (!oNewNode) {
            cc.error(`创建新节点失败, prefabPath = ${strPrefabPath}`);
            return null;
        }

        if (null != oType) {
            // 添加组件
            oNewNode.addComponent(oType);
        }

        return oNewNode;
    }

    /**
     * ( 异步方式 ) 创建预制体
     * 
     * @param strBundleName Bundle 名称
     * @param strPrefabPath 预制体路径
     * @param oType 要绑定的组件类型, 也就是会调用 addComponent(...) 添加组件
     * @param funCallback 回调函数
     */
    static createAsync(strBundleName: string, strPrefabPath: string, oType: new() => cc.Component, funCallback: (oNewDialog: cc.Node) => void): void {
        // 确保回调函数不为空
        const funCbFinally = funCallback || function() {
        };

        if (null == strBundleName || 
            null == strPrefabPath) {
            funCbFinally(null);
            return;
        }

        let oThatBundle = cc.assetManager.getBundle(strBundleName);

        Async.serial(
            // step000: 先加载 Bundle
            (funYesContinue) => {
                if (null != oThatBundle) {
                    funYesContinue();
                    return;
                }

                cc.assetManager.loadBundle(strBundleName, (oError: Error, oLoadedBundle: cc.AssetManager.Bundle) => {
                    if (null != oError) {
                        cc.error(oError);
                        funCbFinally(null);
                        return;
                    }

                    if (null == oLoadedBundle) {
                        cc.error(`Bundle is null, bundleName = ${strBundleName}`);
                        funCbFinally(null);
                        return;
                    }

                    oThatBundle = oLoadedBundle;
                    funYesContinue();
                });
            },

            // stepFinally: 加载预制体
            () => {
                // 获取缓存预制体
                let oCachedPrefab = oThatBundle.get(strPrefabPath) as cc.Prefab;

                if (null != oCachedPrefab) {
                    // 创建新节点
                    let oNewNode = cc.instantiate(oCachedPrefab);
                    oNewNode.addComponent(oType);
                    funCbFinally(oNewNode);
                    return;
                }

                // 加载预制体
                oThatBundle.load(strPrefabPath, cc.Prefab, (oError: Error, oLoadedPrefab: cc.Prefab) => {
                    if (null != oError) {
                        cc.log(oError);
                        funCbFinally(null);
                        return;
                    }

                    if (null == oLoadedPrefab) {
                        cc.log(`加载预制体为空, prefabPath = ${strPrefabPath}`);
                        funCbFinally(null);
                        return;
                    }

                    // 创建新节点
                    let oNewNode = cc.instantiate(oLoadedPrefab);

                    if (null == oNewNode) {
                        cc.error(`创建新节点失败, prefabPath = ${strPrefabPath}`);
                        funCbFinally(null);
                        return;
                    }

                    // 添加代码组件
                    oNewNode.addComponent(oType);
                    funCbFinally(oNewNode);
                });
            },
        );
    }

    /**
     * ( 异步方式 ) 使用具体工厂创建预制体
     * 
     * @param strBundleName Bundle 名称
     * @param strFactoryClazz 工厂类
     * @param funCallback 回调函数
     */
    static useSpecifyFactoryCreate(strBundleName: string, strFactoryClazz: string, funCallback: (oNewDialog: cc.Node) => void): void {
        // 确保回调函数不为空
        const funCbFinally = funCallback || function() {
        };

        if (null == strBundleName || 
            null == strFactoryClazz) {
            funCbFinally(null);
            return;
        }

        let oThatBundle = cc.assetManager.getBundle(strBundleName);

        Async.serial(
            // step000: 先加载 Bundle
            (funYesContinue) => {
                if (null != oThatBundle) {
                    funYesContinue();
                    return;
                }

                cc.assetManager.loadBundle(strBundleName, (oError: Error, oLoadedBundle: cc.AssetManager.Bundle) => {
                    if (null != oError) {
                        cc.error(oError);
                        funCbFinally(null);
                        return;
                    }

                    if (null == oLoadedBundle) {
                        cc.error(`Bundle is null, bundleName = ${strBundleName}`);
                        funCbFinally(null);
                        return;
                    }

                    oThatBundle = oLoadedBundle;
                    funYesContinue();
                });
            },

            // step010: 加载 script 目录所有脚本
            (funYesContinue) => {
                if (null == oThatBundle) {
                    cc.error(`Bundle 为空, bundleName = ${strBundleName}`);
                    return;
                }

                oThatBundle.loadDir(DIR_SCRIPT, (oError) => {
                    if (null != oError) {
                        cc.error(oError);
                        funCbFinally(null);
                        return;
                    }

                    funYesContinue();
                });
            },

            // stepFinally: 动态引用工厂类并创建预制体
            () => {
                // 动态引用类
                let oPromise = import(strFactoryClazz);

                if (null == oPromise) {
                    cc.error(`导入类失败, factoryClazz = ${strFactoryClazz}`);
                    return;
                }

                oPromise.then((oResult) => {
                    if (!oResult[PROMISE___ES_MODULE]) {
                        // 如果加载的不是 ES 模块,
                        cc.error(`非 ES 模块, factoryClazz = ${strFactoryClazz}`);
                        return;
                    }

                    // 创建函数
                    let funCreateAsync = oResult[PROMISE_DEFAULT][FUNC_CREATE_ASYNC];

                    if ("function" != typeof(funCreateAsync)) {
                        // 如果不是函数,
                        cc.error(`在 ${strFactoryClazz} 类中未找到 ${FUNC_CREATE_ASYNC} 函数`);
                        return;
                    }

                    // 创建预制体
                    funCreateAsync(funCbFinally);
                });
            }
        );
    }
}
