import * as $protobuf from "protobufjs";
/** Namespace msg. */
export namespace msg {

    /** MJ_weihai_MsgCodeDef enum. */
    enum MJ_weihai_MsgCodeDef {
        _Dummy = 0,
        _JoinRoomBroadcast = 1001,
        _DissolveTheRoomCmd = 1002,
        _DissolveTheRoomResult = 1003,
        _DissolveTheRoomBroadcast = 1004,
        _DissolutionVoteCmd = 1005,
        _DissolutionVoteResult = 1006,
        _DissolutionVoteBroadcast = 1007,
        _DissolveSuccezzBroadcast = 1008,
        _FireAPlayerCmd = 1009,
        _FireAPlayerResult = 1010,
        _FireAPlayerBroadcast = 1011,
        _QuitRoomCmd = 1012,
        _QuitRoomResult = 1013,
        _QuitRoomBroadcast = 1014,
        _SyncRoomDataCmd = 1015,
        _SyncRoomDataResult = 1016,
        _ReportGeoLocationCmd = 1017,
        _ReportGeoLocationResult = 1018,
        _MeasureGeoDistanceCmd = 1019,
        _MeasureGeoDistanceResult = 1020,
        _PrepareCmd = 1021,
        _PrepareResult = 1022,
        _PrepareBroadcast = 1023,
        _OfficialStartCmd = 1024,
        _OfficialStartResult = 1025,
        _OfficialStartBroadcast = 1026,
        _SelectPiaoHintBroadcast = 1027,
        _DingPiaoCmd = 1028,
        _DingPiaoResult = 1029,
        _DingPiaoBroadcast = 1030,
        _RoundStartedBroadcast = 1031,
        _MahjongInHandChangedResult = 1032,
        _MahjongInHandChangedBroadcast = 1033,
        _MahjongMoPaiResult = 1034,
        _MahjongMoPaiBroadcast = 1035,
        _RedirectActUserIdBroadcast = 1036,
        _OpRemainTimeBroadcast = 1037,
        _MahjongChuPaiCmd = 1038,
        _MahjongChuPaiResult = 1039,
        _MahjongChuPaiBroadcast = 1040,
        _MahjongChiPengGangHuOpHintResult = 1041,
        _MahjongChiCmd = 1042,
        _MahjongChiResult = 1043,
        _MahjongChiBroadcast = 1044,
        _MahjongPengCmd = 1045,
        _MahjongPengResult = 1046,
        _MahjongPengBroadcast = 1047,
        _MahjongGangCmd = 1048,
        _MahjongMingGangResult = 1049,
        _MahjongAnGangResult = 1050,
        _MahjongBuGangResult = 1051,
        _MahjongMingGangBroadcast = 1052,
        _MahjongAnGangBroadcast = 1053,
        _MahjongBuGangBroadcast = 1054,
        _MahjongLiangDaoCmd = 1055,
        _MahjongLiangDaoResult = 1056,
        _MahjongLiangDaoBroadcast = 1057,
        _MahjongHuCmd = 1058,
        _MahjongHuOrZiMoResult = 1059,
        _MahjongHuOrZiMoBroadcast = 1060,
        _MahjongGuoCmd = 1061,
        _MahjongGuoResult = 1062,
        _MahjongHuangZhuangBroadcast = 1063,
        _RoundSettlementBroadcast = 1064,
        _RoomSettlementBroadcast = 1065,
        _MahjongLiangFengCmd = 1066,
        _MahjongLiangFengResult = 1067,
        _MahjongLiangFengBroadcast = 1068,
        _MahjongBuFengCmd = 1069,
        _MahjongBuFengResult = 1070,
        _MahjongBuFengBroadcast = 1071,
        _MahjongLiangGangDingBroadcast = 1072
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

    /** Properties of a MahjongChiPengGang. */
    interface IMahjongChiPengGang {

        /** MahjongChiPengGang kind */
        kind?: (number|null);

        /** MahjongChiPengGang tX */
        tX?: (number|null);

        /** MahjongChiPengGang t0 */
        t0?: (number|null);

        /** MahjongChiPengGang t1 */
        t1?: (number|null);

        /** MahjongChiPengGang t2 */
        t2?: (number|null);

        /** MahjongChiPengGang fromUserId */
        fromUserId?: (number|null);
    }

    /** Represents a MahjongChiPengGang. */
    class MahjongChiPengGang implements IMahjongChiPengGang {

        /**
         * Constructs a new MahjongChiPengGang.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongChiPengGang);

        /** MahjongChiPengGang kind. */
        public kind: number;

        /** MahjongChiPengGang tX. */
        public tX: number;

        /** MahjongChiPengGang t0. */
        public t0: number;

        /** MahjongChiPengGang t1. */
        public t1: number;

        /** MahjongChiPengGang t2. */
        public t2: number;

        /** MahjongChiPengGang fromUserId. */
        public fromUserId: number;

        /**
         * Creates a new MahjongChiPengGang instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongChiPengGang instance
         */
        public static create(properties?: msg.IMahjongChiPengGang): msg.MahjongChiPengGang;

        /**
         * Encodes the specified MahjongChiPengGang message. Does not implicitly {@link msg.MahjongChiPengGang.verify|verify} messages.
         * @param message MahjongChiPengGang message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongChiPengGang, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongChiPengGang message, length delimited. Does not implicitly {@link msg.MahjongChiPengGang.verify|verify} messages.
         * @param message MahjongChiPengGang message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongChiPengGang, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongChiPengGang message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongChiPengGang
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongChiPengGang;

        /**
         * Decodes a MahjongChiPengGang message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongChiPengGang
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongChiPengGang;

        /**
         * Verifies a MahjongChiPengGang message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongChiPengGang message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongChiPengGang
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongChiPengGang;

        /**
         * Creates a plain object from a MahjongChiPengGang message. Also converts values to other types if specified.
         * @param message MahjongChiPengGang
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongChiPengGang, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongChiPengGang to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongLiangFeng. */
    interface IMahjongLiangFeng {

        /** MahjongLiangFeng kind */
        kind?: (number|null);

        /** MahjongLiangFeng numOfDongFeng */
        numOfDongFeng?: (number|null);

        /** MahjongLiangFeng numOfNanFeng */
        numOfNanFeng?: (number|null);

        /** MahjongLiangFeng numOfXiFeng */
        numOfXiFeng?: (number|null);

        /** MahjongLiangFeng numOfBeiFeng */
        numOfBeiFeng?: (number|null);

        /** MahjongLiangFeng numOfHongZhong */
        numOfHongZhong?: (number|null);

        /** MahjongLiangFeng numOfFaCai */
        numOfFaCai?: (number|null);

        /** MahjongLiangFeng numOfBaiBan */
        numOfBaiBan?: (number|null);
    }

    /** Represents a MahjongLiangFeng. */
    class MahjongLiangFeng implements IMahjongLiangFeng {

        /**
         * Constructs a new MahjongLiangFeng.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongLiangFeng);

        /** MahjongLiangFeng kind. */
        public kind: number;

        /** MahjongLiangFeng numOfDongFeng. */
        public numOfDongFeng: number;

        /** MahjongLiangFeng numOfNanFeng. */
        public numOfNanFeng: number;

        /** MahjongLiangFeng numOfXiFeng. */
        public numOfXiFeng: number;

        /** MahjongLiangFeng numOfBeiFeng. */
        public numOfBeiFeng: number;

        /** MahjongLiangFeng numOfHongZhong. */
        public numOfHongZhong: number;

        /** MahjongLiangFeng numOfFaCai. */
        public numOfFaCai: number;

        /** MahjongLiangFeng numOfBaiBan. */
        public numOfBaiBan: number;

        /**
         * Creates a new MahjongLiangFeng instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongLiangFeng instance
         */
        public static create(properties?: msg.IMahjongLiangFeng): msg.MahjongLiangFeng;

        /**
         * Encodes the specified MahjongLiangFeng message. Does not implicitly {@link msg.MahjongLiangFeng.verify|verify} messages.
         * @param message MahjongLiangFeng message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongLiangFeng, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongLiangFeng message, length delimited. Does not implicitly {@link msg.MahjongLiangFeng.verify|verify} messages.
         * @param message MahjongLiangFeng message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongLiangFeng, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongLiangFeng message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongLiangFeng
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongLiangFeng;

        /**
         * Decodes a MahjongLiangFeng message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongLiangFeng
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongLiangFeng;

        /**
         * Verifies a MahjongLiangFeng message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongLiangFeng message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongLiangFeng
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongLiangFeng;

        /**
         * Creates a plain object from a MahjongLiangFeng message. Also converts values to other types if specified.
         * @param message MahjongLiangFeng
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongLiangFeng, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongLiangFeng to JSON.
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

        /** Player clientIpAddr */
        clientIpAddr?: (string|null);

        /** Player currScore */
        currScore?: (number|null);

        /** Player totalScore */
        totalScore?: (number|null);

        /** Player seatIndex */
        seatIndex?: (number|null);

        /** Player piaoX */
        piaoX?: (number|null);

        /** Player roomOwnerFlag */
        roomOwnerFlag?: (boolean|null);

        /** Player zhuangJiaFlag */
        zhuangJiaFlag?: (boolean|null);

        /** Player readyFlag */
        readyFlag?: (boolean|null);

        /** Player offlineFlag */
        offlineFlag?: (boolean|null);

        /** Player mahjongInHand */
        mahjongInHand?: (number[]|null);

        /** Player mahjongMoPai */
        mahjongMoPai?: (number|null);

        /** Player mahjongOutput */
        mahjongOutput?: (number[]|null);

        /** Player mahjongChiPengGang */
        mahjongChiPengGang?: (msg.IMahjongChiPengGang[]|null);

        /** Player mahjongLiangFeng */
        mahjongLiangFeng?: (msg.IMahjongLiangFeng|null);
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

        /** Player clientIpAddr. */
        public clientIpAddr: string;

        /** Player currScore. */
        public currScore: number;

        /** Player totalScore. */
        public totalScore: number;

        /** Player seatIndex. */
        public seatIndex: number;

        /** Player piaoX. */
        public piaoX: number;

        /** Player roomOwnerFlag. */
        public roomOwnerFlag: boolean;

        /** Player zhuangJiaFlag. */
        public zhuangJiaFlag: boolean;

        /** Player readyFlag. */
        public readyFlag: boolean;

        /** Player offlineFlag. */
        public offlineFlag: boolean;

        /** Player mahjongInHand. */
        public mahjongInHand: number[];

        /** Player mahjongMoPai. */
        public mahjongMoPai: number;

        /** Player mahjongOutput. */
        public mahjongOutput: number[];

        /** Player mahjongChiPengGang. */
        public mahjongChiPengGang: msg.IMahjongChiPengGang[];

        /** Player mahjongLiangFeng. */
        public mahjongLiangFeng?: (msg.IMahjongLiangFeng|null);

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

    /** Properties of a JoinRoomBroadcast. */
    interface IJoinRoomBroadcast {

        /** JoinRoomBroadcast userId */
        userId?: (number|null);

        /** JoinRoomBroadcast userName */
        userName?: (string|null);

        /** JoinRoomBroadcast headImg */
        headImg?: (string|null);

        /** JoinRoomBroadcast sex */
        sex?: (number|null);

        /** JoinRoomBroadcast clientIpAddr */
        clientIpAddr?: (string|null);

        /** JoinRoomBroadcast seatIndex */
        seatIndex?: (number|null);

        /** JoinRoomBroadcast currScore */
        currScore?: (number|null);

        /** JoinRoomBroadcast totalScore */
        totalScore?: (number|null);
    }

    /** Represents a JoinRoomBroadcast. */
    class JoinRoomBroadcast implements IJoinRoomBroadcast {

        /**
         * Constructs a new JoinRoomBroadcast.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IJoinRoomBroadcast);

        /** JoinRoomBroadcast userId. */
        public userId: number;

        /** JoinRoomBroadcast userName. */
        public userName: string;

        /** JoinRoomBroadcast headImg. */
        public headImg: string;

        /** JoinRoomBroadcast sex. */
        public sex: number;

        /** JoinRoomBroadcast clientIpAddr. */
        public clientIpAddr: string;

        /** JoinRoomBroadcast seatIndex. */
        public seatIndex: number;

        /** JoinRoomBroadcast currScore. */
        public currScore: number;

        /** JoinRoomBroadcast totalScore. */
        public totalScore: number;

        /**
         * Creates a new JoinRoomBroadcast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinRoomBroadcast instance
         */
        public static create(properties?: msg.IJoinRoomBroadcast): msg.JoinRoomBroadcast;

        /**
         * Encodes the specified JoinRoomBroadcast message. Does not implicitly {@link msg.JoinRoomBroadcast.verify|verify} messages.
         * @param message JoinRoomBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IJoinRoomBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinRoomBroadcast message, length delimited. Does not implicitly {@link msg.JoinRoomBroadcast.verify|verify} messages.
         * @param message JoinRoomBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IJoinRoomBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinRoomBroadcast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinRoomBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.JoinRoomBroadcast;

        /**
         * Decodes a JoinRoomBroadcast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinRoomBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.JoinRoomBroadcast;

        /**
         * Verifies a JoinRoomBroadcast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinRoomBroadcast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinRoomBroadcast
         */
        public static fromObject(object: { [k: string]: any }): msg.JoinRoomBroadcast;

        /**
         * Creates a plain object from a JoinRoomBroadcast message. Also converts values to other types if specified.
         * @param message JoinRoomBroadcast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.JoinRoomBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinRoomBroadcast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DissolveTheRoomCmd. */
    interface IDissolveTheRoomCmd {

        /** DissolveTheRoomCmd reason */
        reason?: (number|null);
    }

    /** Represents a DissolveTheRoomCmd. */
    class DissolveTheRoomCmd implements IDissolveTheRoomCmd {

        /**
         * Constructs a new DissolveTheRoomCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IDissolveTheRoomCmd);

        /** DissolveTheRoomCmd reason. */
        public reason: number;

        /**
         * Creates a new DissolveTheRoomCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DissolveTheRoomCmd instance
         */
        public static create(properties?: msg.IDissolveTheRoomCmd): msg.DissolveTheRoomCmd;

        /**
         * Encodes the specified DissolveTheRoomCmd message. Does not implicitly {@link msg.DissolveTheRoomCmd.verify|verify} messages.
         * @param message DissolveTheRoomCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IDissolveTheRoomCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DissolveTheRoomCmd message, length delimited. Does not implicitly {@link msg.DissolveTheRoomCmd.verify|verify} messages.
         * @param message DissolveTheRoomCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IDissolveTheRoomCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DissolveTheRoomCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DissolveTheRoomCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.DissolveTheRoomCmd;

        /**
         * Decodes a DissolveTheRoomCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DissolveTheRoomCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.DissolveTheRoomCmd;

        /**
         * Verifies a DissolveTheRoomCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DissolveTheRoomCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DissolveTheRoomCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.DissolveTheRoomCmd;

        /**
         * Creates a plain object from a DissolveTheRoomCmd message. Also converts values to other types if specified.
         * @param message DissolveTheRoomCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.DissolveTheRoomCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DissolveTheRoomCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DissolveTheRoomResult. */
    interface IDissolveTheRoomResult {

        /** DissolveTheRoomResult reason */
        reason?: (number|null);

        /** DissolveTheRoomResult ok */
        ok?: (boolean|null);
    }

    /** Represents a DissolveTheRoomResult. */
    class DissolveTheRoomResult implements IDissolveTheRoomResult {

        /**
         * Constructs a new DissolveTheRoomResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IDissolveTheRoomResult);

        /** DissolveTheRoomResult reason. */
        public reason: number;

        /** DissolveTheRoomResult ok. */
        public ok: boolean;

        /**
         * Creates a new DissolveTheRoomResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DissolveTheRoomResult instance
         */
        public static create(properties?: msg.IDissolveTheRoomResult): msg.DissolveTheRoomResult;

        /**
         * Encodes the specified DissolveTheRoomResult message. Does not implicitly {@link msg.DissolveTheRoomResult.verify|verify} messages.
         * @param message DissolveTheRoomResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IDissolveTheRoomResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DissolveTheRoomResult message, length delimited. Does not implicitly {@link msg.DissolveTheRoomResult.verify|verify} messages.
         * @param message DissolveTheRoomResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IDissolveTheRoomResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DissolveTheRoomResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DissolveTheRoomResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.DissolveTheRoomResult;

        /**
         * Decodes a DissolveTheRoomResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DissolveTheRoomResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.DissolveTheRoomResult;

        /**
         * Verifies a DissolveTheRoomResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DissolveTheRoomResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DissolveTheRoomResult
         */
        public static fromObject(object: { [k: string]: any }): msg.DissolveTheRoomResult;

        /**
         * Creates a plain object from a DissolveTheRoomResult message. Also converts values to other types if specified.
         * @param message DissolveTheRoomResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.DissolveTheRoomResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DissolveTheRoomResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DissolveTheRoomBroadcast. */
    interface IDissolveTheRoomBroadcast {

        /** DissolveTheRoomBroadcast fromUserId */
        fromUserId?: (number|null);

        /** DissolveTheRoomBroadcast fromUserName */
        fromUserName?: (string|null);

        /** DissolveTheRoomBroadcast reason */
        reason?: (number|null);

        /** 当前牌局索引 */
        currRoundIndex?: (number|null);

        /** DissolveTheRoomBroadcast remainTime */
        remainTime?: (number|null);

        /** DissolveTheRoomBroadcast waiting4User */
        waiting4User?: (msg.DissolveTheRoomBroadcast.IWaiting4User[]|null);
    }

    /** Represents a DissolveTheRoomBroadcast. */
    class DissolveTheRoomBroadcast implements IDissolveTheRoomBroadcast {

        /**
         * Constructs a new DissolveTheRoomBroadcast.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IDissolveTheRoomBroadcast);

        /** DissolveTheRoomBroadcast fromUserId. */
        public fromUserId: number;

        /** DissolveTheRoomBroadcast fromUserName. */
        public fromUserName: string;

        /** DissolveTheRoomBroadcast reason. */
        public reason: number;

        /** 当前牌局索引 */
        public currRoundIndex: number;

        /** DissolveTheRoomBroadcast remainTime. */
        public remainTime: number;

        /** DissolveTheRoomBroadcast waiting4User. */
        public waiting4User: msg.DissolveTheRoomBroadcast.IWaiting4User[];

        /**
         * Creates a new DissolveTheRoomBroadcast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DissolveTheRoomBroadcast instance
         */
        public static create(properties?: msg.IDissolveTheRoomBroadcast): msg.DissolveTheRoomBroadcast;

        /**
         * Encodes the specified DissolveTheRoomBroadcast message. Does not implicitly {@link msg.DissolveTheRoomBroadcast.verify|verify} messages.
         * @param message DissolveTheRoomBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IDissolveTheRoomBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DissolveTheRoomBroadcast message, length delimited. Does not implicitly {@link msg.DissolveTheRoomBroadcast.verify|verify} messages.
         * @param message DissolveTheRoomBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IDissolveTheRoomBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DissolveTheRoomBroadcast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DissolveTheRoomBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.DissolveTheRoomBroadcast;

        /**
         * Decodes a DissolveTheRoomBroadcast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DissolveTheRoomBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.DissolveTheRoomBroadcast;

        /**
         * Verifies a DissolveTheRoomBroadcast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DissolveTheRoomBroadcast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DissolveTheRoomBroadcast
         */
        public static fromObject(object: { [k: string]: any }): msg.DissolveTheRoomBroadcast;

        /**
         * Creates a plain object from a DissolveTheRoomBroadcast message. Also converts values to other types if specified.
         * @param message DissolveTheRoomBroadcast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.DissolveTheRoomBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DissolveTheRoomBroadcast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace DissolveTheRoomBroadcast {

        /** Properties of a Waiting4User. */
        interface IWaiting4User {

            /** Waiting4User userId */
            userId?: (number|null);

            /** Waiting4User userName */
            userName?: (string|null);

            /** Waiting4User headImg */
            headImg?: (string|null);

            /** Waiting4User roomOwnerFlag */
            roomOwnerFlag?: (boolean|null);

            /** Waiting4User seatIndex */
            seatIndex?: (number|null);

            /** Waiting4User yes */
            yes?: (number|null);
        }

        /** Represents a Waiting4User. */
        class Waiting4User implements IWaiting4User {

            /**
             * Constructs a new Waiting4User.
             * @param [properties] Properties to set
             */
            constructor(properties?: msg.DissolveTheRoomBroadcast.IWaiting4User);

            /** Waiting4User userId. */
            public userId: number;

            /** Waiting4User userName. */
            public userName: string;

            /** Waiting4User headImg. */
            public headImg: string;

            /** Waiting4User roomOwnerFlag. */
            public roomOwnerFlag: boolean;

            /** Waiting4User seatIndex. */
            public seatIndex: number;

            /** Waiting4User yes. */
            public yes: number;

            /**
             * Creates a new Waiting4User instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Waiting4User instance
             */
            public static create(properties?: msg.DissolveTheRoomBroadcast.IWaiting4User): msg.DissolveTheRoomBroadcast.Waiting4User;

            /**
             * Encodes the specified Waiting4User message. Does not implicitly {@link msg.DissolveTheRoomBroadcast.Waiting4User.verify|verify} messages.
             * @param message Waiting4User message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: msg.DissolveTheRoomBroadcast.IWaiting4User, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Waiting4User message, length delimited. Does not implicitly {@link msg.DissolveTheRoomBroadcast.Waiting4User.verify|verify} messages.
             * @param message Waiting4User message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: msg.DissolveTheRoomBroadcast.IWaiting4User, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Waiting4User message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Waiting4User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.DissolveTheRoomBroadcast.Waiting4User;

            /**
             * Decodes a Waiting4User message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Waiting4User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.DissolveTheRoomBroadcast.Waiting4User;

            /**
             * Verifies a Waiting4User message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Waiting4User message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Waiting4User
             */
            public static fromObject(object: { [k: string]: any }): msg.DissolveTheRoomBroadcast.Waiting4User;

            /**
             * Creates a plain object from a Waiting4User message. Also converts values to other types if specified.
             * @param message Waiting4User
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: msg.DissolveTheRoomBroadcast.Waiting4User, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Waiting4User to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a DissolutionVoteCmd. */
    interface IDissolutionVoteCmd {

        /** DissolutionVoteCmd yes */
        yes?: (number|null);
    }

    /** Represents a DissolutionVoteCmd. */
    class DissolutionVoteCmd implements IDissolutionVoteCmd {

        /**
         * Constructs a new DissolutionVoteCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IDissolutionVoteCmd);

        /** DissolutionVoteCmd yes. */
        public yes: number;

        /**
         * Creates a new DissolutionVoteCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DissolutionVoteCmd instance
         */
        public static create(properties?: msg.IDissolutionVoteCmd): msg.DissolutionVoteCmd;

        /**
         * Encodes the specified DissolutionVoteCmd message. Does not implicitly {@link msg.DissolutionVoteCmd.verify|verify} messages.
         * @param message DissolutionVoteCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IDissolutionVoteCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DissolutionVoteCmd message, length delimited. Does not implicitly {@link msg.DissolutionVoteCmd.verify|verify} messages.
         * @param message DissolutionVoteCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IDissolutionVoteCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DissolutionVoteCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DissolutionVoteCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.DissolutionVoteCmd;

        /**
         * Decodes a DissolutionVoteCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DissolutionVoteCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.DissolutionVoteCmd;

        /**
         * Verifies a DissolutionVoteCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DissolutionVoteCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DissolutionVoteCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.DissolutionVoteCmd;

        /**
         * Creates a plain object from a DissolutionVoteCmd message. Also converts values to other types if specified.
         * @param message DissolutionVoteCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.DissolutionVoteCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DissolutionVoteCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DissolutionVoteResult. */
    interface IDissolutionVoteResult {

        /** DissolutionVoteResult yes */
        yes?: (number|null);

        /** DissolutionVoteResult ok */
        ok?: (boolean|null);
    }

    /** Represents a DissolutionVoteResult. */
    class DissolutionVoteResult implements IDissolutionVoteResult {

        /**
         * Constructs a new DissolutionVoteResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IDissolutionVoteResult);

        /** DissolutionVoteResult yes. */
        public yes: number;

        /** DissolutionVoteResult ok. */
        public ok: boolean;

        /**
         * Creates a new DissolutionVoteResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DissolutionVoteResult instance
         */
        public static create(properties?: msg.IDissolutionVoteResult): msg.DissolutionVoteResult;

        /**
         * Encodes the specified DissolutionVoteResult message. Does not implicitly {@link msg.DissolutionVoteResult.verify|verify} messages.
         * @param message DissolutionVoteResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IDissolutionVoteResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DissolutionVoteResult message, length delimited. Does not implicitly {@link msg.DissolutionVoteResult.verify|verify} messages.
         * @param message DissolutionVoteResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IDissolutionVoteResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DissolutionVoteResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DissolutionVoteResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.DissolutionVoteResult;

        /**
         * Decodes a DissolutionVoteResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DissolutionVoteResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.DissolutionVoteResult;

        /**
         * Verifies a DissolutionVoteResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DissolutionVoteResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DissolutionVoteResult
         */
        public static fromObject(object: { [k: string]: any }): msg.DissolutionVoteResult;

        /**
         * Creates a plain object from a DissolutionVoteResult message. Also converts values to other types if specified.
         * @param message DissolutionVoteResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.DissolutionVoteResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DissolutionVoteResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DissolutionVoteBroadcast. */
    interface IDissolutionVoteBroadcast {

        /** DissolutionVoteBroadcast userId */
        userId?: (number|null);

        /** DissolutionVoteBroadcast yes */
        yes?: (number|null);
    }

    /** Represents a DissolutionVoteBroadcast. */
    class DissolutionVoteBroadcast implements IDissolutionVoteBroadcast {

        /**
         * Constructs a new DissolutionVoteBroadcast.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IDissolutionVoteBroadcast);

        /** DissolutionVoteBroadcast userId. */
        public userId: number;

        /** DissolutionVoteBroadcast yes. */
        public yes: number;

        /**
         * Creates a new DissolutionVoteBroadcast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DissolutionVoteBroadcast instance
         */
        public static create(properties?: msg.IDissolutionVoteBroadcast): msg.DissolutionVoteBroadcast;

        /**
         * Encodes the specified DissolutionVoteBroadcast message. Does not implicitly {@link msg.DissolutionVoteBroadcast.verify|verify} messages.
         * @param message DissolutionVoteBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IDissolutionVoteBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DissolutionVoteBroadcast message, length delimited. Does not implicitly {@link msg.DissolutionVoteBroadcast.verify|verify} messages.
         * @param message DissolutionVoteBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IDissolutionVoteBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DissolutionVoteBroadcast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DissolutionVoteBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.DissolutionVoteBroadcast;

        /**
         * Decodes a DissolutionVoteBroadcast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DissolutionVoteBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.DissolutionVoteBroadcast;

        /**
         * Verifies a DissolutionVoteBroadcast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DissolutionVoteBroadcast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DissolutionVoteBroadcast
         */
        public static fromObject(object: { [k: string]: any }): msg.DissolutionVoteBroadcast;

        /**
         * Creates a plain object from a DissolutionVoteBroadcast message. Also converts values to other types if specified.
         * @param message DissolutionVoteBroadcast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.DissolutionVoteBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DissolutionVoteBroadcast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DissolveSuccezzBroadcast. */
    interface IDissolveSuccezzBroadcast {
    }

    /** Represents a DissolveSuccezzBroadcast. */
    class DissolveSuccezzBroadcast implements IDissolveSuccezzBroadcast {

        /**
         * Constructs a new DissolveSuccezzBroadcast.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IDissolveSuccezzBroadcast);

        /**
         * Creates a new DissolveSuccezzBroadcast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DissolveSuccezzBroadcast instance
         */
        public static create(properties?: msg.IDissolveSuccezzBroadcast): msg.DissolveSuccezzBroadcast;

        /**
         * Encodes the specified DissolveSuccezzBroadcast message. Does not implicitly {@link msg.DissolveSuccezzBroadcast.verify|verify} messages.
         * @param message DissolveSuccezzBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IDissolveSuccezzBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DissolveSuccezzBroadcast message, length delimited. Does not implicitly {@link msg.DissolveSuccezzBroadcast.verify|verify} messages.
         * @param message DissolveSuccezzBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IDissolveSuccezzBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DissolveSuccezzBroadcast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DissolveSuccezzBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.DissolveSuccezzBroadcast;

        /**
         * Decodes a DissolveSuccezzBroadcast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DissolveSuccezzBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.DissolveSuccezzBroadcast;

        /**
         * Verifies a DissolveSuccezzBroadcast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DissolveSuccezzBroadcast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DissolveSuccezzBroadcast
         */
        public static fromObject(object: { [k: string]: any }): msg.DissolveSuccezzBroadcast;

        /**
         * Creates a plain object from a DissolveSuccezzBroadcast message. Also converts values to other types if specified.
         * @param message DissolveSuccezzBroadcast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.DissolveSuccezzBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DissolveSuccezzBroadcast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FireAPlayerCmd. */
    interface IFireAPlayerCmd {

        /** FireAPlayerCmd targetUserId */
        targetUserId?: (number|null);
    }

    /** Represents a FireAPlayerCmd. */
    class FireAPlayerCmd implements IFireAPlayerCmd {

        /**
         * Constructs a new FireAPlayerCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IFireAPlayerCmd);

        /** FireAPlayerCmd targetUserId. */
        public targetUserId: number;

        /**
         * Creates a new FireAPlayerCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FireAPlayerCmd instance
         */
        public static create(properties?: msg.IFireAPlayerCmd): msg.FireAPlayerCmd;

        /**
         * Encodes the specified FireAPlayerCmd message. Does not implicitly {@link msg.FireAPlayerCmd.verify|verify} messages.
         * @param message FireAPlayerCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IFireAPlayerCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FireAPlayerCmd message, length delimited. Does not implicitly {@link msg.FireAPlayerCmd.verify|verify} messages.
         * @param message FireAPlayerCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IFireAPlayerCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FireAPlayerCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FireAPlayerCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.FireAPlayerCmd;

        /**
         * Decodes a FireAPlayerCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FireAPlayerCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.FireAPlayerCmd;

        /**
         * Verifies a FireAPlayerCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FireAPlayerCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireAPlayerCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.FireAPlayerCmd;

        /**
         * Creates a plain object from a FireAPlayerCmd message. Also converts values to other types if specified.
         * @param message FireAPlayerCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.FireAPlayerCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireAPlayerCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FireAPlayerResult. */
    interface IFireAPlayerResult {

        /** FireAPlayerResult targetUserId */
        targetUserId?: (number|null);

        /** FireAPlayerResult ok */
        ok?: (boolean|null);
    }

    /** Represents a FireAPlayerResult. */
    class FireAPlayerResult implements IFireAPlayerResult {

        /**
         * Constructs a new FireAPlayerResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IFireAPlayerResult);

        /** FireAPlayerResult targetUserId. */
        public targetUserId: number;

        /** FireAPlayerResult ok. */
        public ok: boolean;

        /**
         * Creates a new FireAPlayerResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FireAPlayerResult instance
         */
        public static create(properties?: msg.IFireAPlayerResult): msg.FireAPlayerResult;

        /**
         * Encodes the specified FireAPlayerResult message. Does not implicitly {@link msg.FireAPlayerResult.verify|verify} messages.
         * @param message FireAPlayerResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IFireAPlayerResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FireAPlayerResult message, length delimited. Does not implicitly {@link msg.FireAPlayerResult.verify|verify} messages.
         * @param message FireAPlayerResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IFireAPlayerResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FireAPlayerResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FireAPlayerResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.FireAPlayerResult;

        /**
         * Decodes a FireAPlayerResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FireAPlayerResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.FireAPlayerResult;

        /**
         * Verifies a FireAPlayerResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FireAPlayerResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireAPlayerResult
         */
        public static fromObject(object: { [k: string]: any }): msg.FireAPlayerResult;

        /**
         * Creates a plain object from a FireAPlayerResult message. Also converts values to other types if specified.
         * @param message FireAPlayerResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.FireAPlayerResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireAPlayerResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FireAPlayerBroadcast. */
    interface IFireAPlayerBroadcast {

        /** FireAPlayerBroadcast targetUserId */
        targetUserId?: (number|null);
    }

    /** Represents a FireAPlayerBroadcast. */
    class FireAPlayerBroadcast implements IFireAPlayerBroadcast {

        /**
         * Constructs a new FireAPlayerBroadcast.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IFireAPlayerBroadcast);

        /** FireAPlayerBroadcast targetUserId. */
        public targetUserId: number;

        /**
         * Creates a new FireAPlayerBroadcast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FireAPlayerBroadcast instance
         */
        public static create(properties?: msg.IFireAPlayerBroadcast): msg.FireAPlayerBroadcast;

        /**
         * Encodes the specified FireAPlayerBroadcast message. Does not implicitly {@link msg.FireAPlayerBroadcast.verify|verify} messages.
         * @param message FireAPlayerBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IFireAPlayerBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FireAPlayerBroadcast message, length delimited. Does not implicitly {@link msg.FireAPlayerBroadcast.verify|verify} messages.
         * @param message FireAPlayerBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IFireAPlayerBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FireAPlayerBroadcast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FireAPlayerBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.FireAPlayerBroadcast;

        /**
         * Decodes a FireAPlayerBroadcast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FireAPlayerBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.FireAPlayerBroadcast;

        /**
         * Verifies a FireAPlayerBroadcast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FireAPlayerBroadcast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireAPlayerBroadcast
         */
        public static fromObject(object: { [k: string]: any }): msg.FireAPlayerBroadcast;

        /**
         * Creates a plain object from a FireAPlayerBroadcast message. Also converts values to other types if specified.
         * @param message FireAPlayerBroadcast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.FireAPlayerBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireAPlayerBroadcast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QuitRoomCmd. */
    interface IQuitRoomCmd {
    }

    /** Represents a QuitRoomCmd. */
    class QuitRoomCmd implements IQuitRoomCmd {

        /**
         * Constructs a new QuitRoomCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IQuitRoomCmd);

        /**
         * Creates a new QuitRoomCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QuitRoomCmd instance
         */
        public static create(properties?: msg.IQuitRoomCmd): msg.QuitRoomCmd;

        /**
         * Encodes the specified QuitRoomCmd message. Does not implicitly {@link msg.QuitRoomCmd.verify|verify} messages.
         * @param message QuitRoomCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IQuitRoomCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QuitRoomCmd message, length delimited. Does not implicitly {@link msg.QuitRoomCmd.verify|verify} messages.
         * @param message QuitRoomCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IQuitRoomCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QuitRoomCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QuitRoomCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.QuitRoomCmd;

        /**
         * Decodes a QuitRoomCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QuitRoomCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.QuitRoomCmd;

        /**
         * Verifies a QuitRoomCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QuitRoomCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QuitRoomCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.QuitRoomCmd;

        /**
         * Creates a plain object from a QuitRoomCmd message. Also converts values to other types if specified.
         * @param message QuitRoomCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.QuitRoomCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QuitRoomCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QuitRoomResult. */
    interface IQuitRoomResult {

        /** QuitRoomResult ok */
        ok?: (boolean|null);
    }

    /** Represents a QuitRoomResult. */
    class QuitRoomResult implements IQuitRoomResult {

        /**
         * Constructs a new QuitRoomResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IQuitRoomResult);

        /** QuitRoomResult ok. */
        public ok: boolean;

        /**
         * Creates a new QuitRoomResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QuitRoomResult instance
         */
        public static create(properties?: msg.IQuitRoomResult): msg.QuitRoomResult;

        /**
         * Encodes the specified QuitRoomResult message. Does not implicitly {@link msg.QuitRoomResult.verify|verify} messages.
         * @param message QuitRoomResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IQuitRoomResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QuitRoomResult message, length delimited. Does not implicitly {@link msg.QuitRoomResult.verify|verify} messages.
         * @param message QuitRoomResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IQuitRoomResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QuitRoomResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QuitRoomResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.QuitRoomResult;

        /**
         * Decodes a QuitRoomResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QuitRoomResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.QuitRoomResult;

        /**
         * Verifies a QuitRoomResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QuitRoomResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QuitRoomResult
         */
        public static fromObject(object: { [k: string]: any }): msg.QuitRoomResult;

        /**
         * Creates a plain object from a QuitRoomResult message. Also converts values to other types if specified.
         * @param message QuitRoomResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.QuitRoomResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QuitRoomResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QuitRoomBroadcast. */
    interface IQuitRoomBroadcast {

        /** QuitRoomBroadcast fromUserId */
        fromUserId?: (number|null);
    }

    /** Represents a QuitRoomBroadcast. */
    class QuitRoomBroadcast implements IQuitRoomBroadcast {

        /**
         * Constructs a new QuitRoomBroadcast.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IQuitRoomBroadcast);

        /** QuitRoomBroadcast fromUserId. */
        public fromUserId: number;

        /**
         * Creates a new QuitRoomBroadcast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QuitRoomBroadcast instance
         */
        public static create(properties?: msg.IQuitRoomBroadcast): msg.QuitRoomBroadcast;

        /**
         * Encodes the specified QuitRoomBroadcast message. Does not implicitly {@link msg.QuitRoomBroadcast.verify|verify} messages.
         * @param message QuitRoomBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IQuitRoomBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QuitRoomBroadcast message, length delimited. Does not implicitly {@link msg.QuitRoomBroadcast.verify|verify} messages.
         * @param message QuitRoomBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IQuitRoomBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QuitRoomBroadcast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QuitRoomBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.QuitRoomBroadcast;

        /**
         * Decodes a QuitRoomBroadcast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QuitRoomBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.QuitRoomBroadcast;

        /**
         * Verifies a QuitRoomBroadcast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QuitRoomBroadcast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QuitRoomBroadcast
         */
        public static fromObject(object: { [k: string]: any }): msg.QuitRoomBroadcast;

        /**
         * Creates a plain object from a QuitRoomBroadcast message. Also converts values to other types if specified.
         * @param message QuitRoomBroadcast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.QuitRoomBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QuitRoomBroadcast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SyncRoomDataCmd. */
    interface ISyncRoomDataCmd {
    }

    /** Represents a SyncRoomDataCmd. */
    class SyncRoomDataCmd implements ISyncRoomDataCmd {

        /**
         * Constructs a new SyncRoomDataCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ISyncRoomDataCmd);

        /**
         * Creates a new SyncRoomDataCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncRoomDataCmd instance
         */
        public static create(properties?: msg.ISyncRoomDataCmd): msg.SyncRoomDataCmd;

        /**
         * Encodes the specified SyncRoomDataCmd message. Does not implicitly {@link msg.SyncRoomDataCmd.verify|verify} messages.
         * @param message SyncRoomDataCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ISyncRoomDataCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncRoomDataCmd message, length delimited. Does not implicitly {@link msg.SyncRoomDataCmd.verify|verify} messages.
         * @param message SyncRoomDataCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ISyncRoomDataCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncRoomDataCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncRoomDataCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.SyncRoomDataCmd;

        /**
         * Decodes a SyncRoomDataCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncRoomDataCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.SyncRoomDataCmd;

        /**
         * Verifies a SyncRoomDataCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncRoomDataCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncRoomDataCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.SyncRoomDataCmd;

        /**
         * Creates a plain object from a SyncRoomDataCmd message. Also converts values to other types if specified.
         * @param message SyncRoomDataCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.SyncRoomDataCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncRoomDataCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SyncRoomDataResult. */
    interface ISyncRoomDataResult {

        /** SyncRoomDataResult roomId */
        roomId?: (number|null);

        /** SyncRoomDataResult gameType0 */
        gameType0?: (number|null);

        /** SyncRoomDataResult gameType1 */
        gameType1?: (number|null);

        /** SyncRoomDataResult roomCreateTime */
        roomCreateTime?: (number|Long|null);

        /** SyncRoomDataResult roomOwnerId */
        roomOwnerId?: (number|null);

        /** SyncRoomDataResult ruleItem */
        ruleItem?: (msg.IKeyAndVal[]|null);

        /** SyncRoomDataResult currRoundIndex */
        currRoundIndex?: (number|null);

        /** SyncRoomDataResult currActUserId */
        currActUserId?: (number|null);

        /** SyncRoomDataResult remainCardNum */
        remainCardNum?: (number|null);

        /** SyncRoomDataResult remainTime */
        remainTime?: (number|null);

        /** SyncRoomDataResult player */
        player?: (msg.IPlayer[]|null);
    }

    /** Represents a SyncRoomDataResult. */
    class SyncRoomDataResult implements ISyncRoomDataResult {

        /**
         * Constructs a new SyncRoomDataResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ISyncRoomDataResult);

        /** SyncRoomDataResult roomId. */
        public roomId: number;

        /** SyncRoomDataResult gameType0. */
        public gameType0: number;

        /** SyncRoomDataResult gameType1. */
        public gameType1: number;

        /** SyncRoomDataResult roomCreateTime. */
        public roomCreateTime: (number|Long);

        /** SyncRoomDataResult roomOwnerId. */
        public roomOwnerId: number;

        /** SyncRoomDataResult ruleItem. */
        public ruleItem: msg.IKeyAndVal[];

        /** SyncRoomDataResult currRoundIndex. */
        public currRoundIndex: number;

        /** SyncRoomDataResult currActUserId. */
        public currActUserId: number;

        /** SyncRoomDataResult remainCardNum. */
        public remainCardNum: number;

        /** SyncRoomDataResult remainTime. */
        public remainTime: number;

        /** SyncRoomDataResult player. */
        public player: msg.IPlayer[];

        /**
         * Creates a new SyncRoomDataResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncRoomDataResult instance
         */
        public static create(properties?: msg.ISyncRoomDataResult): msg.SyncRoomDataResult;

        /**
         * Encodes the specified SyncRoomDataResult message. Does not implicitly {@link msg.SyncRoomDataResult.verify|verify} messages.
         * @param message SyncRoomDataResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ISyncRoomDataResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncRoomDataResult message, length delimited. Does not implicitly {@link msg.SyncRoomDataResult.verify|verify} messages.
         * @param message SyncRoomDataResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ISyncRoomDataResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncRoomDataResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncRoomDataResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.SyncRoomDataResult;

        /**
         * Decodes a SyncRoomDataResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncRoomDataResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.SyncRoomDataResult;

        /**
         * Verifies a SyncRoomDataResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncRoomDataResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncRoomDataResult
         */
        public static fromObject(object: { [k: string]: any }): msg.SyncRoomDataResult;

        /**
         * Creates a plain object from a SyncRoomDataResult message. Also converts values to other types if specified.
         * @param message SyncRoomDataResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.SyncRoomDataResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncRoomDataResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReportGeoLocationCmd. */
    interface IReportGeoLocationCmd {

        /** 纬度 */
        latitude?: (number|null);

        /** 经度 */
        longitude?: (number|null);

        /** 海拔 */
        altitude?: (number|null);

        /** 客户端 IP 地址 */
        clientIpAddr?: (string|null);
    }

    /** Represents a ReportGeoLocationCmd. */
    class ReportGeoLocationCmd implements IReportGeoLocationCmd {

        /**
         * Constructs a new ReportGeoLocationCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IReportGeoLocationCmd);

        /** 纬度 */
        public latitude: number;

        /** 经度 */
        public longitude: number;

        /** 海拔 */
        public altitude: number;

        /** 客户端 IP 地址 */
        public clientIpAddr: string;

        /**
         * Creates a new ReportGeoLocationCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReportGeoLocationCmd instance
         */
        public static create(properties?: msg.IReportGeoLocationCmd): msg.ReportGeoLocationCmd;

        /**
         * Encodes the specified ReportGeoLocationCmd message. Does not implicitly {@link msg.ReportGeoLocationCmd.verify|verify} messages.
         * @param message ReportGeoLocationCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IReportGeoLocationCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReportGeoLocationCmd message, length delimited. Does not implicitly {@link msg.ReportGeoLocationCmd.verify|verify} messages.
         * @param message ReportGeoLocationCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IReportGeoLocationCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReportGeoLocationCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReportGeoLocationCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.ReportGeoLocationCmd;

        /**
         * Decodes a ReportGeoLocationCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReportGeoLocationCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.ReportGeoLocationCmd;

        /**
         * Verifies a ReportGeoLocationCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReportGeoLocationCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReportGeoLocationCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.ReportGeoLocationCmd;

        /**
         * Creates a plain object from a ReportGeoLocationCmd message. Also converts values to other types if specified.
         * @param message ReportGeoLocationCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.ReportGeoLocationCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReportGeoLocationCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReportGeoLocationResult. */
    interface IReportGeoLocationResult {

        /** ReportGeoLocationResult ok */
        ok?: (boolean|null);
    }

    /** Represents a ReportGeoLocationResult. */
    class ReportGeoLocationResult implements IReportGeoLocationResult {

        /**
         * Constructs a new ReportGeoLocationResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IReportGeoLocationResult);

        /** ReportGeoLocationResult ok. */
        public ok: boolean;

        /**
         * Creates a new ReportGeoLocationResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReportGeoLocationResult instance
         */
        public static create(properties?: msg.IReportGeoLocationResult): msg.ReportGeoLocationResult;

        /**
         * Encodes the specified ReportGeoLocationResult message. Does not implicitly {@link msg.ReportGeoLocationResult.verify|verify} messages.
         * @param message ReportGeoLocationResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IReportGeoLocationResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReportGeoLocationResult message, length delimited. Does not implicitly {@link msg.ReportGeoLocationResult.verify|verify} messages.
         * @param message ReportGeoLocationResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IReportGeoLocationResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReportGeoLocationResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReportGeoLocationResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.ReportGeoLocationResult;

        /**
         * Decodes a ReportGeoLocationResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReportGeoLocationResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.ReportGeoLocationResult;

        /**
         * Verifies a ReportGeoLocationResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReportGeoLocationResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReportGeoLocationResult
         */
        public static fromObject(object: { [k: string]: any }): msg.ReportGeoLocationResult;

        /**
         * Creates a plain object from a ReportGeoLocationResult message. Also converts values to other types if specified.
         * @param message ReportGeoLocationResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.ReportGeoLocationResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReportGeoLocationResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MeasureGeoDistanceCmd. */
    interface IMeasureGeoDistanceCmd {
    }

    /** Represents a MeasureGeoDistanceCmd. */
    class MeasureGeoDistanceCmd implements IMeasureGeoDistanceCmd {

        /**
         * Constructs a new MeasureGeoDistanceCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMeasureGeoDistanceCmd);

        /**
         * Creates a new MeasureGeoDistanceCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MeasureGeoDistanceCmd instance
         */
        public static create(properties?: msg.IMeasureGeoDistanceCmd): msg.MeasureGeoDistanceCmd;

        /**
         * Encodes the specified MeasureGeoDistanceCmd message. Does not implicitly {@link msg.MeasureGeoDistanceCmd.verify|verify} messages.
         * @param message MeasureGeoDistanceCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMeasureGeoDistanceCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MeasureGeoDistanceCmd message, length delimited. Does not implicitly {@link msg.MeasureGeoDistanceCmd.verify|verify} messages.
         * @param message MeasureGeoDistanceCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMeasureGeoDistanceCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MeasureGeoDistanceCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MeasureGeoDistanceCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MeasureGeoDistanceCmd;

        /**
         * Decodes a MeasureGeoDistanceCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MeasureGeoDistanceCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MeasureGeoDistanceCmd;

        /**
         * Verifies a MeasureGeoDistanceCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MeasureGeoDistanceCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MeasureGeoDistanceCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.MeasureGeoDistanceCmd;

        /**
         * Creates a plain object from a MeasureGeoDistanceCmd message. Also converts values to other types if specified.
         * @param message MeasureGeoDistanceCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MeasureGeoDistanceCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MeasureGeoDistanceCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MeasureGeoDistanceResult. */
    interface IMeasureGeoDistanceResult {

        /** MeasureGeoDistanceResult geoDistanceItem */
        geoDistanceItem?: (msg.MeasureGeoDistanceResult.IGeoDistanceItem[]|null);
    }

    /** Represents a MeasureGeoDistanceResult. */
    class MeasureGeoDistanceResult implements IMeasureGeoDistanceResult {

        /**
         * Constructs a new MeasureGeoDistanceResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMeasureGeoDistanceResult);

        /** MeasureGeoDistanceResult geoDistanceItem. */
        public geoDistanceItem: msg.MeasureGeoDistanceResult.IGeoDistanceItem[];

        /**
         * Creates a new MeasureGeoDistanceResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MeasureGeoDistanceResult instance
         */
        public static create(properties?: msg.IMeasureGeoDistanceResult): msg.MeasureGeoDistanceResult;

        /**
         * Encodes the specified MeasureGeoDistanceResult message. Does not implicitly {@link msg.MeasureGeoDistanceResult.verify|verify} messages.
         * @param message MeasureGeoDistanceResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMeasureGeoDistanceResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MeasureGeoDistanceResult message, length delimited. Does not implicitly {@link msg.MeasureGeoDistanceResult.verify|verify} messages.
         * @param message MeasureGeoDistanceResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMeasureGeoDistanceResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MeasureGeoDistanceResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MeasureGeoDistanceResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MeasureGeoDistanceResult;

        /**
         * Decodes a MeasureGeoDistanceResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MeasureGeoDistanceResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MeasureGeoDistanceResult;

        /**
         * Verifies a MeasureGeoDistanceResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MeasureGeoDistanceResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MeasureGeoDistanceResult
         */
        public static fromObject(object: { [k: string]: any }): msg.MeasureGeoDistanceResult;

        /**
         * Creates a plain object from a MeasureGeoDistanceResult message. Also converts values to other types if specified.
         * @param message MeasureGeoDistanceResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MeasureGeoDistanceResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MeasureGeoDistanceResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace MeasureGeoDistanceResult {

        /** Properties of a GeoDistanceItem. */
        interface IGeoDistanceItem {

            /** GeoDistanceItem userIdA */
            userIdA?: (number|null);

            /** GeoDistanceItem userIdB */
            userIdB?: (number|null);

            /** GeoDistanceItem distance */
            distance?: (number|null);

            /** GeoDistanceItem sameIpAddr */
            sameIpAddr?: (boolean|null);
        }

        /** Represents a GeoDistanceItem. */
        class GeoDistanceItem implements IGeoDistanceItem {

            /**
             * Constructs a new GeoDistanceItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: msg.MeasureGeoDistanceResult.IGeoDistanceItem);

            /** GeoDistanceItem userIdA. */
            public userIdA: number;

            /** GeoDistanceItem userIdB. */
            public userIdB: number;

            /** GeoDistanceItem distance. */
            public distance: number;

            /** GeoDistanceItem sameIpAddr. */
            public sameIpAddr: boolean;

            /**
             * Creates a new GeoDistanceItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeoDistanceItem instance
             */
            public static create(properties?: msg.MeasureGeoDistanceResult.IGeoDistanceItem): msg.MeasureGeoDistanceResult.GeoDistanceItem;

            /**
             * Encodes the specified GeoDistanceItem message. Does not implicitly {@link msg.MeasureGeoDistanceResult.GeoDistanceItem.verify|verify} messages.
             * @param message GeoDistanceItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: msg.MeasureGeoDistanceResult.IGeoDistanceItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeoDistanceItem message, length delimited. Does not implicitly {@link msg.MeasureGeoDistanceResult.GeoDistanceItem.verify|verify} messages.
             * @param message GeoDistanceItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: msg.MeasureGeoDistanceResult.IGeoDistanceItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeoDistanceItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeoDistanceItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MeasureGeoDistanceResult.GeoDistanceItem;

            /**
             * Decodes a GeoDistanceItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeoDistanceItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MeasureGeoDistanceResult.GeoDistanceItem;

            /**
             * Verifies a GeoDistanceItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeoDistanceItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeoDistanceItem
             */
            public static fromObject(object: { [k: string]: any }): msg.MeasureGeoDistanceResult.GeoDistanceItem;

            /**
             * Creates a plain object from a GeoDistanceItem message. Also converts values to other types if specified.
             * @param message GeoDistanceItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: msg.MeasureGeoDistanceResult.GeoDistanceItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeoDistanceItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a PrepareCmd. */
    interface IPrepareCmd {

        /** PrepareCmd yes */
        yes?: (number|null);
    }

    /** Represents a PrepareCmd. */
    class PrepareCmd implements IPrepareCmd {

        /**
         * Constructs a new PrepareCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPrepareCmd);

        /** PrepareCmd yes. */
        public yes: number;

        /**
         * Creates a new PrepareCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PrepareCmd instance
         */
        public static create(properties?: msg.IPrepareCmd): msg.PrepareCmd;

        /**
         * Encodes the specified PrepareCmd message. Does not implicitly {@link msg.PrepareCmd.verify|verify} messages.
         * @param message PrepareCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPrepareCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PrepareCmd message, length delimited. Does not implicitly {@link msg.PrepareCmd.verify|verify} messages.
         * @param message PrepareCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPrepareCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PrepareCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PrepareCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.PrepareCmd;

        /**
         * Decodes a PrepareCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PrepareCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.PrepareCmd;

        /**
         * Verifies a PrepareCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PrepareCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PrepareCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.PrepareCmd;

        /**
         * Creates a plain object from a PrepareCmd message. Also converts values to other types if specified.
         * @param message PrepareCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PrepareCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PrepareCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PrepareResult. */
    interface IPrepareResult {

        /** PrepareResult yes */
        yes?: (number|null);

        /** PrepareResult ok */
        ok?: (boolean|null);
    }

    /** Represents a PrepareResult. */
    class PrepareResult implements IPrepareResult {

        /**
         * Constructs a new PrepareResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPrepareResult);

        /** PrepareResult yes. */
        public yes: number;

        /** PrepareResult ok. */
        public ok: boolean;

        /**
         * Creates a new PrepareResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PrepareResult instance
         */
        public static create(properties?: msg.IPrepareResult): msg.PrepareResult;

        /**
         * Encodes the specified PrepareResult message. Does not implicitly {@link msg.PrepareResult.verify|verify} messages.
         * @param message PrepareResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPrepareResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PrepareResult message, length delimited. Does not implicitly {@link msg.PrepareResult.verify|verify} messages.
         * @param message PrepareResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPrepareResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PrepareResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PrepareResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.PrepareResult;

        /**
         * Decodes a PrepareResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PrepareResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.PrepareResult;

        /**
         * Verifies a PrepareResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PrepareResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PrepareResult
         */
        public static fromObject(object: { [k: string]: any }): msg.PrepareResult;

        /**
         * Creates a plain object from a PrepareResult message. Also converts values to other types if specified.
         * @param message PrepareResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PrepareResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PrepareResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PrepareBroadcast. */
    interface IPrepareBroadcast {

        /** PrepareBroadcast userId */
        userId?: (number|null);

        /** PrepareBroadcast yes */
        yes?: (number|null);

        /** PrepareBroadcast allReady */
        allReady?: (boolean|null);
    }

    /** Represents a PrepareBroadcast. */
    class PrepareBroadcast implements IPrepareBroadcast {

        /**
         * Constructs a new PrepareBroadcast.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPrepareBroadcast);

        /** PrepareBroadcast userId. */
        public userId: number;

        /** PrepareBroadcast yes. */
        public yes: number;

        /** PrepareBroadcast allReady. */
        public allReady: boolean;

        /**
         * Creates a new PrepareBroadcast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PrepareBroadcast instance
         */
        public static create(properties?: msg.IPrepareBroadcast): msg.PrepareBroadcast;

        /**
         * Encodes the specified PrepareBroadcast message. Does not implicitly {@link msg.PrepareBroadcast.verify|verify} messages.
         * @param message PrepareBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPrepareBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PrepareBroadcast message, length delimited. Does not implicitly {@link msg.PrepareBroadcast.verify|verify} messages.
         * @param message PrepareBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPrepareBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PrepareBroadcast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PrepareBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.PrepareBroadcast;

        /**
         * Decodes a PrepareBroadcast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PrepareBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.PrepareBroadcast;

        /**
         * Verifies a PrepareBroadcast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PrepareBroadcast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PrepareBroadcast
         */
        public static fromObject(object: { [k: string]: any }): msg.PrepareBroadcast;

        /**
         * Creates a plain object from a PrepareBroadcast message. Also converts values to other types if specified.
         * @param message PrepareBroadcast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PrepareBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PrepareBroadcast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OfficialStartCmd. */
    interface IOfficialStartCmd {
    }

    /** Represents an OfficialStartCmd. */
    class OfficialStartCmd implements IOfficialStartCmd {

        /**
         * Constructs a new OfficialStartCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IOfficialStartCmd);

        /**
         * Creates a new OfficialStartCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OfficialStartCmd instance
         */
        public static create(properties?: msg.IOfficialStartCmd): msg.OfficialStartCmd;

        /**
         * Encodes the specified OfficialStartCmd message. Does not implicitly {@link msg.OfficialStartCmd.verify|verify} messages.
         * @param message OfficialStartCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IOfficialStartCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OfficialStartCmd message, length delimited. Does not implicitly {@link msg.OfficialStartCmd.verify|verify} messages.
         * @param message OfficialStartCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IOfficialStartCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OfficialStartCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OfficialStartCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.OfficialStartCmd;

        /**
         * Decodes an OfficialStartCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OfficialStartCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.OfficialStartCmd;

        /**
         * Verifies an OfficialStartCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OfficialStartCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OfficialStartCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.OfficialStartCmd;

        /**
         * Creates a plain object from an OfficialStartCmd message. Also converts values to other types if specified.
         * @param message OfficialStartCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.OfficialStartCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OfficialStartCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OfficialStartResult. */
    interface IOfficialStartResult {

        /** OfficialStartResult ok */
        ok?: (boolean|null);
    }

    /** Represents an OfficialStartResult. */
    class OfficialStartResult implements IOfficialStartResult {

        /**
         * Constructs a new OfficialStartResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IOfficialStartResult);

        /** OfficialStartResult ok. */
        public ok: boolean;

        /**
         * Creates a new OfficialStartResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OfficialStartResult instance
         */
        public static create(properties?: msg.IOfficialStartResult): msg.OfficialStartResult;

        /**
         * Encodes the specified OfficialStartResult message. Does not implicitly {@link msg.OfficialStartResult.verify|verify} messages.
         * @param message OfficialStartResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IOfficialStartResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OfficialStartResult message, length delimited. Does not implicitly {@link msg.OfficialStartResult.verify|verify} messages.
         * @param message OfficialStartResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IOfficialStartResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OfficialStartResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OfficialStartResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.OfficialStartResult;

        /**
         * Decodes an OfficialStartResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OfficialStartResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.OfficialStartResult;

        /**
         * Verifies an OfficialStartResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OfficialStartResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OfficialStartResult
         */
        public static fromObject(object: { [k: string]: any }): msg.OfficialStartResult;

        /**
         * Creates a plain object from an OfficialStartResult message. Also converts values to other types if specified.
         * @param message OfficialStartResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.OfficialStartResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OfficialStartResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OfficialStartBroadcast. */
    interface IOfficialStartBroadcast {
    }

    /** Represents an OfficialStartBroadcast. */
    class OfficialStartBroadcast implements IOfficialStartBroadcast {

        /**
         * Constructs a new OfficialStartBroadcast.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IOfficialStartBroadcast);

        /**
         * Creates a new OfficialStartBroadcast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OfficialStartBroadcast instance
         */
        public static create(properties?: msg.IOfficialStartBroadcast): msg.OfficialStartBroadcast;

        /**
         * Encodes the specified OfficialStartBroadcast message. Does not implicitly {@link msg.OfficialStartBroadcast.verify|verify} messages.
         * @param message OfficialStartBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IOfficialStartBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OfficialStartBroadcast message, length delimited. Does not implicitly {@link msg.OfficialStartBroadcast.verify|verify} messages.
         * @param message OfficialStartBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IOfficialStartBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OfficialStartBroadcast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OfficialStartBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.OfficialStartBroadcast;

        /**
         * Decodes an OfficialStartBroadcast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OfficialStartBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.OfficialStartBroadcast;

        /**
         * Verifies an OfficialStartBroadcast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OfficialStartBroadcast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OfficialStartBroadcast
         */
        public static fromObject(object: { [k: string]: any }): msg.OfficialStartBroadcast;

        /**
         * Creates a plain object from an OfficialStartBroadcast message. Also converts values to other types if specified.
         * @param message OfficialStartBroadcast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.OfficialStartBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OfficialStartBroadcast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SelectPiaoHintBroadcast. */
    interface ISelectPiaoHintBroadcast {

        /** SelectPiaoHintBroadcast buPiao */
        buPiao?: (boolean|null);

        /** SelectPiaoHintBroadcast piao1 */
        piao1?: (boolean|null);

        /** SelectPiaoHintBroadcast piao2 */
        piao2?: (boolean|null);

        /** SelectPiaoHintBroadcast piao3 */
        piao3?: (boolean|null);

        /** SelectPiaoHintBroadcast piao4 */
        piao4?: (boolean|null);
    }

    /** Represents a SelectPiaoHintBroadcast. */
    class SelectPiaoHintBroadcast implements ISelectPiaoHintBroadcast {

        /**
         * Constructs a new SelectPiaoHintBroadcast.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ISelectPiaoHintBroadcast);

        /** SelectPiaoHintBroadcast buPiao. */
        public buPiao: boolean;

        /** SelectPiaoHintBroadcast piao1. */
        public piao1: boolean;

        /** SelectPiaoHintBroadcast piao2. */
        public piao2: boolean;

        /** SelectPiaoHintBroadcast piao3. */
        public piao3: boolean;

        /** SelectPiaoHintBroadcast piao4. */
        public piao4: boolean;

        /**
         * Creates a new SelectPiaoHintBroadcast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SelectPiaoHintBroadcast instance
         */
        public static create(properties?: msg.ISelectPiaoHintBroadcast): msg.SelectPiaoHintBroadcast;

        /**
         * Encodes the specified SelectPiaoHintBroadcast message. Does not implicitly {@link msg.SelectPiaoHintBroadcast.verify|verify} messages.
         * @param message SelectPiaoHintBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ISelectPiaoHintBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SelectPiaoHintBroadcast message, length delimited. Does not implicitly {@link msg.SelectPiaoHintBroadcast.verify|verify} messages.
         * @param message SelectPiaoHintBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ISelectPiaoHintBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SelectPiaoHintBroadcast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SelectPiaoHintBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.SelectPiaoHintBroadcast;

        /**
         * Decodes a SelectPiaoHintBroadcast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SelectPiaoHintBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.SelectPiaoHintBroadcast;

        /**
         * Verifies a SelectPiaoHintBroadcast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SelectPiaoHintBroadcast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SelectPiaoHintBroadcast
         */
        public static fromObject(object: { [k: string]: any }): msg.SelectPiaoHintBroadcast;

        /**
         * Creates a plain object from a SelectPiaoHintBroadcast message. Also converts values to other types if specified.
         * @param message SelectPiaoHintBroadcast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.SelectPiaoHintBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SelectPiaoHintBroadcast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DingPiaoCmd. */
    interface IDingPiaoCmd {

        /** DingPiaoCmd piaoX */
        piaoX?: (number|null);
    }

    /** Represents a DingPiaoCmd. */
    class DingPiaoCmd implements IDingPiaoCmd {

        /**
         * Constructs a new DingPiaoCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IDingPiaoCmd);

        /** DingPiaoCmd piaoX. */
        public piaoX: number;

        /**
         * Creates a new DingPiaoCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DingPiaoCmd instance
         */
        public static create(properties?: msg.IDingPiaoCmd): msg.DingPiaoCmd;

        /**
         * Encodes the specified DingPiaoCmd message. Does not implicitly {@link msg.DingPiaoCmd.verify|verify} messages.
         * @param message DingPiaoCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IDingPiaoCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DingPiaoCmd message, length delimited. Does not implicitly {@link msg.DingPiaoCmd.verify|verify} messages.
         * @param message DingPiaoCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IDingPiaoCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DingPiaoCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DingPiaoCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.DingPiaoCmd;

        /**
         * Decodes a DingPiaoCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DingPiaoCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.DingPiaoCmd;

        /**
         * Verifies a DingPiaoCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DingPiaoCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DingPiaoCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.DingPiaoCmd;

        /**
         * Creates a plain object from a DingPiaoCmd message. Also converts values to other types if specified.
         * @param message DingPiaoCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.DingPiaoCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DingPiaoCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DingPiaoResult. */
    interface IDingPiaoResult {

        /** DingPiaoResult piaoX */
        piaoX?: (number|null);

        /** DingPiaoResult ok */
        ok?: (boolean|null);
    }

    /** Represents a DingPiaoResult. */
    class DingPiaoResult implements IDingPiaoResult {

        /**
         * Constructs a new DingPiaoResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IDingPiaoResult);

        /** DingPiaoResult piaoX. */
        public piaoX: number;

        /** DingPiaoResult ok. */
        public ok: boolean;

        /**
         * Creates a new DingPiaoResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DingPiaoResult instance
         */
        public static create(properties?: msg.IDingPiaoResult): msg.DingPiaoResult;

        /**
         * Encodes the specified DingPiaoResult message. Does not implicitly {@link msg.DingPiaoResult.verify|verify} messages.
         * @param message DingPiaoResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IDingPiaoResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DingPiaoResult message, length delimited. Does not implicitly {@link msg.DingPiaoResult.verify|verify} messages.
         * @param message DingPiaoResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IDingPiaoResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DingPiaoResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DingPiaoResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.DingPiaoResult;

        /**
         * Decodes a DingPiaoResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DingPiaoResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.DingPiaoResult;

        /**
         * Verifies a DingPiaoResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DingPiaoResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DingPiaoResult
         */
        public static fromObject(object: { [k: string]: any }): msg.DingPiaoResult;

        /**
         * Creates a plain object from a DingPiaoResult message. Also converts values to other types if specified.
         * @param message DingPiaoResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.DingPiaoResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DingPiaoResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DingPiaoBroadcast. */
    interface IDingPiaoBroadcast {

        /** DingPiaoBroadcast userId */
        userId?: (number|null);

        /** DingPiaoBroadcast piaoX */
        piaoX?: (number|null);

        /** DingPiaoBroadcast ok */
        ok?: (boolean|null);
    }

    /** Represents a DingPiaoBroadcast. */
    class DingPiaoBroadcast implements IDingPiaoBroadcast {

        /**
         * Constructs a new DingPiaoBroadcast.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IDingPiaoBroadcast);

        /** DingPiaoBroadcast userId. */
        public userId: number;

        /** DingPiaoBroadcast piaoX. */
        public piaoX: number;

        /** DingPiaoBroadcast ok. */
        public ok: boolean;

        /**
         * Creates a new DingPiaoBroadcast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DingPiaoBroadcast instance
         */
        public static create(properties?: msg.IDingPiaoBroadcast): msg.DingPiaoBroadcast;

        /**
         * Encodes the specified DingPiaoBroadcast message. Does not implicitly {@link msg.DingPiaoBroadcast.verify|verify} messages.
         * @param message DingPiaoBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IDingPiaoBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DingPiaoBroadcast message, length delimited. Does not implicitly {@link msg.DingPiaoBroadcast.verify|verify} messages.
         * @param message DingPiaoBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IDingPiaoBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DingPiaoBroadcast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DingPiaoBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.DingPiaoBroadcast;

        /**
         * Decodes a DingPiaoBroadcast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DingPiaoBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.DingPiaoBroadcast;

        /**
         * Verifies a DingPiaoBroadcast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DingPiaoBroadcast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DingPiaoBroadcast
         */
        public static fromObject(object: { [k: string]: any }): msg.DingPiaoBroadcast;

        /**
         * Creates a plain object from a DingPiaoBroadcast message. Also converts values to other types if specified.
         * @param message DingPiaoBroadcast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.DingPiaoBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DingPiaoBroadcast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoundStartedBroadcast. */
    interface IRoundStartedBroadcast {

        /** RoundStartedBroadcast currRoundIndex */
        currRoundIndex?: (number|null);

        /** RoundStartedBroadcast zhuangJiaUserId */
        zhuangJiaUserId?: (number|null);
    }

    /** Represents a RoundStartedBroadcast. */
    class RoundStartedBroadcast implements IRoundStartedBroadcast {

        /**
         * Constructs a new RoundStartedBroadcast.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IRoundStartedBroadcast);

        /** RoundStartedBroadcast currRoundIndex. */
        public currRoundIndex: number;

        /** RoundStartedBroadcast zhuangJiaUserId. */
        public zhuangJiaUserId: number;

        /**
         * Creates a new RoundStartedBroadcast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoundStartedBroadcast instance
         */
        public static create(properties?: msg.IRoundStartedBroadcast): msg.RoundStartedBroadcast;

        /**
         * Encodes the specified RoundStartedBroadcast message. Does not implicitly {@link msg.RoundStartedBroadcast.verify|verify} messages.
         * @param message RoundStartedBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IRoundStartedBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoundStartedBroadcast message, length delimited. Does not implicitly {@link msg.RoundStartedBroadcast.verify|verify} messages.
         * @param message RoundStartedBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IRoundStartedBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoundStartedBroadcast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoundStartedBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.RoundStartedBroadcast;

        /**
         * Decodes a RoundStartedBroadcast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoundStartedBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.RoundStartedBroadcast;

        /**
         * Verifies a RoundStartedBroadcast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoundStartedBroadcast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoundStartedBroadcast
         */
        public static fromObject(object: { [k: string]: any }): msg.RoundStartedBroadcast;

        /**
         * Creates a plain object from a RoundStartedBroadcast message. Also converts values to other types if specified.
         * @param message RoundStartedBroadcast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.RoundStartedBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoundStartedBroadcast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongInHandChangedResult. */
    interface IMahjongInHandChangedResult {

        /** MahjongInHandChangedResult mahjongInHand */
        mahjongInHand?: (number[]|null);

        /** MahjongInHandChangedResult moPai */
        moPai?: (number|null);
    }

    /** Represents a MahjongInHandChangedResult. */
    class MahjongInHandChangedResult implements IMahjongInHandChangedResult {

        /**
         * Constructs a new MahjongInHandChangedResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongInHandChangedResult);

        /** MahjongInHandChangedResult mahjongInHand. */
        public mahjongInHand: number[];

        /** MahjongInHandChangedResult moPai. */
        public moPai: number;

        /**
         * Creates a new MahjongInHandChangedResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongInHandChangedResult instance
         */
        public static create(properties?: msg.IMahjongInHandChangedResult): msg.MahjongInHandChangedResult;

        /**
         * Encodes the specified MahjongInHandChangedResult message. Does not implicitly {@link msg.MahjongInHandChangedResult.verify|verify} messages.
         * @param message MahjongInHandChangedResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongInHandChangedResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongInHandChangedResult message, length delimited. Does not implicitly {@link msg.MahjongInHandChangedResult.verify|verify} messages.
         * @param message MahjongInHandChangedResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongInHandChangedResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongInHandChangedResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongInHandChangedResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongInHandChangedResult;

        /**
         * Decodes a MahjongInHandChangedResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongInHandChangedResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongInHandChangedResult;

        /**
         * Verifies a MahjongInHandChangedResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongInHandChangedResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongInHandChangedResult
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongInHandChangedResult;

        /**
         * Creates a plain object from a MahjongInHandChangedResult message. Also converts values to other types if specified.
         * @param message MahjongInHandChangedResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongInHandChangedResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongInHandChangedResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongInHandChangedBroadcast. */
    interface IMahjongInHandChangedBroadcast {

        /** MahjongInHandChangedBroadcast userId */
        userId?: (number|null);

        /** MahjongInHandChangedBroadcast mahjongInHand */
        mahjongInHand?: (number[]|null);

        /** MahjongInHandChangedBroadcast moPai */
        moPai?: (number|null);
    }

    /** Represents a MahjongInHandChangedBroadcast. */
    class MahjongInHandChangedBroadcast implements IMahjongInHandChangedBroadcast {

        /**
         * Constructs a new MahjongInHandChangedBroadcast.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongInHandChangedBroadcast);

        /** MahjongInHandChangedBroadcast userId. */
        public userId: number;

        /** MahjongInHandChangedBroadcast mahjongInHand. */
        public mahjongInHand: number[];

        /** MahjongInHandChangedBroadcast moPai. */
        public moPai: number;

        /**
         * Creates a new MahjongInHandChangedBroadcast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongInHandChangedBroadcast instance
         */
        public static create(properties?: msg.IMahjongInHandChangedBroadcast): msg.MahjongInHandChangedBroadcast;

        /**
         * Encodes the specified MahjongInHandChangedBroadcast message. Does not implicitly {@link msg.MahjongInHandChangedBroadcast.verify|verify} messages.
         * @param message MahjongInHandChangedBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongInHandChangedBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongInHandChangedBroadcast message, length delimited. Does not implicitly {@link msg.MahjongInHandChangedBroadcast.verify|verify} messages.
         * @param message MahjongInHandChangedBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongInHandChangedBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongInHandChangedBroadcast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongInHandChangedBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongInHandChangedBroadcast;

        /**
         * Decodes a MahjongInHandChangedBroadcast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongInHandChangedBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongInHandChangedBroadcast;

        /**
         * Verifies a MahjongInHandChangedBroadcast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongInHandChangedBroadcast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongInHandChangedBroadcast
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongInHandChangedBroadcast;

        /**
         * Creates a plain object from a MahjongInHandChangedBroadcast message. Also converts values to other types if specified.
         * @param message MahjongInHandChangedBroadcast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongInHandChangedBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongInHandChangedBroadcast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongMoPaiResult. */
    interface IMahjongMoPaiResult {

        /** MahjongMoPaiResult t */
        t?: (number|null);
    }

    /** Represents a MahjongMoPaiResult. */
    class MahjongMoPaiResult implements IMahjongMoPaiResult {

        /**
         * Constructs a new MahjongMoPaiResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongMoPaiResult);

        /** MahjongMoPaiResult t. */
        public t: number;

        /**
         * Creates a new MahjongMoPaiResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongMoPaiResult instance
         */
        public static create(properties?: msg.IMahjongMoPaiResult): msg.MahjongMoPaiResult;

        /**
         * Encodes the specified MahjongMoPaiResult message. Does not implicitly {@link msg.MahjongMoPaiResult.verify|verify} messages.
         * @param message MahjongMoPaiResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongMoPaiResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongMoPaiResult message, length delimited. Does not implicitly {@link msg.MahjongMoPaiResult.verify|verify} messages.
         * @param message MahjongMoPaiResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongMoPaiResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongMoPaiResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongMoPaiResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongMoPaiResult;

        /**
         * Decodes a MahjongMoPaiResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongMoPaiResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongMoPaiResult;

        /**
         * Verifies a MahjongMoPaiResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongMoPaiResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongMoPaiResult
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongMoPaiResult;

        /**
         * Creates a plain object from a MahjongMoPaiResult message. Also converts values to other types if specified.
         * @param message MahjongMoPaiResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongMoPaiResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongMoPaiResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongMoPaiBroadcast. */
    interface IMahjongMoPaiBroadcast {

        /** MahjongMoPaiBroadcast userId */
        userId?: (number|null);

        /** MahjongMoPaiBroadcast t */
        t?: (number|null);
    }

    /** Represents a MahjongMoPaiBroadcast. */
    class MahjongMoPaiBroadcast implements IMahjongMoPaiBroadcast {

        /**
         * Constructs a new MahjongMoPaiBroadcast.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongMoPaiBroadcast);

        /** MahjongMoPaiBroadcast userId. */
        public userId: number;

        /** MahjongMoPaiBroadcast t. */
        public t: number;

        /**
         * Creates a new MahjongMoPaiBroadcast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongMoPaiBroadcast instance
         */
        public static create(properties?: msg.IMahjongMoPaiBroadcast): msg.MahjongMoPaiBroadcast;

        /**
         * Encodes the specified MahjongMoPaiBroadcast message. Does not implicitly {@link msg.MahjongMoPaiBroadcast.verify|verify} messages.
         * @param message MahjongMoPaiBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongMoPaiBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongMoPaiBroadcast message, length delimited. Does not implicitly {@link msg.MahjongMoPaiBroadcast.verify|verify} messages.
         * @param message MahjongMoPaiBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongMoPaiBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongMoPaiBroadcast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongMoPaiBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongMoPaiBroadcast;

        /**
         * Decodes a MahjongMoPaiBroadcast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongMoPaiBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongMoPaiBroadcast;

        /**
         * Verifies a MahjongMoPaiBroadcast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongMoPaiBroadcast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongMoPaiBroadcast
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongMoPaiBroadcast;

        /**
         * Creates a plain object from a MahjongMoPaiBroadcast message. Also converts values to other types if specified.
         * @param message MahjongMoPaiBroadcast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongMoPaiBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongMoPaiBroadcast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RedirectActUserIdBroadcast. */
    interface IRedirectActUserIdBroadcast {

        /** RedirectActUserIdBroadcast userId */
        userId?: (number|null);

        /** RedirectActUserIdBroadcast seatIndex */
        seatIndex?: (number|null);

        /** RedirectActUserIdBroadcast currRoundIndex */
        currRoundIndex?: (number|null);

        /** RedirectActUserIdBroadcast remainCardNum */
        remainCardNum?: (number|null);

        /** RedirectActUserIdBroadcast remainTime */
        remainTime?: (number|null);
    }

    /** Represents a RedirectActUserIdBroadcast. */
    class RedirectActUserIdBroadcast implements IRedirectActUserIdBroadcast {

        /**
         * Constructs a new RedirectActUserIdBroadcast.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IRedirectActUserIdBroadcast);

        /** RedirectActUserIdBroadcast userId. */
        public userId: number;

        /** RedirectActUserIdBroadcast seatIndex. */
        public seatIndex: number;

        /** RedirectActUserIdBroadcast currRoundIndex. */
        public currRoundIndex: number;

        /** RedirectActUserIdBroadcast remainCardNum. */
        public remainCardNum: number;

        /** RedirectActUserIdBroadcast remainTime. */
        public remainTime: number;

        /**
         * Creates a new RedirectActUserIdBroadcast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RedirectActUserIdBroadcast instance
         */
        public static create(properties?: msg.IRedirectActUserIdBroadcast): msg.RedirectActUserIdBroadcast;

        /**
         * Encodes the specified RedirectActUserIdBroadcast message. Does not implicitly {@link msg.RedirectActUserIdBroadcast.verify|verify} messages.
         * @param message RedirectActUserIdBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IRedirectActUserIdBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RedirectActUserIdBroadcast message, length delimited. Does not implicitly {@link msg.RedirectActUserIdBroadcast.verify|verify} messages.
         * @param message RedirectActUserIdBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IRedirectActUserIdBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RedirectActUserIdBroadcast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RedirectActUserIdBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.RedirectActUserIdBroadcast;

        /**
         * Decodes a RedirectActUserIdBroadcast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RedirectActUserIdBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.RedirectActUserIdBroadcast;

        /**
         * Verifies a RedirectActUserIdBroadcast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RedirectActUserIdBroadcast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RedirectActUserIdBroadcast
         */
        public static fromObject(object: { [k: string]: any }): msg.RedirectActUserIdBroadcast;

        /**
         * Creates a plain object from a RedirectActUserIdBroadcast message. Also converts values to other types if specified.
         * @param message RedirectActUserIdBroadcast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.RedirectActUserIdBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RedirectActUserIdBroadcast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OpRemainTimeBroadcast. */
    interface IOpRemainTimeBroadcast {

        /** OpRemainTimeBroadcast ms */
        ms?: (number|null);
    }

    /** Represents an OpRemainTimeBroadcast. */
    class OpRemainTimeBroadcast implements IOpRemainTimeBroadcast {

        /**
         * Constructs a new OpRemainTimeBroadcast.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IOpRemainTimeBroadcast);

        /** OpRemainTimeBroadcast ms. */
        public ms: number;

        /**
         * Creates a new OpRemainTimeBroadcast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OpRemainTimeBroadcast instance
         */
        public static create(properties?: msg.IOpRemainTimeBroadcast): msg.OpRemainTimeBroadcast;

        /**
         * Encodes the specified OpRemainTimeBroadcast message. Does not implicitly {@link msg.OpRemainTimeBroadcast.verify|verify} messages.
         * @param message OpRemainTimeBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IOpRemainTimeBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OpRemainTimeBroadcast message, length delimited. Does not implicitly {@link msg.OpRemainTimeBroadcast.verify|verify} messages.
         * @param message OpRemainTimeBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IOpRemainTimeBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OpRemainTimeBroadcast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OpRemainTimeBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.OpRemainTimeBroadcast;

        /**
         * Decodes an OpRemainTimeBroadcast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OpRemainTimeBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.OpRemainTimeBroadcast;

        /**
         * Verifies an OpRemainTimeBroadcast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OpRemainTimeBroadcast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OpRemainTimeBroadcast
         */
        public static fromObject(object: { [k: string]: any }): msg.OpRemainTimeBroadcast;

        /**
         * Creates a plain object from an OpRemainTimeBroadcast message. Also converts values to other types if specified.
         * @param message OpRemainTimeBroadcast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.OpRemainTimeBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OpRemainTimeBroadcast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongChuPaiCmd. */
    interface IMahjongChuPaiCmd {

        /** MahjongChuPaiCmd t */
        t?: (number|null);
    }

    /** Represents a MahjongChuPaiCmd. */
    class MahjongChuPaiCmd implements IMahjongChuPaiCmd {

        /**
         * Constructs a new MahjongChuPaiCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongChuPaiCmd);

        /** MahjongChuPaiCmd t. */
        public t: number;

        /**
         * Creates a new MahjongChuPaiCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongChuPaiCmd instance
         */
        public static create(properties?: msg.IMahjongChuPaiCmd): msg.MahjongChuPaiCmd;

        /**
         * Encodes the specified MahjongChuPaiCmd message. Does not implicitly {@link msg.MahjongChuPaiCmd.verify|verify} messages.
         * @param message MahjongChuPaiCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongChuPaiCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongChuPaiCmd message, length delimited. Does not implicitly {@link msg.MahjongChuPaiCmd.verify|verify} messages.
         * @param message MahjongChuPaiCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongChuPaiCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongChuPaiCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongChuPaiCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongChuPaiCmd;

        /**
         * Decodes a MahjongChuPaiCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongChuPaiCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongChuPaiCmd;

        /**
         * Verifies a MahjongChuPaiCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongChuPaiCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongChuPaiCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongChuPaiCmd;

        /**
         * Creates a plain object from a MahjongChuPaiCmd message. Also converts values to other types if specified.
         * @param message MahjongChuPaiCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongChuPaiCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongChuPaiCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongChuPaiResult. */
    interface IMahjongChuPaiResult {

        /** MahjongChuPaiResult t */
        t?: (number|null);
    }

    /** Represents a MahjongChuPaiResult. */
    class MahjongChuPaiResult implements IMahjongChuPaiResult {

        /**
         * Constructs a new MahjongChuPaiResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongChuPaiResult);

        /** MahjongChuPaiResult t. */
        public t: number;

        /**
         * Creates a new MahjongChuPaiResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongChuPaiResult instance
         */
        public static create(properties?: msg.IMahjongChuPaiResult): msg.MahjongChuPaiResult;

        /**
         * Encodes the specified MahjongChuPaiResult message. Does not implicitly {@link msg.MahjongChuPaiResult.verify|verify} messages.
         * @param message MahjongChuPaiResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongChuPaiResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongChuPaiResult message, length delimited. Does not implicitly {@link msg.MahjongChuPaiResult.verify|verify} messages.
         * @param message MahjongChuPaiResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongChuPaiResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongChuPaiResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongChuPaiResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongChuPaiResult;

        /**
         * Decodes a MahjongChuPaiResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongChuPaiResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongChuPaiResult;

        /**
         * Verifies a MahjongChuPaiResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongChuPaiResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongChuPaiResult
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongChuPaiResult;

        /**
         * Creates a plain object from a MahjongChuPaiResult message. Also converts values to other types if specified.
         * @param message MahjongChuPaiResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongChuPaiResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongChuPaiResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongChuPaiBroadcast. */
    interface IMahjongChuPaiBroadcast {

        /** MahjongChuPaiBroadcast userId */
        userId?: (number|null);

        /** MahjongChuPaiBroadcast t */
        t?: (number|null);
    }

    /** Represents a MahjongChuPaiBroadcast. */
    class MahjongChuPaiBroadcast implements IMahjongChuPaiBroadcast {

        /**
         * Constructs a new MahjongChuPaiBroadcast.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongChuPaiBroadcast);

        /** MahjongChuPaiBroadcast userId. */
        public userId: number;

        /** MahjongChuPaiBroadcast t. */
        public t: number;

        /**
         * Creates a new MahjongChuPaiBroadcast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongChuPaiBroadcast instance
         */
        public static create(properties?: msg.IMahjongChuPaiBroadcast): msg.MahjongChuPaiBroadcast;

        /**
         * Encodes the specified MahjongChuPaiBroadcast message. Does not implicitly {@link msg.MahjongChuPaiBroadcast.verify|verify} messages.
         * @param message MahjongChuPaiBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongChuPaiBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongChuPaiBroadcast message, length delimited. Does not implicitly {@link msg.MahjongChuPaiBroadcast.verify|verify} messages.
         * @param message MahjongChuPaiBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongChuPaiBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongChuPaiBroadcast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongChuPaiBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongChuPaiBroadcast;

        /**
         * Decodes a MahjongChuPaiBroadcast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongChuPaiBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongChuPaiBroadcast;

        /**
         * Verifies a MahjongChuPaiBroadcast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongChuPaiBroadcast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongChuPaiBroadcast
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongChuPaiBroadcast;

        /**
         * Creates a plain object from a MahjongChuPaiBroadcast message. Also converts values to other types if specified.
         * @param message MahjongChuPaiBroadcast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongChuPaiBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongChuPaiBroadcast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChiChoiceQuestion. */
    interface IChiChoiceQuestion {

        /** ChiChoiceQuestion chiT */
        chiT?: (number|null);

        /** ChiChoiceQuestion displayOptionA */
        displayOptionA?: (boolean|null);

        /** ChiChoiceQuestion displayOptionB */
        displayOptionB?: (boolean|null);

        /** ChiChoiceQuestion displayOptionC */
        displayOptionC?: (boolean|null);
    }

    /** Represents a ChiChoiceQuestion. */
    class ChiChoiceQuestion implements IChiChoiceQuestion {

        /**
         * Constructs a new ChiChoiceQuestion.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IChiChoiceQuestion);

        /** ChiChoiceQuestion chiT. */
        public chiT: number;

        /** ChiChoiceQuestion displayOptionA. */
        public displayOptionA: boolean;

        /** ChiChoiceQuestion displayOptionB. */
        public displayOptionB: boolean;

        /** ChiChoiceQuestion displayOptionC. */
        public displayOptionC: boolean;

        /**
         * Creates a new ChiChoiceQuestion instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChiChoiceQuestion instance
         */
        public static create(properties?: msg.IChiChoiceQuestion): msg.ChiChoiceQuestion;

        /**
         * Encodes the specified ChiChoiceQuestion message. Does not implicitly {@link msg.ChiChoiceQuestion.verify|verify} messages.
         * @param message ChiChoiceQuestion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IChiChoiceQuestion, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChiChoiceQuestion message, length delimited. Does not implicitly {@link msg.ChiChoiceQuestion.verify|verify} messages.
         * @param message ChiChoiceQuestion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IChiChoiceQuestion, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChiChoiceQuestion message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChiChoiceQuestion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.ChiChoiceQuestion;

        /**
         * Decodes a ChiChoiceQuestion message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChiChoiceQuestion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.ChiChoiceQuestion;

        /**
         * Verifies a ChiChoiceQuestion message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChiChoiceQuestion message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChiChoiceQuestion
         */
        public static fromObject(object: { [k: string]: any }): msg.ChiChoiceQuestion;

        /**
         * Creates a plain object from a ChiChoiceQuestion message. Also converts values to other types if specified.
         * @param message ChiChoiceQuestion
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.ChiChoiceQuestion, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChiChoiceQuestion to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LiangFengChoiceQuestion. */
    interface ILiangFengChoiceQuestion {

        /** LiangFengChoiceQuestion luanMao */
        luanMao?: (boolean|null);

        /** LiangFengChoiceQuestion displayOptionDongFeng */
        displayOptionDongFeng?: (boolean|null);

        /** LiangFengChoiceQuestion displayOptionNanFeng */
        displayOptionNanFeng?: (boolean|null);

        /** LiangFengChoiceQuestion displayOptionXiFeng */
        displayOptionXiFeng?: (boolean|null);

        /** LiangFengChoiceQuestion displayOptionBeiFeng */
        displayOptionBeiFeng?: (boolean|null);

        /** LiangFengChoiceQuestion displayOptionHongZhong */
        displayOptionHongZhong?: (boolean|null);

        /** LiangFengChoiceQuestion displayOptionFaCai */
        displayOptionFaCai?: (boolean|null);

        /** LiangFengChoiceQuestion displayOptionBaiBan */
        displayOptionBaiBan?: (boolean|null);
    }

    /** Represents a LiangFengChoiceQuestion. */
    class LiangFengChoiceQuestion implements ILiangFengChoiceQuestion {

        /**
         * Constructs a new LiangFengChoiceQuestion.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ILiangFengChoiceQuestion);

        /** LiangFengChoiceQuestion luanMao. */
        public luanMao: boolean;

        /** LiangFengChoiceQuestion displayOptionDongFeng. */
        public displayOptionDongFeng: boolean;

        /** LiangFengChoiceQuestion displayOptionNanFeng. */
        public displayOptionNanFeng: boolean;

        /** LiangFengChoiceQuestion displayOptionXiFeng. */
        public displayOptionXiFeng: boolean;

        /** LiangFengChoiceQuestion displayOptionBeiFeng. */
        public displayOptionBeiFeng: boolean;

        /** LiangFengChoiceQuestion displayOptionHongZhong. */
        public displayOptionHongZhong: boolean;

        /** LiangFengChoiceQuestion displayOptionFaCai. */
        public displayOptionFaCai: boolean;

        /** LiangFengChoiceQuestion displayOptionBaiBan. */
        public displayOptionBaiBan: boolean;

        /**
         * Creates a new LiangFengChoiceQuestion instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LiangFengChoiceQuestion instance
         */
        public static create(properties?: msg.ILiangFengChoiceQuestion): msg.LiangFengChoiceQuestion;

        /**
         * Encodes the specified LiangFengChoiceQuestion message. Does not implicitly {@link msg.LiangFengChoiceQuestion.verify|verify} messages.
         * @param message LiangFengChoiceQuestion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ILiangFengChoiceQuestion, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LiangFengChoiceQuestion message, length delimited. Does not implicitly {@link msg.LiangFengChoiceQuestion.verify|verify} messages.
         * @param message LiangFengChoiceQuestion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ILiangFengChoiceQuestion, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LiangFengChoiceQuestion message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LiangFengChoiceQuestion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.LiangFengChoiceQuestion;

        /**
         * Decodes a LiangFengChoiceQuestion message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LiangFengChoiceQuestion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.LiangFengChoiceQuestion;

        /**
         * Verifies a LiangFengChoiceQuestion message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LiangFengChoiceQuestion message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LiangFengChoiceQuestion
         */
        public static fromObject(object: { [k: string]: any }): msg.LiangFengChoiceQuestion;

        /**
         * Creates a plain object from a LiangFengChoiceQuestion message. Also converts values to other types if specified.
         * @param message LiangFengChoiceQuestion
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.LiangFengChoiceQuestion, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LiangFengChoiceQuestion to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongChiPengGangHuOpHintResult. */
    interface IMahjongChiPengGangHuOpHintResult {

        /** MahjongChiPengGangHuOpHintResult opHintChi */
        opHintChi?: (boolean|null);

        /** MahjongChiPengGangHuOpHintResult chiChoiceQuestion */
        chiChoiceQuestion?: (msg.IChiChoiceQuestion|null);

        /** MahjongChiPengGangHuOpHintResult opHintPeng */
        opHintPeng?: (boolean|null);

        /** MahjongChiPengGangHuOpHintResult opHintGang */
        opHintGang?: (boolean|null);

        /** MahjongChiPengGangHuOpHintResult opHintHu */
        opHintHu?: (boolean|null);

        /** MahjongChiPengGangHuOpHintResult opHintLiangFeng */
        opHintLiangFeng?: (boolean|null);

        /** MahjongChiPengGangHuOpHintResult liangFengChoiceQuestion */
        liangFengChoiceQuestion?: (msg.ILiangFengChoiceQuestion|null);

        /** MahjongChiPengGangHuOpHintResult opHintBuFeng */
        opHintBuFeng?: (boolean|null);
    }

    /** Represents a MahjongChiPengGangHuOpHintResult. */
    class MahjongChiPengGangHuOpHintResult implements IMahjongChiPengGangHuOpHintResult {

        /**
         * Constructs a new MahjongChiPengGangHuOpHintResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongChiPengGangHuOpHintResult);

        /** MahjongChiPengGangHuOpHintResult opHintChi. */
        public opHintChi: boolean;

        /** MahjongChiPengGangHuOpHintResult chiChoiceQuestion. */
        public chiChoiceQuestion?: (msg.IChiChoiceQuestion|null);

        /** MahjongChiPengGangHuOpHintResult opHintPeng. */
        public opHintPeng: boolean;

        /** MahjongChiPengGangHuOpHintResult opHintGang. */
        public opHintGang: boolean;

        /** MahjongChiPengGangHuOpHintResult opHintHu. */
        public opHintHu: boolean;

        /** MahjongChiPengGangHuOpHintResult opHintLiangFeng. */
        public opHintLiangFeng: boolean;

        /** MahjongChiPengGangHuOpHintResult liangFengChoiceQuestion. */
        public liangFengChoiceQuestion?: (msg.ILiangFengChoiceQuestion|null);

        /** MahjongChiPengGangHuOpHintResult opHintBuFeng. */
        public opHintBuFeng: boolean;

        /**
         * Creates a new MahjongChiPengGangHuOpHintResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongChiPengGangHuOpHintResult instance
         */
        public static create(properties?: msg.IMahjongChiPengGangHuOpHintResult): msg.MahjongChiPengGangHuOpHintResult;

        /**
         * Encodes the specified MahjongChiPengGangHuOpHintResult message. Does not implicitly {@link msg.MahjongChiPengGangHuOpHintResult.verify|verify} messages.
         * @param message MahjongChiPengGangHuOpHintResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongChiPengGangHuOpHintResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongChiPengGangHuOpHintResult message, length delimited. Does not implicitly {@link msg.MahjongChiPengGangHuOpHintResult.verify|verify} messages.
         * @param message MahjongChiPengGangHuOpHintResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongChiPengGangHuOpHintResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongChiPengGangHuOpHintResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongChiPengGangHuOpHintResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongChiPengGangHuOpHintResult;

        /**
         * Decodes a MahjongChiPengGangHuOpHintResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongChiPengGangHuOpHintResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongChiPengGangHuOpHintResult;

        /**
         * Verifies a MahjongChiPengGangHuOpHintResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongChiPengGangHuOpHintResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongChiPengGangHuOpHintResult
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongChiPengGangHuOpHintResult;

        /**
         * Creates a plain object from a MahjongChiPengGangHuOpHintResult message. Also converts values to other types if specified.
         * @param message MahjongChiPengGangHuOpHintResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongChiPengGangHuOpHintResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongChiPengGangHuOpHintResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongChiCmd. */
    interface IMahjongChiCmd {

        /** MahjongChiCmd selectedOption */
        selectedOption?: (number|null);
    }

    /** Represents a MahjongChiCmd. */
    class MahjongChiCmd implements IMahjongChiCmd {

        /**
         * Constructs a new MahjongChiCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongChiCmd);

        /** MahjongChiCmd selectedOption. */
        public selectedOption: number;

        /**
         * Creates a new MahjongChiCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongChiCmd instance
         */
        public static create(properties?: msg.IMahjongChiCmd): msg.MahjongChiCmd;

        /**
         * Encodes the specified MahjongChiCmd message. Does not implicitly {@link msg.MahjongChiCmd.verify|verify} messages.
         * @param message MahjongChiCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongChiCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongChiCmd message, length delimited. Does not implicitly {@link msg.MahjongChiCmd.verify|verify} messages.
         * @param message MahjongChiCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongChiCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongChiCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongChiCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongChiCmd;

        /**
         * Decodes a MahjongChiCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongChiCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongChiCmd;

        /**
         * Verifies a MahjongChiCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongChiCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongChiCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongChiCmd;

        /**
         * Creates a plain object from a MahjongChiCmd message. Also converts values to other types if specified.
         * @param message MahjongChiCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongChiCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongChiCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongChiResult. */
    interface IMahjongChiResult {

        /** MahjongChiResult mahjongChi */
        mahjongChi?: (msg.IMahjongChiPengGang|null);
    }

    /** Represents a MahjongChiResult. */
    class MahjongChiResult implements IMahjongChiResult {

        /**
         * Constructs a new MahjongChiResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongChiResult);

        /** MahjongChiResult mahjongChi. */
        public mahjongChi?: (msg.IMahjongChiPengGang|null);

        /**
         * Creates a new MahjongChiResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongChiResult instance
         */
        public static create(properties?: msg.IMahjongChiResult): msg.MahjongChiResult;

        /**
         * Encodes the specified MahjongChiResult message. Does not implicitly {@link msg.MahjongChiResult.verify|verify} messages.
         * @param message MahjongChiResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongChiResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongChiResult message, length delimited. Does not implicitly {@link msg.MahjongChiResult.verify|verify} messages.
         * @param message MahjongChiResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongChiResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongChiResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongChiResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongChiResult;

        /**
         * Decodes a MahjongChiResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongChiResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongChiResult;

        /**
         * Verifies a MahjongChiResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongChiResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongChiResult
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongChiResult;

        /**
         * Creates a plain object from a MahjongChiResult message. Also converts values to other types if specified.
         * @param message MahjongChiResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongChiResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongChiResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongChiBroadcast. */
    interface IMahjongChiBroadcast {

        /** MahjongChiBroadcast userId */
        userId?: (number|null);

        /** MahjongChiBroadcast mahjongChi */
        mahjongChi?: (msg.IMahjongChiPengGang|null);
    }

    /** Represents a MahjongChiBroadcast. */
    class MahjongChiBroadcast implements IMahjongChiBroadcast {

        /**
         * Constructs a new MahjongChiBroadcast.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongChiBroadcast);

        /** MahjongChiBroadcast userId. */
        public userId: number;

        /** MahjongChiBroadcast mahjongChi. */
        public mahjongChi?: (msg.IMahjongChiPengGang|null);

        /**
         * Creates a new MahjongChiBroadcast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongChiBroadcast instance
         */
        public static create(properties?: msg.IMahjongChiBroadcast): msg.MahjongChiBroadcast;

        /**
         * Encodes the specified MahjongChiBroadcast message. Does not implicitly {@link msg.MahjongChiBroadcast.verify|verify} messages.
         * @param message MahjongChiBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongChiBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongChiBroadcast message, length delimited. Does not implicitly {@link msg.MahjongChiBroadcast.verify|verify} messages.
         * @param message MahjongChiBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongChiBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongChiBroadcast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongChiBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongChiBroadcast;

        /**
         * Decodes a MahjongChiBroadcast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongChiBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongChiBroadcast;

        /**
         * Verifies a MahjongChiBroadcast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongChiBroadcast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongChiBroadcast
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongChiBroadcast;

        /**
         * Creates a plain object from a MahjongChiBroadcast message. Also converts values to other types if specified.
         * @param message MahjongChiBroadcast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongChiBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongChiBroadcast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongPengCmd. */
    interface IMahjongPengCmd {
    }

    /** Represents a MahjongPengCmd. */
    class MahjongPengCmd implements IMahjongPengCmd {

        /**
         * Constructs a new MahjongPengCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongPengCmd);

        /**
         * Creates a new MahjongPengCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongPengCmd instance
         */
        public static create(properties?: msg.IMahjongPengCmd): msg.MahjongPengCmd;

        /**
         * Encodes the specified MahjongPengCmd message. Does not implicitly {@link msg.MahjongPengCmd.verify|verify} messages.
         * @param message MahjongPengCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongPengCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongPengCmd message, length delimited. Does not implicitly {@link msg.MahjongPengCmd.verify|verify} messages.
         * @param message MahjongPengCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongPengCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongPengCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongPengCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongPengCmd;

        /**
         * Decodes a MahjongPengCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongPengCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongPengCmd;

        /**
         * Verifies a MahjongPengCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongPengCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongPengCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongPengCmd;

        /**
         * Creates a plain object from a MahjongPengCmd message. Also converts values to other types if specified.
         * @param message MahjongPengCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongPengCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongPengCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongPengResult. */
    interface IMahjongPengResult {

        /** MahjongPengResult mahjongPeng */
        mahjongPeng?: (msg.IMahjongChiPengGang|null);
    }

    /** Represents a MahjongPengResult. */
    class MahjongPengResult implements IMahjongPengResult {

        /**
         * Constructs a new MahjongPengResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongPengResult);

        /** MahjongPengResult mahjongPeng. */
        public mahjongPeng?: (msg.IMahjongChiPengGang|null);

        /**
         * Creates a new MahjongPengResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongPengResult instance
         */
        public static create(properties?: msg.IMahjongPengResult): msg.MahjongPengResult;

        /**
         * Encodes the specified MahjongPengResult message. Does not implicitly {@link msg.MahjongPengResult.verify|verify} messages.
         * @param message MahjongPengResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongPengResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongPengResult message, length delimited. Does not implicitly {@link msg.MahjongPengResult.verify|verify} messages.
         * @param message MahjongPengResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongPengResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongPengResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongPengResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongPengResult;

        /**
         * Decodes a MahjongPengResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongPengResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongPengResult;

        /**
         * Verifies a MahjongPengResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongPengResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongPengResult
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongPengResult;

        /**
         * Creates a plain object from a MahjongPengResult message. Also converts values to other types if specified.
         * @param message MahjongPengResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongPengResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongPengResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongPengBroadcast. */
    interface IMahjongPengBroadcast {

        /** MahjongPengBroadcast userId */
        userId?: (number|null);

        /** MahjongPengBroadcast mahjongPeng */
        mahjongPeng?: (msg.IMahjongChiPengGang|null);
    }

    /** Represents a MahjongPengBroadcast. */
    class MahjongPengBroadcast implements IMahjongPengBroadcast {

        /**
         * Constructs a new MahjongPengBroadcast.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongPengBroadcast);

        /** MahjongPengBroadcast userId. */
        public userId: number;

        /** MahjongPengBroadcast mahjongPeng. */
        public mahjongPeng?: (msg.IMahjongChiPengGang|null);

        /**
         * Creates a new MahjongPengBroadcast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongPengBroadcast instance
         */
        public static create(properties?: msg.IMahjongPengBroadcast): msg.MahjongPengBroadcast;

        /**
         * Encodes the specified MahjongPengBroadcast message. Does not implicitly {@link msg.MahjongPengBroadcast.verify|verify} messages.
         * @param message MahjongPengBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongPengBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongPengBroadcast message, length delimited. Does not implicitly {@link msg.MahjongPengBroadcast.verify|verify} messages.
         * @param message MahjongPengBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongPengBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongPengBroadcast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongPengBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongPengBroadcast;

        /**
         * Decodes a MahjongPengBroadcast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongPengBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongPengBroadcast;

        /**
         * Verifies a MahjongPengBroadcast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongPengBroadcast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongPengBroadcast
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongPengBroadcast;

        /**
         * Creates a plain object from a MahjongPengBroadcast message. Also converts values to other types if specified.
         * @param message MahjongPengBroadcast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongPengBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongPengBroadcast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongGangCmd. */
    interface IMahjongGangCmd {
    }

    /** Represents a MahjongGangCmd. */
    class MahjongGangCmd implements IMahjongGangCmd {

        /**
         * Constructs a new MahjongGangCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongGangCmd);

        /**
         * Creates a new MahjongGangCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongGangCmd instance
         */
        public static create(properties?: msg.IMahjongGangCmd): msg.MahjongGangCmd;

        /**
         * Encodes the specified MahjongGangCmd message. Does not implicitly {@link msg.MahjongGangCmd.verify|verify} messages.
         * @param message MahjongGangCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongGangCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongGangCmd message, length delimited. Does not implicitly {@link msg.MahjongGangCmd.verify|verify} messages.
         * @param message MahjongGangCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongGangCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongGangCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongGangCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongGangCmd;

        /**
         * Decodes a MahjongGangCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongGangCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongGangCmd;

        /**
         * Verifies a MahjongGangCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongGangCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongGangCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongGangCmd;

        /**
         * Creates a plain object from a MahjongGangCmd message. Also converts values to other types if specified.
         * @param message MahjongGangCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongGangCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongGangCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongMingGangResult. */
    interface IMahjongMingGangResult {

        /** MahjongMingGangResult mahjongMingGang */
        mahjongMingGang?: (msg.IMahjongChiPengGang|null);
    }

    /** Represents a MahjongMingGangResult. */
    class MahjongMingGangResult implements IMahjongMingGangResult {

        /**
         * Constructs a new MahjongMingGangResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongMingGangResult);

        /** MahjongMingGangResult mahjongMingGang. */
        public mahjongMingGang?: (msg.IMahjongChiPengGang|null);

        /**
         * Creates a new MahjongMingGangResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongMingGangResult instance
         */
        public static create(properties?: msg.IMahjongMingGangResult): msg.MahjongMingGangResult;

        /**
         * Encodes the specified MahjongMingGangResult message. Does not implicitly {@link msg.MahjongMingGangResult.verify|verify} messages.
         * @param message MahjongMingGangResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongMingGangResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongMingGangResult message, length delimited. Does not implicitly {@link msg.MahjongMingGangResult.verify|verify} messages.
         * @param message MahjongMingGangResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongMingGangResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongMingGangResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongMingGangResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongMingGangResult;

        /**
         * Decodes a MahjongMingGangResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongMingGangResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongMingGangResult;

        /**
         * Verifies a MahjongMingGangResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongMingGangResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongMingGangResult
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongMingGangResult;

        /**
         * Creates a plain object from a MahjongMingGangResult message. Also converts values to other types if specified.
         * @param message MahjongMingGangResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongMingGangResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongMingGangResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongAnGangResult. */
    interface IMahjongAnGangResult {

        /** MahjongAnGangResult mahjongAnGang */
        mahjongAnGang?: (msg.IMahjongChiPengGang|null);
    }

    /** Represents a MahjongAnGangResult. */
    class MahjongAnGangResult implements IMahjongAnGangResult {

        /**
         * Constructs a new MahjongAnGangResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongAnGangResult);

        /** MahjongAnGangResult mahjongAnGang. */
        public mahjongAnGang?: (msg.IMahjongChiPengGang|null);

        /**
         * Creates a new MahjongAnGangResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongAnGangResult instance
         */
        public static create(properties?: msg.IMahjongAnGangResult): msg.MahjongAnGangResult;

        /**
         * Encodes the specified MahjongAnGangResult message. Does not implicitly {@link msg.MahjongAnGangResult.verify|verify} messages.
         * @param message MahjongAnGangResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongAnGangResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongAnGangResult message, length delimited. Does not implicitly {@link msg.MahjongAnGangResult.verify|verify} messages.
         * @param message MahjongAnGangResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongAnGangResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongAnGangResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongAnGangResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongAnGangResult;

        /**
         * Decodes a MahjongAnGangResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongAnGangResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongAnGangResult;

        /**
         * Verifies a MahjongAnGangResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongAnGangResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongAnGangResult
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongAnGangResult;

        /**
         * Creates a plain object from a MahjongAnGangResult message. Also converts values to other types if specified.
         * @param message MahjongAnGangResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongAnGangResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongAnGangResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongBuGangResult. */
    interface IMahjongBuGangResult {

        /** MahjongBuGangResult mahjongBuGang */
        mahjongBuGang?: (msg.IMahjongChiPengGang|null);
    }

    /** Represents a MahjongBuGangResult. */
    class MahjongBuGangResult implements IMahjongBuGangResult {

        /**
         * Constructs a new MahjongBuGangResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongBuGangResult);

        /** MahjongBuGangResult mahjongBuGang. */
        public mahjongBuGang?: (msg.IMahjongChiPengGang|null);

        /**
         * Creates a new MahjongBuGangResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongBuGangResult instance
         */
        public static create(properties?: msg.IMahjongBuGangResult): msg.MahjongBuGangResult;

        /**
         * Encodes the specified MahjongBuGangResult message. Does not implicitly {@link msg.MahjongBuGangResult.verify|verify} messages.
         * @param message MahjongBuGangResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongBuGangResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongBuGangResult message, length delimited. Does not implicitly {@link msg.MahjongBuGangResult.verify|verify} messages.
         * @param message MahjongBuGangResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongBuGangResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongBuGangResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongBuGangResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongBuGangResult;

        /**
         * Decodes a MahjongBuGangResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongBuGangResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongBuGangResult;

        /**
         * Verifies a MahjongBuGangResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongBuGangResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongBuGangResult
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongBuGangResult;

        /**
         * Creates a plain object from a MahjongBuGangResult message. Also converts values to other types if specified.
         * @param message MahjongBuGangResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongBuGangResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongBuGangResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongMingGangBroadcast. */
    interface IMahjongMingGangBroadcast {

        /** MahjongMingGangBroadcast userId */
        userId?: (number|null);

        /** MahjongMingGangBroadcast mahjongMingGang */
        mahjongMingGang?: (msg.IMahjongChiPengGang|null);
    }

    /** Represents a MahjongMingGangBroadcast. */
    class MahjongMingGangBroadcast implements IMahjongMingGangBroadcast {

        /**
         * Constructs a new MahjongMingGangBroadcast.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongMingGangBroadcast);

        /** MahjongMingGangBroadcast userId. */
        public userId: number;

        /** MahjongMingGangBroadcast mahjongMingGang. */
        public mahjongMingGang?: (msg.IMahjongChiPengGang|null);

        /**
         * Creates a new MahjongMingGangBroadcast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongMingGangBroadcast instance
         */
        public static create(properties?: msg.IMahjongMingGangBroadcast): msg.MahjongMingGangBroadcast;

        /**
         * Encodes the specified MahjongMingGangBroadcast message. Does not implicitly {@link msg.MahjongMingGangBroadcast.verify|verify} messages.
         * @param message MahjongMingGangBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongMingGangBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongMingGangBroadcast message, length delimited. Does not implicitly {@link msg.MahjongMingGangBroadcast.verify|verify} messages.
         * @param message MahjongMingGangBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongMingGangBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongMingGangBroadcast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongMingGangBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongMingGangBroadcast;

        /**
         * Decodes a MahjongMingGangBroadcast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongMingGangBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongMingGangBroadcast;

        /**
         * Verifies a MahjongMingGangBroadcast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongMingGangBroadcast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongMingGangBroadcast
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongMingGangBroadcast;

        /**
         * Creates a plain object from a MahjongMingGangBroadcast message. Also converts values to other types if specified.
         * @param message MahjongMingGangBroadcast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongMingGangBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongMingGangBroadcast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongAnGangBroadcast. */
    interface IMahjongAnGangBroadcast {

        /** MahjongAnGangBroadcast userId */
        userId?: (number|null);

        /** MahjongAnGangBroadcast mahjongAnGang */
        mahjongAnGang?: (msg.IMahjongChiPengGang|null);
    }

    /** Represents a MahjongAnGangBroadcast. */
    class MahjongAnGangBroadcast implements IMahjongAnGangBroadcast {

        /**
         * Constructs a new MahjongAnGangBroadcast.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongAnGangBroadcast);

        /** MahjongAnGangBroadcast userId. */
        public userId: number;

        /** MahjongAnGangBroadcast mahjongAnGang. */
        public mahjongAnGang?: (msg.IMahjongChiPengGang|null);

        /**
         * Creates a new MahjongAnGangBroadcast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongAnGangBroadcast instance
         */
        public static create(properties?: msg.IMahjongAnGangBroadcast): msg.MahjongAnGangBroadcast;

        /**
         * Encodes the specified MahjongAnGangBroadcast message. Does not implicitly {@link msg.MahjongAnGangBroadcast.verify|verify} messages.
         * @param message MahjongAnGangBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongAnGangBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongAnGangBroadcast message, length delimited. Does not implicitly {@link msg.MahjongAnGangBroadcast.verify|verify} messages.
         * @param message MahjongAnGangBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongAnGangBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongAnGangBroadcast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongAnGangBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongAnGangBroadcast;

        /**
         * Decodes a MahjongAnGangBroadcast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongAnGangBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongAnGangBroadcast;

        /**
         * Verifies a MahjongAnGangBroadcast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongAnGangBroadcast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongAnGangBroadcast
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongAnGangBroadcast;

        /**
         * Creates a plain object from a MahjongAnGangBroadcast message. Also converts values to other types if specified.
         * @param message MahjongAnGangBroadcast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongAnGangBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongAnGangBroadcast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongBuGangBroadcast. */
    interface IMahjongBuGangBroadcast {

        /** MahjongBuGangBroadcast userId */
        userId?: (number|null);

        /** MahjongBuGangBroadcast mahjongBuGang */
        mahjongBuGang?: (msg.IMahjongChiPengGang|null);
    }

    /** Represents a MahjongBuGangBroadcast. */
    class MahjongBuGangBroadcast implements IMahjongBuGangBroadcast {

        /**
         * Constructs a new MahjongBuGangBroadcast.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongBuGangBroadcast);

        /** MahjongBuGangBroadcast userId. */
        public userId: number;

        /** MahjongBuGangBroadcast mahjongBuGang. */
        public mahjongBuGang?: (msg.IMahjongChiPengGang|null);

        /**
         * Creates a new MahjongBuGangBroadcast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongBuGangBroadcast instance
         */
        public static create(properties?: msg.IMahjongBuGangBroadcast): msg.MahjongBuGangBroadcast;

        /**
         * Encodes the specified MahjongBuGangBroadcast message. Does not implicitly {@link msg.MahjongBuGangBroadcast.verify|verify} messages.
         * @param message MahjongBuGangBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongBuGangBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongBuGangBroadcast message, length delimited. Does not implicitly {@link msg.MahjongBuGangBroadcast.verify|verify} messages.
         * @param message MahjongBuGangBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongBuGangBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongBuGangBroadcast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongBuGangBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongBuGangBroadcast;

        /**
         * Decodes a MahjongBuGangBroadcast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongBuGangBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongBuGangBroadcast;

        /**
         * Verifies a MahjongBuGangBroadcast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongBuGangBroadcast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongBuGangBroadcast
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongBuGangBroadcast;

        /**
         * Creates a plain object from a MahjongBuGangBroadcast message. Also converts values to other types if specified.
         * @param message MahjongBuGangBroadcast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongBuGangBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongBuGangBroadcast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongLiangDaoCmd. */
    interface IMahjongLiangDaoCmd {
    }

    /** Represents a MahjongLiangDaoCmd. */
    class MahjongLiangDaoCmd implements IMahjongLiangDaoCmd {

        /**
         * Constructs a new MahjongLiangDaoCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongLiangDaoCmd);

        /**
         * Creates a new MahjongLiangDaoCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongLiangDaoCmd instance
         */
        public static create(properties?: msg.IMahjongLiangDaoCmd): msg.MahjongLiangDaoCmd;

        /**
         * Encodes the specified MahjongLiangDaoCmd message. Does not implicitly {@link msg.MahjongLiangDaoCmd.verify|verify} messages.
         * @param message MahjongLiangDaoCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongLiangDaoCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongLiangDaoCmd message, length delimited. Does not implicitly {@link msg.MahjongLiangDaoCmd.verify|verify} messages.
         * @param message MahjongLiangDaoCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongLiangDaoCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongLiangDaoCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongLiangDaoCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongLiangDaoCmd;

        /**
         * Decodes a MahjongLiangDaoCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongLiangDaoCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongLiangDaoCmd;

        /**
         * Verifies a MahjongLiangDaoCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongLiangDaoCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongLiangDaoCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongLiangDaoCmd;

        /**
         * Creates a plain object from a MahjongLiangDaoCmd message. Also converts values to other types if specified.
         * @param message MahjongLiangDaoCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongLiangDaoCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongLiangDaoCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongLiangDaoResult. */
    interface IMahjongLiangDaoResult {

        /** MahjongLiangDaoResult mahjongInHand */
        mahjongInHand?: (number[]|null);

        /** MahjongLiangDaoResult moPai */
        moPai?: (number|null);
    }

    /** Represents a MahjongLiangDaoResult. */
    class MahjongLiangDaoResult implements IMahjongLiangDaoResult {

        /**
         * Constructs a new MahjongLiangDaoResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongLiangDaoResult);

        /** MahjongLiangDaoResult mahjongInHand. */
        public mahjongInHand: number[];

        /** MahjongLiangDaoResult moPai. */
        public moPai: number;

        /**
         * Creates a new MahjongLiangDaoResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongLiangDaoResult instance
         */
        public static create(properties?: msg.IMahjongLiangDaoResult): msg.MahjongLiangDaoResult;

        /**
         * Encodes the specified MahjongLiangDaoResult message. Does not implicitly {@link msg.MahjongLiangDaoResult.verify|verify} messages.
         * @param message MahjongLiangDaoResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongLiangDaoResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongLiangDaoResult message, length delimited. Does not implicitly {@link msg.MahjongLiangDaoResult.verify|verify} messages.
         * @param message MahjongLiangDaoResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongLiangDaoResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongLiangDaoResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongLiangDaoResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongLiangDaoResult;

        /**
         * Decodes a MahjongLiangDaoResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongLiangDaoResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongLiangDaoResult;

        /**
         * Verifies a MahjongLiangDaoResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongLiangDaoResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongLiangDaoResult
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongLiangDaoResult;

        /**
         * Creates a plain object from a MahjongLiangDaoResult message. Also converts values to other types if specified.
         * @param message MahjongLiangDaoResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongLiangDaoResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongLiangDaoResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongLiangDaoBroadcast. */
    interface IMahjongLiangDaoBroadcast {

        /** MahjongLiangDaoBroadcast userId */
        userId?: (number|null);

        /** MahjongLiangDaoBroadcast mahjongInHand */
        mahjongInHand?: (number[]|null);

        /** MahjongLiangDaoBroadcast moPai */
        moPai?: (number|null);
    }

    /** Represents a MahjongLiangDaoBroadcast. */
    class MahjongLiangDaoBroadcast implements IMahjongLiangDaoBroadcast {

        /**
         * Constructs a new MahjongLiangDaoBroadcast.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongLiangDaoBroadcast);

        /** MahjongLiangDaoBroadcast userId. */
        public userId: number;

        /** MahjongLiangDaoBroadcast mahjongInHand. */
        public mahjongInHand: number[];

        /** MahjongLiangDaoBroadcast moPai. */
        public moPai: number;

        /**
         * Creates a new MahjongLiangDaoBroadcast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongLiangDaoBroadcast instance
         */
        public static create(properties?: msg.IMahjongLiangDaoBroadcast): msg.MahjongLiangDaoBroadcast;

        /**
         * Encodes the specified MahjongLiangDaoBroadcast message. Does not implicitly {@link msg.MahjongLiangDaoBroadcast.verify|verify} messages.
         * @param message MahjongLiangDaoBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongLiangDaoBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongLiangDaoBroadcast message, length delimited. Does not implicitly {@link msg.MahjongLiangDaoBroadcast.verify|verify} messages.
         * @param message MahjongLiangDaoBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongLiangDaoBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongLiangDaoBroadcast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongLiangDaoBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongLiangDaoBroadcast;

        /**
         * Decodes a MahjongLiangDaoBroadcast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongLiangDaoBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongLiangDaoBroadcast;

        /**
         * Verifies a MahjongLiangDaoBroadcast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongLiangDaoBroadcast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongLiangDaoBroadcast
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongLiangDaoBroadcast;

        /**
         * Creates a plain object from a MahjongLiangDaoBroadcast message. Also converts values to other types if specified.
         * @param message MahjongLiangDaoBroadcast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongLiangDaoBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongLiangDaoBroadcast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongHuCmd. */
    interface IMahjongHuCmd {
    }

    /** Represents a MahjongHuCmd. */
    class MahjongHuCmd implements IMahjongHuCmd {

        /**
         * Constructs a new MahjongHuCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongHuCmd);

        /**
         * Creates a new MahjongHuCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongHuCmd instance
         */
        public static create(properties?: msg.IMahjongHuCmd): msg.MahjongHuCmd;

        /**
         * Encodes the specified MahjongHuCmd message. Does not implicitly {@link msg.MahjongHuCmd.verify|verify} messages.
         * @param message MahjongHuCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongHuCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongHuCmd message, length delimited. Does not implicitly {@link msg.MahjongHuCmd.verify|verify} messages.
         * @param message MahjongHuCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongHuCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongHuCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongHuCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongHuCmd;

        /**
         * Decodes a MahjongHuCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongHuCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongHuCmd;

        /**
         * Verifies a MahjongHuCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongHuCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongHuCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongHuCmd;

        /**
         * Creates a plain object from a MahjongHuCmd message. Also converts values to other types if specified.
         * @param message MahjongHuCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongHuCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongHuCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongHuOrZiMoResult. */
    interface IMahjongHuOrZiMoResult {

        /** MahjongHuOrZiMoResult t */
        t?: (number|null);

        /** MahjongHuOrZiMoResult hu */
        hu?: (boolean|null);

        /** MahjongHuOrZiMoResult ziMo */
        ziMo?: (boolean|null);

        /** MahjongHuOrZiMoResult dianPaoUserId */
        dianPaoUserId?: (number|null);

        /** MahjongHuOrZiMoResult huPattern */
        huPattern?: (msg.IKeyAndVal[]|null);
    }

    /** Represents a MahjongHuOrZiMoResult. */
    class MahjongHuOrZiMoResult implements IMahjongHuOrZiMoResult {

        /**
         * Constructs a new MahjongHuOrZiMoResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongHuOrZiMoResult);

        /** MahjongHuOrZiMoResult t. */
        public t: number;

        /** MahjongHuOrZiMoResult hu. */
        public hu: boolean;

        /** MahjongHuOrZiMoResult ziMo. */
        public ziMo: boolean;

        /** MahjongHuOrZiMoResult dianPaoUserId. */
        public dianPaoUserId: number;

        /** MahjongHuOrZiMoResult huPattern. */
        public huPattern: msg.IKeyAndVal[];

        /**
         * Creates a new MahjongHuOrZiMoResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongHuOrZiMoResult instance
         */
        public static create(properties?: msg.IMahjongHuOrZiMoResult): msg.MahjongHuOrZiMoResult;

        /**
         * Encodes the specified MahjongHuOrZiMoResult message. Does not implicitly {@link msg.MahjongHuOrZiMoResult.verify|verify} messages.
         * @param message MahjongHuOrZiMoResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongHuOrZiMoResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongHuOrZiMoResult message, length delimited. Does not implicitly {@link msg.MahjongHuOrZiMoResult.verify|verify} messages.
         * @param message MahjongHuOrZiMoResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongHuOrZiMoResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongHuOrZiMoResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongHuOrZiMoResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongHuOrZiMoResult;

        /**
         * Decodes a MahjongHuOrZiMoResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongHuOrZiMoResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongHuOrZiMoResult;

        /**
         * Verifies a MahjongHuOrZiMoResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongHuOrZiMoResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongHuOrZiMoResult
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongHuOrZiMoResult;

        /**
         * Creates a plain object from a MahjongHuOrZiMoResult message. Also converts values to other types if specified.
         * @param message MahjongHuOrZiMoResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongHuOrZiMoResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongHuOrZiMoResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongHuOrZiMoBroadcast. */
    interface IMahjongHuOrZiMoBroadcast {

        /** MahjongHuOrZiMoBroadcast userId */
        userId?: (number|null);

        /** MahjongHuOrZiMoBroadcast t */
        t?: (number|null);

        /** MahjongHuOrZiMoBroadcast hu */
        hu?: (boolean|null);

        /** MahjongHuOrZiMoBroadcast ziMo */
        ziMo?: (boolean|null);

        /** MahjongHuOrZiMoBroadcast dianPaoUserId */
        dianPaoUserId?: (number|null);

        /** MahjongHuOrZiMoBroadcast huPattern */
        huPattern?: (msg.IKeyAndVal[]|null);
    }

    /** Represents a MahjongHuOrZiMoBroadcast. */
    class MahjongHuOrZiMoBroadcast implements IMahjongHuOrZiMoBroadcast {

        /**
         * Constructs a new MahjongHuOrZiMoBroadcast.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongHuOrZiMoBroadcast);

        /** MahjongHuOrZiMoBroadcast userId. */
        public userId: number;

        /** MahjongHuOrZiMoBroadcast t. */
        public t: number;

        /** MahjongHuOrZiMoBroadcast hu. */
        public hu: boolean;

        /** MahjongHuOrZiMoBroadcast ziMo. */
        public ziMo: boolean;

        /** MahjongHuOrZiMoBroadcast dianPaoUserId. */
        public dianPaoUserId: number;

        /** MahjongHuOrZiMoBroadcast huPattern. */
        public huPattern: msg.IKeyAndVal[];

        /**
         * Creates a new MahjongHuOrZiMoBroadcast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongHuOrZiMoBroadcast instance
         */
        public static create(properties?: msg.IMahjongHuOrZiMoBroadcast): msg.MahjongHuOrZiMoBroadcast;

        /**
         * Encodes the specified MahjongHuOrZiMoBroadcast message. Does not implicitly {@link msg.MahjongHuOrZiMoBroadcast.verify|verify} messages.
         * @param message MahjongHuOrZiMoBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongHuOrZiMoBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongHuOrZiMoBroadcast message, length delimited. Does not implicitly {@link msg.MahjongHuOrZiMoBroadcast.verify|verify} messages.
         * @param message MahjongHuOrZiMoBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongHuOrZiMoBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongHuOrZiMoBroadcast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongHuOrZiMoBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongHuOrZiMoBroadcast;

        /**
         * Decodes a MahjongHuOrZiMoBroadcast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongHuOrZiMoBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongHuOrZiMoBroadcast;

        /**
         * Verifies a MahjongHuOrZiMoBroadcast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongHuOrZiMoBroadcast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongHuOrZiMoBroadcast
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongHuOrZiMoBroadcast;

        /**
         * Creates a plain object from a MahjongHuOrZiMoBroadcast message. Also converts values to other types if specified.
         * @param message MahjongHuOrZiMoBroadcast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongHuOrZiMoBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongHuOrZiMoBroadcast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongGuoCmd. */
    interface IMahjongGuoCmd {
    }

    /** Represents a MahjongGuoCmd. */
    class MahjongGuoCmd implements IMahjongGuoCmd {

        /**
         * Constructs a new MahjongGuoCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongGuoCmd);

        /**
         * Creates a new MahjongGuoCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongGuoCmd instance
         */
        public static create(properties?: msg.IMahjongGuoCmd): msg.MahjongGuoCmd;

        /**
         * Encodes the specified MahjongGuoCmd message. Does not implicitly {@link msg.MahjongGuoCmd.verify|verify} messages.
         * @param message MahjongGuoCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongGuoCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongGuoCmd message, length delimited. Does not implicitly {@link msg.MahjongGuoCmd.verify|verify} messages.
         * @param message MahjongGuoCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongGuoCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongGuoCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongGuoCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongGuoCmd;

        /**
         * Decodes a MahjongGuoCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongGuoCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongGuoCmd;

        /**
         * Verifies a MahjongGuoCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongGuoCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongGuoCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongGuoCmd;

        /**
         * Creates a plain object from a MahjongGuoCmd message. Also converts values to other types if specified.
         * @param message MahjongGuoCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongGuoCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongGuoCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongGuoResult. */
    interface IMahjongGuoResult {

        /** MahjongGuoResult ok */
        ok?: (boolean|null);
    }

    /** Represents a MahjongGuoResult. */
    class MahjongGuoResult implements IMahjongGuoResult {

        /**
         * Constructs a new MahjongGuoResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongGuoResult);

        /** MahjongGuoResult ok. */
        public ok: boolean;

        /**
         * Creates a new MahjongGuoResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongGuoResult instance
         */
        public static create(properties?: msg.IMahjongGuoResult): msg.MahjongGuoResult;

        /**
         * Encodes the specified MahjongGuoResult message. Does not implicitly {@link msg.MahjongGuoResult.verify|verify} messages.
         * @param message MahjongGuoResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongGuoResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongGuoResult message, length delimited. Does not implicitly {@link msg.MahjongGuoResult.verify|verify} messages.
         * @param message MahjongGuoResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongGuoResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongGuoResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongGuoResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongGuoResult;

        /**
         * Decodes a MahjongGuoResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongGuoResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongGuoResult;

        /**
         * Verifies a MahjongGuoResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongGuoResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongGuoResult
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongGuoResult;

        /**
         * Creates a plain object from a MahjongGuoResult message. Also converts values to other types if specified.
         * @param message MahjongGuoResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongGuoResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongGuoResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongHuangZhuangBroadcast. */
    interface IMahjongHuangZhuangBroadcast {
    }

    /** Represents a MahjongHuangZhuangBroadcast. */
    class MahjongHuangZhuangBroadcast implements IMahjongHuangZhuangBroadcast {

        /**
         * Constructs a new MahjongHuangZhuangBroadcast.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongHuangZhuangBroadcast);

        /**
         * Creates a new MahjongHuangZhuangBroadcast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongHuangZhuangBroadcast instance
         */
        public static create(properties?: msg.IMahjongHuangZhuangBroadcast): msg.MahjongHuangZhuangBroadcast;

        /**
         * Encodes the specified MahjongHuangZhuangBroadcast message. Does not implicitly {@link msg.MahjongHuangZhuangBroadcast.verify|verify} messages.
         * @param message MahjongHuangZhuangBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongHuangZhuangBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongHuangZhuangBroadcast message, length delimited. Does not implicitly {@link msg.MahjongHuangZhuangBroadcast.verify|verify} messages.
         * @param message MahjongHuangZhuangBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongHuangZhuangBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongHuangZhuangBroadcast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongHuangZhuangBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongHuangZhuangBroadcast;

        /**
         * Decodes a MahjongHuangZhuangBroadcast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongHuangZhuangBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongHuangZhuangBroadcast;

        /**
         * Verifies a MahjongHuangZhuangBroadcast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongHuangZhuangBroadcast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongHuangZhuangBroadcast
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongHuangZhuangBroadcast;

        /**
         * Creates a plain object from a MahjongHuangZhuangBroadcast message. Also converts values to other types if specified.
         * @param message MahjongHuangZhuangBroadcast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongHuangZhuangBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongHuangZhuangBroadcast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoundSettlementBroadcast. */
    interface IRoundSettlementBroadcast {

        /** RoundSettlementBroadcast settlementItem */
        settlementItem?: (msg.RoundSettlementBroadcast.ISettlementItem[]|null);
    }

    /** Represents a RoundSettlementBroadcast. */
    class RoundSettlementBroadcast implements IRoundSettlementBroadcast {

        /**
         * Constructs a new RoundSettlementBroadcast.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IRoundSettlementBroadcast);

        /** RoundSettlementBroadcast settlementItem. */
        public settlementItem: msg.RoundSettlementBroadcast.ISettlementItem[];

        /**
         * Creates a new RoundSettlementBroadcast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoundSettlementBroadcast instance
         */
        public static create(properties?: msg.IRoundSettlementBroadcast): msg.RoundSettlementBroadcast;

        /**
         * Encodes the specified RoundSettlementBroadcast message. Does not implicitly {@link msg.RoundSettlementBroadcast.verify|verify} messages.
         * @param message RoundSettlementBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IRoundSettlementBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoundSettlementBroadcast message, length delimited. Does not implicitly {@link msg.RoundSettlementBroadcast.verify|verify} messages.
         * @param message RoundSettlementBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IRoundSettlementBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoundSettlementBroadcast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoundSettlementBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.RoundSettlementBroadcast;

        /**
         * Decodes a RoundSettlementBroadcast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoundSettlementBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.RoundSettlementBroadcast;

        /**
         * Verifies a RoundSettlementBroadcast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoundSettlementBroadcast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoundSettlementBroadcast
         */
        public static fromObject(object: { [k: string]: any }): msg.RoundSettlementBroadcast;

        /**
         * Creates a plain object from a RoundSettlementBroadcast message. Also converts values to other types if specified.
         * @param message RoundSettlementBroadcast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.RoundSettlementBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoundSettlementBroadcast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace RoundSettlementBroadcast {

        /** Properties of a SettlementItem. */
        interface ISettlementItem {

            /** SettlementItem userId */
            userId?: (number|null);

            /** SettlementItem currScore */
            currScore?: (number|null);

            /** SettlementItem totalScore */
            totalScore?: (number|null);

            /** SettlementItem seatIndex */
            seatIndex?: (number|null);

            /** SettlementItem piaoX */
            piaoX?: (number|null);

            /** SettlementItem roomOwnerFlag */
            roomOwnerFlag?: (boolean|null);

            /** SettlementItem zhuangJiaFlag */
            zhuangJiaFlag?: (boolean|null);

            /** SettlementItem hu */
            hu?: (boolean|null);

            /** SettlementItem dianPao */
            dianPao?: (boolean|null);

            /** SettlementItem ziMo */
            ziMo?: (boolean|null);

            /** SettlementItem huPattern */
            huPattern?: (msg.IKeyAndVal[]|null);

            /** SettlementItem gangPattern */
            gangPattern?: (msg.IKeyAndVal[]|null);

            /** SettlementItem mahjongInHand */
            mahjongInHand?: (number[]|null);

            /** SettlementItem mahjongHuOrZiMo */
            mahjongHuOrZiMo?: (number|null);

            /** SettlementItem mahjongChiPengGang */
            mahjongChiPengGang?: (msg.IMahjongChiPengGang[]|null);

            /** SettlementItem mahjongLiangFeng */
            mahjongLiangFeng?: (msg.IMahjongLiangFeng|null);
        }

        /** Represents a SettlementItem. */
        class SettlementItem implements ISettlementItem {

            /**
             * Constructs a new SettlementItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: msg.RoundSettlementBroadcast.ISettlementItem);

            /** SettlementItem userId. */
            public userId: number;

            /** SettlementItem currScore. */
            public currScore: number;

            /** SettlementItem totalScore. */
            public totalScore: number;

            /** SettlementItem seatIndex. */
            public seatIndex: number;

            /** SettlementItem piaoX. */
            public piaoX: number;

            /** SettlementItem roomOwnerFlag. */
            public roomOwnerFlag: boolean;

            /** SettlementItem zhuangJiaFlag. */
            public zhuangJiaFlag: boolean;

            /** SettlementItem hu. */
            public hu: boolean;

            /** SettlementItem dianPao. */
            public dianPao: boolean;

            /** SettlementItem ziMo. */
            public ziMo: boolean;

            /** SettlementItem huPattern. */
            public huPattern: msg.IKeyAndVal[];

            /** SettlementItem gangPattern. */
            public gangPattern: msg.IKeyAndVal[];

            /** SettlementItem mahjongInHand. */
            public mahjongInHand: number[];

            /** SettlementItem mahjongHuOrZiMo. */
            public mahjongHuOrZiMo: number;

            /** SettlementItem mahjongChiPengGang. */
            public mahjongChiPengGang: msg.IMahjongChiPengGang[];

            /** SettlementItem mahjongLiangFeng. */
            public mahjongLiangFeng?: (msg.IMahjongLiangFeng|null);

            /**
             * Creates a new SettlementItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SettlementItem instance
             */
            public static create(properties?: msg.RoundSettlementBroadcast.ISettlementItem): msg.RoundSettlementBroadcast.SettlementItem;

            /**
             * Encodes the specified SettlementItem message. Does not implicitly {@link msg.RoundSettlementBroadcast.SettlementItem.verify|verify} messages.
             * @param message SettlementItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: msg.RoundSettlementBroadcast.ISettlementItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SettlementItem message, length delimited. Does not implicitly {@link msg.RoundSettlementBroadcast.SettlementItem.verify|verify} messages.
             * @param message SettlementItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: msg.RoundSettlementBroadcast.ISettlementItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SettlementItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SettlementItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.RoundSettlementBroadcast.SettlementItem;

            /**
             * Decodes a SettlementItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SettlementItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.RoundSettlementBroadcast.SettlementItem;

            /**
             * Verifies a SettlementItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SettlementItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SettlementItem
             */
            public static fromObject(object: { [k: string]: any }): msg.RoundSettlementBroadcast.SettlementItem;

            /**
             * Creates a plain object from a SettlementItem message. Also converts values to other types if specified.
             * @param message SettlementItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: msg.RoundSettlementBroadcast.SettlementItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SettlementItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a RoomSettlementBroadcast. */
    interface IRoomSettlementBroadcast {

        /** RoomSettlementBroadcast settlementItem */
        settlementItem?: (msg.RoomSettlementBroadcast.ISettlementItem[]|null);
    }

    /** Represents a RoomSettlementBroadcast. */
    class RoomSettlementBroadcast implements IRoomSettlementBroadcast {

        /**
         * Constructs a new RoomSettlementBroadcast.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IRoomSettlementBroadcast);

        /** RoomSettlementBroadcast settlementItem. */
        public settlementItem: msg.RoomSettlementBroadcast.ISettlementItem[];

        /**
         * Creates a new RoomSettlementBroadcast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomSettlementBroadcast instance
         */
        public static create(properties?: msg.IRoomSettlementBroadcast): msg.RoomSettlementBroadcast;

        /**
         * Encodes the specified RoomSettlementBroadcast message. Does not implicitly {@link msg.RoomSettlementBroadcast.verify|verify} messages.
         * @param message RoomSettlementBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IRoomSettlementBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomSettlementBroadcast message, length delimited. Does not implicitly {@link msg.RoomSettlementBroadcast.verify|verify} messages.
         * @param message RoomSettlementBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IRoomSettlementBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomSettlementBroadcast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomSettlementBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.RoomSettlementBroadcast;

        /**
         * Decodes a RoomSettlementBroadcast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomSettlementBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.RoomSettlementBroadcast;

        /**
         * Verifies a RoomSettlementBroadcast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomSettlementBroadcast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomSettlementBroadcast
         */
        public static fromObject(object: { [k: string]: any }): msg.RoomSettlementBroadcast;

        /**
         * Creates a plain object from a RoomSettlementBroadcast message. Also converts values to other types if specified.
         * @param message RoomSettlementBroadcast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.RoomSettlementBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomSettlementBroadcast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace RoomSettlementBroadcast {

        /** Properties of a SettlementItem. */
        interface ISettlementItem {

            /** SettlementItem userId */
            userId?: (number|null);

            /** SettlementItem seatIndex */
            seatIndex?: (number|null);

            /** SettlementItem roomOwnerFlag */
            roomOwnerFlag?: (boolean|null);

            /** SettlementItem zuoZhuangTimez */
            zuoZhuangTimez?: (number|null);

            /** SettlementItem ziMoTimez */
            ziMoTimez?: (number|null);

            /** SettlementItem dianPaoTimez */
            dianPaoTimez?: (number|null);

            /** SettlementItem huPaiTimez */
            huPaiTimez?: (number|null);

            /** SettlementItem totalScore */
            totalScore?: (number|null);

            /** SettlementItem bigWinner */
            bigWinner?: (boolean|null);
        }

        /** Represents a SettlementItem. */
        class SettlementItem implements ISettlementItem {

            /**
             * Constructs a new SettlementItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: msg.RoomSettlementBroadcast.ISettlementItem);

            /** SettlementItem userId. */
            public userId: number;

            /** SettlementItem seatIndex. */
            public seatIndex: number;

            /** SettlementItem roomOwnerFlag. */
            public roomOwnerFlag: boolean;

            /** SettlementItem zuoZhuangTimez. */
            public zuoZhuangTimez: number;

            /** SettlementItem ziMoTimez. */
            public ziMoTimez: number;

            /** SettlementItem dianPaoTimez. */
            public dianPaoTimez: number;

            /** SettlementItem huPaiTimez. */
            public huPaiTimez: number;

            /** SettlementItem totalScore. */
            public totalScore: number;

            /** SettlementItem bigWinner. */
            public bigWinner: boolean;

            /**
             * Creates a new SettlementItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SettlementItem instance
             */
            public static create(properties?: msg.RoomSettlementBroadcast.ISettlementItem): msg.RoomSettlementBroadcast.SettlementItem;

            /**
             * Encodes the specified SettlementItem message. Does not implicitly {@link msg.RoomSettlementBroadcast.SettlementItem.verify|verify} messages.
             * @param message SettlementItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: msg.RoomSettlementBroadcast.ISettlementItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SettlementItem message, length delimited. Does not implicitly {@link msg.RoomSettlementBroadcast.SettlementItem.verify|verify} messages.
             * @param message SettlementItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: msg.RoomSettlementBroadcast.ISettlementItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SettlementItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SettlementItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.RoomSettlementBroadcast.SettlementItem;

            /**
             * Decodes a SettlementItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SettlementItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.RoomSettlementBroadcast.SettlementItem;

            /**
             * Verifies a SettlementItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SettlementItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SettlementItem
             */
            public static fromObject(object: { [k: string]: any }): msg.RoomSettlementBroadcast.SettlementItem;

            /**
             * Creates a plain object from a SettlementItem message. Also converts values to other types if specified.
             * @param message SettlementItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: msg.RoomSettlementBroadcast.SettlementItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SettlementItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a MahjongLiangFengCmd. */
    interface IMahjongLiangFengCmd {

        /** MahjongLiangFengCmd t0 */
        t0?: (number|null);

        /** MahjongLiangFengCmd t1 */
        t1?: (number|null);

        /** MahjongLiangFengCmd t2 */
        t2?: (number|null);
    }

    /** Represents a MahjongLiangFengCmd. */
    class MahjongLiangFengCmd implements IMahjongLiangFengCmd {

        /**
         * Constructs a new MahjongLiangFengCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongLiangFengCmd);

        /** MahjongLiangFengCmd t0. */
        public t0: number;

        /** MahjongLiangFengCmd t1. */
        public t1: number;

        /** MahjongLiangFengCmd t2. */
        public t2: number;

        /**
         * Creates a new MahjongLiangFengCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongLiangFengCmd instance
         */
        public static create(properties?: msg.IMahjongLiangFengCmd): msg.MahjongLiangFengCmd;

        /**
         * Encodes the specified MahjongLiangFengCmd message. Does not implicitly {@link msg.MahjongLiangFengCmd.verify|verify} messages.
         * @param message MahjongLiangFengCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongLiangFengCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongLiangFengCmd message, length delimited. Does not implicitly {@link msg.MahjongLiangFengCmd.verify|verify} messages.
         * @param message MahjongLiangFengCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongLiangFengCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongLiangFengCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongLiangFengCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongLiangFengCmd;

        /**
         * Decodes a MahjongLiangFengCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongLiangFengCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongLiangFengCmd;

        /**
         * Verifies a MahjongLiangFengCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongLiangFengCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongLiangFengCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongLiangFengCmd;

        /**
         * Creates a plain object from a MahjongLiangFengCmd message. Also converts values to other types if specified.
         * @param message MahjongLiangFengCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongLiangFengCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongLiangFengCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongLiangFengResult. */
    interface IMahjongLiangFengResult {

        /** MahjongLiangFengResult mahjongLiangFeng */
        mahjongLiangFeng?: (msg.IMahjongLiangFeng|null);
    }

    /** Represents a MahjongLiangFengResult. */
    class MahjongLiangFengResult implements IMahjongLiangFengResult {

        /**
         * Constructs a new MahjongLiangFengResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongLiangFengResult);

        /** MahjongLiangFengResult mahjongLiangFeng. */
        public mahjongLiangFeng?: (msg.IMahjongLiangFeng|null);

        /**
         * Creates a new MahjongLiangFengResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongLiangFengResult instance
         */
        public static create(properties?: msg.IMahjongLiangFengResult): msg.MahjongLiangFengResult;

        /**
         * Encodes the specified MahjongLiangFengResult message. Does not implicitly {@link msg.MahjongLiangFengResult.verify|verify} messages.
         * @param message MahjongLiangFengResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongLiangFengResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongLiangFengResult message, length delimited. Does not implicitly {@link msg.MahjongLiangFengResult.verify|verify} messages.
         * @param message MahjongLiangFengResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongLiangFengResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongLiangFengResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongLiangFengResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongLiangFengResult;

        /**
         * Decodes a MahjongLiangFengResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongLiangFengResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongLiangFengResult;

        /**
         * Verifies a MahjongLiangFengResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongLiangFengResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongLiangFengResult
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongLiangFengResult;

        /**
         * Creates a plain object from a MahjongLiangFengResult message. Also converts values to other types if specified.
         * @param message MahjongLiangFengResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongLiangFengResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongLiangFengResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongLiangFengBroadcast. */
    interface IMahjongLiangFengBroadcast {

        /** MahjongLiangFengBroadcast userId */
        userId?: (number|null);

        /** MahjongLiangFengBroadcast mahjongLiangFeng */
        mahjongLiangFeng?: (msg.IMahjongLiangFeng|null);
    }

    /** Represents a MahjongLiangFengBroadcast. */
    class MahjongLiangFengBroadcast implements IMahjongLiangFengBroadcast {

        /**
         * Constructs a new MahjongLiangFengBroadcast.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongLiangFengBroadcast);

        /** MahjongLiangFengBroadcast userId. */
        public userId: number;

        /** MahjongLiangFengBroadcast mahjongLiangFeng. */
        public mahjongLiangFeng?: (msg.IMahjongLiangFeng|null);

        /**
         * Creates a new MahjongLiangFengBroadcast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongLiangFengBroadcast instance
         */
        public static create(properties?: msg.IMahjongLiangFengBroadcast): msg.MahjongLiangFengBroadcast;

        /**
         * Encodes the specified MahjongLiangFengBroadcast message. Does not implicitly {@link msg.MahjongLiangFengBroadcast.verify|verify} messages.
         * @param message MahjongLiangFengBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongLiangFengBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongLiangFengBroadcast message, length delimited. Does not implicitly {@link msg.MahjongLiangFengBroadcast.verify|verify} messages.
         * @param message MahjongLiangFengBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongLiangFengBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongLiangFengBroadcast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongLiangFengBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongLiangFengBroadcast;

        /**
         * Decodes a MahjongLiangFengBroadcast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongLiangFengBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongLiangFengBroadcast;

        /**
         * Verifies a MahjongLiangFengBroadcast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongLiangFengBroadcast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongLiangFengBroadcast
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongLiangFengBroadcast;

        /**
         * Creates a plain object from a MahjongLiangFengBroadcast message. Also converts values to other types if specified.
         * @param message MahjongLiangFengBroadcast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongLiangFengBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongLiangFengBroadcast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongBuFengCmd. */
    interface IMahjongBuFengCmd {
    }

    /** Represents a MahjongBuFengCmd. */
    class MahjongBuFengCmd implements IMahjongBuFengCmd {

        /**
         * Constructs a new MahjongBuFengCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongBuFengCmd);

        /**
         * Creates a new MahjongBuFengCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongBuFengCmd instance
         */
        public static create(properties?: msg.IMahjongBuFengCmd): msg.MahjongBuFengCmd;

        /**
         * Encodes the specified MahjongBuFengCmd message. Does not implicitly {@link msg.MahjongBuFengCmd.verify|verify} messages.
         * @param message MahjongBuFengCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongBuFengCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongBuFengCmd message, length delimited. Does not implicitly {@link msg.MahjongBuFengCmd.verify|verify} messages.
         * @param message MahjongBuFengCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongBuFengCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongBuFengCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongBuFengCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongBuFengCmd;

        /**
         * Decodes a MahjongBuFengCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongBuFengCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongBuFengCmd;

        /**
         * Verifies a MahjongBuFengCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongBuFengCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongBuFengCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongBuFengCmd;

        /**
         * Creates a plain object from a MahjongBuFengCmd message. Also converts values to other types if specified.
         * @param message MahjongBuFengCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongBuFengCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongBuFengCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongBuFengResult. */
    interface IMahjongBuFengResult {

        /** MahjongBuFengResult mahjongLiangFeng */
        mahjongLiangFeng?: (msg.IMahjongLiangFeng|null);
    }

    /** Represents a MahjongBuFengResult. */
    class MahjongBuFengResult implements IMahjongBuFengResult {

        /**
         * Constructs a new MahjongBuFengResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongBuFengResult);

        /** MahjongBuFengResult mahjongLiangFeng. */
        public mahjongLiangFeng?: (msg.IMahjongLiangFeng|null);

        /**
         * Creates a new MahjongBuFengResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongBuFengResult instance
         */
        public static create(properties?: msg.IMahjongBuFengResult): msg.MahjongBuFengResult;

        /**
         * Encodes the specified MahjongBuFengResult message. Does not implicitly {@link msg.MahjongBuFengResult.verify|verify} messages.
         * @param message MahjongBuFengResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongBuFengResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongBuFengResult message, length delimited. Does not implicitly {@link msg.MahjongBuFengResult.verify|verify} messages.
         * @param message MahjongBuFengResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongBuFengResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongBuFengResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongBuFengResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongBuFengResult;

        /**
         * Decodes a MahjongBuFengResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongBuFengResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongBuFengResult;

        /**
         * Verifies a MahjongBuFengResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongBuFengResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongBuFengResult
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongBuFengResult;

        /**
         * Creates a plain object from a MahjongBuFengResult message. Also converts values to other types if specified.
         * @param message MahjongBuFengResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongBuFengResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongBuFengResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongBuFengBroadcast. */
    interface IMahjongBuFengBroadcast {

        /** MahjongBuFengBroadcast userId */
        userId?: (number|null);

        /** MahjongBuFengBroadcast mahjongLiangFeng */
        mahjongLiangFeng?: (msg.IMahjongLiangFeng|null);
    }

    /** Represents a MahjongBuFengBroadcast. */
    class MahjongBuFengBroadcast implements IMahjongBuFengBroadcast {

        /**
         * Constructs a new MahjongBuFengBroadcast.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongBuFengBroadcast);

        /** MahjongBuFengBroadcast userId. */
        public userId: number;

        /** MahjongBuFengBroadcast mahjongLiangFeng. */
        public mahjongLiangFeng?: (msg.IMahjongLiangFeng|null);

        /**
         * Creates a new MahjongBuFengBroadcast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongBuFengBroadcast instance
         */
        public static create(properties?: msg.IMahjongBuFengBroadcast): msg.MahjongBuFengBroadcast;

        /**
         * Encodes the specified MahjongBuFengBroadcast message. Does not implicitly {@link msg.MahjongBuFengBroadcast.verify|verify} messages.
         * @param message MahjongBuFengBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongBuFengBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongBuFengBroadcast message, length delimited. Does not implicitly {@link msg.MahjongBuFengBroadcast.verify|verify} messages.
         * @param message MahjongBuFengBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongBuFengBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongBuFengBroadcast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongBuFengBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongBuFengBroadcast;

        /**
         * Decodes a MahjongBuFengBroadcast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongBuFengBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongBuFengBroadcast;

        /**
         * Verifies a MahjongBuFengBroadcast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongBuFengBroadcast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongBuFengBroadcast
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongBuFengBroadcast;

        /**
         * Creates a plain object from a MahjongBuFengBroadcast message. Also converts values to other types if specified.
         * @param message MahjongBuFengBroadcast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongBuFengBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongBuFengBroadcast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MahjongLiangGangDingBroadcast. */
    interface IMahjongLiangGangDingBroadcast {

        /** MahjongLiangGangDingBroadcast t0 */
        t0?: (number|null);

        /** MahjongLiangGangDingBroadcast t1 */
        t1?: (number|null);
    }

    /** Represents a MahjongLiangGangDingBroadcast. */
    class MahjongLiangGangDingBroadcast implements IMahjongLiangGangDingBroadcast {

        /**
         * Constructs a new MahjongLiangGangDingBroadcast.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMahjongLiangGangDingBroadcast);

        /** MahjongLiangGangDingBroadcast t0. */
        public t0: number;

        /** MahjongLiangGangDingBroadcast t1. */
        public t1: number;

        /**
         * Creates a new MahjongLiangGangDingBroadcast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongLiangGangDingBroadcast instance
         */
        public static create(properties?: msg.IMahjongLiangGangDingBroadcast): msg.MahjongLiangGangDingBroadcast;

        /**
         * Encodes the specified MahjongLiangGangDingBroadcast message. Does not implicitly {@link msg.MahjongLiangGangDingBroadcast.verify|verify} messages.
         * @param message MahjongLiangGangDingBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMahjongLiangGangDingBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MahjongLiangGangDingBroadcast message, length delimited. Does not implicitly {@link msg.MahjongLiangGangDingBroadcast.verify|verify} messages.
         * @param message MahjongLiangGangDingBroadcast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMahjongLiangGangDingBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MahjongLiangGangDingBroadcast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongLiangGangDingBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MahjongLiangGangDingBroadcast;

        /**
         * Decodes a MahjongLiangGangDingBroadcast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongLiangGangDingBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MahjongLiangGangDingBroadcast;

        /**
         * Verifies a MahjongLiangGangDingBroadcast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MahjongLiangGangDingBroadcast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MahjongLiangGangDingBroadcast
         */
        public static fromObject(object: { [k: string]: any }): msg.MahjongLiangGangDingBroadcast;

        /**
         * Creates a plain object from a MahjongLiangGangDingBroadcast message. Also converts values to other types if specified.
         * @param message MahjongLiangGangDingBroadcast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MahjongLiangGangDingBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MahjongLiangGangDingBroadcast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
