import { namedays } from "./namedays"

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

export function when(name: string) {
  const result = namedays.filter(
    (nameday) => nameday.name.toLowerCase() === name.toLowerCase()
  )
  return result
}

export function who(month: number, day?: number) {
  if (!day) {
    return namedays.filter((nameday) => nameday.date.month === month)
  }
  return namedays.filter(
    (nameday) => nameday.date.month === month && nameday.date.day === day
  )
}
