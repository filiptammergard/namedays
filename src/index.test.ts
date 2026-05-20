import { describe, expect, test, vi } from "vitest"
import { namedays } from "."

const filipSE = {
	id: "SE-5-2-1",
	countryCode: "SE",
	name: "Filip",
	month: 5,
	day: 2,
}

const filipNO = {
	id: "NO-5-1-1",
	countryCode: "NO",
	name: "Filip",
	month: 5,
	day: 1,
}

const idaSE = {
	id: "SE-9-14-1",
	countryCode: "SE",
	name: "Ida",
	month: 9,
	day: 14,
}

describe("when", () => {
	test("does not filter on country code when no country code is given", () => {
		const input = namedays.when("Filip")
		expect(input).toContainEqual(filipSE)
		expect(input).toContainEqual(filipNO)
	})

	test("filters on country code", () => {
		const input = namedays.when("Filip", { countryCode: "SE" })
		expect(input).toContainEqual(filipSE)
		expect(input).not.toContainEqual(filipNO)
	})

	test("handles string", () => {
		expect(namedays.when("Filip")).toContainEqual(filipSE)
	})

	test("handles array", () => {
		const input = namedays.when(["Filip", "Ida"])
		expect(input).toContainEqual(filipSE)
		expect(input).toContainEqual(idaSE)
	})

	test("is case insensitive", () => {
		expect(namedays.when("filip")).toContainEqual(filipSE)
		expect(namedays.when("FILIP")).toContainEqual(filipSE)
		expect(namedays.when(["fIlIp"])).toContainEqual(filipSE)
	})

	test("returns empty array for unknown name", () => {
		expect(namedays.when("ZzNotAName")).toStrictEqual([])
	})
})

describe("who", () => {
	test("queries by id", () => {
		expect(namedays.who("SE-5-2-1")).toStrictEqual(filipSE)
	})

	test("returns undefined for unknown id", () => {
		expect(namedays.who("XX-0-0-0")).toBeUndefined()
	})
})

describe("on", () => {
	test("filters by day only", () => {
		expect(namedays.on({ day: 2 })).toContainEqual(filipSE)
	})

	test("filters by month only", () => {
		expect(namedays.on({ month: 5 })).toContainEqual(filipSE)
	})

	test("filters by month and day", () => {
		expect(namedays.on({ month: 5, day: 2 })).toContainEqual(filipSE)
	})

	test("respects country code", () => {
		const input = namedays.on({ month: 5, day: 2 }, { countryCode: "SE" })
		expect(input).toContainEqual(filipSE)
		expect(input).not.toContainEqual(filipNO)
	})
})

describe("where", () => {
	test("returns only namedays of the given country", () => {
		const input = namedays.where("SE")
		expect(input).toContainEqual(filipSE)
		expect(input).not.toContainEqual(filipNO)
		expect(input.every((nameday) => nameday.countryCode === "SE")).toBe(true)
	})
})

describe("all", () => {
	test("returns namedays of all countries when no country code given", () => {
		const input = namedays.all()
		expect(input).toContainEqual(filipSE)
		expect(input).toContainEqual(filipNO)
	})

	test("filters on country code", () => {
		const input = namedays.all({ countryCode: "SE" })
		expect(input).toContainEqual(filipSE)
		expect(input).not.toContainEqual(filipNO)
	})
})

describe("today", () => {
	test("returns namedays matching the current date", () => {
		vi.useFakeTimers()
		vi.setSystemTime(new Date(2026, 4, 2))
		try {
			expect(namedays.today({ countryCode: "SE" })).toContainEqual(filipSE)
		} finally {
			vi.useRealTimers()
		}
	})
})

describe("data integrity", () => {
	const all = namedays.all()

	test("all ids are unique", () => {
		const ids = all.map((nameday) => nameday.id)
		expect(new Set(ids).size).toBe(ids.length)
	})

	test("ids match countryCode-month-day prefix", () => {
		for (const nameday of all) {
			expect(
				nameday.id.startsWith(
					`${nameday.countryCode}-${nameday.month}-${nameday.day}-`,
				),
			).toBe(true)
		}
	})

	test("months are between 1 and 12", () => {
		for (const nameday of all) {
			expect(nameday.month).toBeGreaterThanOrEqual(1)
			expect(nameday.month).toBeLessThanOrEqual(12)
		}
	})

	test("days are valid for their month", () => {
		const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
		for (const nameday of all) {
			expect(nameday.day).toBeGreaterThanOrEqual(1)
			expect(nameday.day).toBeLessThanOrEqual(daysInMonth[nameday.month - 1]!)
		}
	})
})
