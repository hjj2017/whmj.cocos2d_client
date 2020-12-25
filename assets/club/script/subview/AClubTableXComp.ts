//#region @import
import HeadImgLoader from "../../../comm/script/HeadImgLoader";
//#endregion

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
 * 亲友圈牌桌 X 组件
 */
@ccclass
export default class AClubTableXComp extends cc.Component {
    /**
     * 牌桌索引
     */
    _nIndex: number = -1;

    /**
     * 牌桌序号
     */
    _nSeqNum: number = -1;

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
        this.node.on(cc.Node.EventType.TOUCH_END, () => {
            if ("function" == typeof(this.onClick)) {
                this.onClick();
            }
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
     * 设置牌桌索引
     * 
     * @param nVal 整数值
     * @return this 指针
     */
    putIndex(nVal: number): AClubTableXComp {
        this._nIndex = nVal;
        return this;
    }

    /**
     * 设置牌桌序号
     * 
     * @param nVal 整数值
     * @return this 指针
     */
    putSeqNum(nVal: number): AClubTableXComp {
        this._nSeqNum = nVal;
        return this;
    }

    /**
     * 设置当前牌桌
     * 
     * @param oVal 对象值
     * @return this 指针
     */
    putCurrTable(oVal: Table): AClubTableXComp {
        this._oCurrTable = oVal;
        return this;
    }

    /**
     * 刷新显示
     */
    renewDisplay(): void {
        // 设置牌桌序号
        cc.find("SeqNum/Val", this.node)
            .getComponent(cc.Label)
            .string = (this._nSeqNum + 1).toString();

        if (null == this._oCurrTable) {
            // 清理牌桌
            __cleanTable(this);
            return;
        }

        for (let nIndex = 0; nIndex < this._oCurrTable.maxPlayer; nIndex++) {
            cc.find(`HeadImgArea_${nIndex}_`, this.node).opacity = 128;
            cc.find(`HeadImgArea_${nIndex}_`, this.node).active = true;
        }

        for (let oCurrPlayer of this._oCurrTable.playerArray) {
            if (null == oCurrPlayer) {
                continue;
            }

            cc.find(`HeadImgArea_${oCurrPlayer.atSeatIndex}_`, this.node).opacity = 255;

            HeadImgLoader.loadAndShow(
                cc.find(`HeadImgArea_${oCurrPlayer.atSeatIndex}_/Mask/HeadJPG`, this.node),
                oCurrPlayer.headImg
            );
        }
    }

    /**
     * 点击事件
     */
    onClick(): void {
    }
}

/**
 * 清理牌桌
 * 
 * @param SELF this 指针
 */
function __cleanTable(SELF: AClubTableXComp): void {
    if (null == SELF) {
        return;
    }

    for (let nIndex = 0; nIndex < 4; nIndex++) {
        cc.find(`HeadImgArea_${nIndex}_`, SELF.node).active = false;
        cc.find(`HeadImgArea_${nIndex}_`, SELF.node).opacity = 128;
        cc.find(`HeadImgArea_${nIndex}_/Mask/HeadJPG`, SELF.node)
            .getComponent(cc.Sprite)
            .spriteFrame = null;
    }
}
