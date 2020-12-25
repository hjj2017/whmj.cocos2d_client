//#region @import
import ErrorHintComp from "./ErrorHintComp";
//#endregion

/**
 * 错误提示工厂类
 */
export default class ErrorHintFactory {
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

        ErrorHintFactory._oCachedNode = oDialogNode;
        cc.game.addPersistRootNode(oDialogNode);

        if (null == oDialogNode.getComponent(ErrorHintComp)) {
            oDialogNode.addComponent(ErrorHintComp);
        }
    }

    /**
     * 获取已经创建的错误提示组件
     * 
     * @return 错误提示组件
     */
    static getCreatedHint(): ErrorHintComp {
        if (null != ErrorHintFactory._oCachedNode) {
             return ErrorHintFactory._oCachedNode.getComponent(ErrorHintComp);
        } else {
             return null;
        }
    }
}
