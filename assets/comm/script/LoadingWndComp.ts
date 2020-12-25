// @const
const { ccclass } = cc._decorator;
const MIN_PROGRESS_REAL = 0.01;
const MIN_PROGRESS_SHOW = 0.10;
const MAX_PROGRESS_REAL = 1.00;

/**
 * 加载窗口组件
 */
@ccclass
export default class LoadingWndComp extends cc.Component {
    /**
     * 当前进度
     */
    _nCurrProgress: number = 0;

    /**
     * 提示
     */
    _strHint: string = "";

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
     * 设置当前进度
     * 
     * @param nVal 进度值
     */
    putCurrProgress(nVal: number): LoadingWndComp {
        this._nCurrProgress = nVal;
        return this;
    }

    /**
     * 设置提示
     * 
     * @param strVal 提示
     */
    putHint(strVal: string): LoadingWndComp {
        this._strHint = strVal;
        return this;
    }

    /**
     * 刷新显示
     */
    renewDisplay(): void {
        let nCurrProgress = this._nCurrProgress;
        nCurrProgress = Math.max(MIN_PROGRESS_REAL, nCurrProgress);
        nCurrProgress = Math.min(MAX_PROGRESS_REAL, nCurrProgress);

        this.node.active = true;

        cc.find("ProgressVal", this.node)
            .getComponent(cc.Label)
            .string = (nCurrProgress * 100).toFixed(0) + "%";

        cc.find("MyProgressBar", this.node)
            .getComponent(cc.ProgressBar)
            .progress = Math.max(MIN_PROGRESS_SHOW, nCurrProgress);
        
        let oHint = cc.find("Hint", this.node)
            .getComponent(cc.Label);

        if (oHint.string != this._strHint) {
            oHint.string = this._strHint;
            cc.Tween.stopAllByTarget(oHint.node);

            let oTween = cc.tween(oHint.node);

            oTween.sequence(
                oTween.to(1, { opacity: 0, }),
                oTween.to(1, { opacity: 255, }),
            ).repeatForever()
                .start();
        }
    }

    /**
     * 隐藏加载对话框
     */
    hide(): void {
        this.scheduleOnce(() => {
            this.node.active = false;

            // 清除进度
            this._nCurrProgress = 0;
            cc.find("MyProgressBar", this.node)
                .getComponent(cc.ProgressBar)
                .progress = MIN_PROGRESS_SHOW;

            // 清除提示文字
            this._strHint = "";
            let oHint = cc.find("Hint", this.node).getComponent(cc.Label);
            cc.Tween.stopAllByTarget(oHint.node);
            oHint.string = "";
        });
    }
}
