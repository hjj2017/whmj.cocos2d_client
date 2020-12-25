// @import
import AppSetting from "../../bizdata/script/AppSetting";
import AudioMajordomo from "../../comm/script/AudioMajordomo";
import GlobalDef from "../../comm/script/GlobalDef";
import HeadImgLoader from "../../comm/script/HeadImgLoader";
import LocalBrowser from "../../comm/script/LocalBrowser";
import MeiNv from "./hall.MeiNv";
import ModConfig from "./hall.ModConfig";
import MsgBus from "../../comm/script/MsgBus";
import MsgRecognizer from "../../comm/script/MsgRecognizer";
import UserData from "../../bizdata/script/UserData";
import Ver from "../../comm/script/Ver";
import { __onMsgHandler } from "./resulthandler/hall.__onMsgHandler";
import { __regUIEvent } from "./hall.__regUIEvent";
import { mod_hallServerProtocol } from "./msg/hall.AllMsg";

// @const
const { ccclass } = cc._decorator;
const BG_MUSIC = "res/1/audio/BGMusic_Hall_";

/**
 * 大厅场景
 */
@ccclass
export default class HallScene extends cc.Component {
    /**
     * load
     */
    onLoad(): void {
        let oCanvasNode = cc.find("Canvas");
        let nCanvasW = oCanvasNode.width;

        if (nCanvasW < GlobalDef._nStandardScreenWidth) {
            oCanvasNode.scale = (nCanvasW / GlobalDef._nStandardScreenWidth);
        }
    }

    /**
     * start
     */
    start(): void {
        if (!CC_DEBUG) {
            cc.log = (oMsg: any): void => {
                console.log(oMsg);
            }

            cc.error = (oError: any): void => {
                console.error(oError);
            }

            cc.warn = (oMsg: any): void => {
                console.warn(oMsg);
            }

            cc.log("重新定义 log()、error()、warn() 函数");
        }

        // 注册 UI 事件
        __regUIEvent(this);

        // 添加协议
        MsgRecognizer.addProtocol("hall", mod_hallServerProtocol);

        // 消息处理
        __onMsgHandler(this);

        // 获取我的详细信息
        MsgBus.getInstance().sendMsg(
            mod_hallServerProtocol.msg.HallServerMsgCodeDef._GetMyDetailzCmd,
            mod_hallServerProtocol.msg.GetMyDetailzCmd.create({
            })
        );

        // 美女登场
        MeiNv.getInstance().entry();

        // 播放背景音乐
        AudioMajordomo.getInstance().playBGMusic(
            ModConfig.BUNDLE_NAME, 
            BG_MUSIC, 
            AppSetting.getInstance()._bEnableBGMusic
        );

        // 播放音效
        AudioMajordomo.getInstance().putEnableSound(AppSetting.getInstance()._bEnableSound);
        AudioMajordomo.getInstance().putEnableVoice(AppSetting.getInstance()._bEnableVoice);

        // 设置版本号
        cc.find("Canvas/Label_Ver_").getComponent(cc.Label).string = Ver._strCurr;
    }

    // /**
    //  * update
    //  * 
    //  * @param nDeltaTime 变化时间
    //  */
    // update(nDeltaTime: number): void {
    // }

    /**
     * 刷新显示
     */
    renewDisplay(): void {
        let oMyData = UserData.getMyData();

        cc.find("Canvas/TopPanel/UserRelativeArea/UserName")
            .getComponent(cc.Label)
            .string = oMyData.getUserName();

        cc.find("Canvas/TopPanel/UserRelativeArea/UserId")
            .getComponent(cc.Label)
            .string = "ID：" + oMyData.getUserId();

        cc.find("Canvas/TopPanel/RoomCardArea/CurrRoomCard/Num")
            .getComponent(cc.Label)
            .string = oMyData.getRoomCard().toString();

        // 加载头像并显示
        HeadImgLoader.loadAndShow(
            cc.find("Canvas/TopPanel/UserRelativeArea/HeadImg/Portrait"),
            oMyData.getHeadImg()
        )
    }

    /**
     * 清理 Ukey
     */
    clearUkey(): void {
        cc.sys.localStorage.removeItem(GlobalDef._strLocalStorageUkey);
    }

    /**
     * 尝试 App 内部行为
     */
    tryAppInteralAction(): void {
        // 参数键值字典
        let oParamKVMap: { [strKey: string]: string, } = null;

        if (cc.sys.isBrowser) {
            oParamKVMap = LocalBrowser.getParamKVMap();
        }

        if (null == oParamKVMap) {
            return;
        }

        // 执行某个行为
        __doAppInternalAction(this, oParamKVMap);
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 执行某个行为
 * 
 * @param SELF this 指针
 * @param oParamKVMap App 内部行为
 */
function __doAppInternalAction(SELF: HallScene, oParamKVMap: { [strKey: string]: string, }): boolean {
    if (null == SELF || 
        null == oParamKVMap) {
        return;
    }

    if ("jr" in oParamKVMap) {
        // jr == (j)oin (r)oom 的缩写,
        // 也就是加入指定房间的意思...
        // 
        // 获取房间 Id
        let strRoomId = oParamKVMap["jr"];

        if (null == strRoomId) {
            cc.log("房间 Id 为空");
            return;
        }

        // XXX 注意: 为了缩短分享链接, 
        // 降低分享二维码密度,
        // 在分享房间号时, 采用的是 36 进制...
        let nRoomId = Number.parseInt(strRoomId, 36);

        // 加入房间
        MsgBus.getInstance().sendMsg(
            mod_hallServerProtocol.msg.HallServerMsgCodeDef._JoinRoomCmd,
            mod_hallServerProtocol.msg.JoinRoomCmd.create({
                roomId: nRoomId,
            })
        );

        cc.log(`进入房间, roomId = ${nRoomId}`);
    }
}
