// @import
import ResKeyDef from "../../../../comm/script/ResKeyDef";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 退出房间结果
 */
type IQuitRoomResult = mod_MJ_weihai_Protocol.msg.IQuitRoomResult;

/**
 * 退出房间结果处理器
 */
export default class QuitRoomResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 广播对象
     */
    static handle(oResult: IQuitRoomResult): void {
        if (null == oResult || 
            !oResult.ok) {
            return;
        }

        cc.director.loadScene(ResKeyDef.SCENE_HALL);
    }
}
