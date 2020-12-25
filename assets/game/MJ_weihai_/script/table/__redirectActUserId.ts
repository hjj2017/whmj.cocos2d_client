// @import
import MahjongTableComp from "./MahjongTableComp";

/**
 * 重新定向活动用户 Id, 同时修改剩余卡牌数量
 * 
 * @param SELF this 指针
 * @param nUserId 用户 Id
 * @param nCurrRoundIndex 当前牌局索引
 * @param nRemainCardNum 剩余卡牌数量
 * @param nRemainTime 剩余时间, 单位 = 秒
 */
export function __redirectActUserId(
    SELF: MahjongTableComp, nUserId: number, nCurrRoundIndex: number, nRemainCardNum: number, nRemainTime: number = -1): void {
    if (null == SELF) {
        return;
    }

    if (nCurrRoundIndex <= -1 || 
        nRemainCardNum <= -1) {
        // 不显示指针区域
        cc.find("PointerArea", SELF.node).active = false;
        return;
    }

    // 开启指针区域
    cc.find("PointerArea", SELF.node).active = true;

    // 当前局数
    cc.find("PointerArea/RoundIndexArea", SELF.node).active = true;
    cc.find("PointerArea/RoundIndexArea/Val", SELF.node)
        .getComponent(cc.Label)
        .string = (nCurrRoundIndex + 1).toString();

    // 剩余卡牌数量
    cc.find("PointerArea/RemainCardArea", SELF.node).active = true;
    cc.find("PointerArea/RemainCardArea/Val", SELF.node)
        .getComponent(cc.Label)
        .string = nRemainCardNum.toString();

    if (nUserId <= 0) {
        // 接下来的逻辑要用到用户 Id,
        // 如果没有就直接退出吧
        return;
    }

    // 获取玩家数据
    let oPlayerData = SELF._oPlayerDataMap[nUserId];

    if (null == oPlayerData) {
        cc.error(`未找到玩家, userId = ${nUserId}`);
        return;
    }

    // 获取客户端座位索引
    const nSeatIndexAtClient = SELF._oMahjongSeatIndexer.getSeatIndexAtClient(oPlayerData.seatIndexAtServer);

    for (let nTempIndex: number = 0; nTempIndex <= 3; nTempIndex++) {
        let oPointerLightXNode = cc.find(`PointerArea/Pointer_Light_${nTempIndex}_`, SELF.node);

        if (nTempIndex == nSeatIndexAtClient) {
            // 激活节点
            oPointerLightXNode.active = true;
            // 设置缓动动画
            let oTween = cc.tween(oPointerLightXNode);
            oTween.sequence(
                oTween.to(1.00, { opacity: 100, }),
                oTween.to(1.00, { opacity: 255, }),
            ).repeatForever()
                .start();
        }
        else {
            // 停止该节点上的所有缓动动画,
            // 并设置为不活动状态
            cc.Tween.stopAllByTarget(oPointerLightXNode);
            oPointerLightXNode.active = false;
        }
    }

    // 获取定时任务函数
    let funTimerSchedule = SELF["__redirectActUserId_timerSchedule"];
    SELF.unschedule(funTimerSchedule);

    if (nRemainTime <= 0) {
        // 隐藏节点
        cc.find("PointerArea/Timer", SELF.node).active = false;
        return;
    }

    const oTimerNode = cc.find("PointerArea/Timer", SELF.node);
    cc.Tween.stopAllByTarget(oTimerNode);
    oTimerNode.getComponent(cc.Label).string = "";
    oTimerNode.opacity = 255;

    funTimerSchedule = () => {
        // 设置倒计时数字
        oTimerNode.getComponent(cc.Label).string = Math.max(0, nRemainTime).toString();
        oTimerNode.active = true;

        if (nRemainTime >= 0) {
            cc.tween(oTimerNode)
                .to(0.10, { angle: +10, scale: 1.28 })
                .to(0.10, { angle: -10, scale: 1.10 })
                .to(0.10, { angle: +10, scale: 1.28 })
                .to(0.10, { angle: -10, scale: 1.10 })
                .to(0.10, { angle: 0, scale: 1.00 })
                .start();
        } else
        if (-1 == nRemainTime) {
            cc.tween(oTimerNode)
                .to(8.00, { opacity: 0 })
                .start();
        }

        --nRemainTime;
    };
    
    SELF.schedule(funTimerSchedule, 1, nRemainTime + 3, 0);
    SELF["__redirectActUserId_timerSchedule"] = funTimerSchedule;
}
