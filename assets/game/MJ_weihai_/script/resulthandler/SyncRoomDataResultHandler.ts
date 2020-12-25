// @import
import LoadingWndFactory from "../../../../comm/script/LoadingWndFactory";
import MJ_weihai_Scene from "../MJ_weihai_Scene";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 同步房间数据结果
 */
type SyncRoomDataResult = mod_MJ_weihai_Protocol.msg.SyncRoomDataResult;

/**
 * 同步房间数据结果处理器
 */
export default class SyncRoomDataResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: SyncRoomDataResult): void {
        if (null == oResult) {
            return;
        }

        cc.log(`同步房间数据, result = ${JSON.stringify(oResult)}`);

        // 更新麻将牌桌
        cc.find("Canvas/Script")
            .getComponent(MJ_weihai_Scene)
            .updateMahjongTable(oResult);

        // 隐藏加载窗口
        LoadingWndFactory.getCreatedWnd().hide();
    }
}
