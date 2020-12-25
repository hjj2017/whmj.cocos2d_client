// @import
import AlertDialogFactory from "../../../../comm/script/AlertDialogFactory";
import ResKeyDef from "../../../../comm/script/ResKeyDef";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 踢出一个玩家结果
 */
type IFireAPlayerResult = mod_MJ_weihai_Protocol.msg.IFireAPlayerResult;

/**
 * 踢出一个玩家结果处理器
 */
export default class FireAPlayerResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: IFireAPlayerResult): void {
        if (null == oResult) {
            return;
        }

        AlertDialogFactory.getCreatedDialog()
            .putContentWordz("您已被房主踢出房间...")
            .renewDisplay();

        AlertDialogFactory.getCreatedDialog().onOK = () => {
            // 隐藏窗口并返回大厅
            cc.director.loadScene(ResKeyDef.SCENE_HALL);
        }
    }
}
