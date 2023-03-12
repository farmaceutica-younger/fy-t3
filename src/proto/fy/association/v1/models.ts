/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "fy.association.v1";

export enum MemberStatus {
  NONE = 0,
  REGISTERED = 1,
  QUESTIONAIRRE_SUBMITTED = 2,
  APPROVED = 3,
  MEMBER = 4,
  UNRECOGNIZED = -1,
}

export function memberStatusFromJSON(object: any): MemberStatus {
  switch (object) {
    case 0:
    case "NONE":
      return MemberStatus.NONE;
    case 1:
    case "REGISTERED":
      return MemberStatus.REGISTERED;
    case 2:
    case "QUESTIONAIRRE_SUBMITTED":
      return MemberStatus.QUESTIONAIRRE_SUBMITTED;
    case 3:
    case "APPROVED":
      return MemberStatus.APPROVED;
    case 4:
    case "MEMBER":
      return MemberStatus.MEMBER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MemberStatus.UNRECOGNIZED;
  }
}

export function memberStatusToJSON(object: MemberStatus): string {
  switch (object) {
    case MemberStatus.NONE:
      return "NONE";
    case MemberStatus.REGISTERED:
      return "REGISTERED";
    case MemberStatus.QUESTIONAIRRE_SUBMITTED:
      return "QUESTIONAIRRE_SUBMITTED";
    case MemberStatus.APPROVED:
      return "APPROVED";
    case MemberStatus.MEMBER:
      return "MEMBER";
    case MemberStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Member {
  memberId: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  memberSince: Date | undefined;
  linkedin?: string | undefined;
  telegram?: string | undefined;
  status: MemberStatus;
}

export interface Questionairre {
  version: number;
  questions: Questions | undefined;
  createdAt: Date | undefined;
}

export interface Questions {
  questions: Question[];
}

export interface Question {
  cuid: string;
  description: string;
  type: string;
  options: string[];
  required: boolean;
}

function createBaseMember(): Member {
  return {
    memberId: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    createdAt: undefined,
    updatedAt: undefined,
    memberSince: undefined,
    linkedin: undefined,
    telegram: undefined,
    status: 0,
  };
}

export const Member = {
  encode(message: Member, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.memberId !== "") {
      writer.uint32(10).string(message.memberId);
    }
    if (message.firstName !== "") {
      writer.uint32(18).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(26).string(message.lastName);
    }
    if (message.email !== "") {
      writer.uint32(34).string(message.email);
    }
    if (message.role !== "") {
      writer.uint32(42).string(message.role);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(58).fork()).ldelim();
    }
    if (message.memberSince !== undefined) {
      Timestamp.encode(toTimestamp(message.memberSince), writer.uint32(66).fork()).ldelim();
    }
    if (message.linkedin !== undefined) {
      writer.uint32(74).string(message.linkedin);
    }
    if (message.telegram !== undefined) {
      writer.uint32(82).string(message.telegram);
    }
    if (message.status !== 0) {
      writer.uint32(88).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Member {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberId = reader.string();
          break;
        case 2:
          message.firstName = reader.string();
          break;
        case 3:
          message.lastName = reader.string();
          break;
        case 4:
          message.email = reader.string();
          break;
        case 5:
          message.role = reader.string();
          break;
        case 6:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 8:
          message.memberSince = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 9:
          message.linkedin = reader.string();
          break;
        case 10:
          message.telegram = reader.string();
          break;
        case 11:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Member {
    return {
      memberId: isSet(object.memberId) ? String(object.memberId) : "",
      firstName: isSet(object.firstName) ? String(object.firstName) : "",
      lastName: isSet(object.lastName) ? String(object.lastName) : "",
      email: isSet(object.email) ? String(object.email) : "",
      role: isSet(object.role) ? String(object.role) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
      memberSince: isSet(object.memberSince) ? fromJsonTimestamp(object.memberSince) : undefined,
      linkedin: isSet(object.linkedin) ? String(object.linkedin) : undefined,
      telegram: isSet(object.telegram) ? String(object.telegram) : undefined,
      status: isSet(object.status) ? memberStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: Member): unknown {
    const obj: any = {};
    message.memberId !== undefined && (obj.memberId = message.memberId);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.email !== undefined && (obj.email = message.email);
    message.role !== undefined && (obj.role = message.role);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
    message.memberSince !== undefined && (obj.memberSince = message.memberSince.toISOString());
    message.linkedin !== undefined && (obj.linkedin = message.linkedin);
    message.telegram !== undefined && (obj.telegram = message.telegram);
    message.status !== undefined && (obj.status = memberStatusToJSON(message.status));
    return obj;
  },

  create<I extends Exact<DeepPartial<Member>, I>>(base?: I): Member {
    return Member.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Member>, I>>(object: I): Member {
    const message = createBaseMember();
    message.memberId = object.memberId ?? "";
    message.firstName = object.firstName ?? "";
    message.lastName = object.lastName ?? "";
    message.email = object.email ?? "";
    message.role = object.role ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.memberSince = object.memberSince ?? undefined;
    message.linkedin = object.linkedin ?? undefined;
    message.telegram = object.telegram ?? undefined;
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseQuestionairre(): Questionairre {
  return { version: 0, questions: undefined, createdAt: undefined };
}

export const Questionairre = {
  encode(message: Questionairre, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== 0) {
      writer.uint32(8).uint32(message.version);
    }
    if (message.questions !== undefined) {
      Questions.encode(message.questions, writer.uint32(18).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Questionairre {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestionairre();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.uint32();
          break;
        case 2:
          message.questions = Questions.decode(reader, reader.uint32());
          break;
        case 3:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Questionairre {
    return {
      version: isSet(object.version) ? Number(object.version) : 0,
      questions: isSet(object.questions) ? Questions.fromJSON(object.questions) : undefined,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
    };
  },

  toJSON(message: Questionairre): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = Math.round(message.version));
    message.questions !== undefined &&
      (obj.questions = message.questions ? Questions.toJSON(message.questions) : undefined);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
    return obj;
  },

  create<I extends Exact<DeepPartial<Questionairre>, I>>(base?: I): Questionairre {
    return Questionairre.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Questionairre>, I>>(object: I): Questionairre {
    const message = createBaseQuestionairre();
    message.version = object.version ?? 0;
    message.questions = (object.questions !== undefined && object.questions !== null)
      ? Questions.fromPartial(object.questions)
      : undefined;
    message.createdAt = object.createdAt ?? undefined;
    return message;
  },
};

function createBaseQuestions(): Questions {
  return { questions: [] };
}

export const Questions = {
  encode(message: Questions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.questions) {
      Question.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Questions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.questions.push(Question.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Questions {
    return {
      questions: Array.isArray(object?.questions) ? object.questions.map((e: any) => Question.fromJSON(e)) : [],
    };
  },

  toJSON(message: Questions): unknown {
    const obj: any = {};
    if (message.questions) {
      obj.questions = message.questions.map((e) => e ? Question.toJSON(e) : undefined);
    } else {
      obj.questions = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Questions>, I>>(base?: I): Questions {
    return Questions.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Questions>, I>>(object: I): Questions {
    const message = createBaseQuestions();
    message.questions = object.questions?.map((e) => Question.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQuestion(): Question {
  return { cuid: "", description: "", type: "", options: [], required: false };
}

export const Question = {
  encode(message: Question, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cuid !== "") {
      writer.uint32(10).string(message.cuid);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    for (const v of message.options) {
      writer.uint32(34).string(v!);
    }
    if (message.required === true) {
      writer.uint32(40).bool(message.required);
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
          message.cuid = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.type = reader.string();
          break;
        case 4:
          message.options.push(reader.string());
          break;
        case 5:
          message.required = reader.bool();
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
      cuid: isSet(object.cuid) ? String(object.cuid) : "",
      description: isSet(object.description) ? String(object.description) : "",
      type: isSet(object.type) ? String(object.type) : "",
      options: Array.isArray(object?.options) ? object.options.map((e: any) => String(e)) : [],
      required: isSet(object.required) ? Boolean(object.required) : false,
    };
  },

  toJSON(message: Question): unknown {
    const obj: any = {};
    message.cuid !== undefined && (obj.cuid = message.cuid);
    message.description !== undefined && (obj.description = message.description);
    message.type !== undefined && (obj.type = message.type);
    if (message.options) {
      obj.options = message.options.map((e) => e);
    } else {
      obj.options = [];
    }
    message.required !== undefined && (obj.required = message.required);
    return obj;
  },

  create<I extends Exact<DeepPartial<Question>, I>>(base?: I): Question {
    return Question.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Question>, I>>(object: I): Question {
    const message = createBaseQuestion();
    message.cuid = object.cuid ?? "";
    message.description = object.description ?? "";
    message.type = object.type ?? "";
    message.options = object.options?.map((e) => e) || [];
    message.required = object.required ?? false;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

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
