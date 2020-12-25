/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

import * as $protobuf from "./comm.protobufjs";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots.comm || ($protobuf.roots.comm = {});

export const msg = $root.msg = (() => {

    /**
     * Namespace msg.
     * @exports msg
     * @namespace
     */
    const msg = {};

    /**
     * CommMsgCodeDef enum.
     * @name msg.CommMsgCodeDef
     * @enum {number}
     * @property {number} _Dummy=0 _Dummy value
     * @property {number} _PingCmd=1 _PingCmd value
     * @property {number} _PingResult=2 _PingResult value
     * @property {number} _ReconnCmd=3 _ReconnCmd value
     * @property {number} _ReconnResult=4 _ReconnResult value
     * @property {number} _SuccezzHintResult=11 _SuccezzHintResult value
     * @property {number} _ErrorHintResult=12 _ErrorHintResult value
     * @property {number} _CheckInTicketCmd=13 _CheckInTicketCmd value
     * @property {number} _CheckInTicketResult=14 _CheckInTicketResult value
     * @property {number} _KickOutUserResult=44 _KickOutUserResult value
     */
    msg.CommMsgCodeDef = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "_Dummy"] = 0;
        values[valuesById[1] = "_PingCmd"] = 1;
        values[valuesById[2] = "_PingResult"] = 2;
        values[valuesById[3] = "_ReconnCmd"] = 3;
        values[valuesById[4] = "_ReconnResult"] = 4;
        values[valuesById[11] = "_SuccezzHintResult"] = 11;
        values[valuesById[12] = "_ErrorHintResult"] = 12;
        values[valuesById[13] = "_CheckInTicketCmd"] = 13;
        values[valuesById[14] = "_CheckInTicketResult"] = 14;
        values[valuesById[44] = "_KickOutUserResult"] = 44;
        return values;
    })();

    msg.PingCmd = (function() {

        /**
         * Properties of a PingCmd.
         * @memberof msg
         * @interface IPingCmd
         * @property {number|null} [pingId] PingCmd pingId
         */

        /**
         * Constructs a new PingCmd.
         * @memberof msg
         * @classdesc Represents a PingCmd.
         * @implements IPingCmd
         * @constructor
         * @param {msg.IPingCmd=} [properties] Properties to set
         */
        function PingCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PingCmd pingId.
         * @member {number} pingId
         * @memberof msg.PingCmd
         * @instance
         */
        PingCmd.prototype.pingId = 0;

        /**
         * Creates a new PingCmd instance using the specified properties.
         * @function create
         * @memberof msg.PingCmd
         * @static
         * @param {msg.IPingCmd=} [properties] Properties to set
         * @returns {msg.PingCmd} PingCmd instance
         */
        PingCmd.create = function create(properties) {
            return new PingCmd(properties);
        };

        /**
         * Encodes the specified PingCmd message. Does not implicitly {@link msg.PingCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.PingCmd
         * @static
         * @param {msg.IPingCmd} message PingCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pingId != null && Object.hasOwnProperty.call(message, "pingId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.pingId);
            return writer;
        };

        /**
         * Encodes the specified PingCmd message, length delimited. Does not implicitly {@link msg.PingCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PingCmd
         * @static
         * @param {msg.IPingCmd} message PingCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PingCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PingCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PingCmd} PingCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PingCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pingId = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PingCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PingCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PingCmd} PingCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PingCmd message.
         * @function verify
         * @memberof msg.PingCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PingCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pingId != null && message.hasOwnProperty("pingId"))
                if (!$util.isInteger(message.pingId))
                    return "pingId: integer expected";
            return null;
        };

        /**
         * Creates a PingCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PingCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PingCmd} PingCmd
         */
        PingCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PingCmd)
                return object;
            let message = new $root.msg.PingCmd();
            if (object.pingId != null)
                message.pingId = object.pingId | 0;
            return message;
        };

        /**
         * Creates a plain object from a PingCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PingCmd
         * @static
         * @param {msg.PingCmd} message PingCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PingCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.pingId = 0;
            if (message.pingId != null && message.hasOwnProperty("pingId"))
                object.pingId = message.pingId;
            return object;
        };

        /**
         * Converts this PingCmd to JSON.
         * @function toJSON
         * @memberof msg.PingCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PingCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PingCmd;
    })();

    msg.PingResult = (function() {

        /**
         * Properties of a PingResult.
         * @memberof msg
         * @interface IPingResult
         * @property {number|null} [pingId] PingResult pingId
         */

        /**
         * Constructs a new PingResult.
         * @memberof msg
         * @classdesc Represents a PingResult.
         * @implements IPingResult
         * @constructor
         * @param {msg.IPingResult=} [properties] Properties to set
         */
        function PingResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PingResult pingId.
         * @member {number} pingId
         * @memberof msg.PingResult
         * @instance
         */
        PingResult.prototype.pingId = 0;

        /**
         * Creates a new PingResult instance using the specified properties.
         * @function create
         * @memberof msg.PingResult
         * @static
         * @param {msg.IPingResult=} [properties] Properties to set
         * @returns {msg.PingResult} PingResult instance
         */
        PingResult.create = function create(properties) {
            return new PingResult(properties);
        };

        /**
         * Encodes the specified PingResult message. Does not implicitly {@link msg.PingResult.verify|verify} messages.
         * @function encode
         * @memberof msg.PingResult
         * @static
         * @param {msg.IPingResult} message PingResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pingId != null && Object.hasOwnProperty.call(message, "pingId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.pingId);
            return writer;
        };

        /**
         * Encodes the specified PingResult message, length delimited. Does not implicitly {@link msg.PingResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PingResult
         * @static
         * @param {msg.IPingResult} message PingResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PingResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PingResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PingResult} PingResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PingResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pingId = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PingResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PingResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PingResult} PingResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PingResult message.
         * @function verify
         * @memberof msg.PingResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PingResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pingId != null && message.hasOwnProperty("pingId"))
                if (!$util.isInteger(message.pingId))
                    return "pingId: integer expected";
            return null;
        };

        /**
         * Creates a PingResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PingResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PingResult} PingResult
         */
        PingResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PingResult)
                return object;
            let message = new $root.msg.PingResult();
            if (object.pingId != null)
                message.pingId = object.pingId | 0;
            return message;
        };

        /**
         * Creates a plain object from a PingResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PingResult
         * @static
         * @param {msg.PingResult} message PingResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PingResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.pingId = 0;
            if (message.pingId != null && message.hasOwnProperty("pingId"))
                object.pingId = message.pingId;
            return object;
        };

        /**
         * Converts this PingResult to JSON.
         * @function toJSON
         * @memberof msg.PingResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PingResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PingResult;
    })();

    msg.ReconnCmd = (function() {

        /**
         * Properties of a ReconnCmd.
         * @memberof msg
         * @interface IReconnCmd
         * @property {number|null} [userId] ReconnCmd userId
         * @property {string|null} [ukeyStr] ReconnCmd ukeyStr
         * @property {number|Long|null} [ukeyExpireAt] ReconnCmd ukeyExpireAt
         */

        /**
         * Constructs a new ReconnCmd.
         * @memberof msg
         * @classdesc Represents a ReconnCmd.
         * @implements IReconnCmd
         * @constructor
         * @param {msg.IReconnCmd=} [properties] Properties to set
         */
        function ReconnCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReconnCmd userId.
         * @member {number} userId
         * @memberof msg.ReconnCmd
         * @instance
         */
        ReconnCmd.prototype.userId = 0;

        /**
         * ReconnCmd ukeyStr.
         * @member {string} ukeyStr
         * @memberof msg.ReconnCmd
         * @instance
         */
        ReconnCmd.prototype.ukeyStr = "";

        /**
         * ReconnCmd ukeyExpireAt.
         * @member {number|Long} ukeyExpireAt
         * @memberof msg.ReconnCmd
         * @instance
         */
        ReconnCmd.prototype.ukeyExpireAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ReconnCmd instance using the specified properties.
         * @function create
         * @memberof msg.ReconnCmd
         * @static
         * @param {msg.IReconnCmd=} [properties] Properties to set
         * @returns {msg.ReconnCmd} ReconnCmd instance
         */
        ReconnCmd.create = function create(properties) {
            return new ReconnCmd(properties);
        };

        /**
         * Encodes the specified ReconnCmd message. Does not implicitly {@link msg.ReconnCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.ReconnCmd
         * @static
         * @param {msg.IReconnCmd} message ReconnCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReconnCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userId);
            if (message.ukeyStr != null && Object.hasOwnProperty.call(message, "ukeyStr"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ukeyStr);
            if (message.ukeyExpireAt != null && Object.hasOwnProperty.call(message, "ukeyExpireAt"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint64(message.ukeyExpireAt);
            return writer;
        };

        /**
         * Encodes the specified ReconnCmd message, length delimited. Does not implicitly {@link msg.ReconnCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.ReconnCmd
         * @static
         * @param {msg.IReconnCmd} message ReconnCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReconnCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReconnCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.ReconnCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.ReconnCmd} ReconnCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReconnCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.ReconnCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.sint32();
                    break;
                case 2:
                    message.ukeyStr = reader.string();
                    break;
                case 3:
                    message.ukeyExpireAt = reader.sint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReconnCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.ReconnCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.ReconnCmd} ReconnCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReconnCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReconnCmd message.
         * @function verify
         * @memberof msg.ReconnCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReconnCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.ukeyStr != null && message.hasOwnProperty("ukeyStr"))
                if (!$util.isString(message.ukeyStr))
                    return "ukeyStr: string expected";
            if (message.ukeyExpireAt != null && message.hasOwnProperty("ukeyExpireAt"))
                if (!$util.isInteger(message.ukeyExpireAt) && !(message.ukeyExpireAt && $util.isInteger(message.ukeyExpireAt.low) && $util.isInteger(message.ukeyExpireAt.high)))
                    return "ukeyExpireAt: integer|Long expected";
            return null;
        };

        /**
         * Creates a ReconnCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.ReconnCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.ReconnCmd} ReconnCmd
         */
        ReconnCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.ReconnCmd)
                return object;
            let message = new $root.msg.ReconnCmd();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.ukeyStr != null)
                message.ukeyStr = String(object.ukeyStr);
            if (object.ukeyExpireAt != null)
                if ($util.Long)
                    (message.ukeyExpireAt = $util.Long.fromValue(object.ukeyExpireAt)).unsigned = false;
                else if (typeof object.ukeyExpireAt === "string")
                    message.ukeyExpireAt = parseInt(object.ukeyExpireAt, 10);
                else if (typeof object.ukeyExpireAt === "number")
                    message.ukeyExpireAt = object.ukeyExpireAt;
                else if (typeof object.ukeyExpireAt === "object")
                    message.ukeyExpireAt = new $util.LongBits(object.ukeyExpireAt.low >>> 0, object.ukeyExpireAt.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ReconnCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.ReconnCmd
         * @static
         * @param {msg.ReconnCmd} message ReconnCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReconnCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = 0;
                object.ukeyStr = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.ukeyExpireAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ukeyExpireAt = options.longs === String ? "0" : 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.ukeyStr != null && message.hasOwnProperty("ukeyStr"))
                object.ukeyStr = message.ukeyStr;
            if (message.ukeyExpireAt != null && message.hasOwnProperty("ukeyExpireAt"))
                if (typeof message.ukeyExpireAt === "number")
                    object.ukeyExpireAt = options.longs === String ? String(message.ukeyExpireAt) : message.ukeyExpireAt;
                else
                    object.ukeyExpireAt = options.longs === String ? $util.Long.prototype.toString.call(message.ukeyExpireAt) : options.longs === Number ? new $util.LongBits(message.ukeyExpireAt.low >>> 0, message.ukeyExpireAt.high >>> 0).toNumber() : message.ukeyExpireAt;
            return object;
        };

        /**
         * Converts this ReconnCmd to JSON.
         * @function toJSON
         * @memberof msg.ReconnCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReconnCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReconnCmd;
    })();

    msg.ReconnResult = (function() {

        /**
         * Properties of a ReconnResult.
         * @memberof msg
         * @interface IReconnResult
         * @property {number|null} [userId] ReconnResult userId
         * @property {string|null} [ukeyStr] ReconnResult ukeyStr
         * @property {number|Long|null} [ukeyExpireAt] ReconnResult ukeyExpireAt
         * @property {boolean|null} [ok] ReconnResult ok
         */

        /**
         * Constructs a new ReconnResult.
         * @memberof msg
         * @classdesc Represents a ReconnResult.
         * @implements IReconnResult
         * @constructor
         * @param {msg.IReconnResult=} [properties] Properties to set
         */
        function ReconnResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReconnResult userId.
         * @member {number} userId
         * @memberof msg.ReconnResult
         * @instance
         */
        ReconnResult.prototype.userId = 0;

        /**
         * ReconnResult ukeyStr.
         * @member {string} ukeyStr
         * @memberof msg.ReconnResult
         * @instance
         */
        ReconnResult.prototype.ukeyStr = "";

        /**
         * ReconnResult ukeyExpireAt.
         * @member {number|Long} ukeyExpireAt
         * @memberof msg.ReconnResult
         * @instance
         */
        ReconnResult.prototype.ukeyExpireAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReconnResult ok.
         * @member {boolean} ok
         * @memberof msg.ReconnResult
         * @instance
         */
        ReconnResult.prototype.ok = false;

        /**
         * Creates a new ReconnResult instance using the specified properties.
         * @function create
         * @memberof msg.ReconnResult
         * @static
         * @param {msg.IReconnResult=} [properties] Properties to set
         * @returns {msg.ReconnResult} ReconnResult instance
         */
        ReconnResult.create = function create(properties) {
            return new ReconnResult(properties);
        };

        /**
         * Encodes the specified ReconnResult message. Does not implicitly {@link msg.ReconnResult.verify|verify} messages.
         * @function encode
         * @memberof msg.ReconnResult
         * @static
         * @param {msg.IReconnResult} message ReconnResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReconnResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userId);
            if (message.ukeyStr != null && Object.hasOwnProperty.call(message, "ukeyStr"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ukeyStr);
            if (message.ukeyExpireAt != null && Object.hasOwnProperty.call(message, "ukeyExpireAt"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint64(message.ukeyExpireAt);
            if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.ok);
            return writer;
        };

        /**
         * Encodes the specified ReconnResult message, length delimited. Does not implicitly {@link msg.ReconnResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.ReconnResult
         * @static
         * @param {msg.IReconnResult} message ReconnResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReconnResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReconnResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.ReconnResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.ReconnResult} ReconnResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReconnResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.ReconnResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.sint32();
                    break;
                case 2:
                    message.ukeyStr = reader.string();
                    break;
                case 3:
                    message.ukeyExpireAt = reader.sint64();
                    break;
                case 4:
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
         * Decodes a ReconnResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.ReconnResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.ReconnResult} ReconnResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReconnResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReconnResult message.
         * @function verify
         * @memberof msg.ReconnResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReconnResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.ukeyStr != null && message.hasOwnProperty("ukeyStr"))
                if (!$util.isString(message.ukeyStr))
                    return "ukeyStr: string expected";
            if (message.ukeyExpireAt != null && message.hasOwnProperty("ukeyExpireAt"))
                if (!$util.isInteger(message.ukeyExpireAt) && !(message.ukeyExpireAt && $util.isInteger(message.ukeyExpireAt.low) && $util.isInteger(message.ukeyExpireAt.high)))
                    return "ukeyExpireAt: integer|Long expected";
            if (message.ok != null && message.hasOwnProperty("ok"))
                if (typeof message.ok !== "boolean")
                    return "ok: boolean expected";
            return null;
        };

        /**
         * Creates a ReconnResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.ReconnResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.ReconnResult} ReconnResult
         */
        ReconnResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.ReconnResult)
                return object;
            let message = new $root.msg.ReconnResult();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.ukeyStr != null)
                message.ukeyStr = String(object.ukeyStr);
            if (object.ukeyExpireAt != null)
                if ($util.Long)
                    (message.ukeyExpireAt = $util.Long.fromValue(object.ukeyExpireAt)).unsigned = false;
                else if (typeof object.ukeyExpireAt === "string")
                    message.ukeyExpireAt = parseInt(object.ukeyExpireAt, 10);
                else if (typeof object.ukeyExpireAt === "number")
                    message.ukeyExpireAt = object.ukeyExpireAt;
                else if (typeof object.ukeyExpireAt === "object")
                    message.ukeyExpireAt = new $util.LongBits(object.ukeyExpireAt.low >>> 0, object.ukeyExpireAt.high >>> 0).toNumber();
            if (object.ok != null)
                message.ok = Boolean(object.ok);
            return message;
        };

        /**
         * Creates a plain object from a ReconnResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.ReconnResult
         * @static
         * @param {msg.ReconnResult} message ReconnResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReconnResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = 0;
                object.ukeyStr = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.ukeyExpireAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ukeyExpireAt = options.longs === String ? "0" : 0;
                object.ok = false;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.ukeyStr != null && message.hasOwnProperty("ukeyStr"))
                object.ukeyStr = message.ukeyStr;
            if (message.ukeyExpireAt != null && message.hasOwnProperty("ukeyExpireAt"))
                if (typeof message.ukeyExpireAt === "number")
                    object.ukeyExpireAt = options.longs === String ? String(message.ukeyExpireAt) : message.ukeyExpireAt;
                else
                    object.ukeyExpireAt = options.longs === String ? $util.Long.prototype.toString.call(message.ukeyExpireAt) : options.longs === Number ? new $util.LongBits(message.ukeyExpireAt.low >>> 0, message.ukeyExpireAt.high >>> 0).toNumber() : message.ukeyExpireAt;
            if (message.ok != null && message.hasOwnProperty("ok"))
                object.ok = message.ok;
            return object;
        };

        /**
         * Converts this ReconnResult to JSON.
         * @function toJSON
         * @memberof msg.ReconnResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReconnResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReconnResult;
    })();

    msg.SuccezzHintResult = (function() {

        /**
         * Properties of a SuccezzHintResult.
         * @memberof msg
         * @interface ISuccezzHintResult
         * @property {string|null} [succezzInfo] SuccezzHintResult succezzInfo
         */

        /**
         * Constructs a new SuccezzHintResult.
         * @memberof msg
         * @classdesc Represents a SuccezzHintResult.
         * @implements ISuccezzHintResult
         * @constructor
         * @param {msg.ISuccezzHintResult=} [properties] Properties to set
         */
        function SuccezzHintResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuccezzHintResult succezzInfo.
         * @member {string} succezzInfo
         * @memberof msg.SuccezzHintResult
         * @instance
         */
        SuccezzHintResult.prototype.succezzInfo = "";

        /**
         * Creates a new SuccezzHintResult instance using the specified properties.
         * @function create
         * @memberof msg.SuccezzHintResult
         * @static
         * @param {msg.ISuccezzHintResult=} [properties] Properties to set
         * @returns {msg.SuccezzHintResult} SuccezzHintResult instance
         */
        SuccezzHintResult.create = function create(properties) {
            return new SuccezzHintResult(properties);
        };

        /**
         * Encodes the specified SuccezzHintResult message. Does not implicitly {@link msg.SuccezzHintResult.verify|verify} messages.
         * @function encode
         * @memberof msg.SuccezzHintResult
         * @static
         * @param {msg.ISuccezzHintResult} message SuccezzHintResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuccezzHintResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.succezzInfo != null && Object.hasOwnProperty.call(message, "succezzInfo"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.succezzInfo);
            return writer;
        };

        /**
         * Encodes the specified SuccezzHintResult message, length delimited. Does not implicitly {@link msg.SuccezzHintResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.SuccezzHintResult
         * @static
         * @param {msg.ISuccezzHintResult} message SuccezzHintResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuccezzHintResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuccezzHintResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.SuccezzHintResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.SuccezzHintResult} SuccezzHintResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuccezzHintResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.SuccezzHintResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.succezzInfo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SuccezzHintResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.SuccezzHintResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.SuccezzHintResult} SuccezzHintResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuccezzHintResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuccezzHintResult message.
         * @function verify
         * @memberof msg.SuccezzHintResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuccezzHintResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.succezzInfo != null && message.hasOwnProperty("succezzInfo"))
                if (!$util.isString(message.succezzInfo))
                    return "succezzInfo: string expected";
            return null;
        };

        /**
         * Creates a SuccezzHintResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.SuccezzHintResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.SuccezzHintResult} SuccezzHintResult
         */
        SuccezzHintResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.SuccezzHintResult)
                return object;
            let message = new $root.msg.SuccezzHintResult();
            if (object.succezzInfo != null)
                message.succezzInfo = String(object.succezzInfo);
            return message;
        };

        /**
         * Creates a plain object from a SuccezzHintResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.SuccezzHintResult
         * @static
         * @param {msg.SuccezzHintResult} message SuccezzHintResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuccezzHintResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.succezzInfo = "";
            if (message.succezzInfo != null && message.hasOwnProperty("succezzInfo"))
                object.succezzInfo = message.succezzInfo;
            return object;
        };

        /**
         * Converts this SuccezzHintResult to JSON.
         * @function toJSON
         * @memberof msg.SuccezzHintResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuccezzHintResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuccezzHintResult;
    })();

    msg.ErrorHintResult = (function() {

        /**
         * Properties of an ErrorHintResult.
         * @memberof msg
         * @interface IErrorHintResult
         * @property {number|null} [errorCode] ErrorHintResult errorCode
         * @property {string|null} [errorMsg] ErrorHintResult errorMsg
         */

        /**
         * Constructs a new ErrorHintResult.
         * @memberof msg
         * @classdesc Represents an ErrorHintResult.
         * @implements IErrorHintResult
         * @constructor
         * @param {msg.IErrorHintResult=} [properties] Properties to set
         */
        function ErrorHintResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ErrorHintResult errorCode.
         * @member {number} errorCode
         * @memberof msg.ErrorHintResult
         * @instance
         */
        ErrorHintResult.prototype.errorCode = 0;

        /**
         * ErrorHintResult errorMsg.
         * @member {string} errorMsg
         * @memberof msg.ErrorHintResult
         * @instance
         */
        ErrorHintResult.prototype.errorMsg = "";

        /**
         * Creates a new ErrorHintResult instance using the specified properties.
         * @function create
         * @memberof msg.ErrorHintResult
         * @static
         * @param {msg.IErrorHintResult=} [properties] Properties to set
         * @returns {msg.ErrorHintResult} ErrorHintResult instance
         */
        ErrorHintResult.create = function create(properties) {
            return new ErrorHintResult(properties);
        };

        /**
         * Encodes the specified ErrorHintResult message. Does not implicitly {@link msg.ErrorHintResult.verify|verify} messages.
         * @function encode
         * @memberof msg.ErrorHintResult
         * @static
         * @param {msg.IErrorHintResult} message ErrorHintResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ErrorHintResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errorCode != null && Object.hasOwnProperty.call(message, "errorCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.errorCode);
            if (message.errorMsg != null && Object.hasOwnProperty.call(message, "errorMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorMsg);
            return writer;
        };

        /**
         * Encodes the specified ErrorHintResult message, length delimited. Does not implicitly {@link msg.ErrorHintResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.ErrorHintResult
         * @static
         * @param {msg.IErrorHintResult} message ErrorHintResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ErrorHintResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ErrorHintResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.ErrorHintResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.ErrorHintResult} ErrorHintResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ErrorHintResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.ErrorHintResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errorCode = reader.sint32();
                    break;
                case 2:
                    message.errorMsg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ErrorHintResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.ErrorHintResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.ErrorHintResult} ErrorHintResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ErrorHintResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ErrorHintResult message.
         * @function verify
         * @memberof msg.ErrorHintResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ErrorHintResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                if (!$util.isInteger(message.errorCode))
                    return "errorCode: integer expected";
            if (message.errorMsg != null && message.hasOwnProperty("errorMsg"))
                if (!$util.isString(message.errorMsg))
                    return "errorMsg: string expected";
            return null;
        };

        /**
         * Creates an ErrorHintResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.ErrorHintResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.ErrorHintResult} ErrorHintResult
         */
        ErrorHintResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.ErrorHintResult)
                return object;
            let message = new $root.msg.ErrorHintResult();
            if (object.errorCode != null)
                message.errorCode = object.errorCode | 0;
            if (object.errorMsg != null)
                message.errorMsg = String(object.errorMsg);
            return message;
        };

        /**
         * Creates a plain object from an ErrorHintResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.ErrorHintResult
         * @static
         * @param {msg.ErrorHintResult} message ErrorHintResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ErrorHintResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.errorCode = 0;
                object.errorMsg = "";
            }
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                object.errorCode = message.errorCode;
            if (message.errorMsg != null && message.hasOwnProperty("errorMsg"))
                object.errorMsg = message.errorMsg;
            return object;
        };

        /**
         * Converts this ErrorHintResult to JSON.
         * @function toJSON
         * @memberof msg.ErrorHintResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ErrorHintResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ErrorHintResult;
    })();

    msg.CheckInTicketCmd = (function() {

        /**
         * Properties of a CheckInTicketCmd.
         * @memberof msg
         * @interface ICheckInTicketCmd
         * @property {number|null} [userId] CheckInTicketCmd userId
         * @property {string|null} [ticket] CheckInTicketCmd ticket
         */

        /**
         * Constructs a new CheckInTicketCmd.
         * @memberof msg
         * @classdesc Represents a CheckInTicketCmd.
         * @implements ICheckInTicketCmd
         * @constructor
         * @param {msg.ICheckInTicketCmd=} [properties] Properties to set
         */
        function CheckInTicketCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CheckInTicketCmd userId.
         * @member {number} userId
         * @memberof msg.CheckInTicketCmd
         * @instance
         */
        CheckInTicketCmd.prototype.userId = 0;

        /**
         * CheckInTicketCmd ticket.
         * @member {string} ticket
         * @memberof msg.CheckInTicketCmd
         * @instance
         */
        CheckInTicketCmd.prototype.ticket = "";

        /**
         * Creates a new CheckInTicketCmd instance using the specified properties.
         * @function create
         * @memberof msg.CheckInTicketCmd
         * @static
         * @param {msg.ICheckInTicketCmd=} [properties] Properties to set
         * @returns {msg.CheckInTicketCmd} CheckInTicketCmd instance
         */
        CheckInTicketCmd.create = function create(properties) {
            return new CheckInTicketCmd(properties);
        };

        /**
         * Encodes the specified CheckInTicketCmd message. Does not implicitly {@link msg.CheckInTicketCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.CheckInTicketCmd
         * @static
         * @param {msg.ICheckInTicketCmd} message CheckInTicketCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckInTicketCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userId);
            if (message.ticket != null && Object.hasOwnProperty.call(message, "ticket"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ticket);
            return writer;
        };

        /**
         * Encodes the specified CheckInTicketCmd message, length delimited. Does not implicitly {@link msg.CheckInTicketCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.CheckInTicketCmd
         * @static
         * @param {msg.ICheckInTicketCmd} message CheckInTicketCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckInTicketCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CheckInTicketCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.CheckInTicketCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.CheckInTicketCmd} CheckInTicketCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckInTicketCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.CheckInTicketCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.sint32();
                    break;
                case 2:
                    message.ticket = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CheckInTicketCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.CheckInTicketCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.CheckInTicketCmd} CheckInTicketCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckInTicketCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CheckInTicketCmd message.
         * @function verify
         * @memberof msg.CheckInTicketCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CheckInTicketCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                if (!$util.isString(message.ticket))
                    return "ticket: string expected";
            return null;
        };

        /**
         * Creates a CheckInTicketCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.CheckInTicketCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.CheckInTicketCmd} CheckInTicketCmd
         */
        CheckInTicketCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.CheckInTicketCmd)
                return object;
            let message = new $root.msg.CheckInTicketCmd();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.ticket != null)
                message.ticket = String(object.ticket);
            return message;
        };

        /**
         * Creates a plain object from a CheckInTicketCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.CheckInTicketCmd
         * @static
         * @param {msg.CheckInTicketCmd} message CheckInTicketCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CheckInTicketCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = 0;
                object.ticket = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                object.ticket = message.ticket;
            return object;
        };

        /**
         * Converts this CheckInTicketCmd to JSON.
         * @function toJSON
         * @memberof msg.CheckInTicketCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CheckInTicketCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CheckInTicketCmd;
    })();

    msg.CheckInTicketResult = (function() {

        /**
         * Properties of a CheckInTicketResult.
         * @memberof msg
         * @interface ICheckInTicketResult
         * @property {number|null} [userId] CheckInTicketResult userId
         * @property {boolean|null} [succezz] CheckInTicketResult succezz
         */

        /**
         * Constructs a new CheckInTicketResult.
         * @memberof msg
         * @classdesc Represents a CheckInTicketResult.
         * @implements ICheckInTicketResult
         * @constructor
         * @param {msg.ICheckInTicketResult=} [properties] Properties to set
         */
        function CheckInTicketResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CheckInTicketResult userId.
         * @member {number} userId
         * @memberof msg.CheckInTicketResult
         * @instance
         */
        CheckInTicketResult.prototype.userId = 0;

        /**
         * CheckInTicketResult succezz.
         * @member {boolean} succezz
         * @memberof msg.CheckInTicketResult
         * @instance
         */
        CheckInTicketResult.prototype.succezz = false;

        /**
         * Creates a new CheckInTicketResult instance using the specified properties.
         * @function create
         * @memberof msg.CheckInTicketResult
         * @static
         * @param {msg.ICheckInTicketResult=} [properties] Properties to set
         * @returns {msg.CheckInTicketResult} CheckInTicketResult instance
         */
        CheckInTicketResult.create = function create(properties) {
            return new CheckInTicketResult(properties);
        };

        /**
         * Encodes the specified CheckInTicketResult message. Does not implicitly {@link msg.CheckInTicketResult.verify|verify} messages.
         * @function encode
         * @memberof msg.CheckInTicketResult
         * @static
         * @param {msg.ICheckInTicketResult} message CheckInTicketResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckInTicketResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userId);
            if (message.succezz != null && Object.hasOwnProperty.call(message, "succezz"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.succezz);
            return writer;
        };

        /**
         * Encodes the specified CheckInTicketResult message, length delimited. Does not implicitly {@link msg.CheckInTicketResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.CheckInTicketResult
         * @static
         * @param {msg.ICheckInTicketResult} message CheckInTicketResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckInTicketResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CheckInTicketResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.CheckInTicketResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.CheckInTicketResult} CheckInTicketResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckInTicketResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.CheckInTicketResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.sint32();
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
         * Decodes a CheckInTicketResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.CheckInTicketResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.CheckInTicketResult} CheckInTicketResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckInTicketResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CheckInTicketResult message.
         * @function verify
         * @memberof msg.CheckInTicketResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CheckInTicketResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.succezz != null && message.hasOwnProperty("succezz"))
                if (typeof message.succezz !== "boolean")
                    return "succezz: boolean expected";
            return null;
        };

        /**
         * Creates a CheckInTicketResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.CheckInTicketResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.CheckInTicketResult} CheckInTicketResult
         */
        CheckInTicketResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.CheckInTicketResult)
                return object;
            let message = new $root.msg.CheckInTicketResult();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.succezz != null)
                message.succezz = Boolean(object.succezz);
            return message;
        };

        /**
         * Creates a plain object from a CheckInTicketResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.CheckInTicketResult
         * @static
         * @param {msg.CheckInTicketResult} message CheckInTicketResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CheckInTicketResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = 0;
                object.succezz = false;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.succezz != null && message.hasOwnProperty("succezz"))
                object.succezz = message.succezz;
            return object;
        };

        /**
         * Converts this CheckInTicketResult to JSON.
         * @function toJSON
         * @memberof msg.CheckInTicketResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CheckInTicketResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CheckInTicketResult;
    })();

    msg.KickOutUserResult = (function() {

        /**
         * Properties of a KickOutUserResult.
         * @memberof msg
         * @interface IKickOutUserResult
         * @property {string|null} [reason] KickOutUserResult reason
         */

        /**
         * Constructs a new KickOutUserResult.
         * @memberof msg
         * @classdesc Represents a KickOutUserResult.
         * @implements IKickOutUserResult
         * @constructor
         * @param {msg.IKickOutUserResult=} [properties] Properties to set
         */
        function KickOutUserResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KickOutUserResult reason.
         * @member {string} reason
         * @memberof msg.KickOutUserResult
         * @instance
         */
        KickOutUserResult.prototype.reason = "";

        /**
         * Creates a new KickOutUserResult instance using the specified properties.
         * @function create
         * @memberof msg.KickOutUserResult
         * @static
         * @param {msg.IKickOutUserResult=} [properties] Properties to set
         * @returns {msg.KickOutUserResult} KickOutUserResult instance
         */
        KickOutUserResult.create = function create(properties) {
            return new KickOutUserResult(properties);
        };

        /**
         * Encodes the specified KickOutUserResult message. Does not implicitly {@link msg.KickOutUserResult.verify|verify} messages.
         * @function encode
         * @memberof msg.KickOutUserResult
         * @static
         * @param {msg.IKickOutUserResult} message KickOutUserResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickOutUserResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.reason);
            return writer;
        };

        /**
         * Encodes the specified KickOutUserResult message, length delimited. Does not implicitly {@link msg.KickOutUserResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.KickOutUserResult
         * @static
         * @param {msg.IKickOutUserResult} message KickOutUserResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickOutUserResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KickOutUserResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.KickOutUserResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.KickOutUserResult} KickOutUserResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickOutUserResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.KickOutUserResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reason = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KickOutUserResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.KickOutUserResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.KickOutUserResult} KickOutUserResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickOutUserResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KickOutUserResult message.
         * @function verify
         * @memberof msg.KickOutUserResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KickOutUserResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isString(message.reason))
                    return "reason: string expected";
            return null;
        };

        /**
         * Creates a KickOutUserResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.KickOutUserResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.KickOutUserResult} KickOutUserResult
         */
        KickOutUserResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.KickOutUserResult)
                return object;
            let message = new $root.msg.KickOutUserResult();
            if (object.reason != null)
                message.reason = String(object.reason);
            return message;
        };

        /**
         * Creates a plain object from a KickOutUserResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.KickOutUserResult
         * @static
         * @param {msg.KickOutUserResult} message KickOutUserResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KickOutUserResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.reason = "";
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            return object;
        };

        /**
         * Converts this KickOutUserResult to JSON.
         * @function toJSON
         * @memberof msg.KickOutUserResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KickOutUserResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KickOutUserResult;
    })();

    return msg;
})();

module.exports = $root;
