interface Nameday {
    id: string;
    countryCode: CountryCode;
    name: string;
    date: {
        month: number;
        day: number;
    };
}
declare type CountryCode = "DK" | "NO" | "SE";

declare function on(date: {
    month?: number;
    day?: number;
}, settings?: {
    countryCode?: CountryCode;
}): Nameday[];

declare function today(settings?: {
    countryCode?: CountryCode;
}): Nameday[];

declare function when(name: string, settings?: {
    countryCode?: CountryCode;
}): Nameday[];

declare function where(countryCode: CountryCode): Nameday[];

declare function who(id: string): Nameday | undefined;

declare const namedays: {
    all: Nameday[];
    on: typeof on;
    today: typeof today;
    when: typeof when;
    where: typeof where;
    who: typeof who;
};

export { Nameday, namedays };
