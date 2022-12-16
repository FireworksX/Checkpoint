import * as Types from '../../../graphql/codegenTypes';

import { DocumentNode } from 'graphql';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type UserConnectionsQueryVariables = {
  userName: Types.Scalars['String'];
};


export type UserConnectionsQuery = { userConnections: Types.Maybe<Array<{ firstName: Types.Maybe<string>, lastName: Types.Maybe<string>, userName: Types.Maybe<string>, avatar: Types.Maybe<string> }>> };


export const UserConnectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserConnections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userConnections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]} as unknown as DocumentNode;

export function useUserConnectionsQuery(options: Omit<Urql.UseQueryArgs<UserConnectionsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<UserConnectionsQuery>({ query: UserConnectionsDocument, ...options });
};