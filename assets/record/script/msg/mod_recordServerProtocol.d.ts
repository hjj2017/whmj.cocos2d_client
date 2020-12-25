import * as $protobuf from "protobufjs";
/** Namespace msg. */
export namespace msg {

    /** RecordServerMsgCodeDef enum. */
    enum RecordServerMsgCodeDef {
        _Dummy = 0,
        _GetRecordListCmd = 501,
        _GetRecordListResult = 502,
        _GetRecordDetailzCmd = 503,
        _GetRecordDetailzResult = 504
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

    /** Properties of a Player. */
    interface IPlayer {

        /** Player userId */
        userId?: (number|null);

        /** Player userName */
        userName?: (string|null);

        /** Player headImg */
        headImg?: (string|null);

        /** Player sex */
        sex?: (number|null);

        /** Player currScore */
        currScore?: (number|null);

        /** Player totalScore */
        totalScore?: (number|null);

        /** Player seatIndex */
        seatIndex?: (number|null);

        /** Player zhuangFlag */
        zhuangFlag?: (boolean|null);

        /** Player ziMo */
        ziMo?: (boolean|null);

        /** Player hu */
        hu?: (boolean|null);

        /** Player dianPao */
        dianPao?: (boolean|null);

        /** Player diZhu */
        diZhu?: (boolean|null);

        /** Player nongMin */
        nongMin?: (boolean|null);

        /** Player winner */
        winner?: (boolean|null);
    }

    /** Represents a Player. */
    class Player implements IPlayer {

        /**
         * Constructs a new Player.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPlayer);

        /** Player userId. */
        public userId: number;

        /** Player userName. */
        public userName: string;

        /** Player headImg. */
        public headImg: string;

        /** Player sex. */
        public sex: number;

        /** Player currScore. */
        public currScore: number;

        /** Player totalScore. */
        public totalScore: number;

        /** Player seatIndex. */
        public seatIndex: number;

        /** Player zhuangFlag. */
        public zhuangFlag: boolean;

        /** Player ziMo. */
        public ziMo: boolean;

        /** Player hu. */
        public hu: boolean;

        /** Player dianPao. */
        public dianPao: boolean;

        /** Player diZhu. */
        public diZhu: boolean;

        /** Player nongMin. */
        public nongMin: boolean;

        /** Player winner. */
        public winner: boolean;

        /**
         * Creates a new Player instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Player instance
         */
        public static create(properties?: msg.IPlayer): msg.Player;

        /**
         * Encodes the specified Player message. Does not implicitly {@link msg.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link msg.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.Player;

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.Player;

        /**
         * Verifies a Player message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Player message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Player
         */
        public static fromObject(object: { [k: string]: any }): msg.Player;

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @param message Player
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.Player, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Player to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetRecordListCmd. */
    interface IGetRecordListCmd {

        /** GetRecordListCmd userId */
        userId?: (number|null);

        /** GetRecordListCmd clubId */
        clubId?: (number|null);

        /** GetRecordListCmd gameType0 */
        gameType0?: (number|null);

        /** GetRecordListCmd gameType1 */
        gameType1?: (number|null);

        /** GetRecordListCmd pageIndex */
        pageIndex?: (number|null);

        /** GetRecordListCmd pageSize */
        pageSize?: (number|null);
    }

    /** Represents a GetRecordListCmd. */
    class GetRecordListCmd implements IGetRecordListCmd {

        /**
         * Constructs a new GetRecordListCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IGetRecordListCmd);

        /** GetRecordListCmd userId. */
        public userId: number;

        /** GetRecordListCmd clubId. */
        public clubId: number;

        /** GetRecordListCmd gameType0. */
        public gameType0: number;

        /** GetRecordListCmd gameType1. */
        public gameType1: number;

        /** GetRecordListCmd pageIndex. */
        public pageIndex: number;

        /** GetRecordListCmd pageSize. */
        public pageSize: number;

        /**
         * Creates a new GetRecordListCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRecordListCmd instance
         */
        public static create(properties?: msg.IGetRecordListCmd): msg.GetRecordListCmd;

        /**
         * Encodes the specified GetRecordListCmd message. Does not implicitly {@link msg.GetRecordListCmd.verify|verify} messages.
         * @param message GetRecordListCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IGetRecordListCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetRecordListCmd message, length delimited. Does not implicitly {@link msg.GetRecordListCmd.verify|verify} messages.
         * @param message GetRecordListCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IGetRecordListCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRecordListCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRecordListCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.GetRecordListCmd;

        /**
         * Decodes a GetRecordListCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRecordListCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.GetRecordListCmd;

        /**
         * Verifies a GetRecordListCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetRecordListCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetRecordListCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.GetRecordListCmd;

        /**
         * Creates a plain object from a GetRecordListCmd message. Also converts values to other types if specified.
         * @param message GetRecordListCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.GetRecordListCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetRecordListCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetRecordListResult. */
    interface IGetRecordListResult {

        /** GetRecordListResult userId */
        userId?: (number|null);

        /** GetRecordListResult clubId */
        clubId?: (number|null);

        /** GetRecordListResult gameType0 */
        gameType0?: (number|null);

        /** GetRecordListResult gameType1 */
        gameType1?: (number|null);

        /** GetRecordListResult pageIndex */
        pageIndex?: (number|null);

        /** GetRecordListResult totalCount */
        totalCount?: (number|null);

        /** GetRecordListResult recordz */
        recordz?: (msg.GetRecordListResult.IARecord[]|null);
    }

    /** Represents a GetRecordListResult. */
    class GetRecordListResult implements IGetRecordListResult {

        /**
         * Constructs a new GetRecordListResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IGetRecordListResult);

        /** GetRecordListResult userId. */
        public userId: number;

        /** GetRecordListResult clubId. */
        public clubId: number;

        /** GetRecordListResult gameType0. */
        public gameType0: number;

        /** GetRecordListResult gameType1. */
        public gameType1: number;

        /** GetRecordListResult pageIndex. */
        public pageIndex: number;

        /** GetRecordListResult totalCount. */
        public totalCount: number;

        /** GetRecordListResult recordz. */
        public recordz: msg.GetRecordListResult.IARecord[];

        /**
         * Creates a new GetRecordListResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRecordListResult instance
         */
        public static create(properties?: msg.IGetRecordListResult): msg.GetRecordListResult;

        /**
         * Encodes the specified GetRecordListResult message. Does not implicitly {@link msg.GetRecordListResult.verify|verify} messages.
         * @param message GetRecordListResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IGetRecordListResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetRecordListResult message, length delimited. Does not implicitly {@link msg.GetRecordListResult.verify|verify} messages.
         * @param message GetRecordListResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IGetRecordListResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRecordListResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRecordListResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.GetRecordListResult;

        /**
         * Decodes a GetRecordListResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRecordListResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.GetRecordListResult;

        /**
         * Verifies a GetRecordListResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetRecordListResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetRecordListResult
         */
        public static fromObject(object: { [k: string]: any }): msg.GetRecordListResult;

        /**
         * Creates a plain object from a GetRecordListResult message. Also converts values to other types if specified.
         * @param message GetRecordListResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.GetRecordListResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetRecordListResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace GetRecordListResult {

        /** Properties of a ARecord. */
        interface IARecord {

            /** ARecord gameType1 */
            gameType1?: (number|null);

            /** ARecord roomId */
            roomId?: (number|null);

            /** ARecord roomUUId */
            roomUUId?: (string|null);

            /** ARecord costRoomCard */
            costRoomCard?: (number|null);

            /** ARecord actualRoundCount */
            actualRoundCount?: (number|null);

            /** ARecord createTime */
            createTime?: (number|Long|null);

            /** ARecord overTime */
            overTime?: (number|Long|null);

            /** ARecord player */
            player?: (msg.IPlayer[]|null);
        }

        /** Represents a ARecord. */
        class ARecord implements IARecord {

            /**
             * Constructs a new ARecord.
             * @param [properties] Properties to set
             */
            constructor(properties?: msg.GetRecordListResult.IARecord);

            /** ARecord gameType1. */
            public gameType1: number;

            /** ARecord roomId. */
            public roomId: number;

            /** ARecord roomUUId. */
            public roomUUId: string;

            /** ARecord costRoomCard. */
            public costRoomCard: number;

            /** ARecord actualRoundCount. */
            public actualRoundCount: number;

            /** ARecord createTime. */
            public createTime: (number|Long);

            /** ARecord overTime. */
            public overTime: (number|Long);

            /** ARecord player. */
            public player: msg.IPlayer[];

            /**
             * Creates a new ARecord instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ARecord instance
             */
            public static create(properties?: msg.GetRecordListResult.IARecord): msg.GetRecordListResult.ARecord;

            /**
             * Encodes the specified ARecord message. Does not implicitly {@link msg.GetRecordListResult.ARecord.verify|verify} messages.
             * @param message ARecord message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: msg.GetRecordListResult.IARecord, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ARecord message, length delimited. Does not implicitly {@link msg.GetRecordListResult.ARecord.verify|verify} messages.
             * @param message ARecord message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: msg.GetRecordListResult.IARecord, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ARecord message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ARecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.GetRecordListResult.ARecord;

            /**
             * Decodes a ARecord message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ARecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.GetRecordListResult.ARecord;

            /**
             * Verifies a ARecord message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ARecord message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ARecord
             */
            public static fromObject(object: { [k: string]: any }): msg.GetRecordListResult.ARecord;

            /**
             * Creates a plain object from a ARecord message. Also converts values to other types if specified.
             * @param message ARecord
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: msg.GetRecordListResult.ARecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ARecord to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a GetRecordDetailzCmd. */
    interface IGetRecordDetailzCmd {

        /** 房间 UUId */
        roomUUId?: (string|null);
    }

    /** Represents a GetRecordDetailzCmd. */
    class GetRecordDetailzCmd implements IGetRecordDetailzCmd {

        /**
         * Constructs a new GetRecordDetailzCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IGetRecordDetailzCmd);

        /** 房间 UUId */
        public roomUUId: string;

        /**
         * Creates a new GetRecordDetailzCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRecordDetailzCmd instance
         */
        public static create(properties?: msg.IGetRecordDetailzCmd): msg.GetRecordDetailzCmd;

        /**
         * Encodes the specified GetRecordDetailzCmd message. Does not implicitly {@link msg.GetRecordDetailzCmd.verify|verify} messages.
         * @param message GetRecordDetailzCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IGetRecordDetailzCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetRecordDetailzCmd message, length delimited. Does not implicitly {@link msg.GetRecordDetailzCmd.verify|verify} messages.
         * @param message GetRecordDetailzCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IGetRecordDetailzCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRecordDetailzCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRecordDetailzCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.GetRecordDetailzCmd;

        /**
         * Decodes a GetRecordDetailzCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRecordDetailzCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.GetRecordDetailzCmd;

        /**
         * Verifies a GetRecordDetailzCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetRecordDetailzCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetRecordDetailzCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.GetRecordDetailzCmd;

        /**
         * Creates a plain object from a GetRecordDetailzCmd message. Also converts values to other types if specified.
         * @param message GetRecordDetailzCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.GetRecordDetailzCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetRecordDetailzCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetRecordDetailzResult. */
    interface IGetRecordDetailzResult {

        /** GetRecordDetailzResult gameType0 */
        gameType0?: (number|null);

        /** GetRecordDetailzResult gameType1 */
        gameType1?: (number|null);

        /** GetRecordDetailzResult roomId */
        roomId?: (number|null);

        /** GetRecordDetailzResult roomUUId */
        roomUUId?: (string|null);

        /** GetRecordDetailzResult costRoomCard */
        costRoomCard?: (number|null);

        /** GetRecordDetailzResult actualRoundCount */
        actualRoundCount?: (number|null);

        /** GetRecordDetailzResult createTime */
        createTime?: (number|Long|null);

        /** GetRecordDetailzResult round */
        round?: (msg.GetRecordDetailzResult.IARound[]|null);
    }

    /** Represents a GetRecordDetailzResult. */
    class GetRecordDetailzResult implements IGetRecordDetailzResult {

        /**
         * Constructs a new GetRecordDetailzResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IGetRecordDetailzResult);

        /** GetRecordDetailzResult gameType0. */
        public gameType0: number;

        /** GetRecordDetailzResult gameType1. */
        public gameType1: number;

        /** GetRecordDetailzResult roomId. */
        public roomId: number;

        /** GetRecordDetailzResult roomUUId. */
        public roomUUId: string;

        /** GetRecordDetailzResult costRoomCard. */
        public costRoomCard: number;

        /** GetRecordDetailzResult actualRoundCount. */
        public actualRoundCount: number;

        /** GetRecordDetailzResult createTime. */
        public createTime: (number|Long);

        /** GetRecordDetailzResult round. */
        public round: msg.GetRecordDetailzResult.IARound[];

        /**
         * Creates a new GetRecordDetailzResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRecordDetailzResult instance
         */
        public static create(properties?: msg.IGetRecordDetailzResult): msg.GetRecordDetailzResult;

        /**
         * Encodes the specified GetRecordDetailzResult message. Does not implicitly {@link msg.GetRecordDetailzResult.verify|verify} messages.
         * @param message GetRecordDetailzResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IGetRecordDetailzResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetRecordDetailzResult message, length delimited. Does not implicitly {@link msg.GetRecordDetailzResult.verify|verify} messages.
         * @param message GetRecordDetailzResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IGetRecordDetailzResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRecordDetailzResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRecordDetailzResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.GetRecordDetailzResult;

        /**
         * Decodes a GetRecordDetailzResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRecordDetailzResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.GetRecordDetailzResult;

        /**
         * Verifies a GetRecordDetailzResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetRecordDetailzResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetRecordDetailzResult
         */
        public static fromObject(object: { [k: string]: any }): msg.GetRecordDetailzResult;

        /**
         * Creates a plain object from a GetRecordDetailzResult message. Also converts values to other types if specified.
         * @param message GetRecordDetailzResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.GetRecordDetailzResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetRecordDetailzResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace GetRecordDetailzResult {

        /** Properties of a ARound. */
        interface IARound {

            /** ARound roundIndex */
            roundIndex?: (number|null);

            /** ARound createTime */
            createTime?: (number|Long|null);

            /** ARound player */
            player?: (msg.IPlayer[]|null);

            /** ARound playbackStub */
            playbackStub?: (string|null);
        }

        /** Represents a ARound. */
        class ARound implements IARound {

            /**
             * Constructs a new ARound.
             * @param [properties] Properties to set
             */
            constructor(properties?: msg.GetRecordDetailzResult.IARound);

            /** ARound roundIndex. */
            public roundIndex: number;

            /** ARound createTime. */
            public createTime: (number|Long);

            /** ARound player. */
            public player: msg.IPlayer[];

            /** ARound playbackStub. */
            public playbackStub: string;

            /**
             * Creates a new ARound instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ARound instance
             */
            public static create(properties?: msg.GetRecordDetailzResult.IARound): msg.GetRecordDetailzResult.ARound;

            /**
             * Encodes the specified ARound message. Does not implicitly {@link msg.GetRecordDetailzResult.ARound.verify|verify} messages.
             * @param message ARound message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: msg.GetRecordDetailzResult.IARound, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ARound message, length delimited. Does not implicitly {@link msg.GetRecordDetailzResult.ARound.verify|verify} messages.
             * @param message ARound message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: msg.GetRecordDetailzResult.IARound, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ARound message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ARound
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.GetRecordDetailzResult.ARound;

            /**
             * Decodes a ARound message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ARound
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.GetRecordDetailzResult.ARound;

            /**
             * Verifies a ARound message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ARound message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ARound
             */
            public static fromObject(object: { [k: string]: any }): msg.GetRecordDetailzResult.ARound;

            /**
             * Creates a plain object from a ARound message. Also converts values to other types if specified.
             * @param message ARound
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: msg.GetRecordDetailzResult.ARound, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ARound to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
