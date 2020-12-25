//#region @import
import EmojiSelectWndComp from "./chat.EmojiSelectWndComp";
import ModConfig from "../chat.ModConfig";
import PrefabXFactory from "../../../comm/script/PrefabXFactory";
//#endregion

// 预制体名称
const PREFAB_NAME = "res/1/prefab/EmojiSelectWnd";

/**
 * 表情选择窗口工厂类
 */
export default class EmojiSelectWndFactory {
    /**
     * 私有化类默认类构造器
     */
    private constructor() {
    }

    /**
     * 创建对话框
     * 
     * @param funCallback 回调函数
     */
    static createAsync(funCallback: (oWndNode: cc.Node) => void): void {
        PrefabXFactory.createAsync(ModConfig.BUNDLE_NAME, PREFAB_NAME, EmojiSelectWndComp, funCallback);
    }
}
