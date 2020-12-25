// @import
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 测量地理距离指令
 */
type IMeasureGeoDistanceResult = mod_MJ_weihai_Protocol.msg.IMeasureGeoDistanceResult;

/**
 * 测量地理距离指令处理器
 */
export default class MeasureGeoDistanceResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: IMeasureGeoDistanceResult): void {
        if (null == oResult) {
            return;
        }

        let oGeoLocationDialogComp = cc.find("Canvas/SubViewPlaceHolder")
            .getComponentInChildren("geol.GeoLocationDialogComp");

        for (let oDistanceItem of oResult.geoDistanceItem) {
            oGeoLocationDialogComp.addDistanceItem(oDistanceItem);
        }
        
        oGeoLocationDialogComp.renewDisplay();
    }
}
