# namedays

Look up namedays by name, date, country, or ID.

## Installation

```bash
# npm
npm install namedays

# pnpm
pnpm add namedays

# bun
bun add namedays
```

## Usage

```ts
import { namedays } from "namedays"

namedays.today() // all namedays for today, all countries
namedays.when("Filip", { countryCode: "SE" }) // Filip's Swedish nameday
```

The interface that all namedays adhere to is `Nameday`:

```ts
import type { Nameday } from "namedays"

interface Nameday {
	id: string
	countryCode: CountryCode
	name: string
	month: number
	day: number
}
```

`CountryCode` is the union type of country codes currently supported fully or
partly: `"CZ" | "DE" | "DK" | "NO" | "PL" | "SE"`.

## API

### `namedays.all(settings?)`

Returns all namedays.

- `settings.countryCode` (optional): filter by country code.

```ts
namedays.all() // all namedays, all countries
namedays.all({ countryCode: "SE" }) // all Swedish namedays
```

### `namedays.today(settings?)`

Returns namedays for the current day.

- `settings.countryCode` (optional): filter by country code.

```ts
namedays.today() // all namedays of current day, all countries
namedays.today({ countryCode: "SE" }) // Swedish namedays of current day
```

### `namedays.when(name, settings?)`

Returns the nameday(s) of a specific name. Case insensitive.

- `name`: a single name or an array of names.
- `settings.countryCode` (optional): filter by country code.

```ts
namedays.when("Filip") // all Filip's namedays, all countries
namedays.when("Filip", { countryCode: "SE" }) // Filip's Swedish nameday
namedays.when(["Filip", "Ida"]) // all Filip's and Ida's namedays
```

### `namedays.who(id)`

Returns the nameday with a specific ID, or `undefined` if not found.

- `id`: the nameday ID, e.g. `"SE-5-2-1"`.

```ts
namedays.who("SE-5-2-1")
```

### `namedays.where(countryCode)`

Returns all namedays for a given country code.

- `countryCode`: e.g. `"SE"`, `"NO"`.

```ts
namedays.where("SE") // all Swedish namedays
```

### `namedays.on(date, settings?)`

Returns the namedays of a specific day.

- `date.month` (optional): month 1–12.
- `date.day` (optional): day of month.
- `settings.countryCode` (optional): filter by country code.

```ts
namedays.on({ month: 5 }) // all namedays in May, all countries
namedays.on({ day: 2 }) // all namedays the 2nd, all countries
namedays.on({ month: 5, day: 2 }) // all namedays May 2nd, all countries
namedays.on({ month: 5, day: 2 }, { countryCode: "SE" }) // Swedish, May 2nd
```

## License

MIT
