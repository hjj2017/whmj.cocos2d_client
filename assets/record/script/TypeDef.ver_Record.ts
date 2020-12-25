/**
 * 玩家
 */
export type Player = {
    /** 用户 Id */
    userId?: number,
    /** 用户名称 */
    userName?: string,
    /** 头像 */
    headImg?: string,
    /** 性别 */
    sex?: number,
    /** 当前分数 */
    currScore?: number,
    /** 总分数 */
    totalScore?: number,
    /** 座位索引 */
    seatIndex?: number,
    /** 庄家标志 */
    zhuangFlag?: boolean,
    /** ( 麻将 ) 自摸 */
    ziMo?: boolean,
    /** ( 麻将) 胡牌 */
    hu?: boolean,
    /** ( 麻将 ) 点炮 */
    dianPao?: boolean,
    /** ( 斗地主 ) 地主 */
    diZhu?: boolean,
    /** ( 斗地主 ) 农民 */
    nongMin?: boolean,
    /** ( 斗地主 ) 赢家 */
    winner?: boolean,
}

/**
 * 单条战绩
 */
export type ARecord = {
    /** 游戏类型 1 */
    gameType1?: number,
    /** 房间 Id */
    roomId?: number,
    /** 房间 UUId */
    roomUUId?: string,
    /** 消费房卡数量 */
    costRoomCard?: number,
    /** 实际局数 */
    actualRoundCount?: number,
    /** 创建时间 */
    createTime?: number,
    /** 结束时间 */
    overTime?: number,
    /** 玩家数组 */
    playerArray?: Array<Player>,
}

/**
 * 单个牌局
 */
export type ARound = {
    /** 牌局索引 */
    roundIndex?: number;
    /** 创建时间 */
    createTime?: number;
    /** 玩家数组 */
    playerArray?: Array<Player>;
    /** 回放存根 */
    playbackStub?: string;
}
