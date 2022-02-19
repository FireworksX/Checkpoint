import dayjs from 'dayjs'
import { timezoneData, TimezoneName } from 'src/data/timezonesDayjs'

export const phpFormat = 'YYYY-MM-DD HH:mm:ss'
export const urlFormat = 'YYYY-MM-DD'

export function getPhpDate() {
  return dayjs(new Date().toUTCString().replace(' GMT', '')).format(phpFormat)
}

export type FormatDateArg = {
  date: string | null | undefined | number
  format: string
  timezone?: TimezoneName
}

export function formatDate({ date, format, timezone }: FormatDateArg): any {
  if (!date) {
    return ''
  }

  return dayjs(date)
    .tz(timezone || 'GMT+0')
    .format(format)
}

export function guessTimezone(offset: number = new Date().getTimezoneOffset()) {
  return timezoneData
    .map(({ name, offset }) => ({ name, offset }))
    .reduce(
      (acc, zone) => {
        const zoneDifference = Math.abs(zone.offset - acc.browserOffset)

        if (!acc.closestTimezone || acc.closestDifference! > zoneDifference!) {
          return { browserOffset: acc.browserOffset, closestTimezone: zone.name, closestDifference: zoneDifference }
        }
        return acc
      },
      {
        browserOffset: offset,
        closestTimezone: null as TimezoneName | null,
        closestDifference: null as number | null
      }
    ).closestTimezone!
}
