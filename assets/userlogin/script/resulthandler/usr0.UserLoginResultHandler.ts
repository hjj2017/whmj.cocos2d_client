// @import
import MsgBus from "../../../comm/script/MsgBus";
import UserLoginScene from "../usr0.UserLoginScene";
import { mod_commProtocol, mod_passportServerProtocol } from "../msg/usr0.AllMsg";

/**
 * 用户登录结果 
 */
type UserLoginResult = mod_passportServerProtocol.msg.UserLoginResult;

/**
 * 用户登录结果处理器
 */
export default class UserLoginResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: UserLoginResult): void {
        if (null == oResult) {
            return;
        }

        cc.log(`登录成功, userId = ${oResult.userId}, userName = ${oResult.userName}, ukeyStr = ${oResult.ukeyStr}, ukeyExpireAt = ${oResult.ukeyExpireAt}`);

        // 保存 Ukey
        cc.find("Canvas/Script")
            .getComponent(UserLoginScene)
            .saveUkey(oResult.userId, oResult.ukeyStr, oResult.ukeyExpireAt);

        MsgBus.getInstance().sendMsg(
            mod_commProtocol.msg.CommMsgCodeDef._CheckInTicketCmd,
            mod_commProtocol.msg.CheckInTicketCmd.create({
                userId: oResult.userId,
                ticket: oResult.ticket,
            })
        );
    }
}
