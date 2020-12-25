import * as $protobuf from "protobufjs";
/** Namespace msg. */
export namespace msg {

    /** PassportServerMsgCodeDef enum. */
    enum PassportServerMsgCodeDef {
        _Dummy = 0,
        _UserLoginCmd = 101,
        _UserLoginResult = 102,
        _GetSMSAuthCodeCmd = 103,
        _GetSMSAuthCodeResult = 104
    }

    /** Properties of a UserLoginCmd. */
    interface IUserLoginCmd {

        /** UserLoginCmd loginMethod */
        loginMethod?: (number|null);

        /** UserLoginCmd propertyStr */
        propertyStr?: (string|null);
    }

    /** Represents a UserLoginCmd. */
    class UserLoginCmd implements IUserLoginCmd {

        /**
         * Constructs a new UserLoginCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IUserLoginCmd);

        /** UserLoginCmd loginMethod. */
        public loginMethod: number;

        /** UserLoginCmd propertyStr. */
        public propertyStr: string;

        /**
         * Creates a new UserLoginCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserLoginCmd instance
         */
        public static create(properties?: msg.IUserLoginCmd): msg.UserLoginCmd;

        /**
         * Encodes the specified UserLoginCmd message. Does not implicitly {@link msg.UserLoginCmd.verify|verify} messages.
         * @param message UserLoginCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IUserLoginCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserLoginCmd message, length delimited. Does not implicitly {@link msg.UserLoginCmd.verify|verify} messages.
         * @param message UserLoginCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IUserLoginCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserLoginCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserLoginCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.UserLoginCmd;

        /**
         * Decodes a UserLoginCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserLoginCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.UserLoginCmd;

        /**
         * Verifies a UserLoginCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserLoginCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserLoginCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.UserLoginCmd;

        /**
         * Creates a plain object from a UserLoginCmd message. Also converts values to other types if specified.
         * @param message UserLoginCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.UserLoginCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserLoginCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserLoginResult. */
    interface IUserLoginResult {

        /** UserLoginResult userId */
        userId?: (number|null);

        /** UserLoginResult userName */
        userName?: (string|null);

        /** UserLoginResult ticket */
        ticket?: (string|null);

        /** UserLoginResult ukeyStr */
        ukeyStr?: (string|null);

        /** UserLoginResult ukeyExpireAt */
        ukeyExpireAt?: (number|Long|null);
    }

    /** Represents a UserLoginResult. */
    class UserLoginResult implements IUserLoginResult {

        /**
         * Constructs a new UserLoginResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IUserLoginResult);

        /** UserLoginResult userId. */
        public userId: number;

        /** UserLoginResult userName. */
        public userName: string;

        /** UserLoginResult ticket. */
        public ticket: string;

        /** UserLoginResult ukeyStr. */
        public ukeyStr: string;

        /** UserLoginResult ukeyExpireAt. */
        public ukeyExpireAt: (number|Long);

        /**
         * Creates a new UserLoginResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserLoginResult instance
         */
        public static create(properties?: msg.IUserLoginResult): msg.UserLoginResult;

        /**
         * Encodes the specified UserLoginResult message. Does not implicitly {@link msg.UserLoginResult.verify|verify} messages.
         * @param message UserLoginResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IUserLoginResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserLoginResult message, length delimited. Does not implicitly {@link msg.UserLoginResult.verify|verify} messages.
         * @param message UserLoginResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IUserLoginResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserLoginResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserLoginResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.UserLoginResult;

        /**
         * Decodes a UserLoginResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserLoginResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.UserLoginResult;

        /**
         * Verifies a UserLoginResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserLoginResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserLoginResult
         */
        public static fromObject(object: { [k: string]: any }): msg.UserLoginResult;

        /**
         * Creates a plain object from a UserLoginResult message. Also converts values to other types if specified.
         * @param message UserLoginResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.UserLoginResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserLoginResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetSMSAuthCodeCmd. */
    interface IGetSMSAuthCodeCmd {

        /** GetSMSAuthCodeCmd phoneNumber */
        phoneNumber?: (string|null);
    }

    /** Represents a GetSMSAuthCodeCmd. */
    class GetSMSAuthCodeCmd implements IGetSMSAuthCodeCmd {

        /**
         * Constructs a new GetSMSAuthCodeCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IGetSMSAuthCodeCmd);

        /** GetSMSAuthCodeCmd phoneNumber. */
        public phoneNumber: string;

        /**
         * Creates a new GetSMSAuthCodeCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetSMSAuthCodeCmd instance
         */
        public static create(properties?: msg.IGetSMSAuthCodeCmd): msg.GetSMSAuthCodeCmd;

        /**
         * Encodes the specified GetSMSAuthCodeCmd message. Does not implicitly {@link msg.GetSMSAuthCodeCmd.verify|verify} messages.
         * @param message GetSMSAuthCodeCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IGetSMSAuthCodeCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetSMSAuthCodeCmd message, length delimited. Does not implicitly {@link msg.GetSMSAuthCodeCmd.verify|verify} messages.
         * @param message GetSMSAuthCodeCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IGetSMSAuthCodeCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetSMSAuthCodeCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetSMSAuthCodeCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.GetSMSAuthCodeCmd;

        /**
         * Decodes a GetSMSAuthCodeCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetSMSAuthCodeCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.GetSMSAuthCodeCmd;

        /**
         * Verifies a GetSMSAuthCodeCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetSMSAuthCodeCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetSMSAuthCodeCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.GetSMSAuthCodeCmd;

        /**
         * Creates a plain object from a GetSMSAuthCodeCmd message. Also converts values to other types if specified.
         * @param message GetSMSAuthCodeCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.GetSMSAuthCodeCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetSMSAuthCodeCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetSMSAuthCodeResult. */
    interface IGetSMSAuthCodeResult {

        /** GetSMSAuthCodeResult phoneNumber */
        phoneNumber?: (string|null);

        /** GetSMSAuthCodeResult succezz */
        succezz?: (boolean|null);
    }

    /** Represents a GetSMSAuthCodeResult. */
    class GetSMSAuthCodeResult implements IGetSMSAuthCodeResult {

        /**
         * Constructs a new GetSMSAuthCodeResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IGetSMSAuthCodeResult);

        /** GetSMSAuthCodeResult phoneNumber. */
        public phoneNumber: string;

        /** GetSMSAuthCodeResult succezz. */
        public succezz: boolean;

        /**
         * Creates a new GetSMSAuthCodeResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetSMSAuthCodeResult instance
         */
        public static create(properties?: msg.IGetSMSAuthCodeResult): msg.GetSMSAuthCodeResult;

        /**
         * Encodes the specified GetSMSAuthCodeResult message. Does not implicitly {@link msg.GetSMSAuthCodeResult.verify|verify} messages.
         * @param message GetSMSAuthCodeResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IGetSMSAuthCodeResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetSMSAuthCodeResult message, length delimited. Does not implicitly {@link msg.GetSMSAuthCodeResult.verify|verify} messages.
         * @param message GetSMSAuthCodeResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IGetSMSAuthCodeResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetSMSAuthCodeResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetSMSAuthCodeResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.GetSMSAuthCodeResult;

        /**
         * Decodes a GetSMSAuthCodeResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetSMSAuthCodeResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.GetSMSAuthCodeResult;

        /**
         * Verifies a GetSMSAuthCodeResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetSMSAuthCodeResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetSMSAuthCodeResult
         */
        public static fromObject(object: { [k: string]: any }): msg.GetSMSAuthCodeResult;

        /**
         * Creates a plain object from a GetSMSAuthCodeResult message. Also converts values to other types if specified.
         * @param message GetSMSAuthCodeResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.GetSMSAuthCodeResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetSMSAuthCodeResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
