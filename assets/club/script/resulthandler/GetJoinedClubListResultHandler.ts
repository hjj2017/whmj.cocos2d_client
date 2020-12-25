// @import
import ClubScene from "../ClubScene";
import JoinedClubListWndComp from "../subview/JoinedClubListWndComp";
import MsgBus from "../../../comm/script/MsgBus";
import { mod_clubServerProtocol } from "../msg/AllMsg.ver_Club";

/**
 * 获取已经加入的亲友圈指令
 */
type GetJoinedClubListResult = mod_clubServerProtocol.msg.GetJoinedClubListResult;

/**
 * 加入房间结果处理器
 */
export default class GetJoinedClubListResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: GetJoinedClubListResult): void {
        if (null == oResult) {
            return;
        }

        cc.find("Canvas/Script").getComponent(ClubScene)
            .switchToJoinedClubListWnd((oWndNode) => {
 
            if (null == oWndNode) {
                return;
            }

            // 获取窗口组件
            let oThatComp = oWndNode.getComponent(JoinedClubListWndComp);

            if (null != oResult.joinedClub && 
                oResult.joinedClub.length > 0) {
                cc.log("已有加入的亲友圈");
            }
            else {
                cc.log("尚未加入任何亲友圈");
            }

            oThatComp.putJoinedClubList(oResult.joinedClub);
            oThatComp.renewDisplay();
            oThatComp.onEntryClub = (nClubId) => {
                // 获取亲友圈详情
                MsgBus.getInstance().sendMsg(
                    mod_clubServerProtocol.msg.ClubServerMsgCodeDef._GetClubDetailzCmd,
                    mod_clubServerProtocol.msg.GetClubDetailzCmd.create({
                        clubId: nClubId,
                    })
                );
            };
        });
    }
}
