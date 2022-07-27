import { FC } from 'react'
import * as Styled from './styles'
import { LinkProps } from 'src/widgets/Link/Link'

type CellType = {
  count: number
  appLinkProps?: LinkProps
}

interface UserMetricsProps {
  locations: CellType
  followers: CellType
  subscribers: CellType
  className?: string
}

const UserMetrics: FC<UserMetricsProps> = ({ className, locations, followers, subscribers }) => {
  return (
    <Styled.Root className={className}>
      <Styled.MetricCell as='div'>
        <Styled.MetricValue>{locations.count}</Styled.MetricValue>
        <Styled.MetricLabel>публикаций</Styled.MetricLabel>
      </Styled.MetricCell>
      <Styled.MetricCell {...followers.appLinkProps}>
        <Styled.MetricValue>{followers.count}</Styled.MetricValue>
        <Styled.MetricLabel>подписчиков</Styled.MetricLabel>
      </Styled.MetricCell>
      <Styled.MetricCell {...subscribers.appLinkProps}>
        <Styled.MetricValue>{subscribers.count}</Styled.MetricValue>
        <Styled.MetricLabel>подписок</Styled.MetricLabel>
      </Styled.MetricCell>
    </Styled.Root>
  )
}

export default UserMetrics
