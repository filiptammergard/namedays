export interface Nameday {
	id: string
	countryCode: CountryCode
	name: string
	month: number
	day: number
}

export type NamedayInput = Omit<Nameday, "id">

export type CountryCode = "CZ" | "DE" | "DK" | "NO" | "PL" | "SE"
