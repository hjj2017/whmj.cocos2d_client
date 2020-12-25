// @import
import TableDetailzDialogComp from "./TableDetailzDialogComp";
import ModConfig from "../ModConfig.ver_Club";
import PrefabXFactory from "../../../comm/script/PrefabXFactory";

// 预制体名称
const PREFAB_NAME = "res/1/prefab/TableDetailzDialog";

/**
 * 牌桌详情对话框工厂类
 */
export default class TableDetailzDialogFactory {
    /**
     * 私有化类默认构造器
     */
    private constructor() {
    }

    /**
     * 创建子视图
     * 
     * @param funCallback 回调函数
     */
    static createAsync(funCallback: (oNewDialog: cc.Node) => void): void {
        PrefabXFactory.createAsync(ModConfig.BUNDLE_NAME, PREFAB_NAME, TableDetailzDialogComp, funCallback);
    }
}
