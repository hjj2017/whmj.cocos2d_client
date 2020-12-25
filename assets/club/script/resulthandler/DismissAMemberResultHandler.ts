// @import
import MemberListWndComp from "../subview/MemberListWndComp";
import MsgBus from "../../../comm/script/MsgBus";
import { mod_clubServerProtocol } from "../msg/AllMsg.ver_Club";
import UserData from "../../../bizdata/script/UserData";
import ClubScene from "../ClubScene";

/**
 * 获取亲友圈详情结果
 */
type DismissAMemberResult = mod_clubServerProtocol.msg.DismissAMemberResult;

/**
 * 获取亲友圈详情结果处理器
 */
export default class DismissAMemberResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: DismissAMemberResult): void {
        if (null == oResult) {
            return;
        }

        if (oResult.userId == UserData.getMyData().getUserId()) {
            // 如果开除的是自己,
            // 则切换到已经加入的亲友圈列表窗口
            cc.find("Canvas/Script").getComponent(ClubScene)
                .switchToJoinedClubListWnd();

            MsgBus.getInstance().sendMsg(
                mod_clubServerProtocol.msg.ClubServerMsgCodeDef._GetJoinedClubListCmd,
                mod_clubServerProtocol.msg.GetJoinedClubListCmd.create({
                })
            );
            return;
        }

        // 获取成员列表窗口组件
        let oThatComp = cc.find("Canvas/SubViewPlaceHolder")
            .getComponentInChildren(MemberListWndComp);

        if (null != oThatComp) {
            // 如果能找到该组件,
            // 则说明成员列表窗口还显示着...
            MsgBus.getInstance().sendMsg(
                mod_clubServerProtocol.msg.ClubServerMsgCodeDef._GetMemberInfoListCmd, 
                mod_clubServerProtocol.msg.GetMemberInfoListCmd.create({ 
                    clubId: oThatComp._nClubId,
                    pageIndex: oThatComp._nPageIndex,
                    pageSize: oThatComp.getPageSize(),
                })
            );
        }
    }
}
