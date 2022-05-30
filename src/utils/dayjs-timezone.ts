import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import { TimezoneName, timezoneOffsets } from 'src/data/timezonesDayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
dayjs.extend(relativeTime)

declare module 'dayjs' {
  interface Dayjs {
    tz(name: TimezoneName): Dayjs
  }

  function tz(date: string | number, timezone: TimezoneName): Dayjs
  export function tz(timezone: TimezoneName): Dayjs
}

function tz(options: any, dayjsClass: any, dayjsFactory: any) {
  const timezoneToOffset = (timezone: any) => {
    return -(timezoneOffsets as any)[timezone] || 0
  }

  dayjsFactory.tz = function (...args: any) {
    let date = args.length === 2 ? args[0] : Date.now()
    const timezone = args[1] || args[0]

    const timezoneOffset = timezoneToOffset(timezone)

    // if date doesn't include timezone
    if (typeof date === 'string' && !date.match(/(Z|[+-]\d{2}:?\d{2})$/)) {
      date = date.replace(/(\d{2}) (\d{2}:)/, '$1T$2')
      // if date doesn't include time
      if (!date.includes(':')) {
        date += 'T00:00:00'
      }

      if (timezoneOffset === 0) {
        date += 'Z'
      } else {
        const timezoneSign = timezoneOffset > 0 ? '+' : '-'

        const timezoneMinutesAbs = Math.abs(timezoneOffset)

        let timezoneHours = `${Math.floor(timezoneMinutesAbs / 60)}`
        if (timezoneHours.length === 1) {
          timezoneHours = `0${timezoneHours}`
        }

        let timezoneMinutes = `${timezoneMinutesAbs % 60}`
        if (timezoneMinutes.length === 1) {
          timezoneMinutes = `0${timezoneMinutes}`
        }

        date += `${timezoneSign}${timezoneHours}:${timezoneMinutes}`
      }
    }

    let dayjsDate = dayjs(date) // date parsed in local timezone

    // offset for given timezone

    dayjsDate = dayjsDate.utcOffset(timezoneOffset)

    return dayjsDate
  }

  dayjsClass.prototype.tz = function (timezone: string) {
    const timezoneOffset = timezoneToOffset(timezone)
    return this.utcOffset(timezoneOffset)
  }
}

dayjs.extend(tz)
dayjs.extend(LocalizedFormat)
