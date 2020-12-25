// @import
import HeadImgLoader from "../../../comm/script/HeadImgLoader";

// @const
const { ccclass } = cc._decorator;
const COLOR_SAFETY  = new cc.Color(0, 200, 0);
const COLOR_WARN    = new cc.Color(240, 180, 0);
const COLOR_DANGER  = new cc.Color(200, 0, 0);
const COLOR_UNKNOWN = new cc.Color(100, 100, 100);

/**
 * 玩家数据
 */
type PlayerData = {
    /** 用户 Id */
    userId: number, 
    /** 用户名称 */
    userName: string,
    /** 头像 */
    headImg: string,
    /** 客户端 IP 地址 */
    clientIpAddr: string,
    /** 服务端座位索引 */
    seatIndexAtServer: number,
    /** 客户端座位索引 */
    seatIndexAtClient: number,
}

/**
 * 距离条目
 */
type DistanceItem = {
    /** 用户 Id 0 */
    userIdA: number,
    /** 用户 Id 1 */
    userIdB: number,
    /** 距离, 单位 = 千米 */
    distance: number,
    /** 是否 IP 相同 */
    sameIpAddr: boolean,
}

/**
 * 说明
 */
@ccclass
export default class GeoLocationDialogComp extends cc.Component {
    /**
     * 最大玩家数量
     */
    _nMaxPlayer: number = -1;

    /**
     * 玩家数据字典
     */
    readonly _oPlayerDataMap: { [nUserId: number]: PlayerData } = {};

    /**
     * 距离条目数组
     */
    readonly _oDistanceItemArray: Array<DistanceItem> = [];

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

        // 增加缓动效果
        cc.tween(cc.find("Mask", this.node))
            .to(0.00, { opacity: 0, })
            .to(0.48, { opacity: 160, })
            .start();

        cc.tween(cc.find("PrimeDialog", this.node))
            .to(0.00, { position: cc.v3(0, 0), opacity: 128, })
            .to(0.12, { opacity: 255, scale: 1.20, })
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
     * 设置最大玩家数量
     * 
     * @param nVal 整数值
     * @return this 指针
     */
    putMaxPlayer(nVal: number): GeoLocationDialogComp {
        this._nMaxPlayer = nVal;
        return this;
    }

    /**
     * 添加玩家
     * 
     * @param oVal 对象值
     * @return this 指针
     */
    addPlayer(oVal: PlayerData): GeoLocationDialogComp {
        if (null != oVal) {
            this._oPlayerDataMap[oVal.userId] = oVal;
        }

        return this;
    }

    /**
     * 添加距离条目
     * 
     * @param oVal 对象值
     * @return this 指针
     */
    addDistanceItem(oVal: DistanceItem): GeoLocationDialogComp {
        if (null != oVal) {
            this._oDistanceItemArray.push(oVal);
        }

        return this;
    }

    /**
     * 刷新显示
     */
    renewDisplay(): void {
        for (let nIndex: number = 2; nIndex <= 4; nIndex++) {
            cc.find(`PrimeDialog/MaxPlayerz_${nIndex}_`, this.node).active = (nIndex == this._nMaxPlayer);
        }

        let oMaxPlayerXNode = cc.find(`PrimeDialog/MaxPlayerz_${this._nMaxPlayer}_`, this.node);

        for (let nUserId in this._oPlayerDataMap) {
            // 获取当前玩家
            let oCurrPlayer = this._oPlayerDataMap[nUserId];

            if (null == oCurrPlayer) {
                continue;
            }

            let oPlayerXNode = cc.find(`Player_${oCurrPlayer.seatIndexAtClient}_`, oMaxPlayerXNode);

            if (null == oPlayerXNode) {
                continue;
            }

            cc.find("UserInfo", oPlayerXNode).active = true;
            cc.find("UserInfo/UserName", oPlayerXNode)
                .getComponent(cc.Label)
                .string = oCurrPlayer.userName;

            cc.find("UserInfo/UserId", oPlayerXNode)
                .getComponent(cc.Label)
                .string = "ID " + nUserId;

            // 加载并显示头像
            HeadImgLoader.loadAndShow(
                cc.find("HeadImgMask/HeadImg", oPlayerXNode), 
                oCurrPlayer.headImg
            );

            oPlayerXNode.opacity = 0;
            oPlayerXNode.y += 32;

            let nDelay = Math.random() + 0.4;

            cc.tween(oPlayerXNode)
                .delay(nDelay)
                .by(0.2, { y: -32, opacity: 255, })
                .start();

            cc.tween(cc.find("UserInfo", oPlayerXNode))
                .delay(nDelay + 0.2)
                .by(0.1, { angle: +15, })
                .by(0.2, { angle: -30, })
                .by(0.1, { angle: +15, })
                .start();
        }

        for (let oDistanceItem of this._oDistanceItemArray) {
            if (null == oDistanceItem) {
                continue;
            }

            let oPlayerA = this._oPlayerDataMap[oDistanceItem.userIdA];
            let oPlayerB = this._oPlayerDataMap[oDistanceItem.userIdB];

            if (null == oPlayerA || 
                null == oPlayerB) {
                continue;
            }

            let nIndex0 = Math.min(oPlayerA.seatIndexAtClient, oPlayerB.seatIndexAtClient);
            let nIndex1 = Math.max(oPlayerA.seatIndexAtClient, oPlayerB.seatIndexAtClient);

            // 获取连线节点
            let oLineXYNode = cc.find(`Line_${nIndex0}${nIndex1}_`, oMaxPlayerXNode);

            if (null == oLineXYNode) {
                continue;
            }

            oLineXYNode.active = true;

            oLineXYNode.color = __getDistanceColor(oDistanceItem.distance);
            cc.find("Distance", oLineXYNode).active = true;
            cc.find("Distance/Text", oLineXYNode)
                .getComponent(cc.Label)
                .string = __getDistanceStr(oDistanceItem.distance);

            oLineXYNode.opacity = 0;

            cc.tween(oLineXYNode)
                .delay(Math.random() + 2)
                .by(0.2, { opacity: 255, })
                .start();
        }
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 注册 UI 事件
 * 
 * @param SELF this 指针
 */
function __regUIEvent(SELF: GeoLocationDialogComp): void {
    if (null == SELF) {
        return;
    }

    cc.find("PrimeDialog/Button_Close_", SELF.node).on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            // 增加缓动效果
            cc.tween(cc.find("Mask", SELF.node))
                .to(0.12, { opacity: 0 })
                .start();

            cc.tween(cc.find("PrimeDialog", SELF.node))
                .to(0.12, { position: cc.v3(0, 0), opacity: 128, scale: 0.84 })
                .call(() => { SELF.node.destroy(); })
                .start();
        }
    );
}

/**
 * 获取距离颜色
 * 
 * @param nVal 浮点数
 * @return 颜色对象
 */
function __getDistanceColor(nVal: number): cc.Color {
    if (nVal < 0) {
        return COLOR_UNKNOWN;
    }

    if (nVal > 1.0) {
        return COLOR_SAFETY;
    } else if (nVal > 0.05) {
        return COLOR_WARN;
    } else {
        return COLOR_DANGER;
    }
}

/**
 * 获取距离字符串
 * 
 * @param nVal 浮点数
 */
function __getDistanceStr(nVal: number): string {
    if (nVal < 0) {
        return "未知";
    }

    if (nVal >= 5.0) {
        return "大于5公里";
    } else if (nVal >= 1.0) {
        return nVal.toFixed(1) + "公里";
    } else if (nVal < 1.0 && nVal > 0.05) {
        return Math.round(nVal * 1000) + "米";
    } else {
        return "小于50米";
    }
}
