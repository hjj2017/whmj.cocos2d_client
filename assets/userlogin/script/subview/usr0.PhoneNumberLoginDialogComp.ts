// @import
import MsgBus from "../../../comm/script/MsgBus";
import { mod_passportServerProtocol } from "../msg/usr0.AllMsg";

// @const
const { ccclass } = cc._decorator;

/**
 * 手机号登录对话框组件
 */
@ccclass
export default class PhoneNumberLoginDialogComp extends cc.Component {
    /**
     * 倒计时
     */
    _nSMSCountDown: number = -1;

    // /**
    //  * onLoad
    //  */
    // onLoad(): void {
    // }

    /**
     * start
     */
    start(): void {
        __regUIEvent(this);

        // 增加缓动效果
        cc.tween(cc.find("Mask", this.node))
            .to(0.00, { opacity: 0, })
            .to(0.48, { opacity: 160, })
            .start();

        cc.tween(cc.find("PrimeDialog", this.node))
            .to(0.00, { position: cc.v3(0, 0), opacity: 128, })
            .to(0.12, { opacity: 255, scale: 1.20, })
            .to(0.12, { opacity: 255, scale: 1.00, })
            .start();
    }

    // /**
    //  * update
    //  * 
    //  * @param nDeltaTime 变化时间
    //  */
    // update(nDeltaTime: number): void {
    // }
}

///////////////////////////////////////////////////////////////////////

/**
 * 注册 UI 事件
 * 
 * @param SELF this 指针
 */
function __regUIEvent(SELF: PhoneNumberLoginDialogComp): void {
    if (null == SELF) {
        return;
    }

    cc.find("PrimeDialog/Top/Button_Close_", SELF.node).on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            // 增加缓动效果
            cc.tween(cc.find("Mask", SELF.node))
                .to(0.12, { opacity: 0 })
                .start();

            cc.tween(cc.find("PrimeDialog", SELF.node))
                .to(0.12, { position: cc.v3(0, 0), opacity: 128, scale: 0.84 })
                .call(() => { SELF.node.destroy(); })
                .start();
        }
    );

    cc.find("PrimeDialog/Center/Button_GetAuthCode_", SELF.node).on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            // 获取手机号
            let strPhoneNumber = cc.find("PrimeDialog/Center/EditBox_PhoneNumber_", SELF.node)
                .getComponent(cc.EditBox)
                .string;

            if (strPhoneNumber.length < 11 || 
                SELF._nSMSCountDown > 0) {
                return;
            }

            SELF._nSMSCountDown = 300;

            SELF.schedule(() => {
                cc.find("PrimeDialog/Center/Button_GetAuthCode_/Background/Label", SELF.node)
                    .getComponent(cc.Label)
                    .string = `( ${SELF._nSMSCountDown} )`;

                --SELF._nSMSCountDown;
            }, 1, SELF._nSMSCountDown);

            cc.log(`手机短信验证, phoneNumber = ${strPhoneNumber}`);

            MsgBus.getInstance().sendMsg(
                mod_passportServerProtocol.msg.PassportServerMsgCodeDef._GetSMSAuthCodeCmd,
                mod_passportServerProtocol.msg.GetSMSAuthCodeCmd.create({
                    phoneNumber: strPhoneNumber,
                })
            );
        }
    );

    cc.find("PrimeDialog/Bottom/Button_Login_", SELF.node).on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            // 获取手机号
            let strPhoneNumber = cc.find("PrimeDialog/Center/EditBox_PhoneNumber_", SELF.node)
                .getComponent(cc.EditBox)
                .string;

            // 验证码
            let strAuthCode = cc.find("PrimeDialog/Center/EditBox_AuthCode_", SELF.node)
                .getComponent(cc.EditBox)
                .string;

            MsgBus.getInstance().sendMsg(
                mod_passportServerProtocol.msg.PassportServerMsgCodeDef._UserLoginCmd,
                mod_passportServerProtocol.msg.UserLoginCmd.create({
                    loginMethod: 1000, // 手机号登录
                    propertyStr: JSON.stringify({
                        phoneNumber: strPhoneNumber,
                        authCode: strAuthCode,
                    }),
                })
            );
        }
    );
}
