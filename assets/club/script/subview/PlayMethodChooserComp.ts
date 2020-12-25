// @import
import MsgBus from "../../../comm/script/MsgBus";
import RuleLanguage from "../../../bizdata/script/RuleLanguage";
import { mod_clubServerProtocol } from "../msg/AllMsg.ver_Club";

// @const
const { ccclass } = cc._decorator;
const GAME_TYPE_0 = "GAME_TYPE_0";
const GAME_TYPE_1 = "GAME_TYPE_1";
const USING_FIX_GAME_X = "USING_FIX_GAME_X";

/**
 * 键值对
 */
type KeyAndVal = {
    /** 关键字 */
    key?: number, 
    /** 数值 */
    val?: number,
}

/**
 * 固定玩法
 */
type FixGameX = {
    /** 索引 */
    index?: number,
    /** 游戏类型 0 */
    gameType0?: number,
    /** 游戏类型 1 */
    gameType1?: number,
    /** 规则条目数组 */
    ruleItemArray?: Array<KeyAndVal>;
}

/**
 * 成员列表窗口
 */
@ccclass
export default class PlayMethodChooserComp extends cc.Component {
    /**
     * 亲友圈 Id
     */
    _nClubId: number = -1;

    /**
     * 牌桌序号
     */
    _nTableSeqNum: number = -1;

    /**
     * 固定玩法数组
     */
    _oFixGameXArray: Array<FixGameX>;

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
    }

    // /**
    //  * update
    //  * 
    //  * @param nDeltaTime 变化时间
    //  */
    // update(nDeltaTime: number): void {
    // }

    /**
     * 设置亲友圈 Id
     * 
     * @param nVal 整数值
     */
    putClubId(nVal: number): PlayMethodChooserComp {
        this._nClubId = nVal;
        return this;
    }

    /**
     * 设置牌桌序号
     * 
     * @param nVal 整数值
     */
    putTableSeqNum(nVal: number): PlayMethodChooserComp {
        this._nTableSeqNum = nVal;
        return this;
    }

    /**
     * 设置固定玩法数组
     * 
     * @param oVal 数组对象
     */
    putFixGameXArray(oVal: Array<FixGameX>): PlayMethodChooserComp {
        this._oFixGameXArray = oVal;
        return this;
    }

    /**
     * 刷新显示
     */
    renewDisplay(): void {
        if (null == this._oFixGameXArray || 
            this._oFixGameXArray.length <= 0) {
            return;
        }

        let oLayoutNode = cc.find(`PrimeDialog/Center/Layout`, this.node);
        let nIndex = -1;

        for (let oFixGameX of this._oFixGameXArray) {
            if (null == oFixGameX) {
                continue;
            }

            ++nIndex;

            if (nIndex > 3) {
                return;
            }

            let strDescText = "";
            strDescText += RuleLanguage.translateGameType1(oFixGameX.gameType1);
            strDescText += "\n" + (RuleLanguage.translateByRuleItemArray(oFixGameX.ruleItemArray) || []).join("、");

            let oTempNode = cc.find(`FixGame_${nIndex}_`, oLayoutNode);

            cc.find("DescText", oTempNode)
                .getComponent(cc.Label)
                .string = strDescText;

            oTempNode.x = oTempNode.y = 0;
            oTempNode.active = true;

            let oAttr = {};
            oAttr[GAME_TYPE_0] = oFixGameX.gameType0;
            oAttr[GAME_TYPE_1] = oFixGameX.gameType1;
            oAttr[USING_FIX_GAME_X] = oFixGameX.index;
            oTempNode.attr(oAttr);
        }

        let oLayoutComp = oLayoutNode.getComponent(cc.Layout);

        if (nIndex <= 2) {
            oLayoutComp.type = cc.Layout.Type.HORIZONTAL;
        } else {
            oLayoutComp.type = cc.Layout.Type.GRID;
        }

        oLayoutComp.updateLayout();
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 注册 UI 事件
 * 
 * @param SELF this 指针
 */
function __regUIEvent(SELF: PlayMethodChooserComp): void {
    if (null == SELF) {
        return;
    }

    cc.find("Mask", SELF.node).on(
        cc.Node.EventType.TOUCH_END, () => {
            SELF.node.destroy();
        }
    );

    for (let nIndex = 0; nIndex < 4; nIndex++) {
        // 获取固定玩法节点
        let oFixGameNode = cc.find(`PrimeDialog/Center/Layout/FixGame_${nIndex}_`, SELF.node);

        if (null == oFixGameNode) {
            continue;
        }

        let nGameType0 = oFixGameNode[GAME_TYPE_0];
        let nGameType1 = oFixGameNode[GAME_TYPE_1];
        let nUsingFixGameX = oFixGameNode[USING_FIX_GAME_X];

        oFixGameNode.on(
            cc.Node.EventType.TOUCH_END, () => {
                cc.log(`创建亲友圈牌桌, clubId = ${SELF._nClubId}, tableSeqNum = ${SELF._nTableSeqNum}, gameType0 = ${nGameType0}, gameType1 = ${nGameType1}, usingFixGame = ${nUsingFixGameX}`);

                // 发送创建亲友圈牌桌消息
                MsgBus.getInstance().sendMsg(
                    mod_clubServerProtocol.msg.ClubServerMsgCodeDef._CreateTableCmd,
                    mod_clubServerProtocol.msg.CreateTableCmd.create({
                        gameType0: nGameType0,
                        gameType1: nGameType1,
                        clubId: SELF._nClubId,
                        usingFixGameX: nUsingFixGameX,
                        seqNum: SELF._nTableSeqNum,
                    })
                );
            }
        );
    }
}
