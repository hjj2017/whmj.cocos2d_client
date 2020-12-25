import * as $protobuf from "protobufjs";
/** Namespace msg. */
export namespace msg {

    /** HallServerMsgCodeDef enum. */
    enum HallServerMsgCodeDef {
        _Dummy = 0,
        _GetMyDetailzCmd = 201,
        _GetMyDetailzResult = 202,
        _GetJoinedRoomIdCmd = 203,
        _GetJoinedRoomIdResult = 204,
        _CreateRoomCmd = 205,
        _CreateRoomResult = 206,
        _JoinRoomCmd = 207,
        _JoinRoomResult = 208
    }

    /** Properties of a KeyAndVal. */
    interface IKeyAndVal {

        /** KeyAndVal key */
        key?: (number|null);

        /** KeyAndVal val */
        val?: (number|null);
    }

    /** Represents a KeyAndVal. */
    class KeyAndVal implements IKeyAndVal {

        /**
         * Constructs a new KeyAndVal.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IKeyAndVal);

        /** KeyAndVal key. */
        public key: number;

        /** KeyAndVal val. */
        public val: number;

        /**
         * Creates a new KeyAndVal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KeyAndVal instance
         */
        public static create(properties?: msg.IKeyAndVal): msg.KeyAndVal;

        /**
         * Encodes the specified KeyAndVal message. Does not implicitly {@link msg.KeyAndVal.verify|verify} messages.
         * @param message KeyAndVal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IKeyAndVal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KeyAndVal message, length delimited. Does not implicitly {@link msg.KeyAndVal.verify|verify} messages.
         * @param message KeyAndVal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IKeyAndVal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KeyAndVal message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KeyAndVal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.KeyAndVal;

        /**
         * Decodes a KeyAndVal message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KeyAndVal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.KeyAndVal;

        /**
         * Verifies a KeyAndVal message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KeyAndVal message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KeyAndVal
         */
        public static fromObject(object: { [k: string]: any }): msg.KeyAndVal;

        /**
         * Creates a plain object from a KeyAndVal message. Also converts values to other types if specified.
         * @param message KeyAndVal
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.KeyAndVal, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KeyAndVal to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetMyDetailzCmd. */
    interface IGetMyDetailzCmd {
    }

    /** Represents a GetMyDetailzCmd. */
    class GetMyDetailzCmd implements IGetMyDetailzCmd {

        /**
         * Constructs a new GetMyDetailzCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IGetMyDetailzCmd);

        /**
         * Creates a new GetMyDetailzCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetMyDetailzCmd instance
         */
        public static create(properties?: msg.IGetMyDetailzCmd): msg.GetMyDetailzCmd;

        /**
         * Encodes the specified GetMyDetailzCmd message. Does not implicitly {@link msg.GetMyDetailzCmd.verify|verify} messages.
         * @param message GetMyDetailzCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IGetMyDetailzCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetMyDetailzCmd message, length delimited. Does not implicitly {@link msg.GetMyDetailzCmd.verify|verify} messages.
         * @param message GetMyDetailzCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IGetMyDetailzCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetMyDetailzCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetMyDetailzCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.GetMyDetailzCmd;

        /**
         * Decodes a GetMyDetailzCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetMyDetailzCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.GetMyDetailzCmd;

        /**
         * Verifies a GetMyDetailzCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetMyDetailzCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetMyDetailzCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.GetMyDetailzCmd;

        /**
         * Creates a plain object from a GetMyDetailzCmd message. Also converts values to other types if specified.
         * @param message GetMyDetailzCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.GetMyDetailzCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetMyDetailzCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetMyDetailzResult. */
    interface IGetMyDetailzResult {

        /** GetMyDetailzResult userId */
        userId?: (number|null);

        /** GetMyDetailzResult userName */
        userName?: (string|null);

        /** GetMyDetailzResult headImg */
        headImg?: (string|null);

        /** GetMyDetailzResult sex */
        sex?: (number|null);

        /** GetMyDetailzResult roomCard */
        roomCard?: (number|null);

        /** GetMyDetailzResult lastLoginIp */
        lastLoginIp?: (string|null);
    }

    /** Represents a GetMyDetailzResult. */
    class GetMyDetailzResult implements IGetMyDetailzResult {

        /**
         * Constructs a new GetMyDetailzResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IGetMyDetailzResult);

        /** GetMyDetailzResult userId. */
        public userId: number;

        /** GetMyDetailzResult userName. */
        public userName: string;

        /** GetMyDetailzResult headImg. */
        public headImg: string;

        /** GetMyDetailzResult sex. */
        public sex: number;

        /** GetMyDetailzResult roomCard. */
        public roomCard: number;

        /** GetMyDetailzResult lastLoginIp. */
        public lastLoginIp: string;

        /**
         * Creates a new GetMyDetailzResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetMyDetailzResult instance
         */
        public static create(properties?: msg.IGetMyDetailzResult): msg.GetMyDetailzResult;

        /**
         * Encodes the specified GetMyDetailzResult message. Does not implicitly {@link msg.GetMyDetailzResult.verify|verify} messages.
         * @param message GetMyDetailzResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IGetMyDetailzResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetMyDetailzResult message, length delimited. Does not implicitly {@link msg.GetMyDetailzResult.verify|verify} messages.
         * @param message GetMyDetailzResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IGetMyDetailzResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetMyDetailzResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetMyDetailzResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.GetMyDetailzResult;

        /**
         * Decodes a GetMyDetailzResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetMyDetailzResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.GetMyDetailzResult;

        /**
         * Verifies a GetMyDetailzResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetMyDetailzResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetMyDetailzResult
         */
        public static fromObject(object: { [k: string]: any }): msg.GetMyDetailzResult;

        /**
         * Creates a plain object from a GetMyDetailzResult message. Also converts values to other types if specified.
         * @param message GetMyDetailzResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.GetMyDetailzResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetMyDetailzResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetJoinedRoomIdCmd. */
    interface IGetJoinedRoomIdCmd {
    }

    /** Represents a GetJoinedRoomIdCmd. */
    class GetJoinedRoomIdCmd implements IGetJoinedRoomIdCmd {

        /**
         * Constructs a new GetJoinedRoomIdCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IGetJoinedRoomIdCmd);

        /**
         * Creates a new GetJoinedRoomIdCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetJoinedRoomIdCmd instance
         */
        public static create(properties?: msg.IGetJoinedRoomIdCmd): msg.GetJoinedRoomIdCmd;

        /**
         * Encodes the specified GetJoinedRoomIdCmd message. Does not implicitly {@link msg.GetJoinedRoomIdCmd.verify|verify} messages.
         * @param message GetJoinedRoomIdCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IGetJoinedRoomIdCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetJoinedRoomIdCmd message, length delimited. Does not implicitly {@link msg.GetJoinedRoomIdCmd.verify|verify} messages.
         * @param message GetJoinedRoomIdCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IGetJoinedRoomIdCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetJoinedRoomIdCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetJoinedRoomIdCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.GetJoinedRoomIdCmd;

        /**
         * Decodes a GetJoinedRoomIdCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetJoinedRoomIdCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.GetJoinedRoomIdCmd;

        /**
         * Verifies a GetJoinedRoomIdCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetJoinedRoomIdCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetJoinedRoomIdCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.GetJoinedRoomIdCmd;

        /**
         * Creates a plain object from a GetJoinedRoomIdCmd message. Also converts values to other types if specified.
         * @param message GetJoinedRoomIdCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.GetJoinedRoomIdCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetJoinedRoomIdCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetJoinedRoomIdResult. */
    interface IGetJoinedRoomIdResult {

        /** GetJoinedRoomIdResult roomId */
        roomId?: (number|null);
    }

    /** Represents a GetJoinedRoomIdResult. */
    class GetJoinedRoomIdResult implements IGetJoinedRoomIdResult {

        /**
         * Constructs a new GetJoinedRoomIdResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IGetJoinedRoomIdResult);

        /** GetJoinedRoomIdResult roomId. */
        public roomId: number;

        /**
         * Creates a new GetJoinedRoomIdResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetJoinedRoomIdResult instance
         */
        public static create(properties?: msg.IGetJoinedRoomIdResult): msg.GetJoinedRoomIdResult;

        /**
         * Encodes the specified GetJoinedRoomIdResult message. Does not implicitly {@link msg.GetJoinedRoomIdResult.verify|verify} messages.
         * @param message GetJoinedRoomIdResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IGetJoinedRoomIdResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetJoinedRoomIdResult message, length delimited. Does not implicitly {@link msg.GetJoinedRoomIdResult.verify|verify} messages.
         * @param message GetJoinedRoomIdResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IGetJoinedRoomIdResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetJoinedRoomIdResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetJoinedRoomIdResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.GetJoinedRoomIdResult;

        /**
         * Decodes a GetJoinedRoomIdResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetJoinedRoomIdResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.GetJoinedRoomIdResult;

        /**
         * Verifies a GetJoinedRoomIdResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetJoinedRoomIdResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetJoinedRoomIdResult
         */
        public static fromObject(object: { [k: string]: any }): msg.GetJoinedRoomIdResult;

        /**
         * Creates a plain object from a GetJoinedRoomIdResult message. Also converts values to other types if specified.
         * @param message GetJoinedRoomIdResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.GetJoinedRoomIdResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetJoinedRoomIdResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateRoomCmd. */
    interface ICreateRoomCmd {

        /** CreateRoomCmd gameType0 */
        gameType0?: (number|null);

        /** CreateRoomCmd gameType1 */
        gameType1?: (number|null);

        /** CreateRoomCmd ruleItem */
        ruleItem?: (msg.IKeyAndVal[]|null);
    }

    /** Represents a CreateRoomCmd. */
    class CreateRoomCmd implements ICreateRoomCmd {

        /**
         * Constructs a new CreateRoomCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ICreateRoomCmd);

        /** CreateRoomCmd gameType0. */
        public gameType0: number;

        /** CreateRoomCmd gameType1. */
        public gameType1: number;

        /** CreateRoomCmd ruleItem. */
        public ruleItem: msg.IKeyAndVal[];

        /**
         * Creates a new CreateRoomCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateRoomCmd instance
         */
        public static create(properties?: msg.ICreateRoomCmd): msg.CreateRoomCmd;

        /**
         * Encodes the specified CreateRoomCmd message. Does not implicitly {@link msg.CreateRoomCmd.verify|verify} messages.
         * @param message CreateRoomCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ICreateRoomCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateRoomCmd message, length delimited. Does not implicitly {@link msg.CreateRoomCmd.verify|verify} messages.
         * @param message CreateRoomCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ICreateRoomCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateRoomCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateRoomCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.CreateRoomCmd;

        /**
         * Decodes a CreateRoomCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateRoomCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.CreateRoomCmd;

        /**
         * Verifies a CreateRoomCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateRoomCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateRoomCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.CreateRoomCmd;

        /**
         * Creates a plain object from a CreateRoomCmd message. Also converts values to other types if specified.
         * @param message CreateRoomCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.CreateRoomCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateRoomCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateRoomResult. */
    interface ICreateRoomResult {

        /** CreateRoomResult roomId */
        roomId?: (number|null);
    }

    /** Represents a CreateRoomResult. */
    class CreateRoomResult implements ICreateRoomResult {

        /**
         * Constructs a new CreateRoomResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ICreateRoomResult);

        /** CreateRoomResult roomId. */
        public roomId: number;

        /**
         * Creates a new CreateRoomResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateRoomResult instance
         */
        public static create(properties?: msg.ICreateRoomResult): msg.CreateRoomResult;

        /**
         * Encodes the specified CreateRoomResult message. Does not implicitly {@link msg.CreateRoomResult.verify|verify} messages.
         * @param message CreateRoomResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ICreateRoomResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateRoomResult message, length delimited. Does not implicitly {@link msg.CreateRoomResult.verify|verify} messages.
         * @param message CreateRoomResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ICreateRoomResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateRoomResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateRoomResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.CreateRoomResult;

        /**
         * Decodes a CreateRoomResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateRoomResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.CreateRoomResult;

        /**
         * Verifies a CreateRoomResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateRoomResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateRoomResult
         */
        public static fromObject(object: { [k: string]: any }): msg.CreateRoomResult;

        /**
         * Creates a plain object from a CreateRoomResult message. Also converts values to other types if specified.
         * @param message CreateRoomResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.CreateRoomResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateRoomResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a JoinRoomCmd. */
    interface IJoinRoomCmd {

        /** JoinRoomCmd roomId */
        roomId?: (number|null);
    }

    /** Represents a JoinRoomCmd. */
    class JoinRoomCmd implements IJoinRoomCmd {

        /**
         * Constructs a new JoinRoomCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IJoinRoomCmd);

        /** JoinRoomCmd roomId. */
        public roomId: number;

        /**
         * Creates a new JoinRoomCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinRoomCmd instance
         */
        public static create(properties?: msg.IJoinRoomCmd): msg.JoinRoomCmd;

        /**
         * Encodes the specified JoinRoomCmd message. Does not implicitly {@link msg.JoinRoomCmd.verify|verify} messages.
         * @param message JoinRoomCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IJoinRoomCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinRoomCmd message, length delimited. Does not implicitly {@link msg.JoinRoomCmd.verify|verify} messages.
         * @param message JoinRoomCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IJoinRoomCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinRoomCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinRoomCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.JoinRoomCmd;

        /**
         * Decodes a JoinRoomCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinRoomCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.JoinRoomCmd;

        /**
         * Verifies a JoinRoomCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinRoomCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinRoomCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.JoinRoomCmd;

        /**
         * Creates a plain object from a JoinRoomCmd message. Also converts values to other types if specified.
         * @param message JoinRoomCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.JoinRoomCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinRoomCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a JoinRoomResult. */
    interface IJoinRoomResult {

        /** JoinRoomResult roomId */
        roomId?: (number|null);

        /** JoinRoomResult gameType0 */
        gameType0?: (number|null);

        /** JoinRoomResult gameType1 */
        gameType1?: (number|null);

        /** JoinRoomResult ruleItem */
        ruleItem?: (msg.IKeyAndVal[]|null);
    }

    /** Represents a JoinRoomResult. */
    class JoinRoomResult implements IJoinRoomResult {

        /**
         * Constructs a new JoinRoomResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IJoinRoomResult);

        /** JoinRoomResult roomId. */
        public roomId: number;

        /** JoinRoomResult gameType0. */
        public gameType0: number;

        /** JoinRoomResult gameType1. */
        public gameType1: number;

        /** JoinRoomResult ruleItem. */
        public ruleItem: msg.IKeyAndVal[];

        /**
         * Creates a new JoinRoomResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinRoomResult instance
         */
        public static create(properties?: msg.IJoinRoomResult): msg.JoinRoomResult;

        /**
         * Encodes the specified JoinRoomResult message. Does not implicitly {@link msg.JoinRoomResult.verify|verify} messages.
         * @param message JoinRoomResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IJoinRoomResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinRoomResult message, length delimited. Does not implicitly {@link msg.JoinRoomResult.verify|verify} messages.
         * @param message JoinRoomResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IJoinRoomResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinRoomResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinRoomResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.JoinRoomResult;

        /**
         * Decodes a JoinRoomResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinRoomResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.JoinRoomResult;

        /**
         * Verifies a JoinRoomResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinRoomResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinRoomResult
         */
        public static fromObject(object: { [k: string]: any }): msg.JoinRoomResult;

        /**
         * Creates a plain object from a JoinRoomResult message. Also converts values to other types if specified.
         * @param message JoinRoomResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.JoinRoomResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinRoomResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
