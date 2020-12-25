/**
 * 无参数函数
 */
type FuncWithoutParamz = (funYesContinue: () => void) => void

/**
 * 异步操作, 模拟 nodejs 中的 async 库
 */
export default class Async {
    /**
     * 私有化类默认构造器
     */
    private constructor() {
    }

    /**
     * 顺序调用
     * 
     * @param oFunQ 函数队列
     */
    static serial(...oFunQ: Array<FuncWithoutParamz>): void {
        if (!oFunQ || 
            oFunQ.length <= 0) {
            return;
        }

        // 循环函数
        let funYesContinue = () => {
            if (null == oFunQ || 
                oFunQ.length <= 0) {
                return;
            }

            // 函数对象出队
            let funCurr = oFunQ.shift();

            if (!funCurr) {
                funYesContinue();
                return;
            }

            // 将回调函数作为参数
            funCurr(funYesContinue);
        };

        funYesContinue();
    }
}
