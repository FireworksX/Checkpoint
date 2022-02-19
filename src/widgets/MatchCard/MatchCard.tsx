import React from 'react'
import * as Styled from './styles'
import { LeagueText, LiveBottom } from './styles'
import Icon from '../../components/Icon/Icon'

interface MatchCardProps {
  className?: string
  isLive?: boolean
}

const logos = [
  {
    src: 'https://cdn.scores24.ru/upload/team/w60-h60/a52/1d1/52a9bdcabef25fa9108488e34ede28129c.png'
  },
  {
    src: 'https://cdn.scores24.ru/upload/team/w60-h60/797/bbb/d462592b42099ac3120056976e6940d5a6.png'
  }
]

const MatchCard: React.FC<MatchCardProps> = ({ className, isLive }) => {
  const badges = isLive ? ['bet', 'h2h'] : ['bet', '1x2']

  return (
    <Styled.Root className={className}>
      <div>
        <Styled.League>
          <Styled.LeagueIcon name={'soccer'} />
          <Styled.LeagueText>Blast Premier Season Blast Premier Season</Styled.LeagueText>
        </Styled.League>
        <Styled.Body>
          <Styled.Logos logos={logos} />
          {isLive ? (
            <Styled.Live>
              <Styled.LiveTop>0:1</Styled.LiveTop>
              <Styled.LiveBottom>65'</Styled.LiveBottom>
            </Styled.Live>
          ) : (
            <div>
              <Styled.Date>Сегодня</Styled.Date>
              <Styled.Date>11:30</Styled.Date>
            </div>
          )}
        </Styled.Body>
      </div>

      <Styled.Footer>
        <div>
          <Styled.Team>Арсенал</Styled.Team>
          <Styled.Team>Бернли</Styled.Team>
        </div>
        <div>
          {badges.map(badge => (
            <Styled.Badge>{badge}</Styled.Badge>
          ))}
        </div>
      </Styled.Footer>
    </Styled.Root>
  )
}

export default MatchCard
