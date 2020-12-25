// @const
const { ccclass } = cc._decorator;

/**
 * 加入亲友圈对话框组件
 */
@ccclass
export default class JoinClubDialogComp extends cc.Component {
    /**
     * 当前数字
     */
    _strCurrNum: string = "";

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
            .to(0.00, { opacity: 0 })
            .to(0.48, { opacity: 160 })
            .start();

        cc.tween(cc.find("PrimeDialog", this.node))
            .to(0.00, { position: cc.v3(0, 0), opacity: 128 })
            .to(0.12, { position: cc.v3(0, 0), opacity: 255, scale: 1.20 })
            .to(0.12, { position: cc.v3(0, 0), opacity: 255, scale: 1.00 })
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
     * 当数字输入完成
     * 
     * @param nNum 数字
     * @override
     */
    onJoinClub(nNum: number): void {
        if (nNum <= 0) {
            return;
        }

        cc.log(`亲友圈 Id = ${nNum}`);
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 注册 UI 时间
 * 
 * @param SELF this 指针
 */
function __regUIEvent(SELF: JoinClubDialogComp): void {
    if (null == SELF) {
        return;
    }

    // 关闭对话
    cc.find("PrimeDialog/Top/Button_Close_", SELF.node)
        .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
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

    // 数字按钮事件, 0 ~ 9
    for (let nNum = 0; nNum <= 9; nNum++) {
        cc.find(`PrimeDialog/Center/ButtonArea/Button_Num_${nNum}_`, SELF.node)
            .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
                SELF._strCurrNum = SELF._strCurrNum || "";

                if (SELF._strCurrNum.length >= 6) {
                    SELF._strCurrNum = SELF._strCurrNum.substring(0, 5);
                }

                SELF._strCurrNum += nNum.toString();

                // 更新当前数字
                __updateCurrNumDisplay(SELF);
            }
        );
    }

    // "重输" 按钮点击事件
    cc.find("PrimeDialog/Center/ButtonArea/Button_Reset_", SELF.node)
        .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            // 清除当前数字
            SELF._strCurrNum = "";
            __updateCurrNumDisplay(SELF);
        }
    );

    // "加入" 按钮点击事件
    cc.find("PrimeDialog/Center/ButtonArea/Button_JoinClub_", SELF.node)
        .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            if (null != SELF.onJoinClub) {
                SELF.onJoinClub(Number.parseInt(SELF._strCurrNum));
            }
        }
    );
}

/**
 * 更新当前数字
 * 
 * @param SELF this 指针
 */
function __updateCurrNumDisplay(SELF: JoinClubDialogComp): void {
    if (null == SELF) {
        return;
    }

    // 获取字符串数字
    let strCurrNum = SELF._strCurrNum;

    if (null == strCurrNum || 
          "" == strCurrNum) {
        cc.find("PrimeDialog/Center/NumText/PleaseEnterNum", SELF.node).active = true;
        cc.find("PrimeDialog/Center/NumText/CurrNum", SELF.node).active = false;
        return;
    }

    cc.find("PrimeDialog/Center/NumText/PleaseEnterNum", SELF.node).active = false;
    cc.find("PrimeDialog/Center/NumText/CurrNum", SELF.node).active = true;

    for (let nPos = 0; nPos < 6; nPos++) {
        // 获取当前位置数字
        let strN = strCurrNum.charAt(nPos);

        let oSpriteN = null;

        if (null == strN || 
              "" == strN) {
            // 用横线代替
            oSpriteN = cc.find("PrimeDialog/Center/NumText/NumX", SELF.node)
                .getComponent(cc.Sprite)
                .spriteFrame;
        } else {
            // 真正的数字
            oSpriteN = cc.find(`PrimeDialog/Center/ButtonArea/Button_Num_${strN}_/Background/N`, SELF.node)
                .getComponent(cc.Sprite)
                .spriteFrame;
        }

        cc.find(`PrimeDialog/Center/NumText/CurrNum/Pos_${nPos}_/N`, SELF.node)
            .getComponent(cc.Sprite)
            .spriteFrame = oSpriteN;
    }
}
