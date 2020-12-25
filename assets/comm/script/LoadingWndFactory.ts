// @import
import LoadingWndComp from "./LoadingWndComp";

/**
 * 加载窗口
 */
export default class LoadingWndFactory {
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
     * @param oWndNode 窗口节点
     */
    static initByNode(oWndNode: cc.Node): void {
        if (null == oWndNode) {
            return;
        }

        LoadingWndFactory._oCachedNode = oWndNode;
        cc.game.addPersistRootNode(oWndNode);

        if (null == oWndNode.getComponent(LoadingWndComp)) {
            oWndNode.addComponent(LoadingWndComp);
        }
    }

    /**
     * 设置当前进度
     * 
     * @param nVal 进度值
     */
    putCurrProgress(nVal: number): LoadingWndFactory {
        LoadingWndFactory._oCachedNode.getComponent(LoadingWndComp).putCurrProgress(nVal);
        return this;
    }

    /**
     * 获取已经创建的窗口组件
     * 
     * @return 已经创建的窗口组件
     */
    static getCreatedWnd(): LoadingWndComp {
        if (null != LoadingWndFactory._oCachedNode) {
            return LoadingWndFactory._oCachedNode.getComponent(LoadingWndComp);
        } else {
            return null;
        }
    }
}
