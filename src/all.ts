import { filterByCountryCode } from "./lib/filterByCountryCode"
import type { CountryCode } from "./types"

export function all(settings?: { countryCode?: CountryCode }) {
	const filteredNamedays = filterByCountryCode(settings?.countryCode)
	return filteredNamedays
}
