// @import
import AllMahjongValImg from "./AllMahjongValImg";
import HuFormula from "./hupattern/HuFormula";
import MahjongTableComp from "./table/MahjongTableComp";
import MahjongTableFactory from "./table/MahjongTableFactory";
import MahjongTileDef from "./MahjongTileDef";
import MahjongTileOpComp from "./table/MahjongTileOpComp";
import MJ_weihai_Scene from "./MJ_weihai_Scene";
import MsgBus from "../../../comm/script/MsgBus";
import UserData from "../../../bizdata/script/UserData";
import { mod_MJ_weihai_Protocol } from "./msg/AllMsg.ver_MJ_weihai_";

/**
 * 创建麻将牌桌, 
 * XXX 注意: 在这里同步数据
 * 
 * @param SELF this 指针
 * @param nMaxPlayer 最大玩家数量
 * @param oSyncRoomDataResult 同步数据结果
 * @param bForceCreate 强制创建新麻将牌桌, false = 不强制创建, 尽量使用旧的
 */
export function __createMahjongTable(SELF: MJ_weihai_Scene, nMaxPlayer: number, oSyncRoomDataResult: any, bForceCreate: boolean = false): void {
    if (null == SELF ||
        null == oSyncRoomDataResult) {
        return;
    }

    if (bForceCreate) {
        cc.find("Canvas/MahjongTableArea").removeAllChildren();
    }

    // 麻将牌桌组件
    let oTableComp: MahjongTableComp = null;

    if (cc.find("Canvas/MahjongTableArea").childrenCount <= 0) {
        // 创建麻将牌桌
        let oTableNode = MahjongTableFactory.create(nMaxPlayer);

        if (null == oTableNode) {
            cc.log("创建牌桌为空");
            return;
        }

        // 获取牌桌组件
        oTableComp = oTableNode.getComponent(MahjongTableComp);

        if (null == oTableComp) {
            cc.log("麻将牌桌组件为空");
            return;
        }

        cc.find("Canvas/MahjongTableArea").addChild(oTableNode);
    }
    else {
        // 获取麻将牌桌组件
        oTableComp = cc.find("Canvas/MahjongTableArea").getComponentInChildren(MahjongTableComp);
    }

    // 获取玩家列表
    let oPlayerList = oSyncRoomDataResult.player;
    // 获取第一视角用户
    let oFirstPlayer = oPlayerList.find((oPlayer: { userId: number; }) => oPlayer.userId == UserData.getMyData().getUserId());

    // 添加第一视角玩家
    oTableComp.addPlayer(oFirstPlayer, true);

    // 当选中某个玩家时
    oTableComp.onSelectedAPlayer = (oCurrPlayer) => {
        // 显示玩家信息
        SELF.showPlayerInfoDialog(oCurrPlayer);
    }

    for (let oPlayer of oPlayerList) {
        if (null == oPlayer) {
            continue;
        }

        // 添加玩家
        oTableComp.addPlayer(oPlayer);

        // 更新玩家手牌
        oTableComp.updateMahjongInHand(
            oPlayer.userId,
            oPlayer.mahjongInHand,
            oPlayer.mahjongMoPai
        );

        // 设置庄家标志
        if (oPlayer.zhuangJiaFlag) {
            oTableComp.putZhuangJiaFlag(oPlayer.userId);
        }

        if (oPlayer.userId == UserData.getMyData().getUserId()) {
            // 如果是自己, 
            // 就可以操作麻将牌
            oTableComp.onAMahjongTileClick = (oMahjongTileOpNode) => {
                __onAMahjongTileClick(
                    SELF, oTableComp, oMahjongTileOpNode
                );

                __hintMahjongCanHu(
                    SELF, oTableComp, oMahjongTileOpNode
                );
            };
        }
    }

    // 所有玩家都落座之后,
    // 显示吃碰杠
    for (let oPlayer of oPlayerList) {
        if (null == oPlayer) {
            continue;
        }

        // 根据用户 Id 清除吃碰杠展示 ( 包括亮风 )
        oTableComp.clearChiPengGangByUserId(oPlayer.userId);

        // 显示麻将亮风
        __showMahjongLiangFeng(oTableComp, oPlayer);
        // 显示麻将吃碰杠
        __showMahjongChiPengGang(oTableComp, oPlayer);
        // XXX 注意: 一定是先展示吃碰杠,
        // 再更新已经打出的牌!
        // 因为显示吃碰杠牌是调用的 doMahjongChi、doMahjongPeng、doMahjongGang,
        // 这几个函数在执行的时候会检查并扣除最后打出的那张牌,
        // 如果先更新了已经打出的牌, 
        // 那么就有可能会出现某个已经打出的牌被 “吃掉” 的 Bug...

        // 更新玩家已经打出的麻将牌
        oTableComp.updateMahjongOutput(
            oPlayer.userId,
            oPlayer.mahjongOutput
        );
    }

    // 调整指针指向
    oTableComp.redirectActUserId(
        oSyncRoomDataResult.currActUserId, 
        oSyncRoomDataResult.currRoundIndex, 
        oSyncRoomDataResult.remainCardNum, 
        oSyncRoomDataResult.remainTime
    );
}

///////////////////////////////////////////////////////////////////////

/**
 * 亮风玩家
 */
type LiangFengPlayer = {
    userId: number,
    mahjongLiangFeng: {
        kind: number,
        numOfDongFeng: number,
        numOfNanFeng: number, 
        numOfXiFeng: number,
        numOfBeiFeng: number,
        numOfHongZhong: number,
        numOfFaCai: number, 
        numOfBaiBan: number,
    }
};

/**
 * 吃碰杠玩家
 */
type ChiPengGangPlayer = {
    userId: number,
    mahjongChiPengGang: Array<{ 
        kind: number,
        tX: number,
        t0: number, 
        t1: number, 
        t2: number, 
        fromUserId: number, 
    }>,
}

/**
 * 显示麻将亮风
 * 
 * @param oTableComp 麻将牌桌组件
 * @param oPlayer 亮风玩家
 */
function __showMahjongLiangFeng(oTableComp: MahjongTableComp, oPlayer: LiangFengPlayer): void {
    if (null == oTableComp || 
        null == oPlayer || 
        null == oPlayer.mahjongLiangFeng) {
        return;
    }

    let oMahjongLiangFeng = oPlayer.mahjongLiangFeng;
    let oCounterMap = {};
    oCounterMap[MahjongTileDef.DONG_FENG]  = oMahjongLiangFeng.numOfDongFeng;
    oCounterMap[MahjongTileDef.NAN_FENG]   = oMahjongLiangFeng.numOfNanFeng;
    oCounterMap[MahjongTileDef.XI_FENG]    = oMahjongLiangFeng.numOfXiFeng;
    oCounterMap[MahjongTileDef.BEI_FENG]   = oMahjongLiangFeng.numOfBeiFeng;
    oCounterMap[MahjongTileDef.HONG_ZHONG] = oMahjongLiangFeng.numOfHongZhong;
    oCounterMap[MahjongTileDef.FA_CAI]     = oMahjongLiangFeng.numOfFaCai;
    oCounterMap[MahjongTileDef.BAI_BAN]    = oMahjongLiangFeng.numOfBaiBan;

    oTableComp.doUpdateMahjongLiangFeng(
        oPlayer.userId, 
        oMahjongLiangFeng.kind, 
        oCounterMap
    );
}

/**
 * 显示麻将吃碰杠
 * 
 * @param oTableComp 麻将牌桌组件
 * @param oChiPengGangPlayer 吃碰杠玩家
 */
function __showMahjongChiPengGang(
    oTableComp: MahjongTableComp, oChiPengGangPlayer: ChiPengGangPlayer): void {
    if (null == oTableComp || 
        null == oChiPengGangPlayer) {
        return;
    }

    for (let oAChiPengGang of oChiPengGangPlayer.mahjongChiPengGang) {
        if (null == oAChiPengGang) {
            continue;
        }

        switch (oAChiPengGang.kind) {
            case 1: // 吃
                oTableComp.doMahjongChi(
                    oChiPengGangPlayer.userId,
                    oAChiPengGang.tX,
                    oAChiPengGang.t0,
                    oAChiPengGang.t1,
                    oAChiPengGang.t2,
                    oAChiPengGang.fromUserId,
                );
                break;

            case 2: // 碰
                oTableComp.doMahjongPeng(
                    oChiPengGangPlayer.userId,
                    oAChiPengGang.tX,
                    oAChiPengGang.fromUserId,
                );
                break;
            
            case 3: // 明杠
                oTableComp.doMahjongMingGang(
                    oChiPengGangPlayer.userId,
                    oAChiPengGang.tX,
                    oAChiPengGang.fromUserId,
                );
                break;

            case 4: // 暗杠
                oTableComp.doMahjongAnGang(
                    oChiPengGangPlayer.userId,
                    oAChiPengGang.tX,
                    oChiPengGangPlayer.userId == UserData.getMyData().getUserId() ? 1 : 0,
                );
                break;

            case 5: // 补杠
                oTableComp.doMahjongBuGang(
                    oChiPengGangPlayer.userId,
                    oAChiPengGang.tX,
                );
                break;

            default:
                break;
        }
    }
}

/**
 * 麻将牌点击事件, 事件流:
 * MahjongTileOpComp --> MahjongInHandGroupComp --> MahjongTableComp --> MJ_weihai_Scene ( 当前类 )
 * 
 * @param SELF MJ_weihai_Scene.this
 * @param oTableComp 麻将牌桌组件
 * @param oMahjongTileOpNode 麻将牌操作节点
 */
function __onAMahjongTileClick(SELF: MJ_weihai_Scene, oTableComp: MahjongTableComp, oMahjongTileOpNode: cc.Node): void {
    if (null == SELF ||
        null == oTableComp ||
        null == oMahjongTileOpNode) {
        return;
    }

    // 获取当前操作组件
    let oCurrOpComp = oMahjongTileOpNode.getComponent(MahjongTileOpComp);

    if (null == oCurrOpComp) {
        return;
    }

    if (oCurrOpComp.getState() == 3) {
        MsgBus.getInstance().sendMsg(
            mod_MJ_weihai_Protocol.msg.MJ_weihai_MsgCodeDef._MahjongChuPaiCmd,
            mod_MJ_weihai_Protocol.msg.MahjongChuPaiCmd.create({
                t: oCurrOpComp.getVal(),
            })
        );
        return;
    }

    // 重制所有手中的麻将牌的状态
    oTableComp.resetAllMahjongInHandState();
    oCurrOpComp.setState(3);
}

/**
 * 提示可以胡牌的麻将
 * 
 * @param SELF this 指针
 * @param oTableComp 麻将牌桌组件
 * @param oMahjongTileOpNode 麻将牌操作节点
 */
function __hintMahjongCanHu(SELF: MJ_weihai_Scene, oTableComp: MahjongTableComp, oMahjongTileOpNode: cc.Node): void {
    if (null == SELF ||
        null == oTableComp ||
        null == oMahjongTileOpNode) {
        return;
    }

    // 获取当前操作组件
    let oCurrOpComp = oMahjongTileOpNode.getComponent(MahjongTileOpComp);

    if (null == oCurrOpComp) {
        return;
    }

    // 获取用户 Id
    let nMyUserId = UserData.getMyData().getUserId();
    // 获取玩家手牌
    let oMahjongInHand = oTableComp.getMahjongInHand(nMyUserId);
    // 获取玩家摸到的牌
    let nMahjongMoPai = oTableComp.getMahjongMoPai(nMyUserId);

    if (null == oMahjongInHand || 
        oMahjongInHand.length <= 0 || 
        nMahjongMoPai <= 0) {
        return;
    }

    // 构建测试麻将列表
    let oTestMahjongValArray = [ 
        ...oMahjongInHand, nMahjongMoPai,
    ];

    // 准备打出的麻将所在位置
    let nPreOutputMahjongAtIndex = oTestMahjongValArray.indexOf(oCurrOpComp.getVal());

    if (-1 != nPreOutputMahjongAtIndex) {
        oTestMahjongValArray.splice(nPreOutputMahjongAtIndex, 1);
    }

    let oCanHuMahjongArray = HuFormula.getCanHuMahjongArray(oTestMahjongValArray);
    cc.log(`可以胡牌的列表 = ${JSON.stringify(oCanHuMahjongArray)}`);

    let oHintAreaNode = cc.find("Canvas/InteractionArea/HintMahjongCanHuArea");

    if (oCanHuMahjongArray.length <= 0) {
        oHintAreaNode.active = false;
        return;
    }

    oCanHuMahjongArray = oCanHuMahjongArray.sort();
    let nI = 0;
    const MAX_COUNT = 8;

    for (; nI < oCanHuMahjongArray.length && nI < MAX_COUNT; nI++) {
        // 获取可以胡牌的麻将牌数值
        let nMahjongVal = oCanHuMahjongArray[nI];

        cc.find(`Pattern_${nI}_/MahjongTile/Val`, oHintAreaNode)
            .getComponent(cc.Sprite)
            .spriteFrame = AllMahjongValImg.getSpriteFrame(nMahjongVal);

        cc.find(`Pattern_${nI}_`, oHintAreaNode).active = true;
    }

    for (; nI < MAX_COUNT; nI++) {
        // 隐藏剩余的
        cc.find(`Pattern_${nI}_`, oHintAreaNode).active = false;
    }

    oHintAreaNode.active = true;
}
