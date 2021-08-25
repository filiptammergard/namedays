# namedays

## Installation

```
npm i namedays
```

## Usage

```javascript
import { namedays } from "namedays"

// namedays is a list of all namedays
```

`today(): string`

Returns namedays of current day.

```javascript
import { today } from "namedays"

today() // assuming today's date is August 25th
/*
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
*/
```

## License

MIT
