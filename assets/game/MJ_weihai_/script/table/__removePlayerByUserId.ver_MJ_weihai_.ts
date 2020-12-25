// @import
import MahjongTableComp from "./MahjongTableComp";
import PlayerInfoPaneComp from "./PlayerInfoPaneComp";

/**
 * 根据用户 Id 移除一个玩家
 * 
 * @param SELF this 指针
 * @param nUserId 用户 Id
 */
export function __removePlayerByUserId(SELF: MahjongTableComp, nUserId: number): void {
    if (null == SELF || 
        nUserId <= 0) {
        return;
    }

    for (let nTempIndex: number = 0; nTempIndex <= 3; nTempIndex++) {
        // 获取玩家信息节点
        let oPlayerInfoNode = cc.find(`Seat_${nTempIndex}_/PlayerInfoArea`, SELF.node);

        if (null == oPlayerInfoNode) {
            continue;
        }

        let oThatComp = oPlayerInfoNode.getComponentInChildren(PlayerInfoPaneComp);

        if (null == oThatComp || 
            null == oThatComp._oPlayerData || 
            oThatComp._oPlayerData.userId != nUserId) {
            continue;
        }

        // 销毁节点并从字典中移除该玩家
        oThatComp.node.destroy();
        delete SELF._oPlayerDataMap[nUserId];

        let oWaiting4UserNode = cc.find(
            `Seat_${nTempIndex}_/PlayerInfoArea/Waiting4User`, 
            SELF.node
        );
    
        if (null != oWaiting4UserNode) {
            oWaiting4UserNode.active = true;
        }
    }
}
