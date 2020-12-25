//#region @import
import MsgBus from "../../../../comm/script/MsgBus";
import { mod_commProtocol, mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";
//#endregion

/**
 * 重连结果
 */
type IReconnResult = mod_commProtocol.msg.IReconnResult;

/**
 * 重连结果处理器
 */
export default class ReconnResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: IReconnResult): void {
        if (null == oResult) {
            return;
        }

        // 同步房间数据
        MsgBus.getInstance().sendMsg(
            mod_MJ_weihai_Protocol.msg.MJ_weihai_MsgCodeDef._SyncRoomDataCmd, 
            mod_MJ_weihai_Protocol.msg.SyncRoomDataCmd.create({
            })
        );
    }
}
