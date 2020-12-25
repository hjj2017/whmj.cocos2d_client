// @import
import ModConfig from "../sha2.ModConfig";
import PrefabXFactory from "../../../comm/script/PrefabXFactory";
import ShareAppDialogComp from "./sha2.ShareAppDialogComp";

// 预制体名称
const PREFAB_NAME = "res/1/prefab/ShareAppDialog";

/**
 * 分享 App 对话框工厂类
 */
export default class ShareAppDialogFactory {
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
    static createAsync(funCallback: (oDialogNode: cc.Node) => void): void {
        PrefabXFactory.createAsync(ModConfig.BUNDLE_NAME, PREFAB_NAME, ShareAppDialogComp, funCallback);
    }
}
