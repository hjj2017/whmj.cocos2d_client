// @import
import JoinRoomDialogComp from "./hall.JoinRoomDialogComp";
import ModConfig from "../hall.ModConfig";
import PrefabXFactory from "../../../comm/script/PrefabXFactory";

// 预制体名称
const PREFAB_NAME = "res/1/prefab/JoinRoomDialog";

/**
 * 加入房间对话框工厂类
 */
export default class JoinRoomDialogFactory {
    /**
     * 私有化类构默认造器
     */
    private constructor() {
    }

    /**
     * 创建对话框
     * 
     * @param funCallback 回调函数
     */
    static createAsync(funCallback: (oNewDialog: cc.Node) => void): void {
        PrefabXFactory.createAsync(ModConfig.BUNDLE_NAME, PREFAB_NAME, JoinRoomDialogComp, funCallback);
    }
}
