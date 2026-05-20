import type { Nameday } from "../types"
import { namedaysCZ } from "./CZ"
import { namedaysDE } from "./DE"
import { namedaysDK } from "./DK"
import { namedaysNO } from "./NO"
import { namedaysPL } from "./PL"
import { namedaysSE } from "./SE"

const inputs = [
	...namedaysCZ,
	...namedaysDE,
	...namedaysDK,
	...namedaysNO,
	...namedaysPL,
	...namedaysSE,
]

const indexByDate = new Map<string, number>()
const namedays: Array<Nameday> = inputs.map((input) => {
	const key = `${input.countryCode}-${input.month}-${input.day}`
	const next = (indexByDate.get(key) ?? 0) + 1
	indexByDate.set(key, next)
	return { id: `${key}-${next}`, ...input }
})

export { namedays }
