import { filterByCountryCode } from "./lib/filterByCountryCode"
import type { CountryCode, Nameday } from "./types"

export function when(
	name: string | Array<string>,
	settings?: {
		countryCode?: CountryCode
	},
): Array<Nameday> {
	const filteredNamedays = filterByCountryCode(settings?.countryCode)
	const names = new Set(
		(Array.isArray(name) ? name : [name]).map((n) => n.toLowerCase()),
	)

	return filteredNamedays.filter((nameday) =>
		names.has(nameday.name.toLowerCase()),
	)
}
