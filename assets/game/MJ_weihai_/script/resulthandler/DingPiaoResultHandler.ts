// @import
import MahjongTableComp from "../table/MahjongTableComp";
import UserData from "../../../../bizdata/script/UserData";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 定飘结果
 */
type IDingPiaoResult = mod_MJ_weihai_Protocol.msg.IDingPiaoResult;

/**
 * 定飘结果处理器
 */
export default class DingPiaoResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: IDingPiaoResult): void {
        if (null == oResult) {
            return;
        }

        cc.log(`自己已定飘, piaoX = ${oResult.piaoX}, ok = ${oResult.ok}`);

        // 获取牌桌组件
        let oTableComp = cc.find("Canvas/MahjongTableArea").getComponentInChildren(MahjongTableComp);

        if (null == oTableComp) {
            cc.error(`未找到牌桌组件`);
            return;
        }

        oTableComp.putPiaoX(
            UserData.getMyData().getUserId(), 
            oResult.piaoX
        );
    }
}
