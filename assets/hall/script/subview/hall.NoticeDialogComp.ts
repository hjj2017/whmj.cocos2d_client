// @import
import GlobalDef from "../../../comm/script/GlobalDef";

// @const
const { ccclass } = cc._decorator;

/**
 * 公告对话框组件, 包括客服、活动、玩法，等等
 */
@ccclass
export default class NoticeDialogComp extends cc.Component {
    /**
     * 对话框类型
     */
    _strDialogType: string = null;

    /**
     * Web 页面地址
     */
    _strWebPageURL: string = null;

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
            .to(0.12, { opacity: 255, scale: 0.92, })
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
     * 设置对话框类型
     * 
     * @param strVal 字符串值
     * @return this 指针
     */
    putDialogType(strVal: "huodong" | "kefu" | "wanfa"): NoticeDialogComp {
        this._strDialogType = strVal;
        return this;
    }

    /**
     * 设置 Web 页面地址
     * 
     * @param strVal 字符串值
     * @return this 指针
     */
    putWebPageURL(strVal: string): NoticeDialogComp {
        this._strWebPageURL = strVal;
        return this;
    }

    /**
     * 刷新显示
     */
    renewDisplay(): void {
        cc.find("PrimeDialog/Top/Title_HuoDong_", this.node).active = ("huodong" == this._strDialogType);
        cc.find("PrimeDialog/Top/Title_KeFu_", this.node).active = ("kefu" == this._strDialogType);

        cc.find("PrimeDialog/Center/WebView", this.node)
            .getComponent(cc.WebView)
            .url = this._strWebPageURL;
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 注册 UI 时间
 * 
 * @param SELF this 指针
 */
function __regUIEvent(SELF: NoticeDialogComp): void {
    if (null == SELF) {
        return;
    }

    cc.find("PrimeDialog/Top/Button_Close_", SELF.node).on(
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
