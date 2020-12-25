// @import
import Async from "../../../comm/script/Async";
import MahjongTableComp from "./table/MahjongTableComp";
import ModConfig from "./ModConfig.ver_MJ_weihai_";

// @const
const PREFAB_TEXT_SPINE_ANIM = "res/1/prefab/TextSpineAnim";
const SPINE_DIR = "res/1/spine/text";

// 文本 Spine 动画
let g_oTextSpineAnim: cc.Node = null;

/**
 * 文本动画工具
 */
export default class TextSpineAnimUtil {
    /**
     * 私有化类默认构造器
     */
    private constructor() {
    }

    /**
     * 展示吃碰杠胡动画
     * 
     * @param nUserId 用户 Id
     * @param strAnimName 吃碰杠胡动画名称
     * @param nDurationTime 持续多长事件之后清掉动画, 事件单位 = 秒
     */
    static showChiPengGangHuAnim(nUserId: number, strAnimName: "Chi" | "Peng" | "Gang" | "Hu" | "ZiMo" | "LiangFeng" | "BuFeng", nDurationTime = 1.2): void {
        if (nUserId <= 0) {
            return;
        }

        __loadSpineAnim(() => {
            let oAtPosNode = cc.find("Canvas/MahjongTableArea")
                .getComponentInChildren(MahjongTableComp)
                .getShowAnimationPos(nUserId);

            let oInteractionArea = cc.find("Canvas/InteractionArea");

            // 转换显示位置
            let oShowAtPos = oInteractionArea.convertToNodeSpaceAR(oAtPosNode.convertToWorldSpaceAR(cc.Vec2.ZERO));

            g_oTextSpineAnim.x = oShowAtPos.x;
            g_oTextSpineAnim.y = oShowAtPos.y;
            g_oTextSpineAnim.parent = oInteractionArea;

            // 获取 Spine 动画组件
            let oSpineSkeleton = g_oTextSpineAnim.getComponent(sp.Skeleton);
            
            if (null != oSpineSkeleton) {
                oSpineSkeleton.setAnimation(0, strAnimName, false);

                if (nDurationTime > 0) {
                    oSpineSkeleton.addAnimation(0, "Empty", false, nDurationTime);
                }
            }
        });
    }

    /**
     * 显示荒庄
     */
    static showHuangZhuang(): void {
        __loadSpineAnim(() => {
            if (null == g_oTextSpineAnim) {
                return;
            }

            // 设置父级节点
            g_oTextSpineAnim.parent = cc.Canvas.instance.node;

            // 获取 Spine 动画组件
            let oSpineSkeleton = g_oTextSpineAnim.getComponent(sp.Skeleton);
            
            if (null != oSpineSkeleton) {
                oSpineSkeleton.setAnimation(0, "HuangZhuang", false);
            }
        });
    }

    /**
     * 清除动画
     */
    static clear(): void {
        if (null == g_oTextSpineAnim) {
            return;
        }

        g_oTextSpineAnim.parent = null;
        g_oTextSpineAnim.destroy();
        g_oTextSpineAnim = null;
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 加载 Spine 动画
 * 
 * @param funLoadFinished 加载完成回调
 */
function __loadSpineAnim(funLoadFinished: () => void): void {
    if (null == funLoadFinished) {
        return;
    }

    if (null != g_oTextSpineAnim) {
        funLoadFinished();
        return;
    }

    // 获取 Bundle
    let oBundle = cc.assetManager.getBundle(ModConfig.BUNDLE_NAME);

    if (null == oBundle) {
        cc.error("oBundle is null");
        return null;
    }

    Async.serial(
        (funYesContinue) => {
            oBundle.preloadDir(SPINE_DIR, (oError) => {
                if (null != oError) {
                    cc.error(oError);
                    return;
                }

                funYesContinue();
            });
        },

        () => {
            // 获取已经缓存的预制体
            oBundle.load(PREFAB_TEXT_SPINE_ANIM, (oError, oPrefab: cc.Prefab) => {
                if (null != oError) {
                    cc.error(oError);
                    return;
                }

                let oNewNode = cc.instantiate(oPrefab);

                if (null == oNewNode) {
                    return;
                }

                g_oTextSpineAnim = oNewNode;
                funLoadFinished();
            });
        },
    );
}
