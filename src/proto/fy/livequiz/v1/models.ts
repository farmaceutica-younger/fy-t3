/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "fy.livequiz.v1";

export interface LiveQuiz {
  id: string;
  title: string;
  description: string;
  status: QuizStatus | undefined;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}

export interface Question {
  id: string;
  liveQuizId: string;
  question: string;
  answers: string[];
  correctAns: number;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  startTime: Date | undefined;
  endTime: Date | undefined;
}

export interface Participant {
  id: string;
  liveQuizId: string;
  name: string;
  email: string;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}

export interface QuizStatus {
  empty?: QuizStatus_Empty | undefined;
  rank?: QuizStatus_Rank | undefined;
  question?: Question | undefined;
}

export interface QuizStatus_Empty {}

export interface QuizStatus_Rank {}

export interface ParticipantRank {
  participantId: string;
  name: string;
  email: string;
  score: number;
  totalTime: number;
}

function createBaseLiveQuiz(): LiveQuiz {
  return {
    id: "",
    title: "",
    description: "",
    status: undefined,
    createdAt: undefined,
    updatedAt: undefined,
  };
}

export const LiveQuiz = {
  encode(
    message: LiveQuiz,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.status !== undefined) {
      QuizStatus.encode(message.status, writer.uint32(34).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedAt),
        writer.uint32(90).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiveQuiz {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiveQuiz();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.status = QuizStatus.decode(reader, reader.uint32());
          break;
        case 10:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.updatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LiveQuiz {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      status: isSet(object.status)
        ? QuizStatus.fromJSON(object.status)
        : undefined,
      createdAt: isSet(object.createdAt)
        ? fromJsonTimestamp(object.createdAt)
        : undefined,
      updatedAt: isSet(object.updatedAt)
        ? fromJsonTimestamp(object.updatedAt)
        : undefined,
    };
  },

  toJSON(message: LiveQuiz): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.status !== undefined &&
      (obj.status = message.status
        ? QuizStatus.toJSON(message.status)
        : undefined);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    return obj;
  },

  create<I extends Exact<DeepPartial<LiveQuiz>, I>>(base?: I): LiveQuiz {
    return LiveQuiz.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LiveQuiz>, I>>(object: I): LiveQuiz {
    const message = createBaseLiveQuiz();
    message.id = object.id ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.status =
      object.status !== undefined && object.status !== null
        ? QuizStatus.fromPartial(object.status)
        : undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
};

function createBaseQuestion(): Question {
  return {
    id: "",
    liveQuizId: "",
    question: "",
    answers: [],
    correctAns: 0,
    createdAt: undefined,
    updatedAt: undefined,
    startTime: undefined,
    endTime: undefined,
  };
}

export const Question = {
  encode(
    message: Question,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.liveQuizId !== "") {
      writer.uint32(18).string(message.liveQuizId);
    }
    if (message.question !== "") {
      writer.uint32(26).string(message.question);
    }
    for (const v of message.answers) {
      writer.uint32(34).string(v!);
    }
    if (message.correctAns !== 0) {
      writer.uint32(40).uint32(message.correctAns);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedAt),
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTime),
        writer.uint32(106).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Question {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.liveQuizId = reader.string();
          break;
        case 3:
          message.question = reader.string();
          break;
        case 4:
          message.answers.push(reader.string());
          break;
        case 5:
          message.correctAns = reader.uint32();
          break;
        case 10:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.updatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.endTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Question {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      liveQuizId: isSet(object.liveQuizId) ? String(object.liveQuizId) : "",
      question: isSet(object.question) ? String(object.question) : "",
      answers: Array.isArray(object?.answers)
        ? object.answers.map((e: any) => String(e))
        : [],
      correctAns: isSet(object.correctAns) ? Number(object.correctAns) : 0,
      createdAt: isSet(object.createdAt)
        ? fromJsonTimestamp(object.createdAt)
        : undefined,
      updatedAt: isSet(object.updatedAt)
        ? fromJsonTimestamp(object.updatedAt)
        : undefined,
      startTime: isSet(object.startTime)
        ? fromJsonTimestamp(object.startTime)
        : undefined,
      endTime: isSet(object.endTime)
        ? fromJsonTimestamp(object.endTime)
        : undefined,
    };
  },

  toJSON(message: Question): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.liveQuizId !== undefined && (obj.liveQuizId = message.liveQuizId);
    message.question !== undefined && (obj.question = message.question);
    if (message.answers) {
      obj.answers = message.answers.map((e) => e);
    } else {
      obj.answers = [];
    }
    message.correctAns !== undefined &&
      (obj.correctAns = Math.round(message.correctAns));
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined &&
      (obj.endTime = message.endTime.toISOString());
    return obj;
  },

  create<I extends Exact<DeepPartial<Question>, I>>(base?: I): Question {
    return Question.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Question>, I>>(object: I): Question {
    const message = createBaseQuestion();
    message.id = object.id ?? "";
    message.liveQuizId = object.liveQuizId ?? "";
    message.question = object.question ?? "";
    message.answers = object.answers?.map((e) => e) || [];
    message.correctAns = object.correctAns ?? 0;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    return message;
  },
};

function createBaseParticipant(): Participant {
  return {
    id: "",
    liveQuizId: "",
    name: "",
    email: "",
    createdAt: undefined,
    updatedAt: undefined,
  };
}

export const Participant = {
  encode(
    message: Participant,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.liveQuizId !== "") {
      writer.uint32(18).string(message.liveQuizId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(34).string(message.email);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedAt),
        writer.uint32(90).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Participant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParticipant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.liveQuizId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.email = reader.string();
          break;
        case 10:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.updatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Participant {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      liveQuizId: isSet(object.liveQuizId) ? String(object.liveQuizId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      email: isSet(object.email) ? String(object.email) : "",
      createdAt: isSet(object.createdAt)
        ? fromJsonTimestamp(object.createdAt)
        : undefined,
      updatedAt: isSet(object.updatedAt)
        ? fromJsonTimestamp(object.updatedAt)
        : undefined,
    };
  },

  toJSON(message: Participant): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.liveQuizId !== undefined && (obj.liveQuizId = message.liveQuizId);
    message.name !== undefined && (obj.name = message.name);
    message.email !== undefined && (obj.email = message.email);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    return obj;
  },

  create<I extends Exact<DeepPartial<Participant>, I>>(base?: I): Participant {
    return Participant.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Participant>, I>>(
    object: I
  ): Participant {
    const message = createBaseParticipant();
    message.id = object.id ?? "";
    message.liveQuizId = object.liveQuizId ?? "";
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
};

function createBaseQuizStatus(): QuizStatus {
  return { empty: undefined, rank: undefined, question: undefined };
}

export const QuizStatus = {
  encode(
    message: QuizStatus,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.empty !== undefined) {
      QuizStatus_Empty.encode(message.empty, writer.uint32(10).fork()).ldelim();
    }
    if (message.rank !== undefined) {
      QuizStatus_Rank.encode(message.rank, writer.uint32(18).fork()).ldelim();
    }
    if (message.question !== undefined) {
      Question.encode(message.question, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuizStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuizStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.empty = QuizStatus_Empty.decode(reader, reader.uint32());
          break;
        case 2:
          message.rank = QuizStatus_Rank.decode(reader, reader.uint32());
          break;
        case 3:
          message.question = Question.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuizStatus {
    return {
      empty: isSet(object.empty)
        ? QuizStatus_Empty.fromJSON(object.empty)
        : undefined,
      rank: isSet(object.rank)
        ? QuizStatus_Rank.fromJSON(object.rank)
        : undefined,
      question: isSet(object.question)
        ? Question.fromJSON(object.question)
        : undefined,
    };
  },

  toJSON(message: QuizStatus): unknown {
    const obj: any = {};
    message.empty !== undefined &&
      (obj.empty = message.empty
        ? QuizStatus_Empty.toJSON(message.empty)
        : undefined);
    message.rank !== undefined &&
      (obj.rank = message.rank
        ? QuizStatus_Rank.toJSON(message.rank)
        : undefined);
    message.question !== undefined &&
      (obj.question = message.question
        ? Question.toJSON(message.question)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuizStatus>, I>>(base?: I): QuizStatus {
    return QuizStatus.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuizStatus>, I>>(
    object: I
  ): QuizStatus {
    const message = createBaseQuizStatus();
    message.empty =
      object.empty !== undefined && object.empty !== null
        ? QuizStatus_Empty.fromPartial(object.empty)
        : undefined;
    message.rank =
      object.rank !== undefined && object.rank !== null
        ? QuizStatus_Rank.fromPartial(object.rank)
        : undefined;
    message.question =
      object.question !== undefined && object.question !== null
        ? Question.fromPartial(object.question)
        : undefined;
    return message;
  },
};

function createBaseQuizStatus_Empty(): QuizStatus_Empty {
  return {};
}

export const QuizStatus_Empty = {
  encode(
    _: QuizStatus_Empty,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuizStatus_Empty {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuizStatus_Empty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QuizStatus_Empty {
    return {};
  },

  toJSON(_: QuizStatus_Empty): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QuizStatus_Empty>, I>>(
    base?: I
  ): QuizStatus_Empty {
    return QuizStatus_Empty.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuizStatus_Empty>, I>>(
    _: I
  ): QuizStatus_Empty {
    const message = createBaseQuizStatus_Empty();
    return message;
  },
};

function createBaseQuizStatus_Rank(): QuizStatus_Rank {
  return {};
}

export const QuizStatus_Rank = {
  encode(
    _: QuizStatus_Rank,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuizStatus_Rank {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuizStatus_Rank();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QuizStatus_Rank {
    return {};
  },

  toJSON(_: QuizStatus_Rank): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QuizStatus_Rank>, I>>(
    base?: I
  ): QuizStatus_Rank {
    return QuizStatus_Rank.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuizStatus_Rank>, I>>(
    _: I
  ): QuizStatus_Rank {
    const message = createBaseQuizStatus_Rank();
    return message;
  },
};

function createBaseParticipantRank(): ParticipantRank {
  return { participantId: "", name: "", email: "", score: 0, totalTime: 0 };
}

export const ParticipantRank = {
  encode(
    message: ParticipantRank,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.participantId !== "") {
      writer.uint32(10).string(message.participantId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(34).string(message.email);
    }
    if (message.score !== 0) {
      writer.uint32(40).uint32(message.score);
    }
    if (message.totalTime !== 0) {
      writer.uint32(48).uint32(message.totalTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParticipantRank {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParticipantRank();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.participantId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.email = reader.string();
          break;
        case 5:
          message.score = reader.uint32();
          break;
        case 6:
          message.totalTime = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ParticipantRank {
    return {
      participantId: isSet(object.participantId)
        ? String(object.participantId)
        : "",
      name: isSet(object.name) ? String(object.name) : "",
      email: isSet(object.email) ? String(object.email) : "",
      score: isSet(object.score) ? Number(object.score) : 0,
      totalTime: isSet(object.totalTime) ? Number(object.totalTime) : 0,
    };
  },

  toJSON(message: ParticipantRank): unknown {
    const obj: any = {};
    message.participantId !== undefined &&
      (obj.participantId = message.participantId);
    message.name !== undefined && (obj.name = message.name);
    message.email !== undefined && (obj.email = message.email);
    message.score !== undefined && (obj.score = Math.round(message.score));
    message.totalTime !== undefined &&
      (obj.totalTime = Math.round(message.totalTime));
    return obj;
  },

  create<I extends Exact<DeepPartial<ParticipantRank>, I>>(
    base?: I
  ): ParticipantRank {
    return ParticipantRank.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ParticipantRank>, I>>(
    object: I
  ): ParticipantRank {
    const message = createBaseParticipantRank();
    message.participantId = object.participantId ?? "";
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.score = object.score ?? 0;
    message.totalTime = object.totalTime ?? 0;
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
