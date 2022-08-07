import { namedays } from "../namedays"
import { CountryCode, Nameday } from "../types"

export function filterByCountryCode(
  countryCode: CountryCode | undefined,
): Nameday[] {
  if (!countryCode) return namedays
  return namedays.filter((nameday) => nameday.countryCode === countryCode)
}
