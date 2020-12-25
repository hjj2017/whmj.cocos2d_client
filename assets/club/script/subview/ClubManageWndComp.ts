//#region @import
import DateTimeUtil from "../../../comm/script/DateTimeUtil";
import ExchangeRoomCardDialogComp from "./ExchangeRoomCardDialogComp";
import ExchangeRoomCardDialogFactory from "./ExchangeRoomCardDialogFactory";
import FixGameXComp from "./FixGameXComp";
import GlobalDef from "../../../comm/script/GlobalDef";
import HeadImgLoader from "../../../comm/script/HeadImgLoader";
import { Base64 } from "../../../comm/script/base64/base64";
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
 * 亲友圈管理窗口组件
 */
@ccclass
export default class ClubManageWndComp extends cc.Component {
    /**
     * 创建人名称
     */
    _strCreatorName: string = "";

    /**
     * 创建人 Id
     */
    _nCreatorId: number = -1;

    /**
     * 创建人头像
     */
    _strCreatorHeadImg: string = "";

    /**
     * 亲友圈名称
     */
    _strClubName: string = "";

    /**
     * 亲友圈 Id
     */
    _nClubId: number = -1;

    /**
     * 创建时间
     */
    _nCreateTime: number = -1;

    /**
     * 人数
     */
    _nNumOfPeople: number = -1;

    /**
     * 房卡数量
     */
    _nRoomCard: number = -1;

    /**
     * 固定玩法数组
     */
    _oFixGameXArray: Array<FixGameX> = null;

    /**
     * onLoad
     */
    onLoad(): void {
        for (let nIndex = 0; nIndex < 4; nIndex++) {
            // 获取固定玩法节点和组件
            let oTempNode = cc.find(`PrimeWnd/Center/Tab_GuDingWanFa_/FixGame_${nIndex}_`, this.node);
            let oThatComp = oTempNode.getComponent(FixGameXComp);

            if (null == oThatComp) {
                oThatComp = oTempNode.addComponent(FixGameXComp);
            }

            oThatComp.putClubId(this._nClubId)
                .putIndex(nIndex);
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
     * 设置创建人名称
     * 
     * @param strVal 字符串值
     * @return this 指针
     */
    putCreatorName(strVal: string): ClubManageWndComp {
        this._strCreatorName = strVal;
        return this;
    }

    /**
     * 设置创建人 Id
     * 
     * @param nVal 整数值
     * @return this 指针
     */
    putCreatorId(nVal: number): ClubManageWndComp {
        this._nCreatorId = nVal;
        return this;
    }

    /**
     * 设置创建人头像
     * 
     * @param strVal 字符串值
     * @return this 指针
     */
    putCreatorHeadImg(strVal: string): ClubManageWndComp {
        this._strCreatorHeadImg = strVal;
        return this;
    }

    /**
     * 设置亲友圈名称
     * 
     * @param strVal 字符串值
     * @return this 指针
     */
    putClubName(strVal: string): ClubManageWndComp {
        this._strClubName = strVal;
        return this;
    }

    /**
     * 设置亲友圈 Id
     * 
     * @param nVal 整数值
     * @return this 指针
     */
    putClubId(nVal: number): ClubManageWndComp {
        this._nClubId = nVal;
        return this;
    }

    /**
     * 设置创建时间
     * 
     * @param nVal 整数值
     * @return this 指针
     */
    putCreateTime(nVal: number): ClubManageWndComp {
        this._nCreateTime = nVal;
        return this;
    }

    /**
     * 设置人数
     * 
     * @param nVal 整数值
     * @return this 指针
     */
    putNumOfPeople(nVal: number): ClubManageWndComp {
        this._nNumOfPeople = nVal;
        return this;
    }

    /**
     * 设置房卡数量
     * 
     * @param nVal 整数值
     * @return this 指针
     */
    putRoomCard(nVal: number): ClubManageWndComp {
        this._nRoomCard = nVal;
        return this;
    }

    /**
     * 设置固定玩法数组
     * 
     * @param oVal 数组对象
     * @return this 指针
     */
    putFixGameXArray(oVal: Array<FixGameX>): ClubManageWndComp {
        this._oFixGameXArray = oVal;
        return this;
    }

    /**
     * 刷新显示
     */
    renewDisplay(): void {
        // 圈主名称
        cc.find("PrimeWnd/Center/Tab_QuanZiXinXi_/CreatorNameVal", this.node)
            .getComponent(cc.Label)
            .string = this._strCreatorName;

        // 圈主 Id
        cc.find("PrimeWnd/Center/Tab_QuanZiXinXi_/CreatorIdVal", this.node)
            .getComponent(cc.Label)
            .string = this._nCreatorId.toString();

        // 加载并显示头像
        HeadImgLoader.loadAndShow(
            cc.find("PrimeWnd/Center/Tab_QuanZiXinXi_/HeadImgArea/HeadJPG", this.node),
            this._strCreatorHeadImg
        );

        // 亲友圈名称
        cc.find("PrimeWnd/Center/Tab_QuanZiXinXi_/ClubNameVal", this.node)
            .getComponent(cc.Label)
            .string = this._strClubName.toString();

        // 亲友圈 Id
        cc.find("PrimeWnd/Center/Tab_QuanZiXinXi_/ClubIdVal", this.node)
            .getComponent(cc.Label)
            .string = this._nClubId.toString();

        // 创建时间
        cc.find("PrimeWnd/Center/Tab_QuanZiXinXi_/CreateTimeVal", this.node)
            .getComponent(cc.Label)
            .string = DateTimeUtil.getYYYYMMdd(this._nCreateTime);

        // 人数
        cc.find("PrimeWnd/Center/Tab_QuanZiXinXi_/NumOfPeopleVal", this.node)
            .getComponent(cc.Label)
            .string = this._nNumOfPeople + "人";

        // 老友圈房卡
        cc.find("PrimeWnd/Center/Tab_QuanZiXinXi_/RoomCardVal", this.node)
            .getComponent(cc.Label)
            .string = this._nRoomCard.toString();

        if (null != this._oFixGameXArray) {
            for (let oFixGameX of this._oFixGameXArray) {
                if (null == oFixGameX) {
                    continue;
                }

                let oTempNode = cc.find(`PrimeWnd/Center/Tab_GuDingWanFa_/FixGame_${oFixGameX.index}_`, this.node);
                let oThatComp = oTempNode.getComponent(FixGameXComp);

                if (null == oThatComp) {
                    oThatComp = oTempNode.addComponent(FixGameXComp);
                }

                oThatComp.putClubId(this._nClubId)
                    .putIndex(oFixGameX.index)
                    .putGameType0(oFixGameX.gameType0)
                    .putGameType1(oFixGameX.gameType1)
                    .putRuleItemArray(oFixGameX.ruleItemArray)
                    .renewDisplay();
            }
        }
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 注册 UI 事件
 * 
 * @param SELF this 指针
 */
function __regUIEvent(SELF: ClubManageWndComp): void {
    if (null == SELF) {
        return;
    }

    cc.find("PrimeWnd/Top/Button_GoBack_", SELF.node).on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            SELF.node.destroy();
        }
    );

    cc.find("PrimeWnd/Center/Tab_QuanZiXinXi_/Button_ExchangeRoomCard_", SELF.node).on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            ExchangeRoomCardDialogFactory.createAsync((oDialogNode) => {
                oDialogNode.getComponent(ExchangeRoomCardDialogComp).putClubId(SELF._nClubId).renewDisplay();
                SELF.node.addChild(oDialogNode);
            });
        }
    );

    cc.find("PrimeWnd/Center/Tab_QuanZiTongJi/Button_OpenWebBrowser_", SELF.node).on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            // 构建参数对象
            let oParam = {
                clubId: SELF._nClubId,
            };

            // 通过 Base64 加密参数
            let strP = Base64.encode(JSON.stringify(oParam));
            // 打开 URL
            cc.sys.openURL(`${GlobalDef._strClubStatURL}?p=${strP}`);
        }
    );
}
