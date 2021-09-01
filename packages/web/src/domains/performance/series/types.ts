export type AvailableSeries = 'nerve' | 'coact' | 'alter-ego';

export interface Series {
    title?: string;
    identifier: AvailableSeries;
    description?: string;
}
