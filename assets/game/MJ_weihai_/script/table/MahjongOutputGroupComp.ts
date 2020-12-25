// @import
import AllMahjongValImg from "../AllMahjongValImg";

// @const
const { ccclass } = cc._decorator;

//#region 位置定义
//#region 2 人桌位置配置
// 2 人桌
///////////////////////////////////////////////////////////////////////
// 
// 2 人桌, 座位 0
const PLAYERZ_2_AT_SEAT_0_ = [
    { x: -532, y: -36, zIndex: 128, }, 
    { x: -476, y: -36, zIndex: 128, }, 
    { x: -420, y: -36, zIndex: 128, }, 
    { x: -364, y: -36, zIndex: 128, }, 
    { x: -308, y: -36, zIndex: 128, }, 
    { x: -252, y: -36, zIndex: 128, }, 
    { x: -196, y: -36, zIndex: 128, }, 
    { x: -140, y: -36, zIndex: 128, }, 
    { x: -84,  y: -36, zIndex: 128, }, 
    { x: -28,  y: -36, zIndex: 128, }, 
    { x: 28,   y: -36, zIndex: 128, }, 
    { x: 84,   y: -36, zIndex: 128, }, 
    { x: 140,  y: -36, zIndex: 128, }, 
    { x: 196,  y: -36, zIndex: 128, }, 
    { x: 252,  y: -36, zIndex: 128, }, 
    { x: 308,  y: -36, zIndex: 128, }, 
    { x: 364,  y: -36, zIndex: 128, }, 
    { x: 420,  y: -36, zIndex: 128, }, 
    { x: 476,  y: -36, zIndex: 128, }, 
    { x: 532,  y: -36, zIndex: 128, }, 
    { x: -532, y: 36,  zIndex: 64, }, 
    { x: -476, y: 36,  zIndex: 64, }, 
    { x: -420, y: 36,  zIndex: 64, }, 
    { x: -364, y: 36,  zIndex: 64, }, 
    { x: -308, y: 36,  zIndex: 64, }, 
    { x: -252, y: 36,  zIndex: 64, }, 
    { x: -196, y: 36,  zIndex: 64, }, 
    { x: -140, y: 36,  zIndex: 64, }, 
    { x: -84,  y: 36,  zIndex: 64, }, 
    { x: -28,  y: 36,  zIndex: 64, }, 
    { x: 28,   y: 36,  zIndex: 64, }, 
    { x: 84,   y: 36,  zIndex: 64, }, 
    { x: 140,  y: 36,  zIndex: 64, }, 
    { x: 196,  y: 36,  zIndex: 64, }, 
    { x: 252,  y: 36,  zIndex: 64, }, 
    { x: 308,  y: 36,  zIndex: 64, }, 
    { x: 364,  y: 36,  zIndex: 64, }, 
    { x: 420,  y: 36,  zIndex: 64, }, 
    { x: 476,  y: 36,  zIndex: 64, }, 
    { x: 532,  y: 36,  zIndex: 64, }, 
    { x: -532, y: 108, zIndex: 32, }, 
    { x: -476, y: 108, zIndex: 32, }, 
    { x: -420, y: 108, zIndex: 32, }, 
    { x: -364, y: 108, zIndex: 32, }, 
    { x: -308, y: 108, zIndex: 32, }, 
    { x: -252, y: 108, zIndex: 32, }, 
    { x: -196, y: 108, zIndex: 32, }, 
    { x: -140, y: 108, zIndex: 32, }, 
    { x: -84,  y: 108, zIndex: 32, }, 
    { x: -28,  y: 108, zIndex: 32, }, 
    { x: 28,   y: 108, zIndex: 32, }, 
    { x: 84,   y: 108, zIndex: 32, }, 
    { x: 140,  y: 108, zIndex: 32, }, 
    { x: 196,  y: 108, zIndex: 32, }, 
    { x: 252,  y: 108, zIndex: 32, }, 
    { x: 308,  y: 108, zIndex: 32, }, 
    { x: 364,  y: 108, zIndex: 32, }, 
    { x: 420,  y: 108, zIndex: 32, }, 
    { x: 476,  y: 108, zIndex: 32, }, 
    { x: 532,  y: 108, zIndex: 32, }, 
];

// 2 人桌, 座位 2
const PLAYERZ_2_AT_SEAT_2_ = [
    { x: 532,  y: 68,  zIndex: 32, }, 
    { x: 476,  y: 68,  zIndex: 32, }, 
    { x: 420,  y: 68,  zIndex: 32, }, 
    { x: 364,  y: 68,  zIndex: 32, }, 
    { x: 308,  y: 68,  zIndex: 32, }, 
    { x: 252,  y: 68,  zIndex: 32, }, 
    { x: 196,  y: 68,  zIndex: 32, }, 
    { x: 140,  y: 68,  zIndex: 32, }, 
    { x: 84,   y: 68,  zIndex: 32, }, 
    { x: 28,   y: 68,  zIndex: 32, }, 
    { x: -28,  y: 68,  zIndex: 32, }, 
    { x: -84,  y: 68,  zIndex: 32, }, 
    { x: -140, y: 68,  zIndex: 32, }, 
    { x: -196, y: 68,  zIndex: 32, }, 
    { x: -252, y: 68,  zIndex: 32, }, 
    { x: -308, y: 68,  zIndex: 32, }, 
    { x: -364, y: 68,  zIndex: 32, }, 
    { x: -420, y: 68,  zIndex: 32, }, 
    { x: -476, y: 68,  zIndex: 32, }, 
    { x: -532, y: 68,  zIndex: 32, }, 
    { x: 532,  y: -4,  zIndex: 64, }, 
    { x: 476,  y: -4,  zIndex: 64, }, 
    { x: 420,  y: -4,  zIndex: 64, }, 
    { x: 364,  y: -4,  zIndex: 64, }, 
    { x: 308,  y: -4,  zIndex: 64, }, 
    { x: 252,  y: -4,  zIndex: 64, }, 
    { x: 196,  y: -4,  zIndex: 64, }, 
    { x: 140,  y: -4,  zIndex: 64, }, 
    { x: 84,   y: -4,  zIndex: 64, }, 
    { x: 28,   y: -4,  zIndex: 64, }, 
    { x: -28,  y: -4,  zIndex: 64, }, 
    { x: -84,  y: -4,  zIndex: 64, }, 
    { x: -140, y: -4,  zIndex: 64, }, 
    { x: -196, y: -4,  zIndex: 64, }, 
    { x: -252, y: -4,  zIndex: 64, }, 
    { x: -308, y: -4,  zIndex: 64, }, 
    { x: -364, y: -4,  zIndex: 64, }, 
    { x: -420, y: -4,  zIndex: 64, }, 
    { x: -476, y: -4,  zIndex: 64, }, 
    { x: -532, y: -4,  zIndex: 64, }, 
    { x: 532,  y: -76, zIndex: 128, }, 
    { x: 476,  y: -76, zIndex: 128, }, 
    { x: 420,  y: -76, zIndex: 128, }, 
    { x: 364,  y: -76, zIndex: 128, }, 
    { x: 308,  y: -76, zIndex: 128, }, 
    { x: 252,  y: -76, zIndex: 128, }, 
    { x: 196,  y: -76, zIndex: 128, }, 
    { x: 140,  y: -76, zIndex: 128, }, 
    { x: 84,   y: -76, zIndex: 128, }, 
    { x: 28,   y: -76, zIndex: 128, }, 
    { x: -28,  y: -76, zIndex: 128, }, 
    { x: -84,  y: -76, zIndex: 128, }, 
    { x: -140, y: -76, zIndex: 128, }, 
    { x: -196, y: -76, zIndex: 128, }, 
    { x: -252, y: -76, zIndex: 128, }, 
    { x: -308, y: -76, zIndex: 128, }, 
    { x: -364, y: -76, zIndex: 128, }, 
    { x: -420, y: -76, zIndex: 128, }, 
    { x: -476, y: -76, zIndex: 128, }, 
    { x: -532, y: -76, zIndex: 128, }, 
];
//#endregion

//#region 3 人桌位置配置
// 3 人桌
///////////////////////////////////////////////////////////////////////
// 
// 3 人桌, 座位 0
const PLAYERZ_3_AT_SEAT_0_ = [
    { x: -308, y: -36, zIndex: 128, }, 
    { x: -252, y: -36, zIndex: 128, }, 
    { x: -196, y: -36, zIndex: 128, }, 
    { x: -140, y: -36, zIndex: 128, }, 
    { x: -84,  y: -36, zIndex: 128, }, 
    { x: -28,  y: -36, zIndex: 128, }, 
    { x: 28,   y: -36, zIndex: 128, }, 
    { x: 84,   y: -36, zIndex: 128, }, 
    { x: 140,  y: -36, zIndex: 128, }, 
    { x: 196,  y: -36, zIndex: 128, }, 
    { x: 252,  y: -36, zIndex: 128, }, 
    { x: 308,  y: -36, zIndex: 128, }, 
    { x: -308, y: 36,  zIndex: 64, }, 
    { x: -252, y: 36,  zIndex: 64, }, 
    { x: -196, y: 36,  zIndex: 64, }, 
    { x: -140, y: 36,  zIndex: 64, }, 
    { x: -84,  y: 36,  zIndex: 64, }, 
    { x: -28,  y: 36,  zIndex: 64, }, 
    { x: 28,   y: 36,  zIndex: 64, }, 
    { x: 84,   y: 36,  zIndex: 64, }, 
    { x: 140,  y: 36,  zIndex: 64, }, 
    { x: 196,  y: 36,  zIndex: 64, }, 
    { x: 252,  y: 36,  zIndex: 64, }, 
    { x: 308,  y: 36,  zIndex: 64, }, 
    { x: -308, y: 108, zIndex: 32, }, 
    { x: -252, y: 108, zIndex: 32, }, 
    { x: -196, y: 108, zIndex: 32, }, 
    { x: -140, y: 108, zIndex: 32, }, 
    { x: -84,  y: 108, zIndex: 32, }, 
    { x: -28,  y: 108, zIndex: 32, }, 
    { x: 28,   y: 108, zIndex: 32, }, 
    { x: 84,   y: 108, zIndex: 32, }, 
    { x: 140,  y: 108, zIndex: 32, }, 
    { x: 196,  y: 108, zIndex: 32, }, 
    { x: 252,  y: 108, zIndex: 32, }, 
    { x: 308,  y: 108, zIndex: 32, }, 
];

// 3 人桌, 座位 1
const PLAYERZ_3_AT_SEAT_1_ = [
    { x: 32,  y: -128, zIndex: 128, }, 
    { x: 32,  y: -100, zIndex: 118, }, 
    { x: 32,  y: -72,  zIndex: 108, }, 
    { x: 32,  y: -44,  zIndex: 98, }, 
    { x: 32,  y: -16,  zIndex: 88, }, 
    { x: 32,  y: 12,   zIndex: 78, }, 
    { x: 32,  y: 40,   zIndex: 68, }, 
    { x: 32,  y: 68,   zIndex: 58, }, 
    { x: 32,  y: 96,   zIndex: 48, }, 
    { x: 32,  y: 124,  zIndex: 38, }, 
    { x: 32,  y: 152,  zIndex: 28, }, 
    { x: 32,  y: 180,  zIndex: 18, }, 
    { x: -8,  y: -128, zIndex: 128, }, 
    { x: -8,  y: -100, zIndex: 118, }, 
    { x: -8,  y: -72,  zIndex: 108, }, 
    { x: -8,  y: -44,  zIndex: 98, }, 
    { x: -8,  y: -16,  zIndex: 88, }, 
    { x: -8,  y: 12,   zIndex: 78, }, 
    { x: -8,  y: 40,   zIndex: 68, }, 
    { x: -8,  y: 68,   zIndex: 58, }, 
    { x: -8,  y: 96,   zIndex: 48, }, 
    { x: -8,  y: 124,  zIndex: 38, }, 
    { x: -8,  y: 152,  zIndex: 28, }, 
    { x: -8,  y: 180,  zIndex: 18, }, 
    { x: -48, y: -128, zIndex: 128, }, 
    { x: -48, y: -100, zIndex: 118, }, 
    { x: -48, y: -72,  zIndex: 108, }, 
    { x: -48, y: -44,  zIndex: 98, }, 
    { x: -48, y: -16,  zIndex: 88, }, 
    { x: -48, y: 12,   zIndex: 78, }, 
    { x: -48, y: 40,   zIndex: 68, }, 
    { x: -48, y: 68,   zIndex: 58, }, 
    { x: -48, y: 96,   zIndex: 48, }, 
    { x: -48, y: 124,  zIndex: 38, }, 
    { x: -48, y: 152,  zIndex: 28, }, 
    { x: -48, y: 180,  zIndex: 18, },     
];

// 3 人桌, 座位 3
const PLAYERZ_3_AT_SEAT_3_ = [
    { x: -32, y: 180,  zIndex: 16, }, 
    { x: -32, y: 152,  zIndex: 26, }, 
    { x: -32, y: 124,  zIndex: 36, }, 
    { x: -32, y: 96,   zIndex: 46, }, 
    { x: -32, y: 68,   zIndex: 56, }, 
    { x: -32, y: 40,   zIndex: 66, }, 
    { x: -32, y: 12,   zIndex: 76, }, 
    { x: -32, y: -16,  zIndex: 86, }, 
    { x: -32, y: -44,  zIndex: 96, }, 
    { x: -32, y: -72,  zIndex: 106, }, 
    { x: -32, y: -100, zIndex: 116, }, 
    { x: -32, y: -128, zIndex: 126, }, 
    { x: 8,   y: 180,  zIndex: 16, }, 
    { x: 8,   y: 152,  zIndex: 26, }, 
    { x: 8,   y: 124,  zIndex: 36, }, 
    { x: 8,   y: 96,   zIndex: 46, }, 
    { x: 8,   y: 68,   zIndex: 56, }, 
    { x: 8,   y: 40,   zIndex: 66, }, 
    { x: 8,   y: 12,   zIndex: 76, }, 
    { x: 8,   y: -16,  zIndex: 86, }, 
    { x: 8,   y: -44,  zIndex: 96, }, 
    { x: 8,   y: -72,  zIndex: 106, }, 
    { x: 8,   y: -100, zIndex: 116, }, 
    { x: 8,   y: -128, zIndex: 126, }, 
    { x: 48,  y: 180,  zIndex: 16, }, 
    { x: 48,  y: 152,  zIndex: 26, }, 
    { x: 48,  y: 124,  zIndex: 36, }, 
    { x: 48,  y: 96,   zIndex: 46, }, 
    { x: 48,  y: 68,   zIndex: 56, }, 
    { x: 48,  y: 40,   zIndex: 66, }, 
    { x: 48,  y: 12,   zIndex: 76, }, 
    { x: 48,  y: -16,  zIndex: 86, }, 
    { x: 48,  y: -44,  zIndex: 96, }, 
    { x: 48,  y: -72,  zIndex: 106, }, 
    { x: 48,  y: -100, zIndex: 116, }, 
    { x: 48,  y: -128, zIndex: 126, }, 
];
//#endregion

//#region 4 人桌位置配置
// 4 人桌
///////////////////////////////////////////////////////////////////////
// 
// 4 人桌, 座位 0
const PLAYERZ_4_AT_SEAT_0_ = [
    { x: -308, y: -36, zIndex: 128, }, 
    { x: -252, y: -36, zIndex: 128, }, 
    { x: -196, y: -36, zIndex: 128, }, 
    { x: -140, y: -36, zIndex: 128, }, 
    { x: -84,  y: -36, zIndex: 128, }, 
    { x: -28,  y: -36, zIndex: 128, }, 
    { x: 28,   y: -36, zIndex: 128, }, 
    { x: 84,   y: -36, zIndex: 128, }, 
    { x: 140,  y: -36, zIndex: 128, }, 
    { x: 196,  y: -36, zIndex: 128, }, 
    { x: 252,  y: -36, zIndex: 128, }, 
    { x: 308,  y: -36, zIndex: 128, }, 
    { x: -308, y: 36,  zIndex: 64, }, 
    { x: -252, y: 36,  zIndex: 64, }, 
    { x: -196, y: 36,  zIndex: 64, }, 
    { x: -140, y: 36,  zIndex: 64, }, 
    { x: -84,  y: 36,  zIndex: 64, }, 
    { x: -28,  y: 36,  zIndex: 64, }, 
    { x: 28,   y: 36,  zIndex: 64, }, 
    { x: 84,   y: 36,  zIndex: 64, }, 
    { x: 140,  y: 36,  zIndex: 64, }, 
    { x: 196,  y: 36,  zIndex: 64, }, 
    { x: 252,  y: 36,  zIndex: 64, }, 
    { x: 308,  y: 36,  zIndex: 64, }, 
    { x: -308, y: 108, zIndex: 32, }, 
    { x: -252, y: 108, zIndex: 32, }, 
    { x: -196, y: 108, zIndex: 32, }, 
    { x: -140, y: 108, zIndex: 32, }, 
    { x: -84,  y: 108, zIndex: 32, }, 
    { x: -28,  y: 108, zIndex: 32, }, 
    { x: 28,   y: 108, zIndex: 32, }, 
    { x: 84,   y: 108, zIndex: 32, }, 
    { x: 140,  y: 108, zIndex: 32, }, 
    { x: 196,  y: 108, zIndex: 32, }, 
    { x: 252,  y: 108, zIndex: 32, }, 
    { x: 308,  y: 108, zIndex: 32, }, 
];

// 4 人桌, 座位 1
const PLAYERZ_4_AT_SEAT_1_ = [
    { x: 32,  y: -128, zIndex: 128, }, 
    { x: 32,  y: -100, zIndex: 118, }, 
    { x: 32,  y: -72,  zIndex: 108, }, 
    { x: 32,  y: -44,  zIndex: 98, }, 
    { x: 32,  y: -16,  zIndex: 88, }, 
    { x: 32,  y: 12,   zIndex: 78, }, 
    { x: 32,  y: 40,   zIndex: 68, }, 
    { x: 32,  y: 68,   zIndex: 58, }, 
    { x: 32,  y: 96,   zIndex: 48, }, 
    { x: -8,  y: -128, zIndex: 128, }, 
    { x: -8,  y: -100, zIndex: 118, }, 
    { x: -8,  y: -72,  zIndex: 108, }, 
    { x: -8,  y: -44,  zIndex: 98, }, 
    { x: -8,  y: -16,  zIndex: 88, }, 
    { x: -8,  y: 12,   zIndex: 78, }, 
    { x: -8,  y: 40,   zIndex: 68, }, 
    { x: -8,  y: 68,   zIndex: 58, }, 
    { x: -8,  y: 96,   zIndex: 48, }, 
    { x: -48, y: -128, zIndex: 128, }, 
    { x: -48, y: -100, zIndex: 118, }, 
    { x: -48, y: -72,  zIndex: 108, }, 
    { x: -48, y: -44,  zIndex: 98, }, 
    { x: -48, y: -16,  zIndex: 88, }, 
    { x: -48, y: 12,   zIndex: 78, }, 
    { x: -48, y: 40,   zIndex: 68, }, 
    { x: -48, y: 68,   zIndex: 58, }, 
    { x: -48, y: 96,   zIndex: 48, }, 
    { x: -88, y: -128, zIndex: 128, }, 
    { x: -88, y: -100, zIndex: 118, }, 
    { x: -88, y: -72,  zIndex: 108, }, 
    { x: -88, y: -44,  zIndex: 98, }, 
    { x: -88, y: -16,  zIndex: 88, }, 
    { x: -88, y: 12,   zIndex: 78, }, 
    { x: -88, y: 40,   zIndex: 68, }, 
    { x: -88, y: 68,   zIndex: 58, }, 
    { x: -88, y: 96,   zIndex: 48, }, 
];

// 4 人桌,座位 2
const PLAYERZ_4_AT_SEAT_2_ = [
    { x: 308,  y: 68,  zIndex: 32, }, 
    { x: 252,  y: 68,  zIndex: 32, }, 
    { x: 196,  y: 68,  zIndex: 32, }, 
    { x: 140,  y: 68,  zIndex: 32, }, 
    { x: 84,   y: 68,  zIndex: 32, }, 
    { x: 28,   y: 68,  zIndex: 32, }, 
    { x: -28,  y: 68,  zIndex: 32, }, 
    { x: -84,  y: 68,  zIndex: 32, }, 
    { x: -140, y: 68,  zIndex: 32, }, 
    { x: -196, y: 68,  zIndex: 32, }, 
    { x: -252, y: 68,  zIndex: 32, }, 
    { x: -308, y: 68,  zIndex: 32, }, 
    { x: 308,  y: -4,  zIndex: 64, }, 
    { x: 252,  y: -4,  zIndex: 64, }, 
    { x: 196,  y: -4,  zIndex: 64, }, 
    { x: 140,  y: -4,  zIndex: 64, }, 
    { x: 84,   y: -4,  zIndex: 64, }, 
    { x: 28,   y: -4,  zIndex: 64, }, 
    { x: -28,  y: -4,  zIndex: 64, }, 
    { x: -84,  y: -4,  zIndex: 64, }, 
    { x: -140, y: -4,  zIndex: 64, }, 
    { x: -196, y: -4,  zIndex: 64, }, 
    { x: -252, y: -4,  zIndex: 64, }, 
    { x: -308, y: -4,  zIndex: 64, }, 
    { x: 308,  y: -76, zIndex: 128, }, 
    { x: 252,  y: -76, zIndex: 128, }, 
    { x: 196,  y: -76, zIndex: 128, }, 
    { x: 140,  y: -76, zIndex: 128, }, 
    { x: 84,   y: -76, zIndex: 128, }, 
    { x: 28,   y: -76, zIndex: 128, }, 
    { x: -28,  y: -76, zIndex: 128, }, 
    { x: -84,  y: -76, zIndex: 128, }, 
    { x: -140, y: -76, zIndex: 128, }, 
    { x: -196, y: -76, zIndex: 128, }, 
    { x: -252, y: -76, zIndex: 128, }, 
    { x: -308, y: -76, zIndex: 128, }, 
];

// 4 人桌, 座位 3
const PLAYERZ_4_AT_SEAT_3_ = [
    { x: -32, y: 180,  zIndex: 16, }, 
    { x: -32, y: 152,  zIndex: 26, }, 
    { x: -32, y: 124,  zIndex: 36, }, 
    { x: -32, y: 96,   zIndex: 46, }, 
    { x: -32, y: 68,   zIndex: 56, }, 
    { x: -32, y: 40,   zIndex: 66, }, 
    { x: -32, y: 12,   zIndex: 76, }, 
    { x: -32, y: -16,  zIndex: 86, }, 
    { x: -32, y: -44,  zIndex: 96, }, 
    { x: -32, y: -72,  zIndex: 106, }, 
    { x: -32, y: -100, zIndex: 116, }, 
    { x: -32, y: -128, zIndex: 126, }, 
    { x: 8,   y: 180,  zIndex: 16, }, 
    { x: 8,   y: 152,  zIndex: 26, }, 
    { x: 8,   y: 124,  zIndex: 36, }, 
    { x: 8,   y: 96,   zIndex: 46, }, 
    { x: 8,   y: 68,   zIndex: 56, }, 
    { x: 8,   y: 40,   zIndex: 66, }, 
    { x: 8,   y: 12,   zIndex: 76, }, 
    { x: 8,   y: -16,  zIndex: 86, }, 
    { x: 8,   y: -44,  zIndex: 96, }, 
    { x: 8,   y: -72,  zIndex: 106, }, 
    { x: 8,   y: -100, zIndex: 116, }, 
    { x: 8,   y: -128, zIndex: 126, }, 
    { x: 48,  y: 180,  zIndex: 16, }, 
    { x: 48,  y: 152,  zIndex: 26, }, 
    { x: 48,  y: 124,  zIndex: 36, }, 
    { x: 48,  y: 96,   zIndex: 46, }, 
    { x: 48,  y: 68,   zIndex: 56, }, 
    { x: 48,  y: 40,   zIndex: 66, }, 
    { x: 48,  y: 12,   zIndex: 76, }, 
    { x: 48,  y: -16,  zIndex: 86, }, 
    { x: 48,  y: -44,  zIndex: 96, }, 
    { x: 48,  y: -72,  zIndex: 106, }, 
    { x: 48,  y: -100, zIndex: 116, }, 
    { x: 48,  y: -128, zIndex: 126, }, 
];
//#endregion

// 2 人桌位置
const PLAYERZ_2_AT_SEAT_X_ARRAY = [
    PLAYERZ_2_AT_SEAT_0_,
    null, // 用来占位
    PLAYERZ_2_AT_SEAT_2_,
    null, // 用来占位
];

// 3 人桌位置
const PLAYERZ_3_AT_SEAT_X_ARRAY = [
    PLAYERZ_3_AT_SEAT_0_,
    PLAYERZ_3_AT_SEAT_1_,
    null, // 用来占位
    PLAYERZ_3_AT_SEAT_3_,
];

// 4 人桌位置
const PLAYERZ_4_AT_SEAT_X_ARRAY = [
    PLAYERZ_4_AT_SEAT_0_,
    PLAYERZ_4_AT_SEAT_1_,
    PLAYERZ_4_AT_SEAT_2_,
    PLAYERZ_4_AT_SEAT_3_,
];
//#endregion

/**
 * 已打出的麻将牌分组组件
 */
@ccclass
export default class MahjongOutputGroupComp extends cc.Component {
    /**
     * 麻将牌数值数值
     */
    private _oMahjongValArray: Array<number> = null;

    /**
     * 客户端座位索引
     */
    private _nSeatIndexAtClient: number = -1;

    /**
     * 最大玩家数量
     */
    private _nMaxPlayer: number;

    /**
     * onLoad
     */
    onLoad(): void {
        // 位置使用尺寸
        let oPlayerXAtSeatXArray = PLAYERZ_2_AT_SEAT_X_ARRAY;

        if (3 == this._nMaxPlayer) {
            oPlayerXAtSeatXArray = PLAYERZ_3_AT_SEAT_X_ARRAY;
        } else if (4 == this._nMaxPlayer) {
            oPlayerXAtSeatXArray = PLAYERZ_4_AT_SEAT_X_ARRAY;
        }

        // 根据座位索引获取位置数组
        let oAtSeatX = oPlayerXAtSeatXArray[this._nSeatIndexAtClient];

        if (null == oAtSeatX) {
            return;
        }

        for (let nIndex = 0; nIndex < oAtSeatX.length; nIndex++) {
            let oCurrPos = oAtSeatX[nIndex];
            let nX = oCurrPos.x;
            let nY = oCurrPos.y;
            let nZIndex =  oCurrPos.zIndex;

            let oNewPos = new cc.Node();
            oNewPos.x = nX;
            oNewPos.y = nY;

            this.node.addChild(oNewPos, nZIndex, `Pos_${nIndex}_`);
        }
    }

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
    // update (nDeltaTime: number): void {
    // }

    /**
     * 设置客户端座位索引
     * 
     * @param nVal 整数值
     */
    putSeatIndexAtClient(nVal: number): MahjongOutputGroupComp {
        this._nSeatIndexAtClient = nVal;
        return this;
    }

    /**
     * 设置最大玩家数量
     * 
     * @param nVal 整数值
     */
    putMaxPlayer(nVal: number): MahjongOutputGroupComp {
        this._nMaxPlayer = nVal;
        return this;
    }

    /**
     * 添加一张麻将到尾部, 一般是在出牌逻辑里调用
     * 
     * @param nT 麻将数值
     */
    pushAMahjongVal(nT: number): void {
        if (nT <= 0) {
            return;
        }

        // 获取麻将面值数组
        let oMahjongValArray = this._oMahjongValArray = this._oMahjongValArray || [];
        // 添加到数组
        oMahjongValArray.push(nT);

        // 获取最后一张牌的索引
        let nLastIndex = oMahjongValArray.length - 1;

        // 修改麻将牌面图片
        __changeAMahjongVal(
            cc.find(`Pos_${nLastIndex}_`, this.node),
            nT // 麻将牌数值
        );
    }

    /**
     * 比较最后一张麻将牌的值, 如果相同就弹出
     * 
     * @param nT 麻将数值
     * @return 
     */
    compareAMahjongValAndPop(nT: number): boolean {
        // 获取麻将面值数组
        let oMahjongValArray = this._oMahjongValArray = this._oMahjongValArray || [];

        if (oMahjongValArray.length <= 0) {
            return false;
        }

        let nMahjongVal = oMahjongValArray[oMahjongValArray.length - 1];

        if (nMahjongVal != nT) {
            return false;
        }

        // 弹出最后一张麻将牌
        oMahjongValArray.pop();

        // 获取最后一张牌的索引
        let nLastIndex = Math.max(0, oMahjongValArray.length);

        if (nLastIndex >= 0) {
            // 修改麻将面值
            __changeAMahjongVal(
                cc.find(`Pos_${nLastIndex}_`, this.node),
                -1 // 清除面值
            );
        }

        return true;
    }

    /**
     * 清理所有已打出的麻将
     */
    popAll(): void {
        // 获取麻将面值数组
        let oMahjongValArray = this._oMahjongValArray = this._oMahjongValArray || [];

        if (oMahjongValArray.length <= 0) {
            return;
        }

        for (let nIndex: number = 0; nIndex < this._oMahjongValArray.length; nIndex++) {
            // 修改麻将面值
            __changeAMahjongVal(
                cc.find(`Pos_${nIndex}_`, this.node),
                -1 // 清除面值
            );
        }

        this._oMahjongValArray = null;
    }

    /**
     * 获取最后一个麻将节点
     * 
     * @return 最后一个麻将节点
     */
    getLastMahjongNode(): cc.Node {
        if (null == this._oMahjongValArray || 
            this._oMahjongValArray.length <= 0) {
            return null;
        }

        let nLastIndex = this._oMahjongValArray.length - 1;

        return cc.find(
            `Pos_${nLastIndex}_`, 
            this.node
        );
    }
}

/**
 * 修改麻将牌花
 * 
 * @param oAtPosNode 所在位置节点
 * @param nMahjongVal 麻将数据
 */
function __changeAMahjongVal(oAtPosNode: cc.Node, nMahjongVal: number): void {
    if (null == oAtPosNode) {
        cc.log("oAtPosNode is null");
        return;
    }

    if (nMahjongVal <= 0) {
        // 关闭节点
        oAtPosNode.active = false;
        return;
    }

    // 激活节点
    oAtPosNode.active = true;

    let oShowNode: cc.Node;

    if (oAtPosNode.childrenCount > 0) {
        oShowNode = oAtPosNode.children[0];
    } else {
        // 获取麻将牌模板
        let oMahjongTileShowTemplate = cc.find("MahjongTileShowTemplate", oAtPosNode.parent);
        // 通过模板创建一个新节点
        oShowNode = cc.instantiate(oMahjongTileShowTemplate);
        oAtPosNode.addChild(oShowNode);
    }

    // 找到显示节点的 Val 子节点,
    // 设置麻将牌花图片
    cc.find("Val", oShowNode).getComponent(cc.Sprite).spriteFrame = AllMahjongValImg.getSpriteFrame(nMahjongVal);
    oShowNode.active = true;
}
