
import expect   from "expect"
import moment   from "moment"
import moondays from "../src/index"


describe("moondays", () => {

  describe("default funtion moondays(count, startDate, practiceHour, practiceMinute)", () => {

    it("should work", () => {

        const count = 4
        const startdate = moment("2015-08-21")
        const hour = 23
        const minute = 0

        const expected = [
          { date: 29, lum: "full" },
          { date: 12, lum: "new" },
          { date: 27, lum: "full" },
          { date: 12, lum: "new" }
        ]

        const days = moondays(count, startdate, hour, minute)
        console.log(days)
        expect(
          days.map((day) => {

            var date = moment(day.date).date()
            var lum = day.illumination.fraction > 0.5 ? "full" : "new"

            return {date, lum}
          })
        )
        .toEqual(expected)

    })

  })

})
