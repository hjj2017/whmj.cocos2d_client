//#region @import
import ModConfig from "../chat.ModConfig";
import PrefabXFactory from "../../../comm/script/PrefabXFactory";
import QuickMsgPopoComp from "./chat.QuickMsgPopoComp";
//#endregion

// 预制体名称
const PREFAB_NAME = "res/1/prefab/QuickMsgPopo";

/**
 * 快速消息泡泡工厂类
 */
export default class QuickMsgPopoFactory {
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
        PrefabXFactory.createAsync(ModConfig.BUNDLE_NAME, PREFAB_NAME, QuickMsgPopoComp, funCallback);
    }
}
