# namedays

## Installation

```
npm i namedays
```

## Usage

The interface that all namedays adhere to is called Nameday and looks like this:

```typescript
interface Nameday {
  id: string
  name: string
  date: {
    month: number
    day: number
  }
}
```

It can be imported like this:

```javascript
import { Nameday } from "namedays"
```

### `namedays: Nameday[]`

A list of all namedays.

```javascript
import { namedays } from "namedays"
```

### `today(): Nameday[]`

Returns namedays of current day.

```javascript
import { today } from "namedays"

today() // assuming today's date is May 2nd
/*
  [
    {
      id: "5-2-1",
      name: "Filip",
      date: {
        month: 5,
        day: 2,
      },
    },
    {
      id: "5-2-2",
      name: "Filippa",
      date: {
        month: 5,
        day: 2,
      },
    },
  ]
*/
```

### `when(name: string): Nameday`

Returns nameday of specified name.

```javascript
import { when } from "namedays"

when("Filip")
/*
  {
    id: "5-2-1",
    name: "Filip",
    date: {
      month: 5,
      day: 2,
    },
  },
*/
```

### `who(id: string): Nameday`

Returns nameday of specified ID.

```javascript
import { who } from "namedays"

who("5-2-1")
/*
 {
    id: "5-2-1",
    name: "Filip",
    date: {
      month: 5,
      day: 2,
    },
  },
*/
```

### `on(date: { month?: number; day?: number }): Nameday[]`

Return namedays of specified date.

```javascript
import { date } from "namedays"

on({ month: 5 })
// Returns all namedays in May

on({ day: 2 })
// Returns all namedays the 2nd every month

on({ month: 5, day: 2 })
/*
  [
    {
      id: "5-2-1",
      name: "Filip",
      date: {
        month: 5,
        day: 2,
      },
    },
    {
      id: "5-2-2",
      name: "Filippa",
      date: {
        month: 5,
        day: 2,
      },
    },
  ]
*/
```

## License

MIT
