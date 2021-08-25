import { namedays } from "./namedays"

export { namedays } from "./namedays"

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

export function who(date: { month: number; day: number }) {
  const result = namedays.filter(
    (nameday) =>
      nameday.date.month === date.month && nameday.date.day === date.day
  )
  return result
}
