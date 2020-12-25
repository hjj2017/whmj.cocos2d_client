/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

import * as $protobuf from "./protobufjs.ver_MJ_weihai_";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots.MJ_weihai_ || ($protobuf.roots.MJ_weihai_ = {});

export const msg = $root.msg = (() => {

    /**
     * Namespace msg.
     * @exports msg
     * @namespace
     */
    const msg = {};

    /**
     * MJ_weihai_MsgCodeDef enum.
     * @name msg.MJ_weihai_MsgCodeDef
     * @enum {number}
     * @property {number} _Dummy=0 _Dummy value
     * @property {number} _JoinRoomBroadcast=1001 _JoinRoomBroadcast value
     * @property {number} _DissolveTheRoomCmd=1002 _DissolveTheRoomCmd value
     * @property {number} _DissolveTheRoomResult=1003 _DissolveTheRoomResult value
     * @property {number} _DissolveTheRoomBroadcast=1004 _DissolveTheRoomBroadcast value
     * @property {number} _DissolutionVoteCmd=1005 _DissolutionVoteCmd value
     * @property {number} _DissolutionVoteResult=1006 _DissolutionVoteResult value
     * @property {number} _DissolutionVoteBroadcast=1007 _DissolutionVoteBroadcast value
     * @property {number} _DissolveSuccezzBroadcast=1008 _DissolveSuccezzBroadcast value
     * @property {number} _FireAPlayerCmd=1009 _FireAPlayerCmd value
     * @property {number} _FireAPlayerResult=1010 _FireAPlayerResult value
     * @property {number} _FireAPlayerBroadcast=1011 _FireAPlayerBroadcast value
     * @property {number} _QuitRoomCmd=1012 _QuitRoomCmd value
     * @property {number} _QuitRoomResult=1013 _QuitRoomResult value
     * @property {number} _QuitRoomBroadcast=1014 _QuitRoomBroadcast value
     * @property {number} _SyncRoomDataCmd=1015 _SyncRoomDataCmd value
     * @property {number} _SyncRoomDataResult=1016 _SyncRoomDataResult value
     * @property {number} _ReportGeoLocationCmd=1017 _ReportGeoLocationCmd value
     * @property {number} _ReportGeoLocationResult=1018 _ReportGeoLocationResult value
     * @property {number} _MeasureGeoDistanceCmd=1019 _MeasureGeoDistanceCmd value
     * @property {number} _MeasureGeoDistanceResult=1020 _MeasureGeoDistanceResult value
     * @property {number} _PrepareCmd=1021 _PrepareCmd value
     * @property {number} _PrepareResult=1022 _PrepareResult value
     * @property {number} _PrepareBroadcast=1023 _PrepareBroadcast value
     * @property {number} _OfficialStartCmd=1024 _OfficialStartCmd value
     * @property {number} _OfficialStartResult=1025 _OfficialStartResult value
     * @property {number} _OfficialStartBroadcast=1026 _OfficialStartBroadcast value
     * @property {number} _SelectPiaoHintBroadcast=1027 _SelectPiaoHintBroadcast value
     * @property {number} _DingPiaoCmd=1028 _DingPiaoCmd value
     * @property {number} _DingPiaoResult=1029 _DingPiaoResult value
     * @property {number} _DingPiaoBroadcast=1030 _DingPiaoBroadcast value
     * @property {number} _RoundStartedBroadcast=1031 _RoundStartedBroadcast value
     * @property {number} _MahjongInHandChangedResult=1032 _MahjongInHandChangedResult value
     * @property {number} _MahjongInHandChangedBroadcast=1033 _MahjongInHandChangedBroadcast value
     * @property {number} _MahjongMoPaiResult=1034 _MahjongMoPaiResult value
     * @property {number} _MahjongMoPaiBroadcast=1035 _MahjongMoPaiBroadcast value
     * @property {number} _RedirectActUserIdBroadcast=1036 _RedirectActUserIdBroadcast value
     * @property {number} _OpRemainTimeBroadcast=1037 _OpRemainTimeBroadcast value
     * @property {number} _MahjongChuPaiCmd=1038 _MahjongChuPaiCmd value
     * @property {number} _MahjongChuPaiResult=1039 _MahjongChuPaiResult value
     * @property {number} _MahjongChuPaiBroadcast=1040 _MahjongChuPaiBroadcast value
     * @property {number} _MahjongChiPengGangHuOpHintResult=1041 _MahjongChiPengGangHuOpHintResult value
     * @property {number} _MahjongChiCmd=1042 _MahjongChiCmd value
     * @property {number} _MahjongChiResult=1043 _MahjongChiResult value
     * @property {number} _MahjongChiBroadcast=1044 _MahjongChiBroadcast value
     * @property {number} _MahjongPengCmd=1045 _MahjongPengCmd value
     * @property {number} _MahjongPengResult=1046 _MahjongPengResult value
     * @property {number} _MahjongPengBroadcast=1047 _MahjongPengBroadcast value
     * @property {number} _MahjongGangCmd=1048 _MahjongGangCmd value
     * @property {number} _MahjongMingGangResult=1049 _MahjongMingGangResult value
     * @property {number} _MahjongAnGangResult=1050 _MahjongAnGangResult value
     * @property {number} _MahjongBuGangResult=1051 _MahjongBuGangResult value
     * @property {number} _MahjongMingGangBroadcast=1052 _MahjongMingGangBroadcast value
     * @property {number} _MahjongAnGangBroadcast=1053 _MahjongAnGangBroadcast value
     * @property {number} _MahjongBuGangBroadcast=1054 _MahjongBuGangBroadcast value
     * @property {number} _MahjongLiangDaoCmd=1055 _MahjongLiangDaoCmd value
     * @property {number} _MahjongLiangDaoResult=1056 _MahjongLiangDaoResult value
     * @property {number} _MahjongLiangDaoBroadcast=1057 _MahjongLiangDaoBroadcast value
     * @property {number} _MahjongHuCmd=1058 _MahjongHuCmd value
     * @property {number} _MahjongHuOrZiMoResult=1059 _MahjongHuOrZiMoResult value
     * @property {number} _MahjongHuOrZiMoBroadcast=1060 _MahjongHuOrZiMoBroadcast value
     * @property {number} _MahjongGuoCmd=1061 _MahjongGuoCmd value
     * @property {number} _MahjongGuoResult=1062 _MahjongGuoResult value
     * @property {number} _MahjongHuangZhuangBroadcast=1063 _MahjongHuangZhuangBroadcast value
     * @property {number} _RoundSettlementBroadcast=1064 _RoundSettlementBroadcast value
     * @property {number} _RoomSettlementBroadcast=1065 _RoomSettlementBroadcast value
     * @property {number} _MahjongLiangFengCmd=1066 _MahjongLiangFengCmd value
     * @property {number} _MahjongLiangFengResult=1067 _MahjongLiangFengResult value
     * @property {number} _MahjongLiangFengBroadcast=1068 _MahjongLiangFengBroadcast value
     * @property {number} _MahjongBuFengCmd=1069 _MahjongBuFengCmd value
     * @property {number} _MahjongBuFengResult=1070 _MahjongBuFengResult value
     * @property {number} _MahjongBuFengBroadcast=1071 _MahjongBuFengBroadcast value
     * @property {number} _MahjongLiangGangDingBroadcast=1072 _MahjongLiangGangDingBroadcast value
     */
    msg.MJ_weihai_MsgCodeDef = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "_Dummy"] = 0;
        values[valuesById[1001] = "_JoinRoomBroadcast"] = 1001;
        values[valuesById[1002] = "_DissolveTheRoomCmd"] = 1002;
        values[valuesById[1003] = "_DissolveTheRoomResult"] = 1003;
        values[valuesById[1004] = "_DissolveTheRoomBroadcast"] = 1004;
        values[valuesById[1005] = "_DissolutionVoteCmd"] = 1005;
        values[valuesById[1006] = "_DissolutionVoteResult"] = 1006;
        values[valuesById[1007] = "_DissolutionVoteBroadcast"] = 1007;
        values[valuesById[1008] = "_DissolveSuccezzBroadcast"] = 1008;
        values[valuesById[1009] = "_FireAPlayerCmd"] = 1009;
        values[valuesById[1010] = "_FireAPlayerResult"] = 1010;
        values[valuesById[1011] = "_FireAPlayerBroadcast"] = 1011;
        values[valuesById[1012] = "_QuitRoomCmd"] = 1012;
        values[valuesById[1013] = "_QuitRoomResult"] = 1013;
        values[valuesById[1014] = "_QuitRoomBroadcast"] = 1014;
        values[valuesById[1015] = "_SyncRoomDataCmd"] = 1015;
        values[valuesById[1016] = "_SyncRoomDataResult"] = 1016;
        values[valuesById[1017] = "_ReportGeoLocationCmd"] = 1017;
        values[valuesById[1018] = "_ReportGeoLocationResult"] = 1018;
        values[valuesById[1019] = "_MeasureGeoDistanceCmd"] = 1019;
        values[valuesById[1020] = "_MeasureGeoDistanceResult"] = 1020;
        values[valuesById[1021] = "_PrepareCmd"] = 1021;
        values[valuesById[1022] = "_PrepareResult"] = 1022;
        values[valuesById[1023] = "_PrepareBroadcast"] = 1023;
        values[valuesById[1024] = "_OfficialStartCmd"] = 1024;
        values[valuesById[1025] = "_OfficialStartResult"] = 1025;
        values[valuesById[1026] = "_OfficialStartBroadcast"] = 1026;
        values[valuesById[1027] = "_SelectPiaoHintBroadcast"] = 1027;
        values[valuesById[1028] = "_DingPiaoCmd"] = 1028;
        values[valuesById[1029] = "_DingPiaoResult"] = 1029;
        values[valuesById[1030] = "_DingPiaoBroadcast"] = 1030;
        values[valuesById[1031] = "_RoundStartedBroadcast"] = 1031;
        values[valuesById[1032] = "_MahjongInHandChangedResult"] = 1032;
        values[valuesById[1033] = "_MahjongInHandChangedBroadcast"] = 1033;
        values[valuesById[1034] = "_MahjongMoPaiResult"] = 1034;
        values[valuesById[1035] = "_MahjongMoPaiBroadcast"] = 1035;
        values[valuesById[1036] = "_RedirectActUserIdBroadcast"] = 1036;
        values[valuesById[1037] = "_OpRemainTimeBroadcast"] = 1037;
        values[valuesById[1038] = "_MahjongChuPaiCmd"] = 1038;
        values[valuesById[1039] = "_MahjongChuPaiResult"] = 1039;
        values[valuesById[1040] = "_MahjongChuPaiBroadcast"] = 1040;
        values[valuesById[1041] = "_MahjongChiPengGangHuOpHintResult"] = 1041;
        values[valuesById[1042] = "_MahjongChiCmd"] = 1042;
        values[valuesById[1043] = "_MahjongChiResult"] = 1043;
        values[valuesById[1044] = "_MahjongChiBroadcast"] = 1044;
        values[valuesById[1045] = "_MahjongPengCmd"] = 1045;
        values[valuesById[1046] = "_MahjongPengResult"] = 1046;
        values[valuesById[1047] = "_MahjongPengBroadcast"] = 1047;
        values[valuesById[1048] = "_MahjongGangCmd"] = 1048;
        values[valuesById[1049] = "_MahjongMingGangResult"] = 1049;
        values[valuesById[1050] = "_MahjongAnGangResult"] = 1050;
        values[valuesById[1051] = "_MahjongBuGangResult"] = 1051;
        values[valuesById[1052] = "_MahjongMingGangBroadcast"] = 1052;
        values[valuesById[1053] = "_MahjongAnGangBroadcast"] = 1053;
        values[valuesById[1054] = "_MahjongBuGangBroadcast"] = 1054;
        values[valuesById[1055] = "_MahjongLiangDaoCmd"] = 1055;
        values[valuesById[1056] = "_MahjongLiangDaoResult"] = 1056;
        values[valuesById[1057] = "_MahjongLiangDaoBroadcast"] = 1057;
        values[valuesById[1058] = "_MahjongHuCmd"] = 1058;
        values[valuesById[1059] = "_MahjongHuOrZiMoResult"] = 1059;
        values[valuesById[1060] = "_MahjongHuOrZiMoBroadcast"] = 1060;
        values[valuesById[1061] = "_MahjongGuoCmd"] = 1061;
        values[valuesById[1062] = "_MahjongGuoResult"] = 1062;
        values[valuesById[1063] = "_MahjongHuangZhuangBroadcast"] = 1063;
        values[valuesById[1064] = "_RoundSettlementBroadcast"] = 1064;
        values[valuesById[1065] = "_RoomSettlementBroadcast"] = 1065;
        values[valuesById[1066] = "_MahjongLiangFengCmd"] = 1066;
        values[valuesById[1067] = "_MahjongLiangFengResult"] = 1067;
        values[valuesById[1068] = "_MahjongLiangFengBroadcast"] = 1068;
        values[valuesById[1069] = "_MahjongBuFengCmd"] = 1069;
        values[valuesById[1070] = "_MahjongBuFengResult"] = 1070;
        values[valuesById[1071] = "_MahjongBuFengBroadcast"] = 1071;
        values[valuesById[1072] = "_MahjongLiangGangDingBroadcast"] = 1072;
        return values;
    })();

    msg.KeyAndVal = (function() {

        /**
         * Properties of a KeyAndVal.
         * @memberof msg
         * @interface IKeyAndVal
         * @property {number|null} [key] KeyAndVal key
         * @property {number|null} [val] KeyAndVal val
         */

        /**
         * Constructs a new KeyAndVal.
         * @memberof msg
         * @classdesc Represents a KeyAndVal.
         * @implements IKeyAndVal
         * @constructor
         * @param {msg.IKeyAndVal=} [properties] Properties to set
         */
        function KeyAndVal(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KeyAndVal key.
         * @member {number} key
         * @memberof msg.KeyAndVal
         * @instance
         */
        KeyAndVal.prototype.key = 0;

        /**
         * KeyAndVal val.
         * @member {number} val
         * @memberof msg.KeyAndVal
         * @instance
         */
        KeyAndVal.prototype.val = 0;

        /**
         * Creates a new KeyAndVal instance using the specified properties.
         * @function create
         * @memberof msg.KeyAndVal
         * @static
         * @param {msg.IKeyAndVal=} [properties] Properties to set
         * @returns {msg.KeyAndVal} KeyAndVal instance
         */
        KeyAndVal.create = function create(properties) {
            return new KeyAndVal(properties);
        };

        /**
         * Encodes the specified KeyAndVal message. Does not implicitly {@link msg.KeyAndVal.verify|verify} messages.
         * @function encode
         * @memberof msg.KeyAndVal
         * @static
         * @param {msg.IKeyAndVal} message KeyAndVal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeyAndVal.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.key);
            if (message.val != null && Object.hasOwnProperty.call(message, "val"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.val);
            return writer;
        };

        /**
         * Encodes the specified KeyAndVal message, length delimited. Does not implicitly {@link msg.KeyAndVal.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.KeyAndVal
         * @static
         * @param {msg.IKeyAndVal} message KeyAndVal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeyAndVal.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KeyAndVal message from the specified reader or buffer.
         * @function decode
         * @memberof msg.KeyAndVal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.KeyAndVal} KeyAndVal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeyAndVal.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.KeyAndVal();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.sint32();
                    break;
                case 2:
                    message.val = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KeyAndVal message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.KeyAndVal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.KeyAndVal} KeyAndVal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeyAndVal.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KeyAndVal message.
         * @function verify
         * @memberof msg.KeyAndVal
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KeyAndVal.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isInteger(message.key))
                    return "key: integer expected";
            if (message.val != null && message.hasOwnProperty("val"))
                if (!$util.isInteger(message.val))
                    return "val: integer expected";
            return null;
        };

        /**
         * Creates a KeyAndVal message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.KeyAndVal
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.KeyAndVal} KeyAndVal
         */
        KeyAndVal.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.KeyAndVal)
                return object;
            let message = new $root.msg.KeyAndVal();
            if (object.key != null)
                message.key = object.key | 0;
            if (object.val != null)
                message.val = object.val | 0;
            return message;
        };

        /**
         * Creates a plain object from a KeyAndVal message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.KeyAndVal
         * @static
         * @param {msg.KeyAndVal} message KeyAndVal
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KeyAndVal.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.key = 0;
                object.val = 0;
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.val != null && message.hasOwnProperty("val"))
                object.val = message.val;
            return object;
        };

        /**
         * Converts this KeyAndVal to JSON.
         * @function toJSON
         * @memberof msg.KeyAndVal
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KeyAndVal.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KeyAndVal;
    })();

    msg.MahjongChiPengGang = (function() {

        /**
         * Properties of a MahjongChiPengGang.
         * @memberof msg
         * @interface IMahjongChiPengGang
         * @property {number|null} [kind] MahjongChiPengGang kind
         * @property {number|null} [tX] MahjongChiPengGang tX
         * @property {number|null} [t0] MahjongChiPengGang t0
         * @property {number|null} [t1] MahjongChiPengGang t1
         * @property {number|null} [t2] MahjongChiPengGang t2
         * @property {number|null} [fromUserId] MahjongChiPengGang fromUserId
         */

        /**
         * Constructs a new MahjongChiPengGang.
         * @memberof msg
         * @classdesc Represents a MahjongChiPengGang.
         * @implements IMahjongChiPengGang
         * @constructor
         * @param {msg.IMahjongChiPengGang=} [properties] Properties to set
         */
        function MahjongChiPengGang(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongChiPengGang kind.
         * @member {number} kind
         * @memberof msg.MahjongChiPengGang
         * @instance
         */
        MahjongChiPengGang.prototype.kind = 0;

        /**
         * MahjongChiPengGang tX.
         * @member {number} tX
         * @memberof msg.MahjongChiPengGang
         * @instance
         */
        MahjongChiPengGang.prototype.tX = 0;

        /**
         * MahjongChiPengGang t0.
         * @member {number} t0
         * @memberof msg.MahjongChiPengGang
         * @instance
         */
        MahjongChiPengGang.prototype.t0 = 0;

        /**
         * MahjongChiPengGang t1.
         * @member {number} t1
         * @memberof msg.MahjongChiPengGang
         * @instance
         */
        MahjongChiPengGang.prototype.t1 = 0;

        /**
         * MahjongChiPengGang t2.
         * @member {number} t2
         * @memberof msg.MahjongChiPengGang
         * @instance
         */
        MahjongChiPengGang.prototype.t2 = 0;

        /**
         * MahjongChiPengGang fromUserId.
         * @member {number} fromUserId
         * @memberof msg.MahjongChiPengGang
         * @instance
         */
        MahjongChiPengGang.prototype.fromUserId = 0;

        /**
         * Creates a new MahjongChiPengGang instance using the specified properties.
         * @function create
         * @memberof msg.MahjongChiPengGang
         * @static
         * @param {msg.IMahjongChiPengGang=} [properties] Properties to set
         * @returns {msg.MahjongChiPengGang} MahjongChiPengGang instance
         */
        MahjongChiPengGang.create = function create(properties) {
            return new MahjongChiPengGang(properties);
        };

        /**
         * Encodes the specified MahjongChiPengGang message. Does not implicitly {@link msg.MahjongChiPengGang.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongChiPengGang
         * @static
         * @param {msg.IMahjongChiPengGang} message MahjongChiPengGang message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongChiPengGang.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.kind != null && Object.hasOwnProperty.call(message, "kind"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.kind);
            if (message.tX != null && Object.hasOwnProperty.call(message, "tX"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.tX);
            if (message.t0 != null && Object.hasOwnProperty.call(message, "t0"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.t0);
            if (message.t1 != null && Object.hasOwnProperty.call(message, "t1"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.t1);
            if (message.t2 != null && Object.hasOwnProperty.call(message, "t2"))
                writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.t2);
            if (message.fromUserId != null && Object.hasOwnProperty.call(message, "fromUserId"))
                writer.uint32(/* id 6, wireType 0 =*/48).sint32(message.fromUserId);
            return writer;
        };

        /**
         * Encodes the specified MahjongChiPengGang message, length delimited. Does not implicitly {@link msg.MahjongChiPengGang.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongChiPengGang
         * @static
         * @param {msg.IMahjongChiPengGang} message MahjongChiPengGang message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongChiPengGang.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongChiPengGang message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongChiPengGang
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongChiPengGang} MahjongChiPengGang
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongChiPengGang.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongChiPengGang();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.kind = reader.sint32();
                    break;
                case 2:
                    message.tX = reader.sint32();
                    break;
                case 3:
                    message.t0 = reader.sint32();
                    break;
                case 4:
                    message.t1 = reader.sint32();
                    break;
                case 5:
                    message.t2 = reader.sint32();
                    break;
                case 6:
                    message.fromUserId = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongChiPengGang message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongChiPengGang
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongChiPengGang} MahjongChiPengGang
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongChiPengGang.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongChiPengGang message.
         * @function verify
         * @memberof msg.MahjongChiPengGang
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongChiPengGang.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.kind != null && message.hasOwnProperty("kind"))
                if (!$util.isInteger(message.kind))
                    return "kind: integer expected";
            if (message.tX != null && message.hasOwnProperty("tX"))
                if (!$util.isInteger(message.tX))
                    return "tX: integer expected";
            if (message.t0 != null && message.hasOwnProperty("t0"))
                if (!$util.isInteger(message.t0))
                    return "t0: integer expected";
            if (message.t1 != null && message.hasOwnProperty("t1"))
                if (!$util.isInteger(message.t1))
                    return "t1: integer expected";
            if (message.t2 != null && message.hasOwnProperty("t2"))
                if (!$util.isInteger(message.t2))
                    return "t2: integer expected";
            if (message.fromUserId != null && message.hasOwnProperty("fromUserId"))
                if (!$util.isInteger(message.fromUserId))
                    return "fromUserId: integer expected";
            return null;
        };

        /**
         * Creates a MahjongChiPengGang message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongChiPengGang
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongChiPengGang} MahjongChiPengGang
         */
        MahjongChiPengGang.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongChiPengGang)
                return object;
            let message = new $root.msg.MahjongChiPengGang();
            if (object.kind != null)
                message.kind = object.kind | 0;
            if (object.tX != null)
                message.tX = object.tX | 0;
            if (object.t0 != null)
                message.t0 = object.t0 | 0;
            if (object.t1 != null)
                message.t1 = object.t1 | 0;
            if (object.t2 != null)
                message.t2 = object.t2 | 0;
            if (object.fromUserId != null)
                message.fromUserId = object.fromUserId | 0;
            return message;
        };

        /**
         * Creates a plain object from a MahjongChiPengGang message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongChiPengGang
         * @static
         * @param {msg.MahjongChiPengGang} message MahjongChiPengGang
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongChiPengGang.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.kind = 0;
                object.tX = 0;
                object.t0 = 0;
                object.t1 = 0;
                object.t2 = 0;
                object.fromUserId = 0;
            }
            if (message.kind != null && message.hasOwnProperty("kind"))
                object.kind = message.kind;
            if (message.tX != null && message.hasOwnProperty("tX"))
                object.tX = message.tX;
            if (message.t0 != null && message.hasOwnProperty("t0"))
                object.t0 = message.t0;
            if (message.t1 != null && message.hasOwnProperty("t1"))
                object.t1 = message.t1;
            if (message.t2 != null && message.hasOwnProperty("t2"))
                object.t2 = message.t2;
            if (message.fromUserId != null && message.hasOwnProperty("fromUserId"))
                object.fromUserId = message.fromUserId;
            return object;
        };

        /**
         * Converts this MahjongChiPengGang to JSON.
         * @function toJSON
         * @memberof msg.MahjongChiPengGang
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongChiPengGang.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongChiPengGang;
    })();

    msg.MahjongLiangFeng = (function() {

        /**
         * Properties of a MahjongLiangFeng.
         * @memberof msg
         * @interface IMahjongLiangFeng
         * @property {number|null} [kind] MahjongLiangFeng kind
         * @property {number|null} [numOfDongFeng] MahjongLiangFeng numOfDongFeng
         * @property {number|null} [numOfNanFeng] MahjongLiangFeng numOfNanFeng
         * @property {number|null} [numOfXiFeng] MahjongLiangFeng numOfXiFeng
         * @property {number|null} [numOfBeiFeng] MahjongLiangFeng numOfBeiFeng
         * @property {number|null} [numOfHongZhong] MahjongLiangFeng numOfHongZhong
         * @property {number|null} [numOfFaCai] MahjongLiangFeng numOfFaCai
         * @property {number|null} [numOfBaiBan] MahjongLiangFeng numOfBaiBan
         */

        /**
         * Constructs a new MahjongLiangFeng.
         * @memberof msg
         * @classdesc Represents a MahjongLiangFeng.
         * @implements IMahjongLiangFeng
         * @constructor
         * @param {msg.IMahjongLiangFeng=} [properties] Properties to set
         */
        function MahjongLiangFeng(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongLiangFeng kind.
         * @member {number} kind
         * @memberof msg.MahjongLiangFeng
         * @instance
         */
        MahjongLiangFeng.prototype.kind = 0;

        /**
         * MahjongLiangFeng numOfDongFeng.
         * @member {number} numOfDongFeng
         * @memberof msg.MahjongLiangFeng
         * @instance
         */
        MahjongLiangFeng.prototype.numOfDongFeng = 0;

        /**
         * MahjongLiangFeng numOfNanFeng.
         * @member {number} numOfNanFeng
         * @memberof msg.MahjongLiangFeng
         * @instance
         */
        MahjongLiangFeng.prototype.numOfNanFeng = 0;

        /**
         * MahjongLiangFeng numOfXiFeng.
         * @member {number} numOfXiFeng
         * @memberof msg.MahjongLiangFeng
         * @instance
         */
        MahjongLiangFeng.prototype.numOfXiFeng = 0;

        /**
         * MahjongLiangFeng numOfBeiFeng.
         * @member {number} numOfBeiFeng
         * @memberof msg.MahjongLiangFeng
         * @instance
         */
        MahjongLiangFeng.prototype.numOfBeiFeng = 0;

        /**
         * MahjongLiangFeng numOfHongZhong.
         * @member {number} numOfHongZhong
         * @memberof msg.MahjongLiangFeng
         * @instance
         */
        MahjongLiangFeng.prototype.numOfHongZhong = 0;

        /**
         * MahjongLiangFeng numOfFaCai.
         * @member {number} numOfFaCai
         * @memberof msg.MahjongLiangFeng
         * @instance
         */
        MahjongLiangFeng.prototype.numOfFaCai = 0;

        /**
         * MahjongLiangFeng numOfBaiBan.
         * @member {number} numOfBaiBan
         * @memberof msg.MahjongLiangFeng
         * @instance
         */
        MahjongLiangFeng.prototype.numOfBaiBan = 0;

        /**
         * Creates a new MahjongLiangFeng instance using the specified properties.
         * @function create
         * @memberof msg.MahjongLiangFeng
         * @static
         * @param {msg.IMahjongLiangFeng=} [properties] Properties to set
         * @returns {msg.MahjongLiangFeng} MahjongLiangFeng instance
         */
        MahjongLiangFeng.create = function create(properties) {
            return new MahjongLiangFeng(properties);
        };

        /**
         * Encodes the specified MahjongLiangFeng message. Does not implicitly {@link msg.MahjongLiangFeng.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongLiangFeng
         * @static
         * @param {msg.IMahjongLiangFeng} message MahjongLiangFeng message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongLiangFeng.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.kind != null && Object.hasOwnProperty.call(message, "kind"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.kind);
            if (message.numOfDongFeng != null && Object.hasOwnProperty.call(message, "numOfDongFeng"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.numOfDongFeng);
            if (message.numOfNanFeng != null && Object.hasOwnProperty.call(message, "numOfNanFeng"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.numOfNanFeng);
            if (message.numOfXiFeng != null && Object.hasOwnProperty.call(message, "numOfXiFeng"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.numOfXiFeng);
            if (message.numOfBeiFeng != null && Object.hasOwnProperty.call(message, "numOfBeiFeng"))
                writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.numOfBeiFeng);
            if (message.numOfHongZhong != null && Object.hasOwnProperty.call(message, "numOfHongZhong"))
                writer.uint32(/* id 6, wireType 0 =*/48).sint32(message.numOfHongZhong);
            if (message.numOfFaCai != null && Object.hasOwnProperty.call(message, "numOfFaCai"))
                writer.uint32(/* id 7, wireType 0 =*/56).sint32(message.numOfFaCai);
            if (message.numOfBaiBan != null && Object.hasOwnProperty.call(message, "numOfBaiBan"))
                writer.uint32(/* id 8, wireType 0 =*/64).sint32(message.numOfBaiBan);
            return writer;
        };

        /**
         * Encodes the specified MahjongLiangFeng message, length delimited. Does not implicitly {@link msg.MahjongLiangFeng.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongLiangFeng
         * @static
         * @param {msg.IMahjongLiangFeng} message MahjongLiangFeng message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongLiangFeng.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongLiangFeng message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongLiangFeng
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongLiangFeng} MahjongLiangFeng
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongLiangFeng.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongLiangFeng();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.kind = reader.sint32();
                    break;
                case 2:
                    message.numOfDongFeng = reader.sint32();
                    break;
                case 3:
                    message.numOfNanFeng = reader.sint32();
                    break;
                case 4:
                    message.numOfXiFeng = reader.sint32();
                    break;
                case 5:
                    message.numOfBeiFeng = reader.sint32();
                    break;
                case 6:
                    message.numOfHongZhong = reader.sint32();
                    break;
                case 7:
                    message.numOfFaCai = reader.sint32();
                    break;
                case 8:
                    message.numOfBaiBan = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongLiangFeng message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongLiangFeng
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongLiangFeng} MahjongLiangFeng
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongLiangFeng.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongLiangFeng message.
         * @function verify
         * @memberof msg.MahjongLiangFeng
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongLiangFeng.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.kind != null && message.hasOwnProperty("kind"))
                if (!$util.isInteger(message.kind))
                    return "kind: integer expected";
            if (message.numOfDongFeng != null && message.hasOwnProperty("numOfDongFeng"))
                if (!$util.isInteger(message.numOfDongFeng))
                    return "numOfDongFeng: integer expected";
            if (message.numOfNanFeng != null && message.hasOwnProperty("numOfNanFeng"))
                if (!$util.isInteger(message.numOfNanFeng))
                    return "numOfNanFeng: integer expected";
            if (message.numOfXiFeng != null && message.hasOwnProperty("numOfXiFeng"))
                if (!$util.isInteger(message.numOfXiFeng))
                    return "numOfXiFeng: integer expected";
            if (message.numOfBeiFeng != null && message.hasOwnProperty("numOfBeiFeng"))
                if (!$util.isInteger(message.numOfBeiFeng))
                    return "numOfBeiFeng: integer expected";
            if (message.numOfHongZhong != null && message.hasOwnProperty("numOfHongZhong"))
                if (!$util.isInteger(message.numOfHongZhong))
                    return "numOfHongZhong: integer expected";
            if (message.numOfFaCai != null && message.hasOwnProperty("numOfFaCai"))
                if (!$util.isInteger(message.numOfFaCai))
                    return "numOfFaCai: integer expected";
            if (message.numOfBaiBan != null && message.hasOwnProperty("numOfBaiBan"))
                if (!$util.isInteger(message.numOfBaiBan))
                    return "numOfBaiBan: integer expected";
            return null;
        };

        /**
         * Creates a MahjongLiangFeng message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongLiangFeng
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongLiangFeng} MahjongLiangFeng
         */
        MahjongLiangFeng.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongLiangFeng)
                return object;
            let message = new $root.msg.MahjongLiangFeng();
            if (object.kind != null)
                message.kind = object.kind | 0;
            if (object.numOfDongFeng != null)
                message.numOfDongFeng = object.numOfDongFeng | 0;
            if (object.numOfNanFeng != null)
                message.numOfNanFeng = object.numOfNanFeng | 0;
            if (object.numOfXiFeng != null)
                message.numOfXiFeng = object.numOfXiFeng | 0;
            if (object.numOfBeiFeng != null)
                message.numOfBeiFeng = object.numOfBeiFeng | 0;
            if (object.numOfHongZhong != null)
                message.numOfHongZhong = object.numOfHongZhong | 0;
            if (object.numOfFaCai != null)
                message.numOfFaCai = object.numOfFaCai | 0;
            if (object.numOfBaiBan != null)
                message.numOfBaiBan = object.numOfBaiBan | 0;
            return message;
        };

        /**
         * Creates a plain object from a MahjongLiangFeng message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongLiangFeng
         * @static
         * @param {msg.MahjongLiangFeng} message MahjongLiangFeng
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongLiangFeng.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.kind = 0;
                object.numOfDongFeng = 0;
                object.numOfNanFeng = 0;
                object.numOfXiFeng = 0;
                object.numOfBeiFeng = 0;
                object.numOfHongZhong = 0;
                object.numOfFaCai = 0;
                object.numOfBaiBan = 0;
            }
            if (message.kind != null && message.hasOwnProperty("kind"))
                object.kind = message.kind;
            if (message.numOfDongFeng != null && message.hasOwnProperty("numOfDongFeng"))
                object.numOfDongFeng = message.numOfDongFeng;
            if (message.numOfNanFeng != null && message.hasOwnProperty("numOfNanFeng"))
                object.numOfNanFeng = message.numOfNanFeng;
            if (message.numOfXiFeng != null && message.hasOwnProperty("numOfXiFeng"))
                object.numOfXiFeng = message.numOfXiFeng;
            if (message.numOfBeiFeng != null && message.hasOwnProperty("numOfBeiFeng"))
                object.numOfBeiFeng = message.numOfBeiFeng;
            if (message.numOfHongZhong != null && message.hasOwnProperty("numOfHongZhong"))
                object.numOfHongZhong = message.numOfHongZhong;
            if (message.numOfFaCai != null && message.hasOwnProperty("numOfFaCai"))
                object.numOfFaCai = message.numOfFaCai;
            if (message.numOfBaiBan != null && message.hasOwnProperty("numOfBaiBan"))
                object.numOfBaiBan = message.numOfBaiBan;
            return object;
        };

        /**
         * Converts this MahjongLiangFeng to JSON.
         * @function toJSON
         * @memberof msg.MahjongLiangFeng
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongLiangFeng.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongLiangFeng;
    })();

    msg.Player = (function() {

        /**
         * Properties of a Player.
         * @memberof msg
         * @interface IPlayer
         * @property {number|null} [userId] Player userId
         * @property {string|null} [userName] Player userName
         * @property {string|null} [headImg] Player headImg
         * @property {number|null} [sex] Player sex
         * @property {string|null} [clientIpAddr] Player clientIpAddr
         * @property {number|null} [currScore] Player currScore
         * @property {number|null} [totalScore] Player totalScore
         * @property {number|null} [seatIndex] Player seatIndex
         * @property {number|null} [piaoX] Player piaoX
         * @property {boolean|null} [roomOwnerFlag] Player roomOwnerFlag
         * @property {boolean|null} [zhuangJiaFlag] Player zhuangJiaFlag
         * @property {boolean|null} [readyFlag] Player readyFlag
         * @property {boolean|null} [offlineFlag] Player offlineFlag
         * @property {Array.<number>|null} [mahjongInHand] Player mahjongInHand
         * @property {number|null} [mahjongMoPai] Player mahjongMoPai
         * @property {Array.<number>|null} [mahjongOutput] Player mahjongOutput
         * @property {Array.<msg.IMahjongChiPengGang>|null} [mahjongChiPengGang] Player mahjongChiPengGang
         * @property {msg.IMahjongLiangFeng|null} [mahjongLiangFeng] Player mahjongLiangFeng
         */

        /**
         * Constructs a new Player.
         * @memberof msg
         * @classdesc Represents a Player.
         * @implements IPlayer
         * @constructor
         * @param {msg.IPlayer=} [properties] Properties to set
         */
        function Player(properties) {
            this.mahjongInHand = [];
            this.mahjongOutput = [];
            this.mahjongChiPengGang = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Player userId.
         * @member {number} userId
         * @memberof msg.Player
         * @instance
         */
        Player.prototype.userId = 0;

        /**
         * Player userName.
         * @member {string} userName
         * @memberof msg.Player
         * @instance
         */
        Player.prototype.userName = "";

        /**
         * Player headImg.
         * @member {string} headImg
         * @memberof msg.Player
         * @instance
         */
        Player.prototype.headImg = "";

        /**
         * Player sex.
         * @member {number} sex
         * @memberof msg.Player
         * @instance
         */
        Player.prototype.sex = 0;

        /**
         * Player clientIpAddr.
         * @member {string} clientIpAddr
         * @memberof msg.Player
         * @instance
         */
        Player.prototype.clientIpAddr = "";

        /**
         * Player currScore.
         * @member {number} currScore
         * @memberof msg.Player
         * @instance
         */
        Player.prototype.currScore = 0;

        /**
         * Player totalScore.
         * @member {number} totalScore
         * @memberof msg.Player
         * @instance
         */
        Player.prototype.totalScore = 0;

        /**
         * Player seatIndex.
         * @member {number} seatIndex
         * @memberof msg.Player
         * @instance
         */
        Player.prototype.seatIndex = 0;

        /**
         * Player piaoX.
         * @member {number} piaoX
         * @memberof msg.Player
         * @instance
         */
        Player.prototype.piaoX = 0;

        /**
         * Player roomOwnerFlag.
         * @member {boolean} roomOwnerFlag
         * @memberof msg.Player
         * @instance
         */
        Player.prototype.roomOwnerFlag = false;

        /**
         * Player zhuangJiaFlag.
         * @member {boolean} zhuangJiaFlag
         * @memberof msg.Player
         * @instance
         */
        Player.prototype.zhuangJiaFlag = false;

        /**
         * Player readyFlag.
         * @member {boolean} readyFlag
         * @memberof msg.Player
         * @instance
         */
        Player.prototype.readyFlag = false;

        /**
         * Player offlineFlag.
         * @member {boolean} offlineFlag
         * @memberof msg.Player
         * @instance
         */
        Player.prototype.offlineFlag = false;

        /**
         * Player mahjongInHand.
         * @member {Array.<number>} mahjongInHand
         * @memberof msg.Player
         * @instance
         */
        Player.prototype.mahjongInHand = $util.emptyArray;

        /**
         * Player mahjongMoPai.
         * @member {number} mahjongMoPai
         * @memberof msg.Player
         * @instance
         */
        Player.prototype.mahjongMoPai = 0;

        /**
         * Player mahjongOutput.
         * @member {Array.<number>} mahjongOutput
         * @memberof msg.Player
         * @instance
         */
        Player.prototype.mahjongOutput = $util.emptyArray;

        /**
         * Player mahjongChiPengGang.
         * @member {Array.<msg.IMahjongChiPengGang>} mahjongChiPengGang
         * @memberof msg.Player
         * @instance
         */
        Player.prototype.mahjongChiPengGang = $util.emptyArray;

        /**
         * Player mahjongLiangFeng.
         * @member {msg.IMahjongLiangFeng|null|undefined} mahjongLiangFeng
         * @memberof msg.Player
         * @instance
         */
        Player.prototype.mahjongLiangFeng = null;

        /**
         * Creates a new Player instance using the specified properties.
         * @function create
         * @memberof msg.Player
         * @static
         * @param {msg.IPlayer=} [properties] Properties to set
         * @returns {msg.Player} Player instance
         */
        Player.create = function create(properties) {
            return new Player(properties);
        };

        /**
         * Encodes the specified Player message. Does not implicitly {@link msg.Player.verify|verify} messages.
         * @function encode
         * @memberof msg.Player
         * @static
         * @param {msg.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userId);
            if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.userName);
            if (message.headImg != null && Object.hasOwnProperty.call(message, "headImg"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.headImg);
            if (message.sex != null && Object.hasOwnProperty.call(message, "sex"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.sex);
            if (message.clientIpAddr != null && Object.hasOwnProperty.call(message, "clientIpAddr"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.clientIpAddr);
            if (message.currScore != null && Object.hasOwnProperty.call(message, "currScore"))
                writer.uint32(/* id 6, wireType 0 =*/48).sint32(message.currScore);
            if (message.totalScore != null && Object.hasOwnProperty.call(message, "totalScore"))
                writer.uint32(/* id 7, wireType 0 =*/56).sint32(message.totalScore);
            if (message.seatIndex != null && Object.hasOwnProperty.call(message, "seatIndex"))
                writer.uint32(/* id 8, wireType 0 =*/64).sint32(message.seatIndex);
            if (message.piaoX != null && Object.hasOwnProperty.call(message, "piaoX"))
                writer.uint32(/* id 9, wireType 0 =*/72).sint32(message.piaoX);
            if (message.roomOwnerFlag != null && Object.hasOwnProperty.call(message, "roomOwnerFlag"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.roomOwnerFlag);
            if (message.zhuangJiaFlag != null && Object.hasOwnProperty.call(message, "zhuangJiaFlag"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.zhuangJiaFlag);
            if (message.readyFlag != null && Object.hasOwnProperty.call(message, "readyFlag"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.readyFlag);
            if (message.offlineFlag != null && Object.hasOwnProperty.call(message, "offlineFlag"))
                writer.uint32(/* id 13, wireType 0 =*/104).bool(message.offlineFlag);
            if (message.mahjongInHand != null && message.mahjongInHand.length) {
                writer.uint32(/* id 14, wireType 2 =*/114).fork();
                for (let i = 0; i < message.mahjongInHand.length; ++i)
                    writer.sint32(message.mahjongInHand[i]);
                writer.ldelim();
            }
            if (message.mahjongMoPai != null && Object.hasOwnProperty.call(message, "mahjongMoPai"))
                writer.uint32(/* id 15, wireType 0 =*/120).sint32(message.mahjongMoPai);
            if (message.mahjongOutput != null && message.mahjongOutput.length) {
                writer.uint32(/* id 16, wireType 2 =*/130).fork();
                for (let i = 0; i < message.mahjongOutput.length; ++i)
                    writer.sint32(message.mahjongOutput[i]);
                writer.ldelim();
            }
            if (message.mahjongChiPengGang != null && message.mahjongChiPengGang.length)
                for (let i = 0; i < message.mahjongChiPengGang.length; ++i)
                    $root.msg.MahjongChiPengGang.encode(message.mahjongChiPengGang[i], writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.mahjongLiangFeng != null && Object.hasOwnProperty.call(message, "mahjongLiangFeng"))
                $root.msg.MahjongLiangFeng.encode(message.mahjongLiangFeng, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link msg.Player.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Player
         * @static
         * @param {msg.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Player();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.sint32();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                case 3:
                    message.headImg = reader.string();
                    break;
                case 4:
                    message.sex = reader.sint32();
                    break;
                case 5:
                    message.clientIpAddr = reader.string();
                    break;
                case 6:
                    message.currScore = reader.sint32();
                    break;
                case 7:
                    message.totalScore = reader.sint32();
                    break;
                case 8:
                    message.seatIndex = reader.sint32();
                    break;
                case 9:
                    message.piaoX = reader.sint32();
                    break;
                case 10:
                    message.roomOwnerFlag = reader.bool();
                    break;
                case 11:
                    message.zhuangJiaFlag = reader.bool();
                    break;
                case 12:
                    message.readyFlag = reader.bool();
                    break;
                case 13:
                    message.offlineFlag = reader.bool();
                    break;
                case 14:
                    if (!(message.mahjongInHand && message.mahjongInHand.length))
                        message.mahjongInHand = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.mahjongInHand.push(reader.sint32());
                    } else
                        message.mahjongInHand.push(reader.sint32());
                    break;
                case 15:
                    message.mahjongMoPai = reader.sint32();
                    break;
                case 16:
                    if (!(message.mahjongOutput && message.mahjongOutput.length))
                        message.mahjongOutput = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.mahjongOutput.push(reader.sint32());
                    } else
                        message.mahjongOutput.push(reader.sint32());
                    break;
                case 17:
                    if (!(message.mahjongChiPengGang && message.mahjongChiPengGang.length))
                        message.mahjongChiPengGang = [];
                    message.mahjongChiPengGang.push($root.msg.MahjongChiPengGang.decode(reader, reader.uint32()));
                    break;
                case 18:
                    message.mahjongLiangFeng = $root.msg.MahjongLiangFeng.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Player message.
         * @function verify
         * @memberof msg.Player
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Player.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.headImg != null && message.hasOwnProperty("headImg"))
                if (!$util.isString(message.headImg))
                    return "headImg: string expected";
            if (message.sex != null && message.hasOwnProperty("sex"))
                if (!$util.isInteger(message.sex))
                    return "sex: integer expected";
            if (message.clientIpAddr != null && message.hasOwnProperty("clientIpAddr"))
                if (!$util.isString(message.clientIpAddr))
                    return "clientIpAddr: string expected";
            if (message.currScore != null && message.hasOwnProperty("currScore"))
                if (!$util.isInteger(message.currScore))
                    return "currScore: integer expected";
            if (message.totalScore != null && message.hasOwnProperty("totalScore"))
                if (!$util.isInteger(message.totalScore))
                    return "totalScore: integer expected";
            if (message.seatIndex != null && message.hasOwnProperty("seatIndex"))
                if (!$util.isInteger(message.seatIndex))
                    return "seatIndex: integer expected";
            if (message.piaoX != null && message.hasOwnProperty("piaoX"))
                if (!$util.isInteger(message.piaoX))
                    return "piaoX: integer expected";
            if (message.roomOwnerFlag != null && message.hasOwnProperty("roomOwnerFlag"))
                if (typeof message.roomOwnerFlag !== "boolean")
                    return "roomOwnerFlag: boolean expected";
            if (message.zhuangJiaFlag != null && message.hasOwnProperty("zhuangJiaFlag"))
                if (typeof message.zhuangJiaFlag !== "boolean")
                    return "zhuangJiaFlag: boolean expected";
            if (message.readyFlag != null && message.hasOwnProperty("readyFlag"))
                if (typeof message.readyFlag !== "boolean")
                    return "readyFlag: boolean expected";
            if (message.offlineFlag != null && message.hasOwnProperty("offlineFlag"))
                if (typeof message.offlineFlag !== "boolean")
                    return "offlineFlag: boolean expected";
            if (message.mahjongInHand != null && message.hasOwnProperty("mahjongInHand")) {
                if (!Array.isArray(message.mahjongInHand))
                    return "mahjongInHand: array expected";
                for (let i = 0; i < message.mahjongInHand.length; ++i)
                    if (!$util.isInteger(message.mahjongInHand[i]))
                        return "mahjongInHand: integer[] expected";
            }
            if (message.mahjongMoPai != null && message.hasOwnProperty("mahjongMoPai"))
                if (!$util.isInteger(message.mahjongMoPai))
                    return "mahjongMoPai: integer expected";
            if (message.mahjongOutput != null && message.hasOwnProperty("mahjongOutput")) {
                if (!Array.isArray(message.mahjongOutput))
                    return "mahjongOutput: array expected";
                for (let i = 0; i < message.mahjongOutput.length; ++i)
                    if (!$util.isInteger(message.mahjongOutput[i]))
                        return "mahjongOutput: integer[] expected";
            }
            if (message.mahjongChiPengGang != null && message.hasOwnProperty("mahjongChiPengGang")) {
                if (!Array.isArray(message.mahjongChiPengGang))
                    return "mahjongChiPengGang: array expected";
                for (let i = 0; i < message.mahjongChiPengGang.length; ++i) {
                    let error = $root.msg.MahjongChiPengGang.verify(message.mahjongChiPengGang[i]);
                    if (error)
                        return "mahjongChiPengGang." + error;
                }
            }
            if (message.mahjongLiangFeng != null && message.hasOwnProperty("mahjongLiangFeng")) {
                let error = $root.msg.MahjongLiangFeng.verify(message.mahjongLiangFeng);
                if (error)
                    return "mahjongLiangFeng." + error;
            }
            return null;
        };

        /**
         * Creates a Player message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Player
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Player} Player
         */
        Player.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Player)
                return object;
            let message = new $root.msg.Player();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.userName != null)
                message.userName = String(object.userName);
            if (object.headImg != null)
                message.headImg = String(object.headImg);
            if (object.sex != null)
                message.sex = object.sex | 0;
            if (object.clientIpAddr != null)
                message.clientIpAddr = String(object.clientIpAddr);
            if (object.currScore != null)
                message.currScore = object.currScore | 0;
            if (object.totalScore != null)
                message.totalScore = object.totalScore | 0;
            if (object.seatIndex != null)
                message.seatIndex = object.seatIndex | 0;
            if (object.piaoX != null)
                message.piaoX = object.piaoX | 0;
            if (object.roomOwnerFlag != null)
                message.roomOwnerFlag = Boolean(object.roomOwnerFlag);
            if (object.zhuangJiaFlag != null)
                message.zhuangJiaFlag = Boolean(object.zhuangJiaFlag);
            if (object.readyFlag != null)
                message.readyFlag = Boolean(object.readyFlag);
            if (object.offlineFlag != null)
                message.offlineFlag = Boolean(object.offlineFlag);
            if (object.mahjongInHand) {
                if (!Array.isArray(object.mahjongInHand))
                    throw TypeError(".msg.Player.mahjongInHand: array expected");
                message.mahjongInHand = [];
                for (let i = 0; i < object.mahjongInHand.length; ++i)
                    message.mahjongInHand[i] = object.mahjongInHand[i] | 0;
            }
            if (object.mahjongMoPai != null)
                message.mahjongMoPai = object.mahjongMoPai | 0;
            if (object.mahjongOutput) {
                if (!Array.isArray(object.mahjongOutput))
                    throw TypeError(".msg.Player.mahjongOutput: array expected");
                message.mahjongOutput = [];
                for (let i = 0; i < object.mahjongOutput.length; ++i)
                    message.mahjongOutput[i] = object.mahjongOutput[i] | 0;
            }
            if (object.mahjongChiPengGang) {
                if (!Array.isArray(object.mahjongChiPengGang))
                    throw TypeError(".msg.Player.mahjongChiPengGang: array expected");
                message.mahjongChiPengGang = [];
                for (let i = 0; i < object.mahjongChiPengGang.length; ++i) {
                    if (typeof object.mahjongChiPengGang[i] !== "object")
                        throw TypeError(".msg.Player.mahjongChiPengGang: object expected");
                    message.mahjongChiPengGang[i] = $root.msg.MahjongChiPengGang.fromObject(object.mahjongChiPengGang[i]);
                }
            }
            if (object.mahjongLiangFeng != null) {
                if (typeof object.mahjongLiangFeng !== "object")
                    throw TypeError(".msg.Player.mahjongLiangFeng: object expected");
                message.mahjongLiangFeng = $root.msg.MahjongLiangFeng.fromObject(object.mahjongLiangFeng);
            }
            return message;
        };

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Player
         * @static
         * @param {msg.Player} message Player
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Player.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.mahjongInHand = [];
                object.mahjongOutput = [];
                object.mahjongChiPengGang = [];
            }
            if (options.defaults) {
                object.userId = 0;
                object.userName = "";
                object.headImg = "";
                object.sex = 0;
                object.clientIpAddr = "";
                object.currScore = 0;
                object.totalScore = 0;
                object.seatIndex = 0;
                object.piaoX = 0;
                object.roomOwnerFlag = false;
                object.zhuangJiaFlag = false;
                object.readyFlag = false;
                object.offlineFlag = false;
                object.mahjongMoPai = 0;
                object.mahjongLiangFeng = null;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.userName != null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.headImg != null && message.hasOwnProperty("headImg"))
                object.headImg = message.headImg;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
            if (message.clientIpAddr != null && message.hasOwnProperty("clientIpAddr"))
                object.clientIpAddr = message.clientIpAddr;
            if (message.currScore != null && message.hasOwnProperty("currScore"))
                object.currScore = message.currScore;
            if (message.totalScore != null && message.hasOwnProperty("totalScore"))
                object.totalScore = message.totalScore;
            if (message.seatIndex != null && message.hasOwnProperty("seatIndex"))
                object.seatIndex = message.seatIndex;
            if (message.piaoX != null && message.hasOwnProperty("piaoX"))
                object.piaoX = message.piaoX;
            if (message.roomOwnerFlag != null && message.hasOwnProperty("roomOwnerFlag"))
                object.roomOwnerFlag = message.roomOwnerFlag;
            if (message.zhuangJiaFlag != null && message.hasOwnProperty("zhuangJiaFlag"))
                object.zhuangJiaFlag = message.zhuangJiaFlag;
            if (message.readyFlag != null && message.hasOwnProperty("readyFlag"))
                object.readyFlag = message.readyFlag;
            if (message.offlineFlag != null && message.hasOwnProperty("offlineFlag"))
                object.offlineFlag = message.offlineFlag;
            if (message.mahjongInHand && message.mahjongInHand.length) {
                object.mahjongInHand = [];
                for (let j = 0; j < message.mahjongInHand.length; ++j)
                    object.mahjongInHand[j] = message.mahjongInHand[j];
            }
            if (message.mahjongMoPai != null && message.hasOwnProperty("mahjongMoPai"))
                object.mahjongMoPai = message.mahjongMoPai;
            if (message.mahjongOutput && message.mahjongOutput.length) {
                object.mahjongOutput = [];
                for (let j = 0; j < message.mahjongOutput.length; ++j)
                    object.mahjongOutput[j] = message.mahjongOutput[j];
            }
            if (message.mahjongChiPengGang && message.mahjongChiPengGang.length) {
                object.mahjongChiPengGang = [];
                for (let j = 0; j < message.mahjongChiPengGang.length; ++j)
                    object.mahjongChiPengGang[j] = $root.msg.MahjongChiPengGang.toObject(message.mahjongChiPengGang[j], options);
            }
            if (message.mahjongLiangFeng != null && message.hasOwnProperty("mahjongLiangFeng"))
                object.mahjongLiangFeng = $root.msg.MahjongLiangFeng.toObject(message.mahjongLiangFeng, options);
            return object;
        };

        /**
         * Converts this Player to JSON.
         * @function toJSON
         * @memberof msg.Player
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Player.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Player;
    })();

    msg.JoinRoomBroadcast = (function() {

        /**
         * Properties of a JoinRoomBroadcast.
         * @memberof msg
         * @interface IJoinRoomBroadcast
         * @property {number|null} [userId] JoinRoomBroadcast userId
         * @property {string|null} [userName] JoinRoomBroadcast userName
         * @property {string|null} [headImg] JoinRoomBroadcast headImg
         * @property {number|null} [sex] JoinRoomBroadcast sex
         * @property {string|null} [clientIpAddr] JoinRoomBroadcast clientIpAddr
         * @property {number|null} [seatIndex] JoinRoomBroadcast seatIndex
         * @property {number|null} [currScore] JoinRoomBroadcast currScore
         * @property {number|null} [totalScore] JoinRoomBroadcast totalScore
         */

        /**
         * Constructs a new JoinRoomBroadcast.
         * @memberof msg
         * @classdesc Represents a JoinRoomBroadcast.
         * @implements IJoinRoomBroadcast
         * @constructor
         * @param {msg.IJoinRoomBroadcast=} [properties] Properties to set
         */
        function JoinRoomBroadcast(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinRoomBroadcast userId.
         * @member {number} userId
         * @memberof msg.JoinRoomBroadcast
         * @instance
         */
        JoinRoomBroadcast.prototype.userId = 0;

        /**
         * JoinRoomBroadcast userName.
         * @member {string} userName
         * @memberof msg.JoinRoomBroadcast
         * @instance
         */
        JoinRoomBroadcast.prototype.userName = "";

        /**
         * JoinRoomBroadcast headImg.
         * @member {string} headImg
         * @memberof msg.JoinRoomBroadcast
         * @instance
         */
        JoinRoomBroadcast.prototype.headImg = "";

        /**
         * JoinRoomBroadcast sex.
         * @member {number} sex
         * @memberof msg.JoinRoomBroadcast
         * @instance
         */
        JoinRoomBroadcast.prototype.sex = 0;

        /**
         * JoinRoomBroadcast clientIpAddr.
         * @member {string} clientIpAddr
         * @memberof msg.JoinRoomBroadcast
         * @instance
         */
        JoinRoomBroadcast.prototype.clientIpAddr = "";

        /**
         * JoinRoomBroadcast seatIndex.
         * @member {number} seatIndex
         * @memberof msg.JoinRoomBroadcast
         * @instance
         */
        JoinRoomBroadcast.prototype.seatIndex = 0;

        /**
         * JoinRoomBroadcast currScore.
         * @member {number} currScore
         * @memberof msg.JoinRoomBroadcast
         * @instance
         */
        JoinRoomBroadcast.prototype.currScore = 0;

        /**
         * JoinRoomBroadcast totalScore.
         * @member {number} totalScore
         * @memberof msg.JoinRoomBroadcast
         * @instance
         */
        JoinRoomBroadcast.prototype.totalScore = 0;

        /**
         * Creates a new JoinRoomBroadcast instance using the specified properties.
         * @function create
         * @memberof msg.JoinRoomBroadcast
         * @static
         * @param {msg.IJoinRoomBroadcast=} [properties] Properties to set
         * @returns {msg.JoinRoomBroadcast} JoinRoomBroadcast instance
         */
        JoinRoomBroadcast.create = function create(properties) {
            return new JoinRoomBroadcast(properties);
        };

        /**
         * Encodes the specified JoinRoomBroadcast message. Does not implicitly {@link msg.JoinRoomBroadcast.verify|verify} messages.
         * @function encode
         * @memberof msg.JoinRoomBroadcast
         * @static
         * @param {msg.IJoinRoomBroadcast} message JoinRoomBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomBroadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userId);
            if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.userName);
            if (message.headImg != null && Object.hasOwnProperty.call(message, "headImg"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.headImg);
            if (message.sex != null && Object.hasOwnProperty.call(message, "sex"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.sex);
            if (message.clientIpAddr != null && Object.hasOwnProperty.call(message, "clientIpAddr"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.clientIpAddr);
            if (message.seatIndex != null && Object.hasOwnProperty.call(message, "seatIndex"))
                writer.uint32(/* id 6, wireType 0 =*/48).sint32(message.seatIndex);
            if (message.currScore != null && Object.hasOwnProperty.call(message, "currScore"))
                writer.uint32(/* id 7, wireType 0 =*/56).sint32(message.currScore);
            if (message.totalScore != null && Object.hasOwnProperty.call(message, "totalScore"))
                writer.uint32(/* id 8, wireType 0 =*/64).sint32(message.totalScore);
            return writer;
        };

        /**
         * Encodes the specified JoinRoomBroadcast message, length delimited. Does not implicitly {@link msg.JoinRoomBroadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.JoinRoomBroadcast
         * @static
         * @param {msg.IJoinRoomBroadcast} message JoinRoomBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinRoomBroadcast message from the specified reader or buffer.
         * @function decode
         * @memberof msg.JoinRoomBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.JoinRoomBroadcast} JoinRoomBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomBroadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.JoinRoomBroadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.sint32();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                case 3:
                    message.headImg = reader.string();
                    break;
                case 4:
                    message.sex = reader.sint32();
                    break;
                case 5:
                    message.clientIpAddr = reader.string();
                    break;
                case 6:
                    message.seatIndex = reader.sint32();
                    break;
                case 7:
                    message.currScore = reader.sint32();
                    break;
                case 8:
                    message.totalScore = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinRoomBroadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.JoinRoomBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.JoinRoomBroadcast} JoinRoomBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinRoomBroadcast message.
         * @function verify
         * @memberof msg.JoinRoomBroadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinRoomBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.headImg != null && message.hasOwnProperty("headImg"))
                if (!$util.isString(message.headImg))
                    return "headImg: string expected";
            if (message.sex != null && message.hasOwnProperty("sex"))
                if (!$util.isInteger(message.sex))
                    return "sex: integer expected";
            if (message.clientIpAddr != null && message.hasOwnProperty("clientIpAddr"))
                if (!$util.isString(message.clientIpAddr))
                    return "clientIpAddr: string expected";
            if (message.seatIndex != null && message.hasOwnProperty("seatIndex"))
                if (!$util.isInteger(message.seatIndex))
                    return "seatIndex: integer expected";
            if (message.currScore != null && message.hasOwnProperty("currScore"))
                if (!$util.isInteger(message.currScore))
                    return "currScore: integer expected";
            if (message.totalScore != null && message.hasOwnProperty("totalScore"))
                if (!$util.isInteger(message.totalScore))
                    return "totalScore: integer expected";
            return null;
        };

        /**
         * Creates a JoinRoomBroadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.JoinRoomBroadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.JoinRoomBroadcast} JoinRoomBroadcast
         */
        JoinRoomBroadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.JoinRoomBroadcast)
                return object;
            let message = new $root.msg.JoinRoomBroadcast();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.userName != null)
                message.userName = String(object.userName);
            if (object.headImg != null)
                message.headImg = String(object.headImg);
            if (object.sex != null)
                message.sex = object.sex | 0;
            if (object.clientIpAddr != null)
                message.clientIpAddr = String(object.clientIpAddr);
            if (object.seatIndex != null)
                message.seatIndex = object.seatIndex | 0;
            if (object.currScore != null)
                message.currScore = object.currScore | 0;
            if (object.totalScore != null)
                message.totalScore = object.totalScore | 0;
            return message;
        };

        /**
         * Creates a plain object from a JoinRoomBroadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.JoinRoomBroadcast
         * @static
         * @param {msg.JoinRoomBroadcast} message JoinRoomBroadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinRoomBroadcast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = 0;
                object.userName = "";
                object.headImg = "";
                object.sex = 0;
                object.clientIpAddr = "";
                object.seatIndex = 0;
                object.currScore = 0;
                object.totalScore = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.userName != null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.headImg != null && message.hasOwnProperty("headImg"))
                object.headImg = message.headImg;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
            if (message.clientIpAddr != null && message.hasOwnProperty("clientIpAddr"))
                object.clientIpAddr = message.clientIpAddr;
            if (message.seatIndex != null && message.hasOwnProperty("seatIndex"))
                object.seatIndex = message.seatIndex;
            if (message.currScore != null && message.hasOwnProperty("currScore"))
                object.currScore = message.currScore;
            if (message.totalScore != null && message.hasOwnProperty("totalScore"))
                object.totalScore = message.totalScore;
            return object;
        };

        /**
         * Converts this JoinRoomBroadcast to JSON.
         * @function toJSON
         * @memberof msg.JoinRoomBroadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinRoomBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinRoomBroadcast;
    })();

    msg.DissolveTheRoomCmd = (function() {

        /**
         * Properties of a DissolveTheRoomCmd.
         * @memberof msg
         * @interface IDissolveTheRoomCmd
         * @property {number|null} [reason] DissolveTheRoomCmd reason
         */

        /**
         * Constructs a new DissolveTheRoomCmd.
         * @memberof msg
         * @classdesc Represents a DissolveTheRoomCmd.
         * @implements IDissolveTheRoomCmd
         * @constructor
         * @param {msg.IDissolveTheRoomCmd=} [properties] Properties to set
         */
        function DissolveTheRoomCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DissolveTheRoomCmd reason.
         * @member {number} reason
         * @memberof msg.DissolveTheRoomCmd
         * @instance
         */
        DissolveTheRoomCmd.prototype.reason = 0;

        /**
         * Creates a new DissolveTheRoomCmd instance using the specified properties.
         * @function create
         * @memberof msg.DissolveTheRoomCmd
         * @static
         * @param {msg.IDissolveTheRoomCmd=} [properties] Properties to set
         * @returns {msg.DissolveTheRoomCmd} DissolveTheRoomCmd instance
         */
        DissolveTheRoomCmd.create = function create(properties) {
            return new DissolveTheRoomCmd(properties);
        };

        /**
         * Encodes the specified DissolveTheRoomCmd message. Does not implicitly {@link msg.DissolveTheRoomCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.DissolveTheRoomCmd
         * @static
         * @param {msg.IDissolveTheRoomCmd} message DissolveTheRoomCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DissolveTheRoomCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.reason);
            return writer;
        };

        /**
         * Encodes the specified DissolveTheRoomCmd message, length delimited. Does not implicitly {@link msg.DissolveTheRoomCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.DissolveTheRoomCmd
         * @static
         * @param {msg.IDissolveTheRoomCmd} message DissolveTheRoomCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DissolveTheRoomCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DissolveTheRoomCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.DissolveTheRoomCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.DissolveTheRoomCmd} DissolveTheRoomCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DissolveTheRoomCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.DissolveTheRoomCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reason = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DissolveTheRoomCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.DissolveTheRoomCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.DissolveTheRoomCmd} DissolveTheRoomCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DissolveTheRoomCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DissolveTheRoomCmd message.
         * @function verify
         * @memberof msg.DissolveTheRoomCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DissolveTheRoomCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isInteger(message.reason))
                    return "reason: integer expected";
            return null;
        };

        /**
         * Creates a DissolveTheRoomCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.DissolveTheRoomCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.DissolveTheRoomCmd} DissolveTheRoomCmd
         */
        DissolveTheRoomCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.DissolveTheRoomCmd)
                return object;
            let message = new $root.msg.DissolveTheRoomCmd();
            if (object.reason != null)
                message.reason = object.reason | 0;
            return message;
        };

        /**
         * Creates a plain object from a DissolveTheRoomCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.DissolveTheRoomCmd
         * @static
         * @param {msg.DissolveTheRoomCmd} message DissolveTheRoomCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DissolveTheRoomCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.reason = 0;
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            return object;
        };

        /**
         * Converts this DissolveTheRoomCmd to JSON.
         * @function toJSON
         * @memberof msg.DissolveTheRoomCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DissolveTheRoomCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DissolveTheRoomCmd;
    })();

    msg.DissolveTheRoomResult = (function() {

        /**
         * Properties of a DissolveTheRoomResult.
         * @memberof msg
         * @interface IDissolveTheRoomResult
         * @property {number|null} [reason] DissolveTheRoomResult reason
         * @property {boolean|null} [ok] DissolveTheRoomResult ok
         */

        /**
         * Constructs a new DissolveTheRoomResult.
         * @memberof msg
         * @classdesc Represents a DissolveTheRoomResult.
         * @implements IDissolveTheRoomResult
         * @constructor
         * @param {msg.IDissolveTheRoomResult=} [properties] Properties to set
         */
        function DissolveTheRoomResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DissolveTheRoomResult reason.
         * @member {number} reason
         * @memberof msg.DissolveTheRoomResult
         * @instance
         */
        DissolveTheRoomResult.prototype.reason = 0;

        /**
         * DissolveTheRoomResult ok.
         * @member {boolean} ok
         * @memberof msg.DissolveTheRoomResult
         * @instance
         */
        DissolveTheRoomResult.prototype.ok = false;

        /**
         * Creates a new DissolveTheRoomResult instance using the specified properties.
         * @function create
         * @memberof msg.DissolveTheRoomResult
         * @static
         * @param {msg.IDissolveTheRoomResult=} [properties] Properties to set
         * @returns {msg.DissolveTheRoomResult} DissolveTheRoomResult instance
         */
        DissolveTheRoomResult.create = function create(properties) {
            return new DissolveTheRoomResult(properties);
        };

        /**
         * Encodes the specified DissolveTheRoomResult message. Does not implicitly {@link msg.DissolveTheRoomResult.verify|verify} messages.
         * @function encode
         * @memberof msg.DissolveTheRoomResult
         * @static
         * @param {msg.IDissolveTheRoomResult} message DissolveTheRoomResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DissolveTheRoomResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.reason);
            if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.ok);
            return writer;
        };

        /**
         * Encodes the specified DissolveTheRoomResult message, length delimited. Does not implicitly {@link msg.DissolveTheRoomResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.DissolveTheRoomResult
         * @static
         * @param {msg.IDissolveTheRoomResult} message DissolveTheRoomResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DissolveTheRoomResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DissolveTheRoomResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.DissolveTheRoomResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.DissolveTheRoomResult} DissolveTheRoomResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DissolveTheRoomResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.DissolveTheRoomResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reason = reader.sint32();
                    break;
                case 2:
                    message.ok = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DissolveTheRoomResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.DissolveTheRoomResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.DissolveTheRoomResult} DissolveTheRoomResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DissolveTheRoomResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DissolveTheRoomResult message.
         * @function verify
         * @memberof msg.DissolveTheRoomResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DissolveTheRoomResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isInteger(message.reason))
                    return "reason: integer expected";
            if (message.ok != null && message.hasOwnProperty("ok"))
                if (typeof message.ok !== "boolean")
                    return "ok: boolean expected";
            return null;
        };

        /**
         * Creates a DissolveTheRoomResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.DissolveTheRoomResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.DissolveTheRoomResult} DissolveTheRoomResult
         */
        DissolveTheRoomResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.DissolveTheRoomResult)
                return object;
            let message = new $root.msg.DissolveTheRoomResult();
            if (object.reason != null)
                message.reason = object.reason | 0;
            if (object.ok != null)
                message.ok = Boolean(object.ok);
            return message;
        };

        /**
         * Creates a plain object from a DissolveTheRoomResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.DissolveTheRoomResult
         * @static
         * @param {msg.DissolveTheRoomResult} message DissolveTheRoomResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DissolveTheRoomResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.reason = 0;
                object.ok = false;
            }
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            if (message.ok != null && message.hasOwnProperty("ok"))
                object.ok = message.ok;
            return object;
        };

        /**
         * Converts this DissolveTheRoomResult to JSON.
         * @function toJSON
         * @memberof msg.DissolveTheRoomResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DissolveTheRoomResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DissolveTheRoomResult;
    })();

    msg.DissolveTheRoomBroadcast = (function() {

        /**
         * Properties of a DissolveTheRoomBroadcast.
         * @memberof msg
         * @interface IDissolveTheRoomBroadcast
         * @property {number|null} [fromUserId] DissolveTheRoomBroadcast fromUserId
         * @property {string|null} [fromUserName] DissolveTheRoomBroadcast fromUserName
         * @property {number|null} [reason] DissolveTheRoomBroadcast reason
         * @property {number|null} [currRoundIndex] 当前牌局索引
         * @property {number|null} [remainTime] DissolveTheRoomBroadcast remainTime
         * @property {Array.<msg.DissolveTheRoomBroadcast.IWaiting4User>|null} [waiting4User] DissolveTheRoomBroadcast waiting4User
         */

        /**
         * Constructs a new DissolveTheRoomBroadcast.
         * @memberof msg
         * @classdesc Represents a DissolveTheRoomBroadcast.
         * @implements IDissolveTheRoomBroadcast
         * @constructor
         * @param {msg.IDissolveTheRoomBroadcast=} [properties] Properties to set
         */
        function DissolveTheRoomBroadcast(properties) {
            this.waiting4User = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DissolveTheRoomBroadcast fromUserId.
         * @member {number} fromUserId
         * @memberof msg.DissolveTheRoomBroadcast
         * @instance
         */
        DissolveTheRoomBroadcast.prototype.fromUserId = 0;

        /**
         * DissolveTheRoomBroadcast fromUserName.
         * @member {string} fromUserName
         * @memberof msg.DissolveTheRoomBroadcast
         * @instance
         */
        DissolveTheRoomBroadcast.prototype.fromUserName = "";

        /**
         * DissolveTheRoomBroadcast reason.
         * @member {number} reason
         * @memberof msg.DissolveTheRoomBroadcast
         * @instance
         */
        DissolveTheRoomBroadcast.prototype.reason = 0;

        /**
         * 当前牌局索引
         * @member {number} currRoundIndex
         * @memberof msg.DissolveTheRoomBroadcast
         * @instance
         */
        DissolveTheRoomBroadcast.prototype.currRoundIndex = 0;

        /**
         * DissolveTheRoomBroadcast remainTime.
         * @member {number} remainTime
         * @memberof msg.DissolveTheRoomBroadcast
         * @instance
         */
        DissolveTheRoomBroadcast.prototype.remainTime = 0;

        /**
         * DissolveTheRoomBroadcast waiting4User.
         * @member {Array.<msg.DissolveTheRoomBroadcast.IWaiting4User>} waiting4User
         * @memberof msg.DissolveTheRoomBroadcast
         * @instance
         */
        DissolveTheRoomBroadcast.prototype.waiting4User = $util.emptyArray;

        /**
         * Creates a new DissolveTheRoomBroadcast instance using the specified properties.
         * @function create
         * @memberof msg.DissolveTheRoomBroadcast
         * @static
         * @param {msg.IDissolveTheRoomBroadcast=} [properties] Properties to set
         * @returns {msg.DissolveTheRoomBroadcast} DissolveTheRoomBroadcast instance
         */
        DissolveTheRoomBroadcast.create = function create(properties) {
            return new DissolveTheRoomBroadcast(properties);
        };

        /**
         * Encodes the specified DissolveTheRoomBroadcast message. Does not implicitly {@link msg.DissolveTheRoomBroadcast.verify|verify} messages.
         * @function encode
         * @memberof msg.DissolveTheRoomBroadcast
         * @static
         * @param {msg.IDissolveTheRoomBroadcast} message DissolveTheRoomBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DissolveTheRoomBroadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fromUserId != null && Object.hasOwnProperty.call(message, "fromUserId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.fromUserId);
            if (message.fromUserName != null && Object.hasOwnProperty.call(message, "fromUserName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.fromUserName);
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.reason);
            if (message.currRoundIndex != null && Object.hasOwnProperty.call(message, "currRoundIndex"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.currRoundIndex);
            if (message.remainTime != null && Object.hasOwnProperty.call(message, "remainTime"))
                writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.remainTime);
            if (message.waiting4User != null && message.waiting4User.length)
                for (let i = 0; i < message.waiting4User.length; ++i)
                    $root.msg.DissolveTheRoomBroadcast.Waiting4User.encode(message.waiting4User[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DissolveTheRoomBroadcast message, length delimited. Does not implicitly {@link msg.DissolveTheRoomBroadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.DissolveTheRoomBroadcast
         * @static
         * @param {msg.IDissolveTheRoomBroadcast} message DissolveTheRoomBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DissolveTheRoomBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DissolveTheRoomBroadcast message from the specified reader or buffer.
         * @function decode
         * @memberof msg.DissolveTheRoomBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.DissolveTheRoomBroadcast} DissolveTheRoomBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DissolveTheRoomBroadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.DissolveTheRoomBroadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.fromUserId = reader.sint32();
                    break;
                case 2:
                    message.fromUserName = reader.string();
                    break;
                case 3:
                    message.reason = reader.sint32();
                    break;
                case 4:
                    message.currRoundIndex = reader.sint32();
                    break;
                case 5:
                    message.remainTime = reader.sint32();
                    break;
                case 6:
                    if (!(message.waiting4User && message.waiting4User.length))
                        message.waiting4User = [];
                    message.waiting4User.push($root.msg.DissolveTheRoomBroadcast.Waiting4User.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DissolveTheRoomBroadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.DissolveTheRoomBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.DissolveTheRoomBroadcast} DissolveTheRoomBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DissolveTheRoomBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DissolveTheRoomBroadcast message.
         * @function verify
         * @memberof msg.DissolveTheRoomBroadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DissolveTheRoomBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fromUserId != null && message.hasOwnProperty("fromUserId"))
                if (!$util.isInteger(message.fromUserId))
                    return "fromUserId: integer expected";
            if (message.fromUserName != null && message.hasOwnProperty("fromUserName"))
                if (!$util.isString(message.fromUserName))
                    return "fromUserName: string expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isInteger(message.reason))
                    return "reason: integer expected";
            if (message.currRoundIndex != null && message.hasOwnProperty("currRoundIndex"))
                if (!$util.isInteger(message.currRoundIndex))
                    return "currRoundIndex: integer expected";
            if (message.remainTime != null && message.hasOwnProperty("remainTime"))
                if (!$util.isInteger(message.remainTime))
                    return "remainTime: integer expected";
            if (message.waiting4User != null && message.hasOwnProperty("waiting4User")) {
                if (!Array.isArray(message.waiting4User))
                    return "waiting4User: array expected";
                for (let i = 0; i < message.waiting4User.length; ++i) {
                    let error = $root.msg.DissolveTheRoomBroadcast.Waiting4User.verify(message.waiting4User[i]);
                    if (error)
                        return "waiting4User." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DissolveTheRoomBroadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.DissolveTheRoomBroadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.DissolveTheRoomBroadcast} DissolveTheRoomBroadcast
         */
        DissolveTheRoomBroadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.DissolveTheRoomBroadcast)
                return object;
            let message = new $root.msg.DissolveTheRoomBroadcast();
            if (object.fromUserId != null)
                message.fromUserId = object.fromUserId | 0;
            if (object.fromUserName != null)
                message.fromUserName = String(object.fromUserName);
            if (object.reason != null)
                message.reason = object.reason | 0;
            if (object.currRoundIndex != null)
                message.currRoundIndex = object.currRoundIndex | 0;
            if (object.remainTime != null)
                message.remainTime = object.remainTime | 0;
            if (object.waiting4User) {
                if (!Array.isArray(object.waiting4User))
                    throw TypeError(".msg.DissolveTheRoomBroadcast.waiting4User: array expected");
                message.waiting4User = [];
                for (let i = 0; i < object.waiting4User.length; ++i) {
                    if (typeof object.waiting4User[i] !== "object")
                        throw TypeError(".msg.DissolveTheRoomBroadcast.waiting4User: object expected");
                    message.waiting4User[i] = $root.msg.DissolveTheRoomBroadcast.Waiting4User.fromObject(object.waiting4User[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DissolveTheRoomBroadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.DissolveTheRoomBroadcast
         * @static
         * @param {msg.DissolveTheRoomBroadcast} message DissolveTheRoomBroadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DissolveTheRoomBroadcast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.waiting4User = [];
            if (options.defaults) {
                object.fromUserId = 0;
                object.fromUserName = "";
                object.reason = 0;
                object.currRoundIndex = 0;
                object.remainTime = 0;
            }
            if (message.fromUserId != null && message.hasOwnProperty("fromUserId"))
                object.fromUserId = message.fromUserId;
            if (message.fromUserName != null && message.hasOwnProperty("fromUserName"))
                object.fromUserName = message.fromUserName;
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            if (message.currRoundIndex != null && message.hasOwnProperty("currRoundIndex"))
                object.currRoundIndex = message.currRoundIndex;
            if (message.remainTime != null && message.hasOwnProperty("remainTime"))
                object.remainTime = message.remainTime;
            if (message.waiting4User && message.waiting4User.length) {
                object.waiting4User = [];
                for (let j = 0; j < message.waiting4User.length; ++j)
                    object.waiting4User[j] = $root.msg.DissolveTheRoomBroadcast.Waiting4User.toObject(message.waiting4User[j], options);
            }
            return object;
        };

        /**
         * Converts this DissolveTheRoomBroadcast to JSON.
         * @function toJSON
         * @memberof msg.DissolveTheRoomBroadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DissolveTheRoomBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        DissolveTheRoomBroadcast.Waiting4User = (function() {

            /**
             * Properties of a Waiting4User.
             * @memberof msg.DissolveTheRoomBroadcast
             * @interface IWaiting4User
             * @property {number|null} [userId] Waiting4User userId
             * @property {string|null} [userName] Waiting4User userName
             * @property {string|null} [headImg] Waiting4User headImg
             * @property {boolean|null} [roomOwnerFlag] Waiting4User roomOwnerFlag
             * @property {number|null} [seatIndex] Waiting4User seatIndex
             * @property {number|null} [yes] Waiting4User yes
             */

            /**
             * Constructs a new Waiting4User.
             * @memberof msg.DissolveTheRoomBroadcast
             * @classdesc Represents a Waiting4User.
             * @implements IWaiting4User
             * @constructor
             * @param {msg.DissolveTheRoomBroadcast.IWaiting4User=} [properties] Properties to set
             */
            function Waiting4User(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Waiting4User userId.
             * @member {number} userId
             * @memberof msg.DissolveTheRoomBroadcast.Waiting4User
             * @instance
             */
            Waiting4User.prototype.userId = 0;

            /**
             * Waiting4User userName.
             * @member {string} userName
             * @memberof msg.DissolveTheRoomBroadcast.Waiting4User
             * @instance
             */
            Waiting4User.prototype.userName = "";

            /**
             * Waiting4User headImg.
             * @member {string} headImg
             * @memberof msg.DissolveTheRoomBroadcast.Waiting4User
             * @instance
             */
            Waiting4User.prototype.headImg = "";

            /**
             * Waiting4User roomOwnerFlag.
             * @member {boolean} roomOwnerFlag
             * @memberof msg.DissolveTheRoomBroadcast.Waiting4User
             * @instance
             */
            Waiting4User.prototype.roomOwnerFlag = false;

            /**
             * Waiting4User seatIndex.
             * @member {number} seatIndex
             * @memberof msg.DissolveTheRoomBroadcast.Waiting4User
             * @instance
             */
            Waiting4User.prototype.seatIndex = 0;

            /**
             * Waiting4User yes.
             * @member {number} yes
             * @memberof msg.DissolveTheRoomBroadcast.Waiting4User
             * @instance
             */
            Waiting4User.prototype.yes = 0;

            /**
             * Creates a new Waiting4User instance using the specified properties.
             * @function create
             * @memberof msg.DissolveTheRoomBroadcast.Waiting4User
             * @static
             * @param {msg.DissolveTheRoomBroadcast.IWaiting4User=} [properties] Properties to set
             * @returns {msg.DissolveTheRoomBroadcast.Waiting4User} Waiting4User instance
             */
            Waiting4User.create = function create(properties) {
                return new Waiting4User(properties);
            };

            /**
             * Encodes the specified Waiting4User message. Does not implicitly {@link msg.DissolveTheRoomBroadcast.Waiting4User.verify|verify} messages.
             * @function encode
             * @memberof msg.DissolveTheRoomBroadcast.Waiting4User
             * @static
             * @param {msg.DissolveTheRoomBroadcast.IWaiting4User} message Waiting4User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Waiting4User.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userId);
                if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.userName);
                if (message.headImg != null && Object.hasOwnProperty.call(message, "headImg"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.headImg);
                if (message.roomOwnerFlag != null && Object.hasOwnProperty.call(message, "roomOwnerFlag"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.roomOwnerFlag);
                if (message.seatIndex != null && Object.hasOwnProperty.call(message, "seatIndex"))
                    writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.seatIndex);
                if (message.yes != null && Object.hasOwnProperty.call(message, "yes"))
                    writer.uint32(/* id 6, wireType 0 =*/48).sint32(message.yes);
                return writer;
            };

            /**
             * Encodes the specified Waiting4User message, length delimited. Does not implicitly {@link msg.DissolveTheRoomBroadcast.Waiting4User.verify|verify} messages.
             * @function encodeDelimited
             * @memberof msg.DissolveTheRoomBroadcast.Waiting4User
             * @static
             * @param {msg.DissolveTheRoomBroadcast.IWaiting4User} message Waiting4User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Waiting4User.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Waiting4User message from the specified reader or buffer.
             * @function decode
             * @memberof msg.DissolveTheRoomBroadcast.Waiting4User
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {msg.DissolveTheRoomBroadcast.Waiting4User} Waiting4User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Waiting4User.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.DissolveTheRoomBroadcast.Waiting4User();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.userId = reader.sint32();
                        break;
                    case 2:
                        message.userName = reader.string();
                        break;
                    case 3:
                        message.headImg = reader.string();
                        break;
                    case 4:
                        message.roomOwnerFlag = reader.bool();
                        break;
                    case 5:
                        message.seatIndex = reader.sint32();
                        break;
                    case 6:
                        message.yes = reader.sint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Waiting4User message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof msg.DissolveTheRoomBroadcast.Waiting4User
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {msg.DissolveTheRoomBroadcast.Waiting4User} Waiting4User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Waiting4User.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Waiting4User message.
             * @function verify
             * @memberof msg.DissolveTheRoomBroadcast.Waiting4User
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Waiting4User.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId))
                        return "userId: integer expected";
                if (message.userName != null && message.hasOwnProperty("userName"))
                    if (!$util.isString(message.userName))
                        return "userName: string expected";
                if (message.headImg != null && message.hasOwnProperty("headImg"))
                    if (!$util.isString(message.headImg))
                        return "headImg: string expected";
                if (message.roomOwnerFlag != null && message.hasOwnProperty("roomOwnerFlag"))
                    if (typeof message.roomOwnerFlag !== "boolean")
                        return "roomOwnerFlag: boolean expected";
                if (message.seatIndex != null && message.hasOwnProperty("seatIndex"))
                    if (!$util.isInteger(message.seatIndex))
                        return "seatIndex: integer expected";
                if (message.yes != null && message.hasOwnProperty("yes"))
                    if (!$util.isInteger(message.yes))
                        return "yes: integer expected";
                return null;
            };

            /**
             * Creates a Waiting4User message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof msg.DissolveTheRoomBroadcast.Waiting4User
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {msg.DissolveTheRoomBroadcast.Waiting4User} Waiting4User
             */
            Waiting4User.fromObject = function fromObject(object) {
                if (object instanceof $root.msg.DissolveTheRoomBroadcast.Waiting4User)
                    return object;
                let message = new $root.msg.DissolveTheRoomBroadcast.Waiting4User();
                if (object.userId != null)
                    message.userId = object.userId | 0;
                if (object.userName != null)
                    message.userName = String(object.userName);
                if (object.headImg != null)
                    message.headImg = String(object.headImg);
                if (object.roomOwnerFlag != null)
                    message.roomOwnerFlag = Boolean(object.roomOwnerFlag);
                if (object.seatIndex != null)
                    message.seatIndex = object.seatIndex | 0;
                if (object.yes != null)
                    message.yes = object.yes | 0;
                return message;
            };

            /**
             * Creates a plain object from a Waiting4User message. Also converts values to other types if specified.
             * @function toObject
             * @memberof msg.DissolveTheRoomBroadcast.Waiting4User
             * @static
             * @param {msg.DissolveTheRoomBroadcast.Waiting4User} message Waiting4User
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Waiting4User.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.userId = 0;
                    object.userName = "";
                    object.headImg = "";
                    object.roomOwnerFlag = false;
                    object.seatIndex = 0;
                    object.yes = 0;
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.userName != null && message.hasOwnProperty("userName"))
                    object.userName = message.userName;
                if (message.headImg != null && message.hasOwnProperty("headImg"))
                    object.headImg = message.headImg;
                if (message.roomOwnerFlag != null && message.hasOwnProperty("roomOwnerFlag"))
                    object.roomOwnerFlag = message.roomOwnerFlag;
                if (message.seatIndex != null && message.hasOwnProperty("seatIndex"))
                    object.seatIndex = message.seatIndex;
                if (message.yes != null && message.hasOwnProperty("yes"))
                    object.yes = message.yes;
                return object;
            };

            /**
             * Converts this Waiting4User to JSON.
             * @function toJSON
             * @memberof msg.DissolveTheRoomBroadcast.Waiting4User
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Waiting4User.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Waiting4User;
        })();

        return DissolveTheRoomBroadcast;
    })();

    msg.DissolutionVoteCmd = (function() {

        /**
         * Properties of a DissolutionVoteCmd.
         * @memberof msg
         * @interface IDissolutionVoteCmd
         * @property {number|null} [yes] DissolutionVoteCmd yes
         */

        /**
         * Constructs a new DissolutionVoteCmd.
         * @memberof msg
         * @classdesc Represents a DissolutionVoteCmd.
         * @implements IDissolutionVoteCmd
         * @constructor
         * @param {msg.IDissolutionVoteCmd=} [properties] Properties to set
         */
        function DissolutionVoteCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DissolutionVoteCmd yes.
         * @member {number} yes
         * @memberof msg.DissolutionVoteCmd
         * @instance
         */
        DissolutionVoteCmd.prototype.yes = 0;

        /**
         * Creates a new DissolutionVoteCmd instance using the specified properties.
         * @function create
         * @memberof msg.DissolutionVoteCmd
         * @static
         * @param {msg.IDissolutionVoteCmd=} [properties] Properties to set
         * @returns {msg.DissolutionVoteCmd} DissolutionVoteCmd instance
         */
        DissolutionVoteCmd.create = function create(properties) {
            return new DissolutionVoteCmd(properties);
        };

        /**
         * Encodes the specified DissolutionVoteCmd message. Does not implicitly {@link msg.DissolutionVoteCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.DissolutionVoteCmd
         * @static
         * @param {msg.IDissolutionVoteCmd} message DissolutionVoteCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DissolutionVoteCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.yes != null && Object.hasOwnProperty.call(message, "yes"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.yes);
            return writer;
        };

        /**
         * Encodes the specified DissolutionVoteCmd message, length delimited. Does not implicitly {@link msg.DissolutionVoteCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.DissolutionVoteCmd
         * @static
         * @param {msg.IDissolutionVoteCmd} message DissolutionVoteCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DissolutionVoteCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DissolutionVoteCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.DissolutionVoteCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.DissolutionVoteCmd} DissolutionVoteCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DissolutionVoteCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.DissolutionVoteCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.yes = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DissolutionVoteCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.DissolutionVoteCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.DissolutionVoteCmd} DissolutionVoteCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DissolutionVoteCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DissolutionVoteCmd message.
         * @function verify
         * @memberof msg.DissolutionVoteCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DissolutionVoteCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.yes != null && message.hasOwnProperty("yes"))
                if (!$util.isInteger(message.yes))
                    return "yes: integer expected";
            return null;
        };

        /**
         * Creates a DissolutionVoteCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.DissolutionVoteCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.DissolutionVoteCmd} DissolutionVoteCmd
         */
        DissolutionVoteCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.DissolutionVoteCmd)
                return object;
            let message = new $root.msg.DissolutionVoteCmd();
            if (object.yes != null)
                message.yes = object.yes | 0;
            return message;
        };

        /**
         * Creates a plain object from a DissolutionVoteCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.DissolutionVoteCmd
         * @static
         * @param {msg.DissolutionVoteCmd} message DissolutionVoteCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DissolutionVoteCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.yes = 0;
            if (message.yes != null && message.hasOwnProperty("yes"))
                object.yes = message.yes;
            return object;
        };

        /**
         * Converts this DissolutionVoteCmd to JSON.
         * @function toJSON
         * @memberof msg.DissolutionVoteCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DissolutionVoteCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DissolutionVoteCmd;
    })();

    msg.DissolutionVoteResult = (function() {

        /**
         * Properties of a DissolutionVoteResult.
         * @memberof msg
         * @interface IDissolutionVoteResult
         * @property {number|null} [yes] DissolutionVoteResult yes
         * @property {boolean|null} [ok] DissolutionVoteResult ok
         */

        /**
         * Constructs a new DissolutionVoteResult.
         * @memberof msg
         * @classdesc Represents a DissolutionVoteResult.
         * @implements IDissolutionVoteResult
         * @constructor
         * @param {msg.IDissolutionVoteResult=} [properties] Properties to set
         */
        function DissolutionVoteResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DissolutionVoteResult yes.
         * @member {number} yes
         * @memberof msg.DissolutionVoteResult
         * @instance
         */
        DissolutionVoteResult.prototype.yes = 0;

        /**
         * DissolutionVoteResult ok.
         * @member {boolean} ok
         * @memberof msg.DissolutionVoteResult
         * @instance
         */
        DissolutionVoteResult.prototype.ok = false;

        /**
         * Creates a new DissolutionVoteResult instance using the specified properties.
         * @function create
         * @memberof msg.DissolutionVoteResult
         * @static
         * @param {msg.IDissolutionVoteResult=} [properties] Properties to set
         * @returns {msg.DissolutionVoteResult} DissolutionVoteResult instance
         */
        DissolutionVoteResult.create = function create(properties) {
            return new DissolutionVoteResult(properties);
        };

        /**
         * Encodes the specified DissolutionVoteResult message. Does not implicitly {@link msg.DissolutionVoteResult.verify|verify} messages.
         * @function encode
         * @memberof msg.DissolutionVoteResult
         * @static
         * @param {msg.IDissolutionVoteResult} message DissolutionVoteResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DissolutionVoteResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.yes != null && Object.hasOwnProperty.call(message, "yes"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.yes);
            if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.ok);
            return writer;
        };

        /**
         * Encodes the specified DissolutionVoteResult message, length delimited. Does not implicitly {@link msg.DissolutionVoteResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.DissolutionVoteResult
         * @static
         * @param {msg.IDissolutionVoteResult} message DissolutionVoteResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DissolutionVoteResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DissolutionVoteResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.DissolutionVoteResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.DissolutionVoteResult} DissolutionVoteResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DissolutionVoteResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.DissolutionVoteResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.yes = reader.sint32();
                    break;
                case 2:
                    message.ok = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DissolutionVoteResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.DissolutionVoteResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.DissolutionVoteResult} DissolutionVoteResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DissolutionVoteResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DissolutionVoteResult message.
         * @function verify
         * @memberof msg.DissolutionVoteResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DissolutionVoteResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.yes != null && message.hasOwnProperty("yes"))
                if (!$util.isInteger(message.yes))
                    return "yes: integer expected";
            if (message.ok != null && message.hasOwnProperty("ok"))
                if (typeof message.ok !== "boolean")
                    return "ok: boolean expected";
            return null;
        };

        /**
         * Creates a DissolutionVoteResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.DissolutionVoteResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.DissolutionVoteResult} DissolutionVoteResult
         */
        DissolutionVoteResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.DissolutionVoteResult)
                return object;
            let message = new $root.msg.DissolutionVoteResult();
            if (object.yes != null)
                message.yes = object.yes | 0;
            if (object.ok != null)
                message.ok = Boolean(object.ok);
            return message;
        };

        /**
         * Creates a plain object from a DissolutionVoteResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.DissolutionVoteResult
         * @static
         * @param {msg.DissolutionVoteResult} message DissolutionVoteResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DissolutionVoteResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.yes = 0;
                object.ok = false;
            }
            if (message.yes != null && message.hasOwnProperty("yes"))
                object.yes = message.yes;
            if (message.ok != null && message.hasOwnProperty("ok"))
                object.ok = message.ok;
            return object;
        };

        /**
         * Converts this DissolutionVoteResult to JSON.
         * @function toJSON
         * @memberof msg.DissolutionVoteResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DissolutionVoteResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DissolutionVoteResult;
    })();

    msg.DissolutionVoteBroadcast = (function() {

        /**
         * Properties of a DissolutionVoteBroadcast.
         * @memberof msg
         * @interface IDissolutionVoteBroadcast
         * @property {number|null} [userId] DissolutionVoteBroadcast userId
         * @property {number|null} [yes] DissolutionVoteBroadcast yes
         */

        /**
         * Constructs a new DissolutionVoteBroadcast.
         * @memberof msg
         * @classdesc Represents a DissolutionVoteBroadcast.
         * @implements IDissolutionVoteBroadcast
         * @constructor
         * @param {msg.IDissolutionVoteBroadcast=} [properties] Properties to set
         */
        function DissolutionVoteBroadcast(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DissolutionVoteBroadcast userId.
         * @member {number} userId
         * @memberof msg.DissolutionVoteBroadcast
         * @instance
         */
        DissolutionVoteBroadcast.prototype.userId = 0;

        /**
         * DissolutionVoteBroadcast yes.
         * @member {number} yes
         * @memberof msg.DissolutionVoteBroadcast
         * @instance
         */
        DissolutionVoteBroadcast.prototype.yes = 0;

        /**
         * Creates a new DissolutionVoteBroadcast instance using the specified properties.
         * @function create
         * @memberof msg.DissolutionVoteBroadcast
         * @static
         * @param {msg.IDissolutionVoteBroadcast=} [properties] Properties to set
         * @returns {msg.DissolutionVoteBroadcast} DissolutionVoteBroadcast instance
         */
        DissolutionVoteBroadcast.create = function create(properties) {
            return new DissolutionVoteBroadcast(properties);
        };

        /**
         * Encodes the specified DissolutionVoteBroadcast message. Does not implicitly {@link msg.DissolutionVoteBroadcast.verify|verify} messages.
         * @function encode
         * @memberof msg.DissolutionVoteBroadcast
         * @static
         * @param {msg.IDissolutionVoteBroadcast} message DissolutionVoteBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DissolutionVoteBroadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userId);
            if (message.yes != null && Object.hasOwnProperty.call(message, "yes"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.yes);
            return writer;
        };

        /**
         * Encodes the specified DissolutionVoteBroadcast message, length delimited. Does not implicitly {@link msg.DissolutionVoteBroadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.DissolutionVoteBroadcast
         * @static
         * @param {msg.IDissolutionVoteBroadcast} message DissolutionVoteBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DissolutionVoteBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DissolutionVoteBroadcast message from the specified reader or buffer.
         * @function decode
         * @memberof msg.DissolutionVoteBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.DissolutionVoteBroadcast} DissolutionVoteBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DissolutionVoteBroadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.DissolutionVoteBroadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.sint32();
                    break;
                case 2:
                    message.yes = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DissolutionVoteBroadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.DissolutionVoteBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.DissolutionVoteBroadcast} DissolutionVoteBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DissolutionVoteBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DissolutionVoteBroadcast message.
         * @function verify
         * @memberof msg.DissolutionVoteBroadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DissolutionVoteBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.yes != null && message.hasOwnProperty("yes"))
                if (!$util.isInteger(message.yes))
                    return "yes: integer expected";
            return null;
        };

        /**
         * Creates a DissolutionVoteBroadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.DissolutionVoteBroadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.DissolutionVoteBroadcast} DissolutionVoteBroadcast
         */
        DissolutionVoteBroadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.DissolutionVoteBroadcast)
                return object;
            let message = new $root.msg.DissolutionVoteBroadcast();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.yes != null)
                message.yes = object.yes | 0;
            return message;
        };

        /**
         * Creates a plain object from a DissolutionVoteBroadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.DissolutionVoteBroadcast
         * @static
         * @param {msg.DissolutionVoteBroadcast} message DissolutionVoteBroadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DissolutionVoteBroadcast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = 0;
                object.yes = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.yes != null && message.hasOwnProperty("yes"))
                object.yes = message.yes;
            return object;
        };

        /**
         * Converts this DissolutionVoteBroadcast to JSON.
         * @function toJSON
         * @memberof msg.DissolutionVoteBroadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DissolutionVoteBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DissolutionVoteBroadcast;
    })();

    msg.DissolveSuccezzBroadcast = (function() {

        /**
         * Properties of a DissolveSuccezzBroadcast.
         * @memberof msg
         * @interface IDissolveSuccezzBroadcast
         */

        /**
         * Constructs a new DissolveSuccezzBroadcast.
         * @memberof msg
         * @classdesc Represents a DissolveSuccezzBroadcast.
         * @implements IDissolveSuccezzBroadcast
         * @constructor
         * @param {msg.IDissolveSuccezzBroadcast=} [properties] Properties to set
         */
        function DissolveSuccezzBroadcast(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new DissolveSuccezzBroadcast instance using the specified properties.
         * @function create
         * @memberof msg.DissolveSuccezzBroadcast
         * @static
         * @param {msg.IDissolveSuccezzBroadcast=} [properties] Properties to set
         * @returns {msg.DissolveSuccezzBroadcast} DissolveSuccezzBroadcast instance
         */
        DissolveSuccezzBroadcast.create = function create(properties) {
            return new DissolveSuccezzBroadcast(properties);
        };

        /**
         * Encodes the specified DissolveSuccezzBroadcast message. Does not implicitly {@link msg.DissolveSuccezzBroadcast.verify|verify} messages.
         * @function encode
         * @memberof msg.DissolveSuccezzBroadcast
         * @static
         * @param {msg.IDissolveSuccezzBroadcast} message DissolveSuccezzBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DissolveSuccezzBroadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified DissolveSuccezzBroadcast message, length delimited. Does not implicitly {@link msg.DissolveSuccezzBroadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.DissolveSuccezzBroadcast
         * @static
         * @param {msg.IDissolveSuccezzBroadcast} message DissolveSuccezzBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DissolveSuccezzBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DissolveSuccezzBroadcast message from the specified reader or buffer.
         * @function decode
         * @memberof msg.DissolveSuccezzBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.DissolveSuccezzBroadcast} DissolveSuccezzBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DissolveSuccezzBroadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.DissolveSuccezzBroadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DissolveSuccezzBroadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.DissolveSuccezzBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.DissolveSuccezzBroadcast} DissolveSuccezzBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DissolveSuccezzBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DissolveSuccezzBroadcast message.
         * @function verify
         * @memberof msg.DissolveSuccezzBroadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DissolveSuccezzBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a DissolveSuccezzBroadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.DissolveSuccezzBroadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.DissolveSuccezzBroadcast} DissolveSuccezzBroadcast
         */
        DissolveSuccezzBroadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.DissolveSuccezzBroadcast)
                return object;
            return new $root.msg.DissolveSuccezzBroadcast();
        };

        /**
         * Creates a plain object from a DissolveSuccezzBroadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.DissolveSuccezzBroadcast
         * @static
         * @param {msg.DissolveSuccezzBroadcast} message DissolveSuccezzBroadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DissolveSuccezzBroadcast.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this DissolveSuccezzBroadcast to JSON.
         * @function toJSON
         * @memberof msg.DissolveSuccezzBroadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DissolveSuccezzBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DissolveSuccezzBroadcast;
    })();

    msg.FireAPlayerCmd = (function() {

        /**
         * Properties of a FireAPlayerCmd.
         * @memberof msg
         * @interface IFireAPlayerCmd
         * @property {number|null} [targetUserId] FireAPlayerCmd targetUserId
         */

        /**
         * Constructs a new FireAPlayerCmd.
         * @memberof msg
         * @classdesc Represents a FireAPlayerCmd.
         * @implements IFireAPlayerCmd
         * @constructor
         * @param {msg.IFireAPlayerCmd=} [properties] Properties to set
         */
        function FireAPlayerCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FireAPlayerCmd targetUserId.
         * @member {number} targetUserId
         * @memberof msg.FireAPlayerCmd
         * @instance
         */
        FireAPlayerCmd.prototype.targetUserId = 0;

        /**
         * Creates a new FireAPlayerCmd instance using the specified properties.
         * @function create
         * @memberof msg.FireAPlayerCmd
         * @static
         * @param {msg.IFireAPlayerCmd=} [properties] Properties to set
         * @returns {msg.FireAPlayerCmd} FireAPlayerCmd instance
         */
        FireAPlayerCmd.create = function create(properties) {
            return new FireAPlayerCmd(properties);
        };

        /**
         * Encodes the specified FireAPlayerCmd message. Does not implicitly {@link msg.FireAPlayerCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.FireAPlayerCmd
         * @static
         * @param {msg.IFireAPlayerCmd} message FireAPlayerCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FireAPlayerCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.targetUserId != null && Object.hasOwnProperty.call(message, "targetUserId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.targetUserId);
            return writer;
        };

        /**
         * Encodes the specified FireAPlayerCmd message, length delimited. Does not implicitly {@link msg.FireAPlayerCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.FireAPlayerCmd
         * @static
         * @param {msg.IFireAPlayerCmd} message FireAPlayerCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FireAPlayerCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FireAPlayerCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.FireAPlayerCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.FireAPlayerCmd} FireAPlayerCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FireAPlayerCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.FireAPlayerCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.targetUserId = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FireAPlayerCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.FireAPlayerCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.FireAPlayerCmd} FireAPlayerCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FireAPlayerCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FireAPlayerCmd message.
         * @function verify
         * @memberof msg.FireAPlayerCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FireAPlayerCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
                if (!$util.isInteger(message.targetUserId))
                    return "targetUserId: integer expected";
            return null;
        };

        /**
         * Creates a FireAPlayerCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.FireAPlayerCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.FireAPlayerCmd} FireAPlayerCmd
         */
        FireAPlayerCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.FireAPlayerCmd)
                return object;
            let message = new $root.msg.FireAPlayerCmd();
            if (object.targetUserId != null)
                message.targetUserId = object.targetUserId | 0;
            return message;
        };

        /**
         * Creates a plain object from a FireAPlayerCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.FireAPlayerCmd
         * @static
         * @param {msg.FireAPlayerCmd} message FireAPlayerCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireAPlayerCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.targetUserId = 0;
            if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
                object.targetUserId = message.targetUserId;
            return object;
        };

        /**
         * Converts this FireAPlayerCmd to JSON.
         * @function toJSON
         * @memberof msg.FireAPlayerCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireAPlayerCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireAPlayerCmd;
    })();

    msg.FireAPlayerResult = (function() {

        /**
         * Properties of a FireAPlayerResult.
         * @memberof msg
         * @interface IFireAPlayerResult
         * @property {number|null} [targetUserId] FireAPlayerResult targetUserId
         * @property {boolean|null} [ok] FireAPlayerResult ok
         */

        /**
         * Constructs a new FireAPlayerResult.
         * @memberof msg
         * @classdesc Represents a FireAPlayerResult.
         * @implements IFireAPlayerResult
         * @constructor
         * @param {msg.IFireAPlayerResult=} [properties] Properties to set
         */
        function FireAPlayerResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FireAPlayerResult targetUserId.
         * @member {number} targetUserId
         * @memberof msg.FireAPlayerResult
         * @instance
         */
        FireAPlayerResult.prototype.targetUserId = 0;

        /**
         * FireAPlayerResult ok.
         * @member {boolean} ok
         * @memberof msg.FireAPlayerResult
         * @instance
         */
        FireAPlayerResult.prototype.ok = false;

        /**
         * Creates a new FireAPlayerResult instance using the specified properties.
         * @function create
         * @memberof msg.FireAPlayerResult
         * @static
         * @param {msg.IFireAPlayerResult=} [properties] Properties to set
         * @returns {msg.FireAPlayerResult} FireAPlayerResult instance
         */
        FireAPlayerResult.create = function create(properties) {
            return new FireAPlayerResult(properties);
        };

        /**
         * Encodes the specified FireAPlayerResult message. Does not implicitly {@link msg.FireAPlayerResult.verify|verify} messages.
         * @function encode
         * @memberof msg.FireAPlayerResult
         * @static
         * @param {msg.IFireAPlayerResult} message FireAPlayerResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FireAPlayerResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.targetUserId != null && Object.hasOwnProperty.call(message, "targetUserId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.targetUserId);
            if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.ok);
            return writer;
        };

        /**
         * Encodes the specified FireAPlayerResult message, length delimited. Does not implicitly {@link msg.FireAPlayerResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.FireAPlayerResult
         * @static
         * @param {msg.IFireAPlayerResult} message FireAPlayerResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FireAPlayerResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FireAPlayerResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.FireAPlayerResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.FireAPlayerResult} FireAPlayerResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FireAPlayerResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.FireAPlayerResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.targetUserId = reader.sint32();
                    break;
                case 2:
                    message.ok = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FireAPlayerResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.FireAPlayerResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.FireAPlayerResult} FireAPlayerResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FireAPlayerResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FireAPlayerResult message.
         * @function verify
         * @memberof msg.FireAPlayerResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FireAPlayerResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
                if (!$util.isInteger(message.targetUserId))
                    return "targetUserId: integer expected";
            if (message.ok != null && message.hasOwnProperty("ok"))
                if (typeof message.ok !== "boolean")
                    return "ok: boolean expected";
            return null;
        };

        /**
         * Creates a FireAPlayerResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.FireAPlayerResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.FireAPlayerResult} FireAPlayerResult
         */
        FireAPlayerResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.FireAPlayerResult)
                return object;
            let message = new $root.msg.FireAPlayerResult();
            if (object.targetUserId != null)
                message.targetUserId = object.targetUserId | 0;
            if (object.ok != null)
                message.ok = Boolean(object.ok);
            return message;
        };

        /**
         * Creates a plain object from a FireAPlayerResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.FireAPlayerResult
         * @static
         * @param {msg.FireAPlayerResult} message FireAPlayerResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireAPlayerResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.targetUserId = 0;
                object.ok = false;
            }
            if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
                object.targetUserId = message.targetUserId;
            if (message.ok != null && message.hasOwnProperty("ok"))
                object.ok = message.ok;
            return object;
        };

        /**
         * Converts this FireAPlayerResult to JSON.
         * @function toJSON
         * @memberof msg.FireAPlayerResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireAPlayerResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireAPlayerResult;
    })();

    msg.FireAPlayerBroadcast = (function() {

        /**
         * Properties of a FireAPlayerBroadcast.
         * @memberof msg
         * @interface IFireAPlayerBroadcast
         * @property {number|null} [targetUserId] FireAPlayerBroadcast targetUserId
         */

        /**
         * Constructs a new FireAPlayerBroadcast.
         * @memberof msg
         * @classdesc Represents a FireAPlayerBroadcast.
         * @implements IFireAPlayerBroadcast
         * @constructor
         * @param {msg.IFireAPlayerBroadcast=} [properties] Properties to set
         */
        function FireAPlayerBroadcast(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FireAPlayerBroadcast targetUserId.
         * @member {number} targetUserId
         * @memberof msg.FireAPlayerBroadcast
         * @instance
         */
        FireAPlayerBroadcast.prototype.targetUserId = 0;

        /**
         * Creates a new FireAPlayerBroadcast instance using the specified properties.
         * @function create
         * @memberof msg.FireAPlayerBroadcast
         * @static
         * @param {msg.IFireAPlayerBroadcast=} [properties] Properties to set
         * @returns {msg.FireAPlayerBroadcast} FireAPlayerBroadcast instance
         */
        FireAPlayerBroadcast.create = function create(properties) {
            return new FireAPlayerBroadcast(properties);
        };

        /**
         * Encodes the specified FireAPlayerBroadcast message. Does not implicitly {@link msg.FireAPlayerBroadcast.verify|verify} messages.
         * @function encode
         * @memberof msg.FireAPlayerBroadcast
         * @static
         * @param {msg.IFireAPlayerBroadcast} message FireAPlayerBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FireAPlayerBroadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.targetUserId != null && Object.hasOwnProperty.call(message, "targetUserId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.targetUserId);
            return writer;
        };

        /**
         * Encodes the specified FireAPlayerBroadcast message, length delimited. Does not implicitly {@link msg.FireAPlayerBroadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.FireAPlayerBroadcast
         * @static
         * @param {msg.IFireAPlayerBroadcast} message FireAPlayerBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FireAPlayerBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FireAPlayerBroadcast message from the specified reader or buffer.
         * @function decode
         * @memberof msg.FireAPlayerBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.FireAPlayerBroadcast} FireAPlayerBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FireAPlayerBroadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.FireAPlayerBroadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.targetUserId = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FireAPlayerBroadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.FireAPlayerBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.FireAPlayerBroadcast} FireAPlayerBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FireAPlayerBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FireAPlayerBroadcast message.
         * @function verify
         * @memberof msg.FireAPlayerBroadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FireAPlayerBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
                if (!$util.isInteger(message.targetUserId))
                    return "targetUserId: integer expected";
            return null;
        };

        /**
         * Creates a FireAPlayerBroadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.FireAPlayerBroadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.FireAPlayerBroadcast} FireAPlayerBroadcast
         */
        FireAPlayerBroadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.FireAPlayerBroadcast)
                return object;
            let message = new $root.msg.FireAPlayerBroadcast();
            if (object.targetUserId != null)
                message.targetUserId = object.targetUserId | 0;
            return message;
        };

        /**
         * Creates a plain object from a FireAPlayerBroadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.FireAPlayerBroadcast
         * @static
         * @param {msg.FireAPlayerBroadcast} message FireAPlayerBroadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireAPlayerBroadcast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.targetUserId = 0;
            if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
                object.targetUserId = message.targetUserId;
            return object;
        };

        /**
         * Converts this FireAPlayerBroadcast to JSON.
         * @function toJSON
         * @memberof msg.FireAPlayerBroadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireAPlayerBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireAPlayerBroadcast;
    })();

    msg.QuitRoomCmd = (function() {

        /**
         * Properties of a QuitRoomCmd.
         * @memberof msg
         * @interface IQuitRoomCmd
         */

        /**
         * Constructs a new QuitRoomCmd.
         * @memberof msg
         * @classdesc Represents a QuitRoomCmd.
         * @implements IQuitRoomCmd
         * @constructor
         * @param {msg.IQuitRoomCmd=} [properties] Properties to set
         */
        function QuitRoomCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new QuitRoomCmd instance using the specified properties.
         * @function create
         * @memberof msg.QuitRoomCmd
         * @static
         * @param {msg.IQuitRoomCmd=} [properties] Properties to set
         * @returns {msg.QuitRoomCmd} QuitRoomCmd instance
         */
        QuitRoomCmd.create = function create(properties) {
            return new QuitRoomCmd(properties);
        };

        /**
         * Encodes the specified QuitRoomCmd message. Does not implicitly {@link msg.QuitRoomCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.QuitRoomCmd
         * @static
         * @param {msg.IQuitRoomCmd} message QuitRoomCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuitRoomCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified QuitRoomCmd message, length delimited. Does not implicitly {@link msg.QuitRoomCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.QuitRoomCmd
         * @static
         * @param {msg.IQuitRoomCmd} message QuitRoomCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuitRoomCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QuitRoomCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.QuitRoomCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.QuitRoomCmd} QuitRoomCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuitRoomCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.QuitRoomCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QuitRoomCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.QuitRoomCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.QuitRoomCmd} QuitRoomCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuitRoomCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QuitRoomCmd message.
         * @function verify
         * @memberof msg.QuitRoomCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QuitRoomCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a QuitRoomCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.QuitRoomCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.QuitRoomCmd} QuitRoomCmd
         */
        QuitRoomCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.QuitRoomCmd)
                return object;
            return new $root.msg.QuitRoomCmd();
        };

        /**
         * Creates a plain object from a QuitRoomCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.QuitRoomCmd
         * @static
         * @param {msg.QuitRoomCmd} message QuitRoomCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QuitRoomCmd.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this QuitRoomCmd to JSON.
         * @function toJSON
         * @memberof msg.QuitRoomCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QuitRoomCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QuitRoomCmd;
    })();

    msg.QuitRoomResult = (function() {

        /**
         * Properties of a QuitRoomResult.
         * @memberof msg
         * @interface IQuitRoomResult
         * @property {boolean|null} [ok] QuitRoomResult ok
         */

        /**
         * Constructs a new QuitRoomResult.
         * @memberof msg
         * @classdesc Represents a QuitRoomResult.
         * @implements IQuitRoomResult
         * @constructor
         * @param {msg.IQuitRoomResult=} [properties] Properties to set
         */
        function QuitRoomResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QuitRoomResult ok.
         * @member {boolean} ok
         * @memberof msg.QuitRoomResult
         * @instance
         */
        QuitRoomResult.prototype.ok = false;

        /**
         * Creates a new QuitRoomResult instance using the specified properties.
         * @function create
         * @memberof msg.QuitRoomResult
         * @static
         * @param {msg.IQuitRoomResult=} [properties] Properties to set
         * @returns {msg.QuitRoomResult} QuitRoomResult instance
         */
        QuitRoomResult.create = function create(properties) {
            return new QuitRoomResult(properties);
        };

        /**
         * Encodes the specified QuitRoomResult message. Does not implicitly {@link msg.QuitRoomResult.verify|verify} messages.
         * @function encode
         * @memberof msg.QuitRoomResult
         * @static
         * @param {msg.IQuitRoomResult} message QuitRoomResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuitRoomResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ok);
            return writer;
        };

        /**
         * Encodes the specified QuitRoomResult message, length delimited. Does not implicitly {@link msg.QuitRoomResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.QuitRoomResult
         * @static
         * @param {msg.IQuitRoomResult} message QuitRoomResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuitRoomResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QuitRoomResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.QuitRoomResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.QuitRoomResult} QuitRoomResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuitRoomResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.QuitRoomResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ok = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QuitRoomResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.QuitRoomResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.QuitRoomResult} QuitRoomResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuitRoomResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QuitRoomResult message.
         * @function verify
         * @memberof msg.QuitRoomResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QuitRoomResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ok != null && message.hasOwnProperty("ok"))
                if (typeof message.ok !== "boolean")
                    return "ok: boolean expected";
            return null;
        };

        /**
         * Creates a QuitRoomResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.QuitRoomResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.QuitRoomResult} QuitRoomResult
         */
        QuitRoomResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.QuitRoomResult)
                return object;
            let message = new $root.msg.QuitRoomResult();
            if (object.ok != null)
                message.ok = Boolean(object.ok);
            return message;
        };

        /**
         * Creates a plain object from a QuitRoomResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.QuitRoomResult
         * @static
         * @param {msg.QuitRoomResult} message QuitRoomResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QuitRoomResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.ok = false;
            if (message.ok != null && message.hasOwnProperty("ok"))
                object.ok = message.ok;
            return object;
        };

        /**
         * Converts this QuitRoomResult to JSON.
         * @function toJSON
         * @memberof msg.QuitRoomResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QuitRoomResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QuitRoomResult;
    })();

    msg.QuitRoomBroadcast = (function() {

        /**
         * Properties of a QuitRoomBroadcast.
         * @memberof msg
         * @interface IQuitRoomBroadcast
         * @property {number|null} [fromUserId] QuitRoomBroadcast fromUserId
         */

        /**
         * Constructs a new QuitRoomBroadcast.
         * @memberof msg
         * @classdesc Represents a QuitRoomBroadcast.
         * @implements IQuitRoomBroadcast
         * @constructor
         * @param {msg.IQuitRoomBroadcast=} [properties] Properties to set
         */
        function QuitRoomBroadcast(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QuitRoomBroadcast fromUserId.
         * @member {number} fromUserId
         * @memberof msg.QuitRoomBroadcast
         * @instance
         */
        QuitRoomBroadcast.prototype.fromUserId = 0;

        /**
         * Creates a new QuitRoomBroadcast instance using the specified properties.
         * @function create
         * @memberof msg.QuitRoomBroadcast
         * @static
         * @param {msg.IQuitRoomBroadcast=} [properties] Properties to set
         * @returns {msg.QuitRoomBroadcast} QuitRoomBroadcast instance
         */
        QuitRoomBroadcast.create = function create(properties) {
            return new QuitRoomBroadcast(properties);
        };

        /**
         * Encodes the specified QuitRoomBroadcast message. Does not implicitly {@link msg.QuitRoomBroadcast.verify|verify} messages.
         * @function encode
         * @memberof msg.QuitRoomBroadcast
         * @static
         * @param {msg.IQuitRoomBroadcast} message QuitRoomBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuitRoomBroadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fromUserId != null && Object.hasOwnProperty.call(message, "fromUserId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.fromUserId);
            return writer;
        };

        /**
         * Encodes the specified QuitRoomBroadcast message, length delimited. Does not implicitly {@link msg.QuitRoomBroadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.QuitRoomBroadcast
         * @static
         * @param {msg.IQuitRoomBroadcast} message QuitRoomBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuitRoomBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QuitRoomBroadcast message from the specified reader or buffer.
         * @function decode
         * @memberof msg.QuitRoomBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.QuitRoomBroadcast} QuitRoomBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuitRoomBroadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.QuitRoomBroadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.fromUserId = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QuitRoomBroadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.QuitRoomBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.QuitRoomBroadcast} QuitRoomBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuitRoomBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QuitRoomBroadcast message.
         * @function verify
         * @memberof msg.QuitRoomBroadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QuitRoomBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fromUserId != null && message.hasOwnProperty("fromUserId"))
                if (!$util.isInteger(message.fromUserId))
                    return "fromUserId: integer expected";
            return null;
        };

        /**
         * Creates a QuitRoomBroadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.QuitRoomBroadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.QuitRoomBroadcast} QuitRoomBroadcast
         */
        QuitRoomBroadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.QuitRoomBroadcast)
                return object;
            let message = new $root.msg.QuitRoomBroadcast();
            if (object.fromUserId != null)
                message.fromUserId = object.fromUserId | 0;
            return message;
        };

        /**
         * Creates a plain object from a QuitRoomBroadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.QuitRoomBroadcast
         * @static
         * @param {msg.QuitRoomBroadcast} message QuitRoomBroadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QuitRoomBroadcast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.fromUserId = 0;
            if (message.fromUserId != null && message.hasOwnProperty("fromUserId"))
                object.fromUserId = message.fromUserId;
            return object;
        };

        /**
         * Converts this QuitRoomBroadcast to JSON.
         * @function toJSON
         * @memberof msg.QuitRoomBroadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QuitRoomBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QuitRoomBroadcast;
    })();

    msg.SyncRoomDataCmd = (function() {

        /**
         * Properties of a SyncRoomDataCmd.
         * @memberof msg
         * @interface ISyncRoomDataCmd
         */

        /**
         * Constructs a new SyncRoomDataCmd.
         * @memberof msg
         * @classdesc Represents a SyncRoomDataCmd.
         * @implements ISyncRoomDataCmd
         * @constructor
         * @param {msg.ISyncRoomDataCmd=} [properties] Properties to set
         */
        function SyncRoomDataCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SyncRoomDataCmd instance using the specified properties.
         * @function create
         * @memberof msg.SyncRoomDataCmd
         * @static
         * @param {msg.ISyncRoomDataCmd=} [properties] Properties to set
         * @returns {msg.SyncRoomDataCmd} SyncRoomDataCmd instance
         */
        SyncRoomDataCmd.create = function create(properties) {
            return new SyncRoomDataCmd(properties);
        };

        /**
         * Encodes the specified SyncRoomDataCmd message. Does not implicitly {@link msg.SyncRoomDataCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.SyncRoomDataCmd
         * @static
         * @param {msg.ISyncRoomDataCmd} message SyncRoomDataCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncRoomDataCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified SyncRoomDataCmd message, length delimited. Does not implicitly {@link msg.SyncRoomDataCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.SyncRoomDataCmd
         * @static
         * @param {msg.ISyncRoomDataCmd} message SyncRoomDataCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncRoomDataCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SyncRoomDataCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.SyncRoomDataCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.SyncRoomDataCmd} SyncRoomDataCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncRoomDataCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.SyncRoomDataCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SyncRoomDataCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.SyncRoomDataCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.SyncRoomDataCmd} SyncRoomDataCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncRoomDataCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SyncRoomDataCmd message.
         * @function verify
         * @memberof msg.SyncRoomDataCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SyncRoomDataCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a SyncRoomDataCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.SyncRoomDataCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.SyncRoomDataCmd} SyncRoomDataCmd
         */
        SyncRoomDataCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.SyncRoomDataCmd)
                return object;
            return new $root.msg.SyncRoomDataCmd();
        };

        /**
         * Creates a plain object from a SyncRoomDataCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.SyncRoomDataCmd
         * @static
         * @param {msg.SyncRoomDataCmd} message SyncRoomDataCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncRoomDataCmd.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this SyncRoomDataCmd to JSON.
         * @function toJSON
         * @memberof msg.SyncRoomDataCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncRoomDataCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SyncRoomDataCmd;
    })();

    msg.SyncRoomDataResult = (function() {

        /**
         * Properties of a SyncRoomDataResult.
         * @memberof msg
         * @interface ISyncRoomDataResult
         * @property {number|null} [roomId] SyncRoomDataResult roomId
         * @property {number|null} [gameType0] SyncRoomDataResult gameType0
         * @property {number|null} [gameType1] SyncRoomDataResult gameType1
         * @property {number|Long|null} [roomCreateTime] SyncRoomDataResult roomCreateTime
         * @property {number|null} [roomOwnerId] SyncRoomDataResult roomOwnerId
         * @property {Array.<msg.IKeyAndVal>|null} [ruleItem] SyncRoomDataResult ruleItem
         * @property {number|null} [currRoundIndex] SyncRoomDataResult currRoundIndex
         * @property {number|null} [currActUserId] SyncRoomDataResult currActUserId
         * @property {number|null} [remainCardNum] SyncRoomDataResult remainCardNum
         * @property {number|null} [remainTime] SyncRoomDataResult remainTime
         * @property {Array.<msg.IPlayer>|null} [player] SyncRoomDataResult player
         */

        /**
         * Constructs a new SyncRoomDataResult.
         * @memberof msg
         * @classdesc Represents a SyncRoomDataResult.
         * @implements ISyncRoomDataResult
         * @constructor
         * @param {msg.ISyncRoomDataResult=} [properties] Properties to set
         */
        function SyncRoomDataResult(properties) {
            this.ruleItem = [];
            this.player = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SyncRoomDataResult roomId.
         * @member {number} roomId
         * @memberof msg.SyncRoomDataResult
         * @instance
         */
        SyncRoomDataResult.prototype.roomId = 0;

        /**
         * SyncRoomDataResult gameType0.
         * @member {number} gameType0
         * @memberof msg.SyncRoomDataResult
         * @instance
         */
        SyncRoomDataResult.prototype.gameType0 = 0;

        /**
         * SyncRoomDataResult gameType1.
         * @member {number} gameType1
         * @memberof msg.SyncRoomDataResult
         * @instance
         */
        SyncRoomDataResult.prototype.gameType1 = 0;

        /**
         * SyncRoomDataResult roomCreateTime.
         * @member {number|Long} roomCreateTime
         * @memberof msg.SyncRoomDataResult
         * @instance
         */
        SyncRoomDataResult.prototype.roomCreateTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SyncRoomDataResult roomOwnerId.
         * @member {number} roomOwnerId
         * @memberof msg.SyncRoomDataResult
         * @instance
         */
        SyncRoomDataResult.prototype.roomOwnerId = 0;

        /**
         * SyncRoomDataResult ruleItem.
         * @member {Array.<msg.IKeyAndVal>} ruleItem
         * @memberof msg.SyncRoomDataResult
         * @instance
         */
        SyncRoomDataResult.prototype.ruleItem = $util.emptyArray;

        /**
         * SyncRoomDataResult currRoundIndex.
         * @member {number} currRoundIndex
         * @memberof msg.SyncRoomDataResult
         * @instance
         */
        SyncRoomDataResult.prototype.currRoundIndex = 0;

        /**
         * SyncRoomDataResult currActUserId.
         * @member {number} currActUserId
         * @memberof msg.SyncRoomDataResult
         * @instance
         */
        SyncRoomDataResult.prototype.currActUserId = 0;

        /**
         * SyncRoomDataResult remainCardNum.
         * @member {number} remainCardNum
         * @memberof msg.SyncRoomDataResult
         * @instance
         */
        SyncRoomDataResult.prototype.remainCardNum = 0;

        /**
         * SyncRoomDataResult remainTime.
         * @member {number} remainTime
         * @memberof msg.SyncRoomDataResult
         * @instance
         */
        SyncRoomDataResult.prototype.remainTime = 0;

        /**
         * SyncRoomDataResult player.
         * @member {Array.<msg.IPlayer>} player
         * @memberof msg.SyncRoomDataResult
         * @instance
         */
        SyncRoomDataResult.prototype.player = $util.emptyArray;

        /**
         * Creates a new SyncRoomDataResult instance using the specified properties.
         * @function create
         * @memberof msg.SyncRoomDataResult
         * @static
         * @param {msg.ISyncRoomDataResult=} [properties] Properties to set
         * @returns {msg.SyncRoomDataResult} SyncRoomDataResult instance
         */
        SyncRoomDataResult.create = function create(properties) {
            return new SyncRoomDataResult(properties);
        };

        /**
         * Encodes the specified SyncRoomDataResult message. Does not implicitly {@link msg.SyncRoomDataResult.verify|verify} messages.
         * @function encode
         * @memberof msg.SyncRoomDataResult
         * @static
         * @param {msg.ISyncRoomDataResult} message SyncRoomDataResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncRoomDataResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.roomId);
            if (message.gameType0 != null && Object.hasOwnProperty.call(message, "gameType0"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.gameType0);
            if (message.gameType1 != null && Object.hasOwnProperty.call(message, "gameType1"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.gameType1);
            if (message.roomCreateTime != null && Object.hasOwnProperty.call(message, "roomCreateTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint64(message.roomCreateTime);
            if (message.roomOwnerId != null && Object.hasOwnProperty.call(message, "roomOwnerId"))
                writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.roomOwnerId);
            if (message.ruleItem != null && message.ruleItem.length)
                for (let i = 0; i < message.ruleItem.length; ++i)
                    $root.msg.KeyAndVal.encode(message.ruleItem[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.currRoundIndex != null && Object.hasOwnProperty.call(message, "currRoundIndex"))
                writer.uint32(/* id 7, wireType 0 =*/56).sint32(message.currRoundIndex);
            if (message.currActUserId != null && Object.hasOwnProperty.call(message, "currActUserId"))
                writer.uint32(/* id 8, wireType 0 =*/64).sint32(message.currActUserId);
            if (message.remainCardNum != null && Object.hasOwnProperty.call(message, "remainCardNum"))
                writer.uint32(/* id 9, wireType 0 =*/72).sint32(message.remainCardNum);
            if (message.remainTime != null && Object.hasOwnProperty.call(message, "remainTime"))
                writer.uint32(/* id 10, wireType 0 =*/80).sint32(message.remainTime);
            if (message.player != null && message.player.length)
                for (let i = 0; i < message.player.length; ++i)
                    $root.msg.Player.encode(message.player[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SyncRoomDataResult message, length delimited. Does not implicitly {@link msg.SyncRoomDataResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.SyncRoomDataResult
         * @static
         * @param {msg.ISyncRoomDataResult} message SyncRoomDataResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncRoomDataResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SyncRoomDataResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.SyncRoomDataResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.SyncRoomDataResult} SyncRoomDataResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncRoomDataResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.SyncRoomDataResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomId = reader.sint32();
                    break;
                case 2:
                    message.gameType0 = reader.sint32();
                    break;
                case 3:
                    message.gameType1 = reader.sint32();
                    break;
                case 4:
                    message.roomCreateTime = reader.sint64();
                    break;
                case 5:
                    message.roomOwnerId = reader.sint32();
                    break;
                case 6:
                    if (!(message.ruleItem && message.ruleItem.length))
                        message.ruleItem = [];
                    message.ruleItem.push($root.msg.KeyAndVal.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.currRoundIndex = reader.sint32();
                    break;
                case 8:
                    message.currActUserId = reader.sint32();
                    break;
                case 9:
                    message.remainCardNum = reader.sint32();
                    break;
                case 10:
                    message.remainTime = reader.sint32();
                    break;
                case 11:
                    if (!(message.player && message.player.length))
                        message.player = [];
                    message.player.push($root.msg.Player.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SyncRoomDataResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.SyncRoomDataResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.SyncRoomDataResult} SyncRoomDataResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncRoomDataResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SyncRoomDataResult message.
         * @function verify
         * @memberof msg.SyncRoomDataResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SyncRoomDataResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId))
                    return "roomId: integer expected";
            if (message.gameType0 != null && message.hasOwnProperty("gameType0"))
                if (!$util.isInteger(message.gameType0))
                    return "gameType0: integer expected";
            if (message.gameType1 != null && message.hasOwnProperty("gameType1"))
                if (!$util.isInteger(message.gameType1))
                    return "gameType1: integer expected";
            if (message.roomCreateTime != null && message.hasOwnProperty("roomCreateTime"))
                if (!$util.isInteger(message.roomCreateTime) && !(message.roomCreateTime && $util.isInteger(message.roomCreateTime.low) && $util.isInteger(message.roomCreateTime.high)))
                    return "roomCreateTime: integer|Long expected";
            if (message.roomOwnerId != null && message.hasOwnProperty("roomOwnerId"))
                if (!$util.isInteger(message.roomOwnerId))
                    return "roomOwnerId: integer expected";
            if (message.ruleItem != null && message.hasOwnProperty("ruleItem")) {
                if (!Array.isArray(message.ruleItem))
                    return "ruleItem: array expected";
                for (let i = 0; i < message.ruleItem.length; ++i) {
                    let error = $root.msg.KeyAndVal.verify(message.ruleItem[i]);
                    if (error)
                        return "ruleItem." + error;
                }
            }
            if (message.currRoundIndex != null && message.hasOwnProperty("currRoundIndex"))
                if (!$util.isInteger(message.currRoundIndex))
                    return "currRoundIndex: integer expected";
            if (message.currActUserId != null && message.hasOwnProperty("currActUserId"))
                if (!$util.isInteger(message.currActUserId))
                    return "currActUserId: integer expected";
            if (message.remainCardNum != null && message.hasOwnProperty("remainCardNum"))
                if (!$util.isInteger(message.remainCardNum))
                    return "remainCardNum: integer expected";
            if (message.remainTime != null && message.hasOwnProperty("remainTime"))
                if (!$util.isInteger(message.remainTime))
                    return "remainTime: integer expected";
            if (message.player != null && message.hasOwnProperty("player")) {
                if (!Array.isArray(message.player))
                    return "player: array expected";
                for (let i = 0; i < message.player.length; ++i) {
                    let error = $root.msg.Player.verify(message.player[i]);
                    if (error)
                        return "player." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SyncRoomDataResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.SyncRoomDataResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.SyncRoomDataResult} SyncRoomDataResult
         */
        SyncRoomDataResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.SyncRoomDataResult)
                return object;
            let message = new $root.msg.SyncRoomDataResult();
            if (object.roomId != null)
                message.roomId = object.roomId | 0;
            if (object.gameType0 != null)
                message.gameType0 = object.gameType0 | 0;
            if (object.gameType1 != null)
                message.gameType1 = object.gameType1 | 0;
            if (object.roomCreateTime != null)
                if ($util.Long)
                    (message.roomCreateTime = $util.Long.fromValue(object.roomCreateTime)).unsigned = false;
                else if (typeof object.roomCreateTime === "string")
                    message.roomCreateTime = parseInt(object.roomCreateTime, 10);
                else if (typeof object.roomCreateTime === "number")
                    message.roomCreateTime = object.roomCreateTime;
                else if (typeof object.roomCreateTime === "object")
                    message.roomCreateTime = new $util.LongBits(object.roomCreateTime.low >>> 0, object.roomCreateTime.high >>> 0).toNumber();
            if (object.roomOwnerId != null)
                message.roomOwnerId = object.roomOwnerId | 0;
            if (object.ruleItem) {
                if (!Array.isArray(object.ruleItem))
                    throw TypeError(".msg.SyncRoomDataResult.ruleItem: array expected");
                message.ruleItem = [];
                for (let i = 0; i < object.ruleItem.length; ++i) {
                    if (typeof object.ruleItem[i] !== "object")
                        throw TypeError(".msg.SyncRoomDataResult.ruleItem: object expected");
                    message.ruleItem[i] = $root.msg.KeyAndVal.fromObject(object.ruleItem[i]);
                }
            }
            if (object.currRoundIndex != null)
                message.currRoundIndex = object.currRoundIndex | 0;
            if (object.currActUserId != null)
                message.currActUserId = object.currActUserId | 0;
            if (object.remainCardNum != null)
                message.remainCardNum = object.remainCardNum | 0;
            if (object.remainTime != null)
                message.remainTime = object.remainTime | 0;
            if (object.player) {
                if (!Array.isArray(object.player))
                    throw TypeError(".msg.SyncRoomDataResult.player: array expected");
                message.player = [];
                for (let i = 0; i < object.player.length; ++i) {
                    if (typeof object.player[i] !== "object")
                        throw TypeError(".msg.SyncRoomDataResult.player: object expected");
                    message.player[i] = $root.msg.Player.fromObject(object.player[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SyncRoomDataResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.SyncRoomDataResult
         * @static
         * @param {msg.SyncRoomDataResult} message SyncRoomDataResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncRoomDataResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.ruleItem = [];
                object.player = [];
            }
            if (options.defaults) {
                object.roomId = 0;
                object.gameType0 = 0;
                object.gameType1 = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.roomCreateTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roomCreateTime = options.longs === String ? "0" : 0;
                object.roomOwnerId = 0;
                object.currRoundIndex = 0;
                object.currActUserId = 0;
                object.remainCardNum = 0;
                object.remainTime = 0;
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.gameType0 != null && message.hasOwnProperty("gameType0"))
                object.gameType0 = message.gameType0;
            if (message.gameType1 != null && message.hasOwnProperty("gameType1"))
                object.gameType1 = message.gameType1;
            if (message.roomCreateTime != null && message.hasOwnProperty("roomCreateTime"))
                if (typeof message.roomCreateTime === "number")
                    object.roomCreateTime = options.longs === String ? String(message.roomCreateTime) : message.roomCreateTime;
                else
                    object.roomCreateTime = options.longs === String ? $util.Long.prototype.toString.call(message.roomCreateTime) : options.longs === Number ? new $util.LongBits(message.roomCreateTime.low >>> 0, message.roomCreateTime.high >>> 0).toNumber() : message.roomCreateTime;
            if (message.roomOwnerId != null && message.hasOwnProperty("roomOwnerId"))
                object.roomOwnerId = message.roomOwnerId;
            if (message.ruleItem && message.ruleItem.length) {
                object.ruleItem = [];
                for (let j = 0; j < message.ruleItem.length; ++j)
                    object.ruleItem[j] = $root.msg.KeyAndVal.toObject(message.ruleItem[j], options);
            }
            if (message.currRoundIndex != null && message.hasOwnProperty("currRoundIndex"))
                object.currRoundIndex = message.currRoundIndex;
            if (message.currActUserId != null && message.hasOwnProperty("currActUserId"))
                object.currActUserId = message.currActUserId;
            if (message.remainCardNum != null && message.hasOwnProperty("remainCardNum"))
                object.remainCardNum = message.remainCardNum;
            if (message.remainTime != null && message.hasOwnProperty("remainTime"))
                object.remainTime = message.remainTime;
            if (message.player && message.player.length) {
                object.player = [];
                for (let j = 0; j < message.player.length; ++j)
                    object.player[j] = $root.msg.Player.toObject(message.player[j], options);
            }
            return object;
        };

        /**
         * Converts this SyncRoomDataResult to JSON.
         * @function toJSON
         * @memberof msg.SyncRoomDataResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncRoomDataResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SyncRoomDataResult;
    })();

    msg.ReportGeoLocationCmd = (function() {

        /**
         * Properties of a ReportGeoLocationCmd.
         * @memberof msg
         * @interface IReportGeoLocationCmd
         * @property {number|null} [latitude] 纬度
         * @property {number|null} [longitude] 经度
         * @property {number|null} [altitude] 海拔
         * @property {string|null} [clientIpAddr] 客户端 IP 地址
         */

        /**
         * Constructs a new ReportGeoLocationCmd.
         * @memberof msg
         * @classdesc Represents a ReportGeoLocationCmd.
         * @implements IReportGeoLocationCmd
         * @constructor
         * @param {msg.IReportGeoLocationCmd=} [properties] Properties to set
         */
        function ReportGeoLocationCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * 纬度
         * @member {number} latitude
         * @memberof msg.ReportGeoLocationCmd
         * @instance
         */
        ReportGeoLocationCmd.prototype.latitude = 0;

        /**
         * 经度
         * @member {number} longitude
         * @memberof msg.ReportGeoLocationCmd
         * @instance
         */
        ReportGeoLocationCmd.prototype.longitude = 0;

        /**
         * 海拔
         * @member {number} altitude
         * @memberof msg.ReportGeoLocationCmd
         * @instance
         */
        ReportGeoLocationCmd.prototype.altitude = 0;

        /**
         * 客户端 IP 地址
         * @member {string} clientIpAddr
         * @memberof msg.ReportGeoLocationCmd
         * @instance
         */
        ReportGeoLocationCmd.prototype.clientIpAddr = "";

        /**
         * Creates a new ReportGeoLocationCmd instance using the specified properties.
         * @function create
         * @memberof msg.ReportGeoLocationCmd
         * @static
         * @param {msg.IReportGeoLocationCmd=} [properties] Properties to set
         * @returns {msg.ReportGeoLocationCmd} ReportGeoLocationCmd instance
         */
        ReportGeoLocationCmd.create = function create(properties) {
            return new ReportGeoLocationCmd(properties);
        };

        /**
         * Encodes the specified ReportGeoLocationCmd message. Does not implicitly {@link msg.ReportGeoLocationCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.ReportGeoLocationCmd
         * @static
         * @param {msg.IReportGeoLocationCmd} message ReportGeoLocationCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReportGeoLocationCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.latitude != null && Object.hasOwnProperty.call(message, "latitude"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.latitude);
            if (message.longitude != null && Object.hasOwnProperty.call(message, "longitude"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.longitude);
            if (message.altitude != null && Object.hasOwnProperty.call(message, "altitude"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.altitude);
            if (message.clientIpAddr != null && Object.hasOwnProperty.call(message, "clientIpAddr"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.clientIpAddr);
            return writer;
        };

        /**
         * Encodes the specified ReportGeoLocationCmd message, length delimited. Does not implicitly {@link msg.ReportGeoLocationCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.ReportGeoLocationCmd
         * @static
         * @param {msg.IReportGeoLocationCmd} message ReportGeoLocationCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReportGeoLocationCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReportGeoLocationCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.ReportGeoLocationCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.ReportGeoLocationCmd} ReportGeoLocationCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReportGeoLocationCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.ReportGeoLocationCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.latitude = reader.float();
                    break;
                case 2:
                    message.longitude = reader.float();
                    break;
                case 3:
                    message.altitude = reader.float();
                    break;
                case 4:
                    message.clientIpAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReportGeoLocationCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.ReportGeoLocationCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.ReportGeoLocationCmd} ReportGeoLocationCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReportGeoLocationCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReportGeoLocationCmd message.
         * @function verify
         * @memberof msg.ReportGeoLocationCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReportGeoLocationCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.latitude != null && message.hasOwnProperty("latitude"))
                if (typeof message.latitude !== "number")
                    return "latitude: number expected";
            if (message.longitude != null && message.hasOwnProperty("longitude"))
                if (typeof message.longitude !== "number")
                    return "longitude: number expected";
            if (message.altitude != null && message.hasOwnProperty("altitude"))
                if (typeof message.altitude !== "number")
                    return "altitude: number expected";
            if (message.clientIpAddr != null && message.hasOwnProperty("clientIpAddr"))
                if (!$util.isString(message.clientIpAddr))
                    return "clientIpAddr: string expected";
            return null;
        };

        /**
         * Creates a ReportGeoLocationCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.ReportGeoLocationCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.ReportGeoLocationCmd} ReportGeoLocationCmd
         */
        ReportGeoLocationCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.ReportGeoLocationCmd)
                return object;
            let message = new $root.msg.ReportGeoLocationCmd();
            if (object.latitude != null)
                message.latitude = Number(object.latitude);
            if (object.longitude != null)
                message.longitude = Number(object.longitude);
            if (object.altitude != null)
                message.altitude = Number(object.altitude);
            if (object.clientIpAddr != null)
                message.clientIpAddr = String(object.clientIpAddr);
            return message;
        };

        /**
         * Creates a plain object from a ReportGeoLocationCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.ReportGeoLocationCmd
         * @static
         * @param {msg.ReportGeoLocationCmd} message ReportGeoLocationCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReportGeoLocationCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.latitude = 0;
                object.longitude = 0;
                object.altitude = 0;
                object.clientIpAddr = "";
            }
            if (message.latitude != null && message.hasOwnProperty("latitude"))
                object.latitude = options.json && !isFinite(message.latitude) ? String(message.latitude) : message.latitude;
            if (message.longitude != null && message.hasOwnProperty("longitude"))
                object.longitude = options.json && !isFinite(message.longitude) ? String(message.longitude) : message.longitude;
            if (message.altitude != null && message.hasOwnProperty("altitude"))
                object.altitude = options.json && !isFinite(message.altitude) ? String(message.altitude) : message.altitude;
            if (message.clientIpAddr != null && message.hasOwnProperty("clientIpAddr"))
                object.clientIpAddr = message.clientIpAddr;
            return object;
        };

        /**
         * Converts this ReportGeoLocationCmd to JSON.
         * @function toJSON
         * @memberof msg.ReportGeoLocationCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReportGeoLocationCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReportGeoLocationCmd;
    })();

    msg.ReportGeoLocationResult = (function() {

        /**
         * Properties of a ReportGeoLocationResult.
         * @memberof msg
         * @interface IReportGeoLocationResult
         * @property {boolean|null} [ok] ReportGeoLocationResult ok
         */

        /**
         * Constructs a new ReportGeoLocationResult.
         * @memberof msg
         * @classdesc Represents a ReportGeoLocationResult.
         * @implements IReportGeoLocationResult
         * @constructor
         * @param {msg.IReportGeoLocationResult=} [properties] Properties to set
         */
        function ReportGeoLocationResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReportGeoLocationResult ok.
         * @member {boolean} ok
         * @memberof msg.ReportGeoLocationResult
         * @instance
         */
        ReportGeoLocationResult.prototype.ok = false;

        /**
         * Creates a new ReportGeoLocationResult instance using the specified properties.
         * @function create
         * @memberof msg.ReportGeoLocationResult
         * @static
         * @param {msg.IReportGeoLocationResult=} [properties] Properties to set
         * @returns {msg.ReportGeoLocationResult} ReportGeoLocationResult instance
         */
        ReportGeoLocationResult.create = function create(properties) {
            return new ReportGeoLocationResult(properties);
        };

        /**
         * Encodes the specified ReportGeoLocationResult message. Does not implicitly {@link msg.ReportGeoLocationResult.verify|verify} messages.
         * @function encode
         * @memberof msg.ReportGeoLocationResult
         * @static
         * @param {msg.IReportGeoLocationResult} message ReportGeoLocationResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReportGeoLocationResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ok);
            return writer;
        };

        /**
         * Encodes the specified ReportGeoLocationResult message, length delimited. Does not implicitly {@link msg.ReportGeoLocationResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.ReportGeoLocationResult
         * @static
         * @param {msg.IReportGeoLocationResult} message ReportGeoLocationResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReportGeoLocationResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReportGeoLocationResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.ReportGeoLocationResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.ReportGeoLocationResult} ReportGeoLocationResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReportGeoLocationResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.ReportGeoLocationResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ok = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReportGeoLocationResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.ReportGeoLocationResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.ReportGeoLocationResult} ReportGeoLocationResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReportGeoLocationResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReportGeoLocationResult message.
         * @function verify
         * @memberof msg.ReportGeoLocationResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReportGeoLocationResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ok != null && message.hasOwnProperty("ok"))
                if (typeof message.ok !== "boolean")
                    return "ok: boolean expected";
            return null;
        };

        /**
         * Creates a ReportGeoLocationResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.ReportGeoLocationResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.ReportGeoLocationResult} ReportGeoLocationResult
         */
        ReportGeoLocationResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.ReportGeoLocationResult)
                return object;
            let message = new $root.msg.ReportGeoLocationResult();
            if (object.ok != null)
                message.ok = Boolean(object.ok);
            return message;
        };

        /**
         * Creates a plain object from a ReportGeoLocationResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.ReportGeoLocationResult
         * @static
         * @param {msg.ReportGeoLocationResult} message ReportGeoLocationResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReportGeoLocationResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.ok = false;
            if (message.ok != null && message.hasOwnProperty("ok"))
                object.ok = message.ok;
            return object;
        };

        /**
         * Converts this ReportGeoLocationResult to JSON.
         * @function toJSON
         * @memberof msg.ReportGeoLocationResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReportGeoLocationResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReportGeoLocationResult;
    })();

    msg.MeasureGeoDistanceCmd = (function() {

        /**
         * Properties of a MeasureGeoDistanceCmd.
         * @memberof msg
         * @interface IMeasureGeoDistanceCmd
         */

        /**
         * Constructs a new MeasureGeoDistanceCmd.
         * @memberof msg
         * @classdesc Represents a MeasureGeoDistanceCmd.
         * @implements IMeasureGeoDistanceCmd
         * @constructor
         * @param {msg.IMeasureGeoDistanceCmd=} [properties] Properties to set
         */
        function MeasureGeoDistanceCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new MeasureGeoDistanceCmd instance using the specified properties.
         * @function create
         * @memberof msg.MeasureGeoDistanceCmd
         * @static
         * @param {msg.IMeasureGeoDistanceCmd=} [properties] Properties to set
         * @returns {msg.MeasureGeoDistanceCmd} MeasureGeoDistanceCmd instance
         */
        MeasureGeoDistanceCmd.create = function create(properties) {
            return new MeasureGeoDistanceCmd(properties);
        };

        /**
         * Encodes the specified MeasureGeoDistanceCmd message. Does not implicitly {@link msg.MeasureGeoDistanceCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.MeasureGeoDistanceCmd
         * @static
         * @param {msg.IMeasureGeoDistanceCmd} message MeasureGeoDistanceCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MeasureGeoDistanceCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified MeasureGeoDistanceCmd message, length delimited. Does not implicitly {@link msg.MeasureGeoDistanceCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MeasureGeoDistanceCmd
         * @static
         * @param {msg.IMeasureGeoDistanceCmd} message MeasureGeoDistanceCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MeasureGeoDistanceCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MeasureGeoDistanceCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MeasureGeoDistanceCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MeasureGeoDistanceCmd} MeasureGeoDistanceCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MeasureGeoDistanceCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MeasureGeoDistanceCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MeasureGeoDistanceCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MeasureGeoDistanceCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MeasureGeoDistanceCmd} MeasureGeoDistanceCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MeasureGeoDistanceCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MeasureGeoDistanceCmd message.
         * @function verify
         * @memberof msg.MeasureGeoDistanceCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MeasureGeoDistanceCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a MeasureGeoDistanceCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MeasureGeoDistanceCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MeasureGeoDistanceCmd} MeasureGeoDistanceCmd
         */
        MeasureGeoDistanceCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MeasureGeoDistanceCmd)
                return object;
            return new $root.msg.MeasureGeoDistanceCmd();
        };

        /**
         * Creates a plain object from a MeasureGeoDistanceCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MeasureGeoDistanceCmd
         * @static
         * @param {msg.MeasureGeoDistanceCmd} message MeasureGeoDistanceCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MeasureGeoDistanceCmd.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this MeasureGeoDistanceCmd to JSON.
         * @function toJSON
         * @memberof msg.MeasureGeoDistanceCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MeasureGeoDistanceCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MeasureGeoDistanceCmd;
    })();

    msg.MeasureGeoDistanceResult = (function() {

        /**
         * Properties of a MeasureGeoDistanceResult.
         * @memberof msg
         * @interface IMeasureGeoDistanceResult
         * @property {Array.<msg.MeasureGeoDistanceResult.IGeoDistanceItem>|null} [geoDistanceItem] MeasureGeoDistanceResult geoDistanceItem
         */

        /**
         * Constructs a new MeasureGeoDistanceResult.
         * @memberof msg
         * @classdesc Represents a MeasureGeoDistanceResult.
         * @implements IMeasureGeoDistanceResult
         * @constructor
         * @param {msg.IMeasureGeoDistanceResult=} [properties] Properties to set
         */
        function MeasureGeoDistanceResult(properties) {
            this.geoDistanceItem = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MeasureGeoDistanceResult geoDistanceItem.
         * @member {Array.<msg.MeasureGeoDistanceResult.IGeoDistanceItem>} geoDistanceItem
         * @memberof msg.MeasureGeoDistanceResult
         * @instance
         */
        MeasureGeoDistanceResult.prototype.geoDistanceItem = $util.emptyArray;

        /**
         * Creates a new MeasureGeoDistanceResult instance using the specified properties.
         * @function create
         * @memberof msg.MeasureGeoDistanceResult
         * @static
         * @param {msg.IMeasureGeoDistanceResult=} [properties] Properties to set
         * @returns {msg.MeasureGeoDistanceResult} MeasureGeoDistanceResult instance
         */
        MeasureGeoDistanceResult.create = function create(properties) {
            return new MeasureGeoDistanceResult(properties);
        };

        /**
         * Encodes the specified MeasureGeoDistanceResult message. Does not implicitly {@link msg.MeasureGeoDistanceResult.verify|verify} messages.
         * @function encode
         * @memberof msg.MeasureGeoDistanceResult
         * @static
         * @param {msg.IMeasureGeoDistanceResult} message MeasureGeoDistanceResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MeasureGeoDistanceResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.geoDistanceItem != null && message.geoDistanceItem.length)
                for (let i = 0; i < message.geoDistanceItem.length; ++i)
                    $root.msg.MeasureGeoDistanceResult.GeoDistanceItem.encode(message.geoDistanceItem[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MeasureGeoDistanceResult message, length delimited. Does not implicitly {@link msg.MeasureGeoDistanceResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MeasureGeoDistanceResult
         * @static
         * @param {msg.IMeasureGeoDistanceResult} message MeasureGeoDistanceResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MeasureGeoDistanceResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MeasureGeoDistanceResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MeasureGeoDistanceResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MeasureGeoDistanceResult} MeasureGeoDistanceResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MeasureGeoDistanceResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MeasureGeoDistanceResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.geoDistanceItem && message.geoDistanceItem.length))
                        message.geoDistanceItem = [];
                    message.geoDistanceItem.push($root.msg.MeasureGeoDistanceResult.GeoDistanceItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MeasureGeoDistanceResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MeasureGeoDistanceResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MeasureGeoDistanceResult} MeasureGeoDistanceResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MeasureGeoDistanceResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MeasureGeoDistanceResult message.
         * @function verify
         * @memberof msg.MeasureGeoDistanceResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MeasureGeoDistanceResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.geoDistanceItem != null && message.hasOwnProperty("geoDistanceItem")) {
                if (!Array.isArray(message.geoDistanceItem))
                    return "geoDistanceItem: array expected";
                for (let i = 0; i < message.geoDistanceItem.length; ++i) {
                    let error = $root.msg.MeasureGeoDistanceResult.GeoDistanceItem.verify(message.geoDistanceItem[i]);
                    if (error)
                        return "geoDistanceItem." + error;
                }
            }
            return null;
        };

        /**
         * Creates a MeasureGeoDistanceResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MeasureGeoDistanceResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MeasureGeoDistanceResult} MeasureGeoDistanceResult
         */
        MeasureGeoDistanceResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MeasureGeoDistanceResult)
                return object;
            let message = new $root.msg.MeasureGeoDistanceResult();
            if (object.geoDistanceItem) {
                if (!Array.isArray(object.geoDistanceItem))
                    throw TypeError(".msg.MeasureGeoDistanceResult.geoDistanceItem: array expected");
                message.geoDistanceItem = [];
                for (let i = 0; i < object.geoDistanceItem.length; ++i) {
                    if (typeof object.geoDistanceItem[i] !== "object")
                        throw TypeError(".msg.MeasureGeoDistanceResult.geoDistanceItem: object expected");
                    message.geoDistanceItem[i] = $root.msg.MeasureGeoDistanceResult.GeoDistanceItem.fromObject(object.geoDistanceItem[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MeasureGeoDistanceResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MeasureGeoDistanceResult
         * @static
         * @param {msg.MeasureGeoDistanceResult} message MeasureGeoDistanceResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MeasureGeoDistanceResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.geoDistanceItem = [];
            if (message.geoDistanceItem && message.geoDistanceItem.length) {
                object.geoDistanceItem = [];
                for (let j = 0; j < message.geoDistanceItem.length; ++j)
                    object.geoDistanceItem[j] = $root.msg.MeasureGeoDistanceResult.GeoDistanceItem.toObject(message.geoDistanceItem[j], options);
            }
            return object;
        };

        /**
         * Converts this MeasureGeoDistanceResult to JSON.
         * @function toJSON
         * @memberof msg.MeasureGeoDistanceResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MeasureGeoDistanceResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        MeasureGeoDistanceResult.GeoDistanceItem = (function() {

            /**
             * Properties of a GeoDistanceItem.
             * @memberof msg.MeasureGeoDistanceResult
             * @interface IGeoDistanceItem
             * @property {number|null} [userIdA] GeoDistanceItem userIdA
             * @property {number|null} [userIdB] GeoDistanceItem userIdB
             * @property {number|null} [distance] GeoDistanceItem distance
             * @property {boolean|null} [sameIpAddr] GeoDistanceItem sameIpAddr
             */

            /**
             * Constructs a new GeoDistanceItem.
             * @memberof msg.MeasureGeoDistanceResult
             * @classdesc Represents a GeoDistanceItem.
             * @implements IGeoDistanceItem
             * @constructor
             * @param {msg.MeasureGeoDistanceResult.IGeoDistanceItem=} [properties] Properties to set
             */
            function GeoDistanceItem(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GeoDistanceItem userIdA.
             * @member {number} userIdA
             * @memberof msg.MeasureGeoDistanceResult.GeoDistanceItem
             * @instance
             */
            GeoDistanceItem.prototype.userIdA = 0;

            /**
             * GeoDistanceItem userIdB.
             * @member {number} userIdB
             * @memberof msg.MeasureGeoDistanceResult.GeoDistanceItem
             * @instance
             */
            GeoDistanceItem.prototype.userIdB = 0;

            /**
             * GeoDistanceItem distance.
             * @member {number} distance
             * @memberof msg.MeasureGeoDistanceResult.GeoDistanceItem
             * @instance
             */
            GeoDistanceItem.prototype.distance = 0;

            /**
             * GeoDistanceItem sameIpAddr.
             * @member {boolean} sameIpAddr
             * @memberof msg.MeasureGeoDistanceResult.GeoDistanceItem
             * @instance
             */
            GeoDistanceItem.prototype.sameIpAddr = false;

            /**
             * Creates a new GeoDistanceItem instance using the specified properties.
             * @function create
             * @memberof msg.MeasureGeoDistanceResult.GeoDistanceItem
             * @static
             * @param {msg.MeasureGeoDistanceResult.IGeoDistanceItem=} [properties] Properties to set
             * @returns {msg.MeasureGeoDistanceResult.GeoDistanceItem} GeoDistanceItem instance
             */
            GeoDistanceItem.create = function create(properties) {
                return new GeoDistanceItem(properties);
            };

            /**
             * Encodes the specified GeoDistanceItem message. Does not implicitly {@link msg.MeasureGeoDistanceResult.GeoDistanceItem.verify|verify} messages.
             * @function encode
             * @memberof msg.MeasureGeoDistanceResult.GeoDistanceItem
             * @static
             * @param {msg.MeasureGeoDistanceResult.IGeoDistanceItem} message GeoDistanceItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeoDistanceItem.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userIdA != null && Object.hasOwnProperty.call(message, "userIdA"))
                    writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userIdA);
                if (message.userIdB != null && Object.hasOwnProperty.call(message, "userIdB"))
                    writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.userIdB);
                if (message.distance != null && Object.hasOwnProperty.call(message, "distance"))
                    writer.uint32(/* id 3, wireType 5 =*/29).float(message.distance);
                if (message.sameIpAddr != null && Object.hasOwnProperty.call(message, "sameIpAddr"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.sameIpAddr);
                return writer;
            };

            /**
             * Encodes the specified GeoDistanceItem message, length delimited. Does not implicitly {@link msg.MeasureGeoDistanceResult.GeoDistanceItem.verify|verify} messages.
             * @function encodeDelimited
             * @memberof msg.MeasureGeoDistanceResult.GeoDistanceItem
             * @static
             * @param {msg.MeasureGeoDistanceResult.IGeoDistanceItem} message GeoDistanceItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeoDistanceItem.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GeoDistanceItem message from the specified reader or buffer.
             * @function decode
             * @memberof msg.MeasureGeoDistanceResult.GeoDistanceItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {msg.MeasureGeoDistanceResult.GeoDistanceItem} GeoDistanceItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GeoDistanceItem.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MeasureGeoDistanceResult.GeoDistanceItem();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.userIdA = reader.sint32();
                        break;
                    case 2:
                        message.userIdB = reader.sint32();
                        break;
                    case 3:
                        message.distance = reader.float();
                        break;
                    case 4:
                        message.sameIpAddr = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GeoDistanceItem message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof msg.MeasureGeoDistanceResult.GeoDistanceItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {msg.MeasureGeoDistanceResult.GeoDistanceItem} GeoDistanceItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GeoDistanceItem.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GeoDistanceItem message.
             * @function verify
             * @memberof msg.MeasureGeoDistanceResult.GeoDistanceItem
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GeoDistanceItem.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userIdA != null && message.hasOwnProperty("userIdA"))
                    if (!$util.isInteger(message.userIdA))
                        return "userIdA: integer expected";
                if (message.userIdB != null && message.hasOwnProperty("userIdB"))
                    if (!$util.isInteger(message.userIdB))
                        return "userIdB: integer expected";
                if (message.distance != null && message.hasOwnProperty("distance"))
                    if (typeof message.distance !== "number")
                        return "distance: number expected";
                if (message.sameIpAddr != null && message.hasOwnProperty("sameIpAddr"))
                    if (typeof message.sameIpAddr !== "boolean")
                        return "sameIpAddr: boolean expected";
                return null;
            };

            /**
             * Creates a GeoDistanceItem message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof msg.MeasureGeoDistanceResult.GeoDistanceItem
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {msg.MeasureGeoDistanceResult.GeoDistanceItem} GeoDistanceItem
             */
            GeoDistanceItem.fromObject = function fromObject(object) {
                if (object instanceof $root.msg.MeasureGeoDistanceResult.GeoDistanceItem)
                    return object;
                let message = new $root.msg.MeasureGeoDistanceResult.GeoDistanceItem();
                if (object.userIdA != null)
                    message.userIdA = object.userIdA | 0;
                if (object.userIdB != null)
                    message.userIdB = object.userIdB | 0;
                if (object.distance != null)
                    message.distance = Number(object.distance);
                if (object.sameIpAddr != null)
                    message.sameIpAddr = Boolean(object.sameIpAddr);
                return message;
            };

            /**
             * Creates a plain object from a GeoDistanceItem message. Also converts values to other types if specified.
             * @function toObject
             * @memberof msg.MeasureGeoDistanceResult.GeoDistanceItem
             * @static
             * @param {msg.MeasureGeoDistanceResult.GeoDistanceItem} message GeoDistanceItem
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GeoDistanceItem.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.userIdA = 0;
                    object.userIdB = 0;
                    object.distance = 0;
                    object.sameIpAddr = false;
                }
                if (message.userIdA != null && message.hasOwnProperty("userIdA"))
                    object.userIdA = message.userIdA;
                if (message.userIdB != null && message.hasOwnProperty("userIdB"))
                    object.userIdB = message.userIdB;
                if (message.distance != null && message.hasOwnProperty("distance"))
                    object.distance = options.json && !isFinite(message.distance) ? String(message.distance) : message.distance;
                if (message.sameIpAddr != null && message.hasOwnProperty("sameIpAddr"))
                    object.sameIpAddr = message.sameIpAddr;
                return object;
            };

            /**
             * Converts this GeoDistanceItem to JSON.
             * @function toJSON
             * @memberof msg.MeasureGeoDistanceResult.GeoDistanceItem
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GeoDistanceItem.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GeoDistanceItem;
        })();

        return MeasureGeoDistanceResult;
    })();

    msg.PrepareCmd = (function() {

        /**
         * Properties of a PrepareCmd.
         * @memberof msg
         * @interface IPrepareCmd
         * @property {number|null} [yes] PrepareCmd yes
         */

        /**
         * Constructs a new PrepareCmd.
         * @memberof msg
         * @classdesc Represents a PrepareCmd.
         * @implements IPrepareCmd
         * @constructor
         * @param {msg.IPrepareCmd=} [properties] Properties to set
         */
        function PrepareCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PrepareCmd yes.
         * @member {number} yes
         * @memberof msg.PrepareCmd
         * @instance
         */
        PrepareCmd.prototype.yes = 0;

        /**
         * Creates a new PrepareCmd instance using the specified properties.
         * @function create
         * @memberof msg.PrepareCmd
         * @static
         * @param {msg.IPrepareCmd=} [properties] Properties to set
         * @returns {msg.PrepareCmd} PrepareCmd instance
         */
        PrepareCmd.create = function create(properties) {
            return new PrepareCmd(properties);
        };

        /**
         * Encodes the specified PrepareCmd message. Does not implicitly {@link msg.PrepareCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.PrepareCmd
         * @static
         * @param {msg.IPrepareCmd} message PrepareCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrepareCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.yes != null && Object.hasOwnProperty.call(message, "yes"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.yes);
            return writer;
        };

        /**
         * Encodes the specified PrepareCmd message, length delimited. Does not implicitly {@link msg.PrepareCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PrepareCmd
         * @static
         * @param {msg.IPrepareCmd} message PrepareCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrepareCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PrepareCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PrepareCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PrepareCmd} PrepareCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrepareCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PrepareCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.yes = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PrepareCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PrepareCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PrepareCmd} PrepareCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrepareCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PrepareCmd message.
         * @function verify
         * @memberof msg.PrepareCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PrepareCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.yes != null && message.hasOwnProperty("yes"))
                if (!$util.isInteger(message.yes))
                    return "yes: integer expected";
            return null;
        };

        /**
         * Creates a PrepareCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PrepareCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PrepareCmd} PrepareCmd
         */
        PrepareCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PrepareCmd)
                return object;
            let message = new $root.msg.PrepareCmd();
            if (object.yes != null)
                message.yes = object.yes | 0;
            return message;
        };

        /**
         * Creates a plain object from a PrepareCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PrepareCmd
         * @static
         * @param {msg.PrepareCmd} message PrepareCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PrepareCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.yes = 0;
            if (message.yes != null && message.hasOwnProperty("yes"))
                object.yes = message.yes;
            return object;
        };

        /**
         * Converts this PrepareCmd to JSON.
         * @function toJSON
         * @memberof msg.PrepareCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PrepareCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PrepareCmd;
    })();

    msg.PrepareResult = (function() {

        /**
         * Properties of a PrepareResult.
         * @memberof msg
         * @interface IPrepareResult
         * @property {number|null} [yes] PrepareResult yes
         * @property {boolean|null} [ok] PrepareResult ok
         */

        /**
         * Constructs a new PrepareResult.
         * @memberof msg
         * @classdesc Represents a PrepareResult.
         * @implements IPrepareResult
         * @constructor
         * @param {msg.IPrepareResult=} [properties] Properties to set
         */
        function PrepareResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PrepareResult yes.
         * @member {number} yes
         * @memberof msg.PrepareResult
         * @instance
         */
        PrepareResult.prototype.yes = 0;

        /**
         * PrepareResult ok.
         * @member {boolean} ok
         * @memberof msg.PrepareResult
         * @instance
         */
        PrepareResult.prototype.ok = false;

        /**
         * Creates a new PrepareResult instance using the specified properties.
         * @function create
         * @memberof msg.PrepareResult
         * @static
         * @param {msg.IPrepareResult=} [properties] Properties to set
         * @returns {msg.PrepareResult} PrepareResult instance
         */
        PrepareResult.create = function create(properties) {
            return new PrepareResult(properties);
        };

        /**
         * Encodes the specified PrepareResult message. Does not implicitly {@link msg.PrepareResult.verify|verify} messages.
         * @function encode
         * @memberof msg.PrepareResult
         * @static
         * @param {msg.IPrepareResult} message PrepareResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrepareResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.yes != null && Object.hasOwnProperty.call(message, "yes"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.yes);
            if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.ok);
            return writer;
        };

        /**
         * Encodes the specified PrepareResult message, length delimited. Does not implicitly {@link msg.PrepareResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PrepareResult
         * @static
         * @param {msg.IPrepareResult} message PrepareResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrepareResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PrepareResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PrepareResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PrepareResult} PrepareResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrepareResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PrepareResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.yes = reader.sint32();
                    break;
                case 2:
                    message.ok = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PrepareResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PrepareResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PrepareResult} PrepareResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrepareResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PrepareResult message.
         * @function verify
         * @memberof msg.PrepareResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PrepareResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.yes != null && message.hasOwnProperty("yes"))
                if (!$util.isInteger(message.yes))
                    return "yes: integer expected";
            if (message.ok != null && message.hasOwnProperty("ok"))
                if (typeof message.ok !== "boolean")
                    return "ok: boolean expected";
            return null;
        };

        /**
         * Creates a PrepareResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PrepareResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PrepareResult} PrepareResult
         */
        PrepareResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PrepareResult)
                return object;
            let message = new $root.msg.PrepareResult();
            if (object.yes != null)
                message.yes = object.yes | 0;
            if (object.ok != null)
                message.ok = Boolean(object.ok);
            return message;
        };

        /**
         * Creates a plain object from a PrepareResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PrepareResult
         * @static
         * @param {msg.PrepareResult} message PrepareResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PrepareResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.yes = 0;
                object.ok = false;
            }
            if (message.yes != null && message.hasOwnProperty("yes"))
                object.yes = message.yes;
            if (message.ok != null && message.hasOwnProperty("ok"))
                object.ok = message.ok;
            return object;
        };

        /**
         * Converts this PrepareResult to JSON.
         * @function toJSON
         * @memberof msg.PrepareResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PrepareResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PrepareResult;
    })();

    msg.PrepareBroadcast = (function() {

        /**
         * Properties of a PrepareBroadcast.
         * @memberof msg
         * @interface IPrepareBroadcast
         * @property {number|null} [userId] PrepareBroadcast userId
         * @property {number|null} [yes] PrepareBroadcast yes
         * @property {boolean|null} [allReady] PrepareBroadcast allReady
         */

        /**
         * Constructs a new PrepareBroadcast.
         * @memberof msg
         * @classdesc Represents a PrepareBroadcast.
         * @implements IPrepareBroadcast
         * @constructor
         * @param {msg.IPrepareBroadcast=} [properties] Properties to set
         */
        function PrepareBroadcast(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PrepareBroadcast userId.
         * @member {number} userId
         * @memberof msg.PrepareBroadcast
         * @instance
         */
        PrepareBroadcast.prototype.userId = 0;

        /**
         * PrepareBroadcast yes.
         * @member {number} yes
         * @memberof msg.PrepareBroadcast
         * @instance
         */
        PrepareBroadcast.prototype.yes = 0;

        /**
         * PrepareBroadcast allReady.
         * @member {boolean} allReady
         * @memberof msg.PrepareBroadcast
         * @instance
         */
        PrepareBroadcast.prototype.allReady = false;

        /**
         * Creates a new PrepareBroadcast instance using the specified properties.
         * @function create
         * @memberof msg.PrepareBroadcast
         * @static
         * @param {msg.IPrepareBroadcast=} [properties] Properties to set
         * @returns {msg.PrepareBroadcast} PrepareBroadcast instance
         */
        PrepareBroadcast.create = function create(properties) {
            return new PrepareBroadcast(properties);
        };

        /**
         * Encodes the specified PrepareBroadcast message. Does not implicitly {@link msg.PrepareBroadcast.verify|verify} messages.
         * @function encode
         * @memberof msg.PrepareBroadcast
         * @static
         * @param {msg.IPrepareBroadcast} message PrepareBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrepareBroadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userId);
            if (message.yes != null && Object.hasOwnProperty.call(message, "yes"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.yes);
            if (message.allReady != null && Object.hasOwnProperty.call(message, "allReady"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.allReady);
            return writer;
        };

        /**
         * Encodes the specified PrepareBroadcast message, length delimited. Does not implicitly {@link msg.PrepareBroadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PrepareBroadcast
         * @static
         * @param {msg.IPrepareBroadcast} message PrepareBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrepareBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PrepareBroadcast message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PrepareBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PrepareBroadcast} PrepareBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrepareBroadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PrepareBroadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.sint32();
                    break;
                case 2:
                    message.yes = reader.sint32();
                    break;
                case 3:
                    message.allReady = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PrepareBroadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PrepareBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PrepareBroadcast} PrepareBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrepareBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PrepareBroadcast message.
         * @function verify
         * @memberof msg.PrepareBroadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PrepareBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.yes != null && message.hasOwnProperty("yes"))
                if (!$util.isInteger(message.yes))
                    return "yes: integer expected";
            if (message.allReady != null && message.hasOwnProperty("allReady"))
                if (typeof message.allReady !== "boolean")
                    return "allReady: boolean expected";
            return null;
        };

        /**
         * Creates a PrepareBroadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PrepareBroadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PrepareBroadcast} PrepareBroadcast
         */
        PrepareBroadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PrepareBroadcast)
                return object;
            let message = new $root.msg.PrepareBroadcast();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.yes != null)
                message.yes = object.yes | 0;
            if (object.allReady != null)
                message.allReady = Boolean(object.allReady);
            return message;
        };

        /**
         * Creates a plain object from a PrepareBroadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PrepareBroadcast
         * @static
         * @param {msg.PrepareBroadcast} message PrepareBroadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PrepareBroadcast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = 0;
                object.yes = 0;
                object.allReady = false;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.yes != null && message.hasOwnProperty("yes"))
                object.yes = message.yes;
            if (message.allReady != null && message.hasOwnProperty("allReady"))
                object.allReady = message.allReady;
            return object;
        };

        /**
         * Converts this PrepareBroadcast to JSON.
         * @function toJSON
         * @memberof msg.PrepareBroadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PrepareBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PrepareBroadcast;
    })();

    msg.OfficialStartCmd = (function() {

        /**
         * Properties of an OfficialStartCmd.
         * @memberof msg
         * @interface IOfficialStartCmd
         */

        /**
         * Constructs a new OfficialStartCmd.
         * @memberof msg
         * @classdesc Represents an OfficialStartCmd.
         * @implements IOfficialStartCmd
         * @constructor
         * @param {msg.IOfficialStartCmd=} [properties] Properties to set
         */
        function OfficialStartCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new OfficialStartCmd instance using the specified properties.
         * @function create
         * @memberof msg.OfficialStartCmd
         * @static
         * @param {msg.IOfficialStartCmd=} [properties] Properties to set
         * @returns {msg.OfficialStartCmd} OfficialStartCmd instance
         */
        OfficialStartCmd.create = function create(properties) {
            return new OfficialStartCmd(properties);
        };

        /**
         * Encodes the specified OfficialStartCmd message. Does not implicitly {@link msg.OfficialStartCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.OfficialStartCmd
         * @static
         * @param {msg.IOfficialStartCmd} message OfficialStartCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OfficialStartCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified OfficialStartCmd message, length delimited. Does not implicitly {@link msg.OfficialStartCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.OfficialStartCmd
         * @static
         * @param {msg.IOfficialStartCmd} message OfficialStartCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OfficialStartCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OfficialStartCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.OfficialStartCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.OfficialStartCmd} OfficialStartCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OfficialStartCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.OfficialStartCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OfficialStartCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.OfficialStartCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.OfficialStartCmd} OfficialStartCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OfficialStartCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OfficialStartCmd message.
         * @function verify
         * @memberof msg.OfficialStartCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OfficialStartCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an OfficialStartCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.OfficialStartCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.OfficialStartCmd} OfficialStartCmd
         */
        OfficialStartCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.OfficialStartCmd)
                return object;
            return new $root.msg.OfficialStartCmd();
        };

        /**
         * Creates a plain object from an OfficialStartCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.OfficialStartCmd
         * @static
         * @param {msg.OfficialStartCmd} message OfficialStartCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OfficialStartCmd.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this OfficialStartCmd to JSON.
         * @function toJSON
         * @memberof msg.OfficialStartCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OfficialStartCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OfficialStartCmd;
    })();

    msg.OfficialStartResult = (function() {

        /**
         * Properties of an OfficialStartResult.
         * @memberof msg
         * @interface IOfficialStartResult
         * @property {boolean|null} [ok] OfficialStartResult ok
         */

        /**
         * Constructs a new OfficialStartResult.
         * @memberof msg
         * @classdesc Represents an OfficialStartResult.
         * @implements IOfficialStartResult
         * @constructor
         * @param {msg.IOfficialStartResult=} [properties] Properties to set
         */
        function OfficialStartResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OfficialStartResult ok.
         * @member {boolean} ok
         * @memberof msg.OfficialStartResult
         * @instance
         */
        OfficialStartResult.prototype.ok = false;

        /**
         * Creates a new OfficialStartResult instance using the specified properties.
         * @function create
         * @memberof msg.OfficialStartResult
         * @static
         * @param {msg.IOfficialStartResult=} [properties] Properties to set
         * @returns {msg.OfficialStartResult} OfficialStartResult instance
         */
        OfficialStartResult.create = function create(properties) {
            return new OfficialStartResult(properties);
        };

        /**
         * Encodes the specified OfficialStartResult message. Does not implicitly {@link msg.OfficialStartResult.verify|verify} messages.
         * @function encode
         * @memberof msg.OfficialStartResult
         * @static
         * @param {msg.IOfficialStartResult} message OfficialStartResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OfficialStartResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ok);
            return writer;
        };

        /**
         * Encodes the specified OfficialStartResult message, length delimited. Does not implicitly {@link msg.OfficialStartResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.OfficialStartResult
         * @static
         * @param {msg.IOfficialStartResult} message OfficialStartResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OfficialStartResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OfficialStartResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.OfficialStartResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.OfficialStartResult} OfficialStartResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OfficialStartResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.OfficialStartResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ok = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OfficialStartResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.OfficialStartResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.OfficialStartResult} OfficialStartResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OfficialStartResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OfficialStartResult message.
         * @function verify
         * @memberof msg.OfficialStartResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OfficialStartResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ok != null && message.hasOwnProperty("ok"))
                if (typeof message.ok !== "boolean")
                    return "ok: boolean expected";
            return null;
        };

        /**
         * Creates an OfficialStartResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.OfficialStartResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.OfficialStartResult} OfficialStartResult
         */
        OfficialStartResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.OfficialStartResult)
                return object;
            let message = new $root.msg.OfficialStartResult();
            if (object.ok != null)
                message.ok = Boolean(object.ok);
            return message;
        };

        /**
         * Creates a plain object from an OfficialStartResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.OfficialStartResult
         * @static
         * @param {msg.OfficialStartResult} message OfficialStartResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OfficialStartResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.ok = false;
            if (message.ok != null && message.hasOwnProperty("ok"))
                object.ok = message.ok;
            return object;
        };

        /**
         * Converts this OfficialStartResult to JSON.
         * @function toJSON
         * @memberof msg.OfficialStartResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OfficialStartResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OfficialStartResult;
    })();

    msg.OfficialStartBroadcast = (function() {

        /**
         * Properties of an OfficialStartBroadcast.
         * @memberof msg
         * @interface IOfficialStartBroadcast
         */

        /**
         * Constructs a new OfficialStartBroadcast.
         * @memberof msg
         * @classdesc Represents an OfficialStartBroadcast.
         * @implements IOfficialStartBroadcast
         * @constructor
         * @param {msg.IOfficialStartBroadcast=} [properties] Properties to set
         */
        function OfficialStartBroadcast(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new OfficialStartBroadcast instance using the specified properties.
         * @function create
         * @memberof msg.OfficialStartBroadcast
         * @static
         * @param {msg.IOfficialStartBroadcast=} [properties] Properties to set
         * @returns {msg.OfficialStartBroadcast} OfficialStartBroadcast instance
         */
        OfficialStartBroadcast.create = function create(properties) {
            return new OfficialStartBroadcast(properties);
        };

        /**
         * Encodes the specified OfficialStartBroadcast message. Does not implicitly {@link msg.OfficialStartBroadcast.verify|verify} messages.
         * @function encode
         * @memberof msg.OfficialStartBroadcast
         * @static
         * @param {msg.IOfficialStartBroadcast} message OfficialStartBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OfficialStartBroadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified OfficialStartBroadcast message, length delimited. Does not implicitly {@link msg.OfficialStartBroadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.OfficialStartBroadcast
         * @static
         * @param {msg.IOfficialStartBroadcast} message OfficialStartBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OfficialStartBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OfficialStartBroadcast message from the specified reader or buffer.
         * @function decode
         * @memberof msg.OfficialStartBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.OfficialStartBroadcast} OfficialStartBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OfficialStartBroadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.OfficialStartBroadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OfficialStartBroadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.OfficialStartBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.OfficialStartBroadcast} OfficialStartBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OfficialStartBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OfficialStartBroadcast message.
         * @function verify
         * @memberof msg.OfficialStartBroadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OfficialStartBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an OfficialStartBroadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.OfficialStartBroadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.OfficialStartBroadcast} OfficialStartBroadcast
         */
        OfficialStartBroadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.OfficialStartBroadcast)
                return object;
            return new $root.msg.OfficialStartBroadcast();
        };

        /**
         * Creates a plain object from an OfficialStartBroadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.OfficialStartBroadcast
         * @static
         * @param {msg.OfficialStartBroadcast} message OfficialStartBroadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OfficialStartBroadcast.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this OfficialStartBroadcast to JSON.
         * @function toJSON
         * @memberof msg.OfficialStartBroadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OfficialStartBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OfficialStartBroadcast;
    })();

    msg.SelectPiaoHintBroadcast = (function() {

        /**
         * Properties of a SelectPiaoHintBroadcast.
         * @memberof msg
         * @interface ISelectPiaoHintBroadcast
         * @property {boolean|null} [buPiao] SelectPiaoHintBroadcast buPiao
         * @property {boolean|null} [piao1] SelectPiaoHintBroadcast piao1
         * @property {boolean|null} [piao2] SelectPiaoHintBroadcast piao2
         * @property {boolean|null} [piao3] SelectPiaoHintBroadcast piao3
         * @property {boolean|null} [piao4] SelectPiaoHintBroadcast piao4
         */

        /**
         * Constructs a new SelectPiaoHintBroadcast.
         * @memberof msg
         * @classdesc Represents a SelectPiaoHintBroadcast.
         * @implements ISelectPiaoHintBroadcast
         * @constructor
         * @param {msg.ISelectPiaoHintBroadcast=} [properties] Properties to set
         */
        function SelectPiaoHintBroadcast(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SelectPiaoHintBroadcast buPiao.
         * @member {boolean} buPiao
         * @memberof msg.SelectPiaoHintBroadcast
         * @instance
         */
        SelectPiaoHintBroadcast.prototype.buPiao = false;

        /**
         * SelectPiaoHintBroadcast piao1.
         * @member {boolean} piao1
         * @memberof msg.SelectPiaoHintBroadcast
         * @instance
         */
        SelectPiaoHintBroadcast.prototype.piao1 = false;

        /**
         * SelectPiaoHintBroadcast piao2.
         * @member {boolean} piao2
         * @memberof msg.SelectPiaoHintBroadcast
         * @instance
         */
        SelectPiaoHintBroadcast.prototype.piao2 = false;

        /**
         * SelectPiaoHintBroadcast piao3.
         * @member {boolean} piao3
         * @memberof msg.SelectPiaoHintBroadcast
         * @instance
         */
        SelectPiaoHintBroadcast.prototype.piao3 = false;

        /**
         * SelectPiaoHintBroadcast piao4.
         * @member {boolean} piao4
         * @memberof msg.SelectPiaoHintBroadcast
         * @instance
         */
        SelectPiaoHintBroadcast.prototype.piao4 = false;

        /**
         * Creates a new SelectPiaoHintBroadcast instance using the specified properties.
         * @function create
         * @memberof msg.SelectPiaoHintBroadcast
         * @static
         * @param {msg.ISelectPiaoHintBroadcast=} [properties] Properties to set
         * @returns {msg.SelectPiaoHintBroadcast} SelectPiaoHintBroadcast instance
         */
        SelectPiaoHintBroadcast.create = function create(properties) {
            return new SelectPiaoHintBroadcast(properties);
        };

        /**
         * Encodes the specified SelectPiaoHintBroadcast message. Does not implicitly {@link msg.SelectPiaoHintBroadcast.verify|verify} messages.
         * @function encode
         * @memberof msg.SelectPiaoHintBroadcast
         * @static
         * @param {msg.ISelectPiaoHintBroadcast} message SelectPiaoHintBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelectPiaoHintBroadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.buPiao != null && Object.hasOwnProperty.call(message, "buPiao"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.buPiao);
            if (message.piao1 != null && Object.hasOwnProperty.call(message, "piao1"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.piao1);
            if (message.piao2 != null && Object.hasOwnProperty.call(message, "piao2"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.piao2);
            if (message.piao3 != null && Object.hasOwnProperty.call(message, "piao3"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.piao3);
            if (message.piao4 != null && Object.hasOwnProperty.call(message, "piao4"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.piao4);
            return writer;
        };

        /**
         * Encodes the specified SelectPiaoHintBroadcast message, length delimited. Does not implicitly {@link msg.SelectPiaoHintBroadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.SelectPiaoHintBroadcast
         * @static
         * @param {msg.ISelectPiaoHintBroadcast} message SelectPiaoHintBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelectPiaoHintBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SelectPiaoHintBroadcast message from the specified reader or buffer.
         * @function decode
         * @memberof msg.SelectPiaoHintBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.SelectPiaoHintBroadcast} SelectPiaoHintBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelectPiaoHintBroadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.SelectPiaoHintBroadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.buPiao = reader.bool();
                    break;
                case 2:
                    message.piao1 = reader.bool();
                    break;
                case 3:
                    message.piao2 = reader.bool();
                    break;
                case 4:
                    message.piao3 = reader.bool();
                    break;
                case 5:
                    message.piao4 = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SelectPiaoHintBroadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.SelectPiaoHintBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.SelectPiaoHintBroadcast} SelectPiaoHintBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelectPiaoHintBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SelectPiaoHintBroadcast message.
         * @function verify
         * @memberof msg.SelectPiaoHintBroadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SelectPiaoHintBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.buPiao != null && message.hasOwnProperty("buPiao"))
                if (typeof message.buPiao !== "boolean")
                    return "buPiao: boolean expected";
            if (message.piao1 != null && message.hasOwnProperty("piao1"))
                if (typeof message.piao1 !== "boolean")
                    return "piao1: boolean expected";
            if (message.piao2 != null && message.hasOwnProperty("piao2"))
                if (typeof message.piao2 !== "boolean")
                    return "piao2: boolean expected";
            if (message.piao3 != null && message.hasOwnProperty("piao3"))
                if (typeof message.piao3 !== "boolean")
                    return "piao3: boolean expected";
            if (message.piao4 != null && message.hasOwnProperty("piao4"))
                if (typeof message.piao4 !== "boolean")
                    return "piao4: boolean expected";
            return null;
        };

        /**
         * Creates a SelectPiaoHintBroadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.SelectPiaoHintBroadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.SelectPiaoHintBroadcast} SelectPiaoHintBroadcast
         */
        SelectPiaoHintBroadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.SelectPiaoHintBroadcast)
                return object;
            let message = new $root.msg.SelectPiaoHintBroadcast();
            if (object.buPiao != null)
                message.buPiao = Boolean(object.buPiao);
            if (object.piao1 != null)
                message.piao1 = Boolean(object.piao1);
            if (object.piao2 != null)
                message.piao2 = Boolean(object.piao2);
            if (object.piao3 != null)
                message.piao3 = Boolean(object.piao3);
            if (object.piao4 != null)
                message.piao4 = Boolean(object.piao4);
            return message;
        };

        /**
         * Creates a plain object from a SelectPiaoHintBroadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.SelectPiaoHintBroadcast
         * @static
         * @param {msg.SelectPiaoHintBroadcast} message SelectPiaoHintBroadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SelectPiaoHintBroadcast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.buPiao = false;
                object.piao1 = false;
                object.piao2 = false;
                object.piao3 = false;
                object.piao4 = false;
            }
            if (message.buPiao != null && message.hasOwnProperty("buPiao"))
                object.buPiao = message.buPiao;
            if (message.piao1 != null && message.hasOwnProperty("piao1"))
                object.piao1 = message.piao1;
            if (message.piao2 != null && message.hasOwnProperty("piao2"))
                object.piao2 = message.piao2;
            if (message.piao3 != null && message.hasOwnProperty("piao3"))
                object.piao3 = message.piao3;
            if (message.piao4 != null && message.hasOwnProperty("piao4"))
                object.piao4 = message.piao4;
            return object;
        };

        /**
         * Converts this SelectPiaoHintBroadcast to JSON.
         * @function toJSON
         * @memberof msg.SelectPiaoHintBroadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SelectPiaoHintBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SelectPiaoHintBroadcast;
    })();

    msg.DingPiaoCmd = (function() {

        /**
         * Properties of a DingPiaoCmd.
         * @memberof msg
         * @interface IDingPiaoCmd
         * @property {number|null} [piaoX] DingPiaoCmd piaoX
         */

        /**
         * Constructs a new DingPiaoCmd.
         * @memberof msg
         * @classdesc Represents a DingPiaoCmd.
         * @implements IDingPiaoCmd
         * @constructor
         * @param {msg.IDingPiaoCmd=} [properties] Properties to set
         */
        function DingPiaoCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DingPiaoCmd piaoX.
         * @member {number} piaoX
         * @memberof msg.DingPiaoCmd
         * @instance
         */
        DingPiaoCmd.prototype.piaoX = 0;

        /**
         * Creates a new DingPiaoCmd instance using the specified properties.
         * @function create
         * @memberof msg.DingPiaoCmd
         * @static
         * @param {msg.IDingPiaoCmd=} [properties] Properties to set
         * @returns {msg.DingPiaoCmd} DingPiaoCmd instance
         */
        DingPiaoCmd.create = function create(properties) {
            return new DingPiaoCmd(properties);
        };

        /**
         * Encodes the specified DingPiaoCmd message. Does not implicitly {@link msg.DingPiaoCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.DingPiaoCmd
         * @static
         * @param {msg.IDingPiaoCmd} message DingPiaoCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DingPiaoCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.piaoX != null && Object.hasOwnProperty.call(message, "piaoX"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.piaoX);
            return writer;
        };

        /**
         * Encodes the specified DingPiaoCmd message, length delimited. Does not implicitly {@link msg.DingPiaoCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.DingPiaoCmd
         * @static
         * @param {msg.IDingPiaoCmd} message DingPiaoCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DingPiaoCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DingPiaoCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.DingPiaoCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.DingPiaoCmd} DingPiaoCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DingPiaoCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.DingPiaoCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.piaoX = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DingPiaoCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.DingPiaoCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.DingPiaoCmd} DingPiaoCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DingPiaoCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DingPiaoCmd message.
         * @function verify
         * @memberof msg.DingPiaoCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DingPiaoCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.piaoX != null && message.hasOwnProperty("piaoX"))
                if (!$util.isInteger(message.piaoX))
                    return "piaoX: integer expected";
            return null;
        };

        /**
         * Creates a DingPiaoCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.DingPiaoCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.DingPiaoCmd} DingPiaoCmd
         */
        DingPiaoCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.DingPiaoCmd)
                return object;
            let message = new $root.msg.DingPiaoCmd();
            if (object.piaoX != null)
                message.piaoX = object.piaoX | 0;
            return message;
        };

        /**
         * Creates a plain object from a DingPiaoCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.DingPiaoCmd
         * @static
         * @param {msg.DingPiaoCmd} message DingPiaoCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DingPiaoCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.piaoX = 0;
            if (message.piaoX != null && message.hasOwnProperty("piaoX"))
                object.piaoX = message.piaoX;
            return object;
        };

        /**
         * Converts this DingPiaoCmd to JSON.
         * @function toJSON
         * @memberof msg.DingPiaoCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DingPiaoCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DingPiaoCmd;
    })();

    msg.DingPiaoResult = (function() {

        /**
         * Properties of a DingPiaoResult.
         * @memberof msg
         * @interface IDingPiaoResult
         * @property {number|null} [piaoX] DingPiaoResult piaoX
         * @property {boolean|null} [ok] DingPiaoResult ok
         */

        /**
         * Constructs a new DingPiaoResult.
         * @memberof msg
         * @classdesc Represents a DingPiaoResult.
         * @implements IDingPiaoResult
         * @constructor
         * @param {msg.IDingPiaoResult=} [properties] Properties to set
         */
        function DingPiaoResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DingPiaoResult piaoX.
         * @member {number} piaoX
         * @memberof msg.DingPiaoResult
         * @instance
         */
        DingPiaoResult.prototype.piaoX = 0;

        /**
         * DingPiaoResult ok.
         * @member {boolean} ok
         * @memberof msg.DingPiaoResult
         * @instance
         */
        DingPiaoResult.prototype.ok = false;

        /**
         * Creates a new DingPiaoResult instance using the specified properties.
         * @function create
         * @memberof msg.DingPiaoResult
         * @static
         * @param {msg.IDingPiaoResult=} [properties] Properties to set
         * @returns {msg.DingPiaoResult} DingPiaoResult instance
         */
        DingPiaoResult.create = function create(properties) {
            return new DingPiaoResult(properties);
        };

        /**
         * Encodes the specified DingPiaoResult message. Does not implicitly {@link msg.DingPiaoResult.verify|verify} messages.
         * @function encode
         * @memberof msg.DingPiaoResult
         * @static
         * @param {msg.IDingPiaoResult} message DingPiaoResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DingPiaoResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.piaoX != null && Object.hasOwnProperty.call(message, "piaoX"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.piaoX);
            if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.ok);
            return writer;
        };

        /**
         * Encodes the specified DingPiaoResult message, length delimited. Does not implicitly {@link msg.DingPiaoResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.DingPiaoResult
         * @static
         * @param {msg.IDingPiaoResult} message DingPiaoResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DingPiaoResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DingPiaoResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.DingPiaoResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.DingPiaoResult} DingPiaoResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DingPiaoResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.DingPiaoResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.piaoX = reader.sint32();
                    break;
                case 2:
                    message.ok = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DingPiaoResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.DingPiaoResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.DingPiaoResult} DingPiaoResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DingPiaoResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DingPiaoResult message.
         * @function verify
         * @memberof msg.DingPiaoResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DingPiaoResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.piaoX != null && message.hasOwnProperty("piaoX"))
                if (!$util.isInteger(message.piaoX))
                    return "piaoX: integer expected";
            if (message.ok != null && message.hasOwnProperty("ok"))
                if (typeof message.ok !== "boolean")
                    return "ok: boolean expected";
            return null;
        };

        /**
         * Creates a DingPiaoResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.DingPiaoResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.DingPiaoResult} DingPiaoResult
         */
        DingPiaoResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.DingPiaoResult)
                return object;
            let message = new $root.msg.DingPiaoResult();
            if (object.piaoX != null)
                message.piaoX = object.piaoX | 0;
            if (object.ok != null)
                message.ok = Boolean(object.ok);
            return message;
        };

        /**
         * Creates a plain object from a DingPiaoResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.DingPiaoResult
         * @static
         * @param {msg.DingPiaoResult} message DingPiaoResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DingPiaoResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.piaoX = 0;
                object.ok = false;
            }
            if (message.piaoX != null && message.hasOwnProperty("piaoX"))
                object.piaoX = message.piaoX;
            if (message.ok != null && message.hasOwnProperty("ok"))
                object.ok = message.ok;
            return object;
        };

        /**
         * Converts this DingPiaoResult to JSON.
         * @function toJSON
         * @memberof msg.DingPiaoResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DingPiaoResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DingPiaoResult;
    })();

    msg.DingPiaoBroadcast = (function() {

        /**
         * Properties of a DingPiaoBroadcast.
         * @memberof msg
         * @interface IDingPiaoBroadcast
         * @property {number|null} [userId] DingPiaoBroadcast userId
         * @property {number|null} [piaoX] DingPiaoBroadcast piaoX
         * @property {boolean|null} [ok] DingPiaoBroadcast ok
         */

        /**
         * Constructs a new DingPiaoBroadcast.
         * @memberof msg
         * @classdesc Represents a DingPiaoBroadcast.
         * @implements IDingPiaoBroadcast
         * @constructor
         * @param {msg.IDingPiaoBroadcast=} [properties] Properties to set
         */
        function DingPiaoBroadcast(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DingPiaoBroadcast userId.
         * @member {number} userId
         * @memberof msg.DingPiaoBroadcast
         * @instance
         */
        DingPiaoBroadcast.prototype.userId = 0;

        /**
         * DingPiaoBroadcast piaoX.
         * @member {number} piaoX
         * @memberof msg.DingPiaoBroadcast
         * @instance
         */
        DingPiaoBroadcast.prototype.piaoX = 0;

        /**
         * DingPiaoBroadcast ok.
         * @member {boolean} ok
         * @memberof msg.DingPiaoBroadcast
         * @instance
         */
        DingPiaoBroadcast.prototype.ok = false;

        /**
         * Creates a new DingPiaoBroadcast instance using the specified properties.
         * @function create
         * @memberof msg.DingPiaoBroadcast
         * @static
         * @param {msg.IDingPiaoBroadcast=} [properties] Properties to set
         * @returns {msg.DingPiaoBroadcast} DingPiaoBroadcast instance
         */
        DingPiaoBroadcast.create = function create(properties) {
            return new DingPiaoBroadcast(properties);
        };

        /**
         * Encodes the specified DingPiaoBroadcast message. Does not implicitly {@link msg.DingPiaoBroadcast.verify|verify} messages.
         * @function encode
         * @memberof msg.DingPiaoBroadcast
         * @static
         * @param {msg.IDingPiaoBroadcast} message DingPiaoBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DingPiaoBroadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userId);
            if (message.piaoX != null && Object.hasOwnProperty.call(message, "piaoX"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.piaoX);
            if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.ok);
            return writer;
        };

        /**
         * Encodes the specified DingPiaoBroadcast message, length delimited. Does not implicitly {@link msg.DingPiaoBroadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.DingPiaoBroadcast
         * @static
         * @param {msg.IDingPiaoBroadcast} message DingPiaoBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DingPiaoBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DingPiaoBroadcast message from the specified reader or buffer.
         * @function decode
         * @memberof msg.DingPiaoBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.DingPiaoBroadcast} DingPiaoBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DingPiaoBroadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.DingPiaoBroadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.sint32();
                    break;
                case 2:
                    message.piaoX = reader.sint32();
                    break;
                case 3:
                    message.ok = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DingPiaoBroadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.DingPiaoBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.DingPiaoBroadcast} DingPiaoBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DingPiaoBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DingPiaoBroadcast message.
         * @function verify
         * @memberof msg.DingPiaoBroadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DingPiaoBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.piaoX != null && message.hasOwnProperty("piaoX"))
                if (!$util.isInteger(message.piaoX))
                    return "piaoX: integer expected";
            if (message.ok != null && message.hasOwnProperty("ok"))
                if (typeof message.ok !== "boolean")
                    return "ok: boolean expected";
            return null;
        };

        /**
         * Creates a DingPiaoBroadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.DingPiaoBroadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.DingPiaoBroadcast} DingPiaoBroadcast
         */
        DingPiaoBroadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.DingPiaoBroadcast)
                return object;
            let message = new $root.msg.DingPiaoBroadcast();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.piaoX != null)
                message.piaoX = object.piaoX | 0;
            if (object.ok != null)
                message.ok = Boolean(object.ok);
            return message;
        };

        /**
         * Creates a plain object from a DingPiaoBroadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.DingPiaoBroadcast
         * @static
         * @param {msg.DingPiaoBroadcast} message DingPiaoBroadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DingPiaoBroadcast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = 0;
                object.piaoX = 0;
                object.ok = false;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.piaoX != null && message.hasOwnProperty("piaoX"))
                object.piaoX = message.piaoX;
            if (message.ok != null && message.hasOwnProperty("ok"))
                object.ok = message.ok;
            return object;
        };

        /**
         * Converts this DingPiaoBroadcast to JSON.
         * @function toJSON
         * @memberof msg.DingPiaoBroadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DingPiaoBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DingPiaoBroadcast;
    })();

    msg.RoundStartedBroadcast = (function() {

        /**
         * Properties of a RoundStartedBroadcast.
         * @memberof msg
         * @interface IRoundStartedBroadcast
         * @property {number|null} [currRoundIndex] RoundStartedBroadcast currRoundIndex
         * @property {number|null} [zhuangJiaUserId] RoundStartedBroadcast zhuangJiaUserId
         */

        /**
         * Constructs a new RoundStartedBroadcast.
         * @memberof msg
         * @classdesc Represents a RoundStartedBroadcast.
         * @implements IRoundStartedBroadcast
         * @constructor
         * @param {msg.IRoundStartedBroadcast=} [properties] Properties to set
         */
        function RoundStartedBroadcast(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoundStartedBroadcast currRoundIndex.
         * @member {number} currRoundIndex
         * @memberof msg.RoundStartedBroadcast
         * @instance
         */
        RoundStartedBroadcast.prototype.currRoundIndex = 0;

        /**
         * RoundStartedBroadcast zhuangJiaUserId.
         * @member {number} zhuangJiaUserId
         * @memberof msg.RoundStartedBroadcast
         * @instance
         */
        RoundStartedBroadcast.prototype.zhuangJiaUserId = 0;

        /**
         * Creates a new RoundStartedBroadcast instance using the specified properties.
         * @function create
         * @memberof msg.RoundStartedBroadcast
         * @static
         * @param {msg.IRoundStartedBroadcast=} [properties] Properties to set
         * @returns {msg.RoundStartedBroadcast} RoundStartedBroadcast instance
         */
        RoundStartedBroadcast.create = function create(properties) {
            return new RoundStartedBroadcast(properties);
        };

        /**
         * Encodes the specified RoundStartedBroadcast message. Does not implicitly {@link msg.RoundStartedBroadcast.verify|verify} messages.
         * @function encode
         * @memberof msg.RoundStartedBroadcast
         * @static
         * @param {msg.IRoundStartedBroadcast} message RoundStartedBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoundStartedBroadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.currRoundIndex != null && Object.hasOwnProperty.call(message, "currRoundIndex"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.currRoundIndex);
            if (message.zhuangJiaUserId != null && Object.hasOwnProperty.call(message, "zhuangJiaUserId"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.zhuangJiaUserId);
            return writer;
        };

        /**
         * Encodes the specified RoundStartedBroadcast message, length delimited. Does not implicitly {@link msg.RoundStartedBroadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.RoundStartedBroadcast
         * @static
         * @param {msg.IRoundStartedBroadcast} message RoundStartedBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoundStartedBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoundStartedBroadcast message from the specified reader or buffer.
         * @function decode
         * @memberof msg.RoundStartedBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.RoundStartedBroadcast} RoundStartedBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoundStartedBroadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.RoundStartedBroadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.currRoundIndex = reader.sint32();
                    break;
                case 2:
                    message.zhuangJiaUserId = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoundStartedBroadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.RoundStartedBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.RoundStartedBroadcast} RoundStartedBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoundStartedBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoundStartedBroadcast message.
         * @function verify
         * @memberof msg.RoundStartedBroadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoundStartedBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.currRoundIndex != null && message.hasOwnProperty("currRoundIndex"))
                if (!$util.isInteger(message.currRoundIndex))
                    return "currRoundIndex: integer expected";
            if (message.zhuangJiaUserId != null && message.hasOwnProperty("zhuangJiaUserId"))
                if (!$util.isInteger(message.zhuangJiaUserId))
                    return "zhuangJiaUserId: integer expected";
            return null;
        };

        /**
         * Creates a RoundStartedBroadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.RoundStartedBroadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.RoundStartedBroadcast} RoundStartedBroadcast
         */
        RoundStartedBroadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.RoundStartedBroadcast)
                return object;
            let message = new $root.msg.RoundStartedBroadcast();
            if (object.currRoundIndex != null)
                message.currRoundIndex = object.currRoundIndex | 0;
            if (object.zhuangJiaUserId != null)
                message.zhuangJiaUserId = object.zhuangJiaUserId | 0;
            return message;
        };

        /**
         * Creates a plain object from a RoundStartedBroadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.RoundStartedBroadcast
         * @static
         * @param {msg.RoundStartedBroadcast} message RoundStartedBroadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoundStartedBroadcast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.currRoundIndex = 0;
                object.zhuangJiaUserId = 0;
            }
            if (message.currRoundIndex != null && message.hasOwnProperty("currRoundIndex"))
                object.currRoundIndex = message.currRoundIndex;
            if (message.zhuangJiaUserId != null && message.hasOwnProperty("zhuangJiaUserId"))
                object.zhuangJiaUserId = message.zhuangJiaUserId;
            return object;
        };

        /**
         * Converts this RoundStartedBroadcast to JSON.
         * @function toJSON
         * @memberof msg.RoundStartedBroadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoundStartedBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoundStartedBroadcast;
    })();

    msg.MahjongInHandChangedResult = (function() {

        /**
         * Properties of a MahjongInHandChangedResult.
         * @memberof msg
         * @interface IMahjongInHandChangedResult
         * @property {Array.<number>|null} [mahjongInHand] MahjongInHandChangedResult mahjongInHand
         * @property {number|null} [moPai] MahjongInHandChangedResult moPai
         */

        /**
         * Constructs a new MahjongInHandChangedResult.
         * @memberof msg
         * @classdesc Represents a MahjongInHandChangedResult.
         * @implements IMahjongInHandChangedResult
         * @constructor
         * @param {msg.IMahjongInHandChangedResult=} [properties] Properties to set
         */
        function MahjongInHandChangedResult(properties) {
            this.mahjongInHand = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongInHandChangedResult mahjongInHand.
         * @member {Array.<number>} mahjongInHand
         * @memberof msg.MahjongInHandChangedResult
         * @instance
         */
        MahjongInHandChangedResult.prototype.mahjongInHand = $util.emptyArray;

        /**
         * MahjongInHandChangedResult moPai.
         * @member {number} moPai
         * @memberof msg.MahjongInHandChangedResult
         * @instance
         */
        MahjongInHandChangedResult.prototype.moPai = 0;

        /**
         * Creates a new MahjongInHandChangedResult instance using the specified properties.
         * @function create
         * @memberof msg.MahjongInHandChangedResult
         * @static
         * @param {msg.IMahjongInHandChangedResult=} [properties] Properties to set
         * @returns {msg.MahjongInHandChangedResult} MahjongInHandChangedResult instance
         */
        MahjongInHandChangedResult.create = function create(properties) {
            return new MahjongInHandChangedResult(properties);
        };

        /**
         * Encodes the specified MahjongInHandChangedResult message. Does not implicitly {@link msg.MahjongInHandChangedResult.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongInHandChangedResult
         * @static
         * @param {msg.IMahjongInHandChangedResult} message MahjongInHandChangedResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongInHandChangedResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mahjongInHand != null && message.mahjongInHand.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (let i = 0; i < message.mahjongInHand.length; ++i)
                    writer.sint32(message.mahjongInHand[i]);
                writer.ldelim();
            }
            if (message.moPai != null && Object.hasOwnProperty.call(message, "moPai"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.moPai);
            return writer;
        };

        /**
         * Encodes the specified MahjongInHandChangedResult message, length delimited. Does not implicitly {@link msg.MahjongInHandChangedResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongInHandChangedResult
         * @static
         * @param {msg.IMahjongInHandChangedResult} message MahjongInHandChangedResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongInHandChangedResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongInHandChangedResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongInHandChangedResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongInHandChangedResult} MahjongInHandChangedResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongInHandChangedResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongInHandChangedResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.mahjongInHand && message.mahjongInHand.length))
                        message.mahjongInHand = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.mahjongInHand.push(reader.sint32());
                    } else
                        message.mahjongInHand.push(reader.sint32());
                    break;
                case 2:
                    message.moPai = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongInHandChangedResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongInHandChangedResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongInHandChangedResult} MahjongInHandChangedResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongInHandChangedResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongInHandChangedResult message.
         * @function verify
         * @memberof msg.MahjongInHandChangedResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongInHandChangedResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mahjongInHand != null && message.hasOwnProperty("mahjongInHand")) {
                if (!Array.isArray(message.mahjongInHand))
                    return "mahjongInHand: array expected";
                for (let i = 0; i < message.mahjongInHand.length; ++i)
                    if (!$util.isInteger(message.mahjongInHand[i]))
                        return "mahjongInHand: integer[] expected";
            }
            if (message.moPai != null && message.hasOwnProperty("moPai"))
                if (!$util.isInteger(message.moPai))
                    return "moPai: integer expected";
            return null;
        };

        /**
         * Creates a MahjongInHandChangedResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongInHandChangedResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongInHandChangedResult} MahjongInHandChangedResult
         */
        MahjongInHandChangedResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongInHandChangedResult)
                return object;
            let message = new $root.msg.MahjongInHandChangedResult();
            if (object.mahjongInHand) {
                if (!Array.isArray(object.mahjongInHand))
                    throw TypeError(".msg.MahjongInHandChangedResult.mahjongInHand: array expected");
                message.mahjongInHand = [];
                for (let i = 0; i < object.mahjongInHand.length; ++i)
                    message.mahjongInHand[i] = object.mahjongInHand[i] | 0;
            }
            if (object.moPai != null)
                message.moPai = object.moPai | 0;
            return message;
        };

        /**
         * Creates a plain object from a MahjongInHandChangedResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongInHandChangedResult
         * @static
         * @param {msg.MahjongInHandChangedResult} message MahjongInHandChangedResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongInHandChangedResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.mahjongInHand = [];
            if (options.defaults)
                object.moPai = 0;
            if (message.mahjongInHand && message.mahjongInHand.length) {
                object.mahjongInHand = [];
                for (let j = 0; j < message.mahjongInHand.length; ++j)
                    object.mahjongInHand[j] = message.mahjongInHand[j];
            }
            if (message.moPai != null && message.hasOwnProperty("moPai"))
                object.moPai = message.moPai;
            return object;
        };

        /**
         * Converts this MahjongInHandChangedResult to JSON.
         * @function toJSON
         * @memberof msg.MahjongInHandChangedResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongInHandChangedResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongInHandChangedResult;
    })();

    msg.MahjongInHandChangedBroadcast = (function() {

        /**
         * Properties of a MahjongInHandChangedBroadcast.
         * @memberof msg
         * @interface IMahjongInHandChangedBroadcast
         * @property {number|null} [userId] MahjongInHandChangedBroadcast userId
         * @property {Array.<number>|null} [mahjongInHand] MahjongInHandChangedBroadcast mahjongInHand
         * @property {number|null} [moPai] MahjongInHandChangedBroadcast moPai
         */

        /**
         * Constructs a new MahjongInHandChangedBroadcast.
         * @memberof msg
         * @classdesc Represents a MahjongInHandChangedBroadcast.
         * @implements IMahjongInHandChangedBroadcast
         * @constructor
         * @param {msg.IMahjongInHandChangedBroadcast=} [properties] Properties to set
         */
        function MahjongInHandChangedBroadcast(properties) {
            this.mahjongInHand = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongInHandChangedBroadcast userId.
         * @member {number} userId
         * @memberof msg.MahjongInHandChangedBroadcast
         * @instance
         */
        MahjongInHandChangedBroadcast.prototype.userId = 0;

        /**
         * MahjongInHandChangedBroadcast mahjongInHand.
         * @member {Array.<number>} mahjongInHand
         * @memberof msg.MahjongInHandChangedBroadcast
         * @instance
         */
        MahjongInHandChangedBroadcast.prototype.mahjongInHand = $util.emptyArray;

        /**
         * MahjongInHandChangedBroadcast moPai.
         * @member {number} moPai
         * @memberof msg.MahjongInHandChangedBroadcast
         * @instance
         */
        MahjongInHandChangedBroadcast.prototype.moPai = 0;

        /**
         * Creates a new MahjongInHandChangedBroadcast instance using the specified properties.
         * @function create
         * @memberof msg.MahjongInHandChangedBroadcast
         * @static
         * @param {msg.IMahjongInHandChangedBroadcast=} [properties] Properties to set
         * @returns {msg.MahjongInHandChangedBroadcast} MahjongInHandChangedBroadcast instance
         */
        MahjongInHandChangedBroadcast.create = function create(properties) {
            return new MahjongInHandChangedBroadcast(properties);
        };

        /**
         * Encodes the specified MahjongInHandChangedBroadcast message. Does not implicitly {@link msg.MahjongInHandChangedBroadcast.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongInHandChangedBroadcast
         * @static
         * @param {msg.IMahjongInHandChangedBroadcast} message MahjongInHandChangedBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongInHandChangedBroadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userId);
            if (message.mahjongInHand != null && message.mahjongInHand.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (let i = 0; i < message.mahjongInHand.length; ++i)
                    writer.sint32(message.mahjongInHand[i]);
                writer.ldelim();
            }
            if (message.moPai != null && Object.hasOwnProperty.call(message, "moPai"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.moPai);
            return writer;
        };

        /**
         * Encodes the specified MahjongInHandChangedBroadcast message, length delimited. Does not implicitly {@link msg.MahjongInHandChangedBroadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongInHandChangedBroadcast
         * @static
         * @param {msg.IMahjongInHandChangedBroadcast} message MahjongInHandChangedBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongInHandChangedBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongInHandChangedBroadcast message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongInHandChangedBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongInHandChangedBroadcast} MahjongInHandChangedBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongInHandChangedBroadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongInHandChangedBroadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.sint32();
                    break;
                case 2:
                    if (!(message.mahjongInHand && message.mahjongInHand.length))
                        message.mahjongInHand = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.mahjongInHand.push(reader.sint32());
                    } else
                        message.mahjongInHand.push(reader.sint32());
                    break;
                case 3:
                    message.moPai = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongInHandChangedBroadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongInHandChangedBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongInHandChangedBroadcast} MahjongInHandChangedBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongInHandChangedBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongInHandChangedBroadcast message.
         * @function verify
         * @memberof msg.MahjongInHandChangedBroadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongInHandChangedBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.mahjongInHand != null && message.hasOwnProperty("mahjongInHand")) {
                if (!Array.isArray(message.mahjongInHand))
                    return "mahjongInHand: array expected";
                for (let i = 0; i < message.mahjongInHand.length; ++i)
                    if (!$util.isInteger(message.mahjongInHand[i]))
                        return "mahjongInHand: integer[] expected";
            }
            if (message.moPai != null && message.hasOwnProperty("moPai"))
                if (!$util.isInteger(message.moPai))
                    return "moPai: integer expected";
            return null;
        };

        /**
         * Creates a MahjongInHandChangedBroadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongInHandChangedBroadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongInHandChangedBroadcast} MahjongInHandChangedBroadcast
         */
        MahjongInHandChangedBroadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongInHandChangedBroadcast)
                return object;
            let message = new $root.msg.MahjongInHandChangedBroadcast();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.mahjongInHand) {
                if (!Array.isArray(object.mahjongInHand))
                    throw TypeError(".msg.MahjongInHandChangedBroadcast.mahjongInHand: array expected");
                message.mahjongInHand = [];
                for (let i = 0; i < object.mahjongInHand.length; ++i)
                    message.mahjongInHand[i] = object.mahjongInHand[i] | 0;
            }
            if (object.moPai != null)
                message.moPai = object.moPai | 0;
            return message;
        };

        /**
         * Creates a plain object from a MahjongInHandChangedBroadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongInHandChangedBroadcast
         * @static
         * @param {msg.MahjongInHandChangedBroadcast} message MahjongInHandChangedBroadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongInHandChangedBroadcast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.mahjongInHand = [];
            if (options.defaults) {
                object.userId = 0;
                object.moPai = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.mahjongInHand && message.mahjongInHand.length) {
                object.mahjongInHand = [];
                for (let j = 0; j < message.mahjongInHand.length; ++j)
                    object.mahjongInHand[j] = message.mahjongInHand[j];
            }
            if (message.moPai != null && message.hasOwnProperty("moPai"))
                object.moPai = message.moPai;
            return object;
        };

        /**
         * Converts this MahjongInHandChangedBroadcast to JSON.
         * @function toJSON
         * @memberof msg.MahjongInHandChangedBroadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongInHandChangedBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongInHandChangedBroadcast;
    })();

    msg.MahjongMoPaiResult = (function() {

        /**
         * Properties of a MahjongMoPaiResult.
         * @memberof msg
         * @interface IMahjongMoPaiResult
         * @property {number|null} [t] MahjongMoPaiResult t
         */

        /**
         * Constructs a new MahjongMoPaiResult.
         * @memberof msg
         * @classdesc Represents a MahjongMoPaiResult.
         * @implements IMahjongMoPaiResult
         * @constructor
         * @param {msg.IMahjongMoPaiResult=} [properties] Properties to set
         */
        function MahjongMoPaiResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongMoPaiResult t.
         * @member {number} t
         * @memberof msg.MahjongMoPaiResult
         * @instance
         */
        MahjongMoPaiResult.prototype.t = 0;

        /**
         * Creates a new MahjongMoPaiResult instance using the specified properties.
         * @function create
         * @memberof msg.MahjongMoPaiResult
         * @static
         * @param {msg.IMahjongMoPaiResult=} [properties] Properties to set
         * @returns {msg.MahjongMoPaiResult} MahjongMoPaiResult instance
         */
        MahjongMoPaiResult.create = function create(properties) {
            return new MahjongMoPaiResult(properties);
        };

        /**
         * Encodes the specified MahjongMoPaiResult message. Does not implicitly {@link msg.MahjongMoPaiResult.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongMoPaiResult
         * @static
         * @param {msg.IMahjongMoPaiResult} message MahjongMoPaiResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongMoPaiResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.t != null && Object.hasOwnProperty.call(message, "t"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.t);
            return writer;
        };

        /**
         * Encodes the specified MahjongMoPaiResult message, length delimited. Does not implicitly {@link msg.MahjongMoPaiResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongMoPaiResult
         * @static
         * @param {msg.IMahjongMoPaiResult} message MahjongMoPaiResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongMoPaiResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongMoPaiResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongMoPaiResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongMoPaiResult} MahjongMoPaiResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongMoPaiResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongMoPaiResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.t = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongMoPaiResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongMoPaiResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongMoPaiResult} MahjongMoPaiResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongMoPaiResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongMoPaiResult message.
         * @function verify
         * @memberof msg.MahjongMoPaiResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongMoPaiResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.t != null && message.hasOwnProperty("t"))
                if (!$util.isInteger(message.t))
                    return "t: integer expected";
            return null;
        };

        /**
         * Creates a MahjongMoPaiResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongMoPaiResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongMoPaiResult} MahjongMoPaiResult
         */
        MahjongMoPaiResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongMoPaiResult)
                return object;
            let message = new $root.msg.MahjongMoPaiResult();
            if (object.t != null)
                message.t = object.t | 0;
            return message;
        };

        /**
         * Creates a plain object from a MahjongMoPaiResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongMoPaiResult
         * @static
         * @param {msg.MahjongMoPaiResult} message MahjongMoPaiResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongMoPaiResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.t = 0;
            if (message.t != null && message.hasOwnProperty("t"))
                object.t = message.t;
            return object;
        };

        /**
         * Converts this MahjongMoPaiResult to JSON.
         * @function toJSON
         * @memberof msg.MahjongMoPaiResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongMoPaiResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongMoPaiResult;
    })();

    msg.MahjongMoPaiBroadcast = (function() {

        /**
         * Properties of a MahjongMoPaiBroadcast.
         * @memberof msg
         * @interface IMahjongMoPaiBroadcast
         * @property {number|null} [userId] MahjongMoPaiBroadcast userId
         * @property {number|null} [t] MahjongMoPaiBroadcast t
         */

        /**
         * Constructs a new MahjongMoPaiBroadcast.
         * @memberof msg
         * @classdesc Represents a MahjongMoPaiBroadcast.
         * @implements IMahjongMoPaiBroadcast
         * @constructor
         * @param {msg.IMahjongMoPaiBroadcast=} [properties] Properties to set
         */
        function MahjongMoPaiBroadcast(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongMoPaiBroadcast userId.
         * @member {number} userId
         * @memberof msg.MahjongMoPaiBroadcast
         * @instance
         */
        MahjongMoPaiBroadcast.prototype.userId = 0;

        /**
         * MahjongMoPaiBroadcast t.
         * @member {number} t
         * @memberof msg.MahjongMoPaiBroadcast
         * @instance
         */
        MahjongMoPaiBroadcast.prototype.t = 0;

        /**
         * Creates a new MahjongMoPaiBroadcast instance using the specified properties.
         * @function create
         * @memberof msg.MahjongMoPaiBroadcast
         * @static
         * @param {msg.IMahjongMoPaiBroadcast=} [properties] Properties to set
         * @returns {msg.MahjongMoPaiBroadcast} MahjongMoPaiBroadcast instance
         */
        MahjongMoPaiBroadcast.create = function create(properties) {
            return new MahjongMoPaiBroadcast(properties);
        };

        /**
         * Encodes the specified MahjongMoPaiBroadcast message. Does not implicitly {@link msg.MahjongMoPaiBroadcast.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongMoPaiBroadcast
         * @static
         * @param {msg.IMahjongMoPaiBroadcast} message MahjongMoPaiBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongMoPaiBroadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userId);
            if (message.t != null && Object.hasOwnProperty.call(message, "t"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.t);
            return writer;
        };

        /**
         * Encodes the specified MahjongMoPaiBroadcast message, length delimited. Does not implicitly {@link msg.MahjongMoPaiBroadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongMoPaiBroadcast
         * @static
         * @param {msg.IMahjongMoPaiBroadcast} message MahjongMoPaiBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongMoPaiBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongMoPaiBroadcast message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongMoPaiBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongMoPaiBroadcast} MahjongMoPaiBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongMoPaiBroadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongMoPaiBroadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.sint32();
                    break;
                case 2:
                    message.t = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongMoPaiBroadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongMoPaiBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongMoPaiBroadcast} MahjongMoPaiBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongMoPaiBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongMoPaiBroadcast message.
         * @function verify
         * @memberof msg.MahjongMoPaiBroadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongMoPaiBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.t != null && message.hasOwnProperty("t"))
                if (!$util.isInteger(message.t))
                    return "t: integer expected";
            return null;
        };

        /**
         * Creates a MahjongMoPaiBroadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongMoPaiBroadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongMoPaiBroadcast} MahjongMoPaiBroadcast
         */
        MahjongMoPaiBroadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongMoPaiBroadcast)
                return object;
            let message = new $root.msg.MahjongMoPaiBroadcast();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.t != null)
                message.t = object.t | 0;
            return message;
        };

        /**
         * Creates a plain object from a MahjongMoPaiBroadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongMoPaiBroadcast
         * @static
         * @param {msg.MahjongMoPaiBroadcast} message MahjongMoPaiBroadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongMoPaiBroadcast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = 0;
                object.t = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.t != null && message.hasOwnProperty("t"))
                object.t = message.t;
            return object;
        };

        /**
         * Converts this MahjongMoPaiBroadcast to JSON.
         * @function toJSON
         * @memberof msg.MahjongMoPaiBroadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongMoPaiBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongMoPaiBroadcast;
    })();

    msg.RedirectActUserIdBroadcast = (function() {

        /**
         * Properties of a RedirectActUserIdBroadcast.
         * @memberof msg
         * @interface IRedirectActUserIdBroadcast
         * @property {number|null} [userId] RedirectActUserIdBroadcast userId
         * @property {number|null} [seatIndex] RedirectActUserIdBroadcast seatIndex
         * @property {number|null} [currRoundIndex] RedirectActUserIdBroadcast currRoundIndex
         * @property {number|null} [remainCardNum] RedirectActUserIdBroadcast remainCardNum
         * @property {number|null} [remainTime] RedirectActUserIdBroadcast remainTime
         */

        /**
         * Constructs a new RedirectActUserIdBroadcast.
         * @memberof msg
         * @classdesc Represents a RedirectActUserIdBroadcast.
         * @implements IRedirectActUserIdBroadcast
         * @constructor
         * @param {msg.IRedirectActUserIdBroadcast=} [properties] Properties to set
         */
        function RedirectActUserIdBroadcast(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RedirectActUserIdBroadcast userId.
         * @member {number} userId
         * @memberof msg.RedirectActUserIdBroadcast
         * @instance
         */
        RedirectActUserIdBroadcast.prototype.userId = 0;

        /**
         * RedirectActUserIdBroadcast seatIndex.
         * @member {number} seatIndex
         * @memberof msg.RedirectActUserIdBroadcast
         * @instance
         */
        RedirectActUserIdBroadcast.prototype.seatIndex = 0;

        /**
         * RedirectActUserIdBroadcast currRoundIndex.
         * @member {number} currRoundIndex
         * @memberof msg.RedirectActUserIdBroadcast
         * @instance
         */
        RedirectActUserIdBroadcast.prototype.currRoundIndex = 0;

        /**
         * RedirectActUserIdBroadcast remainCardNum.
         * @member {number} remainCardNum
         * @memberof msg.RedirectActUserIdBroadcast
         * @instance
         */
        RedirectActUserIdBroadcast.prototype.remainCardNum = 0;

        /**
         * RedirectActUserIdBroadcast remainTime.
         * @member {number} remainTime
         * @memberof msg.RedirectActUserIdBroadcast
         * @instance
         */
        RedirectActUserIdBroadcast.prototype.remainTime = 0;

        /**
         * Creates a new RedirectActUserIdBroadcast instance using the specified properties.
         * @function create
         * @memberof msg.RedirectActUserIdBroadcast
         * @static
         * @param {msg.IRedirectActUserIdBroadcast=} [properties] Properties to set
         * @returns {msg.RedirectActUserIdBroadcast} RedirectActUserIdBroadcast instance
         */
        RedirectActUserIdBroadcast.create = function create(properties) {
            return new RedirectActUserIdBroadcast(properties);
        };

        /**
         * Encodes the specified RedirectActUserIdBroadcast message. Does not implicitly {@link msg.RedirectActUserIdBroadcast.verify|verify} messages.
         * @function encode
         * @memberof msg.RedirectActUserIdBroadcast
         * @static
         * @param {msg.IRedirectActUserIdBroadcast} message RedirectActUserIdBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RedirectActUserIdBroadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userId);
            if (message.seatIndex != null && Object.hasOwnProperty.call(message, "seatIndex"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.seatIndex);
            if (message.currRoundIndex != null && Object.hasOwnProperty.call(message, "currRoundIndex"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.currRoundIndex);
            if (message.remainCardNum != null && Object.hasOwnProperty.call(message, "remainCardNum"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.remainCardNum);
            if (message.remainTime != null && Object.hasOwnProperty.call(message, "remainTime"))
                writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.remainTime);
            return writer;
        };

        /**
         * Encodes the specified RedirectActUserIdBroadcast message, length delimited. Does not implicitly {@link msg.RedirectActUserIdBroadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.RedirectActUserIdBroadcast
         * @static
         * @param {msg.IRedirectActUserIdBroadcast} message RedirectActUserIdBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RedirectActUserIdBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RedirectActUserIdBroadcast message from the specified reader or buffer.
         * @function decode
         * @memberof msg.RedirectActUserIdBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.RedirectActUserIdBroadcast} RedirectActUserIdBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RedirectActUserIdBroadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.RedirectActUserIdBroadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.sint32();
                    break;
                case 2:
                    message.seatIndex = reader.sint32();
                    break;
                case 3:
                    message.currRoundIndex = reader.sint32();
                    break;
                case 4:
                    message.remainCardNum = reader.sint32();
                    break;
                case 5:
                    message.remainTime = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RedirectActUserIdBroadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.RedirectActUserIdBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.RedirectActUserIdBroadcast} RedirectActUserIdBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RedirectActUserIdBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RedirectActUserIdBroadcast message.
         * @function verify
         * @memberof msg.RedirectActUserIdBroadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RedirectActUserIdBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.seatIndex != null && message.hasOwnProperty("seatIndex"))
                if (!$util.isInteger(message.seatIndex))
                    return "seatIndex: integer expected";
            if (message.currRoundIndex != null && message.hasOwnProperty("currRoundIndex"))
                if (!$util.isInteger(message.currRoundIndex))
                    return "currRoundIndex: integer expected";
            if (message.remainCardNum != null && message.hasOwnProperty("remainCardNum"))
                if (!$util.isInteger(message.remainCardNum))
                    return "remainCardNum: integer expected";
            if (message.remainTime != null && message.hasOwnProperty("remainTime"))
                if (!$util.isInteger(message.remainTime))
                    return "remainTime: integer expected";
            return null;
        };

        /**
         * Creates a RedirectActUserIdBroadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.RedirectActUserIdBroadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.RedirectActUserIdBroadcast} RedirectActUserIdBroadcast
         */
        RedirectActUserIdBroadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.RedirectActUserIdBroadcast)
                return object;
            let message = new $root.msg.RedirectActUserIdBroadcast();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.seatIndex != null)
                message.seatIndex = object.seatIndex | 0;
            if (object.currRoundIndex != null)
                message.currRoundIndex = object.currRoundIndex | 0;
            if (object.remainCardNum != null)
                message.remainCardNum = object.remainCardNum | 0;
            if (object.remainTime != null)
                message.remainTime = object.remainTime | 0;
            return message;
        };

        /**
         * Creates a plain object from a RedirectActUserIdBroadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.RedirectActUserIdBroadcast
         * @static
         * @param {msg.RedirectActUserIdBroadcast} message RedirectActUserIdBroadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RedirectActUserIdBroadcast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = 0;
                object.seatIndex = 0;
                object.currRoundIndex = 0;
                object.remainCardNum = 0;
                object.remainTime = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.seatIndex != null && message.hasOwnProperty("seatIndex"))
                object.seatIndex = message.seatIndex;
            if (message.currRoundIndex != null && message.hasOwnProperty("currRoundIndex"))
                object.currRoundIndex = message.currRoundIndex;
            if (message.remainCardNum != null && message.hasOwnProperty("remainCardNum"))
                object.remainCardNum = message.remainCardNum;
            if (message.remainTime != null && message.hasOwnProperty("remainTime"))
                object.remainTime = message.remainTime;
            return object;
        };

        /**
         * Converts this RedirectActUserIdBroadcast to JSON.
         * @function toJSON
         * @memberof msg.RedirectActUserIdBroadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RedirectActUserIdBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RedirectActUserIdBroadcast;
    })();

    msg.OpRemainTimeBroadcast = (function() {

        /**
         * Properties of an OpRemainTimeBroadcast.
         * @memberof msg
         * @interface IOpRemainTimeBroadcast
         * @property {number|null} [ms] OpRemainTimeBroadcast ms
         */

        /**
         * Constructs a new OpRemainTimeBroadcast.
         * @memberof msg
         * @classdesc Represents an OpRemainTimeBroadcast.
         * @implements IOpRemainTimeBroadcast
         * @constructor
         * @param {msg.IOpRemainTimeBroadcast=} [properties] Properties to set
         */
        function OpRemainTimeBroadcast(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OpRemainTimeBroadcast ms.
         * @member {number} ms
         * @memberof msg.OpRemainTimeBroadcast
         * @instance
         */
        OpRemainTimeBroadcast.prototype.ms = 0;

        /**
         * Creates a new OpRemainTimeBroadcast instance using the specified properties.
         * @function create
         * @memberof msg.OpRemainTimeBroadcast
         * @static
         * @param {msg.IOpRemainTimeBroadcast=} [properties] Properties to set
         * @returns {msg.OpRemainTimeBroadcast} OpRemainTimeBroadcast instance
         */
        OpRemainTimeBroadcast.create = function create(properties) {
            return new OpRemainTimeBroadcast(properties);
        };

        /**
         * Encodes the specified OpRemainTimeBroadcast message. Does not implicitly {@link msg.OpRemainTimeBroadcast.verify|verify} messages.
         * @function encode
         * @memberof msg.OpRemainTimeBroadcast
         * @static
         * @param {msg.IOpRemainTimeBroadcast} message OpRemainTimeBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OpRemainTimeBroadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ms != null && Object.hasOwnProperty.call(message, "ms"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.ms);
            return writer;
        };

        /**
         * Encodes the specified OpRemainTimeBroadcast message, length delimited. Does not implicitly {@link msg.OpRemainTimeBroadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.OpRemainTimeBroadcast
         * @static
         * @param {msg.IOpRemainTimeBroadcast} message OpRemainTimeBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OpRemainTimeBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OpRemainTimeBroadcast message from the specified reader or buffer.
         * @function decode
         * @memberof msg.OpRemainTimeBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.OpRemainTimeBroadcast} OpRemainTimeBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OpRemainTimeBroadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.OpRemainTimeBroadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ms = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OpRemainTimeBroadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.OpRemainTimeBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.OpRemainTimeBroadcast} OpRemainTimeBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OpRemainTimeBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OpRemainTimeBroadcast message.
         * @function verify
         * @memberof msg.OpRemainTimeBroadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OpRemainTimeBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ms != null && message.hasOwnProperty("ms"))
                if (!$util.isInteger(message.ms))
                    return "ms: integer expected";
            return null;
        };

        /**
         * Creates an OpRemainTimeBroadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.OpRemainTimeBroadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.OpRemainTimeBroadcast} OpRemainTimeBroadcast
         */
        OpRemainTimeBroadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.OpRemainTimeBroadcast)
                return object;
            let message = new $root.msg.OpRemainTimeBroadcast();
            if (object.ms != null)
                message.ms = object.ms | 0;
            return message;
        };

        /**
         * Creates a plain object from an OpRemainTimeBroadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.OpRemainTimeBroadcast
         * @static
         * @param {msg.OpRemainTimeBroadcast} message OpRemainTimeBroadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OpRemainTimeBroadcast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.ms = 0;
            if (message.ms != null && message.hasOwnProperty("ms"))
                object.ms = message.ms;
            return object;
        };

        /**
         * Converts this OpRemainTimeBroadcast to JSON.
         * @function toJSON
         * @memberof msg.OpRemainTimeBroadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OpRemainTimeBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OpRemainTimeBroadcast;
    })();

    msg.MahjongChuPaiCmd = (function() {

        /**
         * Properties of a MahjongChuPaiCmd.
         * @memberof msg
         * @interface IMahjongChuPaiCmd
         * @property {number|null} [t] MahjongChuPaiCmd t
         */

        /**
         * Constructs a new MahjongChuPaiCmd.
         * @memberof msg
         * @classdesc Represents a MahjongChuPaiCmd.
         * @implements IMahjongChuPaiCmd
         * @constructor
         * @param {msg.IMahjongChuPaiCmd=} [properties] Properties to set
         */
        function MahjongChuPaiCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongChuPaiCmd t.
         * @member {number} t
         * @memberof msg.MahjongChuPaiCmd
         * @instance
         */
        MahjongChuPaiCmd.prototype.t = 0;

        /**
         * Creates a new MahjongChuPaiCmd instance using the specified properties.
         * @function create
         * @memberof msg.MahjongChuPaiCmd
         * @static
         * @param {msg.IMahjongChuPaiCmd=} [properties] Properties to set
         * @returns {msg.MahjongChuPaiCmd} MahjongChuPaiCmd instance
         */
        MahjongChuPaiCmd.create = function create(properties) {
            return new MahjongChuPaiCmd(properties);
        };

        /**
         * Encodes the specified MahjongChuPaiCmd message. Does not implicitly {@link msg.MahjongChuPaiCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongChuPaiCmd
         * @static
         * @param {msg.IMahjongChuPaiCmd} message MahjongChuPaiCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongChuPaiCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.t != null && Object.hasOwnProperty.call(message, "t"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.t);
            return writer;
        };

        /**
         * Encodes the specified MahjongChuPaiCmd message, length delimited. Does not implicitly {@link msg.MahjongChuPaiCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongChuPaiCmd
         * @static
         * @param {msg.IMahjongChuPaiCmd} message MahjongChuPaiCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongChuPaiCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongChuPaiCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongChuPaiCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongChuPaiCmd} MahjongChuPaiCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongChuPaiCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongChuPaiCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.t = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongChuPaiCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongChuPaiCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongChuPaiCmd} MahjongChuPaiCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongChuPaiCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongChuPaiCmd message.
         * @function verify
         * @memberof msg.MahjongChuPaiCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongChuPaiCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.t != null && message.hasOwnProperty("t"))
                if (!$util.isInteger(message.t))
                    return "t: integer expected";
            return null;
        };

        /**
         * Creates a MahjongChuPaiCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongChuPaiCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongChuPaiCmd} MahjongChuPaiCmd
         */
        MahjongChuPaiCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongChuPaiCmd)
                return object;
            let message = new $root.msg.MahjongChuPaiCmd();
            if (object.t != null)
                message.t = object.t | 0;
            return message;
        };

        /**
         * Creates a plain object from a MahjongChuPaiCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongChuPaiCmd
         * @static
         * @param {msg.MahjongChuPaiCmd} message MahjongChuPaiCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongChuPaiCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.t = 0;
            if (message.t != null && message.hasOwnProperty("t"))
                object.t = message.t;
            return object;
        };

        /**
         * Converts this MahjongChuPaiCmd to JSON.
         * @function toJSON
         * @memberof msg.MahjongChuPaiCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongChuPaiCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongChuPaiCmd;
    })();

    msg.MahjongChuPaiResult = (function() {

        /**
         * Properties of a MahjongChuPaiResult.
         * @memberof msg
         * @interface IMahjongChuPaiResult
         * @property {number|null} [t] MahjongChuPaiResult t
         */

        /**
         * Constructs a new MahjongChuPaiResult.
         * @memberof msg
         * @classdesc Represents a MahjongChuPaiResult.
         * @implements IMahjongChuPaiResult
         * @constructor
         * @param {msg.IMahjongChuPaiResult=} [properties] Properties to set
         */
        function MahjongChuPaiResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongChuPaiResult t.
         * @member {number} t
         * @memberof msg.MahjongChuPaiResult
         * @instance
         */
        MahjongChuPaiResult.prototype.t = 0;

        /**
         * Creates a new MahjongChuPaiResult instance using the specified properties.
         * @function create
         * @memberof msg.MahjongChuPaiResult
         * @static
         * @param {msg.IMahjongChuPaiResult=} [properties] Properties to set
         * @returns {msg.MahjongChuPaiResult} MahjongChuPaiResult instance
         */
        MahjongChuPaiResult.create = function create(properties) {
            return new MahjongChuPaiResult(properties);
        };

        /**
         * Encodes the specified MahjongChuPaiResult message. Does not implicitly {@link msg.MahjongChuPaiResult.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongChuPaiResult
         * @static
         * @param {msg.IMahjongChuPaiResult} message MahjongChuPaiResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongChuPaiResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.t != null && Object.hasOwnProperty.call(message, "t"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.t);
            return writer;
        };

        /**
         * Encodes the specified MahjongChuPaiResult message, length delimited. Does not implicitly {@link msg.MahjongChuPaiResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongChuPaiResult
         * @static
         * @param {msg.IMahjongChuPaiResult} message MahjongChuPaiResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongChuPaiResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongChuPaiResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongChuPaiResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongChuPaiResult} MahjongChuPaiResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongChuPaiResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongChuPaiResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.t = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongChuPaiResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongChuPaiResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongChuPaiResult} MahjongChuPaiResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongChuPaiResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongChuPaiResult message.
         * @function verify
         * @memberof msg.MahjongChuPaiResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongChuPaiResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.t != null && message.hasOwnProperty("t"))
                if (!$util.isInteger(message.t))
                    return "t: integer expected";
            return null;
        };

        /**
         * Creates a MahjongChuPaiResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongChuPaiResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongChuPaiResult} MahjongChuPaiResult
         */
        MahjongChuPaiResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongChuPaiResult)
                return object;
            let message = new $root.msg.MahjongChuPaiResult();
            if (object.t != null)
                message.t = object.t | 0;
            return message;
        };

        /**
         * Creates a plain object from a MahjongChuPaiResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongChuPaiResult
         * @static
         * @param {msg.MahjongChuPaiResult} message MahjongChuPaiResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongChuPaiResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.t = 0;
            if (message.t != null && message.hasOwnProperty("t"))
                object.t = message.t;
            return object;
        };

        /**
         * Converts this MahjongChuPaiResult to JSON.
         * @function toJSON
         * @memberof msg.MahjongChuPaiResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongChuPaiResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongChuPaiResult;
    })();

    msg.MahjongChuPaiBroadcast = (function() {

        /**
         * Properties of a MahjongChuPaiBroadcast.
         * @memberof msg
         * @interface IMahjongChuPaiBroadcast
         * @property {number|null} [userId] MahjongChuPaiBroadcast userId
         * @property {number|null} [t] MahjongChuPaiBroadcast t
         */

        /**
         * Constructs a new MahjongChuPaiBroadcast.
         * @memberof msg
         * @classdesc Represents a MahjongChuPaiBroadcast.
         * @implements IMahjongChuPaiBroadcast
         * @constructor
         * @param {msg.IMahjongChuPaiBroadcast=} [properties] Properties to set
         */
        function MahjongChuPaiBroadcast(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongChuPaiBroadcast userId.
         * @member {number} userId
         * @memberof msg.MahjongChuPaiBroadcast
         * @instance
         */
        MahjongChuPaiBroadcast.prototype.userId = 0;

        /**
         * MahjongChuPaiBroadcast t.
         * @member {number} t
         * @memberof msg.MahjongChuPaiBroadcast
         * @instance
         */
        MahjongChuPaiBroadcast.prototype.t = 0;

        /**
         * Creates a new MahjongChuPaiBroadcast instance using the specified properties.
         * @function create
         * @memberof msg.MahjongChuPaiBroadcast
         * @static
         * @param {msg.IMahjongChuPaiBroadcast=} [properties] Properties to set
         * @returns {msg.MahjongChuPaiBroadcast} MahjongChuPaiBroadcast instance
         */
        MahjongChuPaiBroadcast.create = function create(properties) {
            return new MahjongChuPaiBroadcast(properties);
        };

        /**
         * Encodes the specified MahjongChuPaiBroadcast message. Does not implicitly {@link msg.MahjongChuPaiBroadcast.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongChuPaiBroadcast
         * @static
         * @param {msg.IMahjongChuPaiBroadcast} message MahjongChuPaiBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongChuPaiBroadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userId);
            if (message.t != null && Object.hasOwnProperty.call(message, "t"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.t);
            return writer;
        };

        /**
         * Encodes the specified MahjongChuPaiBroadcast message, length delimited. Does not implicitly {@link msg.MahjongChuPaiBroadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongChuPaiBroadcast
         * @static
         * @param {msg.IMahjongChuPaiBroadcast} message MahjongChuPaiBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongChuPaiBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongChuPaiBroadcast message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongChuPaiBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongChuPaiBroadcast} MahjongChuPaiBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongChuPaiBroadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongChuPaiBroadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.sint32();
                    break;
                case 2:
                    message.t = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongChuPaiBroadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongChuPaiBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongChuPaiBroadcast} MahjongChuPaiBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongChuPaiBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongChuPaiBroadcast message.
         * @function verify
         * @memberof msg.MahjongChuPaiBroadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongChuPaiBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.t != null && message.hasOwnProperty("t"))
                if (!$util.isInteger(message.t))
                    return "t: integer expected";
            return null;
        };

        /**
         * Creates a MahjongChuPaiBroadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongChuPaiBroadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongChuPaiBroadcast} MahjongChuPaiBroadcast
         */
        MahjongChuPaiBroadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongChuPaiBroadcast)
                return object;
            let message = new $root.msg.MahjongChuPaiBroadcast();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.t != null)
                message.t = object.t | 0;
            return message;
        };

        /**
         * Creates a plain object from a MahjongChuPaiBroadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongChuPaiBroadcast
         * @static
         * @param {msg.MahjongChuPaiBroadcast} message MahjongChuPaiBroadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongChuPaiBroadcast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = 0;
                object.t = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.t != null && message.hasOwnProperty("t"))
                object.t = message.t;
            return object;
        };

        /**
         * Converts this MahjongChuPaiBroadcast to JSON.
         * @function toJSON
         * @memberof msg.MahjongChuPaiBroadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongChuPaiBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongChuPaiBroadcast;
    })();

    msg.ChiChoiceQuestion = (function() {

        /**
         * Properties of a ChiChoiceQuestion.
         * @memberof msg
         * @interface IChiChoiceQuestion
         * @property {number|null} [chiT] ChiChoiceQuestion chiT
         * @property {boolean|null} [displayOptionA] ChiChoiceQuestion displayOptionA
         * @property {boolean|null} [displayOptionB] ChiChoiceQuestion displayOptionB
         * @property {boolean|null} [displayOptionC] ChiChoiceQuestion displayOptionC
         */

        /**
         * Constructs a new ChiChoiceQuestion.
         * @memberof msg
         * @classdesc Represents a ChiChoiceQuestion.
         * @implements IChiChoiceQuestion
         * @constructor
         * @param {msg.IChiChoiceQuestion=} [properties] Properties to set
         */
        function ChiChoiceQuestion(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChiChoiceQuestion chiT.
         * @member {number} chiT
         * @memberof msg.ChiChoiceQuestion
         * @instance
         */
        ChiChoiceQuestion.prototype.chiT = 0;

        /**
         * ChiChoiceQuestion displayOptionA.
         * @member {boolean} displayOptionA
         * @memberof msg.ChiChoiceQuestion
         * @instance
         */
        ChiChoiceQuestion.prototype.displayOptionA = false;

        /**
         * ChiChoiceQuestion displayOptionB.
         * @member {boolean} displayOptionB
         * @memberof msg.ChiChoiceQuestion
         * @instance
         */
        ChiChoiceQuestion.prototype.displayOptionB = false;

        /**
         * ChiChoiceQuestion displayOptionC.
         * @member {boolean} displayOptionC
         * @memberof msg.ChiChoiceQuestion
         * @instance
         */
        ChiChoiceQuestion.prototype.displayOptionC = false;

        /**
         * Creates a new ChiChoiceQuestion instance using the specified properties.
         * @function create
         * @memberof msg.ChiChoiceQuestion
         * @static
         * @param {msg.IChiChoiceQuestion=} [properties] Properties to set
         * @returns {msg.ChiChoiceQuestion} ChiChoiceQuestion instance
         */
        ChiChoiceQuestion.create = function create(properties) {
            return new ChiChoiceQuestion(properties);
        };

        /**
         * Encodes the specified ChiChoiceQuestion message. Does not implicitly {@link msg.ChiChoiceQuestion.verify|verify} messages.
         * @function encode
         * @memberof msg.ChiChoiceQuestion
         * @static
         * @param {msg.IChiChoiceQuestion} message ChiChoiceQuestion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChiChoiceQuestion.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chiT != null && Object.hasOwnProperty.call(message, "chiT"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.chiT);
            if (message.displayOptionA != null && Object.hasOwnProperty.call(message, "displayOptionA"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.displayOptionA);
            if (message.displayOptionB != null && Object.hasOwnProperty.call(message, "displayOptionB"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.displayOptionB);
            if (message.displayOptionC != null && Object.hasOwnProperty.call(message, "displayOptionC"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.displayOptionC);
            return writer;
        };

        /**
         * Encodes the specified ChiChoiceQuestion message, length delimited. Does not implicitly {@link msg.ChiChoiceQuestion.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.ChiChoiceQuestion
         * @static
         * @param {msg.IChiChoiceQuestion} message ChiChoiceQuestion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChiChoiceQuestion.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChiChoiceQuestion message from the specified reader or buffer.
         * @function decode
         * @memberof msg.ChiChoiceQuestion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.ChiChoiceQuestion} ChiChoiceQuestion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChiChoiceQuestion.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.ChiChoiceQuestion();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.chiT = reader.sint32();
                    break;
                case 2:
                    message.displayOptionA = reader.bool();
                    break;
                case 3:
                    message.displayOptionB = reader.bool();
                    break;
                case 4:
                    message.displayOptionC = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChiChoiceQuestion message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.ChiChoiceQuestion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.ChiChoiceQuestion} ChiChoiceQuestion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChiChoiceQuestion.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChiChoiceQuestion message.
         * @function verify
         * @memberof msg.ChiChoiceQuestion
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChiChoiceQuestion.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chiT != null && message.hasOwnProperty("chiT"))
                if (!$util.isInteger(message.chiT))
                    return "chiT: integer expected";
            if (message.displayOptionA != null && message.hasOwnProperty("displayOptionA"))
                if (typeof message.displayOptionA !== "boolean")
                    return "displayOptionA: boolean expected";
            if (message.displayOptionB != null && message.hasOwnProperty("displayOptionB"))
                if (typeof message.displayOptionB !== "boolean")
                    return "displayOptionB: boolean expected";
            if (message.displayOptionC != null && message.hasOwnProperty("displayOptionC"))
                if (typeof message.displayOptionC !== "boolean")
                    return "displayOptionC: boolean expected";
            return null;
        };

        /**
         * Creates a ChiChoiceQuestion message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.ChiChoiceQuestion
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.ChiChoiceQuestion} ChiChoiceQuestion
         */
        ChiChoiceQuestion.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.ChiChoiceQuestion)
                return object;
            let message = new $root.msg.ChiChoiceQuestion();
            if (object.chiT != null)
                message.chiT = object.chiT | 0;
            if (object.displayOptionA != null)
                message.displayOptionA = Boolean(object.displayOptionA);
            if (object.displayOptionB != null)
                message.displayOptionB = Boolean(object.displayOptionB);
            if (object.displayOptionC != null)
                message.displayOptionC = Boolean(object.displayOptionC);
            return message;
        };

        /**
         * Creates a plain object from a ChiChoiceQuestion message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.ChiChoiceQuestion
         * @static
         * @param {msg.ChiChoiceQuestion} message ChiChoiceQuestion
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChiChoiceQuestion.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.chiT = 0;
                object.displayOptionA = false;
                object.displayOptionB = false;
                object.displayOptionC = false;
            }
            if (message.chiT != null && message.hasOwnProperty("chiT"))
                object.chiT = message.chiT;
            if (message.displayOptionA != null && message.hasOwnProperty("displayOptionA"))
                object.displayOptionA = message.displayOptionA;
            if (message.displayOptionB != null && message.hasOwnProperty("displayOptionB"))
                object.displayOptionB = message.displayOptionB;
            if (message.displayOptionC != null && message.hasOwnProperty("displayOptionC"))
                object.displayOptionC = message.displayOptionC;
            return object;
        };

        /**
         * Converts this ChiChoiceQuestion to JSON.
         * @function toJSON
         * @memberof msg.ChiChoiceQuestion
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChiChoiceQuestion.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChiChoiceQuestion;
    })();

    msg.LiangFengChoiceQuestion = (function() {

        /**
         * Properties of a LiangFengChoiceQuestion.
         * @memberof msg
         * @interface ILiangFengChoiceQuestion
         * @property {boolean|null} [luanMao] LiangFengChoiceQuestion luanMao
         * @property {boolean|null} [displayOptionDongFeng] LiangFengChoiceQuestion displayOptionDongFeng
         * @property {boolean|null} [displayOptionNanFeng] LiangFengChoiceQuestion displayOptionNanFeng
         * @property {boolean|null} [displayOptionXiFeng] LiangFengChoiceQuestion displayOptionXiFeng
         * @property {boolean|null} [displayOptionBeiFeng] LiangFengChoiceQuestion displayOptionBeiFeng
         * @property {boolean|null} [displayOptionHongZhong] LiangFengChoiceQuestion displayOptionHongZhong
         * @property {boolean|null} [displayOptionFaCai] LiangFengChoiceQuestion displayOptionFaCai
         * @property {boolean|null} [displayOptionBaiBan] LiangFengChoiceQuestion displayOptionBaiBan
         */

        /**
         * Constructs a new LiangFengChoiceQuestion.
         * @memberof msg
         * @classdesc Represents a LiangFengChoiceQuestion.
         * @implements ILiangFengChoiceQuestion
         * @constructor
         * @param {msg.ILiangFengChoiceQuestion=} [properties] Properties to set
         */
        function LiangFengChoiceQuestion(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LiangFengChoiceQuestion luanMao.
         * @member {boolean} luanMao
         * @memberof msg.LiangFengChoiceQuestion
         * @instance
         */
        LiangFengChoiceQuestion.prototype.luanMao = false;

        /**
         * LiangFengChoiceQuestion displayOptionDongFeng.
         * @member {boolean} displayOptionDongFeng
         * @memberof msg.LiangFengChoiceQuestion
         * @instance
         */
        LiangFengChoiceQuestion.prototype.displayOptionDongFeng = false;

        /**
         * LiangFengChoiceQuestion displayOptionNanFeng.
         * @member {boolean} displayOptionNanFeng
         * @memberof msg.LiangFengChoiceQuestion
         * @instance
         */
        LiangFengChoiceQuestion.prototype.displayOptionNanFeng = false;

        /**
         * LiangFengChoiceQuestion displayOptionXiFeng.
         * @member {boolean} displayOptionXiFeng
         * @memberof msg.LiangFengChoiceQuestion
         * @instance
         */
        LiangFengChoiceQuestion.prototype.displayOptionXiFeng = false;

        /**
         * LiangFengChoiceQuestion displayOptionBeiFeng.
         * @member {boolean} displayOptionBeiFeng
         * @memberof msg.LiangFengChoiceQuestion
         * @instance
         */
        LiangFengChoiceQuestion.prototype.displayOptionBeiFeng = false;

        /**
         * LiangFengChoiceQuestion displayOptionHongZhong.
         * @member {boolean} displayOptionHongZhong
         * @memberof msg.LiangFengChoiceQuestion
         * @instance
         */
        LiangFengChoiceQuestion.prototype.displayOptionHongZhong = false;

        /**
         * LiangFengChoiceQuestion displayOptionFaCai.
         * @member {boolean} displayOptionFaCai
         * @memberof msg.LiangFengChoiceQuestion
         * @instance
         */
        LiangFengChoiceQuestion.prototype.displayOptionFaCai = false;

        /**
         * LiangFengChoiceQuestion displayOptionBaiBan.
         * @member {boolean} displayOptionBaiBan
         * @memberof msg.LiangFengChoiceQuestion
         * @instance
         */
        LiangFengChoiceQuestion.prototype.displayOptionBaiBan = false;

        /**
         * Creates a new LiangFengChoiceQuestion instance using the specified properties.
         * @function create
         * @memberof msg.LiangFengChoiceQuestion
         * @static
         * @param {msg.ILiangFengChoiceQuestion=} [properties] Properties to set
         * @returns {msg.LiangFengChoiceQuestion} LiangFengChoiceQuestion instance
         */
        LiangFengChoiceQuestion.create = function create(properties) {
            return new LiangFengChoiceQuestion(properties);
        };

        /**
         * Encodes the specified LiangFengChoiceQuestion message. Does not implicitly {@link msg.LiangFengChoiceQuestion.verify|verify} messages.
         * @function encode
         * @memberof msg.LiangFengChoiceQuestion
         * @static
         * @param {msg.ILiangFengChoiceQuestion} message LiangFengChoiceQuestion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LiangFengChoiceQuestion.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.luanMao != null && Object.hasOwnProperty.call(message, "luanMao"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.luanMao);
            if (message.displayOptionDongFeng != null && Object.hasOwnProperty.call(message, "displayOptionDongFeng"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.displayOptionDongFeng);
            if (message.displayOptionNanFeng != null && Object.hasOwnProperty.call(message, "displayOptionNanFeng"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.displayOptionNanFeng);
            if (message.displayOptionXiFeng != null && Object.hasOwnProperty.call(message, "displayOptionXiFeng"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.displayOptionXiFeng);
            if (message.displayOptionBeiFeng != null && Object.hasOwnProperty.call(message, "displayOptionBeiFeng"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.displayOptionBeiFeng);
            if (message.displayOptionHongZhong != null && Object.hasOwnProperty.call(message, "displayOptionHongZhong"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.displayOptionHongZhong);
            if (message.displayOptionFaCai != null && Object.hasOwnProperty.call(message, "displayOptionFaCai"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.displayOptionFaCai);
            if (message.displayOptionBaiBan != null && Object.hasOwnProperty.call(message, "displayOptionBaiBan"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.displayOptionBaiBan);
            return writer;
        };

        /**
         * Encodes the specified LiangFengChoiceQuestion message, length delimited. Does not implicitly {@link msg.LiangFengChoiceQuestion.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.LiangFengChoiceQuestion
         * @static
         * @param {msg.ILiangFengChoiceQuestion} message LiangFengChoiceQuestion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LiangFengChoiceQuestion.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LiangFengChoiceQuestion message from the specified reader or buffer.
         * @function decode
         * @memberof msg.LiangFengChoiceQuestion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.LiangFengChoiceQuestion} LiangFengChoiceQuestion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LiangFengChoiceQuestion.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.LiangFengChoiceQuestion();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.luanMao = reader.bool();
                    break;
                case 2:
                    message.displayOptionDongFeng = reader.bool();
                    break;
                case 3:
                    message.displayOptionNanFeng = reader.bool();
                    break;
                case 4:
                    message.displayOptionXiFeng = reader.bool();
                    break;
                case 5:
                    message.displayOptionBeiFeng = reader.bool();
                    break;
                case 6:
                    message.displayOptionHongZhong = reader.bool();
                    break;
                case 7:
                    message.displayOptionFaCai = reader.bool();
                    break;
                case 8:
                    message.displayOptionBaiBan = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LiangFengChoiceQuestion message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.LiangFengChoiceQuestion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.LiangFengChoiceQuestion} LiangFengChoiceQuestion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LiangFengChoiceQuestion.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LiangFengChoiceQuestion message.
         * @function verify
         * @memberof msg.LiangFengChoiceQuestion
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LiangFengChoiceQuestion.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.luanMao != null && message.hasOwnProperty("luanMao"))
                if (typeof message.luanMao !== "boolean")
                    return "luanMao: boolean expected";
            if (message.displayOptionDongFeng != null && message.hasOwnProperty("displayOptionDongFeng"))
                if (typeof message.displayOptionDongFeng !== "boolean")
                    return "displayOptionDongFeng: boolean expected";
            if (message.displayOptionNanFeng != null && message.hasOwnProperty("displayOptionNanFeng"))
                if (typeof message.displayOptionNanFeng !== "boolean")
                    return "displayOptionNanFeng: boolean expected";
            if (message.displayOptionXiFeng != null && message.hasOwnProperty("displayOptionXiFeng"))
                if (typeof message.displayOptionXiFeng !== "boolean")
                    return "displayOptionXiFeng: boolean expected";
            if (message.displayOptionBeiFeng != null && message.hasOwnProperty("displayOptionBeiFeng"))
                if (typeof message.displayOptionBeiFeng !== "boolean")
                    return "displayOptionBeiFeng: boolean expected";
            if (message.displayOptionHongZhong != null && message.hasOwnProperty("displayOptionHongZhong"))
                if (typeof message.displayOptionHongZhong !== "boolean")
                    return "displayOptionHongZhong: boolean expected";
            if (message.displayOptionFaCai != null && message.hasOwnProperty("displayOptionFaCai"))
                if (typeof message.displayOptionFaCai !== "boolean")
                    return "displayOptionFaCai: boolean expected";
            if (message.displayOptionBaiBan != null && message.hasOwnProperty("displayOptionBaiBan"))
                if (typeof message.displayOptionBaiBan !== "boolean")
                    return "displayOptionBaiBan: boolean expected";
            return null;
        };

        /**
         * Creates a LiangFengChoiceQuestion message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.LiangFengChoiceQuestion
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.LiangFengChoiceQuestion} LiangFengChoiceQuestion
         */
        LiangFengChoiceQuestion.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.LiangFengChoiceQuestion)
                return object;
            let message = new $root.msg.LiangFengChoiceQuestion();
            if (object.luanMao != null)
                message.luanMao = Boolean(object.luanMao);
            if (object.displayOptionDongFeng != null)
                message.displayOptionDongFeng = Boolean(object.displayOptionDongFeng);
            if (object.displayOptionNanFeng != null)
                message.displayOptionNanFeng = Boolean(object.displayOptionNanFeng);
            if (object.displayOptionXiFeng != null)
                message.displayOptionXiFeng = Boolean(object.displayOptionXiFeng);
            if (object.displayOptionBeiFeng != null)
                message.displayOptionBeiFeng = Boolean(object.displayOptionBeiFeng);
            if (object.displayOptionHongZhong != null)
                message.displayOptionHongZhong = Boolean(object.displayOptionHongZhong);
            if (object.displayOptionFaCai != null)
                message.displayOptionFaCai = Boolean(object.displayOptionFaCai);
            if (object.displayOptionBaiBan != null)
                message.displayOptionBaiBan = Boolean(object.displayOptionBaiBan);
            return message;
        };

        /**
         * Creates a plain object from a LiangFengChoiceQuestion message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.LiangFengChoiceQuestion
         * @static
         * @param {msg.LiangFengChoiceQuestion} message LiangFengChoiceQuestion
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LiangFengChoiceQuestion.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.luanMao = false;
                object.displayOptionDongFeng = false;
                object.displayOptionNanFeng = false;
                object.displayOptionXiFeng = false;
                object.displayOptionBeiFeng = false;
                object.displayOptionHongZhong = false;
                object.displayOptionFaCai = false;
                object.displayOptionBaiBan = false;
            }
            if (message.luanMao != null && message.hasOwnProperty("luanMao"))
                object.luanMao = message.luanMao;
            if (message.displayOptionDongFeng != null && message.hasOwnProperty("displayOptionDongFeng"))
                object.displayOptionDongFeng = message.displayOptionDongFeng;
            if (message.displayOptionNanFeng != null && message.hasOwnProperty("displayOptionNanFeng"))
                object.displayOptionNanFeng = message.displayOptionNanFeng;
            if (message.displayOptionXiFeng != null && message.hasOwnProperty("displayOptionXiFeng"))
                object.displayOptionXiFeng = message.displayOptionXiFeng;
            if (message.displayOptionBeiFeng != null && message.hasOwnProperty("displayOptionBeiFeng"))
                object.displayOptionBeiFeng = message.displayOptionBeiFeng;
            if (message.displayOptionHongZhong != null && message.hasOwnProperty("displayOptionHongZhong"))
                object.displayOptionHongZhong = message.displayOptionHongZhong;
            if (message.displayOptionFaCai != null && message.hasOwnProperty("displayOptionFaCai"))
                object.displayOptionFaCai = message.displayOptionFaCai;
            if (message.displayOptionBaiBan != null && message.hasOwnProperty("displayOptionBaiBan"))
                object.displayOptionBaiBan = message.displayOptionBaiBan;
            return object;
        };

        /**
         * Converts this LiangFengChoiceQuestion to JSON.
         * @function toJSON
         * @memberof msg.LiangFengChoiceQuestion
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LiangFengChoiceQuestion.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LiangFengChoiceQuestion;
    })();

    msg.MahjongChiPengGangHuOpHintResult = (function() {

        /**
         * Properties of a MahjongChiPengGangHuOpHintResult.
         * @memberof msg
         * @interface IMahjongChiPengGangHuOpHintResult
         * @property {boolean|null} [opHintChi] MahjongChiPengGangHuOpHintResult opHintChi
         * @property {msg.IChiChoiceQuestion|null} [chiChoiceQuestion] MahjongChiPengGangHuOpHintResult chiChoiceQuestion
         * @property {boolean|null} [opHintPeng] MahjongChiPengGangHuOpHintResult opHintPeng
         * @property {boolean|null} [opHintGang] MahjongChiPengGangHuOpHintResult opHintGang
         * @property {boolean|null} [opHintHu] MahjongChiPengGangHuOpHintResult opHintHu
         * @property {boolean|null} [opHintLiangFeng] MahjongChiPengGangHuOpHintResult opHintLiangFeng
         * @property {msg.ILiangFengChoiceQuestion|null} [liangFengChoiceQuestion] MahjongChiPengGangHuOpHintResult liangFengChoiceQuestion
         * @property {boolean|null} [opHintBuFeng] MahjongChiPengGangHuOpHintResult opHintBuFeng
         */

        /**
         * Constructs a new MahjongChiPengGangHuOpHintResult.
         * @memberof msg
         * @classdesc Represents a MahjongChiPengGangHuOpHintResult.
         * @implements IMahjongChiPengGangHuOpHintResult
         * @constructor
         * @param {msg.IMahjongChiPengGangHuOpHintResult=} [properties] Properties to set
         */
        function MahjongChiPengGangHuOpHintResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongChiPengGangHuOpHintResult opHintChi.
         * @member {boolean} opHintChi
         * @memberof msg.MahjongChiPengGangHuOpHintResult
         * @instance
         */
        MahjongChiPengGangHuOpHintResult.prototype.opHintChi = false;

        /**
         * MahjongChiPengGangHuOpHintResult chiChoiceQuestion.
         * @member {msg.IChiChoiceQuestion|null|undefined} chiChoiceQuestion
         * @memberof msg.MahjongChiPengGangHuOpHintResult
         * @instance
         */
        MahjongChiPengGangHuOpHintResult.prototype.chiChoiceQuestion = null;

        /**
         * MahjongChiPengGangHuOpHintResult opHintPeng.
         * @member {boolean} opHintPeng
         * @memberof msg.MahjongChiPengGangHuOpHintResult
         * @instance
         */
        MahjongChiPengGangHuOpHintResult.prototype.opHintPeng = false;

        /**
         * MahjongChiPengGangHuOpHintResult opHintGang.
         * @member {boolean} opHintGang
         * @memberof msg.MahjongChiPengGangHuOpHintResult
         * @instance
         */
        MahjongChiPengGangHuOpHintResult.prototype.opHintGang = false;

        /**
         * MahjongChiPengGangHuOpHintResult opHintHu.
         * @member {boolean} opHintHu
         * @memberof msg.MahjongChiPengGangHuOpHintResult
         * @instance
         */
        MahjongChiPengGangHuOpHintResult.prototype.opHintHu = false;

        /**
         * MahjongChiPengGangHuOpHintResult opHintLiangFeng.
         * @member {boolean} opHintLiangFeng
         * @memberof msg.MahjongChiPengGangHuOpHintResult
         * @instance
         */
        MahjongChiPengGangHuOpHintResult.prototype.opHintLiangFeng = false;

        /**
         * MahjongChiPengGangHuOpHintResult liangFengChoiceQuestion.
         * @member {msg.ILiangFengChoiceQuestion|null|undefined} liangFengChoiceQuestion
         * @memberof msg.MahjongChiPengGangHuOpHintResult
         * @instance
         */
        MahjongChiPengGangHuOpHintResult.prototype.liangFengChoiceQuestion = null;

        /**
         * MahjongChiPengGangHuOpHintResult opHintBuFeng.
         * @member {boolean} opHintBuFeng
         * @memberof msg.MahjongChiPengGangHuOpHintResult
         * @instance
         */
        MahjongChiPengGangHuOpHintResult.prototype.opHintBuFeng = false;

        /**
         * Creates a new MahjongChiPengGangHuOpHintResult instance using the specified properties.
         * @function create
         * @memberof msg.MahjongChiPengGangHuOpHintResult
         * @static
         * @param {msg.IMahjongChiPengGangHuOpHintResult=} [properties] Properties to set
         * @returns {msg.MahjongChiPengGangHuOpHintResult} MahjongChiPengGangHuOpHintResult instance
         */
        MahjongChiPengGangHuOpHintResult.create = function create(properties) {
            return new MahjongChiPengGangHuOpHintResult(properties);
        };

        /**
         * Encodes the specified MahjongChiPengGangHuOpHintResult message. Does not implicitly {@link msg.MahjongChiPengGangHuOpHintResult.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongChiPengGangHuOpHintResult
         * @static
         * @param {msg.IMahjongChiPengGangHuOpHintResult} message MahjongChiPengGangHuOpHintResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongChiPengGangHuOpHintResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.opHintChi != null && Object.hasOwnProperty.call(message, "opHintChi"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.opHintChi);
            if (message.chiChoiceQuestion != null && Object.hasOwnProperty.call(message, "chiChoiceQuestion"))
                $root.msg.ChiChoiceQuestion.encode(message.chiChoiceQuestion, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.opHintPeng != null && Object.hasOwnProperty.call(message, "opHintPeng"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.opHintPeng);
            if (message.opHintGang != null && Object.hasOwnProperty.call(message, "opHintGang"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.opHintGang);
            if (message.opHintHu != null && Object.hasOwnProperty.call(message, "opHintHu"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.opHintHu);
            if (message.opHintLiangFeng != null && Object.hasOwnProperty.call(message, "opHintLiangFeng"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.opHintLiangFeng);
            if (message.liangFengChoiceQuestion != null && Object.hasOwnProperty.call(message, "liangFengChoiceQuestion"))
                $root.msg.LiangFengChoiceQuestion.encode(message.liangFengChoiceQuestion, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.opHintBuFeng != null && Object.hasOwnProperty.call(message, "opHintBuFeng"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.opHintBuFeng);
            return writer;
        };

        /**
         * Encodes the specified MahjongChiPengGangHuOpHintResult message, length delimited. Does not implicitly {@link msg.MahjongChiPengGangHuOpHintResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongChiPengGangHuOpHintResult
         * @static
         * @param {msg.IMahjongChiPengGangHuOpHintResult} message MahjongChiPengGangHuOpHintResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongChiPengGangHuOpHintResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongChiPengGangHuOpHintResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongChiPengGangHuOpHintResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongChiPengGangHuOpHintResult} MahjongChiPengGangHuOpHintResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongChiPengGangHuOpHintResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongChiPengGangHuOpHintResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.opHintChi = reader.bool();
                    break;
                case 2:
                    message.chiChoiceQuestion = $root.msg.ChiChoiceQuestion.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.opHintPeng = reader.bool();
                    break;
                case 4:
                    message.opHintGang = reader.bool();
                    break;
                case 5:
                    message.opHintHu = reader.bool();
                    break;
                case 6:
                    message.opHintLiangFeng = reader.bool();
                    break;
                case 7:
                    message.liangFengChoiceQuestion = $root.msg.LiangFengChoiceQuestion.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.opHintBuFeng = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongChiPengGangHuOpHintResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongChiPengGangHuOpHintResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongChiPengGangHuOpHintResult} MahjongChiPengGangHuOpHintResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongChiPengGangHuOpHintResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongChiPengGangHuOpHintResult message.
         * @function verify
         * @memberof msg.MahjongChiPengGangHuOpHintResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongChiPengGangHuOpHintResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.opHintChi != null && message.hasOwnProperty("opHintChi"))
                if (typeof message.opHintChi !== "boolean")
                    return "opHintChi: boolean expected";
            if (message.chiChoiceQuestion != null && message.hasOwnProperty("chiChoiceQuestion")) {
                let error = $root.msg.ChiChoiceQuestion.verify(message.chiChoiceQuestion);
                if (error)
                    return "chiChoiceQuestion." + error;
            }
            if (message.opHintPeng != null && message.hasOwnProperty("opHintPeng"))
                if (typeof message.opHintPeng !== "boolean")
                    return "opHintPeng: boolean expected";
            if (message.opHintGang != null && message.hasOwnProperty("opHintGang"))
                if (typeof message.opHintGang !== "boolean")
                    return "opHintGang: boolean expected";
            if (message.opHintHu != null && message.hasOwnProperty("opHintHu"))
                if (typeof message.opHintHu !== "boolean")
                    return "opHintHu: boolean expected";
            if (message.opHintLiangFeng != null && message.hasOwnProperty("opHintLiangFeng"))
                if (typeof message.opHintLiangFeng !== "boolean")
                    return "opHintLiangFeng: boolean expected";
            if (message.liangFengChoiceQuestion != null && message.hasOwnProperty("liangFengChoiceQuestion")) {
                let error = $root.msg.LiangFengChoiceQuestion.verify(message.liangFengChoiceQuestion);
                if (error)
                    return "liangFengChoiceQuestion." + error;
            }
            if (message.opHintBuFeng != null && message.hasOwnProperty("opHintBuFeng"))
                if (typeof message.opHintBuFeng !== "boolean")
                    return "opHintBuFeng: boolean expected";
            return null;
        };

        /**
         * Creates a MahjongChiPengGangHuOpHintResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongChiPengGangHuOpHintResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongChiPengGangHuOpHintResult} MahjongChiPengGangHuOpHintResult
         */
        MahjongChiPengGangHuOpHintResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongChiPengGangHuOpHintResult)
                return object;
            let message = new $root.msg.MahjongChiPengGangHuOpHintResult();
            if (object.opHintChi != null)
                message.opHintChi = Boolean(object.opHintChi);
            if (object.chiChoiceQuestion != null) {
                if (typeof object.chiChoiceQuestion !== "object")
                    throw TypeError(".msg.MahjongChiPengGangHuOpHintResult.chiChoiceQuestion: object expected");
                message.chiChoiceQuestion = $root.msg.ChiChoiceQuestion.fromObject(object.chiChoiceQuestion);
            }
            if (object.opHintPeng != null)
                message.opHintPeng = Boolean(object.opHintPeng);
            if (object.opHintGang != null)
                message.opHintGang = Boolean(object.opHintGang);
            if (object.opHintHu != null)
                message.opHintHu = Boolean(object.opHintHu);
            if (object.opHintLiangFeng != null)
                message.opHintLiangFeng = Boolean(object.opHintLiangFeng);
            if (object.liangFengChoiceQuestion != null) {
                if (typeof object.liangFengChoiceQuestion !== "object")
                    throw TypeError(".msg.MahjongChiPengGangHuOpHintResult.liangFengChoiceQuestion: object expected");
                message.liangFengChoiceQuestion = $root.msg.LiangFengChoiceQuestion.fromObject(object.liangFengChoiceQuestion);
            }
            if (object.opHintBuFeng != null)
                message.opHintBuFeng = Boolean(object.opHintBuFeng);
            return message;
        };

        /**
         * Creates a plain object from a MahjongChiPengGangHuOpHintResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongChiPengGangHuOpHintResult
         * @static
         * @param {msg.MahjongChiPengGangHuOpHintResult} message MahjongChiPengGangHuOpHintResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongChiPengGangHuOpHintResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.opHintChi = false;
                object.chiChoiceQuestion = null;
                object.opHintPeng = false;
                object.opHintGang = false;
                object.opHintHu = false;
                object.opHintLiangFeng = false;
                object.liangFengChoiceQuestion = null;
                object.opHintBuFeng = false;
            }
            if (message.opHintChi != null && message.hasOwnProperty("opHintChi"))
                object.opHintChi = message.opHintChi;
            if (message.chiChoiceQuestion != null && message.hasOwnProperty("chiChoiceQuestion"))
                object.chiChoiceQuestion = $root.msg.ChiChoiceQuestion.toObject(message.chiChoiceQuestion, options);
            if (message.opHintPeng != null && message.hasOwnProperty("opHintPeng"))
                object.opHintPeng = message.opHintPeng;
            if (message.opHintGang != null && message.hasOwnProperty("opHintGang"))
                object.opHintGang = message.opHintGang;
            if (message.opHintHu != null && message.hasOwnProperty("opHintHu"))
                object.opHintHu = message.opHintHu;
            if (message.opHintLiangFeng != null && message.hasOwnProperty("opHintLiangFeng"))
                object.opHintLiangFeng = message.opHintLiangFeng;
            if (message.liangFengChoiceQuestion != null && message.hasOwnProperty("liangFengChoiceQuestion"))
                object.liangFengChoiceQuestion = $root.msg.LiangFengChoiceQuestion.toObject(message.liangFengChoiceQuestion, options);
            if (message.opHintBuFeng != null && message.hasOwnProperty("opHintBuFeng"))
                object.opHintBuFeng = message.opHintBuFeng;
            return object;
        };

        /**
         * Converts this MahjongChiPengGangHuOpHintResult to JSON.
         * @function toJSON
         * @memberof msg.MahjongChiPengGangHuOpHintResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongChiPengGangHuOpHintResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongChiPengGangHuOpHintResult;
    })();

    msg.MahjongChiCmd = (function() {

        /**
         * Properties of a MahjongChiCmd.
         * @memberof msg
         * @interface IMahjongChiCmd
         * @property {number|null} [selectedOption] MahjongChiCmd selectedOption
         */

        /**
         * Constructs a new MahjongChiCmd.
         * @memberof msg
         * @classdesc Represents a MahjongChiCmd.
         * @implements IMahjongChiCmd
         * @constructor
         * @param {msg.IMahjongChiCmd=} [properties] Properties to set
         */
        function MahjongChiCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongChiCmd selectedOption.
         * @member {number} selectedOption
         * @memberof msg.MahjongChiCmd
         * @instance
         */
        MahjongChiCmd.prototype.selectedOption = 0;

        /**
         * Creates a new MahjongChiCmd instance using the specified properties.
         * @function create
         * @memberof msg.MahjongChiCmd
         * @static
         * @param {msg.IMahjongChiCmd=} [properties] Properties to set
         * @returns {msg.MahjongChiCmd} MahjongChiCmd instance
         */
        MahjongChiCmd.create = function create(properties) {
            return new MahjongChiCmd(properties);
        };

        /**
         * Encodes the specified MahjongChiCmd message. Does not implicitly {@link msg.MahjongChiCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongChiCmd
         * @static
         * @param {msg.IMahjongChiCmd} message MahjongChiCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongChiCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.selectedOption != null && Object.hasOwnProperty.call(message, "selectedOption"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.selectedOption);
            return writer;
        };

        /**
         * Encodes the specified MahjongChiCmd message, length delimited. Does not implicitly {@link msg.MahjongChiCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongChiCmd
         * @static
         * @param {msg.IMahjongChiCmd} message MahjongChiCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongChiCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongChiCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongChiCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongChiCmd} MahjongChiCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongChiCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongChiCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.selectedOption = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongChiCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongChiCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongChiCmd} MahjongChiCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongChiCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongChiCmd message.
         * @function verify
         * @memberof msg.MahjongChiCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongChiCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.selectedOption != null && message.hasOwnProperty("selectedOption"))
                if (!$util.isInteger(message.selectedOption))
                    return "selectedOption: integer expected";
            return null;
        };

        /**
         * Creates a MahjongChiCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongChiCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongChiCmd} MahjongChiCmd
         */
        MahjongChiCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongChiCmd)
                return object;
            let message = new $root.msg.MahjongChiCmd();
            if (object.selectedOption != null)
                message.selectedOption = object.selectedOption | 0;
            return message;
        };

        /**
         * Creates a plain object from a MahjongChiCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongChiCmd
         * @static
         * @param {msg.MahjongChiCmd} message MahjongChiCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongChiCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.selectedOption = 0;
            if (message.selectedOption != null && message.hasOwnProperty("selectedOption"))
                object.selectedOption = message.selectedOption;
            return object;
        };

        /**
         * Converts this MahjongChiCmd to JSON.
         * @function toJSON
         * @memberof msg.MahjongChiCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongChiCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongChiCmd;
    })();

    msg.MahjongChiResult = (function() {

        /**
         * Properties of a MahjongChiResult.
         * @memberof msg
         * @interface IMahjongChiResult
         * @property {msg.IMahjongChiPengGang|null} [mahjongChi] MahjongChiResult mahjongChi
         */

        /**
         * Constructs a new MahjongChiResult.
         * @memberof msg
         * @classdesc Represents a MahjongChiResult.
         * @implements IMahjongChiResult
         * @constructor
         * @param {msg.IMahjongChiResult=} [properties] Properties to set
         */
        function MahjongChiResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongChiResult mahjongChi.
         * @member {msg.IMahjongChiPengGang|null|undefined} mahjongChi
         * @memberof msg.MahjongChiResult
         * @instance
         */
        MahjongChiResult.prototype.mahjongChi = null;

        /**
         * Creates a new MahjongChiResult instance using the specified properties.
         * @function create
         * @memberof msg.MahjongChiResult
         * @static
         * @param {msg.IMahjongChiResult=} [properties] Properties to set
         * @returns {msg.MahjongChiResult} MahjongChiResult instance
         */
        MahjongChiResult.create = function create(properties) {
            return new MahjongChiResult(properties);
        };

        /**
         * Encodes the specified MahjongChiResult message. Does not implicitly {@link msg.MahjongChiResult.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongChiResult
         * @static
         * @param {msg.IMahjongChiResult} message MahjongChiResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongChiResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mahjongChi != null && Object.hasOwnProperty.call(message, "mahjongChi"))
                $root.msg.MahjongChiPengGang.encode(message.mahjongChi, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MahjongChiResult message, length delimited. Does not implicitly {@link msg.MahjongChiResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongChiResult
         * @static
         * @param {msg.IMahjongChiResult} message MahjongChiResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongChiResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongChiResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongChiResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongChiResult} MahjongChiResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongChiResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongChiResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mahjongChi = $root.msg.MahjongChiPengGang.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongChiResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongChiResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongChiResult} MahjongChiResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongChiResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongChiResult message.
         * @function verify
         * @memberof msg.MahjongChiResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongChiResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mahjongChi != null && message.hasOwnProperty("mahjongChi")) {
                let error = $root.msg.MahjongChiPengGang.verify(message.mahjongChi);
                if (error)
                    return "mahjongChi." + error;
            }
            return null;
        };

        /**
         * Creates a MahjongChiResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongChiResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongChiResult} MahjongChiResult
         */
        MahjongChiResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongChiResult)
                return object;
            let message = new $root.msg.MahjongChiResult();
            if (object.mahjongChi != null) {
                if (typeof object.mahjongChi !== "object")
                    throw TypeError(".msg.MahjongChiResult.mahjongChi: object expected");
                message.mahjongChi = $root.msg.MahjongChiPengGang.fromObject(object.mahjongChi);
            }
            return message;
        };

        /**
         * Creates a plain object from a MahjongChiResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongChiResult
         * @static
         * @param {msg.MahjongChiResult} message MahjongChiResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongChiResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.mahjongChi = null;
            if (message.mahjongChi != null && message.hasOwnProperty("mahjongChi"))
                object.mahjongChi = $root.msg.MahjongChiPengGang.toObject(message.mahjongChi, options);
            return object;
        };

        /**
         * Converts this MahjongChiResult to JSON.
         * @function toJSON
         * @memberof msg.MahjongChiResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongChiResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongChiResult;
    })();

    msg.MahjongChiBroadcast = (function() {

        /**
         * Properties of a MahjongChiBroadcast.
         * @memberof msg
         * @interface IMahjongChiBroadcast
         * @property {number|null} [userId] MahjongChiBroadcast userId
         * @property {msg.IMahjongChiPengGang|null} [mahjongChi] MahjongChiBroadcast mahjongChi
         */

        /**
         * Constructs a new MahjongChiBroadcast.
         * @memberof msg
         * @classdesc Represents a MahjongChiBroadcast.
         * @implements IMahjongChiBroadcast
         * @constructor
         * @param {msg.IMahjongChiBroadcast=} [properties] Properties to set
         */
        function MahjongChiBroadcast(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongChiBroadcast userId.
         * @member {number} userId
         * @memberof msg.MahjongChiBroadcast
         * @instance
         */
        MahjongChiBroadcast.prototype.userId = 0;

        /**
         * MahjongChiBroadcast mahjongChi.
         * @member {msg.IMahjongChiPengGang|null|undefined} mahjongChi
         * @memberof msg.MahjongChiBroadcast
         * @instance
         */
        MahjongChiBroadcast.prototype.mahjongChi = null;

        /**
         * Creates a new MahjongChiBroadcast instance using the specified properties.
         * @function create
         * @memberof msg.MahjongChiBroadcast
         * @static
         * @param {msg.IMahjongChiBroadcast=} [properties] Properties to set
         * @returns {msg.MahjongChiBroadcast} MahjongChiBroadcast instance
         */
        MahjongChiBroadcast.create = function create(properties) {
            return new MahjongChiBroadcast(properties);
        };

        /**
         * Encodes the specified MahjongChiBroadcast message. Does not implicitly {@link msg.MahjongChiBroadcast.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongChiBroadcast
         * @static
         * @param {msg.IMahjongChiBroadcast} message MahjongChiBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongChiBroadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userId);
            if (message.mahjongChi != null && Object.hasOwnProperty.call(message, "mahjongChi"))
                $root.msg.MahjongChiPengGang.encode(message.mahjongChi, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MahjongChiBroadcast message, length delimited. Does not implicitly {@link msg.MahjongChiBroadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongChiBroadcast
         * @static
         * @param {msg.IMahjongChiBroadcast} message MahjongChiBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongChiBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongChiBroadcast message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongChiBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongChiBroadcast} MahjongChiBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongChiBroadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongChiBroadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.sint32();
                    break;
                case 2:
                    message.mahjongChi = $root.msg.MahjongChiPengGang.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongChiBroadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongChiBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongChiBroadcast} MahjongChiBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongChiBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongChiBroadcast message.
         * @function verify
         * @memberof msg.MahjongChiBroadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongChiBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.mahjongChi != null && message.hasOwnProperty("mahjongChi")) {
                let error = $root.msg.MahjongChiPengGang.verify(message.mahjongChi);
                if (error)
                    return "mahjongChi." + error;
            }
            return null;
        };

        /**
         * Creates a MahjongChiBroadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongChiBroadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongChiBroadcast} MahjongChiBroadcast
         */
        MahjongChiBroadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongChiBroadcast)
                return object;
            let message = new $root.msg.MahjongChiBroadcast();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.mahjongChi != null) {
                if (typeof object.mahjongChi !== "object")
                    throw TypeError(".msg.MahjongChiBroadcast.mahjongChi: object expected");
                message.mahjongChi = $root.msg.MahjongChiPengGang.fromObject(object.mahjongChi);
            }
            return message;
        };

        /**
         * Creates a plain object from a MahjongChiBroadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongChiBroadcast
         * @static
         * @param {msg.MahjongChiBroadcast} message MahjongChiBroadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongChiBroadcast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = 0;
                object.mahjongChi = null;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.mahjongChi != null && message.hasOwnProperty("mahjongChi"))
                object.mahjongChi = $root.msg.MahjongChiPengGang.toObject(message.mahjongChi, options);
            return object;
        };

        /**
         * Converts this MahjongChiBroadcast to JSON.
         * @function toJSON
         * @memberof msg.MahjongChiBroadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongChiBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongChiBroadcast;
    })();

    msg.MahjongPengCmd = (function() {

        /**
         * Properties of a MahjongPengCmd.
         * @memberof msg
         * @interface IMahjongPengCmd
         */

        /**
         * Constructs a new MahjongPengCmd.
         * @memberof msg
         * @classdesc Represents a MahjongPengCmd.
         * @implements IMahjongPengCmd
         * @constructor
         * @param {msg.IMahjongPengCmd=} [properties] Properties to set
         */
        function MahjongPengCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new MahjongPengCmd instance using the specified properties.
         * @function create
         * @memberof msg.MahjongPengCmd
         * @static
         * @param {msg.IMahjongPengCmd=} [properties] Properties to set
         * @returns {msg.MahjongPengCmd} MahjongPengCmd instance
         */
        MahjongPengCmd.create = function create(properties) {
            return new MahjongPengCmd(properties);
        };

        /**
         * Encodes the specified MahjongPengCmd message. Does not implicitly {@link msg.MahjongPengCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongPengCmd
         * @static
         * @param {msg.IMahjongPengCmd} message MahjongPengCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongPengCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified MahjongPengCmd message, length delimited. Does not implicitly {@link msg.MahjongPengCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongPengCmd
         * @static
         * @param {msg.IMahjongPengCmd} message MahjongPengCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongPengCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongPengCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongPengCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongPengCmd} MahjongPengCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongPengCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongPengCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongPengCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongPengCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongPengCmd} MahjongPengCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongPengCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongPengCmd message.
         * @function verify
         * @memberof msg.MahjongPengCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongPengCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a MahjongPengCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongPengCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongPengCmd} MahjongPengCmd
         */
        MahjongPengCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongPengCmd)
                return object;
            return new $root.msg.MahjongPengCmd();
        };

        /**
         * Creates a plain object from a MahjongPengCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongPengCmd
         * @static
         * @param {msg.MahjongPengCmd} message MahjongPengCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongPengCmd.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this MahjongPengCmd to JSON.
         * @function toJSON
         * @memberof msg.MahjongPengCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongPengCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongPengCmd;
    })();

    msg.MahjongPengResult = (function() {

        /**
         * Properties of a MahjongPengResult.
         * @memberof msg
         * @interface IMahjongPengResult
         * @property {msg.IMahjongChiPengGang|null} [mahjongPeng] MahjongPengResult mahjongPeng
         */

        /**
         * Constructs a new MahjongPengResult.
         * @memberof msg
         * @classdesc Represents a MahjongPengResult.
         * @implements IMahjongPengResult
         * @constructor
         * @param {msg.IMahjongPengResult=} [properties] Properties to set
         */
        function MahjongPengResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongPengResult mahjongPeng.
         * @member {msg.IMahjongChiPengGang|null|undefined} mahjongPeng
         * @memberof msg.MahjongPengResult
         * @instance
         */
        MahjongPengResult.prototype.mahjongPeng = null;

        /**
         * Creates a new MahjongPengResult instance using the specified properties.
         * @function create
         * @memberof msg.MahjongPengResult
         * @static
         * @param {msg.IMahjongPengResult=} [properties] Properties to set
         * @returns {msg.MahjongPengResult} MahjongPengResult instance
         */
        MahjongPengResult.create = function create(properties) {
            return new MahjongPengResult(properties);
        };

        /**
         * Encodes the specified MahjongPengResult message. Does not implicitly {@link msg.MahjongPengResult.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongPengResult
         * @static
         * @param {msg.IMahjongPengResult} message MahjongPengResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongPengResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mahjongPeng != null && Object.hasOwnProperty.call(message, "mahjongPeng"))
                $root.msg.MahjongChiPengGang.encode(message.mahjongPeng, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MahjongPengResult message, length delimited. Does not implicitly {@link msg.MahjongPengResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongPengResult
         * @static
         * @param {msg.IMahjongPengResult} message MahjongPengResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongPengResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongPengResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongPengResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongPengResult} MahjongPengResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongPengResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongPengResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mahjongPeng = $root.msg.MahjongChiPengGang.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongPengResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongPengResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongPengResult} MahjongPengResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongPengResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongPengResult message.
         * @function verify
         * @memberof msg.MahjongPengResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongPengResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mahjongPeng != null && message.hasOwnProperty("mahjongPeng")) {
                let error = $root.msg.MahjongChiPengGang.verify(message.mahjongPeng);
                if (error)
                    return "mahjongPeng." + error;
            }
            return null;
        };

        /**
         * Creates a MahjongPengResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongPengResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongPengResult} MahjongPengResult
         */
        MahjongPengResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongPengResult)
                return object;
            let message = new $root.msg.MahjongPengResult();
            if (object.mahjongPeng != null) {
                if (typeof object.mahjongPeng !== "object")
                    throw TypeError(".msg.MahjongPengResult.mahjongPeng: object expected");
                message.mahjongPeng = $root.msg.MahjongChiPengGang.fromObject(object.mahjongPeng);
            }
            return message;
        };

        /**
         * Creates a plain object from a MahjongPengResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongPengResult
         * @static
         * @param {msg.MahjongPengResult} message MahjongPengResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongPengResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.mahjongPeng = null;
            if (message.mahjongPeng != null && message.hasOwnProperty("mahjongPeng"))
                object.mahjongPeng = $root.msg.MahjongChiPengGang.toObject(message.mahjongPeng, options);
            return object;
        };

        /**
         * Converts this MahjongPengResult to JSON.
         * @function toJSON
         * @memberof msg.MahjongPengResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongPengResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongPengResult;
    })();

    msg.MahjongPengBroadcast = (function() {

        /**
         * Properties of a MahjongPengBroadcast.
         * @memberof msg
         * @interface IMahjongPengBroadcast
         * @property {number|null} [userId] MahjongPengBroadcast userId
         * @property {msg.IMahjongChiPengGang|null} [mahjongPeng] MahjongPengBroadcast mahjongPeng
         */

        /**
         * Constructs a new MahjongPengBroadcast.
         * @memberof msg
         * @classdesc Represents a MahjongPengBroadcast.
         * @implements IMahjongPengBroadcast
         * @constructor
         * @param {msg.IMahjongPengBroadcast=} [properties] Properties to set
         */
        function MahjongPengBroadcast(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongPengBroadcast userId.
         * @member {number} userId
         * @memberof msg.MahjongPengBroadcast
         * @instance
         */
        MahjongPengBroadcast.prototype.userId = 0;

        /**
         * MahjongPengBroadcast mahjongPeng.
         * @member {msg.IMahjongChiPengGang|null|undefined} mahjongPeng
         * @memberof msg.MahjongPengBroadcast
         * @instance
         */
        MahjongPengBroadcast.prototype.mahjongPeng = null;

        /**
         * Creates a new MahjongPengBroadcast instance using the specified properties.
         * @function create
         * @memberof msg.MahjongPengBroadcast
         * @static
         * @param {msg.IMahjongPengBroadcast=} [properties] Properties to set
         * @returns {msg.MahjongPengBroadcast} MahjongPengBroadcast instance
         */
        MahjongPengBroadcast.create = function create(properties) {
            return new MahjongPengBroadcast(properties);
        };

        /**
         * Encodes the specified MahjongPengBroadcast message. Does not implicitly {@link msg.MahjongPengBroadcast.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongPengBroadcast
         * @static
         * @param {msg.IMahjongPengBroadcast} message MahjongPengBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongPengBroadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userId);
            if (message.mahjongPeng != null && Object.hasOwnProperty.call(message, "mahjongPeng"))
                $root.msg.MahjongChiPengGang.encode(message.mahjongPeng, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MahjongPengBroadcast message, length delimited. Does not implicitly {@link msg.MahjongPengBroadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongPengBroadcast
         * @static
         * @param {msg.IMahjongPengBroadcast} message MahjongPengBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongPengBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongPengBroadcast message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongPengBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongPengBroadcast} MahjongPengBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongPengBroadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongPengBroadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.sint32();
                    break;
                case 2:
                    message.mahjongPeng = $root.msg.MahjongChiPengGang.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongPengBroadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongPengBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongPengBroadcast} MahjongPengBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongPengBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongPengBroadcast message.
         * @function verify
         * @memberof msg.MahjongPengBroadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongPengBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.mahjongPeng != null && message.hasOwnProperty("mahjongPeng")) {
                let error = $root.msg.MahjongChiPengGang.verify(message.mahjongPeng);
                if (error)
                    return "mahjongPeng." + error;
            }
            return null;
        };

        /**
         * Creates a MahjongPengBroadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongPengBroadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongPengBroadcast} MahjongPengBroadcast
         */
        MahjongPengBroadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongPengBroadcast)
                return object;
            let message = new $root.msg.MahjongPengBroadcast();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.mahjongPeng != null) {
                if (typeof object.mahjongPeng !== "object")
                    throw TypeError(".msg.MahjongPengBroadcast.mahjongPeng: object expected");
                message.mahjongPeng = $root.msg.MahjongChiPengGang.fromObject(object.mahjongPeng);
            }
            return message;
        };

        /**
         * Creates a plain object from a MahjongPengBroadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongPengBroadcast
         * @static
         * @param {msg.MahjongPengBroadcast} message MahjongPengBroadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongPengBroadcast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = 0;
                object.mahjongPeng = null;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.mahjongPeng != null && message.hasOwnProperty("mahjongPeng"))
                object.mahjongPeng = $root.msg.MahjongChiPengGang.toObject(message.mahjongPeng, options);
            return object;
        };

        /**
         * Converts this MahjongPengBroadcast to JSON.
         * @function toJSON
         * @memberof msg.MahjongPengBroadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongPengBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongPengBroadcast;
    })();

    msg.MahjongGangCmd = (function() {

        /**
         * Properties of a MahjongGangCmd.
         * @memberof msg
         * @interface IMahjongGangCmd
         */

        /**
         * Constructs a new MahjongGangCmd.
         * @memberof msg
         * @classdesc Represents a MahjongGangCmd.
         * @implements IMahjongGangCmd
         * @constructor
         * @param {msg.IMahjongGangCmd=} [properties] Properties to set
         */
        function MahjongGangCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new MahjongGangCmd instance using the specified properties.
         * @function create
         * @memberof msg.MahjongGangCmd
         * @static
         * @param {msg.IMahjongGangCmd=} [properties] Properties to set
         * @returns {msg.MahjongGangCmd} MahjongGangCmd instance
         */
        MahjongGangCmd.create = function create(properties) {
            return new MahjongGangCmd(properties);
        };

        /**
         * Encodes the specified MahjongGangCmd message. Does not implicitly {@link msg.MahjongGangCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongGangCmd
         * @static
         * @param {msg.IMahjongGangCmd} message MahjongGangCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongGangCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified MahjongGangCmd message, length delimited. Does not implicitly {@link msg.MahjongGangCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongGangCmd
         * @static
         * @param {msg.IMahjongGangCmd} message MahjongGangCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongGangCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongGangCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongGangCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongGangCmd} MahjongGangCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongGangCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongGangCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongGangCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongGangCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongGangCmd} MahjongGangCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongGangCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongGangCmd message.
         * @function verify
         * @memberof msg.MahjongGangCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongGangCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a MahjongGangCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongGangCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongGangCmd} MahjongGangCmd
         */
        MahjongGangCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongGangCmd)
                return object;
            return new $root.msg.MahjongGangCmd();
        };

        /**
         * Creates a plain object from a MahjongGangCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongGangCmd
         * @static
         * @param {msg.MahjongGangCmd} message MahjongGangCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongGangCmd.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this MahjongGangCmd to JSON.
         * @function toJSON
         * @memberof msg.MahjongGangCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongGangCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongGangCmd;
    })();

    msg.MahjongMingGangResult = (function() {

        /**
         * Properties of a MahjongMingGangResult.
         * @memberof msg
         * @interface IMahjongMingGangResult
         * @property {msg.IMahjongChiPengGang|null} [mahjongMingGang] MahjongMingGangResult mahjongMingGang
         */

        /**
         * Constructs a new MahjongMingGangResult.
         * @memberof msg
         * @classdesc Represents a MahjongMingGangResult.
         * @implements IMahjongMingGangResult
         * @constructor
         * @param {msg.IMahjongMingGangResult=} [properties] Properties to set
         */
        function MahjongMingGangResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongMingGangResult mahjongMingGang.
         * @member {msg.IMahjongChiPengGang|null|undefined} mahjongMingGang
         * @memberof msg.MahjongMingGangResult
         * @instance
         */
        MahjongMingGangResult.prototype.mahjongMingGang = null;

        /**
         * Creates a new MahjongMingGangResult instance using the specified properties.
         * @function create
         * @memberof msg.MahjongMingGangResult
         * @static
         * @param {msg.IMahjongMingGangResult=} [properties] Properties to set
         * @returns {msg.MahjongMingGangResult} MahjongMingGangResult instance
         */
        MahjongMingGangResult.create = function create(properties) {
            return new MahjongMingGangResult(properties);
        };

        /**
         * Encodes the specified MahjongMingGangResult message. Does not implicitly {@link msg.MahjongMingGangResult.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongMingGangResult
         * @static
         * @param {msg.IMahjongMingGangResult} message MahjongMingGangResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongMingGangResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mahjongMingGang != null && Object.hasOwnProperty.call(message, "mahjongMingGang"))
                $root.msg.MahjongChiPengGang.encode(message.mahjongMingGang, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MahjongMingGangResult message, length delimited. Does not implicitly {@link msg.MahjongMingGangResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongMingGangResult
         * @static
         * @param {msg.IMahjongMingGangResult} message MahjongMingGangResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongMingGangResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongMingGangResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongMingGangResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongMingGangResult} MahjongMingGangResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongMingGangResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongMingGangResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mahjongMingGang = $root.msg.MahjongChiPengGang.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongMingGangResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongMingGangResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongMingGangResult} MahjongMingGangResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongMingGangResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongMingGangResult message.
         * @function verify
         * @memberof msg.MahjongMingGangResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongMingGangResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mahjongMingGang != null && message.hasOwnProperty("mahjongMingGang")) {
                let error = $root.msg.MahjongChiPengGang.verify(message.mahjongMingGang);
                if (error)
                    return "mahjongMingGang." + error;
            }
            return null;
        };

        /**
         * Creates a MahjongMingGangResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongMingGangResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongMingGangResult} MahjongMingGangResult
         */
        MahjongMingGangResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongMingGangResult)
                return object;
            let message = new $root.msg.MahjongMingGangResult();
            if (object.mahjongMingGang != null) {
                if (typeof object.mahjongMingGang !== "object")
                    throw TypeError(".msg.MahjongMingGangResult.mahjongMingGang: object expected");
                message.mahjongMingGang = $root.msg.MahjongChiPengGang.fromObject(object.mahjongMingGang);
            }
            return message;
        };

        /**
         * Creates a plain object from a MahjongMingGangResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongMingGangResult
         * @static
         * @param {msg.MahjongMingGangResult} message MahjongMingGangResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongMingGangResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.mahjongMingGang = null;
            if (message.mahjongMingGang != null && message.hasOwnProperty("mahjongMingGang"))
                object.mahjongMingGang = $root.msg.MahjongChiPengGang.toObject(message.mahjongMingGang, options);
            return object;
        };

        /**
         * Converts this MahjongMingGangResult to JSON.
         * @function toJSON
         * @memberof msg.MahjongMingGangResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongMingGangResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongMingGangResult;
    })();

    msg.MahjongAnGangResult = (function() {

        /**
         * Properties of a MahjongAnGangResult.
         * @memberof msg
         * @interface IMahjongAnGangResult
         * @property {msg.IMahjongChiPengGang|null} [mahjongAnGang] MahjongAnGangResult mahjongAnGang
         */

        /**
         * Constructs a new MahjongAnGangResult.
         * @memberof msg
         * @classdesc Represents a MahjongAnGangResult.
         * @implements IMahjongAnGangResult
         * @constructor
         * @param {msg.IMahjongAnGangResult=} [properties] Properties to set
         */
        function MahjongAnGangResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongAnGangResult mahjongAnGang.
         * @member {msg.IMahjongChiPengGang|null|undefined} mahjongAnGang
         * @memberof msg.MahjongAnGangResult
         * @instance
         */
        MahjongAnGangResult.prototype.mahjongAnGang = null;

        /**
         * Creates a new MahjongAnGangResult instance using the specified properties.
         * @function create
         * @memberof msg.MahjongAnGangResult
         * @static
         * @param {msg.IMahjongAnGangResult=} [properties] Properties to set
         * @returns {msg.MahjongAnGangResult} MahjongAnGangResult instance
         */
        MahjongAnGangResult.create = function create(properties) {
            return new MahjongAnGangResult(properties);
        };

        /**
         * Encodes the specified MahjongAnGangResult message. Does not implicitly {@link msg.MahjongAnGangResult.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongAnGangResult
         * @static
         * @param {msg.IMahjongAnGangResult} message MahjongAnGangResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongAnGangResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mahjongAnGang != null && Object.hasOwnProperty.call(message, "mahjongAnGang"))
                $root.msg.MahjongChiPengGang.encode(message.mahjongAnGang, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MahjongAnGangResult message, length delimited. Does not implicitly {@link msg.MahjongAnGangResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongAnGangResult
         * @static
         * @param {msg.IMahjongAnGangResult} message MahjongAnGangResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongAnGangResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongAnGangResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongAnGangResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongAnGangResult} MahjongAnGangResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongAnGangResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongAnGangResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mahjongAnGang = $root.msg.MahjongChiPengGang.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongAnGangResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongAnGangResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongAnGangResult} MahjongAnGangResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongAnGangResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongAnGangResult message.
         * @function verify
         * @memberof msg.MahjongAnGangResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongAnGangResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mahjongAnGang != null && message.hasOwnProperty("mahjongAnGang")) {
                let error = $root.msg.MahjongChiPengGang.verify(message.mahjongAnGang);
                if (error)
                    return "mahjongAnGang." + error;
            }
            return null;
        };

        /**
         * Creates a MahjongAnGangResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongAnGangResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongAnGangResult} MahjongAnGangResult
         */
        MahjongAnGangResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongAnGangResult)
                return object;
            let message = new $root.msg.MahjongAnGangResult();
            if (object.mahjongAnGang != null) {
                if (typeof object.mahjongAnGang !== "object")
                    throw TypeError(".msg.MahjongAnGangResult.mahjongAnGang: object expected");
                message.mahjongAnGang = $root.msg.MahjongChiPengGang.fromObject(object.mahjongAnGang);
            }
            return message;
        };

        /**
         * Creates a plain object from a MahjongAnGangResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongAnGangResult
         * @static
         * @param {msg.MahjongAnGangResult} message MahjongAnGangResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongAnGangResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.mahjongAnGang = null;
            if (message.mahjongAnGang != null && message.hasOwnProperty("mahjongAnGang"))
                object.mahjongAnGang = $root.msg.MahjongChiPengGang.toObject(message.mahjongAnGang, options);
            return object;
        };

        /**
         * Converts this MahjongAnGangResult to JSON.
         * @function toJSON
         * @memberof msg.MahjongAnGangResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongAnGangResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongAnGangResult;
    })();

    msg.MahjongBuGangResult = (function() {

        /**
         * Properties of a MahjongBuGangResult.
         * @memberof msg
         * @interface IMahjongBuGangResult
         * @property {msg.IMahjongChiPengGang|null} [mahjongBuGang] MahjongBuGangResult mahjongBuGang
         */

        /**
         * Constructs a new MahjongBuGangResult.
         * @memberof msg
         * @classdesc Represents a MahjongBuGangResult.
         * @implements IMahjongBuGangResult
         * @constructor
         * @param {msg.IMahjongBuGangResult=} [properties] Properties to set
         */
        function MahjongBuGangResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongBuGangResult mahjongBuGang.
         * @member {msg.IMahjongChiPengGang|null|undefined} mahjongBuGang
         * @memberof msg.MahjongBuGangResult
         * @instance
         */
        MahjongBuGangResult.prototype.mahjongBuGang = null;

        /**
         * Creates a new MahjongBuGangResult instance using the specified properties.
         * @function create
         * @memberof msg.MahjongBuGangResult
         * @static
         * @param {msg.IMahjongBuGangResult=} [properties] Properties to set
         * @returns {msg.MahjongBuGangResult} MahjongBuGangResult instance
         */
        MahjongBuGangResult.create = function create(properties) {
            return new MahjongBuGangResult(properties);
        };

        /**
         * Encodes the specified MahjongBuGangResult message. Does not implicitly {@link msg.MahjongBuGangResult.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongBuGangResult
         * @static
         * @param {msg.IMahjongBuGangResult} message MahjongBuGangResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongBuGangResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mahjongBuGang != null && Object.hasOwnProperty.call(message, "mahjongBuGang"))
                $root.msg.MahjongChiPengGang.encode(message.mahjongBuGang, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MahjongBuGangResult message, length delimited. Does not implicitly {@link msg.MahjongBuGangResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongBuGangResult
         * @static
         * @param {msg.IMahjongBuGangResult} message MahjongBuGangResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongBuGangResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongBuGangResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongBuGangResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongBuGangResult} MahjongBuGangResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongBuGangResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongBuGangResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mahjongBuGang = $root.msg.MahjongChiPengGang.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongBuGangResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongBuGangResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongBuGangResult} MahjongBuGangResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongBuGangResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongBuGangResult message.
         * @function verify
         * @memberof msg.MahjongBuGangResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongBuGangResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mahjongBuGang != null && message.hasOwnProperty("mahjongBuGang")) {
                let error = $root.msg.MahjongChiPengGang.verify(message.mahjongBuGang);
                if (error)
                    return "mahjongBuGang." + error;
            }
            return null;
        };

        /**
         * Creates a MahjongBuGangResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongBuGangResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongBuGangResult} MahjongBuGangResult
         */
        MahjongBuGangResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongBuGangResult)
                return object;
            let message = new $root.msg.MahjongBuGangResult();
            if (object.mahjongBuGang != null) {
                if (typeof object.mahjongBuGang !== "object")
                    throw TypeError(".msg.MahjongBuGangResult.mahjongBuGang: object expected");
                message.mahjongBuGang = $root.msg.MahjongChiPengGang.fromObject(object.mahjongBuGang);
            }
            return message;
        };

        /**
         * Creates a plain object from a MahjongBuGangResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongBuGangResult
         * @static
         * @param {msg.MahjongBuGangResult} message MahjongBuGangResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongBuGangResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.mahjongBuGang = null;
            if (message.mahjongBuGang != null && message.hasOwnProperty("mahjongBuGang"))
                object.mahjongBuGang = $root.msg.MahjongChiPengGang.toObject(message.mahjongBuGang, options);
            return object;
        };

        /**
         * Converts this MahjongBuGangResult to JSON.
         * @function toJSON
         * @memberof msg.MahjongBuGangResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongBuGangResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongBuGangResult;
    })();

    msg.MahjongMingGangBroadcast = (function() {

        /**
         * Properties of a MahjongMingGangBroadcast.
         * @memberof msg
         * @interface IMahjongMingGangBroadcast
         * @property {number|null} [userId] MahjongMingGangBroadcast userId
         * @property {msg.IMahjongChiPengGang|null} [mahjongMingGang] MahjongMingGangBroadcast mahjongMingGang
         */

        /**
         * Constructs a new MahjongMingGangBroadcast.
         * @memberof msg
         * @classdesc Represents a MahjongMingGangBroadcast.
         * @implements IMahjongMingGangBroadcast
         * @constructor
         * @param {msg.IMahjongMingGangBroadcast=} [properties] Properties to set
         */
        function MahjongMingGangBroadcast(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongMingGangBroadcast userId.
         * @member {number} userId
         * @memberof msg.MahjongMingGangBroadcast
         * @instance
         */
        MahjongMingGangBroadcast.prototype.userId = 0;

        /**
         * MahjongMingGangBroadcast mahjongMingGang.
         * @member {msg.IMahjongChiPengGang|null|undefined} mahjongMingGang
         * @memberof msg.MahjongMingGangBroadcast
         * @instance
         */
        MahjongMingGangBroadcast.prototype.mahjongMingGang = null;

        /**
         * Creates a new MahjongMingGangBroadcast instance using the specified properties.
         * @function create
         * @memberof msg.MahjongMingGangBroadcast
         * @static
         * @param {msg.IMahjongMingGangBroadcast=} [properties] Properties to set
         * @returns {msg.MahjongMingGangBroadcast} MahjongMingGangBroadcast instance
         */
        MahjongMingGangBroadcast.create = function create(properties) {
            return new MahjongMingGangBroadcast(properties);
        };

        /**
         * Encodes the specified MahjongMingGangBroadcast message. Does not implicitly {@link msg.MahjongMingGangBroadcast.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongMingGangBroadcast
         * @static
         * @param {msg.IMahjongMingGangBroadcast} message MahjongMingGangBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongMingGangBroadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userId);
            if (message.mahjongMingGang != null && Object.hasOwnProperty.call(message, "mahjongMingGang"))
                $root.msg.MahjongChiPengGang.encode(message.mahjongMingGang, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MahjongMingGangBroadcast message, length delimited. Does not implicitly {@link msg.MahjongMingGangBroadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongMingGangBroadcast
         * @static
         * @param {msg.IMahjongMingGangBroadcast} message MahjongMingGangBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongMingGangBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongMingGangBroadcast message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongMingGangBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongMingGangBroadcast} MahjongMingGangBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongMingGangBroadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongMingGangBroadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.sint32();
                    break;
                case 2:
                    message.mahjongMingGang = $root.msg.MahjongChiPengGang.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongMingGangBroadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongMingGangBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongMingGangBroadcast} MahjongMingGangBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongMingGangBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongMingGangBroadcast message.
         * @function verify
         * @memberof msg.MahjongMingGangBroadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongMingGangBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.mahjongMingGang != null && message.hasOwnProperty("mahjongMingGang")) {
                let error = $root.msg.MahjongChiPengGang.verify(message.mahjongMingGang);
                if (error)
                    return "mahjongMingGang." + error;
            }
            return null;
        };

        /**
         * Creates a MahjongMingGangBroadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongMingGangBroadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongMingGangBroadcast} MahjongMingGangBroadcast
         */
        MahjongMingGangBroadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongMingGangBroadcast)
                return object;
            let message = new $root.msg.MahjongMingGangBroadcast();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.mahjongMingGang != null) {
                if (typeof object.mahjongMingGang !== "object")
                    throw TypeError(".msg.MahjongMingGangBroadcast.mahjongMingGang: object expected");
                message.mahjongMingGang = $root.msg.MahjongChiPengGang.fromObject(object.mahjongMingGang);
            }
            return message;
        };

        /**
         * Creates a plain object from a MahjongMingGangBroadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongMingGangBroadcast
         * @static
         * @param {msg.MahjongMingGangBroadcast} message MahjongMingGangBroadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongMingGangBroadcast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = 0;
                object.mahjongMingGang = null;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.mahjongMingGang != null && message.hasOwnProperty("mahjongMingGang"))
                object.mahjongMingGang = $root.msg.MahjongChiPengGang.toObject(message.mahjongMingGang, options);
            return object;
        };

        /**
         * Converts this MahjongMingGangBroadcast to JSON.
         * @function toJSON
         * @memberof msg.MahjongMingGangBroadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongMingGangBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongMingGangBroadcast;
    })();

    msg.MahjongAnGangBroadcast = (function() {

        /**
         * Properties of a MahjongAnGangBroadcast.
         * @memberof msg
         * @interface IMahjongAnGangBroadcast
         * @property {number|null} [userId] MahjongAnGangBroadcast userId
         * @property {msg.IMahjongChiPengGang|null} [mahjongAnGang] MahjongAnGangBroadcast mahjongAnGang
         */

        /**
         * Constructs a new MahjongAnGangBroadcast.
         * @memberof msg
         * @classdesc Represents a MahjongAnGangBroadcast.
         * @implements IMahjongAnGangBroadcast
         * @constructor
         * @param {msg.IMahjongAnGangBroadcast=} [properties] Properties to set
         */
        function MahjongAnGangBroadcast(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongAnGangBroadcast userId.
         * @member {number} userId
         * @memberof msg.MahjongAnGangBroadcast
         * @instance
         */
        MahjongAnGangBroadcast.prototype.userId = 0;

        /**
         * MahjongAnGangBroadcast mahjongAnGang.
         * @member {msg.IMahjongChiPengGang|null|undefined} mahjongAnGang
         * @memberof msg.MahjongAnGangBroadcast
         * @instance
         */
        MahjongAnGangBroadcast.prototype.mahjongAnGang = null;

        /**
         * Creates a new MahjongAnGangBroadcast instance using the specified properties.
         * @function create
         * @memberof msg.MahjongAnGangBroadcast
         * @static
         * @param {msg.IMahjongAnGangBroadcast=} [properties] Properties to set
         * @returns {msg.MahjongAnGangBroadcast} MahjongAnGangBroadcast instance
         */
        MahjongAnGangBroadcast.create = function create(properties) {
            return new MahjongAnGangBroadcast(properties);
        };

        /**
         * Encodes the specified MahjongAnGangBroadcast message. Does not implicitly {@link msg.MahjongAnGangBroadcast.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongAnGangBroadcast
         * @static
         * @param {msg.IMahjongAnGangBroadcast} message MahjongAnGangBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongAnGangBroadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userId);
            if (message.mahjongAnGang != null && Object.hasOwnProperty.call(message, "mahjongAnGang"))
                $root.msg.MahjongChiPengGang.encode(message.mahjongAnGang, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MahjongAnGangBroadcast message, length delimited. Does not implicitly {@link msg.MahjongAnGangBroadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongAnGangBroadcast
         * @static
         * @param {msg.IMahjongAnGangBroadcast} message MahjongAnGangBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongAnGangBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongAnGangBroadcast message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongAnGangBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongAnGangBroadcast} MahjongAnGangBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongAnGangBroadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongAnGangBroadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.sint32();
                    break;
                case 2:
                    message.mahjongAnGang = $root.msg.MahjongChiPengGang.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongAnGangBroadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongAnGangBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongAnGangBroadcast} MahjongAnGangBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongAnGangBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongAnGangBroadcast message.
         * @function verify
         * @memberof msg.MahjongAnGangBroadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongAnGangBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.mahjongAnGang != null && message.hasOwnProperty("mahjongAnGang")) {
                let error = $root.msg.MahjongChiPengGang.verify(message.mahjongAnGang);
                if (error)
                    return "mahjongAnGang." + error;
            }
            return null;
        };

        /**
         * Creates a MahjongAnGangBroadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongAnGangBroadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongAnGangBroadcast} MahjongAnGangBroadcast
         */
        MahjongAnGangBroadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongAnGangBroadcast)
                return object;
            let message = new $root.msg.MahjongAnGangBroadcast();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.mahjongAnGang != null) {
                if (typeof object.mahjongAnGang !== "object")
                    throw TypeError(".msg.MahjongAnGangBroadcast.mahjongAnGang: object expected");
                message.mahjongAnGang = $root.msg.MahjongChiPengGang.fromObject(object.mahjongAnGang);
            }
            return message;
        };

        /**
         * Creates a plain object from a MahjongAnGangBroadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongAnGangBroadcast
         * @static
         * @param {msg.MahjongAnGangBroadcast} message MahjongAnGangBroadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongAnGangBroadcast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = 0;
                object.mahjongAnGang = null;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.mahjongAnGang != null && message.hasOwnProperty("mahjongAnGang"))
                object.mahjongAnGang = $root.msg.MahjongChiPengGang.toObject(message.mahjongAnGang, options);
            return object;
        };

        /**
         * Converts this MahjongAnGangBroadcast to JSON.
         * @function toJSON
         * @memberof msg.MahjongAnGangBroadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongAnGangBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongAnGangBroadcast;
    })();

    msg.MahjongBuGangBroadcast = (function() {

        /**
         * Properties of a MahjongBuGangBroadcast.
         * @memberof msg
         * @interface IMahjongBuGangBroadcast
         * @property {number|null} [userId] MahjongBuGangBroadcast userId
         * @property {msg.IMahjongChiPengGang|null} [mahjongBuGang] MahjongBuGangBroadcast mahjongBuGang
         */

        /**
         * Constructs a new MahjongBuGangBroadcast.
         * @memberof msg
         * @classdesc Represents a MahjongBuGangBroadcast.
         * @implements IMahjongBuGangBroadcast
         * @constructor
         * @param {msg.IMahjongBuGangBroadcast=} [properties] Properties to set
         */
        function MahjongBuGangBroadcast(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongBuGangBroadcast userId.
         * @member {number} userId
         * @memberof msg.MahjongBuGangBroadcast
         * @instance
         */
        MahjongBuGangBroadcast.prototype.userId = 0;

        /**
         * MahjongBuGangBroadcast mahjongBuGang.
         * @member {msg.IMahjongChiPengGang|null|undefined} mahjongBuGang
         * @memberof msg.MahjongBuGangBroadcast
         * @instance
         */
        MahjongBuGangBroadcast.prototype.mahjongBuGang = null;

        /**
         * Creates a new MahjongBuGangBroadcast instance using the specified properties.
         * @function create
         * @memberof msg.MahjongBuGangBroadcast
         * @static
         * @param {msg.IMahjongBuGangBroadcast=} [properties] Properties to set
         * @returns {msg.MahjongBuGangBroadcast} MahjongBuGangBroadcast instance
         */
        MahjongBuGangBroadcast.create = function create(properties) {
            return new MahjongBuGangBroadcast(properties);
        };

        /**
         * Encodes the specified MahjongBuGangBroadcast message. Does not implicitly {@link msg.MahjongBuGangBroadcast.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongBuGangBroadcast
         * @static
         * @param {msg.IMahjongBuGangBroadcast} message MahjongBuGangBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongBuGangBroadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userId);
            if (message.mahjongBuGang != null && Object.hasOwnProperty.call(message, "mahjongBuGang"))
                $root.msg.MahjongChiPengGang.encode(message.mahjongBuGang, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MahjongBuGangBroadcast message, length delimited. Does not implicitly {@link msg.MahjongBuGangBroadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongBuGangBroadcast
         * @static
         * @param {msg.IMahjongBuGangBroadcast} message MahjongBuGangBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongBuGangBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongBuGangBroadcast message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongBuGangBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongBuGangBroadcast} MahjongBuGangBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongBuGangBroadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongBuGangBroadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.sint32();
                    break;
                case 2:
                    message.mahjongBuGang = $root.msg.MahjongChiPengGang.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongBuGangBroadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongBuGangBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongBuGangBroadcast} MahjongBuGangBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongBuGangBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongBuGangBroadcast message.
         * @function verify
         * @memberof msg.MahjongBuGangBroadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongBuGangBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.mahjongBuGang != null && message.hasOwnProperty("mahjongBuGang")) {
                let error = $root.msg.MahjongChiPengGang.verify(message.mahjongBuGang);
                if (error)
                    return "mahjongBuGang." + error;
            }
            return null;
        };

        /**
         * Creates a MahjongBuGangBroadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongBuGangBroadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongBuGangBroadcast} MahjongBuGangBroadcast
         */
        MahjongBuGangBroadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongBuGangBroadcast)
                return object;
            let message = new $root.msg.MahjongBuGangBroadcast();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.mahjongBuGang != null) {
                if (typeof object.mahjongBuGang !== "object")
                    throw TypeError(".msg.MahjongBuGangBroadcast.mahjongBuGang: object expected");
                message.mahjongBuGang = $root.msg.MahjongChiPengGang.fromObject(object.mahjongBuGang);
            }
            return message;
        };

        /**
         * Creates a plain object from a MahjongBuGangBroadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongBuGangBroadcast
         * @static
         * @param {msg.MahjongBuGangBroadcast} message MahjongBuGangBroadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongBuGangBroadcast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = 0;
                object.mahjongBuGang = null;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.mahjongBuGang != null && message.hasOwnProperty("mahjongBuGang"))
                object.mahjongBuGang = $root.msg.MahjongChiPengGang.toObject(message.mahjongBuGang, options);
            return object;
        };

        /**
         * Converts this MahjongBuGangBroadcast to JSON.
         * @function toJSON
         * @memberof msg.MahjongBuGangBroadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongBuGangBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongBuGangBroadcast;
    })();

    msg.MahjongLiangDaoCmd = (function() {

        /**
         * Properties of a MahjongLiangDaoCmd.
         * @memberof msg
         * @interface IMahjongLiangDaoCmd
         */

        /**
         * Constructs a new MahjongLiangDaoCmd.
         * @memberof msg
         * @classdesc Represents a MahjongLiangDaoCmd.
         * @implements IMahjongLiangDaoCmd
         * @constructor
         * @param {msg.IMahjongLiangDaoCmd=} [properties] Properties to set
         */
        function MahjongLiangDaoCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new MahjongLiangDaoCmd instance using the specified properties.
         * @function create
         * @memberof msg.MahjongLiangDaoCmd
         * @static
         * @param {msg.IMahjongLiangDaoCmd=} [properties] Properties to set
         * @returns {msg.MahjongLiangDaoCmd} MahjongLiangDaoCmd instance
         */
        MahjongLiangDaoCmd.create = function create(properties) {
            return new MahjongLiangDaoCmd(properties);
        };

        /**
         * Encodes the specified MahjongLiangDaoCmd message. Does not implicitly {@link msg.MahjongLiangDaoCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongLiangDaoCmd
         * @static
         * @param {msg.IMahjongLiangDaoCmd} message MahjongLiangDaoCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongLiangDaoCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified MahjongLiangDaoCmd message, length delimited. Does not implicitly {@link msg.MahjongLiangDaoCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongLiangDaoCmd
         * @static
         * @param {msg.IMahjongLiangDaoCmd} message MahjongLiangDaoCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongLiangDaoCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongLiangDaoCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongLiangDaoCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongLiangDaoCmd} MahjongLiangDaoCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongLiangDaoCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongLiangDaoCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongLiangDaoCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongLiangDaoCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongLiangDaoCmd} MahjongLiangDaoCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongLiangDaoCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongLiangDaoCmd message.
         * @function verify
         * @memberof msg.MahjongLiangDaoCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongLiangDaoCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a MahjongLiangDaoCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongLiangDaoCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongLiangDaoCmd} MahjongLiangDaoCmd
         */
        MahjongLiangDaoCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongLiangDaoCmd)
                return object;
            return new $root.msg.MahjongLiangDaoCmd();
        };

        /**
         * Creates a plain object from a MahjongLiangDaoCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongLiangDaoCmd
         * @static
         * @param {msg.MahjongLiangDaoCmd} message MahjongLiangDaoCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongLiangDaoCmd.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this MahjongLiangDaoCmd to JSON.
         * @function toJSON
         * @memberof msg.MahjongLiangDaoCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongLiangDaoCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongLiangDaoCmd;
    })();

    msg.MahjongLiangDaoResult = (function() {

        /**
         * Properties of a MahjongLiangDaoResult.
         * @memberof msg
         * @interface IMahjongLiangDaoResult
         * @property {Array.<number>|null} [mahjongInHand] MahjongLiangDaoResult mahjongInHand
         * @property {number|null} [moPai] MahjongLiangDaoResult moPai
         */

        /**
         * Constructs a new MahjongLiangDaoResult.
         * @memberof msg
         * @classdesc Represents a MahjongLiangDaoResult.
         * @implements IMahjongLiangDaoResult
         * @constructor
         * @param {msg.IMahjongLiangDaoResult=} [properties] Properties to set
         */
        function MahjongLiangDaoResult(properties) {
            this.mahjongInHand = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongLiangDaoResult mahjongInHand.
         * @member {Array.<number>} mahjongInHand
         * @memberof msg.MahjongLiangDaoResult
         * @instance
         */
        MahjongLiangDaoResult.prototype.mahjongInHand = $util.emptyArray;

        /**
         * MahjongLiangDaoResult moPai.
         * @member {number} moPai
         * @memberof msg.MahjongLiangDaoResult
         * @instance
         */
        MahjongLiangDaoResult.prototype.moPai = 0;

        /**
         * Creates a new MahjongLiangDaoResult instance using the specified properties.
         * @function create
         * @memberof msg.MahjongLiangDaoResult
         * @static
         * @param {msg.IMahjongLiangDaoResult=} [properties] Properties to set
         * @returns {msg.MahjongLiangDaoResult} MahjongLiangDaoResult instance
         */
        MahjongLiangDaoResult.create = function create(properties) {
            return new MahjongLiangDaoResult(properties);
        };

        /**
         * Encodes the specified MahjongLiangDaoResult message. Does not implicitly {@link msg.MahjongLiangDaoResult.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongLiangDaoResult
         * @static
         * @param {msg.IMahjongLiangDaoResult} message MahjongLiangDaoResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongLiangDaoResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mahjongInHand != null && message.mahjongInHand.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (let i = 0; i < message.mahjongInHand.length; ++i)
                    writer.sint32(message.mahjongInHand[i]);
                writer.ldelim();
            }
            if (message.moPai != null && Object.hasOwnProperty.call(message, "moPai"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.moPai);
            return writer;
        };

        /**
         * Encodes the specified MahjongLiangDaoResult message, length delimited. Does not implicitly {@link msg.MahjongLiangDaoResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongLiangDaoResult
         * @static
         * @param {msg.IMahjongLiangDaoResult} message MahjongLiangDaoResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongLiangDaoResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongLiangDaoResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongLiangDaoResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongLiangDaoResult} MahjongLiangDaoResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongLiangDaoResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongLiangDaoResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.mahjongInHand && message.mahjongInHand.length))
                        message.mahjongInHand = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.mahjongInHand.push(reader.sint32());
                    } else
                        message.mahjongInHand.push(reader.sint32());
                    break;
                case 2:
                    message.moPai = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongLiangDaoResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongLiangDaoResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongLiangDaoResult} MahjongLiangDaoResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongLiangDaoResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongLiangDaoResult message.
         * @function verify
         * @memberof msg.MahjongLiangDaoResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongLiangDaoResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mahjongInHand != null && message.hasOwnProperty("mahjongInHand")) {
                if (!Array.isArray(message.mahjongInHand))
                    return "mahjongInHand: array expected";
                for (let i = 0; i < message.mahjongInHand.length; ++i)
                    if (!$util.isInteger(message.mahjongInHand[i]))
                        return "mahjongInHand: integer[] expected";
            }
            if (message.moPai != null && message.hasOwnProperty("moPai"))
                if (!$util.isInteger(message.moPai))
                    return "moPai: integer expected";
            return null;
        };

        /**
         * Creates a MahjongLiangDaoResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongLiangDaoResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongLiangDaoResult} MahjongLiangDaoResult
         */
        MahjongLiangDaoResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongLiangDaoResult)
                return object;
            let message = new $root.msg.MahjongLiangDaoResult();
            if (object.mahjongInHand) {
                if (!Array.isArray(object.mahjongInHand))
                    throw TypeError(".msg.MahjongLiangDaoResult.mahjongInHand: array expected");
                message.mahjongInHand = [];
                for (let i = 0; i < object.mahjongInHand.length; ++i)
                    message.mahjongInHand[i] = object.mahjongInHand[i] | 0;
            }
            if (object.moPai != null)
                message.moPai = object.moPai | 0;
            return message;
        };

        /**
         * Creates a plain object from a MahjongLiangDaoResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongLiangDaoResult
         * @static
         * @param {msg.MahjongLiangDaoResult} message MahjongLiangDaoResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongLiangDaoResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.mahjongInHand = [];
            if (options.defaults)
                object.moPai = 0;
            if (message.mahjongInHand && message.mahjongInHand.length) {
                object.mahjongInHand = [];
                for (let j = 0; j < message.mahjongInHand.length; ++j)
                    object.mahjongInHand[j] = message.mahjongInHand[j];
            }
            if (message.moPai != null && message.hasOwnProperty("moPai"))
                object.moPai = message.moPai;
            return object;
        };

        /**
         * Converts this MahjongLiangDaoResult to JSON.
         * @function toJSON
         * @memberof msg.MahjongLiangDaoResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongLiangDaoResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongLiangDaoResult;
    })();

    msg.MahjongLiangDaoBroadcast = (function() {

        /**
         * Properties of a MahjongLiangDaoBroadcast.
         * @memberof msg
         * @interface IMahjongLiangDaoBroadcast
         * @property {number|null} [userId] MahjongLiangDaoBroadcast userId
         * @property {Array.<number>|null} [mahjongInHand] MahjongLiangDaoBroadcast mahjongInHand
         * @property {number|null} [moPai] MahjongLiangDaoBroadcast moPai
         */

        /**
         * Constructs a new MahjongLiangDaoBroadcast.
         * @memberof msg
         * @classdesc Represents a MahjongLiangDaoBroadcast.
         * @implements IMahjongLiangDaoBroadcast
         * @constructor
         * @param {msg.IMahjongLiangDaoBroadcast=} [properties] Properties to set
         */
        function MahjongLiangDaoBroadcast(properties) {
            this.mahjongInHand = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongLiangDaoBroadcast userId.
         * @member {number} userId
         * @memberof msg.MahjongLiangDaoBroadcast
         * @instance
         */
        MahjongLiangDaoBroadcast.prototype.userId = 0;

        /**
         * MahjongLiangDaoBroadcast mahjongInHand.
         * @member {Array.<number>} mahjongInHand
         * @memberof msg.MahjongLiangDaoBroadcast
         * @instance
         */
        MahjongLiangDaoBroadcast.prototype.mahjongInHand = $util.emptyArray;

        /**
         * MahjongLiangDaoBroadcast moPai.
         * @member {number} moPai
         * @memberof msg.MahjongLiangDaoBroadcast
         * @instance
         */
        MahjongLiangDaoBroadcast.prototype.moPai = 0;

        /**
         * Creates a new MahjongLiangDaoBroadcast instance using the specified properties.
         * @function create
         * @memberof msg.MahjongLiangDaoBroadcast
         * @static
         * @param {msg.IMahjongLiangDaoBroadcast=} [properties] Properties to set
         * @returns {msg.MahjongLiangDaoBroadcast} MahjongLiangDaoBroadcast instance
         */
        MahjongLiangDaoBroadcast.create = function create(properties) {
            return new MahjongLiangDaoBroadcast(properties);
        };

        /**
         * Encodes the specified MahjongLiangDaoBroadcast message. Does not implicitly {@link msg.MahjongLiangDaoBroadcast.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongLiangDaoBroadcast
         * @static
         * @param {msg.IMahjongLiangDaoBroadcast} message MahjongLiangDaoBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongLiangDaoBroadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userId);
            if (message.mahjongInHand != null && message.mahjongInHand.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (let i = 0; i < message.mahjongInHand.length; ++i)
                    writer.sint32(message.mahjongInHand[i]);
                writer.ldelim();
            }
            if (message.moPai != null && Object.hasOwnProperty.call(message, "moPai"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.moPai);
            return writer;
        };

        /**
         * Encodes the specified MahjongLiangDaoBroadcast message, length delimited. Does not implicitly {@link msg.MahjongLiangDaoBroadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongLiangDaoBroadcast
         * @static
         * @param {msg.IMahjongLiangDaoBroadcast} message MahjongLiangDaoBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongLiangDaoBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongLiangDaoBroadcast message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongLiangDaoBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongLiangDaoBroadcast} MahjongLiangDaoBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongLiangDaoBroadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongLiangDaoBroadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.sint32();
                    break;
                case 2:
                    if (!(message.mahjongInHand && message.mahjongInHand.length))
                        message.mahjongInHand = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.mahjongInHand.push(reader.sint32());
                    } else
                        message.mahjongInHand.push(reader.sint32());
                    break;
                case 3:
                    message.moPai = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongLiangDaoBroadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongLiangDaoBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongLiangDaoBroadcast} MahjongLiangDaoBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongLiangDaoBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongLiangDaoBroadcast message.
         * @function verify
         * @memberof msg.MahjongLiangDaoBroadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongLiangDaoBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.mahjongInHand != null && message.hasOwnProperty("mahjongInHand")) {
                if (!Array.isArray(message.mahjongInHand))
                    return "mahjongInHand: array expected";
                for (let i = 0; i < message.mahjongInHand.length; ++i)
                    if (!$util.isInteger(message.mahjongInHand[i]))
                        return "mahjongInHand: integer[] expected";
            }
            if (message.moPai != null && message.hasOwnProperty("moPai"))
                if (!$util.isInteger(message.moPai))
                    return "moPai: integer expected";
            return null;
        };

        /**
         * Creates a MahjongLiangDaoBroadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongLiangDaoBroadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongLiangDaoBroadcast} MahjongLiangDaoBroadcast
         */
        MahjongLiangDaoBroadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongLiangDaoBroadcast)
                return object;
            let message = new $root.msg.MahjongLiangDaoBroadcast();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.mahjongInHand) {
                if (!Array.isArray(object.mahjongInHand))
                    throw TypeError(".msg.MahjongLiangDaoBroadcast.mahjongInHand: array expected");
                message.mahjongInHand = [];
                for (let i = 0; i < object.mahjongInHand.length; ++i)
                    message.mahjongInHand[i] = object.mahjongInHand[i] | 0;
            }
            if (object.moPai != null)
                message.moPai = object.moPai | 0;
            return message;
        };

        /**
         * Creates a plain object from a MahjongLiangDaoBroadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongLiangDaoBroadcast
         * @static
         * @param {msg.MahjongLiangDaoBroadcast} message MahjongLiangDaoBroadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongLiangDaoBroadcast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.mahjongInHand = [];
            if (options.defaults) {
                object.userId = 0;
                object.moPai = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.mahjongInHand && message.mahjongInHand.length) {
                object.mahjongInHand = [];
                for (let j = 0; j < message.mahjongInHand.length; ++j)
                    object.mahjongInHand[j] = message.mahjongInHand[j];
            }
            if (message.moPai != null && message.hasOwnProperty("moPai"))
                object.moPai = message.moPai;
            return object;
        };

        /**
         * Converts this MahjongLiangDaoBroadcast to JSON.
         * @function toJSON
         * @memberof msg.MahjongLiangDaoBroadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongLiangDaoBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongLiangDaoBroadcast;
    })();

    msg.MahjongHuCmd = (function() {

        /**
         * Properties of a MahjongHuCmd.
         * @memberof msg
         * @interface IMahjongHuCmd
         */

        /**
         * Constructs a new MahjongHuCmd.
         * @memberof msg
         * @classdesc Represents a MahjongHuCmd.
         * @implements IMahjongHuCmd
         * @constructor
         * @param {msg.IMahjongHuCmd=} [properties] Properties to set
         */
        function MahjongHuCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new MahjongHuCmd instance using the specified properties.
         * @function create
         * @memberof msg.MahjongHuCmd
         * @static
         * @param {msg.IMahjongHuCmd=} [properties] Properties to set
         * @returns {msg.MahjongHuCmd} MahjongHuCmd instance
         */
        MahjongHuCmd.create = function create(properties) {
            return new MahjongHuCmd(properties);
        };

        /**
         * Encodes the specified MahjongHuCmd message. Does not implicitly {@link msg.MahjongHuCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongHuCmd
         * @static
         * @param {msg.IMahjongHuCmd} message MahjongHuCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongHuCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified MahjongHuCmd message, length delimited. Does not implicitly {@link msg.MahjongHuCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongHuCmd
         * @static
         * @param {msg.IMahjongHuCmd} message MahjongHuCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongHuCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongHuCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongHuCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongHuCmd} MahjongHuCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongHuCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongHuCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongHuCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongHuCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongHuCmd} MahjongHuCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongHuCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongHuCmd message.
         * @function verify
         * @memberof msg.MahjongHuCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongHuCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a MahjongHuCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongHuCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongHuCmd} MahjongHuCmd
         */
        MahjongHuCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongHuCmd)
                return object;
            return new $root.msg.MahjongHuCmd();
        };

        /**
         * Creates a plain object from a MahjongHuCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongHuCmd
         * @static
         * @param {msg.MahjongHuCmd} message MahjongHuCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongHuCmd.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this MahjongHuCmd to JSON.
         * @function toJSON
         * @memberof msg.MahjongHuCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongHuCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongHuCmd;
    })();

    msg.MahjongHuOrZiMoResult = (function() {

        /**
         * Properties of a MahjongHuOrZiMoResult.
         * @memberof msg
         * @interface IMahjongHuOrZiMoResult
         * @property {number|null} [t] MahjongHuOrZiMoResult t
         * @property {boolean|null} [hu] MahjongHuOrZiMoResult hu
         * @property {boolean|null} [ziMo] MahjongHuOrZiMoResult ziMo
         * @property {number|null} [dianPaoUserId] MahjongHuOrZiMoResult dianPaoUserId
         * @property {Array.<msg.IKeyAndVal>|null} [huPattern] MahjongHuOrZiMoResult huPattern
         */

        /**
         * Constructs a new MahjongHuOrZiMoResult.
         * @memberof msg
         * @classdesc Represents a MahjongHuOrZiMoResult.
         * @implements IMahjongHuOrZiMoResult
         * @constructor
         * @param {msg.IMahjongHuOrZiMoResult=} [properties] Properties to set
         */
        function MahjongHuOrZiMoResult(properties) {
            this.huPattern = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongHuOrZiMoResult t.
         * @member {number} t
         * @memberof msg.MahjongHuOrZiMoResult
         * @instance
         */
        MahjongHuOrZiMoResult.prototype.t = 0;

        /**
         * MahjongHuOrZiMoResult hu.
         * @member {boolean} hu
         * @memberof msg.MahjongHuOrZiMoResult
         * @instance
         */
        MahjongHuOrZiMoResult.prototype.hu = false;

        /**
         * MahjongHuOrZiMoResult ziMo.
         * @member {boolean} ziMo
         * @memberof msg.MahjongHuOrZiMoResult
         * @instance
         */
        MahjongHuOrZiMoResult.prototype.ziMo = false;

        /**
         * MahjongHuOrZiMoResult dianPaoUserId.
         * @member {number} dianPaoUserId
         * @memberof msg.MahjongHuOrZiMoResult
         * @instance
         */
        MahjongHuOrZiMoResult.prototype.dianPaoUserId = 0;

        /**
         * MahjongHuOrZiMoResult huPattern.
         * @member {Array.<msg.IKeyAndVal>} huPattern
         * @memberof msg.MahjongHuOrZiMoResult
         * @instance
         */
        MahjongHuOrZiMoResult.prototype.huPattern = $util.emptyArray;

        /**
         * Creates a new MahjongHuOrZiMoResult instance using the specified properties.
         * @function create
         * @memberof msg.MahjongHuOrZiMoResult
         * @static
         * @param {msg.IMahjongHuOrZiMoResult=} [properties] Properties to set
         * @returns {msg.MahjongHuOrZiMoResult} MahjongHuOrZiMoResult instance
         */
        MahjongHuOrZiMoResult.create = function create(properties) {
            return new MahjongHuOrZiMoResult(properties);
        };

        /**
         * Encodes the specified MahjongHuOrZiMoResult message. Does not implicitly {@link msg.MahjongHuOrZiMoResult.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongHuOrZiMoResult
         * @static
         * @param {msg.IMahjongHuOrZiMoResult} message MahjongHuOrZiMoResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongHuOrZiMoResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.t != null && Object.hasOwnProperty.call(message, "t"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.t);
            if (message.hu != null && Object.hasOwnProperty.call(message, "hu"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.hu);
            if (message.ziMo != null && Object.hasOwnProperty.call(message, "ziMo"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.ziMo);
            if (message.dianPaoUserId != null && Object.hasOwnProperty.call(message, "dianPaoUserId"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.dianPaoUserId);
            if (message.huPattern != null && message.huPattern.length)
                for (let i = 0; i < message.huPattern.length; ++i)
                    $root.msg.KeyAndVal.encode(message.huPattern[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MahjongHuOrZiMoResult message, length delimited. Does not implicitly {@link msg.MahjongHuOrZiMoResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongHuOrZiMoResult
         * @static
         * @param {msg.IMahjongHuOrZiMoResult} message MahjongHuOrZiMoResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongHuOrZiMoResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongHuOrZiMoResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongHuOrZiMoResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongHuOrZiMoResult} MahjongHuOrZiMoResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongHuOrZiMoResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongHuOrZiMoResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.t = reader.sint32();
                    break;
                case 2:
                    message.hu = reader.bool();
                    break;
                case 3:
                    message.ziMo = reader.bool();
                    break;
                case 4:
                    message.dianPaoUserId = reader.sint32();
                    break;
                case 5:
                    if (!(message.huPattern && message.huPattern.length))
                        message.huPattern = [];
                    message.huPattern.push($root.msg.KeyAndVal.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongHuOrZiMoResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongHuOrZiMoResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongHuOrZiMoResult} MahjongHuOrZiMoResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongHuOrZiMoResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongHuOrZiMoResult message.
         * @function verify
         * @memberof msg.MahjongHuOrZiMoResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongHuOrZiMoResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.t != null && message.hasOwnProperty("t"))
                if (!$util.isInteger(message.t))
                    return "t: integer expected";
            if (message.hu != null && message.hasOwnProperty("hu"))
                if (typeof message.hu !== "boolean")
                    return "hu: boolean expected";
            if (message.ziMo != null && message.hasOwnProperty("ziMo"))
                if (typeof message.ziMo !== "boolean")
                    return "ziMo: boolean expected";
            if (message.dianPaoUserId != null && message.hasOwnProperty("dianPaoUserId"))
                if (!$util.isInteger(message.dianPaoUserId))
                    return "dianPaoUserId: integer expected";
            if (message.huPattern != null && message.hasOwnProperty("huPattern")) {
                if (!Array.isArray(message.huPattern))
                    return "huPattern: array expected";
                for (let i = 0; i < message.huPattern.length; ++i) {
                    let error = $root.msg.KeyAndVal.verify(message.huPattern[i]);
                    if (error)
                        return "huPattern." + error;
                }
            }
            return null;
        };

        /**
         * Creates a MahjongHuOrZiMoResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongHuOrZiMoResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongHuOrZiMoResult} MahjongHuOrZiMoResult
         */
        MahjongHuOrZiMoResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongHuOrZiMoResult)
                return object;
            let message = new $root.msg.MahjongHuOrZiMoResult();
            if (object.t != null)
                message.t = object.t | 0;
            if (object.hu != null)
                message.hu = Boolean(object.hu);
            if (object.ziMo != null)
                message.ziMo = Boolean(object.ziMo);
            if (object.dianPaoUserId != null)
                message.dianPaoUserId = object.dianPaoUserId | 0;
            if (object.huPattern) {
                if (!Array.isArray(object.huPattern))
                    throw TypeError(".msg.MahjongHuOrZiMoResult.huPattern: array expected");
                message.huPattern = [];
                for (let i = 0; i < object.huPattern.length; ++i) {
                    if (typeof object.huPattern[i] !== "object")
                        throw TypeError(".msg.MahjongHuOrZiMoResult.huPattern: object expected");
                    message.huPattern[i] = $root.msg.KeyAndVal.fromObject(object.huPattern[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MahjongHuOrZiMoResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongHuOrZiMoResult
         * @static
         * @param {msg.MahjongHuOrZiMoResult} message MahjongHuOrZiMoResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongHuOrZiMoResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.huPattern = [];
            if (options.defaults) {
                object.t = 0;
                object.hu = false;
                object.ziMo = false;
                object.dianPaoUserId = 0;
            }
            if (message.t != null && message.hasOwnProperty("t"))
                object.t = message.t;
            if (message.hu != null && message.hasOwnProperty("hu"))
                object.hu = message.hu;
            if (message.ziMo != null && message.hasOwnProperty("ziMo"))
                object.ziMo = message.ziMo;
            if (message.dianPaoUserId != null && message.hasOwnProperty("dianPaoUserId"))
                object.dianPaoUserId = message.dianPaoUserId;
            if (message.huPattern && message.huPattern.length) {
                object.huPattern = [];
                for (let j = 0; j < message.huPattern.length; ++j)
                    object.huPattern[j] = $root.msg.KeyAndVal.toObject(message.huPattern[j], options);
            }
            return object;
        };

        /**
         * Converts this MahjongHuOrZiMoResult to JSON.
         * @function toJSON
         * @memberof msg.MahjongHuOrZiMoResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongHuOrZiMoResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongHuOrZiMoResult;
    })();

    msg.MahjongHuOrZiMoBroadcast = (function() {

        /**
         * Properties of a MahjongHuOrZiMoBroadcast.
         * @memberof msg
         * @interface IMahjongHuOrZiMoBroadcast
         * @property {number|null} [userId] MahjongHuOrZiMoBroadcast userId
         * @property {number|null} [t] MahjongHuOrZiMoBroadcast t
         * @property {boolean|null} [hu] MahjongHuOrZiMoBroadcast hu
         * @property {boolean|null} [ziMo] MahjongHuOrZiMoBroadcast ziMo
         * @property {number|null} [dianPaoUserId] MahjongHuOrZiMoBroadcast dianPaoUserId
         * @property {Array.<msg.IKeyAndVal>|null} [huPattern] MahjongHuOrZiMoBroadcast huPattern
         */

        /**
         * Constructs a new MahjongHuOrZiMoBroadcast.
         * @memberof msg
         * @classdesc Represents a MahjongHuOrZiMoBroadcast.
         * @implements IMahjongHuOrZiMoBroadcast
         * @constructor
         * @param {msg.IMahjongHuOrZiMoBroadcast=} [properties] Properties to set
         */
        function MahjongHuOrZiMoBroadcast(properties) {
            this.huPattern = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongHuOrZiMoBroadcast userId.
         * @member {number} userId
         * @memberof msg.MahjongHuOrZiMoBroadcast
         * @instance
         */
        MahjongHuOrZiMoBroadcast.prototype.userId = 0;

        /**
         * MahjongHuOrZiMoBroadcast t.
         * @member {number} t
         * @memberof msg.MahjongHuOrZiMoBroadcast
         * @instance
         */
        MahjongHuOrZiMoBroadcast.prototype.t = 0;

        /**
         * MahjongHuOrZiMoBroadcast hu.
         * @member {boolean} hu
         * @memberof msg.MahjongHuOrZiMoBroadcast
         * @instance
         */
        MahjongHuOrZiMoBroadcast.prototype.hu = false;

        /**
         * MahjongHuOrZiMoBroadcast ziMo.
         * @member {boolean} ziMo
         * @memberof msg.MahjongHuOrZiMoBroadcast
         * @instance
         */
        MahjongHuOrZiMoBroadcast.prototype.ziMo = false;

        /**
         * MahjongHuOrZiMoBroadcast dianPaoUserId.
         * @member {number} dianPaoUserId
         * @memberof msg.MahjongHuOrZiMoBroadcast
         * @instance
         */
        MahjongHuOrZiMoBroadcast.prototype.dianPaoUserId = 0;

        /**
         * MahjongHuOrZiMoBroadcast huPattern.
         * @member {Array.<msg.IKeyAndVal>} huPattern
         * @memberof msg.MahjongHuOrZiMoBroadcast
         * @instance
         */
        MahjongHuOrZiMoBroadcast.prototype.huPattern = $util.emptyArray;

        /**
         * Creates a new MahjongHuOrZiMoBroadcast instance using the specified properties.
         * @function create
         * @memberof msg.MahjongHuOrZiMoBroadcast
         * @static
         * @param {msg.IMahjongHuOrZiMoBroadcast=} [properties] Properties to set
         * @returns {msg.MahjongHuOrZiMoBroadcast} MahjongHuOrZiMoBroadcast instance
         */
        MahjongHuOrZiMoBroadcast.create = function create(properties) {
            return new MahjongHuOrZiMoBroadcast(properties);
        };

        /**
         * Encodes the specified MahjongHuOrZiMoBroadcast message. Does not implicitly {@link msg.MahjongHuOrZiMoBroadcast.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongHuOrZiMoBroadcast
         * @static
         * @param {msg.IMahjongHuOrZiMoBroadcast} message MahjongHuOrZiMoBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongHuOrZiMoBroadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userId);
            if (message.t != null && Object.hasOwnProperty.call(message, "t"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.t);
            if (message.hu != null && Object.hasOwnProperty.call(message, "hu"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.hu);
            if (message.ziMo != null && Object.hasOwnProperty.call(message, "ziMo"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.ziMo);
            if (message.dianPaoUserId != null && Object.hasOwnProperty.call(message, "dianPaoUserId"))
                writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.dianPaoUserId);
            if (message.huPattern != null && message.huPattern.length)
                for (let i = 0; i < message.huPattern.length; ++i)
                    $root.msg.KeyAndVal.encode(message.huPattern[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MahjongHuOrZiMoBroadcast message, length delimited. Does not implicitly {@link msg.MahjongHuOrZiMoBroadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongHuOrZiMoBroadcast
         * @static
         * @param {msg.IMahjongHuOrZiMoBroadcast} message MahjongHuOrZiMoBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongHuOrZiMoBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongHuOrZiMoBroadcast message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongHuOrZiMoBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongHuOrZiMoBroadcast} MahjongHuOrZiMoBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongHuOrZiMoBroadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongHuOrZiMoBroadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.sint32();
                    break;
                case 2:
                    message.t = reader.sint32();
                    break;
                case 3:
                    message.hu = reader.bool();
                    break;
                case 4:
                    message.ziMo = reader.bool();
                    break;
                case 5:
                    message.dianPaoUserId = reader.sint32();
                    break;
                case 6:
                    if (!(message.huPattern && message.huPattern.length))
                        message.huPattern = [];
                    message.huPattern.push($root.msg.KeyAndVal.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongHuOrZiMoBroadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongHuOrZiMoBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongHuOrZiMoBroadcast} MahjongHuOrZiMoBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongHuOrZiMoBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongHuOrZiMoBroadcast message.
         * @function verify
         * @memberof msg.MahjongHuOrZiMoBroadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongHuOrZiMoBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.t != null && message.hasOwnProperty("t"))
                if (!$util.isInteger(message.t))
                    return "t: integer expected";
            if (message.hu != null && message.hasOwnProperty("hu"))
                if (typeof message.hu !== "boolean")
                    return "hu: boolean expected";
            if (message.ziMo != null && message.hasOwnProperty("ziMo"))
                if (typeof message.ziMo !== "boolean")
                    return "ziMo: boolean expected";
            if (message.dianPaoUserId != null && message.hasOwnProperty("dianPaoUserId"))
                if (!$util.isInteger(message.dianPaoUserId))
                    return "dianPaoUserId: integer expected";
            if (message.huPattern != null && message.hasOwnProperty("huPattern")) {
                if (!Array.isArray(message.huPattern))
                    return "huPattern: array expected";
                for (let i = 0; i < message.huPattern.length; ++i) {
                    let error = $root.msg.KeyAndVal.verify(message.huPattern[i]);
                    if (error)
                        return "huPattern." + error;
                }
            }
            return null;
        };

        /**
         * Creates a MahjongHuOrZiMoBroadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongHuOrZiMoBroadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongHuOrZiMoBroadcast} MahjongHuOrZiMoBroadcast
         */
        MahjongHuOrZiMoBroadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongHuOrZiMoBroadcast)
                return object;
            let message = new $root.msg.MahjongHuOrZiMoBroadcast();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.t != null)
                message.t = object.t | 0;
            if (object.hu != null)
                message.hu = Boolean(object.hu);
            if (object.ziMo != null)
                message.ziMo = Boolean(object.ziMo);
            if (object.dianPaoUserId != null)
                message.dianPaoUserId = object.dianPaoUserId | 0;
            if (object.huPattern) {
                if (!Array.isArray(object.huPattern))
                    throw TypeError(".msg.MahjongHuOrZiMoBroadcast.huPattern: array expected");
                message.huPattern = [];
                for (let i = 0; i < object.huPattern.length; ++i) {
                    if (typeof object.huPattern[i] !== "object")
                        throw TypeError(".msg.MahjongHuOrZiMoBroadcast.huPattern: object expected");
                    message.huPattern[i] = $root.msg.KeyAndVal.fromObject(object.huPattern[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MahjongHuOrZiMoBroadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongHuOrZiMoBroadcast
         * @static
         * @param {msg.MahjongHuOrZiMoBroadcast} message MahjongHuOrZiMoBroadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongHuOrZiMoBroadcast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.huPattern = [];
            if (options.defaults) {
                object.userId = 0;
                object.t = 0;
                object.hu = false;
                object.ziMo = false;
                object.dianPaoUserId = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.t != null && message.hasOwnProperty("t"))
                object.t = message.t;
            if (message.hu != null && message.hasOwnProperty("hu"))
                object.hu = message.hu;
            if (message.ziMo != null && message.hasOwnProperty("ziMo"))
                object.ziMo = message.ziMo;
            if (message.dianPaoUserId != null && message.hasOwnProperty("dianPaoUserId"))
                object.dianPaoUserId = message.dianPaoUserId;
            if (message.huPattern && message.huPattern.length) {
                object.huPattern = [];
                for (let j = 0; j < message.huPattern.length; ++j)
                    object.huPattern[j] = $root.msg.KeyAndVal.toObject(message.huPattern[j], options);
            }
            return object;
        };

        /**
         * Converts this MahjongHuOrZiMoBroadcast to JSON.
         * @function toJSON
         * @memberof msg.MahjongHuOrZiMoBroadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongHuOrZiMoBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongHuOrZiMoBroadcast;
    })();

    msg.MahjongGuoCmd = (function() {

        /**
         * Properties of a MahjongGuoCmd.
         * @memberof msg
         * @interface IMahjongGuoCmd
         */

        /**
         * Constructs a new MahjongGuoCmd.
         * @memberof msg
         * @classdesc Represents a MahjongGuoCmd.
         * @implements IMahjongGuoCmd
         * @constructor
         * @param {msg.IMahjongGuoCmd=} [properties] Properties to set
         */
        function MahjongGuoCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new MahjongGuoCmd instance using the specified properties.
         * @function create
         * @memberof msg.MahjongGuoCmd
         * @static
         * @param {msg.IMahjongGuoCmd=} [properties] Properties to set
         * @returns {msg.MahjongGuoCmd} MahjongGuoCmd instance
         */
        MahjongGuoCmd.create = function create(properties) {
            return new MahjongGuoCmd(properties);
        };

        /**
         * Encodes the specified MahjongGuoCmd message. Does not implicitly {@link msg.MahjongGuoCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongGuoCmd
         * @static
         * @param {msg.IMahjongGuoCmd} message MahjongGuoCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongGuoCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified MahjongGuoCmd message, length delimited. Does not implicitly {@link msg.MahjongGuoCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongGuoCmd
         * @static
         * @param {msg.IMahjongGuoCmd} message MahjongGuoCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongGuoCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongGuoCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongGuoCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongGuoCmd} MahjongGuoCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongGuoCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongGuoCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongGuoCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongGuoCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongGuoCmd} MahjongGuoCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongGuoCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongGuoCmd message.
         * @function verify
         * @memberof msg.MahjongGuoCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongGuoCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a MahjongGuoCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongGuoCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongGuoCmd} MahjongGuoCmd
         */
        MahjongGuoCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongGuoCmd)
                return object;
            return new $root.msg.MahjongGuoCmd();
        };

        /**
         * Creates a plain object from a MahjongGuoCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongGuoCmd
         * @static
         * @param {msg.MahjongGuoCmd} message MahjongGuoCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongGuoCmd.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this MahjongGuoCmd to JSON.
         * @function toJSON
         * @memberof msg.MahjongGuoCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongGuoCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongGuoCmd;
    })();

    msg.MahjongGuoResult = (function() {

        /**
         * Properties of a MahjongGuoResult.
         * @memberof msg
         * @interface IMahjongGuoResult
         * @property {boolean|null} [ok] MahjongGuoResult ok
         */

        /**
         * Constructs a new MahjongGuoResult.
         * @memberof msg
         * @classdesc Represents a MahjongGuoResult.
         * @implements IMahjongGuoResult
         * @constructor
         * @param {msg.IMahjongGuoResult=} [properties] Properties to set
         */
        function MahjongGuoResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongGuoResult ok.
         * @member {boolean} ok
         * @memberof msg.MahjongGuoResult
         * @instance
         */
        MahjongGuoResult.prototype.ok = false;

        /**
         * Creates a new MahjongGuoResult instance using the specified properties.
         * @function create
         * @memberof msg.MahjongGuoResult
         * @static
         * @param {msg.IMahjongGuoResult=} [properties] Properties to set
         * @returns {msg.MahjongGuoResult} MahjongGuoResult instance
         */
        MahjongGuoResult.create = function create(properties) {
            return new MahjongGuoResult(properties);
        };

        /**
         * Encodes the specified MahjongGuoResult message. Does not implicitly {@link msg.MahjongGuoResult.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongGuoResult
         * @static
         * @param {msg.IMahjongGuoResult} message MahjongGuoResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongGuoResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ok);
            return writer;
        };

        /**
         * Encodes the specified MahjongGuoResult message, length delimited. Does not implicitly {@link msg.MahjongGuoResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongGuoResult
         * @static
         * @param {msg.IMahjongGuoResult} message MahjongGuoResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongGuoResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongGuoResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongGuoResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongGuoResult} MahjongGuoResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongGuoResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongGuoResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ok = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongGuoResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongGuoResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongGuoResult} MahjongGuoResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongGuoResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongGuoResult message.
         * @function verify
         * @memberof msg.MahjongGuoResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongGuoResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ok != null && message.hasOwnProperty("ok"))
                if (typeof message.ok !== "boolean")
                    return "ok: boolean expected";
            return null;
        };

        /**
         * Creates a MahjongGuoResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongGuoResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongGuoResult} MahjongGuoResult
         */
        MahjongGuoResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongGuoResult)
                return object;
            let message = new $root.msg.MahjongGuoResult();
            if (object.ok != null)
                message.ok = Boolean(object.ok);
            return message;
        };

        /**
         * Creates a plain object from a MahjongGuoResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongGuoResult
         * @static
         * @param {msg.MahjongGuoResult} message MahjongGuoResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongGuoResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.ok = false;
            if (message.ok != null && message.hasOwnProperty("ok"))
                object.ok = message.ok;
            return object;
        };

        /**
         * Converts this MahjongGuoResult to JSON.
         * @function toJSON
         * @memberof msg.MahjongGuoResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongGuoResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongGuoResult;
    })();

    msg.MahjongHuangZhuangBroadcast = (function() {

        /**
         * Properties of a MahjongHuangZhuangBroadcast.
         * @memberof msg
         * @interface IMahjongHuangZhuangBroadcast
         */

        /**
         * Constructs a new MahjongHuangZhuangBroadcast.
         * @memberof msg
         * @classdesc Represents a MahjongHuangZhuangBroadcast.
         * @implements IMahjongHuangZhuangBroadcast
         * @constructor
         * @param {msg.IMahjongHuangZhuangBroadcast=} [properties] Properties to set
         */
        function MahjongHuangZhuangBroadcast(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new MahjongHuangZhuangBroadcast instance using the specified properties.
         * @function create
         * @memberof msg.MahjongHuangZhuangBroadcast
         * @static
         * @param {msg.IMahjongHuangZhuangBroadcast=} [properties] Properties to set
         * @returns {msg.MahjongHuangZhuangBroadcast} MahjongHuangZhuangBroadcast instance
         */
        MahjongHuangZhuangBroadcast.create = function create(properties) {
            return new MahjongHuangZhuangBroadcast(properties);
        };

        /**
         * Encodes the specified MahjongHuangZhuangBroadcast message. Does not implicitly {@link msg.MahjongHuangZhuangBroadcast.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongHuangZhuangBroadcast
         * @static
         * @param {msg.IMahjongHuangZhuangBroadcast} message MahjongHuangZhuangBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongHuangZhuangBroadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified MahjongHuangZhuangBroadcast message, length delimited. Does not implicitly {@link msg.MahjongHuangZhuangBroadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongHuangZhuangBroadcast
         * @static
         * @param {msg.IMahjongHuangZhuangBroadcast} message MahjongHuangZhuangBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongHuangZhuangBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongHuangZhuangBroadcast message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongHuangZhuangBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongHuangZhuangBroadcast} MahjongHuangZhuangBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongHuangZhuangBroadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongHuangZhuangBroadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongHuangZhuangBroadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongHuangZhuangBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongHuangZhuangBroadcast} MahjongHuangZhuangBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongHuangZhuangBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongHuangZhuangBroadcast message.
         * @function verify
         * @memberof msg.MahjongHuangZhuangBroadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongHuangZhuangBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a MahjongHuangZhuangBroadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongHuangZhuangBroadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongHuangZhuangBroadcast} MahjongHuangZhuangBroadcast
         */
        MahjongHuangZhuangBroadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongHuangZhuangBroadcast)
                return object;
            return new $root.msg.MahjongHuangZhuangBroadcast();
        };

        /**
         * Creates a plain object from a MahjongHuangZhuangBroadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongHuangZhuangBroadcast
         * @static
         * @param {msg.MahjongHuangZhuangBroadcast} message MahjongHuangZhuangBroadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongHuangZhuangBroadcast.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this MahjongHuangZhuangBroadcast to JSON.
         * @function toJSON
         * @memberof msg.MahjongHuangZhuangBroadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongHuangZhuangBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongHuangZhuangBroadcast;
    })();

    msg.RoundSettlementBroadcast = (function() {

        /**
         * Properties of a RoundSettlementBroadcast.
         * @memberof msg
         * @interface IRoundSettlementBroadcast
         * @property {Array.<msg.RoundSettlementBroadcast.ISettlementItem>|null} [settlementItem] RoundSettlementBroadcast settlementItem
         */

        /**
         * Constructs a new RoundSettlementBroadcast.
         * @memberof msg
         * @classdesc Represents a RoundSettlementBroadcast.
         * @implements IRoundSettlementBroadcast
         * @constructor
         * @param {msg.IRoundSettlementBroadcast=} [properties] Properties to set
         */
        function RoundSettlementBroadcast(properties) {
            this.settlementItem = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoundSettlementBroadcast settlementItem.
         * @member {Array.<msg.RoundSettlementBroadcast.ISettlementItem>} settlementItem
         * @memberof msg.RoundSettlementBroadcast
         * @instance
         */
        RoundSettlementBroadcast.prototype.settlementItem = $util.emptyArray;

        /**
         * Creates a new RoundSettlementBroadcast instance using the specified properties.
         * @function create
         * @memberof msg.RoundSettlementBroadcast
         * @static
         * @param {msg.IRoundSettlementBroadcast=} [properties] Properties to set
         * @returns {msg.RoundSettlementBroadcast} RoundSettlementBroadcast instance
         */
        RoundSettlementBroadcast.create = function create(properties) {
            return new RoundSettlementBroadcast(properties);
        };

        /**
         * Encodes the specified RoundSettlementBroadcast message. Does not implicitly {@link msg.RoundSettlementBroadcast.verify|verify} messages.
         * @function encode
         * @memberof msg.RoundSettlementBroadcast
         * @static
         * @param {msg.IRoundSettlementBroadcast} message RoundSettlementBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoundSettlementBroadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.settlementItem != null && message.settlementItem.length)
                for (let i = 0; i < message.settlementItem.length; ++i)
                    $root.msg.RoundSettlementBroadcast.SettlementItem.encode(message.settlementItem[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RoundSettlementBroadcast message, length delimited. Does not implicitly {@link msg.RoundSettlementBroadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.RoundSettlementBroadcast
         * @static
         * @param {msg.IRoundSettlementBroadcast} message RoundSettlementBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoundSettlementBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoundSettlementBroadcast message from the specified reader or buffer.
         * @function decode
         * @memberof msg.RoundSettlementBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.RoundSettlementBroadcast} RoundSettlementBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoundSettlementBroadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.RoundSettlementBroadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.settlementItem && message.settlementItem.length))
                        message.settlementItem = [];
                    message.settlementItem.push($root.msg.RoundSettlementBroadcast.SettlementItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoundSettlementBroadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.RoundSettlementBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.RoundSettlementBroadcast} RoundSettlementBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoundSettlementBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoundSettlementBroadcast message.
         * @function verify
         * @memberof msg.RoundSettlementBroadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoundSettlementBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.settlementItem != null && message.hasOwnProperty("settlementItem")) {
                if (!Array.isArray(message.settlementItem))
                    return "settlementItem: array expected";
                for (let i = 0; i < message.settlementItem.length; ++i) {
                    let error = $root.msg.RoundSettlementBroadcast.SettlementItem.verify(message.settlementItem[i]);
                    if (error)
                        return "settlementItem." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RoundSettlementBroadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.RoundSettlementBroadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.RoundSettlementBroadcast} RoundSettlementBroadcast
         */
        RoundSettlementBroadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.RoundSettlementBroadcast)
                return object;
            let message = new $root.msg.RoundSettlementBroadcast();
            if (object.settlementItem) {
                if (!Array.isArray(object.settlementItem))
                    throw TypeError(".msg.RoundSettlementBroadcast.settlementItem: array expected");
                message.settlementItem = [];
                for (let i = 0; i < object.settlementItem.length; ++i) {
                    if (typeof object.settlementItem[i] !== "object")
                        throw TypeError(".msg.RoundSettlementBroadcast.settlementItem: object expected");
                    message.settlementItem[i] = $root.msg.RoundSettlementBroadcast.SettlementItem.fromObject(object.settlementItem[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RoundSettlementBroadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.RoundSettlementBroadcast
         * @static
         * @param {msg.RoundSettlementBroadcast} message RoundSettlementBroadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoundSettlementBroadcast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.settlementItem = [];
            if (message.settlementItem && message.settlementItem.length) {
                object.settlementItem = [];
                for (let j = 0; j < message.settlementItem.length; ++j)
                    object.settlementItem[j] = $root.msg.RoundSettlementBroadcast.SettlementItem.toObject(message.settlementItem[j], options);
            }
            return object;
        };

        /**
         * Converts this RoundSettlementBroadcast to JSON.
         * @function toJSON
         * @memberof msg.RoundSettlementBroadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoundSettlementBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        RoundSettlementBroadcast.SettlementItem = (function() {

            /**
             * Properties of a SettlementItem.
             * @memberof msg.RoundSettlementBroadcast
             * @interface ISettlementItem
             * @property {number|null} [userId] SettlementItem userId
             * @property {number|null} [currScore] SettlementItem currScore
             * @property {number|null} [totalScore] SettlementItem totalScore
             * @property {number|null} [seatIndex] SettlementItem seatIndex
             * @property {number|null} [piaoX] SettlementItem piaoX
             * @property {boolean|null} [roomOwnerFlag] SettlementItem roomOwnerFlag
             * @property {boolean|null} [zhuangJiaFlag] SettlementItem zhuangJiaFlag
             * @property {boolean|null} [hu] SettlementItem hu
             * @property {boolean|null} [dianPao] SettlementItem dianPao
             * @property {boolean|null} [ziMo] SettlementItem ziMo
             * @property {Array.<msg.IKeyAndVal>|null} [huPattern] SettlementItem huPattern
             * @property {Array.<msg.IKeyAndVal>|null} [gangPattern] SettlementItem gangPattern
             * @property {Array.<number>|null} [mahjongInHand] SettlementItem mahjongInHand
             * @property {number|null} [mahjongHuOrZiMo] SettlementItem mahjongHuOrZiMo
             * @property {Array.<msg.IMahjongChiPengGang>|null} [mahjongChiPengGang] SettlementItem mahjongChiPengGang
             * @property {msg.IMahjongLiangFeng|null} [mahjongLiangFeng] SettlementItem mahjongLiangFeng
             */

            /**
             * Constructs a new SettlementItem.
             * @memberof msg.RoundSettlementBroadcast
             * @classdesc Represents a SettlementItem.
             * @implements ISettlementItem
             * @constructor
             * @param {msg.RoundSettlementBroadcast.ISettlementItem=} [properties] Properties to set
             */
            function SettlementItem(properties) {
                this.huPattern = [];
                this.gangPattern = [];
                this.mahjongInHand = [];
                this.mahjongChiPengGang = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SettlementItem userId.
             * @member {number} userId
             * @memberof msg.RoundSettlementBroadcast.SettlementItem
             * @instance
             */
            SettlementItem.prototype.userId = 0;

            /**
             * SettlementItem currScore.
             * @member {number} currScore
             * @memberof msg.RoundSettlementBroadcast.SettlementItem
             * @instance
             */
            SettlementItem.prototype.currScore = 0;

            /**
             * SettlementItem totalScore.
             * @member {number} totalScore
             * @memberof msg.RoundSettlementBroadcast.SettlementItem
             * @instance
             */
            SettlementItem.prototype.totalScore = 0;

            /**
             * SettlementItem seatIndex.
             * @member {number} seatIndex
             * @memberof msg.RoundSettlementBroadcast.SettlementItem
             * @instance
             */
            SettlementItem.prototype.seatIndex = 0;

            /**
             * SettlementItem piaoX.
             * @member {number} piaoX
             * @memberof msg.RoundSettlementBroadcast.SettlementItem
             * @instance
             */
            SettlementItem.prototype.piaoX = 0;

            /**
             * SettlementItem roomOwnerFlag.
             * @member {boolean} roomOwnerFlag
             * @memberof msg.RoundSettlementBroadcast.SettlementItem
             * @instance
             */
            SettlementItem.prototype.roomOwnerFlag = false;

            /**
             * SettlementItem zhuangJiaFlag.
             * @member {boolean} zhuangJiaFlag
             * @memberof msg.RoundSettlementBroadcast.SettlementItem
             * @instance
             */
            SettlementItem.prototype.zhuangJiaFlag = false;

            /**
             * SettlementItem hu.
             * @member {boolean} hu
             * @memberof msg.RoundSettlementBroadcast.SettlementItem
             * @instance
             */
            SettlementItem.prototype.hu = false;

            /**
             * SettlementItem dianPao.
             * @member {boolean} dianPao
             * @memberof msg.RoundSettlementBroadcast.SettlementItem
             * @instance
             */
            SettlementItem.prototype.dianPao = false;

            /**
             * SettlementItem ziMo.
             * @member {boolean} ziMo
             * @memberof msg.RoundSettlementBroadcast.SettlementItem
             * @instance
             */
            SettlementItem.prototype.ziMo = false;

            /**
             * SettlementItem huPattern.
             * @member {Array.<msg.IKeyAndVal>} huPattern
             * @memberof msg.RoundSettlementBroadcast.SettlementItem
             * @instance
             */
            SettlementItem.prototype.huPattern = $util.emptyArray;

            /**
             * SettlementItem gangPattern.
             * @member {Array.<msg.IKeyAndVal>} gangPattern
             * @memberof msg.RoundSettlementBroadcast.SettlementItem
             * @instance
             */
            SettlementItem.prototype.gangPattern = $util.emptyArray;

            /**
             * SettlementItem mahjongInHand.
             * @member {Array.<number>} mahjongInHand
             * @memberof msg.RoundSettlementBroadcast.SettlementItem
             * @instance
             */
            SettlementItem.prototype.mahjongInHand = $util.emptyArray;

            /**
             * SettlementItem mahjongHuOrZiMo.
             * @member {number} mahjongHuOrZiMo
             * @memberof msg.RoundSettlementBroadcast.SettlementItem
             * @instance
             */
            SettlementItem.prototype.mahjongHuOrZiMo = 0;

            /**
             * SettlementItem mahjongChiPengGang.
             * @member {Array.<msg.IMahjongChiPengGang>} mahjongChiPengGang
             * @memberof msg.RoundSettlementBroadcast.SettlementItem
             * @instance
             */
            SettlementItem.prototype.mahjongChiPengGang = $util.emptyArray;

            /**
             * SettlementItem mahjongLiangFeng.
             * @member {msg.IMahjongLiangFeng|null|undefined} mahjongLiangFeng
             * @memberof msg.RoundSettlementBroadcast.SettlementItem
             * @instance
             */
            SettlementItem.prototype.mahjongLiangFeng = null;

            /**
             * Creates a new SettlementItem instance using the specified properties.
             * @function create
             * @memberof msg.RoundSettlementBroadcast.SettlementItem
             * @static
             * @param {msg.RoundSettlementBroadcast.ISettlementItem=} [properties] Properties to set
             * @returns {msg.RoundSettlementBroadcast.SettlementItem} SettlementItem instance
             */
            SettlementItem.create = function create(properties) {
                return new SettlementItem(properties);
            };

            /**
             * Encodes the specified SettlementItem message. Does not implicitly {@link msg.RoundSettlementBroadcast.SettlementItem.verify|verify} messages.
             * @function encode
             * @memberof msg.RoundSettlementBroadcast.SettlementItem
             * @static
             * @param {msg.RoundSettlementBroadcast.ISettlementItem} message SettlementItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SettlementItem.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userId);
                if (message.currScore != null && Object.hasOwnProperty.call(message, "currScore"))
                    writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.currScore);
                if (message.totalScore != null && Object.hasOwnProperty.call(message, "totalScore"))
                    writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.totalScore);
                if (message.seatIndex != null && Object.hasOwnProperty.call(message, "seatIndex"))
                    writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.seatIndex);
                if (message.piaoX != null && Object.hasOwnProperty.call(message, "piaoX"))
                    writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.piaoX);
                if (message.roomOwnerFlag != null && Object.hasOwnProperty.call(message, "roomOwnerFlag"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.roomOwnerFlag);
                if (message.zhuangJiaFlag != null && Object.hasOwnProperty.call(message, "zhuangJiaFlag"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.zhuangJiaFlag);
                if (message.hu != null && Object.hasOwnProperty.call(message, "hu"))
                    writer.uint32(/* id 8, wireType 0 =*/64).bool(message.hu);
                if (message.dianPao != null && Object.hasOwnProperty.call(message, "dianPao"))
                    writer.uint32(/* id 9, wireType 0 =*/72).bool(message.dianPao);
                if (message.ziMo != null && Object.hasOwnProperty.call(message, "ziMo"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.ziMo);
                if (message.huPattern != null && message.huPattern.length)
                    for (let i = 0; i < message.huPattern.length; ++i)
                        $root.msg.KeyAndVal.encode(message.huPattern[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                if (message.gangPattern != null && message.gangPattern.length)
                    for (let i = 0; i < message.gangPattern.length; ++i)
                        $root.msg.KeyAndVal.encode(message.gangPattern[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                if (message.mahjongInHand != null && message.mahjongInHand.length) {
                    writer.uint32(/* id 13, wireType 2 =*/106).fork();
                    for (let i = 0; i < message.mahjongInHand.length; ++i)
                        writer.sint32(message.mahjongInHand[i]);
                    writer.ldelim();
                }
                if (message.mahjongHuOrZiMo != null && Object.hasOwnProperty.call(message, "mahjongHuOrZiMo"))
                    writer.uint32(/* id 14, wireType 0 =*/112).sint32(message.mahjongHuOrZiMo);
                if (message.mahjongChiPengGang != null && message.mahjongChiPengGang.length)
                    for (let i = 0; i < message.mahjongChiPengGang.length; ++i)
                        $root.msg.MahjongChiPengGang.encode(message.mahjongChiPengGang[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
                if (message.mahjongLiangFeng != null && Object.hasOwnProperty.call(message, "mahjongLiangFeng"))
                    $root.msg.MahjongLiangFeng.encode(message.mahjongLiangFeng, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SettlementItem message, length delimited. Does not implicitly {@link msg.RoundSettlementBroadcast.SettlementItem.verify|verify} messages.
             * @function encodeDelimited
             * @memberof msg.RoundSettlementBroadcast.SettlementItem
             * @static
             * @param {msg.RoundSettlementBroadcast.ISettlementItem} message SettlementItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SettlementItem.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SettlementItem message from the specified reader or buffer.
             * @function decode
             * @memberof msg.RoundSettlementBroadcast.SettlementItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {msg.RoundSettlementBroadcast.SettlementItem} SettlementItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SettlementItem.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.RoundSettlementBroadcast.SettlementItem();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.userId = reader.sint32();
                        break;
                    case 2:
                        message.currScore = reader.sint32();
                        break;
                    case 3:
                        message.totalScore = reader.sint32();
                        break;
                    case 4:
                        message.seatIndex = reader.sint32();
                        break;
                    case 5:
                        message.piaoX = reader.sint32();
                        break;
                    case 6:
                        message.roomOwnerFlag = reader.bool();
                        break;
                    case 7:
                        message.zhuangJiaFlag = reader.bool();
                        break;
                    case 8:
                        message.hu = reader.bool();
                        break;
                    case 9:
                        message.dianPao = reader.bool();
                        break;
                    case 10:
                        message.ziMo = reader.bool();
                        break;
                    case 11:
                        if (!(message.huPattern && message.huPattern.length))
                            message.huPattern = [];
                        message.huPattern.push($root.msg.KeyAndVal.decode(reader, reader.uint32()));
                        break;
                    case 12:
                        if (!(message.gangPattern && message.gangPattern.length))
                            message.gangPattern = [];
                        message.gangPattern.push($root.msg.KeyAndVal.decode(reader, reader.uint32()));
                        break;
                    case 13:
                        if (!(message.mahjongInHand && message.mahjongInHand.length))
                            message.mahjongInHand = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.mahjongInHand.push(reader.sint32());
                        } else
                            message.mahjongInHand.push(reader.sint32());
                        break;
                    case 14:
                        message.mahjongHuOrZiMo = reader.sint32();
                        break;
                    case 15:
                        if (!(message.mahjongChiPengGang && message.mahjongChiPengGang.length))
                            message.mahjongChiPengGang = [];
                        message.mahjongChiPengGang.push($root.msg.MahjongChiPengGang.decode(reader, reader.uint32()));
                        break;
                    case 16:
                        message.mahjongLiangFeng = $root.msg.MahjongLiangFeng.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SettlementItem message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof msg.RoundSettlementBroadcast.SettlementItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {msg.RoundSettlementBroadcast.SettlementItem} SettlementItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SettlementItem.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SettlementItem message.
             * @function verify
             * @memberof msg.RoundSettlementBroadcast.SettlementItem
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SettlementItem.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId))
                        return "userId: integer expected";
                if (message.currScore != null && message.hasOwnProperty("currScore"))
                    if (!$util.isInteger(message.currScore))
                        return "currScore: integer expected";
                if (message.totalScore != null && message.hasOwnProperty("totalScore"))
                    if (!$util.isInteger(message.totalScore))
                        return "totalScore: integer expected";
                if (message.seatIndex != null && message.hasOwnProperty("seatIndex"))
                    if (!$util.isInteger(message.seatIndex))
                        return "seatIndex: integer expected";
                if (message.piaoX != null && message.hasOwnProperty("piaoX"))
                    if (!$util.isInteger(message.piaoX))
                        return "piaoX: integer expected";
                if (message.roomOwnerFlag != null && message.hasOwnProperty("roomOwnerFlag"))
                    if (typeof message.roomOwnerFlag !== "boolean")
                        return "roomOwnerFlag: boolean expected";
                if (message.zhuangJiaFlag != null && message.hasOwnProperty("zhuangJiaFlag"))
                    if (typeof message.zhuangJiaFlag !== "boolean")
                        return "zhuangJiaFlag: boolean expected";
                if (message.hu != null && message.hasOwnProperty("hu"))
                    if (typeof message.hu !== "boolean")
                        return "hu: boolean expected";
                if (message.dianPao != null && message.hasOwnProperty("dianPao"))
                    if (typeof message.dianPao !== "boolean")
                        return "dianPao: boolean expected";
                if (message.ziMo != null && message.hasOwnProperty("ziMo"))
                    if (typeof message.ziMo !== "boolean")
                        return "ziMo: boolean expected";
                if (message.huPattern != null && message.hasOwnProperty("huPattern")) {
                    if (!Array.isArray(message.huPattern))
                        return "huPattern: array expected";
                    for (let i = 0; i < message.huPattern.length; ++i) {
                        let error = $root.msg.KeyAndVal.verify(message.huPattern[i]);
                        if (error)
                            return "huPattern." + error;
                    }
                }
                if (message.gangPattern != null && message.hasOwnProperty("gangPattern")) {
                    if (!Array.isArray(message.gangPattern))
                        return "gangPattern: array expected";
                    for (let i = 0; i < message.gangPattern.length; ++i) {
                        let error = $root.msg.KeyAndVal.verify(message.gangPattern[i]);
                        if (error)
                            return "gangPattern." + error;
                    }
                }
                if (message.mahjongInHand != null && message.hasOwnProperty("mahjongInHand")) {
                    if (!Array.isArray(message.mahjongInHand))
                        return "mahjongInHand: array expected";
                    for (let i = 0; i < message.mahjongInHand.length; ++i)
                        if (!$util.isInteger(message.mahjongInHand[i]))
                            return "mahjongInHand: integer[] expected";
                }
                if (message.mahjongHuOrZiMo != null && message.hasOwnProperty("mahjongHuOrZiMo"))
                    if (!$util.isInteger(message.mahjongHuOrZiMo))
                        return "mahjongHuOrZiMo: integer expected";
                if (message.mahjongChiPengGang != null && message.hasOwnProperty("mahjongChiPengGang")) {
                    if (!Array.isArray(message.mahjongChiPengGang))
                        return "mahjongChiPengGang: array expected";
                    for (let i = 0; i < message.mahjongChiPengGang.length; ++i) {
                        let error = $root.msg.MahjongChiPengGang.verify(message.mahjongChiPengGang[i]);
                        if (error)
                            return "mahjongChiPengGang." + error;
                    }
                }
                if (message.mahjongLiangFeng != null && message.hasOwnProperty("mahjongLiangFeng")) {
                    let error = $root.msg.MahjongLiangFeng.verify(message.mahjongLiangFeng);
                    if (error)
                        return "mahjongLiangFeng." + error;
                }
                return null;
            };

            /**
             * Creates a SettlementItem message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof msg.RoundSettlementBroadcast.SettlementItem
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {msg.RoundSettlementBroadcast.SettlementItem} SettlementItem
             */
            SettlementItem.fromObject = function fromObject(object) {
                if (object instanceof $root.msg.RoundSettlementBroadcast.SettlementItem)
                    return object;
                let message = new $root.msg.RoundSettlementBroadcast.SettlementItem();
                if (object.userId != null)
                    message.userId = object.userId | 0;
                if (object.currScore != null)
                    message.currScore = object.currScore | 0;
                if (object.totalScore != null)
                    message.totalScore = object.totalScore | 0;
                if (object.seatIndex != null)
                    message.seatIndex = object.seatIndex | 0;
                if (object.piaoX != null)
                    message.piaoX = object.piaoX | 0;
                if (object.roomOwnerFlag != null)
                    message.roomOwnerFlag = Boolean(object.roomOwnerFlag);
                if (object.zhuangJiaFlag != null)
                    message.zhuangJiaFlag = Boolean(object.zhuangJiaFlag);
                if (object.hu != null)
                    message.hu = Boolean(object.hu);
                if (object.dianPao != null)
                    message.dianPao = Boolean(object.dianPao);
                if (object.ziMo != null)
                    message.ziMo = Boolean(object.ziMo);
                if (object.huPattern) {
                    if (!Array.isArray(object.huPattern))
                        throw TypeError(".msg.RoundSettlementBroadcast.SettlementItem.huPattern: array expected");
                    message.huPattern = [];
                    for (let i = 0; i < object.huPattern.length; ++i) {
                        if (typeof object.huPattern[i] !== "object")
                            throw TypeError(".msg.RoundSettlementBroadcast.SettlementItem.huPattern: object expected");
                        message.huPattern[i] = $root.msg.KeyAndVal.fromObject(object.huPattern[i]);
                    }
                }
                if (object.gangPattern) {
                    if (!Array.isArray(object.gangPattern))
                        throw TypeError(".msg.RoundSettlementBroadcast.SettlementItem.gangPattern: array expected");
                    message.gangPattern = [];
                    for (let i = 0; i < object.gangPattern.length; ++i) {
                        if (typeof object.gangPattern[i] !== "object")
                            throw TypeError(".msg.RoundSettlementBroadcast.SettlementItem.gangPattern: object expected");
                        message.gangPattern[i] = $root.msg.KeyAndVal.fromObject(object.gangPattern[i]);
                    }
                }
                if (object.mahjongInHand) {
                    if (!Array.isArray(object.mahjongInHand))
                        throw TypeError(".msg.RoundSettlementBroadcast.SettlementItem.mahjongInHand: array expected");
                    message.mahjongInHand = [];
                    for (let i = 0; i < object.mahjongInHand.length; ++i)
                        message.mahjongInHand[i] = object.mahjongInHand[i] | 0;
                }
                if (object.mahjongHuOrZiMo != null)
                    message.mahjongHuOrZiMo = object.mahjongHuOrZiMo | 0;
                if (object.mahjongChiPengGang) {
                    if (!Array.isArray(object.mahjongChiPengGang))
                        throw TypeError(".msg.RoundSettlementBroadcast.SettlementItem.mahjongChiPengGang: array expected");
                    message.mahjongChiPengGang = [];
                    for (let i = 0; i < object.mahjongChiPengGang.length; ++i) {
                        if (typeof object.mahjongChiPengGang[i] !== "object")
                            throw TypeError(".msg.RoundSettlementBroadcast.SettlementItem.mahjongChiPengGang: object expected");
                        message.mahjongChiPengGang[i] = $root.msg.MahjongChiPengGang.fromObject(object.mahjongChiPengGang[i]);
                    }
                }
                if (object.mahjongLiangFeng != null) {
                    if (typeof object.mahjongLiangFeng !== "object")
                        throw TypeError(".msg.RoundSettlementBroadcast.SettlementItem.mahjongLiangFeng: object expected");
                    message.mahjongLiangFeng = $root.msg.MahjongLiangFeng.fromObject(object.mahjongLiangFeng);
                }
                return message;
            };

            /**
             * Creates a plain object from a SettlementItem message. Also converts values to other types if specified.
             * @function toObject
             * @memberof msg.RoundSettlementBroadcast.SettlementItem
             * @static
             * @param {msg.RoundSettlementBroadcast.SettlementItem} message SettlementItem
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SettlementItem.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults) {
                    object.huPattern = [];
                    object.gangPattern = [];
                    object.mahjongInHand = [];
                    object.mahjongChiPengGang = [];
                }
                if (options.defaults) {
                    object.userId = 0;
                    object.currScore = 0;
                    object.totalScore = 0;
                    object.seatIndex = 0;
                    object.piaoX = 0;
                    object.roomOwnerFlag = false;
                    object.zhuangJiaFlag = false;
                    object.hu = false;
                    object.dianPao = false;
                    object.ziMo = false;
                    object.mahjongHuOrZiMo = 0;
                    object.mahjongLiangFeng = null;
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.currScore != null && message.hasOwnProperty("currScore"))
                    object.currScore = message.currScore;
                if (message.totalScore != null && message.hasOwnProperty("totalScore"))
                    object.totalScore = message.totalScore;
                if (message.seatIndex != null && message.hasOwnProperty("seatIndex"))
                    object.seatIndex = message.seatIndex;
                if (message.piaoX != null && message.hasOwnProperty("piaoX"))
                    object.piaoX = message.piaoX;
                if (message.roomOwnerFlag != null && message.hasOwnProperty("roomOwnerFlag"))
                    object.roomOwnerFlag = message.roomOwnerFlag;
                if (message.zhuangJiaFlag != null && message.hasOwnProperty("zhuangJiaFlag"))
                    object.zhuangJiaFlag = message.zhuangJiaFlag;
                if (message.hu != null && message.hasOwnProperty("hu"))
                    object.hu = message.hu;
                if (message.dianPao != null && message.hasOwnProperty("dianPao"))
                    object.dianPao = message.dianPao;
                if (message.ziMo != null && message.hasOwnProperty("ziMo"))
                    object.ziMo = message.ziMo;
                if (message.huPattern && message.huPattern.length) {
                    object.huPattern = [];
                    for (let j = 0; j < message.huPattern.length; ++j)
                        object.huPattern[j] = $root.msg.KeyAndVal.toObject(message.huPattern[j], options);
                }
                if (message.gangPattern && message.gangPattern.length) {
                    object.gangPattern = [];
                    for (let j = 0; j < message.gangPattern.length; ++j)
                        object.gangPattern[j] = $root.msg.KeyAndVal.toObject(message.gangPattern[j], options);
                }
                if (message.mahjongInHand && message.mahjongInHand.length) {
                    object.mahjongInHand = [];
                    for (let j = 0; j < message.mahjongInHand.length; ++j)
                        object.mahjongInHand[j] = message.mahjongInHand[j];
                }
                if (message.mahjongHuOrZiMo != null && message.hasOwnProperty("mahjongHuOrZiMo"))
                    object.mahjongHuOrZiMo = message.mahjongHuOrZiMo;
                if (message.mahjongChiPengGang && message.mahjongChiPengGang.length) {
                    object.mahjongChiPengGang = [];
                    for (let j = 0; j < message.mahjongChiPengGang.length; ++j)
                        object.mahjongChiPengGang[j] = $root.msg.MahjongChiPengGang.toObject(message.mahjongChiPengGang[j], options);
                }
                if (message.mahjongLiangFeng != null && message.hasOwnProperty("mahjongLiangFeng"))
                    object.mahjongLiangFeng = $root.msg.MahjongLiangFeng.toObject(message.mahjongLiangFeng, options);
                return object;
            };

            /**
             * Converts this SettlementItem to JSON.
             * @function toJSON
             * @memberof msg.RoundSettlementBroadcast.SettlementItem
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SettlementItem.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SettlementItem;
        })();

        return RoundSettlementBroadcast;
    })();

    msg.RoomSettlementBroadcast = (function() {

        /**
         * Properties of a RoomSettlementBroadcast.
         * @memberof msg
         * @interface IRoomSettlementBroadcast
         * @property {Array.<msg.RoomSettlementBroadcast.ISettlementItem>|null} [settlementItem] RoomSettlementBroadcast settlementItem
         */

        /**
         * Constructs a new RoomSettlementBroadcast.
         * @memberof msg
         * @classdesc Represents a RoomSettlementBroadcast.
         * @implements IRoomSettlementBroadcast
         * @constructor
         * @param {msg.IRoomSettlementBroadcast=} [properties] Properties to set
         */
        function RoomSettlementBroadcast(properties) {
            this.settlementItem = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomSettlementBroadcast settlementItem.
         * @member {Array.<msg.RoomSettlementBroadcast.ISettlementItem>} settlementItem
         * @memberof msg.RoomSettlementBroadcast
         * @instance
         */
        RoomSettlementBroadcast.prototype.settlementItem = $util.emptyArray;

        /**
         * Creates a new RoomSettlementBroadcast instance using the specified properties.
         * @function create
         * @memberof msg.RoomSettlementBroadcast
         * @static
         * @param {msg.IRoomSettlementBroadcast=} [properties] Properties to set
         * @returns {msg.RoomSettlementBroadcast} RoomSettlementBroadcast instance
         */
        RoomSettlementBroadcast.create = function create(properties) {
            return new RoomSettlementBroadcast(properties);
        };

        /**
         * Encodes the specified RoomSettlementBroadcast message. Does not implicitly {@link msg.RoomSettlementBroadcast.verify|verify} messages.
         * @function encode
         * @memberof msg.RoomSettlementBroadcast
         * @static
         * @param {msg.IRoomSettlementBroadcast} message RoomSettlementBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomSettlementBroadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.settlementItem != null && message.settlementItem.length)
                for (let i = 0; i < message.settlementItem.length; ++i)
                    $root.msg.RoomSettlementBroadcast.SettlementItem.encode(message.settlementItem[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RoomSettlementBroadcast message, length delimited. Does not implicitly {@link msg.RoomSettlementBroadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.RoomSettlementBroadcast
         * @static
         * @param {msg.IRoomSettlementBroadcast} message RoomSettlementBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomSettlementBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomSettlementBroadcast message from the specified reader or buffer.
         * @function decode
         * @memberof msg.RoomSettlementBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.RoomSettlementBroadcast} RoomSettlementBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomSettlementBroadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.RoomSettlementBroadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.settlementItem && message.settlementItem.length))
                        message.settlementItem = [];
                    message.settlementItem.push($root.msg.RoomSettlementBroadcast.SettlementItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomSettlementBroadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.RoomSettlementBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.RoomSettlementBroadcast} RoomSettlementBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomSettlementBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomSettlementBroadcast message.
         * @function verify
         * @memberof msg.RoomSettlementBroadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomSettlementBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.settlementItem != null && message.hasOwnProperty("settlementItem")) {
                if (!Array.isArray(message.settlementItem))
                    return "settlementItem: array expected";
                for (let i = 0; i < message.settlementItem.length; ++i) {
                    let error = $root.msg.RoomSettlementBroadcast.SettlementItem.verify(message.settlementItem[i]);
                    if (error)
                        return "settlementItem." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RoomSettlementBroadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.RoomSettlementBroadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.RoomSettlementBroadcast} RoomSettlementBroadcast
         */
        RoomSettlementBroadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.RoomSettlementBroadcast)
                return object;
            let message = new $root.msg.RoomSettlementBroadcast();
            if (object.settlementItem) {
                if (!Array.isArray(object.settlementItem))
                    throw TypeError(".msg.RoomSettlementBroadcast.settlementItem: array expected");
                message.settlementItem = [];
                for (let i = 0; i < object.settlementItem.length; ++i) {
                    if (typeof object.settlementItem[i] !== "object")
                        throw TypeError(".msg.RoomSettlementBroadcast.settlementItem: object expected");
                    message.settlementItem[i] = $root.msg.RoomSettlementBroadcast.SettlementItem.fromObject(object.settlementItem[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RoomSettlementBroadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.RoomSettlementBroadcast
         * @static
         * @param {msg.RoomSettlementBroadcast} message RoomSettlementBroadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomSettlementBroadcast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.settlementItem = [];
            if (message.settlementItem && message.settlementItem.length) {
                object.settlementItem = [];
                for (let j = 0; j < message.settlementItem.length; ++j)
                    object.settlementItem[j] = $root.msg.RoomSettlementBroadcast.SettlementItem.toObject(message.settlementItem[j], options);
            }
            return object;
        };

        /**
         * Converts this RoomSettlementBroadcast to JSON.
         * @function toJSON
         * @memberof msg.RoomSettlementBroadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomSettlementBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        RoomSettlementBroadcast.SettlementItem = (function() {

            /**
             * Properties of a SettlementItem.
             * @memberof msg.RoomSettlementBroadcast
             * @interface ISettlementItem
             * @property {number|null} [userId] SettlementItem userId
             * @property {number|null} [seatIndex] SettlementItem seatIndex
             * @property {boolean|null} [roomOwnerFlag] SettlementItem roomOwnerFlag
             * @property {number|null} [zuoZhuangTimez] SettlementItem zuoZhuangTimez
             * @property {number|null} [ziMoTimez] SettlementItem ziMoTimez
             * @property {number|null} [dianPaoTimez] SettlementItem dianPaoTimez
             * @property {number|null} [huPaiTimez] SettlementItem huPaiTimez
             * @property {number|null} [totalScore] SettlementItem totalScore
             * @property {boolean|null} [bigWinner] SettlementItem bigWinner
             */

            /**
             * Constructs a new SettlementItem.
             * @memberof msg.RoomSettlementBroadcast
             * @classdesc Represents a SettlementItem.
             * @implements ISettlementItem
             * @constructor
             * @param {msg.RoomSettlementBroadcast.ISettlementItem=} [properties] Properties to set
             */
            function SettlementItem(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SettlementItem userId.
             * @member {number} userId
             * @memberof msg.RoomSettlementBroadcast.SettlementItem
             * @instance
             */
            SettlementItem.prototype.userId = 0;

            /**
             * SettlementItem seatIndex.
             * @member {number} seatIndex
             * @memberof msg.RoomSettlementBroadcast.SettlementItem
             * @instance
             */
            SettlementItem.prototype.seatIndex = 0;

            /**
             * SettlementItem roomOwnerFlag.
             * @member {boolean} roomOwnerFlag
             * @memberof msg.RoomSettlementBroadcast.SettlementItem
             * @instance
             */
            SettlementItem.prototype.roomOwnerFlag = false;

            /**
             * SettlementItem zuoZhuangTimez.
             * @member {number} zuoZhuangTimez
             * @memberof msg.RoomSettlementBroadcast.SettlementItem
             * @instance
             */
            SettlementItem.prototype.zuoZhuangTimez = 0;

            /**
             * SettlementItem ziMoTimez.
             * @member {number} ziMoTimez
             * @memberof msg.RoomSettlementBroadcast.SettlementItem
             * @instance
             */
            SettlementItem.prototype.ziMoTimez = 0;

            /**
             * SettlementItem dianPaoTimez.
             * @member {number} dianPaoTimez
             * @memberof msg.RoomSettlementBroadcast.SettlementItem
             * @instance
             */
            SettlementItem.prototype.dianPaoTimez = 0;

            /**
             * SettlementItem huPaiTimez.
             * @member {number} huPaiTimez
             * @memberof msg.RoomSettlementBroadcast.SettlementItem
             * @instance
             */
            SettlementItem.prototype.huPaiTimez = 0;

            /**
             * SettlementItem totalScore.
             * @member {number} totalScore
             * @memberof msg.RoomSettlementBroadcast.SettlementItem
             * @instance
             */
            SettlementItem.prototype.totalScore = 0;

            /**
             * SettlementItem bigWinner.
             * @member {boolean} bigWinner
             * @memberof msg.RoomSettlementBroadcast.SettlementItem
             * @instance
             */
            SettlementItem.prototype.bigWinner = false;

            /**
             * Creates a new SettlementItem instance using the specified properties.
             * @function create
             * @memberof msg.RoomSettlementBroadcast.SettlementItem
             * @static
             * @param {msg.RoomSettlementBroadcast.ISettlementItem=} [properties] Properties to set
             * @returns {msg.RoomSettlementBroadcast.SettlementItem} SettlementItem instance
             */
            SettlementItem.create = function create(properties) {
                return new SettlementItem(properties);
            };

            /**
             * Encodes the specified SettlementItem message. Does not implicitly {@link msg.RoomSettlementBroadcast.SettlementItem.verify|verify} messages.
             * @function encode
             * @memberof msg.RoomSettlementBroadcast.SettlementItem
             * @static
             * @param {msg.RoomSettlementBroadcast.ISettlementItem} message SettlementItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SettlementItem.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userId);
                if (message.seatIndex != null && Object.hasOwnProperty.call(message, "seatIndex"))
                    writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.seatIndex);
                if (message.roomOwnerFlag != null && Object.hasOwnProperty.call(message, "roomOwnerFlag"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.roomOwnerFlag);
                if (message.zuoZhuangTimez != null && Object.hasOwnProperty.call(message, "zuoZhuangTimez"))
                    writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.zuoZhuangTimez);
                if (message.ziMoTimez != null && Object.hasOwnProperty.call(message, "ziMoTimez"))
                    writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.ziMoTimez);
                if (message.dianPaoTimez != null && Object.hasOwnProperty.call(message, "dianPaoTimez"))
                    writer.uint32(/* id 6, wireType 0 =*/48).sint32(message.dianPaoTimez);
                if (message.huPaiTimez != null && Object.hasOwnProperty.call(message, "huPaiTimez"))
                    writer.uint32(/* id 7, wireType 0 =*/56).sint32(message.huPaiTimez);
                if (message.totalScore != null && Object.hasOwnProperty.call(message, "totalScore"))
                    writer.uint32(/* id 8, wireType 0 =*/64).sint32(message.totalScore);
                if (message.bigWinner != null && Object.hasOwnProperty.call(message, "bigWinner"))
                    writer.uint32(/* id 9, wireType 0 =*/72).bool(message.bigWinner);
                return writer;
            };

            /**
             * Encodes the specified SettlementItem message, length delimited. Does not implicitly {@link msg.RoomSettlementBroadcast.SettlementItem.verify|verify} messages.
             * @function encodeDelimited
             * @memberof msg.RoomSettlementBroadcast.SettlementItem
             * @static
             * @param {msg.RoomSettlementBroadcast.ISettlementItem} message SettlementItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SettlementItem.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SettlementItem message from the specified reader or buffer.
             * @function decode
             * @memberof msg.RoomSettlementBroadcast.SettlementItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {msg.RoomSettlementBroadcast.SettlementItem} SettlementItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SettlementItem.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.RoomSettlementBroadcast.SettlementItem();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.userId = reader.sint32();
                        break;
                    case 2:
                        message.seatIndex = reader.sint32();
                        break;
                    case 3:
                        message.roomOwnerFlag = reader.bool();
                        break;
                    case 4:
                        message.zuoZhuangTimez = reader.sint32();
                        break;
                    case 5:
                        message.ziMoTimez = reader.sint32();
                        break;
                    case 6:
                        message.dianPaoTimez = reader.sint32();
                        break;
                    case 7:
                        message.huPaiTimez = reader.sint32();
                        break;
                    case 8:
                        message.totalScore = reader.sint32();
                        break;
                    case 9:
                        message.bigWinner = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SettlementItem message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof msg.RoomSettlementBroadcast.SettlementItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {msg.RoomSettlementBroadcast.SettlementItem} SettlementItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SettlementItem.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SettlementItem message.
             * @function verify
             * @memberof msg.RoomSettlementBroadcast.SettlementItem
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SettlementItem.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId))
                        return "userId: integer expected";
                if (message.seatIndex != null && message.hasOwnProperty("seatIndex"))
                    if (!$util.isInteger(message.seatIndex))
                        return "seatIndex: integer expected";
                if (message.roomOwnerFlag != null && message.hasOwnProperty("roomOwnerFlag"))
                    if (typeof message.roomOwnerFlag !== "boolean")
                        return "roomOwnerFlag: boolean expected";
                if (message.zuoZhuangTimez != null && message.hasOwnProperty("zuoZhuangTimez"))
                    if (!$util.isInteger(message.zuoZhuangTimez))
                        return "zuoZhuangTimez: integer expected";
                if (message.ziMoTimez != null && message.hasOwnProperty("ziMoTimez"))
                    if (!$util.isInteger(message.ziMoTimez))
                        return "ziMoTimez: integer expected";
                if (message.dianPaoTimez != null && message.hasOwnProperty("dianPaoTimez"))
                    if (!$util.isInteger(message.dianPaoTimez))
                        return "dianPaoTimez: integer expected";
                if (message.huPaiTimez != null && message.hasOwnProperty("huPaiTimez"))
                    if (!$util.isInteger(message.huPaiTimez))
                        return "huPaiTimez: integer expected";
                if (message.totalScore != null && message.hasOwnProperty("totalScore"))
                    if (!$util.isInteger(message.totalScore))
                        return "totalScore: integer expected";
                if (message.bigWinner != null && message.hasOwnProperty("bigWinner"))
                    if (typeof message.bigWinner !== "boolean")
                        return "bigWinner: boolean expected";
                return null;
            };

            /**
             * Creates a SettlementItem message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof msg.RoomSettlementBroadcast.SettlementItem
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {msg.RoomSettlementBroadcast.SettlementItem} SettlementItem
             */
            SettlementItem.fromObject = function fromObject(object) {
                if (object instanceof $root.msg.RoomSettlementBroadcast.SettlementItem)
                    return object;
                let message = new $root.msg.RoomSettlementBroadcast.SettlementItem();
                if (object.userId != null)
                    message.userId = object.userId | 0;
                if (object.seatIndex != null)
                    message.seatIndex = object.seatIndex | 0;
                if (object.roomOwnerFlag != null)
                    message.roomOwnerFlag = Boolean(object.roomOwnerFlag);
                if (object.zuoZhuangTimez != null)
                    message.zuoZhuangTimez = object.zuoZhuangTimez | 0;
                if (object.ziMoTimez != null)
                    message.ziMoTimez = object.ziMoTimez | 0;
                if (object.dianPaoTimez != null)
                    message.dianPaoTimez = object.dianPaoTimez | 0;
                if (object.huPaiTimez != null)
                    message.huPaiTimez = object.huPaiTimez | 0;
                if (object.totalScore != null)
                    message.totalScore = object.totalScore | 0;
                if (object.bigWinner != null)
                    message.bigWinner = Boolean(object.bigWinner);
                return message;
            };

            /**
             * Creates a plain object from a SettlementItem message. Also converts values to other types if specified.
             * @function toObject
             * @memberof msg.RoomSettlementBroadcast.SettlementItem
             * @static
             * @param {msg.RoomSettlementBroadcast.SettlementItem} message SettlementItem
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SettlementItem.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.userId = 0;
                    object.seatIndex = 0;
                    object.roomOwnerFlag = false;
                    object.zuoZhuangTimez = 0;
                    object.ziMoTimez = 0;
                    object.dianPaoTimez = 0;
                    object.huPaiTimez = 0;
                    object.totalScore = 0;
                    object.bigWinner = false;
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.seatIndex != null && message.hasOwnProperty("seatIndex"))
                    object.seatIndex = message.seatIndex;
                if (message.roomOwnerFlag != null && message.hasOwnProperty("roomOwnerFlag"))
                    object.roomOwnerFlag = message.roomOwnerFlag;
                if (message.zuoZhuangTimez != null && message.hasOwnProperty("zuoZhuangTimez"))
                    object.zuoZhuangTimez = message.zuoZhuangTimez;
                if (message.ziMoTimez != null && message.hasOwnProperty("ziMoTimez"))
                    object.ziMoTimez = message.ziMoTimez;
                if (message.dianPaoTimez != null && message.hasOwnProperty("dianPaoTimez"))
                    object.dianPaoTimez = message.dianPaoTimez;
                if (message.huPaiTimez != null && message.hasOwnProperty("huPaiTimez"))
                    object.huPaiTimez = message.huPaiTimez;
                if (message.totalScore != null && message.hasOwnProperty("totalScore"))
                    object.totalScore = message.totalScore;
                if (message.bigWinner != null && message.hasOwnProperty("bigWinner"))
                    object.bigWinner = message.bigWinner;
                return object;
            };

            /**
             * Converts this SettlementItem to JSON.
             * @function toJSON
             * @memberof msg.RoomSettlementBroadcast.SettlementItem
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SettlementItem.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SettlementItem;
        })();

        return RoomSettlementBroadcast;
    })();

    msg.MahjongLiangFengCmd = (function() {

        /**
         * Properties of a MahjongLiangFengCmd.
         * @memberof msg
         * @interface IMahjongLiangFengCmd
         * @property {number|null} [t0] MahjongLiangFengCmd t0
         * @property {number|null} [t1] MahjongLiangFengCmd t1
         * @property {number|null} [t2] MahjongLiangFengCmd t2
         */

        /**
         * Constructs a new MahjongLiangFengCmd.
         * @memberof msg
         * @classdesc Represents a MahjongLiangFengCmd.
         * @implements IMahjongLiangFengCmd
         * @constructor
         * @param {msg.IMahjongLiangFengCmd=} [properties] Properties to set
         */
        function MahjongLiangFengCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongLiangFengCmd t0.
         * @member {number} t0
         * @memberof msg.MahjongLiangFengCmd
         * @instance
         */
        MahjongLiangFengCmd.prototype.t0 = 0;

        /**
         * MahjongLiangFengCmd t1.
         * @member {number} t1
         * @memberof msg.MahjongLiangFengCmd
         * @instance
         */
        MahjongLiangFengCmd.prototype.t1 = 0;

        /**
         * MahjongLiangFengCmd t2.
         * @member {number} t2
         * @memberof msg.MahjongLiangFengCmd
         * @instance
         */
        MahjongLiangFengCmd.prototype.t2 = 0;

        /**
         * Creates a new MahjongLiangFengCmd instance using the specified properties.
         * @function create
         * @memberof msg.MahjongLiangFengCmd
         * @static
         * @param {msg.IMahjongLiangFengCmd=} [properties] Properties to set
         * @returns {msg.MahjongLiangFengCmd} MahjongLiangFengCmd instance
         */
        MahjongLiangFengCmd.create = function create(properties) {
            return new MahjongLiangFengCmd(properties);
        };

        /**
         * Encodes the specified MahjongLiangFengCmd message. Does not implicitly {@link msg.MahjongLiangFengCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongLiangFengCmd
         * @static
         * @param {msg.IMahjongLiangFengCmd} message MahjongLiangFengCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongLiangFengCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.t0 != null && Object.hasOwnProperty.call(message, "t0"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.t0);
            if (message.t1 != null && Object.hasOwnProperty.call(message, "t1"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.t1);
            if (message.t2 != null && Object.hasOwnProperty.call(message, "t2"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.t2);
            return writer;
        };

        /**
         * Encodes the specified MahjongLiangFengCmd message, length delimited. Does not implicitly {@link msg.MahjongLiangFengCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongLiangFengCmd
         * @static
         * @param {msg.IMahjongLiangFengCmd} message MahjongLiangFengCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongLiangFengCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongLiangFengCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongLiangFengCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongLiangFengCmd} MahjongLiangFengCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongLiangFengCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongLiangFengCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.t0 = reader.sint32();
                    break;
                case 2:
                    message.t1 = reader.sint32();
                    break;
                case 3:
                    message.t2 = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongLiangFengCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongLiangFengCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongLiangFengCmd} MahjongLiangFengCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongLiangFengCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongLiangFengCmd message.
         * @function verify
         * @memberof msg.MahjongLiangFengCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongLiangFengCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.t0 != null && message.hasOwnProperty("t0"))
                if (!$util.isInteger(message.t0))
                    return "t0: integer expected";
            if (message.t1 != null && message.hasOwnProperty("t1"))
                if (!$util.isInteger(message.t1))
                    return "t1: integer expected";
            if (message.t2 != null && message.hasOwnProperty("t2"))
                if (!$util.isInteger(message.t2))
                    return "t2: integer expected";
            return null;
        };

        /**
         * Creates a MahjongLiangFengCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongLiangFengCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongLiangFengCmd} MahjongLiangFengCmd
         */
        MahjongLiangFengCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongLiangFengCmd)
                return object;
            let message = new $root.msg.MahjongLiangFengCmd();
            if (object.t0 != null)
                message.t0 = object.t0 | 0;
            if (object.t1 != null)
                message.t1 = object.t1 | 0;
            if (object.t2 != null)
                message.t2 = object.t2 | 0;
            return message;
        };

        /**
         * Creates a plain object from a MahjongLiangFengCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongLiangFengCmd
         * @static
         * @param {msg.MahjongLiangFengCmd} message MahjongLiangFengCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongLiangFengCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.t0 = 0;
                object.t1 = 0;
                object.t2 = 0;
            }
            if (message.t0 != null && message.hasOwnProperty("t0"))
                object.t0 = message.t0;
            if (message.t1 != null && message.hasOwnProperty("t1"))
                object.t1 = message.t1;
            if (message.t2 != null && message.hasOwnProperty("t2"))
                object.t2 = message.t2;
            return object;
        };

        /**
         * Converts this MahjongLiangFengCmd to JSON.
         * @function toJSON
         * @memberof msg.MahjongLiangFengCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongLiangFengCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongLiangFengCmd;
    })();

    msg.MahjongLiangFengResult = (function() {

        /**
         * Properties of a MahjongLiangFengResult.
         * @memberof msg
         * @interface IMahjongLiangFengResult
         * @property {msg.IMahjongLiangFeng|null} [mahjongLiangFeng] MahjongLiangFengResult mahjongLiangFeng
         */

        /**
         * Constructs a new MahjongLiangFengResult.
         * @memberof msg
         * @classdesc Represents a MahjongLiangFengResult.
         * @implements IMahjongLiangFengResult
         * @constructor
         * @param {msg.IMahjongLiangFengResult=} [properties] Properties to set
         */
        function MahjongLiangFengResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongLiangFengResult mahjongLiangFeng.
         * @member {msg.IMahjongLiangFeng|null|undefined} mahjongLiangFeng
         * @memberof msg.MahjongLiangFengResult
         * @instance
         */
        MahjongLiangFengResult.prototype.mahjongLiangFeng = null;

        /**
         * Creates a new MahjongLiangFengResult instance using the specified properties.
         * @function create
         * @memberof msg.MahjongLiangFengResult
         * @static
         * @param {msg.IMahjongLiangFengResult=} [properties] Properties to set
         * @returns {msg.MahjongLiangFengResult} MahjongLiangFengResult instance
         */
        MahjongLiangFengResult.create = function create(properties) {
            return new MahjongLiangFengResult(properties);
        };

        /**
         * Encodes the specified MahjongLiangFengResult message. Does not implicitly {@link msg.MahjongLiangFengResult.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongLiangFengResult
         * @static
         * @param {msg.IMahjongLiangFengResult} message MahjongLiangFengResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongLiangFengResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mahjongLiangFeng != null && Object.hasOwnProperty.call(message, "mahjongLiangFeng"))
                $root.msg.MahjongLiangFeng.encode(message.mahjongLiangFeng, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MahjongLiangFengResult message, length delimited. Does not implicitly {@link msg.MahjongLiangFengResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongLiangFengResult
         * @static
         * @param {msg.IMahjongLiangFengResult} message MahjongLiangFengResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongLiangFengResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongLiangFengResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongLiangFengResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongLiangFengResult} MahjongLiangFengResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongLiangFengResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongLiangFengResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mahjongLiangFeng = $root.msg.MahjongLiangFeng.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongLiangFengResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongLiangFengResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongLiangFengResult} MahjongLiangFengResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongLiangFengResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongLiangFengResult message.
         * @function verify
         * @memberof msg.MahjongLiangFengResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongLiangFengResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mahjongLiangFeng != null && message.hasOwnProperty("mahjongLiangFeng")) {
                let error = $root.msg.MahjongLiangFeng.verify(message.mahjongLiangFeng);
                if (error)
                    return "mahjongLiangFeng." + error;
            }
            return null;
        };

        /**
         * Creates a MahjongLiangFengResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongLiangFengResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongLiangFengResult} MahjongLiangFengResult
         */
        MahjongLiangFengResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongLiangFengResult)
                return object;
            let message = new $root.msg.MahjongLiangFengResult();
            if (object.mahjongLiangFeng != null) {
                if (typeof object.mahjongLiangFeng !== "object")
                    throw TypeError(".msg.MahjongLiangFengResult.mahjongLiangFeng: object expected");
                message.mahjongLiangFeng = $root.msg.MahjongLiangFeng.fromObject(object.mahjongLiangFeng);
            }
            return message;
        };

        /**
         * Creates a plain object from a MahjongLiangFengResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongLiangFengResult
         * @static
         * @param {msg.MahjongLiangFengResult} message MahjongLiangFengResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongLiangFengResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.mahjongLiangFeng = null;
            if (message.mahjongLiangFeng != null && message.hasOwnProperty("mahjongLiangFeng"))
                object.mahjongLiangFeng = $root.msg.MahjongLiangFeng.toObject(message.mahjongLiangFeng, options);
            return object;
        };

        /**
         * Converts this MahjongLiangFengResult to JSON.
         * @function toJSON
         * @memberof msg.MahjongLiangFengResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongLiangFengResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongLiangFengResult;
    })();

    msg.MahjongLiangFengBroadcast = (function() {

        /**
         * Properties of a MahjongLiangFengBroadcast.
         * @memberof msg
         * @interface IMahjongLiangFengBroadcast
         * @property {number|null} [userId] MahjongLiangFengBroadcast userId
         * @property {msg.IMahjongLiangFeng|null} [mahjongLiangFeng] MahjongLiangFengBroadcast mahjongLiangFeng
         */

        /**
         * Constructs a new MahjongLiangFengBroadcast.
         * @memberof msg
         * @classdesc Represents a MahjongLiangFengBroadcast.
         * @implements IMahjongLiangFengBroadcast
         * @constructor
         * @param {msg.IMahjongLiangFengBroadcast=} [properties] Properties to set
         */
        function MahjongLiangFengBroadcast(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongLiangFengBroadcast userId.
         * @member {number} userId
         * @memberof msg.MahjongLiangFengBroadcast
         * @instance
         */
        MahjongLiangFengBroadcast.prototype.userId = 0;

        /**
         * MahjongLiangFengBroadcast mahjongLiangFeng.
         * @member {msg.IMahjongLiangFeng|null|undefined} mahjongLiangFeng
         * @memberof msg.MahjongLiangFengBroadcast
         * @instance
         */
        MahjongLiangFengBroadcast.prototype.mahjongLiangFeng = null;

        /**
         * Creates a new MahjongLiangFengBroadcast instance using the specified properties.
         * @function create
         * @memberof msg.MahjongLiangFengBroadcast
         * @static
         * @param {msg.IMahjongLiangFengBroadcast=} [properties] Properties to set
         * @returns {msg.MahjongLiangFengBroadcast} MahjongLiangFengBroadcast instance
         */
        MahjongLiangFengBroadcast.create = function create(properties) {
            return new MahjongLiangFengBroadcast(properties);
        };

        /**
         * Encodes the specified MahjongLiangFengBroadcast message. Does not implicitly {@link msg.MahjongLiangFengBroadcast.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongLiangFengBroadcast
         * @static
         * @param {msg.IMahjongLiangFengBroadcast} message MahjongLiangFengBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongLiangFengBroadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userId);
            if (message.mahjongLiangFeng != null && Object.hasOwnProperty.call(message, "mahjongLiangFeng"))
                $root.msg.MahjongLiangFeng.encode(message.mahjongLiangFeng, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MahjongLiangFengBroadcast message, length delimited. Does not implicitly {@link msg.MahjongLiangFengBroadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongLiangFengBroadcast
         * @static
         * @param {msg.IMahjongLiangFengBroadcast} message MahjongLiangFengBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongLiangFengBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongLiangFengBroadcast message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongLiangFengBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongLiangFengBroadcast} MahjongLiangFengBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongLiangFengBroadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongLiangFengBroadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.sint32();
                    break;
                case 2:
                    message.mahjongLiangFeng = $root.msg.MahjongLiangFeng.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongLiangFengBroadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongLiangFengBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongLiangFengBroadcast} MahjongLiangFengBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongLiangFengBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongLiangFengBroadcast message.
         * @function verify
         * @memberof msg.MahjongLiangFengBroadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongLiangFengBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.mahjongLiangFeng != null && message.hasOwnProperty("mahjongLiangFeng")) {
                let error = $root.msg.MahjongLiangFeng.verify(message.mahjongLiangFeng);
                if (error)
                    return "mahjongLiangFeng." + error;
            }
            return null;
        };

        /**
         * Creates a MahjongLiangFengBroadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongLiangFengBroadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongLiangFengBroadcast} MahjongLiangFengBroadcast
         */
        MahjongLiangFengBroadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongLiangFengBroadcast)
                return object;
            let message = new $root.msg.MahjongLiangFengBroadcast();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.mahjongLiangFeng != null) {
                if (typeof object.mahjongLiangFeng !== "object")
                    throw TypeError(".msg.MahjongLiangFengBroadcast.mahjongLiangFeng: object expected");
                message.mahjongLiangFeng = $root.msg.MahjongLiangFeng.fromObject(object.mahjongLiangFeng);
            }
            return message;
        };

        /**
         * Creates a plain object from a MahjongLiangFengBroadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongLiangFengBroadcast
         * @static
         * @param {msg.MahjongLiangFengBroadcast} message MahjongLiangFengBroadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongLiangFengBroadcast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = 0;
                object.mahjongLiangFeng = null;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.mahjongLiangFeng != null && message.hasOwnProperty("mahjongLiangFeng"))
                object.mahjongLiangFeng = $root.msg.MahjongLiangFeng.toObject(message.mahjongLiangFeng, options);
            return object;
        };

        /**
         * Converts this MahjongLiangFengBroadcast to JSON.
         * @function toJSON
         * @memberof msg.MahjongLiangFengBroadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongLiangFengBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongLiangFengBroadcast;
    })();

    msg.MahjongBuFengCmd = (function() {

        /**
         * Properties of a MahjongBuFengCmd.
         * @memberof msg
         * @interface IMahjongBuFengCmd
         */

        /**
         * Constructs a new MahjongBuFengCmd.
         * @memberof msg
         * @classdesc Represents a MahjongBuFengCmd.
         * @implements IMahjongBuFengCmd
         * @constructor
         * @param {msg.IMahjongBuFengCmd=} [properties] Properties to set
         */
        function MahjongBuFengCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new MahjongBuFengCmd instance using the specified properties.
         * @function create
         * @memberof msg.MahjongBuFengCmd
         * @static
         * @param {msg.IMahjongBuFengCmd=} [properties] Properties to set
         * @returns {msg.MahjongBuFengCmd} MahjongBuFengCmd instance
         */
        MahjongBuFengCmd.create = function create(properties) {
            return new MahjongBuFengCmd(properties);
        };

        /**
         * Encodes the specified MahjongBuFengCmd message. Does not implicitly {@link msg.MahjongBuFengCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongBuFengCmd
         * @static
         * @param {msg.IMahjongBuFengCmd} message MahjongBuFengCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongBuFengCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified MahjongBuFengCmd message, length delimited. Does not implicitly {@link msg.MahjongBuFengCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongBuFengCmd
         * @static
         * @param {msg.IMahjongBuFengCmd} message MahjongBuFengCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongBuFengCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongBuFengCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongBuFengCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongBuFengCmd} MahjongBuFengCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongBuFengCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongBuFengCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongBuFengCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongBuFengCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongBuFengCmd} MahjongBuFengCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongBuFengCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongBuFengCmd message.
         * @function verify
         * @memberof msg.MahjongBuFengCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongBuFengCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a MahjongBuFengCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongBuFengCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongBuFengCmd} MahjongBuFengCmd
         */
        MahjongBuFengCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongBuFengCmd)
                return object;
            return new $root.msg.MahjongBuFengCmd();
        };

        /**
         * Creates a plain object from a MahjongBuFengCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongBuFengCmd
         * @static
         * @param {msg.MahjongBuFengCmd} message MahjongBuFengCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongBuFengCmd.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this MahjongBuFengCmd to JSON.
         * @function toJSON
         * @memberof msg.MahjongBuFengCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongBuFengCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongBuFengCmd;
    })();

    msg.MahjongBuFengResult = (function() {

        /**
         * Properties of a MahjongBuFengResult.
         * @memberof msg
         * @interface IMahjongBuFengResult
         * @property {msg.IMahjongLiangFeng|null} [mahjongLiangFeng] MahjongBuFengResult mahjongLiangFeng
         */

        /**
         * Constructs a new MahjongBuFengResult.
         * @memberof msg
         * @classdesc Represents a MahjongBuFengResult.
         * @implements IMahjongBuFengResult
         * @constructor
         * @param {msg.IMahjongBuFengResult=} [properties] Properties to set
         */
        function MahjongBuFengResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongBuFengResult mahjongLiangFeng.
         * @member {msg.IMahjongLiangFeng|null|undefined} mahjongLiangFeng
         * @memberof msg.MahjongBuFengResult
         * @instance
         */
        MahjongBuFengResult.prototype.mahjongLiangFeng = null;

        /**
         * Creates a new MahjongBuFengResult instance using the specified properties.
         * @function create
         * @memberof msg.MahjongBuFengResult
         * @static
         * @param {msg.IMahjongBuFengResult=} [properties] Properties to set
         * @returns {msg.MahjongBuFengResult} MahjongBuFengResult instance
         */
        MahjongBuFengResult.create = function create(properties) {
            return new MahjongBuFengResult(properties);
        };

        /**
         * Encodes the specified MahjongBuFengResult message. Does not implicitly {@link msg.MahjongBuFengResult.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongBuFengResult
         * @static
         * @param {msg.IMahjongBuFengResult} message MahjongBuFengResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongBuFengResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mahjongLiangFeng != null && Object.hasOwnProperty.call(message, "mahjongLiangFeng"))
                $root.msg.MahjongLiangFeng.encode(message.mahjongLiangFeng, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MahjongBuFengResult message, length delimited. Does not implicitly {@link msg.MahjongBuFengResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongBuFengResult
         * @static
         * @param {msg.IMahjongBuFengResult} message MahjongBuFengResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongBuFengResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongBuFengResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongBuFengResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongBuFengResult} MahjongBuFengResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongBuFengResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongBuFengResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mahjongLiangFeng = $root.msg.MahjongLiangFeng.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongBuFengResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongBuFengResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongBuFengResult} MahjongBuFengResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongBuFengResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongBuFengResult message.
         * @function verify
         * @memberof msg.MahjongBuFengResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongBuFengResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mahjongLiangFeng != null && message.hasOwnProperty("mahjongLiangFeng")) {
                let error = $root.msg.MahjongLiangFeng.verify(message.mahjongLiangFeng);
                if (error)
                    return "mahjongLiangFeng." + error;
            }
            return null;
        };

        /**
         * Creates a MahjongBuFengResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongBuFengResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongBuFengResult} MahjongBuFengResult
         */
        MahjongBuFengResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongBuFengResult)
                return object;
            let message = new $root.msg.MahjongBuFengResult();
            if (object.mahjongLiangFeng != null) {
                if (typeof object.mahjongLiangFeng !== "object")
                    throw TypeError(".msg.MahjongBuFengResult.mahjongLiangFeng: object expected");
                message.mahjongLiangFeng = $root.msg.MahjongLiangFeng.fromObject(object.mahjongLiangFeng);
            }
            return message;
        };

        /**
         * Creates a plain object from a MahjongBuFengResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongBuFengResult
         * @static
         * @param {msg.MahjongBuFengResult} message MahjongBuFengResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongBuFengResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.mahjongLiangFeng = null;
            if (message.mahjongLiangFeng != null && message.hasOwnProperty("mahjongLiangFeng"))
                object.mahjongLiangFeng = $root.msg.MahjongLiangFeng.toObject(message.mahjongLiangFeng, options);
            return object;
        };

        /**
         * Converts this MahjongBuFengResult to JSON.
         * @function toJSON
         * @memberof msg.MahjongBuFengResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongBuFengResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongBuFengResult;
    })();

    msg.MahjongBuFengBroadcast = (function() {

        /**
         * Properties of a MahjongBuFengBroadcast.
         * @memberof msg
         * @interface IMahjongBuFengBroadcast
         * @property {number|null} [userId] MahjongBuFengBroadcast userId
         * @property {msg.IMahjongLiangFeng|null} [mahjongLiangFeng] MahjongBuFengBroadcast mahjongLiangFeng
         */

        /**
         * Constructs a new MahjongBuFengBroadcast.
         * @memberof msg
         * @classdesc Represents a MahjongBuFengBroadcast.
         * @implements IMahjongBuFengBroadcast
         * @constructor
         * @param {msg.IMahjongBuFengBroadcast=} [properties] Properties to set
         */
        function MahjongBuFengBroadcast(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongBuFengBroadcast userId.
         * @member {number} userId
         * @memberof msg.MahjongBuFengBroadcast
         * @instance
         */
        MahjongBuFengBroadcast.prototype.userId = 0;

        /**
         * MahjongBuFengBroadcast mahjongLiangFeng.
         * @member {msg.IMahjongLiangFeng|null|undefined} mahjongLiangFeng
         * @memberof msg.MahjongBuFengBroadcast
         * @instance
         */
        MahjongBuFengBroadcast.prototype.mahjongLiangFeng = null;

        /**
         * Creates a new MahjongBuFengBroadcast instance using the specified properties.
         * @function create
         * @memberof msg.MahjongBuFengBroadcast
         * @static
         * @param {msg.IMahjongBuFengBroadcast=} [properties] Properties to set
         * @returns {msg.MahjongBuFengBroadcast} MahjongBuFengBroadcast instance
         */
        MahjongBuFengBroadcast.create = function create(properties) {
            return new MahjongBuFengBroadcast(properties);
        };

        /**
         * Encodes the specified MahjongBuFengBroadcast message. Does not implicitly {@link msg.MahjongBuFengBroadcast.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongBuFengBroadcast
         * @static
         * @param {msg.IMahjongBuFengBroadcast} message MahjongBuFengBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongBuFengBroadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userId);
            if (message.mahjongLiangFeng != null && Object.hasOwnProperty.call(message, "mahjongLiangFeng"))
                $root.msg.MahjongLiangFeng.encode(message.mahjongLiangFeng, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MahjongBuFengBroadcast message, length delimited. Does not implicitly {@link msg.MahjongBuFengBroadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongBuFengBroadcast
         * @static
         * @param {msg.IMahjongBuFengBroadcast} message MahjongBuFengBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongBuFengBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongBuFengBroadcast message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongBuFengBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongBuFengBroadcast} MahjongBuFengBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongBuFengBroadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongBuFengBroadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.sint32();
                    break;
                case 2:
                    message.mahjongLiangFeng = $root.msg.MahjongLiangFeng.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongBuFengBroadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongBuFengBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongBuFengBroadcast} MahjongBuFengBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongBuFengBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongBuFengBroadcast message.
         * @function verify
         * @memberof msg.MahjongBuFengBroadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongBuFengBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.mahjongLiangFeng != null && message.hasOwnProperty("mahjongLiangFeng")) {
                let error = $root.msg.MahjongLiangFeng.verify(message.mahjongLiangFeng);
                if (error)
                    return "mahjongLiangFeng." + error;
            }
            return null;
        };

        /**
         * Creates a MahjongBuFengBroadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongBuFengBroadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongBuFengBroadcast} MahjongBuFengBroadcast
         */
        MahjongBuFengBroadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongBuFengBroadcast)
                return object;
            let message = new $root.msg.MahjongBuFengBroadcast();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.mahjongLiangFeng != null) {
                if (typeof object.mahjongLiangFeng !== "object")
                    throw TypeError(".msg.MahjongBuFengBroadcast.mahjongLiangFeng: object expected");
                message.mahjongLiangFeng = $root.msg.MahjongLiangFeng.fromObject(object.mahjongLiangFeng);
            }
            return message;
        };

        /**
         * Creates a plain object from a MahjongBuFengBroadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongBuFengBroadcast
         * @static
         * @param {msg.MahjongBuFengBroadcast} message MahjongBuFengBroadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongBuFengBroadcast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = 0;
                object.mahjongLiangFeng = null;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.mahjongLiangFeng != null && message.hasOwnProperty("mahjongLiangFeng"))
                object.mahjongLiangFeng = $root.msg.MahjongLiangFeng.toObject(message.mahjongLiangFeng, options);
            return object;
        };

        /**
         * Converts this MahjongBuFengBroadcast to JSON.
         * @function toJSON
         * @memberof msg.MahjongBuFengBroadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongBuFengBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongBuFengBroadcast;
    })();

    msg.MahjongLiangGangDingBroadcast = (function() {

        /**
         * Properties of a MahjongLiangGangDingBroadcast.
         * @memberof msg
         * @interface IMahjongLiangGangDingBroadcast
         * @property {number|null} [t0] MahjongLiangGangDingBroadcast t0
         * @property {number|null} [t1] MahjongLiangGangDingBroadcast t1
         */

        /**
         * Constructs a new MahjongLiangGangDingBroadcast.
         * @memberof msg
         * @classdesc Represents a MahjongLiangGangDingBroadcast.
         * @implements IMahjongLiangGangDingBroadcast
         * @constructor
         * @param {msg.IMahjongLiangGangDingBroadcast=} [properties] Properties to set
         */
        function MahjongLiangGangDingBroadcast(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongLiangGangDingBroadcast t0.
         * @member {number} t0
         * @memberof msg.MahjongLiangGangDingBroadcast
         * @instance
         */
        MahjongLiangGangDingBroadcast.prototype.t0 = 0;

        /**
         * MahjongLiangGangDingBroadcast t1.
         * @member {number} t1
         * @memberof msg.MahjongLiangGangDingBroadcast
         * @instance
         */
        MahjongLiangGangDingBroadcast.prototype.t1 = 0;

        /**
         * Creates a new MahjongLiangGangDingBroadcast instance using the specified properties.
         * @function create
         * @memberof msg.MahjongLiangGangDingBroadcast
         * @static
         * @param {msg.IMahjongLiangGangDingBroadcast=} [properties] Properties to set
         * @returns {msg.MahjongLiangGangDingBroadcast} MahjongLiangGangDingBroadcast instance
         */
        MahjongLiangGangDingBroadcast.create = function create(properties) {
            return new MahjongLiangGangDingBroadcast(properties);
        };

        /**
         * Encodes the specified MahjongLiangGangDingBroadcast message. Does not implicitly {@link msg.MahjongLiangGangDingBroadcast.verify|verify} messages.
         * @function encode
         * @memberof msg.MahjongLiangGangDingBroadcast
         * @static
         * @param {msg.IMahjongLiangGangDingBroadcast} message MahjongLiangGangDingBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongLiangGangDingBroadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.t0 != null && Object.hasOwnProperty.call(message, "t0"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.t0);
            if (message.t1 != null && Object.hasOwnProperty.call(message, "t1"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.t1);
            return writer;
        };

        /**
         * Encodes the specified MahjongLiangGangDingBroadcast message, length delimited. Does not implicitly {@link msg.MahjongLiangGangDingBroadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MahjongLiangGangDingBroadcast
         * @static
         * @param {msg.IMahjongLiangGangDingBroadcast} message MahjongLiangGangDingBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongLiangGangDingBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongLiangGangDingBroadcast message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MahjongLiangGangDingBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MahjongLiangGangDingBroadcast} MahjongLiangGangDingBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongLiangGangDingBroadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MahjongLiangGangDingBroadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.t0 = reader.sint32();
                    break;
                case 2:
                    message.t1 = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MahjongLiangGangDingBroadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MahjongLiangGangDingBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MahjongLiangGangDingBroadcast} MahjongLiangGangDingBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongLiangGangDingBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongLiangGangDingBroadcast message.
         * @function verify
         * @memberof msg.MahjongLiangGangDingBroadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongLiangGangDingBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.t0 != null && message.hasOwnProperty("t0"))
                if (!$util.isInteger(message.t0))
                    return "t0: integer expected";
            if (message.t1 != null && message.hasOwnProperty("t1"))
                if (!$util.isInteger(message.t1))
                    return "t1: integer expected";
            return null;
        };

        /**
         * Creates a MahjongLiangGangDingBroadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MahjongLiangGangDingBroadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MahjongLiangGangDingBroadcast} MahjongLiangGangDingBroadcast
         */
        MahjongLiangGangDingBroadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MahjongLiangGangDingBroadcast)
                return object;
            let message = new $root.msg.MahjongLiangGangDingBroadcast();
            if (object.t0 != null)
                message.t0 = object.t0 | 0;
            if (object.t1 != null)
                message.t1 = object.t1 | 0;
            return message;
        };

        /**
         * Creates a plain object from a MahjongLiangGangDingBroadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MahjongLiangGangDingBroadcast
         * @static
         * @param {msg.MahjongLiangGangDingBroadcast} message MahjongLiangGangDingBroadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MahjongLiangGangDingBroadcast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.t0 = 0;
                object.t1 = 0;
            }
            if (message.t0 != null && message.hasOwnProperty("t0"))
                object.t0 = message.t0;
            if (message.t1 != null && message.hasOwnProperty("t1"))
                object.t1 = message.t1;
            return object;
        };

        /**
         * Converts this MahjongLiangGangDingBroadcast to JSON.
         * @function toJSON
         * @memberof msg.MahjongLiangGangDingBroadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MahjongLiangGangDingBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MahjongLiangGangDingBroadcast;
    })();

    return msg;
})();

module.exports = $root;
