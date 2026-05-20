import { filterByCountryCode } from "./lib/filterByCountryCode"
import type { CountryCode, Nameday } from "./types"

type OnDate = { month: number; day?: number } | { month?: number; day: number }

export function on(
	date: OnDate,
	settings?: {
		countryCode?: CountryCode
	},
): Array<Nameday> {
	const filteredNamedays = filterByCountryCode(settings?.countryCode)
	const { month, day } = date

	return filteredNamedays.filter(
		(nameday) =>
			(month === undefined || nameday.month === month) &&
			(day === undefined || nameday.day === day),
	)
}
