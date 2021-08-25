import { Nameday, namedays } from "./namedays"

export { namedays } from "./namedays"
export type { Nameday } from "./namedays"

export function today() {
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

export function when(names: string[]): Nameday[]
export function when(names: string): Nameday[]
export function when(names: string | string[]) {
  if (typeof names === "string") {
    return namedays.filter(
      (nameday) => nameday.name.toLowerCase() === names.toLowerCase()
    )
  }
  return namedays.filter((nameday) =>
    names.map((name) => name.toLowerCase()).includes(nameday.name.toLowerCase())
  )
}

export function who(id?: string) {
  return namedays.filter((nameday) => nameday.id === id)
}

export function date(month: number): Nameday[]
export function date(month: number, day: number): Nameday[]
export function date(month: number, day?: number) {
  if (day && month) {
    return namedays.filter(
      (nameday) => nameday.date.month === month && nameday.date.day === day
    )
  }
  if (month) {
    return namedays.filter((nameday) => nameday.date.month === month)
  }
}
