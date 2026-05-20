import { namedays } from "../namedays"
import type { CountryCode, Nameday } from "../types"

const byCountryCode = new Map<CountryCode, Array<Nameday>>()
for (const nameday of namedays) {
	const bucket = byCountryCode.get(nameday.countryCode)
	if (bucket) {
		bucket.push(nameday)
	} else {
		byCountryCode.set(nameday.countryCode, [nameday])
	}
}

export function filterByCountryCode(
	countryCode: CountryCode | undefined,
): Array<Nameday> {
	if (!countryCode) return namedays
	return byCountryCode.get(countryCode) ?? []
}
