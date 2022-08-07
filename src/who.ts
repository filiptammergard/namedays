import { namedays } from "./namedays"
import { Nameday } from "./types"

export function who(id: string): Nameday | undefined {
  return namedays.find((nameday) => nameday.id === id)
}
