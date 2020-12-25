// @import
import ClubManageWndComp from "./ClubManageWndComp";
import ModConfig from "../ModConfig.ver_Club";
import PrefabXFactory from "../../../comm/script/PrefabXFactory";

// 预制体名称
const PREFAB_NAME = "res/1/prefab/ClubManageWnd";

/**
 * 亲友圈管理窗口工厂类
 */
export default class ClubManageWndFactory {
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
        PrefabXFactory.createAsync(ModConfig.BUNDLE_NAME, PREFAB_NAME, ClubManageWndComp, funCallback);
    }
}
