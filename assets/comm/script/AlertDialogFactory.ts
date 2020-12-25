// @import
import AlertDialogComp from "./AlertDialogComp";

/**
 * 提示对话框工厂类
 */
export default class AlertDialogFactory {
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

        AlertDialogFactory._oCachedNode = oDialogNode;
        cc.game.addPersistRootNode(oDialogNode);

        if (null == oDialogNode.getComponent(AlertDialogComp)) {
            oDialogNode.addComponent(AlertDialogComp);
        }
    }

    /**
     * 获取已经创建的提示对话框组件
     * 
     * @return 提示对话框组件
     */
    static getCreatedDialog(): AlertDialogComp {
        if (null != AlertDialogFactory._oCachedNode) {
            return AlertDialogFactory._oCachedNode.getComponent(AlertDialogComp);
        } else {
            return null;
        }
    }
}
