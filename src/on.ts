import { filterByCountryCode } from "./lib/filterByCountryCode"
import { CountryCode, Nameday } from "./types"

export function on(
  date: { month?: number; day?: number },
  settings?: { countryCode?: CountryCode },
): Nameday[] {
  const filteredNamedays = filterByCountryCode(settings?.countryCode)

  const { month, day } = date
  if (day && month) {
    return filteredNamedays.filter(
      (nameday) => nameday.date.month === month && nameday.date.day === day,
    )
  }
  if (month) {
    return filteredNamedays.filter((nameday) => nameday.date.month === month)
  }
  if (day) {
    return filteredNamedays.filter((nameday) => nameday.date.day === day)
  }
  throw new Error("Either a month, a day or both must be specified.")
}
