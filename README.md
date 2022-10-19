# namedays

A minimal namedays API

## Installation

```bash
# npm
npm install namedays

# yarn
yarn add namedays

# pnpm
pnpm add namedays
```

## Usage

The interface that all namedays adhere to is called Nameday and looks like this:

```ts
interface Nameday {
	id: string
	countryCode: CountryCode
	name: string
	date: {
		month: number
		day: number
	}
}
```

`CountryCode` is the union type of country codes currently supported fully or
partly.

`Nameday` is available for usage if needed:

```ts
import { Nameday } from "namedays"
```

### `namedays.all()`

All namedays.

```ts
import { namedays } from "namedays"

// all namedays, regardless of which country
namedays.all()
```

### `namedays.today(settings?: { countryCode?: CountryCode }): Nameday[]`

Namedays of current day.

```ts
import { namedays } from "namedays"

// all namedays of current day, regardless of country
namedays.today()

// all Swedish namedays of current day
namedays.today({ countryCode: "SE" })
```

### `namedays.when(name: string, settings?: { countryCode?: CountryCode }, ): Nameday[]`

Namedays of specified name.

```ts
import { namedays } from "namedays"

// all Filip's namedays, regardless of country
namedays.when("Filip")

// Filip's Swedish nameday
namedays.when("Filip", { countryCode: "SE" })
```

### `namedays.who(id: string): Nameday | undefined`

Nameday of specified id.

```ts
import { namedays } from "namedays"

// nameday with id SE-5-2-1, `undefined` if there are no nameday with that id
namedays.who("SE-5-2-1")
```

### `namedays.on(date: { month?: number; day?: number }, settings?: { countryCode?: CountryCode }): Nameday[]`

Namedays of specified date.

```ts
import { namedays } from "namedays"

// all namedays in May, regardless of country
namedays.on({ month: 5 })

// all namedays the 2nd every month, regardless of country
namedays.on({ day: 2 })

// all namedays May 2nd, regardless of country
namedays.on({ month: 5, day: 2 })

// all Swedish namedays May 2nd
namedays.on({ month: 5, day: 2 }, { countryCode: "SE" })
```

## License

MIT
