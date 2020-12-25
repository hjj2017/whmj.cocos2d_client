// @import
import MsgBus from "../../../comm/script/MsgBus";
import { mod_clubServerProtocol } from "../msg/AllMsg.ver_Club";

/**
 * 创建亲友圈结果
 */
type CreateClubResult = mod_clubServerProtocol.msg.CreateClubResult;

/**
 * 加入房间结果处理器
 */
export default class CreateClubResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: CreateClubResult): void {
        if (null == oResult || 
            oResult.clubId <= 0) {
            return;
        }

        cc.log(`创建亲友圈成功, clubId = ${oResult.clubId}, clubName = ${oResult.clubName}`);

        MsgBus.getInstance().sendMsg(
            mod_clubServerProtocol.msg.ClubServerMsgCodeDef._GetJoinedClubListCmd,
            mod_clubServerProtocol.msg.GetJoinedClubListCmd.create({                
            })
        );
    }
}
