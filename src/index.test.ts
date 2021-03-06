import { expect, test } from "vitest"
import { on, when, who } from "./index"

test(`when("Filip") to return Filip's nameday`, () => {
  const input = when("Filip")
  const nameday = {
    id: "5-2-1",
    name: "Filip",
    date: {
      month: 5,
      day: 2,
    },
  }
  expect(input).toStrictEqual(nameday)
})

test(`who("5-2-1") to return Filip's nameday`, () => {
  const input = who("5-2-1")
  const nameday = {
    id: "5-2-1",
    name: "Filip",
    date: {
      month: 5,
      day: 2,
    },
  }
  expect(input).toStrictEqual(nameday)
})

test("day 2 to include 20 namedays", () => {
  const input = on({ day: 2 })
  expect(input).toHaveLength(20)
})

test("day 2 to include Filip's nameday", () => {
  const input = on({ day: 2 })
  const nameday = {
    id: "5-2-1",
    name: "Filip",
    date: {
      month: 5,
      day: 2,
    },
  }
  expect(input).toContainEqual(nameday)
})

test("month May to include 58 namedays", () => {
  const input = on({ month: 5 })
  expect(input).toHaveLength(58)
})

test("month May to include Filip's nameday", () => {
  const input = on({ month: 5 })
  const nameday = {
    id: "5-2-1",
    name: "Filip",
    date: {
      month: 5,
      day: 2,
    },
  }
  expect(input).toContainEqual(nameday)
})

test("date May 2nd to include Filip's nameday", () => {
  const input = on({ month: 5, day: 2 })
  const nameday = {
    id: "5-2-1",
    name: "Filip",
    date: {
      month: 5,
      day: 2,
    },
  }
  expect(input).toContainEqual(nameday)
})
