import { filterByCountryCode } from "./lib/filterByCountryCode"
import type { CountryCode, Nameday } from "./types"

export function today(settings?: { countryCode?: CountryCode }): Nameday[] {
	const today = {
		month: new Date().getMonth() + 1,
		day: new Date().getDate(),
	}

	const filteredNamedays = filterByCountryCode(settings?.countryCode)

	return filteredNamedays.filter(
		(nameday) =>
			nameday.date.month === today.month && nameday.date.day === today.day,
	)
}
