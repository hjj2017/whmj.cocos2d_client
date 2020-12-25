// @const
const { ccclass } = cc._decorator;

/**
 * 表情选择窗口组件
 */
@ccclass
export default class EmojiSelectWndComp extends cc.Component {
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
     * 当选择完成
     * 
     * @param nMsgId 消息 Id
     */
    onSelected(nMsgId: number): void {
        if (nMsgId <= 0) {
            return;
        }
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 注册 UI 事件
 * 
 * @param SELF this 指针
 */
function __regUIEvent(SELF: EmojiSelectWndComp): void {
    if (null == SELF) {
        return;
    }

    cc.find("AutoHideListen", SELF.node).on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            SELF.node.destroy();
        }
    );

    for (let nIndex: number = 1000; nIndex <= 1015; nIndex++) {
        cc.find(`PrimeWnd/EmojiList/Emoji_${nIndex}_`, SELF.node).on(
            cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
                if ("function" == typeof(SELF.onSelected)) {
                    SELF.onSelected(nIndex);
                }

                __hide(SELF);
            }
        );
    }
}

/**
 * 隐藏
 * 
 * @param SELF this 指针
 */
function __hide(SELF: EmojiSelectWndComp): void {
    if (null == SELF) {
        return;
    }

    SELF.node.destroy();
}
