// @import
import ClubDetailzWndComp from "../subview/ClubDetailzWndComp";
import ClubScene from "../ClubScene";
import MsgBus from "../../../comm/script/MsgBus";
import { mod_clubServerProtocol } from "../msg/AllMsg.ver_Club";

/**
 * 获取亲友圈详情结果
 */
type GetClubDetailzResult = mod_clubServerProtocol.msg.GetClubDetailzResult;

/**
 * 获取亲友圈详情结果处理器
 */
export default class GetClubDetailzResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: GetClubDetailzResult): void {
        if (null == oResult) {
            return;
        }

        if (null != oResult.fixGameX) {
            for (let oFixGameX of oResult.fixGameX) {
                if (null == oFixGameX) {
                    continue;
                }

                // 设置别名
                oFixGameX["ruleItemArray"] = oFixGameX.ruleItem;
            }
        }

        cc.find("Canvas/Script").getComponent(ClubScene)
            .switchToClubDetailzWnd((oWndNode) => {

            if (null == oWndNode) {
                return;
            }

            // 获取窗口组件
            oWndNode.getComponent(ClubDetailzWndComp)
                .putCreatorId(oResult.creatorId)
                .putCreatorName(oResult.creatorName)
                .putCreatorHeadImg(oResult.creatorHeadImg)
                .putClubId(oResult.clubId)
                .putClubName(oResult.clubName)
                .putCreateTime(oResult.createTime)
                .putNumOfPeople(oResult.numOfPeople)
                .putRoomCard(oResult.roomCard)
                .putFixGameXArray(oResult.fixGameX)
                .putMyRole(oResult.myRole)
                .renewDisplay();

            // 获取牌桌列表
            MsgBus.getInstance().sendMsg(
                mod_clubServerProtocol.msg.ClubServerMsgCodeDef._GetTableListCmd,
                mod_clubServerProtocol.msg.GetTableListCmd.create({
                    clubId: oResult.clubId,
                    pageIndex: 0,
                })
            );

            // 开启牌桌变化监听
            MsgBus.getInstance().sendMsg(
                mod_clubServerProtocol.msg.ClubServerMsgCodeDef._StartTableChangedListenCmd,
                mod_clubServerProtocol.msg.StartTableChangedListenCmd.create({
                    clubId: oResult.clubId,
                })
            );
        });
    }
}
