import { filterByCountryCode } from "./lib/filterByCountryCode"
import type { CountryCode, Nameday } from "./types"

export function when(
	name: string,
	settings?: {
		countryCode?: CountryCode
	},
): Array<Nameday> {
	const filteredNamedays = filterByCountryCode(settings?.countryCode)

	return filteredNamedays.filter(
		(nameday) => nameday.name.toLowerCase() === name.toLowerCase(),
	)
}
