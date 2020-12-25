// @import
import { mod_commProtocol } from "../msg/usr0.AllMsg";
import SceneXLoader from "../../../comm/script/SceneXLoader";

// @const
const BUNDLE_NAME = "hall";
const SCNEN_NAME = "HallScene";

/**
 * 检票结果
 */
type CheckInTicketResult = mod_commProtocol.msg.CheckInTicketResult;

/**
 * 用户登录结果处理器
 */
export default class CheckInTicketResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     * @return {void}
     */
    static handle(oResult: CheckInTicketResult): void {
        if (null == oResult) {
            return;
        }

        cc.log(`检票成功, userId = ${oResult.userId}`);

        // 加载大厅场景
        SceneXLoader.startLoad(BUNDLE_NAME, SCNEN_NAME);
    }
}
