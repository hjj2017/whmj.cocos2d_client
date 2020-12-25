// @import
import MemberListWndComp from "../subview/MemberListWndComp";
import MsgBus from "../../../comm/script/MsgBus";
import SuccezzHintFactory from "../../../comm/script/SuccezzHintFactory";
import { mod_clubServerProtocol } from "../msg/AllMsg.ver_Club";

/**
 * 同意或拒绝加入亲友圈结果
 */
type ApprovalToJoinResult = mod_clubServerProtocol.msg.ApprovalToJoinResult;

/**
 * 同意或拒绝加入亲友圈结果处理器
 */
export default class ApprovalToJoinResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: ApprovalToJoinResult): void {
        if (null == oResult) {
            return;
        }

        SuccezzHintFactory.getCreatedHint()
            .putSuccezzMsg("已同意该用户加入亲友圈")
            .renewDisplay();

        // 获取成员列表窗口组件
        let oThatComp = cc.find("Canvas/SubViewPlaceHolder")
            .getComponentInChildren(MemberListWndComp);

        if (null == oThatComp) {
            return;
        }

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
