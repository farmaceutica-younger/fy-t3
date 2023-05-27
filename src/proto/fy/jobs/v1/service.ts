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
import { Job, SponsoredJob } from "./job";

export const protobufPackage = "fy.jobs.v1";

export interface GetJobsReq {
  companyIds: string[];
  skip: number;
  take: number;
  regions: string[];
}

export interface GetJobsRes {
  jobs: Job[];
}

export interface CountJobsReq {
  companyIds: string[];
  regions: string[];
}

export interface CountJobsRes {
  total: number;
}

export interface CreateJobsReq {
  jobs: CreateJobData[];
}

export interface CreateJobData {
  title: string;
  description: string;
  url: string;
  companyId: string;
  location: string;
  postedAt: Date | undefined;
}

export interface CreateJobsRes {}

export interface GetSponsoredJobsReq {
  skip: number;
  take: number;
  onlyPublic: boolean;
}

export interface GetSponsoredJobsRes {
  jobs: SponsoredJob[];
  total: number;
}

export interface GetSponsoredJobReq {
  jobId: string;
}

export interface GetSponsoredJobRes {
  job: SponsoredJob | undefined;
}

export interface CreateSponsoredJobReq {
  title: string;
  description: string;
  body: string;
  location: string;
  ralRange: string;
  remoteType: string;
  applicationLink: string;
  companyName: string;
  companyLogo: string;
  companyWebsite: string;
  publicStartDate: Date | undefined;
  publicEndDate: Date | undefined;
}

export interface CreateSponsoredJobRes {
  job: SponsoredJob | undefined;
}

export interface UpdateSponsoredJobReq {
  jobId: string;
  title?: string | undefined;
  description?: string | undefined;
  body?: string | undefined;
  location?: string | undefined;
  ralRange?: string | undefined;
  remoteType?: string | undefined;
  applicationLink?: string | undefined;
  companyName?: string | undefined;
  companyLogo?: string | undefined;
  companyWebsite?: string | undefined;
  publicStartDate?: Date | undefined;
  publicEndDate?: Date | undefined;
  draft?: boolean | undefined;
}

export interface UpdateSponsoredJobRes {
  job: SponsoredJob | undefined;
}

export interface DeleteSponsoredJobReq {
  jobId: string;
}

export interface DeleteSponsoredJobRes {
  job: SponsoredJob | undefined;
}

function createBaseGetJobsReq(): GetJobsReq {
  return { companyIds: [], skip: 0, take: 0, regions: [] };
}

export const GetJobsReq = {
  encode(
    message: GetJobsReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.companyIds) {
      writer.uint32(10).string(v!);
    }
    if (message.skip !== 0) {
      writer.uint32(16).uint32(message.skip);
    }
    if (message.take !== 0) {
      writer.uint32(24).uint32(message.take);
    }
    for (const v of message.regions) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetJobsReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetJobsReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.companyIds.push(reader.string());
          break;
        case 2:
          message.skip = reader.uint32();
          break;
        case 3:
          message.take = reader.uint32();
          break;
        case 4:
          message.regions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetJobsReq {
    return {
      companyIds: Array.isArray(object?.companyIds)
        ? object.companyIds.map((e: any) => String(e))
        : [],
      skip: isSet(object.skip) ? Number(object.skip) : 0,
      take: isSet(object.take) ? Number(object.take) : 0,
      regions: Array.isArray(object?.regions)
        ? object.regions.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: GetJobsReq): unknown {
    const obj: any = {};
    if (message.companyIds) {
      obj.companyIds = message.companyIds.map((e) => e);
    } else {
      obj.companyIds = [];
    }
    message.skip !== undefined && (obj.skip = Math.round(message.skip));
    message.take !== undefined && (obj.take = Math.round(message.take));
    if (message.regions) {
      obj.regions = message.regions.map((e) => e);
    } else {
      obj.regions = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetJobsReq>, I>>(base?: I): GetJobsReq {
    return GetJobsReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetJobsReq>, I>>(
    object: I
  ): GetJobsReq {
    const message = createBaseGetJobsReq();
    message.companyIds = object.companyIds?.map((e) => e) || [];
    message.skip = object.skip ?? 0;
    message.take = object.take ?? 0;
    message.regions = object.regions?.map((e) => e) || [];
    return message;
  },
};

function createBaseGetJobsRes(): GetJobsRes {
  return { jobs: [] };
}

export const GetJobsRes = {
  encode(
    message: GetJobsRes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.jobs) {
      Job.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetJobsRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetJobsRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.jobs.push(Job.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetJobsRes {
    return {
      jobs: Array.isArray(object?.jobs)
        ? object.jobs.map((e: any) => Job.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetJobsRes): unknown {
    const obj: any = {};
    if (message.jobs) {
      obj.jobs = message.jobs.map((e) => (e ? Job.toJSON(e) : undefined));
    } else {
      obj.jobs = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetJobsRes>, I>>(base?: I): GetJobsRes {
    return GetJobsRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetJobsRes>, I>>(
    object: I
  ): GetJobsRes {
    const message = createBaseGetJobsRes();
    message.jobs = object.jobs?.map((e) => Job.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCountJobsReq(): CountJobsReq {
  return { companyIds: [], regions: [] };
}

export const CountJobsReq = {
  encode(
    message: CountJobsReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.companyIds) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.regions) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CountJobsReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCountJobsReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.companyIds.push(reader.string());
          break;
        case 2:
          message.regions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CountJobsReq {
    return {
      companyIds: Array.isArray(object?.companyIds)
        ? object.companyIds.map((e: any) => String(e))
        : [],
      regions: Array.isArray(object?.regions)
        ? object.regions.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: CountJobsReq): unknown {
    const obj: any = {};
    if (message.companyIds) {
      obj.companyIds = message.companyIds.map((e) => e);
    } else {
      obj.companyIds = [];
    }
    if (message.regions) {
      obj.regions = message.regions.map((e) => e);
    } else {
      obj.regions = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CountJobsReq>, I>>(
    base?: I
  ): CountJobsReq {
    return CountJobsReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CountJobsReq>, I>>(
    object: I
  ): CountJobsReq {
    const message = createBaseCountJobsReq();
    message.companyIds = object.companyIds?.map((e) => e) || [];
    message.regions = object.regions?.map((e) => e) || [];
    return message;
  },
};

function createBaseCountJobsRes(): CountJobsRes {
  return { total: 0 };
}

export const CountJobsRes = {
  encode(
    message: CountJobsRes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.total !== 0) {
      writer.uint32(8).uint32(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CountJobsRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCountJobsRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CountJobsRes {
    return { total: isSet(object.total) ? Number(object.total) : 0 };
  },

  toJSON(message: CountJobsRes): unknown {
    const obj: any = {};
    message.total !== undefined && (obj.total = Math.round(message.total));
    return obj;
  },

  create<I extends Exact<DeepPartial<CountJobsRes>, I>>(
    base?: I
  ): CountJobsRes {
    return CountJobsRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CountJobsRes>, I>>(
    object: I
  ): CountJobsRes {
    const message = createBaseCountJobsRes();
    message.total = object.total ?? 0;
    return message;
  },
};

function createBaseCreateJobsReq(): CreateJobsReq {
  return { jobs: [] };
}

export const CreateJobsReq = {
  encode(
    message: CreateJobsReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.jobs) {
      CreateJobData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateJobsReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateJobsReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.jobs.push(CreateJobData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateJobsReq {
    return {
      jobs: Array.isArray(object?.jobs)
        ? object.jobs.map((e: any) => CreateJobData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CreateJobsReq): unknown {
    const obj: any = {};
    if (message.jobs) {
      obj.jobs = message.jobs.map((e) =>
        e ? CreateJobData.toJSON(e) : undefined
      );
    } else {
      obj.jobs = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateJobsReq>, I>>(
    base?: I
  ): CreateJobsReq {
    return CreateJobsReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateJobsReq>, I>>(
    object: I
  ): CreateJobsReq {
    const message = createBaseCreateJobsReq();
    message.jobs = object.jobs?.map((e) => CreateJobData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateJobData(): CreateJobData {
  return {
    title: "",
    description: "",
    url: "",
    companyId: "",
    location: "",
    postedAt: undefined,
  };
}

export const CreateJobData = {
  encode(
    message: CreateJobData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.url !== "") {
      writer.uint32(26).string(message.url);
    }
    if (message.companyId !== "") {
      writer.uint32(34).string(message.companyId);
    }
    if (message.location !== "") {
      writer.uint32(42).string(message.location);
    }
    if (message.postedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.postedAt),
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateJobData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateJobData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.url = reader.string();
          break;
        case 4:
          message.companyId = reader.string();
          break;
        case 5:
          message.location = reader.string();
          break;
        case 6:
          message.postedAt = fromTimestamp(
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

  fromJSON(object: any): CreateJobData {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      url: isSet(object.url) ? String(object.url) : "",
      companyId: isSet(object.companyId) ? String(object.companyId) : "",
      location: isSet(object.location) ? String(object.location) : "",
      postedAt: isSet(object.postedAt)
        ? fromJsonTimestamp(object.postedAt)
        : undefined,
    };
  },

  toJSON(message: CreateJobData): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.url !== undefined && (obj.url = message.url);
    message.companyId !== undefined && (obj.companyId = message.companyId);
    message.location !== undefined && (obj.location = message.location);
    message.postedAt !== undefined &&
      (obj.postedAt = message.postedAt.toISOString());
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateJobData>, I>>(
    base?: I
  ): CreateJobData {
    return CreateJobData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateJobData>, I>>(
    object: I
  ): CreateJobData {
    const message = createBaseCreateJobData();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.url = object.url ?? "";
    message.companyId = object.companyId ?? "";
    message.location = object.location ?? "";
    message.postedAt = object.postedAt ?? undefined;
    return message;
  },
};

function createBaseCreateJobsRes(): CreateJobsRes {
  return {};
}

export const CreateJobsRes = {
  encode(
    _: CreateJobsRes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateJobsRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateJobsRes();
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

  fromJSON(_: any): CreateJobsRes {
    return {};
  },

  toJSON(_: CreateJobsRes): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateJobsRes>, I>>(
    base?: I
  ): CreateJobsRes {
    return CreateJobsRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateJobsRes>, I>>(
    _: I
  ): CreateJobsRes {
    const message = createBaseCreateJobsRes();
    return message;
  },
};

function createBaseGetSponsoredJobsReq(): GetSponsoredJobsReq {
  return { skip: 0, take: 0, onlyPublic: false };
}

export const GetSponsoredJobsReq = {
  encode(
    message: GetSponsoredJobsReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.skip !== 0) {
      writer.uint32(8).uint32(message.skip);
    }
    if (message.take !== 0) {
      writer.uint32(16).uint32(message.take);
    }
    if (message.onlyPublic === true) {
      writer.uint32(24).bool(message.onlyPublic);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSponsoredJobsReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSponsoredJobsReq();
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
          message.onlyPublic = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetSponsoredJobsReq {
    return {
      skip: isSet(object.skip) ? Number(object.skip) : 0,
      take: isSet(object.take) ? Number(object.take) : 0,
      onlyPublic: isSet(object.onlyPublic) ? Boolean(object.onlyPublic) : false,
    };
  },

  toJSON(message: GetSponsoredJobsReq): unknown {
    const obj: any = {};
    message.skip !== undefined && (obj.skip = Math.round(message.skip));
    message.take !== undefined && (obj.take = Math.round(message.take));
    message.onlyPublic !== undefined && (obj.onlyPublic = message.onlyPublic);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetSponsoredJobsReq>, I>>(
    base?: I
  ): GetSponsoredJobsReq {
    return GetSponsoredJobsReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetSponsoredJobsReq>, I>>(
    object: I
  ): GetSponsoredJobsReq {
    const message = createBaseGetSponsoredJobsReq();
    message.skip = object.skip ?? 0;
    message.take = object.take ?? 0;
    message.onlyPublic = object.onlyPublic ?? false;
    return message;
  },
};

function createBaseGetSponsoredJobsRes(): GetSponsoredJobsRes {
  return { jobs: [], total: 0 };
}

export const GetSponsoredJobsRes = {
  encode(
    message: GetSponsoredJobsRes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.jobs) {
      SponsoredJob.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total !== 0) {
      writer.uint32(16).uint32(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSponsoredJobsRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSponsoredJobsRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.jobs.push(SponsoredJob.decode(reader, reader.uint32()));
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

  fromJSON(object: any): GetSponsoredJobsRes {
    return {
      jobs: Array.isArray(object?.jobs)
        ? object.jobs.map((e: any) => SponsoredJob.fromJSON(e))
        : [],
      total: isSet(object.total) ? Number(object.total) : 0,
    };
  },

  toJSON(message: GetSponsoredJobsRes): unknown {
    const obj: any = {};
    if (message.jobs) {
      obj.jobs = message.jobs.map((e) =>
        e ? SponsoredJob.toJSON(e) : undefined
      );
    } else {
      obj.jobs = [];
    }
    message.total !== undefined && (obj.total = Math.round(message.total));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetSponsoredJobsRes>, I>>(
    base?: I
  ): GetSponsoredJobsRes {
    return GetSponsoredJobsRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetSponsoredJobsRes>, I>>(
    object: I
  ): GetSponsoredJobsRes {
    const message = createBaseGetSponsoredJobsRes();
    message.jobs = object.jobs?.map((e) => SponsoredJob.fromPartial(e)) || [];
    message.total = object.total ?? 0;
    return message;
  },
};

function createBaseGetSponsoredJobReq(): GetSponsoredJobReq {
  return { jobId: "" };
}

export const GetSponsoredJobReq = {
  encode(
    message: GetSponsoredJobReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.jobId !== "") {
      writer.uint32(10).string(message.jobId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSponsoredJobReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSponsoredJobReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.jobId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetSponsoredJobReq {
    return { jobId: isSet(object.jobId) ? String(object.jobId) : "" };
  },

  toJSON(message: GetSponsoredJobReq): unknown {
    const obj: any = {};
    message.jobId !== undefined && (obj.jobId = message.jobId);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetSponsoredJobReq>, I>>(
    base?: I
  ): GetSponsoredJobReq {
    return GetSponsoredJobReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetSponsoredJobReq>, I>>(
    object: I
  ): GetSponsoredJobReq {
    const message = createBaseGetSponsoredJobReq();
    message.jobId = object.jobId ?? "";
    return message;
  },
};

function createBaseGetSponsoredJobRes(): GetSponsoredJobRes {
  return { job: undefined };
}

export const GetSponsoredJobRes = {
  encode(
    message: GetSponsoredJobRes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.job !== undefined) {
      SponsoredJob.encode(message.job, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSponsoredJobRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSponsoredJobRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.job = SponsoredJob.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetSponsoredJobRes {
    return {
      job: isSet(object.job) ? SponsoredJob.fromJSON(object.job) : undefined,
    };
  },

  toJSON(message: GetSponsoredJobRes): unknown {
    const obj: any = {};
    message.job !== undefined &&
      (obj.job = message.job ? SponsoredJob.toJSON(message.job) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetSponsoredJobRes>, I>>(
    base?: I
  ): GetSponsoredJobRes {
    return GetSponsoredJobRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetSponsoredJobRes>, I>>(
    object: I
  ): GetSponsoredJobRes {
    const message = createBaseGetSponsoredJobRes();
    message.job =
      object.job !== undefined && object.job !== null
        ? SponsoredJob.fromPartial(object.job)
        : undefined;
    return message;
  },
};

function createBaseCreateSponsoredJobReq(): CreateSponsoredJobReq {
  return {
    title: "",
    description: "",
    body: "",
    location: "",
    ralRange: "",
    remoteType: "",
    applicationLink: "",
    companyName: "",
    companyLogo: "",
    companyWebsite: "",
    publicStartDate: undefined,
    publicEndDate: undefined,
  };
}

export const CreateSponsoredJobReq = {
  encode(
    message: CreateSponsoredJobReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.body !== "") {
      writer.uint32(34).string(message.body);
    }
    if (message.location !== "") {
      writer.uint32(42).string(message.location);
    }
    if (message.ralRange !== "") {
      writer.uint32(50).string(message.ralRange);
    }
    if (message.remoteType !== "") {
      writer.uint32(58).string(message.remoteType);
    }
    if (message.applicationLink !== "") {
      writer.uint32(66).string(message.applicationLink);
    }
    if (message.companyName !== "") {
      writer.uint32(74).string(message.companyName);
    }
    if (message.companyLogo !== "") {
      writer.uint32(82).string(message.companyLogo);
    }
    if (message.companyWebsite !== "") {
      writer.uint32(90).string(message.companyWebsite);
    }
    if (message.publicStartDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.publicStartDate),
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.publicEndDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.publicEndDate),
        writer.uint32(106).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateSponsoredJobReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSponsoredJobReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.body = reader.string();
          break;
        case 5:
          message.location = reader.string();
          break;
        case 6:
          message.ralRange = reader.string();
          break;
        case 7:
          message.remoteType = reader.string();
          break;
        case 8:
          message.applicationLink = reader.string();
          break;
        case 9:
          message.companyName = reader.string();
          break;
        case 10:
          message.companyLogo = reader.string();
          break;
        case 11:
          message.companyWebsite = reader.string();
          break;
        case 12:
          message.publicStartDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.publicEndDate = fromTimestamp(
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

  fromJSON(object: any): CreateSponsoredJobReq {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      body: isSet(object.body) ? String(object.body) : "",
      location: isSet(object.location) ? String(object.location) : "",
      ralRange: isSet(object.ralRange) ? String(object.ralRange) : "",
      remoteType: isSet(object.remoteType) ? String(object.remoteType) : "",
      applicationLink: isSet(object.applicationLink)
        ? String(object.applicationLink)
        : "",
      companyName: isSet(object.companyName) ? String(object.companyName) : "",
      companyLogo: isSet(object.companyLogo) ? String(object.companyLogo) : "",
      companyWebsite: isSet(object.companyWebsite)
        ? String(object.companyWebsite)
        : "",
      publicStartDate: isSet(object.publicStartDate)
        ? fromJsonTimestamp(object.publicStartDate)
        : undefined,
      publicEndDate: isSet(object.publicEndDate)
        ? fromJsonTimestamp(object.publicEndDate)
        : undefined,
    };
  },

  toJSON(message: CreateSponsoredJobReq): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.body !== undefined && (obj.body = message.body);
    message.location !== undefined && (obj.location = message.location);
    message.ralRange !== undefined && (obj.ralRange = message.ralRange);
    message.remoteType !== undefined && (obj.remoteType = message.remoteType);
    message.applicationLink !== undefined &&
      (obj.applicationLink = message.applicationLink);
    message.companyName !== undefined &&
      (obj.companyName = message.companyName);
    message.companyLogo !== undefined &&
      (obj.companyLogo = message.companyLogo);
    message.companyWebsite !== undefined &&
      (obj.companyWebsite = message.companyWebsite);
    message.publicStartDate !== undefined &&
      (obj.publicStartDate = message.publicStartDate.toISOString());
    message.publicEndDate !== undefined &&
      (obj.publicEndDate = message.publicEndDate.toISOString());
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSponsoredJobReq>, I>>(
    base?: I
  ): CreateSponsoredJobReq {
    return CreateSponsoredJobReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateSponsoredJobReq>, I>>(
    object: I
  ): CreateSponsoredJobReq {
    const message = createBaseCreateSponsoredJobReq();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.body = object.body ?? "";
    message.location = object.location ?? "";
    message.ralRange = object.ralRange ?? "";
    message.remoteType = object.remoteType ?? "";
    message.applicationLink = object.applicationLink ?? "";
    message.companyName = object.companyName ?? "";
    message.companyLogo = object.companyLogo ?? "";
    message.companyWebsite = object.companyWebsite ?? "";
    message.publicStartDate = object.publicStartDate ?? undefined;
    message.publicEndDate = object.publicEndDate ?? undefined;
    return message;
  },
};

function createBaseCreateSponsoredJobRes(): CreateSponsoredJobRes {
  return { job: undefined };
}

export const CreateSponsoredJobRes = {
  encode(
    message: CreateSponsoredJobRes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.job !== undefined) {
      SponsoredJob.encode(message.job, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateSponsoredJobRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSponsoredJobRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.job = SponsoredJob.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateSponsoredJobRes {
    return {
      job: isSet(object.job) ? SponsoredJob.fromJSON(object.job) : undefined,
    };
  },

  toJSON(message: CreateSponsoredJobRes): unknown {
    const obj: any = {};
    message.job !== undefined &&
      (obj.job = message.job ? SponsoredJob.toJSON(message.job) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSponsoredJobRes>, I>>(
    base?: I
  ): CreateSponsoredJobRes {
    return CreateSponsoredJobRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateSponsoredJobRes>, I>>(
    object: I
  ): CreateSponsoredJobRes {
    const message = createBaseCreateSponsoredJobRes();
    message.job =
      object.job !== undefined && object.job !== null
        ? SponsoredJob.fromPartial(object.job)
        : undefined;
    return message;
  },
};

function createBaseUpdateSponsoredJobReq(): UpdateSponsoredJobReq {
  return {
    jobId: "",
    title: undefined,
    description: undefined,
    body: undefined,
    location: undefined,
    ralRange: undefined,
    remoteType: undefined,
    applicationLink: undefined,
    companyName: undefined,
    companyLogo: undefined,
    companyWebsite: undefined,
    publicStartDate: undefined,
    publicEndDate: undefined,
    draft: undefined,
  };
}

export const UpdateSponsoredJobReq = {
  encode(
    message: UpdateSponsoredJobReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.jobId !== "") {
      writer.uint32(10).string(message.jobId);
    }
    if (message.title !== undefined) {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== undefined) {
      writer.uint32(26).string(message.description);
    }
    if (message.body !== undefined) {
      writer.uint32(34).string(message.body);
    }
    if (message.location !== undefined) {
      writer.uint32(42).string(message.location);
    }
    if (message.ralRange !== undefined) {
      writer.uint32(50).string(message.ralRange);
    }
    if (message.remoteType !== undefined) {
      writer.uint32(58).string(message.remoteType);
    }
    if (message.applicationLink !== undefined) {
      writer.uint32(66).string(message.applicationLink);
    }
    if (message.companyName !== undefined) {
      writer.uint32(74).string(message.companyName);
    }
    if (message.companyLogo !== undefined) {
      writer.uint32(82).string(message.companyLogo);
    }
    if (message.companyWebsite !== undefined) {
      writer.uint32(90).string(message.companyWebsite);
    }
    if (message.publicStartDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.publicStartDate),
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.publicEndDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.publicEndDate),
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.draft !== undefined) {
      writer.uint32(144).bool(message.draft);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateSponsoredJobReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSponsoredJobReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.jobId = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.body = reader.string();
          break;
        case 5:
          message.location = reader.string();
          break;
        case 6:
          message.ralRange = reader.string();
          break;
        case 7:
          message.remoteType = reader.string();
          break;
        case 8:
          message.applicationLink = reader.string();
          break;
        case 9:
          message.companyName = reader.string();
          break;
        case 10:
          message.companyLogo = reader.string();
          break;
        case 11:
          message.companyWebsite = reader.string();
          break;
        case 12:
          message.publicStartDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.publicEndDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 18:
          message.draft = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateSponsoredJobReq {
    return {
      jobId: isSet(object.jobId) ? String(object.jobId) : "",
      title: isSet(object.title) ? String(object.title) : undefined,
      description: isSet(object.description)
        ? String(object.description)
        : undefined,
      body: isSet(object.body) ? String(object.body) : undefined,
      location: isSet(object.location) ? String(object.location) : undefined,
      ralRange: isSet(object.ralRange) ? String(object.ralRange) : undefined,
      remoteType: isSet(object.remoteType)
        ? String(object.remoteType)
        : undefined,
      applicationLink: isSet(object.applicationLink)
        ? String(object.applicationLink)
        : undefined,
      companyName: isSet(object.companyName)
        ? String(object.companyName)
        : undefined,
      companyLogo: isSet(object.companyLogo)
        ? String(object.companyLogo)
        : undefined,
      companyWebsite: isSet(object.companyWebsite)
        ? String(object.companyWebsite)
        : undefined,
      publicStartDate: isSet(object.publicStartDate)
        ? fromJsonTimestamp(object.publicStartDate)
        : undefined,
      publicEndDate: isSet(object.publicEndDate)
        ? fromJsonTimestamp(object.publicEndDate)
        : undefined,
      draft: isSet(object.draft) ? Boolean(object.draft) : undefined,
    };
  },

  toJSON(message: UpdateSponsoredJobReq): unknown {
    const obj: any = {};
    message.jobId !== undefined && (obj.jobId = message.jobId);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.body !== undefined && (obj.body = message.body);
    message.location !== undefined && (obj.location = message.location);
    message.ralRange !== undefined && (obj.ralRange = message.ralRange);
    message.remoteType !== undefined && (obj.remoteType = message.remoteType);
    message.applicationLink !== undefined &&
      (obj.applicationLink = message.applicationLink);
    message.companyName !== undefined &&
      (obj.companyName = message.companyName);
    message.companyLogo !== undefined &&
      (obj.companyLogo = message.companyLogo);
    message.companyWebsite !== undefined &&
      (obj.companyWebsite = message.companyWebsite);
    message.publicStartDate !== undefined &&
      (obj.publicStartDate = message.publicStartDate.toISOString());
    message.publicEndDate !== undefined &&
      (obj.publicEndDate = message.publicEndDate.toISOString());
    message.draft !== undefined && (obj.draft = message.draft);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSponsoredJobReq>, I>>(
    base?: I
  ): UpdateSponsoredJobReq {
    return UpdateSponsoredJobReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateSponsoredJobReq>, I>>(
    object: I
  ): UpdateSponsoredJobReq {
    const message = createBaseUpdateSponsoredJobReq();
    message.jobId = object.jobId ?? "";
    message.title = object.title ?? undefined;
    message.description = object.description ?? undefined;
    message.body = object.body ?? undefined;
    message.location = object.location ?? undefined;
    message.ralRange = object.ralRange ?? undefined;
    message.remoteType = object.remoteType ?? undefined;
    message.applicationLink = object.applicationLink ?? undefined;
    message.companyName = object.companyName ?? undefined;
    message.companyLogo = object.companyLogo ?? undefined;
    message.companyWebsite = object.companyWebsite ?? undefined;
    message.publicStartDate = object.publicStartDate ?? undefined;
    message.publicEndDate = object.publicEndDate ?? undefined;
    message.draft = object.draft ?? undefined;
    return message;
  },
};

function createBaseUpdateSponsoredJobRes(): UpdateSponsoredJobRes {
  return { job: undefined };
}

export const UpdateSponsoredJobRes = {
  encode(
    message: UpdateSponsoredJobRes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.job !== undefined) {
      SponsoredJob.encode(message.job, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateSponsoredJobRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSponsoredJobRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.job = SponsoredJob.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateSponsoredJobRes {
    return {
      job: isSet(object.job) ? SponsoredJob.fromJSON(object.job) : undefined,
    };
  },

  toJSON(message: UpdateSponsoredJobRes): unknown {
    const obj: any = {};
    message.job !== undefined &&
      (obj.job = message.job ? SponsoredJob.toJSON(message.job) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSponsoredJobRes>, I>>(
    base?: I
  ): UpdateSponsoredJobRes {
    return UpdateSponsoredJobRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateSponsoredJobRes>, I>>(
    object: I
  ): UpdateSponsoredJobRes {
    const message = createBaseUpdateSponsoredJobRes();
    message.job =
      object.job !== undefined && object.job !== null
        ? SponsoredJob.fromPartial(object.job)
        : undefined;
    return message;
  },
};

function createBaseDeleteSponsoredJobReq(): DeleteSponsoredJobReq {
  return { jobId: "" };
}

export const DeleteSponsoredJobReq = {
  encode(
    message: DeleteSponsoredJobReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.jobId !== "") {
      writer.uint32(10).string(message.jobId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteSponsoredJobReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteSponsoredJobReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.jobId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteSponsoredJobReq {
    return { jobId: isSet(object.jobId) ? String(object.jobId) : "" };
  },

  toJSON(message: DeleteSponsoredJobReq): unknown {
    const obj: any = {};
    message.jobId !== undefined && (obj.jobId = message.jobId);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteSponsoredJobReq>, I>>(
    base?: I
  ): DeleteSponsoredJobReq {
    return DeleteSponsoredJobReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteSponsoredJobReq>, I>>(
    object: I
  ): DeleteSponsoredJobReq {
    const message = createBaseDeleteSponsoredJobReq();
    message.jobId = object.jobId ?? "";
    return message;
  },
};

function createBaseDeleteSponsoredJobRes(): DeleteSponsoredJobRes {
  return { job: undefined };
}

export const DeleteSponsoredJobRes = {
  encode(
    message: DeleteSponsoredJobRes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.job !== undefined) {
      SponsoredJob.encode(message.job, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteSponsoredJobRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteSponsoredJobRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.job = SponsoredJob.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteSponsoredJobRes {
    return {
      job: isSet(object.job) ? SponsoredJob.fromJSON(object.job) : undefined,
    };
  },

  toJSON(message: DeleteSponsoredJobRes): unknown {
    const obj: any = {};
    message.job !== undefined &&
      (obj.job = message.job ? SponsoredJob.toJSON(message.job) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteSponsoredJobRes>, I>>(
    base?: I
  ): DeleteSponsoredJobRes {
    return DeleteSponsoredJobRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteSponsoredJobRes>, I>>(
    object: I
  ): DeleteSponsoredJobRes {
    const message = createBaseDeleteSponsoredJobRes();
    message.job =
      object.job !== undefined && object.job !== null
        ? SponsoredJob.fromPartial(object.job)
        : undefined;
    return message;
  },
};

export type JobsSrvService = typeof JobsSrvService;
export const JobsSrvService = {
  getJobs: {
    path: "/fy.jobs.v1.JobsSrv/GetJobs",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetJobsReq) =>
      Buffer.from(GetJobsReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetJobsReq.decode(value),
    responseSerialize: (value: GetJobsRes) =>
      Buffer.from(GetJobsRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetJobsRes.decode(value),
  },
  countJobs: {
    path: "/fy.jobs.v1.JobsSrv/CountJobs",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CountJobsReq) =>
      Buffer.from(CountJobsReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CountJobsReq.decode(value),
    responseSerialize: (value: CountJobsRes) =>
      Buffer.from(CountJobsRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CountJobsRes.decode(value),
  },
  createJobs: {
    path: "/fy.jobs.v1.JobsSrv/CreateJobs",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateJobsReq) =>
      Buffer.from(CreateJobsReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateJobsReq.decode(value),
    responseSerialize: (value: CreateJobsRes) =>
      Buffer.from(CreateJobsRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateJobsRes.decode(value),
  },
  getSponsoredJobs: {
    path: "/fy.jobs.v1.JobsSrv/GetSponsoredJobs",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetSponsoredJobsReq) =>
      Buffer.from(GetSponsoredJobsReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetSponsoredJobsReq.decode(value),
    responseSerialize: (value: GetSponsoredJobsRes) =>
      Buffer.from(GetSponsoredJobsRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetSponsoredJobsRes.decode(value),
  },
  getSponsoredJob: {
    path: "/fy.jobs.v1.JobsSrv/GetSponsoredJob",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetSponsoredJobReq) =>
      Buffer.from(GetSponsoredJobReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetSponsoredJobReq.decode(value),
    responseSerialize: (value: GetSponsoredJobRes) =>
      Buffer.from(GetSponsoredJobRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetSponsoredJobRes.decode(value),
  },
  createSponsoredJob: {
    path: "/fy.jobs.v1.JobsSrv/CreateSponsoredJob",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateSponsoredJobReq) =>
      Buffer.from(CreateSponsoredJobReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateSponsoredJobReq.decode(value),
    responseSerialize: (value: CreateSponsoredJobRes) =>
      Buffer.from(CreateSponsoredJobRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateSponsoredJobRes.decode(value),
  },
  updateSponsoredJob: {
    path: "/fy.jobs.v1.JobsSrv/UpdateSponsoredJob",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateSponsoredJobReq) =>
      Buffer.from(UpdateSponsoredJobReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateSponsoredJobReq.decode(value),
    responseSerialize: (value: UpdateSponsoredJobRes) =>
      Buffer.from(UpdateSponsoredJobRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UpdateSponsoredJobRes.decode(value),
  },
  deleteSponsoredJob: {
    path: "/fy.jobs.v1.JobsSrv/DeleteSponsoredJob",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteSponsoredJobReq) =>
      Buffer.from(DeleteSponsoredJobReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteSponsoredJobReq.decode(value),
    responseSerialize: (value: DeleteSponsoredJobRes) =>
      Buffer.from(DeleteSponsoredJobRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DeleteSponsoredJobRes.decode(value),
  },
} as const;

export interface JobsSrvServer extends UntypedServiceImplementation {
  getJobs: handleUnaryCall<GetJobsReq, GetJobsRes>;
  countJobs: handleUnaryCall<CountJobsReq, CountJobsRes>;
  createJobs: handleUnaryCall<CreateJobsReq, CreateJobsRes>;
  getSponsoredJobs: handleUnaryCall<GetSponsoredJobsReq, GetSponsoredJobsRes>;
  getSponsoredJob: handleUnaryCall<GetSponsoredJobReq, GetSponsoredJobRes>;
  createSponsoredJob: handleUnaryCall<
    CreateSponsoredJobReq,
    CreateSponsoredJobRes
  >;
  updateSponsoredJob: handleUnaryCall<
    UpdateSponsoredJobReq,
    UpdateSponsoredJobRes
  >;
  deleteSponsoredJob: handleUnaryCall<
    DeleteSponsoredJobReq,
    DeleteSponsoredJobRes
  >;
}

export interface JobsSrvClient extends Client {
  getJobs(
    request: GetJobsReq,
    callback: (error: ServiceError | null, response: GetJobsRes) => void
  ): ClientUnaryCall;
  getJobs(
    request: GetJobsReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetJobsRes) => void
  ): ClientUnaryCall;
  getJobs(
    request: GetJobsReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetJobsRes) => void
  ): ClientUnaryCall;
  countJobs(
    request: CountJobsReq,
    callback: (error: ServiceError | null, response: CountJobsRes) => void
  ): ClientUnaryCall;
  countJobs(
    request: CountJobsReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CountJobsRes) => void
  ): ClientUnaryCall;
  countJobs(
    request: CountJobsReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CountJobsRes) => void
  ): ClientUnaryCall;
  createJobs(
    request: CreateJobsReq,
    callback: (error: ServiceError | null, response: CreateJobsRes) => void
  ): ClientUnaryCall;
  createJobs(
    request: CreateJobsReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateJobsRes) => void
  ): ClientUnaryCall;
  createJobs(
    request: CreateJobsReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateJobsRes) => void
  ): ClientUnaryCall;
  getSponsoredJobs(
    request: GetSponsoredJobsReq,
    callback: (
      error: ServiceError | null,
      response: GetSponsoredJobsRes
    ) => void
  ): ClientUnaryCall;
  getSponsoredJobs(
    request: GetSponsoredJobsReq,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetSponsoredJobsRes
    ) => void
  ): ClientUnaryCall;
  getSponsoredJobs(
    request: GetSponsoredJobsReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetSponsoredJobsRes
    ) => void
  ): ClientUnaryCall;
  getSponsoredJob(
    request: GetSponsoredJobReq,
    callback: (error: ServiceError | null, response: GetSponsoredJobRes) => void
  ): ClientUnaryCall;
  getSponsoredJob(
    request: GetSponsoredJobReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetSponsoredJobRes) => void
  ): ClientUnaryCall;
  getSponsoredJob(
    request: GetSponsoredJobReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetSponsoredJobRes) => void
  ): ClientUnaryCall;
  createSponsoredJob(
    request: CreateSponsoredJobReq,
    callback: (
      error: ServiceError | null,
      response: CreateSponsoredJobRes
    ) => void
  ): ClientUnaryCall;
  createSponsoredJob(
    request: CreateSponsoredJobReq,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: CreateSponsoredJobRes
    ) => void
  ): ClientUnaryCall;
  createSponsoredJob(
    request: CreateSponsoredJobReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: CreateSponsoredJobRes
    ) => void
  ): ClientUnaryCall;
  updateSponsoredJob(
    request: UpdateSponsoredJobReq,
    callback: (
      error: ServiceError | null,
      response: UpdateSponsoredJobRes
    ) => void
  ): ClientUnaryCall;
  updateSponsoredJob(
    request: UpdateSponsoredJobReq,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: UpdateSponsoredJobRes
    ) => void
  ): ClientUnaryCall;
  updateSponsoredJob(
    request: UpdateSponsoredJobReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: UpdateSponsoredJobRes
    ) => void
  ): ClientUnaryCall;
  deleteSponsoredJob(
    request: DeleteSponsoredJobReq,
    callback: (
      error: ServiceError | null,
      response: DeleteSponsoredJobRes
    ) => void
  ): ClientUnaryCall;
  deleteSponsoredJob(
    request: DeleteSponsoredJobReq,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: DeleteSponsoredJobRes
    ) => void
  ): ClientUnaryCall;
  deleteSponsoredJob(
    request: DeleteSponsoredJobReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: DeleteSponsoredJobRes
    ) => void
  ): ClientUnaryCall;
}

export const JobsSrvClient = makeGenericClientConstructor(
  JobsSrvService,
  "fy.jobs.v1.JobsSrv"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>
  ): JobsSrvClient;
  service: typeof JobsSrvService;
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
