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

export type LatLng = {
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
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

export type Place = {
  slug: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  geometry: Maybe<PlaceGeometry>;
  rating: Maybe<PlaceRating>;
  address: Maybe<Scalars['String']>;
};

export type PlaceAddress = {
  country: Maybe<Scalars['String']>;
  city: Maybe<Scalars['String']>;
  detail: Maybe<Scalars['String']>;
  full: Maybe<Scalars['String']>;
};

export type PlaceGeometry = {
  viewport: Maybe<PlaceViewport>;
  location: Maybe<Coords>;
};

export type PlaceRating = {
  value: Maybe<Scalars['Float']>;
  count: Maybe<Scalars['Int']>;
};

export type PlaceViewport = {
  northeast: Maybe<Coords>;
  southwest: Maybe<Coords>;
};

export type Query = {
  searchPlace: Maybe<Array<Maybe<Place>>>;
  searchNearPlace: Maybe<Array<Maybe<Place>>>;
  getCity: Maybe<Scalars['String']>;
  usernameExists: Scalars['Boolean'];
  getMe: User;
  getUserInfo: User;
  userSubscribers: Maybe<Array<User>>;
  userConnections: Maybe<Array<User>>;
  userFollowers: Maybe<Array<User>>;
  users: Array<User>;
};


export type QuerySearchPlaceArgs = {
  input: SearchPlace;
};


export type QuerySearchNearPlaceArgs = {
  input: LatLng;
};


export type QueryGetCityArgs = {
  input: LatLng;
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

export type SearchPlace = {
  bbox?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
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
