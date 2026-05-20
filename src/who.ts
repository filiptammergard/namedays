import { namedays } from "./namedays"
import type { Nameday } from "./types"

const byId = new Map(namedays.map((nameday) => [nameday.id, nameday]))

export function who(id: string): Nameday | undefined {
	return byId.get(id)
}
