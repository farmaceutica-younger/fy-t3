/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "fy.blog.v1";

export interface Author {
  authorId: string;
  name: string;
  bio: string;
  profileImage: string;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}

export interface BlogPost {
  postId: string;
  path: string;
  authorId: string;
  tags: string[];
  description: string;
  body: string;
  title: string;
  featuredImage: string;
  publishedTime: Date | undefined;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  showFeaturedImage: boolean;
  published: boolean;
}

export interface Event {
  eventId: string;
  slug?: string | undefined;
  authorId: string;
  tags: string[];
  description: string;
  body: string;
  title: string;
  featuredImage: string;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  published: boolean;
  startDate: Date | undefined;
  endDate: Date | undefined;
  location: string;
  questionairre: Questionairre | undefined;
  maxSubscriptions: number;
  subscriptionsOpened: boolean;
  reservedOnlyToMembers: boolean;
  externalRegistrationLink: string;
  invitationCodes: string[];
}

export interface Questionairre {
  questions: Question[];
}

export interface Question {
  cuid: string;
  description: string;
  type: string;
  options: string[];
  required: boolean;
}

export interface EventTicket {
  ticketId: string;
  eventId: string;
  token: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  role: string;
  ticketNum: number;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  answers: { [key: string]: string };
  privacySigned?: Date | undefined;
  confirmed?: Date | undefined;
  recordingConsensus?: Date | undefined;
}

export interface EventTicket_AnswersEntry {
  key: string;
  value: string;
}

function createBaseAuthor(): Author {
  return {
    authorId: "",
    name: "",
    bio: "",
    profileImage: "",
    createdAt: undefined,
    updatedAt: undefined,
  };
}

export const Author = {
  encode(
    message: Author,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authorId !== "") {
      writer.uint32(10).string(message.authorId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.bio !== "") {
      writer.uint32(26).string(message.bio);
    }
    if (message.profileImage !== "") {
      writer.uint32(34).string(message.profileImage);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedAt),
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Author {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.bio = reader.string();
          break;
        case 4:
          message.profileImage = reader.string();
          break;
        case 5:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
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

  fromJSON(object: any): Author {
    return {
      authorId: isSet(object.authorId) ? String(object.authorId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      bio: isSet(object.bio) ? String(object.bio) : "",
      profileImage: isSet(object.profileImage)
        ? String(object.profileImage)
        : "",
      createdAt: isSet(object.createdAt)
        ? fromJsonTimestamp(object.createdAt)
        : undefined,
      updatedAt: isSet(object.updatedAt)
        ? fromJsonTimestamp(object.updatedAt)
        : undefined,
    };
  },

  toJSON(message: Author): unknown {
    const obj: any = {};
    message.authorId !== undefined && (obj.authorId = message.authorId);
    message.name !== undefined && (obj.name = message.name);
    message.bio !== undefined && (obj.bio = message.bio);
    message.profileImage !== undefined &&
      (obj.profileImage = message.profileImage);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    return obj;
  },

  create<I extends Exact<DeepPartial<Author>, I>>(base?: I): Author {
    return Author.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Author>, I>>(object: I): Author {
    const message = createBaseAuthor();
    message.authorId = object.authorId ?? "";
    message.name = object.name ?? "";
    message.bio = object.bio ?? "";
    message.profileImage = object.profileImage ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
};

function createBaseBlogPost(): BlogPost {
  return {
    postId: "",
    path: "",
    authorId: "",
    tags: [],
    description: "",
    body: "",
    title: "",
    featuredImage: "",
    publishedTime: undefined,
    createdAt: undefined,
    updatedAt: undefined,
    showFeaturedImage: false,
    published: false,
  };
}

export const BlogPost = {
  encode(
    message: BlogPost,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.postId !== "") {
      writer.uint32(10).string(message.postId);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (message.authorId !== "") {
      writer.uint32(26).string(message.authorId);
    }
    for (const v of message.tags) {
      writer.uint32(34).string(v!);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.body !== "") {
      writer.uint32(50).string(message.body);
    }
    if (message.title !== "") {
      writer.uint32(58).string(message.title);
    }
    if (message.featuredImage !== "") {
      writer.uint32(66).string(message.featuredImage);
    }
    if (message.publishedTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.publishedTime),
        writer.uint32(74).fork()
      ).ldelim();
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
    if (message.showFeaturedImage === true) {
      writer.uint32(96).bool(message.showFeaturedImage);
    }
    if (message.published === true) {
      writer.uint32(104).bool(message.published);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlogPost {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlogPost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.string();
          break;
        case 2:
          message.path = reader.string();
          break;
        case 3:
          message.authorId = reader.string();
          break;
        case 4:
          message.tags.push(reader.string());
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.body = reader.string();
          break;
        case 7:
          message.title = reader.string();
          break;
        case 8:
          message.featuredImage = reader.string();
          break;
        case 9:
          message.publishedTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
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
          message.showFeaturedImage = reader.bool();
          break;
        case 13:
          message.published = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlogPost {
    return {
      postId: isSet(object.postId) ? String(object.postId) : "",
      path: isSet(object.path) ? String(object.path) : "",
      authorId: isSet(object.authorId) ? String(object.authorId) : "",
      tags: Array.isArray(object?.tags)
        ? object.tags.map((e: any) => String(e))
        : [],
      description: isSet(object.description) ? String(object.description) : "",
      body: isSet(object.body) ? String(object.body) : "",
      title: isSet(object.title) ? String(object.title) : "",
      featuredImage: isSet(object.featuredImage)
        ? String(object.featuredImage)
        : "",
      publishedTime: isSet(object.publishedTime)
        ? fromJsonTimestamp(object.publishedTime)
        : undefined,
      createdAt: isSet(object.createdAt)
        ? fromJsonTimestamp(object.createdAt)
        : undefined,
      updatedAt: isSet(object.updatedAt)
        ? fromJsonTimestamp(object.updatedAt)
        : undefined,
      showFeaturedImage: isSet(object.showFeaturedImage)
        ? Boolean(object.showFeaturedImage)
        : false,
      published: isSet(object.published) ? Boolean(object.published) : false,
    };
  },

  toJSON(message: BlogPost): unknown {
    const obj: any = {};
    message.postId !== undefined && (obj.postId = message.postId);
    message.path !== undefined && (obj.path = message.path);
    message.authorId !== undefined && (obj.authorId = message.authorId);
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.description !== undefined &&
      (obj.description = message.description);
    message.body !== undefined && (obj.body = message.body);
    message.title !== undefined && (obj.title = message.title);
    message.featuredImage !== undefined &&
      (obj.featuredImage = message.featuredImage);
    message.publishedTime !== undefined &&
      (obj.publishedTime = message.publishedTime.toISOString());
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    message.showFeaturedImage !== undefined &&
      (obj.showFeaturedImage = message.showFeaturedImage);
    message.published !== undefined && (obj.published = message.published);
    return obj;
  },

  create<I extends Exact<DeepPartial<BlogPost>, I>>(base?: I): BlogPost {
    return BlogPost.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BlogPost>, I>>(object: I): BlogPost {
    const message = createBaseBlogPost();
    message.postId = object.postId ?? "";
    message.path = object.path ?? "";
    message.authorId = object.authorId ?? "";
    message.tags = object.tags?.map((e) => e) || [];
    message.description = object.description ?? "";
    message.body = object.body ?? "";
    message.title = object.title ?? "";
    message.featuredImage = object.featuredImage ?? "";
    message.publishedTime = object.publishedTime ?? undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.showFeaturedImage = object.showFeaturedImage ?? false;
    message.published = object.published ?? false;
    return message;
  },
};

function createBaseEvent(): Event {
  return {
    eventId: "",
    slug: undefined,
    authorId: "",
    tags: [],
    description: "",
    body: "",
    title: "",
    featuredImage: "",
    createdAt: undefined,
    updatedAt: undefined,
    published: false,
    startDate: undefined,
    endDate: undefined,
    location: "",
    questionairre: undefined,
    maxSubscriptions: 0,
    subscriptionsOpened: false,
    reservedOnlyToMembers: false,
    externalRegistrationLink: "",
    invitationCodes: [],
  };
}

export const Event = {
  encode(message: Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== "") {
      writer.uint32(10).string(message.eventId);
    }
    if (message.slug !== undefined) {
      writer.uint32(18).string(message.slug);
    }
    if (message.authorId !== "") {
      writer.uint32(26).string(message.authorId);
    }
    for (const v of message.tags) {
      writer.uint32(34).string(v!);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.body !== "") {
      writer.uint32(50).string(message.body);
    }
    if (message.title !== "") {
      writer.uint32(58).string(message.title);
    }
    if (message.featuredImage !== "") {
      writer.uint32(66).string(message.featuredImage);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedAt),
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.published === true) {
      writer.uint32(88).bool(message.published);
    }
    if (message.startDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startDate),
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.endDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endDate),
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.location !== "") {
      writer.uint32(114).string(message.location);
    }
    if (message.questionairre !== undefined) {
      Questionairre.encode(
        message.questionairre,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.maxSubscriptions !== 0) {
      writer.uint32(128).uint32(message.maxSubscriptions);
    }
    if (message.subscriptionsOpened === true) {
      writer.uint32(136).bool(message.subscriptionsOpened);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Event {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventId = reader.string();
          break;
        case 2:
          message.slug = reader.string();
          break;
        case 3:
          message.authorId = reader.string();
          break;
        case 4:
          message.tags.push(reader.string());
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.body = reader.string();
          break;
        case 7:
          message.title = reader.string();
          break;
        case 8:
          message.featuredImage = reader.string();
          break;
        case 9:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.updatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.published = reader.bool();
          break;
        case 12:
          message.startDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.endDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 14:
          message.location = reader.string();
          break;
        case 15:
          message.questionairre = Questionairre.decode(reader, reader.uint32());
          break;
        case 16:
          message.maxSubscriptions = reader.uint32();
          break;
        case 17:
          message.subscriptionsOpened = reader.bool();
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

  fromJSON(object: any): Event {
    return {
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
      slug: isSet(object.slug) ? String(object.slug) : undefined,
      authorId: isSet(object.authorId) ? String(object.authorId) : "",
      tags: Array.isArray(object?.tags)
        ? object.tags.map((e: any) => String(e))
        : [],
      description: isSet(object.description) ? String(object.description) : "",
      body: isSet(object.body) ? String(object.body) : "",
      title: isSet(object.title) ? String(object.title) : "",
      featuredImage: isSet(object.featuredImage)
        ? String(object.featuredImage)
        : "",
      createdAt: isSet(object.createdAt)
        ? fromJsonTimestamp(object.createdAt)
        : undefined,
      updatedAt: isSet(object.updatedAt)
        ? fromJsonTimestamp(object.updatedAt)
        : undefined,
      published: isSet(object.published) ? Boolean(object.published) : false,
      startDate: isSet(object.startDate)
        ? fromJsonTimestamp(object.startDate)
        : undefined,
      endDate: isSet(object.endDate)
        ? fromJsonTimestamp(object.endDate)
        : undefined,
      location: isSet(object.location) ? String(object.location) : "",
      questionairre: isSet(object.questionairre)
        ? Questionairre.fromJSON(object.questionairre)
        : undefined,
      maxSubscriptions: isSet(object.maxSubscriptions)
        ? Number(object.maxSubscriptions)
        : 0,
      subscriptionsOpened: isSet(object.subscriptionsOpened)
        ? Boolean(object.subscriptionsOpened)
        : false,
      reservedOnlyToMembers: isSet(object.reservedOnlyToMembers)
        ? Boolean(object.reservedOnlyToMembers)
        : false,
      externalRegistrationLink: isSet(object.externalRegistrationLink)
        ? String(object.externalRegistrationLink)
        : "",
      invitationCodes: Array.isArray(object?.invitationCodes)
        ? object.invitationCodes.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: Event): unknown {
    const obj: any = {};
    message.eventId !== undefined && (obj.eventId = message.eventId);
    message.slug !== undefined && (obj.slug = message.slug);
    message.authorId !== undefined && (obj.authorId = message.authorId);
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.description !== undefined &&
      (obj.description = message.description);
    message.body !== undefined && (obj.body = message.body);
    message.title !== undefined && (obj.title = message.title);
    message.featuredImage !== undefined &&
      (obj.featuredImage = message.featuredImage);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    message.published !== undefined && (obj.published = message.published);
    message.startDate !== undefined &&
      (obj.startDate = message.startDate.toISOString());
    message.endDate !== undefined &&
      (obj.endDate = message.endDate.toISOString());
    message.location !== undefined && (obj.location = message.location);
    message.questionairre !== undefined &&
      (obj.questionairre = message.questionairre
        ? Questionairre.toJSON(message.questionairre)
        : undefined);
    message.maxSubscriptions !== undefined &&
      (obj.maxSubscriptions = Math.round(message.maxSubscriptions));
    message.subscriptionsOpened !== undefined &&
      (obj.subscriptionsOpened = message.subscriptionsOpened);
    message.reservedOnlyToMembers !== undefined &&
      (obj.reservedOnlyToMembers = message.reservedOnlyToMembers);
    message.externalRegistrationLink !== undefined &&
      (obj.externalRegistrationLink = message.externalRegistrationLink);
    if (message.invitationCodes) {
      obj.invitationCodes = message.invitationCodes.map((e) => e);
    } else {
      obj.invitationCodes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Event>, I>>(base?: I): Event {
    return Event.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Event>, I>>(object: I): Event {
    const message = createBaseEvent();
    message.eventId = object.eventId ?? "";
    message.slug = object.slug ?? undefined;
    message.authorId = object.authorId ?? "";
    message.tags = object.tags?.map((e) => e) || [];
    message.description = object.description ?? "";
    message.body = object.body ?? "";
    message.title = object.title ?? "";
    message.featuredImage = object.featuredImage ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.published = object.published ?? false;
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.location = object.location ?? "";
    message.questionairre =
      object.questionairre !== undefined && object.questionairre !== null
        ? Questionairre.fromPartial(object.questionairre)
        : undefined;
    message.maxSubscriptions = object.maxSubscriptions ?? 0;
    message.subscriptionsOpened = object.subscriptionsOpened ?? false;
    message.reservedOnlyToMembers = object.reservedOnlyToMembers ?? false;
    message.externalRegistrationLink = object.externalRegistrationLink ?? "";
    message.invitationCodes = object.invitationCodes?.map((e) => e) || [];
    return message;
  },
};

function createBaseQuestionairre(): Questionairre {
  return { questions: [] };
}

export const Questionairre = {
  encode(
    message: Questionairre,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.questions) {
      Question.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.questions.push(Question.decode(reader, reader.uint32()));
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
      questions: Array.isArray(object?.questions)
        ? object.questions.map((e: any) => Question.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Questionairre): unknown {
    const obj: any = {};
    if (message.questions) {
      obj.questions = message.questions.map((e) =>
        e ? Question.toJSON(e) : undefined
      );
    } else {
      obj.questions = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Questionairre>, I>>(
    base?: I
  ): Questionairre {
    return Questionairre.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Questionairre>, I>>(
    object: I
  ): Questionairre {
    const message = createBaseQuestionairre();
    message.questions =
      object.questions?.map((e) => Question.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQuestion(): Question {
  return { cuid: "", description: "", type: "", options: [], required: false };
}

export const Question = {
  encode(
    message: Question,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      options: Array.isArray(object?.options)
        ? object.options.map((e: any) => String(e))
        : [],
      required: isSet(object.required) ? Boolean(object.required) : false,
    };
  },

  toJSON(message: Question): unknown {
    const obj: any = {};
    message.cuid !== undefined && (obj.cuid = message.cuid);
    message.description !== undefined &&
      (obj.description = message.description);
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

function createBaseEventTicket(): EventTicket {
  return {
    ticketId: "",
    eventId: "",
    token: "",
    email: "",
    firstName: "",
    lastName: "",
    avatar: "",
    role: "",
    ticketNum: 0,
    createdAt: undefined,
    updatedAt: undefined,
    answers: {},
    privacySigned: undefined,
    confirmed: undefined,
    recordingConsensus: undefined,
  };
}

export const EventTicket = {
  encode(
    message: EventTicket,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ticketId !== "") {
      writer.uint32(10).string(message.ticketId);
    }
    if (message.eventId !== "") {
      writer.uint32(18).string(message.eventId);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    if (message.email !== "") {
      writer.uint32(34).string(message.email);
    }
    if (message.firstName !== "") {
      writer.uint32(42).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(50).string(message.lastName);
    }
    if (message.avatar !== "") {
      writer.uint32(58).string(message.avatar);
    }
    if (message.role !== "") {
      writer.uint32(66).string(message.role);
    }
    if (message.ticketNum !== 0) {
      writer.uint32(72).uint32(message.ticketNum);
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
    Object.entries(message.answers).forEach(([key, value]) => {
      EventTicket_AnswersEntry.encode(
        { key: key as any, value },
        writer.uint32(98).fork()
      ).ldelim();
    });
    if (message.privacySigned !== undefined) {
      Timestamp.encode(
        toTimestamp(message.privacySigned),
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.confirmed !== undefined) {
      Timestamp.encode(
        toTimestamp(message.confirmed),
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.recordingConsensus !== undefined) {
      Timestamp.encode(
        toTimestamp(message.recordingConsensus),
        writer.uint32(122).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTicket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTicket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ticketId = reader.string();
          break;
        case 2:
          message.eventId = reader.string();
          break;
        case 3:
          message.token = reader.string();
          break;
        case 4:
          message.email = reader.string();
          break;
        case 5:
          message.firstName = reader.string();
          break;
        case 6:
          message.lastName = reader.string();
          break;
        case 7:
          message.avatar = reader.string();
          break;
        case 8:
          message.role = reader.string();
          break;
        case 9:
          message.ticketNum = reader.uint32();
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
          const entry12 = EventTicket_AnswersEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry12.value !== undefined) {
            message.answers[entry12.key] = entry12.value;
          }
          break;
        case 13:
          message.privacySigned = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 14:
          message.confirmed = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 15:
          message.recordingConsensus = fromTimestamp(
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

  fromJSON(object: any): EventTicket {
    return {
      ticketId: isSet(object.ticketId) ? String(object.ticketId) : "",
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
      token: isSet(object.token) ? String(object.token) : "",
      email: isSet(object.email) ? String(object.email) : "",
      firstName: isSet(object.firstName) ? String(object.firstName) : "",
      lastName: isSet(object.lastName) ? String(object.lastName) : "",
      avatar: isSet(object.avatar) ? String(object.avatar) : "",
      role: isSet(object.role) ? String(object.role) : "",
      ticketNum: isSet(object.ticketNum) ? Number(object.ticketNum) : 0,
      createdAt: isSet(object.createdAt)
        ? fromJsonTimestamp(object.createdAt)
        : undefined,
      updatedAt: isSet(object.updatedAt)
        ? fromJsonTimestamp(object.updatedAt)
        : undefined,
      answers: isObject(object.answers)
        ? Object.entries(object.answers).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {}
          )
        : {},
      privacySigned: isSet(object.privacySigned)
        ? fromJsonTimestamp(object.privacySigned)
        : undefined,
      confirmed: isSet(object.confirmed)
        ? fromJsonTimestamp(object.confirmed)
        : undefined,
      recordingConsensus: isSet(object.recordingConsensus)
        ? fromJsonTimestamp(object.recordingConsensus)
        : undefined,
    };
  },

  toJSON(message: EventTicket): unknown {
    const obj: any = {};
    message.ticketId !== undefined && (obj.ticketId = message.ticketId);
    message.eventId !== undefined && (obj.eventId = message.eventId);
    message.token !== undefined && (obj.token = message.token);
    message.email !== undefined && (obj.email = message.email);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.avatar !== undefined && (obj.avatar = message.avatar);
    message.role !== undefined && (obj.role = message.role);
    message.ticketNum !== undefined &&
      (obj.ticketNum = Math.round(message.ticketNum));
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    obj.answers = {};
    if (message.answers) {
      Object.entries(message.answers).forEach(([k, v]) => {
        obj.answers[k] = v;
      });
    }
    message.privacySigned !== undefined &&
      (obj.privacySigned = message.privacySigned.toISOString());
    message.confirmed !== undefined &&
      (obj.confirmed = message.confirmed.toISOString());
    message.recordingConsensus !== undefined &&
      (obj.recordingConsensus = message.recordingConsensus.toISOString());
    return obj;
  },

  create<I extends Exact<DeepPartial<EventTicket>, I>>(base?: I): EventTicket {
    return EventTicket.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventTicket>, I>>(
    object: I
  ): EventTicket {
    const message = createBaseEventTicket();
    message.ticketId = object.ticketId ?? "";
    message.eventId = object.eventId ?? "";
    message.token = object.token ?? "";
    message.email = object.email ?? "";
    message.firstName = object.firstName ?? "";
    message.lastName = object.lastName ?? "";
    message.avatar = object.avatar ?? "";
    message.role = object.role ?? "";
    message.ticketNum = object.ticketNum ?? 0;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.answers = Object.entries(object.answers ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.privacySigned = object.privacySigned ?? undefined;
    message.confirmed = object.confirmed ?? undefined;
    message.recordingConsensus = object.recordingConsensus ?? undefined;
    return message;
  },
};

function createBaseEventTicket_AnswersEntry(): EventTicket_AnswersEntry {
  return { key: "", value: "" };
}

export const EventTicket_AnswersEntry = {
  encode(
    message: EventTicket_AnswersEntry,
    writer: _m0.Writer = _m0.Writer.create()
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
    length?: number
  ): EventTicket_AnswersEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTicket_AnswersEntry();
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

  fromJSON(object: any): EventTicket_AnswersEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: EventTicket_AnswersEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<EventTicket_AnswersEntry>, I>>(
    base?: I
  ): EventTicket_AnswersEntry {
    return EventTicket_AnswersEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventTicket_AnswersEntry>, I>>(
    object: I
  ): EventTicket_AnswersEntry {
    const message = createBaseEventTicket_AnswersEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
