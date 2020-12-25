// @import
import HeadImgLoader from "../../../comm/script/HeadImgLoader";
import MsgBus from "../../../comm/script/MsgBus";
import RuleLanguage from "../../../bizdata/script/RuleLanguage";
import { mod_clubServerProtocol } from "../msg/AllMsg.ver_Club";

// @const
const { ccclass } = cc._decorator;

/**
 * 关键字和数值
 */
type KeyAndVal = {
    /** 关键字 */
    key?: number,
    /** 数值 */
    val?: number,
}

/**
 * 牌桌玩家
 */
type Player = {
    /** 用户 Id */
    userId?: number,
    /** 用户名称 */
    userName?: string,
    /** 头像 */
    headImg?: string,
    /** 座位索引 */
    atSeatIndex?: number,
}

/**
 * 亲友圈牌桌
 */
type Table = {
    /** 牌桌序号 */
    seqNum?: number,
    /** 房间 Id */
    roomId?: number,
    /** 游戏类型 0 */
    gameType0?: number,
    /** 游戏类型 1 */
    gameType1?: number,
    /** 规则条目数组 */
    ruleItemArray?: Array<KeyAndVal>,
    /** 最大玩家数量 */
    maxPlayer?: number,
    /** 玩家数组 */
    playerArray?: Array<Player>;
}

/**
 * 牌桌详情对话框组件
 */
@ccclass
export default class TableDetailzDialogComp extends cc.Component {
    /**
     * 当前牌桌
     */
    _oCurrTable: Table = null;

    // /**
    //  * onLoad
    //  */
    // onLoad(): void {
    // }

    /**
     * start
     */
    start(): void {
        // 注册 UI 事件
        __regUIEvent(this);

        // 增加缓动效果
        cc.tween(cc.find("Mask", this.node))
            .to(0.00, { opacity: 0 })
            .to(0.48, { opacity: 160 })
            .start();

        cc.tween(cc.find("PrimeDialog", this.node))
            .to(0.00, { position: cc.v3(0, 0), opacity: 128 })
            .to(0.12, { position: cc.v3(0, 0), opacity: 255, scale: 1.20 })
            .to(0.12, { position: cc.v3(0, 0), opacity: 255, scale: 1.00 })
            .start();
    }

    // /**
    //  * update
    //  * 
    //  * @param nDeltaTime 变化时间
    //  */
    // update(nDeltaTime: number): void {
    // }

    /**
     * 设置当前牌桌
     * 
     * @param oVal 对象值
     */
    putCurrTable(oVal: Table): TableDetailzDialogComp {
        this._oCurrTable = oVal;
        return this;
    }

    /**
     * 刷新显示
     */
    renewDisplay(): void {
        if (null == this._oCurrTable) {
            return;
        }

        let strDescText = "";
        strDescText += RuleLanguage.translateGameType1(this._oCurrTable.gameType1);
        strDescText += "\n" + (RuleLanguage.translateByRuleItemArray(this._oCurrTable.ruleItemArray) || []).join("、");

        cc.find("PrimeDialog/Center/RoomDesc", this.node)
            .getComponent(cc.Label)
            .string = strDescText;

        for (let nIndex = 0; nIndex < this._oCurrTable.maxPlayer; nIndex++) {
            let oRootNode = cc.find(`PrimeDialog/Center/Layout/PlayerInfo_${nIndex}_`, this.node);
            oRootNode.active = true;

            cc.find("UserName", oRootNode).active = true;
            cc.find("UserName", oRootNode)
                .getComponent(cc.Label)
                .string = "虚席以待";
        }

        for (let oCurrPlayer of this._oCurrTable.playerArray) {
            if (null == oCurrPlayer) {
                continue;
            }

            let oRootNode = cc.find(`PrimeDialog/Center/Layout/PlayerInfo_${oCurrPlayer.atSeatIndex}_`, this.node);

            cc.find("UserName", oRootNode).active = true;
            cc.find("UserName", oRootNode)
                .getComponent(cc.Label)
                .string = oCurrPlayer.userName;

            HeadImgLoader.loadAndShow(
                cc.find(`PrimeDialog/Center/Layout/PlayerInfo_${oCurrPlayer.atSeatIndex}_/HeadJPG`, this.node),
                oCurrPlayer.headImg
            );
        }

        cc.find("PrimeDialog/Bottom/TableSeqNum", this.node)
            .getComponent(cc.Label)
            .string = "牌桌号：" + (this._oCurrTable.seqNum + 1);
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 注册 UI 时间
 * 
 * @param SELF this 指针
 */
function __regUIEvent(SELF: TableDetailzDialogComp): void {
    if (null == SELF) {
        return;
    }

    // 关闭对话
    cc.find("PrimeDialog/Top/Button_Close_", SELF.node).on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            // 增加缓动效果
            cc.tween(cc.find("Mask", SELF.node))
                .to(0.12, { opacity: 0, })
                .start();

            cc.tween(cc.find("PrimeDialog", SELF.node))
                .to(0.12, { position: cc.v3(0, 0), opacity: 128, scale: 0.84, })
                .call(() => { SELF.node.destroy(); })
                .start();
        }
    );

    cc.find("PrimeDialog/Bottom/Button_JoinRoom_", SELF.node).on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            MsgBus.getInstance().sendMsg(
                mod_clubServerProtocol.msg.ClubServerMsgCodeDef._JoinTableCmd,
                mod_clubServerProtocol.msg.JoinTableCmd.create({
                    roomId: SELF._oCurrTable.roomId,
                })
            );
        }
    );
}
