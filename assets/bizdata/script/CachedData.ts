/**
 * 临时数据
 */
export default class CachedData {
    /**
     * 单例对象
     */
    private static readonly _oInstance: CachedData = new CachedData();

    /**
     * 内置字典
     */
    private _oInnerMap: {[strKey: string]: any} = {};

    /**
     * 私有化类默认构造器
     */
    private constructor() {
        if (null != CachedData._oInstance) {
            throw new Error("该类为单例类");
        }
    }

    /**
     * 获取单例对象
     * 
     * @return 单例对象
     */
    static getInstance(): CachedData {
        return this._oInstance;
    }

    /**
     * 设置数据
     * 
     * @param strKey 关键字
     * @param oVal 数值
     */
    set(strKey: string, oVal: any): void {
        if (null == strKey) {
            return;
        }

        if (null == oVal) {
            return this.remove(strKey);
            return;
        }
        
        this._oInnerMap[strKey] = oVal;
    }

    /**
     * 获取数据
     * 
     * @param strKey 关键字
     * @return 数值
     */
    get(strKey: string): any {
        return this._oInnerMap[strKey];
    }

    /**
     * 移除数据
     * 
     * @param strKey 关键字
     */
    remove(strKey: string): void {
        if (null != strKey) {
            delete this._oInnerMap[strKey];
        }
    }
}
