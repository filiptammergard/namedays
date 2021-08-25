# namedays

## Installation

```
npm i namedays
```

## Usage

```javascript
import { namedays } from "namedays"

// namedays is the complete list of namedays
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

`when(names: string | string[]): Nameday[]`

Returns namedays of specified name.

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

when(["Lovisa", "Filip"])
/*
  {
    id: "8-25-2",
    name: "Lovisa",
    date: {
      month: 8,
      day: 25,
    },
  },
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

## License

MIT
