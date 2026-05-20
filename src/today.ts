import { filterByCountryCode } from "./lib/filterByCountryCode"
import type { CountryCode, Nameday } from "./types"

export function today(settings?: {
	countryCode?: CountryCode
}): Array<Nameday> {
	const now = new Date()
	const month = now.getMonth() + 1
	const day = now.getDate()

	return filterByCountryCode(settings?.countryCode).filter(
		(nameday) => nameday.month === month && nameday.day === day,
	)
}
