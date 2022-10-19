import { namedays } from "./namedays"
import { CountryCode, Nameday } from "./types"

export function where(countryCode: CountryCode): Nameday[] {
	return namedays.filter((nameday) => nameday.countryCode === countryCode)
}
