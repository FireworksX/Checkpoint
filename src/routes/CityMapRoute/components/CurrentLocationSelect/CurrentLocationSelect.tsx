import { FC } from 'react'
import * as Styled from './styles'
import { useCityInfo } from 'src/routes/CityInfoRoute/hooks/useCityInfo'

interface CurrentLocationSelectProps {
  className?: string
}

const CurrentLocationSelect: FC<CurrentLocationSelectProps> = ({ className }) => {
  const { city } = useCityInfo()

  return (
    <Styled.Root className={className}>
      <Styled.Label>Выбранный город</Styled.Label>
      <Styled.Value>
        {city?.name}
        <Styled.Icon name='arrow-chevron-small' />
      </Styled.Value>
    </Styled.Root>
  )
}

export default CurrentLocationSelect
