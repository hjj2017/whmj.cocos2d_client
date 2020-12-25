// @import
import ExchangeRoomCardDialogComp from "./ExchangeRoomCardDialogComp";
import ModConfig from "../ModConfig.ver_Club";
import PrefabXFactory from "../../../comm/script/PrefabXFactory";

// 预制体名称
const PREFAB_NAME = "res/1/prefab/ExchangeRoomCardDialog";

/**
 * 亲友圈充房卡对话框工厂类
 */
export default class ExchangeRoomCardDialogFactory {
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
        PrefabXFactory.createAsync(ModConfig.BUNDLE_NAME, PREFAB_NAME, ExchangeRoomCardDialogComp, funCallback);
    }
}
