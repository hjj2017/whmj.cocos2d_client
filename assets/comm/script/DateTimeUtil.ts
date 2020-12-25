/**
 * 日期时间实用工具
 */
export default class DateTimeUtil {
    /**
     * 私有化类默认构造器
     */
    private constructor() {
    }

    /**
     * 获取日期时间字符串, 例如: "2020年10月10日"
     * 
     * @param nMS 毫秒数
     * @return 日期时间字符串
     */
    static getYYYYMMdd(nMS: number): string {
        let oDate = new Date(nMS);
        return oDate.getFullYear() + "年"
            + __zeroFill(oDate.getMonth() + 1) + "月"
            + __zeroFill(oDate.getDate()) + "日";
    }

    /**
     * 获取日期时间字符串, 例如: "2020年10月10日 10:10:59"
     * 
     * @param nMS 毫秒数
     * @return 日期时间字符串
     */
    static getYYYYMMddHHmmzzStr(nMS: number): string {
        let oDate = new Date(nMS);
        return oDate.getFullYear() + "年"
            + __zeroFill(oDate.getMonth() + 1) + "月"
            + __zeroFill(oDate.getDate()) + "日" 
            + " " + __zeroFill(oDate.getHours()) 
            + ":" + __zeroFill(oDate.getMinutes()) 
            + ":" + __zeroFill(oDate.getSeconds());
    }

    /**
     * 获取日期时间字符串, 例如: "10月10日 10:10"
     * 
     * @param nMS 毫秒数
     * @return 日期时间字符串
     */
    static getMMddHHmmStr(nMS: number): string {
        let oDate = new Date(nMS);
        return __zeroFill(oDate.getMonth() + 1) + "月" 
            + __zeroFill(oDate.getDate()) + "日" 
            + " " + __zeroFill(oDate.getHours()) 
            + ":" + __zeroFill(oDate.getMinutes());
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 补零
 * 
 * @param nNum 数字
 * @return 补零后的字符串
 */
function __zeroFill(nNum: number): string {
    if (nNum < 10) {
        return "0" + nNum;
    } else {
        return nNum.toString();
    }
}
