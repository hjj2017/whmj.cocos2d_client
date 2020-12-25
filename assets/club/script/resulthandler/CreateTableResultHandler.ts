// @import
import MsgBus from "../../../comm/script/MsgBus";
import { mod_clubServerProtocol } from "../msg/AllMsg.ver_Club";

/**
 * 创建牌桌结果
 */
type CreateTableResult = mod_clubServerProtocol.msg.CreateTableResult;

/**
 * 创建牌桌结果处理器
 */
export default class CreateTableResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: CreateTableResult): void {
        if (null == oResult) {
            return;
        }

        cc.log(`创建房间成功, roomId = ${oResult.roomId}`);

        // 加入房间
        MsgBus.getInstance().sendMsg(
            mod_clubServerProtocol.msg.ClubServerMsgCodeDef._JoinTableCmd,
            mod_clubServerProtocol.msg.JoinTableCmd.create({
                roomId: oResult.roomId,
            })
        );
    }
}
