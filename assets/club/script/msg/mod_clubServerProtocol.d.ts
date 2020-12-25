import * as $protobuf from "protobufjs";
/** Namespace msg. */
export namespace msg {

    /** ClubServerMsgCodeDef enum. */
    enum ClubServerMsgCodeDef {
        _Dummy = 0,
        _GetJoinedClubListCmd = 301,
        _GetJoinedClubListResult = 302,
        _CreateClubCmd = 303,
        _CreateClubResult = 304,
        _JoinClubCmd = 305,
        _JoinClubResult = 306,
        _GetClubDetailzCmd = 307,
        _GetClubDetailzResult = 308,
        _GetMemberInfoListCmd = 309,
        _GetMemberInfoListResult = 310,
        _GetTableListCmd = 311,
        _GetTableListResult = 312,
        _GetTableDetailzCmd = 313,
        _GetTableDetailzResult = 314,
        _CreateTableCmd = 315,
        _CreateTableResult = 316,
        _JoinTableCmd = 317,
        _JoinTableResult = 318,
        _ApprovalToJoinCmd = 321,
        _ApprovalToJoinResult = 322,
        _DismissAMemberCmd = 323,
        _DismissAMemberResult = 324,
        _QuitClubCmd = 325,
        _QuitClubResult = 326,
        _ModifyFixGameCmd = 327,
        _ModifyFixGameResult = 328,
        _ExchangeRoomCardCmd = 329,
        _ExchangeRoomCardResult = 330,
        _StartTableChangedListenCmd = 371,
        _StopTableChangedListenCmd = 372,
        _AClubTableChangedBroadcast = 373
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

        /** Player atSeatIndex */
        atSeatIndex?: (number|null);

        /** Player userName */
        userName?: (string|null);

        /** Player headImg */
        headImg?: (string|null);

        /** Player sex */
        sex?: (number|null);
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

        /** Player atSeatIndex. */
        public atSeatIndex: number;

        /** Player userName. */
        public userName: string;

        /** Player headImg. */
        public headImg: string;

        /** Player sex. */
        public sex: number;

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

    /** Properties of a Table. */
    interface ITable {

        /** Table seqNum */
        seqNum?: (number|null);

        /** Table roomId */
        roomId?: (number|null);

        /** Table gameType0 */
        gameType0?: (number|null);

        /** Table gameType1 */
        gameType1?: (number|null);

        /** Table ruleItem */
        ruleItem?: (msg.IKeyAndVal[]|null);

        /** Table maxRound */
        maxRound?: (number|null);

        /** Table currRound */
        currRound?: (number|null);

        /** Table maxPlayer */
        maxPlayer?: (number|null);

        /** Table player */
        player?: (msg.IPlayer[]|null);
    }

    /** Represents a Table. */
    class Table implements ITable {

        /**
         * Constructs a new Table.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ITable);

        /** Table seqNum. */
        public seqNum: number;

        /** Table roomId. */
        public roomId: number;

        /** Table gameType0. */
        public gameType0: number;

        /** Table gameType1. */
        public gameType1: number;

        /** Table ruleItem. */
        public ruleItem: msg.IKeyAndVal[];

        /** Table maxRound. */
        public maxRound: number;

        /** Table currRound. */
        public currRound: number;

        /** Table maxPlayer. */
        public maxPlayer: number;

        /** Table player. */
        public player: msg.IPlayer[];

        /**
         * Creates a new Table instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Table instance
         */
        public static create(properties?: msg.ITable): msg.Table;

        /**
         * Encodes the specified Table message. Does not implicitly {@link msg.Table.verify|verify} messages.
         * @param message Table message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ITable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Table message, length delimited. Does not implicitly {@link msg.Table.verify|verify} messages.
         * @param message Table message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ITable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Table message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.Table;

        /**
         * Decodes a Table message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.Table;

        /**
         * Verifies a Table message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Table message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Table
         */
        public static fromObject(object: { [k: string]: any }): msg.Table;

        /**
         * Creates a plain object from a Table message. Also converts values to other types if specified.
         * @param message Table
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.Table, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Table to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetJoinedClubListCmd. */
    interface IGetJoinedClubListCmd {
    }

    /** Represents a GetJoinedClubListCmd. */
    class GetJoinedClubListCmd implements IGetJoinedClubListCmd {

        /**
         * Constructs a new GetJoinedClubListCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IGetJoinedClubListCmd);

        /**
         * Creates a new GetJoinedClubListCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetJoinedClubListCmd instance
         */
        public static create(properties?: msg.IGetJoinedClubListCmd): msg.GetJoinedClubListCmd;

        /**
         * Encodes the specified GetJoinedClubListCmd message. Does not implicitly {@link msg.GetJoinedClubListCmd.verify|verify} messages.
         * @param message GetJoinedClubListCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IGetJoinedClubListCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetJoinedClubListCmd message, length delimited. Does not implicitly {@link msg.GetJoinedClubListCmd.verify|verify} messages.
         * @param message GetJoinedClubListCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IGetJoinedClubListCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetJoinedClubListCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetJoinedClubListCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.GetJoinedClubListCmd;

        /**
         * Decodes a GetJoinedClubListCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetJoinedClubListCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.GetJoinedClubListCmd;

        /**
         * Verifies a GetJoinedClubListCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetJoinedClubListCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetJoinedClubListCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.GetJoinedClubListCmd;

        /**
         * Creates a plain object from a GetJoinedClubListCmd message. Also converts values to other types if specified.
         * @param message GetJoinedClubListCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.GetJoinedClubListCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetJoinedClubListCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetJoinedClubListResult. */
    interface IGetJoinedClubListResult {

        /** GetJoinedClubListResult joinedClub */
        joinedClub?: (msg.GetJoinedClubListResult.IJoinedClub[]|null);
    }

    /** Represents a GetJoinedClubListResult. */
    class GetJoinedClubListResult implements IGetJoinedClubListResult {

        /**
         * Constructs a new GetJoinedClubListResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IGetJoinedClubListResult);

        /** GetJoinedClubListResult joinedClub. */
        public joinedClub: msg.GetJoinedClubListResult.IJoinedClub[];

        /**
         * Creates a new GetJoinedClubListResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetJoinedClubListResult instance
         */
        public static create(properties?: msg.IGetJoinedClubListResult): msg.GetJoinedClubListResult;

        /**
         * Encodes the specified GetJoinedClubListResult message. Does not implicitly {@link msg.GetJoinedClubListResult.verify|verify} messages.
         * @param message GetJoinedClubListResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IGetJoinedClubListResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetJoinedClubListResult message, length delimited. Does not implicitly {@link msg.GetJoinedClubListResult.verify|verify} messages.
         * @param message GetJoinedClubListResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IGetJoinedClubListResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetJoinedClubListResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetJoinedClubListResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.GetJoinedClubListResult;

        /**
         * Decodes a GetJoinedClubListResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetJoinedClubListResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.GetJoinedClubListResult;

        /**
         * Verifies a GetJoinedClubListResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetJoinedClubListResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetJoinedClubListResult
         */
        public static fromObject(object: { [k: string]: any }): msg.GetJoinedClubListResult;

        /**
         * Creates a plain object from a GetJoinedClubListResult message. Also converts values to other types if specified.
         * @param message GetJoinedClubListResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.GetJoinedClubListResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetJoinedClubListResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace GetJoinedClubListResult {

        /** Properties of a JoinedClub. */
        interface IJoinedClub {

            /** JoinedClub clubId */
            clubId?: (number|null);

            /** JoinedClub clubName */
            clubName?: (string|null);

            /** JoinedClub creatorId */
            creatorId?: (number|null);

            /** JoinedClub creatorName */
            creatorName?: (string|null);

            /** JoinedClub creatorHeadImg */
            creatorHeadImg?: (string|null);

            /** JoinedClub creatorSex */
            creatorSex?: (number|null);

            /** JoinedClub numOfPeople */
            numOfPeople?: (number|null);

            /** JoinedClub numOfGaming */
            numOfGaming?: (number|null);

            /** JoinedClub numOfWaiting */
            numOfWaiting?: (number|null);
        }

        /** Represents a JoinedClub. */
        class JoinedClub implements IJoinedClub {

            /**
             * Constructs a new JoinedClub.
             * @param [properties] Properties to set
             */
            constructor(properties?: msg.GetJoinedClubListResult.IJoinedClub);

            /** JoinedClub clubId. */
            public clubId: number;

            /** JoinedClub clubName. */
            public clubName: string;

            /** JoinedClub creatorId. */
            public creatorId: number;

            /** JoinedClub creatorName. */
            public creatorName: string;

            /** JoinedClub creatorHeadImg. */
            public creatorHeadImg: string;

            /** JoinedClub creatorSex. */
            public creatorSex: number;

            /** JoinedClub numOfPeople. */
            public numOfPeople: number;

            /** JoinedClub numOfGaming. */
            public numOfGaming: number;

            /** JoinedClub numOfWaiting. */
            public numOfWaiting: number;

            /**
             * Creates a new JoinedClub instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JoinedClub instance
             */
            public static create(properties?: msg.GetJoinedClubListResult.IJoinedClub): msg.GetJoinedClubListResult.JoinedClub;

            /**
             * Encodes the specified JoinedClub message. Does not implicitly {@link msg.GetJoinedClubListResult.JoinedClub.verify|verify} messages.
             * @param message JoinedClub message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: msg.GetJoinedClubListResult.IJoinedClub, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JoinedClub message, length delimited. Does not implicitly {@link msg.GetJoinedClubListResult.JoinedClub.verify|verify} messages.
             * @param message JoinedClub message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: msg.GetJoinedClubListResult.IJoinedClub, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JoinedClub message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JoinedClub
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.GetJoinedClubListResult.JoinedClub;

            /**
             * Decodes a JoinedClub message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JoinedClub
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.GetJoinedClubListResult.JoinedClub;

            /**
             * Verifies a JoinedClub message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JoinedClub message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JoinedClub
             */
            public static fromObject(object: { [k: string]: any }): msg.GetJoinedClubListResult.JoinedClub;

            /**
             * Creates a plain object from a JoinedClub message. Also converts values to other types if specified.
             * @param message JoinedClub
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: msg.GetJoinedClubListResult.JoinedClub, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JoinedClub to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a CreateClubCmd. */
    interface ICreateClubCmd {

        /** CreateClubCmd clubName */
        clubName?: (string|null);
    }

    /** Represents a CreateClubCmd. */
    class CreateClubCmd implements ICreateClubCmd {

        /**
         * Constructs a new CreateClubCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ICreateClubCmd);

        /** CreateClubCmd clubName. */
        public clubName: string;

        /**
         * Creates a new CreateClubCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateClubCmd instance
         */
        public static create(properties?: msg.ICreateClubCmd): msg.CreateClubCmd;

        /**
         * Encodes the specified CreateClubCmd message. Does not implicitly {@link msg.CreateClubCmd.verify|verify} messages.
         * @param message CreateClubCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ICreateClubCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateClubCmd message, length delimited. Does not implicitly {@link msg.CreateClubCmd.verify|verify} messages.
         * @param message CreateClubCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ICreateClubCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateClubCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateClubCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.CreateClubCmd;

        /**
         * Decodes a CreateClubCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateClubCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.CreateClubCmd;

        /**
         * Verifies a CreateClubCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateClubCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateClubCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.CreateClubCmd;

        /**
         * Creates a plain object from a CreateClubCmd message. Also converts values to other types if specified.
         * @param message CreateClubCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.CreateClubCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateClubCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateClubResult. */
    interface ICreateClubResult {

        /** CreateClubResult clubId */
        clubId?: (number|null);

        /** CreateClubResult clubName */
        clubName?: (string|null);
    }

    /** Represents a CreateClubResult. */
    class CreateClubResult implements ICreateClubResult {

        /**
         * Constructs a new CreateClubResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ICreateClubResult);

        /** CreateClubResult clubId. */
        public clubId: number;

        /** CreateClubResult clubName. */
        public clubName: string;

        /**
         * Creates a new CreateClubResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateClubResult instance
         */
        public static create(properties?: msg.ICreateClubResult): msg.CreateClubResult;

        /**
         * Encodes the specified CreateClubResult message. Does not implicitly {@link msg.CreateClubResult.verify|verify} messages.
         * @param message CreateClubResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ICreateClubResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateClubResult message, length delimited. Does not implicitly {@link msg.CreateClubResult.verify|verify} messages.
         * @param message CreateClubResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ICreateClubResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateClubResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateClubResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.CreateClubResult;

        /**
         * Decodes a CreateClubResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateClubResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.CreateClubResult;

        /**
         * Verifies a CreateClubResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateClubResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateClubResult
         */
        public static fromObject(object: { [k: string]: any }): msg.CreateClubResult;

        /**
         * Creates a plain object from a CreateClubResult message. Also converts values to other types if specified.
         * @param message CreateClubResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.CreateClubResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateClubResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a JoinClubCmd. */
    interface IJoinClubCmd {

        /** JoinClubCmd clubId */
        clubId?: (number|null);
    }

    /** Represents a JoinClubCmd. */
    class JoinClubCmd implements IJoinClubCmd {

        /**
         * Constructs a new JoinClubCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IJoinClubCmd);

        /** JoinClubCmd clubId. */
        public clubId: number;

        /**
         * Creates a new JoinClubCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinClubCmd instance
         */
        public static create(properties?: msg.IJoinClubCmd): msg.JoinClubCmd;

        /**
         * Encodes the specified JoinClubCmd message. Does not implicitly {@link msg.JoinClubCmd.verify|verify} messages.
         * @param message JoinClubCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IJoinClubCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinClubCmd message, length delimited. Does not implicitly {@link msg.JoinClubCmd.verify|verify} messages.
         * @param message JoinClubCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IJoinClubCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinClubCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinClubCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.JoinClubCmd;

        /**
         * Decodes a JoinClubCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinClubCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.JoinClubCmd;

        /**
         * Verifies a JoinClubCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinClubCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinClubCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.JoinClubCmd;

        /**
         * Creates a plain object from a JoinClubCmd message. Also converts values to other types if specified.
         * @param message JoinClubCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.JoinClubCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinClubCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a JoinClubResult. */
    interface IJoinClubResult {

        /** JoinClubResult clubId */
        clubId?: (number|null);

        /** JoinClubResult succezz */
        succezz?: (boolean|null);
    }

    /** Represents a JoinClubResult. */
    class JoinClubResult implements IJoinClubResult {

        /**
         * Constructs a new JoinClubResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IJoinClubResult);

        /** JoinClubResult clubId. */
        public clubId: number;

        /** JoinClubResult succezz. */
        public succezz: boolean;

        /**
         * Creates a new JoinClubResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinClubResult instance
         */
        public static create(properties?: msg.IJoinClubResult): msg.JoinClubResult;

        /**
         * Encodes the specified JoinClubResult message. Does not implicitly {@link msg.JoinClubResult.verify|verify} messages.
         * @param message JoinClubResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IJoinClubResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinClubResult message, length delimited. Does not implicitly {@link msg.JoinClubResult.verify|verify} messages.
         * @param message JoinClubResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IJoinClubResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinClubResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinClubResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.JoinClubResult;

        /**
         * Decodes a JoinClubResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinClubResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.JoinClubResult;

        /**
         * Verifies a JoinClubResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinClubResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinClubResult
         */
        public static fromObject(object: { [k: string]: any }): msg.JoinClubResult;

        /**
         * Creates a plain object from a JoinClubResult message. Also converts values to other types if specified.
         * @param message JoinClubResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.JoinClubResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinClubResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetClubDetailzCmd. */
    interface IGetClubDetailzCmd {

        /** GetClubDetailzCmd clubId */
        clubId?: (number|null);
    }

    /** Represents a GetClubDetailzCmd. */
    class GetClubDetailzCmd implements IGetClubDetailzCmd {

        /**
         * Constructs a new GetClubDetailzCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IGetClubDetailzCmd);

        /** GetClubDetailzCmd clubId. */
        public clubId: number;

        /**
         * Creates a new GetClubDetailzCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetClubDetailzCmd instance
         */
        public static create(properties?: msg.IGetClubDetailzCmd): msg.GetClubDetailzCmd;

        /**
         * Encodes the specified GetClubDetailzCmd message. Does not implicitly {@link msg.GetClubDetailzCmd.verify|verify} messages.
         * @param message GetClubDetailzCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IGetClubDetailzCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetClubDetailzCmd message, length delimited. Does not implicitly {@link msg.GetClubDetailzCmd.verify|verify} messages.
         * @param message GetClubDetailzCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IGetClubDetailzCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetClubDetailzCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetClubDetailzCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.GetClubDetailzCmd;

        /**
         * Decodes a GetClubDetailzCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetClubDetailzCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.GetClubDetailzCmd;

        /**
         * Verifies a GetClubDetailzCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetClubDetailzCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetClubDetailzCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.GetClubDetailzCmd;

        /**
         * Creates a plain object from a GetClubDetailzCmd message. Also converts values to other types if specified.
         * @param message GetClubDetailzCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.GetClubDetailzCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetClubDetailzCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetClubDetailzResult. */
    interface IGetClubDetailzResult {

        /** GetClubDetailzResult clubId */
        clubId?: (number|null);

        /** GetClubDetailzResult clubName */
        clubName?: (string|null);

        /** GetClubDetailzResult creatorId */
        creatorId?: (number|null);

        /** GetClubDetailzResult creatorName */
        creatorName?: (string|null);

        /** GetClubDetailzResult creatorHeadImg */
        creatorHeadImg?: (string|null);

        /** GetClubDetailzResult creatorSex */
        creatorSex?: (number|null);

        /** GetClubDetailzResult createTime */
        createTime?: (number|Long|null);

        /** GetClubDetailzResult roomCard */
        roomCard?: (number|null);

        /** GetClubDetailzResult fixGameX */
        fixGameX?: (msg.GetClubDetailzResult.IFixGameX[]|null);

        /** GetClubDetailzResult numOfPeople */
        numOfPeople?: (number|null);

        /** GetClubDetailzResult numOfGaming */
        numOfGaming?: (number|null);

        /** GetClubDetailzResult numOfWaiting */
        numOfWaiting?: (number|null);

        /** GetClubDetailzResult myRole */
        myRole?: (number|null);
    }

    /** Represents a GetClubDetailzResult. */
    class GetClubDetailzResult implements IGetClubDetailzResult {

        /**
         * Constructs a new GetClubDetailzResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IGetClubDetailzResult);

        /** GetClubDetailzResult clubId. */
        public clubId: number;

        /** GetClubDetailzResult clubName. */
        public clubName: string;

        /** GetClubDetailzResult creatorId. */
        public creatorId: number;

        /** GetClubDetailzResult creatorName. */
        public creatorName: string;

        /** GetClubDetailzResult creatorHeadImg. */
        public creatorHeadImg: string;

        /** GetClubDetailzResult creatorSex. */
        public creatorSex: number;

        /** GetClubDetailzResult createTime. */
        public createTime: (number|Long);

        /** GetClubDetailzResult roomCard. */
        public roomCard: number;

        /** GetClubDetailzResult fixGameX. */
        public fixGameX: msg.GetClubDetailzResult.IFixGameX[];

        /** GetClubDetailzResult numOfPeople. */
        public numOfPeople: number;

        /** GetClubDetailzResult numOfGaming. */
        public numOfGaming: number;

        /** GetClubDetailzResult numOfWaiting. */
        public numOfWaiting: number;

        /** GetClubDetailzResult myRole. */
        public myRole: number;

        /**
         * Creates a new GetClubDetailzResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetClubDetailzResult instance
         */
        public static create(properties?: msg.IGetClubDetailzResult): msg.GetClubDetailzResult;

        /**
         * Encodes the specified GetClubDetailzResult message. Does not implicitly {@link msg.GetClubDetailzResult.verify|verify} messages.
         * @param message GetClubDetailzResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IGetClubDetailzResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetClubDetailzResult message, length delimited. Does not implicitly {@link msg.GetClubDetailzResult.verify|verify} messages.
         * @param message GetClubDetailzResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IGetClubDetailzResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetClubDetailzResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetClubDetailzResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.GetClubDetailzResult;

        /**
         * Decodes a GetClubDetailzResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetClubDetailzResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.GetClubDetailzResult;

        /**
         * Verifies a GetClubDetailzResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetClubDetailzResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetClubDetailzResult
         */
        public static fromObject(object: { [k: string]: any }): msg.GetClubDetailzResult;

        /**
         * Creates a plain object from a GetClubDetailzResult message. Also converts values to other types if specified.
         * @param message GetClubDetailzResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.GetClubDetailzResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetClubDetailzResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace GetClubDetailzResult {

        /** Properties of a FixGameX. */
        interface IFixGameX {

            /** FixGameX index */
            index?: (number|null);

            /** FixGameX gameType0 */
            gameType0?: (number|null);

            /** FixGameX gameType1 */
            gameType1?: (number|null);

            /** FixGameX ruleItem */
            ruleItem?: (msg.IKeyAndVal[]|null);
        }

        /** Represents a FixGameX. */
        class FixGameX implements IFixGameX {

            /**
             * Constructs a new FixGameX.
             * @param [properties] Properties to set
             */
            constructor(properties?: msg.GetClubDetailzResult.IFixGameX);

            /** FixGameX index. */
            public index: number;

            /** FixGameX gameType0. */
            public gameType0: number;

            /** FixGameX gameType1. */
            public gameType1: number;

            /** FixGameX ruleItem. */
            public ruleItem: msg.IKeyAndVal[];

            /**
             * Creates a new FixGameX instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FixGameX instance
             */
            public static create(properties?: msg.GetClubDetailzResult.IFixGameX): msg.GetClubDetailzResult.FixGameX;

            /**
             * Encodes the specified FixGameX message. Does not implicitly {@link msg.GetClubDetailzResult.FixGameX.verify|verify} messages.
             * @param message FixGameX message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: msg.GetClubDetailzResult.IFixGameX, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FixGameX message, length delimited. Does not implicitly {@link msg.GetClubDetailzResult.FixGameX.verify|verify} messages.
             * @param message FixGameX message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: msg.GetClubDetailzResult.IFixGameX, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FixGameX message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FixGameX
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.GetClubDetailzResult.FixGameX;

            /**
             * Decodes a FixGameX message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FixGameX
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.GetClubDetailzResult.FixGameX;

            /**
             * Verifies a FixGameX message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FixGameX message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FixGameX
             */
            public static fromObject(object: { [k: string]: any }): msg.GetClubDetailzResult.FixGameX;

            /**
             * Creates a plain object from a FixGameX message. Also converts values to other types if specified.
             * @param message FixGameX
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: msg.GetClubDetailzResult.FixGameX, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FixGameX to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a GetMemberInfoListCmd. */
    interface IGetMemberInfoListCmd {

        /** GetMemberInfoListCmd clubId */
        clubId?: (number|null);

        /** GetMemberInfoListCmd pageIndex */
        pageIndex?: (number|null);

        /** GetMemberInfoListCmd pageSize */
        pageSize?: (number|null);
    }

    /** Represents a GetMemberInfoListCmd. */
    class GetMemberInfoListCmd implements IGetMemberInfoListCmd {

        /**
         * Constructs a new GetMemberInfoListCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IGetMemberInfoListCmd);

        /** GetMemberInfoListCmd clubId. */
        public clubId: number;

        /** GetMemberInfoListCmd pageIndex. */
        public pageIndex: number;

        /** GetMemberInfoListCmd pageSize. */
        public pageSize: number;

        /**
         * Creates a new GetMemberInfoListCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetMemberInfoListCmd instance
         */
        public static create(properties?: msg.IGetMemberInfoListCmd): msg.GetMemberInfoListCmd;

        /**
         * Encodes the specified GetMemberInfoListCmd message. Does not implicitly {@link msg.GetMemberInfoListCmd.verify|verify} messages.
         * @param message GetMemberInfoListCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IGetMemberInfoListCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetMemberInfoListCmd message, length delimited. Does not implicitly {@link msg.GetMemberInfoListCmd.verify|verify} messages.
         * @param message GetMemberInfoListCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IGetMemberInfoListCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetMemberInfoListCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetMemberInfoListCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.GetMemberInfoListCmd;

        /**
         * Decodes a GetMemberInfoListCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetMemberInfoListCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.GetMemberInfoListCmd;

        /**
         * Verifies a GetMemberInfoListCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetMemberInfoListCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetMemberInfoListCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.GetMemberInfoListCmd;

        /**
         * Creates a plain object from a GetMemberInfoListCmd message. Also converts values to other types if specified.
         * @param message GetMemberInfoListCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.GetMemberInfoListCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetMemberInfoListCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetMemberInfoListResult. */
    interface IGetMemberInfoListResult {

        /** GetMemberInfoListResult clubId */
        clubId?: (number|null);

        /** GetMemberInfoListResult pageIndex */
        pageIndex?: (number|null);

        /** GetMemberInfoListResult totalCount */
        totalCount?: (number|null);

        /** GetMemberInfoListResult memberInfo */
        memberInfo?: (msg.GetMemberInfoListResult.IMemberInfo[]|null);
    }

    /** Represents a GetMemberInfoListResult. */
    class GetMemberInfoListResult implements IGetMemberInfoListResult {

        /**
         * Constructs a new GetMemberInfoListResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IGetMemberInfoListResult);

        /** GetMemberInfoListResult clubId. */
        public clubId: number;

        /** GetMemberInfoListResult pageIndex. */
        public pageIndex: number;

        /** GetMemberInfoListResult totalCount. */
        public totalCount: number;

        /** GetMemberInfoListResult memberInfo. */
        public memberInfo: msg.GetMemberInfoListResult.IMemberInfo[];

        /**
         * Creates a new GetMemberInfoListResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetMemberInfoListResult instance
         */
        public static create(properties?: msg.IGetMemberInfoListResult): msg.GetMemberInfoListResult;

        /**
         * Encodes the specified GetMemberInfoListResult message. Does not implicitly {@link msg.GetMemberInfoListResult.verify|verify} messages.
         * @param message GetMemberInfoListResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IGetMemberInfoListResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetMemberInfoListResult message, length delimited. Does not implicitly {@link msg.GetMemberInfoListResult.verify|verify} messages.
         * @param message GetMemberInfoListResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IGetMemberInfoListResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetMemberInfoListResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetMemberInfoListResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.GetMemberInfoListResult;

        /**
         * Decodes a GetMemberInfoListResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetMemberInfoListResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.GetMemberInfoListResult;

        /**
         * Verifies a GetMemberInfoListResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetMemberInfoListResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetMemberInfoListResult
         */
        public static fromObject(object: { [k: string]: any }): msg.GetMemberInfoListResult;

        /**
         * Creates a plain object from a GetMemberInfoListResult message. Also converts values to other types if specified.
         * @param message GetMemberInfoListResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.GetMemberInfoListResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetMemberInfoListResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace GetMemberInfoListResult {

        /** Properties of a MemberInfo. */
        interface IMemberInfo {

            /** MemberInfo userId */
            userId?: (number|null);

            /** MemberInfo role */
            role?: (number|null);

            /** MemberInfo userName */
            userName?: (string|null);

            /** MemberInfo headImg */
            headImg?: (string|null);

            /** MemberInfo sex */
            sex?: (number|null);

            /** MemberInfo joinTime */
            joinTime?: (number|Long|null);

            /** MemberInfo lastLoginTime */
            lastLoginTime?: (number|Long|null);

            /** MemberInfo currState */
            currState?: (number|null);
        }

        /** Represents a MemberInfo. */
        class MemberInfo implements IMemberInfo {

            /**
             * Constructs a new MemberInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: msg.GetMemberInfoListResult.IMemberInfo);

            /** MemberInfo userId. */
            public userId: number;

            /** MemberInfo role. */
            public role: number;

            /** MemberInfo userName. */
            public userName: string;

            /** MemberInfo headImg. */
            public headImg: string;

            /** MemberInfo sex. */
            public sex: number;

            /** MemberInfo joinTime. */
            public joinTime: (number|Long);

            /** MemberInfo lastLoginTime. */
            public lastLoginTime: (number|Long);

            /** MemberInfo currState. */
            public currState: number;

            /**
             * Creates a new MemberInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MemberInfo instance
             */
            public static create(properties?: msg.GetMemberInfoListResult.IMemberInfo): msg.GetMemberInfoListResult.MemberInfo;

            /**
             * Encodes the specified MemberInfo message. Does not implicitly {@link msg.GetMemberInfoListResult.MemberInfo.verify|verify} messages.
             * @param message MemberInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: msg.GetMemberInfoListResult.IMemberInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MemberInfo message, length delimited. Does not implicitly {@link msg.GetMemberInfoListResult.MemberInfo.verify|verify} messages.
             * @param message MemberInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: msg.GetMemberInfoListResult.IMemberInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MemberInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MemberInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.GetMemberInfoListResult.MemberInfo;

            /**
             * Decodes a MemberInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MemberInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.GetMemberInfoListResult.MemberInfo;

            /**
             * Verifies a MemberInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MemberInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MemberInfo
             */
            public static fromObject(object: { [k: string]: any }): msg.GetMemberInfoListResult.MemberInfo;

            /**
             * Creates a plain object from a MemberInfo message. Also converts values to other types if specified.
             * @param message MemberInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: msg.GetMemberInfoListResult.MemberInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MemberInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a GetTableListCmd. */
    interface IGetTableListCmd {

        /** GetTableListCmd clubId */
        clubId?: (number|null);

        /** GetTableListCmd pageIndex */
        pageIndex?: (number|null);
    }

    /** Represents a GetTableListCmd. */
    class GetTableListCmd implements IGetTableListCmd {

        /**
         * Constructs a new GetTableListCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IGetTableListCmd);

        /** GetTableListCmd clubId. */
        public clubId: number;

        /** GetTableListCmd pageIndex. */
        public pageIndex: number;

        /**
         * Creates a new GetTableListCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetTableListCmd instance
         */
        public static create(properties?: msg.IGetTableListCmd): msg.GetTableListCmd;

        /**
         * Encodes the specified GetTableListCmd message. Does not implicitly {@link msg.GetTableListCmd.verify|verify} messages.
         * @param message GetTableListCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IGetTableListCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetTableListCmd message, length delimited. Does not implicitly {@link msg.GetTableListCmd.verify|verify} messages.
         * @param message GetTableListCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IGetTableListCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetTableListCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetTableListCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.GetTableListCmd;

        /**
         * Decodes a GetTableListCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetTableListCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.GetTableListCmd;

        /**
         * Verifies a GetTableListCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetTableListCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetTableListCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.GetTableListCmd;

        /**
         * Creates a plain object from a GetTableListCmd message. Also converts values to other types if specified.
         * @param message GetTableListCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.GetTableListCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetTableListCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetTableListResult. */
    interface IGetTableListResult {

        /** GetTableListResult clubId */
        clubId?: (number|null);

        /** GetTableListResult pageIndex */
        pageIndex?: (number|null);

        /** GetTableListResult maxNumOfTablez */
        maxNumOfTablez?: (number|null);

        /** GetTableListResult table */
        table?: (msg.ITable[]|null);
    }

    /** Represents a GetTableListResult. */
    class GetTableListResult implements IGetTableListResult {

        /**
         * Constructs a new GetTableListResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IGetTableListResult);

        /** GetTableListResult clubId. */
        public clubId: number;

        /** GetTableListResult pageIndex. */
        public pageIndex: number;

        /** GetTableListResult maxNumOfTablez. */
        public maxNumOfTablez: number;

        /** GetTableListResult table. */
        public table: msg.ITable[];

        /**
         * Creates a new GetTableListResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetTableListResult instance
         */
        public static create(properties?: msg.IGetTableListResult): msg.GetTableListResult;

        /**
         * Encodes the specified GetTableListResult message. Does not implicitly {@link msg.GetTableListResult.verify|verify} messages.
         * @param message GetTableListResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IGetTableListResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetTableListResult message, length delimited. Does not implicitly {@link msg.GetTableListResult.verify|verify} messages.
         * @param message GetTableListResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IGetTableListResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetTableListResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetTableListResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.GetTableListResult;

        /**
         * Decodes a GetTableListResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetTableListResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.GetTableListResult;

        /**
         * Verifies a GetTableListResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetTableListResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetTableListResult
         */
        public static fromObject(object: { [k: string]: any }): msg.GetTableListResult;

        /**
         * Creates a plain object from a GetTableListResult message. Also converts values to other types if specified.
         * @param message GetTableListResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.GetTableListResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetTableListResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetTableDetailzCmd. */
    interface IGetTableDetailzCmd {

        /** GetTableDetailzCmd clubId */
        clubId?: (number|null);

        /** GetTableDetailzCmd seqNum */
        seqNum?: (number|null);
    }

    /** Represents a GetTableDetailzCmd. */
    class GetTableDetailzCmd implements IGetTableDetailzCmd {

        /**
         * Constructs a new GetTableDetailzCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IGetTableDetailzCmd);

        /** GetTableDetailzCmd clubId. */
        public clubId: number;

        /** GetTableDetailzCmd seqNum. */
        public seqNum: number;

        /**
         * Creates a new GetTableDetailzCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetTableDetailzCmd instance
         */
        public static create(properties?: msg.IGetTableDetailzCmd): msg.GetTableDetailzCmd;

        /**
         * Encodes the specified GetTableDetailzCmd message. Does not implicitly {@link msg.GetTableDetailzCmd.verify|verify} messages.
         * @param message GetTableDetailzCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IGetTableDetailzCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetTableDetailzCmd message, length delimited. Does not implicitly {@link msg.GetTableDetailzCmd.verify|verify} messages.
         * @param message GetTableDetailzCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IGetTableDetailzCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetTableDetailzCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetTableDetailzCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.GetTableDetailzCmd;

        /**
         * Decodes a GetTableDetailzCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetTableDetailzCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.GetTableDetailzCmd;

        /**
         * Verifies a GetTableDetailzCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetTableDetailzCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetTableDetailzCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.GetTableDetailzCmd;

        /**
         * Creates a plain object from a GetTableDetailzCmd message. Also converts values to other types if specified.
         * @param message GetTableDetailzCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.GetTableDetailzCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetTableDetailzCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetTableDetailzResult. */
    interface IGetTableDetailzResult {

        /** GetTableDetailzResult clubId */
        clubId?: (number|null);

        /** GetTableDetailzResult seqNum */
        seqNum?: (number|null);

        /** GetTableDetailzResult table */
        table?: (msg.ITable|null);
    }

    /** Represents a GetTableDetailzResult. */
    class GetTableDetailzResult implements IGetTableDetailzResult {

        /**
         * Constructs a new GetTableDetailzResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IGetTableDetailzResult);

        /** GetTableDetailzResult clubId. */
        public clubId: number;

        /** GetTableDetailzResult seqNum. */
        public seqNum: number;

        /** GetTableDetailzResult table. */
        public table?: (msg.ITable|null);

        /**
         * Creates a new GetTableDetailzResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetTableDetailzResult instance
         */
        public static create(properties?: msg.IGetTableDetailzResult): msg.GetTableDetailzResult;

        /**
         * Encodes the specified GetTableDetailzResult message. Does not implicitly {@link msg.GetTableDetailzResult.verify|verify} messages.
         * @param message GetTableDetailzResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IGetTableDetailzResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetTableDetailzResult message, length delimited. Does not implicitly {@link msg.GetTableDetailzResult.verify|verify} messages.
         * @param message GetTableDetailzResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IGetTableDetailzResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetTableDetailzResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetTableDetailzResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.GetTableDetailzResult;

        /**
         * Decodes a GetTableDetailzResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetTableDetailzResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.GetTableDetailzResult;

        /**
         * Verifies a GetTableDetailzResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetTableDetailzResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetTableDetailzResult
         */
        public static fromObject(object: { [k: string]: any }): msg.GetTableDetailzResult;

        /**
         * Creates a plain object from a GetTableDetailzResult message. Also converts values to other types if specified.
         * @param message GetTableDetailzResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.GetTableDetailzResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetTableDetailzResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateTableCmd. */
    interface ICreateTableCmd {

        /** CreateTableCmd gameType0 */
        gameType0?: (number|null);

        /** CreateTableCmd gameType1 */
        gameType1?: (number|null);

        /** CreateTableCmd ruleItem */
        ruleItem?: (msg.IKeyAndVal[]|null);

        /** CreateTableCmd clubId */
        clubId?: (number|null);

        /** CreateTableCmd seqNum */
        seqNum?: (number|null);

        /** CreateTableCmd usingFixGameX */
        usingFixGameX?: (number|null);
    }

    /** Represents a CreateTableCmd. */
    class CreateTableCmd implements ICreateTableCmd {

        /**
         * Constructs a new CreateTableCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ICreateTableCmd);

        /** CreateTableCmd gameType0. */
        public gameType0: number;

        /** CreateTableCmd gameType1. */
        public gameType1: number;

        /** CreateTableCmd ruleItem. */
        public ruleItem: msg.IKeyAndVal[];

        /** CreateTableCmd clubId. */
        public clubId: number;

        /** CreateTableCmd seqNum. */
        public seqNum: number;

        /** CreateTableCmd usingFixGameX. */
        public usingFixGameX: number;

        /**
         * Creates a new CreateTableCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateTableCmd instance
         */
        public static create(properties?: msg.ICreateTableCmd): msg.CreateTableCmd;

        /**
         * Encodes the specified CreateTableCmd message. Does not implicitly {@link msg.CreateTableCmd.verify|verify} messages.
         * @param message CreateTableCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ICreateTableCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateTableCmd message, length delimited. Does not implicitly {@link msg.CreateTableCmd.verify|verify} messages.
         * @param message CreateTableCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ICreateTableCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateTableCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateTableCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.CreateTableCmd;

        /**
         * Decodes a CreateTableCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateTableCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.CreateTableCmd;

        /**
         * Verifies a CreateTableCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateTableCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateTableCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.CreateTableCmd;

        /**
         * Creates a plain object from a CreateTableCmd message. Also converts values to other types if specified.
         * @param message CreateTableCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.CreateTableCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateTableCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateTableResult. */
    interface ICreateTableResult {

        /** CreateTableResult roomId */
        roomId?: (number|null);
    }

    /** Represents a CreateTableResult. */
    class CreateTableResult implements ICreateTableResult {

        /**
         * Constructs a new CreateTableResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ICreateTableResult);

        /** CreateTableResult roomId. */
        public roomId: number;

        /**
         * Creates a new CreateTableResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateTableResult instance
         */
        public static create(properties?: msg.ICreateTableResult): msg.CreateTableResult;

        /**
         * Encodes the specified CreateTableResult message. Does not implicitly {@link msg.CreateTableResult.verify|verify} messages.
         * @param message CreateTableResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ICreateTableResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateTableResult message, length delimited. Does not implicitly {@link msg.CreateTableResult.verify|verify} messages.
         * @param message CreateTableResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ICreateTableResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateTableResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateTableResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.CreateTableResult;

        /**
         * Decodes a CreateTableResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateTableResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.CreateTableResult;

        /**
         * Verifies a CreateTableResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateTableResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateTableResult
         */
        public static fromObject(object: { [k: string]: any }): msg.CreateTableResult;

        /**
         * Creates a plain object from a CreateTableResult message. Also converts values to other types if specified.
         * @param message CreateTableResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.CreateTableResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateTableResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a JoinTableCmd. */
    interface IJoinTableCmd {

        /** JoinTableCmd roomId */
        roomId?: (number|null);
    }

    /** Represents a JoinTableCmd. */
    class JoinTableCmd implements IJoinTableCmd {

        /**
         * Constructs a new JoinTableCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IJoinTableCmd);

        /** JoinTableCmd roomId. */
        public roomId: number;

        /**
         * Creates a new JoinTableCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinTableCmd instance
         */
        public static create(properties?: msg.IJoinTableCmd): msg.JoinTableCmd;

        /**
         * Encodes the specified JoinTableCmd message. Does not implicitly {@link msg.JoinTableCmd.verify|verify} messages.
         * @param message JoinTableCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IJoinTableCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinTableCmd message, length delimited. Does not implicitly {@link msg.JoinTableCmd.verify|verify} messages.
         * @param message JoinTableCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IJoinTableCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinTableCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinTableCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.JoinTableCmd;

        /**
         * Decodes a JoinTableCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinTableCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.JoinTableCmd;

        /**
         * Verifies a JoinTableCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinTableCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinTableCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.JoinTableCmd;

        /**
         * Creates a plain object from a JoinTableCmd message. Also converts values to other types if specified.
         * @param message JoinTableCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.JoinTableCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinTableCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a JoinTableResult. */
    interface IJoinTableResult {

        /** JoinTableResult roomId */
        roomId?: (number|null);

        /** JoinTableResult gameType0 */
        gameType0?: (number|null);

        /** JoinTableResult gameType1 */
        gameType1?: (number|null);

        /** JoinTableResult ruleItem */
        ruleItem?: (msg.IKeyAndVal[]|null);

        /** JoinTableResult clubId */
        clubId?: (number|null);

        /** JoinTableResult seqNum */
        seqNum?: (number|null);
    }

    /** Represents a JoinTableResult. */
    class JoinTableResult implements IJoinTableResult {

        /**
         * Constructs a new JoinTableResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IJoinTableResult);

        /** JoinTableResult roomId. */
        public roomId: number;

        /** JoinTableResult gameType0. */
        public gameType0: number;

        /** JoinTableResult gameType1. */
        public gameType1: number;

        /** JoinTableResult ruleItem. */
        public ruleItem: msg.IKeyAndVal[];

        /** JoinTableResult clubId. */
        public clubId: number;

        /** JoinTableResult seqNum. */
        public seqNum: number;

        /**
         * Creates a new JoinTableResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinTableResult instance
         */
        public static create(properties?: msg.IJoinTableResult): msg.JoinTableResult;

        /**
         * Encodes the specified JoinTableResult message. Does not implicitly {@link msg.JoinTableResult.verify|verify} messages.
         * @param message JoinTableResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IJoinTableResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinTableResult message, length delimited. Does not implicitly {@link msg.JoinTableResult.verify|verify} messages.
         * @param message JoinTableResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IJoinTableResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinTableResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinTableResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.JoinTableResult;

        /**
         * Decodes a JoinTableResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinTableResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.JoinTableResult;

        /**
         * Verifies a JoinTableResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinTableResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinTableResult
         */
        public static fromObject(object: { [k: string]: any }): msg.JoinTableResult;

        /**
         * Creates a plain object from a JoinTableResult message. Also converts values to other types if specified.
         * @param message JoinTableResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.JoinTableResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinTableResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ApprovalToJoinCmd. */
    interface IApprovalToJoinCmd {

        /** ApprovalToJoinCmd userId */
        userId?: (number|null);

        /** ApprovalToJoinCmd clubId */
        clubId?: (number|null);

        /** ApprovalToJoinCmd yesOrNo */
        yesOrNo?: (boolean|null);
    }

    /** Represents an ApprovalToJoinCmd. */
    class ApprovalToJoinCmd implements IApprovalToJoinCmd {

        /**
         * Constructs a new ApprovalToJoinCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IApprovalToJoinCmd);

        /** ApprovalToJoinCmd userId. */
        public userId: number;

        /** ApprovalToJoinCmd clubId. */
        public clubId: number;

        /** ApprovalToJoinCmd yesOrNo. */
        public yesOrNo: boolean;

        /**
         * Creates a new ApprovalToJoinCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ApprovalToJoinCmd instance
         */
        public static create(properties?: msg.IApprovalToJoinCmd): msg.ApprovalToJoinCmd;

        /**
         * Encodes the specified ApprovalToJoinCmd message. Does not implicitly {@link msg.ApprovalToJoinCmd.verify|verify} messages.
         * @param message ApprovalToJoinCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IApprovalToJoinCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ApprovalToJoinCmd message, length delimited. Does not implicitly {@link msg.ApprovalToJoinCmd.verify|verify} messages.
         * @param message ApprovalToJoinCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IApprovalToJoinCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ApprovalToJoinCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ApprovalToJoinCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.ApprovalToJoinCmd;

        /**
         * Decodes an ApprovalToJoinCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ApprovalToJoinCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.ApprovalToJoinCmd;

        /**
         * Verifies an ApprovalToJoinCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ApprovalToJoinCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ApprovalToJoinCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.ApprovalToJoinCmd;

        /**
         * Creates a plain object from an ApprovalToJoinCmd message. Also converts values to other types if specified.
         * @param message ApprovalToJoinCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.ApprovalToJoinCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ApprovalToJoinCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ApprovalToJoinResult. */
    interface IApprovalToJoinResult {

        /** ApprovalToJoinResult userId */
        userId?: (number|null);

        /** ApprovalToJoinResult clubId */
        clubId?: (number|null);

        /** ApprovalToJoinResult succezz */
        succezz?: (boolean|null);
    }

    /** Represents an ApprovalToJoinResult. */
    class ApprovalToJoinResult implements IApprovalToJoinResult {

        /**
         * Constructs a new ApprovalToJoinResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IApprovalToJoinResult);

        /** ApprovalToJoinResult userId. */
        public userId: number;

        /** ApprovalToJoinResult clubId. */
        public clubId: number;

        /** ApprovalToJoinResult succezz. */
        public succezz: boolean;

        /**
         * Creates a new ApprovalToJoinResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ApprovalToJoinResult instance
         */
        public static create(properties?: msg.IApprovalToJoinResult): msg.ApprovalToJoinResult;

        /**
         * Encodes the specified ApprovalToJoinResult message. Does not implicitly {@link msg.ApprovalToJoinResult.verify|verify} messages.
         * @param message ApprovalToJoinResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IApprovalToJoinResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ApprovalToJoinResult message, length delimited. Does not implicitly {@link msg.ApprovalToJoinResult.verify|verify} messages.
         * @param message ApprovalToJoinResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IApprovalToJoinResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ApprovalToJoinResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ApprovalToJoinResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.ApprovalToJoinResult;

        /**
         * Decodes an ApprovalToJoinResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ApprovalToJoinResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.ApprovalToJoinResult;

        /**
         * Verifies an ApprovalToJoinResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ApprovalToJoinResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ApprovalToJoinResult
         */
        public static fromObject(object: { [k: string]: any }): msg.ApprovalToJoinResult;

        /**
         * Creates a plain object from an ApprovalToJoinResult message. Also converts values to other types if specified.
         * @param message ApprovalToJoinResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.ApprovalToJoinResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ApprovalToJoinResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DismissAMemberCmd. */
    interface IDismissAMemberCmd {

        /** DismissAMemberCmd userId */
        userId?: (number|null);

        /** DismissAMemberCmd clubId */
        clubId?: (number|null);
    }

    /** Represents a DismissAMemberCmd. */
    class DismissAMemberCmd implements IDismissAMemberCmd {

        /**
         * Constructs a new DismissAMemberCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IDismissAMemberCmd);

        /** DismissAMemberCmd userId. */
        public userId: number;

        /** DismissAMemberCmd clubId. */
        public clubId: number;

        /**
         * Creates a new DismissAMemberCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DismissAMemberCmd instance
         */
        public static create(properties?: msg.IDismissAMemberCmd): msg.DismissAMemberCmd;

        /**
         * Encodes the specified DismissAMemberCmd message. Does not implicitly {@link msg.DismissAMemberCmd.verify|verify} messages.
         * @param message DismissAMemberCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IDismissAMemberCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DismissAMemberCmd message, length delimited. Does not implicitly {@link msg.DismissAMemberCmd.verify|verify} messages.
         * @param message DismissAMemberCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IDismissAMemberCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DismissAMemberCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DismissAMemberCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.DismissAMemberCmd;

        /**
         * Decodes a DismissAMemberCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DismissAMemberCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.DismissAMemberCmd;

        /**
         * Verifies a DismissAMemberCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DismissAMemberCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DismissAMemberCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.DismissAMemberCmd;

        /**
         * Creates a plain object from a DismissAMemberCmd message. Also converts values to other types if specified.
         * @param message DismissAMemberCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.DismissAMemberCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DismissAMemberCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DismissAMemberResult. */
    interface IDismissAMemberResult {

        /** DismissAMemberResult userId */
        userId?: (number|null);

        /** DismissAMemberResult clubId */
        clubId?: (number|null);

        /** DismissAMemberResult succezz */
        succezz?: (boolean|null);
    }

    /** Represents a DismissAMemberResult. */
    class DismissAMemberResult implements IDismissAMemberResult {

        /**
         * Constructs a new DismissAMemberResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IDismissAMemberResult);

        /** DismissAMemberResult userId. */
        public userId: number;

        /** DismissAMemberResult clubId. */
        public clubId: number;

        /** DismissAMemberResult succezz. */
        public succezz: boolean;

        /**
         * Creates a new DismissAMemberResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DismissAMemberResult instance
         */
        public static create(properties?: msg.IDismissAMemberResult): msg.DismissAMemberResult;

        /**
         * Encodes the specified DismissAMemberResult message. Does not implicitly {@link msg.DismissAMemberResult.verify|verify} messages.
         * @param message DismissAMemberResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IDismissAMemberResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DismissAMemberResult message, length delimited. Does not implicitly {@link msg.DismissAMemberResult.verify|verify} messages.
         * @param message DismissAMemberResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IDismissAMemberResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DismissAMemberResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DismissAMemberResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.DismissAMemberResult;

        /**
         * Decodes a DismissAMemberResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DismissAMemberResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.DismissAMemberResult;

        /**
         * Verifies a DismissAMemberResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DismissAMemberResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DismissAMemberResult
         */
        public static fromObject(object: { [k: string]: any }): msg.DismissAMemberResult;

        /**
         * Creates a plain object from a DismissAMemberResult message. Also converts values to other types if specified.
         * @param message DismissAMemberResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.DismissAMemberResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DismissAMemberResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QuitClubCmd. */
    interface IQuitClubCmd {

        /** QuitClubCmd clubId */
        clubId?: (number|null);
    }

    /** Represents a QuitClubCmd. */
    class QuitClubCmd implements IQuitClubCmd {

        /**
         * Constructs a new QuitClubCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IQuitClubCmd);

        /** QuitClubCmd clubId. */
        public clubId: number;

        /**
         * Creates a new QuitClubCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QuitClubCmd instance
         */
        public static create(properties?: msg.IQuitClubCmd): msg.QuitClubCmd;

        /**
         * Encodes the specified QuitClubCmd message. Does not implicitly {@link msg.QuitClubCmd.verify|verify} messages.
         * @param message QuitClubCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IQuitClubCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QuitClubCmd message, length delimited. Does not implicitly {@link msg.QuitClubCmd.verify|verify} messages.
         * @param message QuitClubCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IQuitClubCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QuitClubCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QuitClubCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.QuitClubCmd;

        /**
         * Decodes a QuitClubCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QuitClubCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.QuitClubCmd;

        /**
         * Verifies a QuitClubCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QuitClubCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QuitClubCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.QuitClubCmd;

        /**
         * Creates a plain object from a QuitClubCmd message. Also converts values to other types if specified.
         * @param message QuitClubCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.QuitClubCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QuitClubCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QuitClubResult. */
    interface IQuitClubResult {

        /** QuitClubResult clubId */
        clubId?: (number|null);

        /** QuitClubResult succezz */
        succezz?: (boolean|null);
    }

    /** Represents a QuitClubResult. */
    class QuitClubResult implements IQuitClubResult {

        /**
         * Constructs a new QuitClubResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IQuitClubResult);

        /** QuitClubResult clubId. */
        public clubId: number;

        /** QuitClubResult succezz. */
        public succezz: boolean;

        /**
         * Creates a new QuitClubResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QuitClubResult instance
         */
        public static create(properties?: msg.IQuitClubResult): msg.QuitClubResult;

        /**
         * Encodes the specified QuitClubResult message. Does not implicitly {@link msg.QuitClubResult.verify|verify} messages.
         * @param message QuitClubResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IQuitClubResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QuitClubResult message, length delimited. Does not implicitly {@link msg.QuitClubResult.verify|verify} messages.
         * @param message QuitClubResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IQuitClubResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QuitClubResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QuitClubResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.QuitClubResult;

        /**
         * Decodes a QuitClubResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QuitClubResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.QuitClubResult;

        /**
         * Verifies a QuitClubResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QuitClubResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QuitClubResult
         */
        public static fromObject(object: { [k: string]: any }): msg.QuitClubResult;

        /**
         * Creates a plain object from a QuitClubResult message. Also converts values to other types if specified.
         * @param message QuitClubResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.QuitClubResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QuitClubResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ModifyFixGameCmd. */
    interface IModifyFixGameCmd {

        /** ModifyFixGameCmd clubId */
        clubId?: (number|null);

        /** ModifyFixGameCmd index */
        index?: (number|null);

        /** ModifyFixGameCmd gameType0 */
        gameType0?: (number|null);

        /** ModifyFixGameCmd gameType1 */
        gameType1?: (number|null);

        /** ModifyFixGameCmd ruleItem */
        ruleItem?: (msg.IKeyAndVal[]|null);
    }

    /** Represents a ModifyFixGameCmd. */
    class ModifyFixGameCmd implements IModifyFixGameCmd {

        /**
         * Constructs a new ModifyFixGameCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IModifyFixGameCmd);

        /** ModifyFixGameCmd clubId. */
        public clubId: number;

        /** ModifyFixGameCmd index. */
        public index: number;

        /** ModifyFixGameCmd gameType0. */
        public gameType0: number;

        /** ModifyFixGameCmd gameType1. */
        public gameType1: number;

        /** ModifyFixGameCmd ruleItem. */
        public ruleItem: msg.IKeyAndVal[];

        /**
         * Creates a new ModifyFixGameCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ModifyFixGameCmd instance
         */
        public static create(properties?: msg.IModifyFixGameCmd): msg.ModifyFixGameCmd;

        /**
         * Encodes the specified ModifyFixGameCmd message. Does not implicitly {@link msg.ModifyFixGameCmd.verify|verify} messages.
         * @param message ModifyFixGameCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IModifyFixGameCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ModifyFixGameCmd message, length delimited. Does not implicitly {@link msg.ModifyFixGameCmd.verify|verify} messages.
         * @param message ModifyFixGameCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IModifyFixGameCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ModifyFixGameCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ModifyFixGameCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.ModifyFixGameCmd;

        /**
         * Decodes a ModifyFixGameCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ModifyFixGameCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.ModifyFixGameCmd;

        /**
         * Verifies a ModifyFixGameCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ModifyFixGameCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ModifyFixGameCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.ModifyFixGameCmd;

        /**
         * Creates a plain object from a ModifyFixGameCmd message. Also converts values to other types if specified.
         * @param message ModifyFixGameCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.ModifyFixGameCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ModifyFixGameCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ModifyFixGameResult. */
    interface IModifyFixGameResult {

        /** ModifyFixGameResult clubId */
        clubId?: (number|null);

        /** ModifyFixGameResult index */
        index?: (number|null);

        /** ModifyFixGameResult succezz */
        succezz?: (boolean|null);
    }

    /** Represents a ModifyFixGameResult. */
    class ModifyFixGameResult implements IModifyFixGameResult {

        /**
         * Constructs a new ModifyFixGameResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IModifyFixGameResult);

        /** ModifyFixGameResult clubId. */
        public clubId: number;

        /** ModifyFixGameResult index. */
        public index: number;

        /** ModifyFixGameResult succezz. */
        public succezz: boolean;

        /**
         * Creates a new ModifyFixGameResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ModifyFixGameResult instance
         */
        public static create(properties?: msg.IModifyFixGameResult): msg.ModifyFixGameResult;

        /**
         * Encodes the specified ModifyFixGameResult message. Does not implicitly {@link msg.ModifyFixGameResult.verify|verify} messages.
         * @param message ModifyFixGameResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IModifyFixGameResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ModifyFixGameResult message, length delimited. Does not implicitly {@link msg.ModifyFixGameResult.verify|verify} messages.
         * @param message ModifyFixGameResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IModifyFixGameResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ModifyFixGameResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ModifyFixGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.ModifyFixGameResult;

        /**
         * Decodes a ModifyFixGameResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ModifyFixGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.ModifyFixGameResult;

        /**
         * Verifies a ModifyFixGameResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ModifyFixGameResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ModifyFixGameResult
         */
        public static fromObject(object: { [k: string]: any }): msg.ModifyFixGameResult;

        /**
         * Creates a plain object from a ModifyFixGameResult message. Also converts values to other types if specified.
         * @param message ModifyFixGameResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.ModifyFixGameResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ModifyFixGameResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExchangeRoomCardCmd. */
    interface IExchangeRoomCardCmd {

        /** ExchangeRoomCardCmd clubId */
        clubId?: (number|null);

        /** ExchangeRoomCardCmd roomCard */
        roomCard?: (number|null);
    }

    /** Represents an ExchangeRoomCardCmd. */
    class ExchangeRoomCardCmd implements IExchangeRoomCardCmd {

        /**
         * Constructs a new ExchangeRoomCardCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IExchangeRoomCardCmd);

        /** ExchangeRoomCardCmd clubId. */
        public clubId: number;

        /** ExchangeRoomCardCmd roomCard. */
        public roomCard: number;

        /**
         * Creates a new ExchangeRoomCardCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExchangeRoomCardCmd instance
         */
        public static create(properties?: msg.IExchangeRoomCardCmd): msg.ExchangeRoomCardCmd;

        /**
         * Encodes the specified ExchangeRoomCardCmd message. Does not implicitly {@link msg.ExchangeRoomCardCmd.verify|verify} messages.
         * @param message ExchangeRoomCardCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IExchangeRoomCardCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExchangeRoomCardCmd message, length delimited. Does not implicitly {@link msg.ExchangeRoomCardCmd.verify|verify} messages.
         * @param message ExchangeRoomCardCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IExchangeRoomCardCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExchangeRoomCardCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExchangeRoomCardCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.ExchangeRoomCardCmd;

        /**
         * Decodes an ExchangeRoomCardCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExchangeRoomCardCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.ExchangeRoomCardCmd;

        /**
         * Verifies an ExchangeRoomCardCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExchangeRoomCardCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExchangeRoomCardCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.ExchangeRoomCardCmd;

        /**
         * Creates a plain object from an ExchangeRoomCardCmd message. Also converts values to other types if specified.
         * @param message ExchangeRoomCardCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.ExchangeRoomCardCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExchangeRoomCardCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExchangeRoomCardResult. */
    interface IExchangeRoomCardResult {

        /** ExchangeRoomCardResult clubId */
        clubId?: (number|null);

        /** ExchangeRoomCardResult roomCard */
        roomCard?: (number|null);

        /** ExchangeRoomCardResult succezz */
        succezz?: (boolean|null);
    }

    /** Represents an ExchangeRoomCardResult. */
    class ExchangeRoomCardResult implements IExchangeRoomCardResult {

        /**
         * Constructs a new ExchangeRoomCardResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IExchangeRoomCardResult);

        /** ExchangeRoomCardResult clubId. */
        public clubId: number;

        /** ExchangeRoomCardResult roomCard. */
        public roomCard: number;

        /** ExchangeRoomCardResult succezz. */
        public succezz: boolean;

        /**
         * Creates a new ExchangeRoomCardResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExchangeRoomCardResult instance
         */
        public static create(properties?: msg.IExchangeRoomCardResult): msg.ExchangeRoomCardResult;

        /**
         * Encodes the specified ExchangeRoomCardResult message. Does not implicitly {@link msg.ExchangeRoomCardResult.verify|verify} messages.
         * @param message ExchangeRoomCardResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IExchangeRoomCardResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExchangeRoomCardResult message, length delimited. Does not implicitly {@link msg.ExchangeRoomCardResult.verify|verify} messages.
         * @param message ExchangeRoomCardResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IExchangeRoomCardResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExchangeRoomCardResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExchangeRoomCardResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.ExchangeRoomCardResult;

        /**
         * Decodes an ExchangeRoomCardResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExchangeRoomCardResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.ExchangeRoomCardResult;

        /**
         * Verifies an ExchangeRoomCardResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExchangeRoomCardResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExchangeRoomCardResult
         */
        public static fromObject(object: { [k: string]: any }): msg.ExchangeRoomCardResult;

        /**
         * Creates a plain object from an ExchangeRoomCardResult message. Also converts values to other types if specified.
         * @param message ExchangeRoomCardResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.ExchangeRoomCardResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExchangeRoomCardResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StartTableChangedListenCmd. */
    interface IStartTableChangedListenCmd {

        /** StartTableChangedListenCmd clubId */
        clubId?: (number|null);
    }

    /** Represents a StartTableChangedListenCmd. */
    class StartTableChangedListenCmd implements IStartTableChangedListenCmd {

        /**
         * Constructs a new StartTableChangedListenCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IStartTableChangedListenCmd);

        /** StartTableChangedListenCmd clubId. */
        public clubId: number;

        /**
         * Creates a new StartTableChangedListenCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StartTableChangedListenCmd instance
         */
        public static create(properties?: msg.IStartTableChangedListenCmd): msg.StartTableChangedListenCmd;

        /**
         * Encodes the specified StartTableChangedListenCmd message. Does not implicitly {@link msg.StartTableChangedListenCmd.verify|verify} messages.
         * @param message StartTableChangedListenCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IStartTableChangedListenCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StartTableChangedListenCmd message, length delimited. Does not implicitly {@link msg.StartTableChangedListenCmd.verify|verify} messages.
         * @param message StartTableChangedListenCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IStartTableChangedListenCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StartTableChangedListenCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StartTableChangedListenCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.StartTableChangedListenCmd;

        /**
         * Decodes a StartTableChangedListenCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StartTableChangedListenCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.StartTableChangedListenCmd;

        /**
         * Verifies a StartTableChangedListenCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StartTableChangedListenCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StartTableChangedListenCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.StartTableChangedListenCmd;

        /**
         * Creates a plain object from a StartTableChangedListenCmd message. Also converts values to other types if specified.
         * @param message StartTableChangedListenCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.StartTableChangedListenCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StartTableChangedListenCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StopTableChangedListenCmd. */
    interface IStopTableChangedListenCmd {
    }

    /** Represents a StopTableChangedListenCmd. */
    class StopTableChangedListenCmd implements IStopTableChangedListenCmd {

        /**
         * Constructs a new StopTableChangedListenCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IStopTableChangedListenCmd);

        /**
         * Creates a new StopTableChangedListenCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StopTableChangedListenCmd instance
         */
        public static create(properties?: msg.IStopTableChangedListenCmd): msg.StopTableChangedListenCmd;

        /**
         * Encodes the specified StopTableChangedListenCmd message. Does not implicitly {@link msg.StopTableChangedListenCmd.verify|verify} messages.
         * @param message StopTableChangedListenCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IStopTableChangedListenCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StopTableChangedListenCmd message, length delimited. Does not implicitly {@link msg.StopTableChangedListenCmd.verify|verify} messages.
         * @param message StopTableChangedListenCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IStopTableChangedListenCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StopTableChangedListenCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StopTableChangedListenCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.StopTableChangedListenCmd;

        /**
         * Decodes a StopTableChangedListenCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StopTableChangedListenCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.StopTableChangedListenCmd;

        /**
         * Verifies a StopTableChangedListenCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StopTableChangedListenCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StopTableChangedListenCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.StopTableChangedListenCmd;

        /**
         * Creates a plain object from a StopTableChangedListenCmd message. Also converts values to other types if specified.
         * @param message StopTableChangedListenCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.StopTableChangedListenCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StopTableChangedListenCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a AClubTableChangedBroadcast. */
    interface IAClubTableChangedBroadcast {

        /** AClubTableChangedBroadcast clubId */
        clubId?: (number|null);

        /** AClubTableChangedBroadcast tableSeqNum */
        tableSeqNum?: (number|null);

        /** AClubTableChangedBroadcast roomId */
        roomId?: (number|null);
    }

    /** Represents a AClubTableChangedBroadcast. */
    class AClubTableChangedBroadcast implements IAClubTableChangedBroadcast {

        /**
         * Constructs a new AClubTableChangedBroadcast.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IAClubTableChangedBroadcast);

        /** AClubTableChangedBroadcast clubId. */
        public clubId: number;

        /** AClubTableChangedBroadcast tableSeqNum. */
        public tableSeqNum: number;

        /** AClubTableChangedBroadcast roomId. */
        public roomId: number;

        /**
         * Creates a new AClubTableChangedBroadcast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AClubTableChangedBroadcast instance
         */
        public static create(properties?: msg.IAClubTableChangedBroadcast): msg.AClubTableChangedBroadcast;

        /**
         * Encodes the specified AClubTableChangedBroadcast message. Does not implicitly {@link msg.AClubTableChangedBroadcast.verify|verify} messages.
         * @param message AClubTableChangedBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IAClubTableChangedBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AClubTableChangedBroadcast message, length delimited. Does not implicitly {@link msg.AClubTableChangedBroadcast.verify|verify} messages.
         * @param message AClubTableChangedBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IAClubTableChangedBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AClubTableChangedBroadcast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AClubTableChangedBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.AClubTableChangedBroadcast;

        /**
         * Decodes a AClubTableChangedBroadcast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AClubTableChangedBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.AClubTableChangedBroadcast;

        /**
         * Verifies a AClubTableChangedBroadcast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AClubTableChangedBroadcast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AClubTableChangedBroadcast
         */
        public static fromObject(object: { [k: string]: any }): msg.AClubTableChangedBroadcast;

        /**
         * Creates a plain object from a AClubTableChangedBroadcast message. Also converts values to other types if specified.
         * @param message AClubTableChangedBroadcast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.AClubTableChangedBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AClubTableChangedBroadcast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
