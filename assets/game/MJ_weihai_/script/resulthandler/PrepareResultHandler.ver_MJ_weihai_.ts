// @import
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 准备结果
 */
type IPrepareResult = mod_MJ_weihai_Protocol.msg.IPrepareResult;

/**
 * 准备结果处理器
 */
export default class PrepareResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: IPrepareResult): void {
        if (null == oResult) {
            return;
        }

        cc.log("自己已准备好");
    }
}
