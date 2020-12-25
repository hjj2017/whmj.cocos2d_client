// @import
import OutParam from "./OutParam";
import { mod_commProtocol } from "./msg/comm.AllMsg";

// 协议数组
const g_oProtocolMap = {
    "Cs1B4rnK472w98YYy1VTr6Me_comm": mod_commProtocol,
};

/**
 * 消息识别器
 */
export default class MsgRecognizer {
    /**
     * 私有化类默认构造器
     */
    private constructor() {
    }

    /**
     * 添加协议
     * 
     * @param strName 协议名称
     * @param oProtocol 协议
     */
    static addProtocol(strName: string, oProtocol: any): void {
        if (null == strName ||
            null == oProtocol) {
            return;
        }

        g_oProtocolMap[strName] = oProtocol;
    }

    /**
     * 根据名称移除协议
     * 
     * @param strName 协议名称
     */
    static removeProtocolByName(strName: string): void {
        if (null != strName) {
            delete g_oProtocolMap[strName];
        }
    }

    /**
     * 根据消息编码获取消息类
     * 
     * @param nMsgCode 消息编码
     * @param out_oMsgClazzName ( 输出参数 ) 消息类名称
     * @return 消息类
     */
    static getMsgClazzByMsgCode(nMsgCode: number, out_oMsgClazzName: OutParam<string>): any {
        if ("number" != typeof(nMsgCode) || 
            nMsgCode <= 0) {
            return null;
        }

        // 获取协议
        let oProtocol = __getProtocolByMsgCode(nMsgCode);

        if (null == oProtocol) {
            cc.warn(`无法找到消息所属协议, msgCode = ${nMsgCode}`);
            return null;
        }

        // 获取消息类名称
        let strMsgClazzName = oProtocol.msgCodeDef[nMsgCode];

        if (null == strMsgClazzName) {
            return null;
        }

        strMsgClazzName = strMsgClazzName.substring(1);

        if (null != out_oMsgClazzName) {
            out_oMsgClazzName.put(strMsgClazzName);
        }

        return oProtocol.msg[strMsgClazzName];
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 根据消息编码获取协议
 * 
 * @param nMsgCode 消息编号
 * @param 协议对象
 */
function __getProtocolByMsgCode(nMsgCode: number): any {
    if (nMsgCode <= 0) {
        return null;
    }

    for (let strKey in g_oProtocolMap) {
        // 使用协议
        const oCurrProtocol = g_oProtocolMap[strKey];

        if (null != oCurrProtocol &&
            null != oCurrProtocol["msgCodeDef"][nMsgCode]) {
            return oCurrProtocol;
        }
    }

    return null;
}
