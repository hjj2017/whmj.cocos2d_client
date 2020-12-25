// @import
import MemberListWndComp from "../subview/MemberListWndComp";
import { mod_clubServerProtocol } from "../msg/AllMsg.ver_Club";

/**
 * 获取亲友圈成员列表结果
 */
type GetMemberInfoListResult = mod_clubServerProtocol.msg.GetMemberInfoListResult;

/**
 * 获取亲友圈成员列表结果处理器
 */
export default class GetMemberInfoListResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: GetMemberInfoListResult): void {
        if (null == oResult) {
            return;
        }

        let oThatComp = cc.find("Canvas/SubViewPlaceHolder").getComponentInChildren(MemberListWndComp);

        if (null == oThatComp) {
            cc.error("未找到亲友圈成员列表窗口组件");
            return;
        }

        oThatComp.putPageIndex(oResult.pageIndex)
            .putTotalCount(oResult.totalCount)
            .putMemberInfoArray(oResult.memberInfo)
            .renewDisplay();
    }
}
