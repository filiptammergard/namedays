import { namedays } from "../namedays"
import type { CountryCode, Nameday } from "../types"

export function filterByCountryCode(
	countryCode: CountryCode | undefined,
): Array<Nameday> {
	if (!countryCode) return namedays
	return namedays.filter((nameday) => nameday.countryCode === countryCode)
}
