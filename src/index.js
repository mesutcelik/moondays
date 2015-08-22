

import SunCalc from "suncalc"
import moment  from "moment"


export default function moondays(count, startDate = new Date, practiceHour = 1, practiceMinute = 0) {

  const today = moment(startDate)

  today.hour(practiceHour)
  today.minute(practiceMinute)

  let daysFound = []
  let day = today

  while(daysFound.length < count) {

    let illumination = isMoonday(day)

    if(isMoonday(day)) {
      let illumination = SunCalc.getMoonIllumination(day)
      daysFound.push({ date: moment(day), illumination  })
    }

    day.add(1, "days")
  }

  return daysFound
}


export function isMoonday(day) {

  const prevday = moment(day).subtract(1, "days")
  const nextday = moment(day).add(1, "days")

  const previllum = SunCalc.getMoonIllumination(prevday.toDate())
  const illum = SunCalc.getMoonIllumination(day.toDate())
  const nextillum = SunCalc.getMoonIllumination(nextday.toDate())

  const ap = previllum.fraction
  const bp = illum.fraction
  const cp = nextillum.fraction

  if(ap < bp && bp > cp) {
    return illum
  }

  if(ap > bp && bp < cp) {
    return illum
  }

}


export function getMoonIllumination(day) {
  const date = moment(day)
  return SunCalc.getMoonIllumination(date.toDate())
}
