// @import
import AppSetting from "../../../bizdata/script/AppSetting";

// @const
const { ccclass } = cc._decorator;

/**
 * 设置对话框
 */
@ccclass
export default class SettingDialogComp extends cc.Component {
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

        cc.find("PrimeDialog/Center/Toggle_BGMusic_", this.node)
            .getComponent(cc.Toggle)
            .isChecked = AppSetting.getInstance()._bEnableBGMusic;

        cc.find("PrimeDialog/Center/Toggle_SoundAndVoice_", this.node)
            .getComponent(cc.Toggle)
            .isChecked = AppSetting.getInstance()._bEnableSound || AppSetting.getInstance()._bEnableVoice;

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
     * 当设置发生变化
     */
    onChanged(): void {
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 注册 UI 时间
 * 
 * @param SELF this 指针
 */
function __regUIEvent(SELF: SettingDialogComp): void {
    if (null == SELF) {
        return;
    }

    // 关闭对话
    cc.find("PrimeDialog/Top/Button_Close_", SELF.node).on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            // 保存 App 设置
            AppSetting.getInstance().save();

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

    // 开关背景音乐
    let oToggleBGMusicNode = cc.find("PrimeDialog/Center/Toggle_BGMusic_", SELF.node);
    oToggleBGMusicNode.on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            let bIsChecked = oToggleBGMusicNode.getComponent(cc.Toggle).isChecked;
            AppSetting.getInstance()._bEnableBGMusic = bIsChecked;

            if ("function" == typeof(SELF.onChanged)) {
                SELF.onChanged();
            }
        }
    );

    // 开关声音
    let oToggleSoundAndVoiceNode = cc.find("PrimeDialog/Center/Toggle_SoundAndVoice_", SELF.node);
    oToggleSoundAndVoiceNode.on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            let bIsChecked = oToggleSoundAndVoiceNode.getComponent(cc.Toggle).isChecked;
            AppSetting.getInstance()._bEnableSound = bIsChecked;
            AppSetting.getInstance()._bEnableVoice = bIsChecked;

            if ("function" == typeof(SELF.onChanged)) {
                SELF.onChanged();
            }
        }
    );

    cc.find("PrimeDialog/Bottom/Button_OK_", SELF.node).on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            // 保存 App 设置
            AppSetting.getInstance().save();

            // 增加缓动效果
            cc.tween(cc.find("Mask", SELF.node))
                .to(0.12, { opacity: 0, })
                .start();

            cc.tween(cc.find("PrimeDialog", SELF.node))
                .to(0.12, { position: cc.v3(0, 0), opacity: 128, scale: 0.84, })
                .call(() => { SELF.node.destroy(); })
                .start();
        }
    );
}
