import { formatDate, FormatDateArg } from 'src/utils/dateUtils'
import { FC } from 'react'

export type DateFormatterProps = Omit<FormatDateArg, 'lang' | 'userSettings'>

const DateFormatter: FC<DateFormatterProps> = props => {
  return formatDate(props)
}

export default DateFormatter
