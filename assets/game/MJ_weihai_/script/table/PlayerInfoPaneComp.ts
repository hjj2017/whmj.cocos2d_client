//#region @import
import HeadImgLoader from "../../../../comm/script/HeadImgLoader";
//#endregion

// @const
const { ccclass } = cc._decorator;

/**
 * 玩家部分数据
 */
type PlayerPartData = {
    /** 用户 Id */
    userId: number, 
    /** 用户名称 */
    userName: string,
    /** 头像 */
    headImg: string,
    /** 性别 */
    sex: number,
    /** 客户端 IP 地址 */
    clientIpAddr: string,
    /** 座位索引 */
    seatIndex: number,
    /** 当前分数 */
    currScore: number,
    /** 总分数 */
    totalScore: number,
    /** 服务器座位索引 */
    seatIndexAtServer: number,
    /** 飘几, -1 = 未知, 0 = 不飘, 1 = 飘_1, 2 = 飘_2, 3 = 飘_3, 4 = 飘_4 */
    piaoX: number,
    /** 房主标志 */
    roomOwnerFlag: boolean,
    /** 庄家标志 */
    zhuangJiaFlag: boolean,
}

/**
 * 玩家信息窗格组件
 */
@ccclass
export default class PlayerInfoPaneComp extends cc.Component {
    /**
     * 点击玩家信息事件
     */
    static readonly EVENT_TOUCH_END: string = "Insyb9WFe8JIjcEyTRk_playerInfoPaneComp_onTouchEnd";

    /**
     * 玩家数据
     */
    _oPlayerData: PlayerPartData = null;

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
    // update (nDeltaTime: number): void {
    // }

    /**
     * 初始化
     * 
     * @param oPlayerData 玩家数据
     * @return this 指针
     */
    putPlayerData(oVal: PlayerPartData): PlayerInfoPaneComp {
        this._oPlayerData = oVal;
        return this;
    }

    /**
     * 刷新显示
     */
    renewDisplay(): void {
        if (null == this._oPlayerData) {
            return;
        }

        cc.find("UserName", this.node)
            .getComponent(cc.Label)
            .string = this._oPlayerData.userName;

        cc.find("TotalScore", this.node)
            .getComponent(cc.Label)
            .string = this._oPlayerData.totalScore.toString();

        cc.find("Flag_X_/Flag_FangZhu_", this.node).active = this._oPlayerData.roomOwnerFlag;
        cc.find("Flag_X_/Flag_ZhuangJia_", this.node).active = this._oPlayerData.zhuangJiaFlag;

        if (this._oPlayerData.piaoX < 0) {
            cc.find("Flag_X_/Flag_PiaoX_", this.node).active = false;
        } else {
            cc.find("Flag_X_/Flag_PiaoX_", this.node).active = true;

            for (let nPiaoX = 0; nPiaoX <= 4; nPiaoX++) {
                cc.find(`Flag_X_/Flag_PiaoX_/Flag_Piao${nPiaoX}_`, this.node).active = (nPiaoX == this._oPlayerData.piaoX);
            }
        }

        // 加载头像
        HeadImgLoader.loadAndShow(
            cc.find("HeadImg/Portrait", this.node),
            this._oPlayerData.headImg
        );
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 注册 UI 事件
 * 
 * @param SELF this 指针
 */
function __regUIEvent(SELF: PlayerInfoPaneComp): void {
    if (null == SELF) {
        return;
    }

    SELF.node.on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
        // 创建自定义事件
        let oCustomEvent = new cc.Event.EventCustom(PlayerInfoPaneComp.EVENT_TOUCH_END, true);
        oCustomEvent.setUserData(SELF._oPlayerData);

        // 派发自定义事件
        SELF.node.dispatchEvent(oCustomEvent);
    });
}
