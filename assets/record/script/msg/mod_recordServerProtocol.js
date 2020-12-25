/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

import * as $protobuf from "./rcd7.protobufjs";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots.recordServer || ($protobuf.roots.recordServer = {});

export const msg = $root.msg = (() => {

    /**
     * Namespace msg.
     * @exports msg
     * @namespace
     */
    const msg = {};

    /**
     * RecordServerMsgCodeDef enum.
     * @name msg.RecordServerMsgCodeDef
     * @enum {number}
     * @property {number} _Dummy=0 _Dummy value
     * @property {number} _GetRecordListCmd=501 _GetRecordListCmd value
     * @property {number} _GetRecordListResult=502 _GetRecordListResult value
     * @property {number} _GetRecordDetailzCmd=503 _GetRecordDetailzCmd value
     * @property {number} _GetRecordDetailzResult=504 _GetRecordDetailzResult value
     */
    msg.RecordServerMsgCodeDef = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "_Dummy"] = 0;
        values[valuesById[501] = "_GetRecordListCmd"] = 501;
        values[valuesById[502] = "_GetRecordListResult"] = 502;
        values[valuesById[503] = "_GetRecordDetailzCmd"] = 503;
        values[valuesById[504] = "_GetRecordDetailzResult"] = 504;
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

    msg.Player = (function() {

        /**
         * Properties of a Player.
         * @memberof msg
         * @interface IPlayer
         * @property {number|null} [userId] Player userId
         * @property {string|null} [userName] Player userName
         * @property {string|null} [headImg] Player headImg
         * @property {number|null} [sex] Player sex
         * @property {number|null} [currScore] Player currScore
         * @property {number|null} [totalScore] Player totalScore
         * @property {number|null} [seatIndex] Player seatIndex
         * @property {boolean|null} [zhuangFlag] Player zhuangFlag
         * @property {boolean|null} [ziMo] Player ziMo
         * @property {boolean|null} [hu] Player hu
         * @property {boolean|null} [dianPao] Player dianPao
         * @property {boolean|null} [diZhu] Player diZhu
         * @property {boolean|null} [nongMin] Player nongMin
         * @property {boolean|null} [winner] Player winner
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
         * Player zhuangFlag.
         * @member {boolean} zhuangFlag
         * @memberof msg.Player
         * @instance
         */
        Player.prototype.zhuangFlag = false;

        /**
         * Player ziMo.
         * @member {boolean} ziMo
         * @memberof msg.Player
         * @instance
         */
        Player.prototype.ziMo = false;

        /**
         * Player hu.
         * @member {boolean} hu
         * @memberof msg.Player
         * @instance
         */
        Player.prototype.hu = false;

        /**
         * Player dianPao.
         * @member {boolean} dianPao
         * @memberof msg.Player
         * @instance
         */
        Player.prototype.dianPao = false;

        /**
         * Player diZhu.
         * @member {boolean} diZhu
         * @memberof msg.Player
         * @instance
         */
        Player.prototype.diZhu = false;

        /**
         * Player nongMin.
         * @member {boolean} nongMin
         * @memberof msg.Player
         * @instance
         */
        Player.prototype.nongMin = false;

        /**
         * Player winner.
         * @member {boolean} winner
         * @memberof msg.Player
         * @instance
         */
        Player.prototype.winner = false;

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
            if (message.currScore != null && Object.hasOwnProperty.call(message, "currScore"))
                writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.currScore);
            if (message.totalScore != null && Object.hasOwnProperty.call(message, "totalScore"))
                writer.uint32(/* id 6, wireType 0 =*/48).sint32(message.totalScore);
            if (message.seatIndex != null && Object.hasOwnProperty.call(message, "seatIndex"))
                writer.uint32(/* id 7, wireType 0 =*/56).sint32(message.seatIndex);
            if (message.zhuangFlag != null && Object.hasOwnProperty.call(message, "zhuangFlag"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.zhuangFlag);
            if (message.ziMo != null && Object.hasOwnProperty.call(message, "ziMo"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.ziMo);
            if (message.hu != null && Object.hasOwnProperty.call(message, "hu"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.hu);
            if (message.dianPao != null && Object.hasOwnProperty.call(message, "dianPao"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.dianPao);
            if (message.diZhu != null && Object.hasOwnProperty.call(message, "diZhu"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.diZhu);
            if (message.nongMin != null && Object.hasOwnProperty.call(message, "nongMin"))
                writer.uint32(/* id 13, wireType 0 =*/104).bool(message.nongMin);
            if (message.winner != null && Object.hasOwnProperty.call(message, "winner"))
                writer.uint32(/* id 14, wireType 0 =*/112).bool(message.winner);
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
                    message.currScore = reader.sint32();
                    break;
                case 6:
                    message.totalScore = reader.sint32();
                    break;
                case 7:
                    message.seatIndex = reader.sint32();
                    break;
                case 8:
                    message.zhuangFlag = reader.bool();
                    break;
                case 9:
                    message.ziMo = reader.bool();
                    break;
                case 10:
                    message.hu = reader.bool();
                    break;
                case 11:
                    message.dianPao = reader.bool();
                    break;
                case 12:
                    message.diZhu = reader.bool();
                    break;
                case 13:
                    message.nongMin = reader.bool();
                    break;
                case 14:
                    message.winner = reader.bool();
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
            if (message.currScore != null && message.hasOwnProperty("currScore"))
                if (!$util.isInteger(message.currScore))
                    return "currScore: integer expected";
            if (message.totalScore != null && message.hasOwnProperty("totalScore"))
                if (!$util.isInteger(message.totalScore))
                    return "totalScore: integer expected";
            if (message.seatIndex != null && message.hasOwnProperty("seatIndex"))
                if (!$util.isInteger(message.seatIndex))
                    return "seatIndex: integer expected";
            if (message.zhuangFlag != null && message.hasOwnProperty("zhuangFlag"))
                if (typeof message.zhuangFlag !== "boolean")
                    return "zhuangFlag: boolean expected";
            if (message.ziMo != null && message.hasOwnProperty("ziMo"))
                if (typeof message.ziMo !== "boolean")
                    return "ziMo: boolean expected";
            if (message.hu != null && message.hasOwnProperty("hu"))
                if (typeof message.hu !== "boolean")
                    return "hu: boolean expected";
            if (message.dianPao != null && message.hasOwnProperty("dianPao"))
                if (typeof message.dianPao !== "boolean")
                    return "dianPao: boolean expected";
            if (message.diZhu != null && message.hasOwnProperty("diZhu"))
                if (typeof message.diZhu !== "boolean")
                    return "diZhu: boolean expected";
            if (message.nongMin != null && message.hasOwnProperty("nongMin"))
                if (typeof message.nongMin !== "boolean")
                    return "nongMin: boolean expected";
            if (message.winner != null && message.hasOwnProperty("winner"))
                if (typeof message.winner !== "boolean")
                    return "winner: boolean expected";
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
            if (object.currScore != null)
                message.currScore = object.currScore | 0;
            if (object.totalScore != null)
                message.totalScore = object.totalScore | 0;
            if (object.seatIndex != null)
                message.seatIndex = object.seatIndex | 0;
            if (object.zhuangFlag != null)
                message.zhuangFlag = Boolean(object.zhuangFlag);
            if (object.ziMo != null)
                message.ziMo = Boolean(object.ziMo);
            if (object.hu != null)
                message.hu = Boolean(object.hu);
            if (object.dianPao != null)
                message.dianPao = Boolean(object.dianPao);
            if (object.diZhu != null)
                message.diZhu = Boolean(object.diZhu);
            if (object.nongMin != null)
                message.nongMin = Boolean(object.nongMin);
            if (object.winner != null)
                message.winner = Boolean(object.winner);
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
            if (options.defaults) {
                object.userId = 0;
                object.userName = "";
                object.headImg = "";
                object.sex = 0;
                object.currScore = 0;
                object.totalScore = 0;
                object.seatIndex = 0;
                object.zhuangFlag = false;
                object.ziMo = false;
                object.hu = false;
                object.dianPao = false;
                object.diZhu = false;
                object.nongMin = false;
                object.winner = false;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.userName != null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.headImg != null && message.hasOwnProperty("headImg"))
                object.headImg = message.headImg;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
            if (message.currScore != null && message.hasOwnProperty("currScore"))
                object.currScore = message.currScore;
            if (message.totalScore != null && message.hasOwnProperty("totalScore"))
                object.totalScore = message.totalScore;
            if (message.seatIndex != null && message.hasOwnProperty("seatIndex"))
                object.seatIndex = message.seatIndex;
            if (message.zhuangFlag != null && message.hasOwnProperty("zhuangFlag"))
                object.zhuangFlag = message.zhuangFlag;
            if (message.ziMo != null && message.hasOwnProperty("ziMo"))
                object.ziMo = message.ziMo;
            if (message.hu != null && message.hasOwnProperty("hu"))
                object.hu = message.hu;
            if (message.dianPao != null && message.hasOwnProperty("dianPao"))
                object.dianPao = message.dianPao;
            if (message.diZhu != null && message.hasOwnProperty("diZhu"))
                object.diZhu = message.diZhu;
            if (message.nongMin != null && message.hasOwnProperty("nongMin"))
                object.nongMin = message.nongMin;
            if (message.winner != null && message.hasOwnProperty("winner"))
                object.winner = message.winner;
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

    msg.GetRecordListCmd = (function() {

        /**
         * Properties of a GetRecordListCmd.
         * @memberof msg
         * @interface IGetRecordListCmd
         * @property {number|null} [userId] GetRecordListCmd userId
         * @property {number|null} [clubId] GetRecordListCmd clubId
         * @property {number|null} [gameType0] GetRecordListCmd gameType0
         * @property {number|null} [gameType1] GetRecordListCmd gameType1
         * @property {number|null} [pageIndex] GetRecordListCmd pageIndex
         * @property {number|null} [pageSize] GetRecordListCmd pageSize
         */

        /**
         * Constructs a new GetRecordListCmd.
         * @memberof msg
         * @classdesc Represents a GetRecordListCmd.
         * @implements IGetRecordListCmd
         * @constructor
         * @param {msg.IGetRecordListCmd=} [properties] Properties to set
         */
        function GetRecordListCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRecordListCmd userId.
         * @member {number} userId
         * @memberof msg.GetRecordListCmd
         * @instance
         */
        GetRecordListCmd.prototype.userId = 0;

        /**
         * GetRecordListCmd clubId.
         * @member {number} clubId
         * @memberof msg.GetRecordListCmd
         * @instance
         */
        GetRecordListCmd.prototype.clubId = 0;

        /**
         * GetRecordListCmd gameType0.
         * @member {number} gameType0
         * @memberof msg.GetRecordListCmd
         * @instance
         */
        GetRecordListCmd.prototype.gameType0 = 0;

        /**
         * GetRecordListCmd gameType1.
         * @member {number} gameType1
         * @memberof msg.GetRecordListCmd
         * @instance
         */
        GetRecordListCmd.prototype.gameType1 = 0;

        /**
         * GetRecordListCmd pageIndex.
         * @member {number} pageIndex
         * @memberof msg.GetRecordListCmd
         * @instance
         */
        GetRecordListCmd.prototype.pageIndex = 0;

        /**
         * GetRecordListCmd pageSize.
         * @member {number} pageSize
         * @memberof msg.GetRecordListCmd
         * @instance
         */
        GetRecordListCmd.prototype.pageSize = 0;

        /**
         * Creates a new GetRecordListCmd instance using the specified properties.
         * @function create
         * @memberof msg.GetRecordListCmd
         * @static
         * @param {msg.IGetRecordListCmd=} [properties] Properties to set
         * @returns {msg.GetRecordListCmd} GetRecordListCmd instance
         */
        GetRecordListCmd.create = function create(properties) {
            return new GetRecordListCmd(properties);
        };

        /**
         * Encodes the specified GetRecordListCmd message. Does not implicitly {@link msg.GetRecordListCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.GetRecordListCmd
         * @static
         * @param {msg.IGetRecordListCmd} message GetRecordListCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRecordListCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userId);
            if (message.clubId != null && Object.hasOwnProperty.call(message, "clubId"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.clubId);
            if (message.gameType0 != null && Object.hasOwnProperty.call(message, "gameType0"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.gameType0);
            if (message.gameType1 != null && Object.hasOwnProperty.call(message, "gameType1"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.gameType1);
            if (message.pageIndex != null && Object.hasOwnProperty.call(message, "pageIndex"))
                writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.pageIndex);
            if (message.pageSize != null && Object.hasOwnProperty.call(message, "pageSize"))
                writer.uint32(/* id 6, wireType 0 =*/48).sint32(message.pageSize);
            return writer;
        };

        /**
         * Encodes the specified GetRecordListCmd message, length delimited. Does not implicitly {@link msg.GetRecordListCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.GetRecordListCmd
         * @static
         * @param {msg.IGetRecordListCmd} message GetRecordListCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRecordListCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRecordListCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.GetRecordListCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.GetRecordListCmd} GetRecordListCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRecordListCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.GetRecordListCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.sint32();
                    break;
                case 2:
                    message.clubId = reader.sint32();
                    break;
                case 3:
                    message.gameType0 = reader.sint32();
                    break;
                case 4:
                    message.gameType1 = reader.sint32();
                    break;
                case 5:
                    message.pageIndex = reader.sint32();
                    break;
                case 6:
                    message.pageSize = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetRecordListCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.GetRecordListCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.GetRecordListCmd} GetRecordListCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRecordListCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRecordListCmd message.
         * @function verify
         * @memberof msg.GetRecordListCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRecordListCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                if (!$util.isInteger(message.clubId))
                    return "clubId: integer expected";
            if (message.gameType0 != null && message.hasOwnProperty("gameType0"))
                if (!$util.isInteger(message.gameType0))
                    return "gameType0: integer expected";
            if (message.gameType1 != null && message.hasOwnProperty("gameType1"))
                if (!$util.isInteger(message.gameType1))
                    return "gameType1: integer expected";
            if (message.pageIndex != null && message.hasOwnProperty("pageIndex"))
                if (!$util.isInteger(message.pageIndex))
                    return "pageIndex: integer expected";
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                if (!$util.isInteger(message.pageSize))
                    return "pageSize: integer expected";
            return null;
        };

        /**
         * Creates a GetRecordListCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.GetRecordListCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.GetRecordListCmd} GetRecordListCmd
         */
        GetRecordListCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.GetRecordListCmd)
                return object;
            let message = new $root.msg.GetRecordListCmd();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.clubId != null)
                message.clubId = object.clubId | 0;
            if (object.gameType0 != null)
                message.gameType0 = object.gameType0 | 0;
            if (object.gameType1 != null)
                message.gameType1 = object.gameType1 | 0;
            if (object.pageIndex != null)
                message.pageIndex = object.pageIndex | 0;
            if (object.pageSize != null)
                message.pageSize = object.pageSize | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetRecordListCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.GetRecordListCmd
         * @static
         * @param {msg.GetRecordListCmd} message GetRecordListCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRecordListCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = 0;
                object.clubId = 0;
                object.gameType0 = 0;
                object.gameType1 = 0;
                object.pageIndex = 0;
                object.pageSize = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                object.clubId = message.clubId;
            if (message.gameType0 != null && message.hasOwnProperty("gameType0"))
                object.gameType0 = message.gameType0;
            if (message.gameType1 != null && message.hasOwnProperty("gameType1"))
                object.gameType1 = message.gameType1;
            if (message.pageIndex != null && message.hasOwnProperty("pageIndex"))
                object.pageIndex = message.pageIndex;
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                object.pageSize = message.pageSize;
            return object;
        };

        /**
         * Converts this GetRecordListCmd to JSON.
         * @function toJSON
         * @memberof msg.GetRecordListCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRecordListCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetRecordListCmd;
    })();

    msg.GetRecordListResult = (function() {

        /**
         * Properties of a GetRecordListResult.
         * @memberof msg
         * @interface IGetRecordListResult
         * @property {number|null} [userId] GetRecordListResult userId
         * @property {number|null} [clubId] GetRecordListResult clubId
         * @property {number|null} [gameType0] GetRecordListResult gameType0
         * @property {number|null} [gameType1] GetRecordListResult gameType1
         * @property {number|null} [pageIndex] GetRecordListResult pageIndex
         * @property {number|null} [totalCount] GetRecordListResult totalCount
         * @property {Array.<msg.GetRecordListResult.IARecord>|null} [recordz] GetRecordListResult recordz
         */

        /**
         * Constructs a new GetRecordListResult.
         * @memberof msg
         * @classdesc Represents a GetRecordListResult.
         * @implements IGetRecordListResult
         * @constructor
         * @param {msg.IGetRecordListResult=} [properties] Properties to set
         */
        function GetRecordListResult(properties) {
            this.recordz = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRecordListResult userId.
         * @member {number} userId
         * @memberof msg.GetRecordListResult
         * @instance
         */
        GetRecordListResult.prototype.userId = 0;

        /**
         * GetRecordListResult clubId.
         * @member {number} clubId
         * @memberof msg.GetRecordListResult
         * @instance
         */
        GetRecordListResult.prototype.clubId = 0;

        /**
         * GetRecordListResult gameType0.
         * @member {number} gameType0
         * @memberof msg.GetRecordListResult
         * @instance
         */
        GetRecordListResult.prototype.gameType0 = 0;

        /**
         * GetRecordListResult gameType1.
         * @member {number} gameType1
         * @memberof msg.GetRecordListResult
         * @instance
         */
        GetRecordListResult.prototype.gameType1 = 0;

        /**
         * GetRecordListResult pageIndex.
         * @member {number} pageIndex
         * @memberof msg.GetRecordListResult
         * @instance
         */
        GetRecordListResult.prototype.pageIndex = 0;

        /**
         * GetRecordListResult totalCount.
         * @member {number} totalCount
         * @memberof msg.GetRecordListResult
         * @instance
         */
        GetRecordListResult.prototype.totalCount = 0;

        /**
         * GetRecordListResult recordz.
         * @member {Array.<msg.GetRecordListResult.IARecord>} recordz
         * @memberof msg.GetRecordListResult
         * @instance
         */
        GetRecordListResult.prototype.recordz = $util.emptyArray;

        /**
         * Creates a new GetRecordListResult instance using the specified properties.
         * @function create
         * @memberof msg.GetRecordListResult
         * @static
         * @param {msg.IGetRecordListResult=} [properties] Properties to set
         * @returns {msg.GetRecordListResult} GetRecordListResult instance
         */
        GetRecordListResult.create = function create(properties) {
            return new GetRecordListResult(properties);
        };

        /**
         * Encodes the specified GetRecordListResult message. Does not implicitly {@link msg.GetRecordListResult.verify|verify} messages.
         * @function encode
         * @memberof msg.GetRecordListResult
         * @static
         * @param {msg.IGetRecordListResult} message GetRecordListResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRecordListResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userId);
            if (message.clubId != null && Object.hasOwnProperty.call(message, "clubId"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.clubId);
            if (message.gameType0 != null && Object.hasOwnProperty.call(message, "gameType0"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.gameType0);
            if (message.gameType1 != null && Object.hasOwnProperty.call(message, "gameType1"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.gameType1);
            if (message.pageIndex != null && Object.hasOwnProperty.call(message, "pageIndex"))
                writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.pageIndex);
            if (message.totalCount != null && Object.hasOwnProperty.call(message, "totalCount"))
                writer.uint32(/* id 6, wireType 0 =*/48).sint32(message.totalCount);
            if (message.recordz != null && message.recordz.length)
                for (let i = 0; i < message.recordz.length; ++i)
                    $root.msg.GetRecordListResult.ARecord.encode(message.recordz[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetRecordListResult message, length delimited. Does not implicitly {@link msg.GetRecordListResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.GetRecordListResult
         * @static
         * @param {msg.IGetRecordListResult} message GetRecordListResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRecordListResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRecordListResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.GetRecordListResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.GetRecordListResult} GetRecordListResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRecordListResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.GetRecordListResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.sint32();
                    break;
                case 2:
                    message.clubId = reader.sint32();
                    break;
                case 3:
                    message.gameType0 = reader.sint32();
                    break;
                case 4:
                    message.gameType1 = reader.sint32();
                    break;
                case 5:
                    message.pageIndex = reader.sint32();
                    break;
                case 6:
                    message.totalCount = reader.sint32();
                    break;
                case 7:
                    if (!(message.recordz && message.recordz.length))
                        message.recordz = [];
                    message.recordz.push($root.msg.GetRecordListResult.ARecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetRecordListResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.GetRecordListResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.GetRecordListResult} GetRecordListResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRecordListResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRecordListResult message.
         * @function verify
         * @memberof msg.GetRecordListResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRecordListResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                if (!$util.isInteger(message.clubId))
                    return "clubId: integer expected";
            if (message.gameType0 != null && message.hasOwnProperty("gameType0"))
                if (!$util.isInteger(message.gameType0))
                    return "gameType0: integer expected";
            if (message.gameType1 != null && message.hasOwnProperty("gameType1"))
                if (!$util.isInteger(message.gameType1))
                    return "gameType1: integer expected";
            if (message.pageIndex != null && message.hasOwnProperty("pageIndex"))
                if (!$util.isInteger(message.pageIndex))
                    return "pageIndex: integer expected";
            if (message.totalCount != null && message.hasOwnProperty("totalCount"))
                if (!$util.isInteger(message.totalCount))
                    return "totalCount: integer expected";
            if (message.recordz != null && message.hasOwnProperty("recordz")) {
                if (!Array.isArray(message.recordz))
                    return "recordz: array expected";
                for (let i = 0; i < message.recordz.length; ++i) {
                    let error = $root.msg.GetRecordListResult.ARecord.verify(message.recordz[i]);
                    if (error)
                        return "recordz." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetRecordListResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.GetRecordListResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.GetRecordListResult} GetRecordListResult
         */
        GetRecordListResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.GetRecordListResult)
                return object;
            let message = new $root.msg.GetRecordListResult();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.clubId != null)
                message.clubId = object.clubId | 0;
            if (object.gameType0 != null)
                message.gameType0 = object.gameType0 | 0;
            if (object.gameType1 != null)
                message.gameType1 = object.gameType1 | 0;
            if (object.pageIndex != null)
                message.pageIndex = object.pageIndex | 0;
            if (object.totalCount != null)
                message.totalCount = object.totalCount | 0;
            if (object.recordz) {
                if (!Array.isArray(object.recordz))
                    throw TypeError(".msg.GetRecordListResult.recordz: array expected");
                message.recordz = [];
                for (let i = 0; i < object.recordz.length; ++i) {
                    if (typeof object.recordz[i] !== "object")
                        throw TypeError(".msg.GetRecordListResult.recordz: object expected");
                    message.recordz[i] = $root.msg.GetRecordListResult.ARecord.fromObject(object.recordz[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetRecordListResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.GetRecordListResult
         * @static
         * @param {msg.GetRecordListResult} message GetRecordListResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRecordListResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.recordz = [];
            if (options.defaults) {
                object.userId = 0;
                object.clubId = 0;
                object.gameType0 = 0;
                object.gameType1 = 0;
                object.pageIndex = 0;
                object.totalCount = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                object.clubId = message.clubId;
            if (message.gameType0 != null && message.hasOwnProperty("gameType0"))
                object.gameType0 = message.gameType0;
            if (message.gameType1 != null && message.hasOwnProperty("gameType1"))
                object.gameType1 = message.gameType1;
            if (message.pageIndex != null && message.hasOwnProperty("pageIndex"))
                object.pageIndex = message.pageIndex;
            if (message.totalCount != null && message.hasOwnProperty("totalCount"))
                object.totalCount = message.totalCount;
            if (message.recordz && message.recordz.length) {
                object.recordz = [];
                for (let j = 0; j < message.recordz.length; ++j)
                    object.recordz[j] = $root.msg.GetRecordListResult.ARecord.toObject(message.recordz[j], options);
            }
            return object;
        };

        /**
         * Converts this GetRecordListResult to JSON.
         * @function toJSON
         * @memberof msg.GetRecordListResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRecordListResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        GetRecordListResult.ARecord = (function() {

            /**
             * Properties of a ARecord.
             * @memberof msg.GetRecordListResult
             * @interface IARecord
             * @property {number|null} [gameType1] ARecord gameType1
             * @property {number|null} [roomId] ARecord roomId
             * @property {string|null} [roomUUId] ARecord roomUUId
             * @property {number|null} [costRoomCard] ARecord costRoomCard
             * @property {number|null} [actualRoundCount] ARecord actualRoundCount
             * @property {number|Long|null} [createTime] ARecord createTime
             * @property {number|Long|null} [overTime] ARecord overTime
             * @property {Array.<msg.IPlayer>|null} [player] ARecord player
             */

            /**
             * Constructs a new ARecord.
             * @memberof msg.GetRecordListResult
             * @classdesc Represents a ARecord.
             * @implements IARecord
             * @constructor
             * @param {msg.GetRecordListResult.IARecord=} [properties] Properties to set
             */
            function ARecord(properties) {
                this.player = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ARecord gameType1.
             * @member {number} gameType1
             * @memberof msg.GetRecordListResult.ARecord
             * @instance
             */
            ARecord.prototype.gameType1 = 0;

            /**
             * ARecord roomId.
             * @member {number} roomId
             * @memberof msg.GetRecordListResult.ARecord
             * @instance
             */
            ARecord.prototype.roomId = 0;

            /**
             * ARecord roomUUId.
             * @member {string} roomUUId
             * @memberof msg.GetRecordListResult.ARecord
             * @instance
             */
            ARecord.prototype.roomUUId = "";

            /**
             * ARecord costRoomCard.
             * @member {number} costRoomCard
             * @memberof msg.GetRecordListResult.ARecord
             * @instance
             */
            ARecord.prototype.costRoomCard = 0;

            /**
             * ARecord actualRoundCount.
             * @member {number} actualRoundCount
             * @memberof msg.GetRecordListResult.ARecord
             * @instance
             */
            ARecord.prototype.actualRoundCount = 0;

            /**
             * ARecord createTime.
             * @member {number|Long} createTime
             * @memberof msg.GetRecordListResult.ARecord
             * @instance
             */
            ARecord.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ARecord overTime.
             * @member {number|Long} overTime
             * @memberof msg.GetRecordListResult.ARecord
             * @instance
             */
            ARecord.prototype.overTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ARecord player.
             * @member {Array.<msg.IPlayer>} player
             * @memberof msg.GetRecordListResult.ARecord
             * @instance
             */
            ARecord.prototype.player = $util.emptyArray;

            /**
             * Creates a new ARecord instance using the specified properties.
             * @function create
             * @memberof msg.GetRecordListResult.ARecord
             * @static
             * @param {msg.GetRecordListResult.IARecord=} [properties] Properties to set
             * @returns {msg.GetRecordListResult.ARecord} ARecord instance
             */
            ARecord.create = function create(properties) {
                return new ARecord(properties);
            };

            /**
             * Encodes the specified ARecord message. Does not implicitly {@link msg.GetRecordListResult.ARecord.verify|verify} messages.
             * @function encode
             * @memberof msg.GetRecordListResult.ARecord
             * @static
             * @param {msg.GetRecordListResult.IARecord} message ARecord message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ARecord.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.gameType1 != null && Object.hasOwnProperty.call(message, "gameType1"))
                    writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.gameType1);
                if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.roomId);
                if (message.roomUUId != null && Object.hasOwnProperty.call(message, "roomUUId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.roomUUId);
                if (message.costRoomCard != null && Object.hasOwnProperty.call(message, "costRoomCard"))
                    writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.costRoomCard);
                if (message.actualRoundCount != null && Object.hasOwnProperty.call(message, "actualRoundCount"))
                    writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.actualRoundCount);
                if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
                    writer.uint32(/* id 6, wireType 0 =*/48).sint64(message.createTime);
                if (message.overTime != null && Object.hasOwnProperty.call(message, "overTime"))
                    writer.uint32(/* id 7, wireType 0 =*/56).sint64(message.overTime);
                if (message.player != null && message.player.length)
                    for (let i = 0; i < message.player.length; ++i)
                        $root.msg.Player.encode(message.player[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ARecord message, length delimited. Does not implicitly {@link msg.GetRecordListResult.ARecord.verify|verify} messages.
             * @function encodeDelimited
             * @memberof msg.GetRecordListResult.ARecord
             * @static
             * @param {msg.GetRecordListResult.IARecord} message ARecord message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ARecord.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ARecord message from the specified reader or buffer.
             * @function decode
             * @memberof msg.GetRecordListResult.ARecord
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {msg.GetRecordListResult.ARecord} ARecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ARecord.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.GetRecordListResult.ARecord();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.gameType1 = reader.sint32();
                        break;
                    case 2:
                        message.roomId = reader.sint32();
                        break;
                    case 3:
                        message.roomUUId = reader.string();
                        break;
                    case 4:
                        message.costRoomCard = reader.sint32();
                        break;
                    case 5:
                        message.actualRoundCount = reader.sint32();
                        break;
                    case 6:
                        message.createTime = reader.sint64();
                        break;
                    case 7:
                        message.overTime = reader.sint64();
                        break;
                    case 8:
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
             * Decodes a ARecord message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof msg.GetRecordListResult.ARecord
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {msg.GetRecordListResult.ARecord} ARecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ARecord.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ARecord message.
             * @function verify
             * @memberof msg.GetRecordListResult.ARecord
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ARecord.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.gameType1 != null && message.hasOwnProperty("gameType1"))
                    if (!$util.isInteger(message.gameType1))
                        return "gameType1: integer expected";
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    if (!$util.isInteger(message.roomId))
                        return "roomId: integer expected";
                if (message.roomUUId != null && message.hasOwnProperty("roomUUId"))
                    if (!$util.isString(message.roomUUId))
                        return "roomUUId: string expected";
                if (message.costRoomCard != null && message.hasOwnProperty("costRoomCard"))
                    if (!$util.isInteger(message.costRoomCard))
                        return "costRoomCard: integer expected";
                if (message.actualRoundCount != null && message.hasOwnProperty("actualRoundCount"))
                    if (!$util.isInteger(message.actualRoundCount))
                        return "actualRoundCount: integer expected";
                if (message.createTime != null && message.hasOwnProperty("createTime"))
                    if (!$util.isInteger(message.createTime) && !(message.createTime && $util.isInteger(message.createTime.low) && $util.isInteger(message.createTime.high)))
                        return "createTime: integer|Long expected";
                if (message.overTime != null && message.hasOwnProperty("overTime"))
                    if (!$util.isInteger(message.overTime) && !(message.overTime && $util.isInteger(message.overTime.low) && $util.isInteger(message.overTime.high)))
                        return "overTime: integer|Long expected";
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
             * Creates a ARecord message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof msg.GetRecordListResult.ARecord
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {msg.GetRecordListResult.ARecord} ARecord
             */
            ARecord.fromObject = function fromObject(object) {
                if (object instanceof $root.msg.GetRecordListResult.ARecord)
                    return object;
                let message = new $root.msg.GetRecordListResult.ARecord();
                if (object.gameType1 != null)
                    message.gameType1 = object.gameType1 | 0;
                if (object.roomId != null)
                    message.roomId = object.roomId | 0;
                if (object.roomUUId != null)
                    message.roomUUId = String(object.roomUUId);
                if (object.costRoomCard != null)
                    message.costRoomCard = object.costRoomCard | 0;
                if (object.actualRoundCount != null)
                    message.actualRoundCount = object.actualRoundCount | 0;
                if (object.createTime != null)
                    if ($util.Long)
                        (message.createTime = $util.Long.fromValue(object.createTime)).unsigned = false;
                    else if (typeof object.createTime === "string")
                        message.createTime = parseInt(object.createTime, 10);
                    else if (typeof object.createTime === "number")
                        message.createTime = object.createTime;
                    else if (typeof object.createTime === "object")
                        message.createTime = new $util.LongBits(object.createTime.low >>> 0, object.createTime.high >>> 0).toNumber();
                if (object.overTime != null)
                    if ($util.Long)
                        (message.overTime = $util.Long.fromValue(object.overTime)).unsigned = false;
                    else if (typeof object.overTime === "string")
                        message.overTime = parseInt(object.overTime, 10);
                    else if (typeof object.overTime === "number")
                        message.overTime = object.overTime;
                    else if (typeof object.overTime === "object")
                        message.overTime = new $util.LongBits(object.overTime.low >>> 0, object.overTime.high >>> 0).toNumber();
                if (object.player) {
                    if (!Array.isArray(object.player))
                        throw TypeError(".msg.GetRecordListResult.ARecord.player: array expected");
                    message.player = [];
                    for (let i = 0; i < object.player.length; ++i) {
                        if (typeof object.player[i] !== "object")
                            throw TypeError(".msg.GetRecordListResult.ARecord.player: object expected");
                        message.player[i] = $root.msg.Player.fromObject(object.player[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ARecord message. Also converts values to other types if specified.
             * @function toObject
             * @memberof msg.GetRecordListResult.ARecord
             * @static
             * @param {msg.GetRecordListResult.ARecord} message ARecord
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ARecord.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.player = [];
                if (options.defaults) {
                    object.gameType1 = 0;
                    object.roomId = 0;
                    object.roomUUId = "";
                    object.costRoomCard = 0;
                    object.actualRoundCount = 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.createTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.createTime = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.overTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.overTime = options.longs === String ? "0" : 0;
                }
                if (message.gameType1 != null && message.hasOwnProperty("gameType1"))
                    object.gameType1 = message.gameType1;
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    object.roomId = message.roomId;
                if (message.roomUUId != null && message.hasOwnProperty("roomUUId"))
                    object.roomUUId = message.roomUUId;
                if (message.costRoomCard != null && message.hasOwnProperty("costRoomCard"))
                    object.costRoomCard = message.costRoomCard;
                if (message.actualRoundCount != null && message.hasOwnProperty("actualRoundCount"))
                    object.actualRoundCount = message.actualRoundCount;
                if (message.createTime != null && message.hasOwnProperty("createTime"))
                    if (typeof message.createTime === "number")
                        object.createTime = options.longs === String ? String(message.createTime) : message.createTime;
                    else
                        object.createTime = options.longs === String ? $util.Long.prototype.toString.call(message.createTime) : options.longs === Number ? new $util.LongBits(message.createTime.low >>> 0, message.createTime.high >>> 0).toNumber() : message.createTime;
                if (message.overTime != null && message.hasOwnProperty("overTime"))
                    if (typeof message.overTime === "number")
                        object.overTime = options.longs === String ? String(message.overTime) : message.overTime;
                    else
                        object.overTime = options.longs === String ? $util.Long.prototype.toString.call(message.overTime) : options.longs === Number ? new $util.LongBits(message.overTime.low >>> 0, message.overTime.high >>> 0).toNumber() : message.overTime;
                if (message.player && message.player.length) {
                    object.player = [];
                    for (let j = 0; j < message.player.length; ++j)
                        object.player[j] = $root.msg.Player.toObject(message.player[j], options);
                }
                return object;
            };

            /**
             * Converts this ARecord to JSON.
             * @function toJSON
             * @memberof msg.GetRecordListResult.ARecord
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ARecord.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ARecord;
        })();

        return GetRecordListResult;
    })();

    msg.GetRecordDetailzCmd = (function() {

        /**
         * Properties of a GetRecordDetailzCmd.
         * @memberof msg
         * @interface IGetRecordDetailzCmd
         * @property {string|null} [roomUUId] 房间 UUId
         */

        /**
         * Constructs a new GetRecordDetailzCmd.
         * @memberof msg
         * @classdesc Represents a GetRecordDetailzCmd.
         * @implements IGetRecordDetailzCmd
         * @constructor
         * @param {msg.IGetRecordDetailzCmd=} [properties] Properties to set
         */
        function GetRecordDetailzCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * 房间 UUId
         * @member {string} roomUUId
         * @memberof msg.GetRecordDetailzCmd
         * @instance
         */
        GetRecordDetailzCmd.prototype.roomUUId = "";

        /**
         * Creates a new GetRecordDetailzCmd instance using the specified properties.
         * @function create
         * @memberof msg.GetRecordDetailzCmd
         * @static
         * @param {msg.IGetRecordDetailzCmd=} [properties] Properties to set
         * @returns {msg.GetRecordDetailzCmd} GetRecordDetailzCmd instance
         */
        GetRecordDetailzCmd.create = function create(properties) {
            return new GetRecordDetailzCmd(properties);
        };

        /**
         * Encodes the specified GetRecordDetailzCmd message. Does not implicitly {@link msg.GetRecordDetailzCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.GetRecordDetailzCmd
         * @static
         * @param {msg.IGetRecordDetailzCmd} message GetRecordDetailzCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRecordDetailzCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomUUId != null && Object.hasOwnProperty.call(message, "roomUUId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomUUId);
            return writer;
        };

        /**
         * Encodes the specified GetRecordDetailzCmd message, length delimited. Does not implicitly {@link msg.GetRecordDetailzCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.GetRecordDetailzCmd
         * @static
         * @param {msg.IGetRecordDetailzCmd} message GetRecordDetailzCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRecordDetailzCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRecordDetailzCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.GetRecordDetailzCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.GetRecordDetailzCmd} GetRecordDetailzCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRecordDetailzCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.GetRecordDetailzCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomUUId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetRecordDetailzCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.GetRecordDetailzCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.GetRecordDetailzCmd} GetRecordDetailzCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRecordDetailzCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRecordDetailzCmd message.
         * @function verify
         * @memberof msg.GetRecordDetailzCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRecordDetailzCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomUUId != null && message.hasOwnProperty("roomUUId"))
                if (!$util.isString(message.roomUUId))
                    return "roomUUId: string expected";
            return null;
        };

        /**
         * Creates a GetRecordDetailzCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.GetRecordDetailzCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.GetRecordDetailzCmd} GetRecordDetailzCmd
         */
        GetRecordDetailzCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.GetRecordDetailzCmd)
                return object;
            let message = new $root.msg.GetRecordDetailzCmd();
            if (object.roomUUId != null)
                message.roomUUId = String(object.roomUUId);
            return message;
        };

        /**
         * Creates a plain object from a GetRecordDetailzCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.GetRecordDetailzCmd
         * @static
         * @param {msg.GetRecordDetailzCmd} message GetRecordDetailzCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRecordDetailzCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.roomUUId = "";
            if (message.roomUUId != null && message.hasOwnProperty("roomUUId"))
                object.roomUUId = message.roomUUId;
            return object;
        };

        /**
         * Converts this GetRecordDetailzCmd to JSON.
         * @function toJSON
         * @memberof msg.GetRecordDetailzCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRecordDetailzCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetRecordDetailzCmd;
    })();

    msg.GetRecordDetailzResult = (function() {

        /**
         * Properties of a GetRecordDetailzResult.
         * @memberof msg
         * @interface IGetRecordDetailzResult
         * @property {number|null} [gameType0] GetRecordDetailzResult gameType0
         * @property {number|null} [gameType1] GetRecordDetailzResult gameType1
         * @property {number|null} [roomId] GetRecordDetailzResult roomId
         * @property {string|null} [roomUUId] GetRecordDetailzResult roomUUId
         * @property {number|null} [costRoomCard] GetRecordDetailzResult costRoomCard
         * @property {number|null} [actualRoundCount] GetRecordDetailzResult actualRoundCount
         * @property {number|Long|null} [createTime] GetRecordDetailzResult createTime
         * @property {Array.<msg.GetRecordDetailzResult.IARound>|null} [round] GetRecordDetailzResult round
         */

        /**
         * Constructs a new GetRecordDetailzResult.
         * @memberof msg
         * @classdesc Represents a GetRecordDetailzResult.
         * @implements IGetRecordDetailzResult
         * @constructor
         * @param {msg.IGetRecordDetailzResult=} [properties] Properties to set
         */
        function GetRecordDetailzResult(properties) {
            this.round = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRecordDetailzResult gameType0.
         * @member {number} gameType0
         * @memberof msg.GetRecordDetailzResult
         * @instance
         */
        GetRecordDetailzResult.prototype.gameType0 = 0;

        /**
         * GetRecordDetailzResult gameType1.
         * @member {number} gameType1
         * @memberof msg.GetRecordDetailzResult
         * @instance
         */
        GetRecordDetailzResult.prototype.gameType1 = 0;

        /**
         * GetRecordDetailzResult roomId.
         * @member {number} roomId
         * @memberof msg.GetRecordDetailzResult
         * @instance
         */
        GetRecordDetailzResult.prototype.roomId = 0;

        /**
         * GetRecordDetailzResult roomUUId.
         * @member {string} roomUUId
         * @memberof msg.GetRecordDetailzResult
         * @instance
         */
        GetRecordDetailzResult.prototype.roomUUId = "";

        /**
         * GetRecordDetailzResult costRoomCard.
         * @member {number} costRoomCard
         * @memberof msg.GetRecordDetailzResult
         * @instance
         */
        GetRecordDetailzResult.prototype.costRoomCard = 0;

        /**
         * GetRecordDetailzResult actualRoundCount.
         * @member {number} actualRoundCount
         * @memberof msg.GetRecordDetailzResult
         * @instance
         */
        GetRecordDetailzResult.prototype.actualRoundCount = 0;

        /**
         * GetRecordDetailzResult createTime.
         * @member {number|Long} createTime
         * @memberof msg.GetRecordDetailzResult
         * @instance
         */
        GetRecordDetailzResult.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetRecordDetailzResult round.
         * @member {Array.<msg.GetRecordDetailzResult.IARound>} round
         * @memberof msg.GetRecordDetailzResult
         * @instance
         */
        GetRecordDetailzResult.prototype.round = $util.emptyArray;

        /**
         * Creates a new GetRecordDetailzResult instance using the specified properties.
         * @function create
         * @memberof msg.GetRecordDetailzResult
         * @static
         * @param {msg.IGetRecordDetailzResult=} [properties] Properties to set
         * @returns {msg.GetRecordDetailzResult} GetRecordDetailzResult instance
         */
        GetRecordDetailzResult.create = function create(properties) {
            return new GetRecordDetailzResult(properties);
        };

        /**
         * Encodes the specified GetRecordDetailzResult message. Does not implicitly {@link msg.GetRecordDetailzResult.verify|verify} messages.
         * @function encode
         * @memberof msg.GetRecordDetailzResult
         * @static
         * @param {msg.IGetRecordDetailzResult} message GetRecordDetailzResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRecordDetailzResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameType0 != null && Object.hasOwnProperty.call(message, "gameType0"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.gameType0);
            if (message.gameType1 != null && Object.hasOwnProperty.call(message, "gameType1"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.gameType1);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.roomId);
            if (message.roomUUId != null && Object.hasOwnProperty.call(message, "roomUUId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.roomUUId);
            if (message.costRoomCard != null && Object.hasOwnProperty.call(message, "costRoomCard"))
                writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.costRoomCard);
            if (message.actualRoundCount != null && Object.hasOwnProperty.call(message, "actualRoundCount"))
                writer.uint32(/* id 6, wireType 0 =*/48).sint32(message.actualRoundCount);
            if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
                writer.uint32(/* id 7, wireType 0 =*/56).sint64(message.createTime);
            if (message.round != null && message.round.length)
                for (let i = 0; i < message.round.length; ++i)
                    $root.msg.GetRecordDetailzResult.ARound.encode(message.round[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetRecordDetailzResult message, length delimited. Does not implicitly {@link msg.GetRecordDetailzResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.GetRecordDetailzResult
         * @static
         * @param {msg.IGetRecordDetailzResult} message GetRecordDetailzResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRecordDetailzResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRecordDetailzResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.GetRecordDetailzResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.GetRecordDetailzResult} GetRecordDetailzResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRecordDetailzResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.GetRecordDetailzResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gameType0 = reader.sint32();
                    break;
                case 2:
                    message.gameType1 = reader.sint32();
                    break;
                case 3:
                    message.roomId = reader.sint32();
                    break;
                case 4:
                    message.roomUUId = reader.string();
                    break;
                case 5:
                    message.costRoomCard = reader.sint32();
                    break;
                case 6:
                    message.actualRoundCount = reader.sint32();
                    break;
                case 7:
                    message.createTime = reader.sint64();
                    break;
                case 8:
                    if (!(message.round && message.round.length))
                        message.round = [];
                    message.round.push($root.msg.GetRecordDetailzResult.ARound.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetRecordDetailzResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.GetRecordDetailzResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.GetRecordDetailzResult} GetRecordDetailzResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRecordDetailzResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRecordDetailzResult message.
         * @function verify
         * @memberof msg.GetRecordDetailzResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRecordDetailzResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameType0 != null && message.hasOwnProperty("gameType0"))
                if (!$util.isInteger(message.gameType0))
                    return "gameType0: integer expected";
            if (message.gameType1 != null && message.hasOwnProperty("gameType1"))
                if (!$util.isInteger(message.gameType1))
                    return "gameType1: integer expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId))
                    return "roomId: integer expected";
            if (message.roomUUId != null && message.hasOwnProperty("roomUUId"))
                if (!$util.isString(message.roomUUId))
                    return "roomUUId: string expected";
            if (message.costRoomCard != null && message.hasOwnProperty("costRoomCard"))
                if (!$util.isInteger(message.costRoomCard))
                    return "costRoomCard: integer expected";
            if (message.actualRoundCount != null && message.hasOwnProperty("actualRoundCount"))
                if (!$util.isInteger(message.actualRoundCount))
                    return "actualRoundCount: integer expected";
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (!$util.isInteger(message.createTime) && !(message.createTime && $util.isInteger(message.createTime.low) && $util.isInteger(message.createTime.high)))
                    return "createTime: integer|Long expected";
            if (message.round != null && message.hasOwnProperty("round")) {
                if (!Array.isArray(message.round))
                    return "round: array expected";
                for (let i = 0; i < message.round.length; ++i) {
                    let error = $root.msg.GetRecordDetailzResult.ARound.verify(message.round[i]);
                    if (error)
                        return "round." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetRecordDetailzResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.GetRecordDetailzResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.GetRecordDetailzResult} GetRecordDetailzResult
         */
        GetRecordDetailzResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.GetRecordDetailzResult)
                return object;
            let message = new $root.msg.GetRecordDetailzResult();
            if (object.gameType0 != null)
                message.gameType0 = object.gameType0 | 0;
            if (object.gameType1 != null)
                message.gameType1 = object.gameType1 | 0;
            if (object.roomId != null)
                message.roomId = object.roomId | 0;
            if (object.roomUUId != null)
                message.roomUUId = String(object.roomUUId);
            if (object.costRoomCard != null)
                message.costRoomCard = object.costRoomCard | 0;
            if (object.actualRoundCount != null)
                message.actualRoundCount = object.actualRoundCount | 0;
            if (object.createTime != null)
                if ($util.Long)
                    (message.createTime = $util.Long.fromValue(object.createTime)).unsigned = false;
                else if (typeof object.createTime === "string")
                    message.createTime = parseInt(object.createTime, 10);
                else if (typeof object.createTime === "number")
                    message.createTime = object.createTime;
                else if (typeof object.createTime === "object")
                    message.createTime = new $util.LongBits(object.createTime.low >>> 0, object.createTime.high >>> 0).toNumber();
            if (object.round) {
                if (!Array.isArray(object.round))
                    throw TypeError(".msg.GetRecordDetailzResult.round: array expected");
                message.round = [];
                for (let i = 0; i < object.round.length; ++i) {
                    if (typeof object.round[i] !== "object")
                        throw TypeError(".msg.GetRecordDetailzResult.round: object expected");
                    message.round[i] = $root.msg.GetRecordDetailzResult.ARound.fromObject(object.round[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetRecordDetailzResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.GetRecordDetailzResult
         * @static
         * @param {msg.GetRecordDetailzResult} message GetRecordDetailzResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRecordDetailzResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.round = [];
            if (options.defaults) {
                object.gameType0 = 0;
                object.gameType1 = 0;
                object.roomId = 0;
                object.roomUUId = "";
                object.costRoomCard = 0;
                object.actualRoundCount = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.createTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createTime = options.longs === String ? "0" : 0;
            }
            if (message.gameType0 != null && message.hasOwnProperty("gameType0"))
                object.gameType0 = message.gameType0;
            if (message.gameType1 != null && message.hasOwnProperty("gameType1"))
                object.gameType1 = message.gameType1;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.roomUUId != null && message.hasOwnProperty("roomUUId"))
                object.roomUUId = message.roomUUId;
            if (message.costRoomCard != null && message.hasOwnProperty("costRoomCard"))
                object.costRoomCard = message.costRoomCard;
            if (message.actualRoundCount != null && message.hasOwnProperty("actualRoundCount"))
                object.actualRoundCount = message.actualRoundCount;
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (typeof message.createTime === "number")
                    object.createTime = options.longs === String ? String(message.createTime) : message.createTime;
                else
                    object.createTime = options.longs === String ? $util.Long.prototype.toString.call(message.createTime) : options.longs === Number ? new $util.LongBits(message.createTime.low >>> 0, message.createTime.high >>> 0).toNumber() : message.createTime;
            if (message.round && message.round.length) {
                object.round = [];
                for (let j = 0; j < message.round.length; ++j)
                    object.round[j] = $root.msg.GetRecordDetailzResult.ARound.toObject(message.round[j], options);
            }
            return object;
        };

        /**
         * Converts this GetRecordDetailzResult to JSON.
         * @function toJSON
         * @memberof msg.GetRecordDetailzResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRecordDetailzResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        GetRecordDetailzResult.ARound = (function() {

            /**
             * Properties of a ARound.
             * @memberof msg.GetRecordDetailzResult
             * @interface IARound
             * @property {number|null} [roundIndex] ARound roundIndex
             * @property {number|Long|null} [createTime] ARound createTime
             * @property {Array.<msg.IPlayer>|null} [player] ARound player
             * @property {string|null} [playbackStub] ARound playbackStub
             */

            /**
             * Constructs a new ARound.
             * @memberof msg.GetRecordDetailzResult
             * @classdesc Represents a ARound.
             * @implements IARound
             * @constructor
             * @param {msg.GetRecordDetailzResult.IARound=} [properties] Properties to set
             */
            function ARound(properties) {
                this.player = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ARound roundIndex.
             * @member {number} roundIndex
             * @memberof msg.GetRecordDetailzResult.ARound
             * @instance
             */
            ARound.prototype.roundIndex = 0;

            /**
             * ARound createTime.
             * @member {number|Long} createTime
             * @memberof msg.GetRecordDetailzResult.ARound
             * @instance
             */
            ARound.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ARound player.
             * @member {Array.<msg.IPlayer>} player
             * @memberof msg.GetRecordDetailzResult.ARound
             * @instance
             */
            ARound.prototype.player = $util.emptyArray;

            /**
             * ARound playbackStub.
             * @member {string} playbackStub
             * @memberof msg.GetRecordDetailzResult.ARound
             * @instance
             */
            ARound.prototype.playbackStub = "";

            /**
             * Creates a new ARound instance using the specified properties.
             * @function create
             * @memberof msg.GetRecordDetailzResult.ARound
             * @static
             * @param {msg.GetRecordDetailzResult.IARound=} [properties] Properties to set
             * @returns {msg.GetRecordDetailzResult.ARound} ARound instance
             */
            ARound.create = function create(properties) {
                return new ARound(properties);
            };

            /**
             * Encodes the specified ARound message. Does not implicitly {@link msg.GetRecordDetailzResult.ARound.verify|verify} messages.
             * @function encode
             * @memberof msg.GetRecordDetailzResult.ARound
             * @static
             * @param {msg.GetRecordDetailzResult.IARound} message ARound message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ARound.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.roundIndex != null && Object.hasOwnProperty.call(message, "roundIndex"))
                    writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.roundIndex);
                if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
                    writer.uint32(/* id 2, wireType 0 =*/16).sint64(message.createTime);
                if (message.player != null && message.player.length)
                    for (let i = 0; i < message.player.length; ++i)
                        $root.msg.Player.encode(message.player[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.playbackStub != null && Object.hasOwnProperty.call(message, "playbackStub"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.playbackStub);
                return writer;
            };

            /**
             * Encodes the specified ARound message, length delimited. Does not implicitly {@link msg.GetRecordDetailzResult.ARound.verify|verify} messages.
             * @function encodeDelimited
             * @memberof msg.GetRecordDetailzResult.ARound
             * @static
             * @param {msg.GetRecordDetailzResult.IARound} message ARound message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ARound.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ARound message from the specified reader or buffer.
             * @function decode
             * @memberof msg.GetRecordDetailzResult.ARound
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {msg.GetRecordDetailzResult.ARound} ARound
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ARound.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.GetRecordDetailzResult.ARound();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.roundIndex = reader.sint32();
                        break;
                    case 2:
                        message.createTime = reader.sint64();
                        break;
                    case 3:
                        if (!(message.player && message.player.length))
                            message.player = [];
                        message.player.push($root.msg.Player.decode(reader, reader.uint32()));
                        break;
                    case 4:
                        message.playbackStub = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ARound message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof msg.GetRecordDetailzResult.ARound
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {msg.GetRecordDetailzResult.ARound} ARound
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ARound.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ARound message.
             * @function verify
             * @memberof msg.GetRecordDetailzResult.ARound
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ARound.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.roundIndex != null && message.hasOwnProperty("roundIndex"))
                    if (!$util.isInteger(message.roundIndex))
                        return "roundIndex: integer expected";
                if (message.createTime != null && message.hasOwnProperty("createTime"))
                    if (!$util.isInteger(message.createTime) && !(message.createTime && $util.isInteger(message.createTime.low) && $util.isInteger(message.createTime.high)))
                        return "createTime: integer|Long expected";
                if (message.player != null && message.hasOwnProperty("player")) {
                    if (!Array.isArray(message.player))
                        return "player: array expected";
                    for (let i = 0; i < message.player.length; ++i) {
                        let error = $root.msg.Player.verify(message.player[i]);
                        if (error)
                            return "player." + error;
                    }
                }
                if (message.playbackStub != null && message.hasOwnProperty("playbackStub"))
                    if (!$util.isString(message.playbackStub))
                        return "playbackStub: string expected";
                return null;
            };

            /**
             * Creates a ARound message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof msg.GetRecordDetailzResult.ARound
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {msg.GetRecordDetailzResult.ARound} ARound
             */
            ARound.fromObject = function fromObject(object) {
                if (object instanceof $root.msg.GetRecordDetailzResult.ARound)
                    return object;
                let message = new $root.msg.GetRecordDetailzResult.ARound();
                if (object.roundIndex != null)
                    message.roundIndex = object.roundIndex | 0;
                if (object.createTime != null)
                    if ($util.Long)
                        (message.createTime = $util.Long.fromValue(object.createTime)).unsigned = false;
                    else if (typeof object.createTime === "string")
                        message.createTime = parseInt(object.createTime, 10);
                    else if (typeof object.createTime === "number")
                        message.createTime = object.createTime;
                    else if (typeof object.createTime === "object")
                        message.createTime = new $util.LongBits(object.createTime.low >>> 0, object.createTime.high >>> 0).toNumber();
                if (object.player) {
                    if (!Array.isArray(object.player))
                        throw TypeError(".msg.GetRecordDetailzResult.ARound.player: array expected");
                    message.player = [];
                    for (let i = 0; i < object.player.length; ++i) {
                        if (typeof object.player[i] !== "object")
                            throw TypeError(".msg.GetRecordDetailzResult.ARound.player: object expected");
                        message.player[i] = $root.msg.Player.fromObject(object.player[i]);
                    }
                }
                if (object.playbackStub != null)
                    message.playbackStub = String(object.playbackStub);
                return message;
            };

            /**
             * Creates a plain object from a ARound message. Also converts values to other types if specified.
             * @function toObject
             * @memberof msg.GetRecordDetailzResult.ARound
             * @static
             * @param {msg.GetRecordDetailzResult.ARound} message ARound
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ARound.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.player = [];
                if (options.defaults) {
                    object.roundIndex = 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.createTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.createTime = options.longs === String ? "0" : 0;
                    object.playbackStub = "";
                }
                if (message.roundIndex != null && message.hasOwnProperty("roundIndex"))
                    object.roundIndex = message.roundIndex;
                if (message.createTime != null && message.hasOwnProperty("createTime"))
                    if (typeof message.createTime === "number")
                        object.createTime = options.longs === String ? String(message.createTime) : message.createTime;
                    else
                        object.createTime = options.longs === String ? $util.Long.prototype.toString.call(message.createTime) : options.longs === Number ? new $util.LongBits(message.createTime.low >>> 0, message.createTime.high >>> 0).toNumber() : message.createTime;
                if (message.player && message.player.length) {
                    object.player = [];
                    for (let j = 0; j < message.player.length; ++j)
                        object.player[j] = $root.msg.Player.toObject(message.player[j], options);
                }
                if (message.playbackStub != null && message.hasOwnProperty("playbackStub"))
                    object.playbackStub = message.playbackStub;
                return object;
            };

            /**
             * Converts this ARound to JSON.
             * @function toJSON
             * @memberof msg.GetRecordDetailzResult.ARound
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ARound.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ARound;
        })();

        return GetRecordDetailzResult;
    })();

    return msg;
})();

module.exports = $root;
