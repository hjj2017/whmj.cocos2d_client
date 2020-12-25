/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

import * as $protobuf from "./protobufjs.ver_MJ_weihai_";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots.chatServer || ($protobuf.roots.chatServer = {});

export const msg = $root.msg = (() => {

    /**
     * Namespace msg.
     * @exports msg
     * @namespace
     */
    const msg = {};

    /**
     * ChatServerMsgCodeDef enum.
     * @name msg.ChatServerMsgCodeDef
     * @enum {number}
     * @property {number} _Dummy=0 _Dummy value
     * @property {number} _SendQuickMsgCmd=401 _SendQuickMsgCmd value
     * @property {number} _SendQuickMsgResult=402 _SendQuickMsgResult value
     * @property {number} _SendQuickMsgBroadcast=403 _SendQuickMsgBroadcast value
     * @property {number} _SendEmojiCmd=404 _SendEmojiCmd value
     * @property {number} _SendEmojiResult=405 _SendEmojiResult value
     * @property {number} _SendEmojiBroadcast=406 _SendEmojiBroadcast value
     */
    msg.ChatServerMsgCodeDef = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "_Dummy"] = 0;
        values[valuesById[401] = "_SendQuickMsgCmd"] = 401;
        values[valuesById[402] = "_SendQuickMsgResult"] = 402;
        values[valuesById[403] = "_SendQuickMsgBroadcast"] = 403;
        values[valuesById[404] = "_SendEmojiCmd"] = 404;
        values[valuesById[405] = "_SendEmojiResult"] = 405;
        values[valuesById[406] = "_SendEmojiBroadcast"] = 406;
        return values;
    })();

    msg.SendQuickMsgCmd = (function() {

        /**
         * Properties of a SendQuickMsgCmd.
         * @memberof msg
         * @interface ISendQuickMsgCmd
         * @property {number|null} [msgId] SendQuickMsgCmd msgId
         */

        /**
         * Constructs a new SendQuickMsgCmd.
         * @memberof msg
         * @classdesc Represents a SendQuickMsgCmd.
         * @implements ISendQuickMsgCmd
         * @constructor
         * @param {msg.ISendQuickMsgCmd=} [properties] Properties to set
         */
        function SendQuickMsgCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendQuickMsgCmd msgId.
         * @member {number} msgId
         * @memberof msg.SendQuickMsgCmd
         * @instance
         */
        SendQuickMsgCmd.prototype.msgId = 0;

        /**
         * Creates a new SendQuickMsgCmd instance using the specified properties.
         * @function create
         * @memberof msg.SendQuickMsgCmd
         * @static
         * @param {msg.ISendQuickMsgCmd=} [properties] Properties to set
         * @returns {msg.SendQuickMsgCmd} SendQuickMsgCmd instance
         */
        SendQuickMsgCmd.create = function create(properties) {
            return new SendQuickMsgCmd(properties);
        };

        /**
         * Encodes the specified SendQuickMsgCmd message. Does not implicitly {@link msg.SendQuickMsgCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.SendQuickMsgCmd
         * @static
         * @param {msg.ISendQuickMsgCmd} message SendQuickMsgCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendQuickMsgCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msgId != null && Object.hasOwnProperty.call(message, "msgId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.msgId);
            return writer;
        };

        /**
         * Encodes the specified SendQuickMsgCmd message, length delimited. Does not implicitly {@link msg.SendQuickMsgCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.SendQuickMsgCmd
         * @static
         * @param {msg.ISendQuickMsgCmd} message SendQuickMsgCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendQuickMsgCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendQuickMsgCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.SendQuickMsgCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.SendQuickMsgCmd} SendQuickMsgCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendQuickMsgCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.SendQuickMsgCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.msgId = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendQuickMsgCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.SendQuickMsgCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.SendQuickMsgCmd} SendQuickMsgCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendQuickMsgCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendQuickMsgCmd message.
         * @function verify
         * @memberof msg.SendQuickMsgCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendQuickMsgCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                if (!$util.isInteger(message.msgId))
                    return "msgId: integer expected";
            return null;
        };

        /**
         * Creates a SendQuickMsgCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.SendQuickMsgCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.SendQuickMsgCmd} SendQuickMsgCmd
         */
        SendQuickMsgCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.SendQuickMsgCmd)
                return object;
            let message = new $root.msg.SendQuickMsgCmd();
            if (object.msgId != null)
                message.msgId = object.msgId | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendQuickMsgCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.SendQuickMsgCmd
         * @static
         * @param {msg.SendQuickMsgCmd} message SendQuickMsgCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendQuickMsgCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.msgId = 0;
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                object.msgId = message.msgId;
            return object;
        };

        /**
         * Converts this SendQuickMsgCmd to JSON.
         * @function toJSON
         * @memberof msg.SendQuickMsgCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendQuickMsgCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendQuickMsgCmd;
    })();

    msg.SendQuickMsgResult = (function() {

        /**
         * Properties of a SendQuickMsgResult.
         * @memberof msg
         * @interface ISendQuickMsgResult
         * @property {number|null} [msgId] SendQuickMsgResult msgId
         * @property {boolean|null} [ok] SendQuickMsgResult ok
         */

        /**
         * Constructs a new SendQuickMsgResult.
         * @memberof msg
         * @classdesc Represents a SendQuickMsgResult.
         * @implements ISendQuickMsgResult
         * @constructor
         * @param {msg.ISendQuickMsgResult=} [properties] Properties to set
         */
        function SendQuickMsgResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendQuickMsgResult msgId.
         * @member {number} msgId
         * @memberof msg.SendQuickMsgResult
         * @instance
         */
        SendQuickMsgResult.prototype.msgId = 0;

        /**
         * SendQuickMsgResult ok.
         * @member {boolean} ok
         * @memberof msg.SendQuickMsgResult
         * @instance
         */
        SendQuickMsgResult.prototype.ok = false;

        /**
         * Creates a new SendQuickMsgResult instance using the specified properties.
         * @function create
         * @memberof msg.SendQuickMsgResult
         * @static
         * @param {msg.ISendQuickMsgResult=} [properties] Properties to set
         * @returns {msg.SendQuickMsgResult} SendQuickMsgResult instance
         */
        SendQuickMsgResult.create = function create(properties) {
            return new SendQuickMsgResult(properties);
        };

        /**
         * Encodes the specified SendQuickMsgResult message. Does not implicitly {@link msg.SendQuickMsgResult.verify|verify} messages.
         * @function encode
         * @memberof msg.SendQuickMsgResult
         * @static
         * @param {msg.ISendQuickMsgResult} message SendQuickMsgResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendQuickMsgResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msgId != null && Object.hasOwnProperty.call(message, "msgId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.msgId);
            if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.ok);
            return writer;
        };

        /**
         * Encodes the specified SendQuickMsgResult message, length delimited. Does not implicitly {@link msg.SendQuickMsgResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.SendQuickMsgResult
         * @static
         * @param {msg.ISendQuickMsgResult} message SendQuickMsgResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendQuickMsgResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendQuickMsgResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.SendQuickMsgResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.SendQuickMsgResult} SendQuickMsgResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendQuickMsgResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.SendQuickMsgResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.msgId = reader.sint32();
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
         * Decodes a SendQuickMsgResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.SendQuickMsgResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.SendQuickMsgResult} SendQuickMsgResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendQuickMsgResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendQuickMsgResult message.
         * @function verify
         * @memberof msg.SendQuickMsgResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendQuickMsgResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                if (!$util.isInteger(message.msgId))
                    return "msgId: integer expected";
            if (message.ok != null && message.hasOwnProperty("ok"))
                if (typeof message.ok !== "boolean")
                    return "ok: boolean expected";
            return null;
        };

        /**
         * Creates a SendQuickMsgResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.SendQuickMsgResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.SendQuickMsgResult} SendQuickMsgResult
         */
        SendQuickMsgResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.SendQuickMsgResult)
                return object;
            let message = new $root.msg.SendQuickMsgResult();
            if (object.msgId != null)
                message.msgId = object.msgId | 0;
            if (object.ok != null)
                message.ok = Boolean(object.ok);
            return message;
        };

        /**
         * Creates a plain object from a SendQuickMsgResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.SendQuickMsgResult
         * @static
         * @param {msg.SendQuickMsgResult} message SendQuickMsgResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendQuickMsgResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.msgId = 0;
                object.ok = false;
            }
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                object.msgId = message.msgId;
            if (message.ok != null && message.hasOwnProperty("ok"))
                object.ok = message.ok;
            return object;
        };

        /**
         * Converts this SendQuickMsgResult to JSON.
         * @function toJSON
         * @memberof msg.SendQuickMsgResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendQuickMsgResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendQuickMsgResult;
    })();

    msg.SendQuickMsgBroadcast = (function() {

        /**
         * Properties of a SendQuickMsgBroadcast.
         * @memberof msg
         * @interface ISendQuickMsgBroadcast
         * @property {number|null} [fromUserId] SendQuickMsgBroadcast fromUserId
         * @property {number|null} [msgId] SendQuickMsgBroadcast msgId
         * @property {boolean|null} [ok] SendQuickMsgBroadcast ok
         */

        /**
         * Constructs a new SendQuickMsgBroadcast.
         * @memberof msg
         * @classdesc Represents a SendQuickMsgBroadcast.
         * @implements ISendQuickMsgBroadcast
         * @constructor
         * @param {msg.ISendQuickMsgBroadcast=} [properties] Properties to set
         */
        function SendQuickMsgBroadcast(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendQuickMsgBroadcast fromUserId.
         * @member {number} fromUserId
         * @memberof msg.SendQuickMsgBroadcast
         * @instance
         */
        SendQuickMsgBroadcast.prototype.fromUserId = 0;

        /**
         * SendQuickMsgBroadcast msgId.
         * @member {number} msgId
         * @memberof msg.SendQuickMsgBroadcast
         * @instance
         */
        SendQuickMsgBroadcast.prototype.msgId = 0;

        /**
         * SendQuickMsgBroadcast ok.
         * @member {boolean} ok
         * @memberof msg.SendQuickMsgBroadcast
         * @instance
         */
        SendQuickMsgBroadcast.prototype.ok = false;

        /**
         * Creates a new SendQuickMsgBroadcast instance using the specified properties.
         * @function create
         * @memberof msg.SendQuickMsgBroadcast
         * @static
         * @param {msg.ISendQuickMsgBroadcast=} [properties] Properties to set
         * @returns {msg.SendQuickMsgBroadcast} SendQuickMsgBroadcast instance
         */
        SendQuickMsgBroadcast.create = function create(properties) {
            return new SendQuickMsgBroadcast(properties);
        };

        /**
         * Encodes the specified SendQuickMsgBroadcast message. Does not implicitly {@link msg.SendQuickMsgBroadcast.verify|verify} messages.
         * @function encode
         * @memberof msg.SendQuickMsgBroadcast
         * @static
         * @param {msg.ISendQuickMsgBroadcast} message SendQuickMsgBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendQuickMsgBroadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fromUserId != null && Object.hasOwnProperty.call(message, "fromUserId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.fromUserId);
            if (message.msgId != null && Object.hasOwnProperty.call(message, "msgId"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.msgId);
            if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.ok);
            return writer;
        };

        /**
         * Encodes the specified SendQuickMsgBroadcast message, length delimited. Does not implicitly {@link msg.SendQuickMsgBroadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.SendQuickMsgBroadcast
         * @static
         * @param {msg.ISendQuickMsgBroadcast} message SendQuickMsgBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendQuickMsgBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendQuickMsgBroadcast message from the specified reader or buffer.
         * @function decode
         * @memberof msg.SendQuickMsgBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.SendQuickMsgBroadcast} SendQuickMsgBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendQuickMsgBroadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.SendQuickMsgBroadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.fromUserId = reader.sint32();
                    break;
                case 2:
                    message.msgId = reader.sint32();
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
         * Decodes a SendQuickMsgBroadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.SendQuickMsgBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.SendQuickMsgBroadcast} SendQuickMsgBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendQuickMsgBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendQuickMsgBroadcast message.
         * @function verify
         * @memberof msg.SendQuickMsgBroadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendQuickMsgBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fromUserId != null && message.hasOwnProperty("fromUserId"))
                if (!$util.isInteger(message.fromUserId))
                    return "fromUserId: integer expected";
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                if (!$util.isInteger(message.msgId))
                    return "msgId: integer expected";
            if (message.ok != null && message.hasOwnProperty("ok"))
                if (typeof message.ok !== "boolean")
                    return "ok: boolean expected";
            return null;
        };

        /**
         * Creates a SendQuickMsgBroadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.SendQuickMsgBroadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.SendQuickMsgBroadcast} SendQuickMsgBroadcast
         */
        SendQuickMsgBroadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.SendQuickMsgBroadcast)
                return object;
            let message = new $root.msg.SendQuickMsgBroadcast();
            if (object.fromUserId != null)
                message.fromUserId = object.fromUserId | 0;
            if (object.msgId != null)
                message.msgId = object.msgId | 0;
            if (object.ok != null)
                message.ok = Boolean(object.ok);
            return message;
        };

        /**
         * Creates a plain object from a SendQuickMsgBroadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.SendQuickMsgBroadcast
         * @static
         * @param {msg.SendQuickMsgBroadcast} message SendQuickMsgBroadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendQuickMsgBroadcast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.fromUserId = 0;
                object.msgId = 0;
                object.ok = false;
            }
            if (message.fromUserId != null && message.hasOwnProperty("fromUserId"))
                object.fromUserId = message.fromUserId;
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                object.msgId = message.msgId;
            if (message.ok != null && message.hasOwnProperty("ok"))
                object.ok = message.ok;
            return object;
        };

        /**
         * Converts this SendQuickMsgBroadcast to JSON.
         * @function toJSON
         * @memberof msg.SendQuickMsgBroadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendQuickMsgBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendQuickMsgBroadcast;
    })();

    msg.SendEmojiCmd = (function() {

        /**
         * Properties of a SendEmojiCmd.
         * @memberof msg
         * @interface ISendEmojiCmd
         * @property {number|null} [emojiId] SendEmojiCmd emojiId
         */

        /**
         * Constructs a new SendEmojiCmd.
         * @memberof msg
         * @classdesc Represents a SendEmojiCmd.
         * @implements ISendEmojiCmd
         * @constructor
         * @param {msg.ISendEmojiCmd=} [properties] Properties to set
         */
        function SendEmojiCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendEmojiCmd emojiId.
         * @member {number} emojiId
         * @memberof msg.SendEmojiCmd
         * @instance
         */
        SendEmojiCmd.prototype.emojiId = 0;

        /**
         * Creates a new SendEmojiCmd instance using the specified properties.
         * @function create
         * @memberof msg.SendEmojiCmd
         * @static
         * @param {msg.ISendEmojiCmd=} [properties] Properties to set
         * @returns {msg.SendEmojiCmd} SendEmojiCmd instance
         */
        SendEmojiCmd.create = function create(properties) {
            return new SendEmojiCmd(properties);
        };

        /**
         * Encodes the specified SendEmojiCmd message. Does not implicitly {@link msg.SendEmojiCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.SendEmojiCmd
         * @static
         * @param {msg.ISendEmojiCmd} message SendEmojiCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendEmojiCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.emojiId != null && Object.hasOwnProperty.call(message, "emojiId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.emojiId);
            return writer;
        };

        /**
         * Encodes the specified SendEmojiCmd message, length delimited. Does not implicitly {@link msg.SendEmojiCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.SendEmojiCmd
         * @static
         * @param {msg.ISendEmojiCmd} message SendEmojiCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendEmojiCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendEmojiCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.SendEmojiCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.SendEmojiCmd} SendEmojiCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendEmojiCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.SendEmojiCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.emojiId = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendEmojiCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.SendEmojiCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.SendEmojiCmd} SendEmojiCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendEmojiCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendEmojiCmd message.
         * @function verify
         * @memberof msg.SendEmojiCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendEmojiCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.emojiId != null && message.hasOwnProperty("emojiId"))
                if (!$util.isInteger(message.emojiId))
                    return "emojiId: integer expected";
            return null;
        };

        /**
         * Creates a SendEmojiCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.SendEmojiCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.SendEmojiCmd} SendEmojiCmd
         */
        SendEmojiCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.SendEmojiCmd)
                return object;
            let message = new $root.msg.SendEmojiCmd();
            if (object.emojiId != null)
                message.emojiId = object.emojiId | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendEmojiCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.SendEmojiCmd
         * @static
         * @param {msg.SendEmojiCmd} message SendEmojiCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendEmojiCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.emojiId = 0;
            if (message.emojiId != null && message.hasOwnProperty("emojiId"))
                object.emojiId = message.emojiId;
            return object;
        };

        /**
         * Converts this SendEmojiCmd to JSON.
         * @function toJSON
         * @memberof msg.SendEmojiCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendEmojiCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendEmojiCmd;
    })();

    msg.SendEmojiResult = (function() {

        /**
         * Properties of a SendEmojiResult.
         * @memberof msg
         * @interface ISendEmojiResult
         * @property {number|null} [emojiId] SendEmojiResult emojiId
         * @property {boolean|null} [ok] SendEmojiResult ok
         */

        /**
         * Constructs a new SendEmojiResult.
         * @memberof msg
         * @classdesc Represents a SendEmojiResult.
         * @implements ISendEmojiResult
         * @constructor
         * @param {msg.ISendEmojiResult=} [properties] Properties to set
         */
        function SendEmojiResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendEmojiResult emojiId.
         * @member {number} emojiId
         * @memberof msg.SendEmojiResult
         * @instance
         */
        SendEmojiResult.prototype.emojiId = 0;

        /**
         * SendEmojiResult ok.
         * @member {boolean} ok
         * @memberof msg.SendEmojiResult
         * @instance
         */
        SendEmojiResult.prototype.ok = false;

        /**
         * Creates a new SendEmojiResult instance using the specified properties.
         * @function create
         * @memberof msg.SendEmojiResult
         * @static
         * @param {msg.ISendEmojiResult=} [properties] Properties to set
         * @returns {msg.SendEmojiResult} SendEmojiResult instance
         */
        SendEmojiResult.create = function create(properties) {
            return new SendEmojiResult(properties);
        };

        /**
         * Encodes the specified SendEmojiResult message. Does not implicitly {@link msg.SendEmojiResult.verify|verify} messages.
         * @function encode
         * @memberof msg.SendEmojiResult
         * @static
         * @param {msg.ISendEmojiResult} message SendEmojiResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendEmojiResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.emojiId != null && Object.hasOwnProperty.call(message, "emojiId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.emojiId);
            if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.ok);
            return writer;
        };

        /**
         * Encodes the specified SendEmojiResult message, length delimited. Does not implicitly {@link msg.SendEmojiResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.SendEmojiResult
         * @static
         * @param {msg.ISendEmojiResult} message SendEmojiResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendEmojiResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendEmojiResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.SendEmojiResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.SendEmojiResult} SendEmojiResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendEmojiResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.SendEmojiResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.emojiId = reader.sint32();
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
         * Decodes a SendEmojiResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.SendEmojiResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.SendEmojiResult} SendEmojiResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendEmojiResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendEmojiResult message.
         * @function verify
         * @memberof msg.SendEmojiResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendEmojiResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.emojiId != null && message.hasOwnProperty("emojiId"))
                if (!$util.isInteger(message.emojiId))
                    return "emojiId: integer expected";
            if (message.ok != null && message.hasOwnProperty("ok"))
                if (typeof message.ok !== "boolean")
                    return "ok: boolean expected";
            return null;
        };

        /**
         * Creates a SendEmojiResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.SendEmojiResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.SendEmojiResult} SendEmojiResult
         */
        SendEmojiResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.SendEmojiResult)
                return object;
            let message = new $root.msg.SendEmojiResult();
            if (object.emojiId != null)
                message.emojiId = object.emojiId | 0;
            if (object.ok != null)
                message.ok = Boolean(object.ok);
            return message;
        };

        /**
         * Creates a plain object from a SendEmojiResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.SendEmojiResult
         * @static
         * @param {msg.SendEmojiResult} message SendEmojiResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendEmojiResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.emojiId = 0;
                object.ok = false;
            }
            if (message.emojiId != null && message.hasOwnProperty("emojiId"))
                object.emojiId = message.emojiId;
            if (message.ok != null && message.hasOwnProperty("ok"))
                object.ok = message.ok;
            return object;
        };

        /**
         * Converts this SendEmojiResult to JSON.
         * @function toJSON
         * @memberof msg.SendEmojiResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendEmojiResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendEmojiResult;
    })();

    msg.SendEmojiBroadcast = (function() {

        /**
         * Properties of a SendEmojiBroadcast.
         * @memberof msg
         * @interface ISendEmojiBroadcast
         * @property {number|null} [fromUserId] SendEmojiBroadcast fromUserId
         * @property {number|null} [emojiId] SendEmojiBroadcast emojiId
         * @property {boolean|null} [ok] SendEmojiBroadcast ok
         */

        /**
         * Constructs a new SendEmojiBroadcast.
         * @memberof msg
         * @classdesc Represents a SendEmojiBroadcast.
         * @implements ISendEmojiBroadcast
         * @constructor
         * @param {msg.ISendEmojiBroadcast=} [properties] Properties to set
         */
        function SendEmojiBroadcast(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendEmojiBroadcast fromUserId.
         * @member {number} fromUserId
         * @memberof msg.SendEmojiBroadcast
         * @instance
         */
        SendEmojiBroadcast.prototype.fromUserId = 0;

        /**
         * SendEmojiBroadcast emojiId.
         * @member {number} emojiId
         * @memberof msg.SendEmojiBroadcast
         * @instance
         */
        SendEmojiBroadcast.prototype.emojiId = 0;

        /**
         * SendEmojiBroadcast ok.
         * @member {boolean} ok
         * @memberof msg.SendEmojiBroadcast
         * @instance
         */
        SendEmojiBroadcast.prototype.ok = false;

        /**
         * Creates a new SendEmojiBroadcast instance using the specified properties.
         * @function create
         * @memberof msg.SendEmojiBroadcast
         * @static
         * @param {msg.ISendEmojiBroadcast=} [properties] Properties to set
         * @returns {msg.SendEmojiBroadcast} SendEmojiBroadcast instance
         */
        SendEmojiBroadcast.create = function create(properties) {
            return new SendEmojiBroadcast(properties);
        };

        /**
         * Encodes the specified SendEmojiBroadcast message. Does not implicitly {@link msg.SendEmojiBroadcast.verify|verify} messages.
         * @function encode
         * @memberof msg.SendEmojiBroadcast
         * @static
         * @param {msg.ISendEmojiBroadcast} message SendEmojiBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendEmojiBroadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fromUserId != null && Object.hasOwnProperty.call(message, "fromUserId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.fromUserId);
            if (message.emojiId != null && Object.hasOwnProperty.call(message, "emojiId"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.emojiId);
            if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.ok);
            return writer;
        };

        /**
         * Encodes the specified SendEmojiBroadcast message, length delimited. Does not implicitly {@link msg.SendEmojiBroadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.SendEmojiBroadcast
         * @static
         * @param {msg.ISendEmojiBroadcast} message SendEmojiBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendEmojiBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendEmojiBroadcast message from the specified reader or buffer.
         * @function decode
         * @memberof msg.SendEmojiBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.SendEmojiBroadcast} SendEmojiBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendEmojiBroadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.SendEmojiBroadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.fromUserId = reader.sint32();
                    break;
                case 2:
                    message.emojiId = reader.sint32();
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
         * Decodes a SendEmojiBroadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.SendEmojiBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.SendEmojiBroadcast} SendEmojiBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendEmojiBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendEmojiBroadcast message.
         * @function verify
         * @memberof msg.SendEmojiBroadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendEmojiBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fromUserId != null && message.hasOwnProperty("fromUserId"))
                if (!$util.isInteger(message.fromUserId))
                    return "fromUserId: integer expected";
            if (message.emojiId != null && message.hasOwnProperty("emojiId"))
                if (!$util.isInteger(message.emojiId))
                    return "emojiId: integer expected";
            if (message.ok != null && message.hasOwnProperty("ok"))
                if (typeof message.ok !== "boolean")
                    return "ok: boolean expected";
            return null;
        };

        /**
         * Creates a SendEmojiBroadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.SendEmojiBroadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.SendEmojiBroadcast} SendEmojiBroadcast
         */
        SendEmojiBroadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.SendEmojiBroadcast)
                return object;
            let message = new $root.msg.SendEmojiBroadcast();
            if (object.fromUserId != null)
                message.fromUserId = object.fromUserId | 0;
            if (object.emojiId != null)
                message.emojiId = object.emojiId | 0;
            if (object.ok != null)
                message.ok = Boolean(object.ok);
            return message;
        };

        /**
         * Creates a plain object from a SendEmojiBroadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.SendEmojiBroadcast
         * @static
         * @param {msg.SendEmojiBroadcast} message SendEmojiBroadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendEmojiBroadcast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.fromUserId = 0;
                object.emojiId = 0;
                object.ok = false;
            }
            if (message.fromUserId != null && message.hasOwnProperty("fromUserId"))
                object.fromUserId = message.fromUserId;
            if (message.emojiId != null && message.hasOwnProperty("emojiId"))
                object.emojiId = message.emojiId;
            if (message.ok != null && message.hasOwnProperty("ok"))
                object.ok = message.ok;
            return object;
        };

        /**
         * Converts this SendEmojiBroadcast to JSON.
         * @function toJSON
         * @memberof msg.SendEmojiBroadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendEmojiBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendEmojiBroadcast;
    })();

    return msg;
})();

module.exports = $root;
