/**
 * 输出参数
 */
export default class OutParam<T> {
    /**
     * 值
     */
    private _oVal: T = null;

    /**
     * 类参数构造器
     * 
     * @param oVal 值
     */
    constructor(oVal: T = null) {
        this._oVal = oVal;
    }

    /**
     * 获取值
     */
    get(): T {
        return this._oVal;
    }

    /**
     * 设置值
     * 
     * @param oVal 值
     */
    put(oVal: T) {
        this._oVal = oVal;
    }
}
