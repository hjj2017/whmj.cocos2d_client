// @import
import MahjongTableComp from "./MahjongTableComp";
import ModConfig from "../ModConfig.ver_MJ_weihai_";
import PrefabXFactory from "../../../../comm/script/PrefabXFactory";

// 预制体名称数组
const PREFAB_NAME_ARRAY = [
    null, null, // 留两个用于占位
    "res/0/prefab/MahjongTable_2_Playerz",
    "res/0/prefab/MahjongTable_3_Playerz",
    "res/0/prefab/MahjongTable_4_Playerz",
];

/**
 * 麻将牌桌工厂类
 */
export default class MahjongTableFactory {
    /**
     * 私有化类默认构造器
     */
    private constructor() {
    }

    /**
     * 创建麻将牌桌
     * 
     * @param nMaxPlayer 最大玩家数量
     * @return 节点
     */
    static create(nMaxPlayer: number): cc.Node {
        nMaxPlayer = Math.max(2, nMaxPlayer);
        nMaxPlayer = Math.min(4, nMaxPlayer);

        let oTableNode = PrefabXFactory.create(
            ModConfig.BUNDLE_NAME, 
            PREFAB_NAME_ARRAY[nMaxPlayer], 
            MahjongTableComp
        );

        oTableNode.getComponent(MahjongTableComp).init(nMaxPlayer);
        return oTableNode;
    }
}
