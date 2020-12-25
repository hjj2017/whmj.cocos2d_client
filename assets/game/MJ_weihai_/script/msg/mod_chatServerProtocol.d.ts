import * as $protobuf from "protobufjs";
/** Namespace msg. */
export namespace msg {

    /** ChatServerMsgCodeDef enum. */
    enum ChatServerMsgCodeDef {
        _Dummy = 0,
        _SendQuickMsgCmd = 401,
        _SendQuickMsgResult = 402,
        _SendQuickMsgBroadcast = 403,
        _SendEmojiCmd = 404,
        _SendEmojiResult = 405,
        _SendEmojiBroadcast = 406
    }

    /** Properties of a SendQuickMsgCmd. */
    interface ISendQuickMsgCmd {

        /** SendQuickMsgCmd msgId */
        msgId?: (number|null);
    }

    /** Represents a SendQuickMsgCmd. */
    class SendQuickMsgCmd implements ISendQuickMsgCmd {

        /**
         * Constructs a new SendQuickMsgCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ISendQuickMsgCmd);

        /** SendQuickMsgCmd msgId. */
        public msgId: number;

        /**
         * Creates a new SendQuickMsgCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendQuickMsgCmd instance
         */
        public static create(properties?: msg.ISendQuickMsgCmd): msg.SendQuickMsgCmd;

        /**
         * Encodes the specified SendQuickMsgCmd message. Does not implicitly {@link msg.SendQuickMsgCmd.verify|verify} messages.
         * @param message SendQuickMsgCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ISendQuickMsgCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendQuickMsgCmd message, length delimited. Does not implicitly {@link msg.SendQuickMsgCmd.verify|verify} messages.
         * @param message SendQuickMsgCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ISendQuickMsgCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendQuickMsgCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendQuickMsgCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.SendQuickMsgCmd;

        /**
         * Decodes a SendQuickMsgCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendQuickMsgCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.SendQuickMsgCmd;

        /**
         * Verifies a SendQuickMsgCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendQuickMsgCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendQuickMsgCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.SendQuickMsgCmd;

        /**
         * Creates a plain object from a SendQuickMsgCmd message. Also converts values to other types if specified.
         * @param message SendQuickMsgCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.SendQuickMsgCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendQuickMsgCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendQuickMsgResult. */
    interface ISendQuickMsgResult {

        /** SendQuickMsgResult msgId */
        msgId?: (number|null);

        /** SendQuickMsgResult ok */
        ok?: (boolean|null);
    }

    /** Represents a SendQuickMsgResult. */
    class SendQuickMsgResult implements ISendQuickMsgResult {

        /**
         * Constructs a new SendQuickMsgResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ISendQuickMsgResult);

        /** SendQuickMsgResult msgId. */
        public msgId: number;

        /** SendQuickMsgResult ok. */
        public ok: boolean;

        /**
         * Creates a new SendQuickMsgResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendQuickMsgResult instance
         */
        public static create(properties?: msg.ISendQuickMsgResult): msg.SendQuickMsgResult;

        /**
         * Encodes the specified SendQuickMsgResult message. Does not implicitly {@link msg.SendQuickMsgResult.verify|verify} messages.
         * @param message SendQuickMsgResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ISendQuickMsgResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendQuickMsgResult message, length delimited. Does not implicitly {@link msg.SendQuickMsgResult.verify|verify} messages.
         * @param message SendQuickMsgResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ISendQuickMsgResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendQuickMsgResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendQuickMsgResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.SendQuickMsgResult;

        /**
         * Decodes a SendQuickMsgResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendQuickMsgResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.SendQuickMsgResult;

        /**
         * Verifies a SendQuickMsgResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendQuickMsgResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendQuickMsgResult
         */
        public static fromObject(object: { [k: string]: any }): msg.SendQuickMsgResult;

        /**
         * Creates a plain object from a SendQuickMsgResult message. Also converts values to other types if specified.
         * @param message SendQuickMsgResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.SendQuickMsgResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendQuickMsgResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendQuickMsgBroadcast. */
    interface ISendQuickMsgBroadcast {

        /** SendQuickMsgBroadcast fromUserId */
        fromUserId?: (number|null);

        /** SendQuickMsgBroadcast msgId */
        msgId?: (number|null);

        /** SendQuickMsgBroadcast ok */
        ok?: (boolean|null);
    }

    /** Represents a SendQuickMsgBroadcast. */
    class SendQuickMsgBroadcast implements ISendQuickMsgBroadcast {

        /**
         * Constructs a new SendQuickMsgBroadcast.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ISendQuickMsgBroadcast);

        /** SendQuickMsgBroadcast fromUserId. */
        public fromUserId: number;

        /** SendQuickMsgBroadcast msgId. */
        public msgId: number;

        /** SendQuickMsgBroadcast ok. */
        public ok: boolean;

        /**
         * Creates a new SendQuickMsgBroadcast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendQuickMsgBroadcast instance
         */
        public static create(properties?: msg.ISendQuickMsgBroadcast): msg.SendQuickMsgBroadcast;

        /**
         * Encodes the specified SendQuickMsgBroadcast message. Does not implicitly {@link msg.SendQuickMsgBroadcast.verify|verify} messages.
         * @param message SendQuickMsgBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ISendQuickMsgBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendQuickMsgBroadcast message, length delimited. Does not implicitly {@link msg.SendQuickMsgBroadcast.verify|verify} messages.
         * @param message SendQuickMsgBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ISendQuickMsgBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendQuickMsgBroadcast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendQuickMsgBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.SendQuickMsgBroadcast;

        /**
         * Decodes a SendQuickMsgBroadcast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendQuickMsgBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.SendQuickMsgBroadcast;

        /**
         * Verifies a SendQuickMsgBroadcast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendQuickMsgBroadcast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendQuickMsgBroadcast
         */
        public static fromObject(object: { [k: string]: any }): msg.SendQuickMsgBroadcast;

        /**
         * Creates a plain object from a SendQuickMsgBroadcast message. Also converts values to other types if specified.
         * @param message SendQuickMsgBroadcast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.SendQuickMsgBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendQuickMsgBroadcast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendEmojiCmd. */
    interface ISendEmojiCmd {

        /** SendEmojiCmd emojiId */
        emojiId?: (number|null);
    }

    /** Represents a SendEmojiCmd. */
    class SendEmojiCmd implements ISendEmojiCmd {

        /**
         * Constructs a new SendEmojiCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ISendEmojiCmd);

        /** SendEmojiCmd emojiId. */
        public emojiId: number;

        /**
         * Creates a new SendEmojiCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendEmojiCmd instance
         */
        public static create(properties?: msg.ISendEmojiCmd): msg.SendEmojiCmd;

        /**
         * Encodes the specified SendEmojiCmd message. Does not implicitly {@link msg.SendEmojiCmd.verify|verify} messages.
         * @param message SendEmojiCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ISendEmojiCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendEmojiCmd message, length delimited. Does not implicitly {@link msg.SendEmojiCmd.verify|verify} messages.
         * @param message SendEmojiCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ISendEmojiCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendEmojiCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendEmojiCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.SendEmojiCmd;

        /**
         * Decodes a SendEmojiCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendEmojiCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.SendEmojiCmd;

        /**
         * Verifies a SendEmojiCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendEmojiCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendEmojiCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.SendEmojiCmd;

        /**
         * Creates a plain object from a SendEmojiCmd message. Also converts values to other types if specified.
         * @param message SendEmojiCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.SendEmojiCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendEmojiCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendEmojiResult. */
    interface ISendEmojiResult {

        /** SendEmojiResult emojiId */
        emojiId?: (number|null);

        /** SendEmojiResult ok */
        ok?: (boolean|null);
    }

    /** Represents a SendEmojiResult. */
    class SendEmojiResult implements ISendEmojiResult {

        /**
         * Constructs a new SendEmojiResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ISendEmojiResult);

        /** SendEmojiResult emojiId. */
        public emojiId: number;

        /** SendEmojiResult ok. */
        public ok: boolean;

        /**
         * Creates a new SendEmojiResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendEmojiResult instance
         */
        public static create(properties?: msg.ISendEmojiResult): msg.SendEmojiResult;

        /**
         * Encodes the specified SendEmojiResult message. Does not implicitly {@link msg.SendEmojiResult.verify|verify} messages.
         * @param message SendEmojiResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ISendEmojiResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendEmojiResult message, length delimited. Does not implicitly {@link msg.SendEmojiResult.verify|verify} messages.
         * @param message SendEmojiResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ISendEmojiResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendEmojiResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendEmojiResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.SendEmojiResult;

        /**
         * Decodes a SendEmojiResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendEmojiResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.SendEmojiResult;

        /**
         * Verifies a SendEmojiResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendEmojiResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendEmojiResult
         */
        public static fromObject(object: { [k: string]: any }): msg.SendEmojiResult;

        /**
         * Creates a plain object from a SendEmojiResult message. Also converts values to other types if specified.
         * @param message SendEmojiResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.SendEmojiResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendEmojiResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendEmojiBroadcast. */
    interface ISendEmojiBroadcast {

        /** SendEmojiBroadcast fromUserId */
        fromUserId?: (number|null);

        /** SendEmojiBroadcast emojiId */
        emojiId?: (number|null);

        /** SendEmojiBroadcast ok */
        ok?: (boolean|null);
    }

    /** Represents a SendEmojiBroadcast. */
    class SendEmojiBroadcast implements ISendEmojiBroadcast {

        /**
         * Constructs a new SendEmojiBroadcast.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ISendEmojiBroadcast);

        /** SendEmojiBroadcast fromUserId. */
        public fromUserId: number;

        /** SendEmojiBroadcast emojiId. */
        public emojiId: number;

        /** SendEmojiBroadcast ok. */
        public ok: boolean;

        /**
         * Creates a new SendEmojiBroadcast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendEmojiBroadcast instance
         */
        public static create(properties?: msg.ISendEmojiBroadcast): msg.SendEmojiBroadcast;

        /**
         * Encodes the specified SendEmojiBroadcast message. Does not implicitly {@link msg.SendEmojiBroadcast.verify|verify} messages.
         * @param message SendEmojiBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ISendEmojiBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendEmojiBroadcast message, length delimited. Does not implicitly {@link msg.SendEmojiBroadcast.verify|verify} messages.
         * @param message SendEmojiBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ISendEmojiBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendEmojiBroadcast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendEmojiBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.SendEmojiBroadcast;

        /**
         * Decodes a SendEmojiBroadcast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendEmojiBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.SendEmojiBroadcast;

        /**
         * Verifies a SendEmojiBroadcast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendEmojiBroadcast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendEmojiBroadcast
         */
        public static fromObject(object: { [k: string]: any }): msg.SendEmojiBroadcast;

        /**
         * Creates a plain object from a SendEmojiBroadcast message. Also converts values to other types if specified.
         * @param message SendEmojiBroadcast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.SendEmojiBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendEmojiBroadcast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
