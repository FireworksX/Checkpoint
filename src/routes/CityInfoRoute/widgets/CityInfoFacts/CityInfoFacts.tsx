import { FC } from 'react'
import * as Styled from './styles'
import { staticImagesMap } from 'src/data/staticImagesMap'

interface CityInfoFactsProps {
  className?: string
}

const CityInfoFacts: FC<CityInfoFactsProps> = ({ className }) => {
  const factList = [
    {
      image: staticImagesMap.stopwatch,
      name: 'Часовой пояс',
      value: 'GTM+3'
    },
    {
      image: staticImagesMap.personInLotusPosition,
      name: 'Население',
      value: '4,991 миллиона'
    },
    {
      image: staticImagesMap.wrench,
      name: 'Дата основания',
      value: '1703 г.'
    }
  ]

  return (
    <Styled.Root className={className}>
      <Styled.Header>Немного фактов о городе</Styled.Header>
      <Styled.FactsSection>
        {factList.map((fact, index) => (
          <Styled.Fact key={`${fact.name}_${index}`}>
            {/*<Styled.FactImage src={fact.image} />*/}
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
