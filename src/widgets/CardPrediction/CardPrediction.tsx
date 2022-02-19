import React, { FC, useCallback, useMemo } from 'react'
import * as Styled from './styles'
import LogosStack from 'src/components/LogosStack/LogosStack'
import { CommonLogoSize } from 'src/components/CommonLogo/CommonLogo'
import { LinkNavigationProps } from 'src/widgets/Link/linkConfig'
import DateFormatter from 'src/components/DateFormatter/DateFormatter'

enum MarkTypeEnum {
  PEOPLE = 'people', // палец вверх + процент
  POPULAR = 'popular', // огонь + голоса
  PREDICTION = 'prediction', // коэффициент
  DEFAULT = 'default'
}

interface CardDataProps {
  country?: string
  league?: string
  predictionValue?: number
  allVotesCount?: number
  agreedVotesPercent?: number
  activeMode?: 'people' | 'popular' | 'related'
  sportSlug?: string
  match: {
    slug?: string
    matchDate?: string
    teams?: {
      name: string
      logo: string
    }[]
  }
  buttonText?: string | undefined
  appLinkProps?: LinkNavigationProps
  logoSize?: CommonLogoSize
  className?: string
}

const CardPrediction: FC<CardDataProps> = ({
  allVotesCount = 0,
  agreedVotesPercent = 0,
  sportSlug,
  predictionValue,
  activeMode,
  country,
  match,
  league,
  buttonText,
  appLinkProps,
  logoSize,
  className
}) => {
  const [team1, team2] = match?.teams || []

  const logos =
    [
      { src: team1?.logo, type: 'sport' },
      { src: team2?.logo, type: 'sport' }
    ] || []

  const markType = useMemo(() => {
    // вкладка выбор пользователей
    if (activeMode === 'people' && agreedVotesPercent >= 80 && allVotesCount >= 10) return MarkTypeEnum.PEOPLE
    // вкладка  популярное
    if (activeMode === 'popular' && allVotesCount >= 10) return MarkTypeEnum.POPULAR
    // без фильтра выбор пользователей
    if (activeMode === 'related' && agreedVotesPercent >= 80 && allVotesCount >= 10) return MarkTypeEnum.PEOPLE
    // без фильтра популярное
    if (activeMode === 'related' && allVotesCount >= 10) return MarkTypeEnum.POPULAR
    // коэффициент
    if (activeMode === 'related' && predictionValue !== 0 && allVotesCount < 10) return MarkTypeEnum.PREDICTION
    // дефолтное значение для главной
    if (!activeMode && predictionValue !== 0) return MarkTypeEnum.DEFAULT
    return null
  }, [activeMode, agreedVotesPercent, allVotesCount, predictionValue])

  return (
    <Styled.Wrapper className={className} {...appLinkProps}>
      <Styled.TopBlock>
        <LogosStack logos={logos} isStuck sportSlug={sportSlug} size={logoSize} />
        <div>
          <Styled.Date>
            <DateFormatter date={match.matchDate} format='D MMM' />
          </Styled.Date>
          <Styled.Time>
            <DateFormatter date={match.matchDate} format='HH:mm' />
          </Styled.Time>
        </div>
      </Styled.TopBlock>
      {league && country && (
        <Styled.LeagueBlock>
          <Styled.CountryTitle>{country}</Styled.CountryTitle>
          <Styled.DotElement />
          <Styled.LeagueTitle>{league}</Styled.LeagueTitle>
        </Styled.LeagueBlock>
      )}
      <Styled.TeamsBlock>
        <div>{team1?.name}</div>
        <div>{team2?.name}</div>
      </Styled.TeamsBlock>
      <Styled.ToPredictionBtn>
        {buttonText || 'Читать_прогноз'}
        <Styled.MarkBlock>
          {markType === MarkTypeEnum.PREDICTION && <span>{predictionValue || 0}</span>}
          {markType === MarkTypeEnum.PEOPLE && (
            <>
              <Styled.FingerIcon name='finger-up' width={16} height={16} />
              <span>{agreedVotesPercent}%</span>
            </>
          )}
          {markType === MarkTypeEnum.POPULAR && (
            <>
              <Styled.FireIcon name='fire' width={16} height={16} />
              <span>{allVotesCount}</span>
            </>
          )}
          {markType === MarkTypeEnum.DEFAULT && <span>{predictionValue || 0}</span>}
          <Styled.ArrowIcon name='arrow-chevron' width={16} height={16} />
        </Styled.MarkBlock>
      </Styled.ToPredictionBtn>
    </Styled.Wrapper>
  )
}

export default CardPrediction
