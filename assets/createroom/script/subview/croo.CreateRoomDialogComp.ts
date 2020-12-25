//#region @import
import RuleKeyAndValComp from "../../../comm/script/RuleKeyAndValComp";
//#endregion

// @const
const { ccclass } = cc._decorator;
const RULE_KEY_PAYMENT_WAY = 1002;
const DEFAULT_GAME_TYPE_0 = 1; // 麻将
const DEFAULT_GAME_TYPE_1 = 1001; // 威海麻将

/**
 * 规则项目
 */
type RuleItem = {
    /** 关键字 */
    key?: number, 
    /** 数值 */
    val?: number,
}

/**
 * 创建房间对话框组件
 */
@ccclass
export default class CreateRoomDialogComp extends cc.Component {
    /**
     * 仅显示亲友圈圈主支付
     */
    _bOnlyShowClubCreatorPayment: boolean = false;

    /**
     * 固定玩法模式
     */
    _bFixGameMode: boolean = false;

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

        this.scheduleOnce(() => {
            // 加载预设
            let oRuleItemArray = this.onLoadPreSetting(
                DEFAULT_GAME_TYPE_0, 
                DEFAULT_GAME_TYPE_1
            );

            // 恢复显示规则条目数组
            __restoreByRuleItemArray(this, oRuleItemArray);
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
     * 设置仅显示亲友圈圈主支付
     * 
     * @param bVal 布尔值
     */
    putOnlyShowClubCreatorPayment(bVal: boolean): CreateRoomDialogComp {
        this._bOnlyShowClubCreatorPayment = bVal;
        return this;
    }

    /**
     * 设置固定玩法模式
     * 
     * @param bVal 布尔值
     */
    putFixGameMode(bVal: boolean): CreateRoomDialogComp {
        this._bFixGameMode = bVal;
        return this;
    }

    /**
     * 刷新显示
     */
    renewDisplay(): void {
        if (this._bOnlyShowClubCreatorPayment) {
            // 获取规则键值组件数组
            let oThatCompArray = cc.find("PrimeDialog/Center/ScrollView/view/content", this.node)
                .getComponentsInChildren(RuleKeyAndValComp);

            // 确保数组不为空
            oThatCompArray = oThatCompArray || [];

            for (let oThatComp of oThatCompArray) {
                if (null != oThatComp && 
                    oThatComp._nKey == RULE_KEY_PAYMENT_WAY) {
                    // 显示并选中单选框
                    let bYes = (oThatComp._nVal == 0);
                    oThatComp.node.active = bYes;
                    oThatComp.node.getComponent(cc.Toggle).isChecked = bYes;
                }
            }
        }

        cc.find("PrimeDialog/Bottom/Button_Create_/Background/ImgText_0_", this.node).active = !this._bFixGameMode;
        cc.find("PrimeDialog/Bottom/Button_Create_/Background/ImgText_1_", this.node).active = this._bFixGameMode;
    }

    /**
     * 当创建房间时调用
     * 
     * @param nGameType0 游戏类型 0
     * @param nGameType1 游戏类型 1
     * @param oRuleItemArray 规则键值数组
     */
    onCreateRoom(nGameType0: number, nGameType1: number, oRuleItemArray: Array<RuleItem>): void {
        if (nGameType0 <= 0 ||
            nGameType1 <= 0 ||
            null == oRuleItemArray ||
            oRuleItemArray.length <= 0) {
            return;
        }
    }

    /**
     * 根据键值数组恢复选项
     * 
     * @param nGameType0 游戏类型 0
     * @param nGameType0 游戏类型 1
     * @return 规则项目数组
     */
    onLoadPreSetting(nGameType0: number, nGameType1: number): Array<RuleItem> {
        if (nGameType0 <= 0 || 
            nGameType1 <= 0) {
            return null;
        } else {
            return null;
        }
    }

    /**
     * 关闭对话框
     */
    close(): void {
        this.node.destroy();
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 注册 UI 事件
 * 
 * @param SELF this 指针
 */
function __regUIEvent(SELF: CreateRoomDialogComp): void {
    if (null == SELF) {
        return;
    }

    cc.find("PrimeDialog/Top/Button_GoBack_", SELF.node)
        .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            SELF.node.destroy();
        }
    );

    cc.find("PrimeDialog/Bottom/Button_Create_", SELF.node)
        .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            // 收集规则条目数组
            let oRuleItemArray = __collectRuleItemArray(SELF);

            // 执行外部事件
            SELF.onCreateRoom(
                DEFAULT_GAME_TYPE_0, 
                DEFAULT_GAME_TYPE_1, 
                oRuleItemArray
            );
        }
    );
}

/**
 * 收集规则条目数组
 * 
 * @param SELF this 指针
 * @return 键值数组
 */
function __collectRuleItemArray(SELF: CreateRoomDialogComp): Array<RuleItem> {
    if (null == SELF) {
        return null;
    }

    // 收集规则键值数组
    let oRootNode = cc.find("PrimeDialog/Center/ScrollView/view/content/Optionz_MJ_weihai_", SELF.node);
    // 获取自定义组件数组
    let oCustomCompArray = oRootNode.getComponentsInChildren(RuleKeyAndValComp);

    if (!Array.isArray(oCustomCompArray) || 
        oCustomCompArray.length <= 0) {
        return null;
    }

    let oKeyAndValArray = [];

    for (let oCustomComp of oCustomCompArray) {
        if (null == oCustomComp || 
            !oCustomComp.node.activeInHierarchy) {
            continue;
        }

        // 获取相同节点上挂着的另外一个单选框组件
        let oToggleComp = oCustomComp.node.getComponent(cc.Toggle);

        if (null == oToggleComp || 
            !oToggleComp.isChecked) {
            continue;
        }

        oKeyAndValArray.push({
            key: oCustomComp._nKey,
            val: oCustomComp._nVal,
        });
    }

    return oKeyAndValArray;
}

/**
 * 根据规则条目数组还原选项
 * 
 * @param SELF this 指针
 * @param oRuleItemArray 规则条目数组
 */
function __restoreByRuleItemArray(SELF: CreateRoomDialogComp, oRuleItemArray: Array<RuleItem>): void {
    if (null == SELF || 
        null == oRuleItemArray ||
        oRuleItemArray.length <= 0) {
        return;
    }

    cc.log("__restoreByRuleItemArray");

    // 恢复选项
    let oRootNode = cc.find("PrimeDialog/Center/ScrollView/view/content/Optionz_MJ_weihai_", SELF.node);
    // 规则条目字典
    let oRuleItemMap = {};

    for (let oRuleItem of oRuleItemArray) {
        if (null == oRuleItem) {
            continue;
        }

        oRuleItemMap[oRuleItem.key] = oRuleItem.val;
    }

    // 获取自定义组件数组
    let oCustomCompArray = oRootNode.getComponentsInChildren(RuleKeyAndValComp);

    if (!Array.isArray(oCustomCompArray) || 
        oCustomCompArray.length <= 0) {
        return;
    }

    for (let oCustomComp of oCustomCompArray) {
        if (null == oCustomComp) {
            continue;
        }

        // 获取相同节点上挂着的另外一个单选框组件
        let oToggleComp = oCustomComp.node.getComponent(cc.Toggle);

        if (null == oToggleComp) {
            continue;
        }

        oToggleComp.isChecked = (oRuleItemMap[oCustomComp._nKey] == oCustomComp._nVal);
        oToggleComp.node.dispatchEvent(new cc.Event("toggle", true));
    }
}
