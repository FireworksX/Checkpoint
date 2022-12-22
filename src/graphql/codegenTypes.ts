export type Maybe<T> = T;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ConnectionFlag = {
  isConnection: Maybe<Scalars['Boolean']>;
  isSubscribe: Maybe<Scalars['Boolean']>;
  isFollow: Maybe<Scalars['Boolean']>;
};

export type Connections = {
  userName: Maybe<Scalars['String']>;
  connections: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Coords = {
  lat: Maybe<Scalars['Float']>;
  lng: Maybe<Scalars['Float']>;
};

export type Location = {
  country: Maybe<Scalars['String']>;
  city: Maybe<Scalars['String']>;
  coords: Maybe<Coords>;
};

export type Mutation = {
  sendAuthCode: User;
  checkCode: User;
  register: User;
  editUser: User;
  subscribe: Scalars['Boolean'];
  unSubscribe: Scalars['Boolean'];
  connect: Scalars['Boolean'];
  unConnect: Scalars['Boolean'];
};


export type MutationSendAuthCodeArgs = {
  input: NewUser;
};


export type MutationCheckCodeArgs = {
  input: NewUser;
};


export type MutationRegisterArgs = {
  input: NewUser;
};


export type MutationEditUserArgs = {
  input: NewUser;
};


export type MutationSubscribeArgs = {
  input: NewUser;
};


export type MutationUnSubscribeArgs = {
  input: NewUser;
};


export type MutationConnectArgs = {
  input: NewUser;
};


export type MutationUnConnectArgs = {
  input: NewUser;
};

export type NewUser = {
  userName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  confirmCode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  xuserip?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
};

export type Query = {
  usernameExists: Scalars['Boolean'];
  getMe: User;
  getUserInfo: User;
  userSubscribers: Maybe<Array<User>>;
  userConnections: Maybe<Array<User>>;
  userFollowers: Maybe<Array<User>>;
  users: Array<User>;
};


export type QueryUsernameExistsArgs = {
  userName: Scalars['String'];
};


export type QueryGetMeArgs = {
  input: NewUser;
};


export type QueryGetUserInfoArgs = {
  input: NewUser;
};


export type QueryUserSubscribersArgs = {
  userName: Scalars['String'];
};


export type QueryUserConnectionsArgs = {
  userName: Scalars['String'];
};


export type QueryUserFollowersArgs = {
  userName: Scalars['String'];
};

export type Subscriptions = {
  userName: Maybe<Scalars['String']>;
  subscriptions: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type User = {
  _id: Maybe<Scalars['String']>;
  userName: Maybe<Scalars['String']>;
  firstName: Maybe<Scalars['String']>;
  lastName: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  confirmCode: Maybe<Scalars['String']>;
  status: Maybe<Scalars['Int']>;
  token: Maybe<Scalars['String']>;
  bio: Maybe<Scalars['String']>;
  avatar: Maybe<Scalars['String']>;
  location: Maybe<Location>;
  counters: Maybe<UserCounters>;
  me: Maybe<ConnectionFlag>;
};

export type UserCounters = {
  connections: Maybe<Scalars['Int']>;
  followers: Maybe<Scalars['Int']>;
  subscribers: Maybe<Scalars['Int']>;
};
