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

export function who(id: string) {
  const [month, day, index] = id.split("-").map((str) => parseInt(str))
  if (!index && !day) {
    return namedays.filter((nameday) => nameday.date.month === month)
  }
  if (!index) {
    return namedays.filter(
      (nameday) => nameday.date.month === month && nameday.date.day === day
    )
  }
  return namedays.filter((nameday) => nameday.id === id)
}
