/**
 * 地理坐标
 */
type GeoCoordz = {
    /** 纬度 */
    latitude: number,
    /** 经度 */
    longitude: number,
    /** 海拔 */
    altitude: number,
};

/**
 * 本地浏览器
 */
export default class LocalBrowser {
    /**
     * 私有化类默认构造器
     */
    private constructor() {
    }

    /**
     * 获取查询参数
     * 
     * @param paramName 参数名称
     * @return 参数值
     */
    static getParamValFromURL(paramName: string): string {    
        if (!cc.sys.isBrowser) {
            return null;
        }

        // 截取页面参数
        let oValArray = window.location.search.match(new RegExp("[\?\&]" + paramName + "=([^\&]+)", "i"));

        if (oValArray == null || 
            oValArray.length < 1) {
            return "";
        }

        return oValArray[1];
    }

    /**
     * 获取参数键值字典
     * 
     * @return 参数键值字典
     */
    static getParamKVMap(): { [strKey: string]: string, } {
        if (!cc.sys.isBrowser) {
            return null;
        }

        // 截取 ? 之后的所有字符
        let strParam = decodeURI(window.location.search.substring(1));
        // 根据 & 切割字符串
        let oTempArray0 = strParam.split("&");

        // 参数 KV 字典
        let oParamKVMap = {};

        for (let strTemp of oTempArray0) {
            // 根据 = 切割字符串
            let oTempArray1 = strTemp.split("=");
            // 设置键和值
            oParamKVMap[oTempArray1[0]] = oTempArray1[1];
        }

        return oParamKVMap;
    }

    /**
     * 获取地理位置
     * 
     * @param funCallback 回调函数
     */
    static getGeoLocation(funCallback: (oGeoCoordz: GeoCoordz) => void): void {
        // 确保回调函数不为空
        const funCbFinally = funCallback || function() {
        };

        if (!cc.sys.isBrowser || 
            cc.sys.os == cc.sys.OS_WINDOWS) {
            cc.warn("当前不是浏览器, 或者正在运行在 Windows 系统中");
            funCbFinally(null);
            return;
        }

        navigator.geolocation.getCurrentPosition((oCurrPos) => {
            if (null == oCurrPos || 
                null == oCurrPos.coords) {
                cc.warn("未能获取坐标未知");
                funCbFinally(null);
                return;
            }

            let oCoordz = oCurrPos.coords;

            funCbFinally({
                latitude:  oCoordz.latitude,
                longitude: oCoordz.longitude,
                altitude:  oCoordz.altitude,
            });
        }, (oError) => {
            // 记录错误日志
            cc.log(oError);
            funCbFinally({
                latitude: 0, longitude: 0, altitude: 0, // 如果失败了, 就默认全都为 0
            });
        });
    }
}
