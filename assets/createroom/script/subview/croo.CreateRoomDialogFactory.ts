//#region  @import
import CreateRoomDialogComp from "./croo.CreateRoomDialogComp";
import ModConfig from "../croo.ModConfig";
import PrefabXFactory from "../../../comm/script/PrefabXFactory";
//#endregion

// 预制体名称
const PREFAB_NAME = "res/1/prefab/CreateRoomDialog";

/**
 * 创建房间对话框工厂类
 */
export default class CreateRoomDialogFactory {
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
        PrefabXFactory.createAsync(ModConfig.BUNDLE_NAME, PREFAB_NAME, CreateRoomDialogComp, funCallback);
    }
}
