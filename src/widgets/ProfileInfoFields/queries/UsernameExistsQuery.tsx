import * as Types from '../../../graphql/codegenTypes';

import { DocumentNode } from 'graphql';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type UsernameExistsQueryVariables = {
  userName: Types.Scalars['String'];
};


export type UsernameExistsQuery = { usernameExists: boolean };


export const UsernameExistsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UsernameExists"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usernameExists"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userName"}}}]}]}}]} as unknown as DocumentNode;

export function useUsernameExistsQuery(options: Omit<Urql.UseQueryArgs<UsernameExistsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<UsernameExistsQuery>({ query: UsernameExistsDocument, ...options });
};