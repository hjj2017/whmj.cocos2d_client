// @import
import MsgBus from "../../../comm/script/MsgBus";
import { mod_hallServerProtocol } from "../msg/hall.AllMsg";

/**
 * 创建房间结果
 */
type CreateRoomResult = mod_hallServerProtocol.msg.CreateRoomResult;

/**
 * 创建房间结果处理器
 */
export default class CreateRoomResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: CreateRoomResult): void {
        if (null == oResult) {
            return;
        }

        cc.log(`创建房间成功, roomId = ${oResult.roomId}`);

        // 加入房间
        MsgBus.getInstance().sendMsg(
            mod_hallServerProtocol.msg.HallServerMsgCodeDef._JoinRoomCmd,
            mod_hallServerProtocol.msg.JoinRoomCmd.create({
                roomId: oResult.roomId,
            })
        );
    }
}
