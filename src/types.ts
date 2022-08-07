export interface Nameday {
  id: string
  countryCode: CountryCode
  name: string
  date: {
    month: number
    day: number
  }
}

export type CountryCode = "DK" | "NO" | "SE"
