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
import { Author, BlogPost } from "./models";

export const protobufPackage = "fy.blog.v1";

export interface GetBlogPostsReq {
  published?: boolean | undefined;
  skip: number;
  take: number;
  tags: string[];
}

export interface GetBlogPostsRes {
  posts: BlogPost[];
  total: number;
}

export interface GetPublishedBlogPostsReq {
  skip: number;
  take: number;
  tags: string[];
}

export interface GetPublishedBlogPostsRes {
  posts: BlogPost[];
  total: number;
}

export interface GetBlogPostReq {
  postId: string;
}

export interface GetBlogPostRes {
  post: BlogPost | undefined;
}

export interface GetBlogPostByPathReq {
  path: string;
}

export interface GetBlogPostByPathRes {
  post: BlogPost | undefined;
}

export interface CreateBlogPostReq {
  authorId: string;
  tags: string[];
  description: string;
  body: string;
  title: string;
  featuredImage: string;
}

export interface CreateBlogPostRes {
  post: BlogPost | undefined;
}

export interface UpdateBlogPostReq {
  postId: string;
  tags: string[];
  description?: string | undefined;
  body?: string | undefined;
  title?: string | undefined;
  featuredImage?: string | undefined;
  showFeaturedImage?: boolean | undefined;
  publishedTime?: Date | undefined;
}

export interface UpdateBlogPostRes {
  post: BlogPost | undefined;
}

export interface PublishBlogPostReq {
  postId: string;
}

export interface PublishBlogPostRes {
  post: BlogPost | undefined;
}

export interface DeleteBlogPostReq {
  postId: string;
}

export interface DeleteBlogPostRes {
  post: BlogPost | undefined;
}

export interface GetAuthorsReq {
  skip: number;
  take: number;
}

export interface GetAuthorsRes {
  authors: Author[];
  total: number;
}

export interface GetAuthorReq {
  authorId: string;
}

export interface GetAuthorRes {
  author: Author | undefined;
}

function createBaseGetBlogPostsReq(): GetBlogPostsReq {
  return { published: undefined, skip: 0, take: 0, tags: [] };
}

export const GetBlogPostsReq = {
  encode(
    message: GetBlogPostsReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBlogPostsReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlogPostsReq();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBlogPostsReq {
    return {
      published: isSet(object.published)
        ? Boolean(object.published)
        : undefined,
      skip: isSet(object.skip) ? Number(object.skip) : 0,
      take: isSet(object.take) ? Number(object.take) : 0,
      tags: Array.isArray(object?.tags)
        ? object.tags.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: GetBlogPostsReq): unknown {
    const obj: any = {};
    message.published !== undefined && (obj.published = message.published);
    message.skip !== undefined && (obj.skip = Math.round(message.skip));
    message.take !== undefined && (obj.take = Math.round(message.take));
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBlogPostsReq>, I>>(
    base?: I,
  ): GetBlogPostsReq {
    return GetBlogPostsReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetBlogPostsReq>, I>>(
    object: I,
  ): GetBlogPostsReq {
    const message = createBaseGetBlogPostsReq();
    message.published = object.published ?? undefined;
    message.skip = object.skip ?? 0;
    message.take = object.take ?? 0;
    message.tags = object.tags?.map((e) => e) || [];
    return message;
  },
};

function createBaseGetBlogPostsRes(): GetBlogPostsRes {
  return { posts: [], total: 0 };
}

export const GetBlogPostsRes = {
  encode(
    message: GetBlogPostsRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.posts) {
      BlogPost.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total !== 0) {
      writer.uint32(16).uint32(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBlogPostsRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlogPostsRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.posts.push(BlogPost.decode(reader, reader.uint32()));
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

  fromJSON(object: any): GetBlogPostsRes {
    return {
      posts: Array.isArray(object?.posts)
        ? object.posts.map((e: any) => BlogPost.fromJSON(e))
        : [],
      total: isSet(object.total) ? Number(object.total) : 0,
    };
  },

  toJSON(message: GetBlogPostsRes): unknown {
    const obj: any = {};
    if (message.posts) {
      obj.posts = message.posts.map((e) =>
        e ? BlogPost.toJSON(e) : undefined,
      );
    } else {
      obj.posts = [];
    }
    message.total !== undefined && (obj.total = Math.round(message.total));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBlogPostsRes>, I>>(
    base?: I,
  ): GetBlogPostsRes {
    return GetBlogPostsRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetBlogPostsRes>, I>>(
    object: I,
  ): GetBlogPostsRes {
    const message = createBaseGetBlogPostsRes();
    message.posts = object.posts?.map((e) => BlogPost.fromPartial(e)) || [];
    message.total = object.total ?? 0;
    return message;
  },
};

function createBaseGetPublishedBlogPostsReq(): GetPublishedBlogPostsReq {
  return { skip: 0, take: 0, tags: [] };
}

export const GetPublishedBlogPostsReq = {
  encode(
    message: GetPublishedBlogPostsReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.skip !== 0) {
      writer.uint32(16).uint32(message.skip);
    }
    if (message.take !== 0) {
      writer.uint32(24).uint32(message.take);
    }
    for (const v of message.tags) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetPublishedBlogPostsReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPublishedBlogPostsReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.skip = reader.uint32();
          break;
        case 3:
          message.take = reader.uint32();
          break;
        case 4:
          message.tags.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetPublishedBlogPostsReq {
    return {
      skip: isSet(object.skip) ? Number(object.skip) : 0,
      take: isSet(object.take) ? Number(object.take) : 0,
      tags: Array.isArray(object?.tags)
        ? object.tags.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: GetPublishedBlogPostsReq): unknown {
    const obj: any = {};
    message.skip !== undefined && (obj.skip = Math.round(message.skip));
    message.take !== undefined && (obj.take = Math.round(message.take));
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPublishedBlogPostsReq>, I>>(
    base?: I,
  ): GetPublishedBlogPostsReq {
    return GetPublishedBlogPostsReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetPublishedBlogPostsReq>, I>>(
    object: I,
  ): GetPublishedBlogPostsReq {
    const message = createBaseGetPublishedBlogPostsReq();
    message.skip = object.skip ?? 0;
    message.take = object.take ?? 0;
    message.tags = object.tags?.map((e) => e) || [];
    return message;
  },
};

function createBaseGetPublishedBlogPostsRes(): GetPublishedBlogPostsRes {
  return { posts: [], total: 0 };
}

export const GetPublishedBlogPostsRes = {
  encode(
    message: GetPublishedBlogPostsRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.posts) {
      BlogPost.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total !== 0) {
      writer.uint32(16).uint32(message.total);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetPublishedBlogPostsRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPublishedBlogPostsRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.posts.push(BlogPost.decode(reader, reader.uint32()));
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

  fromJSON(object: any): GetPublishedBlogPostsRes {
    return {
      posts: Array.isArray(object?.posts)
        ? object.posts.map((e: any) => BlogPost.fromJSON(e))
        : [],
      total: isSet(object.total) ? Number(object.total) : 0,
    };
  },

  toJSON(message: GetPublishedBlogPostsRes): unknown {
    const obj: any = {};
    if (message.posts) {
      obj.posts = message.posts.map((e) =>
        e ? BlogPost.toJSON(e) : undefined,
      );
    } else {
      obj.posts = [];
    }
    message.total !== undefined && (obj.total = Math.round(message.total));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPublishedBlogPostsRes>, I>>(
    base?: I,
  ): GetPublishedBlogPostsRes {
    return GetPublishedBlogPostsRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetPublishedBlogPostsRes>, I>>(
    object: I,
  ): GetPublishedBlogPostsRes {
    const message = createBaseGetPublishedBlogPostsRes();
    message.posts = object.posts?.map((e) => BlogPost.fromPartial(e)) || [];
    message.total = object.total ?? 0;
    return message;
  },
};

function createBaseGetBlogPostReq(): GetBlogPostReq {
  return { postId: "" };
}

export const GetBlogPostReq = {
  encode(
    message: GetBlogPostReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.postId !== "") {
      writer.uint32(10).string(message.postId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBlogPostReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlogPostReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBlogPostReq {
    return { postId: isSet(object.postId) ? String(object.postId) : "" };
  },

  toJSON(message: GetBlogPostReq): unknown {
    const obj: any = {};
    message.postId !== undefined && (obj.postId = message.postId);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBlogPostReq>, I>>(
    base?: I,
  ): GetBlogPostReq {
    return GetBlogPostReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetBlogPostReq>, I>>(
    object: I,
  ): GetBlogPostReq {
    const message = createBaseGetBlogPostReq();
    message.postId = object.postId ?? "";
    return message;
  },
};

function createBaseGetBlogPostRes(): GetBlogPostRes {
  return { post: undefined };
}

export const GetBlogPostRes = {
  encode(
    message: GetBlogPostRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.post !== undefined) {
      BlogPost.encode(message.post, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBlogPostRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlogPostRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.post = BlogPost.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBlogPostRes {
    return {
      post: isSet(object.post) ? BlogPost.fromJSON(object.post) : undefined,
    };
  },

  toJSON(message: GetBlogPostRes): unknown {
    const obj: any = {};
    message.post !== undefined &&
      (obj.post = message.post ? BlogPost.toJSON(message.post) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBlogPostRes>, I>>(
    base?: I,
  ): GetBlogPostRes {
    return GetBlogPostRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetBlogPostRes>, I>>(
    object: I,
  ): GetBlogPostRes {
    const message = createBaseGetBlogPostRes();
    message.post =
      object.post !== undefined && object.post !== null
        ? BlogPost.fromPartial(object.post)
        : undefined;
    return message;
  },
};

function createBaseGetBlogPostByPathReq(): GetBlogPostByPathReq {
  return { path: "" };
}

export const GetBlogPostByPathReq = {
  encode(
    message: GetBlogPostByPathReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetBlogPostByPathReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlogPostByPathReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBlogPostByPathReq {
    return { path: isSet(object.path) ? String(object.path) : "" };
  },

  toJSON(message: GetBlogPostByPathReq): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBlogPostByPathReq>, I>>(
    base?: I,
  ): GetBlogPostByPathReq {
    return GetBlogPostByPathReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetBlogPostByPathReq>, I>>(
    object: I,
  ): GetBlogPostByPathReq {
    const message = createBaseGetBlogPostByPathReq();
    message.path = object.path ?? "";
    return message;
  },
};

function createBaseGetBlogPostByPathRes(): GetBlogPostByPathRes {
  return { post: undefined };
}

export const GetBlogPostByPathRes = {
  encode(
    message: GetBlogPostByPathRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.post !== undefined) {
      BlogPost.encode(message.post, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetBlogPostByPathRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlogPostByPathRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.post = BlogPost.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBlogPostByPathRes {
    return {
      post: isSet(object.post) ? BlogPost.fromJSON(object.post) : undefined,
    };
  },

  toJSON(message: GetBlogPostByPathRes): unknown {
    const obj: any = {};
    message.post !== undefined &&
      (obj.post = message.post ? BlogPost.toJSON(message.post) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBlogPostByPathRes>, I>>(
    base?: I,
  ): GetBlogPostByPathRes {
    return GetBlogPostByPathRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetBlogPostByPathRes>, I>>(
    object: I,
  ): GetBlogPostByPathRes {
    const message = createBaseGetBlogPostByPathRes();
    message.post =
      object.post !== undefined && object.post !== null
        ? BlogPost.fromPartial(object.post)
        : undefined;
    return message;
  },
};

function createBaseCreateBlogPostReq(): CreateBlogPostReq {
  return {
    authorId: "",
    tags: [],
    description: "",
    body: "",
    title: "",
    featuredImage: "",
  };
}

export const CreateBlogPostReq = {
  encode(
    message: CreateBlogPostReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateBlogPostReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateBlogPostReq();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateBlogPostReq {
    return {
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
    };
  },

  toJSON(message: CreateBlogPostReq): unknown {
    const obj: any = {};
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
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateBlogPostReq>, I>>(
    base?: I,
  ): CreateBlogPostReq {
    return CreateBlogPostReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateBlogPostReq>, I>>(
    object: I,
  ): CreateBlogPostReq {
    const message = createBaseCreateBlogPostReq();
    message.authorId = object.authorId ?? "";
    message.tags = object.tags?.map((e) => e) || [];
    message.description = object.description ?? "";
    message.body = object.body ?? "";
    message.title = object.title ?? "";
    message.featuredImage = object.featuredImage ?? "";
    return message;
  },
};

function createBaseCreateBlogPostRes(): CreateBlogPostRes {
  return { post: undefined };
}

export const CreateBlogPostRes = {
  encode(
    message: CreateBlogPostRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.post !== undefined) {
      BlogPost.encode(message.post, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateBlogPostRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateBlogPostRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.post = BlogPost.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateBlogPostRes {
    return {
      post: isSet(object.post) ? BlogPost.fromJSON(object.post) : undefined,
    };
  },

  toJSON(message: CreateBlogPostRes): unknown {
    const obj: any = {};
    message.post !== undefined &&
      (obj.post = message.post ? BlogPost.toJSON(message.post) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateBlogPostRes>, I>>(
    base?: I,
  ): CreateBlogPostRes {
    return CreateBlogPostRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateBlogPostRes>, I>>(
    object: I,
  ): CreateBlogPostRes {
    const message = createBaseCreateBlogPostRes();
    message.post =
      object.post !== undefined && object.post !== null
        ? BlogPost.fromPartial(object.post)
        : undefined;
    return message;
  },
};

function createBaseUpdateBlogPostReq(): UpdateBlogPostReq {
  return {
    postId: "",
    tags: [],
    description: undefined,
    body: undefined,
    title: undefined,
    featuredImage: undefined,
    showFeaturedImage: undefined,
    publishedTime: undefined,
  };
}

export const UpdateBlogPostReq = {
  encode(
    message: UpdateBlogPostReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.postId !== "") {
      writer.uint32(10).string(message.postId);
    }
    for (const v of message.tags) {
      writer.uint32(18).string(v!);
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
    if (message.showFeaturedImage !== undefined) {
      writer.uint32(56).bool(message.showFeaturedImage);
    }
    if (message.publishedTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.publishedTime),
        writer.uint32(66).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateBlogPostReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateBlogPostReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.string();
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
          message.showFeaturedImage = reader.bool();
          break;
        case 8:
          message.publishedTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateBlogPostReq {
    return {
      postId: isSet(object.postId) ? String(object.postId) : "",
      tags: Array.isArray(object?.tags)
        ? object.tags.map((e: any) => String(e))
        : [],
      description: isSet(object.description)
        ? String(object.description)
        : undefined,
      body: isSet(object.body) ? String(object.body) : undefined,
      title: isSet(object.title) ? String(object.title) : undefined,
      featuredImage: isSet(object.featuredImage)
        ? String(object.featuredImage)
        : undefined,
      showFeaturedImage: isSet(object.showFeaturedImage)
        ? Boolean(object.showFeaturedImage)
        : undefined,
      publishedTime: isSet(object.publishedTime)
        ? fromJsonTimestamp(object.publishedTime)
        : undefined,
    };
  },

  toJSON(message: UpdateBlogPostReq): unknown {
    const obj: any = {};
    message.postId !== undefined && (obj.postId = message.postId);
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
    message.showFeaturedImage !== undefined &&
      (obj.showFeaturedImage = message.showFeaturedImage);
    message.publishedTime !== undefined &&
      (obj.publishedTime = message.publishedTime.toISOString());
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateBlogPostReq>, I>>(
    base?: I,
  ): UpdateBlogPostReq {
    return UpdateBlogPostReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateBlogPostReq>, I>>(
    object: I,
  ): UpdateBlogPostReq {
    const message = createBaseUpdateBlogPostReq();
    message.postId = object.postId ?? "";
    message.tags = object.tags?.map((e) => e) || [];
    message.description = object.description ?? undefined;
    message.body = object.body ?? undefined;
    message.title = object.title ?? undefined;
    message.featuredImage = object.featuredImage ?? undefined;
    message.showFeaturedImage = object.showFeaturedImage ?? undefined;
    message.publishedTime = object.publishedTime ?? undefined;
    return message;
  },
};

function createBaseUpdateBlogPostRes(): UpdateBlogPostRes {
  return { post: undefined };
}

export const UpdateBlogPostRes = {
  encode(
    message: UpdateBlogPostRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.post !== undefined) {
      BlogPost.encode(message.post, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateBlogPostRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateBlogPostRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.post = BlogPost.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateBlogPostRes {
    return {
      post: isSet(object.post) ? BlogPost.fromJSON(object.post) : undefined,
    };
  },

  toJSON(message: UpdateBlogPostRes): unknown {
    const obj: any = {};
    message.post !== undefined &&
      (obj.post = message.post ? BlogPost.toJSON(message.post) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateBlogPostRes>, I>>(
    base?: I,
  ): UpdateBlogPostRes {
    return UpdateBlogPostRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateBlogPostRes>, I>>(
    object: I,
  ): UpdateBlogPostRes {
    const message = createBaseUpdateBlogPostRes();
    message.post =
      object.post !== undefined && object.post !== null
        ? BlogPost.fromPartial(object.post)
        : undefined;
    return message;
  },
};

function createBasePublishBlogPostReq(): PublishBlogPostReq {
  return { postId: "" };
}

export const PublishBlogPostReq = {
  encode(
    message: PublishBlogPostReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.postId !== "") {
      writer.uint32(10).string(message.postId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishBlogPostReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishBlogPostReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PublishBlogPostReq {
    return { postId: isSet(object.postId) ? String(object.postId) : "" };
  },

  toJSON(message: PublishBlogPostReq): unknown {
    const obj: any = {};
    message.postId !== undefined && (obj.postId = message.postId);
    return obj;
  },

  create<I extends Exact<DeepPartial<PublishBlogPostReq>, I>>(
    base?: I,
  ): PublishBlogPostReq {
    return PublishBlogPostReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PublishBlogPostReq>, I>>(
    object: I,
  ): PublishBlogPostReq {
    const message = createBasePublishBlogPostReq();
    message.postId = object.postId ?? "";
    return message;
  },
};

function createBasePublishBlogPostRes(): PublishBlogPostRes {
  return { post: undefined };
}

export const PublishBlogPostRes = {
  encode(
    message: PublishBlogPostRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.post !== undefined) {
      BlogPost.encode(message.post, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishBlogPostRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishBlogPostRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.post = BlogPost.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PublishBlogPostRes {
    return {
      post: isSet(object.post) ? BlogPost.fromJSON(object.post) : undefined,
    };
  },

  toJSON(message: PublishBlogPostRes): unknown {
    const obj: any = {};
    message.post !== undefined &&
      (obj.post = message.post ? BlogPost.toJSON(message.post) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<PublishBlogPostRes>, I>>(
    base?: I,
  ): PublishBlogPostRes {
    return PublishBlogPostRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PublishBlogPostRes>, I>>(
    object: I,
  ): PublishBlogPostRes {
    const message = createBasePublishBlogPostRes();
    message.post =
      object.post !== undefined && object.post !== null
        ? BlogPost.fromPartial(object.post)
        : undefined;
    return message;
  },
};

function createBaseDeleteBlogPostReq(): DeleteBlogPostReq {
  return { postId: "" };
}

export const DeleteBlogPostReq = {
  encode(
    message: DeleteBlogPostReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.postId !== "") {
      writer.uint32(10).string(message.postId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBlogPostReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteBlogPostReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteBlogPostReq {
    return { postId: isSet(object.postId) ? String(object.postId) : "" };
  },

  toJSON(message: DeleteBlogPostReq): unknown {
    const obj: any = {};
    message.postId !== undefined && (obj.postId = message.postId);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteBlogPostReq>, I>>(
    base?: I,
  ): DeleteBlogPostReq {
    return DeleteBlogPostReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteBlogPostReq>, I>>(
    object: I,
  ): DeleteBlogPostReq {
    const message = createBaseDeleteBlogPostReq();
    message.postId = object.postId ?? "";
    return message;
  },
};

function createBaseDeleteBlogPostRes(): DeleteBlogPostRes {
  return { post: undefined };
}

export const DeleteBlogPostRes = {
  encode(
    message: DeleteBlogPostRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.post !== undefined) {
      BlogPost.encode(message.post, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBlogPostRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteBlogPostRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.post = BlogPost.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteBlogPostRes {
    return {
      post: isSet(object.post) ? BlogPost.fromJSON(object.post) : undefined,
    };
  },

  toJSON(message: DeleteBlogPostRes): unknown {
    const obj: any = {};
    message.post !== undefined &&
      (obj.post = message.post ? BlogPost.toJSON(message.post) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteBlogPostRes>, I>>(
    base?: I,
  ): DeleteBlogPostRes {
    return DeleteBlogPostRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteBlogPostRes>, I>>(
    object: I,
  ): DeleteBlogPostRes {
    const message = createBaseDeleteBlogPostRes();
    message.post =
      object.post !== undefined && object.post !== null
        ? BlogPost.fromPartial(object.post)
        : undefined;
    return message;
  },
};

function createBaseGetAuthorsReq(): GetAuthorsReq {
  return { skip: 0, take: 0 };
}

export const GetAuthorsReq = {
  encode(
    message: GetAuthorsReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.skip !== 0) {
      writer.uint32(8).uint32(message.skip);
    }
    if (message.take !== 0) {
      writer.uint32(16).uint32(message.take);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAuthorsReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthorsReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.skip = reader.uint32();
          break;
        case 2:
          message.take = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAuthorsReq {
    return {
      skip: isSet(object.skip) ? Number(object.skip) : 0,
      take: isSet(object.take) ? Number(object.take) : 0,
    };
  },

  toJSON(message: GetAuthorsReq): unknown {
    const obj: any = {};
    message.skip !== undefined && (obj.skip = Math.round(message.skip));
    message.take !== undefined && (obj.take = Math.round(message.take));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAuthorsReq>, I>>(
    base?: I,
  ): GetAuthorsReq {
    return GetAuthorsReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetAuthorsReq>, I>>(
    object: I,
  ): GetAuthorsReq {
    const message = createBaseGetAuthorsReq();
    message.skip = object.skip ?? 0;
    message.take = object.take ?? 0;
    return message;
  },
};

function createBaseGetAuthorsRes(): GetAuthorsRes {
  return { authors: [], total: 0 };
}

export const GetAuthorsRes = {
  encode(
    message: GetAuthorsRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.authors) {
      Author.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total !== 0) {
      writer.uint32(16).uint32(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAuthorsRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthorsRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authors.push(Author.decode(reader, reader.uint32()));
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

  fromJSON(object: any): GetAuthorsRes {
    return {
      authors: Array.isArray(object?.authors)
        ? object.authors.map((e: any) => Author.fromJSON(e))
        : [],
      total: isSet(object.total) ? Number(object.total) : 0,
    };
  },

  toJSON(message: GetAuthorsRes): unknown {
    const obj: any = {};
    if (message.authors) {
      obj.authors = message.authors.map((e) =>
        e ? Author.toJSON(e) : undefined,
      );
    } else {
      obj.authors = [];
    }
    message.total !== undefined && (obj.total = Math.round(message.total));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAuthorsRes>, I>>(
    base?: I,
  ): GetAuthorsRes {
    return GetAuthorsRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetAuthorsRes>, I>>(
    object: I,
  ): GetAuthorsRes {
    const message = createBaseGetAuthorsRes();
    message.authors = object.authors?.map((e) => Author.fromPartial(e)) || [];
    message.total = object.total ?? 0;
    return message;
  },
};

function createBaseGetAuthorReq(): GetAuthorReq {
  return { authorId: "" };
}

export const GetAuthorReq = {
  encode(
    message: GetAuthorReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.authorId !== "") {
      writer.uint32(10).string(message.authorId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAuthorReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthorReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAuthorReq {
    return { authorId: isSet(object.authorId) ? String(object.authorId) : "" };
  },

  toJSON(message: GetAuthorReq): unknown {
    const obj: any = {};
    message.authorId !== undefined && (obj.authorId = message.authorId);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAuthorReq>, I>>(
    base?: I,
  ): GetAuthorReq {
    return GetAuthorReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetAuthorReq>, I>>(
    object: I,
  ): GetAuthorReq {
    const message = createBaseGetAuthorReq();
    message.authorId = object.authorId ?? "";
    return message;
  },
};

function createBaseGetAuthorRes(): GetAuthorRes {
  return { author: undefined };
}

export const GetAuthorRes = {
  encode(
    message: GetAuthorRes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.author !== undefined) {
      Author.encode(message.author, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAuthorRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthorRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.author = Author.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAuthorRes {
    return {
      author: isSet(object.author) ? Author.fromJSON(object.author) : undefined,
    };
  },

  toJSON(message: GetAuthorRes): unknown {
    const obj: any = {};
    message.author !== undefined &&
      (obj.author = message.author ? Author.toJSON(message.author) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAuthorRes>, I>>(
    base?: I,
  ): GetAuthorRes {
    return GetAuthorRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetAuthorRes>, I>>(
    object: I,
  ): GetAuthorRes {
    const message = createBaseGetAuthorRes();
    message.author =
      object.author !== undefined && object.author !== null
        ? Author.fromPartial(object.author)
        : undefined;
    return message;
  },
};

export type BlogSrvService = typeof BlogSrvService;
export const BlogSrvService = {
  getBlogPosts: {
    path: "/fy.blog.v1.BlogSrv/GetBlogPosts",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetBlogPostsReq) =>
      Buffer.from(GetBlogPostsReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetBlogPostsReq.decode(value),
    responseSerialize: (value: GetBlogPostsRes) =>
      Buffer.from(GetBlogPostsRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetBlogPostsRes.decode(value),
  },
  getPublishedBlogPosts: {
    path: "/fy.blog.v1.BlogSrv/GetPublishedBlogPosts",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetPublishedBlogPostsReq) =>
      Buffer.from(GetPublishedBlogPostsReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetPublishedBlogPostsReq.decode(value),
    responseSerialize: (value: GetPublishedBlogPostsRes) =>
      Buffer.from(GetPublishedBlogPostsRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      GetPublishedBlogPostsRes.decode(value),
  },
  getBlogPost: {
    path: "/fy.blog.v1.BlogSrv/GetBlogPost",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetBlogPostReq) =>
      Buffer.from(GetBlogPostReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetBlogPostReq.decode(value),
    responseSerialize: (value: GetBlogPostRes) =>
      Buffer.from(GetBlogPostRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetBlogPostRes.decode(value),
  },
  getBlogPostByPath: {
    path: "/fy.blog.v1.BlogSrv/GetBlogPostByPath",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetBlogPostByPathReq) =>
      Buffer.from(GetBlogPostByPathReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetBlogPostByPathReq.decode(value),
    responseSerialize: (value: GetBlogPostByPathRes) =>
      Buffer.from(GetBlogPostByPathRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetBlogPostByPathRes.decode(value),
  },
  createBlogPost: {
    path: "/fy.blog.v1.BlogSrv/CreateBlogPost",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateBlogPostReq) =>
      Buffer.from(CreateBlogPostReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateBlogPostReq.decode(value),
    responseSerialize: (value: CreateBlogPostRes) =>
      Buffer.from(CreateBlogPostRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateBlogPostRes.decode(value),
  },
  publishBlogPost: {
    path: "/fy.blog.v1.BlogSrv/PublishBlogPost",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PublishBlogPostReq) =>
      Buffer.from(PublishBlogPostReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PublishBlogPostReq.decode(value),
    responseSerialize: (value: PublishBlogPostRes) =>
      Buffer.from(PublishBlogPostRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PublishBlogPostRes.decode(value),
  },
  updateBlogPost: {
    path: "/fy.blog.v1.BlogSrv/UpdateBlogPost",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateBlogPostReq) =>
      Buffer.from(UpdateBlogPostReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateBlogPostReq.decode(value),
    responseSerialize: (value: UpdateBlogPostRes) =>
      Buffer.from(UpdateBlogPostRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UpdateBlogPostRes.decode(value),
  },
  deleteBlogPost: {
    path: "/fy.blog.v1.BlogSrv/DeleteBlogPost",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteBlogPostReq) =>
      Buffer.from(DeleteBlogPostReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteBlogPostReq.decode(value),
    responseSerialize: (value: DeleteBlogPostRes) =>
      Buffer.from(DeleteBlogPostRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DeleteBlogPostRes.decode(value),
  },
  getAuthors: {
    path: "/fy.blog.v1.BlogSrv/GetAuthors",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetAuthorsReq) =>
      Buffer.from(GetAuthorsReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetAuthorsReq.decode(value),
    responseSerialize: (value: GetAuthorsRes) =>
      Buffer.from(GetAuthorsRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetAuthorsRes.decode(value),
  },
  getAuthor: {
    path: "/fy.blog.v1.BlogSrv/GetAuthor",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetAuthorReq) =>
      Buffer.from(GetAuthorReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetAuthorReq.decode(value),
    responseSerialize: (value: GetAuthorRes) =>
      Buffer.from(GetAuthorRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetAuthorRes.decode(value),
  },
} as const;

export interface BlogSrvServer extends UntypedServiceImplementation {
  getBlogPosts: handleUnaryCall<GetBlogPostsReq, GetBlogPostsRes>;
  getPublishedBlogPosts: handleUnaryCall<
    GetPublishedBlogPostsReq,
    GetPublishedBlogPostsRes
  >;
  getBlogPost: handleUnaryCall<GetBlogPostReq, GetBlogPostRes>;
  getBlogPostByPath: handleUnaryCall<
    GetBlogPostByPathReq,
    GetBlogPostByPathRes
  >;
  createBlogPost: handleUnaryCall<CreateBlogPostReq, CreateBlogPostRes>;
  publishBlogPost: handleUnaryCall<PublishBlogPostReq, PublishBlogPostRes>;
  updateBlogPost: handleUnaryCall<UpdateBlogPostReq, UpdateBlogPostRes>;
  deleteBlogPost: handleUnaryCall<DeleteBlogPostReq, DeleteBlogPostRes>;
  getAuthors: handleUnaryCall<GetAuthorsReq, GetAuthorsRes>;
  getAuthor: handleUnaryCall<GetAuthorReq, GetAuthorRes>;
}

export interface BlogSrvClient extends Client {
  getBlogPosts(
    request: GetBlogPostsReq,
    callback: (error: ServiceError | null, response: GetBlogPostsRes) => void,
  ): ClientUnaryCall;
  getBlogPosts(
    request: GetBlogPostsReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetBlogPostsRes) => void,
  ): ClientUnaryCall;
  getBlogPosts(
    request: GetBlogPostsReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetBlogPostsRes) => void,
  ): ClientUnaryCall;
  getPublishedBlogPosts(
    request: GetPublishedBlogPostsReq,
    callback: (
      error: ServiceError | null,
      response: GetPublishedBlogPostsRes,
    ) => void,
  ): ClientUnaryCall;
  getPublishedBlogPosts(
    request: GetPublishedBlogPostsReq,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetPublishedBlogPostsRes,
    ) => void,
  ): ClientUnaryCall;
  getPublishedBlogPosts(
    request: GetPublishedBlogPostsReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetPublishedBlogPostsRes,
    ) => void,
  ): ClientUnaryCall;
  getBlogPost(
    request: GetBlogPostReq,
    callback: (error: ServiceError | null, response: GetBlogPostRes) => void,
  ): ClientUnaryCall;
  getBlogPost(
    request: GetBlogPostReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetBlogPostRes) => void,
  ): ClientUnaryCall;
  getBlogPost(
    request: GetBlogPostReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetBlogPostRes) => void,
  ): ClientUnaryCall;
  getBlogPostByPath(
    request: GetBlogPostByPathReq,
    callback: (
      error: ServiceError | null,
      response: GetBlogPostByPathRes,
    ) => void,
  ): ClientUnaryCall;
  getBlogPostByPath(
    request: GetBlogPostByPathReq,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetBlogPostByPathRes,
    ) => void,
  ): ClientUnaryCall;
  getBlogPostByPath(
    request: GetBlogPostByPathReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetBlogPostByPathRes,
    ) => void,
  ): ClientUnaryCall;
  createBlogPost(
    request: CreateBlogPostReq,
    callback: (error: ServiceError | null, response: CreateBlogPostRes) => void,
  ): ClientUnaryCall;
  createBlogPost(
    request: CreateBlogPostReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateBlogPostRes) => void,
  ): ClientUnaryCall;
  createBlogPost(
    request: CreateBlogPostReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateBlogPostRes) => void,
  ): ClientUnaryCall;
  publishBlogPost(
    request: PublishBlogPostReq,
    callback: (
      error: ServiceError | null,
      response: PublishBlogPostRes,
    ) => void,
  ): ClientUnaryCall;
  publishBlogPost(
    request: PublishBlogPostReq,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: PublishBlogPostRes,
    ) => void,
  ): ClientUnaryCall;
  publishBlogPost(
    request: PublishBlogPostReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: PublishBlogPostRes,
    ) => void,
  ): ClientUnaryCall;
  updateBlogPost(
    request: UpdateBlogPostReq,
    callback: (error: ServiceError | null, response: UpdateBlogPostRes) => void,
  ): ClientUnaryCall;
  updateBlogPost(
    request: UpdateBlogPostReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UpdateBlogPostRes) => void,
  ): ClientUnaryCall;
  updateBlogPost(
    request: UpdateBlogPostReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UpdateBlogPostRes) => void,
  ): ClientUnaryCall;
  deleteBlogPost(
    request: DeleteBlogPostReq,
    callback: (error: ServiceError | null, response: DeleteBlogPostRes) => void,
  ): ClientUnaryCall;
  deleteBlogPost(
    request: DeleteBlogPostReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: DeleteBlogPostRes) => void,
  ): ClientUnaryCall;
  deleteBlogPost(
    request: DeleteBlogPostReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: DeleteBlogPostRes) => void,
  ): ClientUnaryCall;
  getAuthors(
    request: GetAuthorsReq,
    callback: (error: ServiceError | null, response: GetAuthorsRes) => void,
  ): ClientUnaryCall;
  getAuthors(
    request: GetAuthorsReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetAuthorsRes) => void,
  ): ClientUnaryCall;
  getAuthors(
    request: GetAuthorsReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetAuthorsRes) => void,
  ): ClientUnaryCall;
  getAuthor(
    request: GetAuthorReq,
    callback: (error: ServiceError | null, response: GetAuthorRes) => void,
  ): ClientUnaryCall;
  getAuthor(
    request: GetAuthorReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetAuthorRes) => void,
  ): ClientUnaryCall;
  getAuthor(
    request: GetAuthorReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetAuthorRes) => void,
  ): ClientUnaryCall;
}

export const BlogSrvClient = makeGenericClientConstructor(
  BlogSrvService,
  "fy.blog.v1.BlogSrv",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): BlogSrvClient;
  service: typeof BlogSrvService;
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
