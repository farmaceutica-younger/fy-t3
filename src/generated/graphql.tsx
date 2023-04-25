import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Time: any;
};

export type Author = {
  __typename?: "Author";
  bio: Scalars["String"];
  createdAt: Scalars["Time"];
  id: Scalars["ID"];
  name: Scalars["String"];
  profileImage: Scalars["String"];
  updatedAt: Scalars["Time"];
};

export type BlogPost = {
  __typename?: "BlogPost";
  author: Author;
  body: Scalars["String"];
  description: Scalars["String"];
  featuredImage: Scalars["String"];
  id: Scalars["ID"];
  path: Scalars["String"];
  published: Scalars["Boolean"];
  publishedTime: Scalars["Time"];
  readTime: Scalars["Int"];
  showFeaturedImage: Scalars["Boolean"];
  tags: Array<Scalars["String"]>;
  title: Scalars["String"];
};

export type Event = {
  __typename?: "Event";
  author: Author;
  body: Scalars["String"];
  createdAt: Scalars["Time"];
  description: Scalars["String"];
  endDate: Scalars["Time"];
  externalRegistrationLink: Scalars["String"];
  featuredImage: Scalars["String"];
  getTicket?: Maybe<EventTicket>;
  id: Scalars["ID"];
  location: Scalars["String"];
  published: Scalars["Boolean"];
  reseverdOnlyToMembers: Scalars["Boolean"];
  slug?: Maybe<Scalars["String"]>;
  startDate: Scalars["Time"];
  subscriptionOpened: Scalars["Boolean"];
  tags: Array<Scalars["String"]>;
  title: Scalars["String"];
  updatedAt: Scalars["Time"];
};

export type EventGetTicketArgs = {
  id: Scalars["ID"];
};

export type EventTicket = {
  __typename?: "EventTicket";
  avatar: Scalars["String"];
  firstName: Scalars["String"];
  id: Scalars["ID"];
  ticketNum: Scalars["Int"];
};

export type GetBlogPostsRes = {
  __typename?: "GetBlogPostsRes";
  edges: Array<GetBlogPostsResEdge>;
  total: Scalars["Int"];
};

export type GetBlogPostsResEdge = {
  __typename?: "GetBlogPostsResEdge";
  post: BlogPost;
};

export type GetEventsRes = {
  __typename?: "GetEventsRes";
  edges: Array<GetEventsResEdge>;
  total: Scalars["Int"];
};

export type GetEventsResEdge = {
  __typename?: "GetEventsResEdge";
  event: Event;
};

export type GetJobsRes = {
  __typename?: "GetJobsRes";
  edges: Array<GetJobsResEdge>;
  total: Scalars["Int"];
};

export type GetJobsResEdge = {
  __typename?: "GetJobsResEdge";
  job: Job;
};

export type GetPharmaItalyCompaniesEdge = {
  __typename?: "GetPharmaItalyCompaniesEdge";
  company: PharmaItalyCompany;
};

export type GetPharmaItalyCompaniesRes = {
  __typename?: "GetPharmaItalyCompaniesRes";
  edges: Array<GetPharmaItalyCompaniesEdge>;
  total: Scalars["Int"];
};

export type GetSponsoredJobsRes = {
  __typename?: "GetSponsoredJobsRes";
  edges: Array<GetSponsoredJobsResEdge>;
  total: Scalars["Int"];
};

export type GetSponsoredJobsResEdge = {
  __typename?: "GetSponsoredJobsResEdge";
  job: SponsoredJob;
};

export type Job = {
  __typename?: "Job";
  company_id: Scalars["String"];
  id: Scalars["ID"];
  location: Scalars["String"];
  postedAt: Scalars["Time"];
  title: Scalars["String"];
  url: Scalars["String"];
};

export type PharmaItalyCompany = {
  __typename?: "PharmaItalyCompany";
  address: Scalars["String"];
  city: Scalars["String"];
  companyName: Scalars["String"];
  createdAt: Scalars["Time"];
  description: Scalars["String"];
  id: Scalars["ID"];
  latitude: Scalars["Float"];
  longitude: Scalars["Float"];
  province: Scalars["String"];
  region: Scalars["String"];
  updatedAt: Scalars["Time"];
};

export type Query = {
  __typename?: "Query";
  getBlogPost?: Maybe<BlogPost>;
  getBlogPosts: GetBlogPostsRes;
  getEvent?: Maybe<Event>;
  getEvents: GetEventsRes;
  getJobs: GetJobsRes;
  getPharmaItalyCompanies: GetPharmaItalyCompaniesRes;
  getSponsoredJob?: Maybe<SponsoredJob>;
  getSponsoredJobs: GetSponsoredJobsRes;
};

export type QueryGetBlogPostArgs = {
  path: Scalars["String"];
};

export type QueryGetBlogPostsArgs = {
  filterTags?: InputMaybe<Array<Scalars["String"]>>;
  skip: Scalars["Int"];
  take: Scalars["Int"];
};

export type QueryGetEventArgs = {
  slug: Scalars["String"];
};

export type QueryGetEventsArgs = {
  filterTags?: InputMaybe<Array<Scalars["String"]>>;
  skip: Scalars["Int"];
  startsFrom?: InputMaybe<Scalars["Time"]>;
  take: Scalars["Int"];
};

export type QueryGetJobsArgs = {
  companies: Array<Scalars["String"]>;
  regions: Array<Scalars["String"]>;
  skip: Scalars["Int"];
  take: Scalars["Int"];
};

export type QueryGetPharmaItalyCompaniesArgs = {
  region: Scalars["String"];
  skip: Scalars["Int"];
  take: Scalars["Int"];
};

export type QueryGetSponsoredJobArgs = {
  id: Scalars["ID"];
};

export type QueryGetSponsoredJobsArgs = {
  skip: Scalars["Int"];
  take: Scalars["Int"];
};

export type SponsoredJob = {
  __typename?: "SponsoredJob";
  applicationLink: Scalars["String"];
  body: Scalars["String"];
  companyLogo: Scalars["String"];
  companyName: Scalars["String"];
  companyWebsite: Scalars["String"];
  description: Scalars["String"];
  id: Scalars["ID"];
  location: Scalars["String"];
  ralRange: Scalars["String"];
  remoteType: Scalars["String"];
  title: Scalars["String"];
};

export type GetNextEventsQueryVariables = Exact<{
  startsFrom: Scalars["Time"];
}>;

export type GetNextEventsQuery = {
  __typename?: "Query";
  getEvents: {
    __typename?: "GetEventsRes";
    total: number;
    edges: Array<{
      __typename?: "GetEventsResEdge";
      event: {
        __typename?: "Event";
        id: string;
        title: string;
        description: string;
        slug?: string | null;
        startDate: any;
        endDate: any;
        location: string;
        featuredImage: string;
      };
    }>;
  };
};

export type EventPreviewFragment = {
  __typename?: "Event";
  id: string;
  title: string;
  description: string;
  slug?: string | null;
  startDate: any;
  endDate: any;
  location: string;
  featuredImage: string;
};

export type GetAllEventSlugsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllEventSlugsQuery = {
  __typename?: "Query";
  getEvents: {
    __typename?: "GetEventsRes";
    total: number;
    edges: Array<{
      __typename?: "GetEventsResEdge";
      event: { __typename?: "Event"; id: string; slug?: string | null };
    }>;
  };
};

export type GetEventQueryVariables = Exact<{
  slug: Scalars["String"];
}>;

export type GetEventQuery = {
  __typename?: "Query";
  getEvent?: {
    __typename?: "Event";
    id: string;
    title: string;
    description: string;
    body: string;
    startDate: any;
    endDate: any;
    location: string;
    featuredImage: string;
    tags: Array<string>;
    slug?: string | null;
    createdAt: any;
    author: {
      __typename?: "Author";
      id: string;
      name: string;
      profileImage: string;
    };
  } | null;
};

export type GetEventWithTicketQueryVariables = Exact<{
  slug: Scalars["String"];
  ticketID: Scalars["ID"];
}>;

export type GetEventWithTicketQuery = {
  __typename?: "Query";
  getEvent?: {
    __typename?: "Event";
    id: string;
    title: string;
    description: string;
    body: string;
    startDate: any;
    endDate: any;
    location: string;
    featuredImage: string;
    tags: Array<string>;
    slug?: string | null;
    author: {
      __typename?: "Author";
      id: string;
      name: string;
      profileImage: string;
    };
    getTicket?: {
      __typename?: "EventTicket";
      id: string;
      firstName: string;
      avatar: string;
      ticketNum: number;
    } | null;
  } | null;
};

export type GetJobsQueryVariables = Exact<{
  skip: Scalars["Int"];
  take: Scalars["Int"];
  regions: Array<Scalars["String"]> | Scalars["String"];
  companies: Array<Scalars["String"]> | Scalars["String"];
}>;

export type GetJobsQuery = {
  __typename?: "Query";
  getSponsoredJobs: {
    __typename?: "GetSponsoredJobsRes";
    total: number;
    edges: Array<{
      __typename?: "GetSponsoredJobsResEdge";
      job: {
        __typename?: "SponsoredJob";
        id: string;
        title: string;
        description: string;
        location: string;
        ralRange: string;
        companyName: string;
        companyLogo: string;
        remoteType: string;
      };
    }>;
  };
  getJobs: {
    __typename?: "GetJobsRes";
    total: number;
    edges: Array<{
      __typename?: "GetJobsResEdge";
      job: {
        __typename?: "Job";
        id: string;
        title: string;
        url: string;
        company_id: string;
        location: string;
        postedAt: any;
      };
    }>;
  };
};

export type SponsoredJobPreviewFragment = {
  __typename?: "SponsoredJob";
  id: string;
  title: string;
  description: string;
  location: string;
  ralRange: string;
  companyName: string;
  companyLogo: string;
  remoteType: string;
};

export type GetSponsoredJobQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type GetSponsoredJobQuery = {
  __typename?: "Query";
  getSponsoredJob?: {
    __typename?: "SponsoredJob";
    id: string;
    title: string;
    description: string;
    location: string;
    ralRange: string;
    companyName: string;
    companyLogo: string;
    remoteType: string;
    body: string;
    companyWebsite: string;
    applicationLink: string;
  } | null;
};

export type GetALlSponsoredJobIdsQueryVariables = Exact<{
  skip: Scalars["Int"];
  take: Scalars["Int"];
}>;

export type GetALlSponsoredJobIdsQuery = {
  __typename?: "Query";
  getSponsoredJobs: {
    __typename?: "GetSponsoredJobsRes";
    edges: Array<{
      __typename?: "GetSponsoredJobsResEdge";
      job: { __typename?: "SponsoredJob"; id: string };
    }>;
  };
};

export type GetPharmaItalyCompaniesQueryVariables = Exact<{
  region: Scalars["String"];
}>;

export type GetPharmaItalyCompaniesQuery = {
  __typename?: "Query";
  getPharmaItalyCompanies: {
    __typename?: "GetPharmaItalyCompaniesRes";
    total: number;
    edges: Array<{
      __typename?: "GetPharmaItalyCompaniesEdge";
      company: {
        __typename?: "PharmaItalyCompany";
        id: string;
        companyName: string;
        description: string;
        address: string;
        latitude: number;
        longitude: number;
        region: string;
        city: string;
        province: string;
      };
    }>;
  };
};

export type PharmaItalyCompanyFragment = {
  __typename?: "PharmaItalyCompany";
  id: string;
  companyName: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  region: string;
  city: string;
  province: string;
};

export type GetPostsPreviewQueryVariables = Exact<{
  skip: Scalars["Int"];
  take: Scalars["Int"];
  filterTags?: InputMaybe<Array<Scalars["String"]> | Scalars["String"]>;
}>;

export type GetPostsPreviewQuery = {
  __typename?: "Query";
  getBlogPosts: {
    __typename?: "GetBlogPostsRes";
    total: number;
    edges: Array<{
      __typename?: "GetBlogPostsResEdge";
      post: {
        __typename?: "BlogPost";
        id: string;
        title: string;
        description: string;
        publishedTime: any;
        featuredImage: string;
        readTime: number;
        path: string;
        author: {
          __typename?: "Author";
          id: string;
          name: string;
          profileImage: string;
        };
      };
    }>;
  };
};

export type PostPreviewFragment = {
  __typename?: "BlogPost";
  id: string;
  title: string;
  description: string;
  publishedTime: any;
  featuredImage: string;
  readTime: number;
  path: string;
  author: {
    __typename?: "Author";
    id: string;
    name: string;
    profileImage: string;
  };
};

export type GetAllPostsPathsQueryVariables = Exact<{
  skip: Scalars["Int"];
  take: Scalars["Int"];
  filterTags?: InputMaybe<Array<Scalars["String"]> | Scalars["String"]>;
}>;

export type GetAllPostsPathsQuery = {
  __typename?: "Query";
  getBlogPosts: {
    __typename?: "GetBlogPostsRes";
    total: number;
    edges: Array<{
      __typename?: "GetBlogPostsResEdge";
      post: { __typename?: "BlogPost"; id: string; path: string };
    }>;
  };
};

export type GetPostByPathQueryVariables = Exact<{
  path: Scalars["String"];
}>;

export type GetPostByPathQuery = {
  __typename?: "Query";
  getBlogPost?: {
    __typename?: "BlogPost";
    id: string;
    title: string;
    description: string;
    publishedTime: any;
    featuredImage: string;
    readTime: number;
    path: string;
    tags: Array<string>;
    showFeaturedImage: boolean;
    body: string;
    author: {
      __typename?: "Author";
      id: string;
      name: string;
      profileImage: string;
    };
  } | null;
};

export const EventPreviewFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "EventPreview" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Event" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "startDate" } },
          { kind: "Field", name: { kind: "Name", value: "endDate" } },
          { kind: "Field", name: { kind: "Name", value: "location" } },
          { kind: "Field", name: { kind: "Name", value: "featuredImage" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EventPreviewFragment, unknown>;
export const SponsoredJobPreviewFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SponsoredJobPreview" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SponsoredJob" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "location" } },
          { kind: "Field", name: { kind: "Name", value: "ralRange" } },
          { kind: "Field", name: { kind: "Name", value: "companyName" } },
          { kind: "Field", name: { kind: "Name", value: "companyLogo" } },
          { kind: "Field", name: { kind: "Name", value: "remoteType" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SponsoredJobPreviewFragment, unknown>;
export const PharmaItalyCompanyFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PharmaItalyCompany" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "PharmaItalyCompany" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "companyName" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "address" } },
          { kind: "Field", name: { kind: "Name", value: "latitude" } },
          { kind: "Field", name: { kind: "Name", value: "longitude" } },
          { kind: "Field", name: { kind: "Name", value: "region" } },
          { kind: "Field", name: { kind: "Name", value: "city" } },
          { kind: "Field", name: { kind: "Name", value: "province" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PharmaItalyCompanyFragment, unknown>;
export const PostPreviewFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PostPreview" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "BlogPost" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "publishedTime" } },
          { kind: "Field", name: { kind: "Name", value: "featuredImage" } },
          { kind: "Field", name: { kind: "Name", value: "readTime" } },
          { kind: "Field", name: { kind: "Name", value: "path" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "author" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "profileImage" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PostPreviewFragment, unknown>;
export const GetNextEventsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetNextEvents" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "startsFrom" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Time" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getEvents" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "skip" },
                value: { kind: "IntValue", value: "0" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "take" },
                value: { kind: "IntValue", value: "100" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "startsFrom" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "startsFrom" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "total" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "event" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "EventPreview" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "EventPreview" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Event" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "startDate" } },
          { kind: "Field", name: { kind: "Name", value: "endDate" } },
          { kind: "Field", name: { kind: "Name", value: "location" } },
          { kind: "Field", name: { kind: "Name", value: "featuredImage" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetNextEventsQuery, GetNextEventsQueryVariables>;
export const GetAllEventSlugsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetAllEventSlugs" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getEvents" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "skip" },
                value: { kind: "IntValue", value: "0" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "take" },
                value: { kind: "IntValue", value: "10" },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "total" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "event" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAllEventSlugsQuery,
  GetAllEventSlugsQueryVariables
>;
export const GetEventDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetEvent" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getEvent" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "slug" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "slug" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "body" } },
                { kind: "Field", name: { kind: "Name", value: "startDate" } },
                { kind: "Field", name: { kind: "Name", value: "endDate" } },
                { kind: "Field", name: { kind: "Name", value: "location" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "featuredImage" },
                },
                { kind: "Field", name: { kind: "Name", value: "tags" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "author" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "profileImage" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetEventQuery, GetEventQueryVariables>;
export const GetEventWithTicketDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getEventWithTicket" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "ticketID" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getEvent" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "slug" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "slug" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "body" } },
                { kind: "Field", name: { kind: "Name", value: "startDate" } },
                { kind: "Field", name: { kind: "Name", value: "endDate" } },
                { kind: "Field", name: { kind: "Name", value: "location" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "featuredImage" },
                },
                { kind: "Field", name: { kind: "Name", value: "tags" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "author" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "profileImage" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "getTicket" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "ticketID" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "firstName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "avatar" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "ticketNum" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetEventWithTicketQuery,
  GetEventWithTicketQueryVariables
>;
export const GetJobsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetJobs" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "skip" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "take" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "regions" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "String" },
                },
              },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "companies" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "String" },
                },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getSponsoredJobs" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "skip" },
                value: { kind: "IntValue", value: "0" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "take" },
                value: { kind: "IntValue", value: "10" },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "total" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "job" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: {
                                kind: "Name",
                                value: "SponsoredJobPreview",
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "getJobs" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "skip" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "skip" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "take" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "take" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "regions" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "regions" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "companies" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "companies" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "total" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "job" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "company_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "location" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "postedAt" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SponsoredJobPreview" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SponsoredJob" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "location" } },
          { kind: "Field", name: { kind: "Name", value: "ralRange" } },
          { kind: "Field", name: { kind: "Name", value: "companyName" } },
          { kind: "Field", name: { kind: "Name", value: "companyLogo" } },
          { kind: "Field", name: { kind: "Name", value: "remoteType" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetJobsQuery, GetJobsQueryVariables>;
export const GetSponsoredJobDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetSponsoredJob" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getSponsoredJob" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "location" } },
                { kind: "Field", name: { kind: "Name", value: "ralRange" } },
                { kind: "Field", name: { kind: "Name", value: "companyName" } },
                { kind: "Field", name: { kind: "Name", value: "companyLogo" } },
                { kind: "Field", name: { kind: "Name", value: "remoteType" } },
                { kind: "Field", name: { kind: "Name", value: "body" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "companyWebsite" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "applicationLink" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetSponsoredJobQuery,
  GetSponsoredJobQueryVariables
>;
export const GetALlSponsoredJobIdsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetALlSponsoredJobIds" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "skip" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "take" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getSponsoredJobs" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "skip" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "skip" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "take" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "take" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "job" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetALlSponsoredJobIdsQuery,
  GetALlSponsoredJobIdsQueryVariables
>;
export const GetPharmaItalyCompaniesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetPharmaItalyCompanies" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "region" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getPharmaItalyCompanies" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "region" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "region" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "skip" },
                value: { kind: "IntValue", value: "0" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "take" },
                value: { kind: "IntValue", value: "1000" },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "total" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "company" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: {
                                kind: "Name",
                                value: "PharmaItalyCompany",
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PharmaItalyCompany" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "PharmaItalyCompany" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "companyName" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "address" } },
          { kind: "Field", name: { kind: "Name", value: "latitude" } },
          { kind: "Field", name: { kind: "Name", value: "longitude" } },
          { kind: "Field", name: { kind: "Name", value: "region" } },
          { kind: "Field", name: { kind: "Name", value: "city" } },
          { kind: "Field", name: { kind: "Name", value: "province" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetPharmaItalyCompaniesQuery,
  GetPharmaItalyCompaniesQueryVariables
>;
export const GetAllPostsPathsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetAllPostsPaths" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "skip" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "take" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filterTags" },
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "String" },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getBlogPosts" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "skip" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "skip" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "take" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "take" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "filterTags" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filterTags" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "total" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "post" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "path" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAllPostsPathsQuery,
  GetAllPostsPathsQueryVariables
>;
