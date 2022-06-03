import { FC } from 'react'
import * as Styled from './styles'
import { staticImagesMap } from 'src/data/staticImagesMap'
import { useCityInfo } from 'src/routes/CityInfoRoute/hooks/useCityInfo'

interface CityInfoFactsProps {
  className?: string
}

const CityInfoFacts: FC<CityInfoFactsProps> = ({ className }) => {
  const { facts } = useCityInfo()

  if (facts.length === 0) {
    return null
  }

  return (
    <Styled.Root className={className}>
      <Styled.Header>Немного фактов о городе</Styled.Header>
      <Styled.FactsSection>
        {facts.map((fact, index) => (
          <Styled.Fact key={`${fact.name}_${index}`}>
            <Styled.FactName>{fact.name}</Styled.FactName>
            <Styled.FactValue>{fact.value}</Styled.FactValue>
          </Styled.Fact>
        ))}
        <Styled.FactsMore>Больше фактов</Styled.FactsMore>
      </Styled.FactsSection>

      <Styled.TransferSection>
        <Styled.TransferImage src={staticImagesMap.automobile} />
        <div>
          <Styled.TransferText>
            Удобнее всего добравть в город из аеропорта "Пулково" на автобусе №120Н
          </Styled.TransferText>
          <Styled.TransferDescription>Стоимость проезда: 45 руб.</Styled.TransferDescription>
        </div>
      </Styled.TransferSection>
    </Styled.Root>
  )
}

export default CityInfoFacts
