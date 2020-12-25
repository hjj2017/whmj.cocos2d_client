// @import
import ClubDetailzWndComp from "./ClubDetailzWndComp";
import ModConfig from "../ModConfig.ver_Club";
import PrefabXFactory from "../../../comm/script/PrefabXFactory";

// 预制体名称
const PREFAB_NAME = "res/0/prefab/ClubDetailzWnd";

/**
 * 亲友圈详情窗口工厂类
 */
export default class ClubDetailzWndFactory {
    /**
     * 私有化类默认构造器
     */
    private constructor() {
    }

    /**
     * 创建子视图
     * 
     * @return Cocos 节点
     */
    static create(): cc.Node {
        return PrefabXFactory.create(ModConfig.BUNDLE_NAME, PREFAB_NAME, ClubDetailzWndComp);
    }
}
