/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Mutation = {
  __typename?: 'Mutation';
  createQueuePoint: QueuePointDto;
};


export type MutationCreateQueuePointArgs = {
  row: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  getLastQueuePoint: QueuePointDto;
  hello: Scalars['String']['output'];
};

export type QueuePointDto = {
  __typename?: 'QueuePointDto';
  date: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  row: Scalars['Int']['output'];
};

export type CreateQueuePointMutationVariables = Exact<{
  row: Scalars['Int']['input'];
}>;


export type CreateQueuePointMutation = { __typename?: 'Mutation', createQueuePoint: { __typename?: 'QueuePointDto', row: number } };

export type GetLastQueuePointQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLastQueuePointQuery = { __typename?: 'Query', getLastQueuePoint: { __typename?: 'QueuePointDto', row: number } };


export const CreateQueuePointDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateQueuePoint"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"row"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createQueuePoint"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"row"},"value":{"kind":"Variable","name":{"kind":"Name","value":"row"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"row"}}]}}]}}]} as unknown as DocumentNode<CreateQueuePointMutation, CreateQueuePointMutationVariables>;
export const GetLastQueuePointDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLastQueuePoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLastQueuePoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"row"}}]}}]}}]} as unknown as DocumentNode<GetLastQueuePointQuery, GetLastQueuePointQueryVariables>;