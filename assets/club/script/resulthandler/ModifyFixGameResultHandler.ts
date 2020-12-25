// @import
import { mod_clubServerProtocol } from "../msg/AllMsg.ver_Club";

/**
 * 获取亲友圈牌桌列表结果
 */
type IModifyFixGameResult = mod_clubServerProtocol.msg.IModifyFixGameResult;

/**
 * 修改固定玩法结果处理器
 */
export default class ModifyFixGameResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: IModifyFixGameResult): void {
        if (null == oResult) {
            return;
        }
    }
}
