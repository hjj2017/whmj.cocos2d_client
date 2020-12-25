/**
 * 角色定义
 */
export default class RoleDef {
    /**
     * 超级管理员
     */
    static readonly SUPER_ADMIN = 2;

    /**
     * 管理员
     */
    static readonly ADMIN = 1;

    /**
     * 普通成员
     */
    static readonly MEMBER = 0;

    /**
     * 私有化类默认构造器
     */
    private constructor() {
    }
}
