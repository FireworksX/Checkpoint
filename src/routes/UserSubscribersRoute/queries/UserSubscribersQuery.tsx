import * as Types from '../../../graphql/codegenTypes';

import { DocumentNode } from 'graphql';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type UserSubscribersQueryVariables = {
  userName: Types.Scalars['String'];
};


export type UserSubscribersQuery = { userSubscribers: Types.Maybe<Array<{ firstName: Types.Maybe<string>, lastName: Types.Maybe<string>, userName: Types.Maybe<string>, avatar: Types.Maybe<string> }>> };


export const UserSubscribersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserSubscribers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userSubscribers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]} as unknown as DocumentNode;

export function useUserSubscribersQuery(options: Omit<Urql.UseQueryArgs<UserSubscribersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<UserSubscribersQuery>({ query: UserSubscribersDocument, ...options });
};