
# moondays

Get a number of moondays(full and new moon dates) based on a start date and when you practice in the day.

```javascript

import moondays from "moondays"


const today = new Date("2015-08-21")

const days = moondays(4, today, 23, 0)

days === [

  { date: moment("Sat Aug 29 2015 23:00:00 GMT+0200 (W. Europe Summer Time)"),
    illumination: {
      fraction: 0.9996415119304594, ...} },

  { date: moment("Sat Sep 12 2015 23:00:00 GMT+0200 (W. Europe Summer Time)"),
    illumination: {
      fraction: 0.0014034815669225487, ...} },

  { date: moment("Sun Sep 27 2015 23:00:00 GMT+0200 (W. Europe Summer Time)"),
    illumination: {
      fraction: 0.9991898770162256, ...} },

  { date: moment("Mon Oct 12 2015 23:00:00 GMT+0200 (W. Europe Summer Time)"),
    illumination: {
      fraction: 0.00040409245470907074, ...} }

]


```
