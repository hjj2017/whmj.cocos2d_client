// @import
import LoadingWndFactory from "../../../comm/script/LoadingWndFactory";
import HallScene from "../hall.HallScene";
import MsgBus from "../../../comm/script/MsgBus";
import { mod_hallServerProtocol } from "../msg/hall.AllMsg";

/**
 * 获取已经加入的房间 Id 结果
 */
type GetJoinedRoomIdResult = mod_hallServerProtocol.msg.GetJoinedRoomIdResult;

/**
 * 获取已经加入的房间 Id 结果处理器
 */
export default class GetJoinedRoomIdResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: GetJoinedRoomIdResult): void {
        if (null == oResult || 
            oResult.roomId <= 0) {
            // 隐藏加载窗口
            cc.log("已加入的房间为空");
            LoadingWndFactory.getCreatedWnd().hide();

            // 获取大厅场景
            let oHallScene = cc.find("Canvas/Script").getComponent(HallScene);

            oHallScene.scheduleOnce(() => {
                oHallScene.tryAppInteralAction();
            }, 2);

            return;
        }

        cc.log(`我已经加入了房间, roomId = ${oResult.roomId}`);

        // 创建加入房间指令并发送
        MsgBus.getInstance().sendMsg(
            mod_hallServerProtocol.msg.HallServerMsgCodeDef._JoinRoomCmd,
            mod_hallServerProtocol.msg.JoinRoomCmd.create({
                roomId: oResult.roomId,
            })
        );
    }
}
