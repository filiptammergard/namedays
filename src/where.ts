import { namedays } from "./namedays"
import type { CountryCode, Nameday } from "./types"

export function where(countryCode: CountryCode): Array<Nameday> {
	return namedays.filter((nameday) => nameday.countryCode === countryCode)
}
