// @import
import CachedData from "../../../bizdata/script/CachedData";
import CachingKeyDef from "../../../bizdata/script/CachingKeyDef";
import LoadingWndFactory from "../../../comm/script/LoadingWndFactory";
import ResKeyDef from "../../../comm/script/ResKeyDef";
import SceneXLoader from "../../../comm/script/SceneXLoader";
import { mod_hallServerProtocol } from "../msg/hall.AllMsg";

/**
 * 玩法和 Bundle 字典
 */
const GAME_TYPE_X_AND_RES_MAP: { [strGameTypeX: string]: { bundleName: string, sceneName: string, } } = {
    // 麻将 - 威海麻将
    "1_1001": { 
        bundleName: "MJ_weihai_", 
        sceneName: ResKeyDef.SCENE_GAME_MJ_WEIHAI_, 
    }, 
}

/**
 * 加入房间结果
 */
type JoinRoomResult = mod_hallServerProtocol.msg.JoinRoomResult;

/**
 * 加入房间结果处理器
 */
export default class JoinRoomResultHandler {
    /**
     * 处理结果
     * 
     * @param oResult 结果对象
     */
    static handle(oResult: JoinRoomResult): void {
        if (null == oResult || 
            oResult.roomId <= 0 ||
            oResult.gameType0 <= 0 || 
            oResult.gameType1 <= 0) {
            // 隐藏加载窗口
            LoadingWndFactory.getCreatedWnd().hide();
            return;
        }

        cc.log(`加入房间, roomId = ${oResult.roomId}, gameType0 = ${oResult.gameType0}, gameType1 = ${oResult.gameType1}`);

        // 暂存规则设置
        CachedData.getInstance().set(CachingKeyDef.RULE_ITEM_ARRAY, oResult.ruleItem);

        // 获取游戏类型
        let strGameTypeX = `${oResult.gameType0}_${oResult.gameType1}`;
        // 获取游戏类型和资源
        let oGameTypeXAndRes = GAME_TYPE_X_AND_RES_MAP[strGameTypeX];

        if (null != oGameTypeXAndRes) {
            // 加载场景
            SceneXLoader.startLoad(
                oGameTypeXAndRes.bundleName,
                oGameTypeXAndRes.sceneName
            );
        }
    }
}
