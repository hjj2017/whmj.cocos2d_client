// @import
import HallScene from "../hall.HallScene";
import MsgBus from "../../../comm/script/MsgBus";
import UserData from "../../../bizdata/script/UserData";
import { mod_hallServerProtocol } from "../msg/hall.AllMsg";

/**
 * 获取我的详情结果
 */
type GetMyDetailzResult = mod_hallServerProtocol.msg.GetMyDetailzResult;

/**
 * 获取我的详情结果处理器
 */
export default class GetMyDetailzResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: GetMyDetailzResult): void {
        if (null == oResult) {
            return;
        }

        // 设置客户端 IP 地址
        oResult["clientIpAddr"] = oResult.lastLoginIp;
        UserData.getMyData().updateByProp(oResult);
        // 刷新场景显示
        cc.find("Canvas/Script").getComponent(HallScene).renewDisplay();

        // 获取已经加入的房间 Id
        MsgBus.getInstance().sendMsg(
            mod_hallServerProtocol.msg.HallServerMsgCodeDef._GetJoinedRoomIdCmd,
            mod_hallServerProtocol.msg.GetJoinedRoomIdCmd.create({
            })
        );
    }
}
