import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type NoteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerNote = {
  readonly id: string;
  readonly title?: string | null;
  readonly text?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNote = {
  readonly id: string;
  readonly title?: string | null;
  readonly text?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Note = LazyLoading extends LazyLoadingDisabled ? EagerNote : LazyNote

export declare const Note: (new (init: ModelInit<Note, NoteMetaData>) => Note) & {
  copyOf(source: Note, mutator: (draft: MutableModel<Note, NoteMetaData>) => MutableModel<Note, NoteMetaData> | void): Note;
}