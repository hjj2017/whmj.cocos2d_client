// @import
import ConfirmDialogComp from "./DissolveRoomConfirmDialogComp.ver_MJ_weihai_";
import ModConfig from "../ModConfig.ver_MJ_weihai_";
import PrefabXFactory from "../../../../comm/script/PrefabXFactory";

// @const
// 预制体名称
const PREFAB_NAME = "res/1/prefab/DissolveRoomConfirmDialog";

/**
 * 确认对话框工厂类
 */
export default class DissolveRommConfirmDialogFactory {
    /**
     * 类默认构造器
     */
    private constructor() {
    }

    /**
     * ( 异步方式 ) 创建确认对话框
     * 
     * @param funCallback 回调函数
     */
    static createAsync(funCallback: (oNewDialog: cc.Node) => void): void {
        PrefabXFactory.createAsync(ModConfig.BUNDLE_NAME, PREFAB_NAME, ConfirmDialogComp, funCallback);
    }
}
