import * as $protobuf from "protobufjs";
/** Namespace msg. */
export namespace msg {

    /** CommMsgCodeDef enum. */
    enum CommMsgCodeDef {
        _Dummy = 0,
        _PingCmd = 1,
        _PingResult = 2,
        _ReconnCmd = 3,
        _ReconnResult = 4,
        _SuccezzHintResult = 11,
        _ErrorHintResult = 12,
        _CheckInTicketCmd = 13,
        _CheckInTicketResult = 14,
        _KickOutUserResult = 44
    }

    /** Properties of a PingCmd. */
    interface IPingCmd {

        /** PingCmd pingId */
        pingId?: (number|null);
    }

    /** Represents a PingCmd. */
    class PingCmd implements IPingCmd {

        /**
         * Constructs a new PingCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPingCmd);

        /** PingCmd pingId. */
        public pingId: number;

        /**
         * Creates a new PingCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PingCmd instance
         */
        public static create(properties?: msg.IPingCmd): msg.PingCmd;

        /**
         * Encodes the specified PingCmd message. Does not implicitly {@link msg.PingCmd.verify|verify} messages.
         * @param message PingCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPingCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PingCmd message, length delimited. Does not implicitly {@link msg.PingCmd.verify|verify} messages.
         * @param message PingCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPingCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PingCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PingCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.PingCmd;

        /**
         * Decodes a PingCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PingCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.PingCmd;

        /**
         * Verifies a PingCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PingCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PingCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.PingCmd;

        /**
         * Creates a plain object from a PingCmd message. Also converts values to other types if specified.
         * @param message PingCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PingCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PingCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PingResult. */
    interface IPingResult {

        /** PingResult pingId */
        pingId?: (number|null);
    }

    /** Represents a PingResult. */
    class PingResult implements IPingResult {

        /**
         * Constructs a new PingResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPingResult);

        /** PingResult pingId. */
        public pingId: number;

        /**
         * Creates a new PingResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PingResult instance
         */
        public static create(properties?: msg.IPingResult): msg.PingResult;

        /**
         * Encodes the specified PingResult message. Does not implicitly {@link msg.PingResult.verify|verify} messages.
         * @param message PingResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPingResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PingResult message, length delimited. Does not implicitly {@link msg.PingResult.verify|verify} messages.
         * @param message PingResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPingResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PingResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PingResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.PingResult;

        /**
         * Decodes a PingResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PingResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.PingResult;

        /**
         * Verifies a PingResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PingResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PingResult
         */
        public static fromObject(object: { [k: string]: any }): msg.PingResult;

        /**
         * Creates a plain object from a PingResult message. Also converts values to other types if specified.
         * @param message PingResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PingResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PingResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReconnCmd. */
    interface IReconnCmd {

        /** ReconnCmd userId */
        userId?: (number|null);

        /** ReconnCmd ukeyStr */
        ukeyStr?: (string|null);

        /** ReconnCmd ukeyExpireAt */
        ukeyExpireAt?: (number|Long|null);
    }

    /** Represents a ReconnCmd. */
    class ReconnCmd implements IReconnCmd {

        /**
         * Constructs a new ReconnCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IReconnCmd);

        /** ReconnCmd userId. */
        public userId: number;

        /** ReconnCmd ukeyStr. */
        public ukeyStr: string;

        /** ReconnCmd ukeyExpireAt. */
        public ukeyExpireAt: (number|Long);

        /**
         * Creates a new ReconnCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReconnCmd instance
         */
        public static create(properties?: msg.IReconnCmd): msg.ReconnCmd;

        /**
         * Encodes the specified ReconnCmd message. Does not implicitly {@link msg.ReconnCmd.verify|verify} messages.
         * @param message ReconnCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IReconnCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReconnCmd message, length delimited. Does not implicitly {@link msg.ReconnCmd.verify|verify} messages.
         * @param message ReconnCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IReconnCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReconnCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReconnCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.ReconnCmd;

        /**
         * Decodes a ReconnCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReconnCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.ReconnCmd;

        /**
         * Verifies a ReconnCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReconnCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReconnCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.ReconnCmd;

        /**
         * Creates a plain object from a ReconnCmd message. Also converts values to other types if specified.
         * @param message ReconnCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.ReconnCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReconnCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReconnResult. */
    interface IReconnResult {

        /** ReconnResult userId */
        userId?: (number|null);

        /** ReconnResult ukeyStr */
        ukeyStr?: (string|null);

        /** ReconnResult ukeyExpireAt */
        ukeyExpireAt?: (number|Long|null);

        /** ReconnResult ok */
        ok?: (boolean|null);
    }

    /** Represents a ReconnResult. */
    class ReconnResult implements IReconnResult {

        /**
         * Constructs a new ReconnResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IReconnResult);

        /** ReconnResult userId. */
        public userId: number;

        /** ReconnResult ukeyStr. */
        public ukeyStr: string;

        /** ReconnResult ukeyExpireAt. */
        public ukeyExpireAt: (number|Long);

        /** ReconnResult ok. */
        public ok: boolean;

        /**
         * Creates a new ReconnResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReconnResult instance
         */
        public static create(properties?: msg.IReconnResult): msg.ReconnResult;

        /**
         * Encodes the specified ReconnResult message. Does not implicitly {@link msg.ReconnResult.verify|verify} messages.
         * @param message ReconnResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IReconnResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReconnResult message, length delimited. Does not implicitly {@link msg.ReconnResult.verify|verify} messages.
         * @param message ReconnResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IReconnResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReconnResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReconnResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.ReconnResult;

        /**
         * Decodes a ReconnResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReconnResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.ReconnResult;

        /**
         * Verifies a ReconnResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReconnResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReconnResult
         */
        public static fromObject(object: { [k: string]: any }): msg.ReconnResult;

        /**
         * Creates a plain object from a ReconnResult message. Also converts values to other types if specified.
         * @param message ReconnResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.ReconnResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReconnResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SuccezzHintResult. */
    interface ISuccezzHintResult {

        /** SuccezzHintResult succezzInfo */
        succezzInfo?: (string|null);
    }

    /** Represents a SuccezzHintResult. */
    class SuccezzHintResult implements ISuccezzHintResult {

        /**
         * Constructs a new SuccezzHintResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ISuccezzHintResult);

        /** SuccezzHintResult succezzInfo. */
        public succezzInfo: string;

        /**
         * Creates a new SuccezzHintResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SuccezzHintResult instance
         */
        public static create(properties?: msg.ISuccezzHintResult): msg.SuccezzHintResult;

        /**
         * Encodes the specified SuccezzHintResult message. Does not implicitly {@link msg.SuccezzHintResult.verify|verify} messages.
         * @param message SuccezzHintResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ISuccezzHintResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SuccezzHintResult message, length delimited. Does not implicitly {@link msg.SuccezzHintResult.verify|verify} messages.
         * @param message SuccezzHintResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ISuccezzHintResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SuccezzHintResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SuccezzHintResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.SuccezzHintResult;

        /**
         * Decodes a SuccezzHintResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SuccezzHintResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.SuccezzHintResult;

        /**
         * Verifies a SuccezzHintResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SuccezzHintResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SuccezzHintResult
         */
        public static fromObject(object: { [k: string]: any }): msg.SuccezzHintResult;

        /**
         * Creates a plain object from a SuccezzHintResult message. Also converts values to other types if specified.
         * @param message SuccezzHintResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.SuccezzHintResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SuccezzHintResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ErrorHintResult. */
    interface IErrorHintResult {

        /** ErrorHintResult errorCode */
        errorCode?: (number|null);

        /** ErrorHintResult errorMsg */
        errorMsg?: (string|null);
    }

    /** Represents an ErrorHintResult. */
    class ErrorHintResult implements IErrorHintResult {

        /**
         * Constructs a new ErrorHintResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IErrorHintResult);

        /** ErrorHintResult errorCode. */
        public errorCode: number;

        /** ErrorHintResult errorMsg. */
        public errorMsg: string;

        /**
         * Creates a new ErrorHintResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ErrorHintResult instance
         */
        public static create(properties?: msg.IErrorHintResult): msg.ErrorHintResult;

        /**
         * Encodes the specified ErrorHintResult message. Does not implicitly {@link msg.ErrorHintResult.verify|verify} messages.
         * @param message ErrorHintResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IErrorHintResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ErrorHintResult message, length delimited. Does not implicitly {@link msg.ErrorHintResult.verify|verify} messages.
         * @param message ErrorHintResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IErrorHintResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ErrorHintResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ErrorHintResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.ErrorHintResult;

        /**
         * Decodes an ErrorHintResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ErrorHintResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.ErrorHintResult;

        /**
         * Verifies an ErrorHintResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ErrorHintResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ErrorHintResult
         */
        public static fromObject(object: { [k: string]: any }): msg.ErrorHintResult;

        /**
         * Creates a plain object from an ErrorHintResult message. Also converts values to other types if specified.
         * @param message ErrorHintResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.ErrorHintResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ErrorHintResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CheckInTicketCmd. */
    interface ICheckInTicketCmd {

        /** CheckInTicketCmd userId */
        userId?: (number|null);

        /** CheckInTicketCmd ticket */
        ticket?: (string|null);
    }

    /** Represents a CheckInTicketCmd. */
    class CheckInTicketCmd implements ICheckInTicketCmd {

        /**
         * Constructs a new CheckInTicketCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ICheckInTicketCmd);

        /** CheckInTicketCmd userId. */
        public userId: number;

        /** CheckInTicketCmd ticket. */
        public ticket: string;

        /**
         * Creates a new CheckInTicketCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CheckInTicketCmd instance
         */
        public static create(properties?: msg.ICheckInTicketCmd): msg.CheckInTicketCmd;

        /**
         * Encodes the specified CheckInTicketCmd message. Does not implicitly {@link msg.CheckInTicketCmd.verify|verify} messages.
         * @param message CheckInTicketCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ICheckInTicketCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CheckInTicketCmd message, length delimited. Does not implicitly {@link msg.CheckInTicketCmd.verify|verify} messages.
         * @param message CheckInTicketCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ICheckInTicketCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CheckInTicketCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CheckInTicketCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.CheckInTicketCmd;

        /**
         * Decodes a CheckInTicketCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CheckInTicketCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.CheckInTicketCmd;

        /**
         * Verifies a CheckInTicketCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CheckInTicketCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CheckInTicketCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.CheckInTicketCmd;

        /**
         * Creates a plain object from a CheckInTicketCmd message. Also converts values to other types if specified.
         * @param message CheckInTicketCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.CheckInTicketCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CheckInTicketCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CheckInTicketResult. */
    interface ICheckInTicketResult {

        /** CheckInTicketResult userId */
        userId?: (number|null);

        /** CheckInTicketResult succezz */
        succezz?: (boolean|null);
    }

    /** Represents a CheckInTicketResult. */
    class CheckInTicketResult implements ICheckInTicketResult {

        /**
         * Constructs a new CheckInTicketResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ICheckInTicketResult);

        /** CheckInTicketResult userId. */
        public userId: number;

        /** CheckInTicketResult succezz. */
        public succezz: boolean;

        /**
         * Creates a new CheckInTicketResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CheckInTicketResult instance
         */
        public static create(properties?: msg.ICheckInTicketResult): msg.CheckInTicketResult;

        /**
         * Encodes the specified CheckInTicketResult message. Does not implicitly {@link msg.CheckInTicketResult.verify|verify} messages.
         * @param message CheckInTicketResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ICheckInTicketResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CheckInTicketResult message, length delimited. Does not implicitly {@link msg.CheckInTicketResult.verify|verify} messages.
         * @param message CheckInTicketResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ICheckInTicketResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CheckInTicketResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CheckInTicketResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.CheckInTicketResult;

        /**
         * Decodes a CheckInTicketResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CheckInTicketResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.CheckInTicketResult;

        /**
         * Verifies a CheckInTicketResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CheckInTicketResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CheckInTicketResult
         */
        public static fromObject(object: { [k: string]: any }): msg.CheckInTicketResult;

        /**
         * Creates a plain object from a CheckInTicketResult message. Also converts values to other types if specified.
         * @param message CheckInTicketResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.CheckInTicketResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CheckInTicketResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KickOutUserResult. */
    interface IKickOutUserResult {

        /** KickOutUserResult reason */
        reason?: (string|null);
    }

    /** Represents a KickOutUserResult. */
    class KickOutUserResult implements IKickOutUserResult {

        /**
         * Constructs a new KickOutUserResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IKickOutUserResult);

        /** KickOutUserResult reason. */
        public reason: string;

        /**
         * Creates a new KickOutUserResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KickOutUserResult instance
         */
        public static create(properties?: msg.IKickOutUserResult): msg.KickOutUserResult;

        /**
         * Encodes the specified KickOutUserResult message. Does not implicitly {@link msg.KickOutUserResult.verify|verify} messages.
         * @param message KickOutUserResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IKickOutUserResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KickOutUserResult message, length delimited. Does not implicitly {@link msg.KickOutUserResult.verify|verify} messages.
         * @param message KickOutUserResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IKickOutUserResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KickOutUserResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KickOutUserResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.KickOutUserResult;

        /**
         * Decodes a KickOutUserResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KickOutUserResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.KickOutUserResult;

        /**
         * Verifies a KickOutUserResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KickOutUserResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KickOutUserResult
         */
        public static fromObject(object: { [k: string]: any }): msg.KickOutUserResult;

        /**
         * Creates a plain object from a KickOutUserResult message. Also converts values to other types if specified.
         * @param message KickOutUserResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.KickOutUserResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KickOutUserResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
