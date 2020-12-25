//#region @import
import AppSetting from "../../../bizdata/script/AppSetting";
import AudioMajordomo from "../../../comm/script/AudioMajordomo";
import CachingKeyDef from "../../../bizdata/script/CachingKeyDef";
import CachedData from "../../../bizdata/script/CachedData";
import GlobalDef from "../../../comm/script/GlobalDef";
import LocalBrowser from "../../../comm/script/LocalBrowser";
import ModConfig from "./ModConfig.ver_MJ_weihai_";
import MsgBus from "../../../comm/script/MsgBus";
import MsgRecognizer from "../../../comm/script/MsgRecognizer";
import PlayerInfoDialogComp from "./subview/PlayerInfoDialogComp";
import RoomInfoDialogComp from "./subview/RoomInfoDialogComp";
import RuleSetting from "./RuleSetting";
import UserData from "../../../bizdata/script/UserData";
import Ver from "../../../comm/script/Ver";
import { __createMahjongTable } from "./__createMahjongTable";
import { __onMsgHandler } from "./resulthandler/__onMsgHandler.ver_MJ_weihai_";
import { __regUIEvent } from "./__regUIEvent.ver_MJ_weihai_";
import { mod_chatServerProtocol, mod_MJ_weihai_Protocol } from "./msg/AllMsg.ver_MJ_weihai_";
//#endregion

// @const
const { ccclass } = cc._decorator;
const BG_MUSIC = "res/1/audio/BGMusic_Mahjong_";

/**
 * 吃碰杠胡操作提示参数
 */
type ChiPengGangHuOpHintParam = mod_MJ_weihai_Protocol.msg.MahjongChiPengGangHuOpHintResult

/**
 * 同步房间数据结果
 */
type ISyncRoomDataResult = mod_MJ_weihai_Protocol.msg.ISyncRoomDataResult;

/**
 * 威海麻将场景
 */
@ccclass
export default class MJ_weihai_Scene extends cc.Component {
    /**
     * 房间号
     */
    _nRoomId: number = -1;

    /**
     * 房主用户 Id
     */
    _nRoomOwnerId: number = -1;

    /**
     * 当前牌局索引
     */
    _nCurrRoundIndex: number = -1;
    
    /**
     * 最大玩家数量
     */
    _nMaxPlayer: number = 2;

    /**
     * onLoad
     */
    onLoad(): void {
        let oCanvasNode = cc.find("Canvas");
        let nCanvasW = oCanvasNode.width;

        if (nCanvasW < GlobalDef._nStandardScreenWidth) {
            oCanvasNode.scale = (nCanvasW / GlobalDef._nStandardScreenWidth);
        }

        cc.find("Canvas/SubViewPlaceHolder/RoomInfoDialog")
            .addComponent(RoomInfoDialogComp);

        cc.find("Canvas/SubViewPlaceHolder/PlayerInfoDialog")
            .addComponent(PlayerInfoDialogComp);
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
        MsgRecognizer.addProtocol("MJ_weihai_", mod_MJ_weihai_Protocol);
        MsgRecognizer.addProtocol("chat", mod_chatServerProtocol);

        // 获取规则设置
        let oRuleItemArray = CachedData.getInstance().get(CachingKeyDef.RULE_ITEM_ARRAY);

        if (null == oRuleItemArray) {
            cc.error("房间规则设置为空");
            return;
        }

        // 创建规则设置
        let oRuleSetting = new RuleSetting(oRuleItemArray);
        this._nMaxPlayer = oRuleSetting.getMaxPlayer();

        // 消息处理
        __onMsgHandler(this);
        // 注册 UI 事件
        __regUIEvent(this, oRuleSetting);

        // 同步房间数据
        MsgBus.getInstance().sendMsg(
            mod_MJ_weihai_Protocol.msg.MJ_weihai_MsgCodeDef._SyncRoomDataCmd, 
            mod_MJ_weihai_Protocol.msg.SyncRoomDataCmd.create({
            })
        );

        // 发送已准备好指令
        MsgBus.getInstance().sendMsg(
            mod_MJ_weihai_Protocol.msg.MJ_weihai_MsgCodeDef._PrepareCmd,
            mod_MJ_weihai_Protocol.msg.PrepareCmd.create({ 
                yes: 1,
            })
        );

        // 播放背景音乐
        AudioMajordomo.getInstance().playBGMusic(
            ModConfig.BUNDLE_NAME, 
            BG_MUSIC, 
            AppSetting.getInstance()._bEnableBGMusic
        );

        // 加载完场景之后, 先不要撤掉进度条窗口!
        // 等待同步房间数据完成之后再撤掉...
        // @see SyncRoomDataResultHandler
        //LoadingWndFactory.getCreatedWnd().hide();

        // 设置版本号
        cc.find("Canvas/Label_Ver_").getComponent(cc.Label).string = Ver._strCurr;

        let funReportGeoLocation = () => {
            LocalBrowser.getGeoLocation((oGeoCoordz) => {
                if (null == oGeoCoordz) {
                    oGeoCoordz = {
                        latitude: 0,
                        longitude: 0,
                        altitude: 0,
                    };
                }

                // 通过消息汇报地理位置
                MsgBus.getInstance().sendMsg(
                    mod_MJ_weihai_Protocol.msg.MJ_weihai_MsgCodeDef._ReportGeoLocationCmd,
                    mod_MJ_weihai_Protocol.msg.ReportGeoLocationCmd.create({
                        latitude: oGeoCoordz.latitude,
                        longitude: oGeoCoordz.longitude,
                        altitude: oGeoCoordz.altitude,
                        clientIpAddr: "", // 有 proxyServer 来填充
                    })
                );
            });
        }

        funReportGeoLocation();
        this.schedule(funReportGeoLocation, 30, cc.macro.REPEAT_FOREVER);
    }

    // /**
    //  * update
    //  * 
    //  * @param nDeltaTime 变化时间
    //  */
    // update (nDeltaTime: number): void {
    // }

    /**
     * onDestroy
     */
    onDestroy(): void {
        MsgRecognizer.removeProtocolByName("MJ_weihai_");
        MsgRecognizer.removeProtocolByName("chat");
    }

    /**
     * 设置当前牌局索引
     * 
     * @param nVal 整数值
     */
    putCurrRoundIndex(nVal: number): MJ_weihai_Scene {
        this._nCurrRoundIndex = nVal;
        return this;
    }

    /**
     * 更新麻将牌桌
     * 
     * @param oSyncRoomDataResult 同步房间数据结果
     */
    updateMahjongTable(oSyncRoomDataResult: ISyncRoomDataResult): void {
        if (null == oSyncRoomDataResult || 
            null == oSyncRoomDataResult.ruleItem) {
            return;
        }

        // 创建规则设置
        let oRuleSetting = new RuleSetting(oSyncRoomDataResult.ruleItem);

        // 设置房间 Id 和当前牌局索引
        this._nRoomId = oSyncRoomDataResult.roomId;
        this._nCurrRoundIndex = oSyncRoomDataResult.currRoundIndex;
        // 设置房主用户 Id
        this._nRoomOwnerId = oSyncRoomDataResult.roomOwnerId;
        // 设置最大玩家数量
        this._nMaxPlayer = oRuleSetting.getMaxPlayer();

        if (oSyncRoomDataResult.currRoundIndex >= 0) {
            // 如果已经开局就隐藏解散和要求按钮
            this.hideInvite();
        }

        // 缓存数据
        __doCaching(oRuleSetting, oSyncRoomDataResult);

        // 更新房间信息面板
        this.initRoomInfoDialog(
            oRuleSetting, 
            oSyncRoomDataResult
        );

        __createMahjongTable(
            this, this._nMaxPlayer, oSyncRoomDataResult
        );
    }

    /**
     * 更新规则设置面板
     * 
     * @param oRuleSetting 规则设置
     * @param oSyncRoomDataResult 同步房间数据结果
     */
    private initRoomInfoDialog(oRuleSetting: RuleSetting, oSyncRoomDataResult: any): void {
        if (null == oRuleSetting || 
            null == oSyncRoomDataResult) {
            return;
        }

        // 设置当前牌局索引
        this._nCurrRoundIndex = oSyncRoomDataResult.currRoundIndex;

        cc.find("Canvas/RoomIdArea/CurrRoomId")
            .getComponent(cc.Label)
            .string = "房" + oSyncRoomDataResult.roomId;

        // 房间信息对话框默认是显示的, 可以参考 MJ_weihai_Scene.fire
        // cc.find("Canvas/SubViewPlaceHolder/RoomInfoDialog").active = true;
        cc.find("Canvas/SubViewPlaceHolder/RoomInfoDialog")
            .getComponent(RoomInfoDialogComp)
            .putRoomId(oSyncRoomDataResult.roomId)
            .putMaxPlayerAndMaxRoundDesc(oRuleSetting.getMaxPlayerAndMaxRoundDesc())
            .putPaymentWayDesc(oRuleSetting.getPaymentWayDesc())
            .putPlayMethodDesc(oRuleSetting.getPlayMethodDesc())
            .renewDisplay();
    }

    /**
     * 显示用户信息面板
     * 
     * @param oPlayerData 用户信息
     */
    showPlayerInfoDialog(oPlayerData: any): void {
        if (null == oPlayerData) {
            return;
        }

        let bCanFireAPlayer = this._nCurrRoundIndex < 0 
            && UserData.getMyData().getUserId() == this._nRoomOwnerId
            && UserData.getMyData().getUserId() != oPlayerData["userId"]; // 不能踢出自己

        cc.find("Canvas/SubViewPlaceHolder/PlayerInfoDialog").active = true;
        cc.find("Canvas/SubViewPlaceHolder/PlayerInfoDialog")
            .getComponent(PlayerInfoDialogComp)
            .putPlayerData(oPlayerData)
            .putCanFireAPlayer(bCanFireAPlayer)
            .renewDisplay();
    }

    /**
     * 显示吃碰杠胡操作提示
     * 
     * @param oParam 吃碰杠胡操作提示参数
     */
    showChiPengGangHuOpHint(oParam: ChiPengGangHuOpHintParam): void {
        if (null == oParam) {
            return;
        }

        const oRootNode = cc.find("Canvas/InteractionArea/ChiPengGangHuOpArea");
        // 显示吃按钮并设置吃牌模式
        cc.find("Button_Chi_", oRootNode).active = oParam.opHintChi;
        cc.find("Button_Chi_", oRootNode).attr({ custom_chiChoiceQuestion: oParam.chiChoiceQuestion, });
        // 显示碰杠按钮
        cc.find("Button_Peng_", oRootNode).active = oParam.opHintPeng;
        cc.find("Button_Gang_", oRootNode).active = oParam.opHintGang;
        // 显示胡按钮
        cc.find("Button_Hu_", oRootNode).active = oParam.opHintHu;
        // 显示亮风和补风按钮
        cc.find("Button_LiangFeng_", oRootNode).active = oParam.opHintLiangFeng;
        cc.find("Button_LiangFeng_", oRootNode).attr({ 
            custom_chiPengGangHuOpHintParam: oParam,
            custom_liangFengChoiceQuestion: oParam.liangFengChoiceQuestion, 
        });
        cc.find("Button_BuFeng_", oRootNode).active = oParam.opHintBuFeng;
        oRootNode.active = true;

        cc.tween(oRootNode)
            .to(0.00, { scaleX: 0.0 })
            .to(0.12, { scaleX: 1.0 })
            .call(() => { oRootNode.getComponent(cc.Widget).updateAlignment(); })
            .start()
    }

    /**
     * 隐藏吃碰杠胡操作提示
     */
    hideChiPengGangHuOpHint(): MJ_weihai_Scene {
        cc.find("Canvas/InteractionArea/ChiPengGangHuOpArea").active = false;
        return this;
    }

    /**
     * 显示选择飘提示
     */
    showSelectPiaoHint(): MJ_weihai_Scene {
        cc.find("Canvas/InteractionArea/SelectPiaoHintArea").active = true;
        return this;
    }

    /**
     * 隐藏邀请
     */
    hideInvite(): MJ_weihai_Scene {
        cc.find("Canvas/InteractionArea/Button_Invite_").active = false;
        return this;
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 缓存数据
 * 
 * @param oRuleSetting 规则设置
 * @param oSyncRoomDataResult 同步房间数据结果
 */
function __doCaching(oRuleSetting: RuleSetting, oSyncRoomDataResult: ISyncRoomDataResult): void {
    if (null == oRuleSetting || 
        null == oSyncRoomDataResult) {
        return;
    }

    CachedData.getInstance().set(CachingKeyDef.CACHED_ROOM, {
        roomId: oSyncRoomDataResult.roomId,
        roomCreateTime: oSyncRoomDataResult.roomCreateTime,
        roomOwnerId: oSyncRoomDataResult.roomOwnerId,
        ruleSetting: oRuleSetting,
    });

    for (let oCurrPlayer of oSyncRoomDataResult.player) {
        if (null == oCurrPlayer) {
            continue;
        }

        UserData.checkIn(
            oCurrPlayer.userId, 
            oCurrPlayer.userName, 
            oCurrPlayer.headImg, 
            oCurrPlayer.sex, 
            oCurrPlayer.clientIpAddr
        );
    }
}
