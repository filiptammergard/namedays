import { Nameday, namedays } from "./namedays"

export { namedays } from "./namedays"
export type { Nameday } from "./namedays"

export function today(): Nameday[] {
  const today = {
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  }
  return namedays.filter(
    (nameday) =>
      nameday.date.month === today.month && nameday.date.day === today.day
  )
}

export function when(name: string): Nameday {
  return namedays.filter(
    (nameday) => nameday.name.toLowerCase() === name.toLowerCase()
  )[0]
}

export function who(id: string): Nameday {
  return namedays.filter((nameday) => nameday.id === id)[0]
}

export function on(date: { day: number }): Nameday[]
export function on(date: { month: number }): Nameday[]
export function on(date: { month: number; day: number }): Nameday[]
export function on(date: { month?: number; day?: number }): Nameday[] {
  const { month, day } = date
  if (day && month) {
    return namedays.filter(
      (nameday) => nameday.date.month === month && nameday.date.day === day
    )
  }
  if (month) {
    return namedays.filter((nameday) => nameday.date.month === month)
  }
  if (day) {
    return namedays.filter((nameday) => nameday.date.day === day)
  }
  throw new Error("Either a month, a day or both must be specified.")
}
