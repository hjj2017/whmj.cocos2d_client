// @import
import mod_qrcode = require("../../../comm/script/qrcode/qrcode");

// @const
const { ccclass } = cc._decorator;
const HTML_CLOSE_IMG = "http://cdn0001.afrxvk.cn/whmj/h5/foo/Button_CloseShareWnd__2x.png";

/**
 * 说明
 */
@ccclass
export default class ShareAppDialogComp extends cc.Component {
    /**
     * 标题
     */
    _strCaption: string = null;

    /**
     * 说明
     */
    _strDesc: string = null;

    /**
     * 链接地址
     */
    _strLinkAddr: string = null;

    // /**
    //  * onLoad
    //  */
    // onLoad(): void {
    // }

    // /**
    //  * start
    //  */
    // start(): void {
    // }

    // /**
    //  * update
    //  * 
    //  * @param nDeltaTime 变化时间
    //  */
    // update(nDeltaTime: number): void {
    // }

    /**
     * 设置标题
     * 
     * @param strVal 字符串值
     */
    putCaption(strVal: string): ShareAppDialogComp {
        this._strCaption = strVal;
        return this;
    }

    /**
     * 设置说明
     * 
     * @param strVal 字符串值
     */
    putDesc(strVal: string): ShareAppDialogComp {
        this._strDesc = strVal;
        return this;
    }

    /**
     * 设置链接地址
     * 
     * @param strVal 字符串值
     */
    putLinkAddr(strVal: string): ShareAppDialogComp {
        this._strLinkAddr = strVal;
        return this;
    }

    /**
     * 刷新显示
     */
    renewDisplay(): void {
        cc.find("PrimeDialog/Center/Caption", this.node)
            .getComponent(cc.Label)
            .string = this._strCaption;

        cc.find("PrimeDialog/Center/Desc", this.node)
            .getComponent(cc.Label)
            .string = this._strDesc;

        // 创建二维码
        __createQRCode(this);

        if (cc.sys.isBrowser) {
            __createHTMLImgElement(this);
        }
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 创建二维码
 * 
 * @param SELF this 指针
 */
function __createQRCode(SELF: ShareAppDialogComp): void {
    if (null == SELF || 
        null == SELF._strLinkAddr) {
        return;
    }

    let qrCode = mod_qrcode.QRCode(-1, "H");
    qrCode.addData(SELF._strLinkAddr);
    qrCode.make();

    let oG = cc.find("PrimeDialog/Center/QRCodeArea/QRCode", SELF.node)
        .getComponent(cc.Graphics);

    oG.fillColor = cc.Color.BLACK;

    //块宽高
    var tileW = oG.node.width / qrCode.getModuleCount();
    var tileH = oG.node.height / qrCode.getModuleCount();

    for (var nRow = 0; nRow < qrCode.getModuleCount(); nRow++) {
        for (var nCol = 0; nCol < qrCode.getModuleCount(); nCol++) {
            if (!qrCode.isDark(nRow, nCol)) {
                continue;
            }

            var w = (Math.ceil((nCol + 1) * tileW) - Math.floor(nCol * tileW));
            var h = (Math.ceil((nRow + 1) * tileW) - Math.floor(nRow * tileW));
            oG.rect(Math.round(nCol * tileW), Math.round(nRow * tileH), w, h);
            oG.fill();
        }
    }
}

/**
 * 创建 HTML 的 img 标记, 
 * 目的是让用户可以分享到微信或者其他 IM 工具
 * 
 * @param SELF this 指针
 */
function __createHTMLImgElement(SELF: ShareAppDialogComp): void {
    if (null == SELF) {
        return;
    }

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
    oImg0.style.zIndex = "2048";

    // 创建关闭按钮
    let oImg1 = document.createElement("img");
    oImg1.src = HTML_CLOSE_IMG;
    // 设置样式
    oImg1.style.display = "block";
    oImg1.style.position = "absolute";
    oImg1.style.top = "8pt";
    oImg1.style.right = "12pt";
    oImg1.style.width = "40pt";
    oImg1.style.height = "40pt";
    oImg1.style.zIndex = "2049";

    // 获取游戏容器节点
    let oGameContainerElem = document.getElementById("Cocos2dGameContainer");

    // 添加点击事件
    oImg1.onclick = () => {
        oGameContainerElem.removeChild(oImg1);
        oGameContainerElem.removeChild(oImg0);
    };

    // 添加节点
    oGameContainerElem.appendChild(oImg0);
    oGameContainerElem.appendChild(oImg1);

    SELF.scheduleOnce(() => {
        SELF.node.destroy();
    }, 0.2);
}
