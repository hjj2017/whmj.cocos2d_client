// @import
import LocalBrowser from "../../comm/script/LocalBrowser";
import MsgBus from "../../comm/script/MsgBus";
import PhoneNumberLoginDialogComp from "./subview/usr0.PhoneNumberLoginDialogComp";
import UserLoginScene from "./usr0.UserLoginScene";
import { mod_passportServerProtocol } from "./msg/usr0.AllMsg";

// @const
const LOCAL_STORAGE_KEY_CODE = "MJ_weihai__guestLogin_code";
const CODE_STR = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-+=<>?";

/**
 * 注册场景 UI 事件
 * 
 * @param SELF this 指针
 */
export function __regUIEvent(SELF: UserLoginScene): void {
    if (null == SELF) {
        return;
    }

    //
    // 游客登录
    // 
    cc.find("Canvas/GuestLoginButton").on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {

        cc.log("访客登录");

        let strPropertyStr = JSON.stringify({ 
            code: __getCode(),
        });

        // 构建并发送登录指令
        MsgBus.getInstance().sendMsg(
            mod_passportServerProtocol.msg.PassportServerMsgCodeDef._UserLoginCmd,
            mod_passportServerProtocol.msg.UserLoginCmd.create({
                loginMethod: 1, 
                propertyStr: strPropertyStr,
            })
        );
    });

    //
    // 手机号登录
    // 
    cc.find("Canvas/PhoneNumberLoginButton").on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            // 创建手机号登录对话框
            let oDialogNode = cc.instantiate(cc.find("Canvas/Template/PhoneNumberLoginDialog"));
            oDialogNode.addComponent(PhoneNumberLoginDialogComp);
            // 显示对话框
            cc.find("Canvas/SubViewPlaceHolder").addChild(oDialogNode);
        }
    );

    if (cc.sys.isBrowser) {
        cc.find("Canvas/TesterLoginButton").active = ("1" == LocalBrowser.getParamValFromURL("DEV"));
    }

    //
    // 测试员登录
    // 
    cc.find("Canvas/TesterLoginButton").on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
        // 获取测试员名称
        let strTesterName = LocalBrowser.getParamValFromURL("testerName");
        
        cc.log(`测试员登录, testerName = ${strTesterName}`);

        let strPropertyStr = JSON.stringify({ 
            testerName: strTesterName,
        });

        // 构建并发送登录指令
        MsgBus.getInstance().sendMsg(
            mod_passportServerProtocol.msg.PassportServerMsgCodeDef._UserLoginCmd,
            mod_passportServerProtocol.msg.UserLoginCmd.create({ 
                loginMethod: 0, 
                propertyStr: strPropertyStr,
            })
        );
    });
}

///////////////////////////////////////////////////////////////////////

/**
 * 获取 Code
 * 
 * @return Code
 */
function __getCode(): string {
    // 获取登录 Code
    let strCode = cc.sys.localStorage.getItem(LOCAL_STORAGE_KEY_CODE);

    if (null == strCode) {
        strCode = __newCode();
        cc.sys.localStorage.setItem(LOCAL_STORAGE_KEY_CODE, strCode);
    }

    return strCode;
}

/**
 * 创建新的 Code
 * 
 * @return 新的 Code
 */
function __newCode(): string {
    let strCode = "";

    // 最大长度
    const nMax = (Math.random() <= 0.5) ? 32 : 48;

    for (let nCounter = 0; nCounter < nMax; nCounter++) {
        strCode += CODE_STR.charAt(Math.floor(Math.random() * CODE_STR.length));
    }

    return strCode;
}
