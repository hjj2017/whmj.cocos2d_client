//#region @import
import AppSetting from "../../bizdata/script/AppSetting";
import AudioMajordomo from "../../comm/script/AudioMajordomo";
import ClubDetailzWndFactory from "./subview/ClubDetailzWndFactory";
import GlobalDef from "../../comm/script/GlobalDef";
import JoinedClubListFactory from "./subview/JoinedClubListWndFactory";
import LoadingWndFactory from "../../comm/script/LoadingWndFactory";
import ModConfig from "./ModConfig.ver_Club";
import MsgBus from "../../comm/script/MsgBus";
import MsgRecognizer from "../../comm/script/MsgRecognizer";
import { __onMsgHandler } from "./resulthandler/__onMsgHandler.ver_Club";
import { mod_clubServerProtocol } from "./msg/AllMsg.ver_Club";
//#endregion

// @const
const { ccclass } = cc._decorator;
const CUSTOM_VIEW_JOINED_CLUB_LIST_WND = "customView_joinedClubListWnd";
const CUSTOM_VIEW_CLUB_DETAILZ_WND = "customView_clubDetailzWnd";
const BG_MUSIC = "res/1/audio/BGMusic_Club_";

/**
 * 说明
 */
@ccclass
export default class ClubScene extends cc.Component {
    /**
     * onLoad
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

        // 添加协议
        MsgRecognizer.addProtocol("club", mod_clubServerProtocol);

        // 消息处理
        __onMsgHandler(this);

        MsgBus.getInstance().sendMsg(
            mod_clubServerProtocol.msg.ClubServerMsgCodeDef._GetJoinedClubListCmd,
            mod_clubServerProtocol.msg.GetJoinedClubListCmd.create({                
            })
        );

        // 播放背景音乐
        AudioMajordomo.getInstance().playBGMusic(
            ModConfig.BUNDLE_NAME, 
            BG_MUSIC, 
            AppSetting.getInstance()._bEnableBGMusic
        );

        // 隐藏加载窗口
        LoadingWndFactory.getCreatedWnd().hide();
    }

    // /**
    //  * update
    //  * 
    //  * @param nDeltaTime 变化时间
    //  */
    // update(nDeltaTime: number): void {
    // }

    /**
     * 切换到已经加入的亲友圈列表窗口
     * 
     * @param funCallback 回调函数
     */
    switchToJoinedClubListWnd(funCallback: (oViewNode: cc.Node) => void = null): void {
        __switchToSubView(
            this, CUSTOM_VIEW_JOINED_CLUB_LIST_WND, funCallback
        );
    }

    /**
     * 切换到亲友圈详情窗口
     * 
     * @param funCallback 回调函数
     */
    switchToClubDetailzWnd(funCallback: (oViewNode: cc.Node) => void = null): void {
        __switchToSubView(
            this, CUSTOM_VIEW_CLUB_DETAILZ_WND, funCallback
        );
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 切换到子视图
 * 
 * @param SELF this 指针
 * @param strViewName 视图名称
 * @param funCallback 回调函数
 */
function __switchToSubView(SELF: ClubScene, strViewName: string, funCallback: (oViewNode: cc.Node) => void): void {
    if (null == SELF || 
        null == strViewName) {
        return;
    }

    // 确保回调函数不为空
    let funFinalCall = funCallback || function() {
    };

    // 获取子节点数组
    const oChildNodeArray = cc.find("Canvas/SubViewPlaceHolder").children;

    for (let oChildNode of oChildNodeArray) {
        if (null != oChildNode) {
            oChildNode.active = false;
        }
    }

    // 获取视图节点
    let oViewNode = SELF[strViewName] as cc.Node;

    if (null != oViewNode) {
        oViewNode.active = true;
        funFinalCall(oViewNode);
        return;
    }

    switch (strViewName) {
        case CUSTOM_VIEW_JOINED_CLUB_LIST_WND:
            // 已经加入的亲友圈列表窗口
            oViewNode = JoinedClubListFactory.create();
            break;

        case CUSTOM_VIEW_CLUB_DETAILZ_WND:
            oViewNode = ClubDetailzWndFactory.create();
            break;
    }

    SELF[strViewName] = oViewNode;
    cc.find("Canvas/SubViewPlaceHolder").addChild(oViewNode);

    // 执行最终回调
    funFinalCall(oViewNode);
}
