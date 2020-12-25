// @import
import ARoundXComp from "./rcd7.ARoundXComp";
import DateTimeUtil from "../../../comm/script/DateTimeUtil";
import { ARound } from "../TypeDef.ver_Record";

// @const
const { ccclass } = cc._decorator;

/**
 * 战绩详情对话框组件
 */
@ccclass
export default class RecordDetailzDialogComp extends cc.Component {
    /**
     * 房间 Id
     */
    _nRoomId: number = -1;

    /**
     * 房间 UUId
     */
    _strRoomUUId: string = null;

    /**
     * 游戏类型 0
     */
    _nGameType0: number = -1;

    /**
     * 游戏类型 1
     */
    _nGameType1: number = -1;

    /**
     * 创建时间
     */
    _nCreateTime: number = -1;

    /**
     * 实际局数
     */
    _nActualRoundCount: number = -1;

    /**
     * 牌局数组
     */
    _oRoundArray: Array<ARound> = null;

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
     * 设置房间 Id
     * 
     * @param nVal 整数值
     * @return this 指针
     */
    putRoomId(nVal: number): RecordDetailzDialogComp {
        this._nRoomId = nVal;
        return this;
    }

    /**
     * 设置房间 UUId
     * 
     * @param strVal 字符串值
     * @return this 指针
     */
    putRoomUUId(strVal: string): RecordDetailzDialogComp {
        this._strRoomUUId = strVal;
        return this;
    }

    /**
     * 设置游戏类型 0
     * 
     * @param nVal 整数值
     * @return this 指针
     */
    putGameType0(nVal: number): RecordDetailzDialogComp {
        this._nGameType0 = nVal;
        return this;
    }

    /**
     * 设置游戏类型 1
     * 
     * @param nVal 整数值
     * @return this 指针
     */
    putGameType1(nVal: number): RecordDetailzDialogComp {
        this._nGameType1 = nVal;
        return this;
    }

    /**
     * 设置创建时间
     * 
     * @param nVal 整数值
     * @return this 指针
     */
    putCreateTime(nVal: number): RecordDetailzDialogComp {
        this._nCreateTime = nVal;
        return this;
    }

    /**
     * 设置实际局数
     * 
     * @param nVal 整数值
     * @return this 指针
     */
    putActualRoundCount(nVal: number): RecordDetailzDialogComp {
        this._nActualRoundCount = nVal;
        return this;
    }

    /**
     * 设置牌局数组
     * 
     * @param oVal 对象数组
     */
    putRoundArray(oVal: Array<ARound>): RecordDetailzDialogComp {
        this._oRoundArray = oVal;
        return this;
    }

    /**
     * 刷新显示
     */
    renewDisplay(): void {
        cc.find("PrimeDialog/Center/HeaderArea/RoomId", this.node)
            .getComponent(cc.Label)
            .string = `房间号: ${this._nRoomId}`;

        cc.find("PrimeDialog/Center/HeaderArea/ActualRoundCount", this.node)
            .getComponent(cc.Label)
            .string = `局数: ${this._nActualRoundCount}`;

        const strDateTime = DateTimeUtil.getMMddHHmmStr(this._nCreateTime);
        cc.find("PrimeDialog/Center/HeaderArea/OccurDate", this.node)
            .getComponent(cc.Label)
            .string = `日期: ${strDateTime}`;

        for (let nIndex = 0; nIndex < this._oRoundArray.length; nIndex++) {
            // 获取单个牌局
            let oARound = this._oRoundArray[nIndex];

            if (null == oARound) {
                continue;
            }

            __createARoundAndShow(this, nIndex, oARound);
        }
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 注册 UI 事件
 * 
 * @param SELF this 指针
 */
function __regUIEvent(SELF: RecordDetailzDialogComp): void {
    if (null == SELF) {
        return;
    }

    cc.find("PrimeDialog/Top/Button_Close_", SELF.node).on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            SELF.node.destroy();
        }
    );
}

/**
 * 创建单个牌局并显示
 * 
 * @param SELF this 指针
 * @param nIndex 索引位置
 * @param oRound 单个牌局
 */
function __createARoundAndShow(SELF: RecordDetailzDialogComp, nIndex: number, oRound: ARound): void {
    if (null == SELF || 
        null == oRound) {
        return;
    }

    // 获取列表容器节点
    let oListContainerNode = cc.find("PrimeDialog/Center/ScrollView/view/content", SELF.node);

    const strNodeName = `ARound_${nIndex}_`;
    let oThatNode = cc.find(strNodeName, oListContainerNode);

    if (null == oThatNode) {
        let oTemplateNode = cc.find("Template/ARound", SELF.node);
        oThatNode = cc.instantiate(oTemplateNode);
        oThatNode.addComponent(ARoundXComp);

        // 添加到列表容器
        oListContainerNode.addChild(oThatNode, 1, strNodeName);
    }

    oThatNode.getComponent(ARoundXComp)
        .putRound(oRound)
        .renewDisplay();
}
