// @import
import ModConfig from "../xett.ModConfig";
import PrefabXFactory from "../../../comm/script/PrefabXFactory";
import SettingDialogComp from "./xett.SettingDialogComp";

// 预制体名称
const PREFAB_NAME = "res/1/prefab/SettingDialog";

/**
 * 设置对话框工厂类
 */
export default class SettingDialogFactory {
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
        PrefabXFactory.createAsync(ModConfig.BUNDLE_NAME, PREFAB_NAME, SettingDialogComp, funCallback);
    }
}
