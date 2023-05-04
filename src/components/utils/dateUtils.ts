import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)

export function getLastUpdatedLabel ({ last_updated }: any) {
  if (!last_updated) {
    return ''
  }
  return dayjs(last_updated).format('ll')
}

export const getCurrentYear = () => dayjs().format('YYYY')

export const getXYearsAgoYear = (years: any) => dayjs().subtract(years, 'year').format('YYYY')

export function getYearPercentage () {
  const start = dayjs().startOf('year')
  const today = dayjs()
  const todayDiff = today.diff(start, 'day')
  return Math.round((todayDiff / 365) * 100)
}
