/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

import * as $protobuf from "./hall.protobufjs";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots.hallServer || ($protobuf.roots.hallServer = {});

export const msg = $root.msg = (() => {

    /**
     * Namespace msg.
     * @exports msg
     * @namespace
     */
    const msg = {};

    /**
     * HallServerMsgCodeDef enum.
     * @name msg.HallServerMsgCodeDef
     * @enum {number}
     * @property {number} _Dummy=0 _Dummy value
     * @property {number} _GetMyDetailzCmd=201 _GetMyDetailzCmd value
     * @property {number} _GetMyDetailzResult=202 _GetMyDetailzResult value
     * @property {number} _GetJoinedRoomIdCmd=203 _GetJoinedRoomIdCmd value
     * @property {number} _GetJoinedRoomIdResult=204 _GetJoinedRoomIdResult value
     * @property {number} _CreateRoomCmd=205 _CreateRoomCmd value
     * @property {number} _CreateRoomResult=206 _CreateRoomResult value
     * @property {number} _JoinRoomCmd=207 _JoinRoomCmd value
     * @property {number} _JoinRoomResult=208 _JoinRoomResult value
     */
    msg.HallServerMsgCodeDef = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "_Dummy"] = 0;
        values[valuesById[201] = "_GetMyDetailzCmd"] = 201;
        values[valuesById[202] = "_GetMyDetailzResult"] = 202;
        values[valuesById[203] = "_GetJoinedRoomIdCmd"] = 203;
        values[valuesById[204] = "_GetJoinedRoomIdResult"] = 204;
        values[valuesById[205] = "_CreateRoomCmd"] = 205;
        values[valuesById[206] = "_CreateRoomResult"] = 206;
        values[valuesById[207] = "_JoinRoomCmd"] = 207;
        values[valuesById[208] = "_JoinRoomResult"] = 208;
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

    msg.GetMyDetailzCmd = (function() {

        /**
         * Properties of a GetMyDetailzCmd.
         * @memberof msg
         * @interface IGetMyDetailzCmd
         */

        /**
         * Constructs a new GetMyDetailzCmd.
         * @memberof msg
         * @classdesc Represents a GetMyDetailzCmd.
         * @implements IGetMyDetailzCmd
         * @constructor
         * @param {msg.IGetMyDetailzCmd=} [properties] Properties to set
         */
        function GetMyDetailzCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetMyDetailzCmd instance using the specified properties.
         * @function create
         * @memberof msg.GetMyDetailzCmd
         * @static
         * @param {msg.IGetMyDetailzCmd=} [properties] Properties to set
         * @returns {msg.GetMyDetailzCmd} GetMyDetailzCmd instance
         */
        GetMyDetailzCmd.create = function create(properties) {
            return new GetMyDetailzCmd(properties);
        };

        /**
         * Encodes the specified GetMyDetailzCmd message. Does not implicitly {@link msg.GetMyDetailzCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.GetMyDetailzCmd
         * @static
         * @param {msg.IGetMyDetailzCmd} message GetMyDetailzCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetMyDetailzCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetMyDetailzCmd message, length delimited. Does not implicitly {@link msg.GetMyDetailzCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.GetMyDetailzCmd
         * @static
         * @param {msg.IGetMyDetailzCmd} message GetMyDetailzCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetMyDetailzCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetMyDetailzCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.GetMyDetailzCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.GetMyDetailzCmd} GetMyDetailzCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetMyDetailzCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.GetMyDetailzCmd();
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
         * Decodes a GetMyDetailzCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.GetMyDetailzCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.GetMyDetailzCmd} GetMyDetailzCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetMyDetailzCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetMyDetailzCmd message.
         * @function verify
         * @memberof msg.GetMyDetailzCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetMyDetailzCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetMyDetailzCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.GetMyDetailzCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.GetMyDetailzCmd} GetMyDetailzCmd
         */
        GetMyDetailzCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.GetMyDetailzCmd)
                return object;
            return new $root.msg.GetMyDetailzCmd();
        };

        /**
         * Creates a plain object from a GetMyDetailzCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.GetMyDetailzCmd
         * @static
         * @param {msg.GetMyDetailzCmd} message GetMyDetailzCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetMyDetailzCmd.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetMyDetailzCmd to JSON.
         * @function toJSON
         * @memberof msg.GetMyDetailzCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetMyDetailzCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetMyDetailzCmd;
    })();

    msg.GetMyDetailzResult = (function() {

        /**
         * Properties of a GetMyDetailzResult.
         * @memberof msg
         * @interface IGetMyDetailzResult
         * @property {number|null} [userId] GetMyDetailzResult userId
         * @property {string|null} [userName] GetMyDetailzResult userName
         * @property {string|null} [headImg] GetMyDetailzResult headImg
         * @property {number|null} [sex] GetMyDetailzResult sex
         * @property {number|null} [roomCard] GetMyDetailzResult roomCard
         * @property {string|null} [lastLoginIp] GetMyDetailzResult lastLoginIp
         */

        /**
         * Constructs a new GetMyDetailzResult.
         * @memberof msg
         * @classdesc Represents a GetMyDetailzResult.
         * @implements IGetMyDetailzResult
         * @constructor
         * @param {msg.IGetMyDetailzResult=} [properties] Properties to set
         */
        function GetMyDetailzResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetMyDetailzResult userId.
         * @member {number} userId
         * @memberof msg.GetMyDetailzResult
         * @instance
         */
        GetMyDetailzResult.prototype.userId = 0;

        /**
         * GetMyDetailzResult userName.
         * @member {string} userName
         * @memberof msg.GetMyDetailzResult
         * @instance
         */
        GetMyDetailzResult.prototype.userName = "";

        /**
         * GetMyDetailzResult headImg.
         * @member {string} headImg
         * @memberof msg.GetMyDetailzResult
         * @instance
         */
        GetMyDetailzResult.prototype.headImg = "";

        /**
         * GetMyDetailzResult sex.
         * @member {number} sex
         * @memberof msg.GetMyDetailzResult
         * @instance
         */
        GetMyDetailzResult.prototype.sex = 0;

        /**
         * GetMyDetailzResult roomCard.
         * @member {number} roomCard
         * @memberof msg.GetMyDetailzResult
         * @instance
         */
        GetMyDetailzResult.prototype.roomCard = 0;

        /**
         * GetMyDetailzResult lastLoginIp.
         * @member {string} lastLoginIp
         * @memberof msg.GetMyDetailzResult
         * @instance
         */
        GetMyDetailzResult.prototype.lastLoginIp = "";

        /**
         * Creates a new GetMyDetailzResult instance using the specified properties.
         * @function create
         * @memberof msg.GetMyDetailzResult
         * @static
         * @param {msg.IGetMyDetailzResult=} [properties] Properties to set
         * @returns {msg.GetMyDetailzResult} GetMyDetailzResult instance
         */
        GetMyDetailzResult.create = function create(properties) {
            return new GetMyDetailzResult(properties);
        };

        /**
         * Encodes the specified GetMyDetailzResult message. Does not implicitly {@link msg.GetMyDetailzResult.verify|verify} messages.
         * @function encode
         * @memberof msg.GetMyDetailzResult
         * @static
         * @param {msg.IGetMyDetailzResult} message GetMyDetailzResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetMyDetailzResult.encode = function encode(message, writer) {
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
            if (message.roomCard != null && Object.hasOwnProperty.call(message, "roomCard"))
                writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.roomCard);
            if (message.lastLoginIp != null && Object.hasOwnProperty.call(message, "lastLoginIp"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.lastLoginIp);
            return writer;
        };

        /**
         * Encodes the specified GetMyDetailzResult message, length delimited. Does not implicitly {@link msg.GetMyDetailzResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.GetMyDetailzResult
         * @static
         * @param {msg.IGetMyDetailzResult} message GetMyDetailzResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetMyDetailzResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetMyDetailzResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.GetMyDetailzResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.GetMyDetailzResult} GetMyDetailzResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetMyDetailzResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.GetMyDetailzResult();
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
                    message.roomCard = reader.sint32();
                    break;
                case 6:
                    message.lastLoginIp = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetMyDetailzResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.GetMyDetailzResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.GetMyDetailzResult} GetMyDetailzResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetMyDetailzResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetMyDetailzResult message.
         * @function verify
         * @memberof msg.GetMyDetailzResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetMyDetailzResult.verify = function verify(message) {
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
            if (message.roomCard != null && message.hasOwnProperty("roomCard"))
                if (!$util.isInteger(message.roomCard))
                    return "roomCard: integer expected";
            if (message.lastLoginIp != null && message.hasOwnProperty("lastLoginIp"))
                if (!$util.isString(message.lastLoginIp))
                    return "lastLoginIp: string expected";
            return null;
        };

        /**
         * Creates a GetMyDetailzResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.GetMyDetailzResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.GetMyDetailzResult} GetMyDetailzResult
         */
        GetMyDetailzResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.GetMyDetailzResult)
                return object;
            let message = new $root.msg.GetMyDetailzResult();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.userName != null)
                message.userName = String(object.userName);
            if (object.headImg != null)
                message.headImg = String(object.headImg);
            if (object.sex != null)
                message.sex = object.sex | 0;
            if (object.roomCard != null)
                message.roomCard = object.roomCard | 0;
            if (object.lastLoginIp != null)
                message.lastLoginIp = String(object.lastLoginIp);
            return message;
        };

        /**
         * Creates a plain object from a GetMyDetailzResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.GetMyDetailzResult
         * @static
         * @param {msg.GetMyDetailzResult} message GetMyDetailzResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetMyDetailzResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = 0;
                object.userName = "";
                object.headImg = "";
                object.sex = 0;
                object.roomCard = 0;
                object.lastLoginIp = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.userName != null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.headImg != null && message.hasOwnProperty("headImg"))
                object.headImg = message.headImg;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
            if (message.roomCard != null && message.hasOwnProperty("roomCard"))
                object.roomCard = message.roomCard;
            if (message.lastLoginIp != null && message.hasOwnProperty("lastLoginIp"))
                object.lastLoginIp = message.lastLoginIp;
            return object;
        };

        /**
         * Converts this GetMyDetailzResult to JSON.
         * @function toJSON
         * @memberof msg.GetMyDetailzResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetMyDetailzResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetMyDetailzResult;
    })();

    msg.GetJoinedRoomIdCmd = (function() {

        /**
         * Properties of a GetJoinedRoomIdCmd.
         * @memberof msg
         * @interface IGetJoinedRoomIdCmd
         */

        /**
         * Constructs a new GetJoinedRoomIdCmd.
         * @memberof msg
         * @classdesc Represents a GetJoinedRoomIdCmd.
         * @implements IGetJoinedRoomIdCmd
         * @constructor
         * @param {msg.IGetJoinedRoomIdCmd=} [properties] Properties to set
         */
        function GetJoinedRoomIdCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetJoinedRoomIdCmd instance using the specified properties.
         * @function create
         * @memberof msg.GetJoinedRoomIdCmd
         * @static
         * @param {msg.IGetJoinedRoomIdCmd=} [properties] Properties to set
         * @returns {msg.GetJoinedRoomIdCmd} GetJoinedRoomIdCmd instance
         */
        GetJoinedRoomIdCmd.create = function create(properties) {
            return new GetJoinedRoomIdCmd(properties);
        };

        /**
         * Encodes the specified GetJoinedRoomIdCmd message. Does not implicitly {@link msg.GetJoinedRoomIdCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.GetJoinedRoomIdCmd
         * @static
         * @param {msg.IGetJoinedRoomIdCmd} message GetJoinedRoomIdCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetJoinedRoomIdCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetJoinedRoomIdCmd message, length delimited. Does not implicitly {@link msg.GetJoinedRoomIdCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.GetJoinedRoomIdCmd
         * @static
         * @param {msg.IGetJoinedRoomIdCmd} message GetJoinedRoomIdCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetJoinedRoomIdCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetJoinedRoomIdCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.GetJoinedRoomIdCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.GetJoinedRoomIdCmd} GetJoinedRoomIdCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetJoinedRoomIdCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.GetJoinedRoomIdCmd();
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
         * Decodes a GetJoinedRoomIdCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.GetJoinedRoomIdCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.GetJoinedRoomIdCmd} GetJoinedRoomIdCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetJoinedRoomIdCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetJoinedRoomIdCmd message.
         * @function verify
         * @memberof msg.GetJoinedRoomIdCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetJoinedRoomIdCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetJoinedRoomIdCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.GetJoinedRoomIdCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.GetJoinedRoomIdCmd} GetJoinedRoomIdCmd
         */
        GetJoinedRoomIdCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.GetJoinedRoomIdCmd)
                return object;
            return new $root.msg.GetJoinedRoomIdCmd();
        };

        /**
         * Creates a plain object from a GetJoinedRoomIdCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.GetJoinedRoomIdCmd
         * @static
         * @param {msg.GetJoinedRoomIdCmd} message GetJoinedRoomIdCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetJoinedRoomIdCmd.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetJoinedRoomIdCmd to JSON.
         * @function toJSON
         * @memberof msg.GetJoinedRoomIdCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetJoinedRoomIdCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetJoinedRoomIdCmd;
    })();

    msg.GetJoinedRoomIdResult = (function() {

        /**
         * Properties of a GetJoinedRoomIdResult.
         * @memberof msg
         * @interface IGetJoinedRoomIdResult
         * @property {number|null} [roomId] GetJoinedRoomIdResult roomId
         */

        /**
         * Constructs a new GetJoinedRoomIdResult.
         * @memberof msg
         * @classdesc Represents a GetJoinedRoomIdResult.
         * @implements IGetJoinedRoomIdResult
         * @constructor
         * @param {msg.IGetJoinedRoomIdResult=} [properties] Properties to set
         */
        function GetJoinedRoomIdResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetJoinedRoomIdResult roomId.
         * @member {number} roomId
         * @memberof msg.GetJoinedRoomIdResult
         * @instance
         */
        GetJoinedRoomIdResult.prototype.roomId = 0;

        /**
         * Creates a new GetJoinedRoomIdResult instance using the specified properties.
         * @function create
         * @memberof msg.GetJoinedRoomIdResult
         * @static
         * @param {msg.IGetJoinedRoomIdResult=} [properties] Properties to set
         * @returns {msg.GetJoinedRoomIdResult} GetJoinedRoomIdResult instance
         */
        GetJoinedRoomIdResult.create = function create(properties) {
            return new GetJoinedRoomIdResult(properties);
        };

        /**
         * Encodes the specified GetJoinedRoomIdResult message. Does not implicitly {@link msg.GetJoinedRoomIdResult.verify|verify} messages.
         * @function encode
         * @memberof msg.GetJoinedRoomIdResult
         * @static
         * @param {msg.IGetJoinedRoomIdResult} message GetJoinedRoomIdResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetJoinedRoomIdResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified GetJoinedRoomIdResult message, length delimited. Does not implicitly {@link msg.GetJoinedRoomIdResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.GetJoinedRoomIdResult
         * @static
         * @param {msg.IGetJoinedRoomIdResult} message GetJoinedRoomIdResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetJoinedRoomIdResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetJoinedRoomIdResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.GetJoinedRoomIdResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.GetJoinedRoomIdResult} GetJoinedRoomIdResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetJoinedRoomIdResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.GetJoinedRoomIdResult();
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
         * Decodes a GetJoinedRoomIdResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.GetJoinedRoomIdResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.GetJoinedRoomIdResult} GetJoinedRoomIdResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetJoinedRoomIdResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetJoinedRoomIdResult message.
         * @function verify
         * @memberof msg.GetJoinedRoomIdResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetJoinedRoomIdResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId))
                    return "roomId: integer expected";
            return null;
        };

        /**
         * Creates a GetJoinedRoomIdResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.GetJoinedRoomIdResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.GetJoinedRoomIdResult} GetJoinedRoomIdResult
         */
        GetJoinedRoomIdResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.GetJoinedRoomIdResult)
                return object;
            let message = new $root.msg.GetJoinedRoomIdResult();
            if (object.roomId != null)
                message.roomId = object.roomId | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetJoinedRoomIdResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.GetJoinedRoomIdResult
         * @static
         * @param {msg.GetJoinedRoomIdResult} message GetJoinedRoomIdResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetJoinedRoomIdResult.toObject = function toObject(message, options) {
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
         * Converts this GetJoinedRoomIdResult to JSON.
         * @function toJSON
         * @memberof msg.GetJoinedRoomIdResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetJoinedRoomIdResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetJoinedRoomIdResult;
    })();

    msg.CreateRoomCmd = (function() {

        /**
         * Properties of a CreateRoomCmd.
         * @memberof msg
         * @interface ICreateRoomCmd
         * @property {number|null} [gameType0] CreateRoomCmd gameType0
         * @property {number|null} [gameType1] CreateRoomCmd gameType1
         * @property {Array.<msg.IKeyAndVal>|null} [ruleItem] CreateRoomCmd ruleItem
         */

        /**
         * Constructs a new CreateRoomCmd.
         * @memberof msg
         * @classdesc Represents a CreateRoomCmd.
         * @implements ICreateRoomCmd
         * @constructor
         * @param {msg.ICreateRoomCmd=} [properties] Properties to set
         */
        function CreateRoomCmd(properties) {
            this.ruleItem = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateRoomCmd gameType0.
         * @member {number} gameType0
         * @memberof msg.CreateRoomCmd
         * @instance
         */
        CreateRoomCmd.prototype.gameType0 = 0;

        /**
         * CreateRoomCmd gameType1.
         * @member {number} gameType1
         * @memberof msg.CreateRoomCmd
         * @instance
         */
        CreateRoomCmd.prototype.gameType1 = 0;

        /**
         * CreateRoomCmd ruleItem.
         * @member {Array.<msg.IKeyAndVal>} ruleItem
         * @memberof msg.CreateRoomCmd
         * @instance
         */
        CreateRoomCmd.prototype.ruleItem = $util.emptyArray;

        /**
         * Creates a new CreateRoomCmd instance using the specified properties.
         * @function create
         * @memberof msg.CreateRoomCmd
         * @static
         * @param {msg.ICreateRoomCmd=} [properties] Properties to set
         * @returns {msg.CreateRoomCmd} CreateRoomCmd instance
         */
        CreateRoomCmd.create = function create(properties) {
            return new CreateRoomCmd(properties);
        };

        /**
         * Encodes the specified CreateRoomCmd message. Does not implicitly {@link msg.CreateRoomCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.CreateRoomCmd
         * @static
         * @param {msg.ICreateRoomCmd} message CreateRoomCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameType0 != null && Object.hasOwnProperty.call(message, "gameType0"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.gameType0);
            if (message.gameType1 != null && Object.hasOwnProperty.call(message, "gameType1"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.gameType1);
            if (message.ruleItem != null && message.ruleItem.length)
                for (let i = 0; i < message.ruleItem.length; ++i)
                    $root.msg.KeyAndVal.encode(message.ruleItem[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CreateRoomCmd message, length delimited. Does not implicitly {@link msg.CreateRoomCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.CreateRoomCmd
         * @static
         * @param {msg.ICreateRoomCmd} message CreateRoomCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateRoomCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.CreateRoomCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.CreateRoomCmd} CreateRoomCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.CreateRoomCmd();
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
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateRoomCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.CreateRoomCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.CreateRoomCmd} CreateRoomCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateRoomCmd message.
         * @function verify
         * @memberof msg.CreateRoomCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateRoomCmd.verify = function verify(message) {
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
            return null;
        };

        /**
         * Creates a CreateRoomCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.CreateRoomCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.CreateRoomCmd} CreateRoomCmd
         */
        CreateRoomCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.CreateRoomCmd)
                return object;
            let message = new $root.msg.CreateRoomCmd();
            if (object.gameType0 != null)
                message.gameType0 = object.gameType0 | 0;
            if (object.gameType1 != null)
                message.gameType1 = object.gameType1 | 0;
            if (object.ruleItem) {
                if (!Array.isArray(object.ruleItem))
                    throw TypeError(".msg.CreateRoomCmd.ruleItem: array expected");
                message.ruleItem = [];
                for (let i = 0; i < object.ruleItem.length; ++i) {
                    if (typeof object.ruleItem[i] !== "object")
                        throw TypeError(".msg.CreateRoomCmd.ruleItem: object expected");
                    message.ruleItem[i] = $root.msg.KeyAndVal.fromObject(object.ruleItem[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateRoomCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.CreateRoomCmd
         * @static
         * @param {msg.CreateRoomCmd} message CreateRoomCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateRoomCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.ruleItem = [];
            if (options.defaults) {
                object.gameType0 = 0;
                object.gameType1 = 0;
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
            return object;
        };

        /**
         * Converts this CreateRoomCmd to JSON.
         * @function toJSON
         * @memberof msg.CreateRoomCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateRoomCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateRoomCmd;
    })();

    msg.CreateRoomResult = (function() {

        /**
         * Properties of a CreateRoomResult.
         * @memberof msg
         * @interface ICreateRoomResult
         * @property {number|null} [roomId] CreateRoomResult roomId
         */

        /**
         * Constructs a new CreateRoomResult.
         * @memberof msg
         * @classdesc Represents a CreateRoomResult.
         * @implements ICreateRoomResult
         * @constructor
         * @param {msg.ICreateRoomResult=} [properties] Properties to set
         */
        function CreateRoomResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateRoomResult roomId.
         * @member {number} roomId
         * @memberof msg.CreateRoomResult
         * @instance
         */
        CreateRoomResult.prototype.roomId = 0;

        /**
         * Creates a new CreateRoomResult instance using the specified properties.
         * @function create
         * @memberof msg.CreateRoomResult
         * @static
         * @param {msg.ICreateRoomResult=} [properties] Properties to set
         * @returns {msg.CreateRoomResult} CreateRoomResult instance
         */
        CreateRoomResult.create = function create(properties) {
            return new CreateRoomResult(properties);
        };

        /**
         * Encodes the specified CreateRoomResult message. Does not implicitly {@link msg.CreateRoomResult.verify|verify} messages.
         * @function encode
         * @memberof msg.CreateRoomResult
         * @static
         * @param {msg.ICreateRoomResult} message CreateRoomResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified CreateRoomResult message, length delimited. Does not implicitly {@link msg.CreateRoomResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.CreateRoomResult
         * @static
         * @param {msg.ICreateRoomResult} message CreateRoomResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateRoomResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.CreateRoomResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.CreateRoomResult} CreateRoomResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.CreateRoomResult();
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
         * Decodes a CreateRoomResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.CreateRoomResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.CreateRoomResult} CreateRoomResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateRoomResult message.
         * @function verify
         * @memberof msg.CreateRoomResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateRoomResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId))
                    return "roomId: integer expected";
            return null;
        };

        /**
         * Creates a CreateRoomResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.CreateRoomResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.CreateRoomResult} CreateRoomResult
         */
        CreateRoomResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.CreateRoomResult)
                return object;
            let message = new $root.msg.CreateRoomResult();
            if (object.roomId != null)
                message.roomId = object.roomId | 0;
            return message;
        };

        /**
         * Creates a plain object from a CreateRoomResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.CreateRoomResult
         * @static
         * @param {msg.CreateRoomResult} message CreateRoomResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateRoomResult.toObject = function toObject(message, options) {
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
         * Converts this CreateRoomResult to JSON.
         * @function toJSON
         * @memberof msg.CreateRoomResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateRoomResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateRoomResult;
    })();

    msg.JoinRoomCmd = (function() {

        /**
         * Properties of a JoinRoomCmd.
         * @memberof msg
         * @interface IJoinRoomCmd
         * @property {number|null} [roomId] JoinRoomCmd roomId
         */

        /**
         * Constructs a new JoinRoomCmd.
         * @memberof msg
         * @classdesc Represents a JoinRoomCmd.
         * @implements IJoinRoomCmd
         * @constructor
         * @param {msg.IJoinRoomCmd=} [properties] Properties to set
         */
        function JoinRoomCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinRoomCmd roomId.
         * @member {number} roomId
         * @memberof msg.JoinRoomCmd
         * @instance
         */
        JoinRoomCmd.prototype.roomId = 0;

        /**
         * Creates a new JoinRoomCmd instance using the specified properties.
         * @function create
         * @memberof msg.JoinRoomCmd
         * @static
         * @param {msg.IJoinRoomCmd=} [properties] Properties to set
         * @returns {msg.JoinRoomCmd} JoinRoomCmd instance
         */
        JoinRoomCmd.create = function create(properties) {
            return new JoinRoomCmd(properties);
        };

        /**
         * Encodes the specified JoinRoomCmd message. Does not implicitly {@link msg.JoinRoomCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.JoinRoomCmd
         * @static
         * @param {msg.IJoinRoomCmd} message JoinRoomCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified JoinRoomCmd message, length delimited. Does not implicitly {@link msg.JoinRoomCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.JoinRoomCmd
         * @static
         * @param {msg.IJoinRoomCmd} message JoinRoomCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinRoomCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.JoinRoomCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.JoinRoomCmd} JoinRoomCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.JoinRoomCmd();
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
         * Decodes a JoinRoomCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.JoinRoomCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.JoinRoomCmd} JoinRoomCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinRoomCmd message.
         * @function verify
         * @memberof msg.JoinRoomCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinRoomCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId))
                    return "roomId: integer expected";
            return null;
        };

        /**
         * Creates a JoinRoomCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.JoinRoomCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.JoinRoomCmd} JoinRoomCmd
         */
        JoinRoomCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.JoinRoomCmd)
                return object;
            let message = new $root.msg.JoinRoomCmd();
            if (object.roomId != null)
                message.roomId = object.roomId | 0;
            return message;
        };

        /**
         * Creates a plain object from a JoinRoomCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.JoinRoomCmd
         * @static
         * @param {msg.JoinRoomCmd} message JoinRoomCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinRoomCmd.toObject = function toObject(message, options) {
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
         * Converts this JoinRoomCmd to JSON.
         * @function toJSON
         * @memberof msg.JoinRoomCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinRoomCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinRoomCmd;
    })();

    msg.JoinRoomResult = (function() {

        /**
         * Properties of a JoinRoomResult.
         * @memberof msg
         * @interface IJoinRoomResult
         * @property {number|null} [roomId] JoinRoomResult roomId
         * @property {number|null} [gameType0] JoinRoomResult gameType0
         * @property {number|null} [gameType1] JoinRoomResult gameType1
         * @property {Array.<msg.IKeyAndVal>|null} [ruleItem] JoinRoomResult ruleItem
         */

        /**
         * Constructs a new JoinRoomResult.
         * @memberof msg
         * @classdesc Represents a JoinRoomResult.
         * @implements IJoinRoomResult
         * @constructor
         * @param {msg.IJoinRoomResult=} [properties] Properties to set
         */
        function JoinRoomResult(properties) {
            this.ruleItem = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinRoomResult roomId.
         * @member {number} roomId
         * @memberof msg.JoinRoomResult
         * @instance
         */
        JoinRoomResult.prototype.roomId = 0;

        /**
         * JoinRoomResult gameType0.
         * @member {number} gameType0
         * @memberof msg.JoinRoomResult
         * @instance
         */
        JoinRoomResult.prototype.gameType0 = 0;

        /**
         * JoinRoomResult gameType1.
         * @member {number} gameType1
         * @memberof msg.JoinRoomResult
         * @instance
         */
        JoinRoomResult.prototype.gameType1 = 0;

        /**
         * JoinRoomResult ruleItem.
         * @member {Array.<msg.IKeyAndVal>} ruleItem
         * @memberof msg.JoinRoomResult
         * @instance
         */
        JoinRoomResult.prototype.ruleItem = $util.emptyArray;

        /**
         * Creates a new JoinRoomResult instance using the specified properties.
         * @function create
         * @memberof msg.JoinRoomResult
         * @static
         * @param {msg.IJoinRoomResult=} [properties] Properties to set
         * @returns {msg.JoinRoomResult} JoinRoomResult instance
         */
        JoinRoomResult.create = function create(properties) {
            return new JoinRoomResult(properties);
        };

        /**
         * Encodes the specified JoinRoomResult message. Does not implicitly {@link msg.JoinRoomResult.verify|verify} messages.
         * @function encode
         * @memberof msg.JoinRoomResult
         * @static
         * @param {msg.IJoinRoomResult} message JoinRoomResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomResult.encode = function encode(message, writer) {
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
            return writer;
        };

        /**
         * Encodes the specified JoinRoomResult message, length delimited. Does not implicitly {@link msg.JoinRoomResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.JoinRoomResult
         * @static
         * @param {msg.IJoinRoomResult} message JoinRoomResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinRoomResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.JoinRoomResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.JoinRoomResult} JoinRoomResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.JoinRoomResult();
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
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinRoomResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.JoinRoomResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.JoinRoomResult} JoinRoomResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinRoomResult message.
         * @function verify
         * @memberof msg.JoinRoomResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinRoomResult.verify = function verify(message) {
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
            return null;
        };

        /**
         * Creates a JoinRoomResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.JoinRoomResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.JoinRoomResult} JoinRoomResult
         */
        JoinRoomResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.JoinRoomResult)
                return object;
            let message = new $root.msg.JoinRoomResult();
            if (object.roomId != null)
                message.roomId = object.roomId | 0;
            if (object.gameType0 != null)
                message.gameType0 = object.gameType0 | 0;
            if (object.gameType1 != null)
                message.gameType1 = object.gameType1 | 0;
            if (object.ruleItem) {
                if (!Array.isArray(object.ruleItem))
                    throw TypeError(".msg.JoinRoomResult.ruleItem: array expected");
                message.ruleItem = [];
                for (let i = 0; i < object.ruleItem.length; ++i) {
                    if (typeof object.ruleItem[i] !== "object")
                        throw TypeError(".msg.JoinRoomResult.ruleItem: object expected");
                    message.ruleItem[i] = $root.msg.KeyAndVal.fromObject(object.ruleItem[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JoinRoomResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.JoinRoomResult
         * @static
         * @param {msg.JoinRoomResult} message JoinRoomResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinRoomResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.ruleItem = [];
            if (options.defaults) {
                object.roomId = 0;
                object.gameType0 = 0;
                object.gameType1 = 0;
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
            return object;
        };

        /**
         * Converts this JoinRoomResult to JSON.
         * @function toJSON
         * @memberof msg.JoinRoomResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinRoomResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinRoomResult;
    })();

    return msg;
})();

module.exports = $root;
