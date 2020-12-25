// 座位字典 - 2 人桌
const g_o2PlayerzSeatMap = {
    0: { 
        0: 0, 
        1: 2, 
    },

    1: {
        1: 0, 
        0: 2,
    },
};

// 座位字典 - 3 人桌
const g_o3PlayerzSeatMap = {
    0: {
        0: 0,
        1: 1,
        2: 3,
    },

    1: {
        0: 3,
        1: 0,
        2: 1,
    },

    2: {
        0: 1,
        1: 3,
        2: 0,
    },
};

// 座位字典 - 4 人桌
const g_o4PlayerzSeatMap = {
    0: {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
    },

    1: {
        0: 3,
        1: 0,
        2: 1,
        3: 2,
    },

    2: {
        0: 2,
        1: 3,
        2: 0,
        3: 1,
    },

    3: {
        0: 1,
        1: 2,
        2: 3,
        3: 0,
    },
};

/**
 * 麻将座位索引器
 */
export default class MahjongSeatIndexer {
    /**
     * 最大玩家数量
     */
    private _nMaxPlayer: number = 0;

    /**
     * 默认主视角座位索引
     */
    private _nFirstSeatIndex: number = 0;

    /**
     * 类参数构造器
     * 
     * @param nMaxPlayer 最大玩家数量
     */
    constructor(nMaxPlayer: number) {
        nMaxPlayer = Math.max(1, nMaxPlayer);
        nMaxPlayer = Math.min(4, nMaxPlayer);
        this._nMaxPlayer = nMaxPlayer;
    }

    /**
     * 转换主视角座位索引
     * 
     * @param nSeatIndexAtServer 服务器端座位索引
     */
    transformFirstSeatIndex(nSeatIndexAtServer: number): void {
        nSeatIndexAtServer = Math.max(0, nSeatIndexAtServer);
        nSeatIndexAtServer = Math.min(this._nMaxPlayer, nSeatIndexAtServer);
        this._nFirstSeatIndex = nSeatIndexAtServer;
    }

    /**
     * 获取客户端座位索引
     * 
     * @param nSeatIndexAtServer 服务器端座位索引
     * @return 客户端座位索引
     */
    getSeatIndexAtClient(nSeatIndexAtServer: number): number {
        let oUseSeatMap = g_o2PlayerzSeatMap;

        if (3 == this._nMaxPlayer) {
            oUseSeatMap = g_o3PlayerzSeatMap;
        } else 
        if (4 == this._nMaxPlayer) {
            oUseSeatMap = g_o4PlayerzSeatMap;
        }

        let nSeatIndexAtClient = oUseSeatMap[this._nFirstSeatIndex][nSeatIndexAtServer];

        if (undefined == nSeatIndexAtClient) {
            return 0;
        } else {
            return nSeatIndexAtClient;
        }
    }
}
