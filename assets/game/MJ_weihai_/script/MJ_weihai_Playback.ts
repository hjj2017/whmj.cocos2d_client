// @import
import Async from "../../../comm/script/Async";
import MahjongTableComp from "./table/MahjongTableComp";
import MahjongTableFactory from "./table/MahjongTableFactory";
import ModConfig from "./ModConfig.ver_MJ_weihai_";
import RuleSetting from "./RuleSetting";
import CachedData from "../../../bizdata/script/CachedData";

// @const
const { ccclass } = cc._decorator;

/**
 * 威海麻将回放
 */
@ccclass
export default class MJ_weihai_Playback extends cc.Component {
    /**
     * 规则设置
     */
    _oRuleSetting: RuleSetting = null;

    /**
     * 麻将牌桌组件
     */
    _oTableComp: MahjongTableComp = null;

    // /**
    //  * onLoad
    //  */
    // onLoad(): void {
    // }

    /**
     * start
     */
    start(): void {
        if (!CC_DEBUG) {
            cc.log = (oMsg: any): void => {
                console.log(oMsg);
            }

            cc.error = (oError: any): void => {
                console.error(oError);
            }

            cc.warn = (oMsg: any): void => {
                console.warn(oMsg);
            }

            cc.log("重新定义 log()、error()、warn() 函数");
        }

        // Bundle
        let oCurrBundle: cc.AssetManager.Bundle = null;

        const SELF = this;

        Async.serial(
            // step000
            // 先加载 Bundle
            (funYesContinue) => {
                cc.assetManager.loadBundle(ModConfig.BUNDLE_NAME, (oError: Error, oBundle: cc.AssetManager.Bundle) => {
                    if (oError) {
                        cc.error(oError);
                        return;
                    }

                    oCurrBundle = oBundle;
                    funYesContinue();
                });
            },

            // step010
            // 预加载目录 res/0
            (funYesContinue) => {
                if (null == oCurrBundle) {
                    return;
                }

                oCurrBundle.preloadDir("res/0", (oError: Error/*, oItemArray: Array<cc.AssetManager.RequestItem>*/) => {
                    if (oError) {
                        cc.error(oError);
                        return;
                    }

                    funYesContinue();
                });
            },

            // step020
            // 正式加载目录 res/0
            (funYesContinue) => {
                oCurrBundle.loadDir("res/0", (oError: Error) => {
                    if (oError) {
                        cc.error(oError);
                        return;
                    }

                    funYesContinue();
                });
            },

            // stepXXX
            // 创建牌桌
            () => {
                SELF._oRuleSetting = new RuleSetting([
                    { key: 1002, val: 1 },
                    { key: 1003, val: 2 },
                ]);
        
                CachedData.getInstance().set("playback", __createPlaybackData());
        
                __createMahjongTable(SELF);

                let oWordzListList = CachedData.getInstance().get("playback").wordzListList;

                let funAutoPlay = () => {
                    let oInnerList = oWordzListList.shift();
        
                    if (null == oInnerList) {
                        return;
                    }
        
                    for (let oWordz of oInnerList) {
                        if ("Wordz_MahjongMoPai" == oWordz.clazzName) {
                            SELF._oTableComp.updateMahjongMoPai(oWordz.userId, oWordz.t, 1);
                        }
                        else
                        if ("Wordz_RedirectActUserId" == oWordz.clazzName) {
                            SELF._oTableComp.redirectActUserId(oWordz.userId, oWordz.currRoundIndex, oWordz.remainCardNum, oWordz.remainTime);
                        } else
                        if ("Wordz_MahjongChuPai" == oWordz.clazzName) {
                            SELF._oTableComp.doMahjongChuPai(oWordz.userId, oWordz.t);
                        } else
                        if ("Wordz_MahjongInHandChanged" == oWordz.clazzName) {
                            SELF._oTableComp.updateMahjongInHand(oWordz.userId, oWordz.mahjongInHand, oWordz.moPai, 1);
                        } else 
                        if ("Wordz_MahjongChi" == oWordz.clazzName) {
                            SELF._oTableComp.doMahjongChi(oWordz.userId, oWordz.tChi, oWordz.t0, oWordz.t1, oWordz.t2, oWordz.fromUserId);
                        } else
                        if ("Wordz_MahjongPeng" == oWordz.clazzName) {
                            SELF._oTableComp.doMahjongPeng(oWordz.userId, oWordz.t, oWordz.fromUserId);
                        } else
                        if ("Wordz_MahjongMingGang" == oWordz.clazzName) {
                            SELF._oTableComp.doMahjongMingGang(oWordz.userId, oWordz.t, oWordz.fromUserId);
                        } else
                        if ("Wordz_MahjongAnGang" == oWordz.clazzName) {
                            SELF._oTableComp.doMahjongAnGang(oWordz.userId, oWordz.t, 1);
                        }
                    }
        
                    setTimeout(funAutoPlay, 800);
                };
        
                setTimeout(funAutoPlay, 800);
            }
        );
    }

    // /**
    //  * update
    //  * 
    //  * @param nDeltaTime 变化时间
    //  */
    // update (nDeltaTime: number): void {
    // }
}

///////////////////////////////////////////////////////////////////////

/**
 * 创建麻将牌桌
 * 
 * @param SELF this 指针
 */
function __createMahjongTable(SELF: MJ_weihai_Playback): void {
    if (null == SELF || 
        null == SELF._oRuleSetting) {
        return;
    }

    // 创建麻将牌桌
    let oNewTable = MahjongTableFactory.create(SELF._oRuleSetting.getMaxPlayer());

    if (null == oNewTable) {
        cc.log("创建牌桌为空");
        return;
    }

    // 获取牌桌组件
    let oTableComp = oNewTable.getComponent(MahjongTableComp);

    if (null == oTableComp) {
        cc.log("麻将牌桌组件为空");
        return;
    }

    SELF._oTableComp = oTableComp;

    // 获取玩家列表
    let oPlayerList = CachedData.getInstance().get("playback").playerList;
    // 获取第一视角用户
    let oFirstPlayer = oPlayerList[1];

    // 添加第一视角玩家
    oTableComp.addPlayer(oFirstPlayer, true);

    for (let oPlayer of oPlayerList) {
        if (null == oPlayer) {
            continue;
        }

        // 添加玩家
        oTableComp.addPlayer(oPlayer);
    }

    cc.find("Canvas/MahjongTableArea").addChild(oNewTable);
}

/**
 * 创建回放数据
 */
function __createPlaybackData() {
    return {
        "currRound": {
            "roomId": 643454,
            "roundIndex": 0
        },
        "playerList": [
            {
                "userId": 8344532,
                "userName": "XY",
                "headImg": "http://weihaishenghuo123.cdn.hexiejiayuan.cn/xyzab/head_img/1029.jpg",
                "sex": 0,
                "seatIndex": 0,
                "currScore": -2,
                "totalScore": -2
            },
            {
                "userId": 7929621,
                "userName": "AfrX",
                "headImg": "http://weihaishenghuo123.cdn.hexiejiayuan.cn/xyzab/head_img/1028.jpg",
                "sex": 1,
                "seatIndex": 1,
                "currScore": 2,
                "totalScore": 2
            }
        ],
        "wordzListList": [
            [
                {
                    "clazzName": "Wordz_MahjongInHandChanged",
                    "userId": 8344532,
                    "mahjongInHand": [
                        22,
                        27,
                        28,
                        41,
                        45,
                        46,
                        48,
                        81,
                        84,
                        101,
                        103,
                        103,
                        188
                    ],
                    "moPai": -1
                },
                {
                    "clazzName": "Wordz_MahjongInHandChanged",
                    "userId": 7929621,
                    "mahjongInHand": [
                        23,
                        24,
                        25,
                        27,
                        29,
                        42,
                        44,
                        44,
                        45,
                        46,
                        47,
                        48,
                        81
                    ],
                    "moPai": -1
                },
                {
                    "clazzName": "Wordz_RedirectActUserId",
                    "userId": 8344532,
                    "seatIndex": 0,
                    "currRoundIndex": 0,
                    "remainCardNum": 110,
                    "remainTime": -1
                },
                {
                    "clazzName": "Wordz_RedirectActUserId",
                    "userId": 8344532,
                    "seatIndex": 0,
                    "currRoundIndex": 0,
                    "remainCardNum": 109,
                    "remainTime": -1
                },
                {
                    "clazzName": "Wordz_MahjongMoPai",
                    "userId": 8344532,
                    "t": 81
                }
            ],
            [
                {
                    "clazzName": "Wordz_MahjongChuPai",
                    "userId": 8344532,
                    "t": 81
                },
                {
                    "clazzName": "Wordz_RedirectActUserId",
                    "userId": 7929621,
                    "seatIndex": 1,
                    "currRoundIndex": 0,
                    "remainCardNum": 108,
                    "remainTime": -1
                },
                {
                    "clazzName": "Wordz_MahjongMoPai",
                    "userId": 7929621,
                    "t": 28
                }
            ],
            [
                {
                    "clazzName": "Wordz_MahjongChuPai",
                    "userId": 7929621,
                    "t": 81
                },
                {
                    "clazzName": "Wordz_MahjongInHandChanged",
                    "userId": 7929621,
                    "mahjongInHand": [
                        23,
                        24,
                        25,
                        27,
                        28,
                        29,
                        42,
                        44,
                        44,
                        45,
                        46,
                        47,
                        48
                    ],
                    "moPai": -1
                },
                {
                    "clazzName": "Wordz_RedirectActUserId",
                    "userId": 8344532,
                    "seatIndex": 0,
                    "currRoundIndex": 0,
                    "remainCardNum": 107,
                    "remainTime": -1
                },
                {
                    "clazzName": "Wordz_MahjongMoPai",
                    "userId": 8344532,
                    "t": 84
                }
            ],
            [
                {
                    "clazzName": "Wordz_MahjongChuPai",
                    "userId": 8344532,
                    "t": 46
                },
                {
                    "clazzName": "Wordz_MahjongInHandChanged",
                    "userId": 8344532,
                    "mahjongInHand": [
                        22,
                        27,
                        28,
                        41,
                        45,
                        48,
                        81,
                        84,
                        84,
                        101,
                        103,
                        103,
                        188
                    ],
                    "moPai": -1
                }
            ],
            [
                {
                    "clazzName": "Wordz_MahjongInHandChanged",
                    "userId": 7929621,
                    "mahjongInHand": [
                        23,
                        24,
                        25,
                        27,
                        28,
                        29,
                        42,
                        44,
                        46,
                        47
                    ],
                    "moPai": 48
                },
                {
                    "clazzName": "Wordz_MahjongChi",
                    "userId": 7929621,
                    "t0": 44,
                    "t1": 45,
                    "t2": 46,
                    "tChi": 46,
                    "fromUserId": 8344532
                },
                {
                    "clazzName": "Wordz_RedirectActUserId",
                    "userId": 7929621,
                    "seatIndex": 1,
                    "currRoundIndex": 0,
                    "remainCardNum": 107,
                    "remainTime": -1
                }
            ],
            [
                {
                    "clazzName": "Wordz_MahjongChuPai",
                    "userId": 7929621,
                    "t": 42
                },
                {
                    "clazzName": "Wordz_MahjongInHandChanged",
                    "userId": 7929621,
                    "mahjongInHand": [
                        23,
                        24,
                        25,
                        27,
                        28,
                        29,
                        44,
                        46,
                        47,
                        48
                    ],
                    "moPai": -1
                },
                {
                    "clazzName": "Wordz_RedirectActUserId",
                    "userId": 8344532,
                    "seatIndex": 0,
                    "currRoundIndex": 0,
                    "remainCardNum": 106,
                    "remainTime": -1
                },
                {
                    "clazzName": "Wordz_MahjongMoPai",
                    "userId": 8344532,
                    "t": 103
                }
            ],
            [
                {
                    "clazzName": "Wordz_MahjongChuPai",
                    "userId": 8344532,
                    "t": 188
                },
                {
                    "clazzName": "Wordz_MahjongInHandChanged",
                    "userId": 8344532,
                    "mahjongInHand": [
                        22,
                        27,
                        28,
                        41,
                        45,
                        48,
                        81,
                        84,
                        84,
                        101,
                        103,
                        103,
                        103
                    ],
                    "moPai": -1
                },
                {
                    "clazzName": "Wordz_RedirectActUserId",
                    "userId": 7929621,
                    "seatIndex": 1,
                    "currRoundIndex": 0,
                    "remainCardNum": 105,
                    "remainTime": -1
                },
                {
                    "clazzName": "Wordz_MahjongMoPai",
                    "userId": 7929621,
                    "t": 188
                }
            ],
            [
                {
                    "clazzName": "Wordz_MahjongChuPai",
                    "userId": 7929621,
                    "t": 188
                },
                {
                    "clazzName": "Wordz_RedirectActUserId",
                    "userId": 8344532,
                    "seatIndex": 0,
                    "currRoundIndex": 0,
                    "remainCardNum": 104,
                    "remainTime": -1
                },
                {
                    "clazzName": "Wordz_MahjongMoPai",
                    "userId": 8344532,
                    "t": 188
                }
            ],
            [
                {
                    "clazzName": "Wordz_MahjongChuPai",
                    "userId": 8344532,
                    "t": 188
                },
                {
                    "clazzName": "Wordz_RedirectActUserId",
                    "userId": 7929621,
                    "seatIndex": 1,
                    "currRoundIndex": 0,
                    "remainCardNum": 103,
                    "remainTime": -1
                },
                {
                    "clazzName": "Wordz_MahjongMoPai",
                    "userId": 7929621,
                    "t": 43
                }
            ],
            [
                {
                    "clazzName": "Wordz_MahjongChuPai",
                    "userId": 7929621,
                    "t": 43
                },
                {
                    "clazzName": "Wordz_RedirectActUserId",
                    "userId": 8344532,
                    "seatIndex": 0,
                    "currRoundIndex": 0,
                    "remainCardNum": 102,
                    "remainTime": -1
                },
                {
                    "clazzName": "Wordz_MahjongMoPai",
                    "userId": 8344532,
                    "t": 105
                }
            ],
            [
                {
                    "clazzName": "Wordz_MahjongChuPai",
                    "userId": 8344532,
                    "t": 105
                },
                {
                    "clazzName": "Wordz_RedirectActUserId",
                    "userId": 7929621,
                    "seatIndex": 1,
                    "currRoundIndex": 0,
                    "remainCardNum": 101,
                    "remainTime": -1
                },
                {
                    "clazzName": "Wordz_MahjongMoPai",
                    "userId": 7929621,
                    "t": 126
                }
            ],
            [
                {
                    "clazzName": "Wordz_MahjongChuPai",
                    "userId": 7929621,
                    "t": 126
                },
                {
                    "clazzName": "Wordz_RedirectActUserId",
                    "userId": 8344532,
                    "seatIndex": 0,
                    "currRoundIndex": 0,
                    "remainCardNum": 100,
                    "remainTime": -1
                },
                {
                    "clazzName": "Wordz_MahjongMoPai",
                    "userId": 8344532,
                    "t": 188
                }
            ],
            [
                {
                    "clazzName": "Wordz_MahjongChuPai",
                    "userId": 8344532,
                    "t": 188
                },
                {
                    "clazzName": "Wordz_RedirectActUserId",
                    "userId": 7929621,
                    "seatIndex": 1,
                    "currRoundIndex": 0,
                    "remainCardNum": 99,
                    "remainTime": -1
                },
                {
                    "clazzName": "Wordz_MahjongMoPai",
                    "userId": 7929621,
                    "t": 26
                }
            ],
            [
                {
                    "clazzName": "Wordz_MahjongChuPai",
                    "userId": 7929621,
                    "t": 44
                },
                {
                    "clazzName": "Wordz_MahjongInHandChanged",
                    "userId": 7929621,
                    "mahjongInHand": [
                        23,
                        24,
                        25,
                        26,
                        27,
                        28,
                        29,
                        46,
                        47,
                        48
                    ],
                    "moPai": -1
                },
                {
                    "clazzName": "Wordz_RedirectActUserId",
                    "userId": 8344532,
                    "seatIndex": 0,
                    "currRoundIndex": 0,
                    "remainCardNum": 98,
                    "remainTime": -1
                },
                {
                    "clazzName": "Wordz_MahjongMoPai",
                    "userId": 8344532,
                    "t": 49
                }
            ],
            [
                {
                    "clazzName": "Wordz_MahjongChuPai",
                    "userId": 8344532,
                    "t": 49
                }
            ],
            [
                {
                    "clazzName": "Wordz_RedirectActUserId",
                    "userId": 7929621,
                    "seatIndex": 1,
                    "currRoundIndex": 0,
                    "remainCardNum": 97,
                    "remainTime": -1
                },
                {
                    "clazzName": "Wordz_MahjongMoPai",
                    "userId": 7929621,
                    "t": 45
                }
            ],
            [
                {
                    "clazzName": "Wordz_MahjongChuPai",
                    "userId": 7929621,
                    "t": 45
                },
                {
                    "clazzName": "Wordz_RedirectActUserId",
                    "userId": 8344532,
                    "seatIndex": 0,
                    "currRoundIndex": 0,
                    "remainCardNum": 96,
                    "remainTime": -1
                },
                {
                    "clazzName": "Wordz_MahjongMoPai",
                    "userId": 8344532,
                    "t": 126
                }
            ],
            [
                {
                    "clazzName": "Wordz_MahjongChuPai",
                    "userId": 8344532,
                    "t": 126
                },
                {
                    "clazzName": "Wordz_RedirectActUserId",
                    "userId": 7929621,
                    "seatIndex": 1,
                    "currRoundIndex": 0,
                    "remainCardNum": 95,
                    "remainTime": -1
                },
                {
                    "clazzName": "Wordz_MahjongMoPai",
                    "userId": 7929621,
                    "t": 103
                }
            ],
            [
                {
                    "clazzName": "Wordz_MahjongChuPai",
                    "userId": 7929621,
                    "t": 103
                }
            ],
            [
                {
                    "clazzName": "Wordz_MahjongInHandChanged",
                    "userId": 8344532,
                    "mahjongInHand": [
                        22,
                        27,
                        28,
                        41,
                        45,
                        48,
                        81,
                        84,
                        84,
                        101
                    ],
                    "moPai": -1
                },
                {
                    "clazzName": "Wordz_MahjongMingGang",
                    "userId": 8344532,
                    "t": 103,
                    "fromUserId": 7929621
                },
                {
                    "clazzName": "Wordz_RedirectActUserId",
                    "userId": 8344532,
                    "seatIndex": 0,
                    "currRoundIndex": 0,
                    "remainCardNum": 94,
                    "remainTime": -1
                },
                {
                    "clazzName": "Wordz_MahjongMoPai",
                    "userId": 8344532,
                    "t": 107
                }
            ],
            [
                {
                    "clazzName": "Wordz_MahjongChuPai",
                    "userId": 8344532,
                    "t": 101
                },
                {
                    "clazzName": "Wordz_MahjongInHandChanged",
                    "userId": 8344532,
                    "mahjongInHand": [
                        22,
                        27,
                        28,
                        41,
                        45,
                        48,
                        81,
                        84,
                        84,
                        107
                    ],
                    "moPai": -1
                },
                {
                    "clazzName": "Wordz_RedirectActUserId",
                    "userId": 7929621,
                    "seatIndex": 1,
                    "currRoundIndex": 0,
                    "remainCardNum": 93,
                    "remainTime": -1
                },
                {
                    "clazzName": "Wordz_MahjongMoPai",
                    "userId": 7929621,
                    "t": 83
                }
            ],
            [
                {
                    "clazzName": "Wordz_MahjongChuPai",
                    "userId": 7929621,
                    "t": 83
                },
                {
                    "clazzName": "Wordz_RedirectActUserId",
                    "userId": 8344532,
                    "seatIndex": 0,
                    "currRoundIndex": 0,
                    "remainCardNum": 92,
                    "remainTime": -1
                },
                {
                    "clazzName": "Wordz_MahjongMoPai",
                    "userId": 8344532,
                    "t": 26
                }
            ],
            [
                {
                    "clazzName": "Wordz_MahjongChuPai",
                    "userId": 8344532,
                    "t": 26
                }
            ],
            [
                {
                    "clazzName": "Wordz_MahjongHuOrZiMo",
                    "userId": 7929621,
                    "t": 26,
                    "hu": true,
                    "ziMo": false,
                    "dianPaoUserId": 8344532,
                    "huPatternMap": {
                        "1": 1
                    }
                }
            ]
        ]
    };
}