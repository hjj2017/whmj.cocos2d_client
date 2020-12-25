// @import
import AllMahjongValImg from "../AllMahjongValImg";
import ModConfig from "../ModConfig.ver_MJ_weihai_";

// 预制体名称数组
const PREFAB_NAME_CHI_ARRAY = [
    "res/0/prefab/MahjongChiGroupAtSeat_0_",
    "res/0/prefab/MahjongChiGroupAtSeat_1_",
    "res/0/prefab/MahjongChiGroupAtSeat_2_",
    "res/0/prefab/MahjongChiGroupAtSeat_3_",
];

// 预制体名称数组
const PREFAB_NAME_PENG_ARRAY = [
    "res/0/prefab/MahjongPengGroupAtSeat_0_",
    "res/0/prefab/MahjongPengGroupAtSeat_1_",
    "res/0/prefab/MahjongPengGroupAtSeat_2_",
    "res/0/prefab/MahjongPengGroupAtSeat_3_",
];

// 预制体名称数组
const PREFAB_NAME_MING_GANG_ARRAY = [
    "res/0/prefab/MahjongMingGangGroupAtSeat_0_",
    "res/0/prefab/MahjongMingGangGroupAtSeat_1_",
    "res/0/prefab/MahjongMingGangGroupAtSeat_2_",
    "res/0/prefab/MahjongMingGangGroupAtSeat_3_",
];

// 预制体名称数组
const PREFAB_NAME_AN_GANG_ARRAY_ARRAY = [
    [
        "res/0/prefab/MahjongAnGang0GroupAtSeat_0_",
        "res/0/prefab/MahjongAnGang0GroupAtSeat_1_",
        "res/0/prefab/MahjongAnGang0GroupAtSeat_2_",
        "res/0/prefab/MahjongAnGang0GroupAtSeat_3_",
    ],
    [
        "res/0/prefab/MahjongAnGang1GroupAtSeat_0_",
        "res/0/prefab/MahjongAnGang1GroupAtSeat_1_",
        "res/0/prefab/MahjongAnGang1GroupAtSeat_2_",
        "res/0/prefab/MahjongAnGang1GroupAtSeat_3_",
    ],
];

// 预制体名称数组
const PREFAB_NAME_BU_GANG_ARRAY = [
    "res/0/prefab/MahjongBuGangGroupAtSeat_0_",
    "res/0/prefab/MahjongBuGangGroupAtSeat_1_",
    "res/0/prefab/MahjongBuGangGroupAtSeat_2_",
    "res/0/prefab/MahjongBuGangGroupAtSeat_3_",
];

/**
 * 麻将吃碰杠分组工厂类
 */
export default class MahjongChiPengGangGroupFactory {
    /**
     * 私有化类默认构造器
     */
    private constructor() {
        throw new Error("该类不能实例化");
    }

    /**
     * 创建吃牌组
     * 
     * @param nCmderSiteIndex 命令者座位索引
     * @param nTChi 吃的是哪张牌
     * @param nT0 第一张牌
     * @param nT1 第二张牌
     * @param nT2 第三张牌
     * @param nFromSiteIndex 吃牌来自座位索引
     * @return 节点
     */
    static createChiGroup(
        nCmderSiteIndex: number, nTChi: number, nT0: number, nT1: number, nT2: number, nFromSiteIndex: number): cc.Node {
        if (nCmderSiteIndex < 0 || 
            nT0 <= 0 || 
            nT1 <= 0 || 
            nT2 <= 0) {
            // 如果参数无效则直接退出
            return null;
        }

        // 获取 Bundle
        let oBundle = cc.assetManager.getBundle(ModConfig.BUNDLE_NAME);

        if (null == oBundle) {
            cc.error(`未找到 Bundle, name = ${ModConfig.BUNDLE_NAME}`);
            return null;
        }

        // 预制体名称
        const strPrefabName = PREFAB_NAME_CHI_ARRAY[nCmderSiteIndex];
        // 获取已经缓存的预制体
        const oCachedPrefab = oBundle.get(strPrefabName, cc.Prefab) as cc.Prefab;

        if (null == oCachedPrefab) {
            cc.error(`未找到必要的资源, prefabName = ${strPrefabName}`);
            return null;
        }

        let oNewNode = cc.instantiate(oCachedPrefab);

        if (null == oNewNode) {
            cc.error("创建 \"吃牌组\" 失败");
            return null;
        }

        // 创建一个临时数组
        let oTempArray = [ 
            nT0, nT1, nT2,
        ];

        for (let nIndex in oTempArray) {
            // 获取当前麻将牌面值
            let nTCurr = oTempArray[nIndex];

            if (nTCurr <= 0) {
                continue;
            }

            if (nTChi > 0 && 
                nTCurr == nTChi) {
                // 修改箭头方向
                __changeArrawDirection(
                    cc.find(`MahjongTile_${nIndex}_/Arrow`, oNewNode),
                    nFromSiteIndex
                );
            }

            // 修改麻将面值
            __changeAMahjongVal(
                cc.find(`MahjongTile_${nIndex}_/Val`, oNewNode),
                nTCurr
            );
        }

        return oNewNode;
    }

    /**
     * 创建碰牌组
     * 
     * @param nCmderSiteIndex 命令者座位索引
     * @param nT 麻将碰牌
     * @param nFromSiteIndex 碰牌来自座位索引
     * @return 节点
     */
    static createPengGroup(
        nCmderSiteIndex: number, nT: number, nFromSiteIndex: number): cc.Node {

        if (nCmderSiteIndex < 0 || 
            nT <= 0) {
            // 如果参数无效则直接退出
            return null;
        }

        // 获取 Bundle
        let oBundle = cc.assetManager.getBundle(ModConfig.BUNDLE_NAME);

        if (null == oBundle) {
            cc.error("oBundle is null");
            return null;
        }

        // 预制体名称
        const strPrefabName = PREFAB_NAME_PENG_ARRAY[nCmderSiteIndex];
        // 获取已经缓存的预制体
        const oCachedPrefab = oBundle.get(strPrefabName, cc.Prefab) as cc.Prefab;

        if (null == oCachedPrefab) {
            cc.error(`未找到必要的资源, prefabName = ${strPrefabName}`);
            return null;
        }

        let oNewNode = cc.instantiate(oCachedPrefab);

        if (null == oNewNode) {
            cc.error("创建 \"碰牌组\" 失败");
            return null;
        }

        // 修改箭头方向
        __changeArrawDirection(
            cc.find(`MahjongTile_1_/Arrow`, oNewNode),
            nFromSiteIndex
        );

        for (let nIndex = 0; nIndex < 3; nIndex++) {
            // 修改麻将面值
            __changeAMahjongVal(
                cc.find(`MahjongTile_${nIndex}_/Val`, oNewNode),
                nT
            );
        }

        return oNewNode;
    }

    /**
     * 创建明杠牌组
     * 
     * @param nCmderSiteIndex 命令者座位索引
     * @param nT 杠牌
     * @param nFromSiteIndex 杠牌来自座位索引
     * @return 节点
     */
    static createMingGangGroup(
        nCmderSiteIndex: number, nT: number, nFromSiteIndex: number): cc.Node {

        if (nCmderSiteIndex < 0 || 
            nT <= 0) {
            // 如果参数无效则直接退出
            return null;
        }

        // 获取 Bundle
        let oBundle = cc.assetManager.getBundle(ModConfig.BUNDLE_NAME);

        if (null == oBundle) {
            cc.error(`未找到 Bundle, name = ${ModConfig.BUNDLE_NAME}`);
            return null;
        }

        // 预制体名称
        const strPrefabName = PREFAB_NAME_MING_GANG_ARRAY[nCmderSiteIndex];
        // 获取已经缓存的预制体
        const oCachedPrefab = oBundle.get(strPrefabName, cc.Prefab) as cc.Prefab;

        if (null == oCachedPrefab) {
            cc.error(`未找到必要的资源, prefabName = ${strPrefabName}`);
            return null;
        }

        let oNewNode = cc.instantiate(oCachedPrefab);

        if (null == oNewNode) {
            cc.error("创建 \"明杠组\" 失败");
            return null;
        }

        // 修改箭头方向
        __changeArrawDirection(
            cc.find(`MahjongTile_3_/Arrow`, oNewNode),
            nFromSiteIndex
        );

        for (let nIndex of [ 0, 2, 3, ]) {
            // 修改麻将面值
            __changeAMahjongVal(
                cc.find(`MahjongTile_${nIndex}_/Val`, oNewNode),
                nT,
            );
        }

        return oNewNode;
    }

    /**
     * 创建暗杠牌组
     * 
     * @param nCmderSiteIndex 命令者座位索引
     * @param nT 杠牌
     * @param nShow 是否展示? 1 = 展示, 0 = 不展示
     * @return 节点
     */
    static createAnGangGroup(
        nCmderSiteIndex: number, nT: number, nShow: number = 0): cc.Node {

        if (nCmderSiteIndex < 0 || 
            nT <= 0) {
            // 如果参数无效则直接退出
            return null;
        }

        nShow = Math.max(0, nShow);
        nShow = Math.min(1, nShow);

        // 获取 Bundle
        let oBundle = cc.assetManager.getBundle(ModConfig.BUNDLE_NAME);

        if (null == oBundle) {
            cc.error(`未找到 Bundle, name = ${ModConfig.BUNDLE_NAME}`);
            return null;
        }

        // 预制体名称
        const strPrefabName = PREFAB_NAME_AN_GANG_ARRAY_ARRAY[nShow][nCmderSiteIndex];
        // 获取已经缓存的预制体
        const oCachedPrefab = oBundle.get(strPrefabName, cc.Prefab) as cc.Prefab;

        if (null == oCachedPrefab) {
            cc.error(`未找到必要的资源, prefabName = ${strPrefabName}`);
            return null;
        }

        let oNewNode = cc.instantiate(oCachedPrefab);

        if (null == oNewNode) {
            cc.error("创建 \"暗杠组\" 失败");
            return null;
        }

        if (1 == nShow) {
            // 修改麻将面值
            __changeAMahjongVal(
                cc.find(`MahjongTile_3_/Val`, oNewNode),
                nT
            );
        }

        return oNewNode;
    }

    /**
     * 创建明杠牌组
     * 
     * @param nCmderSiteIndex 命令者座位索引
     * @param nT 杠牌
     * @return Cocos 节点
     */
    static createBuGangGroup(
        nCmderSiteIndex: number, nT: number): cc.Node {

        if (nCmderSiteIndex < 0 || 
            nT <= 0) {
            // 如果参数无效则直接退出
            return null;
        }

        // 获取 Bundle
        let oBundle = cc.assetManager.getBundle(ModConfig.BUNDLE_NAME);

        if (null == oBundle) {
            cc.error(`未找到 Bundle, name = ${ModConfig.BUNDLE_NAME}`);
            return null;
        }

        // 预制体名称
        const strPrefabName = PREFAB_NAME_BU_GANG_ARRAY[nCmderSiteIndex];
        // 获取已经缓存的预制体
        const oCachedPrefab = oBundle.get(strPrefabName, cc.Prefab) as cc.Prefab;

        if (null == oCachedPrefab) {
            cc.error(`未找到必要的资源, prefabName = ${strPrefabName}`);
            return null;
        }

        let oNewNode = cc.instantiate(oCachedPrefab);

        if (null == oNewNode) {
            cc.error("创建 \"补杠组\" 失败");
            return null;
        }

        for (let nIndex of [ 0, 2, 3, ]) {
            // 修改麻将面值
            __changeAMahjongVal(
                cc.find(`MahjongTile_${nIndex}_/Val`, oNewNode),
                nT,
            );
        }

        return oNewNode;
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 修改箭头方向
 * 
 * @param oArrowNode 箭头节点
 * @param nTargetSiteIndex 目标座位索引
 */
function __changeArrawDirection(oArrowNode: cc.Node, nTargetSiteIndex: number): void {
    if (null == oArrowNode) {
        return;
    }

    oArrowNode.active = true;

    switch (nTargetSiteIndex) {
    case 0: 
        oArrowNode.angle = -180; 
        break;

    case 1:
        oArrowNode.angle = -90; 
        break;

    case 2:
        //oArrowNode.angle = 0;
        break;
    
    case 3:
        oArrowNode.angle = 90; 
        break;

    default:
        break;
    }
}

/**
 * 修改麻将牌花
 * 
 * @param oValNode 麻将面值节点
 * @param nMahjongVal 麻将面值
 */
function __changeAMahjongVal(oValNode: cc.Node, nMahjongVal: number): void {
    if (null == oValNode || 
        nMahjongVal <= 0) {
        return;
    }

    oValNode.getComponent(cc.Sprite).spriteFrame = AllMahjongValImg.getSpriteFrame(nMahjongVal);
}
