/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "./usr0.protobufjs";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots.passportServer || ($protobuf.roots.passportServer = {});

export const msg = $root.msg = (() => {

    /**
     * Namespace msg.
     * @exports msg
     * @namespace
     */
    const msg = {};

    /**
     * PassportServerMsgCodeDef enum.
     * @name msg.PassportServerMsgCodeDef
     * @enum {number}
     * @property {number} _Dummy=0 _Dummy value
     * @property {number} _UserLoginCmd=101 _UserLoginCmd value
     * @property {number} _UserLoginResult=102 _UserLoginResult value
     * @property {number} _GetSMSAuthCodeCmd=103 _GetSMSAuthCodeCmd value
     * @property {number} _GetSMSAuthCodeResult=104 _GetSMSAuthCodeResult value
     */
    msg.PassportServerMsgCodeDef = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "_Dummy"] = 0;
        values[valuesById[101] = "_UserLoginCmd"] = 101;
        values[valuesById[102] = "_UserLoginResult"] = 102;
        values[valuesById[103] = "_GetSMSAuthCodeCmd"] = 103;
        values[valuesById[104] = "_GetSMSAuthCodeResult"] = 104;
        return values;
    })();

    msg.UserLoginCmd = (function() {

        /**
         * Properties of a UserLoginCmd.
         * @memberof msg
         * @interface IUserLoginCmd
         * @property {number|null} [loginMethod] UserLoginCmd loginMethod
         * @property {string|null} [propertyStr] UserLoginCmd propertyStr
         */

        /**
         * Constructs a new UserLoginCmd.
         * @memberof msg
         * @classdesc Represents a UserLoginCmd.
         * @implements IUserLoginCmd
         * @constructor
         * @param {msg.IUserLoginCmd=} [properties] Properties to set
         */
        function UserLoginCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserLoginCmd loginMethod.
         * @member {number} loginMethod
         * @memberof msg.UserLoginCmd
         * @instance
         */
        UserLoginCmd.prototype.loginMethod = 0;

        /**
         * UserLoginCmd propertyStr.
         * @member {string} propertyStr
         * @memberof msg.UserLoginCmd
         * @instance
         */
        UserLoginCmd.prototype.propertyStr = "";

        /**
         * Creates a new UserLoginCmd instance using the specified properties.
         * @function create
         * @memberof msg.UserLoginCmd
         * @static
         * @param {msg.IUserLoginCmd=} [properties] Properties to set
         * @returns {msg.UserLoginCmd} UserLoginCmd instance
         */
        UserLoginCmd.create = function create(properties) {
            return new UserLoginCmd(properties);
        };

        /**
         * Encodes the specified UserLoginCmd message. Does not implicitly {@link msg.UserLoginCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.UserLoginCmd
         * @static
         * @param {msg.IUserLoginCmd} message UserLoginCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLoginCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.loginMethod != null && Object.hasOwnProperty.call(message, "loginMethod"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.loginMethod);
            if (message.propertyStr != null && Object.hasOwnProperty.call(message, "propertyStr"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.propertyStr);
            return writer;
        };

        /**
         * Encodes the specified UserLoginCmd message, length delimited. Does not implicitly {@link msg.UserLoginCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.UserLoginCmd
         * @static
         * @param {msg.IUserLoginCmd} message UserLoginCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLoginCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserLoginCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.UserLoginCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.UserLoginCmd} UserLoginCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLoginCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.UserLoginCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.loginMethod = reader.sint32();
                    break;
                case 2:
                    message.propertyStr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserLoginCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.UserLoginCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.UserLoginCmd} UserLoginCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLoginCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserLoginCmd message.
         * @function verify
         * @memberof msg.UserLoginCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserLoginCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.loginMethod != null && message.hasOwnProperty("loginMethod"))
                if (!$util.isInteger(message.loginMethod))
                    return "loginMethod: integer expected";
            if (message.propertyStr != null && message.hasOwnProperty("propertyStr"))
                if (!$util.isString(message.propertyStr))
                    return "propertyStr: string expected";
            return null;
        };

        /**
         * Creates a UserLoginCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.UserLoginCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.UserLoginCmd} UserLoginCmd
         */
        UserLoginCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.UserLoginCmd)
                return object;
            let message = new $root.msg.UserLoginCmd();
            if (object.loginMethod != null)
                message.loginMethod = object.loginMethod | 0;
            if (object.propertyStr != null)
                message.propertyStr = String(object.propertyStr);
            return message;
        };

        /**
         * Creates a plain object from a UserLoginCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.UserLoginCmd
         * @static
         * @param {msg.UserLoginCmd} message UserLoginCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserLoginCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.loginMethod = 0;
                object.propertyStr = "";
            }
            if (message.loginMethod != null && message.hasOwnProperty("loginMethod"))
                object.loginMethod = message.loginMethod;
            if (message.propertyStr != null && message.hasOwnProperty("propertyStr"))
                object.propertyStr = message.propertyStr;
            return object;
        };

        /**
         * Converts this UserLoginCmd to JSON.
         * @function toJSON
         * @memberof msg.UserLoginCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserLoginCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserLoginCmd;
    })();

    msg.UserLoginResult = (function() {

        /**
         * Properties of a UserLoginResult.
         * @memberof msg
         * @interface IUserLoginResult
         * @property {number|null} [userId] UserLoginResult userId
         * @property {string|null} [userName] UserLoginResult userName
         * @property {string|null} [ticket] UserLoginResult ticket
         * @property {string|null} [ukeyStr] UserLoginResult ukeyStr
         * @property {number|Long|null} [ukeyExpireAt] UserLoginResult ukeyExpireAt
         */

        /**
         * Constructs a new UserLoginResult.
         * @memberof msg
         * @classdesc Represents a UserLoginResult.
         * @implements IUserLoginResult
         * @constructor
         * @param {msg.IUserLoginResult=} [properties] Properties to set
         */
        function UserLoginResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserLoginResult userId.
         * @member {number} userId
         * @memberof msg.UserLoginResult
         * @instance
         */
        UserLoginResult.prototype.userId = 0;

        /**
         * UserLoginResult userName.
         * @member {string} userName
         * @memberof msg.UserLoginResult
         * @instance
         */
        UserLoginResult.prototype.userName = "";

        /**
         * UserLoginResult ticket.
         * @member {string} ticket
         * @memberof msg.UserLoginResult
         * @instance
         */
        UserLoginResult.prototype.ticket = "";

        /**
         * UserLoginResult ukeyStr.
         * @member {string} ukeyStr
         * @memberof msg.UserLoginResult
         * @instance
         */
        UserLoginResult.prototype.ukeyStr = "";

        /**
         * UserLoginResult ukeyExpireAt.
         * @member {number|Long} ukeyExpireAt
         * @memberof msg.UserLoginResult
         * @instance
         */
        UserLoginResult.prototype.ukeyExpireAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new UserLoginResult instance using the specified properties.
         * @function create
         * @memberof msg.UserLoginResult
         * @static
         * @param {msg.IUserLoginResult=} [properties] Properties to set
         * @returns {msg.UserLoginResult} UserLoginResult instance
         */
        UserLoginResult.create = function create(properties) {
            return new UserLoginResult(properties);
        };

        /**
         * Encodes the specified UserLoginResult message. Does not implicitly {@link msg.UserLoginResult.verify|verify} messages.
         * @function encode
         * @memberof msg.UserLoginResult
         * @static
         * @param {msg.IUserLoginResult} message UserLoginResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLoginResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.userId);
            if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.userName);
            if (message.ticket != null && Object.hasOwnProperty.call(message, "ticket"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.ticket);
            if (message.ukeyStr != null && Object.hasOwnProperty.call(message, "ukeyStr"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.ukeyStr);
            if (message.ukeyExpireAt != null && Object.hasOwnProperty.call(message, "ukeyExpireAt"))
                writer.uint32(/* id 5, wireType 0 =*/40).sint64(message.ukeyExpireAt);
            return writer;
        };

        /**
         * Encodes the specified UserLoginResult message, length delimited. Does not implicitly {@link msg.UserLoginResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.UserLoginResult
         * @static
         * @param {msg.IUserLoginResult} message UserLoginResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLoginResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserLoginResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.UserLoginResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.UserLoginResult} UserLoginResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLoginResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.UserLoginResult();
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
                    message.ticket = reader.string();
                    break;
                case 4:
                    message.ukeyStr = reader.string();
                    break;
                case 5:
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
         * Decodes a UserLoginResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.UserLoginResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.UserLoginResult} UserLoginResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLoginResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserLoginResult message.
         * @function verify
         * @memberof msg.UserLoginResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserLoginResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                if (!$util.isString(message.ticket))
                    return "ticket: string expected";
            if (message.ukeyStr != null && message.hasOwnProperty("ukeyStr"))
                if (!$util.isString(message.ukeyStr))
                    return "ukeyStr: string expected";
            if (message.ukeyExpireAt != null && message.hasOwnProperty("ukeyExpireAt"))
                if (!$util.isInteger(message.ukeyExpireAt) && !(message.ukeyExpireAt && $util.isInteger(message.ukeyExpireAt.low) && $util.isInteger(message.ukeyExpireAt.high)))
                    return "ukeyExpireAt: integer|Long expected";
            return null;
        };

        /**
         * Creates a UserLoginResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.UserLoginResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.UserLoginResult} UserLoginResult
         */
        UserLoginResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.UserLoginResult)
                return object;
            let message = new $root.msg.UserLoginResult();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.userName != null)
                message.userName = String(object.userName);
            if (object.ticket != null)
                message.ticket = String(object.ticket);
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
         * Creates a plain object from a UserLoginResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.UserLoginResult
         * @static
         * @param {msg.UserLoginResult} message UserLoginResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserLoginResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = 0;
                object.userName = "";
                object.ticket = "";
                object.ukeyStr = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.ukeyExpireAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ukeyExpireAt = options.longs === String ? "0" : 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.userName != null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                object.ticket = message.ticket;
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
         * Converts this UserLoginResult to JSON.
         * @function toJSON
         * @memberof msg.UserLoginResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserLoginResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserLoginResult;
    })();

    msg.GetSMSAuthCodeCmd = (function() {

        /**
         * Properties of a GetSMSAuthCodeCmd.
         * @memberof msg
         * @interface IGetSMSAuthCodeCmd
         * @property {string|null} [phoneNumber] GetSMSAuthCodeCmd phoneNumber
         */

        /**
         * Constructs a new GetSMSAuthCodeCmd.
         * @memberof msg
         * @classdesc Represents a GetSMSAuthCodeCmd.
         * @implements IGetSMSAuthCodeCmd
         * @constructor
         * @param {msg.IGetSMSAuthCodeCmd=} [properties] Properties to set
         */
        function GetSMSAuthCodeCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetSMSAuthCodeCmd phoneNumber.
         * @member {string} phoneNumber
         * @memberof msg.GetSMSAuthCodeCmd
         * @instance
         */
        GetSMSAuthCodeCmd.prototype.phoneNumber = "";

        /**
         * Creates a new GetSMSAuthCodeCmd instance using the specified properties.
         * @function create
         * @memberof msg.GetSMSAuthCodeCmd
         * @static
         * @param {msg.IGetSMSAuthCodeCmd=} [properties] Properties to set
         * @returns {msg.GetSMSAuthCodeCmd} GetSMSAuthCodeCmd instance
         */
        GetSMSAuthCodeCmd.create = function create(properties) {
            return new GetSMSAuthCodeCmd(properties);
        };

        /**
         * Encodes the specified GetSMSAuthCodeCmd message. Does not implicitly {@link msg.GetSMSAuthCodeCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.GetSMSAuthCodeCmd
         * @static
         * @param {msg.IGetSMSAuthCodeCmd} message GetSMSAuthCodeCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetSMSAuthCodeCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.phoneNumber != null && Object.hasOwnProperty.call(message, "phoneNumber"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.phoneNumber);
            return writer;
        };

        /**
         * Encodes the specified GetSMSAuthCodeCmd message, length delimited. Does not implicitly {@link msg.GetSMSAuthCodeCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.GetSMSAuthCodeCmd
         * @static
         * @param {msg.IGetSMSAuthCodeCmd} message GetSMSAuthCodeCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetSMSAuthCodeCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetSMSAuthCodeCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.GetSMSAuthCodeCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.GetSMSAuthCodeCmd} GetSMSAuthCodeCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetSMSAuthCodeCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.GetSMSAuthCodeCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.phoneNumber = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetSMSAuthCodeCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.GetSMSAuthCodeCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.GetSMSAuthCodeCmd} GetSMSAuthCodeCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetSMSAuthCodeCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetSMSAuthCodeCmd message.
         * @function verify
         * @memberof msg.GetSMSAuthCodeCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetSMSAuthCodeCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                if (!$util.isString(message.phoneNumber))
                    return "phoneNumber: string expected";
            return null;
        };

        /**
         * Creates a GetSMSAuthCodeCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.GetSMSAuthCodeCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.GetSMSAuthCodeCmd} GetSMSAuthCodeCmd
         */
        GetSMSAuthCodeCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.GetSMSAuthCodeCmd)
                return object;
            let message = new $root.msg.GetSMSAuthCodeCmd();
            if (object.phoneNumber != null)
                message.phoneNumber = String(object.phoneNumber);
            return message;
        };

        /**
         * Creates a plain object from a GetSMSAuthCodeCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.GetSMSAuthCodeCmd
         * @static
         * @param {msg.GetSMSAuthCodeCmd} message GetSMSAuthCodeCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetSMSAuthCodeCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.phoneNumber = "";
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                object.phoneNumber = message.phoneNumber;
            return object;
        };

        /**
         * Converts this GetSMSAuthCodeCmd to JSON.
         * @function toJSON
         * @memberof msg.GetSMSAuthCodeCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetSMSAuthCodeCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetSMSAuthCodeCmd;
    })();

    msg.GetSMSAuthCodeResult = (function() {

        /**
         * Properties of a GetSMSAuthCodeResult.
         * @memberof msg
         * @interface IGetSMSAuthCodeResult
         * @property {string|null} [phoneNumber] GetSMSAuthCodeResult phoneNumber
         * @property {boolean|null} [succezz] GetSMSAuthCodeResult succezz
         */

        /**
         * Constructs a new GetSMSAuthCodeResult.
         * @memberof msg
         * @classdesc Represents a GetSMSAuthCodeResult.
         * @implements IGetSMSAuthCodeResult
         * @constructor
         * @param {msg.IGetSMSAuthCodeResult=} [properties] Properties to set
         */
        function GetSMSAuthCodeResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetSMSAuthCodeResult phoneNumber.
         * @member {string} phoneNumber
         * @memberof msg.GetSMSAuthCodeResult
         * @instance
         */
        GetSMSAuthCodeResult.prototype.phoneNumber = "";

        /**
         * GetSMSAuthCodeResult succezz.
         * @member {boolean} succezz
         * @memberof msg.GetSMSAuthCodeResult
         * @instance
         */
        GetSMSAuthCodeResult.prototype.succezz = false;

        /**
         * Creates a new GetSMSAuthCodeResult instance using the specified properties.
         * @function create
         * @memberof msg.GetSMSAuthCodeResult
         * @static
         * @param {msg.IGetSMSAuthCodeResult=} [properties] Properties to set
         * @returns {msg.GetSMSAuthCodeResult} GetSMSAuthCodeResult instance
         */
        GetSMSAuthCodeResult.create = function create(properties) {
            return new GetSMSAuthCodeResult(properties);
        };

        /**
         * Encodes the specified GetSMSAuthCodeResult message. Does not implicitly {@link msg.GetSMSAuthCodeResult.verify|verify} messages.
         * @function encode
         * @memberof msg.GetSMSAuthCodeResult
         * @static
         * @param {msg.IGetSMSAuthCodeResult} message GetSMSAuthCodeResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetSMSAuthCodeResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.phoneNumber != null && Object.hasOwnProperty.call(message, "phoneNumber"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.phoneNumber);
            if (message.succezz != null && Object.hasOwnProperty.call(message, "succezz"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.succezz);
            return writer;
        };

        /**
         * Encodes the specified GetSMSAuthCodeResult message, length delimited. Does not implicitly {@link msg.GetSMSAuthCodeResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.GetSMSAuthCodeResult
         * @static
         * @param {msg.IGetSMSAuthCodeResult} message GetSMSAuthCodeResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetSMSAuthCodeResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetSMSAuthCodeResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.GetSMSAuthCodeResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.GetSMSAuthCodeResult} GetSMSAuthCodeResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetSMSAuthCodeResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.GetSMSAuthCodeResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.phoneNumber = reader.string();
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
         * Decodes a GetSMSAuthCodeResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.GetSMSAuthCodeResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.GetSMSAuthCodeResult} GetSMSAuthCodeResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetSMSAuthCodeResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetSMSAuthCodeResult message.
         * @function verify
         * @memberof msg.GetSMSAuthCodeResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetSMSAuthCodeResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                if (!$util.isString(message.phoneNumber))
                    return "phoneNumber: string expected";
            if (message.succezz != null && message.hasOwnProperty("succezz"))
                if (typeof message.succezz !== "boolean")
                    return "succezz: boolean expected";
            return null;
        };

        /**
         * Creates a GetSMSAuthCodeResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.GetSMSAuthCodeResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.GetSMSAuthCodeResult} GetSMSAuthCodeResult
         */
        GetSMSAuthCodeResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.GetSMSAuthCodeResult)
                return object;
            let message = new $root.msg.GetSMSAuthCodeResult();
            if (object.phoneNumber != null)
                message.phoneNumber = String(object.phoneNumber);
            if (object.succezz != null)
                message.succezz = Boolean(object.succezz);
            return message;
        };

        /**
         * Creates a plain object from a GetSMSAuthCodeResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.GetSMSAuthCodeResult
         * @static
         * @param {msg.GetSMSAuthCodeResult} message GetSMSAuthCodeResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetSMSAuthCodeResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.phoneNumber = "";
                object.succezz = false;
            }
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                object.phoneNumber = message.phoneNumber;
            if (message.succezz != null && message.hasOwnProperty("succezz"))
                object.succezz = message.succezz;
            return object;
        };

        /**
         * Converts this GetSMSAuthCodeResult to JSON.
         * @function toJSON
         * @memberof msg.GetSMSAuthCodeResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetSMSAuthCodeResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetSMSAuthCodeResult;
    })();

    return msg;
})();

module.exports = $root;
