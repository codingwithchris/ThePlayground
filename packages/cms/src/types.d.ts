import { DOCUMENT_ACTIONS } from './constants';

declare module '@sanity/desk-tool/structure-builder';

type DocumentActions = typeof DOCUMENT_ACTIONS;

interface Document {
    name: string;
    title: string;
    icon?: JSX.Element | string;
    disabledActions?: DocumentActions;
    fields: unknown[];
}

export interface CreateDocumentReturn {
    ID: string;
    TITLE: string;
    schema: unknown;
}

interface PageDocument extends Document {
    maxSlugLength?: number;
    fieldsets?: unknown[];
    groups?: Record<{ name: string; title: string }>[];
}

interface DocumentCollection extends Document {
    disableSEO?: boolean;
    initialValue?: unknown;
    fieldsets?: unknown[];
    groups?: Record<{ name: string; title: string }>[];
    preview?: unknown;
    orderings?: unknown[];
}

interface ConfigDocument extends Document {
    preview?: unknown;
}

export type CreateDocument<T> = (params: T) => CreateDocumentReturn;
export type CreatePageDocument = CreateDocument<PageDocument>;
export type CreateConfigDocument = CreateDocument<ConfigDocument>;
export type CreateDocumentCollection = CreateDocument<DocumentCollection>;
