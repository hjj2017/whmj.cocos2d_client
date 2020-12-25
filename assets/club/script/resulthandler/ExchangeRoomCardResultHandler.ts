//#region @import
import ClubManageWndComp from "../subview/ClubManageWndComp";
import { mod_clubServerProtocol } from "../msg/AllMsg.ver_Club";
import SuccezzHintFactory from "../../../comm/script/SuccezzHintFactory";
//#endregion

/**
 * 亲友圈充值房卡结果
 */
type IExchangeRoomCardResult = mod_clubServerProtocol.msg.IExchangeRoomCardResult;

/**
 * 获取亲友圈详情结果处理器
 */
export default class ExchangeRoomCardResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: IExchangeRoomCardResult): void {
        if (null == oResult || 
            !oResult.succezz) {
            return;
        }

        let oThatComp = cc.find("Canvas/SubViewPlaceHolder")
            .getComponentInChildren(ClubManageWndComp);

        if (null == oThatComp || 
            oThatComp._nClubId != oResult.clubId) {
            return;
        }

        SuccezzHintFactory.getCreatedHint()
            .putSuccezzMsg("亲友圈充值房卡成功")
            .renewDisplay();

        oThatComp._nRoomCard += oResult.roomCard;
        oThatComp.renewDisplay();
    }
}
