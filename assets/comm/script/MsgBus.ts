// @import
import DateTimeUtil from "./DateTimeUtil";
import MsgRecognizer from "./MsgRecognizer";
import OutParam from "./OutParam";
import mod_protobufjs = require("./protobufjs/minimal");

/**
 * 消息总线
 */
export default class MsgBus {
    /**
     * 单例对象
     */
    static readonly _oInstance: MsgBus = new MsgBus();

    /**
     * 服务器地址
     */
    _strServerAddr: string = "127.0.0.1:10240";

    /**
     * 使用加密方式
     */
    _bUseSSL: boolean = true;

    /**
     * WebSocket
     */
    _oWebSocket: WebSocket = null;

    /**
     * 连接尝试次数
     */
    _nConnTryCount: number = 0;
    
    /**
     * 消息队列
     */
    _oMsgQ: Array<{ msgClazzName: string, msgBody: any, }> = [];

    /**
     * 类默认构造器
     */
    private constructor() {
        if (null != MsgBus._oInstance) {
            throw new Error("该类为单例类");
        }
    }

    /**
     * 获取单例对象
     * 
     * @return 单例对象
     */
    static getInstance(): MsgBus {
        return this._oInstance;
    }

    /**
     * 设置服务器地址
     * 
     * @param strVal 字符串值
     */
    putServerAddr(strVal: string): MsgBus {
        this._strServerAddr = strVal;
        return this;
    }

    /**
     * 设置使用 SSL
     * 
     * @param bVal 布尔值
     */
    putUseSSL(bVal: boolean): MsgBus {
        this._bUseSSL = bVal;
        return this;
    }

    /**
     * 获取连接尝试次数
     */
    getConnTryCount(): number {
        return this._nConnTryCount;
    }

    /**
     * 是否已经准备好
     * 
     * @return true = 已经准备好, false = 未准备好
     */
    isReady(): boolean {
        return null != this._oWebSocket;
    }

    /**
     * 尝试初始化
     */
    tryInit(): { onOpen?: () => void, onError?: () => void, } {
        if (null != this._oWebSocket) {
            return null;
        }

        let oFuture = { 
            onOpen: null, onError: null, 
        };

        ++this._nConnTryCount;

        // 服务器地址
        let strServerAddr: string;

        if (this._bUseSSL) {
            strServerAddr = `wss://${this._strServerAddr}/websocket`;
        } else {
            strServerAddr = `ws://${this._strServerAddr}/websocket`;
        }

        let oWS = new WebSocket(strServerAddr);
        oWS.binaryType = "arraybuffer";

        const SELF = this;

        cc.log(`准备连接服务器, serverAddr = ${strServerAddr}`);

        // open
        oWS.onopen = () => {
            let strCurrTime = DateTimeUtil.getYYYYMMddHHmmzzStr(Date.now());
            cc.log(`已经连接到服务器, currTime = ${strCurrTime}, serverAddr = ${strServerAddr}`);
            SELF._oWebSocket = oWS;
            SELF._nConnTryCount = 0;

            if ("onOpen" in oFuture && 
                "function" == typeof(oFuture["onOpen"])) {
                oFuture["onOpen"]();
            }
        };

        // error
        oWS.onerror = () => {
            cc.error(`连接服务器失败, serverAddr = ${strServerAddr}`);
            SELF._oWebSocket = null;

            if ("onError" in oFuture && 
                "function" == typeof(oFuture["onError"])) {
                oFuture["onError"]();
            }
        };

        // close
        oWS.onclose = () => {
            let strCurrTime = DateTimeUtil.getYYYYMMddHHmmzzStr(Date.now());
            cc.warn(`服务器连接已关闭, currTime = ${strCurrTime}`);
            SELF._oWebSocket = null;
        }

        // message
        oWS.onmessage = (oEvent: MessageEvent) => {
            // 消息名称输出参数
            let out_oMsgClazzName = new OutParam<string>();
            // 反序列化为消息体
            let oMsgBody = __makeMsgBody(new Uint8Array(oEvent.data), out_oMsgClazzName);

            if ("object" != typeof(oMsgBody)) {
                return;
            }

            cc.log(`从服务器端返回数据, msgClazz = ${out_oMsgClazzName.get()}`);

            // 将消息加入队列
            SELF._oMsgQ.push({
                msgClazzName: out_oMsgClazzName.get(),
                msgBody: oMsgBody,
            });
        }

        return oFuture;
    }

    /**
     * 发送消息
     * 
     * @param nMsgCode 消息代号
     * @param oMsgBody 消息体
     */
    sendMsg(nMsgCode: number, oMsgBody: any): void {
        if ("object" != typeof(oMsgBody) || 
            null == this._oWebSocket) {
            return;
        }

        // 序列化为字节数组
        let oUint8Array = __makeUint8Array(nMsgCode, oMsgBody);

        if (null == oUint8Array || 
            oUint8Array.byteLength <= 0) {
            return;
        }

        // 获取消息类名称
        let out_oMsgClazzName = new OutParam<string>();
        MsgRecognizer.getMsgClazzByMsgCode(nMsgCode, out_oMsgClazzName);

        cc.log(`发送消息, msgClazz = ${out_oMsgClazzName.get()}`);

        // 发送字节数组
        this._oWebSocket.send(oUint8Array);
    }

    /**
     * 获取消息队列长度
     * 
     * @return 消息队列长度
     */
    getMsgQLen(): number {
        return this._oMsgQ.length;
    }

    /**
     * 取出一个消息
     * 
     * @return 消息包装对象
     */
    doMsgQShift(): { msgClazzName: string, msgBody: any, } {
        return this._oMsgQ.shift();
    }

    /**
     * 当收到消息, 需要被覆盖
     * 
     * @param strMsgClazzName 消息类名称
     * @param oMsgBody 消息体
     */
    onMsgHandler(strMsgClazzName: string, oMsgBody: any): void {
        if (null == strMsgClazzName || 
            null == oMsgBody) {
            return;
        }
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 将消息对象序列化为字节数组
 * 
 * @param nMsgCode 消息代号
 * @param oMsgBody 消息体
 * @return 字节数组
 */
function __makeUint8Array(nMsgCode: number, oMsgBody: any): Uint8Array {
    if (null == oMsgBody) {
        return null;
    }

    if (nMsgCode <= 0) {
        return null;
    }

    // 创建输出流
    let oWriter = mod_protobufjs.Writer.create();

    // 消息长度和编号, 先用 0 占位
    oWriter.bytes(0);
    oWriter.bytes(0);
    oWriter.bytes(0);
    oWriter.bytes(0);

    // 编码为字节数组
    let oByteArray = oMsgBody.constructor.encode(
        oMsgBody, oWriter
    ).finish();

    // 消息长度,
    // 减 2 是要扣除上面两个 0 占位
    let nMsgLen = oByteArray.byteLength - 2;

    oByteArray[0] = nMsgLen >> 8 & 0xff;
    oByteArray[1] = nMsgLen & 0xff;
    oByteArray[2] = (nMsgCode >> 8) & 0xff;
    oByteArray[3] = (nMsgCode & 0xff);

    return oByteArray;
}

/**
 * 将字节数组反序列化为消息对象
 * 
 * @param oByteArray 字节数组
 * @param out_oMsgClazzName 消息类名称
 */
function __makeMsgBody(oByteArray: Uint8Array, out_oMsgClazzName: OutParam<string>): any {
    if (!oByteArray || 
        !oByteArray.byteLength) {
        return null;
    }

    // 获取消息编码
    let nMsgCode = (oByteArray[2] & 0xFF) << 8
        | (oByteArray[3] & 0xFF);

    // 获取消息类
    let oMsgClazz = MsgRecognizer.getMsgClazzByMsgCode(
        nMsgCode, 
        out_oMsgClazzName
    );

    if (null == oMsgClazz) {
        return null;
    }

    return oMsgClazz.decode(oByteArray.subarray(4));
}
