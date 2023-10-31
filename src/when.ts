import { filterByCountryCode } from "./lib/filterByCountryCode"
import type { CountryCode, Nameday } from "./types"

export function when(
	name: string | Array<string>,
	settings?: {
		countryCode?: CountryCode
	},
): Array<Nameday> {
	const filteredNamedays = filterByCountryCode(settings?.countryCode)

	if (Array.isArray(name)) {
		return filteredNamedays.filter((nameday) =>
			name
				.map((name) => name.toLowerCase())
				.includes(nameday.name.toLowerCase()),
		)
	}

	return filteredNamedays.filter(
		(nameday) => nameday.name.toLowerCase() === name.toLowerCase(),
	)
}
