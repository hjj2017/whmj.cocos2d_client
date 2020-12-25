// @import
import DissolveRoomVoteDialogComp from "../subview/DissolveRoomVoteDialogComp.ver_MJ_weihai_";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 解散房间投票广播
 */
type DissolutionVoteBroadcast = mod_MJ_weihai_Protocol.msg.DissolutionVoteBroadcast;

/**
 * 解散房间广播处理器
 */
export default class DissolutionVoteBroadcastHandler {
    /**
     * 处理结果
     * 
     * @param oBroadcast 广播对象
     */
    static handle(oBroadcast: DissolutionVoteBroadcast): void {
        if (null == oBroadcast) {
            return;
        }

        let oDialogComp = cc.Canvas.instance.node.getComponentInChildren(DissolveRoomVoteDialogComp);

        if (null == oDialogComp) {
            return;
        }

        // 更新用户投票
        oDialogComp.updateUserVote(
            oBroadcast.userId, oBroadcast.yes
        ).renewDisplay();

        if (0 == oBroadcast.yes) {
            setTimeout(() => {
                oDialogComp.node.destroy();
            }, 2000);
        }
    }
}
