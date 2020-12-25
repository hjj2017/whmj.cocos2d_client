// @import
import DissolveRoomVoteDialogComp from "../subview/DissolveRoomVoteDialogComp.ver_MJ_weihai_";
import DissolveRoomVoteDialogFactory from "../subview/DissolveRoomVoteDialogFactory.ver_MJ_weihai_";
import UserData from "../../../../bizdata/script/UserData";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

// @const
const CUSTOM_Z_INDEX = 0;
const CUSTOM_NODE_NAME = "custom_dissolveRoomVoteDialog.ver_rkYUEET2wZqbTWZK";

/**
 * 解散房间广播
 */
type DissolveTheRoomBroadcast = mod_MJ_weihai_Protocol.msg.DissolveTheRoomBroadcast;

/**
 * 解散房间广播处理器
 */
export default class DissolveTheRoomBroadcastHandler {
    /**
     * 处理结果
     * 
     * @param oBroadcast 广播对象
     */
    static handle(oBroadcast: DissolveTheRoomBroadcast): void {
        if (null == oBroadcast) {
            return;
        }

        // 获取当前对话
        let oCurrDialog = cc.find(`Canvas/${CUSTOM_NODE_NAME}`);

        if (null != oCurrDialog) {
            // 获取解散房间对话组件
            let oDialogComp = oCurrDialog.getComponent(DissolveRoomVoteDialogComp);

            if (null != oDialogComp) {
                // 如果当前对话不为空,
                // 则刷新显示
                oDialogComp.putWaiting4PlayerArray(oBroadcast.waiting4User)
                    .renewDisplay();
                return;
            }
        }

        DissolveRoomVoteDialogFactory.createAsync((oNewDialog) => {
            if (null == oNewDialog) {
                return;
            }

            oNewDialog.getComponent(DissolveRoomVoteDialogComp)
                .putMyselfUserId(UserData.getMyData().getUserId())
                .putFromUserId(oBroadcast.fromUserId)
                .putFromUserName(oBroadcast.fromUserName)
                .putReason(oBroadcast.reason)
                .putWaiting4PlayerArray(oBroadcast.waiting4User)
                .putRemainTime(oBroadcast.remainTime)
                .renewDisplay();

            oBroadcast.waiting4User
            cc.Canvas.instance.node.addChild(oNewDialog, CUSTOM_Z_INDEX, CUSTOM_NODE_NAME);
        });
    }
}
