/**
 * 资源关键字定义
 */
export default class ResKeyDef {
    /**
     * 用户登录场景
     */
    static readonly SCENE_USER_LOGIN: string = "UserLoginScene";

    /**
     * 大厅场景
     */
    static readonly SCENE_HALL: string = "HallScene";

    /**
     * 亲友圈场景
     */
    static readonly SCENE_CLUB: string = "ClubScene";

    /**
     * 威海麻将
     */
    static readonly SCENE_GAME_MJ_WEIHAI_: string = "MJ_weihai_Scene";

    /**
     * 麻将回放
     */
    static readonly SCENE_PLAYBACK_MJ_WEIHAI_: string = "MJ_weihai_Playback";

    /**
     * 私有化类默认构造器
     */
    private constructor() {
        throw new Error("该类不能实例化");
    }
}
