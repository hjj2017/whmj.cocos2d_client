// @import
import MahjongInHandGroupComp from "./MahjongInHandGroupComp";
import ModConfig from "../ModConfig.ver_MJ_weihai_";
import PrefabXFactory from "../../../../comm/script/PrefabXFactory";

// 预制体名称
const PREFAB_NAME_ARRAY = [
    "res/0/prefab/MahjongInHandGroupAtSeat_0_",
    "res/0/prefab/MahjongInHandGroupAtSeat_1_",
    "res/0/prefab/MahjongInHandGroupAtSeat_2_",
    "res/0/prefab/MahjongInHandGroupAtSeat_3_",
];

/**
 * 在手里的麻将牌组工厂类
 */
export default class MahjongInHandGroupFactory {
    /**
     * 私有化类默认构造器
     */
    private constructor() {
    }

    /**
     * 创建手里的麻将牌组
     * 
     * @param nSiteIndexAtClient 客户端座位索引
     * @return 麻将手牌节点
     * 
     * @see {MahjongInHandGroupComp}
     */
    static create(nSiteIndexAtClient: number): cc.Node {
        return PrefabXFactory.create(
            ModConfig.BUNDLE_NAME, 
            PREFAB_NAME_ARRAY[nSiteIndexAtClient], 
            MahjongInHandGroupComp
        );
    }
}
