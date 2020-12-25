// @import
import RecordDetailzDialogComp from "./rcd7.RecordDetailzDialogComp";
import ModConfig from "../rcd7.ModConfig";
import PrefabXFactory from "../../../comm/script/PrefabXFactory";

// 预制体路径
const PREFAB_PATH = "res/1/prefab/RecordDetailzDialog";

/**
 * 战绩详情对话框工厂类
 */
export default class RecordDetailzDialogFactory {
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
        PrefabXFactory.createAsync(ModConfig.BUNDLE_NAME, PREFAB_PATH, RecordDetailzDialogComp, funCallback);
    }
}
