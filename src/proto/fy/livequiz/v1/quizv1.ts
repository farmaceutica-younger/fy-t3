/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { LiveQuiz, Participant, ParticipantRank, Question } from "./models";

export const protobufPackage = "fy.livequiz.v1";

export interface GetLiveQuizReq {
  quizId: string;
}

export interface GetLiveQuizRes {
  quiz: LiveQuiz | undefined;
}

export interface GetLiveQuizQuestionReq {
  quizId: string;
  questionId: string;
}

export interface GetLiveQuizQuestionRes {
  question: Question | undefined;
}

export interface GetLiveQuizQuestionsReq {
  quizId: string;
}

export interface GetLiveQuizQuestionsRes {
  questions: Question[];
  total: number;
}

export interface SetQuizStatusEmptyReq {
  quizId: string;
}

export interface SetQuizStatusEmptyRes {
  quiz: LiveQuiz | undefined;
}

export interface SetQuizStatusRankReq {
  quizId: string;
}

export interface SetQuizStatusRankRes {
  quiz: LiveQuiz | undefined;
}

export interface SetQuizStatusQuestionReq {
  quizId: string;
  questionId: string;
}

export interface SetQuizStatusQuestionRes {
  quiz: LiveQuiz | undefined;
}

export interface RegisterParticipantReq {
  quizId: string;
  name: string;
  email: string;
}

export interface RegisterParticipantRes {
  participant: Participant | undefined;
}

export interface GetParticipantsReq {
  quizId: string;
  skip: number;
  take: number;
}

export interface GetParticipantsRes {
  participants: Participant[];
  total: number;
}

export interface GetParticipantReq {
  quizId: string;
  participantId: string;
}

export interface GetParticipantRes {
  participant: Participant | undefined;
}

export interface SetParticipantAnswerReq {
  quizId: string;
  questionId: string;
  participantId: string;
  answerIdx: number;
}

export interface SetParticipantAnswerRes {}

export interface GetRancReq {
  quizId: string;
}

export interface GetRankRes {
  rank: ParticipantRank[];
}

function createBaseGetLiveQuizReq(): GetLiveQuizReq {
  return { quizId: "" };
}

export const GetLiveQuizReq = {
  encode(
    message: GetLiveQuizReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.quizId !== "") {
      writer.uint32(10).string(message.quizId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLiveQuizReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLiveQuizReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quizId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLiveQuizReq {
    return { quizId: isSet(object.quizId) ? String(object.quizId) : "" };
  },

  toJSON(message: GetLiveQuizReq): unknown {
    const obj: any = {};
    message.quizId !== undefined && (obj.quizId = message.quizId);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetLiveQuizReq>, I>>(
    base?: I,
  ): GetLiveQuizReq {
    return GetLiveQuizReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetLiveQuizReq>, I>>(
    object: I,
  ): GetLiveQuizReq {
    const message = createBaseGetLiveQuizReq();
    message.quizId = object.quizId ?? "";
    return message;
  },
};

function createBaseGetLiveQuizRes(): GetLiveQuizRes {
  return { quiz: undefined };
}

export const GetLiveQuizRes = {
  encode(
    message: GetLiveQuizRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.quiz !== undefined) {
      LiveQuiz.encode(message.quiz, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLiveQuizRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLiveQuizRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quiz = LiveQuiz.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLiveQuizRes {
    return {
      quiz: isSet(object.quiz) ? LiveQuiz.fromJSON(object.quiz) : undefined,
    };
  },

  toJSON(message: GetLiveQuizRes): unknown {
    const obj: any = {};
    message.quiz !== undefined &&
      (obj.quiz = message.quiz ? LiveQuiz.toJSON(message.quiz) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetLiveQuizRes>, I>>(
    base?: I,
  ): GetLiveQuizRes {
    return GetLiveQuizRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetLiveQuizRes>, I>>(
    object: I,
  ): GetLiveQuizRes {
    const message = createBaseGetLiveQuizRes();
    message.quiz =
      object.quiz !== undefined && object.quiz !== null
        ? LiveQuiz.fromPartial(object.quiz)
        : undefined;
    return message;
  },
};

function createBaseGetLiveQuizQuestionReq(): GetLiveQuizQuestionReq {
  return { quizId: "", questionId: "" };
}

export const GetLiveQuizQuestionReq = {
  encode(
    message: GetLiveQuizQuestionReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.quizId !== "") {
      writer.uint32(10).string(message.quizId);
    }
    if (message.questionId !== "") {
      writer.uint32(18).string(message.questionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetLiveQuizQuestionReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLiveQuizQuestionReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quizId = reader.string();
          break;
        case 2:
          message.questionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLiveQuizQuestionReq {
    return {
      quizId: isSet(object.quizId) ? String(object.quizId) : "",
      questionId: isSet(object.questionId) ? String(object.questionId) : "",
    };
  },

  toJSON(message: GetLiveQuizQuestionReq): unknown {
    const obj: any = {};
    message.quizId !== undefined && (obj.quizId = message.quizId);
    message.questionId !== undefined && (obj.questionId = message.questionId);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetLiveQuizQuestionReq>, I>>(
    base?: I,
  ): GetLiveQuizQuestionReq {
    return GetLiveQuizQuestionReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetLiveQuizQuestionReq>, I>>(
    object: I,
  ): GetLiveQuizQuestionReq {
    const message = createBaseGetLiveQuizQuestionReq();
    message.quizId = object.quizId ?? "";
    message.questionId = object.questionId ?? "";
    return message;
  },
};

function createBaseGetLiveQuizQuestionRes(): GetLiveQuizQuestionRes {
  return { question: undefined };
}

export const GetLiveQuizQuestionRes = {
  encode(
    message: GetLiveQuizQuestionRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.question !== undefined) {
      Question.encode(message.question, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetLiveQuizQuestionRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLiveQuizQuestionRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.question = Question.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLiveQuizQuestionRes {
    return {
      question: isSet(object.question)
        ? Question.fromJSON(object.question)
        : undefined,
    };
  },

  toJSON(message: GetLiveQuizQuestionRes): unknown {
    const obj: any = {};
    message.question !== undefined &&
      (obj.question = message.question
        ? Question.toJSON(message.question)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetLiveQuizQuestionRes>, I>>(
    base?: I,
  ): GetLiveQuizQuestionRes {
    return GetLiveQuizQuestionRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetLiveQuizQuestionRes>, I>>(
    object: I,
  ): GetLiveQuizQuestionRes {
    const message = createBaseGetLiveQuizQuestionRes();
    message.question =
      object.question !== undefined && object.question !== null
        ? Question.fromPartial(object.question)
        : undefined;
    return message;
  },
};

function createBaseGetLiveQuizQuestionsReq(): GetLiveQuizQuestionsReq {
  return { quizId: "" };
}

export const GetLiveQuizQuestionsReq = {
  encode(
    message: GetLiveQuizQuestionsReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.quizId !== "") {
      writer.uint32(10).string(message.quizId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetLiveQuizQuestionsReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLiveQuizQuestionsReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quizId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLiveQuizQuestionsReq {
    return { quizId: isSet(object.quizId) ? String(object.quizId) : "" };
  },

  toJSON(message: GetLiveQuizQuestionsReq): unknown {
    const obj: any = {};
    message.quizId !== undefined && (obj.quizId = message.quizId);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetLiveQuizQuestionsReq>, I>>(
    base?: I,
  ): GetLiveQuizQuestionsReq {
    return GetLiveQuizQuestionsReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetLiveQuizQuestionsReq>, I>>(
    object: I,
  ): GetLiveQuizQuestionsReq {
    const message = createBaseGetLiveQuizQuestionsReq();
    message.quizId = object.quizId ?? "";
    return message;
  },
};

function createBaseGetLiveQuizQuestionsRes(): GetLiveQuizQuestionsRes {
  return { questions: [], total: 0 };
}

export const GetLiveQuizQuestionsRes = {
  encode(
    message: GetLiveQuizQuestionsRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.questions) {
      Question.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total !== 0) {
      writer.uint32(16).uint32(message.total);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetLiveQuizQuestionsRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLiveQuizQuestionsRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.questions.push(Question.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLiveQuizQuestionsRes {
    return {
      questions: Array.isArray(object?.questions)
        ? object.questions.map((e: any) => Question.fromJSON(e))
        : [],
      total: isSet(object.total) ? Number(object.total) : 0,
    };
  },

  toJSON(message: GetLiveQuizQuestionsRes): unknown {
    const obj: any = {};
    if (message.questions) {
      obj.questions = message.questions.map((e) =>
        e ? Question.toJSON(e) : undefined,
      );
    } else {
      obj.questions = [];
    }
    message.total !== undefined && (obj.total = Math.round(message.total));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetLiveQuizQuestionsRes>, I>>(
    base?: I,
  ): GetLiveQuizQuestionsRes {
    return GetLiveQuizQuestionsRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetLiveQuizQuestionsRes>, I>>(
    object: I,
  ): GetLiveQuizQuestionsRes {
    const message = createBaseGetLiveQuizQuestionsRes();
    message.questions =
      object.questions?.map((e) => Question.fromPartial(e)) || [];
    message.total = object.total ?? 0;
    return message;
  },
};

function createBaseSetQuizStatusEmptyReq(): SetQuizStatusEmptyReq {
  return { quizId: "" };
}

export const SetQuizStatusEmptyReq = {
  encode(
    message: SetQuizStatusEmptyReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.quizId !== "") {
      writer.uint32(10).string(message.quizId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): SetQuizStatusEmptyReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetQuizStatusEmptyReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quizId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetQuizStatusEmptyReq {
    return { quizId: isSet(object.quizId) ? String(object.quizId) : "" };
  },

  toJSON(message: SetQuizStatusEmptyReq): unknown {
    const obj: any = {};
    message.quizId !== undefined && (obj.quizId = message.quizId);
    return obj;
  },

  create<I extends Exact<DeepPartial<SetQuizStatusEmptyReq>, I>>(
    base?: I,
  ): SetQuizStatusEmptyReq {
    return SetQuizStatusEmptyReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SetQuizStatusEmptyReq>, I>>(
    object: I,
  ): SetQuizStatusEmptyReq {
    const message = createBaseSetQuizStatusEmptyReq();
    message.quizId = object.quizId ?? "";
    return message;
  },
};

function createBaseSetQuizStatusEmptyRes(): SetQuizStatusEmptyRes {
  return { quiz: undefined };
}

export const SetQuizStatusEmptyRes = {
  encode(
    message: SetQuizStatusEmptyRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.quiz !== undefined) {
      LiveQuiz.encode(message.quiz, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): SetQuizStatusEmptyRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetQuizStatusEmptyRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quiz = LiveQuiz.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetQuizStatusEmptyRes {
    return {
      quiz: isSet(object.quiz) ? LiveQuiz.fromJSON(object.quiz) : undefined,
    };
  },

  toJSON(message: SetQuizStatusEmptyRes): unknown {
    const obj: any = {};
    message.quiz !== undefined &&
      (obj.quiz = message.quiz ? LiveQuiz.toJSON(message.quiz) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<SetQuizStatusEmptyRes>, I>>(
    base?: I,
  ): SetQuizStatusEmptyRes {
    return SetQuizStatusEmptyRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SetQuizStatusEmptyRes>, I>>(
    object: I,
  ): SetQuizStatusEmptyRes {
    const message = createBaseSetQuizStatusEmptyRes();
    message.quiz =
      object.quiz !== undefined && object.quiz !== null
        ? LiveQuiz.fromPartial(object.quiz)
        : undefined;
    return message;
  },
};

function createBaseSetQuizStatusRankReq(): SetQuizStatusRankReq {
  return { quizId: "" };
}

export const SetQuizStatusRankReq = {
  encode(
    message: SetQuizStatusRankReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.quizId !== "") {
      writer.uint32(10).string(message.quizId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): SetQuizStatusRankReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetQuizStatusRankReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quizId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetQuizStatusRankReq {
    return { quizId: isSet(object.quizId) ? String(object.quizId) : "" };
  },

  toJSON(message: SetQuizStatusRankReq): unknown {
    const obj: any = {};
    message.quizId !== undefined && (obj.quizId = message.quizId);
    return obj;
  },

  create<I extends Exact<DeepPartial<SetQuizStatusRankReq>, I>>(
    base?: I,
  ): SetQuizStatusRankReq {
    return SetQuizStatusRankReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SetQuizStatusRankReq>, I>>(
    object: I,
  ): SetQuizStatusRankReq {
    const message = createBaseSetQuizStatusRankReq();
    message.quizId = object.quizId ?? "";
    return message;
  },
};

function createBaseSetQuizStatusRankRes(): SetQuizStatusRankRes {
  return { quiz: undefined };
}

export const SetQuizStatusRankRes = {
  encode(
    message: SetQuizStatusRankRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.quiz !== undefined) {
      LiveQuiz.encode(message.quiz, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): SetQuizStatusRankRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetQuizStatusRankRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quiz = LiveQuiz.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetQuizStatusRankRes {
    return {
      quiz: isSet(object.quiz) ? LiveQuiz.fromJSON(object.quiz) : undefined,
    };
  },

  toJSON(message: SetQuizStatusRankRes): unknown {
    const obj: any = {};
    message.quiz !== undefined &&
      (obj.quiz = message.quiz ? LiveQuiz.toJSON(message.quiz) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<SetQuizStatusRankRes>, I>>(
    base?: I,
  ): SetQuizStatusRankRes {
    return SetQuizStatusRankRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SetQuizStatusRankRes>, I>>(
    object: I,
  ): SetQuizStatusRankRes {
    const message = createBaseSetQuizStatusRankRes();
    message.quiz =
      object.quiz !== undefined && object.quiz !== null
        ? LiveQuiz.fromPartial(object.quiz)
        : undefined;
    return message;
  },
};

function createBaseSetQuizStatusQuestionReq(): SetQuizStatusQuestionReq {
  return { quizId: "", questionId: "" };
}

export const SetQuizStatusQuestionReq = {
  encode(
    message: SetQuizStatusQuestionReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.quizId !== "") {
      writer.uint32(10).string(message.quizId);
    }
    if (message.questionId !== "") {
      writer.uint32(18).string(message.questionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): SetQuizStatusQuestionReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetQuizStatusQuestionReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quizId = reader.string();
          break;
        case 2:
          message.questionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetQuizStatusQuestionReq {
    return {
      quizId: isSet(object.quizId) ? String(object.quizId) : "",
      questionId: isSet(object.questionId) ? String(object.questionId) : "",
    };
  },

  toJSON(message: SetQuizStatusQuestionReq): unknown {
    const obj: any = {};
    message.quizId !== undefined && (obj.quizId = message.quizId);
    message.questionId !== undefined && (obj.questionId = message.questionId);
    return obj;
  },

  create<I extends Exact<DeepPartial<SetQuizStatusQuestionReq>, I>>(
    base?: I,
  ): SetQuizStatusQuestionReq {
    return SetQuizStatusQuestionReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SetQuizStatusQuestionReq>, I>>(
    object: I,
  ): SetQuizStatusQuestionReq {
    const message = createBaseSetQuizStatusQuestionReq();
    message.quizId = object.quizId ?? "";
    message.questionId = object.questionId ?? "";
    return message;
  },
};

function createBaseSetQuizStatusQuestionRes(): SetQuizStatusQuestionRes {
  return { quiz: undefined };
}

export const SetQuizStatusQuestionRes = {
  encode(
    message: SetQuizStatusQuestionRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.quiz !== undefined) {
      LiveQuiz.encode(message.quiz, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): SetQuizStatusQuestionRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetQuizStatusQuestionRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quiz = LiveQuiz.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetQuizStatusQuestionRes {
    return {
      quiz: isSet(object.quiz) ? LiveQuiz.fromJSON(object.quiz) : undefined,
    };
  },

  toJSON(message: SetQuizStatusQuestionRes): unknown {
    const obj: any = {};
    message.quiz !== undefined &&
      (obj.quiz = message.quiz ? LiveQuiz.toJSON(message.quiz) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<SetQuizStatusQuestionRes>, I>>(
    base?: I,
  ): SetQuizStatusQuestionRes {
    return SetQuizStatusQuestionRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SetQuizStatusQuestionRes>, I>>(
    object: I,
  ): SetQuizStatusQuestionRes {
    const message = createBaseSetQuizStatusQuestionRes();
    message.quiz =
      object.quiz !== undefined && object.quiz !== null
        ? LiveQuiz.fromPartial(object.quiz)
        : undefined;
    return message;
  },
};

function createBaseRegisterParticipantReq(): RegisterParticipantReq {
  return { quizId: "", name: "", email: "" };
}

export const RegisterParticipantReq = {
  encode(
    message: RegisterParticipantReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.quizId !== "") {
      writer.uint32(10).string(message.quizId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): RegisterParticipantReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterParticipantReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quizId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.email = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterParticipantReq {
    return {
      quizId: isSet(object.quizId) ? String(object.quizId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      email: isSet(object.email) ? String(object.email) : "",
    };
  },

  toJSON(message: RegisterParticipantReq): unknown {
    const obj: any = {};
    message.quizId !== undefined && (obj.quizId = message.quizId);
    message.name !== undefined && (obj.name = message.name);
    message.email !== undefined && (obj.email = message.email);
    return obj;
  },

  create<I extends Exact<DeepPartial<RegisterParticipantReq>, I>>(
    base?: I,
  ): RegisterParticipantReq {
    return RegisterParticipantReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RegisterParticipantReq>, I>>(
    object: I,
  ): RegisterParticipantReq {
    const message = createBaseRegisterParticipantReq();
    message.quizId = object.quizId ?? "";
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    return message;
  },
};

function createBaseRegisterParticipantRes(): RegisterParticipantRes {
  return { participant: undefined };
}

export const RegisterParticipantRes = {
  encode(
    message: RegisterParticipantRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.participant !== undefined) {
      Participant.encode(
        message.participant,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): RegisterParticipantRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterParticipantRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.participant = Participant.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterParticipantRes {
    return {
      participant: isSet(object.participant)
        ? Participant.fromJSON(object.participant)
        : undefined,
    };
  },

  toJSON(message: RegisterParticipantRes): unknown {
    const obj: any = {};
    message.participant !== undefined &&
      (obj.participant = message.participant
        ? Participant.toJSON(message.participant)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<RegisterParticipantRes>, I>>(
    base?: I,
  ): RegisterParticipantRes {
    return RegisterParticipantRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RegisterParticipantRes>, I>>(
    object: I,
  ): RegisterParticipantRes {
    const message = createBaseRegisterParticipantRes();
    message.participant =
      object.participant !== undefined && object.participant !== null
        ? Participant.fromPartial(object.participant)
        : undefined;
    return message;
  },
};

function createBaseGetParticipantsReq(): GetParticipantsReq {
  return { quizId: "", skip: 0, take: 0 };
}

export const GetParticipantsReq = {
  encode(
    message: GetParticipantsReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.quizId !== "") {
      writer.uint32(10).string(message.quizId);
    }
    if (message.skip !== 0) {
      writer.uint32(16).uint32(message.skip);
    }
    if (message.take !== 0) {
      writer.uint32(24).uint32(message.take);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetParticipantsReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetParticipantsReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quizId = reader.string();
          break;
        case 2:
          message.skip = reader.uint32();
          break;
        case 3:
          message.take = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetParticipantsReq {
    return {
      quizId: isSet(object.quizId) ? String(object.quizId) : "",
      skip: isSet(object.skip) ? Number(object.skip) : 0,
      take: isSet(object.take) ? Number(object.take) : 0,
    };
  },

  toJSON(message: GetParticipantsReq): unknown {
    const obj: any = {};
    message.quizId !== undefined && (obj.quizId = message.quizId);
    message.skip !== undefined && (obj.skip = Math.round(message.skip));
    message.take !== undefined && (obj.take = Math.round(message.take));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetParticipantsReq>, I>>(
    base?: I,
  ): GetParticipantsReq {
    return GetParticipantsReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetParticipantsReq>, I>>(
    object: I,
  ): GetParticipantsReq {
    const message = createBaseGetParticipantsReq();
    message.quizId = object.quizId ?? "";
    message.skip = object.skip ?? 0;
    message.take = object.take ?? 0;
    return message;
  },
};

function createBaseGetParticipantsRes(): GetParticipantsRes {
  return { participants: [], total: 0 };
}

export const GetParticipantsRes = {
  encode(
    message: GetParticipantsRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.participants) {
      Participant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total !== 0) {
      writer.uint32(16).uint32(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetParticipantsRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetParticipantsRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.participants.push(
            Participant.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.total = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetParticipantsRes {
    return {
      participants: Array.isArray(object?.participants)
        ? object.participants.map((e: any) => Participant.fromJSON(e))
        : [],
      total: isSet(object.total) ? Number(object.total) : 0,
    };
  },

  toJSON(message: GetParticipantsRes): unknown {
    const obj: any = {};
    if (message.participants) {
      obj.participants = message.participants.map((e) =>
        e ? Participant.toJSON(e) : undefined,
      );
    } else {
      obj.participants = [];
    }
    message.total !== undefined && (obj.total = Math.round(message.total));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetParticipantsRes>, I>>(
    base?: I,
  ): GetParticipantsRes {
    return GetParticipantsRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetParticipantsRes>, I>>(
    object: I,
  ): GetParticipantsRes {
    const message = createBaseGetParticipantsRes();
    message.participants =
      object.participants?.map((e) => Participant.fromPartial(e)) || [];
    message.total = object.total ?? 0;
    return message;
  },
};

function createBaseGetParticipantReq(): GetParticipantReq {
  return { quizId: "", participantId: "" };
}

export const GetParticipantReq = {
  encode(
    message: GetParticipantReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.quizId !== "") {
      writer.uint32(10).string(message.quizId);
    }
    if (message.participantId !== "") {
      writer.uint32(18).string(message.participantId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetParticipantReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetParticipantReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quizId = reader.string();
          break;
        case 2:
          message.participantId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetParticipantReq {
    return {
      quizId: isSet(object.quizId) ? String(object.quizId) : "",
      participantId: isSet(object.participantId)
        ? String(object.participantId)
        : "",
    };
  },

  toJSON(message: GetParticipantReq): unknown {
    const obj: any = {};
    message.quizId !== undefined && (obj.quizId = message.quizId);
    message.participantId !== undefined &&
      (obj.participantId = message.participantId);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetParticipantReq>, I>>(
    base?: I,
  ): GetParticipantReq {
    return GetParticipantReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetParticipantReq>, I>>(
    object: I,
  ): GetParticipantReq {
    const message = createBaseGetParticipantReq();
    message.quizId = object.quizId ?? "";
    message.participantId = object.participantId ?? "";
    return message;
  },
};

function createBaseGetParticipantRes(): GetParticipantRes {
  return { participant: undefined };
}

export const GetParticipantRes = {
  encode(
    message: GetParticipantRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.participant !== undefined) {
      Participant.encode(
        message.participant,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetParticipantRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetParticipantRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.participant = Participant.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetParticipantRes {
    return {
      participant: isSet(object.participant)
        ? Participant.fromJSON(object.participant)
        : undefined,
    };
  },

  toJSON(message: GetParticipantRes): unknown {
    const obj: any = {};
    message.participant !== undefined &&
      (obj.participant = message.participant
        ? Participant.toJSON(message.participant)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetParticipantRes>, I>>(
    base?: I,
  ): GetParticipantRes {
    return GetParticipantRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetParticipantRes>, I>>(
    object: I,
  ): GetParticipantRes {
    const message = createBaseGetParticipantRes();
    message.participant =
      object.participant !== undefined && object.participant !== null
        ? Participant.fromPartial(object.participant)
        : undefined;
    return message;
  },
};

function createBaseSetParticipantAnswerReq(): SetParticipantAnswerReq {
  return { quizId: "", questionId: "", participantId: "", answerIdx: 0 };
}

export const SetParticipantAnswerReq = {
  encode(
    message: SetParticipantAnswerReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.quizId !== "") {
      writer.uint32(10).string(message.quizId);
    }
    if (message.questionId !== "") {
      writer.uint32(18).string(message.questionId);
    }
    if (message.participantId !== "") {
      writer.uint32(26).string(message.participantId);
    }
    if (message.answerIdx !== 0) {
      writer.uint32(32).uint32(message.answerIdx);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): SetParticipantAnswerReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetParticipantAnswerReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quizId = reader.string();
          break;
        case 2:
          message.questionId = reader.string();
          break;
        case 3:
          message.participantId = reader.string();
          break;
        case 4:
          message.answerIdx = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetParticipantAnswerReq {
    return {
      quizId: isSet(object.quizId) ? String(object.quizId) : "",
      questionId: isSet(object.questionId) ? String(object.questionId) : "",
      participantId: isSet(object.participantId)
        ? String(object.participantId)
        : "",
      answerIdx: isSet(object.answerIdx) ? Number(object.answerIdx) : 0,
    };
  },

  toJSON(message: SetParticipantAnswerReq): unknown {
    const obj: any = {};
    message.quizId !== undefined && (obj.quizId = message.quizId);
    message.questionId !== undefined && (obj.questionId = message.questionId);
    message.participantId !== undefined &&
      (obj.participantId = message.participantId);
    message.answerIdx !== undefined &&
      (obj.answerIdx = Math.round(message.answerIdx));
    return obj;
  },

  create<I extends Exact<DeepPartial<SetParticipantAnswerReq>, I>>(
    base?: I,
  ): SetParticipantAnswerReq {
    return SetParticipantAnswerReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SetParticipantAnswerReq>, I>>(
    object: I,
  ): SetParticipantAnswerReq {
    const message = createBaseSetParticipantAnswerReq();
    message.quizId = object.quizId ?? "";
    message.questionId = object.questionId ?? "";
    message.participantId = object.participantId ?? "";
    message.answerIdx = object.answerIdx ?? 0;
    return message;
  },
};

function createBaseSetParticipantAnswerRes(): SetParticipantAnswerRes {
  return {};
}

export const SetParticipantAnswerRes = {
  encode(
    _: SetParticipantAnswerRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): SetParticipantAnswerRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetParticipantAnswerRes();
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

  fromJSON(_: any): SetParticipantAnswerRes {
    return {};
  },

  toJSON(_: SetParticipantAnswerRes): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SetParticipantAnswerRes>, I>>(
    base?: I,
  ): SetParticipantAnswerRes {
    return SetParticipantAnswerRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SetParticipantAnswerRes>, I>>(
    _: I,
  ): SetParticipantAnswerRes {
    const message = createBaseSetParticipantAnswerRes();
    return message;
  },
};

function createBaseGetRancReq(): GetRancReq {
  return { quizId: "" };
}

export const GetRancReq = {
  encode(
    message: GetRancReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.quizId !== "") {
      writer.uint32(10).string(message.quizId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRancReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRancReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quizId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRancReq {
    return { quizId: isSet(object.quizId) ? String(object.quizId) : "" };
  },

  toJSON(message: GetRancReq): unknown {
    const obj: any = {};
    message.quizId !== undefined && (obj.quizId = message.quizId);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetRancReq>, I>>(base?: I): GetRancReq {
    return GetRancReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetRancReq>, I>>(
    object: I,
  ): GetRancReq {
    const message = createBaseGetRancReq();
    message.quizId = object.quizId ?? "";
    return message;
  },
};

function createBaseGetRankRes(): GetRankRes {
  return { rank: [] };
}

export const GetRankRes = {
  encode(
    message: GetRankRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.rank) {
      ParticipantRank.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRankRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRankRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rank.push(ParticipantRank.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRankRes {
    return {
      rank: Array.isArray(object?.rank)
        ? object.rank.map((e: any) => ParticipantRank.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetRankRes): unknown {
    const obj: any = {};
    if (message.rank) {
      obj.rank = message.rank.map((e) =>
        e ? ParticipantRank.toJSON(e) : undefined,
      );
    } else {
      obj.rank = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetRankRes>, I>>(base?: I): GetRankRes {
    return GetRankRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetRankRes>, I>>(
    object: I,
  ): GetRankRes {
    const message = createBaseGetRankRes();
    message.rank =
      object.rank?.map((e) => ParticipantRank.fromPartial(e)) || [];
    return message;
  },
};

export type LiveQuizV1SrvService = typeof LiveQuizV1SrvService;
export const LiveQuizV1SrvService = {
  getLiveQuiz: {
    path: "/fy.livequiz.v1.LiveQuizV1Srv/GetLiveQuiz",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetLiveQuizReq) =>
      Buffer.from(GetLiveQuizReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetLiveQuizReq.decode(value),
    responseSerialize: (value: GetLiveQuizRes) =>
      Buffer.from(GetLiveQuizRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetLiveQuizRes.decode(value),
  },
  getLiveQuizQuestions: {
    path: "/fy.livequiz.v1.LiveQuizV1Srv/GetLiveQuizQuestions",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetLiveQuizQuestionsReq) =>
      Buffer.from(GetLiveQuizQuestionsReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetLiveQuizQuestionsReq.decode(value),
    responseSerialize: (value: GetLiveQuizQuestionsRes) =>
      Buffer.from(GetLiveQuizQuestionsRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      GetLiveQuizQuestionsRes.decode(value),
  },
  getLiveQuizQuestion: {
    path: "/fy.livequiz.v1.LiveQuizV1Srv/GetLiveQuizQuestion",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetLiveQuizQuestionReq) =>
      Buffer.from(GetLiveQuizQuestionReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetLiveQuizQuestionReq.decode(value),
    responseSerialize: (value: GetLiveQuizQuestionRes) =>
      Buffer.from(GetLiveQuizQuestionRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      GetLiveQuizQuestionRes.decode(value),
  },
  setQuizStatusEmpty: {
    path: "/fy.livequiz.v1.LiveQuizV1Srv/SetQuizStatusEmpty",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetQuizStatusEmptyReq) =>
      Buffer.from(SetQuizStatusEmptyReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetQuizStatusEmptyReq.decode(value),
    responseSerialize: (value: SetQuizStatusEmptyRes) =>
      Buffer.from(SetQuizStatusEmptyRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SetQuizStatusEmptyRes.decode(value),
  },
  setQuizStatusRank: {
    path: "/fy.livequiz.v1.LiveQuizV1Srv/SetQuizStatusRank",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetQuizStatusRankReq) =>
      Buffer.from(SetQuizStatusRankReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetQuizStatusRankReq.decode(value),
    responseSerialize: (value: SetQuizStatusRankRes) =>
      Buffer.from(SetQuizStatusRankRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SetQuizStatusRankRes.decode(value),
  },
  setQuizStatusQuestion: {
    path: "/fy.livequiz.v1.LiveQuizV1Srv/SetQuizStatusQuestion",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetQuizStatusQuestionReq) =>
      Buffer.from(SetQuizStatusQuestionReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      SetQuizStatusQuestionReq.decode(value),
    responseSerialize: (value: SetQuizStatusQuestionRes) =>
      Buffer.from(SetQuizStatusQuestionRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      SetQuizStatusQuestionRes.decode(value),
  },
  registerParticipant: {
    path: "/fy.livequiz.v1.LiveQuizV1Srv/RegisterParticipant",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RegisterParticipantReq) =>
      Buffer.from(RegisterParticipantReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RegisterParticipantReq.decode(value),
    responseSerialize: (value: RegisterParticipantRes) =>
      Buffer.from(RegisterParticipantRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      RegisterParticipantRes.decode(value),
  },
  getParticipants: {
    path: "/fy.livequiz.v1.LiveQuizV1Srv/GetParticipants",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetParticipantsReq) =>
      Buffer.from(GetParticipantsReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetParticipantsReq.decode(value),
    responseSerialize: (value: GetParticipantsRes) =>
      Buffer.from(GetParticipantsRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetParticipantsRes.decode(value),
  },
  getParticipant: {
    path: "/fy.livequiz.v1.LiveQuizV1Srv/GetParticipant",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetParticipantReq) =>
      Buffer.from(GetParticipantReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetParticipantReq.decode(value),
    responseSerialize: (value: GetParticipantRes) =>
      Buffer.from(GetParticipantRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetParticipantRes.decode(value),
  },
  setParticipantAnswer: {
    path: "/fy.livequiz.v1.LiveQuizV1Srv/SetParticipantAnswer",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetParticipantAnswerReq) =>
      Buffer.from(SetParticipantAnswerReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      SetParticipantAnswerReq.decode(value),
    responseSerialize: (value: SetParticipantAnswerRes) =>
      Buffer.from(SetParticipantAnswerRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      SetParticipantAnswerRes.decode(value),
  },
  getRank: {
    path: "/fy.livequiz.v1.LiveQuizV1Srv/GetRank",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetRancReq) =>
      Buffer.from(GetRancReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetRancReq.decode(value),
    responseSerialize: (value: GetRankRes) =>
      Buffer.from(GetRankRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetRankRes.decode(value),
  },
} as const;

export interface LiveQuizV1SrvServer extends UntypedServiceImplementation {
  getLiveQuiz: handleUnaryCall<GetLiveQuizReq, GetLiveQuizRes>;
  getLiveQuizQuestions: handleUnaryCall<
    GetLiveQuizQuestionsReq,
    GetLiveQuizQuestionsRes
  >;
  getLiveQuizQuestion: handleUnaryCall<
    GetLiveQuizQuestionReq,
    GetLiveQuizQuestionRes
  >;
  setQuizStatusEmpty: handleUnaryCall<
    SetQuizStatusEmptyReq,
    SetQuizStatusEmptyRes
  >;
  setQuizStatusRank: handleUnaryCall<
    SetQuizStatusRankReq,
    SetQuizStatusRankRes
  >;
  setQuizStatusQuestion: handleUnaryCall<
    SetQuizStatusQuestionReq,
    SetQuizStatusQuestionRes
  >;
  registerParticipant: handleUnaryCall<
    RegisterParticipantReq,
    RegisterParticipantRes
  >;
  getParticipants: handleUnaryCall<GetParticipantsReq, GetParticipantsRes>;
  getParticipant: handleUnaryCall<GetParticipantReq, GetParticipantRes>;
  setParticipantAnswer: handleUnaryCall<
    SetParticipantAnswerReq,
    SetParticipantAnswerRes
  >;
  getRank: handleUnaryCall<GetRancReq, GetRankRes>;
}

export interface LiveQuizV1SrvClient extends Client {
  getLiveQuiz(
    request: GetLiveQuizReq,
    callback: (error: ServiceError | null, response: GetLiveQuizRes) => void,
  ): ClientUnaryCall;
  getLiveQuiz(
    request: GetLiveQuizReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetLiveQuizRes) => void,
  ): ClientUnaryCall;
  getLiveQuiz(
    request: GetLiveQuizReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetLiveQuizRes) => void,
  ): ClientUnaryCall;
  getLiveQuizQuestions(
    request: GetLiveQuizQuestionsReq,
    callback: (
      error: ServiceError | null,
      response: GetLiveQuizQuestionsRes,
    ) => void,
  ): ClientUnaryCall;
  getLiveQuizQuestions(
    request: GetLiveQuizQuestionsReq,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetLiveQuizQuestionsRes,
    ) => void,
  ): ClientUnaryCall;
  getLiveQuizQuestions(
    request: GetLiveQuizQuestionsReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetLiveQuizQuestionsRes,
    ) => void,
  ): ClientUnaryCall;
  getLiveQuizQuestion(
    request: GetLiveQuizQuestionReq,
    callback: (
      error: ServiceError | null,
      response: GetLiveQuizQuestionRes,
    ) => void,
  ): ClientUnaryCall;
  getLiveQuizQuestion(
    request: GetLiveQuizQuestionReq,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetLiveQuizQuestionRes,
    ) => void,
  ): ClientUnaryCall;
  getLiveQuizQuestion(
    request: GetLiveQuizQuestionReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetLiveQuizQuestionRes,
    ) => void,
  ): ClientUnaryCall;
  setQuizStatusEmpty(
    request: SetQuizStatusEmptyReq,
    callback: (
      error: ServiceError | null,
      response: SetQuizStatusEmptyRes,
    ) => void,
  ): ClientUnaryCall;
  setQuizStatusEmpty(
    request: SetQuizStatusEmptyReq,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: SetQuizStatusEmptyRes,
    ) => void,
  ): ClientUnaryCall;
  setQuizStatusEmpty(
    request: SetQuizStatusEmptyReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: SetQuizStatusEmptyRes,
    ) => void,
  ): ClientUnaryCall;
  setQuizStatusRank(
    request: SetQuizStatusRankReq,
    callback: (
      error: ServiceError | null,
      response: SetQuizStatusRankRes,
    ) => void,
  ): ClientUnaryCall;
  setQuizStatusRank(
    request: SetQuizStatusRankReq,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: SetQuizStatusRankRes,
    ) => void,
  ): ClientUnaryCall;
  setQuizStatusRank(
    request: SetQuizStatusRankReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: SetQuizStatusRankRes,
    ) => void,
  ): ClientUnaryCall;
  setQuizStatusQuestion(
    request: SetQuizStatusQuestionReq,
    callback: (
      error: ServiceError | null,
      response: SetQuizStatusQuestionRes,
    ) => void,
  ): ClientUnaryCall;
  setQuizStatusQuestion(
    request: SetQuizStatusQuestionReq,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: SetQuizStatusQuestionRes,
    ) => void,
  ): ClientUnaryCall;
  setQuizStatusQuestion(
    request: SetQuizStatusQuestionReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: SetQuizStatusQuestionRes,
    ) => void,
  ): ClientUnaryCall;
  registerParticipant(
    request: RegisterParticipantReq,
    callback: (
      error: ServiceError | null,
      response: RegisterParticipantRes,
    ) => void,
  ): ClientUnaryCall;
  registerParticipant(
    request: RegisterParticipantReq,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: RegisterParticipantRes,
    ) => void,
  ): ClientUnaryCall;
  registerParticipant(
    request: RegisterParticipantReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: RegisterParticipantRes,
    ) => void,
  ): ClientUnaryCall;
  getParticipants(
    request: GetParticipantsReq,
    callback: (
      error: ServiceError | null,
      response: GetParticipantsRes,
    ) => void,
  ): ClientUnaryCall;
  getParticipants(
    request: GetParticipantsReq,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetParticipantsRes,
    ) => void,
  ): ClientUnaryCall;
  getParticipants(
    request: GetParticipantsReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetParticipantsRes,
    ) => void,
  ): ClientUnaryCall;
  getParticipant(
    request: GetParticipantReq,
    callback: (error: ServiceError | null, response: GetParticipantRes) => void,
  ): ClientUnaryCall;
  getParticipant(
    request: GetParticipantReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetParticipantRes) => void,
  ): ClientUnaryCall;
  getParticipant(
    request: GetParticipantReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetParticipantRes) => void,
  ): ClientUnaryCall;
  setParticipantAnswer(
    request: SetParticipantAnswerReq,
    callback: (
      error: ServiceError | null,
      response: SetParticipantAnswerRes,
    ) => void,
  ): ClientUnaryCall;
  setParticipantAnswer(
    request: SetParticipantAnswerReq,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: SetParticipantAnswerRes,
    ) => void,
  ): ClientUnaryCall;
  setParticipantAnswer(
    request: SetParticipantAnswerReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: SetParticipantAnswerRes,
    ) => void,
  ): ClientUnaryCall;
  getRank(
    request: GetRancReq,
    callback: (error: ServiceError | null, response: GetRankRes) => void,
  ): ClientUnaryCall;
  getRank(
    request: GetRancReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetRankRes) => void,
  ): ClientUnaryCall;
  getRank(
    request: GetRancReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetRankRes) => void,
  ): ClientUnaryCall;
}

export const LiveQuizV1SrvClient = makeGenericClientConstructor(
  LiveQuizV1SrvService,
  "fy.livequiz.v1.LiveQuizV1Srv",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): LiveQuizV1SrvClient;
  service: typeof LiveQuizV1SrvService;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
