// @import
import ModConfig from "../ModConfig.ver_MJ_weihai_";
import PrefabXFactory from "../../../../comm/script/PrefabXFactory";
import RoomSettlementWndComp from "./RoomSettlementWndComp";

// 预制体名称
const PREFAB_NAME = "res/1/prefab/RoomSettlementWnd";

/**
 * 麻将单局结算窗口工厂类
 */
export default class RoundSettlementWndFactory {
    /**
     * 私有化类默认构造器
     */
    private constructor() {
    }

    /**
     * ( 异步方式 ) 创建结算窗口
     * 
     * @param funCallback 回调函数
     */
    static createAsync(funCallback: (oNewWnd: cc.Node) => void): void {
        PrefabXFactory.createAsync(ModConfig.BUNDLE_NAME, PREFAB_NAME, RoomSettlementWndComp, funCallback);
    }
}
