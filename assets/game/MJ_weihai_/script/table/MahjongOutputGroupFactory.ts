// @import
import MahjongOutputGroupComp from "./MahjongOutputGroupComp";
import ModConfig from "../ModConfig.ver_MJ_weihai_";
import PrefabXFactory from "../../../../comm/script/PrefabXFactory";

// 预制体数组
const PREFAB_NAME_ARRAY = [
    "res/0/prefab/MahjongOutputGroupAtSeat_0_",
    "res/0/prefab/MahjongOutputGroupAtSeat_1_",
    "res/0/prefab/MahjongOutputGroupAtSeat_2_",
    "res/0/prefab/MahjongOutputGroupAtSeat_3_",
];

/**
 * 已打出的麻将组工厂
 */
export default class MahjongOutputGroupFactory {
    /**
     * 私有化类默认构造器
     */
    private constructor() {
        throw new Error("该类不能实例化");
    }

    /**
     * 创建已打出牌组
     * 
     * @param nSiteIndexAtClient 客户端座位索引
     * @param nMaxPlayer 最大玩家数量
     * @return 麻将打出牌节点
     * 
     * @see {MahjongOutputGroupComp}
     */
    static create(nSiteIndexAtClient: number, nMaxPlayer: number): cc.Node {
        let oNewNode = PrefabXFactory.create(
            ModConfig.BUNDLE_NAME, 
            PREFAB_NAME_ARRAY[nSiteIndexAtClient], 
            MahjongOutputGroupComp
        );

        oNewNode.getComponent(MahjongOutputGroupComp)
            .putSeatIndexAtClient(nSiteIndexAtClient)
            .putMaxPlayer(nMaxPlayer);

        return oNewNode;
    }
}
