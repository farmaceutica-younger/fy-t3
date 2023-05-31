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
import { Member, Question, Questionairre } from "./models";

export const protobufPackage = "fy.association.v1";

export interface NotFoundErr {}

export interface GetMembersReq {
  skip: number;
  take: number;
  query?: string | undefined;
}

export interface GetMembersRes {
  members: Member[];
  total: number;
}

export interface GetMemberAnswersReq {
  memberId: string;
}

export interface GetMemberAnswersRes {
  answers: MemberAnswers[];
}

export interface MemberAnswers {
  version: number;
  answers: { [key: string]: string };
}

export interface MemberAnswers_AnswersEntry {
  key: string;
  value: string;
}

export interface GetMemberReq {
  memberId: string;
}

export interface GetMemberRes {
  member?: Member | undefined;
  notFound?: NotFoundErr | undefined;
}

export interface AddMemberReq {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  linkedin?: string | undefined;
  telegram?: string | undefined;
}

export interface AddMemberRes {
  member: Member | undefined;
}

export interface ApproveMemberReq {
  memberId: string;
}

export interface ApproveMemberRes {
  member: Member | undefined;
}

export interface MemberPaidMembershipFeeReq {
  memberId: string;
}

export interface MemberPaidMembershipFeeRes {
  member: Member | undefined;
}

export interface RegisterMemberReq {
  memberId: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  linkedin?: string | undefined;
  telegram?: string | undefined;
}

export interface RegisterMemberRes {
  member: Member | undefined;
}

export interface MemberAnswerQuestionairreReq {
  memberId: string;
  questionairreVerions: number;
  answers: { [key: string]: string };
}

export interface MemberAnswerQuestionairreReq_AnswersEntry {
  key: string;
  value: string;
}

export interface MemberAnswerQuestionairreRes {
  member: Member | undefined;
}

export interface UpdateMemberReq {
  memberId: string;
  firstName?: string | undefined;
  lastName?: string | undefined;
  email?: string | undefined;
  role?: string | undefined;
  linkedin?: string | undefined;
  telegram?: string | undefined;
}

export interface UpdateMemberRes {
  member?: Member | undefined;
  notFound?: NotFoundErr | undefined;
}

export interface RemoveMemberReq {
  memberId: string;
}

export interface RemoveMemberRes {
  member?: Member | undefined;
  notFound?: NotFoundErr | undefined;
}

export interface GetAssociationQuestionarreReq {
  version: number;
}

export interface GetAssociationQuestionarreRes {
  questionairre: Questionairre | undefined;
}

export interface GetCurrentAssociationQuestionarreReq {}

export interface GetCurrentAssociationQuestionarreRes {
  questionairre: Questionairre | undefined;
}

export interface UpdateAssociationQuestionarreReq {
  questions: Question[];
}

export interface UpdateAssociationQuestionarreRes {
  questionairre: Questionairre | undefined;
}

function createBaseNotFoundErr(): NotFoundErr {
  return {};
}

export const NotFoundErr = {
  encode(_: NotFoundErr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NotFoundErr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotFoundErr();
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

  fromJSON(_: any): NotFoundErr {
    return {};
  },

  toJSON(_: NotFoundErr): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<NotFoundErr>, I>>(base?: I): NotFoundErr {
    return NotFoundErr.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NotFoundErr>, I>>(_: I): NotFoundErr {
    const message = createBaseNotFoundErr();
    return message;
  },
};

function createBaseGetMembersReq(): GetMembersReq {
  return { skip: 0, take: 0, query: undefined };
}

export const GetMembersReq = {
  encode(
    message: GetMembersReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.skip !== 0) {
      writer.uint32(8).uint32(message.skip);
    }
    if (message.take !== 0) {
      writer.uint32(16).uint32(message.take);
    }
    if (message.query !== undefined) {
      writer.uint32(26).string(message.query);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMembersReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMembersReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.skip = reader.uint32();
          break;
        case 2:
          message.take = reader.uint32();
          break;
        case 3:
          message.query = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMembersReq {
    return {
      skip: isSet(object.skip) ? Number(object.skip) : 0,
      take: isSet(object.take) ? Number(object.take) : 0,
      query: isSet(object.query) ? String(object.query) : undefined,
    };
  },

  toJSON(message: GetMembersReq): unknown {
    const obj: any = {};
    message.skip !== undefined && (obj.skip = Math.round(message.skip));
    message.take !== undefined && (obj.take = Math.round(message.take));
    message.query !== undefined && (obj.query = message.query);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMembersReq>, I>>(
    base?: I,
  ): GetMembersReq {
    return GetMembersReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetMembersReq>, I>>(
    object: I,
  ): GetMembersReq {
    const message = createBaseGetMembersReq();
    message.skip = object.skip ?? 0;
    message.take = object.take ?? 0;
    message.query = object.query ?? undefined;
    return message;
  },
};

function createBaseGetMembersRes(): GetMembersRes {
  return { members: [], total: 0 };
}

export const GetMembersRes = {
  encode(
    message: GetMembersRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.members) {
      Member.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total !== 0) {
      writer.uint32(16).uint32(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMembersRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMembersRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.members.push(Member.decode(reader, reader.uint32()));
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

  fromJSON(object: any): GetMembersRes {
    return {
      members: Array.isArray(object?.members)
        ? object.members.map((e: any) => Member.fromJSON(e))
        : [],
      total: isSet(object.total) ? Number(object.total) : 0,
    };
  },

  toJSON(message: GetMembersRes): unknown {
    const obj: any = {};
    if (message.members) {
      obj.members = message.members.map((e) =>
        e ? Member.toJSON(e) : undefined,
      );
    } else {
      obj.members = [];
    }
    message.total !== undefined && (obj.total = Math.round(message.total));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMembersRes>, I>>(
    base?: I,
  ): GetMembersRes {
    return GetMembersRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetMembersRes>, I>>(
    object: I,
  ): GetMembersRes {
    const message = createBaseGetMembersRes();
    message.members = object.members?.map((e) => Member.fromPartial(e)) || [];
    message.total = object.total ?? 0;
    return message;
  },
};

function createBaseGetMemberAnswersReq(): GetMemberAnswersReq {
  return { memberId: "" };
}

export const GetMemberAnswersReq = {
  encode(
    message: GetMemberAnswersReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.memberId !== "") {
      writer.uint32(10).string(message.memberId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMemberAnswersReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMemberAnswersReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMemberAnswersReq {
    return { memberId: isSet(object.memberId) ? String(object.memberId) : "" };
  },

  toJSON(message: GetMemberAnswersReq): unknown {
    const obj: any = {};
    message.memberId !== undefined && (obj.memberId = message.memberId);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMemberAnswersReq>, I>>(
    base?: I,
  ): GetMemberAnswersReq {
    return GetMemberAnswersReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetMemberAnswersReq>, I>>(
    object: I,
  ): GetMemberAnswersReq {
    const message = createBaseGetMemberAnswersReq();
    message.memberId = object.memberId ?? "";
    return message;
  },
};

function createBaseGetMemberAnswersRes(): GetMemberAnswersRes {
  return { answers: [] };
}

export const GetMemberAnswersRes = {
  encode(
    message: GetMemberAnswersRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.answers) {
      MemberAnswers.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMemberAnswersRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMemberAnswersRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.answers.push(MemberAnswers.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMemberAnswersRes {
    return {
      answers: Array.isArray(object?.answers)
        ? object.answers.map((e: any) => MemberAnswers.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetMemberAnswersRes): unknown {
    const obj: any = {};
    if (message.answers) {
      obj.answers = message.answers.map((e) =>
        e ? MemberAnswers.toJSON(e) : undefined,
      );
    } else {
      obj.answers = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMemberAnswersRes>, I>>(
    base?: I,
  ): GetMemberAnswersRes {
    return GetMemberAnswersRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetMemberAnswersRes>, I>>(
    object: I,
  ): GetMemberAnswersRes {
    const message = createBaseGetMemberAnswersRes();
    message.answers =
      object.answers?.map((e) => MemberAnswers.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMemberAnswers(): MemberAnswers {
  return { version: 0, answers: {} };
}

export const MemberAnswers = {
  encode(
    message: MemberAnswers,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.version !== 0) {
      writer.uint32(8).uint32(message.version);
    }
    Object.entries(message.answers).forEach(([key, value]) => {
      MemberAnswers_AnswersEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork(),
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MemberAnswers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemberAnswers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.uint32();
          break;
        case 2:
          const entry2 = MemberAnswers_AnswersEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry2.value !== undefined) {
            message.answers[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MemberAnswers {
    return {
      version: isSet(object.version) ? Number(object.version) : 0,
      answers: isObject(object.answers)
        ? Object.entries(object.answers).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {},
          )
        : {},
    };
  },

  toJSON(message: MemberAnswers): unknown {
    const obj: any = {};
    message.version !== undefined &&
      (obj.version = Math.round(message.version));
    obj.answers = {};
    if (message.answers) {
      Object.entries(message.answers).forEach(([k, v]) => {
        obj.answers[k] = v;
      });
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MemberAnswers>, I>>(
    base?: I,
  ): MemberAnswers {
    return MemberAnswers.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MemberAnswers>, I>>(
    object: I,
  ): MemberAnswers {
    const message = createBaseMemberAnswers();
    message.version = object.version ?? 0;
    message.answers = Object.entries(object.answers ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseMemberAnswers_AnswersEntry(): MemberAnswers_AnswersEntry {
  return { key: "", value: "" };
}

export const MemberAnswers_AnswersEntry = {
  encode(
    message: MemberAnswers_AnswersEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MemberAnswers_AnswersEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemberAnswers_AnswersEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MemberAnswers_AnswersEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: MemberAnswers_AnswersEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<MemberAnswers_AnswersEntry>, I>>(
    base?: I,
  ): MemberAnswers_AnswersEntry {
    return MemberAnswers_AnswersEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MemberAnswers_AnswersEntry>, I>>(
    object: I,
  ): MemberAnswers_AnswersEntry {
    const message = createBaseMemberAnswers_AnswersEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseGetMemberReq(): GetMemberReq {
  return { memberId: "" };
}

export const GetMemberReq = {
  encode(
    message: GetMemberReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.memberId !== "") {
      writer.uint32(10).string(message.memberId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMemberReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMemberReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMemberReq {
    return { memberId: isSet(object.memberId) ? String(object.memberId) : "" };
  },

  toJSON(message: GetMemberReq): unknown {
    const obj: any = {};
    message.memberId !== undefined && (obj.memberId = message.memberId);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMemberReq>, I>>(
    base?: I,
  ): GetMemberReq {
    return GetMemberReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetMemberReq>, I>>(
    object: I,
  ): GetMemberReq {
    const message = createBaseGetMemberReq();
    message.memberId = object.memberId ?? "";
    return message;
  },
};

function createBaseGetMemberRes(): GetMemberRes {
  return { member: undefined, notFound: undefined };
}

export const GetMemberRes = {
  encode(
    message: GetMemberRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.member !== undefined) {
      Member.encode(message.member, writer.uint32(10).fork()).ldelim();
    }
    if (message.notFound !== undefined) {
      NotFoundErr.encode(message.notFound, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMemberRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMemberRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = Member.decode(reader, reader.uint32());
          break;
        case 2:
          message.notFound = NotFoundErr.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMemberRes {
    return {
      member: isSet(object.member) ? Member.fromJSON(object.member) : undefined,
      notFound: isSet(object.notFound)
        ? NotFoundErr.fromJSON(object.notFound)
        : undefined,
    };
  },

  toJSON(message: GetMemberRes): unknown {
    const obj: any = {};
    message.member !== undefined &&
      (obj.member = message.member ? Member.toJSON(message.member) : undefined);
    message.notFound !== undefined &&
      (obj.notFound = message.notFound
        ? NotFoundErr.toJSON(message.notFound)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMemberRes>, I>>(
    base?: I,
  ): GetMemberRes {
    return GetMemberRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetMemberRes>, I>>(
    object: I,
  ): GetMemberRes {
    const message = createBaseGetMemberRes();
    message.member =
      object.member !== undefined && object.member !== null
        ? Member.fromPartial(object.member)
        : undefined;
    message.notFound =
      object.notFound !== undefined && object.notFound !== null
        ? NotFoundErr.fromPartial(object.notFound)
        : undefined;
    return message;
  },
};

function createBaseAddMemberReq(): AddMemberReq {
  return {
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    linkedin: undefined,
    telegram: undefined,
  };
}

export const AddMemberReq = {
  encode(
    message: AddMemberReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
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
    if (message.linkedin !== undefined) {
      writer.uint32(74).string(message.linkedin);
    }
    if (message.telegram !== undefined) {
      writer.uint32(82).string(message.telegram);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddMemberReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddMemberReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
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
        case 9:
          message.linkedin = reader.string();
          break;
        case 10:
          message.telegram = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddMemberReq {
    return {
      firstName: isSet(object.firstName) ? String(object.firstName) : "",
      lastName: isSet(object.lastName) ? String(object.lastName) : "",
      email: isSet(object.email) ? String(object.email) : "",
      role: isSet(object.role) ? String(object.role) : "",
      linkedin: isSet(object.linkedin) ? String(object.linkedin) : undefined,
      telegram: isSet(object.telegram) ? String(object.telegram) : undefined,
    };
  },

  toJSON(message: AddMemberReq): unknown {
    const obj: any = {};
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.email !== undefined && (obj.email = message.email);
    message.role !== undefined && (obj.role = message.role);
    message.linkedin !== undefined && (obj.linkedin = message.linkedin);
    message.telegram !== undefined && (obj.telegram = message.telegram);
    return obj;
  },

  create<I extends Exact<DeepPartial<AddMemberReq>, I>>(
    base?: I,
  ): AddMemberReq {
    return AddMemberReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AddMemberReq>, I>>(
    object: I,
  ): AddMemberReq {
    const message = createBaseAddMemberReq();
    message.firstName = object.firstName ?? "";
    message.lastName = object.lastName ?? "";
    message.email = object.email ?? "";
    message.role = object.role ?? "";
    message.linkedin = object.linkedin ?? undefined;
    message.telegram = object.telegram ?? undefined;
    return message;
  },
};

function createBaseAddMemberRes(): AddMemberRes {
  return { member: undefined };
}

export const AddMemberRes = {
  encode(
    message: AddMemberRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.member !== undefined) {
      Member.encode(message.member, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddMemberRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddMemberRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = Member.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddMemberRes {
    return {
      member: isSet(object.member) ? Member.fromJSON(object.member) : undefined,
    };
  },

  toJSON(message: AddMemberRes): unknown {
    const obj: any = {};
    message.member !== undefined &&
      (obj.member = message.member ? Member.toJSON(message.member) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AddMemberRes>, I>>(
    base?: I,
  ): AddMemberRes {
    return AddMemberRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AddMemberRes>, I>>(
    object: I,
  ): AddMemberRes {
    const message = createBaseAddMemberRes();
    message.member =
      object.member !== undefined && object.member !== null
        ? Member.fromPartial(object.member)
        : undefined;
    return message;
  },
};

function createBaseApproveMemberReq(): ApproveMemberReq {
  return { memberId: "" };
}

export const ApproveMemberReq = {
  encode(
    message: ApproveMemberReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.memberId !== "") {
      writer.uint32(10).string(message.memberId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApproveMemberReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApproveMemberReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ApproveMemberReq {
    return { memberId: isSet(object.memberId) ? String(object.memberId) : "" };
  },

  toJSON(message: ApproveMemberReq): unknown {
    const obj: any = {};
    message.memberId !== undefined && (obj.memberId = message.memberId);
    return obj;
  },

  create<I extends Exact<DeepPartial<ApproveMemberReq>, I>>(
    base?: I,
  ): ApproveMemberReq {
    return ApproveMemberReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ApproveMemberReq>, I>>(
    object: I,
  ): ApproveMemberReq {
    const message = createBaseApproveMemberReq();
    message.memberId = object.memberId ?? "";
    return message;
  },
};

function createBaseApproveMemberRes(): ApproveMemberRes {
  return { member: undefined };
}

export const ApproveMemberRes = {
  encode(
    message: ApproveMemberRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.member !== undefined) {
      Member.encode(message.member, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApproveMemberRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApproveMemberRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = Member.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ApproveMemberRes {
    return {
      member: isSet(object.member) ? Member.fromJSON(object.member) : undefined,
    };
  },

  toJSON(message: ApproveMemberRes): unknown {
    const obj: any = {};
    message.member !== undefined &&
      (obj.member = message.member ? Member.toJSON(message.member) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ApproveMemberRes>, I>>(
    base?: I,
  ): ApproveMemberRes {
    return ApproveMemberRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ApproveMemberRes>, I>>(
    object: I,
  ): ApproveMemberRes {
    const message = createBaseApproveMemberRes();
    message.member =
      object.member !== undefined && object.member !== null
        ? Member.fromPartial(object.member)
        : undefined;
    return message;
  },
};

function createBaseMemberPaidMembershipFeeReq(): MemberPaidMembershipFeeReq {
  return { memberId: "" };
}

export const MemberPaidMembershipFeeReq = {
  encode(
    message: MemberPaidMembershipFeeReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.memberId !== "") {
      writer.uint32(10).string(message.memberId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MemberPaidMembershipFeeReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemberPaidMembershipFeeReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MemberPaidMembershipFeeReq {
    return { memberId: isSet(object.memberId) ? String(object.memberId) : "" };
  },

  toJSON(message: MemberPaidMembershipFeeReq): unknown {
    const obj: any = {};
    message.memberId !== undefined && (obj.memberId = message.memberId);
    return obj;
  },

  create<I extends Exact<DeepPartial<MemberPaidMembershipFeeReq>, I>>(
    base?: I,
  ): MemberPaidMembershipFeeReq {
    return MemberPaidMembershipFeeReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MemberPaidMembershipFeeReq>, I>>(
    object: I,
  ): MemberPaidMembershipFeeReq {
    const message = createBaseMemberPaidMembershipFeeReq();
    message.memberId = object.memberId ?? "";
    return message;
  },
};

function createBaseMemberPaidMembershipFeeRes(): MemberPaidMembershipFeeRes {
  return { member: undefined };
}

export const MemberPaidMembershipFeeRes = {
  encode(
    message: MemberPaidMembershipFeeRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.member !== undefined) {
      Member.encode(message.member, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MemberPaidMembershipFeeRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemberPaidMembershipFeeRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = Member.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MemberPaidMembershipFeeRes {
    return {
      member: isSet(object.member) ? Member.fromJSON(object.member) : undefined,
    };
  },

  toJSON(message: MemberPaidMembershipFeeRes): unknown {
    const obj: any = {};
    message.member !== undefined &&
      (obj.member = message.member ? Member.toJSON(message.member) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MemberPaidMembershipFeeRes>, I>>(
    base?: I,
  ): MemberPaidMembershipFeeRes {
    return MemberPaidMembershipFeeRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MemberPaidMembershipFeeRes>, I>>(
    object: I,
  ): MemberPaidMembershipFeeRes {
    const message = createBaseMemberPaidMembershipFeeRes();
    message.member =
      object.member !== undefined && object.member !== null
        ? Member.fromPartial(object.member)
        : undefined;
    return message;
  },
};

function createBaseRegisterMemberReq(): RegisterMemberReq {
  return {
    memberId: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    linkedin: undefined,
    telegram: undefined,
  };
}

export const RegisterMemberReq = {
  encode(
    message: RegisterMemberReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
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
    if (message.linkedin !== undefined) {
      writer.uint32(74).string(message.linkedin);
    }
    if (message.telegram !== undefined) {
      writer.uint32(82).string(message.telegram);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterMemberReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterMemberReq();
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
        case 9:
          message.linkedin = reader.string();
          break;
        case 10:
          message.telegram = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterMemberReq {
    return {
      memberId: isSet(object.memberId) ? String(object.memberId) : "",
      firstName: isSet(object.firstName) ? String(object.firstName) : "",
      lastName: isSet(object.lastName) ? String(object.lastName) : "",
      email: isSet(object.email) ? String(object.email) : "",
      role: isSet(object.role) ? String(object.role) : "",
      linkedin: isSet(object.linkedin) ? String(object.linkedin) : undefined,
      telegram: isSet(object.telegram) ? String(object.telegram) : undefined,
    };
  },

  toJSON(message: RegisterMemberReq): unknown {
    const obj: any = {};
    message.memberId !== undefined && (obj.memberId = message.memberId);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.email !== undefined && (obj.email = message.email);
    message.role !== undefined && (obj.role = message.role);
    message.linkedin !== undefined && (obj.linkedin = message.linkedin);
    message.telegram !== undefined && (obj.telegram = message.telegram);
    return obj;
  },

  create<I extends Exact<DeepPartial<RegisterMemberReq>, I>>(
    base?: I,
  ): RegisterMemberReq {
    return RegisterMemberReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RegisterMemberReq>, I>>(
    object: I,
  ): RegisterMemberReq {
    const message = createBaseRegisterMemberReq();
    message.memberId = object.memberId ?? "";
    message.firstName = object.firstName ?? "";
    message.lastName = object.lastName ?? "";
    message.email = object.email ?? "";
    message.role = object.role ?? "";
    message.linkedin = object.linkedin ?? undefined;
    message.telegram = object.telegram ?? undefined;
    return message;
  },
};

function createBaseRegisterMemberRes(): RegisterMemberRes {
  return { member: undefined };
}

export const RegisterMemberRes = {
  encode(
    message: RegisterMemberRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.member !== undefined) {
      Member.encode(message.member, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterMemberRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterMemberRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = Member.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterMemberRes {
    return {
      member: isSet(object.member) ? Member.fromJSON(object.member) : undefined,
    };
  },

  toJSON(message: RegisterMemberRes): unknown {
    const obj: any = {};
    message.member !== undefined &&
      (obj.member = message.member ? Member.toJSON(message.member) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<RegisterMemberRes>, I>>(
    base?: I,
  ): RegisterMemberRes {
    return RegisterMemberRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RegisterMemberRes>, I>>(
    object: I,
  ): RegisterMemberRes {
    const message = createBaseRegisterMemberRes();
    message.member =
      object.member !== undefined && object.member !== null
        ? Member.fromPartial(object.member)
        : undefined;
    return message;
  },
};

function createBaseMemberAnswerQuestionairreReq(): MemberAnswerQuestionairreReq {
  return { memberId: "", questionairreVerions: 0, answers: {} };
}

export const MemberAnswerQuestionairreReq = {
  encode(
    message: MemberAnswerQuestionairreReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.memberId !== "") {
      writer.uint32(10).string(message.memberId);
    }
    if (message.questionairreVerions !== 0) {
      writer.uint32(16).uint32(message.questionairreVerions);
    }
    Object.entries(message.answers).forEach(([key, value]) => {
      MemberAnswerQuestionairreReq_AnswersEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork(),
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MemberAnswerQuestionairreReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemberAnswerQuestionairreReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberId = reader.string();
          break;
        case 2:
          message.questionairreVerions = reader.uint32();
          break;
        case 3:
          const entry3 = MemberAnswerQuestionairreReq_AnswersEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry3.value !== undefined) {
            message.answers[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MemberAnswerQuestionairreReq {
    return {
      memberId: isSet(object.memberId) ? String(object.memberId) : "",
      questionairreVerions: isSet(object.questionairreVerions)
        ? Number(object.questionairreVerions)
        : 0,
      answers: isObject(object.answers)
        ? Object.entries(object.answers).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {},
          )
        : {},
    };
  },

  toJSON(message: MemberAnswerQuestionairreReq): unknown {
    const obj: any = {};
    message.memberId !== undefined && (obj.memberId = message.memberId);
    message.questionairreVerions !== undefined &&
      (obj.questionairreVerions = Math.round(message.questionairreVerions));
    obj.answers = {};
    if (message.answers) {
      Object.entries(message.answers).forEach(([k, v]) => {
        obj.answers[k] = v;
      });
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MemberAnswerQuestionairreReq>, I>>(
    base?: I,
  ): MemberAnswerQuestionairreReq {
    return MemberAnswerQuestionairreReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MemberAnswerQuestionairreReq>, I>>(
    object: I,
  ): MemberAnswerQuestionairreReq {
    const message = createBaseMemberAnswerQuestionairreReq();
    message.memberId = object.memberId ?? "";
    message.questionairreVerions = object.questionairreVerions ?? 0;
    message.answers = Object.entries(object.answers ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseMemberAnswerQuestionairreReq_AnswersEntry(): MemberAnswerQuestionairreReq_AnswersEntry {
  return { key: "", value: "" };
}

export const MemberAnswerQuestionairreReq_AnswersEntry = {
  encode(
    message: MemberAnswerQuestionairreReq_AnswersEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MemberAnswerQuestionairreReq_AnswersEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemberAnswerQuestionairreReq_AnswersEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MemberAnswerQuestionairreReq_AnswersEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: MemberAnswerQuestionairreReq_AnswersEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<
    I extends Exact<DeepPartial<MemberAnswerQuestionairreReq_AnswersEntry>, I>,
  >(base?: I): MemberAnswerQuestionairreReq_AnswersEntry {
    return MemberAnswerQuestionairreReq_AnswersEntry.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<MemberAnswerQuestionairreReq_AnswersEntry>, I>,
  >(object: I): MemberAnswerQuestionairreReq_AnswersEntry {
    const message = createBaseMemberAnswerQuestionairreReq_AnswersEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseMemberAnswerQuestionairreRes(): MemberAnswerQuestionairreRes {
  return { member: undefined };
}

export const MemberAnswerQuestionairreRes = {
  encode(
    message: MemberAnswerQuestionairreRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.member !== undefined) {
      Member.encode(message.member, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MemberAnswerQuestionairreRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemberAnswerQuestionairreRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = Member.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MemberAnswerQuestionairreRes {
    return {
      member: isSet(object.member) ? Member.fromJSON(object.member) : undefined,
    };
  },

  toJSON(message: MemberAnswerQuestionairreRes): unknown {
    const obj: any = {};
    message.member !== undefined &&
      (obj.member = message.member ? Member.toJSON(message.member) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MemberAnswerQuestionairreRes>, I>>(
    base?: I,
  ): MemberAnswerQuestionairreRes {
    return MemberAnswerQuestionairreRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MemberAnswerQuestionairreRes>, I>>(
    object: I,
  ): MemberAnswerQuestionairreRes {
    const message = createBaseMemberAnswerQuestionairreRes();
    message.member =
      object.member !== undefined && object.member !== null
        ? Member.fromPartial(object.member)
        : undefined;
    return message;
  },
};

function createBaseUpdateMemberReq(): UpdateMemberReq {
  return {
    memberId: "",
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    role: undefined,
    linkedin: undefined,
    telegram: undefined,
  };
}

export const UpdateMemberReq = {
  encode(
    message: UpdateMemberReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.memberId !== "") {
      writer.uint32(10).string(message.memberId);
    }
    if (message.firstName !== undefined) {
      writer.uint32(18).string(message.firstName);
    }
    if (message.lastName !== undefined) {
      writer.uint32(26).string(message.lastName);
    }
    if (message.email !== undefined) {
      writer.uint32(34).string(message.email);
    }
    if (message.role !== undefined) {
      writer.uint32(42).string(message.role);
    }
    if (message.linkedin !== undefined) {
      writer.uint32(74).string(message.linkedin);
    }
    if (message.telegram !== undefined) {
      writer.uint32(82).string(message.telegram);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMemberReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateMemberReq();
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
        case 9:
          message.linkedin = reader.string();
          break;
        case 10:
          message.telegram = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateMemberReq {
    return {
      memberId: isSet(object.memberId) ? String(object.memberId) : "",
      firstName: isSet(object.firstName) ? String(object.firstName) : undefined,
      lastName: isSet(object.lastName) ? String(object.lastName) : undefined,
      email: isSet(object.email) ? String(object.email) : undefined,
      role: isSet(object.role) ? String(object.role) : undefined,
      linkedin: isSet(object.linkedin) ? String(object.linkedin) : undefined,
      telegram: isSet(object.telegram) ? String(object.telegram) : undefined,
    };
  },

  toJSON(message: UpdateMemberReq): unknown {
    const obj: any = {};
    message.memberId !== undefined && (obj.memberId = message.memberId);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.email !== undefined && (obj.email = message.email);
    message.role !== undefined && (obj.role = message.role);
    message.linkedin !== undefined && (obj.linkedin = message.linkedin);
    message.telegram !== undefined && (obj.telegram = message.telegram);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateMemberReq>, I>>(
    base?: I,
  ): UpdateMemberReq {
    return UpdateMemberReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateMemberReq>, I>>(
    object: I,
  ): UpdateMemberReq {
    const message = createBaseUpdateMemberReq();
    message.memberId = object.memberId ?? "";
    message.firstName = object.firstName ?? undefined;
    message.lastName = object.lastName ?? undefined;
    message.email = object.email ?? undefined;
    message.role = object.role ?? undefined;
    message.linkedin = object.linkedin ?? undefined;
    message.telegram = object.telegram ?? undefined;
    return message;
  },
};

function createBaseUpdateMemberRes(): UpdateMemberRes {
  return { member: undefined, notFound: undefined };
}

export const UpdateMemberRes = {
  encode(
    message: UpdateMemberRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.member !== undefined) {
      Member.encode(message.member, writer.uint32(10).fork()).ldelim();
    }
    if (message.notFound !== undefined) {
      NotFoundErr.encode(message.notFound, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMemberRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateMemberRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = Member.decode(reader, reader.uint32());
          break;
        case 2:
          message.notFound = NotFoundErr.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateMemberRes {
    return {
      member: isSet(object.member) ? Member.fromJSON(object.member) : undefined,
      notFound: isSet(object.notFound)
        ? NotFoundErr.fromJSON(object.notFound)
        : undefined,
    };
  },

  toJSON(message: UpdateMemberRes): unknown {
    const obj: any = {};
    message.member !== undefined &&
      (obj.member = message.member ? Member.toJSON(message.member) : undefined);
    message.notFound !== undefined &&
      (obj.notFound = message.notFound
        ? NotFoundErr.toJSON(message.notFound)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateMemberRes>, I>>(
    base?: I,
  ): UpdateMemberRes {
    return UpdateMemberRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateMemberRes>, I>>(
    object: I,
  ): UpdateMemberRes {
    const message = createBaseUpdateMemberRes();
    message.member =
      object.member !== undefined && object.member !== null
        ? Member.fromPartial(object.member)
        : undefined;
    message.notFound =
      object.notFound !== undefined && object.notFound !== null
        ? NotFoundErr.fromPartial(object.notFound)
        : undefined;
    return message;
  },
};

function createBaseRemoveMemberReq(): RemoveMemberReq {
  return { memberId: "" };
}

export const RemoveMemberReq = {
  encode(
    message: RemoveMemberReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.memberId !== "") {
      writer.uint32(10).string(message.memberId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMemberReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveMemberReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveMemberReq {
    return { memberId: isSet(object.memberId) ? String(object.memberId) : "" };
  },

  toJSON(message: RemoveMemberReq): unknown {
    const obj: any = {};
    message.memberId !== undefined && (obj.memberId = message.memberId);
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveMemberReq>, I>>(
    base?: I,
  ): RemoveMemberReq {
    return RemoveMemberReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RemoveMemberReq>, I>>(
    object: I,
  ): RemoveMemberReq {
    const message = createBaseRemoveMemberReq();
    message.memberId = object.memberId ?? "";
    return message;
  },
};

function createBaseRemoveMemberRes(): RemoveMemberRes {
  return { member: undefined, notFound: undefined };
}

export const RemoveMemberRes = {
  encode(
    message: RemoveMemberRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.member !== undefined) {
      Member.encode(message.member, writer.uint32(10).fork()).ldelim();
    }
    if (message.notFound !== undefined) {
      NotFoundErr.encode(message.notFound, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMemberRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveMemberRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = Member.decode(reader, reader.uint32());
          break;
        case 2:
          message.notFound = NotFoundErr.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveMemberRes {
    return {
      member: isSet(object.member) ? Member.fromJSON(object.member) : undefined,
      notFound: isSet(object.notFound)
        ? NotFoundErr.fromJSON(object.notFound)
        : undefined,
    };
  },

  toJSON(message: RemoveMemberRes): unknown {
    const obj: any = {};
    message.member !== undefined &&
      (obj.member = message.member ? Member.toJSON(message.member) : undefined);
    message.notFound !== undefined &&
      (obj.notFound = message.notFound
        ? NotFoundErr.toJSON(message.notFound)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveMemberRes>, I>>(
    base?: I,
  ): RemoveMemberRes {
    return RemoveMemberRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RemoveMemberRes>, I>>(
    object: I,
  ): RemoveMemberRes {
    const message = createBaseRemoveMemberRes();
    message.member =
      object.member !== undefined && object.member !== null
        ? Member.fromPartial(object.member)
        : undefined;
    message.notFound =
      object.notFound !== undefined && object.notFound !== null
        ? NotFoundErr.fromPartial(object.notFound)
        : undefined;
    return message;
  },
};

function createBaseGetAssociationQuestionarreReq(): GetAssociationQuestionarreReq {
  return { version: 0 };
}

export const GetAssociationQuestionarreReq = {
  encode(
    message: GetAssociationQuestionarreReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.version !== 0) {
      writer.uint32(8).uint32(message.version);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetAssociationQuestionarreReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAssociationQuestionarreReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAssociationQuestionarreReq {
    return { version: isSet(object.version) ? Number(object.version) : 0 };
  },

  toJSON(message: GetAssociationQuestionarreReq): unknown {
    const obj: any = {};
    message.version !== undefined &&
      (obj.version = Math.round(message.version));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAssociationQuestionarreReq>, I>>(
    base?: I,
  ): GetAssociationQuestionarreReq {
    return GetAssociationQuestionarreReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetAssociationQuestionarreReq>, I>>(
    object: I,
  ): GetAssociationQuestionarreReq {
    const message = createBaseGetAssociationQuestionarreReq();
    message.version = object.version ?? 0;
    return message;
  },
};

function createBaseGetAssociationQuestionarreRes(): GetAssociationQuestionarreRes {
  return { questionairre: undefined };
}

export const GetAssociationQuestionarreRes = {
  encode(
    message: GetAssociationQuestionarreRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.questionairre !== undefined) {
      Questionairre.encode(
        message.questionairre,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetAssociationQuestionarreRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAssociationQuestionarreRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.questionairre = Questionairre.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAssociationQuestionarreRes {
    return {
      questionairre: isSet(object.questionairre)
        ? Questionairre.fromJSON(object.questionairre)
        : undefined,
    };
  },

  toJSON(message: GetAssociationQuestionarreRes): unknown {
    const obj: any = {};
    message.questionairre !== undefined &&
      (obj.questionairre = message.questionairre
        ? Questionairre.toJSON(message.questionairre)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAssociationQuestionarreRes>, I>>(
    base?: I,
  ): GetAssociationQuestionarreRes {
    return GetAssociationQuestionarreRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetAssociationQuestionarreRes>, I>>(
    object: I,
  ): GetAssociationQuestionarreRes {
    const message = createBaseGetAssociationQuestionarreRes();
    message.questionairre =
      object.questionairre !== undefined && object.questionairre !== null
        ? Questionairre.fromPartial(object.questionairre)
        : undefined;
    return message;
  },
};

function createBaseGetCurrentAssociationQuestionarreReq(): GetCurrentAssociationQuestionarreReq {
  return {};
}

export const GetCurrentAssociationQuestionarreReq = {
  encode(
    _: GetCurrentAssociationQuestionarreReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetCurrentAssociationQuestionarreReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCurrentAssociationQuestionarreReq();
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

  fromJSON(_: any): GetCurrentAssociationQuestionarreReq {
    return {};
  },

  toJSON(_: GetCurrentAssociationQuestionarreReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCurrentAssociationQuestionarreReq>, I>>(
    base?: I,
  ): GetCurrentAssociationQuestionarreReq {
    return GetCurrentAssociationQuestionarreReq.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<GetCurrentAssociationQuestionarreReq>, I>,
  >(_: I): GetCurrentAssociationQuestionarreReq {
    const message = createBaseGetCurrentAssociationQuestionarreReq();
    return message;
  },
};

function createBaseGetCurrentAssociationQuestionarreRes(): GetCurrentAssociationQuestionarreRes {
  return { questionairre: undefined };
}

export const GetCurrentAssociationQuestionarreRes = {
  encode(
    message: GetCurrentAssociationQuestionarreRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.questionairre !== undefined) {
      Questionairre.encode(
        message.questionairre,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetCurrentAssociationQuestionarreRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCurrentAssociationQuestionarreRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.questionairre = Questionairre.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCurrentAssociationQuestionarreRes {
    return {
      questionairre: isSet(object.questionairre)
        ? Questionairre.fromJSON(object.questionairre)
        : undefined,
    };
  },

  toJSON(message: GetCurrentAssociationQuestionarreRes): unknown {
    const obj: any = {};
    message.questionairre !== undefined &&
      (obj.questionairre = message.questionairre
        ? Questionairre.toJSON(message.questionairre)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCurrentAssociationQuestionarreRes>, I>>(
    base?: I,
  ): GetCurrentAssociationQuestionarreRes {
    return GetCurrentAssociationQuestionarreRes.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<GetCurrentAssociationQuestionarreRes>, I>,
  >(object: I): GetCurrentAssociationQuestionarreRes {
    const message = createBaseGetCurrentAssociationQuestionarreRes();
    message.questionairre =
      object.questionairre !== undefined && object.questionairre !== null
        ? Questionairre.fromPartial(object.questionairre)
        : undefined;
    return message;
  },
};

function createBaseUpdateAssociationQuestionarreReq(): UpdateAssociationQuestionarreReq {
  return { questions: [] };
}

export const UpdateAssociationQuestionarreReq = {
  encode(
    message: UpdateAssociationQuestionarreReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.questions) {
      Question.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UpdateAssociationQuestionarreReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAssociationQuestionarreReq();
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

  fromJSON(object: any): UpdateAssociationQuestionarreReq {
    return {
      questions: Array.isArray(object?.questions)
        ? object.questions.map((e: any) => Question.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdateAssociationQuestionarreReq): unknown {
    const obj: any = {};
    if (message.questions) {
      obj.questions = message.questions.map((e) =>
        e ? Question.toJSON(e) : undefined,
      );
    } else {
      obj.questions = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateAssociationQuestionarreReq>, I>>(
    base?: I,
  ): UpdateAssociationQuestionarreReq {
    return UpdateAssociationQuestionarreReq.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateAssociationQuestionarreReq>, I>,
  >(object: I): UpdateAssociationQuestionarreReq {
    const message = createBaseUpdateAssociationQuestionarreReq();
    message.questions =
      object.questions?.map((e) => Question.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateAssociationQuestionarreRes(): UpdateAssociationQuestionarreRes {
  return { questionairre: undefined };
}

export const UpdateAssociationQuestionarreRes = {
  encode(
    message: UpdateAssociationQuestionarreRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.questionairre !== undefined) {
      Questionairre.encode(
        message.questionairre,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UpdateAssociationQuestionarreRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAssociationQuestionarreRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.questionairre = Questionairre.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateAssociationQuestionarreRes {
    return {
      questionairre: isSet(object.questionairre)
        ? Questionairre.fromJSON(object.questionairre)
        : undefined,
    };
  },

  toJSON(message: UpdateAssociationQuestionarreRes): unknown {
    const obj: any = {};
    message.questionairre !== undefined &&
      (obj.questionairre = message.questionairre
        ? Questionairre.toJSON(message.questionairre)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateAssociationQuestionarreRes>, I>>(
    base?: I,
  ): UpdateAssociationQuestionarreRes {
    return UpdateAssociationQuestionarreRes.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateAssociationQuestionarreRes>, I>,
  >(object: I): UpdateAssociationQuestionarreRes {
    const message = createBaseUpdateAssociationQuestionarreRes();
    message.questionairre =
      object.questionairre !== undefined && object.questionairre !== null
        ? Questionairre.fromPartial(object.questionairre)
        : undefined;
    return message;
  },
};

export type AssociationSrvService = typeof AssociationSrvService;
export const AssociationSrvService = {
  getMembers: {
    path: "/fy.association.v1.AssociationSrv/GetMembers",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetMembersReq) =>
      Buffer.from(GetMembersReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetMembersReq.decode(value),
    responseSerialize: (value: GetMembersRes) =>
      Buffer.from(GetMembersRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetMembersRes.decode(value),
  },
  getMember: {
    path: "/fy.association.v1.AssociationSrv/GetMember",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetMemberReq) =>
      Buffer.from(GetMemberReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetMemberReq.decode(value),
    responseSerialize: (value: GetMemberRes) =>
      Buffer.from(GetMemberRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetMemberRes.decode(value),
  },
  getMemberAnswers: {
    path: "/fy.association.v1.AssociationSrv/GetMemberAnswers",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetMemberAnswersReq) =>
      Buffer.from(GetMemberAnswersReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetMemberAnswersReq.decode(value),
    responseSerialize: (value: GetMemberAnswersRes) =>
      Buffer.from(GetMemberAnswersRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetMemberAnswersRes.decode(value),
  },
  addMember: {
    path: "/fy.association.v1.AssociationSrv/AddMember",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddMemberReq) =>
      Buffer.from(AddMemberReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddMemberReq.decode(value),
    responseSerialize: (value: AddMemberRes) =>
      Buffer.from(AddMemberRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => AddMemberRes.decode(value),
  },
  registerMember: {
    path: "/fy.association.v1.AssociationSrv/RegisterMember",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RegisterMemberReq) =>
      Buffer.from(RegisterMemberReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RegisterMemberReq.decode(value),
    responseSerialize: (value: RegisterMemberRes) =>
      Buffer.from(RegisterMemberRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => RegisterMemberRes.decode(value),
  },
  memberAnswerQuestionairre: {
    path: "/fy.association.v1.AssociationSrv/MemberAnswerQuestionairre",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MemberAnswerQuestionairreReq) =>
      Buffer.from(MemberAnswerQuestionairreReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      MemberAnswerQuestionairreReq.decode(value),
    responseSerialize: (value: MemberAnswerQuestionairreRes) =>
      Buffer.from(MemberAnswerQuestionairreRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      MemberAnswerQuestionairreRes.decode(value),
  },
  approveMember: {
    path: "/fy.association.v1.AssociationSrv/ApproveMember",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ApproveMemberReq) =>
      Buffer.from(ApproveMemberReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ApproveMemberReq.decode(value),
    responseSerialize: (value: ApproveMemberRes) =>
      Buffer.from(ApproveMemberRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ApproveMemberRes.decode(value),
  },
  memberPaidMembershipFee: {
    path: "/fy.association.v1.AssociationSrv/MemberPaidMembershipFee",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MemberPaidMembershipFeeReq) =>
      Buffer.from(MemberPaidMembershipFeeReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      MemberPaidMembershipFeeReq.decode(value),
    responseSerialize: (value: MemberPaidMembershipFeeRes) =>
      Buffer.from(MemberPaidMembershipFeeRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      MemberPaidMembershipFeeRes.decode(value),
  },
  removeMember: {
    path: "/fy.association.v1.AssociationSrv/RemoveMember",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveMemberReq) =>
      Buffer.from(RemoveMemberReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RemoveMemberReq.decode(value),
    responseSerialize: (value: RemoveMemberRes) =>
      Buffer.from(RemoveMemberRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => RemoveMemberRes.decode(value),
  },
  updateMember: {
    path: "/fy.association.v1.AssociationSrv/UpdateMember",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateMemberReq) =>
      Buffer.from(UpdateMemberReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateMemberReq.decode(value),
    responseSerialize: (value: UpdateMemberRes) =>
      Buffer.from(UpdateMemberRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UpdateMemberRes.decode(value),
  },
  getAssociationQuestionarre: {
    path: "/fy.association.v1.AssociationSrv/GetAssociationQuestionarre",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetAssociationQuestionarreReq) =>
      Buffer.from(GetAssociationQuestionarreReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetAssociationQuestionarreReq.decode(value),
    responseSerialize: (value: GetAssociationQuestionarreRes) =>
      Buffer.from(GetAssociationQuestionarreRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      GetAssociationQuestionarreRes.decode(value),
  },
  getCurrentAssociationQuestionarre: {
    path: "/fy.association.v1.AssociationSrv/GetCurrentAssociationQuestionarre",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetCurrentAssociationQuestionarreReq) =>
      Buffer.from(GetCurrentAssociationQuestionarreReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetCurrentAssociationQuestionarreReq.decode(value),
    responseSerialize: (value: GetCurrentAssociationQuestionarreRes) =>
      Buffer.from(GetCurrentAssociationQuestionarreRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      GetCurrentAssociationQuestionarreRes.decode(value),
  },
  updateAssociationQuestionarre: {
    path: "/fy.association.v1.AssociationSrv/UpdateAssociationQuestionarre",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAssociationQuestionarreReq) =>
      Buffer.from(UpdateAssociationQuestionarreReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateAssociationQuestionarreReq.decode(value),
    responseSerialize: (value: UpdateAssociationQuestionarreRes) =>
      Buffer.from(UpdateAssociationQuestionarreRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      UpdateAssociationQuestionarreRes.decode(value),
  },
} as const;

export interface AssociationSrvServer extends UntypedServiceImplementation {
  getMembers: handleUnaryCall<GetMembersReq, GetMembersRes>;
  getMember: handleUnaryCall<GetMemberReq, GetMemberRes>;
  getMemberAnswers: handleUnaryCall<GetMemberAnswersReq, GetMemberAnswersRes>;
  addMember: handleUnaryCall<AddMemberReq, AddMemberRes>;
  registerMember: handleUnaryCall<RegisterMemberReq, RegisterMemberRes>;
  memberAnswerQuestionairre: handleUnaryCall<
    MemberAnswerQuestionairreReq,
    MemberAnswerQuestionairreRes
  >;
  approveMember: handleUnaryCall<ApproveMemberReq, ApproveMemberRes>;
  memberPaidMembershipFee: handleUnaryCall<
    MemberPaidMembershipFeeReq,
    MemberPaidMembershipFeeRes
  >;
  removeMember: handleUnaryCall<RemoveMemberReq, RemoveMemberRes>;
  updateMember: handleUnaryCall<UpdateMemberReq, UpdateMemberRes>;
  getAssociationQuestionarre: handleUnaryCall<
    GetAssociationQuestionarreReq,
    GetAssociationQuestionarreRes
  >;
  getCurrentAssociationQuestionarre: handleUnaryCall<
    GetCurrentAssociationQuestionarreReq,
    GetCurrentAssociationQuestionarreRes
  >;
  updateAssociationQuestionarre: handleUnaryCall<
    UpdateAssociationQuestionarreReq,
    UpdateAssociationQuestionarreRes
  >;
}

export interface AssociationSrvClient extends Client {
  getMembers(
    request: GetMembersReq,
    callback: (error: ServiceError | null, response: GetMembersRes) => void,
  ): ClientUnaryCall;
  getMembers(
    request: GetMembersReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetMembersRes) => void,
  ): ClientUnaryCall;
  getMembers(
    request: GetMembersReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetMembersRes) => void,
  ): ClientUnaryCall;
  getMember(
    request: GetMemberReq,
    callback: (error: ServiceError | null, response: GetMemberRes) => void,
  ): ClientUnaryCall;
  getMember(
    request: GetMemberReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetMemberRes) => void,
  ): ClientUnaryCall;
  getMember(
    request: GetMemberReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetMemberRes) => void,
  ): ClientUnaryCall;
  getMemberAnswers(
    request: GetMemberAnswersReq,
    callback: (
      error: ServiceError | null,
      response: GetMemberAnswersRes,
    ) => void,
  ): ClientUnaryCall;
  getMemberAnswers(
    request: GetMemberAnswersReq,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetMemberAnswersRes,
    ) => void,
  ): ClientUnaryCall;
  getMemberAnswers(
    request: GetMemberAnswersReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetMemberAnswersRes,
    ) => void,
  ): ClientUnaryCall;
  addMember(
    request: AddMemberReq,
    callback: (error: ServiceError | null, response: AddMemberRes) => void,
  ): ClientUnaryCall;
  addMember(
    request: AddMemberReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: AddMemberRes) => void,
  ): ClientUnaryCall;
  addMember(
    request: AddMemberReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: AddMemberRes) => void,
  ): ClientUnaryCall;
  registerMember(
    request: RegisterMemberReq,
    callback: (error: ServiceError | null, response: RegisterMemberRes) => void,
  ): ClientUnaryCall;
  registerMember(
    request: RegisterMemberReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: RegisterMemberRes) => void,
  ): ClientUnaryCall;
  registerMember(
    request: RegisterMemberReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: RegisterMemberRes) => void,
  ): ClientUnaryCall;
  memberAnswerQuestionairre(
    request: MemberAnswerQuestionairreReq,
    callback: (
      error: ServiceError | null,
      response: MemberAnswerQuestionairreRes,
    ) => void,
  ): ClientUnaryCall;
  memberAnswerQuestionairre(
    request: MemberAnswerQuestionairreReq,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: MemberAnswerQuestionairreRes,
    ) => void,
  ): ClientUnaryCall;
  memberAnswerQuestionairre(
    request: MemberAnswerQuestionairreReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: MemberAnswerQuestionairreRes,
    ) => void,
  ): ClientUnaryCall;
  approveMember(
    request: ApproveMemberReq,
    callback: (error: ServiceError | null, response: ApproveMemberRes) => void,
  ): ClientUnaryCall;
  approveMember(
    request: ApproveMemberReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ApproveMemberRes) => void,
  ): ClientUnaryCall;
  approveMember(
    request: ApproveMemberReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ApproveMemberRes) => void,
  ): ClientUnaryCall;
  memberPaidMembershipFee(
    request: MemberPaidMembershipFeeReq,
    callback: (
      error: ServiceError | null,
      response: MemberPaidMembershipFeeRes,
    ) => void,
  ): ClientUnaryCall;
  memberPaidMembershipFee(
    request: MemberPaidMembershipFeeReq,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: MemberPaidMembershipFeeRes,
    ) => void,
  ): ClientUnaryCall;
  memberPaidMembershipFee(
    request: MemberPaidMembershipFeeReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: MemberPaidMembershipFeeRes,
    ) => void,
  ): ClientUnaryCall;
  removeMember(
    request: RemoveMemberReq,
    callback: (error: ServiceError | null, response: RemoveMemberRes) => void,
  ): ClientUnaryCall;
  removeMember(
    request: RemoveMemberReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: RemoveMemberRes) => void,
  ): ClientUnaryCall;
  removeMember(
    request: RemoveMemberReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: RemoveMemberRes) => void,
  ): ClientUnaryCall;
  updateMember(
    request: UpdateMemberReq,
    callback: (error: ServiceError | null, response: UpdateMemberRes) => void,
  ): ClientUnaryCall;
  updateMember(
    request: UpdateMemberReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UpdateMemberRes) => void,
  ): ClientUnaryCall;
  updateMember(
    request: UpdateMemberReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UpdateMemberRes) => void,
  ): ClientUnaryCall;
  getAssociationQuestionarre(
    request: GetAssociationQuestionarreReq,
    callback: (
      error: ServiceError | null,
      response: GetAssociationQuestionarreRes,
    ) => void,
  ): ClientUnaryCall;
  getAssociationQuestionarre(
    request: GetAssociationQuestionarreReq,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetAssociationQuestionarreRes,
    ) => void,
  ): ClientUnaryCall;
  getAssociationQuestionarre(
    request: GetAssociationQuestionarreReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetAssociationQuestionarreRes,
    ) => void,
  ): ClientUnaryCall;
  getCurrentAssociationQuestionarre(
    request: GetCurrentAssociationQuestionarreReq,
    callback: (
      error: ServiceError | null,
      response: GetCurrentAssociationQuestionarreRes,
    ) => void,
  ): ClientUnaryCall;
  getCurrentAssociationQuestionarre(
    request: GetCurrentAssociationQuestionarreReq,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetCurrentAssociationQuestionarreRes,
    ) => void,
  ): ClientUnaryCall;
  getCurrentAssociationQuestionarre(
    request: GetCurrentAssociationQuestionarreReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetCurrentAssociationQuestionarreRes,
    ) => void,
  ): ClientUnaryCall;
  updateAssociationQuestionarre(
    request: UpdateAssociationQuestionarreReq,
    callback: (
      error: ServiceError | null,
      response: UpdateAssociationQuestionarreRes,
    ) => void,
  ): ClientUnaryCall;
  updateAssociationQuestionarre(
    request: UpdateAssociationQuestionarreReq,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: UpdateAssociationQuestionarreRes,
    ) => void,
  ): ClientUnaryCall;
  updateAssociationQuestionarre(
    request: UpdateAssociationQuestionarreReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: UpdateAssociationQuestionarreRes,
    ) => void,
  ): ClientUnaryCall;
}

export const AssociationSrvClient = makeGenericClientConstructor(
  AssociationSrvService,
  "fy.association.v1.AssociationSrv",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): AssociationSrvClient;
  service: typeof AssociationSrvService;
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
