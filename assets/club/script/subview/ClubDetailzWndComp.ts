// @import
import AClubTableXComp from "./AClubTableXComp";
import ClubManageWndComp from "./ClubManageWndComp";
import ClubManageWndFactory from "./ClubManageWndFactory";
import ClubScene from "../ClubScene";
import MemberListWndComp from "./MemberListWndComp";
import MemberListWndFactory from "./MemberListWndFactory";
import MsgBus from "../../../comm/script/MsgBus";
import PlayMethodChooserComp from "./PlayMethodChooserComp";
import PlayMethodChooserFactory from "./PlayMethodChooserFactory";
import PrefabXFactory from "../../../comm/script/PrefabXFactory";
import RoleDef from "../RoleDef.ver_Club";
import TableDetailzDialogComp from "./TableDetailzDialogComp";
import TableDetailzDialogFactory from "./TableDetailzDialogFactory";
import UserData from "../../../bizdata/script/UserData";
import { mod_clubServerProtocol } from "../msg/AllMsg.ver_Club";

// @const
const { ccclass } = cc._decorator;
const MAX_PAGE = 3;
const PAGE_SIZE = 10;

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
 * 亲友圈详情窗口组件
 */
@ccclass
export default class ClubDetailzWndComp extends cc.Component {
    /**
     * 创建人 Id
     */
    _nCreatorId: number = -1;

    /**
     * 创建人名称
     */
    _strCreatorName: string = "";

    /**
     * 创建人头像
     */
    _strCreatorHeadImg: string = "";

    /**
     * 亲友圈 Id
     */
    _nClubId: number = -1;

    /**
     * 亲友圈名称
     */
    _strClubName: string = "";

    /**
     * 创建时间
     */
    _nCreateTime: number = -1;

    /**
     * 房卡数量
     */
    _nRoomCard: number = 0;

    /**
     * 固定玩法数组
     */
    _oFixGameXArray: Array<FixGameX> = null;

    /**
     * 亲友圈人数
     */
    _nNumOfPeople: number = 0;

    /**
     * 我的角色
     */
    _nMyRole: number = -1;

    /**
     * 页面索引
     */
    _nPageIndex: number = 0;

    /**
     * onLoad
     */
    onLoad(): void {
        // 提前创建牌桌
        let oAGameTableX = cc.find("Template/AClubTable_X_", this.node);

        for (let nIndex = 0; nIndex <= 9; nIndex++) {
            // 创建新牌桌并添加到相应位置
            let oNewTable = cc.instantiate(oAGameTableX);
            oNewTable.addComponent(AClubTableXComp)
                .putIndex(nIndex)
                .putSeqNum(nIndex)
                .renewDisplay();

            cc.find(`Center/Pos_${nIndex}_`, this.node).addChild(oNewTable);
        }
    }

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
     * 设置创建人 Id
     * 
     * @param nVal 整数值
     * @return this 指针
     */
    putCreatorId(nVal: number): ClubDetailzWndComp {
        this._nCreatorId = nVal;
        return this;
    }

    /**
     * 设置创建人名称
     * 
     * @param strVal 字符串值
     * @return this 指针
     */
    putCreatorName(strVal: string): ClubDetailzWndComp {
        this._strCreatorName = strVal;
        return this;
    }

    /**
     * 设置创建人头像
     * 
     * @param strVal 字符串值
     * @return this 指针
     */
    putCreatorHeadImg(strVal: string): ClubDetailzWndComp {
        this._strCreatorHeadImg = strVal;
        return this;
    }

    /**
     * 设置亲友圈 Id
     * 
     * @param nVal 整数值
     * @return this 指针
     */
    putClubId(nVal: number): ClubDetailzWndComp {
        this._nClubId = nVal;
        return this;
    }

    /**
     * 设置亲友圈名称
     * 
     * @param strVal 字符串值
     * @return this 指针
     */
    putClubName(strVal: string): ClubDetailzWndComp {
        this._strClubName = strVal;
        return this;
    }

    /**
     * 设置创建时间
     * 
     * @param nVal 整数值
     * @return this 指针
     */
    putCreateTime(nVal: number): ClubDetailzWndComp {
        this._nCreateTime = nVal;
        return this;
    }

    /**
     * 设置房卡数量
     * 
     * @param nVal 整数值
     * @return this 指针
     */
    putRoomCard(nVal: number): ClubDetailzWndComp {
        this._nRoomCard = nVal;
        return this;
    }

    /**
     * 设置固定玩法数组
     * 
     * @param oVal 数组对象
     * @return this 指针
     */
    putFixGameXArray(oVal: Array<FixGameX>): ClubDetailzWndComp {
        this._oFixGameXArray = oVal;
        return this;
    }

    /**
     * 设置亲友圈人数
     * 
     * @param nVal 整数值
     * @return this 指针
     */
    putNumOfPeople(nVal: number): ClubDetailzWndComp {
        this._nNumOfPeople = nVal;
        return this;
    }

    /**
     * 设置我的角色
     * 
     * @param nVal 整数值
     * @return this 指针
     */
    putMyRole(nVal: number): ClubDetailzWndComp {
        this._nMyRole = nVal;
        return this;
    }

    /**
     * 设置页面索引
     * 
     * @param nVal 整数值
     * @return this 指针
     */
    putPageIndex(nVal: number): ClubDetailzWndComp {
        this._nPageIndex = nVal;
        return this;
    }

    /**
     * 刷新显示
     */
    renewDisplay(): void {
        // 亲友圈 Id
        cc.find("Top/WordzArea/ClubIdArea/Val", this.node)
            .getComponent(cc.Label)
            .string = this._nClubId.toString();

        // 亲友圈名称
        cc.find("Top/Title/ClubName", this.node)
            .getComponent(cc.Label)
            .string = this._strClubName;

        // 亲友圈人数
        cc.find("Top/WordzArea/NumOfPeopleArea/Val", this.node)
            .getComponent(cc.Label)
            .string = this._nNumOfPeople.toString();

        // 设置房卡数量提示
        cc.find("Top/RoomCard/Val", this.node)
            .getComponent(cc.Label)
            .string = __getRoomCardHintText(this._nRoomCard);
        // 设置提示颜色
        cc.find("Top/RoomCard/BG", this.node).color = __getRoomCardHintColor(this._nRoomCard);
        
        // 是否显示管理按钮
        cc.find("Bottom/Button_Manage_", this.node).active = RoleDef.SUPER_ADMIN == this._nMyRole || RoleDef.ADMIN == this._nMyRole;
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 注册 UI 事件
 * 
 * @param SELF this 指针
 */
function __regUIEvent(SELF: ClubDetailzWndComp): void {
    if (null == SELF) {
        return;
    }

    cc.find("Top/Button_Back_", SELF.node).on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            // 切换到亲友圈列表窗口
            cc.find("Canvas/Script").getComponent(ClubScene).switchToJoinedClubListWnd();

            // 结束牌桌变化监听
            MsgBus.getInstance().sendMsg(
                mod_clubServerProtocol.msg.ClubServerMsgCodeDef._StopTableChangedListenCmd,
                mod_clubServerProtocol.msg.StopTableChangedListenCmd.create({
                })
            );
        }
    );

    cc.find("Top/Button_MemberList_", SELF.node).on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            // 创建并添加窗口节点
            MemberListWndFactory.createAsync((oWndNode) => {
                oWndNode.getComponent(MemberListWndComp)
                    .putClubId(SELF._nClubId)
                    .putMyRole(SELF._nMyRole)

                SELF.node.addChild(oWndNode);
            });
        }
    );

    cc.find("Center/Button_PrevPage_", SELF.node).on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            if (SELF._nPageIndex <= 0) {
                return;
            }

            SELF._nPageIndex--;

            // 获取牌桌组件数组
            let oAClubTableXCompArray = SELF.getComponentsInChildren(AClubTableXComp);

            for (let oAClubTableXComp of oAClubTableXCompArray) {
                if (null == oAClubTableXComp) {
                    continue;
                }

                // 修改牌桌序号
                oAClubTableXComp.putSeqNum(oAClubTableXComp._nIndex + SELF._nPageIndex * PAGE_SIZE);
            }

            MsgBus.getInstance().sendMsg(
                mod_clubServerProtocol.msg.ClubServerMsgCodeDef._GetTableListCmd,
                mod_clubServerProtocol.msg.GetTableListCmd.create({
                    clubId: SELF._nClubId,
                    pageIndex: SELF._nPageIndex,
                })
            );
        }
    );

    cc.find("Center/Button_NextPage_", SELF.node).on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            if (SELF._nPageIndex >= (MAX_PAGE - 1)) {
                return;
            }

            SELF._nPageIndex++;

            // 获取牌桌组件数组
            let oAClubTableXCompArray = SELF.getComponentsInChildren(AClubTableXComp);

            for (let oAClubTableXComp of oAClubTableXCompArray) {
                if (null == oAClubTableXComp) {
                    continue;
                }

                // 修改牌桌序号
                oAClubTableXComp.putSeqNum(oAClubTableXComp._nIndex + SELF._nPageIndex * PAGE_SIZE);
            }

            MsgBus.getInstance().sendMsg(
                mod_clubServerProtocol.msg.ClubServerMsgCodeDef._GetTableListCmd,
                mod_clubServerProtocol.msg.GetTableListCmd.create({
                    clubId: SELF._nClubId,
                    pageIndex: SELF._nPageIndex,
                })
            );
        }
    );

    cc.find("Bottom/Button_Manage_", SELF.node).on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            ClubManageWndFactory.createAsync((oWndNode) => {
                oWndNode.getComponent(ClubManageWndComp)
                    .putCreatorId(SELF._nCreatorId)
                    .putCreatorName(SELF._strCreatorName)
                    .putCreatorHeadImg(SELF._strCreatorHeadImg)
                    .putClubId(SELF._nClubId)
                    .putClubName(SELF._strClubName)
                    .putCreateTime(SELF._nCreateTime)
                    .putNumOfPeople(SELF._nNumOfPeople)
                    .putRoomCard(SELF._nRoomCard)
                    .putFixGameXArray(SELF._oFixGameXArray)
                    .renewDisplay();

                SELF.node.addChild(oWndNode);
            });
        }
    );

    // 显示战绩
    cc.find("Bottom/Button_Record_", SELF.node).on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            PrefabXFactory.useSpecifyFactoryCreate("record", "rcd7.RecordListWndFactory", (oWndNode) => {
                // 获取组件
                let oThatComp = oWndNode.getComponent("rcd7.RecordListWndComp");
                oThatComp.putClubId(SELF._nClubId);

                if (SELF._nMyRole < 2) {
                    oThatComp.putUserId(UserData.getMyData().getUserId());
                }

                cc.find("Canvas/SubViewPlaceHolder").addChild(oWndNode);
            });
        }
    );

    let oAClubTableXCompArray = cc.find("Center", SELF.node)
        .getComponentsInChildren(AClubTableXComp);
    
    // 确保牌桌组件数组不为空
    oAClubTableXCompArray = oAClubTableXCompArray || [];

    for (let oAClubTableXComp of oAClubTableXCompArray) {
        if (null == oAClubTableXComp) {
            continue;
        }

        oAClubTableXComp.onClick = () => {
            if (null != oAClubTableXComp._oCurrTable) {
                TableDetailzDialogFactory.createAsync((oDialogNode) => {
                    oDialogNode.getComponent(TableDetailzDialogComp)
                        .putCurrTable(oAClubTableXComp._oCurrTable)
                        .renewDisplay();

                    SELF.node.addChild(oDialogNode);
                });
                return;
            }

            PlayMethodChooserFactory.createAsync((oDialogNode) => {
                oDialogNode.getComponent(PlayMethodChooserComp)
                    .putClubId(SELF._nClubId)
                    .putTableSeqNum(oAClubTableXComp._nSeqNum)
                    .putFixGameXArray(SELF._oFixGameXArray)
                    .renewDisplay();

                SELF.node.addChild(oDialogNode);
            });
        }
    }
}

/**
 * 获取房卡提示文本
 * 
 * @param nRoomCard 房卡数量
 * @return 房卡提示文本
 */
function __getRoomCardHintText(nRoomCard: number): string {
    if (nRoomCard > 100) {
        return "房卡充足";
    } else if (nRoomCard > 20) {
        return "房卡紧张";
    } else {
        return "房卡不足";
    }
}

/**
 * 获取房卡提示颜色
 * 
 * @param nRoomCard 房卡数量
 * @return 颜色
 */
function __getRoomCardHintColor(nRoomCard: number): cc.Color {
    if (nRoomCard > 100) {
        return new cc.Color(128, 200, 50);
    } else {
        return new cc.Color(200, 50, 64);
    }
}
