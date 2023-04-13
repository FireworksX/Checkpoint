import * as Types from '../../../graphql/codegenTypes';

import { DocumentNode } from 'graphql';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type PlaceDetailQueryVariables = {
  googleId?: Types.Maybe<Types.Scalars['String']>;
};


export type PlaceDetailQuery = { place: Types.Maybe<{ slug: Types.Maybe<string>, name: Types.Maybe<string>, address: Types.Maybe<string>, photos: Types.Maybe<Array<Types.Maybe<string>>>, rating: Types.Maybe<{ value: Types.Maybe<number>, count: Types.Maybe<number> }> }> };


export const PlaceDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PlaceDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"googleId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"place"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"googleId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"googleId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"rating"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}},{"kind":"Field","name":{"kind":"Name","value":"photos"}}]}}]}}]} as unknown as DocumentNode;

export function usePlaceDetailQuery(options: Omit<Urql.UseQueryArgs<PlaceDetailQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PlaceDetailQuery>({ query: PlaceDetailDocument, ...options });
};