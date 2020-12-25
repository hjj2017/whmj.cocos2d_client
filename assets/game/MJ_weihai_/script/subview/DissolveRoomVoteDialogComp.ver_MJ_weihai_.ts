// @import
import HeadImgLoader from "../../../../comm/script/HeadImgLoader";
import MsgBus from "../../../../comm/script/MsgBus";
import { mod_MJ_weihai_Protocol } from "../msg/AllMsg.ver_MJ_weihai_";

// @const
const { ccclass } = cc._decorator;
const COLOR_WAITING = new cc.Color(0, 100, 255);
const COLOR_AGREE = new cc.Color(0, 128, 8);
const COLOR_REJECT = new cc.Color(128, 0, 8);

/**
 * 等待玩家
 */
type Waiting4Player = {
    /** 用户 Id */
    userId?: number,
    /** 用户名称 */
    userName?: string,
    /** 头像 */
    headImg?: string,
    /** 房主标志 */
    roomOwnerFlag?: boolean,
    /** 座位索引 */
    seatIndex?: number,
    /** 是否同意, -1 = 等待, 0 = 拒绝, 1 = 已同意 */
    yes?: number,
}

/**
 * 解散房间投票对话框
 */
@ccclass
export default class DissolveRoomVoteDialogComp extends cc.Component {
    /**
     * 我自己的用户 Id
     */
    private _nMyselfUserId: number = -1;

    /**
     * 来自用户 Id
     */
    private _nFromUserId: number = -1;

    /**
     * 来自用户名称
     */
    private _strFromUserName: string = null;

    /**
     * 解散原因
     */
    private _nReason: number = -1;

    /**
     * 等待玩家数组
     */
    private _oWaiting4PlayerArray: Array<Waiting4Player> = null;

    /**
     * 剩余时间
     */
    private _nRemainTime: number;

    // /**
    //  * onLoad
    //  */
    // onLoad(): void {
    // }

    /**
     * start
     */
    start(): void {
        // 拒绝
        cc.find("Dialog/Button_Reject_", this.node)
            .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            MsgBus.getInstance().sendMsg(
                mod_MJ_weihai_Protocol.msg.MJ_weihai_MsgCodeDef._DissolutionVoteCmd,
                mod_MJ_weihai_Protocol.msg.DissolutionVoteCmd.create({
                    yes: 0,
                })
            );
        });

        // 同意
        cc.find("Dialog/Button_Agree_", this.node)
            .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            MsgBus.getInstance().sendMsg(
                mod_MJ_weihai_Protocol.msg.MJ_weihai_MsgCodeDef._DissolutionVoteCmd,
                mod_MJ_weihai_Protocol.msg.DissolutionVoteCmd.create({
                    yes: 1,
                })
            );
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
     * 设置我自己的用户 Id
     * 
     * @param nVal 整数值
     */
    putMyselfUserId(nVal: number): DissolveRoomVoteDialogComp {
        this._nMyselfUserId = nVal;
        return this;
    }

    /**
     * 设置来自用户 Id
     * 
     * @param nVal 整数值
     */
    putFromUserId(nVal: number): DissolveRoomVoteDialogComp {
        this._nFromUserId = nVal;
        return this;
    }

    /**
     * 设置来自用户名称
     * 
     * @param strVal 用户名称
     */
    putFromUserName(strVal: string): DissolveRoomVoteDialogComp {
        this._strFromUserName = strVal;
        return this;
    }

    /**
     * 设置解散原因
     * 
     * @param nVal 整数值
     */
    putReason(nVal: number): DissolveRoomVoteDialogComp {
        this._nReason = nVal;
        return this;
    }

    /**
     * 设置等待玩家数组
     * 
     * @param oVal 数组值
     */
    putWaiting4PlayerArray(oVal: Array<Waiting4Player>): DissolveRoomVoteDialogComp {
        this._oWaiting4PlayerArray = oVal;
        return this;
    }

    /**
     * 设置剩余时间 ( 单位 = 毫秒 )
     * 
     * @param nVal 整数值
     */
    putRemainTime(nVal: number): DissolveRoomVoteDialogComp {
        this._nRemainTime = nVal;
        return this;
    }

    /**
     * 刷新显示
     */
    renewDisplay(): void {
        cc.find("Dialog/Content_0_", this.node)
            .getComponent(cc.Label)
            .string = `玩家【${this._strFromUserName}】请求解散房间，理由：`;
        
        cc.find("Dialog/Content_1_", this.node)
            .getComponent(cc.Label)
            .string = __getReasonStr(this._nReason);

        let nMyselfYes = -1;
        let bHasReject = false; // 是否有人拒绝

        if (null != this._oWaiting4PlayerArray) {
            for (let oWaiting4Player of this._oWaiting4PlayerArray) {
                if (null == oWaiting4Player) {
                    continue;
                }

                if (this._nMyselfUserId == oWaiting4Player.userId) {
                    nMyselfYes = oWaiting4Player.yes;
                }

                bHasReject = bHasReject || oWaiting4Player.yes == 0;

                cc.find(`Dialog/Layout/Player_${oWaiting4Player.seatIndex}_`, this.node).active = true;
                cc.find(`Dialog/Layout/Player_${oWaiting4Player.seatIndex}_/UserName`, this.node)
                    .getComponent(cc.Label)
                    .string = oWaiting4Player.userName;

                cc.find(`Dialog/Layout/Player_${oWaiting4Player.seatIndex}_/AgreeOrWaiting`, this.node)
                    .getComponent(cc.Label)
                    .string = __getAgreeOrWaitingStr(oWaiting4Player.yes);

                cc.find(`Dialog/Layout/Player_${oWaiting4Player.seatIndex}_/AgreeOrWaiting`, this.node)
                    .color = __getAgreeOrWaitingColor(oWaiting4Player.yes);

                HeadImgLoader.loadAndShow(
                    cc.find(`Dialog/Layout/Player_${oWaiting4Player.seatIndex}_/HeadJPG`, this.node),
                    oWaiting4Player.headImg
                );
            }
        }

        this.unschedule(this.updateRemainTimeDisplay);

        if (!bHasReject) {
            // 更新剩余时间显示
            this.schedule(this.updateRemainTimeDisplay, 1, cc.macro.REPEAT_FOREVER, 1);
        } else {
            // 如果有其他人拒绝,
            // 那么就不用再等待了...
            this._nRemainTime = 0;
            this.updateRemainTimeDisplay();
        }

        if (-1 != nMyselfYes || 
            bHasReject) {
            // 如果我自己已经选择同意或者拒绝,
            // 或者有其他玩家拒绝解散,
            // 那么隐藏按钮...
            cc.find("Dialog/Button_Reject_", this.node).active = false;
            cc.find("Dialog/Button_Agree_", this.node).active = false;
        }
    }

    /**
     * 更新剩余时间显示
     */
    private updateRemainTimeDisplay(): void {
        // 减掉 1 秒
        this._nRemainTime = Math.max(0, this._nRemainTime - 1000);

        if (this._nRemainTime <= 0) {
            // 取消定时任务
            this.unschedule(this.updateRemainTimeDisplay);
            // 清除提示文字
            cc.find("Dialog/Content_2_", this.node)
                .getComponent(cc.Label)
                .string = "";
            return;
        }

        cc.find("Dialog/Content_2_", this.node)
            .getComponent(cc.Label)
            .string = (this._nRemainTime / 1000).toFixed(0) + " 秒后自动同意解散！";
    }

    /**
     * 更新用户投票
     * 
     * @param nUserId 用户 Id
     * @param nYes 是否同意, -1 = 等待, 0 = 拒绝, 1 = 已同意
     * @return this 指针
     */
    updateUserVote(nUserId: number, nYes: number): DissolveRoomVoteDialogComp {
        if (nUserId <= 0 || 
            nYes < 0) {
            return this;
        }

        for (let oWaitingPlayer of this._oWaiting4PlayerArray) {
            if (null == oWaitingPlayer || 
                oWaitingPlayer.userId != nUserId) {
                continue;
            }

            oWaitingPlayer.yes = nYes;
            break;
        }

        return this;
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 获取原因字符串
 * 
 * @param nReasonInt 原因整数值
 */
function __getReasonStr(nReasonInt: number): string {
    if (1 == nReasonInt) {
        return "有急事，不能玩了…";
    } else {
        return "有人掉线，不想再等待了！";
    }
}

/**
 * 获取同意或等待字符串
 * 
 * @param nYes 整数值
 */
function __getAgreeOrWaitingStr(nYes: number): string {
    if (-1 == nYes) {
        return "等待";
    } else if (0 == nYes) {
        return "拒绝";
    } else {
        return "已同意";
    }
}

/**
 * 获取同意或等待颜色
 * 
 * @param nYes 整数值
 */
function __getAgreeOrWaitingColor(nYes: number): cc.Color {
    if (-1 == nYes) {
        return COLOR_WAITING;
    } else if (0 == nYes) {
        return COLOR_REJECT;
    } else {
        return COLOR_AGREE;
    }
}
