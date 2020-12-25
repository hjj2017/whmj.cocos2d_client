// @import
import JoinClubDialogComp from "./JoinClubDialogComp";
import ModConfig from "../ModConfig.ver_Club";
import PrefabXFactory from "../../../comm/script/PrefabXFactory";

// 预制体名称
const PREFAB_NAME = "res/1/prefab/JoinClubDialog";

/**
 * 加入亲友圈对话框工厂类
 */
export default class JoinClubDialogFactory {
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
    static createAsync(funCallback: (oDialogNode: cc.Node) => void): void {
        PrefabXFactory.createAsync(ModConfig.BUNDLE_NAME, PREFAB_NAME, JoinClubDialogComp, funCallback);
    }
}
