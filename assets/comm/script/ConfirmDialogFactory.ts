// @import
import ConfirmDialogComp from "./ConfirmDialogComp";

/**
 * 确认对话框工厂类
 */
export default class ConfirmDialogFactory {
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

        ConfirmDialogFactory._oCachedNode = oDialogNode;
        cc.game.addPersistRootNode(oDialogNode);

        if (null == oDialogNode.getComponent(ConfirmDialogComp)) {
            oDialogNode.addComponent(ConfirmDialogComp);
        }
    }

    /**
     * 获取已经创建的选择对话框组件
     * 
     * @return 选择对话框组件
     */
    static getCreatedDialog(): ConfirmDialogComp {
        if (null != ConfirmDialogFactory._oCachedNode) {
            return ConfirmDialogFactory._oCachedNode.getComponent(ConfirmDialogComp);
        } else {
            return null;
        }
    }
}
