# namedays

## Installation

```
npm i namedays
```

## Usage

The interface that all namedays adhere to is called Nameday and looks like this:

```javascript
interface Nameday {
  id: string
  name: string
  date: {
    month: number
    day: number
  }
}
```

It can be imported and used externally like this:

```javascript
import { Nameday } from "namedays"
```

`namedays: Nameday[]`

A list of all namedays.

```javascript
import { namedays } from "namedays"
```

`today(): Nameday[]`

Returns namedays of current day.

```javascript
import { today } from "namedays"

today() // assuming today's date is August 25th
/*
  [
    {
      id: "8-25-1",
      name: "Louise",
      date: {
        month: 8,
        day: 25,
      },
    },
    {
      id: "8-25-2",
      name: "Lovisa",
      date: {
        month: 8,
        day: 25,
      },
    },
  ]
*/
```

`when(name: string): Nameday`

Returns nameday of specified name.

```javascript
import { when } from "namedays"

when("Lovisa")
/*
  {
    id: "8-25-2",
    name: "Lovisa",
    date: {
      month: 8,
      day: 25,
    },
  },
*/
```

`who(id: string): Nameday`

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

`date(date: { month?: number; day?: number }): Nameday[]`

Return namedays of specified date.

```javascript
import { date } from "namedays"

date(date: { month: 2 })
// Returns all namedays in February

date(date: { day: 1 })
// Returns all namedays the 1st every month

date(date: { month: 2, day: 1 })
/*
  [
    {
      id: "2-1-1",
      name: "Max",
      date: {
        month: 2,
        day: 1,
      },
    },
    {
      id: "2-1-2",
      name: "Maximilian",
      date: {
        month: 2,
        day: 1,
      },
    },
  ]
*/
```

## License

MIT
