# namedays

A minimal API for namedays.

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

### All

`namedays.all` is a function that returns all namedays.

#### Parameters

`namedays.all()` takes no parameters.

#### Returns

All namedays.

#### Example

```ts
import { namedays } from "namedays"

// all namedays, regardless of which country
namedays.all()
```

### Today

`namedays.today` is a function that returns namedays of the current day.

#### Parameters

- Optional `settings`: An object where country code can be set.

#### Returns

The namedays of today.

```ts
import { namedays } from "namedays"

// all namedays of current day, regardless of country
namedays.today()

// all Swedish namedays of current day
namedays.today({
	countryCode: "SE",
})
```

### When

`namedays.when` is a function that returns the nameday of a specific name.

#### Parameters

- `name`: The name or names you want the nameday for.
- Optional `settings`: An object where country code can be set.

#### Returns

The nameday of the passed name.

#### Examples

```ts
import { namedays } from "namedays"

// all Filip's namedays, regardless of country
namedays.when("Filip")

// Filip's Swedish nameday
namedays.when("Filip", {
	countryCode: "SE",
})

// all Filip's and Ida's namedays, regardless of country
namedays.when(["Filip", "Ida"])
```

### Who

`namedays.who` is a function that returns the nameday of a specific ID.

#### Parameters

- `id`: The ID of the nameday you want.

#### Returns

The nameday of a specific ID. If ID doesn't exist, `undefined` is returned.

#### Examples

```ts
import { namedays } from "namedays"

// nameday with id SE-5-2-1, `undefined` if there are no nameday with that id
namedays.who("SE-5-2-1")
```

### On

`namedays.on` is a function that returns the namedays of a specific day.

#### Parameters

- `on`: The month and/or day you want the namedays for.
- Optional `settings`: An object where country code can be set.

#### Returns

The namedays of a specific day.

#### Examples

```ts
import { namedays } from "namedays"

// all namedays in May, regardless of country
namedays.on({
	month: 5,
})

// all namedays the 2nd every month, regardless of country
namedays.on({
	day: 2,
})

// all namedays May 2nd, regardless of country
namedays.on({
	month: 5,
	day: 2,
})

// all Swedish namedays May 2nd
namedays.on(
	{
		month: 5,
		day: 2,
	},
	{
		countryCode: "SE",
	},
)
```

## License

MIT
