// @import
import HeadImgLoader from "../../../../comm/script/HeadImgLoader";
import HuPatternDef from "../HuPatternDef";
import MahjongTileDef from "../MahjongTileDef";
import { __createMahjongAnGangGroup } from "./__createMahjongAnGangGroup";
import { __createMahjongBuGangGroup } from "./__createMahjongBuGangGroup";
import { __createMahjongChiGroup } from "./__createMahjongChiGroup";
import { __createMahjongLiangFengGroup } from "./__createMahjongLiangFengGroup";
import { __createMahjongMingGangGroup } from "./__createMahjongMingGangGroup";
import { __createMahjongPengGroup } from "./__createMahjongPengGroup";
import { __createMahjongTile } from "./__createMahjongTile";

// @const
const { ccclass } = cc._decorator;

/**
 * 麻将吃碰杠
 */
type MahjongChiPengGang = {
    /** 类型, 1 = 吃牌, 2 = 碰牌, 3 = 明杠, 4 = 暗杠, 5 = 补杠 */
    kind: number,
    /** 碰或者杠的是哪一张麻将牌 */
    tX: number,
    /** 吃的第一张麻将牌 */
    t0?: number,
    /** 吃的第二张麻将牌 */
    t1?: number,
    /** 吃的第三张麻将牌 */
    t2?: number,
    /** 来自用户 Id */
    fromUserId: number,
}

/**
 * 麻将亮风
 */
type MahjongLiangFeng = {
    /** 类型, 1 = 风, 2 = 箭, 3 = 乱锚 */
    kind: number,
    /** 东风数量 */
    numOfDongFeng: number,
    /** 南风数量 */
    numOfNanFeng: number,
    /** 西风数量 */
    numOfXiFeng: number,
    /** 北风数量 */
    numOfBeiFeng: number,
    /** 红中数量 */
    numOfHongZhong: number,
    /** 发财数量 */
    numOfFaCai: number,
    /** 白板数量 */
    numOfBaiBan: number,
}

/**
 * 结算条目
 */
type SettlementItem = {
    /** 用户 Id */
    userId: number,
    /** 用户名称 */
    userName: string,
    /** 头像 */
    headImg: string, 
    /** 服务器端的座位索引 */
    seatIndexAtServer: number,
    /** 飘几, -1 = 未知, 0 = 不飘, 1 = 飘_1, 2 = 飘_2, 3 = 飘_3, 4 = 飘_4 */
    piaoX: number,
    /** 房主标志 */
    roomOwnerFlag: boolean,
    /** 庄家标志 */
    zhuangJiaFlag: boolean,
    /** 胡牌模式数组 */
    huPatternArray: Array<{ key: number, val: number, }>,
    /** 杠牌模式数组 */
    gangPatternArray: Array<{ key: number, val: number, }>,
    /** 麻将吃碰杠 ( 包括明杠、暗杠、补杠 ) 数组 */
    mahjongChiPengGangArray: Array<MahjongChiPengGang>,
    /** 手中的麻将牌 ( 数组 ) */
    mahjongInHand: Array<number>,
    /** 胡牌或者自摸的麻将牌 */
    mahjongHuOrZiMo: number,
    /** 亮风麻将牌 */
    mahjongLiangFeng: MahjongLiangFeng,
    /** 是否自摸 */
    ziMo: boolean,
    /** 是否点炮 */
    dianPao: boolean,
    /** 是否胡牌 */
    hu: boolean,
    /** 当前分数 */
    currScore: number,
    /** 总分数 */
    totalScore: number,
}

/**
 * 麻将单局结算窗口
 * 
 * @look "MJ_weihai/res/1/prefab/RoundSettlementWnd.prefab"
 */
@ccclass
export default class RoundSettlementWndComp extends cc.Component {
    /**
     * 我的用户 Id
     */
    private _nMyUserId: number = -1;

    /**
     * 房间 Id
     */
    private _nRoomId: number = -1;

    /**
     * 玩法说明
     */
    private _strPlayMethodDesc: string = "";

    /**
     * 结算玩家数组
     */
    private _oSettlementItemArray: Array<SettlementItem> = null;

    // /**
    //  * onLoad
    //  */
    // onLoad(): void {
    // }

    /**
     * start
     */
    start(): void {
        cc.find("Button_Continue_", this.node)
            .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            // 继续游戏
            this.onContinueTheGame();
        });
    }

    // /**
    //  * update
    //  * 
    //  * @param nDeltaTime 变化时间
    //  */
    // update(nDeltaTime: number): void {
    // }

    /**
     * 设置我的用户 Id
     * 
     * @param nVal 用户 Id 数值
     * @return this 指针
     */
    putMyUserId(nVal: number): RoundSettlementWndComp {
        this._nMyUserId = nVal;
        return this;
    }

    /**
     * 设置房间 Id
     * 
     * @param nVal 
     * @return this 指针
     */
    putRoomId(nVal: number): RoundSettlementWndComp {
        this._nRoomId = nVal;
        return this;
    }

    /**
     * 设置玩法说明
     * 
     * @param strVal 字符串值
     * @return this 指针
     */
    putPlayMethodDesc(strVal: string): RoundSettlementWndComp {
        this._strPlayMethodDesc = strVal;
        return this;
    }

    /**
     * 设置结算条目数组
     * 
     * @param oVal 结算条目数组
     * @return this 指针
     */
    putSettlementItemArray(oVal: Array<SettlementItem>): RoundSettlementWndComp {
        this._oSettlementItemArray = oVal;
        return this;
    }

    /**
     * 刷新显示
     */
    renewDisplay(): void {
        if (null == this._oSettlementItemArray || 
            this._oSettlementItemArray.length <= 0) {
            return;
        }

        // 设置房间 Id
        cc.find("RoomIdArea/CurrRoomId", this.node)
            .getComponent(cc.Label)
            .string = "房" + this._nRoomId.toString();

        // 玩法说明
        cc.find("PlayMethodDesc", this.node)
            .getComponent(cc.Label)
            .string = this._strPlayMethodDesc;

        let oWinnerArray = [];

        for (let oSettlementItem of this._oSettlementItemArray) {
            if (null == oSettlementItem) {
                continue;
            }

            // 获取玩家节点并绑定数据
            let oItemXNode = cc.find(`TranscriptArea/Item_${oSettlementItem.seatIndexAtServer}_`, this.node);
            __bindSettlementItem(this, oItemXNode, oSettlementItem);

            if (oSettlementItem.currScore > 0) {
                oWinnerArray.push(oSettlementItem.userId);
            }
        }

        if (oWinnerArray.length <= 0) {
            cc.find("TitleArea/DrawGame", this.node).active = true;
        } else {
            cc.find("TitleArea/Win", this.node).active = oWinnerArray.includes(this._nMyUserId);
            cc.find("TitleArea/Lose", this.node).active = !oWinnerArray.includes(this._nMyUserId);
        }
    }

    /**
     * 当继续游戏
     */
    onContinueTheGame(): void {
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 绑定结算玩家
 * 
 * @param SELF this 指针
 * @param oItemXNode 结算条目
 * @param oSettlementItem 结算项目
 */
function __bindSettlementItem(SELF: RoundSettlementWndComp, oItemXNode: cc.Node, oSettlementItem: SettlementItem): void {
    if (null == SELF ||
        null == oItemXNode || 
        null == oSettlementItem) {
        return;
    }

    oItemXNode.active = true;

    // 用户名称
    cc.find("PlayerInfoArea/UserName", oItemXNode)
        .getComponent(cc.Label)
        .string = oSettlementItem.userName;

    // 用户 Id
    cc.find("PlayerInfoArea/UserId", oItemXNode)
        .getComponent(cc.Label)
        .string = oSettlementItem.userId.toString();

    cc.find("PlayerInfoArea/Flag_X_/FangZhu", oItemXNode).active = oSettlementItem.roomOwnerFlag;
    cc.find("PlayerInfoArea/Flag_X_/ZhuangJia", oItemXNode).active = oSettlementItem.zhuangJiaFlag;

    if (oSettlementItem.piaoX < 0) {
        cc.find("PlayerInfoArea/Flag_X_/PiaoX", oItemXNode).active = false;
    } else {
        cc.find("PlayerInfoArea/Flag_X_/PiaoX", oItemXNode).active = true;
        for (let nPiaoX: number = 0; nPiaoX <= 4; nPiaoX++) {
            cc.find(`PlayerInfoArea/Flag_X_/PiaoX/Piao_${nPiaoX}_`, oItemXNode).active = (nPiaoX == oSettlementItem.piaoX);
        }
    }

    HeadImgLoader.loadAndShow(
        cc.find("PlayerInfoArea/HeadJPG", oItemXNode),
        oSettlementItem.headImg
    );

    // 设置胡牌模式列表
    let strHuPatternStr = __getHuPatternStr(oSettlementItem);
    cc.find("HuPattern", oItemXNode).active = (0 != oSettlementItem.currScore);
    cc.find("HuPattern", oItemXNode).getComponent(cc.Label).string = strHuPatternStr;

    // 获取麻将列表区域
    let oMahjongListArea = cc.find("MahjongListArea", oItemXNode);
    oMahjongListArea.removeAllChildren();

    // 绑定麻将亮风
    __bindMahjongLangFeng(
        SELF, 
        oMahjongListArea, 
        oSettlementItem.mahjongLiangFeng
    );

    // 绑定麻将吃碰杠数组
    __bindMahjongChiPengGangArray(
        SELF, 
        oMahjongListArea, 
        oSettlementItem.mahjongChiPengGangArray
    );

    // 获取麻将手牌
    let oMahjongInHand = oSettlementItem.mahjongInHand;

    if (null != oMahjongInHand &&
        oMahjongInHand.length > 0) {
        for (let nMahjongVal of oMahjongInHand) {
            // 创建麻将牌节点
            oMahjongListArea.addChild(__createMahjongTile(SELF, nMahjongVal));
        }
    }

    if (oSettlementItem.mahjongHuOrZiMo > 0) {
        // 添加麻将胡牌
        oMahjongListArea.addChild(__createSpace(SELF));
        oMahjongListArea.addChild(__createMahjongTile(SELF, oSettlementItem.mahjongHuOrZiMo));
    }

    cc.find("IconArea/Hu", oItemXNode).active = oSettlementItem.hu;
    cc.find("IconArea/DianPao", oItemXNode).active = oSettlementItem.dianPao;
    cc.find("IconArea/ZiMo", oItemXNode).active = oSettlementItem.ziMo;

    const oScoreNode = cc.find("Score", oItemXNode);

    if (oSettlementItem.currScore > 0) {
        oScoreNode.getComponent(cc.Label).string = "+" + oSettlementItem.currScore;
        oScoreNode.color = new cc.Color(255, 64, 32, 255);
        oScoreNode.active = true;
    } else if (oSettlementItem.currScore == 0) {
        oScoreNode.active = false;
    } else {
        oScoreNode.getComponent(cc.Label).string = oSettlementItem.currScore.toString();
        oScoreNode.color = new cc.Color(140, 180, 140, 255);
        oScoreNode.active = true;
    }
}

/**
 * 获取胡牌模式字符串, 这里也把杠牌番数计算进去了
 * 
 * @param oSettlementItem 结算项目
 */
function __getHuPatternStr(oSettlementItem: SettlementItem): string {
    if (null == oSettlementItem || 
        0 == oSettlementItem.currScore) {
        return "";
    }

    let oFinalStrArray = [];
    let nLiangFengFan = 0;
    let nTotalGangFan = 0;

    // 先计算亮风
    // 
    if (null != oSettlementItem.mahjongLiangFeng) {
        nLiangFengFan += oSettlementItem.mahjongLiangFeng.numOfDongFeng;
        nLiangFengFan += oSettlementItem.mahjongLiangFeng.numOfNanFeng;
        nLiangFengFan += oSettlementItem.mahjongLiangFeng.numOfXiFeng;
        nLiangFengFan += oSettlementItem.mahjongLiangFeng.numOfBeiFeng;
        nLiangFengFan += oSettlementItem.mahjongLiangFeng.numOfHongZhong;
        nLiangFengFan += oSettlementItem.mahjongLiangFeng.numOfFaCai;
        nLiangFengFan += oSettlementItem.mahjongLiangFeng.numOfBaiBan;
    }

    nLiangFengFan = Math.max(0, nLiangFengFan - 3);

    if (nLiangFengFan > 0) {
        if (oSettlementItem.currScore > 0) {
            oFinalStrArray.push(`放风 ( x${nLiangFengFan} )`);
        } else {
            oFinalStrArray.push(`放风 ( -${nLiangFengFan} )`);
        }
    }

    // 计算杠
    // 
    if (null != oSettlementItem.gangPatternArray && 
        oSettlementItem.gangPatternArray.length > 0) {
        for (let oGangPattern of oSettlementItem.gangPatternArray) {
            if (null != oGangPattern) {
                nTotalGangFan += oGangPattern.val;
            }
        }
    }

    if (nTotalGangFan > 0) {
        if (oSettlementItem.currScore > 0) {
            oFinalStrArray.push(`杠 ( x${nTotalGangFan} )`);
        } else {
            oFinalStrArray.push(`杠 ( -${nTotalGangFan} )`);
        }
    }

    // 计算胡或自摸
    // 
    if (null != oSettlementItem.huPatternArray && 
        oSettlementItem.huPatternArray.length > 0) {
        oFinalStrArray.push(HuPatternDef.getConcatStrVal(oSettlementItem.huPatternArray, "，"));
    }

    if (oFinalStrArray.length <= 0) {
        return "";
    } else {
        return oFinalStrArray.join("，");
    }
}

/**
 * 绑定麻将亮风
 * 
 * @param SELF this 指针
 * @param oMahjongListArea 麻将列表区域
 * @param oMahjongLiangFeng 麻将亮风
 */
function __bindMahjongLangFeng(SELF: RoundSettlementWndComp, oMahjongListArea: cc.Node, oMahjongLiangFeng: MahjongLiangFeng): void {
    if (null == SELF || 
        null == oMahjongListArea || 
        null == oMahjongLiangFeng) {
        return;
    }

    let oCounterMap = {};
    oCounterMap[MahjongTileDef.DONG_FENG]  = oMahjongLiangFeng.numOfDongFeng;
    oCounterMap[MahjongTileDef.NAN_FENG]   = oMahjongLiangFeng.numOfNanFeng;
    oCounterMap[MahjongTileDef.XI_FENG]    = oMahjongLiangFeng.numOfXiFeng;
    oCounterMap[MahjongTileDef.BEI_FENG]   = oMahjongLiangFeng.numOfBeiFeng;
    oCounterMap[MahjongTileDef.HONG_ZHONG] = oMahjongLiangFeng.numOfHongZhong;
    oCounterMap[MahjongTileDef.FA_CAI]     = oMahjongLiangFeng.numOfFaCai;
    oCounterMap[MahjongTileDef.BAI_BAN]    = oMahjongLiangFeng.numOfBaiBan;

    // 创建麻将亮风
    let oNewNode = __createMahjongLiangFengGroup(SELF, oCounterMap);
    oMahjongListArea.addChild(oNewNode);
    oMahjongListArea.addChild(__createSpace(SELF));
}

/**
 * 绑定麻将吃碰杠数组
 * 
 * @param SELF this 指针
 * @param oMahjongListArea 麻将列表区域
 * @param oMahjongChiPengGangArray 麻将吃碰杠数组
 */
function __bindMahjongChiPengGangArray(
    SELF: RoundSettlementWndComp, oMahjongListArea: cc.Node, oMahjongChiPengGangArray: Array<MahjongChiPengGang>): void {
    if (null == SELF || 
        null == oMahjongListArea || 
        null == oMahjongChiPengGangArray || 
        oMahjongChiPengGangArray.length <= 0) {
        return;
    }

    // 先添加吃碰杠
    for (let oMahjongChiPengGang of oMahjongChiPengGangArray) {
        if (null == oMahjongChiPengGang) {
            continue;
        }
        
        let oNewNode = null;

        switch (oMahjongChiPengGang.kind) {
            case 1: // 吃
                oNewNode = __createMahjongChiGroup(
                    SELF, 
                    oMahjongChiPengGang.t0, 
                    oMahjongChiPengGang.t1, 
                    oMahjongChiPengGang.t2
                );
                break;

            case 2: // 碰
                oNewNode = __createMahjongPengGroup(
                    SELF, 
                    oMahjongChiPengGang.tX
                );
                break;

            case 3: // 明杠
                oNewNode = __createMahjongMingGangGroup(
                    SELF, 
                    oMahjongChiPengGang.tX
                );
                break;

            case 4: // 暗杠
                oNewNode = __createMahjongAnGangGroup(
                    SELF, 
                    oMahjongChiPengGang.tX
                );
                break;

            case 5: // 补杠
                oNewNode = __createMahjongBuGangGroup(
                    SELF, 
                    oMahjongChiPengGang.tX
                );
                break;

            default:
                break;
        }

        oMahjongListArea.addChild(oNewNode);
        oMahjongListArea.addChild(__createSpace(SELF));
    }
}

/**
 * 创建空白
 * 
 * @param SELF this 指针
 * @return Cocos 节点
 */
function __createSpace(SELF: RoundSettlementWndComp): cc.Node {
    // 获取预制体
    let oPrefab = cc.find("Template/Space", SELF.node);
    // 创建并返回新节点
    return cc.instantiate(oPrefab);
}
