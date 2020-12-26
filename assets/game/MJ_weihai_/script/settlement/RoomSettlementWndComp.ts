//#region @import
import DateTimeUtil from "../../../../comm/script/DateTimeUtil";
import HeadImgLoader from "../../../../comm/script/HeadImgLoader";
//#endregion

// @const
const { ccclass } = cc._decorator;
const HTML_CLOSE_IMG = "http://cdn0001.afrxvk.cn/whmj/h5/foo/Button_CloseShareWnd__2x.png";

/**
 * 结算条目
 */
type SettlementItem = {
    /** 用户 Id */
    userId: number,
    /** 用户名称 */
    userName: string,
    /** 头像 */
    headImg: string, 
    /** 服务端座位索引 */
    seatIndexAtServer: number,
    /** 房主标志 */
    roomOwnerFlag: boolean,
    /** 坐庄次数 */
    zuoZhuangTimez: number,
    /** 自摸次数 */
    ziMoTimez: number,
    /** 点炮次数 */
    dianPaoTimez: number,
    /** 胡牌次数 */
    huPaiTimez: number,
    /** 总分数 */
    totalScore: number,
    /** 大赢家 */
    bigWinner: boolean,
}

/**
 * 房间结算窗口组件
 */
@ccclass
export default class RoomSettlementWndComp extends cc.Component {
    /**
     * 房间 Id
     */
    private _nRoomId: number = -1;

    /**
     * 房间创建时间
     */
    private _nRoomCreateTime: number = -1;

    /**
     * 玩法说明
     */
    private _strPlayMethodDesc: string = "";

    /**
     * 结算玩家数组
     */
    private _oSettlementItemArray: Array<SettlementItem> = null;

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
     * 设置房间 Id
     * 
     * @param nVal 
     * @return this 指针
     */
    putRoomId(nVal: number): RoomSettlementWndComp {
        this._nRoomId = nVal;
        return this;
    }

    /**
     * 设置房间创建时间
     * 
     * @param nVal 房间创建时间
     */
    putRoomCreateTime(nVal: number): RoomSettlementWndComp {
        this._nRoomCreateTime = nVal;
        return this;
    }

    /**
     * 设置玩法说明
     * 
     * @param strVal 字符串值
     * @return this 指针
     */
    putPlayMethodDesc(strVal: string): RoomSettlementWndComp {
        this._strPlayMethodDesc = strVal;
        return this;
    }

    /**
     * 设置结算条目数组
     * 
     * @param oVal 结算条目数组
     * @return this 指针
     */
    putSettlementItemArray(oVal: Array<SettlementItem>): RoomSettlementWndComp {
        this._oSettlementItemArray = oVal;
        return this;
    }

    /**
     * 刷新显示
     */
    renewDisplay(): void {
        // 房间 Id
        cc.find("PrimeWnd/Top/RoomIdArea/CurrRoomId", this.node)
            .getComponent(cc.Label)
            .string = "房" + this._nRoomId;

        // 房间创建时间
        cc.find("PrimeWnd/Top/RoomIdArea/RoomCreateTime", this.node)
            .getComponent(cc.Label)
            .string = DateTimeUtil.getYYYYMMddHHmmzzStr(this._nRoomCreateTime);

        // 玩法说明
        cc.find("PrimeWnd/Center/PlayMethodDesc", this.node)
            .getComponent(cc.Label)
            .string = this._strPlayMethodDesc;

        for (let oSettlementItem of this._oSettlementItemArray) {
            if (null == oSettlementItem) {
                continue;
            }

            let oItemXNode = cc.find(`PrimeWnd/Center/TranscriptArea/Item_${oSettlementItem.seatIndexAtServer}_`, this.node);

            if (null == oItemXNode) {
                continue;
            }

            oItemXNode.active = true;

            HeadImgLoader.loadAndShow(
                cc.find("PlayerInfoArea/HeadJPG", oItemXNode),
                oSettlementItem.headImg
            );

            // 用户名称
            cc.find("PlayerInfoArea/UserName", oItemXNode)
                .getComponent(cc.Label)
                .string = oSettlementItem.userName;

            // 用户 Id
            cc.find("PlayerInfoArea/UserId", oItemXNode)
                .getComponent(cc.Label)
                .string = "ID：" + oSettlementItem.userId;

            // 设置房主标志
            cc.find("PlayerInfoArea/RoomOwnerFlag", oItemXNode).active = oSettlementItem.roomOwnerFlag;

            // 坐庄次数
            cc.find("ZuoZhuang/Val", oItemXNode)
                .getComponent(cc.Label)
                .string = oSettlementItem.zuoZhuangTimez.toString();

            // 胡牌次数
            cc.find("HuPai/Val", oItemXNode)
                .getComponent(cc.Label)
                .string = oSettlementItem.huPaiTimez.toString();

            // 自摸次数
            cc.find("ZiMo/Val", oItemXNode)
                .getComponent(cc.Label)
                .string = oSettlementItem.ziMoTimez.toString();

            // 点炮次数
            cc.find("DianPao/Val", oItemXNode)
                .getComponent(cc.Label)
                .string = oSettlementItem.dianPaoTimez.toString();

            // 总分
            cc.find("TotalScoreVal", oItemXNode)
                .getComponent(cc.Label)
                .string = oSettlementItem.totalScore.toString();

            if (oSettlementItem.totalScore > 0) {
                cc.find("BG_0_", oItemXNode).active = false;
                cc.find("BG_1_", oItemXNode).active = true;
                cc.find("TotalScoreKey", oItemXNode).color = cc.Color.WHITE;
                cc.find("TotalScoreVal", oItemXNode).color = cc.Color.WHITE;
            }

            // 显示大赢家
            cc.find("DaYingJia", oItemXNode).active = oSettlementItem.bigWinner;
        }
    }

    /**
     * 回退事件
     */
    onBackward(): void {
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 注册 UI 事件
 * 
 * @param SELF this 指针
 */
function __regUIEvent(SELF: RoomSettlementWndComp): void {
    if (null == SELF) {
        return;
    }

    // 添加返回按钮事件
    cc.find("PrimeWnd/Top/Button_Back_", SELF.node).on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            if ("function" == typeof(SELF.onBackward)) {
                // 执行返回逻辑
                SELF.onBackward();
            }
        }
    );

    // 战绩分享
    cc.find("PrimeWnd/Bottom/Button_RoomResultShare_", SELF.node).on(
        cc.Node.EventType.TOUCH_END, (/*oEvent*/) => {
            if (cc.sys.isBrowser) {
                // 创建 HTML 图片
                __createHTMLImgElement(SELF);
            }
        }
    );
}

/**
 * 创建 HTML 的 img 标记, 
 * 目的是让用户可以分享到微信或者其他 IM 工具
 * 
 * @param SELF 
 */
function __createHTMLImgElement(SELF: RoomSettlementWndComp): void {
    if (null == SELF) {
        return;
    }

    // 隐藏功能按钮
    cc.find("PrimeWnd/Top/Button_Back_", SELF.node).active = false;
    cc.find("PrimeWnd/Bottom/Button_RoomResultShare_", SELF.node).active = false;

    // 获取临时的摄像机
    let oTempCamera = cc.find("TempCamera", SELF.node)
        .getComponent(cc.Camera);

    let oTempTexture = new cc.RenderTexture();
    oTempTexture.initWithSize(oTempCamera.node.width, oTempCamera.node.height);

    // 重制目标纹理并执行渲染
    oTempCamera.targetTexture = oTempTexture;
    oTempCamera.render();

    let oData = oTempTexture.readPixels();

    // 创建 HTML 画布
    let oHTMLCanvas = document.createElement("canvas");
    let oCtx = oHTMLCanvas.getContext("2d");
    oHTMLCanvas.width = oTempTexture.width;
    oHTMLCanvas.height = oTempTexture.height;

    let nRowByteCount = oHTMLCanvas.width * 4;

    for (let nRow0 = 0; nRow0 < oHTMLCanvas.height; nRow0++) {
        let nRow1 = oHTMLCanvas.height - 1 - nRow0;
        let oImgData = oCtx.createImageData(oHTMLCanvas.width, 1);
        let nStart = nRow1 * oHTMLCanvas.width * 4;

        for (let nI = 0; nI < nRowByteCount; nI++) {
            oImgData.data[nI] = oData[nStart + nI];
        }

        oCtx.putImageData(oImgData, 0, nRow0);
    }

    let strImgURL = oHTMLCanvas.toDataURL("image/jpeg");
    let oImg0 = document.createElement("img");
    oImg0.src = strImgURL;
    // 设置样式
    oImg0.style.display = "block";
    oImg0.style.position = "absolute";
    oImg0.style.top = "0";
    oImg0.style.bottom = "0";
    oImg0.style.left = "0";
    oImg0.style.right = "0";
    oImg0.style.width = "100%";
    oImg0.style.height = "100%";
    oImg0.style.zIndex = "8192";

    // 文字提示
    let oDiv0 = document.createElement("div");
    oDiv0.innerText = "点击图片，长按两秒分享给好友";
    // 设置样式
    oDiv0.style.display = "block";
    oDiv0.style.position = "absolute";
    oDiv0.style.bottom = "16pt";
    oDiv0.style.left = "12pt";
    oDiv0.style.color = "#ffffff";
    oDiv0.style.fontSize = "16pt";
    oDiv0.style.zIndex = "8194";

    // 创建关闭按钮
    let oImg1 = document.createElement("img");
    oImg1.src = HTML_CLOSE_IMG;
    // 设置样式
    oImg1.style.display = "block";
    oImg1.style.position = "absolute";
    oImg1.style.bottom = "10pt";
    oImg1.style.right = "12pt";
    oImg1.style.width = "48pt";
    oImg1.style.height = "48pt";
    oImg1.style.zIndex = "8193";

    // 获取游戏容器节点
    let oGameContainerElem = document.getElementById("Cocos2dGameContainer");

    // 添加点击事件
    oImg1.onclick = () => {
        oGameContainerElem.removeChild(oDiv0);
        oGameContainerElem.removeChild(oImg1);
        oGameContainerElem.removeChild(oImg0);
    };

    // 添加节点
    oGameContainerElem.appendChild(oImg0);
    oGameContainerElem.appendChild(oImg1);
    oGameContainerElem.appendChild(oDiv0);

    // 打开功能按钮
    cc.find("PrimeWnd/Top/Button_Back_", SELF.node).active = true;
    cc.find("PrimeWnd/Bottom/Button_RoomResultShare_", SELF.node).active = true;
}
