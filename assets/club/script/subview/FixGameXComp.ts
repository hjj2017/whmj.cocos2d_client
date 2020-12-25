//#region @import
import MsgBus from "../../../comm/script/MsgBus";
import PrefabXFactory from "../../../comm/script/PrefabXFactory";
import RuleLanguage from "../../../bizdata/script/RuleLanguage";
import { mod_clubServerProtocol } from "../msg/AllMsg.ver_Club";
//#endregion

// @const
const { ccclass } = cc._decorator;

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
 * 固定玩法组件
 */
@ccclass
export default class FixGameXComp extends cc.Component {
    /**
     * 亲友圈 Id
     */
    _nClubId: number = -1;

    /**
     * 索引
     */
    _nIndex: number = -1;

    /**
     * 游戏类型 0
     */
    _nGameType0: number = -1;

    /**
     * 游戏类型 1
     */
    _nGameType1: number = -1;

    /**
     * 规则条目数组
     */
    _oRuleItemArray: Array<KeyAndVal> = null;

    /**
     * 准备编辑
     */
    _bPrepareEdit: boolean = false;

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
    putClubId(nVal: number): FixGameXComp {
        this._nClubId = nVal;
        return this;
    }

    /**
     * 索引值
     * 
     * @param nVal 整数值
     */
    putIndex(nVal: number): FixGameXComp {
        this._nIndex = nVal;
        return this;
    }

    /**
     * 设置游戏类型 0
     * 
     * @param nVal 整数值
     */
    putGameType0(nVal: number): FixGameXComp {
        this._nGameType0 = nVal;
        return this;
    }

    /**
     * 设置游戏类型 1
     * 
     * @param nVal 整数值
     */
    putGameType1(nVal: number): FixGameXComp {
        this._nGameType1 = nVal;
        return this;
    }

    /**
     * 设置规则条目数组
     * 
     * @param oVal 数组对象
     */
    putRuleItemArray(oVal: Array<KeyAndVal>): FixGameXComp {
        this._oRuleItemArray = oVal;
        return this;
    }

    /**
     * 刷新显示
     */
    renewDisplay(): void {
        if (this._nGameType0 <= 0 || 
            this._nGameType1 <= 0 || 
            null == this._oRuleItemArray || 
            this._oRuleItemArray.length <= 0) {
            cc.find("AddFlag", this.node).active = true;
            cc.find("DescText", this.node).active = false;
            return;
        }

        cc.find("AddFlag", this.node).active = false;
        cc.find("DescText", this.node).active = true;

        let strDescText = "";
        strDescText += RuleLanguage.translateGameType1(this._nGameType1);
        strDescText += "\n" + (RuleLanguage.translateByRuleItemArray(this._oRuleItemArray) || []).join("、");

        cc.find("DescText", this.node)
            .getComponent(cc.Label)
            .string = strDescText;
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 注册 UI 事件
 * 
 * @param SELF this 指针
 */
function __regUIEvent(SELF: FixGameXComp): void {
    if (null == SELF) {
        return;
    }

    SELF.node.on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            if (SELF._nGameType0 <= 0 || 
                SELF._nGameType1 <= 0 || 
                null == SELF._oRuleItemArray || 
                SELF._oRuleItemArray.length <= 0) {
                // 如果还没有设置固定玩法,
                // 直接打卡编辑器...
                __openEditorDialog(SELF);
            } else {
                // 如果已经设置了固定玩法,
                // 则显示编辑状态...
                SELF._bPrepareEdit = !SELF._bPrepareEdit;
                cc.find("Button_Delete_", SELF.node).active = SELF._bPrepareEdit;
                cc.find("Button_Edit_", SELF.node).active = SELF._bPrepareEdit;
            }
        }
    );

    cc.find("Button_Delete_", SELF.node).on(
        cc.Node.EventType.TOUCH_END, (oEvent: any) => {
            // 停止事件冒泡
            oEvent.stopPropagation();

            SELF._bPrepareEdit = false;
            cc.find("Button_Delete_", SELF.node).active = SELF._bPrepareEdit;
            cc.find("Button_Edit_", SELF.node).active = SELF._bPrepareEdit;

            MsgBus.getInstance().sendMsg(
                mod_clubServerProtocol.msg.ClubServerMsgCodeDef._ModifyFixGameCmd,
                mod_clubServerProtocol.msg.ModifyFixGameCmd.create({
                    clubId: SELF._nClubId,
                    index: SELF._nIndex,
                    gameType0: -1,
                    gameType1: -1,
                })
            );

            SELF.putGameType0(-1)
                .putGameType1(-1)
                .putRuleItemArray(null)
                .renewDisplay();
        }
    );

    cc.find("Button_Edit_", SELF.node).on(
        cc.Node.EventType.TOUCH_END, (oEvent: any) => {
            // 停止事件冒泡
            oEvent.stopPropagation();

            SELF._bPrepareEdit = false;
            cc.find("Button_Delete_", SELF.node).active = SELF._bPrepareEdit;
            cc.find("Button_Edit_", SELF.node).active = SELF._bPrepareEdit;

            // 打开编辑器对话框
            __openEditorDialog(SELF);
        }
    );
}

/**
 * 打开编辑器对话框, 
 * XXX 注意: 这个编辑器实际上是调用的大厅创建房间对话框
 * 
 * @param SELF this 指针
 */
function __openEditorDialog(SELF: FixGameXComp): void {
    if (null == SELF) {
        return;
    }

    PrefabXFactory.useSpecifyFactoryCreate("createroom", "CreateRoomDialogFactory", (oDialogNode) => {
        if (null == oDialogNode) {
            return;
        }

        // 先添加节点
        cc.find("SubViewPlaceHolder", cc.Canvas.instance.node).addChild(oDialogNode);

        // 再执行设置属性和刷新,
        // 否则 "亲友圈圈主支付" 选项会出现无法选中的 Bug
        let oThatComp = oDialogNode.getComponent("CreateRoomDialogComp")
            .putOnlyShowClubCreatorPayment(true)
            .putFixGameMode(true);

        oThatComp.renewDisplay();

        oThatComp.onLoadPreSetting = () => {
            return SELF._oRuleItemArray;
        };

        oThatComp.onCreateRoom = (
            nGameType0: number, 
            nGameType1: number, 
            oRuleItemArray: Array<KeyAndVal>) => {
            cc.log(`创建固定玩法, gameType0 = ${nGameType0}, gameType1 = ${nGameType1}, ruleItemArray = ${JSON.stringify(oRuleItemArray)}`);

            MsgBus.getInstance().sendMsg(
                mod_clubServerProtocol.msg.ClubServerMsgCodeDef._ModifyFixGameCmd,
                mod_clubServerProtocol.msg.ModifyFixGameCmd.create({
                    clubId: SELF._nClubId,
                    index: SELF._nIndex,
                    gameType0: nGameType0,
                    gameType1: nGameType1,
                    ruleItem: oRuleItemArray,
                })
            );

            // 设置规则并刷新显示
            SELF.putGameType0(nGameType0)
                .putGameType1(nGameType1)
                .putRuleItemArray(oRuleItemArray)
                .renewDisplay();

            oThatComp.node.destroy();
        };
    });
}
