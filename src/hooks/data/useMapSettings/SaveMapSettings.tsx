import * as Types from '../../../graphql/codegenTypes';

import { DocumentNode } from 'graphql';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type SaveMapSettingsMutationVariables = {
  coords?: Types.Maybe<Types.LatLng>;
  center?: Types.Maybe<Types.LatLng>;
  zoom?: Types.Maybe<Types.Scalars['Float']>;
  token: Types.Scalars['String'];
};


export type SaveMapSettingsMutation = { saveMapSettings: boolean };


export const SaveMapSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SaveMapSettings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"coords"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LatLng"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"center"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LatLng"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"zoom"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saveMapSettings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"coords"},"value":{"kind":"Variable","name":{"kind":"Name","value":"coords"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"map_center"},"value":{"kind":"Variable","name":{"kind":"Name","value":"center"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"map_zoom"},"value":{"kind":"Variable","name":{"kind":"Name","value":"zoom"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}]}}]}]}}]} as unknown as DocumentNode;

export function useSaveMapSettingsMutation() {
  return Urql.useMutation<SaveMapSettingsMutation, SaveMapSettingsMutationVariables>(SaveMapSettingsDocument);
};