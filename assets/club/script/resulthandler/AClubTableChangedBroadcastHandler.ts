// @import
import ClubDetailzWndComp from "../subview/ClubDetailzWndComp";
import MsgBus from "../../../comm/script/MsgBus";
import { mod_clubServerProtocol } from "../msg/AllMsg.ver_Club";

/**
 * 亲友圈牌桌变化广播
 */
type AClubTableChangedBroadcast = mod_clubServerProtocol.msg.AClubTableChangedBroadcast;

/**
 * 亲友圈牌桌变化广播处理器
 */
export default class AClubTableChangedBroadcastHandler {
    /**
     * 处理广播
     * 
     * @param oBroadcast 广播对象
     */
    static handle(oBroadcast: AClubTableChangedBroadcast): void {
        if (null == oBroadcast) {
            return;
        }

        // 获取成员列表窗口组件
        let oThatComp = cc.find("Canvas/SubViewPlaceHolder").getComponentInChildren(ClubDetailzWndComp);

        if (null == oThatComp || 
            !oThatComp.node.active) {
            // 如果刚好玩家没有打开亲友圈详情界面,
            // 那就直接退出吧
            return;
        }

        cc.log(`收到牌桌变化通知, clubId = ${oBroadcast.clubId}, tableSeqNum = ${oBroadcast.tableSeqNum}, roomId = ${oBroadcast.roomId}`);

        MsgBus.getInstance().sendMsg(
            mod_clubServerProtocol.msg.ClubServerMsgCodeDef._GetTableDetailzCmd,
            mod_clubServerProtocol.msg.GetTableDetailzCmd.create({
                clubId: oBroadcast.clubId,
                seqNum: oBroadcast.tableSeqNum,
            })
        );
    }
}
