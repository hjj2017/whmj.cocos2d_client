// @import
import DissolveRoomVoteDialogComp from "./DissolveRoomVoteDialogComp.ver_MJ_weihai_";
import ModConfig from "../ModConfig.ver_MJ_weihai_";
import PrefabXFactory from "../../../../comm/script/PrefabXFactory";

// @const
// 预制体名称
const PREFAB_NAME = "res/1/prefab/DissolveRoomVoteDialog";

/**
 * 解散房间投票对话框工厂类
 */
export default class DissolveRoomVoteDialogFactory {
    /**
     * 私有化类默认构造器
     */
    private constructor() {
    }

    /**
     * ( 异步方式 ) 创建解散房间投票对话框
     * 
     * @param funCallback 回调函数
     */
    static createAsync(funCallback: (oNewDialog: cc.Node) => void): void {
        PrefabXFactory.createAsync(ModConfig.BUNDLE_NAME, PREFAB_NAME, DissolveRoomVoteDialogComp, funCallback);
    }
}
