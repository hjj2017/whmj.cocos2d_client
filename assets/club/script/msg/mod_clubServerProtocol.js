/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

import * as $protobuf from "./protobufjs.ver_Club";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots.clubServer || ($protobuf.roots.clubServer = {});

export const msg = $root.msg = (() => {

    /**
     * Namespace msg.
     * @exports msg
     * @namespace
     */
    const msg = {};

    /**
     * ClubServerMsgCodeDef enum.
     * @name msg.ClubServerMsgCodeDef
     * @enum {number}
     * @property {number} _Dummy=0 _Dummy value
     * @property {number} _GetJoinedClubListCmd=301 _GetJoinedClubListCmd value
     * @property {number} _GetJoinedClubListResult=302 _GetJoinedClubListResult value
     * @property {number} _CreateClubCmd=303 _CreateClubCmd value
     * @property {number} _CreateClubResult=304 _CreateClubResult value
     * @property {number} _JoinClubCmd=305 _JoinClubCmd value
     * @property {number} _JoinClubResult=306 _JoinClubResult value
     * @property {number} _GetClubDetailzCmd=307 _GetClubDetailzCmd value
     * @property {number} _GetClubDetailzResult=308 _GetClubDetailzResult value
     * @property {number} _GetMemberInfoListCmd=309 _GetMemberInfoListCmd value
     * @property {number} _GetMemberInfoListResult=310 _GetMemberInfoListResult value
     * @property {number} _GetTableListCmd=311 _GetTableListCmd value
     * @property {number} _GetTableListResult=312 _GetTableListResult value
     * @property {number} _GetTableDetailzCmd=313 _GetTableDetailzCmd value
     * @property {number} _GetTableDetailzResult=314 _GetTableDetailzResult value
     * @property {number} _CreateTableCmd=315 _CreateTableCmd value
     * @property {number} _CreateTableResult=316 _CreateTableResult value
     * @property {number} _JoinTableCmd=317 _JoinTableCmd value
     * @property {number} _JoinTableResult=318 _JoinTableResult value
     * @property {number} _ApprovalToJoinCmd=321 _ApprovalToJoinCmd value
     * @property {number} _ApprovalToJoinResult=322 _ApprovalToJoinResult value
     * @property {number} _DismissAMemberCmd=323 _DismissAMemberCmd value
     * @property {number} _DismissAMemberResult=324 _DismissAMemberResult value
     * @property {number} _QuitClubCmd=325 _QuitClubCmd value
     * @property {number} _QuitClubResult=326 _QuitClubResult value
     * @property {number} _ModifyFixGameCmd=327 _ModifyFixGameCmd value
     * @property {number} _ModifyFixGameResult=328 _ModifyFixGameResult value
     * @property {number} _ExchangeRoomCardCmd=329 _ExchangeRoomCardCmd value
     * @property {number} _ExchangeRoomCardResult=330 _ExchangeRoomCardResult value
     * @property {number} _StartTableChangedListenCmd=371 _StartTableChangedListenCmd value
     * @property {number} _StopTableChangedListenCmd=372 _StopTableChangedListenCmd value
     * @property {number} _AClubTableChangedBroadcast=373 _AClubTableChangedBroadcast value
     */
    msg.ClubServerMsgCodeDef = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "_Dummy"] = 0;
        values[valuesById[301] = "_GetJoinedClubListCmd"] = 301;
        values[valuesById[302] = "_GetJoinedClubListResult"] = 302;
        values[valuesById[303] = "_CreateClubCmd"] = 303;
        values[valuesById[304] = "_CreateClubResult"] = 304;
        values[valuesById[305] = "_JoinClubCmd"] = 305;
        values[valuesById[306] = "_JoinClubResult"] = 306;
        values[valuesById[307] = "_GetClubDetailzCmd"] = 307;
        values[valuesById[308] = "_GetClubDetailzResult"] = 308;
        values[valuesById[309] = "_GetMemberInfoListCmd"] = 309;
        values[valuesById[310] = "_GetMemberInfoListResult"] = 310;
        values[valuesById[311] = "_GetTableListCmd"] = 311;
        values[valuesById[312] = "_GetTableListResult"] = 312;
        values[valuesById[313] = "_GetTableDetailzCmd"] = 313;
        values[valuesById[314] = "_GetTableDetailzResult"] = 314;
        values[valuesById[315] = "_CreateTableCmd"] = 315;
        values[valuesById[316] = "_CreateTableResult"] = 316;
        values[valuesById[317] = "_JoinTableCmd"] = 317;
        values[valuesById[318] = "_JoinTableResult"] = 318;
        values[valuesById[321] = "_ApprovalToJoinCmd"] = 321;
        values[valuesById[322] = "_ApprovalToJoinResult"] = 322;
        values[valuesById[323] = "_DismissAMemberCmd"] = 323;
        values[valuesById[324] = "_DismissAMemberResult"] = 324;
        values[valuesById[325] = "_QuitClubCmd"] = 325;
        values[valuesById[326] = "_QuitClubResult"] = 326;
        values[valuesById[327] = "_ModifyFixGameCmd"] = 327;
        values[valuesById[328] = "_ModifyFixGameResult"] = 328;
        values[valuesById[329] = "_ExchangeRoomCardCmd"] = 329;
        values[valuesById[330] = "_ExchangeRoomCardResult"] = 330;
        values[valuesById[371] = "_StartTableChangedListenCmd"] = 371;
        values[valuesById[372] = "_StopTableChangedListenCmd"] = 372;
        values[valuesById[373] = "_AClubTableChangedBroadcast"] = 373;
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
         * @property {number|null} [atSeatIndex] Player atSeatIndex
         * @property {string|null} [userName] Player userName
         * @property {string|null} [headImg] Player headImg
         * @property {number|null} [sex] Player sex
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
         * Player atSeatIndex.
         * @member {number} atSeatIndex
         * @memberof msg.Player
         * @instance
         */
        Player.prototype.atSeatIndex = 0;

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
            if (message.atSeatIndex != null && Object.hasOwnProperty.call(message, "atSeatIndex"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.atSeatIndex);
            if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.userName);
            if (message.headImg != null && Object.hasOwnProperty.call(message, "headImg"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.headImg);
            if (message.sex != null && Object.hasOwnProperty.call(message, "sex"))
                writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.sex);
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
                    message.atSeatIndex = reader.sint32();
                    break;
                case 3:
                    message.userName = reader.string();
                    break;
                case 4:
                    message.headImg = reader.string();
                    break;
                case 5:
                    message.sex = reader.sint32();
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
            if (message.atSeatIndex != null && message.hasOwnProperty("atSeatIndex"))
                if (!$util.isInteger(message.atSeatIndex))
                    return "atSeatIndex: integer expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.headImg != null && message.hasOwnProperty("headImg"))
                if (!$util.isString(message.headImg))
                    return "headImg: string expected";
            if (message.sex != null && message.hasOwnProperty("sex"))
                if (!$util.isInteger(message.sex))
                    return "sex: integer expected";
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
            if (object.atSeatIndex != null)
                message.atSeatIndex = object.atSeatIndex | 0;
            if (object.userName != null)
                message.userName = String(object.userName);
            if (object.headImg != null)
                message.headImg = String(object.headImg);
            if (object.sex != null)
                message.sex = object.sex | 0;
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
                object.atSeatIndex = 0;
                object.userName = "";
                object.headImg = "";
                object.sex = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.atSeatIndex != null && message.hasOwnProperty("atSeatIndex"))
                object.atSeatIndex = message.atSeatIndex;
            if (message.userName != null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.headImg != null && message.hasOwnProperty("headImg"))
                object.headImg = message.headImg;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
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

    msg.Table = (function() {

        /**
         * Properties of a Table.
         * @memberof msg
         * @interface ITable
         * @property {number|null} [seqNum] Table seqNum
         * @property {number|null} [roomId] Table roomId
         * @property {number|null} [gameType0] Table gameType0
         * @property {number|null} [gameType1] Table gameType1
         * @property {Array.<msg.IKeyAndVal>|null} [ruleItem] Table ruleItem
         * @property {number|null} [maxRound] Table maxRound
         * @property {number|null} [currRound] Table currRound
         * @property {number|null} [maxPlayer] Table maxPlayer
         * @property {Array.<msg.IPlayer>|null} [player] Table player
         */

        /**
         * Constructs a new Table.
         * @memberof msg
         * @classdesc Represents a Table.
         * @implements ITable
         * @constructor
         * @param {msg.ITable=} [properties] Properties to set
         */
        function Table(properties) {
            this.ruleItem = [];
            this.player = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Table seqNum.
         * @member {number} seqNum
         * @memberof msg.Table
         * @instance
         */
        Table.prototype.seqNum = 0;

        /**
         * Table roomId.
         * @member {number} roomId
         * @memberof msg.Table
         * @instance
         */
        Table.prototype.roomId = 0;

        /**
         * Table gameType0.
         * @member {number} gameType0
         * @memberof msg.Table
         * @instance
         */
        Table.prototype.gameType0 = 0;

        /**
         * Table gameType1.
         * @member {number} gameType1
         * @memberof msg.Table
         * @instance
         */
        Table.prototype.gameType1 = 0;

        /**
         * Table ruleItem.
         * @member {Array.<msg.IKeyAndVal>} ruleItem
         * @memberof msg.Table
         * @instance
         */
        Table.prototype.ruleItem = $util.emptyArray;

        /**
         * Table maxRound.
         * @member {number} maxRound
         * @memberof msg.Table
         * @instance
         */
        Table.prototype.maxRound = 0;

        /**
         * Table currRound.
         * @member {number} currRound
         * @memberof msg.Table
         * @instance
         */
        Table.prototype.currRound = 0;

        /**
         * Table maxPlayer.
         * @member {number} maxPlayer
         * @memberof msg.Table
         * @instance
         */
        Table.prototype.maxPlayer = 0;

        /**
         * Table player.
         * @member {Array.<msg.IPlayer>} player
         * @memberof msg.Table
         * @instance
         */
        Table.prototype.player = $util.emptyArray;

        /**
         * Creates a new Table instance using the specified properties.
         * @function create
         * @memberof msg.Table
         * @static
         * @param {msg.ITable=} [properties] Properties to set
         * @returns {msg.Table} Table instance
         */
        Table.create = function create(properties) {
            return new Table(properties);
        };

        /**
         * Encodes the specified Table message. Does not implicitly {@link msg.Table.verify|verify} messages.
         * @function encode
         * @memberof msg.Table
         * @static
         * @param {msg.ITable} message Table message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Table.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.seqNum != null && Object.hasOwnProperty.call(message, "seqNum"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.seqNum);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.roomId);
            if (message.gameType0 != null && Object.hasOwnProperty.call(message, "gameType0"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.gameType0);
            if (message.gameType1 != null && Object.hasOwnProperty.call(message, "gameType1"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.gameType1);
            if (message.ruleItem != null && message.ruleItem.length)
                for (let i = 0; i < message.ruleItem.length; ++i)
                    $root.msg.KeyAndVal.encode(message.ruleItem[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.maxRound != null && Object.hasOwnProperty.call(message, "maxRound"))
                writer.uint32(/* id 6, wireType 0 =*/48).sint32(message.maxRound);
            if (message.currRound != null && Object.hasOwnProperty.call(message, "currRound"))
                writer.uint32(/* id 7, wireType 0 =*/56).sint32(message.currRound);
            if (message.maxPlayer != null && Object.hasOwnProperty.call(message, "maxPlayer"))
                writer.uint32(/* id 8, wireType 0 =*/64).sint32(message.maxPlayer);
            if (message.player != null && message.player.length)
                for (let i = 0; i < message.player.length; ++i)
                    $root.msg.Player.encode(message.player[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Table message, length delimited. Does not implicitly {@link msg.Table.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Table
         * @static
         * @param {msg.ITable} message Table message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Table.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Table message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Table
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Table} Table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Table.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Table();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seqNum = reader.sint32();
                    break;
                case 2:
                    message.roomId = reader.sint32();
                    break;
                case 3:
                    message.gameType0 = reader.sint32();
                    break;
                case 4:
                    message.gameType1 = reader.sint32();
                    break;
                case 5:
                    if (!(message.ruleItem && message.ruleItem.length))
                        message.ruleItem = [];
                    message.ruleItem.push($root.msg.KeyAndVal.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.maxRound = reader.sint32();
                    break;
                case 7:
                    message.currRound = reader.sint32();
                    break;
                case 8:
                    message.maxPlayer = reader.sint32();
                    break;
                case 9:
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
         * Decodes a Table message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Table
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Table} Table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Table.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Table message.
         * @function verify
         * @memberof msg.Table
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Table.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.seqNum != null && message.hasOwnProperty("seqNum"))
                if (!$util.isInteger(message.seqNum))
                    return "seqNum: integer expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId))
                    return "roomId: integer expected";
            if (message.gameType0 != null && message.hasOwnProperty("gameType0"))
                if (!$util.isInteger(message.gameType0))
                    return "gameType0: integer expected";
            if (message.gameType1 != null && message.hasOwnProperty("gameType1"))
                if (!$util.isInteger(message.gameType1))
                    return "gameType1: integer expected";
            if (message.ruleItem != null && message.hasOwnProperty("ruleItem")) {
                if (!Array.isArray(message.ruleItem))
                    return "ruleItem: array expected";
                for (let i = 0; i < message.ruleItem.length; ++i) {
                    let error = $root.msg.KeyAndVal.verify(message.ruleItem[i]);
                    if (error)
                        return "ruleItem." + error;
                }
            }
            if (message.maxRound != null && message.hasOwnProperty("maxRound"))
                if (!$util.isInteger(message.maxRound))
                    return "maxRound: integer expected";
            if (message.currRound != null && message.hasOwnProperty("currRound"))
                if (!$util.isInteger(message.currRound))
                    return "currRound: integer expected";
            if (message.maxPlayer != null && message.hasOwnProperty("maxPlayer"))
                if (!$util.isInteger(message.maxPlayer))
                    return "maxPlayer: integer expected";
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
         * Creates a Table message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Table
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Table} Table
         */
        Table.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Table)
                return object;
            let message = new $root.msg.Table();
            if (object.seqNum != null)
                message.seqNum = object.seqNum | 0;
            if (object.roomId != null)
                message.roomId = object.roomId | 0;
            if (object.gameType0 != null)
                message.gameType0 = object.gameType0 | 0;
            if (object.gameType1 != null)
                message.gameType1 = object.gameType1 | 0;
            if (object.ruleItem) {
                if (!Array.isArray(object.ruleItem))
                    throw TypeError(".msg.Table.ruleItem: array expected");
                message.ruleItem = [];
                for (let i = 0; i < object.ruleItem.length; ++i) {
                    if (typeof object.ruleItem[i] !== "object")
                        throw TypeError(".msg.Table.ruleItem: object expected");
                    message.ruleItem[i] = $root.msg.KeyAndVal.fromObject(object.ruleItem[i]);
                }
            }
            if (object.maxRound != null)
                message.maxRound = object.maxRound | 0;
            if (object.currRound != null)
                message.currRound = object.currRound | 0;
            if (object.maxPlayer != null)
                message.maxPlayer = object.maxPlayer | 0;
            if (object.player) {
                if (!Array.isArray(object.player))
                    throw TypeError(".msg.Table.player: array expected");
                message.player = [];
                for (let i = 0; i < object.player.length; ++i) {
                    if (typeof object.player[i] !== "object")
                        throw TypeError(".msg.Table.player: object expected");
                    message.player[i] = $root.msg.Player.fromObject(object.player[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Table message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Table
         * @static
         * @param {msg.Table} message Table
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Table.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.ruleItem = [];
                object.player = [];
            }
            if (options.defaults) {
                object.seqNum = 0;
                object.roomId = 0;
                object.gameType0 = 0;
                object.gameType1 = 0;
                object.maxRound = 0;
                object.currRound = 0;
                object.maxPlayer = 0;
            }
            if (message.seqNum != null && message.hasOwnProperty("seqNum"))
                object.seqNum = message.seqNum;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.gameType0 != null && message.hasOwnProperty("gameType0"))
                object.gameType0 = message.gameType0;
            if (message.gameType1 != null && message.hasOwnProperty("gameType1"))
                object.gameType1 = message.gameType1;
            if (message.ruleItem && message.ruleItem.length) {
                object.ruleItem = [];
                for (let j = 0; j < message.ruleItem.length; ++j)
                    object.ruleItem[j] = $root.msg.KeyAndVal.toObject(message.ruleItem[j], options);
            }
            if (message.maxRound != null && message.hasOwnProperty("maxRound"))
                object.maxRound = message.maxRound;
            if (message.currRound != null && message.hasOwnProperty("currRound"))
                object.currRound = message.currRound;
            if (message.maxPlayer != null && message.hasOwnProperty("maxPlayer"))
                object.maxPlayer = message.maxPlayer;
            if (message.player && message.player.length) {
                object.player = [];
                for (let j = 0; j < message.player.length; ++j)
                    object.player[j] = $root.msg.Player.toObject(message.player[j], options);
            }
            return object;
        };

        /**
         * Converts this Table to JSON.
         * @function toJSON
         * @memberof msg.Table
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Table.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Table;
    })();

    msg.GetJoinedClubListCmd = (function() {

        /**
         * Properties of a GetJoinedClubListCmd.
         * @memberof msg
         * @interface IGetJoinedClubListCmd
         */

        /**
         * Constructs a new GetJoinedClubListCmd.
         * @memberof msg
         * @classdesc Represents a GetJoinedClubListCmd.
         * @implements IGetJoinedClubListCmd
         * @constructor
         * @param {msg.IGetJoinedClubListCmd=} [properties] Properties to set
         */
        function GetJoinedClubListCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetJoinedClubListCmd instance using the specified properties.
         * @function create
         * @memberof msg.GetJoinedClubListCmd
         * @static
         * @param {msg.IGetJoinedClubListCmd=} [properties] Properties to set
         * @returns {msg.GetJoinedClubListCmd} GetJoinedClubListCmd instance
         */
        GetJoinedClubListCmd.create = function create(properties) {
            return new GetJoinedClubListCmd(properties);
        };

        /**
         * Encodes the specified GetJoinedClubListCmd message. Does not implicitly {@link msg.GetJoinedClubListCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.GetJoinedClubListCmd
         * @static
         * @param {msg.IGetJoinedClubListCmd} message GetJoinedClubListCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetJoinedClubListCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetJoinedClubListCmd message, length delimited. Does not implicitly {@link msg.GetJoinedClubListCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.GetJoinedClubListCmd
         * @static
         * @param {msg.IGetJoinedClubListCmd} message GetJoinedClubListCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetJoinedClubListCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetJoinedClubListCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.GetJoinedClubListCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.GetJoinedClubListCmd} GetJoinedClubListCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetJoinedClubListCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.GetJoinedClubListCmd();
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
         * Decodes a GetJoinedClubListCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.GetJoinedClubListCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.GetJoinedClubListCmd} GetJoinedClubListCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetJoinedClubListCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetJoinedClubListCmd message.
         * @function verify
         * @memberof msg.GetJoinedClubListCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetJoinedClubListCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetJoinedClubListCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.GetJoinedClubListCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.GetJoinedClubListCmd} GetJoinedClubListCmd
         */
        GetJoinedClubListCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.GetJoinedClubListCmd)
                return object;
            return new $root.msg.GetJoinedClubListCmd();
        };

        /**
         * Creates a plain object from a GetJoinedClubListCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.GetJoinedClubListCmd
         * @static
         * @param {msg.GetJoinedClubListCmd} message GetJoinedClubListCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetJoinedClubListCmd.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetJoinedClubListCmd to JSON.
         * @function toJSON
         * @memberof msg.GetJoinedClubListCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetJoinedClubListCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetJoinedClubListCmd;
    })();

    msg.GetJoinedClubListResult = (function() {

        /**
         * Properties of a GetJoinedClubListResult.
         * @memberof msg
         * @interface IGetJoinedClubListResult
         * @property {Array.<msg.GetJoinedClubListResult.IJoinedClub>|null} [joinedClub] GetJoinedClubListResult joinedClub
         */

        /**
         * Constructs a new GetJoinedClubListResult.
         * @memberof msg
         * @classdesc Represents a GetJoinedClubListResult.
         * @implements IGetJoinedClubListResult
         * @constructor
         * @param {msg.IGetJoinedClubListResult=} [properties] Properties to set
         */
        function GetJoinedClubListResult(properties) {
            this.joinedClub = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetJoinedClubListResult joinedClub.
         * @member {Array.<msg.GetJoinedClubListResult.IJoinedClub>} joinedClub
         * @memberof msg.GetJoinedClubListResult
         * @instance
         */
        GetJoinedClubListResult.prototype.joinedClub = $util.emptyArray;

        /**
         * Creates a new GetJoinedClubListResult instance using the specified properties.
         * @function create
         * @memberof msg.GetJoinedClubListResult
         * @static
         * @param {msg.IGetJoinedClubListResult=} [properties] Properties to set
         * @returns {msg.GetJoinedClubListResult} GetJoinedClubListResult instance
         */
        GetJoinedClubListResult.create = function create(properties) {
            return new GetJoinedClubListResult(properties);
        };

        /**
         * Encodes the specified GetJoinedClubListResult message. Does not implicitly {@link msg.GetJoinedClubListResult.verify|verify} messages.
         * @function encode
         * @memberof msg.GetJoinedClubListResult
         * @static
         * @param {msg.IGetJoinedClubListResult} message GetJoinedClubListResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetJoinedClubListResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.joinedClub != null && message.joinedClub.length)
                for (let i = 0; i < message.joinedClub.length; ++i)
                    $root.msg.GetJoinedClubListResult.JoinedClub.encode(message.joinedClub[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetJoinedClubListResult message, length delimited. Does not implicitly {@link msg.GetJoinedClubListResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.GetJoinedClubListResult
         * @static
         * @param {msg.IGetJoinedClubListResult} message GetJoinedClubListResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetJoinedClubListResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetJoinedClubListResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.GetJoinedClubListResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.GetJoinedClubListResult} GetJoinedClubListResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetJoinedClubListResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.GetJoinedClubListResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.joinedClub && message.joinedClub.length))
                        message.joinedClub = [];
                    message.joinedClub.push($root.msg.GetJoinedClubListResult.JoinedClub.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetJoinedClubListResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.GetJoinedClubListResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.GetJoinedClubListResult} GetJoinedClubListResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetJoinedClubListResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetJoinedClubListResult message.
         * @function verify
         * @memberof msg.GetJoinedClubListResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetJoinedClubListResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.joinedClub != null && message.hasOwnProperty("joinedClub")) {
                if (!Array.isArray(message.joinedClub))
                    return "joinedClub: array expected";
                for (let i = 0; i < message.joinedClub.length; ++i) {
                    let error = $root.msg.GetJoinedClubListResult.JoinedClub.verify(message.joinedClub[i]);
                    if (error)
                        return "joinedClub." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetJoinedClubListResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.GetJoinedClubListResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.GetJoinedClubListResult} GetJoinedClubListResult
         */
        GetJoinedClubListResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.GetJoinedClubListResult)
                return object;
            let message = new $root.msg.GetJoinedClubListResult();
            if (object.joinedClub) {
                if (!Array.isArray(object.joinedClub))
                    throw TypeError(".msg.GetJoinedClubListResult.joinedClub: array expected");
                message.joinedClub = [];
                for (let i = 0; i < object.joinedClub.length; ++i) {
                    if (typeof object.joinedClub[i] !== "object")
                        throw TypeError(".msg.GetJoinedClubListResult.joinedClub: object expected");
                    message.joinedClub[i] = $root.msg.GetJoinedClubListResult.JoinedClub.fromObject(object.joinedClub[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetJoinedClubListResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.GetJoinedClubListResult
         * @static
         * @param {msg.GetJoinedClubListResult} message GetJoinedClubListResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetJoinedClubListResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.joinedClub = [];
            if (message.joinedClub && message.joinedClub.length) {
                object.joinedClub = [];
                for (let j = 0; j < message.joinedClub.length; ++j)
                    object.joinedClub[j] = $root.msg.GetJoinedClubListResult.JoinedClub.toObject(message.joinedClub[j], options);
            }
            return object;
        };

        /**
         * Converts this GetJoinedClubListResult to JSON.
         * @function toJSON
         * @memberof msg.GetJoinedClubListResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetJoinedClubListResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        GetJoinedClubListResult.JoinedClub = (function() {

            /**
             * Properties of a JoinedClub.
             * @memberof msg.GetJoinedClubListResult
             * @interface IJoinedClub
             * @property {number|null} [clubId] JoinedClub clubId
             * @property {string|null} [clubName] JoinedClub clubName
             * @property {number|null} [creatorId] JoinedClub creatorId
             * @property {string|null} [creatorName] JoinedClub creatorName
             * @property {string|null} [creatorHeadImg] JoinedClub creatorHeadImg
             * @property {number|null} [creatorSex] JoinedClub creatorSex
             * @property {number|null} [numOfPeople] JoinedClub numOfPeople
             * @property {number|null} [numOfGaming] JoinedClub numOfGaming
             * @property {number|null} [numOfWaiting] JoinedClub numOfWaiting
             */

            /**
             * Constructs a new JoinedClub.
             * @memberof msg.GetJoinedClubListResult
             * @classdesc Represents a JoinedClub.
             * @implements IJoinedClub
             * @constructor
             * @param {msg.GetJoinedClubListResult.IJoinedClub=} [properties] Properties to set
             */
            function JoinedClub(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * JoinedClub clubId.
             * @member {number} clubId
             * @memberof msg.GetJoinedClubListResult.JoinedClub
             * @instance
             */
            JoinedClub.prototype.clubId = 0;

            /**
             * JoinedClub clubName.
             * @member {string} clubName
             * @memberof msg.GetJoinedClubListResult.JoinedClub
             * @instance
             */
            JoinedClub.prototype.clubName = "";

            /**
             * JoinedClub creatorId.
             * @member {number} creatorId
             * @memberof msg.GetJoinedClubListResult.JoinedClub
             * @instance
             */
            JoinedClub.prototype.creatorId = 0;

            /**
             * JoinedClub creatorName.
             * @member {string} creatorName
             * @memberof msg.GetJoinedClubListResult.JoinedClub
             * @instance
             */
            JoinedClub.prototype.creatorName = "";

            /**
             * JoinedClub creatorHeadImg.
             * @member {string} creatorHeadImg
             * @memberof msg.GetJoinedClubListResult.JoinedClub
             * @instance
             */
            JoinedClub.prototype.creatorHeadImg = "";

            /**
             * JoinedClub creatorSex.
             * @member {number} creatorSex
             * @memberof msg.GetJoinedClubListResult.JoinedClub
             * @instance
             */
            JoinedClub.prototype.creatorSex = 0;

            /**
             * JoinedClub numOfPeople.
             * @member {number} numOfPeople
             * @memberof msg.GetJoinedClubListResult.JoinedClub
             * @instance
             */
            JoinedClub.prototype.numOfPeople = 0;

            /**
             * JoinedClub numOfGaming.
             * @member {number} numOfGaming
             * @memberof msg.GetJoinedClubListResult.JoinedClub
             * @instance
             */
            JoinedClub.prototype.numOfGaming = 0;

            /**
             * JoinedClub numOfWaiting.
             * @member {number} numOfWaiting
             * @memberof msg.GetJoinedClubListResult.JoinedClub
             * @instance
             */
            JoinedClub.prototype.numOfWaiting = 0;

            /**
             * Creates a new JoinedClub instance using the specified properties.
             * @function create
             * @memberof msg.GetJoinedClubListResult.JoinedClub
             * @static
             * @param {msg.GetJoinedClubListResult.IJoinedClub=} [properties] Properties to set
             * @returns {msg.GetJoinedClubListResult.JoinedClub} JoinedClub instance
             */
            JoinedClub.create = function create(properties) {
                return new JoinedClub(properties);
            };

            /**
             * Encodes the specified JoinedClub message. Does not implicitly {@link msg.GetJoinedClubListResult.JoinedClub.verify|verify} messages.
             * @function encode
             * @memberof msg.GetJoinedClubListResult.JoinedClub
             * @static
             * @param {msg.GetJoinedClubListResult.IJoinedClub} message JoinedClub message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinedClub.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.clubId != null && Object.hasOwnProperty.call(message, "clubId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.clubId);
                if (message.clubName != null && Object.hasOwnProperty.call(message, "clubName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.clubName);
                if (message.creatorId != null && Object.hasOwnProperty.call(message, "creatorId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.creatorId);
                if (message.creatorName != null && Object.hasOwnProperty.call(message, "creatorName"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.creatorName);
                if (message.creatorHeadImg != null && Object.hasOwnProperty.call(message, "creatorHeadImg"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.creatorHeadImg);
                if (message.creatorSex != null && Object.hasOwnProperty.call(message, "creatorSex"))
                    writer.uint32(/* id 6, wireType 0 =*/48).sint32(message.creatorSex);
                if (message.numOfPeople != null && Object.hasOwnProperty.call(message, "numOfPeople"))
                    writer.uint32(/* id 7, wireType 0 =*/56).sint32(message.numOfPeople);
                if (message.numOfGaming != null && Object.hasOwnProperty.call(message, "numOfGaming"))
                    writer.uint32(/* id 8, wireType 0 =*/64).sint32(message.numOfGaming);
                if (message.numOfWaiting != null && Object.hasOwnProperty.call(message, "numOfWaiting"))
                    writer.uint32(/* id 9, wireType 0 =*/72).sint32(message.numOfWaiting);
                return writer;
            };

            /**
             * Encodes the specified JoinedClub message, length delimited. Does not implicitly {@link msg.GetJoinedClubListResult.JoinedClub.verify|verify} messages.
             * @function encodeDelimited
             * @memberof msg.GetJoinedClubListResult.JoinedClub
             * @static
             * @param {msg.GetJoinedClubListResult.IJoinedClub} message JoinedClub message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinedClub.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a JoinedClub message from the specified reader or buffer.
             * @function decode
             * @memberof msg.GetJoinedClubListResult.JoinedClub
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {msg.GetJoinedClubListResult.JoinedClub} JoinedClub
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoinedClub.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.GetJoinedClubListResult.JoinedClub();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.clubId = reader.sint32();
                        break;
                    case 2:
                        message.clubName = reader.string();
                        break;
                    case 3:
                        message.creatorId = reader.sint32();
                        break;
                    case 4:
                        message.creatorName = reader.string();
                        break;
                    case 5:
                        message.creatorHeadImg = reader.string();
                        break;
                    case 6:
                        message.creatorSex = reader.sint32();
                        break;
                    case 7:
                        message.numOfPeople = reader.sint32();
                        break;
                    case 8:
                        message.numOfGaming = reader.sint32();
                        break;
                    case 9:
                        message.numOfWaiting = reader.sint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a JoinedClub message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof msg.GetJoinedClubListResult.JoinedClub
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {msg.GetJoinedClubListResult.JoinedClub} JoinedClub
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoinedClub.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a JoinedClub message.
             * @function verify
             * @memberof msg.GetJoinedClubListResult.JoinedClub
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            JoinedClub.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.clubId != null && message.hasOwnProperty("clubId"))
                    if (!$util.isInteger(message.clubId))
                        return "clubId: integer expected";
                if (message.clubName != null && message.hasOwnProperty("clubName"))
                    if (!$util.isString(message.clubName))
                        return "clubName: string expected";
                if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                    if (!$util.isInteger(message.creatorId))
                        return "creatorId: integer expected";
                if (message.creatorName != null && message.hasOwnProperty("creatorName"))
                    if (!$util.isString(message.creatorName))
                        return "creatorName: string expected";
                if (message.creatorHeadImg != null && message.hasOwnProperty("creatorHeadImg"))
                    if (!$util.isString(message.creatorHeadImg))
                        return "creatorHeadImg: string expected";
                if (message.creatorSex != null && message.hasOwnProperty("creatorSex"))
                    if (!$util.isInteger(message.creatorSex))
                        return "creatorSex: integer expected";
                if (message.numOfPeople != null && message.hasOwnProperty("numOfPeople"))
                    if (!$util.isInteger(message.numOfPeople))
                        return "numOfPeople: integer expected";
                if (message.numOfGaming != null && message.hasOwnProperty("numOfGaming"))
                    if (!$util.isInteger(message.numOfGaming))
                        return "numOfGaming: integer expected";
                if (message.numOfWaiting != null && message.hasOwnProperty("numOfWaiting"))
                    if (!$util.isInteger(message.numOfWaiting))
                        return "numOfWaiting: integer expected";
                return null;
            };

            /**
             * Creates a JoinedClub message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof msg.GetJoinedClubListResult.JoinedClub
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {msg.GetJoinedClubListResult.JoinedClub} JoinedClub
             */
            JoinedClub.fromObject = function fromObject(object) {
                if (object instanceof $root.msg.GetJoinedClubListResult.JoinedClub)
                    return object;
                let message = new $root.msg.GetJoinedClubListResult.JoinedClub();
                if (object.clubId != null)
                    message.clubId = object.clubId | 0;
                if (object.clubName != null)
                    message.clubName = String(object.clubName);
                if (object.creatorId != null)
                    message.creatorId = object.creatorId | 0;
                if (object.creatorName != null)
                    message.creatorName = String(object.creatorName);
                if (object.creatorHeadImg != null)
                    message.creatorHeadImg = String(object.creatorHeadImg);
                if (object.creatorSex != null)
                    message.creatorSex = object.creatorSex | 0;
                if (object.numOfPeople != null)
                    message.numOfPeople = object.numOfPeople | 0;
                if (object.numOfGaming != null)
                    message.numOfGaming = object.numOfGaming | 0;
                if (object.numOfWaiting != null)
                    message.numOfWaiting = object.numOfWaiting | 0;
                return message;
            };

            /**
             * Creates a plain object from a JoinedClub message. Also converts values to other types if specified.
             * @function toObject
             * @memberof msg.GetJoinedClubListResult.JoinedClub
             * @static
             * @param {msg.GetJoinedClubListResult.JoinedClub} message JoinedClub
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            JoinedClub.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.clubId = 0;
                    object.clubName = "";
                    object.creatorId = 0;
                    object.creatorName = "";
                    object.creatorHeadImg = "";
                    object.creatorSex = 0;
                    object.numOfPeople = 0;
                    object.numOfGaming = 0;
                    object.numOfWaiting = 0;
                }
                if (message.clubId != null && message.hasOwnProperty("clubId"))
                    object.clubId = message.clubId;
                if (message.clubName != null && message.hasOwnProperty("clubName"))
                    object.clubName = message.clubName;
                if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                    object.creatorId = message.creatorId;
                if (message.creatorName != null && message.hasOwnProperty("creatorName"))
                    object.creatorName = message.creatorName;
                if (message.creatorHeadImg != null && message.hasOwnProperty("creatorHeadImg"))
                    object.creatorHeadImg = message.creatorHeadImg;
                if (message.creatorSex != null && message.hasOwnProperty("creatorSex"))
                    object.creatorSex = message.creatorSex;
                if (message.numOfPeople != null && message.hasOwnProperty("numOfPeople"))
                    object.numOfPeople = message.numOfPeople;
                if (message.numOfGaming != null && message.hasOwnProperty("numOfGaming"))
                    object.numOfGaming = message.numOfGaming;
                if (message.numOfWaiting != null && message.hasOwnProperty("numOfWaiting"))
                    object.numOfWaiting = message.numOfWaiting;
                return object;
            };

            /**
             * Converts this JoinedClub to JSON.
             * @function toJSON
             * @memberof msg.GetJoinedClubListResult.JoinedClub
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            JoinedClub.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return JoinedClub;
        })();

        return GetJoinedClubListResult;
    })();

    msg.CreateClubCmd = (function() {

        /**
         * Properties of a CreateClubCmd.
         * @memberof msg
         * @interface ICreateClubCmd
         * @property {string|null} [clubName] CreateClubCmd clubName
         */

        /**
         * Constructs a new CreateClubCmd.
         * @memberof msg
         * @classdesc Represents a CreateClubCmd.
         * @implements ICreateClubCmd
         * @constructor
         * @param {msg.ICreateClubCmd=} [properties] Properties to set
         */
        function CreateClubCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateClubCmd clubName.
         * @member {string} clubName
         * @memberof msg.CreateClubCmd
         * @instance
         */
        CreateClubCmd.prototype.clubName = "";

        /**
         * Creates a new CreateClubCmd instance using the specified properties.
         * @function create
         * @memberof msg.CreateClubCmd
         * @static
         * @param {msg.ICreateClubCmd=} [properties] Properties to set
         * @returns {msg.CreateClubCmd} CreateClubCmd instance
         */
        CreateClubCmd.create = function create(properties) {
            return new CreateClubCmd(properties);
        };

        /**
         * Encodes the specified CreateClubCmd message. Does not implicitly {@link msg.CreateClubCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.CreateClubCmd
         * @static
         * @param {msg.ICreateClubCmd} message CreateClubCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateClubCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clubName != null && Object.hasOwnProperty.call(message, "clubName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.clubName);
            return writer;
        };

        /**
         * Encodes the specified CreateClubCmd message, length delimited. Does not implicitly {@link msg.CreateClubCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.CreateClubCmd
         * @static
         * @param {msg.ICreateClubCmd} message CreateClubCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateClubCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateClubCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.CreateClubCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.CreateClubCmd} CreateClubCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateClubCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.CreateClubCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clubName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateClubCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.CreateClubCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.CreateClubCmd} CreateClubCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateClubCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateClubCmd message.
         * @function verify
         * @memberof msg.CreateClubCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateClubCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clubName != null && message.hasOwnProperty("clubName"))
                if (!$util.isString(message.clubName))
                    return "clubName: string expected";
            return null;
        };

        /**
         * Creates a CreateClubCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.CreateClubCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.CreateClubCmd} CreateClubCmd
         */
        CreateClubCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.CreateClubCmd)
                return object;
            let message = new $root.msg.CreateClubCmd();
            if (object.clubName != null)
                message.clubName = String(object.clubName);
            return message;
        };

        /**
         * Creates a plain object from a CreateClubCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.CreateClubCmd
         * @static
         * @param {msg.CreateClubCmd} message CreateClubCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateClubCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.clubName = "";
            if (message.clubName != null && message.hasOwnProperty("clubName"))
                object.clubName = message.clubName;
            return object;
        };

        /**
         * Converts this CreateClubCmd to JSON.
         * @function toJSON
         * @memberof msg.CreateClubCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateClubCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateClubCmd;
    })();

    msg.CreateClubResult = (function() {

        /**
         * Properties of a CreateClubResult.
         * @memberof msg
         * @interface ICreateClubResult
         * @property {number|null} [clubId] CreateClubResult clubId
         * @property {string|null} [clubName] CreateClubResult clubName
         */

        /**
         * Constructs a new CreateClubResult.
         * @memberof msg
         * @classdesc Represents a CreateClubResult.
         * @implements ICreateClubResult
         * @constructor
         * @param {msg.ICreateClubResult=} [properties] Properties to set
         */
        function CreateClubResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateClubResult clubId.
         * @member {number} clubId
         * @memberof msg.CreateClubResult
         * @instance
         */
        CreateClubResult.prototype.clubId = 0;

        /**
         * CreateClubResult clubName.
         * @member {string} clubName
         * @memberof msg.CreateClubResult
         * @instance
         */
        CreateClubResult.prototype.clubName = "";

        /**
         * Creates a new CreateClubResult instance using the specified properties.
         * @function create
         * @memberof msg.CreateClubResult
         * @static
         * @param {msg.ICreateClubResult=} [properties] Properties to set
         * @returns {msg.CreateClubResult} CreateClubResult instance
         */
        CreateClubResult.create = function create(properties) {
            return new CreateClubResult(properties);
        };

        /**
         * Encodes the specified CreateClubResult message. Does not implicitly {@link msg.CreateClubResult.verify|verify} messages.
         * @function encode
         * @memberof msg.CreateClubResult
         * @static
         * @param {msg.ICreateClubResult} message CreateClubResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateClubResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clubId != null && Object.hasOwnProperty.call(message, "clubId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.clubId);
            if (message.clubName != null && Object.hasOwnProperty.call(message, "clubName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.clubName);
            return writer;
        };

        /**
         * Encodes the specified CreateClubResult message, length delimited. Does not implicitly {@link msg.CreateClubResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.CreateClubResult
         * @static
         * @param {msg.ICreateClubResult} message CreateClubResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateClubResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateClubResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.CreateClubResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.CreateClubResult} CreateClubResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateClubResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.CreateClubResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clubId = reader.sint32();
                    break;
                case 2:
                    message.clubName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateClubResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.CreateClubResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.CreateClubResult} CreateClubResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateClubResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateClubResult message.
         * @function verify
         * @memberof msg.CreateClubResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateClubResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                if (!$util.isInteger(message.clubId))
                    return "clubId: integer expected";
            if (message.clubName != null && message.hasOwnProperty("clubName"))
                if (!$util.isString(message.clubName))
                    return "clubName: string expected";
            return null;
        };

        /**
         * Creates a CreateClubResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.CreateClubResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.CreateClubResult} CreateClubResult
         */
        CreateClubResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.CreateClubResult)
                return object;
            let message = new $root.msg.CreateClubResult();
            if (object.clubId != null)
                message.clubId = object.clubId | 0;
            if (object.clubName != null)
                message.clubName = String(object.clubName);
            return message;
        };

        /**
         * Creates a plain object from a CreateClubResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.CreateClubResult
         * @static
         * @param {msg.CreateClubResult} message CreateClubResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateClubResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.clubId = 0;
                object.clubName = "";
            }
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                object.clubId = message.clubId;
            if (message.clubName != null && message.hasOwnProperty("clubName"))
                object.clubName = message.clubName;
            return object;
        };

        /**
         * Converts this CreateClubResult to JSON.
         * @function toJSON
         * @memberof msg.CreateClubResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateClubResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateClubResult;
    })();

    msg.JoinClubCmd = (function() {

        /**
         * Properties of a JoinClubCmd.
         * @memberof msg
         * @interface IJoinClubCmd
         * @property {number|null} [clubId] JoinClubCmd clubId
         */

        /**
         * Constructs a new JoinClubCmd.
         * @memberof msg
         * @classdesc Represents a JoinClubCmd.
         * @implements IJoinClubCmd
         * @constructor
         * @param {msg.IJoinClubCmd=} [properties] Properties to set
         */
        function JoinClubCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinClubCmd clubId.
         * @member {number} clubId
         * @memberof msg.JoinClubCmd
         * @instance
         */
        JoinClubCmd.prototype.clubId = 0;

        /**
         * Creates a new JoinClubCmd instance using the specified properties.
         * @function create
         * @memberof msg.JoinClubCmd
         * @static
         * @param {msg.IJoinClubCmd=} [properties] Properties to set
         * @returns {msg.JoinClubCmd} JoinClubCmd instance
         */
        JoinClubCmd.create = function create(properties) {
            return new JoinClubCmd(properties);
        };

        /**
         * Encodes the specified JoinClubCmd message. Does not implicitly {@link msg.JoinClubCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.JoinClubCmd
         * @static
         * @param {msg.IJoinClubCmd} message JoinClubCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinClubCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clubId != null && Object.hasOwnProperty.call(message, "clubId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.clubId);
            return writer;
        };

        /**
         * Encodes the specified JoinClubCmd message, length delimited. Does not implicitly {@link msg.JoinClubCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.JoinClubCmd
         * @static
         * @param {msg.IJoinClubCmd} message JoinClubCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinClubCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinClubCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.JoinClubCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.JoinClubCmd} JoinClubCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinClubCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.JoinClubCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clubId = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinClubCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.JoinClubCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.JoinClubCmd} JoinClubCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinClubCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinClubCmd message.
         * @function verify
         * @memberof msg.JoinClubCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinClubCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                if (!$util.isInteger(message.clubId))
                    return "clubId: integer expected";
            return null;
        };

        /**
         * Creates a JoinClubCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.JoinClubCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.JoinClubCmd} JoinClubCmd
         */
        JoinClubCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.JoinClubCmd)
                return object;
            let message = new $root.msg.JoinClubCmd();
            if (object.clubId != null)
                message.clubId = object.clubId | 0;
            return message;
        };

        /**
         * Creates a plain object from a JoinClubCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.JoinClubCmd
         * @static
         * @param {msg.JoinClubCmd} message JoinClubCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinClubCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.clubId = 0;
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                object.clubId = message.clubId;
            return object;
        };

        /**
         * Converts this JoinClubCmd to JSON.
         * @function toJSON
         * @memberof msg.JoinClubCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinClubCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinClubCmd;
    })();

    msg.JoinClubResult = (function() {

        /**
         * Properties of a JoinClubResult.
         * @memberof msg
         * @interface IJoinClubResult
         * @property {number|null} [clubId] JoinClubResult clubId
         * @property {boolean|null} [succezz] JoinClubResult succezz
         */

        /**
         * Constructs a new JoinClubResult.
         * @memberof msg
         * @classdesc Represents a JoinClubResult.
         * @implements IJoinClubResult
         * @constructor
         * @param {msg.IJoinClubResult=} [properties] Properties to set
         */
        function JoinClubResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinClubResult clubId.
         * @member {number} clubId
         * @memberof msg.JoinClubResult
         * @instance
         */
        JoinClubResult.prototype.clubId = 0;

        /**
         * JoinClubResult succezz.
         * @member {boolean} succezz
         * @memberof msg.JoinClubResult
         * @instance
         */
        JoinClubResult.prototype.succezz = false;

        /**
         * Creates a new JoinClubResult instance using the specified properties.
         * @function create
         * @memberof msg.JoinClubResult
         * @static
         * @param {msg.IJoinClubResult=} [properties] Properties to set
         * @returns {msg.JoinClubResult} JoinClubResult instance
         */
        JoinClubResult.create = function create(properties) {
            return new JoinClubResult(properties);
        };

        /**
         * Encodes the specified JoinClubResult message. Does not implicitly {@link msg.JoinClubResult.verify|verify} messages.
         * @function encode
         * @memberof msg.JoinClubResult
         * @static
         * @param {msg.IJoinClubResult} message JoinClubResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinClubResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clubId != null && Object.hasOwnProperty.call(message, "clubId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.clubId);
            if (message.succezz != null && Object.hasOwnProperty.call(message, "succezz"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.succezz);
            return writer;
        };

        /**
         * Encodes the specified JoinClubResult message, length delimited. Does not implicitly {@link msg.JoinClubResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.JoinClubResult
         * @static
         * @param {msg.IJoinClubResult} message JoinClubResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinClubResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinClubResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.JoinClubResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.JoinClubResult} JoinClubResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinClubResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.JoinClubResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clubId = reader.sint32();
                    break;
                case 2:
                    message.succezz = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinClubResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.JoinClubResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.JoinClubResult} JoinClubResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinClubResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinClubResult message.
         * @function verify
         * @memberof msg.JoinClubResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinClubResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                if (!$util.isInteger(message.clubId))
                    return "clubId: integer expected";
            if (message.succezz != null && message.hasOwnProperty("succezz"))
                if (typeof message.succezz !== "boolean")
                    return "succezz: boolean expected";
            return null;
        };

        /**
         * Creates a JoinClubResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.JoinClubResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.JoinClubResult} JoinClubResult
         */
        JoinClubResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.JoinClubResult)
                return object;
            let message = new $root.msg.JoinClubResult();
            if (object.clubId != null)
                message.clubId = object.clubId | 0;
            if (object.succezz != null)
                message.succezz = Boolean(object.succezz);
            return message;
        };

        /**
         * Creates a plain object from a JoinClubResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.JoinClubResult
         * @static
         * @param {msg.JoinClubResult} message JoinClubResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinClubResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.clubId = 0;
                object.succezz = false;
            }
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                object.clubId = message.clubId;
            if (message.succezz != null && message.hasOwnProperty("succezz"))
                object.succezz = message.succezz;
            return object;
        };

        /**
         * Converts this JoinClubResult to JSON.
         * @function toJSON
         * @memberof msg.JoinClubResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinClubResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinClubResult;
    })();

    msg.GetClubDetailzCmd = (function() {

        /**
         * Properties of a GetClubDetailzCmd.
         * @memberof msg
         * @interface IGetClubDetailzCmd
         * @property {number|null} [clubId] GetClubDetailzCmd clubId
         */

        /**
         * Constructs a new GetClubDetailzCmd.
         * @memberof msg
         * @classdesc Represents a GetClubDetailzCmd.
         * @implements IGetClubDetailzCmd
         * @constructor
         * @param {msg.IGetClubDetailzCmd=} [properties] Properties to set
         */
        function GetClubDetailzCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetClubDetailzCmd clubId.
         * @member {number} clubId
         * @memberof msg.GetClubDetailzCmd
         * @instance
         */
        GetClubDetailzCmd.prototype.clubId = 0;

        /**
         * Creates a new GetClubDetailzCmd instance using the specified properties.
         * @function create
         * @memberof msg.GetClubDetailzCmd
         * @static
         * @param {msg.IGetClubDetailzCmd=} [properties] Properties to set
         * @returns {msg.GetClubDetailzCmd} GetClubDetailzCmd instance
         */
        GetClubDetailzCmd.create = function create(properties) {
            return new GetClubDetailzCmd(properties);
        };

        /**
         * Encodes the specified GetClubDetailzCmd message. Does not implicitly {@link msg.GetClubDetailzCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.GetClubDetailzCmd
         * @static
         * @param {msg.IGetClubDetailzCmd} message GetClubDetailzCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetClubDetailzCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clubId != null && Object.hasOwnProperty.call(message, "clubId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.clubId);
            return writer;
        };

        /**
         * Encodes the specified GetClubDetailzCmd message, length delimited. Does not implicitly {@link msg.GetClubDetailzCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.GetClubDetailzCmd
         * @static
         * @param {msg.IGetClubDetailzCmd} message GetClubDetailzCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetClubDetailzCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetClubDetailzCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.GetClubDetailzCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.GetClubDetailzCmd} GetClubDetailzCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetClubDetailzCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.GetClubDetailzCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clubId = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetClubDetailzCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.GetClubDetailzCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.GetClubDetailzCmd} GetClubDetailzCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetClubDetailzCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetClubDetailzCmd message.
         * @function verify
         * @memberof msg.GetClubDetailzCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetClubDetailzCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                if (!$util.isInteger(message.clubId))
                    return "clubId: integer expected";
            return null;
        };

        /**
         * Creates a GetClubDetailzCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.GetClubDetailzCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.GetClubDetailzCmd} GetClubDetailzCmd
         */
        GetClubDetailzCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.GetClubDetailzCmd)
                return object;
            let message = new $root.msg.GetClubDetailzCmd();
            if (object.clubId != null)
                message.clubId = object.clubId | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetClubDetailzCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.GetClubDetailzCmd
         * @static
         * @param {msg.GetClubDetailzCmd} message GetClubDetailzCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetClubDetailzCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.clubId = 0;
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                object.clubId = message.clubId;
            return object;
        };

        /**
         * Converts this GetClubDetailzCmd to JSON.
         * @function toJSON
         * @memberof msg.GetClubDetailzCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetClubDetailzCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetClubDetailzCmd;
    })();

    msg.GetClubDetailzResult = (function() {

        /**
         * Properties of a GetClubDetailzResult.
         * @memberof msg
         * @interface IGetClubDetailzResult
         * @property {number|null} [clubId] GetClubDetailzResult clubId
         * @property {string|null} [clubName] GetClubDetailzResult clubName
         * @property {number|null} [creatorId] GetClubDetailzResult creatorId
         * @property {string|null} [creatorName] GetClubDetailzResult creatorName
         * @property {string|null} [creatorHeadImg] GetClubDetailzResult creatorHeadImg
         * @property {number|null} [creatorSex] GetClubDetailzResult creatorSex
         * @property {number|Long|null} [createTime] GetClubDetailzResult createTime
         * @property {number|null} [roomCard] GetClubDetailzResult roomCard
         * @property {Array.<msg.GetClubDetailzResult.IFixGameX>|null} [fixGameX] GetClubDetailzResult fixGameX
         * @property {number|null} [numOfPeople] GetClubDetailzResult numOfPeople
         * @property {number|null} [numOfGaming] GetClubDetailzResult numOfGaming
         * @property {number|null} [numOfWaiting] GetClubDetailzResult numOfWaiting
         * @property {number|null} [myRole] GetClubDetailzResult myRole
         */

        /**
         * Constructs a new GetClubDetailzResult.
         * @memberof msg
         * @classdesc Represents a GetClubDetailzResult.
         * @implements IGetClubDetailzResult
         * @constructor
         * @param {msg.IGetClubDetailzResult=} [properties] Properties to set
         */
        function GetClubDetailzResult(properties) {
            this.fixGameX = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetClubDetailzResult clubId.
         * @member {number} clubId
         * @memberof msg.GetClubDetailzResult
         * @instance
         */
        GetClubDetailzResult.prototype.clubId = 0;

        /**
         * GetClubDetailzResult clubName.
         * @member {string} clubName
         * @memberof msg.GetClubDetailzResult
         * @instance
         */
        GetClubDetailzResult.prototype.clubName = "";

        /**
         * GetClubDetailzResult creatorId.
         * @member {number} creatorId
         * @memberof msg.GetClubDetailzResult
         * @instance
         */
        GetClubDetailzResult.prototype.creatorId = 0;

        /**
         * GetClubDetailzResult creatorName.
         * @member {string} creatorName
         * @memberof msg.GetClubDetailzResult
         * @instance
         */
        GetClubDetailzResult.prototype.creatorName = "";

        /**
         * GetClubDetailzResult creatorHeadImg.
         * @member {string} creatorHeadImg
         * @memberof msg.GetClubDetailzResult
         * @instance
         */
        GetClubDetailzResult.prototype.creatorHeadImg = "";

        /**
         * GetClubDetailzResult creatorSex.
         * @member {number} creatorSex
         * @memberof msg.GetClubDetailzResult
         * @instance
         */
        GetClubDetailzResult.prototype.creatorSex = 0;

        /**
         * GetClubDetailzResult createTime.
         * @member {number|Long} createTime
         * @memberof msg.GetClubDetailzResult
         * @instance
         */
        GetClubDetailzResult.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetClubDetailzResult roomCard.
         * @member {number} roomCard
         * @memberof msg.GetClubDetailzResult
         * @instance
         */
        GetClubDetailzResult.prototype.roomCard = 0;

        /**
         * GetClubDetailzResult fixGameX.
         * @member {Array.<msg.GetClubDetailzResult.IFixGameX>} fixGameX
         * @memberof msg.GetClubDetailzResult
         * @instance
         */
        GetClubDetailzResult.prototype.fixGameX = $util.emptyArray;

        /**
         * GetClubDetailzResult numOfPeople.
         * @member {number} numOfPeople
         * @memberof msg.GetClubDetailzResult
         * @instance
         */
        GetClubDetailzResult.prototype.numOfPeople = 0;

        /**
         * GetClubDetailzResult numOfGaming.
         * @member {number} numOfGaming
         * @memberof msg.GetClubDetailzResult
         * @instance
         */
        GetClubDetailzResult.prototype.numOfGaming = 0;

        /**
         * GetClubDetailzResult numOfWaiting.
         * @member {number} numOfWaiting
         * @memberof msg.GetClubDetailzResult
         * @instance
         */
        GetClubDetailzResult.prototype.numOfWaiting = 0;

        /**
         * GetClubDetailzResult myRole.
         * @member {number} myRole
         * @memberof msg.GetClubDetailzResult
         * @instance
         */
        GetClubDetailzResult.prototype.myRole = 0;

        /**
         * Creates a new GetClubDetailzResult instance using the specified properties.
         * @function create
         * @memberof msg.GetClubDetailzResult
         * @static
         * @param {msg.IGetClubDetailzResult=} [properties] Properties to set
         * @returns {msg.GetClubDetailzResult} GetClubDetailzResult instance
         */
        GetClubDetailzResult.create = function create(properties) {
            return new GetClubDetailzResult(properties);
        };

        /**
         * Encodes the specified GetClubDetailzResult message. Does not implicitly {@link msg.GetClubDetailzResult.verify|verify} messages.
         * @function encode
         * @memberof msg.GetClubDetailzResult
         * @static
         * @param {msg.IGetClubDetailzResult} message GetClubDetailzResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetClubDetailzResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clubId != null && Object.hasOwnProperty.call(message, "clubId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.clubId);
            if (message.clubName != null && Object.hasOwnProperty.call(message, "clubName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.clubName);
            if (message.creatorId != null && Object.hasOwnProperty.call(message, "creatorId"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.creatorId);
            if (message.creatorName != null && Object.hasOwnProperty.call(message, "creatorName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.creatorName);
            if (message.creatorHeadImg != null && Object.hasOwnProperty.call(message, "creatorHeadImg"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.creatorHeadImg);
            if (message.creatorSex != null && Object.hasOwnProperty.call(message, "creatorSex"))
                writer.uint32(/* id 6, wireType 0 =*/48).sint32(message.creatorSex);
            if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
                writer.uint32(/* id 7, wireType 0 =*/56).sint64(message.createTime);
            if (message.roomCard != null && Object.hasOwnProperty.call(message, "roomCard"))
                writer.uint32(/* id 8, wireType 0 =*/64).sint32(message.roomCard);
            if (message.fixGameX != null && message.fixGameX.length)
                for (let i = 0; i < message.fixGameX.length; ++i)
                    $root.msg.GetClubDetailzResult.FixGameX.encode(message.fixGameX[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.numOfPeople != null && Object.hasOwnProperty.call(message, "numOfPeople"))
                writer.uint32(/* id 10, wireType 0 =*/80).sint32(message.numOfPeople);
            if (message.numOfGaming != null && Object.hasOwnProperty.call(message, "numOfGaming"))
                writer.uint32(/* id 11, wireType 0 =*/88).sint32(message.numOfGaming);
            if (message.numOfWaiting != null && Object.hasOwnProperty.call(message, "numOfWaiting"))
                writer.uint32(/* id 12, wireType 0 =*/96).sint32(message.numOfWaiting);
            if (message.myRole != null && Object.hasOwnProperty.call(message, "myRole"))
                writer.uint32(/* id 13, wireType 0 =*/104).sint32(message.myRole);
            return writer;
        };

        /**
         * Encodes the specified GetClubDetailzResult message, length delimited. Does not implicitly {@link msg.GetClubDetailzResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.GetClubDetailzResult
         * @static
         * @param {msg.IGetClubDetailzResult} message GetClubDetailzResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetClubDetailzResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetClubDetailzResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.GetClubDetailzResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.GetClubDetailzResult} GetClubDetailzResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetClubDetailzResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.GetClubDetailzResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clubId = reader.sint32();
                    break;
                case 2:
                    message.clubName = reader.string();
                    break;
                case 3:
                    message.creatorId = reader.sint32();
                    break;
                case 4:
                    message.creatorName = reader.string();
                    break;
                case 5:
                    message.creatorHeadImg = reader.string();
                    break;
                case 6:
                    message.creatorSex = reader.sint32();
                    break;
                case 7:
                    message.createTime = reader.sint64();
                    break;
                case 8:
                    message.roomCard = reader.sint32();
                    break;
                case 9:
                    if (!(message.fixGameX && message.fixGameX.length))
                        message.fixGameX = [];
                    message.fixGameX.push($root.msg.GetClubDetailzResult.FixGameX.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.numOfPeople = reader.sint32();
                    break;
                case 11:
                    message.numOfGaming = reader.sint32();
                    break;
                case 12:
                    message.numOfWaiting = reader.sint32();
                    break;
                case 13:
                    message.myRole = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetClubDetailzResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.GetClubDetailzResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.GetClubDetailzResult} GetClubDetailzResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetClubDetailzResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetClubDetailzResult message.
         * @function verify
         * @memberof msg.GetClubDetailzResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetClubDetailzResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                if (!$util.isInteger(message.clubId))
                    return "clubId: integer expected";
            if (message.clubName != null && message.hasOwnProperty("clubName"))
                if (!$util.isString(message.clubName))
                    return "clubName: string expected";
            if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                if (!$util.isInteger(message.creatorId))
                    return "creatorId: integer expected";
            if (message.creatorName != null && message.hasOwnProperty("creatorName"))
                if (!$util.isString(message.creatorName))
                    return "creatorName: string expected";
            if (message.creatorHeadImg != null && message.hasOwnProperty("creatorHeadImg"))
                if (!$util.isString(message.creatorHeadImg))
                    return "creatorHeadImg: string expected";
            if (message.creatorSex != null && message.hasOwnProperty("creatorSex"))
                if (!$util.isInteger(message.creatorSex))
                    return "creatorSex: integer expected";
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (!$util.isInteger(message.createTime) && !(message.createTime && $util.isInteger(message.createTime.low) && $util.isInteger(message.createTime.high)))
                    return "createTime: integer|Long expected";
            if (message.roomCard != null && message.hasOwnProperty("roomCard"))
                if (!$util.isInteger(message.roomCard))
                    return "roomCard: integer expected";
            if (message.fixGameX != null && message.hasOwnProperty("fixGameX")) {
                if (!Array.isArray(message.fixGameX))
                    return "fixGameX: array expected";
                for (let i = 0; i < message.fixGameX.length; ++i) {
                    let error = $root.msg.GetClubDetailzResult.FixGameX.verify(message.fixGameX[i]);
                    if (error)
                        return "fixGameX." + error;
                }
            }
            if (message.numOfPeople != null && message.hasOwnProperty("numOfPeople"))
                if (!$util.isInteger(message.numOfPeople))
                    return "numOfPeople: integer expected";
            if (message.numOfGaming != null && message.hasOwnProperty("numOfGaming"))
                if (!$util.isInteger(message.numOfGaming))
                    return "numOfGaming: integer expected";
            if (message.numOfWaiting != null && message.hasOwnProperty("numOfWaiting"))
                if (!$util.isInteger(message.numOfWaiting))
                    return "numOfWaiting: integer expected";
            if (message.myRole != null && message.hasOwnProperty("myRole"))
                if (!$util.isInteger(message.myRole))
                    return "myRole: integer expected";
            return null;
        };

        /**
         * Creates a GetClubDetailzResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.GetClubDetailzResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.GetClubDetailzResult} GetClubDetailzResult
         */
        GetClubDetailzResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.GetClubDetailzResult)
                return object;
            let message = new $root.msg.GetClubDetailzResult();
            if (object.clubId != null)
                message.clubId = object.clubId | 0;
            if (object.clubName != null)
                message.clubName = String(object.clubName);
            if (object.creatorId != null)
                message.creatorId = object.creatorId | 0;
            if (object.creatorName != null)
                message.creatorName = String(object.creatorName);
            if (object.creatorHeadImg != null)
                message.creatorHeadImg = String(object.creatorHeadImg);
            if (object.creatorSex != null)
                message.creatorSex = object.creatorSex | 0;
            if (object.createTime != null)
                if ($util.Long)
                    (message.createTime = $util.Long.fromValue(object.createTime)).unsigned = false;
                else if (typeof object.createTime === "string")
                    message.createTime = parseInt(object.createTime, 10);
                else if (typeof object.createTime === "number")
                    message.createTime = object.createTime;
                else if (typeof object.createTime === "object")
                    message.createTime = new $util.LongBits(object.createTime.low >>> 0, object.createTime.high >>> 0).toNumber();
            if (object.roomCard != null)
                message.roomCard = object.roomCard | 0;
            if (object.fixGameX) {
                if (!Array.isArray(object.fixGameX))
                    throw TypeError(".msg.GetClubDetailzResult.fixGameX: array expected");
                message.fixGameX = [];
                for (let i = 0; i < object.fixGameX.length; ++i) {
                    if (typeof object.fixGameX[i] !== "object")
                        throw TypeError(".msg.GetClubDetailzResult.fixGameX: object expected");
                    message.fixGameX[i] = $root.msg.GetClubDetailzResult.FixGameX.fromObject(object.fixGameX[i]);
                }
            }
            if (object.numOfPeople != null)
                message.numOfPeople = object.numOfPeople | 0;
            if (object.numOfGaming != null)
                message.numOfGaming = object.numOfGaming | 0;
            if (object.numOfWaiting != null)
                message.numOfWaiting = object.numOfWaiting | 0;
            if (object.myRole != null)
                message.myRole = object.myRole | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetClubDetailzResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.GetClubDetailzResult
         * @static
         * @param {msg.GetClubDetailzResult} message GetClubDetailzResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetClubDetailzResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.fixGameX = [];
            if (options.defaults) {
                object.clubId = 0;
                object.clubName = "";
                object.creatorId = 0;
                object.creatorName = "";
                object.creatorHeadImg = "";
                object.creatorSex = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.createTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createTime = options.longs === String ? "0" : 0;
                object.roomCard = 0;
                object.numOfPeople = 0;
                object.numOfGaming = 0;
                object.numOfWaiting = 0;
                object.myRole = 0;
            }
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                object.clubId = message.clubId;
            if (message.clubName != null && message.hasOwnProperty("clubName"))
                object.clubName = message.clubName;
            if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                object.creatorId = message.creatorId;
            if (message.creatorName != null && message.hasOwnProperty("creatorName"))
                object.creatorName = message.creatorName;
            if (message.creatorHeadImg != null && message.hasOwnProperty("creatorHeadImg"))
                object.creatorHeadImg = message.creatorHeadImg;
            if (message.creatorSex != null && message.hasOwnProperty("creatorSex"))
                object.creatorSex = message.creatorSex;
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (typeof message.createTime === "number")
                    object.createTime = options.longs === String ? String(message.createTime) : message.createTime;
                else
                    object.createTime = options.longs === String ? $util.Long.prototype.toString.call(message.createTime) : options.longs === Number ? new $util.LongBits(message.createTime.low >>> 0, message.createTime.high >>> 0).toNumber() : message.createTime;
            if (message.roomCard != null && message.hasOwnProperty("roomCard"))
                object.roomCard = message.roomCard;
            if (message.fixGameX && message.fixGameX.length) {
                object.fixGameX = [];
                for (let j = 0; j < message.fixGameX.length; ++j)
                    object.fixGameX[j] = $root.msg.GetClubDetailzResult.FixGameX.toObject(message.fixGameX[j], options);
            }
            if (message.numOfPeople != null && message.hasOwnProperty("numOfPeople"))
                object.numOfPeople = message.numOfPeople;
            if (message.numOfGaming != null && message.hasOwnProperty("numOfGaming"))
                object.numOfGaming = message.numOfGaming;
            if (message.numOfWaiting != null && message.hasOwnProperty("numOfWaiting"))
                object.numOfWaiting = message.numOfWaiting;
            if (message.myRole != null && message.hasOwnProperty("myRole"))
                object.myRole = message.myRole;
            return object;
        };

        /**
         * Converts this GetClubDetailzResult to JSON.
         * @function toJSON
         * @memberof msg.GetClubDetailzResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetClubDetailzResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        GetClubDetailzResult.FixGameX = (function() {

            /**
             * Properties of a FixGameX.
             * @memberof msg.GetClubDetailzResult
             * @interface IFixGameX
             * @property {number|null} [index] FixGameX index
             * @property {number|null} [gameType0] FixGameX gameType0
             * @property {number|null} [gameType1] FixGameX gameType1
             * @property {Array.<msg.IKeyAndVal>|null} [ruleItem] FixGameX ruleItem
             */

            /**
             * Constructs a new FixGameX.
             * @memberof msg.GetClubDetailzResult
             * @classdesc Represents a FixGameX.
             * @implements IFixGameX
             * @constructor
             * @param {msg.GetClubDetailzResult.IFixGameX=} [properties] Properties to set
             */
            function FixGameX(properties) {
                this.ruleItem = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FixGameX index.
             * @member {number} index
             * @memberof msg.GetClubDetailzResult.FixGameX
             * @instance
             */
            FixGameX.prototype.index = 0;

            /**
             * FixGameX gameType0.
             * @member {number} gameType0
             * @memberof msg.GetClubDetailzResult.FixGameX
             * @instance
             */
            FixGameX.prototype.gameType0 = 0;

            /**
             * FixGameX gameType1.
             * @member {number} gameType1
             * @memberof msg.GetClubDetailzResult.FixGameX
             * @instance
             */
            FixGameX.prototype.gameType1 = 0;

            /**
             * FixGameX ruleItem.
             * @member {Array.<msg.IKeyAndVal>} ruleItem
             * @memberof msg.GetClubDetailzResult.FixGameX
             * @instance
             */
            FixGameX.prototype.ruleItem = $util.emptyArray;

            /**
             * Creates a new FixGameX instance using the specified properties.
             * @function create
             * @memberof msg.GetClubDetailzResult.FixGameX
             * @static
             * @param {msg.GetClubDetailzResult.IFixGameX=} [properties] Properties to set
             * @returns {msg.GetClubDetailzResult.FixGameX} FixGameX instance
             */
            FixGameX.create = function create(properties) {
                return new FixGameX(properties);
            };

            /**
             * Encodes the specified FixGameX message. Does not implicitly {@link msg.GetClubDetailzResult.FixGameX.verify|verify} messages.
             * @function encode
             * @memberof msg.GetClubDetailzResult.FixGameX
             * @static
             * @param {msg.GetClubDetailzResult.IFixGameX} message FixGameX message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FixGameX.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                    writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.index);
                if (message.gameType0 != null && Object.hasOwnProperty.call(message, "gameType0"))
                    writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.gameType0);
                if (message.gameType1 != null && Object.hasOwnProperty.call(message, "gameType1"))
                    writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.gameType1);
                if (message.ruleItem != null && message.ruleItem.length)
                    for (let i = 0; i < message.ruleItem.length; ++i)
                        $root.msg.KeyAndVal.encode(message.ruleItem[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FixGameX message, length delimited. Does not implicitly {@link msg.GetClubDetailzResult.FixGameX.verify|verify} messages.
             * @function encodeDelimited
             * @memberof msg.GetClubDetailzResult.FixGameX
             * @static
             * @param {msg.GetClubDetailzResult.IFixGameX} message FixGameX message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FixGameX.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FixGameX message from the specified reader or buffer.
             * @function decode
             * @memberof msg.GetClubDetailzResult.FixGameX
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {msg.GetClubDetailzResult.FixGameX} FixGameX
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FixGameX.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.GetClubDetailzResult.FixGameX();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.index = reader.sint32();
                        break;
                    case 2:
                        message.gameType0 = reader.sint32();
                        break;
                    case 3:
                        message.gameType1 = reader.sint32();
                        break;
                    case 4:
                        if (!(message.ruleItem && message.ruleItem.length))
                            message.ruleItem = [];
                        message.ruleItem.push($root.msg.KeyAndVal.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FixGameX message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof msg.GetClubDetailzResult.FixGameX
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {msg.GetClubDetailzResult.FixGameX} FixGameX
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FixGameX.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FixGameX message.
             * @function verify
             * @memberof msg.GetClubDetailzResult.FixGameX
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FixGameX.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.index != null && message.hasOwnProperty("index"))
                    if (!$util.isInteger(message.index))
                        return "index: integer expected";
                if (message.gameType0 != null && message.hasOwnProperty("gameType0"))
                    if (!$util.isInteger(message.gameType0))
                        return "gameType0: integer expected";
                if (message.gameType1 != null && message.hasOwnProperty("gameType1"))
                    if (!$util.isInteger(message.gameType1))
                        return "gameType1: integer expected";
                if (message.ruleItem != null && message.hasOwnProperty("ruleItem")) {
                    if (!Array.isArray(message.ruleItem))
                        return "ruleItem: array expected";
                    for (let i = 0; i < message.ruleItem.length; ++i) {
                        let error = $root.msg.KeyAndVal.verify(message.ruleItem[i]);
                        if (error)
                            return "ruleItem." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a FixGameX message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof msg.GetClubDetailzResult.FixGameX
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {msg.GetClubDetailzResult.FixGameX} FixGameX
             */
            FixGameX.fromObject = function fromObject(object) {
                if (object instanceof $root.msg.GetClubDetailzResult.FixGameX)
                    return object;
                let message = new $root.msg.GetClubDetailzResult.FixGameX();
                if (object.index != null)
                    message.index = object.index | 0;
                if (object.gameType0 != null)
                    message.gameType0 = object.gameType0 | 0;
                if (object.gameType1 != null)
                    message.gameType1 = object.gameType1 | 0;
                if (object.ruleItem) {
                    if (!Array.isArray(object.ruleItem))
                        throw TypeError(".msg.GetClubDetailzResult.FixGameX.ruleItem: array expected");
                    message.ruleItem = [];
                    for (let i = 0; i < object.ruleItem.length; ++i) {
                        if (typeof object.ruleItem[i] !== "object")
                            throw TypeError(".msg.GetClubDetailzResult.FixGameX.ruleItem: object expected");
                        message.ruleItem[i] = $root.msg.KeyAndVal.fromObject(object.ruleItem[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a FixGameX message. Also converts values to other types if specified.
             * @function toObject
             * @memberof msg.GetClubDetailzResult.FixGameX
             * @static
             * @param {msg.GetClubDetailzResult.FixGameX} message FixGameX
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FixGameX.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.ruleItem = [];
                if (options.defaults) {
                    object.index = 0;
                    object.gameType0 = 0;
                    object.gameType1 = 0;
                }
                if (message.index != null && message.hasOwnProperty("index"))
                    object.index = message.index;
                if (message.gameType0 != null && message.hasOwnProperty("gameType0"))
                    object.gameType0 = message.gameType0;
                if (message.gameType1 != null && message.hasOwnProperty("gameType1"))
                    object.gameType1 = message.gameType1;
                if (message.ruleItem && message.ruleItem.length) {
                    object.ruleItem = [];
                    for (let j = 0; j < message.ruleItem.length; ++j)
                        object.ruleItem[j] = $root.msg.KeyAndVal.toObject(message.ruleItem[j], options);
                }
                return object;
            };

            /**
             * Converts this FixGameX to JSON.
             * @function toJSON
             * @memberof msg.GetClubDetailzResult.FixGameX
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FixGameX.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FixGameX;
        })();

        return GetClubDetailzResult;
    })();

    msg.GetMemberInfoListCmd = (function() {

        /**
         * Properties of a GetMemberInfoListCmd.
         * @memberof msg
         * @interface IGetMemberInfoListCmd
         * @property {number|null} [clubId] GetMemberInfoListCmd clubId
         * @property {number|null} [pageIndex] GetMemberInfoListCmd pageIndex
         * @property {number|null} [pageSize] GetMemberInfoListCmd pageSize
         */

        /**
         * Constructs a new GetMemberInfoListCmd.
         * @memberof msg
         * @classdesc Represents a GetMemberInfoListCmd.
         * @implements IGetMemberInfoListCmd
         * @constructor
         * @param {msg.IGetMemberInfoListCmd=} [properties] Properties to set
         */
        function GetMemberInfoListCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetMemberInfoListCmd clubId.
         * @member {number} clubId
         * @memberof msg.GetMemberInfoListCmd
         * @instance
         */
        GetMemberInfoListCmd.prototype.clubId = 0;

        /**
         * GetMemberInfoListCmd pageIndex.
         * @member {number} pageIndex
         * @memberof msg.GetMemberInfoListCmd
         * @instance
         */
        GetMemberInfoListCmd.prototype.pageIndex = 0;

        /**
         * GetMemberInfoListCmd pageSize.
         * @member {number} pageSize
         * @memberof msg.GetMemberInfoListCmd
         * @instance
         */
        GetMemberInfoListCmd.prototype.pageSize = 0;

        /**
         * Creates a new GetMemberInfoListCmd instance using the specified properties.
         * @function create
         * @memberof msg.GetMemberInfoListCmd
         * @static
         * @param {msg.IGetMemberInfoListCmd=} [properties] Properties to set
         * @returns {msg.GetMemberInfoListCmd} GetMemberInfoListCmd instance
         */
        GetMemberInfoListCmd.create = function create(properties) {
            return new GetMemberInfoListCmd(properties);
        };

        /**
         * Encodes the specified GetMemberInfoListCmd message. Does not implicitly {@link msg.GetMemberInfoListCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.GetMemberInfoListCmd
         * @static
         * @param {msg.IGetMemberInfoListCmd} message GetMemberInfoListCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetMemberInfoListCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clubId != null && Object.hasOwnProperty.call(message, "clubId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.clubId);
            if (message.pageIndex != null && Object.hasOwnProperty.call(message, "pageIndex"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.pageIndex);
            if (message.pageSize != null && Object.hasOwnProperty.call(message, "pageSize"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.pageSize);
            return writer;
        };

        /**
         * Encodes the specified GetMemberInfoListCmd message, length delimited. Does not implicitly {@link msg.GetMemberInfoListCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.GetMemberInfoListCmd
         * @static
         * @param {msg.IGetMemberInfoListCmd} message GetMemberInfoListCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetMemberInfoListCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetMemberInfoListCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.GetMemberInfoListCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.GetMemberInfoListCmd} GetMemberInfoListCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetMemberInfoListCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.GetMemberInfoListCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clubId = reader.sint32();
                    break;
                case 2:
                    message.pageIndex = reader.sint32();
                    break;
                case 3:
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
         * Decodes a GetMemberInfoListCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.GetMemberInfoListCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.GetMemberInfoListCmd} GetMemberInfoListCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetMemberInfoListCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetMemberInfoListCmd message.
         * @function verify
         * @memberof msg.GetMemberInfoListCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetMemberInfoListCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                if (!$util.isInteger(message.clubId))
                    return "clubId: integer expected";
            if (message.pageIndex != null && message.hasOwnProperty("pageIndex"))
                if (!$util.isInteger(message.pageIndex))
                    return "pageIndex: integer expected";
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                if (!$util.isInteger(message.pageSize))
                    return "pageSize: integer expected";
            return null;
        };

        /**
         * Creates a GetMemberInfoListCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.GetMemberInfoListCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.GetMemberInfoListCmd} GetMemberInfoListCmd
         */
        GetMemberInfoListCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.GetMemberInfoListCmd)
                return object;
            let message = new $root.msg.GetMemberInfoListCmd();
            if (object.clubId != null)
                message.clubId = object.clubId | 0;
            if (object.pageIndex != null)
                message.pageIndex = object.pageIndex | 0;
            if (object.pageSize != null)
                message.pageSize = object.pageSize | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetMemberInfoListCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.GetMemberInfoListCmd
         * @static
         * @param {msg.GetMemberInfoListCmd} message GetMemberInfoListCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetMemberInfoListCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.clubId = 0;
                object.pageIndex = 0;
                object.pageSize = 0;
            }
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                object.clubId = message.clubId;
            if (message.pageIndex != null && message.hasOwnProperty("pageIndex"))
                object.pageIndex = message.pageIndex;
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                object.pageSize = message.pageSize;
            return object;
        };

        /**
         * Converts this GetMemberInfoListCmd to JSON.
         * @function toJSON
         * @memberof msg.GetMemberInfoListCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetMemberInfoListCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetMemberInfoListCmd;
    })();

    msg.GetMemberInfoListResult = (function() {

        /**
         * Properties of a GetMemberInfoListResult.
         * @memberof msg
         * @interface IGetMemberInfoListResult
         * @property {number|null} [clubId] GetMemberInfoListResult clubId
         * @property {number|null} [pageIndex] GetMemberInfoListResult pageIndex
         * @property {number|null} [totalCount] GetMemberInfoListResult totalCount
         * @property {Array.<msg.GetMemberInfoListResult.IMemberInfo>|null} [memberInfo] GetMemberInfoListResult memberInfo
         */

        /**
         * Constructs a new GetMemberInfoListResult.
         * @memberof msg
         * @classdesc Represents a GetMemberInfoListResult.
         * @implements IGetMemberInfoListResult
         * @constructor
         * @param {msg.IGetMemberInfoListResult=} [properties] Properties to set
         */
        function GetMemberInfoListResult(properties) {
            this.memberInfo = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetMemberInfoListResult clubId.
         * @member {number} clubId
         * @memberof msg.GetMemberInfoListResult
         * @instance
         */
        GetMemberInfoListResult.prototype.clubId = 0;

        /**
         * GetMemberInfoListResult pageIndex.
         * @member {number} pageIndex
         * @memberof msg.GetMemberInfoListResult
         * @instance
         */
        GetMemberInfoListResult.prototype.pageIndex = 0;

        /**
         * GetMemberInfoListResult totalCount.
         * @member {number} totalCount
         * @memberof msg.GetMemberInfoListResult
         * @instance
         */
        GetMemberInfoListResult.prototype.totalCount = 0;

        /**
         * GetMemberInfoListResult memberInfo.
         * @member {Array.<msg.GetMemberInfoListResult.IMemberInfo>} memberInfo
         * @memberof msg.GetMemberInfoListResult
         * @instance
         */
        GetMemberInfoListResult.prototype.memberInfo = $util.emptyArray;

        /**
         * Creates a new GetMemberInfoListResult instance using the specified properties.
         * @function create
         * @memberof msg.GetMemberInfoListResult
         * @static
         * @param {msg.IGetMemberInfoListResult=} [properties] Properties to set
         * @returns {msg.GetMemberInfoListResult} GetMemberInfoListResult instance
         */
        GetMemberInfoListResult.create = function create(properties) {
            return new GetMemberInfoListResult(properties);
        };

        /**
         * Encodes the specified GetMemberInfoListResult message. Does not implicitly {@link msg.GetMemberInfoListResult.verify|verify} messages.
         * @function encode
         * @memberof msg.GetMemberInfoListResult
         * @static
         * @param {msg.IGetMemberInfoListResult} message GetMemberInfoListResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetMemberInfoListResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clubId != null && Object.hasOwnProperty.call(message, "clubId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.clubId);
            if (message.pageIndex != null && Object.hasOwnProperty.call(message, "pageIndex"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.pageIndex);
            if (message.totalCount != null && Object.hasOwnProperty.call(message, "totalCount"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.totalCount);
            if (message.memberInfo != null && message.memberInfo.length)
                for (let i = 0; i < message.memberInfo.length; ++i)
                    $root.msg.GetMemberInfoListResult.MemberInfo.encode(message.memberInfo[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetMemberInfoListResult message, length delimited. Does not implicitly {@link msg.GetMemberInfoListResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.GetMemberInfoListResult
         * @static
         * @param {msg.IGetMemberInfoListResult} message GetMemberInfoListResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetMemberInfoListResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetMemberInfoListResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.GetMemberInfoListResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.GetMemberInfoListResult} GetMemberInfoListResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetMemberInfoListResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.GetMemberInfoListResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clubId = reader.sint32();
                    break;
                case 2:
                    message.pageIndex = reader.sint32();
                    break;
                case 3:
                    message.totalCount = reader.sint32();
                    break;
                case 4:
                    if (!(message.memberInfo && message.memberInfo.length))
                        message.memberInfo = [];
                    message.memberInfo.push($root.msg.GetMemberInfoListResult.MemberInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetMemberInfoListResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.GetMemberInfoListResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.GetMemberInfoListResult} GetMemberInfoListResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetMemberInfoListResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetMemberInfoListResult message.
         * @function verify
         * @memberof msg.GetMemberInfoListResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetMemberInfoListResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                if (!$util.isInteger(message.clubId))
                    return "clubId: integer expected";
            if (message.pageIndex != null && message.hasOwnProperty("pageIndex"))
                if (!$util.isInteger(message.pageIndex))
                    return "pageIndex: integer expected";
            if (message.totalCount != null && message.hasOwnProperty("totalCount"))
                if (!$util.isInteger(message.totalCount))
                    return "totalCount: integer expected";
            if (message.memberInfo != null && message.hasOwnProperty("memberInfo")) {
                if (!Array.isArray(message.memberInfo))
                    return "memberInfo: array expected";
                for (let i = 0; i < message.memberInfo.length; ++i) {
                    let error = $root.msg.GetMemberInfoListResult.MemberInfo.verify(message.memberInfo[i]);
                    if (error)
                        return "memberInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetMemberInfoListResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.GetMemberInfoListResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.GetMemberInfoListResult} GetMemberInfoListResult
         */
        GetMemberInfoListResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.GetMemberInfoListResult)
                return object;
            let message = new $root.msg.GetMemberInfoListResult();
            if (object.clubId != null)
                message.clubId = object.clubId | 0;
            if (object.pageIndex != null)
                message.pageIndex = object.pageIndex | 0;
            if (object.totalCount != null)
                message.totalCount = object.totalCount | 0;
            if (object.memberInfo) {
                if (!Array.isArray(object.memberInfo))
                    throw TypeError(".msg.GetMemberInfoListResult.memberInfo: array expected");
                message.memberInfo = [];
                for (let i = 0; i < object.memberInfo.length; ++i) {
                    if (typeof object.memberInfo[i] !== "object")
                        throw TypeError(".msg.GetMemberInfoListResult.memberInfo: object expected");
                    message.memberInfo[i] = $root.msg.GetMemberInfoListResult.MemberInfo.fromObject(object.memberInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetMemberInfoListResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.GetMemberInfoListResult
         * @static
         * @param {msg.GetMemberInfoListResult} message GetMemberInfoListResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetMemberInfoListResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.memberInfo = [];
            if (options.defaults) {
                object.clubId = 0;
                object.pageIndex = 0;
                object.totalCount = 0;
            }
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                object.clubId = message.clubId;
            if (message.pageIndex != null && message.hasOwnProperty("pageIndex"))
                object.pageIndex = message.pageIndex;
            if (message.totalCount != null && message.hasOwnProperty("totalCount"))
                object.totalCount = message.totalCount;
            if (message.memberInfo && message.memberInfo.length) {
                object.memberInfo = [];
                for (let j = 0; j < message.memberInfo.length; ++j)
                    object.memberInfo[j] = $root.msg.GetMemberInfoListResult.MemberInfo.toObject(message.memberInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this GetMemberInfoListResult to JSON.
         * @function toJSON
         * @memberof msg.GetMemberInfoListResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetMemberInfoListResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        GetMemberInfoListResult.MemberInfo = (function() {

            /**
             * Properties of a MemberInfo.
             * @memberof msg.GetMemberInfoListResult
             * @interface IMemberInfo
             * @property {number|null} [userId] MemberInfo userId
             * @property {number|null} [role] MemberInfo role
             * @property {string|null} [userName] MemberInfo userName
             * @property {string|null} [headImg] MemberInfo headImg
             * @property {number|null} [sex] MemberInfo sex
             * @property {number|Long|null} [joinTime] MemberInfo joinTime
             * @property {number|Long|null} [lastLoginTime] MemberInfo lastLoginTime
             * @property {number|null} [currState] MemberInfo currState
             */

            /**
             * Constructs a new MemberInfo.
             * @memberof msg.GetMemberInfoListResult
             * @classdesc Represents a MemberInfo.
             * @implements IMemberInfo
             * @constructor
             * @param {msg.GetMemberInfoListResult.IMemberInfo=} [properties] Properties to set
             */
            function MemberInfo(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MemberInfo userId.
             * @member {number} userId
             * @memberof msg.GetMemberInfoListResult.MemberInfo
             * @instance
             */
            MemberInfo.prototype.userId = 0;

            /**
             * MemberInfo role.
             * @member {number} role
             * @memberof msg.GetMemberInfoListResult.MemberInfo
             * @instance
             */
            MemberInfo.prototype.role = 0;

            /**
             * MemberInfo userName.
             * @member {string} userName
             * @memberof msg.GetMemberInfoListResult.MemberInfo
             * @instance
             */
            MemberInfo.prototype.userName = "";

            /**
             * MemberInfo headImg.
             * @member {string} headImg
             * @memberof msg.GetMemberInfoListResult.MemberInfo
             * @instance
             */
            MemberInfo.prototype.headImg = "";

            /**
             * MemberInfo sex.
             * @member {number} sex
             * @memberof msg.GetMemberInfoListResult.MemberInfo
             * @instance
             */
            MemberInfo.prototype.sex = 0;

            /**
             * MemberInfo joinTime.
             * @member {number|Long} joinTime
             * @memberof msg.GetMemberInfoListResult.MemberInfo
             * @instance
             */
            MemberInfo.prototype.joinTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * MemberInfo lastLoginTime.
             * @member {number|Long} lastLoginTime
             * @memberof msg.GetMemberInfoListResult.MemberInfo
             * @instance
             */
            MemberInfo.prototype.lastLoginTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * MemberInfo currState.
             * @member {number} currState
             * @memberof msg.GetMemberInfoListResult.MemberInfo
             * @instance
             */
            MemberInfo.prototype.currState = 0;

            /**
             * Creates a new MemberInfo instance using the specified properties.
             * @function create
             * @memberof msg.GetMemberInfoListResult.MemberInfo
             * @static
             * @param {msg.GetMemberInfoListResult.IMemberInfo=} [properties] Properties to set
             * @returns {msg.GetMemberInfoListResult.MemberInfo} MemberInfo instance
             */
            MemberInfo.create = function create(properties) {
                return new MemberInfo(properties);
            };

            /**
             * Encodes the specified MemberInfo message. Does not implicitly {@link msg.GetMemberInfoListResult.MemberInfo.verify|verify} messages.
             * @function encode
             * @memberof msg.GetMemberInfoListResult.MemberInfo
             * @static
             * @param {msg.GetMemberInfoListResult.IMemberInfo} message MemberInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MemberInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userId);
                if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                    writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.role);
                if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.userName);
                if (message.headImg != null && Object.hasOwnProperty.call(message, "headImg"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.headImg);
                if (message.sex != null && Object.hasOwnProperty.call(message, "sex"))
                    writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.sex);
                if (message.joinTime != null && Object.hasOwnProperty.call(message, "joinTime"))
                    writer.uint32(/* id 6, wireType 0 =*/48).sint64(message.joinTime);
                if (message.lastLoginTime != null && Object.hasOwnProperty.call(message, "lastLoginTime"))
                    writer.uint32(/* id 7, wireType 0 =*/56).sint64(message.lastLoginTime);
                if (message.currState != null && Object.hasOwnProperty.call(message, "currState"))
                    writer.uint32(/* id 8, wireType 0 =*/64).sint32(message.currState);
                return writer;
            };

            /**
             * Encodes the specified MemberInfo message, length delimited. Does not implicitly {@link msg.GetMemberInfoListResult.MemberInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof msg.GetMemberInfoListResult.MemberInfo
             * @static
             * @param {msg.GetMemberInfoListResult.IMemberInfo} message MemberInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MemberInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MemberInfo message from the specified reader or buffer.
             * @function decode
             * @memberof msg.GetMemberInfoListResult.MemberInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {msg.GetMemberInfoListResult.MemberInfo} MemberInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MemberInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.GetMemberInfoListResult.MemberInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.userId = reader.sint32();
                        break;
                    case 2:
                        message.role = reader.sint32();
                        break;
                    case 3:
                        message.userName = reader.string();
                        break;
                    case 4:
                        message.headImg = reader.string();
                        break;
                    case 5:
                        message.sex = reader.sint32();
                        break;
                    case 6:
                        message.joinTime = reader.sint64();
                        break;
                    case 7:
                        message.lastLoginTime = reader.sint64();
                        break;
                    case 8:
                        message.currState = reader.sint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MemberInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof msg.GetMemberInfoListResult.MemberInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {msg.GetMemberInfoListResult.MemberInfo} MemberInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MemberInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MemberInfo message.
             * @function verify
             * @memberof msg.GetMemberInfoListResult.MemberInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MemberInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId))
                        return "userId: integer expected";
                if (message.role != null && message.hasOwnProperty("role"))
                    if (!$util.isInteger(message.role))
                        return "role: integer expected";
                if (message.userName != null && message.hasOwnProperty("userName"))
                    if (!$util.isString(message.userName))
                        return "userName: string expected";
                if (message.headImg != null && message.hasOwnProperty("headImg"))
                    if (!$util.isString(message.headImg))
                        return "headImg: string expected";
                if (message.sex != null && message.hasOwnProperty("sex"))
                    if (!$util.isInteger(message.sex))
                        return "sex: integer expected";
                if (message.joinTime != null && message.hasOwnProperty("joinTime"))
                    if (!$util.isInteger(message.joinTime) && !(message.joinTime && $util.isInteger(message.joinTime.low) && $util.isInteger(message.joinTime.high)))
                        return "joinTime: integer|Long expected";
                if (message.lastLoginTime != null && message.hasOwnProperty("lastLoginTime"))
                    if (!$util.isInteger(message.lastLoginTime) && !(message.lastLoginTime && $util.isInteger(message.lastLoginTime.low) && $util.isInteger(message.lastLoginTime.high)))
                        return "lastLoginTime: integer|Long expected";
                if (message.currState != null && message.hasOwnProperty("currState"))
                    if (!$util.isInteger(message.currState))
                        return "currState: integer expected";
                return null;
            };

            /**
             * Creates a MemberInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof msg.GetMemberInfoListResult.MemberInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {msg.GetMemberInfoListResult.MemberInfo} MemberInfo
             */
            MemberInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.msg.GetMemberInfoListResult.MemberInfo)
                    return object;
                let message = new $root.msg.GetMemberInfoListResult.MemberInfo();
                if (object.userId != null)
                    message.userId = object.userId | 0;
                if (object.role != null)
                    message.role = object.role | 0;
                if (object.userName != null)
                    message.userName = String(object.userName);
                if (object.headImg != null)
                    message.headImg = String(object.headImg);
                if (object.sex != null)
                    message.sex = object.sex | 0;
                if (object.joinTime != null)
                    if ($util.Long)
                        (message.joinTime = $util.Long.fromValue(object.joinTime)).unsigned = false;
                    else if (typeof object.joinTime === "string")
                        message.joinTime = parseInt(object.joinTime, 10);
                    else if (typeof object.joinTime === "number")
                        message.joinTime = object.joinTime;
                    else if (typeof object.joinTime === "object")
                        message.joinTime = new $util.LongBits(object.joinTime.low >>> 0, object.joinTime.high >>> 0).toNumber();
                if (object.lastLoginTime != null)
                    if ($util.Long)
                        (message.lastLoginTime = $util.Long.fromValue(object.lastLoginTime)).unsigned = false;
                    else if (typeof object.lastLoginTime === "string")
                        message.lastLoginTime = parseInt(object.lastLoginTime, 10);
                    else if (typeof object.lastLoginTime === "number")
                        message.lastLoginTime = object.lastLoginTime;
                    else if (typeof object.lastLoginTime === "object")
                        message.lastLoginTime = new $util.LongBits(object.lastLoginTime.low >>> 0, object.lastLoginTime.high >>> 0).toNumber();
                if (object.currState != null)
                    message.currState = object.currState | 0;
                return message;
            };

            /**
             * Creates a plain object from a MemberInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof msg.GetMemberInfoListResult.MemberInfo
             * @static
             * @param {msg.GetMemberInfoListResult.MemberInfo} message MemberInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MemberInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.userId = 0;
                    object.role = 0;
                    object.userName = "";
                    object.headImg = "";
                    object.sex = 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.joinTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.joinTime = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.lastLoginTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.lastLoginTime = options.longs === String ? "0" : 0;
                    object.currState = 0;
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.role != null && message.hasOwnProperty("role"))
                    object.role = message.role;
                if (message.userName != null && message.hasOwnProperty("userName"))
                    object.userName = message.userName;
                if (message.headImg != null && message.hasOwnProperty("headImg"))
                    object.headImg = message.headImg;
                if (message.sex != null && message.hasOwnProperty("sex"))
                    object.sex = message.sex;
                if (message.joinTime != null && message.hasOwnProperty("joinTime"))
                    if (typeof message.joinTime === "number")
                        object.joinTime = options.longs === String ? String(message.joinTime) : message.joinTime;
                    else
                        object.joinTime = options.longs === String ? $util.Long.prototype.toString.call(message.joinTime) : options.longs === Number ? new $util.LongBits(message.joinTime.low >>> 0, message.joinTime.high >>> 0).toNumber() : message.joinTime;
                if (message.lastLoginTime != null && message.hasOwnProperty("lastLoginTime"))
                    if (typeof message.lastLoginTime === "number")
                        object.lastLoginTime = options.longs === String ? String(message.lastLoginTime) : message.lastLoginTime;
                    else
                        object.lastLoginTime = options.longs === String ? $util.Long.prototype.toString.call(message.lastLoginTime) : options.longs === Number ? new $util.LongBits(message.lastLoginTime.low >>> 0, message.lastLoginTime.high >>> 0).toNumber() : message.lastLoginTime;
                if (message.currState != null && message.hasOwnProperty("currState"))
                    object.currState = message.currState;
                return object;
            };

            /**
             * Converts this MemberInfo to JSON.
             * @function toJSON
             * @memberof msg.GetMemberInfoListResult.MemberInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MemberInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MemberInfo;
        })();

        return GetMemberInfoListResult;
    })();

    msg.GetTableListCmd = (function() {

        /**
         * Properties of a GetTableListCmd.
         * @memberof msg
         * @interface IGetTableListCmd
         * @property {number|null} [clubId] GetTableListCmd clubId
         * @property {number|null} [pageIndex] GetTableListCmd pageIndex
         */

        /**
         * Constructs a new GetTableListCmd.
         * @memberof msg
         * @classdesc Represents a GetTableListCmd.
         * @implements IGetTableListCmd
         * @constructor
         * @param {msg.IGetTableListCmd=} [properties] Properties to set
         */
        function GetTableListCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetTableListCmd clubId.
         * @member {number} clubId
         * @memberof msg.GetTableListCmd
         * @instance
         */
        GetTableListCmd.prototype.clubId = 0;

        /**
         * GetTableListCmd pageIndex.
         * @member {number} pageIndex
         * @memberof msg.GetTableListCmd
         * @instance
         */
        GetTableListCmd.prototype.pageIndex = 0;

        /**
         * Creates a new GetTableListCmd instance using the specified properties.
         * @function create
         * @memberof msg.GetTableListCmd
         * @static
         * @param {msg.IGetTableListCmd=} [properties] Properties to set
         * @returns {msg.GetTableListCmd} GetTableListCmd instance
         */
        GetTableListCmd.create = function create(properties) {
            return new GetTableListCmd(properties);
        };

        /**
         * Encodes the specified GetTableListCmd message. Does not implicitly {@link msg.GetTableListCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.GetTableListCmd
         * @static
         * @param {msg.IGetTableListCmd} message GetTableListCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetTableListCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clubId != null && Object.hasOwnProperty.call(message, "clubId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.clubId);
            if (message.pageIndex != null && Object.hasOwnProperty.call(message, "pageIndex"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.pageIndex);
            return writer;
        };

        /**
         * Encodes the specified GetTableListCmd message, length delimited. Does not implicitly {@link msg.GetTableListCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.GetTableListCmd
         * @static
         * @param {msg.IGetTableListCmd} message GetTableListCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetTableListCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetTableListCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.GetTableListCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.GetTableListCmd} GetTableListCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetTableListCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.GetTableListCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clubId = reader.sint32();
                    break;
                case 2:
                    message.pageIndex = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetTableListCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.GetTableListCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.GetTableListCmd} GetTableListCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetTableListCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetTableListCmd message.
         * @function verify
         * @memberof msg.GetTableListCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetTableListCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                if (!$util.isInteger(message.clubId))
                    return "clubId: integer expected";
            if (message.pageIndex != null && message.hasOwnProperty("pageIndex"))
                if (!$util.isInteger(message.pageIndex))
                    return "pageIndex: integer expected";
            return null;
        };

        /**
         * Creates a GetTableListCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.GetTableListCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.GetTableListCmd} GetTableListCmd
         */
        GetTableListCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.GetTableListCmd)
                return object;
            let message = new $root.msg.GetTableListCmd();
            if (object.clubId != null)
                message.clubId = object.clubId | 0;
            if (object.pageIndex != null)
                message.pageIndex = object.pageIndex | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetTableListCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.GetTableListCmd
         * @static
         * @param {msg.GetTableListCmd} message GetTableListCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetTableListCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.clubId = 0;
                object.pageIndex = 0;
            }
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                object.clubId = message.clubId;
            if (message.pageIndex != null && message.hasOwnProperty("pageIndex"))
                object.pageIndex = message.pageIndex;
            return object;
        };

        /**
         * Converts this GetTableListCmd to JSON.
         * @function toJSON
         * @memberof msg.GetTableListCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetTableListCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetTableListCmd;
    })();

    msg.GetTableListResult = (function() {

        /**
         * Properties of a GetTableListResult.
         * @memberof msg
         * @interface IGetTableListResult
         * @property {number|null} [clubId] GetTableListResult clubId
         * @property {number|null} [pageIndex] GetTableListResult pageIndex
         * @property {number|null} [maxNumOfTablez] GetTableListResult maxNumOfTablez
         * @property {Array.<msg.ITable>|null} [table] GetTableListResult table
         */

        /**
         * Constructs a new GetTableListResult.
         * @memberof msg
         * @classdesc Represents a GetTableListResult.
         * @implements IGetTableListResult
         * @constructor
         * @param {msg.IGetTableListResult=} [properties] Properties to set
         */
        function GetTableListResult(properties) {
            this.table = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetTableListResult clubId.
         * @member {number} clubId
         * @memberof msg.GetTableListResult
         * @instance
         */
        GetTableListResult.prototype.clubId = 0;

        /**
         * GetTableListResult pageIndex.
         * @member {number} pageIndex
         * @memberof msg.GetTableListResult
         * @instance
         */
        GetTableListResult.prototype.pageIndex = 0;

        /**
         * GetTableListResult maxNumOfTablez.
         * @member {number} maxNumOfTablez
         * @memberof msg.GetTableListResult
         * @instance
         */
        GetTableListResult.prototype.maxNumOfTablez = 0;

        /**
         * GetTableListResult table.
         * @member {Array.<msg.ITable>} table
         * @memberof msg.GetTableListResult
         * @instance
         */
        GetTableListResult.prototype.table = $util.emptyArray;

        /**
         * Creates a new GetTableListResult instance using the specified properties.
         * @function create
         * @memberof msg.GetTableListResult
         * @static
         * @param {msg.IGetTableListResult=} [properties] Properties to set
         * @returns {msg.GetTableListResult} GetTableListResult instance
         */
        GetTableListResult.create = function create(properties) {
            return new GetTableListResult(properties);
        };

        /**
         * Encodes the specified GetTableListResult message. Does not implicitly {@link msg.GetTableListResult.verify|verify} messages.
         * @function encode
         * @memberof msg.GetTableListResult
         * @static
         * @param {msg.IGetTableListResult} message GetTableListResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetTableListResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clubId != null && Object.hasOwnProperty.call(message, "clubId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.clubId);
            if (message.pageIndex != null && Object.hasOwnProperty.call(message, "pageIndex"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.pageIndex);
            if (message.maxNumOfTablez != null && Object.hasOwnProperty.call(message, "maxNumOfTablez"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.maxNumOfTablez);
            if (message.table != null && message.table.length)
                for (let i = 0; i < message.table.length; ++i)
                    $root.msg.Table.encode(message.table[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetTableListResult message, length delimited. Does not implicitly {@link msg.GetTableListResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.GetTableListResult
         * @static
         * @param {msg.IGetTableListResult} message GetTableListResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetTableListResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetTableListResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.GetTableListResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.GetTableListResult} GetTableListResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetTableListResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.GetTableListResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clubId = reader.sint32();
                    break;
                case 2:
                    message.pageIndex = reader.sint32();
                    break;
                case 3:
                    message.maxNumOfTablez = reader.sint32();
                    break;
                case 4:
                    if (!(message.table && message.table.length))
                        message.table = [];
                    message.table.push($root.msg.Table.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetTableListResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.GetTableListResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.GetTableListResult} GetTableListResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetTableListResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetTableListResult message.
         * @function verify
         * @memberof msg.GetTableListResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetTableListResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                if (!$util.isInteger(message.clubId))
                    return "clubId: integer expected";
            if (message.pageIndex != null && message.hasOwnProperty("pageIndex"))
                if (!$util.isInteger(message.pageIndex))
                    return "pageIndex: integer expected";
            if (message.maxNumOfTablez != null && message.hasOwnProperty("maxNumOfTablez"))
                if (!$util.isInteger(message.maxNumOfTablez))
                    return "maxNumOfTablez: integer expected";
            if (message.table != null && message.hasOwnProperty("table")) {
                if (!Array.isArray(message.table))
                    return "table: array expected";
                for (let i = 0; i < message.table.length; ++i) {
                    let error = $root.msg.Table.verify(message.table[i]);
                    if (error)
                        return "table." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetTableListResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.GetTableListResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.GetTableListResult} GetTableListResult
         */
        GetTableListResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.GetTableListResult)
                return object;
            let message = new $root.msg.GetTableListResult();
            if (object.clubId != null)
                message.clubId = object.clubId | 0;
            if (object.pageIndex != null)
                message.pageIndex = object.pageIndex | 0;
            if (object.maxNumOfTablez != null)
                message.maxNumOfTablez = object.maxNumOfTablez | 0;
            if (object.table) {
                if (!Array.isArray(object.table))
                    throw TypeError(".msg.GetTableListResult.table: array expected");
                message.table = [];
                for (let i = 0; i < object.table.length; ++i) {
                    if (typeof object.table[i] !== "object")
                        throw TypeError(".msg.GetTableListResult.table: object expected");
                    message.table[i] = $root.msg.Table.fromObject(object.table[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetTableListResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.GetTableListResult
         * @static
         * @param {msg.GetTableListResult} message GetTableListResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetTableListResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.table = [];
            if (options.defaults) {
                object.clubId = 0;
                object.pageIndex = 0;
                object.maxNumOfTablez = 0;
            }
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                object.clubId = message.clubId;
            if (message.pageIndex != null && message.hasOwnProperty("pageIndex"))
                object.pageIndex = message.pageIndex;
            if (message.maxNumOfTablez != null && message.hasOwnProperty("maxNumOfTablez"))
                object.maxNumOfTablez = message.maxNumOfTablez;
            if (message.table && message.table.length) {
                object.table = [];
                for (let j = 0; j < message.table.length; ++j)
                    object.table[j] = $root.msg.Table.toObject(message.table[j], options);
            }
            return object;
        };

        /**
         * Converts this GetTableListResult to JSON.
         * @function toJSON
         * @memberof msg.GetTableListResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetTableListResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetTableListResult;
    })();

    msg.GetTableDetailzCmd = (function() {

        /**
         * Properties of a GetTableDetailzCmd.
         * @memberof msg
         * @interface IGetTableDetailzCmd
         * @property {number|null} [clubId] GetTableDetailzCmd clubId
         * @property {number|null} [seqNum] GetTableDetailzCmd seqNum
         */

        /**
         * Constructs a new GetTableDetailzCmd.
         * @memberof msg
         * @classdesc Represents a GetTableDetailzCmd.
         * @implements IGetTableDetailzCmd
         * @constructor
         * @param {msg.IGetTableDetailzCmd=} [properties] Properties to set
         */
        function GetTableDetailzCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetTableDetailzCmd clubId.
         * @member {number} clubId
         * @memberof msg.GetTableDetailzCmd
         * @instance
         */
        GetTableDetailzCmd.prototype.clubId = 0;

        /**
         * GetTableDetailzCmd seqNum.
         * @member {number} seqNum
         * @memberof msg.GetTableDetailzCmd
         * @instance
         */
        GetTableDetailzCmd.prototype.seqNum = 0;

        /**
         * Creates a new GetTableDetailzCmd instance using the specified properties.
         * @function create
         * @memberof msg.GetTableDetailzCmd
         * @static
         * @param {msg.IGetTableDetailzCmd=} [properties] Properties to set
         * @returns {msg.GetTableDetailzCmd} GetTableDetailzCmd instance
         */
        GetTableDetailzCmd.create = function create(properties) {
            return new GetTableDetailzCmd(properties);
        };

        /**
         * Encodes the specified GetTableDetailzCmd message. Does not implicitly {@link msg.GetTableDetailzCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.GetTableDetailzCmd
         * @static
         * @param {msg.IGetTableDetailzCmd} message GetTableDetailzCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetTableDetailzCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clubId != null && Object.hasOwnProperty.call(message, "clubId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.clubId);
            if (message.seqNum != null && Object.hasOwnProperty.call(message, "seqNum"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.seqNum);
            return writer;
        };

        /**
         * Encodes the specified GetTableDetailzCmd message, length delimited. Does not implicitly {@link msg.GetTableDetailzCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.GetTableDetailzCmd
         * @static
         * @param {msg.IGetTableDetailzCmd} message GetTableDetailzCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetTableDetailzCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetTableDetailzCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.GetTableDetailzCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.GetTableDetailzCmd} GetTableDetailzCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetTableDetailzCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.GetTableDetailzCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clubId = reader.sint32();
                    break;
                case 2:
                    message.seqNum = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetTableDetailzCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.GetTableDetailzCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.GetTableDetailzCmd} GetTableDetailzCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetTableDetailzCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetTableDetailzCmd message.
         * @function verify
         * @memberof msg.GetTableDetailzCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetTableDetailzCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                if (!$util.isInteger(message.clubId))
                    return "clubId: integer expected";
            if (message.seqNum != null && message.hasOwnProperty("seqNum"))
                if (!$util.isInteger(message.seqNum))
                    return "seqNum: integer expected";
            return null;
        };

        /**
         * Creates a GetTableDetailzCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.GetTableDetailzCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.GetTableDetailzCmd} GetTableDetailzCmd
         */
        GetTableDetailzCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.GetTableDetailzCmd)
                return object;
            let message = new $root.msg.GetTableDetailzCmd();
            if (object.clubId != null)
                message.clubId = object.clubId | 0;
            if (object.seqNum != null)
                message.seqNum = object.seqNum | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetTableDetailzCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.GetTableDetailzCmd
         * @static
         * @param {msg.GetTableDetailzCmd} message GetTableDetailzCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetTableDetailzCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.clubId = 0;
                object.seqNum = 0;
            }
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                object.clubId = message.clubId;
            if (message.seqNum != null && message.hasOwnProperty("seqNum"))
                object.seqNum = message.seqNum;
            return object;
        };

        /**
         * Converts this GetTableDetailzCmd to JSON.
         * @function toJSON
         * @memberof msg.GetTableDetailzCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetTableDetailzCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetTableDetailzCmd;
    })();

    msg.GetTableDetailzResult = (function() {

        /**
         * Properties of a GetTableDetailzResult.
         * @memberof msg
         * @interface IGetTableDetailzResult
         * @property {number|null} [clubId] GetTableDetailzResult clubId
         * @property {number|null} [seqNum] GetTableDetailzResult seqNum
         * @property {msg.ITable|null} [table] GetTableDetailzResult table
         */

        /**
         * Constructs a new GetTableDetailzResult.
         * @memberof msg
         * @classdesc Represents a GetTableDetailzResult.
         * @implements IGetTableDetailzResult
         * @constructor
         * @param {msg.IGetTableDetailzResult=} [properties] Properties to set
         */
        function GetTableDetailzResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetTableDetailzResult clubId.
         * @member {number} clubId
         * @memberof msg.GetTableDetailzResult
         * @instance
         */
        GetTableDetailzResult.prototype.clubId = 0;

        /**
         * GetTableDetailzResult seqNum.
         * @member {number} seqNum
         * @memberof msg.GetTableDetailzResult
         * @instance
         */
        GetTableDetailzResult.prototype.seqNum = 0;

        /**
         * GetTableDetailzResult table.
         * @member {msg.ITable|null|undefined} table
         * @memberof msg.GetTableDetailzResult
         * @instance
         */
        GetTableDetailzResult.prototype.table = null;

        /**
         * Creates a new GetTableDetailzResult instance using the specified properties.
         * @function create
         * @memberof msg.GetTableDetailzResult
         * @static
         * @param {msg.IGetTableDetailzResult=} [properties] Properties to set
         * @returns {msg.GetTableDetailzResult} GetTableDetailzResult instance
         */
        GetTableDetailzResult.create = function create(properties) {
            return new GetTableDetailzResult(properties);
        };

        /**
         * Encodes the specified GetTableDetailzResult message. Does not implicitly {@link msg.GetTableDetailzResult.verify|verify} messages.
         * @function encode
         * @memberof msg.GetTableDetailzResult
         * @static
         * @param {msg.IGetTableDetailzResult} message GetTableDetailzResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetTableDetailzResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clubId != null && Object.hasOwnProperty.call(message, "clubId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.clubId);
            if (message.seqNum != null && Object.hasOwnProperty.call(message, "seqNum"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.seqNum);
            if (message.table != null && Object.hasOwnProperty.call(message, "table"))
                $root.msg.Table.encode(message.table, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetTableDetailzResult message, length delimited. Does not implicitly {@link msg.GetTableDetailzResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.GetTableDetailzResult
         * @static
         * @param {msg.IGetTableDetailzResult} message GetTableDetailzResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetTableDetailzResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetTableDetailzResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.GetTableDetailzResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.GetTableDetailzResult} GetTableDetailzResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetTableDetailzResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.GetTableDetailzResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clubId = reader.sint32();
                    break;
                case 2:
                    message.seqNum = reader.sint32();
                    break;
                case 3:
                    message.table = $root.msg.Table.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetTableDetailzResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.GetTableDetailzResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.GetTableDetailzResult} GetTableDetailzResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetTableDetailzResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetTableDetailzResult message.
         * @function verify
         * @memberof msg.GetTableDetailzResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetTableDetailzResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                if (!$util.isInteger(message.clubId))
                    return "clubId: integer expected";
            if (message.seqNum != null && message.hasOwnProperty("seqNum"))
                if (!$util.isInteger(message.seqNum))
                    return "seqNum: integer expected";
            if (message.table != null && message.hasOwnProperty("table")) {
                let error = $root.msg.Table.verify(message.table);
                if (error)
                    return "table." + error;
            }
            return null;
        };

        /**
         * Creates a GetTableDetailzResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.GetTableDetailzResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.GetTableDetailzResult} GetTableDetailzResult
         */
        GetTableDetailzResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.GetTableDetailzResult)
                return object;
            let message = new $root.msg.GetTableDetailzResult();
            if (object.clubId != null)
                message.clubId = object.clubId | 0;
            if (object.seqNum != null)
                message.seqNum = object.seqNum | 0;
            if (object.table != null) {
                if (typeof object.table !== "object")
                    throw TypeError(".msg.GetTableDetailzResult.table: object expected");
                message.table = $root.msg.Table.fromObject(object.table);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetTableDetailzResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.GetTableDetailzResult
         * @static
         * @param {msg.GetTableDetailzResult} message GetTableDetailzResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetTableDetailzResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.clubId = 0;
                object.seqNum = 0;
                object.table = null;
            }
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                object.clubId = message.clubId;
            if (message.seqNum != null && message.hasOwnProperty("seqNum"))
                object.seqNum = message.seqNum;
            if (message.table != null && message.hasOwnProperty("table"))
                object.table = $root.msg.Table.toObject(message.table, options);
            return object;
        };

        /**
         * Converts this GetTableDetailzResult to JSON.
         * @function toJSON
         * @memberof msg.GetTableDetailzResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetTableDetailzResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetTableDetailzResult;
    })();

    msg.CreateTableCmd = (function() {

        /**
         * Properties of a CreateTableCmd.
         * @memberof msg
         * @interface ICreateTableCmd
         * @property {number|null} [gameType0] CreateTableCmd gameType0
         * @property {number|null} [gameType1] CreateTableCmd gameType1
         * @property {Array.<msg.IKeyAndVal>|null} [ruleItem] CreateTableCmd ruleItem
         * @property {number|null} [clubId] CreateTableCmd clubId
         * @property {number|null} [seqNum] CreateTableCmd seqNum
         * @property {number|null} [usingFixGameX] CreateTableCmd usingFixGameX
         */

        /**
         * Constructs a new CreateTableCmd.
         * @memberof msg
         * @classdesc Represents a CreateTableCmd.
         * @implements ICreateTableCmd
         * @constructor
         * @param {msg.ICreateTableCmd=} [properties] Properties to set
         */
        function CreateTableCmd(properties) {
            this.ruleItem = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateTableCmd gameType0.
         * @member {number} gameType0
         * @memberof msg.CreateTableCmd
         * @instance
         */
        CreateTableCmd.prototype.gameType0 = 0;

        /**
         * CreateTableCmd gameType1.
         * @member {number} gameType1
         * @memberof msg.CreateTableCmd
         * @instance
         */
        CreateTableCmd.prototype.gameType1 = 0;

        /**
         * CreateTableCmd ruleItem.
         * @member {Array.<msg.IKeyAndVal>} ruleItem
         * @memberof msg.CreateTableCmd
         * @instance
         */
        CreateTableCmd.prototype.ruleItem = $util.emptyArray;

        /**
         * CreateTableCmd clubId.
         * @member {number} clubId
         * @memberof msg.CreateTableCmd
         * @instance
         */
        CreateTableCmd.prototype.clubId = 0;

        /**
         * CreateTableCmd seqNum.
         * @member {number} seqNum
         * @memberof msg.CreateTableCmd
         * @instance
         */
        CreateTableCmd.prototype.seqNum = 0;

        /**
         * CreateTableCmd usingFixGameX.
         * @member {number} usingFixGameX
         * @memberof msg.CreateTableCmd
         * @instance
         */
        CreateTableCmd.prototype.usingFixGameX = 0;

        /**
         * Creates a new CreateTableCmd instance using the specified properties.
         * @function create
         * @memberof msg.CreateTableCmd
         * @static
         * @param {msg.ICreateTableCmd=} [properties] Properties to set
         * @returns {msg.CreateTableCmd} CreateTableCmd instance
         */
        CreateTableCmd.create = function create(properties) {
            return new CreateTableCmd(properties);
        };

        /**
         * Encodes the specified CreateTableCmd message. Does not implicitly {@link msg.CreateTableCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.CreateTableCmd
         * @static
         * @param {msg.ICreateTableCmd} message CreateTableCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateTableCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameType0 != null && Object.hasOwnProperty.call(message, "gameType0"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.gameType0);
            if (message.gameType1 != null && Object.hasOwnProperty.call(message, "gameType1"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.gameType1);
            if (message.ruleItem != null && message.ruleItem.length)
                for (let i = 0; i < message.ruleItem.length; ++i)
                    $root.msg.KeyAndVal.encode(message.ruleItem[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.clubId != null && Object.hasOwnProperty.call(message, "clubId"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.clubId);
            if (message.seqNum != null && Object.hasOwnProperty.call(message, "seqNum"))
                writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.seqNum);
            if (message.usingFixGameX != null && Object.hasOwnProperty.call(message, "usingFixGameX"))
                writer.uint32(/* id 6, wireType 0 =*/48).sint32(message.usingFixGameX);
            return writer;
        };

        /**
         * Encodes the specified CreateTableCmd message, length delimited. Does not implicitly {@link msg.CreateTableCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.CreateTableCmd
         * @static
         * @param {msg.ICreateTableCmd} message CreateTableCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateTableCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateTableCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.CreateTableCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.CreateTableCmd} CreateTableCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateTableCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.CreateTableCmd();
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
                    if (!(message.ruleItem && message.ruleItem.length))
                        message.ruleItem = [];
                    message.ruleItem.push($root.msg.KeyAndVal.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.clubId = reader.sint32();
                    break;
                case 5:
                    message.seqNum = reader.sint32();
                    break;
                case 6:
                    message.usingFixGameX = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateTableCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.CreateTableCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.CreateTableCmd} CreateTableCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateTableCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateTableCmd message.
         * @function verify
         * @memberof msg.CreateTableCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateTableCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameType0 != null && message.hasOwnProperty("gameType0"))
                if (!$util.isInteger(message.gameType0))
                    return "gameType0: integer expected";
            if (message.gameType1 != null && message.hasOwnProperty("gameType1"))
                if (!$util.isInteger(message.gameType1))
                    return "gameType1: integer expected";
            if (message.ruleItem != null && message.hasOwnProperty("ruleItem")) {
                if (!Array.isArray(message.ruleItem))
                    return "ruleItem: array expected";
                for (let i = 0; i < message.ruleItem.length; ++i) {
                    let error = $root.msg.KeyAndVal.verify(message.ruleItem[i]);
                    if (error)
                        return "ruleItem." + error;
                }
            }
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                if (!$util.isInteger(message.clubId))
                    return "clubId: integer expected";
            if (message.seqNum != null && message.hasOwnProperty("seqNum"))
                if (!$util.isInteger(message.seqNum))
                    return "seqNum: integer expected";
            if (message.usingFixGameX != null && message.hasOwnProperty("usingFixGameX"))
                if (!$util.isInteger(message.usingFixGameX))
                    return "usingFixGameX: integer expected";
            return null;
        };

        /**
         * Creates a CreateTableCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.CreateTableCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.CreateTableCmd} CreateTableCmd
         */
        CreateTableCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.CreateTableCmd)
                return object;
            let message = new $root.msg.CreateTableCmd();
            if (object.gameType0 != null)
                message.gameType0 = object.gameType0 | 0;
            if (object.gameType1 != null)
                message.gameType1 = object.gameType1 | 0;
            if (object.ruleItem) {
                if (!Array.isArray(object.ruleItem))
                    throw TypeError(".msg.CreateTableCmd.ruleItem: array expected");
                message.ruleItem = [];
                for (let i = 0; i < object.ruleItem.length; ++i) {
                    if (typeof object.ruleItem[i] !== "object")
                        throw TypeError(".msg.CreateTableCmd.ruleItem: object expected");
                    message.ruleItem[i] = $root.msg.KeyAndVal.fromObject(object.ruleItem[i]);
                }
            }
            if (object.clubId != null)
                message.clubId = object.clubId | 0;
            if (object.seqNum != null)
                message.seqNum = object.seqNum | 0;
            if (object.usingFixGameX != null)
                message.usingFixGameX = object.usingFixGameX | 0;
            return message;
        };

        /**
         * Creates a plain object from a CreateTableCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.CreateTableCmd
         * @static
         * @param {msg.CreateTableCmd} message CreateTableCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateTableCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.ruleItem = [];
            if (options.defaults) {
                object.gameType0 = 0;
                object.gameType1 = 0;
                object.clubId = 0;
                object.seqNum = 0;
                object.usingFixGameX = 0;
            }
            if (message.gameType0 != null && message.hasOwnProperty("gameType0"))
                object.gameType0 = message.gameType0;
            if (message.gameType1 != null && message.hasOwnProperty("gameType1"))
                object.gameType1 = message.gameType1;
            if (message.ruleItem && message.ruleItem.length) {
                object.ruleItem = [];
                for (let j = 0; j < message.ruleItem.length; ++j)
                    object.ruleItem[j] = $root.msg.KeyAndVal.toObject(message.ruleItem[j], options);
            }
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                object.clubId = message.clubId;
            if (message.seqNum != null && message.hasOwnProperty("seqNum"))
                object.seqNum = message.seqNum;
            if (message.usingFixGameX != null && message.hasOwnProperty("usingFixGameX"))
                object.usingFixGameX = message.usingFixGameX;
            return object;
        };

        /**
         * Converts this CreateTableCmd to JSON.
         * @function toJSON
         * @memberof msg.CreateTableCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateTableCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateTableCmd;
    })();

    msg.CreateTableResult = (function() {

        /**
         * Properties of a CreateTableResult.
         * @memberof msg
         * @interface ICreateTableResult
         * @property {number|null} [roomId] CreateTableResult roomId
         */

        /**
         * Constructs a new CreateTableResult.
         * @memberof msg
         * @classdesc Represents a CreateTableResult.
         * @implements ICreateTableResult
         * @constructor
         * @param {msg.ICreateTableResult=} [properties] Properties to set
         */
        function CreateTableResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateTableResult roomId.
         * @member {number} roomId
         * @memberof msg.CreateTableResult
         * @instance
         */
        CreateTableResult.prototype.roomId = 0;

        /**
         * Creates a new CreateTableResult instance using the specified properties.
         * @function create
         * @memberof msg.CreateTableResult
         * @static
         * @param {msg.ICreateTableResult=} [properties] Properties to set
         * @returns {msg.CreateTableResult} CreateTableResult instance
         */
        CreateTableResult.create = function create(properties) {
            return new CreateTableResult(properties);
        };

        /**
         * Encodes the specified CreateTableResult message. Does not implicitly {@link msg.CreateTableResult.verify|verify} messages.
         * @function encode
         * @memberof msg.CreateTableResult
         * @static
         * @param {msg.ICreateTableResult} message CreateTableResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateTableResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified CreateTableResult message, length delimited. Does not implicitly {@link msg.CreateTableResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.CreateTableResult
         * @static
         * @param {msg.ICreateTableResult} message CreateTableResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateTableResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateTableResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.CreateTableResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.CreateTableResult} CreateTableResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateTableResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.CreateTableResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomId = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateTableResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.CreateTableResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.CreateTableResult} CreateTableResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateTableResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateTableResult message.
         * @function verify
         * @memberof msg.CreateTableResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateTableResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId))
                    return "roomId: integer expected";
            return null;
        };

        /**
         * Creates a CreateTableResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.CreateTableResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.CreateTableResult} CreateTableResult
         */
        CreateTableResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.CreateTableResult)
                return object;
            let message = new $root.msg.CreateTableResult();
            if (object.roomId != null)
                message.roomId = object.roomId | 0;
            return message;
        };

        /**
         * Creates a plain object from a CreateTableResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.CreateTableResult
         * @static
         * @param {msg.CreateTableResult} message CreateTableResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateTableResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.roomId = 0;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            return object;
        };

        /**
         * Converts this CreateTableResult to JSON.
         * @function toJSON
         * @memberof msg.CreateTableResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateTableResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateTableResult;
    })();

    msg.JoinTableCmd = (function() {

        /**
         * Properties of a JoinTableCmd.
         * @memberof msg
         * @interface IJoinTableCmd
         * @property {number|null} [roomId] JoinTableCmd roomId
         */

        /**
         * Constructs a new JoinTableCmd.
         * @memberof msg
         * @classdesc Represents a JoinTableCmd.
         * @implements IJoinTableCmd
         * @constructor
         * @param {msg.IJoinTableCmd=} [properties] Properties to set
         */
        function JoinTableCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinTableCmd roomId.
         * @member {number} roomId
         * @memberof msg.JoinTableCmd
         * @instance
         */
        JoinTableCmd.prototype.roomId = 0;

        /**
         * Creates a new JoinTableCmd instance using the specified properties.
         * @function create
         * @memberof msg.JoinTableCmd
         * @static
         * @param {msg.IJoinTableCmd=} [properties] Properties to set
         * @returns {msg.JoinTableCmd} JoinTableCmd instance
         */
        JoinTableCmd.create = function create(properties) {
            return new JoinTableCmd(properties);
        };

        /**
         * Encodes the specified JoinTableCmd message. Does not implicitly {@link msg.JoinTableCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.JoinTableCmd
         * @static
         * @param {msg.IJoinTableCmd} message JoinTableCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinTableCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified JoinTableCmd message, length delimited. Does not implicitly {@link msg.JoinTableCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.JoinTableCmd
         * @static
         * @param {msg.IJoinTableCmd} message JoinTableCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinTableCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinTableCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.JoinTableCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.JoinTableCmd} JoinTableCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinTableCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.JoinTableCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomId = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinTableCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.JoinTableCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.JoinTableCmd} JoinTableCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinTableCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinTableCmd message.
         * @function verify
         * @memberof msg.JoinTableCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinTableCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId))
                    return "roomId: integer expected";
            return null;
        };

        /**
         * Creates a JoinTableCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.JoinTableCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.JoinTableCmd} JoinTableCmd
         */
        JoinTableCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.JoinTableCmd)
                return object;
            let message = new $root.msg.JoinTableCmd();
            if (object.roomId != null)
                message.roomId = object.roomId | 0;
            return message;
        };

        /**
         * Creates a plain object from a JoinTableCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.JoinTableCmd
         * @static
         * @param {msg.JoinTableCmd} message JoinTableCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinTableCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.roomId = 0;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            return object;
        };

        /**
         * Converts this JoinTableCmd to JSON.
         * @function toJSON
         * @memberof msg.JoinTableCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinTableCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinTableCmd;
    })();

    msg.JoinTableResult = (function() {

        /**
         * Properties of a JoinTableResult.
         * @memberof msg
         * @interface IJoinTableResult
         * @property {number|null} [roomId] JoinTableResult roomId
         * @property {number|null} [gameType0] JoinTableResult gameType0
         * @property {number|null} [gameType1] JoinTableResult gameType1
         * @property {Array.<msg.IKeyAndVal>|null} [ruleItem] JoinTableResult ruleItem
         * @property {number|null} [clubId] JoinTableResult clubId
         * @property {number|null} [seqNum] JoinTableResult seqNum
         */

        /**
         * Constructs a new JoinTableResult.
         * @memberof msg
         * @classdesc Represents a JoinTableResult.
         * @implements IJoinTableResult
         * @constructor
         * @param {msg.IJoinTableResult=} [properties] Properties to set
         */
        function JoinTableResult(properties) {
            this.ruleItem = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinTableResult roomId.
         * @member {number} roomId
         * @memberof msg.JoinTableResult
         * @instance
         */
        JoinTableResult.prototype.roomId = 0;

        /**
         * JoinTableResult gameType0.
         * @member {number} gameType0
         * @memberof msg.JoinTableResult
         * @instance
         */
        JoinTableResult.prototype.gameType0 = 0;

        /**
         * JoinTableResult gameType1.
         * @member {number} gameType1
         * @memberof msg.JoinTableResult
         * @instance
         */
        JoinTableResult.prototype.gameType1 = 0;

        /**
         * JoinTableResult ruleItem.
         * @member {Array.<msg.IKeyAndVal>} ruleItem
         * @memberof msg.JoinTableResult
         * @instance
         */
        JoinTableResult.prototype.ruleItem = $util.emptyArray;

        /**
         * JoinTableResult clubId.
         * @member {number} clubId
         * @memberof msg.JoinTableResult
         * @instance
         */
        JoinTableResult.prototype.clubId = 0;

        /**
         * JoinTableResult seqNum.
         * @member {number} seqNum
         * @memberof msg.JoinTableResult
         * @instance
         */
        JoinTableResult.prototype.seqNum = 0;

        /**
         * Creates a new JoinTableResult instance using the specified properties.
         * @function create
         * @memberof msg.JoinTableResult
         * @static
         * @param {msg.IJoinTableResult=} [properties] Properties to set
         * @returns {msg.JoinTableResult} JoinTableResult instance
         */
        JoinTableResult.create = function create(properties) {
            return new JoinTableResult(properties);
        };

        /**
         * Encodes the specified JoinTableResult message. Does not implicitly {@link msg.JoinTableResult.verify|verify} messages.
         * @function encode
         * @memberof msg.JoinTableResult
         * @static
         * @param {msg.IJoinTableResult} message JoinTableResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinTableResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.roomId);
            if (message.gameType0 != null && Object.hasOwnProperty.call(message, "gameType0"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.gameType0);
            if (message.gameType1 != null && Object.hasOwnProperty.call(message, "gameType1"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.gameType1);
            if (message.ruleItem != null && message.ruleItem.length)
                for (let i = 0; i < message.ruleItem.length; ++i)
                    $root.msg.KeyAndVal.encode(message.ruleItem[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.clubId != null && Object.hasOwnProperty.call(message, "clubId"))
                writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.clubId);
            if (message.seqNum != null && Object.hasOwnProperty.call(message, "seqNum"))
                writer.uint32(/* id 6, wireType 0 =*/48).sint32(message.seqNum);
            return writer;
        };

        /**
         * Encodes the specified JoinTableResult message, length delimited. Does not implicitly {@link msg.JoinTableResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.JoinTableResult
         * @static
         * @param {msg.IJoinTableResult} message JoinTableResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinTableResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinTableResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.JoinTableResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.JoinTableResult} JoinTableResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinTableResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.JoinTableResult();
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
                    if (!(message.ruleItem && message.ruleItem.length))
                        message.ruleItem = [];
                    message.ruleItem.push($root.msg.KeyAndVal.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.clubId = reader.sint32();
                    break;
                case 6:
                    message.seqNum = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinTableResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.JoinTableResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.JoinTableResult} JoinTableResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinTableResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinTableResult message.
         * @function verify
         * @memberof msg.JoinTableResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinTableResult.verify = function verify(message) {
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
            if (message.ruleItem != null && message.hasOwnProperty("ruleItem")) {
                if (!Array.isArray(message.ruleItem))
                    return "ruleItem: array expected";
                for (let i = 0; i < message.ruleItem.length; ++i) {
                    let error = $root.msg.KeyAndVal.verify(message.ruleItem[i]);
                    if (error)
                        return "ruleItem." + error;
                }
            }
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                if (!$util.isInteger(message.clubId))
                    return "clubId: integer expected";
            if (message.seqNum != null && message.hasOwnProperty("seqNum"))
                if (!$util.isInteger(message.seqNum))
                    return "seqNum: integer expected";
            return null;
        };

        /**
         * Creates a JoinTableResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.JoinTableResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.JoinTableResult} JoinTableResult
         */
        JoinTableResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.JoinTableResult)
                return object;
            let message = new $root.msg.JoinTableResult();
            if (object.roomId != null)
                message.roomId = object.roomId | 0;
            if (object.gameType0 != null)
                message.gameType0 = object.gameType0 | 0;
            if (object.gameType1 != null)
                message.gameType1 = object.gameType1 | 0;
            if (object.ruleItem) {
                if (!Array.isArray(object.ruleItem))
                    throw TypeError(".msg.JoinTableResult.ruleItem: array expected");
                message.ruleItem = [];
                for (let i = 0; i < object.ruleItem.length; ++i) {
                    if (typeof object.ruleItem[i] !== "object")
                        throw TypeError(".msg.JoinTableResult.ruleItem: object expected");
                    message.ruleItem[i] = $root.msg.KeyAndVal.fromObject(object.ruleItem[i]);
                }
            }
            if (object.clubId != null)
                message.clubId = object.clubId | 0;
            if (object.seqNum != null)
                message.seqNum = object.seqNum | 0;
            return message;
        };

        /**
         * Creates a plain object from a JoinTableResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.JoinTableResult
         * @static
         * @param {msg.JoinTableResult} message JoinTableResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinTableResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.ruleItem = [];
            if (options.defaults) {
                object.roomId = 0;
                object.gameType0 = 0;
                object.gameType1 = 0;
                object.clubId = 0;
                object.seqNum = 0;
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.gameType0 != null && message.hasOwnProperty("gameType0"))
                object.gameType0 = message.gameType0;
            if (message.gameType1 != null && message.hasOwnProperty("gameType1"))
                object.gameType1 = message.gameType1;
            if (message.ruleItem && message.ruleItem.length) {
                object.ruleItem = [];
                for (let j = 0; j < message.ruleItem.length; ++j)
                    object.ruleItem[j] = $root.msg.KeyAndVal.toObject(message.ruleItem[j], options);
            }
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                object.clubId = message.clubId;
            if (message.seqNum != null && message.hasOwnProperty("seqNum"))
                object.seqNum = message.seqNum;
            return object;
        };

        /**
         * Converts this JoinTableResult to JSON.
         * @function toJSON
         * @memberof msg.JoinTableResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinTableResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinTableResult;
    })();

    msg.ApprovalToJoinCmd = (function() {

        /**
         * Properties of an ApprovalToJoinCmd.
         * @memberof msg
         * @interface IApprovalToJoinCmd
         * @property {number|null} [userId] ApprovalToJoinCmd userId
         * @property {number|null} [clubId] ApprovalToJoinCmd clubId
         * @property {boolean|null} [yesOrNo] ApprovalToJoinCmd yesOrNo
         */

        /**
         * Constructs a new ApprovalToJoinCmd.
         * @memberof msg
         * @classdesc Represents an ApprovalToJoinCmd.
         * @implements IApprovalToJoinCmd
         * @constructor
         * @param {msg.IApprovalToJoinCmd=} [properties] Properties to set
         */
        function ApprovalToJoinCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ApprovalToJoinCmd userId.
         * @member {number} userId
         * @memberof msg.ApprovalToJoinCmd
         * @instance
         */
        ApprovalToJoinCmd.prototype.userId = 0;

        /**
         * ApprovalToJoinCmd clubId.
         * @member {number} clubId
         * @memberof msg.ApprovalToJoinCmd
         * @instance
         */
        ApprovalToJoinCmd.prototype.clubId = 0;

        /**
         * ApprovalToJoinCmd yesOrNo.
         * @member {boolean} yesOrNo
         * @memberof msg.ApprovalToJoinCmd
         * @instance
         */
        ApprovalToJoinCmd.prototype.yesOrNo = false;

        /**
         * Creates a new ApprovalToJoinCmd instance using the specified properties.
         * @function create
         * @memberof msg.ApprovalToJoinCmd
         * @static
         * @param {msg.IApprovalToJoinCmd=} [properties] Properties to set
         * @returns {msg.ApprovalToJoinCmd} ApprovalToJoinCmd instance
         */
        ApprovalToJoinCmd.create = function create(properties) {
            return new ApprovalToJoinCmd(properties);
        };

        /**
         * Encodes the specified ApprovalToJoinCmd message. Does not implicitly {@link msg.ApprovalToJoinCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.ApprovalToJoinCmd
         * @static
         * @param {msg.IApprovalToJoinCmd} message ApprovalToJoinCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApprovalToJoinCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userId);
            if (message.clubId != null && Object.hasOwnProperty.call(message, "clubId"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.clubId);
            if (message.yesOrNo != null && Object.hasOwnProperty.call(message, "yesOrNo"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.yesOrNo);
            return writer;
        };

        /**
         * Encodes the specified ApprovalToJoinCmd message, length delimited. Does not implicitly {@link msg.ApprovalToJoinCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.ApprovalToJoinCmd
         * @static
         * @param {msg.IApprovalToJoinCmd} message ApprovalToJoinCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApprovalToJoinCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ApprovalToJoinCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.ApprovalToJoinCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.ApprovalToJoinCmd} ApprovalToJoinCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ApprovalToJoinCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.ApprovalToJoinCmd();
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
                    message.yesOrNo = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ApprovalToJoinCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.ApprovalToJoinCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.ApprovalToJoinCmd} ApprovalToJoinCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ApprovalToJoinCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ApprovalToJoinCmd message.
         * @function verify
         * @memberof msg.ApprovalToJoinCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ApprovalToJoinCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                if (!$util.isInteger(message.clubId))
                    return "clubId: integer expected";
            if (message.yesOrNo != null && message.hasOwnProperty("yesOrNo"))
                if (typeof message.yesOrNo !== "boolean")
                    return "yesOrNo: boolean expected";
            return null;
        };

        /**
         * Creates an ApprovalToJoinCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.ApprovalToJoinCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.ApprovalToJoinCmd} ApprovalToJoinCmd
         */
        ApprovalToJoinCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.ApprovalToJoinCmd)
                return object;
            let message = new $root.msg.ApprovalToJoinCmd();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.clubId != null)
                message.clubId = object.clubId | 0;
            if (object.yesOrNo != null)
                message.yesOrNo = Boolean(object.yesOrNo);
            return message;
        };

        /**
         * Creates a plain object from an ApprovalToJoinCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.ApprovalToJoinCmd
         * @static
         * @param {msg.ApprovalToJoinCmd} message ApprovalToJoinCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ApprovalToJoinCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = 0;
                object.clubId = 0;
                object.yesOrNo = false;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                object.clubId = message.clubId;
            if (message.yesOrNo != null && message.hasOwnProperty("yesOrNo"))
                object.yesOrNo = message.yesOrNo;
            return object;
        };

        /**
         * Converts this ApprovalToJoinCmd to JSON.
         * @function toJSON
         * @memberof msg.ApprovalToJoinCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ApprovalToJoinCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ApprovalToJoinCmd;
    })();

    msg.ApprovalToJoinResult = (function() {

        /**
         * Properties of an ApprovalToJoinResult.
         * @memberof msg
         * @interface IApprovalToJoinResult
         * @property {number|null} [userId] ApprovalToJoinResult userId
         * @property {number|null} [clubId] ApprovalToJoinResult clubId
         * @property {boolean|null} [succezz] ApprovalToJoinResult succezz
         */

        /**
         * Constructs a new ApprovalToJoinResult.
         * @memberof msg
         * @classdesc Represents an ApprovalToJoinResult.
         * @implements IApprovalToJoinResult
         * @constructor
         * @param {msg.IApprovalToJoinResult=} [properties] Properties to set
         */
        function ApprovalToJoinResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ApprovalToJoinResult userId.
         * @member {number} userId
         * @memberof msg.ApprovalToJoinResult
         * @instance
         */
        ApprovalToJoinResult.prototype.userId = 0;

        /**
         * ApprovalToJoinResult clubId.
         * @member {number} clubId
         * @memberof msg.ApprovalToJoinResult
         * @instance
         */
        ApprovalToJoinResult.prototype.clubId = 0;

        /**
         * ApprovalToJoinResult succezz.
         * @member {boolean} succezz
         * @memberof msg.ApprovalToJoinResult
         * @instance
         */
        ApprovalToJoinResult.prototype.succezz = false;

        /**
         * Creates a new ApprovalToJoinResult instance using the specified properties.
         * @function create
         * @memberof msg.ApprovalToJoinResult
         * @static
         * @param {msg.IApprovalToJoinResult=} [properties] Properties to set
         * @returns {msg.ApprovalToJoinResult} ApprovalToJoinResult instance
         */
        ApprovalToJoinResult.create = function create(properties) {
            return new ApprovalToJoinResult(properties);
        };

        /**
         * Encodes the specified ApprovalToJoinResult message. Does not implicitly {@link msg.ApprovalToJoinResult.verify|verify} messages.
         * @function encode
         * @memberof msg.ApprovalToJoinResult
         * @static
         * @param {msg.IApprovalToJoinResult} message ApprovalToJoinResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApprovalToJoinResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userId);
            if (message.clubId != null && Object.hasOwnProperty.call(message, "clubId"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.clubId);
            if (message.succezz != null && Object.hasOwnProperty.call(message, "succezz"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.succezz);
            return writer;
        };

        /**
         * Encodes the specified ApprovalToJoinResult message, length delimited. Does not implicitly {@link msg.ApprovalToJoinResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.ApprovalToJoinResult
         * @static
         * @param {msg.IApprovalToJoinResult} message ApprovalToJoinResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApprovalToJoinResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ApprovalToJoinResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.ApprovalToJoinResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.ApprovalToJoinResult} ApprovalToJoinResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ApprovalToJoinResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.ApprovalToJoinResult();
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
                    message.succezz = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ApprovalToJoinResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.ApprovalToJoinResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.ApprovalToJoinResult} ApprovalToJoinResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ApprovalToJoinResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ApprovalToJoinResult message.
         * @function verify
         * @memberof msg.ApprovalToJoinResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ApprovalToJoinResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                if (!$util.isInteger(message.clubId))
                    return "clubId: integer expected";
            if (message.succezz != null && message.hasOwnProperty("succezz"))
                if (typeof message.succezz !== "boolean")
                    return "succezz: boolean expected";
            return null;
        };

        /**
         * Creates an ApprovalToJoinResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.ApprovalToJoinResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.ApprovalToJoinResult} ApprovalToJoinResult
         */
        ApprovalToJoinResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.ApprovalToJoinResult)
                return object;
            let message = new $root.msg.ApprovalToJoinResult();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.clubId != null)
                message.clubId = object.clubId | 0;
            if (object.succezz != null)
                message.succezz = Boolean(object.succezz);
            return message;
        };

        /**
         * Creates a plain object from an ApprovalToJoinResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.ApprovalToJoinResult
         * @static
         * @param {msg.ApprovalToJoinResult} message ApprovalToJoinResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ApprovalToJoinResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = 0;
                object.clubId = 0;
                object.succezz = false;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                object.clubId = message.clubId;
            if (message.succezz != null && message.hasOwnProperty("succezz"))
                object.succezz = message.succezz;
            return object;
        };

        /**
         * Converts this ApprovalToJoinResult to JSON.
         * @function toJSON
         * @memberof msg.ApprovalToJoinResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ApprovalToJoinResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ApprovalToJoinResult;
    })();

    msg.DismissAMemberCmd = (function() {

        /**
         * Properties of a DismissAMemberCmd.
         * @memberof msg
         * @interface IDismissAMemberCmd
         * @property {number|null} [userId] DismissAMemberCmd userId
         * @property {number|null} [clubId] DismissAMemberCmd clubId
         */

        /**
         * Constructs a new DismissAMemberCmd.
         * @memberof msg
         * @classdesc Represents a DismissAMemberCmd.
         * @implements IDismissAMemberCmd
         * @constructor
         * @param {msg.IDismissAMemberCmd=} [properties] Properties to set
         */
        function DismissAMemberCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DismissAMemberCmd userId.
         * @member {number} userId
         * @memberof msg.DismissAMemberCmd
         * @instance
         */
        DismissAMemberCmd.prototype.userId = 0;

        /**
         * DismissAMemberCmd clubId.
         * @member {number} clubId
         * @memberof msg.DismissAMemberCmd
         * @instance
         */
        DismissAMemberCmd.prototype.clubId = 0;

        /**
         * Creates a new DismissAMemberCmd instance using the specified properties.
         * @function create
         * @memberof msg.DismissAMemberCmd
         * @static
         * @param {msg.IDismissAMemberCmd=} [properties] Properties to set
         * @returns {msg.DismissAMemberCmd} DismissAMemberCmd instance
         */
        DismissAMemberCmd.create = function create(properties) {
            return new DismissAMemberCmd(properties);
        };

        /**
         * Encodes the specified DismissAMemberCmd message. Does not implicitly {@link msg.DismissAMemberCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.DismissAMemberCmd
         * @static
         * @param {msg.IDismissAMemberCmd} message DismissAMemberCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DismissAMemberCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userId);
            if (message.clubId != null && Object.hasOwnProperty.call(message, "clubId"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.clubId);
            return writer;
        };

        /**
         * Encodes the specified DismissAMemberCmd message, length delimited. Does not implicitly {@link msg.DismissAMemberCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.DismissAMemberCmd
         * @static
         * @param {msg.IDismissAMemberCmd} message DismissAMemberCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DismissAMemberCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DismissAMemberCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.DismissAMemberCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.DismissAMemberCmd} DismissAMemberCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DismissAMemberCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.DismissAMemberCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.sint32();
                    break;
                case 2:
                    message.clubId = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DismissAMemberCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.DismissAMemberCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.DismissAMemberCmd} DismissAMemberCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DismissAMemberCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DismissAMemberCmd message.
         * @function verify
         * @memberof msg.DismissAMemberCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DismissAMemberCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                if (!$util.isInteger(message.clubId))
                    return "clubId: integer expected";
            return null;
        };

        /**
         * Creates a DismissAMemberCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.DismissAMemberCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.DismissAMemberCmd} DismissAMemberCmd
         */
        DismissAMemberCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.DismissAMemberCmd)
                return object;
            let message = new $root.msg.DismissAMemberCmd();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.clubId != null)
                message.clubId = object.clubId | 0;
            return message;
        };

        /**
         * Creates a plain object from a DismissAMemberCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.DismissAMemberCmd
         * @static
         * @param {msg.DismissAMemberCmd} message DismissAMemberCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DismissAMemberCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = 0;
                object.clubId = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                object.clubId = message.clubId;
            return object;
        };

        /**
         * Converts this DismissAMemberCmd to JSON.
         * @function toJSON
         * @memberof msg.DismissAMemberCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DismissAMemberCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DismissAMemberCmd;
    })();

    msg.DismissAMemberResult = (function() {

        /**
         * Properties of a DismissAMemberResult.
         * @memberof msg
         * @interface IDismissAMemberResult
         * @property {number|null} [userId] DismissAMemberResult userId
         * @property {number|null} [clubId] DismissAMemberResult clubId
         * @property {boolean|null} [succezz] DismissAMemberResult succezz
         */

        /**
         * Constructs a new DismissAMemberResult.
         * @memberof msg
         * @classdesc Represents a DismissAMemberResult.
         * @implements IDismissAMemberResult
         * @constructor
         * @param {msg.IDismissAMemberResult=} [properties] Properties to set
         */
        function DismissAMemberResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DismissAMemberResult userId.
         * @member {number} userId
         * @memberof msg.DismissAMemberResult
         * @instance
         */
        DismissAMemberResult.prototype.userId = 0;

        /**
         * DismissAMemberResult clubId.
         * @member {number} clubId
         * @memberof msg.DismissAMemberResult
         * @instance
         */
        DismissAMemberResult.prototype.clubId = 0;

        /**
         * DismissAMemberResult succezz.
         * @member {boolean} succezz
         * @memberof msg.DismissAMemberResult
         * @instance
         */
        DismissAMemberResult.prototype.succezz = false;

        /**
         * Creates a new DismissAMemberResult instance using the specified properties.
         * @function create
         * @memberof msg.DismissAMemberResult
         * @static
         * @param {msg.IDismissAMemberResult=} [properties] Properties to set
         * @returns {msg.DismissAMemberResult} DismissAMemberResult instance
         */
        DismissAMemberResult.create = function create(properties) {
            return new DismissAMemberResult(properties);
        };

        /**
         * Encodes the specified DismissAMemberResult message. Does not implicitly {@link msg.DismissAMemberResult.verify|verify} messages.
         * @function encode
         * @memberof msg.DismissAMemberResult
         * @static
         * @param {msg.IDismissAMemberResult} message DismissAMemberResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DismissAMemberResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userId);
            if (message.clubId != null && Object.hasOwnProperty.call(message, "clubId"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.clubId);
            if (message.succezz != null && Object.hasOwnProperty.call(message, "succezz"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.succezz);
            return writer;
        };

        /**
         * Encodes the specified DismissAMemberResult message, length delimited. Does not implicitly {@link msg.DismissAMemberResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.DismissAMemberResult
         * @static
         * @param {msg.IDismissAMemberResult} message DismissAMemberResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DismissAMemberResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DismissAMemberResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.DismissAMemberResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.DismissAMemberResult} DismissAMemberResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DismissAMemberResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.DismissAMemberResult();
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
                    message.succezz = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DismissAMemberResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.DismissAMemberResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.DismissAMemberResult} DismissAMemberResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DismissAMemberResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DismissAMemberResult message.
         * @function verify
         * @memberof msg.DismissAMemberResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DismissAMemberResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                if (!$util.isInteger(message.clubId))
                    return "clubId: integer expected";
            if (message.succezz != null && message.hasOwnProperty("succezz"))
                if (typeof message.succezz !== "boolean")
                    return "succezz: boolean expected";
            return null;
        };

        /**
         * Creates a DismissAMemberResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.DismissAMemberResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.DismissAMemberResult} DismissAMemberResult
         */
        DismissAMemberResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.DismissAMemberResult)
                return object;
            let message = new $root.msg.DismissAMemberResult();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.clubId != null)
                message.clubId = object.clubId | 0;
            if (object.succezz != null)
                message.succezz = Boolean(object.succezz);
            return message;
        };

        /**
         * Creates a plain object from a DismissAMemberResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.DismissAMemberResult
         * @static
         * @param {msg.DismissAMemberResult} message DismissAMemberResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DismissAMemberResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = 0;
                object.clubId = 0;
                object.succezz = false;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                object.clubId = message.clubId;
            if (message.succezz != null && message.hasOwnProperty("succezz"))
                object.succezz = message.succezz;
            return object;
        };

        /**
         * Converts this DismissAMemberResult to JSON.
         * @function toJSON
         * @memberof msg.DismissAMemberResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DismissAMemberResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DismissAMemberResult;
    })();

    msg.QuitClubCmd = (function() {

        /**
         * Properties of a QuitClubCmd.
         * @memberof msg
         * @interface IQuitClubCmd
         * @property {number|null} [clubId] QuitClubCmd clubId
         */

        /**
         * Constructs a new QuitClubCmd.
         * @memberof msg
         * @classdesc Represents a QuitClubCmd.
         * @implements IQuitClubCmd
         * @constructor
         * @param {msg.IQuitClubCmd=} [properties] Properties to set
         */
        function QuitClubCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QuitClubCmd clubId.
         * @member {number} clubId
         * @memberof msg.QuitClubCmd
         * @instance
         */
        QuitClubCmd.prototype.clubId = 0;

        /**
         * Creates a new QuitClubCmd instance using the specified properties.
         * @function create
         * @memberof msg.QuitClubCmd
         * @static
         * @param {msg.IQuitClubCmd=} [properties] Properties to set
         * @returns {msg.QuitClubCmd} QuitClubCmd instance
         */
        QuitClubCmd.create = function create(properties) {
            return new QuitClubCmd(properties);
        };

        /**
         * Encodes the specified QuitClubCmd message. Does not implicitly {@link msg.QuitClubCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.QuitClubCmd
         * @static
         * @param {msg.IQuitClubCmd} message QuitClubCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuitClubCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clubId != null && Object.hasOwnProperty.call(message, "clubId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.clubId);
            return writer;
        };

        /**
         * Encodes the specified QuitClubCmd message, length delimited. Does not implicitly {@link msg.QuitClubCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.QuitClubCmd
         * @static
         * @param {msg.IQuitClubCmd} message QuitClubCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuitClubCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QuitClubCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.QuitClubCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.QuitClubCmd} QuitClubCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuitClubCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.QuitClubCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clubId = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QuitClubCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.QuitClubCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.QuitClubCmd} QuitClubCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuitClubCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QuitClubCmd message.
         * @function verify
         * @memberof msg.QuitClubCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QuitClubCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                if (!$util.isInteger(message.clubId))
                    return "clubId: integer expected";
            return null;
        };

        /**
         * Creates a QuitClubCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.QuitClubCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.QuitClubCmd} QuitClubCmd
         */
        QuitClubCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.QuitClubCmd)
                return object;
            let message = new $root.msg.QuitClubCmd();
            if (object.clubId != null)
                message.clubId = object.clubId | 0;
            return message;
        };

        /**
         * Creates a plain object from a QuitClubCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.QuitClubCmd
         * @static
         * @param {msg.QuitClubCmd} message QuitClubCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QuitClubCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.clubId = 0;
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                object.clubId = message.clubId;
            return object;
        };

        /**
         * Converts this QuitClubCmd to JSON.
         * @function toJSON
         * @memberof msg.QuitClubCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QuitClubCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QuitClubCmd;
    })();

    msg.QuitClubResult = (function() {

        /**
         * Properties of a QuitClubResult.
         * @memberof msg
         * @interface IQuitClubResult
         * @property {number|null} [clubId] QuitClubResult clubId
         * @property {boolean|null} [succezz] QuitClubResult succezz
         */

        /**
         * Constructs a new QuitClubResult.
         * @memberof msg
         * @classdesc Represents a QuitClubResult.
         * @implements IQuitClubResult
         * @constructor
         * @param {msg.IQuitClubResult=} [properties] Properties to set
         */
        function QuitClubResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QuitClubResult clubId.
         * @member {number} clubId
         * @memberof msg.QuitClubResult
         * @instance
         */
        QuitClubResult.prototype.clubId = 0;

        /**
         * QuitClubResult succezz.
         * @member {boolean} succezz
         * @memberof msg.QuitClubResult
         * @instance
         */
        QuitClubResult.prototype.succezz = false;

        /**
         * Creates a new QuitClubResult instance using the specified properties.
         * @function create
         * @memberof msg.QuitClubResult
         * @static
         * @param {msg.IQuitClubResult=} [properties] Properties to set
         * @returns {msg.QuitClubResult} QuitClubResult instance
         */
        QuitClubResult.create = function create(properties) {
            return new QuitClubResult(properties);
        };

        /**
         * Encodes the specified QuitClubResult message. Does not implicitly {@link msg.QuitClubResult.verify|verify} messages.
         * @function encode
         * @memberof msg.QuitClubResult
         * @static
         * @param {msg.IQuitClubResult} message QuitClubResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuitClubResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clubId != null && Object.hasOwnProperty.call(message, "clubId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.clubId);
            if (message.succezz != null && Object.hasOwnProperty.call(message, "succezz"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.succezz);
            return writer;
        };

        /**
         * Encodes the specified QuitClubResult message, length delimited. Does not implicitly {@link msg.QuitClubResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.QuitClubResult
         * @static
         * @param {msg.IQuitClubResult} message QuitClubResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuitClubResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QuitClubResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.QuitClubResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.QuitClubResult} QuitClubResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuitClubResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.QuitClubResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clubId = reader.sint32();
                    break;
                case 2:
                    message.succezz = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QuitClubResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.QuitClubResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.QuitClubResult} QuitClubResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuitClubResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QuitClubResult message.
         * @function verify
         * @memberof msg.QuitClubResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QuitClubResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                if (!$util.isInteger(message.clubId))
                    return "clubId: integer expected";
            if (message.succezz != null && message.hasOwnProperty("succezz"))
                if (typeof message.succezz !== "boolean")
                    return "succezz: boolean expected";
            return null;
        };

        /**
         * Creates a QuitClubResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.QuitClubResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.QuitClubResult} QuitClubResult
         */
        QuitClubResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.QuitClubResult)
                return object;
            let message = new $root.msg.QuitClubResult();
            if (object.clubId != null)
                message.clubId = object.clubId | 0;
            if (object.succezz != null)
                message.succezz = Boolean(object.succezz);
            return message;
        };

        /**
         * Creates a plain object from a QuitClubResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.QuitClubResult
         * @static
         * @param {msg.QuitClubResult} message QuitClubResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QuitClubResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.clubId = 0;
                object.succezz = false;
            }
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                object.clubId = message.clubId;
            if (message.succezz != null && message.hasOwnProperty("succezz"))
                object.succezz = message.succezz;
            return object;
        };

        /**
         * Converts this QuitClubResult to JSON.
         * @function toJSON
         * @memberof msg.QuitClubResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QuitClubResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QuitClubResult;
    })();

    msg.ModifyFixGameCmd = (function() {

        /**
         * Properties of a ModifyFixGameCmd.
         * @memberof msg
         * @interface IModifyFixGameCmd
         * @property {number|null} [clubId] ModifyFixGameCmd clubId
         * @property {number|null} [index] ModifyFixGameCmd index
         * @property {number|null} [gameType0] ModifyFixGameCmd gameType0
         * @property {number|null} [gameType1] ModifyFixGameCmd gameType1
         * @property {Array.<msg.IKeyAndVal>|null} [ruleItem] ModifyFixGameCmd ruleItem
         */

        /**
         * Constructs a new ModifyFixGameCmd.
         * @memberof msg
         * @classdesc Represents a ModifyFixGameCmd.
         * @implements IModifyFixGameCmd
         * @constructor
         * @param {msg.IModifyFixGameCmd=} [properties] Properties to set
         */
        function ModifyFixGameCmd(properties) {
            this.ruleItem = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ModifyFixGameCmd clubId.
         * @member {number} clubId
         * @memberof msg.ModifyFixGameCmd
         * @instance
         */
        ModifyFixGameCmd.prototype.clubId = 0;

        /**
         * ModifyFixGameCmd index.
         * @member {number} index
         * @memberof msg.ModifyFixGameCmd
         * @instance
         */
        ModifyFixGameCmd.prototype.index = 0;

        /**
         * ModifyFixGameCmd gameType0.
         * @member {number} gameType0
         * @memberof msg.ModifyFixGameCmd
         * @instance
         */
        ModifyFixGameCmd.prototype.gameType0 = 0;

        /**
         * ModifyFixGameCmd gameType1.
         * @member {number} gameType1
         * @memberof msg.ModifyFixGameCmd
         * @instance
         */
        ModifyFixGameCmd.prototype.gameType1 = 0;

        /**
         * ModifyFixGameCmd ruleItem.
         * @member {Array.<msg.IKeyAndVal>} ruleItem
         * @memberof msg.ModifyFixGameCmd
         * @instance
         */
        ModifyFixGameCmd.prototype.ruleItem = $util.emptyArray;

        /**
         * Creates a new ModifyFixGameCmd instance using the specified properties.
         * @function create
         * @memberof msg.ModifyFixGameCmd
         * @static
         * @param {msg.IModifyFixGameCmd=} [properties] Properties to set
         * @returns {msg.ModifyFixGameCmd} ModifyFixGameCmd instance
         */
        ModifyFixGameCmd.create = function create(properties) {
            return new ModifyFixGameCmd(properties);
        };

        /**
         * Encodes the specified ModifyFixGameCmd message. Does not implicitly {@link msg.ModifyFixGameCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.ModifyFixGameCmd
         * @static
         * @param {msg.IModifyFixGameCmd} message ModifyFixGameCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModifyFixGameCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clubId != null && Object.hasOwnProperty.call(message, "clubId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.clubId);
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.index);
            if (message.gameType0 != null && Object.hasOwnProperty.call(message, "gameType0"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.gameType0);
            if (message.gameType1 != null && Object.hasOwnProperty.call(message, "gameType1"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.gameType1);
            if (message.ruleItem != null && message.ruleItem.length)
                for (let i = 0; i < message.ruleItem.length; ++i)
                    $root.msg.KeyAndVal.encode(message.ruleItem[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ModifyFixGameCmd message, length delimited. Does not implicitly {@link msg.ModifyFixGameCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.ModifyFixGameCmd
         * @static
         * @param {msg.IModifyFixGameCmd} message ModifyFixGameCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModifyFixGameCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ModifyFixGameCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.ModifyFixGameCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.ModifyFixGameCmd} ModifyFixGameCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModifyFixGameCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.ModifyFixGameCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clubId = reader.sint32();
                    break;
                case 2:
                    message.index = reader.sint32();
                    break;
                case 3:
                    message.gameType0 = reader.sint32();
                    break;
                case 4:
                    message.gameType1 = reader.sint32();
                    break;
                case 5:
                    if (!(message.ruleItem && message.ruleItem.length))
                        message.ruleItem = [];
                    message.ruleItem.push($root.msg.KeyAndVal.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ModifyFixGameCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.ModifyFixGameCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.ModifyFixGameCmd} ModifyFixGameCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModifyFixGameCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ModifyFixGameCmd message.
         * @function verify
         * @memberof msg.ModifyFixGameCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ModifyFixGameCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                if (!$util.isInteger(message.clubId))
                    return "clubId: integer expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            if (message.gameType0 != null && message.hasOwnProperty("gameType0"))
                if (!$util.isInteger(message.gameType0))
                    return "gameType0: integer expected";
            if (message.gameType1 != null && message.hasOwnProperty("gameType1"))
                if (!$util.isInteger(message.gameType1))
                    return "gameType1: integer expected";
            if (message.ruleItem != null && message.hasOwnProperty("ruleItem")) {
                if (!Array.isArray(message.ruleItem))
                    return "ruleItem: array expected";
                for (let i = 0; i < message.ruleItem.length; ++i) {
                    let error = $root.msg.KeyAndVal.verify(message.ruleItem[i]);
                    if (error)
                        return "ruleItem." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ModifyFixGameCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.ModifyFixGameCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.ModifyFixGameCmd} ModifyFixGameCmd
         */
        ModifyFixGameCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.ModifyFixGameCmd)
                return object;
            let message = new $root.msg.ModifyFixGameCmd();
            if (object.clubId != null)
                message.clubId = object.clubId | 0;
            if (object.index != null)
                message.index = object.index | 0;
            if (object.gameType0 != null)
                message.gameType0 = object.gameType0 | 0;
            if (object.gameType1 != null)
                message.gameType1 = object.gameType1 | 0;
            if (object.ruleItem) {
                if (!Array.isArray(object.ruleItem))
                    throw TypeError(".msg.ModifyFixGameCmd.ruleItem: array expected");
                message.ruleItem = [];
                for (let i = 0; i < object.ruleItem.length; ++i) {
                    if (typeof object.ruleItem[i] !== "object")
                        throw TypeError(".msg.ModifyFixGameCmd.ruleItem: object expected");
                    message.ruleItem[i] = $root.msg.KeyAndVal.fromObject(object.ruleItem[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ModifyFixGameCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.ModifyFixGameCmd
         * @static
         * @param {msg.ModifyFixGameCmd} message ModifyFixGameCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ModifyFixGameCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.ruleItem = [];
            if (options.defaults) {
                object.clubId = 0;
                object.index = 0;
                object.gameType0 = 0;
                object.gameType1 = 0;
            }
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                object.clubId = message.clubId;
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            if (message.gameType0 != null && message.hasOwnProperty("gameType0"))
                object.gameType0 = message.gameType0;
            if (message.gameType1 != null && message.hasOwnProperty("gameType1"))
                object.gameType1 = message.gameType1;
            if (message.ruleItem && message.ruleItem.length) {
                object.ruleItem = [];
                for (let j = 0; j < message.ruleItem.length; ++j)
                    object.ruleItem[j] = $root.msg.KeyAndVal.toObject(message.ruleItem[j], options);
            }
            return object;
        };

        /**
         * Converts this ModifyFixGameCmd to JSON.
         * @function toJSON
         * @memberof msg.ModifyFixGameCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ModifyFixGameCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ModifyFixGameCmd;
    })();

    msg.ModifyFixGameResult = (function() {

        /**
         * Properties of a ModifyFixGameResult.
         * @memberof msg
         * @interface IModifyFixGameResult
         * @property {number|null} [clubId] ModifyFixGameResult clubId
         * @property {number|null} [index] ModifyFixGameResult index
         * @property {boolean|null} [succezz] ModifyFixGameResult succezz
         */

        /**
         * Constructs a new ModifyFixGameResult.
         * @memberof msg
         * @classdesc Represents a ModifyFixGameResult.
         * @implements IModifyFixGameResult
         * @constructor
         * @param {msg.IModifyFixGameResult=} [properties] Properties to set
         */
        function ModifyFixGameResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ModifyFixGameResult clubId.
         * @member {number} clubId
         * @memberof msg.ModifyFixGameResult
         * @instance
         */
        ModifyFixGameResult.prototype.clubId = 0;

        /**
         * ModifyFixGameResult index.
         * @member {number} index
         * @memberof msg.ModifyFixGameResult
         * @instance
         */
        ModifyFixGameResult.prototype.index = 0;

        /**
         * ModifyFixGameResult succezz.
         * @member {boolean} succezz
         * @memberof msg.ModifyFixGameResult
         * @instance
         */
        ModifyFixGameResult.prototype.succezz = false;

        /**
         * Creates a new ModifyFixGameResult instance using the specified properties.
         * @function create
         * @memberof msg.ModifyFixGameResult
         * @static
         * @param {msg.IModifyFixGameResult=} [properties] Properties to set
         * @returns {msg.ModifyFixGameResult} ModifyFixGameResult instance
         */
        ModifyFixGameResult.create = function create(properties) {
            return new ModifyFixGameResult(properties);
        };

        /**
         * Encodes the specified ModifyFixGameResult message. Does not implicitly {@link msg.ModifyFixGameResult.verify|verify} messages.
         * @function encode
         * @memberof msg.ModifyFixGameResult
         * @static
         * @param {msg.IModifyFixGameResult} message ModifyFixGameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModifyFixGameResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clubId != null && Object.hasOwnProperty.call(message, "clubId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.clubId);
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.index);
            if (message.succezz != null && Object.hasOwnProperty.call(message, "succezz"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.succezz);
            return writer;
        };

        /**
         * Encodes the specified ModifyFixGameResult message, length delimited. Does not implicitly {@link msg.ModifyFixGameResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.ModifyFixGameResult
         * @static
         * @param {msg.IModifyFixGameResult} message ModifyFixGameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModifyFixGameResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ModifyFixGameResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.ModifyFixGameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.ModifyFixGameResult} ModifyFixGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModifyFixGameResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.ModifyFixGameResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clubId = reader.sint32();
                    break;
                case 2:
                    message.index = reader.sint32();
                    break;
                case 3:
                    message.succezz = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ModifyFixGameResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.ModifyFixGameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.ModifyFixGameResult} ModifyFixGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModifyFixGameResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ModifyFixGameResult message.
         * @function verify
         * @memberof msg.ModifyFixGameResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ModifyFixGameResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                if (!$util.isInteger(message.clubId))
                    return "clubId: integer expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            if (message.succezz != null && message.hasOwnProperty("succezz"))
                if (typeof message.succezz !== "boolean")
                    return "succezz: boolean expected";
            return null;
        };

        /**
         * Creates a ModifyFixGameResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.ModifyFixGameResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.ModifyFixGameResult} ModifyFixGameResult
         */
        ModifyFixGameResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.ModifyFixGameResult)
                return object;
            let message = new $root.msg.ModifyFixGameResult();
            if (object.clubId != null)
                message.clubId = object.clubId | 0;
            if (object.index != null)
                message.index = object.index | 0;
            if (object.succezz != null)
                message.succezz = Boolean(object.succezz);
            return message;
        };

        /**
         * Creates a plain object from a ModifyFixGameResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.ModifyFixGameResult
         * @static
         * @param {msg.ModifyFixGameResult} message ModifyFixGameResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ModifyFixGameResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.clubId = 0;
                object.index = 0;
                object.succezz = false;
            }
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                object.clubId = message.clubId;
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            if (message.succezz != null && message.hasOwnProperty("succezz"))
                object.succezz = message.succezz;
            return object;
        };

        /**
         * Converts this ModifyFixGameResult to JSON.
         * @function toJSON
         * @memberof msg.ModifyFixGameResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ModifyFixGameResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ModifyFixGameResult;
    })();

    msg.ExchangeRoomCardCmd = (function() {

        /**
         * Properties of an ExchangeRoomCardCmd.
         * @memberof msg
         * @interface IExchangeRoomCardCmd
         * @property {number|null} [clubId] ExchangeRoomCardCmd clubId
         * @property {number|null} [roomCard] ExchangeRoomCardCmd roomCard
         */

        /**
         * Constructs a new ExchangeRoomCardCmd.
         * @memberof msg
         * @classdesc Represents an ExchangeRoomCardCmd.
         * @implements IExchangeRoomCardCmd
         * @constructor
         * @param {msg.IExchangeRoomCardCmd=} [properties] Properties to set
         */
        function ExchangeRoomCardCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExchangeRoomCardCmd clubId.
         * @member {number} clubId
         * @memberof msg.ExchangeRoomCardCmd
         * @instance
         */
        ExchangeRoomCardCmd.prototype.clubId = 0;

        /**
         * ExchangeRoomCardCmd roomCard.
         * @member {number} roomCard
         * @memberof msg.ExchangeRoomCardCmd
         * @instance
         */
        ExchangeRoomCardCmd.prototype.roomCard = 0;

        /**
         * Creates a new ExchangeRoomCardCmd instance using the specified properties.
         * @function create
         * @memberof msg.ExchangeRoomCardCmd
         * @static
         * @param {msg.IExchangeRoomCardCmd=} [properties] Properties to set
         * @returns {msg.ExchangeRoomCardCmd} ExchangeRoomCardCmd instance
         */
        ExchangeRoomCardCmd.create = function create(properties) {
            return new ExchangeRoomCardCmd(properties);
        };

        /**
         * Encodes the specified ExchangeRoomCardCmd message. Does not implicitly {@link msg.ExchangeRoomCardCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.ExchangeRoomCardCmd
         * @static
         * @param {msg.IExchangeRoomCardCmd} message ExchangeRoomCardCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExchangeRoomCardCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clubId != null && Object.hasOwnProperty.call(message, "clubId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.clubId);
            if (message.roomCard != null && Object.hasOwnProperty.call(message, "roomCard"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.roomCard);
            return writer;
        };

        /**
         * Encodes the specified ExchangeRoomCardCmd message, length delimited. Does not implicitly {@link msg.ExchangeRoomCardCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.ExchangeRoomCardCmd
         * @static
         * @param {msg.IExchangeRoomCardCmd} message ExchangeRoomCardCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExchangeRoomCardCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExchangeRoomCardCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.ExchangeRoomCardCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.ExchangeRoomCardCmd} ExchangeRoomCardCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExchangeRoomCardCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.ExchangeRoomCardCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clubId = reader.sint32();
                    break;
                case 2:
                    message.roomCard = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExchangeRoomCardCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.ExchangeRoomCardCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.ExchangeRoomCardCmd} ExchangeRoomCardCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExchangeRoomCardCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExchangeRoomCardCmd message.
         * @function verify
         * @memberof msg.ExchangeRoomCardCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExchangeRoomCardCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                if (!$util.isInteger(message.clubId))
                    return "clubId: integer expected";
            if (message.roomCard != null && message.hasOwnProperty("roomCard"))
                if (!$util.isInteger(message.roomCard))
                    return "roomCard: integer expected";
            return null;
        };

        /**
         * Creates an ExchangeRoomCardCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.ExchangeRoomCardCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.ExchangeRoomCardCmd} ExchangeRoomCardCmd
         */
        ExchangeRoomCardCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.ExchangeRoomCardCmd)
                return object;
            let message = new $root.msg.ExchangeRoomCardCmd();
            if (object.clubId != null)
                message.clubId = object.clubId | 0;
            if (object.roomCard != null)
                message.roomCard = object.roomCard | 0;
            return message;
        };

        /**
         * Creates a plain object from an ExchangeRoomCardCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.ExchangeRoomCardCmd
         * @static
         * @param {msg.ExchangeRoomCardCmd} message ExchangeRoomCardCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExchangeRoomCardCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.clubId = 0;
                object.roomCard = 0;
            }
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                object.clubId = message.clubId;
            if (message.roomCard != null && message.hasOwnProperty("roomCard"))
                object.roomCard = message.roomCard;
            return object;
        };

        /**
         * Converts this ExchangeRoomCardCmd to JSON.
         * @function toJSON
         * @memberof msg.ExchangeRoomCardCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExchangeRoomCardCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExchangeRoomCardCmd;
    })();

    msg.ExchangeRoomCardResult = (function() {

        /**
         * Properties of an ExchangeRoomCardResult.
         * @memberof msg
         * @interface IExchangeRoomCardResult
         * @property {number|null} [clubId] ExchangeRoomCardResult clubId
         * @property {number|null} [roomCard] ExchangeRoomCardResult roomCard
         * @property {boolean|null} [succezz] ExchangeRoomCardResult succezz
         */

        /**
         * Constructs a new ExchangeRoomCardResult.
         * @memberof msg
         * @classdesc Represents an ExchangeRoomCardResult.
         * @implements IExchangeRoomCardResult
         * @constructor
         * @param {msg.IExchangeRoomCardResult=} [properties] Properties to set
         */
        function ExchangeRoomCardResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExchangeRoomCardResult clubId.
         * @member {number} clubId
         * @memberof msg.ExchangeRoomCardResult
         * @instance
         */
        ExchangeRoomCardResult.prototype.clubId = 0;

        /**
         * ExchangeRoomCardResult roomCard.
         * @member {number} roomCard
         * @memberof msg.ExchangeRoomCardResult
         * @instance
         */
        ExchangeRoomCardResult.prototype.roomCard = 0;

        /**
         * ExchangeRoomCardResult succezz.
         * @member {boolean} succezz
         * @memberof msg.ExchangeRoomCardResult
         * @instance
         */
        ExchangeRoomCardResult.prototype.succezz = false;

        /**
         * Creates a new ExchangeRoomCardResult instance using the specified properties.
         * @function create
         * @memberof msg.ExchangeRoomCardResult
         * @static
         * @param {msg.IExchangeRoomCardResult=} [properties] Properties to set
         * @returns {msg.ExchangeRoomCardResult} ExchangeRoomCardResult instance
         */
        ExchangeRoomCardResult.create = function create(properties) {
            return new ExchangeRoomCardResult(properties);
        };

        /**
         * Encodes the specified ExchangeRoomCardResult message. Does not implicitly {@link msg.ExchangeRoomCardResult.verify|verify} messages.
         * @function encode
         * @memberof msg.ExchangeRoomCardResult
         * @static
         * @param {msg.IExchangeRoomCardResult} message ExchangeRoomCardResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExchangeRoomCardResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clubId != null && Object.hasOwnProperty.call(message, "clubId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.clubId);
            if (message.roomCard != null && Object.hasOwnProperty.call(message, "roomCard"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.roomCard);
            if (message.succezz != null && Object.hasOwnProperty.call(message, "succezz"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.succezz);
            return writer;
        };

        /**
         * Encodes the specified ExchangeRoomCardResult message, length delimited. Does not implicitly {@link msg.ExchangeRoomCardResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.ExchangeRoomCardResult
         * @static
         * @param {msg.IExchangeRoomCardResult} message ExchangeRoomCardResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExchangeRoomCardResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExchangeRoomCardResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.ExchangeRoomCardResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.ExchangeRoomCardResult} ExchangeRoomCardResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExchangeRoomCardResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.ExchangeRoomCardResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clubId = reader.sint32();
                    break;
                case 2:
                    message.roomCard = reader.sint32();
                    break;
                case 3:
                    message.succezz = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExchangeRoomCardResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.ExchangeRoomCardResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.ExchangeRoomCardResult} ExchangeRoomCardResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExchangeRoomCardResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExchangeRoomCardResult message.
         * @function verify
         * @memberof msg.ExchangeRoomCardResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExchangeRoomCardResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                if (!$util.isInteger(message.clubId))
                    return "clubId: integer expected";
            if (message.roomCard != null && message.hasOwnProperty("roomCard"))
                if (!$util.isInteger(message.roomCard))
                    return "roomCard: integer expected";
            if (message.succezz != null && message.hasOwnProperty("succezz"))
                if (typeof message.succezz !== "boolean")
                    return "succezz: boolean expected";
            return null;
        };

        /**
         * Creates an ExchangeRoomCardResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.ExchangeRoomCardResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.ExchangeRoomCardResult} ExchangeRoomCardResult
         */
        ExchangeRoomCardResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.ExchangeRoomCardResult)
                return object;
            let message = new $root.msg.ExchangeRoomCardResult();
            if (object.clubId != null)
                message.clubId = object.clubId | 0;
            if (object.roomCard != null)
                message.roomCard = object.roomCard | 0;
            if (object.succezz != null)
                message.succezz = Boolean(object.succezz);
            return message;
        };

        /**
         * Creates a plain object from an ExchangeRoomCardResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.ExchangeRoomCardResult
         * @static
         * @param {msg.ExchangeRoomCardResult} message ExchangeRoomCardResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExchangeRoomCardResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.clubId = 0;
                object.roomCard = 0;
                object.succezz = false;
            }
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                object.clubId = message.clubId;
            if (message.roomCard != null && message.hasOwnProperty("roomCard"))
                object.roomCard = message.roomCard;
            if (message.succezz != null && message.hasOwnProperty("succezz"))
                object.succezz = message.succezz;
            return object;
        };

        /**
         * Converts this ExchangeRoomCardResult to JSON.
         * @function toJSON
         * @memberof msg.ExchangeRoomCardResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExchangeRoomCardResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExchangeRoomCardResult;
    })();

    msg.StartTableChangedListenCmd = (function() {

        /**
         * Properties of a StartTableChangedListenCmd.
         * @memberof msg
         * @interface IStartTableChangedListenCmd
         * @property {number|null} [clubId] StartTableChangedListenCmd clubId
         */

        /**
         * Constructs a new StartTableChangedListenCmd.
         * @memberof msg
         * @classdesc Represents a StartTableChangedListenCmd.
         * @implements IStartTableChangedListenCmd
         * @constructor
         * @param {msg.IStartTableChangedListenCmd=} [properties] Properties to set
         */
        function StartTableChangedListenCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StartTableChangedListenCmd clubId.
         * @member {number} clubId
         * @memberof msg.StartTableChangedListenCmd
         * @instance
         */
        StartTableChangedListenCmd.prototype.clubId = 0;

        /**
         * Creates a new StartTableChangedListenCmd instance using the specified properties.
         * @function create
         * @memberof msg.StartTableChangedListenCmd
         * @static
         * @param {msg.IStartTableChangedListenCmd=} [properties] Properties to set
         * @returns {msg.StartTableChangedListenCmd} StartTableChangedListenCmd instance
         */
        StartTableChangedListenCmd.create = function create(properties) {
            return new StartTableChangedListenCmd(properties);
        };

        /**
         * Encodes the specified StartTableChangedListenCmd message. Does not implicitly {@link msg.StartTableChangedListenCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.StartTableChangedListenCmd
         * @static
         * @param {msg.IStartTableChangedListenCmd} message StartTableChangedListenCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartTableChangedListenCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clubId != null && Object.hasOwnProperty.call(message, "clubId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.clubId);
            return writer;
        };

        /**
         * Encodes the specified StartTableChangedListenCmd message, length delimited. Does not implicitly {@link msg.StartTableChangedListenCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.StartTableChangedListenCmd
         * @static
         * @param {msg.IStartTableChangedListenCmd} message StartTableChangedListenCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartTableChangedListenCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartTableChangedListenCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.StartTableChangedListenCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.StartTableChangedListenCmd} StartTableChangedListenCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartTableChangedListenCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.StartTableChangedListenCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clubId = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StartTableChangedListenCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.StartTableChangedListenCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.StartTableChangedListenCmd} StartTableChangedListenCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartTableChangedListenCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartTableChangedListenCmd message.
         * @function verify
         * @memberof msg.StartTableChangedListenCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartTableChangedListenCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                if (!$util.isInteger(message.clubId))
                    return "clubId: integer expected";
            return null;
        };

        /**
         * Creates a StartTableChangedListenCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.StartTableChangedListenCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.StartTableChangedListenCmd} StartTableChangedListenCmd
         */
        StartTableChangedListenCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.StartTableChangedListenCmd)
                return object;
            let message = new $root.msg.StartTableChangedListenCmd();
            if (object.clubId != null)
                message.clubId = object.clubId | 0;
            return message;
        };

        /**
         * Creates a plain object from a StartTableChangedListenCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.StartTableChangedListenCmd
         * @static
         * @param {msg.StartTableChangedListenCmd} message StartTableChangedListenCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StartTableChangedListenCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.clubId = 0;
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                object.clubId = message.clubId;
            return object;
        };

        /**
         * Converts this StartTableChangedListenCmd to JSON.
         * @function toJSON
         * @memberof msg.StartTableChangedListenCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StartTableChangedListenCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StartTableChangedListenCmd;
    })();

    msg.StopTableChangedListenCmd = (function() {

        /**
         * Properties of a StopTableChangedListenCmd.
         * @memberof msg
         * @interface IStopTableChangedListenCmd
         */

        /**
         * Constructs a new StopTableChangedListenCmd.
         * @memberof msg
         * @classdesc Represents a StopTableChangedListenCmd.
         * @implements IStopTableChangedListenCmd
         * @constructor
         * @param {msg.IStopTableChangedListenCmd=} [properties] Properties to set
         */
        function StopTableChangedListenCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new StopTableChangedListenCmd instance using the specified properties.
         * @function create
         * @memberof msg.StopTableChangedListenCmd
         * @static
         * @param {msg.IStopTableChangedListenCmd=} [properties] Properties to set
         * @returns {msg.StopTableChangedListenCmd} StopTableChangedListenCmd instance
         */
        StopTableChangedListenCmd.create = function create(properties) {
            return new StopTableChangedListenCmd(properties);
        };

        /**
         * Encodes the specified StopTableChangedListenCmd message. Does not implicitly {@link msg.StopTableChangedListenCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.StopTableChangedListenCmd
         * @static
         * @param {msg.IStopTableChangedListenCmd} message StopTableChangedListenCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StopTableChangedListenCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified StopTableChangedListenCmd message, length delimited. Does not implicitly {@link msg.StopTableChangedListenCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.StopTableChangedListenCmd
         * @static
         * @param {msg.IStopTableChangedListenCmd} message StopTableChangedListenCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StopTableChangedListenCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StopTableChangedListenCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.StopTableChangedListenCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.StopTableChangedListenCmd} StopTableChangedListenCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StopTableChangedListenCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.StopTableChangedListenCmd();
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
         * Decodes a StopTableChangedListenCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.StopTableChangedListenCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.StopTableChangedListenCmd} StopTableChangedListenCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StopTableChangedListenCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StopTableChangedListenCmd message.
         * @function verify
         * @memberof msg.StopTableChangedListenCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StopTableChangedListenCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a StopTableChangedListenCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.StopTableChangedListenCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.StopTableChangedListenCmd} StopTableChangedListenCmd
         */
        StopTableChangedListenCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.StopTableChangedListenCmd)
                return object;
            return new $root.msg.StopTableChangedListenCmd();
        };

        /**
         * Creates a plain object from a StopTableChangedListenCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.StopTableChangedListenCmd
         * @static
         * @param {msg.StopTableChangedListenCmd} message StopTableChangedListenCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StopTableChangedListenCmd.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this StopTableChangedListenCmd to JSON.
         * @function toJSON
         * @memberof msg.StopTableChangedListenCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StopTableChangedListenCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StopTableChangedListenCmd;
    })();

    msg.AClubTableChangedBroadcast = (function() {

        /**
         * Properties of a AClubTableChangedBroadcast.
         * @memberof msg
         * @interface IAClubTableChangedBroadcast
         * @property {number|null} [clubId] AClubTableChangedBroadcast clubId
         * @property {number|null} [tableSeqNum] AClubTableChangedBroadcast tableSeqNum
         * @property {number|null} [roomId] AClubTableChangedBroadcast roomId
         */

        /**
         * Constructs a new AClubTableChangedBroadcast.
         * @memberof msg
         * @classdesc Represents a AClubTableChangedBroadcast.
         * @implements IAClubTableChangedBroadcast
         * @constructor
         * @param {msg.IAClubTableChangedBroadcast=} [properties] Properties to set
         */
        function AClubTableChangedBroadcast(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AClubTableChangedBroadcast clubId.
         * @member {number} clubId
         * @memberof msg.AClubTableChangedBroadcast
         * @instance
         */
        AClubTableChangedBroadcast.prototype.clubId = 0;

        /**
         * AClubTableChangedBroadcast tableSeqNum.
         * @member {number} tableSeqNum
         * @memberof msg.AClubTableChangedBroadcast
         * @instance
         */
        AClubTableChangedBroadcast.prototype.tableSeqNum = 0;

        /**
         * AClubTableChangedBroadcast roomId.
         * @member {number} roomId
         * @memberof msg.AClubTableChangedBroadcast
         * @instance
         */
        AClubTableChangedBroadcast.prototype.roomId = 0;

        /**
         * Creates a new AClubTableChangedBroadcast instance using the specified properties.
         * @function create
         * @memberof msg.AClubTableChangedBroadcast
         * @static
         * @param {msg.IAClubTableChangedBroadcast=} [properties] Properties to set
         * @returns {msg.AClubTableChangedBroadcast} AClubTableChangedBroadcast instance
         */
        AClubTableChangedBroadcast.create = function create(properties) {
            return new AClubTableChangedBroadcast(properties);
        };

        /**
         * Encodes the specified AClubTableChangedBroadcast message. Does not implicitly {@link msg.AClubTableChangedBroadcast.verify|verify} messages.
         * @function encode
         * @memberof msg.AClubTableChangedBroadcast
         * @static
         * @param {msg.IAClubTableChangedBroadcast} message AClubTableChangedBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AClubTableChangedBroadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clubId != null && Object.hasOwnProperty.call(message, "clubId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.clubId);
            if (message.tableSeqNum != null && Object.hasOwnProperty.call(message, "tableSeqNum"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.tableSeqNum);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified AClubTableChangedBroadcast message, length delimited. Does not implicitly {@link msg.AClubTableChangedBroadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.AClubTableChangedBroadcast
         * @static
         * @param {msg.IAClubTableChangedBroadcast} message AClubTableChangedBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AClubTableChangedBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a AClubTableChangedBroadcast message from the specified reader or buffer.
         * @function decode
         * @memberof msg.AClubTableChangedBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.AClubTableChangedBroadcast} AClubTableChangedBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AClubTableChangedBroadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.AClubTableChangedBroadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clubId = reader.sint32();
                    break;
                case 2:
                    message.tableSeqNum = reader.sint32();
                    break;
                case 3:
                    message.roomId = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a AClubTableChangedBroadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.AClubTableChangedBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.AClubTableChangedBroadcast} AClubTableChangedBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AClubTableChangedBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a AClubTableChangedBroadcast message.
         * @function verify
         * @memberof msg.AClubTableChangedBroadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AClubTableChangedBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                if (!$util.isInteger(message.clubId))
                    return "clubId: integer expected";
            if (message.tableSeqNum != null && message.hasOwnProperty("tableSeqNum"))
                if (!$util.isInteger(message.tableSeqNum))
                    return "tableSeqNum: integer expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId))
                    return "roomId: integer expected";
            return null;
        };

        /**
         * Creates a AClubTableChangedBroadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.AClubTableChangedBroadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.AClubTableChangedBroadcast} AClubTableChangedBroadcast
         */
        AClubTableChangedBroadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.AClubTableChangedBroadcast)
                return object;
            let message = new $root.msg.AClubTableChangedBroadcast();
            if (object.clubId != null)
                message.clubId = object.clubId | 0;
            if (object.tableSeqNum != null)
                message.tableSeqNum = object.tableSeqNum | 0;
            if (object.roomId != null)
                message.roomId = object.roomId | 0;
            return message;
        };

        /**
         * Creates a plain object from a AClubTableChangedBroadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.AClubTableChangedBroadcast
         * @static
         * @param {msg.AClubTableChangedBroadcast} message AClubTableChangedBroadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AClubTableChangedBroadcast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.clubId = 0;
                object.tableSeqNum = 0;
                object.roomId = 0;
            }
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                object.clubId = message.clubId;
            if (message.tableSeqNum != null && message.hasOwnProperty("tableSeqNum"))
                object.tableSeqNum = message.tableSeqNum;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            return object;
        };

        /**
         * Converts this AClubTableChangedBroadcast to JSON.
         * @function toJSON
         * @memberof msg.AClubTableChangedBroadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AClubTableChangedBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AClubTableChangedBroadcast;
    })();

    return msg;
})();

module.exports = $root;
