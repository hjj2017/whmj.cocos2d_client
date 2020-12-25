// @const
const { ccclass } = cc._decorator;

/**
 * 创建亲友圈对话框组件
 */
@ccclass
export default class CreateClubDialogComp extends cc.Component {
    /**
     * onLoad
     */
    onLoad(): void {
    }

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
     * 创建亲友圈
     * 
     * @param strClubName 亲友圈名称
     * @override
     */
    onCreateClub(strClubName: string): void {
        if (null == strClubName) {
            return;
        }
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 注册 UI 时间
 * 
 * @param SELF this 指针
 */
function __regUIEvent(SELF: CreateClubDialogComp): void {
    if (null == SELF) {
        return;
    }

    cc.find("PrimeDialog/Center/Button_CreateClub_", SELF.node).on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            if ("function" != typeof(SELF.onCreateClub)) {
                return;
            }

            SELF.onCreateClub(
                cc.find("PrimeDialog/Center/ClubNameInput", SELF.node)
                    .getComponent(cc.EditBox)
                    .string
            );
        }
    );

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
}
