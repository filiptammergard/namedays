export interface Nameday {
    id: string;
    name: string;
    date: {
        month: number;
        day: number;
    };
}
export declare const namedays: Nameday[];
