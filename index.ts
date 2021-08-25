import { Nameday, namedays } from "./namedays"

export { namedays } from "./namedays"
export type { Nameday } from "./namedays"

export function today(): Nameday[] {
  const today = {
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  }
  const result = namedays.filter(
    (nameday) =>
      nameday.date.month === today.month && nameday.date.day === today.day
  )
  return result
}

export function when(name: string): Nameday {
  return namedays.filter(
    (nameday) => nameday.name.toLowerCase() === name.toLowerCase()
  )[0]
}

export function who(id: string): Nameday {
  return namedays.filter((nameday) => nameday.id === id)[0]
}

export function date(month: number, day?: number): Nameday[] {
  if (day && month) {
    return namedays.filter(
      (nameday) => nameday.date.month === month && nameday.date.day === day
    )
  }
  return namedays.filter((nameday) => nameday.date.month === month)
}
