//#region @import
import SuccezzHintFactory from "../../../comm/script/SuccezzHintFactory";
import { mod_clubServerProtocol } from "../msg/AllMsg.ver_Club";
import JoinClubDialogComp from "../subview/JoinClubDialogComp";
//#endregion

/**
 * 加入亲友圈结果
 */
type IJoinClubResult = mod_clubServerProtocol.msg.IJoinClubResult;

/**
 * 加入亲友圈结果处理器
 */
export default class JoinClubResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: IJoinClubResult): void {
        if (null == oResult) {
            return;
        }

        if (oResult.succezz) {
            SuccezzHintFactory.getCreatedHint()
                .putSuccezzMsg("已发送申请，请等待圈主批准")
                .renewDisplay();

            let oThatComp = cc.find("Canvas/SubViewPlaceHolder").getComponentInChildren(JoinClubDialogComp);

            if (null != oThatComp) {
                oThatComp.node.destroy();
            }
        }
    }
}
