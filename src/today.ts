import { filterByCountryCode } from "./lib/filterByCountryCode"
import type { CountryCode, Nameday } from "./types"

export function today(settings?: {
	countryCode?: CountryCode
}): Array<Nameday> {
	const date = {
		month: new Date().getMonth() + 1,
		day: new Date().getDate(),
	}

	const filteredNamedays = filterByCountryCode(settings?.countryCode)

	return filteredNamedays.filter(
		(nameday) =>
			nameday.date.month === date.month && nameday.date.day === date.day,
	)
}
