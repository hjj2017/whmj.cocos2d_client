// @import
import MahjongTableComp from "../table/MahjongTableComp";
import UserData from "../../../../bizdata/script/UserData";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

/**
 * 加入房间广播
 */
type JoinRoomBroadcast = mod_MJ_weihai_Protocol.msg.JoinRoomBroadcast;

/**
 * 加入房间广播处理器
 */
export default class JoinRoomBroadcastHandler {
    /**
     * 处理结果
     * 
     * @param oBroadcast 广播对象
     */
    static handle(oBroadcast: JoinRoomBroadcast): void {
        if (null == oBroadcast) {
            return;
        }

        cc.log(`有新玩家加入, broadcast = ${JSON.stringify(oBroadcast)}`);
        
        // 获取牌桌组件
        let oTableComp = cc.find("Canvas/MahjongTableArea").getComponentInChildren(MahjongTableComp);

        if (null != oTableComp) {
            let oX = {
                userId:             oBroadcast.userId,
                userName:           oBroadcast.userName,
                headImg:            oBroadcast.headImg,
                sex:                oBroadcast.sex, 
                seatIndex:          oBroadcast.seatIndex,
                seatIndexAtServer:  oBroadcast.seatIndex,
                roomOwnerFlag:      false, 
                zhuangJiaFlag:      false,
                piaoX:              -1, // 飘几未知
                clientIpAddr:       oBroadcast.clientIpAddr,
                currScore:          oBroadcast.currScore,
                totalScore:         oBroadcast.totalScore,
            };

            UserData.checkIn(oBroadcast.userId, oBroadcast.userName, oBroadcast.headImg, 0, oBroadcast.clientIpAddr);
            oTableComp.addPlayer(oX);
        }
    }
}
