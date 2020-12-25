// @import
import AMemberInfoXComp from "./AMemberInfoXComp";
import MsgBus from "../../../comm/script/MsgBus";
import RoleDef from "../RoleDef.ver_Club";
import { mod_clubServerProtocol } from "../msg/AllMsg.ver_Club";

// @const
const { ccclass } = cc._decorator;
const PAGE_SIZE = 20;

/**
 * ( 亲友圈 ) 成员信息
 */
type MemberInfo = {
    /** 用户 Id */
    userId?: number,
    /** 用户名称 */
    userName?: string,
    /** 头像 */
    headImg?: string,
    /** 性别, -1 = 未知, 0 = 女, 1 = 男, 2 = 双性 */
    sex?: number,
    /** 加入时间 */
    joinTime?: number,
    /** 最后登录时间 */
    lastLoginTime?: number,
    /** 角色, 0 = 普通成员, 1 = 管理员, 2 = 超级管理员 */
    role?: number,
    /** 当前状态 */
    currState?: number,
}

/**
 * 成员列表窗口
 */
@ccclass
export default class MemberListWndComp extends cc.Component {
    /**
     * 亲友圈 Id
     */
    _nClubId: number = -1;

    /**
     * 页面索引
     */
    _nPageIndex: number = 0;

    /**
     * 记录总数
     */
    _nTotalCount: number = 0;

    /**
     * 页面数量
     */
    _nPageCount: number = 0;

    /**
     * ( 亲友圈 ) 成员信息数组
     */
    _oMemberInfoArray: Array<MemberInfo> = null;

    /**
     * 我的角色
     */
    _nMyRole: number = 0;

    /**
     * 显示开除成员按钮
     */
    _bShowDismissAMemberButton = false;

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
        // 打开第一页
        __turnToPage(this._nClubId, 0, 1);

        // 增加缓动效果
        cc.tween(cc.find("Mask", this.node))
            .to(0.00, { opacity: 0, })
            .to(0.48, { opacity: 160, })
            .start();

        cc.tween(cc.find("PrimeWnd", this.node))
            .to(0.00, { position: cc.v3(0, 0), opacity: 128, })
            .to(0.12, { opacity: 255, scale: 0.90, })
            .to(0.12, { opacity: 255, scale: 1.00, })
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
     * 设置亲友圈 Id
     * 
     * @param nVal 整数值
     */
    putClubId(nVal: number): MemberListWndComp {
        this._nClubId = nVal;
        return this;
    }

    /**
     * 设置页面索引
     * 
     * @param nVal 整数值
     */
    putPageIndex(nVal: number): MemberListWndComp {
        this._nPageIndex = nVal;
        return this;
    }

    /**
     * 设置记录总数
     * 
     * @param nVal 整数值
     */
    putTotalCount(nVal: number): MemberListWndComp {
        this._nTotalCount = nVal;
        this._nPageCount = Math.round((this._nTotalCount / PAGE_SIZE) + 0.4);
        return this;
    }

    /**
     * 设置 ( 亲友圈 ) 成员信息数组
     * 
     * @param oVal 对象数组
     */
    putMemberInfoArray(oVal: Array<MemberInfo>): MemberListWndComp {
        this._oMemberInfoArray = oVal;
        return this;
    }

    /**
     * 设置我的角色
     * 
     * @param nVal 整数值
     */
    putMyRole(nVal: number): MemberListWndComp {
        this._nMyRole = nVal;
        return this;
    }

    /**
     * 获取页面大小
     * 
     * @return 页面大小
     */
    getPageSize(): number {
        return PAGE_SIZE;
    }

    /**
     * 刷新显示
     */
    renewDisplay(): void {
        if (null == this._oMemberInfoArray) {
            return;
        }

        // 管理员和超级管理可以管理亲友圈成员
        cc.find("PrimeWnd/Top/ButtonArea/Button_MemberManage_", this.node).active = (
            RoleDef.ADMIN == this._nMyRole || 
            RoleDef.SUPER_ADMIN == this._nMyRole
        );

        // 普通成员和管理员可以主动退出亲友圈
        cc.find("PrimeWnd/Top/ButtonArea/Button_MemberQuit_", this.node).active = (
            RoleDef.MEMBER == this._nMyRole ||
            RoleDef.ADMIN == this._nMyRole
        );

        let nIndex = 0;

        for (; nIndex < this._oMemberInfoArray.length; nIndex++) {
            // 获取 ( 亲友圈 ) 成员信息
            let oMemberInfo = this._oMemberInfoArray[nIndex];

            if (null == oMemberInfo) {
                continue;
            }

            // 计算显示次序
            let nSeq = this._nPageIndex * PAGE_SIZE + nIndex + 1;
            // 创建并显示成员信息
            __createAMemberInfoAndShow(
                this, nIndex, nSeq, oMemberInfo
            );
        }

        for (; nIndex < PAGE_SIZE; nIndex++) {
            // 隐藏剩下的节点
            __hideAMemberInfo(this, nIndex);
        }

        cc.find("PrimeWnd/Center/PageBar/CurrPage", this.node)
            .getComponent(cc.Label)
            .string = (this._nPageIndex + 1) + " / " + this._nPageCount;
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 注册 UI 事件
 * 
 * @param SELF this 指针
 */
function __regUIEvent(SELF: MemberListWndComp): void {
    if (null == SELF) {
        return;
    }

    cc.find("PrimeWnd/Top/ButtonArea/Button_MemberManage_", SELF.node)
        .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
        // 切换显示标志
        SELF._bShowDismissAMemberButton = !SELF._bShowDismissAMemberButton
        // 获取组件数组
        let oThatCompArray = cc.find("PrimeWnd/Center/ScrollView/view/content", SELF.node)
            .getComponentsInChildren(AMemberInfoXComp);

        for (let oThatComp of oThatCompArray) {
            if (null != oThatComp) {
                oThatComp.showDismissAMemberButton(SELF._bShowDismissAMemberButton);
            }
        }
    });

    cc.find("PrimeWnd/Top/ButtonArea/Button_MemberQuit_", SELF.node)
        .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
        // 退出亲友圈
        MsgBus.getInstance().sendMsg(
            mod_clubServerProtocol.msg.ClubServerMsgCodeDef._QuitClubCmd,
            mod_clubServerProtocol.msg.QuitClubCmd.create({
                clubId: SELF._nClubId,
            })
        );

        SELF.scheduleOnce(() => {
            // 下一帧
            // 关闭当前窗口
            SELF.node.destroy();
        });
    });

    cc.find("PrimeWnd/Top/Button_Close_", SELF.node).on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
        // 增加缓动效果
        cc.tween(cc.find("Mask", SELF.node))
            .to(0.12, { opacity: 0, })
            .start();

        cc.tween(cc.find("PrimeWnd", SELF.node))
            .to(0.12, { position: cc.v3(0, 0), opacity: 128, scale: 0.90, })
            .call(() => { SELF.node.destroy(); })
            .start();
    });

    cc.find("PrimeWnd/Center/PageBar/Button_PrevPage_", SELF.node)
        .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
        if (SELF._nPageIndex - 1 < 0) {
            // 最小不能超过 0 页,
            return;
        }

        // 回到上一页
        __turnToPage(SELF._nClubId, SELF._nPageIndex - 1, SELF._nPageCount);
    });

    cc.find("PrimeWnd/Center/PageBar/Button_NextPage_", SELF.node)
        .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
        if ((SELF._nPageIndex + 1) > (SELF._nPageCount - 1)) {
            // 最大不能超过 pageCount - 1 页
            return;
        }

        // 前往下一页
        __turnToPage(SELF._nClubId, SELF._nPageIndex + 1, SELF._nPageCount);
    });
}

/**
 * 翻到某一个页
 * 
 * @param nClubId 亲友圈 Id
 * @param nPageIndex 页面索引
 * @param nLikelyPageCount 有可能的页面数量
 */
function __turnToPage(nClubId: number, nPageIndex: number, nLikelyPageCount: number): void {
    if (nPageIndex < 0 || 
        nPageIndex > Math.max(1, nLikelyPageCount - 1)) {
        return;
    }

    MsgBus.getInstance().sendMsg(
        mod_clubServerProtocol.msg.ClubServerMsgCodeDef._GetMemberInfoListCmd, 
        mod_clubServerProtocol.msg.GetMemberInfoListCmd.create({ 
            clubId: nClubId,
            pageIndex: nPageIndex,
            pageSize: PAGE_SIZE,
        })
    );
}

/**
 * 创建并显示一个成员信息
 * 
 * @param SELF this 指针
 * @param nIndex 索引
 * @param nSeq 序号
 * @param oMemberInfo 成员信息 
 */
function __createAMemberInfoAndShow(
    SELF: MemberListWndComp, nIndex: number, nSeq: number, oMemberInfo: MemberInfo): void {
    if (null == SELF || 
        nIndex < 0 || 
        nSeq <= 0 ||
        null == oMemberInfo) {
        return;
    }

    let oAMemberInfoX = cc.find(`PrimeWnd/Center/ScrollView/view/content/AMemberInfo_${nIndex}_`, SELF.node);

    if (null == oAMemberInfoX) {
        // 获取模板节点
        const oTemplate = cc.find("Template/AMemberInfo_X_", SELF.node);

        // 创建成员信息并添加到滚动列表
        oAMemberInfoX = cc.instantiate(oTemplate);
        oAMemberInfoX.addComponent(AMemberInfoXComp);

        cc.find("PrimeWnd/Center/ScrollView/view/content", SELF.node).addChild(
            oAMemberInfoX, 1, `AMemberInfo_${nIndex}_`
        );
    }

    oAMemberInfoX.getComponent(AMemberInfoXComp)
        .putClubId(SELF._nClubId)
        .putSeq(nSeq)
        .putMemberInfo(oMemberInfo)
        .renewDisplay();

    oAMemberInfoX.getComponent(AMemberInfoXComp)
        .showDismissAMemberButton(SELF._bShowDismissAMemberButton);

    oAMemberInfoX.active = true;
}

/**
 * 隐藏成员信息
 * 
 * @param SELF this 指针
 * @param nIndex 索引
 */
function __hideAMemberInfo(SELF: MemberListWndComp, nIndex: number): void {
    if (null == SELF || 
        nIndex < 0) {
        return;
    }

    let oAMemberInfoX = cc.find(`PrimaryWnd/Center/ScrollView/view/content/AMemberInfo_${nIndex}_`, SELF.node);

    if (null != oAMemberInfoX) {
        oAMemberInfoX.active = false;
    }
}
