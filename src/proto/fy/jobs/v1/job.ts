/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "fy.jobs.v1";

export interface Job {
  title: string;
  description: string;
  url: string;
  companyId: string;
  location: string;
  postedAt: Date | undefined;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}

export interface SponsoredJob {
  jobId: string;
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
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  publicStartDate: Date | undefined;
  publicEndDate: Date | undefined;
  draft: boolean;
}

function createBaseJob(): Job {
  return {
    title: "",
    description: "",
    url: "",
    companyId: "",
    location: "",
    postedAt: undefined,
    createdAt: undefined,
    updatedAt: undefined,
  };
}

export const Job = {
  encode(message: Job, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedAt),
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Job {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJob();
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
        case 7:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 8:
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

  fromJSON(object: any): Job {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      url: isSet(object.url) ? String(object.url) : "",
      companyId: isSet(object.companyId) ? String(object.companyId) : "",
      location: isSet(object.location) ? String(object.location) : "",
      postedAt: isSet(object.postedAt)
        ? fromJsonTimestamp(object.postedAt)
        : undefined,
      createdAt: isSet(object.createdAt)
        ? fromJsonTimestamp(object.createdAt)
        : undefined,
      updatedAt: isSet(object.updatedAt)
        ? fromJsonTimestamp(object.updatedAt)
        : undefined,
    };
  },

  toJSON(message: Job): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.url !== undefined && (obj.url = message.url);
    message.companyId !== undefined && (obj.companyId = message.companyId);
    message.location !== undefined && (obj.location = message.location);
    message.postedAt !== undefined &&
      (obj.postedAt = message.postedAt.toISOString());
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    return obj;
  },

  create<I extends Exact<DeepPartial<Job>, I>>(base?: I): Job {
    return Job.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Job>, I>>(object: I): Job {
    const message = createBaseJob();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.url = object.url ?? "";
    message.companyId = object.companyId ?? "";
    message.location = object.location ?? "";
    message.postedAt = object.postedAt ?? undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
};

function createBaseSponsoredJob(): SponsoredJob {
  return {
    jobId: "",
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
    createdAt: undefined,
    updatedAt: undefined,
    publicStartDate: undefined,
    publicEndDate: undefined,
    draft: false,
  };
}

export const SponsoredJob = {
  encode(
    message: SponsoredJob,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.jobId !== "") {
      writer.uint32(10).string(message.jobId);
    }
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
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedAt),
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.publicStartDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.publicStartDate),
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.publicEndDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.publicEndDate),
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.draft === true) {
      writer.uint32(144).bool(message.draft);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SponsoredJob {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSponsoredJob();
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
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.updatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 14:
          message.publicStartDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 15:
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

  fromJSON(object: any): SponsoredJob {
    return {
      jobId: isSet(object.jobId) ? String(object.jobId) : "",
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
      createdAt: isSet(object.createdAt)
        ? fromJsonTimestamp(object.createdAt)
        : undefined,
      updatedAt: isSet(object.updatedAt)
        ? fromJsonTimestamp(object.updatedAt)
        : undefined,
      publicStartDate: isSet(object.publicStartDate)
        ? fromJsonTimestamp(object.publicStartDate)
        : undefined,
      publicEndDate: isSet(object.publicEndDate)
        ? fromJsonTimestamp(object.publicEndDate)
        : undefined,
      draft: isSet(object.draft) ? Boolean(object.draft) : false,
    };
  },

  toJSON(message: SponsoredJob): unknown {
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
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    message.publicStartDate !== undefined &&
      (obj.publicStartDate = message.publicStartDate.toISOString());
    message.publicEndDate !== undefined &&
      (obj.publicEndDate = message.publicEndDate.toISOString());
    message.draft !== undefined && (obj.draft = message.draft);
    return obj;
  },

  create<I extends Exact<DeepPartial<SponsoredJob>, I>>(
    base?: I
  ): SponsoredJob {
    return SponsoredJob.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SponsoredJob>, I>>(
    object: I
  ): SponsoredJob {
    const message = createBaseSponsoredJob();
    message.jobId = object.jobId ?? "";
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
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.publicStartDate = object.publicStartDate ?? undefined;
    message.publicEndDate = object.publicEndDate ?? undefined;
    message.draft = object.draft ?? false;
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
