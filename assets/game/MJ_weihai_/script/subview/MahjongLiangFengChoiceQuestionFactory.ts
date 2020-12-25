// @import
import MahjongLiangFengChoiceQuestionComp from "./MahjongLiangFengChoiceQuestionComp";
import ModConfig from "../ModConfig.ver_MJ_weihai_";
import PrefabXFactory from "../../../../comm/script/PrefabXFactory";

// 预制体名称
const PREFAB_NAME = "res/0/prefab/MahjongLiangFengChoiceQuestion";

/**
 * 麻将亮风选择题工厂类
 */
export default class MahjongLiangFengChoiceQuestionFactory {
    /**
     * 私有化类默认构造器
     */
    private constructor() {
    }

    /**
     * 创建麻将吃牌选择题
     * 
     * @return Cocos 节点对象
     * 
     * @see {MahjongLiangFengChoiceQuestionComp}
     */
    static create(): cc.Node {
        return PrefabXFactory.create(ModConfig.BUNDLE_NAME, PREFAB_NAME, MahjongLiangFengChoiceQuestionComp);
    }
}
