// @import
import ARecordXComp from "./rcd7.ARecordXComp";
import MsgBus from "../../../comm/script/MsgBus";
import MsgRecognizer from "../../../comm/script/MsgRecognizer";
import { ARecord } from "../TypeDef.ver_Record";
import { __onMsgHandler } from "../resulthandler/rcd7.__onMsgHandler";
import { mod_recordServerProtocol } from "../msg/rcd7.AllMsg";

// @const
const { ccclass } = cc._decorator;
const PAGE_SIZE = 20;

/**
 * 战绩列表窗口组件
 */
@ccclass
export default class RecordListWndComp extends cc.Component {
    /**
     * 原消息处理函数
     */
    _funOrigMsgHandler: (strMsgClazzName: string, oMsgBody: any) => void = null;

    /**
     * 用户 Id
     */
    _nUserId: number = -1;

    /**
     * 亲友圈 Id
     */
    _nClubId: number = -1;

    /**
     * 页面索引
     */
    _nPageIndex: number = -1;

    /**
     * 页数
     */
    _nPageCount: number = -1;

    /**
     * 总记录数量
     */
    _nTotalCount: number = -1;

    /**
     * 记录数组
     */
    _oRecordArray: Array<ARecord> = null;

    // /**
    //  * onLoad
    //  */
    // onLoad(): void {
    // }

    /**
     * start
     */
    start(): void {
        // 添加消息协议
        MsgRecognizer.addProtocol("record", mod_recordServerProtocol);
        
        // 注册 UI 事件
        __regUIEvent(this);

        // 消息处理
        this._funOrigMsgHandler = MsgBus.getInstance().onMsgHandler;
        __onMsgHandler(this);

        // 打开第一页
        __turnToPage(this._nUserId, this._nClubId, 0, 1);
    }

    // /**
    //  * update
    //  * 
    //  * @param nDeltaTime 变化时间
    //  */
    // update(nDeltaTime: number): void {
    // }

    /**
     * onDestroy
     */
    onDestroy(): void {
        // 还原消息处理函数
        MsgBus.getInstance().onMsgHandler = this._funOrigMsgHandler;
    }

    /**
     * 设置用户 Id
     * 
     * @param nVal 用户 Id
     * @return this 指针
     */
    putUserId(nVal: number): RecordListWndComp {
        this._nUserId = nVal;
        return this;
    }

    /**
     * 设置亲友圈 Id
     * 
     * @param nVal 整数值
     * @return this 指针
     */
    putClubId(nVal: number): RecordListWndComp {
        this._nClubId = nVal;
        return this;
    }

    /**
     * 设置页面索引
     * 
     * @param nVal 整数值
     */
    putPageIndex(nVal: number): RecordListWndComp {
        this._nPageIndex = nVal;
        return this;
    }

    /**
     * 设置总记录数量
     * 
     * @param nVal 整数值
     */
    putTotalCount(nVal: number): RecordListWndComp {
        this._nTotalCount = nVal;
        this._nPageCount = Math.round((this._nTotalCount / PAGE_SIZE) + 0.4);
        return this;
    }

    /**
     * 设置战绩数组
     * 
     * @param oRecordArray 战绩数组
     * @return this 指针
     */
    putRecordArray(oRecordArray: Array<ARecord>): RecordListWndComp {
        this._oRecordArray = oRecordArray;
        return this;
    }

    /**
     * 刷新显示
     */
    renewDisplay(): void {
        if (null == this._oRecordArray || 
            this._oRecordArray.length <= 0) {
            return;
        }

        let nIndex = 0;

        for (; nIndex < this._oRecordArray.length; nIndex++) {
            // 获取单条记录
            let oARecord = this._oRecordArray[nIndex];

            if (null == oARecord) {
                continue;
            }

            __createARecordAndShow(this, nIndex, oARecord);
        }

        for (; nIndex < PAGE_SIZE; nIndex++) {
            // 隐藏剩下的节点
            __hideARecord(this, nIndex);
        }

        cc.find("PrimeWnd/Bottom/PageBar/CurrPage", this.node)
            .getComponent(cc.Label)
            .string = (this._nPageIndex + 1) + " / " + this._nPageCount;
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 注册 UI 事件
 * 
 * @param SELF this 指针
 */
function __regUIEvent(SELF: RecordListWndComp): void {
    cc.find("PrimeWnd/Top/Button_GoBack_", SELF.node).on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            SELF.node.destroy();
        }
    );

    cc.find("PrimeWnd/Bottom/PageBar/Button_PrevPage_", SELF.node)
        .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
        if (SELF._nPageIndex - 1 < 0) {
            // 最小不能超过 0 页,
            return;
        }

        // 回到上一页
        __turnToPage(SELF._nUserId, SELF._nClubId, SELF._nPageIndex - 1, SELF._nPageCount);
    });

    cc.find("PrimeWnd/Bottom/PageBar/Button_NextPage_", SELF.node)
        .on(cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
        if ((SELF._nPageIndex + 1) > (SELF._nPageCount - 1)) {
            // 最大不能超过 pageCount - 1 页
            return;
        }

        // 前往下一页
        __turnToPage(SELF._nUserId, SELF._nClubId, SELF._nPageIndex + 1, SELF._nPageCount);
    });
}

/**
 * 翻到某一个页
 * 
 * @param nUserId 用户 Id
 * @param nClubId 亲友圈 Id
 * @param nPageIndex 页面索引
 * @param nLikelyPageCount 有可能的页面数量
 */
function __turnToPage(nUserId: number, nClubId: number, nPageIndex: number, nLikelyPageCount: number): void {
    if (nPageIndex < 0 || 
        nPageIndex > Math.max(1, nLikelyPageCount - 1)) {
        return;
    }

    MsgBus.getInstance().sendMsg(
        mod_recordServerProtocol.msg.RecordServerMsgCodeDef._GetRecordListCmd, 
        mod_recordServerProtocol.msg.GetRecordListCmd.create({ 
            userId: nUserId, 
            clubId: nClubId,
            pageIndex: nPageIndex,
            pageSize: PAGE_SIZE,
        })
    );
}

/**
 * 创建单条战绩并显示
 * 
 * @param SELF this 指针
 * @param nIndex 索引位置
 * @param oRecord 单条战绩
 */
function __createARecordAndShow(SELF: RecordListWndComp, nIndex: number, oRecord: ARecord): void {
    if (null == SELF || 
        null == oRecord) {
        return;
    }

    // 获取列表容器节点
    let oListContainerNode = cc.find("PrimeWnd/Center/ScrollView/view/content", SELF.node);

    const strNodeName = `ARecord_${nIndex}_`;
    let oThatNode = cc.find(strNodeName, oListContainerNode);

    if (null == oThatNode) {
        let oTemplateNode = cc.find("Template/ARecord", SELF.node);
        oThatNode = cc.instantiate(oTemplateNode);
        oThatNode.addComponent(ARecordXComp).onClickedDetailz = (strRoomUUId) => {
            // 获取战绩详情
            MsgBus.getInstance().sendMsg(
                mod_recordServerProtocol.msg.RecordServerMsgCodeDef._GetRecordDetailzCmd,
                mod_recordServerProtocol.msg.GetRecordDetailzCmd.create({ 
                    roomUUId: strRoomUUId, 
                })
            );
        };

        // 添加到列表容器
        oListContainerNode.addChild(oThatNode, 1, strNodeName);
    }

    oThatNode.getComponent(ARecordXComp)
        .putRecord(oRecord)
        .renewDisplay();
}

/**
 * 隐藏单条战绩
 * 
 * @param SELF this 指针
 * @param nIndex 索引
 */
function __hideARecord(SELF: RecordListWndComp, nIndex: number): void {
    if (null == SELF || 
        nIndex < 0) {
        return;
    }

    let oAMemberInfoX = cc.find(`PrimeWnd/Center/ScrollView/view/content/ARecord_${nIndex}_`, SELF.node);

    if (null != oAMemberInfoX) {
        oAMemberInfoX.active = false;
    }
}
