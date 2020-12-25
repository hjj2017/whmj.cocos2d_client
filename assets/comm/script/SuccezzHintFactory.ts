//#region @import
import SuccezzHintComp from "./SuccezzHintComp";
//#endregion

/**
 * 成功提示工厂类
 */
export default class SuccezzHintFactory {
    /**
     * 缓存节点
     */
    private static _oCachedNode: cc.Node = null;

    /**
     * 类默认构造器
     */
    private constructor() {
    }

    /**
     * 根据节点初始化
     * 
     * @param oDialogNode 窗口节点
     */
    static initByNode(oDialogNode: cc.Node): void {
        if (null == oDialogNode) {
            return;
        }

        SuccezzHintFactory._oCachedNode = oDialogNode;
        cc.game.addPersistRootNode(oDialogNode);

        if (null == oDialogNode.getComponent(SuccezzHintComp)) {
            oDialogNode.addComponent(SuccezzHintComp);
        }
    }

    /**
     * 获取已经创建的错误提示组件
     * 
     * @return 错误提示组件
     */
    static getCreatedHint(): SuccezzHintComp {
        if (null != SuccezzHintFactory._oCachedNode) {
             return SuccezzHintFactory._oCachedNode.getComponent(SuccezzHintComp);
        } else {
             return null;
        }
    }
}
