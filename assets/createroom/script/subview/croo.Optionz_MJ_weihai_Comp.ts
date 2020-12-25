//#region @import
import RuleKeyAndValComp from "../../../comm/script/RuleKeyAndValComp";
//#endregion

//#region 常量定义 @const
const { ccclass } = cc._decorator;

const KEY_PAYMENT_WAY = 1002; // 支付方式
const KEY_MAX_PLAYER  = 1003; // 最大玩家数量
const KEY_MAX_ROUND   = 1004; // 最大局数
const KEY_MAX_CIRCLE  = 1005; // 最大圈数

// 最大局和最大圈数数配置
const MAX_ROUND_AND_MAX_CIRCLE_CONFIG: { [strKey: string]: Array<{ maxRound : number, maxCircle: number, desc: string, }> } = {
    // 亲友圈圈主支付 / 2人
    "0/2": [ 
        { maxRound: +6, maxCircle: 0, desc: "6局(房卡x4)",  }, 
        { maxRound: 12, maxCircle: 0, desc: "12局(房卡x4)", }, 
        { maxRound: 24, maxCircle: 0, desc: "24局(房卡x6)", },
    ],

    // 亲友圈圈主支付 / 3人
    "0/3": [
        { maxRound: +5, maxCircle: 0, desc: "5局(房卡x4)", }, 
        { maxRound: 10, maxCircle: 0, desc: "10局(房卡x4)", }, 
        { maxRound: 20, maxCircle: 0, desc: "20局(房卡x6)", },
    ],

    // 亲友圈圈主支付 / 4人, 
    // XXX 注意: 4 人的时候就按照圈来算了...
    "0/4": [
        { maxRound: 0, maxCircle: 1, desc: "1圈(房卡x4)", }, 
        { maxRound: 0, maxCircle: 2, desc: "2圈(房卡x4)", }, 
        { maxRound: 0, maxCircle: 4, desc: "4圈(房卡x6)", },
    ],

    ///////////////////////////////////////////////////////////////
    // 房主支付 / 2人
    "1/2": [ 
        { maxRound: +6, maxCircle: 0, desc: "6局(房卡x4)",  }, 
        { maxRound: 12, maxCircle: 0, desc: "12局(房卡x4)", }, 
        { maxRound: 24, maxCircle: 0, desc: "24局(房卡x6)", },
    ],

    // 房主支付 / 3人
    "1/3": [
        { maxRound: +5, maxCircle: 0, desc: "5局(房卡x4)",  }, 
        { maxRound: 10, maxCircle: 0, desc: "10局(房卡x4)", }, 
        { maxRound: 20, maxCircle: 0, desc: "20局(房卡x6)", },
    ],

    // 房主支付 / 4人
    "1/4": [
        { maxRound: 0, maxCircle: 1, desc: "1圈(房卡x4)", }, 
        { maxRound: 0, maxCircle: 2, desc: "2圈(房卡x4)", }, 
        { maxRound: 0, maxCircle: 4, desc: "4圈(房卡x6)", },
    ],

    ///////////////////////////////////////////////////////////////
    // 均摊支付 / 2人
    "2/2": [
        { maxRound: +6, maxCircle: 0, desc: "6局(房卡x2/人)",  }, 
        { maxRound: 12, maxCircle: 0, desc: "12局(房卡x2/人)", }, 
        { maxRound: 24, maxCircle: 0, desc: "24局(房卡x3/人)", },
    ],

    // 均摊支付 / 3人
    "2/3": [
        { maxRound: +5, maxCircle: 0, desc: "5局(房卡x2/人)",  }, 
        { maxRound: 10, maxCircle: 0, desc: "10局(房卡x2/人)", },
        { maxRound: 20, maxCircle: 0, desc: "20局(房卡x2/人)", },
    ],

    // 均摊支付 / 4人
    "2/4": [
        { maxRound: 0, maxCircle: 1, desc: "1圈(房卡x1/人)", },
        { maxRound: 0, maxCircle: 2, desc: "2圈(房卡x1/人)", }, 
        { maxRound: 0, maxCircle: 4, desc: "4圈(房卡x2/人)", },
    ]
};
//#endregion

/**
 * 威海麻将选项组件
 */
@ccclass
export default class Optionz_MJ_weihai_Comp extends cc.Component {
    // /**
    //  * onLoad
    //  */
    // onLoad(): void {
    // }

    /**
     * start
     */
    start(): void {
        // 注册 UI 事件
        __regUIEvent(this);
        // 事先修改一次最大局数说明
        this.changeMaxRoundOrMaxCircleDesc();
    }

    // /**
    //  * update
    //  * 
    //  * @param nDeltaTime 变化时间
    //  */
    // update(nDeltaTime: number): void {
    // }

    /**
     * 修改最大局数或者最大圈数说明
     */
    changeMaxRoundOrMaxCircleDesc(): void {
        // 规则键值组件数组
        let oRuleKeyAndValCompArray = this.getComponentsInChildren(RuleKeyAndValComp);

        if (null == oRuleKeyAndValCompArray || 
            oRuleKeyAndValCompArray.length <= 0) {
            return;
        }

        let nPaymentWay = -1;
        let nMaxPlayer = -1;

        // 最大局数或最大圈数组件数组,
        // 先收集要修改的目标组件...
        let oMaxRoundCompArray: Array<RuleKeyAndValComp> = [];

        for (let oCustomComp of oRuleKeyAndValCompArray) {
            // 最大局数
            if (KEY_MAX_ROUND == oCustomComp._nKey) {
                oMaxRoundCompArray.push(oCustomComp);
            }

            if (!oCustomComp.getComponent(cc.Toggle).isChecked) {
                continue;
            }

            // 支付方式
            if (KEY_PAYMENT_WAY == oCustomComp._nKey) {
                nPaymentWay = oCustomComp._nVal;
            }

            // 最大人数
            if (KEY_MAX_PLAYER == oCustomComp._nKey) {
                nMaxPlayer = oCustomComp._nVal;
            }
        }

        cc.find("ValGroup/Option_JvShu_",   this.node).active = (nMaxPlayer <= 3);
        cc.find("ValGroup/Option_QuanShu_", this.node).active = (nMaxPlayer >= 4);

        let strTempKey = `${nPaymentWay}/${nMaxPlayer}`;

        if (!(strTempKey in MAX_ROUND_AND_MAX_CIRCLE_CONFIG)) {
            return;
        }

        // 获取当前配置
        let oCurrConf = MAX_ROUND_AND_MAX_CIRCLE_CONFIG[strTempKey];
        // 循环次数
        let nLoopCount = Math.min(
            oCurrConf.length, 
            oMaxRoundCompArray.length
        );

        for (let nIndex = 0; nIndex < nLoopCount ; nIndex++) {
            // 获取局数和圈数配置
            let oRoundAndCircleConf = oCurrConf[nIndex];

            if (null == oRoundAndCircleConf) {
                continue;
            }

            // 获取局数或圈数组件
            let oMaxRoundComp = oMaxRoundCompArray[nIndex];

            if (oRoundAndCircleConf.maxRound > 0) {
                oMaxRoundComp._nVal = oRoundAndCircleConf.maxRound;
            }

            cc.find("Label", oMaxRoundComp.node)
                .getComponent(cc.Label)
                .string = oRoundAndCircleConf.desc;
        }
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 注册 UI 事件
 * 
 * @param SELF this 指针
 */
function __regUIEvent(SELF: Optionz_MJ_weihai_Comp): void {
    if (null == SELF) {
        return;
    }

    // 获取自定义组件数组
    let oCustomCompArray = SELF.getComponentsInChildren(RuleKeyAndValComp);

    for (let oCustomComp of oCustomCompArray) {
        if (KEY_PAYMENT_WAY != oCustomComp._nKey && 
            KEY_MAX_PLAYER != oCustomComp._nKey) {
            continue;
        }

        oCustomComp.node.on("toggle", () => {
            // 修改最大局数说明
            SELF.changeMaxRoundOrMaxCircleDesc();
        });
    }
}
