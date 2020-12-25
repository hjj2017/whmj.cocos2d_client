/**
 * 头像加载器
 */
export default class HeadImgLoader {
    /**
     * 私有化类默认构造器
     */
    private constructor() {
    }

    /**
     * 加载并显示
     * 
     * @param oShowingAtNode 显示节点
     * @param strHeadImg 头像
     */
    static loadAndShow(oShowingAtNode: cc.Node, strHeadImg: string): void {
        if (null == oShowingAtNode || 
            null == oShowingAtNode.getComponent(cc.Sprite)) {
            return;
        }
        
        if (null == strHeadImg || 
            strHeadImg.length <= 0) {
            return;
        }

        cc.assetManager.loadRemote(strHeadImg, (oError: Error, oTexture: cc.Texture2D) => {
            if (null != oError) {
                // 记录错误日志
                cc.error(oError);
                return;
            }

            oShowingAtNode.getComponent(cc.Sprite)
                .spriteFrame = new cc.SpriteFrame(oTexture);
        });
    }
}
