//#region @import
import MsgBus from "../../../comm/script/MsgBus";
import { mod_clubServerProtocol } from "../msg/AllMsg.ver_Club";
//#endregion

/**
 * 退出亲友圈结果
 */
type QuitClubResult = mod_clubServerProtocol.msg.QuitClubResult;

/**
 * 退出亲友圈结果处理器
 */
export default class QuitClubResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: QuitClubResult): void {
        if (null == oResult) {
            return;
        }
        
        // 刷新已经加入的亲友圈列表
        MsgBus.getInstance().sendMsg(
            mod_clubServerProtocol.msg.ClubServerMsgCodeDef._GetJoinedClubListCmd,
            mod_clubServerProtocol.msg.GetJoinedClubListCmd.create({                
            })
        );
    }
}
