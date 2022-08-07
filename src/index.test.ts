import { expect, test } from "vitest"
import { namedays } from "."

test("does not filter on country code when no country code is given", () => {
  const input = namedays.when("Filip")
  const namedaySE = {
    id: "SE-5-2-1",
    countryCode: "SE",
    name: "Filip",
    date: {
      month: 5,
      day: 2,
    },
  }
  const namedayNO = {
    id: "NO-5-1-1",
    countryCode: "NO",
    name: "Filip",
    date: {
      month: 5,
      day: 1,
    },
  }
  expect(input).toContainEqual(namedaySE)
  expect(input).toContainEqual(namedayNO)
})

test("filters on country code", () => {
  const input = namedays.when("Filip", { countryCode: "SE" })
  const namedaySE = {
    id: "SE-5-2-1",
    countryCode: "SE",
    name: "Filip",
    date: {
      month: 5,
      day: 2,
    },
  }
  const namedayNO = {
    id: "NO-5-1-1",
    countryCode: "NO",
    name: "Filip",
    date: {
      month: 5,
      day: 1,
    },
  }
  expect(input).toContainEqual(namedaySE)
  expect(input).not.toContainEqual(namedayNO)
})

test("queries by id", () => {
  const input = namedays.who("SE-5-2-1")
  const nameday = {
    id: "SE-5-2-1",
    countryCode: "SE",
    name: "Filip",
    date: {
      month: 5,
      day: 2,
    },
  }
  expect(input).toStrictEqual(nameday)
})

test("day 2 includes Filip's nameday", () => {
  const input = namedays.on({ day: 2 })
  const nameday = {
    id: "SE-5-2-1",
    countryCode: "SE",
    name: "Filip",
    date: {
      month: 5,
      day: 2,
    },
  }
  expect(input).toContainEqual(nameday)
})

test("month May includes Filip's nameday", () => {
  const input = namedays.on({ month: 5 })
  const nameday = {
    id: "SE-5-2-1",
    countryCode: "SE",
    name: "Filip",
    date: {
      month: 5,
      day: 2,
    },
  }
  expect(input).toContainEqual(nameday)
})

test("date May 2nd includes Filip's nameday", () => {
  const input = namedays.on({ month: 5, day: 2 })
  const nameday = {
    id: "SE-5-2-1",
    countryCode: "SE",
    name: "Filip",
    date: {
      month: 5,
      day: 2,
    },
  }
  expect(input).toContainEqual(nameday)
})
