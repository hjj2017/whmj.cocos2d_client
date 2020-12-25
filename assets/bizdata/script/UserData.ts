/**
 * 我的数据
 */
let g_oMyData: UserData = null;

/**
 * 内置字典
 */
let g_oInnerMap: { [nUserId: number]: UserData } = {};

/**
 * 用户数据
 */
export default class UserData {
    /**
     * 用户 Id
     */
    private _nUserId: number = -1;

    /**
     * 用户名称
     */
    private _strUserName: string = "";

    /**
     * 头像
     */
    private _strHeadImg: string = "";

    /**
     * 性别, -1 = 未知, 0 = 女, 1 = 男, 2 = 双性
     */
    private _nSex: number = -1;

    /**
     * 最后登录 IP
     */
    private _strClientIpAddr: string = "0.0.0.0";

    /**
     * 房卡
     */
    private _nRoomCard: number = 0;

    /**
     * 类默认构造器
     */
    constructor() {
    }

    /**
     * 获取用户 Id
     * 
     * @return 用户 Id
     */
    getUserId(): number {
        return this._nUserId;
    }

    /**
     * 获取用户名称
     * 
     * @return 用户名称
     */
    getUserName(): string {
        return this._strUserName;
    }

    /**
     * 获取头像
     * 
     * @return 头像
     */
    getHeadImg(): string {
        return this._strHeadImg;
    }

    /**
     * 获取性别
     * 
     * @return -1 = 未知, 0 = 女, 1 = 男, 2 = 双性
     */
    getSex(): number {
        return this._nSex;
    }

    /**
     * 获取安全性别, 
     * XXX 注意: 如果是男或者女, 那么就直接返回,
     * 如果是未知或者双性, 
     * 那么就 50% 的概率返回男, 50% 的概率返回女
     */
    getSafeSex(): number {
        if (0 == this._nSex || 
            1 == this._nSex) {
            return this._nSex;
        }

        return (Math.random() <= 0.5) ? 0 : 1;
    }

    /**
     * 获取客户端 IP 地址
     * 
     * @return 客户端 IP 地址
     */
    getClientIpAddr(): string {
        return this._strClientIpAddr;
    }

    /**
     * 获取房卡
     * 
     * @return 房卡
     */
    getRoomCard(): number {
        return this._nRoomCard;
    }

    /**
     * 更新
     * 
     * @param oProp 属性对象
     */
    updateByProp(oProp: any): void {
        if (null == oProp) {
            return;
        }

        const oKeyMap = {
            "_nUserId": "userId",
            "_strUserName": "userName",
            "_strHeadImg": "headImg",
            "_nSex": "sex",
            "_strClientIpAddr": "clientIpAddr",
            "_nRoomCard": "roomCard",
        };

        for (let strKey in oKeyMap) {
            this[strKey] = oProp[oKeyMap[strKey]];
        }

        // 修改引用
        g_oInnerMap[this.getUserId()] = this;
    }

    /**
     * 获取我的数据
     * 
     * @return 我的数据
     */
    static getMyData(): UserData {
        g_oMyData = g_oMyData || new UserData();
        return g_oMyData;
    }

    /**
     * 根据用户 Id 获取用户数据
     * 
     * @param nUserId 用户 Id
     * @param 用户数据
     */
    static getByUserId(nUserId: number): UserData {
        return g_oInnerMap[nUserId];
    }

    /**
     * 登记
     * 
     * @param nUserId 用户 Id
     * @param strUserName 用户名称
     * @param strHeadImg 头像
     * @param nSex 性别
     * @param strClientIpAddr 客户端 IP 地址
     * @param nRoomCard 房卡数量
     */
    static checkIn(nUserId: number, strUserName: string, strHeadImg: string, nSex: number = 0, strClientIpAddr: string = "0.0.0.0", nRoomCard: number = 0): void {
        if (nUserId <= 0) {
            return;
        }

        let oNewData = new UserData();
        oNewData._nUserId = nUserId;
        oNewData._strUserName = strUserName;
        oNewData._strHeadImg = strHeadImg;
        oNewData._nSex = nSex;
        oNewData._strClientIpAddr = strClientIpAddr;
        oNewData._nRoomCard = nRoomCard;

        g_oInnerMap[oNewData._nUserId] = oNewData;
    }
}
