//#region @import
import MahjongTileDef from "../MahjongTileDef";
import MahjongTileOpComp from "./MahjongTileOpComp";
//#endregion

// @const
const { ccclass } = cc._decorator;

/**
 * 麻将手牌分组组件
 */
@ccclass
export default class MahjongInHandGroupComp extends cc.Component {
    /**
     * 在手中的麻将牌数组
     */
    _oMahjongInHandArray: Array<number> = null;

    /**
     * 麻将摸牌
     */
    _nMahjongMoPai: number = -1;

    /**
     * 是否可以交互
     */
    _bCanInteractive: boolean = false;

    /**
     * 出牌动画已经完成
     */
    _bChuPaiAnimFinished: boolean = false;

    // /**
    //  * onLoad
    //  */
    // onLoad(): void {
    // }

    /**
     * start
     */
    start(): void {
        __regUIEvent(this);
    }

    // /**
    //  * update
    //  * 
    //  * @param nDeltaTime 变化时间
    //  */
    // update (nDeltaTime: number): void {
    // }

    /**
     * 更新麻将手牌
     * 
     * @param oMahjongValArray 麻将数值数值
     * @param nState 状态, 0 = 正常状态, 1 = 躺倒, 2 = 扣起来, 3 = 抬起
     */
    updateMahjongInHand(
        oMahjongValArray: Array<number>, 
        nState: number = 0): void {
        // 麻将排序
        oMahjongValArray = oMahjongValArray.sort((nX, nY) => nY - nX);
        this._oMahjongInHandArray = oMahjongValArray;

        // 实现移除所有的子节点
        cc.find("Box_1_", this.node).removeAllChildren(true);

        let oMahjongTileOpTemplate = cc.find("MahjongTileOpTemplate", this.node);
        const SELF = this;
        SELF._bChuPaiAnimFinished = false;

        let nPos = -1;

        for (let nMahjongVal of oMahjongValArray) {
            // 通过模板创建一个新节点实例
            let oNewNode = cc.instantiate(oMahjongTileOpTemplate);
            oNewNode.active = true;

            // 添加组件并设置属性
            let oNewComp = oNewNode.addComponent(MahjongTileOpComp);

            if (null != oNewComp &&
                nMahjongVal > 0) {
                oNewComp.putVal(nMahjongVal).putAtPos(++nPos);
            }

            oNewComp.setState(nState);
            cc.find("Box_1_", this.node).addChild(oNewNode);
        }
    }

    /**
     * 更新麻将摸牌
     * 
     * @param nMahjongVal 麻将面值
     * @param nState 状态
     */
    updateMahjongMoPai(nMahjongVal: number, nState = 0): void {
        // 设置麻将摸牌
        this._nMahjongMoPai = nMahjongVal;
        this._bChuPaiAnimFinished = false;

        if (cc.find("Box_0_", this.node).childrenCount <= 0) {
            // 获取麻将牌模板
            let oMahjongTileOpTemplate = cc.find("MahjongTileOpTemplate", this.node);
            // 通过模板创建一个新节点
            let oNewNode = cc.instantiate(oMahjongTileOpTemplate);
            oNewNode.addComponent(MahjongTileOpComp);

            // 将新节点添加到 Box_0_, 并重新再拿一次
            cc.find("Box_0_", this.node).addChild(oNewNode);
        }

        // 获取麻将牌操作组件
        let oThatComp = cc.find("Box_0_", this.node).getComponentInChildren(MahjongTileOpComp);
        const SELF = this;

        if (null != oThatComp &&
            nMahjongVal > 0) {
            oThatComp.putVal(nMahjongVal);
        }

        cc.find("Box_0_", this.node).active = true;

        oThatComp.setState(nState);
        oThatComp.node.active = nMahjongVal > 0;
    }

    /**
     * 设置是否可以交互
     * 
     * @param bVal 布尔值
     */
    putCanInteractive(bVal: boolean): MahjongInHandGroupComp {
        this._bCanInteractive = bVal;
        return this;
    }

    /**
     * 执行麻将出牌
     * 
     * @param nMahjongVal 麻将出牌
     */
    doMahjongChuPai(nMahjongVal: number): void {
        if (nMahjongVal <= 0) {
            return;
        }

        if (this._nMahjongMoPai == nMahjongVal || 
            MahjongTileDef.MASK_VAL == this._nMahjongMoPai) {
            // 如果打出的是刚摸到的牌,
            cc.find("Box_0_", this.node).active = false;
            this._nMahjongMoPai = null;
            return;
        }

        if (null == this._oMahjongInHandArray ||
            this._oMahjongInHandArray.length <= 0) {
            // 如果麻将手牌为空
            return;
        }

        // 查找要移除的麻将牌索引
        let nFoundIndex = this._oMahjongInHandArray.indexOf(nMahjongVal);

        if (nFoundIndex < 0) {
            cc.error("未找到要打出的麻将牌");
            return;
        }

        // 删除相关牌, 并更新手牌
        delete this._oMahjongInHandArray[nFoundIndex];
        this.updateMahjongInHand(this._oMahjongInHandArray);
    }

    /**
     * 检查是否可以出牌, 并播放动画
     * 
     * @param nChuPai 要打出的牌
     * @param nAtPos 出牌所在位置
     * @param funCb 回调函数
     */
    checkChuPaiAndPlayAnim(nChuPai: number, nAtPos: number, funCb: (bSuccezz: boolean) => void): void {
        // 确保回调函数不为空
        const finalCall = funCb || function() {
        }

        if (nChuPai <= MahjongTileDef.MASK_VAL || 
            !this._bCanInteractive ||
            this._bChuPaiAnimFinished ||
            this._nMahjongMoPai <= -1) { // 没有摸牌则不能出牌...
            finalCall(false);
            return;
        }

        if (nChuPai == this._nMahjongMoPai) {
            // 如果要出的牌正好和摸到的牌一致,
            finalCall(true);
            return;
        }

        if (this._oMahjongInHandArray.length <= nAtPos || 
            this._oMahjongInHandArray[nAtPos] != nChuPai) {
            cc.error(`所在位置的牌与要打出的牌不一致, chuPai = ${nChuPai}, atPost = ${nAtPos}`);
            finalCall(false);
            return;
        }

        let nInsPos = -1;

        for (let nTempIndex = 0; nTempIndex < this._oMahjongInHandArray.length; nTempIndex++) {
            if (this._oMahjongInHandArray[nTempIndex] < this._nMahjongMoPai) {
                // XXX 注意: 这个数组是倒序的
                // 所以要找到第一个小于 "摸牌" 的麻将牌所在位置...
                nInsPos = nTempIndex;
                break;
            }
        }

        let oChildNodeArray = cc.find("Box_1_", this.node).children;

        if (null == oChildNodeArray || 
            oChildNodeArray.length <= nAtPos) {
            cc.error(`Box_1_ 字节点数组数量不正确`);
            finalCall(false);
            return;
        }

        this._bChuPaiAnimFinished = true;

        let oMJNode_chu = oChildNodeArray[nAtPos];
        let oMJNode_x = oChildNodeArray[nInsPos];
        let oMJNode_jin = cc.find("Box_0_", this.node).children[0];

        let oToPos = oMJNode_x.convertToWorldSpaceAR(cc.v3());
        let oFromPos = oMJNode_jin.convertToWorldSpaceAR(cc.v3());

        let oTempNode = new cc.Node();
        cc.find("Box_1_", this.node).insertChild(oTempNode, nInsPos);

        cc.tween(oMJNode_chu)
            .by(0.1, { y: 128, opacity: -255, })
            .delay(0.2)
            .to(0.1, { scale: 0, })
            .start();

        cc.tween(oTempNode)
            .delay(0.3)
            .to(0.1, { width: 130, })
            .start();

        cc.tween(oMJNode_jin)
            .by(0.1, { y: +128, angle: -32, })
            .by(0.2, { x: oToPos.x - oFromPos.x, })
            .by(0.1, { y: -128, angle: +32, })
            .call(() => { finalCall(true); })
            .start();
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 注册 UI 事件
 * 
 * @param SELF this 指针
 */
function __regUIEvent(SELF: MahjongInHandGroupComp): void {
    if (null == SELF) {
        return;
    }

    SELF.node.on(
        MahjongTileOpComp.EVENT_TOUCH_END, (oEvent: cc.Event.EventCustom) => {
            if (!SELF._bCanInteractive) {
                // 如果是不可交互的,
                // 则停止冒泡...
                oEvent.stopPropagation();
            }
        }
    );
}
