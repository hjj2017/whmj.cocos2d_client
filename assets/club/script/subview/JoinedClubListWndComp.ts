// @import
import CreateClubDialogComp from "./CreateClubDialogComp";
import CreateClubDialogFactory from "./CreateClubDialogFactory";
import HeadImgLoader from "../../../comm/script/HeadImgLoader";
import JoinClubDialogComp from "./JoinClubDialogComp";
import JoinClubDialogFactory from "./JoinClubDialogFactory";
import MsgBus from "../../../comm/script/MsgBus";
import ResKeyDef from "../../../comm/script/ResKeyDef";
import { mod_clubServerProtocol } from "../msg/AllMsg.ver_Club";

// @const
const { ccclass } = cc._decorator;

/**
 * 已经加入的亲友圈
 */
type JoinedClub = {
    /** 亲友圈 Id */
    clubId?: number,
    /** 亲友圈名称 */
    clubName?: string,
    /** 创建人 Id */
    creatorId?: number,
    /** 创建人名称 */
    creatorName?: string,
    /** 创建人头像 */
    creatorHeadImg?: string,
    /** 亲友圈人数 */
    numOfPeople?: number,
    /** 游戏中的数量 */
    numOfGaming?: number,
    /** 等待中的数量 */
    numOfWaiting?: number,
};

/**
 * 已经加入的亲友圈列表窗口
 */
@ccclass
export default class JoinedClubListWndComp extends cc.Component {
    /**
     * 已经加入的亲友圈列表
     */
    private _oJoinedClubList: Array<JoinedClub> = null;

    // /**
    //  * onLoad
    //  */
    // onLoad(): void {
    // }

    /**
     * start
     */
    start(): void {
        // 注册 UI 事件
        __regUIEvent(this);
    }

    // /**
    //  * update
    //  * 
    //  * @param nDeltaTime 变化时间
    //  */
    // update(nDeltaTime: number): void {
    // }

    /**
     * 设置已经加入的亲友圈列表
     * 
     * @param oVal 已经加入的亲友圈列表
     * @rturn this 指针
     */
    putJoinedClubList(oVal: Array<JoinedClub>): JoinedClubListWndComp {
        this._oJoinedClubList = oVal;
        return this;
    }

    /**
     * 刷新显示
     */
    renewDisplay(): void {
        if (null == this._oJoinedClubList || 
            this._oJoinedClubList.length <= 0) {
            cc.find("Center/ScrollView", this.node).active = false;
            cc.find("Center/EmptyClubHint", this.node).active = true;
            return;
        }

        // 获取容器节点
        let oContainerNode = cc.find("Center/ScrollView/view/JoinedClubArray", this.node);
        oContainerNode.removeAllChildren();

        for (let oJoined of this._oJoinedClubList) {
            if (null == oJoined) {
                continue;
            }

            // 创建已经加入的亲友圈视图
            let oNewNode = __createJoinedClubView(this, oJoined);

            if (null != oNewNode) {
                oContainerNode.addChild(oNewNode);
            }
        }

        oContainerNode.active = true;
        cc.find("Center/EmptyClubHint", this.node).active = false;
    }

    /**
     * 当进入亲友圈
     * 
     * @param nClubId 亲友圈 Id
     */
    onEntryClub(nClubId: number): void {
        if (nClubId <= 0) {
            return;
        }
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 注册 UI 事件
 * 
 * @param SELF this 指针
 */
function __regUIEvent(SELF: JoinedClubListWndComp): void {
    // 返回
    cc.find("Top/Button_Back_", SELF.node)
        .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
        // 返回大厅
        cc.director.loadScene(ResKeyDef.SCENE_HALL);
        return;
    });

    // 创建亲友圈
    cc.find("Bottom/Button_CreateClub_", SELF.node)
        .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {

        CreateClubDialogFactory.createAsync((oDialogNode) => {
            if (null == oDialogNode) {
                return;
            }

            SELF.node.addChild(oDialogNode);
            oDialogNode.getComponent(CreateClubDialogComp).onCreateClub = (strClubName) => {
                if (null == strClubName || 
                    "" == strClubName) {
                    cc.error("亲友圈名称为空");
                    return;
                }

                MsgBus.getInstance().sendMsg(
                    mod_clubServerProtocol.msg.ClubServerMsgCodeDef._CreateClubCmd, 
                    mod_clubServerProtocol.msg.CreateClubCmd.create({
                        clubName: strClubName,
                    })
                );

                // 销毁对话框
                oDialogNode.destroy();
            };
        });
    });

    // 加入亲友圈对话框
    cc.find("Bottom/Button_JoinClub_", SELF.node).on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
        JoinClubDialogFactory.createAsync((oDialogNode) => {
            if (null == oDialogNode) {
                return;
            }

            oDialogNode.getComponent(JoinClubDialogComp)
                .onJoinClub = (nClubId) => {
                // 发送加入亲友圈消息
                MsgBus.getInstance().sendMsg(
                    mod_clubServerProtocol.msg.ClubServerMsgCodeDef._JoinClubCmd,
                    mod_clubServerProtocol.msg.JoinClubCmd.create({
                        clubId: nClubId,
                    })
                );
            }

            SELF.node.addChild(oDialogNode);
        });
    });
}

/**
 * 创建已经加入的亲友圈视图
 * 
 * @param SELF this 指针
 * @param oJoinedClub 已经加入的亲友圈
 * @return Cocos 节点
 */
function __createJoinedClubView(SELF: JoinedClubListWndComp, oJoinedClub: JoinedClub): cc.Node {
    if (null == SELF || 
        null == oJoinedClub) {
        return null;
    }

    let oX = cc.find("Template/JoinedClub_X_", SELF.node);
    let oNewNode = cc.instantiate(oX);

    // 加载并显示头像
    HeadImgLoader.loadAndShow(
        cc.find("HeadImgArea/CreatorHeadImg", oNewNode), 
        oJoinedClub.creatorHeadImg
    );

    // 亲友圈名称
    cc.find("InfoArea/ClubNameAndCreatorName/ClubName", oNewNode)
        .getComponent(cc.Label)
        .string = oJoinedClub.clubName;

    // 创建人名称
    cc.find("InfoArea/ClubNameAndCreatorName/CreatorName", oNewNode)
        .getComponent(cc.Label)
        .string = `( 圈主: ${oJoinedClub.creatorName} )`;

    // 亲友圈 Id
    cc.find("InfoArea/ClubId", oNewNode)
        .getComponent(cc.Label)
        .string = "ID: " + oJoinedClub.clubId;

    // 亲友圈人数
    cc.find("InfoArea/NumOfPeople", oNewNode)
        .getComponent(cc.Label)
        .string = "人数: " + Math.max(0, oJoinedClub.numOfPeople);

    // 游戏中的数量
    cc.find("InfoArea/NumOfGaming", oNewNode)
        .getComponent(cc.Label)
        .string = "游戏中: " + Math.max(0, oJoinedClub.numOfGaming);

    // 等待中的数量
    cc.find("InfoArea/NumOfWaiting", oNewNode)
        .getComponent(cc.Label)
        .string = "等待中: " + Math.max(0, oJoinedClub.numOfWaiting);

    // 进入亲友圈按钮点击事件
    cc.find("ButtonArea/Button_EntryClub_", oNewNode)
        .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
        if (null != SELF.onEntryClub) {
            SELF.onEntryClub(oJoinedClub.clubId);
        }
    });

    return oNewNode;
}
