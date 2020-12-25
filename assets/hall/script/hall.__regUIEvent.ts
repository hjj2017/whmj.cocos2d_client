// @import
import AppSetting from "../../bizdata/script/AppSetting";
import AudioMajordomo from "../../comm/script/AudioMajordomo";
import ConfirmDialogFactory from "../../comm/script/ConfirmDialogFactory";
import GlobalDef from "../../comm/script/GlobalDef";
import HallScene from "./hall.HallScene";
import JoinRoomDialogComp from "./subview/hall.JoinRoomDialogComp";
import JoinRoomDialogFactory from "./subview/hall.JoinRoomDialogFactory";
import MsgBus from "../../comm/script/MsgBus";
import NoticeDialogComp from "./subview/hall.NoticeDialogComp";
import NoticeDialogFactory from "./subview/hall.NoticeDialogFactory";
import PrefabXFactory from "../../comm/script/PrefabXFactory";
import ResKeyDef from "../../comm/script/ResKeyDef";
import SceneXLoader from "../../comm/script/SceneXLoader";
import UserData from "../../bizdata/script/UserData";
import { mod_hallServerProtocol } from "./msg/hall.AllMsg";

// @const
const LOCAL_STORAGE_KEY_GAME_PRESETTING: string = "rzf8Tvgi5F4N4WNGnkvQnQEL_GamePreSetting_";
const BUNDLE_CLUB = "club";

/**
 * 键和值
 */
type KeyAndVal = {
    /** 关键字 */
    key?: number,
    /** 数值 */
    val?: number,
}

/**
 * 注册场景 UI 事件
 * 
 * @param SELF this 指针
 */
export function __regUIEvent(SELF: HallScene): void {
    // 
    // 添加房卡
    // 
    cc.find("Canvas/TopPanel/RoomCardArea/Button_AddRoomCard_").on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            NoticeDialogFactory.createAsync((oDialogNode) => {
                if (null == oDialogNode) {
                    return;
                }

                oDialogNode.getComponent(NoticeDialogComp)
                    .putDialogType("kefu")
                    .putWebPageURL(GlobalDef._strCdnStaticPageURI + "/kefu/index.html?r=" + Math.ceil(Date.now() / 120000))
                    .renewDisplay();

                // 添加对话框
                cc.find("Canvas/SubViewPlaceHolder").addChild(oDialogNode);
            });
        }
    );

    // 
    // 更多
    // 
    cc.find("Canvas/TopPanel/OtherFunctionArea/MoreButton").on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            __showMoreArea();
        }
    );

    //
    // 进入亲友圈
    // 
    cc.find("Canvas/MainButtonArea/ClubButton").on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            // 加载亲友圈场景
            SceneXLoader.startLoad(BUNDLE_CLUB, ResKeyDef.SCENE_CLUB);
        }
    );

    // 
    // 创建麻将房间
    // 
    cc.find("Canvas/MainButtonArea/CreateRoomButton").on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            PrefabXFactory.useSpecifyFactoryCreate("createroom", "croo.CreateRoomDialogFactory", (oDialogNode) => {
                if (null == oDialogNode) {
                    return;
                }

                cc.find("Canvas/SubViewPlaceHolder").addChild(oDialogNode);
                
                // 获取自定义组件
                let oThatComp = oDialogNode.getComponent("croo.CreateRoomDialogComp");

                oThatComp.onLoadPreSetting = (
                    nGameType0: number, 
                    nGameType1: number) => {
                    // 加载预设
                    return __loadRuleItemArray(nGameType0, nGameType1);
                }

                // 创建房间
                oThatComp.onCreateRoom = (
                    nGameType0: number, 
                    nGameType1: number, 
                    oRuleKeyAndValArray: Array<KeyAndVal>) => {
                    // 保存预设
                    __saveRuleItemArray(
                        nGameType0, nGameType1, oRuleKeyAndValArray
                    );

                    // 创建房间
                    MsgBus.getInstance().sendMsg(
                        mod_hallServerProtocol.msg.HallServerMsgCodeDef._CreateRoomCmd,
                        mod_hallServerProtocol.msg.CreateRoomCmd.create({
                            gameType0: nGameType0,
                            gameType1: nGameType1,
                            ruleItem: oRuleKeyAndValArray,
                        })
                    );
                    oThatComp.close();
                };
            });
        }
    );

    // 
    // 加入房间
    // 
    cc.find("Canvas/MainButtonArea/JoinRoomButton").on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            JoinRoomDialogFactory.createAsync((oDialogNode) => {
                if (null == oDialogNode) {
                    return;
                }

                oDialogNode.getComponent(JoinRoomDialogComp).onJoinRoom = (nNum) => {
                    // 加入房间
                    MsgBus.getInstance().sendMsg(
                        mod_hallServerProtocol.msg.HallServerMsgCodeDef._JoinRoomCmd,
                        mod_hallServerProtocol.msg.JoinRoomCmd.create({
                            roomId: nNum,
                        })
                    );
                }

                cc.find("Canvas/SubViewPlaceHolder").addChild(oDialogNode);
            });
        }
    );

    // 
    // 活动
    // 
    cc.find("Canvas/BottomPanel/Layout/Button_Activity_").on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            NoticeDialogFactory.createAsync((oDialogNode) => {
                if (null == oDialogNode) {
                    return;
                }

                oDialogNode.getComponent(NoticeDialogComp)
                    .putDialogType("huodong")
                    .putWebPageURL(GlobalDef._strCdnStaticPageURI + "/activity/index.html?r=" + Math.ceil(Date.now() / 120000))
                    .renewDisplay();

                // 添加对话框
                cc.find("Canvas/SubViewPlaceHolder").addChild(oDialogNode);
            });
        }
    );

    // 
    // 客服
    // 
    cc.find("Canvas/BottomPanel/Layout/Button_ConsumerService_").on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            NoticeDialogFactory.createAsync((oDialogNode) => {
                if (null == oDialogNode) {
                    return;
                }

                oDialogNode.getComponent(NoticeDialogComp)
                    .putDialogType("kefu")
                    .putWebPageURL(GlobalDef._strCdnStaticPageURI + "/kefu/index.html?r=" + Math.ceil(Date.now() / 120000))
                    .renewDisplay();

                // 添加对话框
                cc.find("Canvas/SubViewPlaceHolder").addChild(oDialogNode);
            });
        }
    );

    // 
    // 战绩
    // 
    cc.find("Canvas/BottomPanel/Layout/Button_Record_").on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            PrefabXFactory.useSpecifyFactoryCreate("record", "rcd7.RecordListWndFactory", (oWndNode) => {
                if (null == oWndNode) {
                    return;
                }

                oWndNode.getComponent("rcd7.RecordListWndComp")
                    .putUserId(UserData.getMyData().getUserId())
                    .putClubId(-1)
                    .renewDisplay();

                cc.find("Canvas/SubViewPlaceHolder").addChild(oWndNode);
            });
        }
    );

    // 
    // 分享
    // 
    cc.find("Canvas/BottomPanel/Layout/Button_ShareApp_").on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            PrefabXFactory.useSpecifyFactoryCreate("share", "sha2.ShareAppDialogFactory", (oDialogNode) => {
                if (null == oDialogNode) {
                    return;
                }

                cc.find("Canvas/SubViewPlaceHolder").addChild(oDialogNode);

                // XXX forSearch: share, sharing, 分享
                oDialogNode.getComponent("sha2.ShareAppDialogComp")
                    .putCaption("【威海麻将】")
                    .putDesc("点击图片，长按两秒，\n选择【识别图中二维码】马上进入")
                    .putLinkAddr(GlobalDef._strShareAppURL)
                    .renewDisplay();
            });
        }
    );

    cc.find("Canvas/MoreArea/AutoHideListen").on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            __hideMoreArea();
        }
    );

    // 
    // 设置
    // 
    cc.find("Canvas/MoreArea/PrimeArea/Button_Setting_").on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            __hideMoreArea();

            PrefabXFactory.useSpecifyFactoryCreate("setting", "xett.SettingDialogFactory", (oDialogNode) => {
                if (null == oDialogNode) {
                    return;
                }

                // 添加保存事件
                oDialogNode.getComponent("xett.SettingDialogComp").onChanged = () => {
                    if (AppSetting.getInstance()._bEnableBGMusic) {
                        // 继续播放背景音乐
                        AudioMajordomo.getInstance().resumeBGMusic();
                    } else {
                        // 停止播放背景音乐
                        AudioMajordomo.getInstance().stopBGMusic();
                    }

                    AudioMajordomo.getInstance().putEnableSound(AppSetting.getInstance()._bEnableSound);
                    AudioMajordomo.getInstance().putEnableVoice(AppSetting.getInstance()._bEnableVoice);
                }

                cc.find("Canvas/SubViewPlaceHolder").addChild(oDialogNode);
            });
        }
    );

    // 
    // 退出登录
    // 
    cc.find("Canvas/MoreArea/PrimeArea/Button_Logout_").on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            __hideMoreArea();

            ConfirmDialogFactory.getCreatedDialog()
                .putContentWordz("是否退出当前账号？")
                .renewDisplay();

            ConfirmDialogFactory.getCreatedDialog().onCancel = () => {
                ConfirmDialogFactory.getCreatedDialog().hide();
            }

            ConfirmDialogFactory.getCreatedDialog().onOK = () => {
                ConfirmDialogFactory.getCreatedDialog().hide();

                SELF.clearUkey();
                cc.director.loadScene(ResKeyDef.SCENE_USER_LOGIN);
            }
        }
    );
}

///////////////////////////////////////////////////////////////////////

/**
 * 显示更多区域
 */
function __showMoreArea(): void {
    // 激活节点
    cc.find("Canvas/MoreArea").active = true;

    cc.tween(cc.find("Canvas/TopPanel/OtherFunctionArea/MoreButton"))
        .to(0.1, { scale: 0, })
        .start();

    let oPrimeArea = cc.find("Canvas/MoreArea/PrimeArea");
    let nViewWidth = Math.ceil(cc.find("Canvas").width);

    cc.tween(oPrimeArea)
        .to(0.2, { x: (nViewWidth - oPrimeArea.width) >> 1, })
        .start();

    cc.tween(cc.find("Canvas/MoreArea/PrimeArea/Button_Setting_"))
        .by(0.2, { x: -24, })
        .by(0.2, { x: +24, })
        .start();

    cc.tween(cc.find("Canvas/MoreArea/PrimeArea/Button_Logout_"))
        .delay(0.2)
        .by(0.2, { x: -24, })
        .by(0.2, { x: +24, })
        .start();
}

/**
 * 隐藏更多区域
 */
function __hideMoreArea(): void {
    cc.tween(cc.find("Canvas/MoreArea/PrimeArea"))
        .by(0.1, { x: 500, })
        .call(() => { cc.find("Canvas/MoreArea").active = false; })
        .start();

    cc.tween(cc.find("Canvas/TopPanel/OtherFunctionArea/MoreButton"))
        .delay(0.1)
        .to(0.1, { scale: 2, })
        .start();
}

/**
 * 读取规则项目数组
 * 
 * @param nGameType0 游戏类型 0
 * @param nGameType1 游戏类型 1
 * @return 规则项目数组
 */
function __loadRuleItemArray(nGameType0: number, nGameType1: number): Array<KeyAndVal> {
    if (nGameType0 <= 0 || 
        nGameType1 <= 0) {
        return null;
    }

    // 游戏类型
    let strGameTypeX = `${nGameType0}_${nGameType1}`;
    // 获取 JSON 字符串
    let strJSON = cc.sys.localStorage.getItem(LOCAL_STORAGE_KEY_GAME_PRESETTING + strGameTypeX);

    if (null == strJSON) {
        return null;
    } else {
        return JSON.parse(strJSON);
    }
}

/**
 * 保存规则项目数组
 * 
 * @param nGameType0 游戏类型 0
 * @param nGameType1 游戏类型 1
 * @param oRuleItemArray 规则项目数组
 */
function __saveRuleItemArray(nGameType0: number, nGameType1: number, oRuleItemArray: Array<KeyAndVal>): void {
    if (null == oRuleItemArray || 
        oRuleItemArray.length <= 0) {
        return;
    }

    let strJSON = JSON.stringify(oRuleItemArray);

    // 游戏类型
    let strGameTypeX = `${nGameType0}_${nGameType1}`;
    cc.sys.localStorage.setItem(LOCAL_STORAGE_KEY_GAME_PRESETTING + strGameTypeX, strJSON);
}
