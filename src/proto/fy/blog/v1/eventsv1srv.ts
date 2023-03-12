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
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Event, EventTicket, Questionairre } from "./models";

export const protobufPackage = "fy.blog.v1";

export interface GetEventsReq {
  published?: boolean | undefined;
  skip: number;
  take: number;
  tags: string[];
  startFrom?: Date | undefined;
}

export interface GetEventsRes {
  events: Event[];
  total: number;
}

export interface GetEventReq {
  eventId: string;
}

export interface GetEventRes {
  event: Event | undefined;
}

export interface GetEventBySlugReq {
  slug: string;
}

export interface GetEventBySlugRes {
  event: Event | undefined;
}

export interface CreateEventReq {
  authorId: string;
  tags: string[];
  description: string;
  body: string;
  title: string;
  featuredImage: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
  location: string;
  maxSubscriptions: number;
  reservedOnlyToMembers: boolean;
  externalRegistrationLink: string;
  invitationCodes: string[];
}

export interface CreateEventRes {
  event: Event | undefined;
}

export interface UpdateEventReq {
  eventId: string;
  description?: string | undefined;
  body?: string | undefined;
  title?: string | undefined;
  featuredImage?: string | undefined;
  startDate?: Date | undefined;
  endDate?: Date | undefined;
  location?: string | undefined;
  questionairre?: Questionairre | undefined;
  maxSubscriptions?: number | undefined;
  subscriptionsOpened?: boolean | undefined;
  reservedOnlyToMembers?: boolean | undefined;
  externalRegistrationLink?: string | undefined;
  invitationCodes?: StringArray | undefined;
  tags?: StringArray | undefined;
}

export interface UpdateEventRes {
  event: Event | undefined;
}

export interface PublishEventReq {
  eventId: string;
}

export interface PublishEventRes {
  event: Event | undefined;
}

export interface DeleteEventReq {
  eventId: string;
}

export interface DeleteEventRes {
  event: Event | undefined;
}

export interface GetEventTicketsReq {
  eventId: string;
  skip: number;
  take: number;
}

export interface GetEventTicketsRes {
  tickets: EventTicket[];
  total: number;
}

export interface GetEventTicketReq {
  eventId: string;
  ticketId: string;
}

export interface GetEventTicketRes {
  ticket: EventTicket | undefined;
}

export interface GetEventTicketByTokenReq {
  eventId: string;
  token: string;
}

export interface GetEventTicketByTokenRes {
  ticket: EventTicket | undefined;
}

export interface UpsertEventTicketReq {
  eventId: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  answers: { [key: string]: string };
  privacy: boolean;
  recordingConsensus: boolean;
}

export interface UpsertEventTicketReq_AnswersEntry {
  key: string;
  value: string;
}

export interface UpsertEventTicketRes {
  ticket: EventTicket | undefined;
}

export interface ConfirmEventTicketReq {
  eventId: string;
  token: string;
}

export interface ConfirmEventTicketRes {
  ticket: EventTicket | undefined;
}

export interface EventIsOpenReq {
  eventId: string;
}

export interface EventIsOpenRes {
  isOpen: boolean;
}

export interface StringArray {
  values: string[];
}

function createBaseGetEventsReq(): GetEventsReq {
  return { published: undefined, skip: 0, take: 0, tags: [], startFrom: undefined };
}

export const GetEventsReq = {
  encode(message: GetEventsReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.published !== undefined) {
      writer.uint32(8).bool(message.published);
    }
    if (message.skip !== 0) {
      writer.uint32(16).uint32(message.skip);
    }
    if (message.take !== 0) {
      writer.uint32(24).uint32(message.take);
    }
    for (const v of message.tags) {
      writer.uint32(34).string(v!);
    }
    if (message.startFrom !== undefined) {
      Timestamp.encode(toTimestamp(message.startFrom), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetEventsReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetEventsReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.published = reader.bool();
          break;
        case 2:
          message.skip = reader.uint32();
          break;
        case 3:
          message.take = reader.uint32();
          break;
        case 4:
          message.tags.push(reader.string());
          break;
        case 5:
          message.startFrom = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetEventsReq {
    return {
      published: isSet(object.published) ? Boolean(object.published) : undefined,
      skip: isSet(object.skip) ? Number(object.skip) : 0,
      take: isSet(object.take) ? Number(object.take) : 0,
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      startFrom: isSet(object.startFrom) ? fromJsonTimestamp(object.startFrom) : undefined,
    };
  },

  toJSON(message: GetEventsReq): unknown {
    const obj: any = {};
    message.published !== undefined && (obj.published = message.published);
    message.skip !== undefined && (obj.skip = Math.round(message.skip));
    message.take !== undefined && (obj.take = Math.round(message.take));
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.startFrom !== undefined && (obj.startFrom = message.startFrom.toISOString());
    return obj;
  },

  create<I extends Exact<DeepPartial<GetEventsReq>, I>>(base?: I): GetEventsReq {
    return GetEventsReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetEventsReq>, I>>(object: I): GetEventsReq {
    const message = createBaseGetEventsReq();
    message.published = object.published ?? undefined;
    message.skip = object.skip ?? 0;
    message.take = object.take ?? 0;
    message.tags = object.tags?.map((e) => e) || [];
    message.startFrom = object.startFrom ?? undefined;
    return message;
  },
};

function createBaseGetEventsRes(): GetEventsRes {
  return { events: [], total: 0 };
}

export const GetEventsRes = {
  encode(message: GetEventsRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total !== 0) {
      writer.uint32(16).uint32(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetEventsRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetEventsRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(Event.decode(reader, reader.uint32()));
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

  fromJSON(object: any): GetEventsRes {
    return {
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromJSON(e)) : [],
      total: isSet(object.total) ? Number(object.total) : 0,
    };
  },

  toJSON(message: GetEventsRes): unknown {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map((e) => e ? Event.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    message.total !== undefined && (obj.total = Math.round(message.total));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetEventsRes>, I>>(base?: I): GetEventsRes {
    return GetEventsRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetEventsRes>, I>>(object: I): GetEventsRes {
    const message = createBaseGetEventsRes();
    message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
    message.total = object.total ?? 0;
    return message;
  },
};

function createBaseGetEventReq(): GetEventReq {
  return { eventId: "" };
}

export const GetEventReq = {
  encode(message: GetEventReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== "") {
      writer.uint32(10).string(message.eventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetEventReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetEventReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetEventReq {
    return { eventId: isSet(object.eventId) ? String(object.eventId) : "" };
  },

  toJSON(message: GetEventReq): unknown {
    const obj: any = {};
    message.eventId !== undefined && (obj.eventId = message.eventId);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetEventReq>, I>>(base?: I): GetEventReq {
    return GetEventReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetEventReq>, I>>(object: I): GetEventReq {
    const message = createBaseGetEventReq();
    message.eventId = object.eventId ?? "";
    return message;
  },
};

function createBaseGetEventRes(): GetEventRes {
  return { event: undefined };
}

export const GetEventRes = {
  encode(message: GetEventRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.event !== undefined) {
      Event.encode(message.event, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetEventRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetEventRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.event = Event.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetEventRes {
    return { event: isSet(object.event) ? Event.fromJSON(object.event) : undefined };
  },

  toJSON(message: GetEventRes): unknown {
    const obj: any = {};
    message.event !== undefined && (obj.event = message.event ? Event.toJSON(message.event) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetEventRes>, I>>(base?: I): GetEventRes {
    return GetEventRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetEventRes>, I>>(object: I): GetEventRes {
    const message = createBaseGetEventRes();
    message.event = (object.event !== undefined && object.event !== null) ? Event.fromPartial(object.event) : undefined;
    return message;
  },
};

function createBaseGetEventBySlugReq(): GetEventBySlugReq {
  return { slug: "" };
}

export const GetEventBySlugReq = {
  encode(message: GetEventBySlugReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.slug !== "") {
      writer.uint32(10).string(message.slug);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetEventBySlugReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetEventBySlugReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slug = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetEventBySlugReq {
    return { slug: isSet(object.slug) ? String(object.slug) : "" };
  },

  toJSON(message: GetEventBySlugReq): unknown {
    const obj: any = {};
    message.slug !== undefined && (obj.slug = message.slug);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetEventBySlugReq>, I>>(base?: I): GetEventBySlugReq {
    return GetEventBySlugReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetEventBySlugReq>, I>>(object: I): GetEventBySlugReq {
    const message = createBaseGetEventBySlugReq();
    message.slug = object.slug ?? "";
    return message;
  },
};

function createBaseGetEventBySlugRes(): GetEventBySlugRes {
  return { event: undefined };
}

export const GetEventBySlugRes = {
  encode(message: GetEventBySlugRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.event !== undefined) {
      Event.encode(message.event, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetEventBySlugRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetEventBySlugRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.event = Event.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetEventBySlugRes {
    return { event: isSet(object.event) ? Event.fromJSON(object.event) : undefined };
  },

  toJSON(message: GetEventBySlugRes): unknown {
    const obj: any = {};
    message.event !== undefined && (obj.event = message.event ? Event.toJSON(message.event) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetEventBySlugRes>, I>>(base?: I): GetEventBySlugRes {
    return GetEventBySlugRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetEventBySlugRes>, I>>(object: I): GetEventBySlugRes {
    const message = createBaseGetEventBySlugRes();
    message.event = (object.event !== undefined && object.event !== null) ? Event.fromPartial(object.event) : undefined;
    return message;
  },
};

function createBaseCreateEventReq(): CreateEventReq {
  return {
    authorId: "",
    tags: [],
    description: "",
    body: "",
    title: "",
    featuredImage: "",
    startDate: undefined,
    endDate: undefined,
    location: "",
    maxSubscriptions: 0,
    reservedOnlyToMembers: false,
    externalRegistrationLink: "",
    invitationCodes: [],
  };
}

export const CreateEventReq = {
  encode(message: CreateEventReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authorId !== "") {
      writer.uint32(10).string(message.authorId);
    }
    for (const v of message.tags) {
      writer.uint32(18).string(v!);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.body !== "") {
      writer.uint32(34).string(message.body);
    }
    if (message.title !== "") {
      writer.uint32(42).string(message.title);
    }
    if (message.featuredImage !== "") {
      writer.uint32(50).string(message.featuredImage);
    }
    if (message.startDate !== undefined) {
      Timestamp.encode(toTimestamp(message.startDate), writer.uint32(58).fork()).ldelim();
    }
    if (message.endDate !== undefined) {
      Timestamp.encode(toTimestamp(message.endDate), writer.uint32(66).fork()).ldelim();
    }
    if (message.location !== "") {
      writer.uint32(74).string(message.location);
    }
    if (message.maxSubscriptions !== 0) {
      writer.uint32(80).uint32(message.maxSubscriptions);
    }
    if (message.reservedOnlyToMembers === true) {
      writer.uint32(144).bool(message.reservedOnlyToMembers);
    }
    if (message.externalRegistrationLink !== "") {
      writer.uint32(154).string(message.externalRegistrationLink);
    }
    for (const v of message.invitationCodes) {
      writer.uint32(162).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateEventReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateEventReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorId = reader.string();
          break;
        case 2:
          message.tags.push(reader.string());
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.body = reader.string();
          break;
        case 5:
          message.title = reader.string();
          break;
        case 6:
          message.featuredImage = reader.string();
          break;
        case 7:
          message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 8:
          message.endDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 9:
          message.location = reader.string();
          break;
        case 10:
          message.maxSubscriptions = reader.uint32();
          break;
        case 18:
          message.reservedOnlyToMembers = reader.bool();
          break;
        case 19:
          message.externalRegistrationLink = reader.string();
          break;
        case 20:
          message.invitationCodes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateEventReq {
    return {
      authorId: isSet(object.authorId) ? String(object.authorId) : "",
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      description: isSet(object.description) ? String(object.description) : "",
      body: isSet(object.body) ? String(object.body) : "",
      title: isSet(object.title) ? String(object.title) : "",
      featuredImage: isSet(object.featuredImage) ? String(object.featuredImage) : "",
      startDate: isSet(object.startDate) ? fromJsonTimestamp(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? fromJsonTimestamp(object.endDate) : undefined,
      location: isSet(object.location) ? String(object.location) : "",
      maxSubscriptions: isSet(object.maxSubscriptions) ? Number(object.maxSubscriptions) : 0,
      reservedOnlyToMembers: isSet(object.reservedOnlyToMembers) ? Boolean(object.reservedOnlyToMembers) : false,
      externalRegistrationLink: isSet(object.externalRegistrationLink) ? String(object.externalRegistrationLink) : "",
      invitationCodes: Array.isArray(object?.invitationCodes) ? object.invitationCodes.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: CreateEventReq): unknown {
    const obj: any = {};
    message.authorId !== undefined && (obj.authorId = message.authorId);
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.description !== undefined && (obj.description = message.description);
    message.body !== undefined && (obj.body = message.body);
    message.title !== undefined && (obj.title = message.title);
    message.featuredImage !== undefined && (obj.featuredImage = message.featuredImage);
    message.startDate !== undefined && (obj.startDate = message.startDate.toISOString());
    message.endDate !== undefined && (obj.endDate = message.endDate.toISOString());
    message.location !== undefined && (obj.location = message.location);
    message.maxSubscriptions !== undefined && (obj.maxSubscriptions = Math.round(message.maxSubscriptions));
    message.reservedOnlyToMembers !== undefined && (obj.reservedOnlyToMembers = message.reservedOnlyToMembers);
    message.externalRegistrationLink !== undefined && (obj.externalRegistrationLink = message.externalRegistrationLink);
    if (message.invitationCodes) {
      obj.invitationCodes = message.invitationCodes.map((e) => e);
    } else {
      obj.invitationCodes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateEventReq>, I>>(base?: I): CreateEventReq {
    return CreateEventReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateEventReq>, I>>(object: I): CreateEventReq {
    const message = createBaseCreateEventReq();
    message.authorId = object.authorId ?? "";
    message.tags = object.tags?.map((e) => e) || [];
    message.description = object.description ?? "";
    message.body = object.body ?? "";
    message.title = object.title ?? "";
    message.featuredImage = object.featuredImage ?? "";
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.location = object.location ?? "";
    message.maxSubscriptions = object.maxSubscriptions ?? 0;
    message.reservedOnlyToMembers = object.reservedOnlyToMembers ?? false;
    message.externalRegistrationLink = object.externalRegistrationLink ?? "";
    message.invitationCodes = object.invitationCodes?.map((e) => e) || [];
    return message;
  },
};

function createBaseCreateEventRes(): CreateEventRes {
  return { event: undefined };
}

export const CreateEventRes = {
  encode(message: CreateEventRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.event !== undefined) {
      Event.encode(message.event, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateEventRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateEventRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.event = Event.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateEventRes {
    return { event: isSet(object.event) ? Event.fromJSON(object.event) : undefined };
  },

  toJSON(message: CreateEventRes): unknown {
    const obj: any = {};
    message.event !== undefined && (obj.event = message.event ? Event.toJSON(message.event) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateEventRes>, I>>(base?: I): CreateEventRes {
    return CreateEventRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateEventRes>, I>>(object: I): CreateEventRes {
    const message = createBaseCreateEventRes();
    message.event = (object.event !== undefined && object.event !== null) ? Event.fromPartial(object.event) : undefined;
    return message;
  },
};

function createBaseUpdateEventReq(): UpdateEventReq {
  return {
    eventId: "",
    description: undefined,
    body: undefined,
    title: undefined,
    featuredImage: undefined,
    startDate: undefined,
    endDate: undefined,
    location: undefined,
    questionairre: undefined,
    maxSubscriptions: undefined,
    subscriptionsOpened: undefined,
    reservedOnlyToMembers: undefined,
    externalRegistrationLink: undefined,
    invitationCodes: undefined,
    tags: undefined,
  };
}

export const UpdateEventReq = {
  encode(message: UpdateEventReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== "") {
      writer.uint32(10).string(message.eventId);
    }
    if (message.description !== undefined) {
      writer.uint32(26).string(message.description);
    }
    if (message.body !== undefined) {
      writer.uint32(34).string(message.body);
    }
    if (message.title !== undefined) {
      writer.uint32(42).string(message.title);
    }
    if (message.featuredImage !== undefined) {
      writer.uint32(50).string(message.featuredImage);
    }
    if (message.startDate !== undefined) {
      Timestamp.encode(toTimestamp(message.startDate), writer.uint32(58).fork()).ldelim();
    }
    if (message.endDate !== undefined) {
      Timestamp.encode(toTimestamp(message.endDate), writer.uint32(66).fork()).ldelim();
    }
    if (message.location !== undefined) {
      writer.uint32(74).string(message.location);
    }
    if (message.questionairre !== undefined) {
      Questionairre.encode(message.questionairre, writer.uint32(82).fork()).ldelim();
    }
    if (message.maxSubscriptions !== undefined) {
      writer.uint32(88).uint32(message.maxSubscriptions);
    }
    if (message.subscriptionsOpened !== undefined) {
      writer.uint32(96).bool(message.subscriptionsOpened);
    }
    if (message.reservedOnlyToMembers !== undefined) {
      writer.uint32(144).bool(message.reservedOnlyToMembers);
    }
    if (message.externalRegistrationLink !== undefined) {
      writer.uint32(154).string(message.externalRegistrationLink);
    }
    if (message.invitationCodes !== undefined) {
      StringArray.encode(message.invitationCodes, writer.uint32(162).fork()).ldelim();
    }
    if (message.tags !== undefined) {
      StringArray.encode(message.tags, writer.uint32(170).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateEventReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateEventReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventId = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.body = reader.string();
          break;
        case 5:
          message.title = reader.string();
          break;
        case 6:
          message.featuredImage = reader.string();
          break;
        case 7:
          message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 8:
          message.endDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 9:
          message.location = reader.string();
          break;
        case 10:
          message.questionairre = Questionairre.decode(reader, reader.uint32());
          break;
        case 11:
          message.maxSubscriptions = reader.uint32();
          break;
        case 12:
          message.subscriptionsOpened = reader.bool();
          break;
        case 18:
          message.reservedOnlyToMembers = reader.bool();
          break;
        case 19:
          message.externalRegistrationLink = reader.string();
          break;
        case 20:
          message.invitationCodes = StringArray.decode(reader, reader.uint32());
          break;
        case 21:
          message.tags = StringArray.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateEventReq {
    return {
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
      description: isSet(object.description) ? String(object.description) : undefined,
      body: isSet(object.body) ? String(object.body) : undefined,
      title: isSet(object.title) ? String(object.title) : undefined,
      featuredImage: isSet(object.featuredImage) ? String(object.featuredImage) : undefined,
      startDate: isSet(object.startDate) ? fromJsonTimestamp(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? fromJsonTimestamp(object.endDate) : undefined,
      location: isSet(object.location) ? String(object.location) : undefined,
      questionairre: isSet(object.questionairre) ? Questionairre.fromJSON(object.questionairre) : undefined,
      maxSubscriptions: isSet(object.maxSubscriptions) ? Number(object.maxSubscriptions) : undefined,
      subscriptionsOpened: isSet(object.subscriptionsOpened) ? Boolean(object.subscriptionsOpened) : undefined,
      reservedOnlyToMembers: isSet(object.reservedOnlyToMembers) ? Boolean(object.reservedOnlyToMembers) : undefined,
      externalRegistrationLink: isSet(object.externalRegistrationLink)
        ? String(object.externalRegistrationLink)
        : undefined,
      invitationCodes: isSet(object.invitationCodes) ? StringArray.fromJSON(object.invitationCodes) : undefined,
      tags: isSet(object.tags) ? StringArray.fromJSON(object.tags) : undefined,
    };
  },

  toJSON(message: UpdateEventReq): unknown {
    const obj: any = {};
    message.eventId !== undefined && (obj.eventId = message.eventId);
    message.description !== undefined && (obj.description = message.description);
    message.body !== undefined && (obj.body = message.body);
    message.title !== undefined && (obj.title = message.title);
    message.featuredImage !== undefined && (obj.featuredImage = message.featuredImage);
    message.startDate !== undefined && (obj.startDate = message.startDate.toISOString());
    message.endDate !== undefined && (obj.endDate = message.endDate.toISOString());
    message.location !== undefined && (obj.location = message.location);
    message.questionairre !== undefined &&
      (obj.questionairre = message.questionairre ? Questionairre.toJSON(message.questionairre) : undefined);
    message.maxSubscriptions !== undefined && (obj.maxSubscriptions = Math.round(message.maxSubscriptions));
    message.subscriptionsOpened !== undefined && (obj.subscriptionsOpened = message.subscriptionsOpened);
    message.reservedOnlyToMembers !== undefined && (obj.reservedOnlyToMembers = message.reservedOnlyToMembers);
    message.externalRegistrationLink !== undefined && (obj.externalRegistrationLink = message.externalRegistrationLink);
    message.invitationCodes !== undefined &&
      (obj.invitationCodes = message.invitationCodes ? StringArray.toJSON(message.invitationCodes) : undefined);
    message.tags !== undefined && (obj.tags = message.tags ? StringArray.toJSON(message.tags) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateEventReq>, I>>(base?: I): UpdateEventReq {
    return UpdateEventReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateEventReq>, I>>(object: I): UpdateEventReq {
    const message = createBaseUpdateEventReq();
    message.eventId = object.eventId ?? "";
    message.description = object.description ?? undefined;
    message.body = object.body ?? undefined;
    message.title = object.title ?? undefined;
    message.featuredImage = object.featuredImage ?? undefined;
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.location = object.location ?? undefined;
    message.questionairre = (object.questionairre !== undefined && object.questionairre !== null)
      ? Questionairre.fromPartial(object.questionairre)
      : undefined;
    message.maxSubscriptions = object.maxSubscriptions ?? undefined;
    message.subscriptionsOpened = object.subscriptionsOpened ?? undefined;
    message.reservedOnlyToMembers = object.reservedOnlyToMembers ?? undefined;
    message.externalRegistrationLink = object.externalRegistrationLink ?? undefined;
    message.invitationCodes = (object.invitationCodes !== undefined && object.invitationCodes !== null)
      ? StringArray.fromPartial(object.invitationCodes)
      : undefined;
    message.tags = (object.tags !== undefined && object.tags !== null)
      ? StringArray.fromPartial(object.tags)
      : undefined;
    return message;
  },
};

function createBaseUpdateEventRes(): UpdateEventRes {
  return { event: undefined };
}

export const UpdateEventRes = {
  encode(message: UpdateEventRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.event !== undefined) {
      Event.encode(message.event, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateEventRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateEventRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.event = Event.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateEventRes {
    return { event: isSet(object.event) ? Event.fromJSON(object.event) : undefined };
  },

  toJSON(message: UpdateEventRes): unknown {
    const obj: any = {};
    message.event !== undefined && (obj.event = message.event ? Event.toJSON(message.event) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateEventRes>, I>>(base?: I): UpdateEventRes {
    return UpdateEventRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateEventRes>, I>>(object: I): UpdateEventRes {
    const message = createBaseUpdateEventRes();
    message.event = (object.event !== undefined && object.event !== null) ? Event.fromPartial(object.event) : undefined;
    return message;
  },
};

function createBasePublishEventReq(): PublishEventReq {
  return { eventId: "" };
}

export const PublishEventReq = {
  encode(message: PublishEventReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== "") {
      writer.uint32(10).string(message.eventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishEventReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishEventReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PublishEventReq {
    return { eventId: isSet(object.eventId) ? String(object.eventId) : "" };
  },

  toJSON(message: PublishEventReq): unknown {
    const obj: any = {};
    message.eventId !== undefined && (obj.eventId = message.eventId);
    return obj;
  },

  create<I extends Exact<DeepPartial<PublishEventReq>, I>>(base?: I): PublishEventReq {
    return PublishEventReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PublishEventReq>, I>>(object: I): PublishEventReq {
    const message = createBasePublishEventReq();
    message.eventId = object.eventId ?? "";
    return message;
  },
};

function createBasePublishEventRes(): PublishEventRes {
  return { event: undefined };
}

export const PublishEventRes = {
  encode(message: PublishEventRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.event !== undefined) {
      Event.encode(message.event, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishEventRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishEventRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.event = Event.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PublishEventRes {
    return { event: isSet(object.event) ? Event.fromJSON(object.event) : undefined };
  },

  toJSON(message: PublishEventRes): unknown {
    const obj: any = {};
    message.event !== undefined && (obj.event = message.event ? Event.toJSON(message.event) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<PublishEventRes>, I>>(base?: I): PublishEventRes {
    return PublishEventRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PublishEventRes>, I>>(object: I): PublishEventRes {
    const message = createBasePublishEventRes();
    message.event = (object.event !== undefined && object.event !== null) ? Event.fromPartial(object.event) : undefined;
    return message;
  },
};

function createBaseDeleteEventReq(): DeleteEventReq {
  return { eventId: "" };
}

export const DeleteEventReq = {
  encode(message: DeleteEventReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== "") {
      writer.uint32(10).string(message.eventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteEventReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteEventReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteEventReq {
    return { eventId: isSet(object.eventId) ? String(object.eventId) : "" };
  },

  toJSON(message: DeleteEventReq): unknown {
    const obj: any = {};
    message.eventId !== undefined && (obj.eventId = message.eventId);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteEventReq>, I>>(base?: I): DeleteEventReq {
    return DeleteEventReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteEventReq>, I>>(object: I): DeleteEventReq {
    const message = createBaseDeleteEventReq();
    message.eventId = object.eventId ?? "";
    return message;
  },
};

function createBaseDeleteEventRes(): DeleteEventRes {
  return { event: undefined };
}

export const DeleteEventRes = {
  encode(message: DeleteEventRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.event !== undefined) {
      Event.encode(message.event, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteEventRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteEventRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.event = Event.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteEventRes {
    return { event: isSet(object.event) ? Event.fromJSON(object.event) : undefined };
  },

  toJSON(message: DeleteEventRes): unknown {
    const obj: any = {};
    message.event !== undefined && (obj.event = message.event ? Event.toJSON(message.event) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteEventRes>, I>>(base?: I): DeleteEventRes {
    return DeleteEventRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteEventRes>, I>>(object: I): DeleteEventRes {
    const message = createBaseDeleteEventRes();
    message.event = (object.event !== undefined && object.event !== null) ? Event.fromPartial(object.event) : undefined;
    return message;
  },
};

function createBaseGetEventTicketsReq(): GetEventTicketsReq {
  return { eventId: "", skip: 0, take: 0 };
}

export const GetEventTicketsReq = {
  encode(message: GetEventTicketsReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== "") {
      writer.uint32(10).string(message.eventId);
    }
    if (message.skip !== 0) {
      writer.uint32(16).uint32(message.skip);
    }
    if (message.take !== 0) {
      writer.uint32(24).uint32(message.take);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetEventTicketsReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetEventTicketsReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventId = reader.string();
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

  fromJSON(object: any): GetEventTicketsReq {
    return {
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
      skip: isSet(object.skip) ? Number(object.skip) : 0,
      take: isSet(object.take) ? Number(object.take) : 0,
    };
  },

  toJSON(message: GetEventTicketsReq): unknown {
    const obj: any = {};
    message.eventId !== undefined && (obj.eventId = message.eventId);
    message.skip !== undefined && (obj.skip = Math.round(message.skip));
    message.take !== undefined && (obj.take = Math.round(message.take));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetEventTicketsReq>, I>>(base?: I): GetEventTicketsReq {
    return GetEventTicketsReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetEventTicketsReq>, I>>(object: I): GetEventTicketsReq {
    const message = createBaseGetEventTicketsReq();
    message.eventId = object.eventId ?? "";
    message.skip = object.skip ?? 0;
    message.take = object.take ?? 0;
    return message;
  },
};

function createBaseGetEventTicketsRes(): GetEventTicketsRes {
  return { tickets: [], total: 0 };
}

export const GetEventTicketsRes = {
  encode(message: GetEventTicketsRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tickets) {
      EventTicket.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total !== 0) {
      writer.uint32(16).uint32(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetEventTicketsRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetEventTicketsRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tickets.push(EventTicket.decode(reader, reader.uint32()));
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

  fromJSON(object: any): GetEventTicketsRes {
    return {
      tickets: Array.isArray(object?.tickets) ? object.tickets.map((e: any) => EventTicket.fromJSON(e)) : [],
      total: isSet(object.total) ? Number(object.total) : 0,
    };
  },

  toJSON(message: GetEventTicketsRes): unknown {
    const obj: any = {};
    if (message.tickets) {
      obj.tickets = message.tickets.map((e) => e ? EventTicket.toJSON(e) : undefined);
    } else {
      obj.tickets = [];
    }
    message.total !== undefined && (obj.total = Math.round(message.total));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetEventTicketsRes>, I>>(base?: I): GetEventTicketsRes {
    return GetEventTicketsRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetEventTicketsRes>, I>>(object: I): GetEventTicketsRes {
    const message = createBaseGetEventTicketsRes();
    message.tickets = object.tickets?.map((e) => EventTicket.fromPartial(e)) || [];
    message.total = object.total ?? 0;
    return message;
  },
};

function createBaseGetEventTicketReq(): GetEventTicketReq {
  return { eventId: "", ticketId: "" };
}

export const GetEventTicketReq = {
  encode(message: GetEventTicketReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== "") {
      writer.uint32(10).string(message.eventId);
    }
    if (message.ticketId !== "") {
      writer.uint32(18).string(message.ticketId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetEventTicketReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetEventTicketReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventId = reader.string();
          break;
        case 2:
          message.ticketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetEventTicketReq {
    return {
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
      ticketId: isSet(object.ticketId) ? String(object.ticketId) : "",
    };
  },

  toJSON(message: GetEventTicketReq): unknown {
    const obj: any = {};
    message.eventId !== undefined && (obj.eventId = message.eventId);
    message.ticketId !== undefined && (obj.ticketId = message.ticketId);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetEventTicketReq>, I>>(base?: I): GetEventTicketReq {
    return GetEventTicketReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetEventTicketReq>, I>>(object: I): GetEventTicketReq {
    const message = createBaseGetEventTicketReq();
    message.eventId = object.eventId ?? "";
    message.ticketId = object.ticketId ?? "";
    return message;
  },
};

function createBaseGetEventTicketRes(): GetEventTicketRes {
  return { ticket: undefined };
}

export const GetEventTicketRes = {
  encode(message: GetEventTicketRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ticket !== undefined) {
      EventTicket.encode(message.ticket, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetEventTicketRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetEventTicketRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ticket = EventTicket.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetEventTicketRes {
    return { ticket: isSet(object.ticket) ? EventTicket.fromJSON(object.ticket) : undefined };
  },

  toJSON(message: GetEventTicketRes): unknown {
    const obj: any = {};
    message.ticket !== undefined && (obj.ticket = message.ticket ? EventTicket.toJSON(message.ticket) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetEventTicketRes>, I>>(base?: I): GetEventTicketRes {
    return GetEventTicketRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetEventTicketRes>, I>>(object: I): GetEventTicketRes {
    const message = createBaseGetEventTicketRes();
    message.ticket = (object.ticket !== undefined && object.ticket !== null)
      ? EventTicket.fromPartial(object.ticket)
      : undefined;
    return message;
  },
};

function createBaseGetEventTicketByTokenReq(): GetEventTicketByTokenReq {
  return { eventId: "", token: "" };
}

export const GetEventTicketByTokenReq = {
  encode(message: GetEventTicketByTokenReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== "") {
      writer.uint32(10).string(message.eventId);
    }
    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetEventTicketByTokenReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetEventTicketByTokenReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventId = reader.string();
          break;
        case 2:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetEventTicketByTokenReq {
    return {
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
      token: isSet(object.token) ? String(object.token) : "",
    };
  },

  toJSON(message: GetEventTicketByTokenReq): unknown {
    const obj: any = {};
    message.eventId !== undefined && (obj.eventId = message.eventId);
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetEventTicketByTokenReq>, I>>(base?: I): GetEventTicketByTokenReq {
    return GetEventTicketByTokenReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetEventTicketByTokenReq>, I>>(object: I): GetEventTicketByTokenReq {
    const message = createBaseGetEventTicketByTokenReq();
    message.eventId = object.eventId ?? "";
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseGetEventTicketByTokenRes(): GetEventTicketByTokenRes {
  return { ticket: undefined };
}

export const GetEventTicketByTokenRes = {
  encode(message: GetEventTicketByTokenRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ticket !== undefined) {
      EventTicket.encode(message.ticket, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetEventTicketByTokenRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetEventTicketByTokenRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ticket = EventTicket.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetEventTicketByTokenRes {
    return { ticket: isSet(object.ticket) ? EventTicket.fromJSON(object.ticket) : undefined };
  },

  toJSON(message: GetEventTicketByTokenRes): unknown {
    const obj: any = {};
    message.ticket !== undefined && (obj.ticket = message.ticket ? EventTicket.toJSON(message.ticket) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetEventTicketByTokenRes>, I>>(base?: I): GetEventTicketByTokenRes {
    return GetEventTicketByTokenRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetEventTicketByTokenRes>, I>>(object: I): GetEventTicketByTokenRes {
    const message = createBaseGetEventTicketByTokenRes();
    message.ticket = (object.ticket !== undefined && object.ticket !== null)
      ? EventTicket.fromPartial(object.ticket)
      : undefined;
    return message;
  },
};

function createBaseUpsertEventTicketReq(): UpsertEventTicketReq {
  return {
    eventId: "",
    email: "",
    firstName: "",
    lastName: "",
    avatar: "",
    answers: {},
    privacy: false,
    recordingConsensus: false,
  };
}

export const UpsertEventTicketReq = {
  encode(message: UpsertEventTicketReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== "") {
      writer.uint32(10).string(message.eventId);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.firstName !== "") {
      writer.uint32(26).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(34).string(message.lastName);
    }
    if (message.avatar !== "") {
      writer.uint32(42).string(message.avatar);
    }
    Object.entries(message.answers).forEach(([key, value]) => {
      UpsertEventTicketReq_AnswersEntry.encode({ key: key as any, value }, writer.uint32(50).fork()).ldelim();
    });
    if (message.privacy === true) {
      writer.uint32(56).bool(message.privacy);
    }
    if (message.recordingConsensus === true) {
      writer.uint32(64).bool(message.recordingConsensus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpsertEventTicketReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpsertEventTicketReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventId = reader.string();
          break;
        case 2:
          message.email = reader.string();
          break;
        case 3:
          message.firstName = reader.string();
          break;
        case 4:
          message.lastName = reader.string();
          break;
        case 5:
          message.avatar = reader.string();
          break;
        case 6:
          const entry6 = UpsertEventTicketReq_AnswersEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.answers[entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.privacy = reader.bool();
          break;
        case 8:
          message.recordingConsensus = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpsertEventTicketReq {
    return {
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
      email: isSet(object.email) ? String(object.email) : "",
      firstName: isSet(object.firstName) ? String(object.firstName) : "",
      lastName: isSet(object.lastName) ? String(object.lastName) : "",
      avatar: isSet(object.avatar) ? String(object.avatar) : "",
      answers: isObject(object.answers)
        ? Object.entries(object.answers).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      privacy: isSet(object.privacy) ? Boolean(object.privacy) : false,
      recordingConsensus: isSet(object.recordingConsensus) ? Boolean(object.recordingConsensus) : false,
    };
  },

  toJSON(message: UpsertEventTicketReq): unknown {
    const obj: any = {};
    message.eventId !== undefined && (obj.eventId = message.eventId);
    message.email !== undefined && (obj.email = message.email);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.avatar !== undefined && (obj.avatar = message.avatar);
    obj.answers = {};
    if (message.answers) {
      Object.entries(message.answers).forEach(([k, v]) => {
        obj.answers[k] = v;
      });
    }
    message.privacy !== undefined && (obj.privacy = message.privacy);
    message.recordingConsensus !== undefined && (obj.recordingConsensus = message.recordingConsensus);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpsertEventTicketReq>, I>>(base?: I): UpsertEventTicketReq {
    return UpsertEventTicketReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpsertEventTicketReq>, I>>(object: I): UpsertEventTicketReq {
    const message = createBaseUpsertEventTicketReq();
    message.eventId = object.eventId ?? "";
    message.email = object.email ?? "";
    message.firstName = object.firstName ?? "";
    message.lastName = object.lastName ?? "";
    message.avatar = object.avatar ?? "";
    message.answers = Object.entries(object.answers ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.privacy = object.privacy ?? false;
    message.recordingConsensus = object.recordingConsensus ?? false;
    return message;
  },
};

function createBaseUpsertEventTicketReq_AnswersEntry(): UpsertEventTicketReq_AnswersEntry {
  return { key: "", value: "" };
}

export const UpsertEventTicketReq_AnswersEntry = {
  encode(message: UpsertEventTicketReq_AnswersEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpsertEventTicketReq_AnswersEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpsertEventTicketReq_AnswersEntry();
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

  fromJSON(object: any): UpsertEventTicketReq_AnswersEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: UpsertEventTicketReq_AnswersEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpsertEventTicketReq_AnswersEntry>, I>>(
    base?: I,
  ): UpsertEventTicketReq_AnswersEntry {
    return UpsertEventTicketReq_AnswersEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpsertEventTicketReq_AnswersEntry>, I>>(
    object: I,
  ): UpsertEventTicketReq_AnswersEntry {
    const message = createBaseUpsertEventTicketReq_AnswersEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseUpsertEventTicketRes(): UpsertEventTicketRes {
  return { ticket: undefined };
}

export const UpsertEventTicketRes = {
  encode(message: UpsertEventTicketRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ticket !== undefined) {
      EventTicket.encode(message.ticket, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpsertEventTicketRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpsertEventTicketRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ticket = EventTicket.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpsertEventTicketRes {
    return { ticket: isSet(object.ticket) ? EventTicket.fromJSON(object.ticket) : undefined };
  },

  toJSON(message: UpsertEventTicketRes): unknown {
    const obj: any = {};
    message.ticket !== undefined && (obj.ticket = message.ticket ? EventTicket.toJSON(message.ticket) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpsertEventTicketRes>, I>>(base?: I): UpsertEventTicketRes {
    return UpsertEventTicketRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpsertEventTicketRes>, I>>(object: I): UpsertEventTicketRes {
    const message = createBaseUpsertEventTicketRes();
    message.ticket = (object.ticket !== undefined && object.ticket !== null)
      ? EventTicket.fromPartial(object.ticket)
      : undefined;
    return message;
  },
};

function createBaseConfirmEventTicketReq(): ConfirmEventTicketReq {
  return { eventId: "", token: "" };
}

export const ConfirmEventTicketReq = {
  encode(message: ConfirmEventTicketReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== "") {
      writer.uint32(10).string(message.eventId);
    }
    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmEventTicketReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfirmEventTicketReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventId = reader.string();
          break;
        case 2:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfirmEventTicketReq {
    return {
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
      token: isSet(object.token) ? String(object.token) : "",
    };
  },

  toJSON(message: ConfirmEventTicketReq): unknown {
    const obj: any = {};
    message.eventId !== undefined && (obj.eventId = message.eventId);
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  create<I extends Exact<DeepPartial<ConfirmEventTicketReq>, I>>(base?: I): ConfirmEventTicketReq {
    return ConfirmEventTicketReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConfirmEventTicketReq>, I>>(object: I): ConfirmEventTicketReq {
    const message = createBaseConfirmEventTicketReq();
    message.eventId = object.eventId ?? "";
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseConfirmEventTicketRes(): ConfirmEventTicketRes {
  return { ticket: undefined };
}

export const ConfirmEventTicketRes = {
  encode(message: ConfirmEventTicketRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ticket !== undefined) {
      EventTicket.encode(message.ticket, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmEventTicketRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfirmEventTicketRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ticket = EventTicket.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfirmEventTicketRes {
    return { ticket: isSet(object.ticket) ? EventTicket.fromJSON(object.ticket) : undefined };
  },

  toJSON(message: ConfirmEventTicketRes): unknown {
    const obj: any = {};
    message.ticket !== undefined && (obj.ticket = message.ticket ? EventTicket.toJSON(message.ticket) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ConfirmEventTicketRes>, I>>(base?: I): ConfirmEventTicketRes {
    return ConfirmEventTicketRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConfirmEventTicketRes>, I>>(object: I): ConfirmEventTicketRes {
    const message = createBaseConfirmEventTicketRes();
    message.ticket = (object.ticket !== undefined && object.ticket !== null)
      ? EventTicket.fromPartial(object.ticket)
      : undefined;
    return message;
  },
};

function createBaseEventIsOpenReq(): EventIsOpenReq {
  return { eventId: "" };
}

export const EventIsOpenReq = {
  encode(message: EventIsOpenReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== "") {
      writer.uint32(10).string(message.eventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventIsOpenReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventIsOpenReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventIsOpenReq {
    return { eventId: isSet(object.eventId) ? String(object.eventId) : "" };
  },

  toJSON(message: EventIsOpenReq): unknown {
    const obj: any = {};
    message.eventId !== undefined && (obj.eventId = message.eventId);
    return obj;
  },

  create<I extends Exact<DeepPartial<EventIsOpenReq>, I>>(base?: I): EventIsOpenReq {
    return EventIsOpenReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventIsOpenReq>, I>>(object: I): EventIsOpenReq {
    const message = createBaseEventIsOpenReq();
    message.eventId = object.eventId ?? "";
    return message;
  },
};

function createBaseEventIsOpenRes(): EventIsOpenRes {
  return { isOpen: false };
}

export const EventIsOpenRes = {
  encode(message: EventIsOpenRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isOpen === true) {
      writer.uint32(8).bool(message.isOpen);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventIsOpenRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventIsOpenRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isOpen = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventIsOpenRes {
    return { isOpen: isSet(object.isOpen) ? Boolean(object.isOpen) : false };
  },

  toJSON(message: EventIsOpenRes): unknown {
    const obj: any = {};
    message.isOpen !== undefined && (obj.isOpen = message.isOpen);
    return obj;
  },

  create<I extends Exact<DeepPartial<EventIsOpenRes>, I>>(base?: I): EventIsOpenRes {
    return EventIsOpenRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventIsOpenRes>, I>>(object: I): EventIsOpenRes {
    const message = createBaseEventIsOpenRes();
    message.isOpen = object.isOpen ?? false;
    return message;
  },
};

function createBaseStringArray(): StringArray {
  return { values: [] };
}

export const StringArray = {
  encode(message: StringArray, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.values) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StringArray {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringArray();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StringArray {
    return { values: Array.isArray(object?.values) ? object.values.map((e: any) => String(e)) : [] };
  },

  toJSON(message: StringArray): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map((e) => e);
    } else {
      obj.values = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StringArray>, I>>(base?: I): StringArray {
    return StringArray.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StringArray>, I>>(object: I): StringArray {
    const message = createBaseStringArray();
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

export type EventsSrvService = typeof EventsSrvService;
export const EventsSrvService = {
  getEvents: {
    path: "/fy.blog.v1.EventsSrv/GetEvents",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetEventsReq) => Buffer.from(GetEventsReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetEventsReq.decode(value),
    responseSerialize: (value: GetEventsRes) => Buffer.from(GetEventsRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetEventsRes.decode(value),
  },
  getEvent: {
    path: "/fy.blog.v1.EventsSrv/GetEvent",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetEventReq) => Buffer.from(GetEventReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetEventReq.decode(value),
    responseSerialize: (value: GetEventRes) => Buffer.from(GetEventRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetEventRes.decode(value),
  },
  getEventBySlug: {
    path: "/fy.blog.v1.EventsSrv/GetEventBySlug",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetEventBySlugReq) => Buffer.from(GetEventBySlugReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetEventBySlugReq.decode(value),
    responseSerialize: (value: GetEventBySlugRes) => Buffer.from(GetEventBySlugRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetEventBySlugRes.decode(value),
  },
  createEvent: {
    path: "/fy.blog.v1.EventsSrv/CreateEvent",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateEventReq) => Buffer.from(CreateEventReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateEventReq.decode(value),
    responseSerialize: (value: CreateEventRes) => Buffer.from(CreateEventRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateEventRes.decode(value),
  },
  publishEvent: {
    path: "/fy.blog.v1.EventsSrv/PublishEvent",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PublishEventReq) => Buffer.from(PublishEventReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PublishEventReq.decode(value),
    responseSerialize: (value: PublishEventRes) => Buffer.from(PublishEventRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PublishEventRes.decode(value),
  },
  updateEvent: {
    path: "/fy.blog.v1.EventsSrv/UpdateEvent",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateEventReq) => Buffer.from(UpdateEventReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateEventReq.decode(value),
    responseSerialize: (value: UpdateEventRes) => Buffer.from(UpdateEventRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UpdateEventRes.decode(value),
  },
  deleteEvent: {
    path: "/fy.blog.v1.EventsSrv/DeleteEvent",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteEventReq) => Buffer.from(DeleteEventReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteEventReq.decode(value),
    responseSerialize: (value: DeleteEventRes) => Buffer.from(DeleteEventRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DeleteEventRes.decode(value),
  },
  eventIsOpen: {
    path: "/fy.blog.v1.EventsSrv/EventIsOpen",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: EventIsOpenReq) => Buffer.from(EventIsOpenReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => EventIsOpenReq.decode(value),
    responseSerialize: (value: EventIsOpenRes) => Buffer.from(EventIsOpenRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventIsOpenRes.decode(value),
  },
  getEventTickets: {
    path: "/fy.blog.v1.EventsSrv/GetEventTickets",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetEventTicketsReq) => Buffer.from(GetEventTicketsReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetEventTicketsReq.decode(value),
    responseSerialize: (value: GetEventTicketsRes) => Buffer.from(GetEventTicketsRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetEventTicketsRes.decode(value),
  },
  getEventTicket: {
    path: "/fy.blog.v1.EventsSrv/GetEventTicket",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetEventTicketReq) => Buffer.from(GetEventTicketReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetEventTicketReq.decode(value),
    responseSerialize: (value: GetEventTicketRes) => Buffer.from(GetEventTicketRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetEventTicketRes.decode(value),
  },
  getEventTicketByToken: {
    path: "/fy.blog.v1.EventsSrv/GetEventTicketByToken",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetEventTicketByTokenReq) => Buffer.from(GetEventTicketByTokenReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetEventTicketByTokenReq.decode(value),
    responseSerialize: (value: GetEventTicketByTokenRes) =>
      Buffer.from(GetEventTicketByTokenRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetEventTicketByTokenRes.decode(value),
  },
  upsertEventTicket: {
    path: "/fy.blog.v1.EventsSrv/UpsertEventTicket",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpsertEventTicketReq) => Buffer.from(UpsertEventTicketReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpsertEventTicketReq.decode(value),
    responseSerialize: (value: UpsertEventTicketRes) => Buffer.from(UpsertEventTicketRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UpsertEventTicketRes.decode(value),
  },
  confirmEventTicket: {
    path: "/fy.blog.v1.EventsSrv/ConfirmEventTicket",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ConfirmEventTicketReq) => Buffer.from(ConfirmEventTicketReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ConfirmEventTicketReq.decode(value),
    responseSerialize: (value: ConfirmEventTicketRes) => Buffer.from(ConfirmEventTicketRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ConfirmEventTicketRes.decode(value),
  },
} as const;

export interface EventsSrvServer extends UntypedServiceImplementation {
  getEvents: handleUnaryCall<GetEventsReq, GetEventsRes>;
  getEvent: handleUnaryCall<GetEventReq, GetEventRes>;
  getEventBySlug: handleUnaryCall<GetEventBySlugReq, GetEventBySlugRes>;
  createEvent: handleUnaryCall<CreateEventReq, CreateEventRes>;
  publishEvent: handleUnaryCall<PublishEventReq, PublishEventRes>;
  updateEvent: handleUnaryCall<UpdateEventReq, UpdateEventRes>;
  deleteEvent: handleUnaryCall<DeleteEventReq, DeleteEventRes>;
  eventIsOpen: handleUnaryCall<EventIsOpenReq, EventIsOpenRes>;
  getEventTickets: handleUnaryCall<GetEventTicketsReq, GetEventTicketsRes>;
  getEventTicket: handleUnaryCall<GetEventTicketReq, GetEventTicketRes>;
  getEventTicketByToken: handleUnaryCall<GetEventTicketByTokenReq, GetEventTicketByTokenRes>;
  upsertEventTicket: handleUnaryCall<UpsertEventTicketReq, UpsertEventTicketRes>;
  confirmEventTicket: handleUnaryCall<ConfirmEventTicketReq, ConfirmEventTicketRes>;
}

export interface EventsSrvClient extends Client {
  getEvents(
    request: GetEventsReq,
    callback: (error: ServiceError | null, response: GetEventsRes) => void,
  ): ClientUnaryCall;
  getEvents(
    request: GetEventsReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetEventsRes) => void,
  ): ClientUnaryCall;
  getEvents(
    request: GetEventsReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetEventsRes) => void,
  ): ClientUnaryCall;
  getEvent(
    request: GetEventReq,
    callback: (error: ServiceError | null, response: GetEventRes) => void,
  ): ClientUnaryCall;
  getEvent(
    request: GetEventReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetEventRes) => void,
  ): ClientUnaryCall;
  getEvent(
    request: GetEventReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetEventRes) => void,
  ): ClientUnaryCall;
  getEventBySlug(
    request: GetEventBySlugReq,
    callback: (error: ServiceError | null, response: GetEventBySlugRes) => void,
  ): ClientUnaryCall;
  getEventBySlug(
    request: GetEventBySlugReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetEventBySlugRes) => void,
  ): ClientUnaryCall;
  getEventBySlug(
    request: GetEventBySlugReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetEventBySlugRes) => void,
  ): ClientUnaryCall;
  createEvent(
    request: CreateEventReq,
    callback: (error: ServiceError | null, response: CreateEventRes) => void,
  ): ClientUnaryCall;
  createEvent(
    request: CreateEventReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateEventRes) => void,
  ): ClientUnaryCall;
  createEvent(
    request: CreateEventReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateEventRes) => void,
  ): ClientUnaryCall;
  publishEvent(
    request: PublishEventReq,
    callback: (error: ServiceError | null, response: PublishEventRes) => void,
  ): ClientUnaryCall;
  publishEvent(
    request: PublishEventReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PublishEventRes) => void,
  ): ClientUnaryCall;
  publishEvent(
    request: PublishEventReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PublishEventRes) => void,
  ): ClientUnaryCall;
  updateEvent(
    request: UpdateEventReq,
    callback: (error: ServiceError | null, response: UpdateEventRes) => void,
  ): ClientUnaryCall;
  updateEvent(
    request: UpdateEventReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UpdateEventRes) => void,
  ): ClientUnaryCall;
  updateEvent(
    request: UpdateEventReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UpdateEventRes) => void,
  ): ClientUnaryCall;
  deleteEvent(
    request: DeleteEventReq,
    callback: (error: ServiceError | null, response: DeleteEventRes) => void,
  ): ClientUnaryCall;
  deleteEvent(
    request: DeleteEventReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: DeleteEventRes) => void,
  ): ClientUnaryCall;
  deleteEvent(
    request: DeleteEventReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: DeleteEventRes) => void,
  ): ClientUnaryCall;
  eventIsOpen(
    request: EventIsOpenReq,
    callback: (error: ServiceError | null, response: EventIsOpenRes) => void,
  ): ClientUnaryCall;
  eventIsOpen(
    request: EventIsOpenReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventIsOpenRes) => void,
  ): ClientUnaryCall;
  eventIsOpen(
    request: EventIsOpenReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventIsOpenRes) => void,
  ): ClientUnaryCall;
  getEventTickets(
    request: GetEventTicketsReq,
    callback: (error: ServiceError | null, response: GetEventTicketsRes) => void,
  ): ClientUnaryCall;
  getEventTickets(
    request: GetEventTicketsReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetEventTicketsRes) => void,
  ): ClientUnaryCall;
  getEventTickets(
    request: GetEventTicketsReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetEventTicketsRes) => void,
  ): ClientUnaryCall;
  getEventTicket(
    request: GetEventTicketReq,
    callback: (error: ServiceError | null, response: GetEventTicketRes) => void,
  ): ClientUnaryCall;
  getEventTicket(
    request: GetEventTicketReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetEventTicketRes) => void,
  ): ClientUnaryCall;
  getEventTicket(
    request: GetEventTicketReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetEventTicketRes) => void,
  ): ClientUnaryCall;
  getEventTicketByToken(
    request: GetEventTicketByTokenReq,
    callback: (error: ServiceError | null, response: GetEventTicketByTokenRes) => void,
  ): ClientUnaryCall;
  getEventTicketByToken(
    request: GetEventTicketByTokenReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetEventTicketByTokenRes) => void,
  ): ClientUnaryCall;
  getEventTicketByToken(
    request: GetEventTicketByTokenReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetEventTicketByTokenRes) => void,
  ): ClientUnaryCall;
  upsertEventTicket(
    request: UpsertEventTicketReq,
    callback: (error: ServiceError | null, response: UpsertEventTicketRes) => void,
  ): ClientUnaryCall;
  upsertEventTicket(
    request: UpsertEventTicketReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UpsertEventTicketRes) => void,
  ): ClientUnaryCall;
  upsertEventTicket(
    request: UpsertEventTicketReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UpsertEventTicketRes) => void,
  ): ClientUnaryCall;
  confirmEventTicket(
    request: ConfirmEventTicketReq,
    callback: (error: ServiceError | null, response: ConfirmEventTicketRes) => void,
  ): ClientUnaryCall;
  confirmEventTicket(
    request: ConfirmEventTicketReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ConfirmEventTicketRes) => void,
  ): ClientUnaryCall;
  confirmEventTicket(
    request: ConfirmEventTicketReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ConfirmEventTicketRes) => void,
  ): ClientUnaryCall;
}

export const EventsSrvClient = makeGenericClientConstructor(EventsSrvService, "fy.blog.v1.EventsSrv") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): EventsSrvClient;
  service: typeof EventsSrvService;
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
