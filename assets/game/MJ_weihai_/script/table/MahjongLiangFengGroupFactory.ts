// @import
import MahjongLiangFengGroupComp from "./MahjongLiangFengGroupComp";
import ModConfig from "../ModConfig.ver_MJ_weihai_";
import PrefabXFactory from "../../../../comm/script/PrefabXFactory";

// 亮风预制体名称
const LIANG_FENG_PREFAB_NAME_ARRAY = [
    "res/0/prefab/MahjongLiangFengGroupAtSeat_0_",
    "res/0/prefab/MahjongLiangFengGroupAtSeat_1_",
    "res/0/prefab/MahjongLiangFengGroupAtSeat_2_",
    "res/0/prefab/MahjongLiangFengGroupAtSeat_3_",
];

// 乱锚预制体名称
const LUAN_MAO_PREFAB_NAME_ARRAY = [
    "res/0/prefab/MahjongLuanMaoGroupAtSeat_0_",
    "res/0/prefab/MahjongLuanMaoGroupAtSeat_1_",
    "res/0/prefab/MahjongLuanMaoGroupAtSeat_2_",
    "res/0/prefab/MahjongLuanMaoGroupAtSeat_3_",
];

/**
 * 麻将亮风分组工厂类
 */
export default class MahjongLiangFengGroupFactory {
    /**
     * 私有化类默认构造器
     */
    private constructor() {
    }

    /**
     * 创建手里的麻将牌组
     * 
     * @param nSiteIndexAtClient 客户端座位索引
     * @param nKind 亮风种类, 1 = 风牌, 2 = 箭牌, 3 = 乱锚
     * @return 麻将手牌节点
     * 
     * @see {MahjongLiangFengGroupComp}
     */
    static create(nSiteIndexAtClient: number, nKind: number): cc.Node {
        if (nSiteIndexAtClient < 0 || 
            nSiteIndexAtClient > 3 || 
            nKind < 1 || 
            nKind > 3) {
            return null;
        }

        let strPrefabName = "";
        
        if (1 == nKind || 
            2 == nKind) {
            strPrefabName = LIANG_FENG_PREFAB_NAME_ARRAY[nSiteIndexAtClient];
        } else if (3 == nKind) {
            strPrefabName = LUAN_MAO_PREFAB_NAME_ARRAY[nSiteIndexAtClient];
        } else {
            return null;
        }

        return PrefabXFactory.create(
            ModConfig.BUNDLE_NAME, 
            strPrefabName, 
            MahjongLiangFengGroupComp
        );
    }
}
