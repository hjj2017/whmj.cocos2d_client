//#region @import
import EmojiPopoComp from "./chat.EmojiPopoComp";
import ModConfig from "../chat.ModConfig";
import PrefabXFactory from "../../../comm/script/PrefabXFactory";
//#endregion

// 预制体名称
const PREFAB_NAME = "res/1/prefab/EmojiPopo";

/**
 * 表情泡泡工厂类
 */
export default class EmojiPopoFactory {
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
    static createAsync(funCallback: (oPopoNode: cc.Node) => void): void {
        PrefabXFactory.createAsync(ModConfig.BUNDLE_NAME, PREFAB_NAME, EmojiPopoComp, funCallback);
    }
}
