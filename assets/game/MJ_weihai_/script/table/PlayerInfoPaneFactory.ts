// @import
import PrefabXFactory from "../../../../comm/script/PrefabXFactory";
import ModConfig from "../ModConfig.ver_MJ_weihai_";
import PlayerInfoPaneComp from "./PlayerInfoPaneComp";

// 预制体名称
const PREFAB_NAME = "res/0/prefab/PlayerInfoPane";

/**
 * 玩家信息工厂类
 */
export default class PlayerInfoPaneFactory {
    /**
     * 私有化类默认构造器
     */
    private constructor() {
        throw new Error("该类不能实例化");
    }

    /**
     * 创建玩家信息节点
     * 
     * @return Cocos 节点
     */
    static create(): cc.Node {
        return PrefabXFactory.create(ModConfig.BUNDLE_NAME, PREFAB_NAME, PlayerInfoPaneComp);
    }
}
