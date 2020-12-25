// @import
import HeadImgLoader from "../../../comm/script/HeadImgLoader";
import MsgBus from "../../../comm/script/MsgBus";
import { mod_clubServerProtocol } from "../msg/AllMsg.ver_Club";

// @const
const { ccclass } = cc._decorator;

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
 * 成员信息 X 组件
 */
@ccclass
export default class AMemberInfoXComp extends cc.Component {
    /**
     * 亲友圈 Id
     */
    _nClubId: number = -1;

    /**
     * 次序
     */
    _nSeq: number = -1;

    /**
     * 成员信息
     */
    _oMemberInfo: MemberInfo = null;

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
     * @param nVal 亲友圈 Id
     */
    putClubId(nVal: number): AMemberInfoXComp {
        this._nClubId = nVal;
        return this;
    }

    /**
     * 设置次序
     * 
     * @param nVal 整数值
     */
    putSeq(nVal: number): AMemberInfoXComp {
        this._nSeq = nVal;
        return this;
    }

    /**
     * 设置成员信息
     * 
     * @param oVal 对象值
     */
    putMemberInfo(oVal: MemberInfo): AMemberInfoXComp {
        this._oMemberInfo = oVal;
        return this;
    }

    /**
     * 显示开始成员按钮
     * 
     * @param bShow true = 显示, false = 隐藏
     * @return this 指针
     */
    showDismissAMemberButton(bShow: boolean): AMemberInfoXComp {
        if (null == this._oMemberInfo || 
            0 == this._oMemberInfo.currState) {
            return;
        }

        cc.find("Layout/ButtonArea/Button_DismissAMember_", this.node).active = bShow;
        return this;
    }

    /**
     * 刷新显示
     */
    renewDisplay(): void {
        if (null == this._oMemberInfo) {
            this.node.active = false;
            return;
        }

        cc.find("Layout/No", this.node)
            .getComponent(cc.Label)
            .string = this._nSeq.toString();

        
        // 加载并显示头像
        HeadImgLoader.loadAndShow(
            cc.find("Layout/HeadImgArea/HeadImg", this.node),
            this._oMemberInfo.headImg
        );

        cc.find("Layout/UserName", this.node)
            .getComponent(cc.Label)
            .string = this._oMemberInfo.userName;

        cc.find("Layout/CurrState", this.node)
            .getComponent(cc.Label)
            .string = __getCurrStateStr(this);

        if (0 == this._oMemberInfo.currState) {
            cc.find("Layout/ButtonArea/Button_DismissAMember_", this.node).active = false;
            cc.find("Layout/ButtonArea/Button_Reject_", this.node).active = true;
            cc.find("Layout/ButtonArea/Button_ApprovalToJoin_", this.node).active = true;
        } else {
            cc.find("Layout/ButtonArea/Button_Reject_", this.node).active = false;
            cc.find("Layout/ButtonArea/Button_ApprovalToJoin_", this.node).active = false;
        }

        this._oMemberInfo.lastLoginTime;
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 注册 UI 事件
 * 
 * @param SELF this 指针
 */
function __regUIEvent(SELF: AMemberInfoXComp): void {
    // 开除一个成员
    cc.find("Layout/ButtonArea/Button_DismissAMember_", SELF.node)
        .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {

        if (null == SELF._oMemberInfo) {
            return;
        }

        // 记录日志
        cc.log(`开除亲友圈成员, userId = ${SELF._oMemberInfo.userId}, userName = ${SELF._oMemberInfo.userName}`);

        // 发送消息
        MsgBus.getInstance().sendMsg(
            mod_clubServerProtocol.msg.ClubServerMsgCodeDef._DismissAMemberCmd, 
            mod_clubServerProtocol.msg.DismissAMemberCmd.create({
                userId: SELF._oMemberInfo.userId,
                clubId: SELF._nClubId,
            })
        );
    });

    // 接受加入申请
    cc.find("Layout/ButtonArea/Button_ApprovalToJoin_", SELF.node)
        .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {

        if (null == SELF._oMemberInfo) {
            return;
        }

        cc.log(`接受加入申请, userId = ${SELF._oMemberInfo.userId}, userName = ${SELF._oMemberInfo.userName}`);

        // 发送消息
        MsgBus.getInstance().sendMsg(
            mod_clubServerProtocol.msg.ClubServerMsgCodeDef._ApprovalToJoinCmd, 
            mod_clubServerProtocol.msg.ApprovalToJoinCmd.create({
                userId: SELF._oMemberInfo.userId,
                clubId: SELF._nClubId,
                yesOrNo: true, // 同意加入申请
            })
        );
    });

    // 接受加入申请
    cc.find("Layout/ButtonArea/Button_Reject_", SELF.node)
        .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {

        if (null == SELF._oMemberInfo) {
            return;
        }

        cc.log(`拒绝加入申请, userId = ${SELF._oMemberInfo.userId}, userName = ${SELF._oMemberInfo.userName}`);

        // 发送消息
        MsgBus.getInstance().sendMsg(
            mod_clubServerProtocol.msg.ClubServerMsgCodeDef._ApprovalToJoinCmd, 
            mod_clubServerProtocol.msg.ApprovalToJoinCmd.create({
                userId: SELF._oMemberInfo.userId,
                clubId: SELF._nClubId,
                yesOrNo: false, // 拒绝加入申请
            })
        );
    });
}

/**
 * 获取状态字符串
 * 
 * @param SELF this 指针
 * @return 状态字符串
 */
function __getCurrStateStr(SELF: AMemberInfoXComp): string {
    if (null == SELF || 
        null == SELF._oMemberInfo) {
        return "未知";
    }

    if (0 == SELF._oMemberInfo.currState) {
        return "等待审批";
    }

    let oDiffTime = new Date(Date.now() - SELF._oMemberInfo.lastLoginTime);

    if (oDiffTime.getFullYear() - 1970 > 0) {
        return `离线 ${oDiffTime.getFullYear() - 1970} 年`;
    }

    if (oDiffTime.getMonth() > 0) {
        return `离线 ${oDiffTime.getMonth()} 个月`;
    }

    if (oDiffTime.getDate() > 0) {
        return `离线 ${oDiffTime.getDate()} 天`;
    }

    if (oDiffTime.getHours() > 4) {
        return `离线 ${oDiffTime.getHours()} 个小时`;
    }

    return "刚刚在线";
}
