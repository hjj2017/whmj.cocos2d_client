//#region @import
import AppSetting from "../../../bizdata/script/AppSetting";
import AudioMajordomo from "../../../comm/script/AudioMajordomo";
import ConfirmDialogFactory from "../../../comm/script/ConfirmDialogFactory";
import DissolveRommDialogConfirmComp from "./subview/DissolveRoomConfirmDialogComp.ver_MJ_weihai_";
import DissolveRoomDialogConfirmFactory from "./subview/DissolveRoomConfirmDialogFactory.ver_MJ_weihai_";
import GlobalDef from "../../../comm/script/GlobalDef";
import MahjongChiChoiceQuestionComp from "./subview/MahjongChiChoiceQuestionComp";
import MahjongChiChoiceQuestionFactory from "./subview/MahjongChiChoiceQuestionFactory";
import MahjongLiangFengChoiceQuestionFactory from "./subview/MahjongLiangFengChoiceQuestionFactory";
import MahjongLiangFengChoiceQuestionComp from "./subview/MahjongLiangFengChoiceQuestionComp";
import MahjongTableComp from "./table/MahjongTableComp";
import MahjongTileDef from "./MahjongTileDef";
import MJ_weihai_Scene from "./MJ_weihai_Scene";
import MsgBus from "../../../comm/script/MsgBus";
import PrefabXFactory from "../../../comm/script/PrefabXFactory";
import RoomInfoDialogComp from "./subview/RoomInfoDialogComp";
import RuleSetting from "./RuleSetting";
import UserData from "../../../bizdata/script/UserData";
import { mod_chatServerProtocol, mod_MJ_weihai_Protocol } from "./msg/AllMsg.ver_MJ_weihai_";
//#endregion

/**
 * 注册场景 UI 事件
 * 
 * @param SELF this 指针
 * @param oRuleSetting 规则设置
 * 
 * @see {SELF.showChiPengGangHuOpHint}
 */
export function __regUIEvent(SELF: MJ_weihai_Scene, oRuleSetting: RuleSetting): void {
    if (null == SELF) {
        return;
    }

    // 房间信息按钮
    cc.find("Canvas/InteractionArea/Button_RoomInfo_").on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            cc.find("Canvas/SubViewPlaceHolder/RoomInfoDialog").active = true;
            cc.find("Canvas/SubViewPlaceHolder/RoomInfoDialog")
                .getComponent(RoomInfoDialogComp)
                .renewDisplay();
        }
    );

    for (let nPiaoX = 0; nPiaoX <= 4; nPiaoX++) {
        cc.find(`Canvas/InteractionArea/SelectPiaoHintArea/Button_Piao${nPiaoX}_`).on(
            cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
                // 隐藏选飘提示区域
                cc.find("Canvas/InteractionArea/SelectPiaoHintArea").active = false;
                // 发送定飘消息
                MsgBus.getInstance().sendMsg(
                    mod_MJ_weihai_Protocol.msg.MJ_weihai_MsgCodeDef._DingPiaoCmd,
                    mod_MJ_weihai_Protocol.msg.DingPiaoCmd.create({
                        piaoX: nPiaoX,
                    })
                );
            }
        );
    }

    // 邀请好友
    cc.find("Canvas/InteractionArea/Button_Invite_").on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            PrefabXFactory.useSpecifyFactoryCreate("share", "sha2.ShareAppDialogFactory", (oDialogNode) => {
                if (null == oDialogNode) {
                    return;
                }

                // App 分享链接
                let strShareAppURL = GlobalDef._strShareAppURL + "?jr=" + SELF._nRoomId.toString(36);
                cc.log(`App 分享链接, shareAppURL = ${strShareAppURL}`);

                cc.find("Canvas/SubViewPlaceHolder").addChild(oDialogNode);

                oDialogNode.getComponent("sha2.ShareAppDialogComp")
                    .putCaption("【威海麻将】房间号：" + SELF._nRoomId)
                    .putDesc(oRuleSetting.getMaxPlayerAndMaxRoundDesc() + "，" + oRuleSetting.getPaymentWayDesc() + "\n" + oRuleSetting.getPlayMethodDesc())
                    .putLinkAddr(strShareAppURL)
                    .renewDisplay();
            });
        }
    );

    // 更多按钮点击事件
    __button_more_onTouchEnd(SELF);
    __button_quitRoom_onTouchEnd(SELF);
    __button_setting_onTouchEnd(SELF);
    __button_locationMeasureDistance_onTouchEnd(SELF);
    __autoHideListen_onTouchEnd(SELF);

    // 快速消息、表情动画点击事件
    __button_quickMsg_onTouchEnd(SELF);
    __button_emoji_onTouchEnd(SELF);

    // 注册麻将吃、碰、杠、胡、亮风、补风按钮事件
    __button_chi_onTouchEnd(SELF);
    __button_peng_onTouchEnd(SELF);
    __button_gang_onTouchEnd(SELF);
    __button_hu_onTouchEnd(SELF);
    __button_guo_onTouchEnd(SELF);
    __button_liangFeng_onTouchEnd(SELF, oRuleSetting);
    __button_buFeng_onTouchEnd(SELF);
}

///////////////////////////////////////////////////////////////////////

//#region 更多区域按钮逻辑
/**
 * 更多按钮事件
 * 
 * @param SELF 
 */
function __button_more_onTouchEnd(SELF: MJ_weihai_Scene): void {
    if (null == SELF) {
        return;
    }

    cc.find("Canvas/InteractionArea/Button_More_")
        .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
        __showMoreArea();
    });
}

/**
 * 显示更多区域
 */
function __showMoreArea(): void {
    // 激活节点
    cc.find("Canvas/MoreArea").active = true;

    cc.tween(cc.find("Canvas/InteractionArea/Button_More_"))
        .to(0.1, { scale: 0, })
        .start();

    let oPrimeArea = cc.find("Canvas/MoreArea/PrimeArea");
    let nViewWidth = Math.ceil(cc.find("Canvas").width);

    cc.tween(oPrimeArea)
        .to(0.2, { x: -((nViewWidth - oPrimeArea.width) >> 1), })
        .start();

    cc.tween(cc.find("Canvas/MoreArea/PrimeArea/Button_LocationMeasureDistance_"))
        .delay(0.3)
        .by(0.2, { x: -24, })
        .by(0.2, { x: +24, })
        .start();

    cc.tween(cc.find("Canvas/MoreArea/PrimeArea/Button_Setting_"))
        .by(0.2, { x: -24, })
        .by(0.2, { x: +24, })
        .start();

    cc.tween(cc.find("Canvas/MoreArea/PrimeArea/Button_QuitRoom_"))
        .delay(0.2)
        .by(0.2, { x: -24, })
        .by(0.2, { x: +24, })
        .start();
}

/**
 * 退出房间按钮点击事件
 */
function __button_quitRoom_onTouchEnd(SELF: MJ_weihai_Scene): void {
    if (null == SELF) {
        return;
    }

    cc.find("Canvas/MoreArea/PrimeArea/Button_QuitRoom_").on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            __hideMoreArea();

            // 获取当前牌局
            const nCurrRoundIndex = SELF._nCurrRoundIndex;

            if (nCurrRoundIndex < 0) {
                // 获取房主 Id
                const nRoomOwnerId = SELF._nRoomOwnerId;

                if (UserData.getMyData().getUserId() == nRoomOwnerId) {
                    // 如果是房主, 那么走解散逻辑
                    // 如果第一局都还没有开始,
                    // 那么弹出一个简单的确认对话框就可以了...
                    ConfirmDialogFactory.getCreatedDialog()
                        .putContentWordz("牌局尚未开始，是否确定解散当前房间？")
                        .renewDisplay();

                    ConfirmDialogFactory.getCreatedDialog().onCancel = () => {
                        ConfirmDialogFactory.getCreatedDialog().hide();
                    }

                    ConfirmDialogFactory.getCreatedDialog().onOK = () => {
                        ConfirmDialogFactory.getCreatedDialog().hide();
                        // 如果点击了确定按钮,
                        // 直接发送解散房间指令
                        MsgBus.getInstance().sendMsg(
                            mod_MJ_weihai_Protocol.msg.MJ_weihai_MsgCodeDef._DissolveTheRoomCmd,
                            mod_MJ_weihai_Protocol.msg.DissolveTheRoomCmd.create({ 
                                reason: 1, // 默认理由 = "有急事, ..."
                            })
                        );
                    }
                } else {
                    // 如果不是房主, 那么走退出房间逻辑...
                    ConfirmDialogFactory.getCreatedDialog()
                        .putContentWordz("是否确定退出当前房间？")
                        .renewDisplay();

                    ConfirmDialogFactory.getCreatedDialog().onCancel = () => {
                        ConfirmDialogFactory.getCreatedDialog().hide();
                    }

                    ConfirmDialogFactory.getCreatedDialog().onOK = () => {
                        ConfirmDialogFactory.getCreatedDialog().hide();
                        // 如果点击了确定按钮,
                        // 直接发送解散房间指令
                        MsgBus.getInstance().sendMsg(
                            mod_MJ_weihai_Protocol.msg.MJ_weihai_MsgCodeDef._QuitRoomCmd,
                            mod_MJ_weihai_Protocol.msg.QuitRoomCmd.create({ 
                            })
                        );
                    }
                }

                return;
            }

            DissolveRoomDialogConfirmFactory.createAsync((oNewDialog) => {
                if (null == oNewDialog) {
                    return;
                }

                oNewDialog.getComponent(DissolveRommDialogConfirmComp).onDissolveRoom = (nSelectedReason) => {
                    MsgBus.getInstance().sendMsg(
                        mod_MJ_weihai_Protocol.msg.MJ_weihai_MsgCodeDef._DissolveTheRoomCmd,
                        mod_MJ_weihai_Protocol.msg.DissolveTheRoomCmd.create({ 
                            reason: nSelectedReason,
                        })
                    );

                    oNewDialog.destroy();
                };

                cc.Canvas.instance.node.addChild(oNewDialog);
            });
        }
    );
}

/**
 * 设置按钮点击事件
 * 
 * @param SELF this 指针
 */
function __button_setting_onTouchEnd(SELF: MJ_weihai_Scene): void {
    if (null == SELF) {
        return;
    }

    cc.find("Canvas/MoreArea/PrimeArea/Button_Setting_").on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            __hideMoreArea();

            PrefabXFactory.useSpecifyFactoryCreate("setting", "xett.SettingDialogFactory", (oDialogNode) => {
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
}

/**
 * 位置测距按钮点击事件
 * 
 * @param SELF this 指针
 */
function __button_locationMeasureDistance_onTouchEnd(SELF: MJ_weihai_Scene): void {
    if (null == SELF) {
        return;
    }

    cc.find("Canvas/MoreArea/PrimeArea/Button_LocationMeasureDistance_").on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            __hideMoreArea();
            
            PrefabXFactory.useSpecifyFactoryCreate("geolocation", "geol.GeoLocationDialogFactory", (oDialogNode) => {
                // 获取地理位置对话框组件
                let oGeoLocationDialogComp = oDialogNode.getComponent("geol.GeoLocationDialogComp");
                oGeoLocationDialogComp.putMaxPlayer(SELF._nMaxPlayer);

                let oMahjongTableComp = cc.find("Canvas/MahjongTableArea")
                    .getComponentInChildren(MahjongTableComp);

                if (null == oMahjongTableComp) {
                    cc.error("麻将牌桌组件为空");
                    return;
                }

                let oPlayerDataMap = oMahjongTableComp._oPlayerDataMap;
                let oMahjongSeatIndexer = oMahjongTableComp._oMahjongSeatIndexer;

                for (let nUserId in oPlayerDataMap) {
                    // 获取当前玩家
                    let oCurrPlayer = oPlayerDataMap[nUserId];

                    if (null == oCurrPlayer) {
                        continue;
                    }

                    oGeoLocationDialogComp.addPlayer({
                        userId: oCurrPlayer.userId,
                        userName: oCurrPlayer.userName,
                        headImg: oCurrPlayer.headImg,
                        clientIpAddr: oCurrPlayer.clientIpAddr,
                        seatIndexAtServer: oCurrPlayer.seatIndexAtServer,
                        seatIndexAtClient: oMahjongSeatIndexer.getSeatIndexAtClient(oCurrPlayer.seatIndexAtServer),
                    });
                }

                cc.find("Canvas/SubViewPlaceHolder").addChild(oDialogNode);

                MsgBus.getInstance().sendMsg(
                    mod_MJ_weihai_Protocol.msg.MJ_weihai_MsgCodeDef._MeasureGeoDistanceCmd,
                    mod_MJ_weihai_Protocol.msg.MeasureGeoDistanceCmd.create({
                    })
                );
            });
        }
    );
}

/**
 * 自动隐藏
 * 
 * @param SELF this 指针
 */
function __autoHideListen_onTouchEnd(SELF: MJ_weihai_Scene): void {
    cc.find("Canvas/MoreArea/AutoHideListen").on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            __hideMoreArea();
        }
    );
}

/**
 * 隐藏更多区域
 */
function __hideMoreArea(): void {
    cc.tween(cc.find("Canvas/MoreArea/PrimeArea"))
        .by(0.1, { x: -500, })
        .call(() => { cc.find("Canvas/MoreArea").active = false; })
        .start();

    cc.tween(cc.find("Canvas/InteractionArea/Button_More_"))
        .delay(0.1)
        .to(0.1, { scale: 1.6, })
        .start();
}
//#endregion

//#region 快速消息、表情动画
/**
 * 表情动画按钮点击事件
 * 
 * @param SELF this 指针
 */
function __button_quickMsg_onTouchEnd(SELF: MJ_weihai_Scene) {
    if (null == SELF) {
        return;
    }

    cc.find("Canvas/InteractionArea/Button_QuickMsg_").on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            PrefabXFactory.useSpecifyFactoryCreate("chat", "chat.QuickMsgSelectWndFactory", (oWndNode) => {
                cc.find("Canvas/SubViewPlaceHolder").addChild(oWndNode);
                oWndNode.getComponent("chat.QuickMsgSelectWndComp").onSelected = (nMsgId: number) => {
                    // 发送消息
                    MsgBus.getInstance().sendMsg(
                        mod_chatServerProtocol.msg.ChatServerMsgCodeDef._SendQuickMsgCmd,
                        mod_chatServerProtocol.msg.SendQuickMsgCmd.create({
                            msgId: nMsgId,
                        })
                    );
                }
            });
        }
    );
}

/**
 * 表情动画按钮点击事件
 * 
 * @param SELF this 指针
 */
function __button_emoji_onTouchEnd(SELF: MJ_weihai_Scene) {
    if (null == SELF) {
        return;
    }

    cc.find("Canvas/InteractionArea/Button_Emoji_").on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            PrefabXFactory.useSpecifyFactoryCreate("chat", "chat.EmojiSelectWndFactory", (oWndNode) => {
                cc.find("Canvas/SubViewPlaceHolder").addChild(oWndNode);
                oWndNode.getComponent("chat.EmojiSelectWndComp").onSelected = (nEmojiId: number) => {
                    // 发送消息
                    MsgBus.getInstance().sendMsg(
                        mod_chatServerProtocol.msg.ChatServerMsgCodeDef._SendEmojiCmd,
                        mod_chatServerProtocol.msg.SendEmojiCmd.create({
                            emojiId: nEmojiId,
                        })
                    );
                }
            });
        }
    );
}
//#endregion

//#region 吃、碰、杠、胡、过按钮事件
/**
 * 吃牌按钮事件
 * 
 * @param SELF this 指针
 */
function __button_chi_onTouchEnd(SELF: MJ_weihai_Scene): void {
    if (null == SELF) {
        return;
    }

    // "吃" 按钮
    cc.find("Canvas/InteractionArea/ChiPengGangHuOpArea/Button_Chi_")
        .on(cc.Node.EventType.TOUCH_END, (oEvent: any) => {

        if (null == oEvent || 
            null == oEvent.target) {
            return;
        }

        // 获取麻将吃牌选择题,
        const oChiChoiceQuestion = oEvent.target["custom_chiChoiceQuestion"] as mod_MJ_weihai_Protocol.msg.ChiChoiceQuestion;
        // 关于 custom_chiChoiceQuestion 这个值是什么时候设置的,
        // 可以参考 MJ_weihai_Scene#showChiPengGangHuOpHint

        if (null == oChiChoiceQuestion) {
            cc.error("麻将吃牌选择题为空");
            return;
        }

        let nOptionCounter = 0;
        oChiChoiceQuestion.displayOptionA && ++nOptionCounter;
        oChiChoiceQuestion.displayOptionB && ++nOptionCounter;
        oChiChoiceQuestion.displayOptionC && ++nOptionCounter;

        if (nOptionCounter <= 0) {
            cc.error("没有可以选择的选项");
            return;
        }

        if (1 == nOptionCounter) {
            // 如果只有一个选项,
            // 那就不用展示什么选择题了,
            // 直接发送 "吃" 指令
            let nSelectedOption = 0;

            if (oChiChoiceQuestion.displayOptionB) {
                nSelectedOption = 1;
            } else if (oChiChoiceQuestion.displayOptionC) {
                nSelectedOption = 2;
            }

            // 创建并发送指令
            MsgBus.getInstance().sendMsg(
                mod_MJ_weihai_Protocol.msg.MJ_weihai_MsgCodeDef._MahjongChiCmd,
                mod_MJ_weihai_Protocol.msg.MahjongChiCmd.create({ 
                    selectedOption: nSelectedOption, 
                })
            );

            // 隐藏操作提示
            SELF.hideChiPengGangHuOpHint();
            return;
        }

        // 如果吃牌选项 > 1 个,
        // 那么就需要用户做出选择...
        // 
        // 创建选择题节点
        let oQuestionNode = MahjongChiChoiceQuestionFactory.create();
        let oQuestionComp = oQuestionNode.getComponent(MahjongChiChoiceQuestionComp);
        oQuestionComp.putAllOption(
            oChiChoiceQuestion.chiT, 
            oChiChoiceQuestion.displayOptionA, 
            oChiChoiceQuestion.displayOptionB, 
            oChiChoiceQuestion.displayOptionC
        );
        oQuestionComp.renewDisplay();

        oQuestionComp.onAnswerQuestion = (strOptionX) => {
            let nSelectedOption = 0;

            if ("OptionB" == strOptionX) {
                nSelectedOption = 1;
            } else if ("OptionC" == strOptionX) {
                nSelectedOption = 2;
            }

            // 创建并发送指令
            MsgBus.getInstance().sendMsg(
                mod_MJ_weihai_Protocol.msg.MJ_weihai_MsgCodeDef._MahjongChiCmd,
                mod_MJ_weihai_Protocol.msg.MahjongChiCmd.create({ 
                    selectedOption: nSelectedOption, 
                })
            );
            oQuestionNode.destroy();
        };

        cc.Canvas.instance.node.addChild(oQuestionNode);

        // 隐藏操作提示
        SELF.hideChiPengGangHuOpHint();
    });
}

/**
 * 碰牌按钮事件
 * 
 * @param SELF this 指针
 */
function __button_peng_onTouchEnd(SELF: MJ_weihai_Scene): void {
    if (null == SELF) {
        return;
    }

    // "碰" 按钮
    cc.find("Canvas/InteractionArea/ChiPengGangHuOpArea/Button_Peng_")
        .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {

        cc.log("执行 \"碰\" 操作");

        // 创建并发送 "碰" 指令
        MsgBus.getInstance().sendMsg(
            mod_MJ_weihai_Protocol.msg.MJ_weihai_MsgCodeDef._MahjongPengCmd,
            mod_MJ_weihai_Protocol.msg.MahjongPengCmd.create({
            })
        );

        // 隐藏操作提示
        SELF.hideChiPengGangHuOpHint();
    });
}

/**
 * 杠牌按钮事件
 * 
 * @param SELF this 指针
 */
function __button_gang_onTouchEnd(SELF: MJ_weihai_Scene): void {
    if (null == SELF) {
        return;
    }

    // "杠" 按钮
    cc.find("Canvas/InteractionArea/ChiPengGangHuOpArea/Button_Gang_")
        .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {

        cc.log("执行 \"杠\" 操作");

        // 创建并发送 "杠" 指令
        MsgBus.getInstance().sendMsg(
            mod_MJ_weihai_Protocol.msg.MJ_weihai_MsgCodeDef._MahjongGangCmd,
            mod_MJ_weihai_Protocol.msg.MahjongGangCmd.create({
            })
        );

        // 隐藏操作提示
        SELF.hideChiPengGangHuOpHint();
    });
}

/**
 * 胡牌按钮事件
 * 
 * @param SELF this 指针
 */
function __button_hu_onTouchEnd(SELF: MJ_weihai_Scene): void {
    if (null == SELF) {
        return;
    }

    // "胡" 按钮
    cc.find("Canvas/InteractionArea/ChiPengGangHuOpArea/Button_Hu_")
        .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {

        cc.log("执行 \"胡\" 操作");

        MsgBus.getInstance().sendMsg(
            mod_MJ_weihai_Protocol.msg.MJ_weihai_MsgCodeDef._MahjongHuCmd,
            mod_MJ_weihai_Protocol.msg.MahjongHuCmd.create({
            })
        );

        // 隐藏操作提示
        SELF.hideChiPengGangHuOpHint();
    });
}

/**
 * 过牌按钮事件
 * 
 * @param SELF this 指针
 */
function __button_guo_onTouchEnd(SELF: MJ_weihai_Scene): void {
    if (null == SELF) {
        return;
    }

    // "过" 按钮
    cc.find("Canvas/InteractionArea/ChiPengGangHuOpArea/Button_Guo_")
        .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {

        cc.log("执行 \"过\" 操作");

        // 创建并发送 "过" 指令
        MsgBus.getInstance().sendMsg(
            mod_MJ_weihai_Protocol.msg.MJ_weihai_MsgCodeDef._MahjongGuoCmd,
            mod_MJ_weihai_Protocol.msg.MahjongGuoCmd.create({
            })
        );

        // 隐藏操作提示
        SELF.hideChiPengGangHuOpHint();
    });
}
//#endregion

//#region 威海特有玩法
/**
 * 亮风按钮事件
 * 
 * @param SELF this 指针
 * @param oRuleSetting 规则设置
 */
function __button_liangFeng_onTouchEnd(SELF: MJ_weihai_Scene, oRuleSetting: RuleSetting): void {
    if (null == SELF || 
        null == oRuleSetting) {
        return;
    }

    // "亮风" 按钮
    cc.find("Canvas/InteractionArea/ChiPengGangHuOpArea/Button_LiangFeng_")
        .on(cc.Node.EventType.TOUCH_END, (oEvent: any) => {

        if (null == oEvent || 
            null == oEvent.target) {
            return;
        }

        // 获取麻将亮风选择题,
        const oLiangFengChoiceQuestion = oEvent.target["custom_liangFengChoiceQuestion"] as mod_MJ_weihai_Protocol.msg.LiangFengChoiceQuestion;
        // 关于 custom_liangFengChoiceQuestion 这个值是什么时候设置的,
        // 可以参考 MJ_weihai_Scene#showChiPengGangHuOpHint

        if (null == oLiangFengChoiceQuestion) {
            cc.error("麻将亮风选择题为空");
            return;
        }

        let oTArray = [];
        oLiangFengChoiceQuestion.displayOptionDongFeng  && oTArray.push(MahjongTileDef.DONG_FENG);
        oLiangFengChoiceQuestion.displayOptionNanFeng   && oTArray.push(MahjongTileDef.NAN_FENG);
        oLiangFengChoiceQuestion.displayOptionXiFeng    && oTArray.push(MahjongTileDef.XI_FENG);
        oLiangFengChoiceQuestion.displayOptionBeiFeng   && oTArray.push(MahjongTileDef.BEI_FENG);
        oLiangFengChoiceQuestion.displayOptionHongZhong && oTArray.push(MahjongTileDef.HONG_ZHONG);
        oLiangFengChoiceQuestion.displayOptionFaCai     && oTArray.push(MahjongTileDef.FA_CAI);
        oLiangFengChoiceQuestion.displayOptionBaiBan    && oTArray.push(MahjongTileDef.BAI_BAN);

        if (oTArray.length < 3) {
            cc.error("可以选择的选项不足");
            return;
        }

        if (3 == oTArray.length) {
            // 创建并发送 "亮风" 指令
            MsgBus.getInstance().sendMsg(
                mod_MJ_weihai_Protocol.msg.MJ_weihai_MsgCodeDef._MahjongLiangFengCmd,
                mod_MJ_weihai_Protocol.msg.MahjongLiangFengCmd.create({
                    t0: oTArray[0],
                    t1: oTArray[1],
                    t2: oTArray[2],
                })
            );

            SELF.hideChiPengGangHuOpHint();
            return;
        }

        // 如果选项 > 3,
        // 那么就得让用户做个选择题了...
        const oTableComp = cc.find("Canvas/MahjongTableArea").getComponentInChildren(MahjongTableComp);

        if (null == oTableComp) {
            cc.error("牌桌组件为空");
            return;
        }

        const nMyUserId = UserData.getMyData().getUserId();

        let oQuestionNode = MahjongLiangFengChoiceQuestionFactory.create();
        let oQuestionComp = oQuestionNode.getComponent(MahjongLiangFengChoiceQuestionComp);
        oQuestionComp.putLuanMao(oRuleSetting.isLuanMao())
            .putMahjongInHand(oTableComp.getMahjongInHand(nMyUserId))
            .putMahjongMoPai(oTableComp.getMahjongMoPai(nMyUserId))
            .renewDisplay();

        oQuestionComp.onCancelQuestion = () => {
            // 重新显示吃碰杠胡按钮
            let oTempParam = oEvent.target["custom_chiPengGangHuOpHintParam"] as mod_MJ_weihai_Protocol.msg.MahjongChiPengGangHuOpHintResult
            SELF.showChiPengGangHuOpHint(oTempParam);
            oQuestionNode.destroy();
        };

        oQuestionComp.onAnswerQuestion = (oSelectedTArray: Array<number>) => {
            // 创建并发送 "亮风" 指令
            MsgBus.getInstance().sendMsg(
                mod_MJ_weihai_Protocol.msg.MJ_weihai_MsgCodeDef._MahjongLiangFengCmd,
                mod_MJ_weihai_Protocol.msg.MahjongLiangFengCmd.create({
                    t0: oSelectedTArray[0],
                    t1: oSelectedTArray[1],
                    t2: oSelectedTArray[2],
                })
            );

            oQuestionNode.destroy();
            return;
        }

        cc.Canvas.instance.node.addChild(oQuestionNode);

        // 隐藏操作 
        SELF.hideChiPengGangHuOpHint();
    });
}

/**
 * 补风按钮事件
 * 
 * @param SELF this 指针
 */
function __button_buFeng_onTouchEnd(SELF: MJ_weihai_Scene): void {
    // "补风" 按钮
    cc.find("Canvas/InteractionArea/ChiPengGangHuOpArea/Button_BuFeng_")
        .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {

        cc.log("执行 \"补风\" 操作");

        // 创建并发送 "补风" 指令
        MsgBus.getInstance().sendMsg(
            mod_MJ_weihai_Protocol.msg.MJ_weihai_MsgCodeDef._MahjongBuFengCmd,
            mod_MJ_weihai_Protocol.msg.MahjongBuFengCmd.create({
            })
        );

        // 隐藏操作 
        SELF.hideChiPengGangHuOpHint();
    });
}
//#endregion
