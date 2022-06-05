import { FC } from 'react'
import * as Styled from './styles'
import Container from 'src/components/Container/Container'
import HorizontalScroll from 'src/components/HorizontalScroll/HorizontalScroll'
import { useCityInfo } from 'src/routes/CityInfoRoute/hooks/useCityInfo'

interface CityInfoAmbassadorsProps {
  className?: string
}

const CityInfoAmbassadors: FC<CityInfoAmbassadorsProps> = ({ className }) => {
  const { ambassadors } = useCityInfo()

  return (
    <Styled.Root className={className}>
      <Container>
        <Styled.Header>Свои люди в городе</Styled.Header>
        <Styled.Description>Вы можете им написать и договориться об экскурсии или фотопрогулке</Styled.Description>
      </Container>
      <HorizontalScroll>
        {ambassadors.map(el => (
          <Styled.Card
            key={el._id}
            _id={el._id}
            username={el.username}
            bio={el.bio}
            phone={el.phone}
            firstName={el.firstName}
            lastName={el.lastName}
          />
        ))}
      </HorizontalScroll>
    </Styled.Root>
  )
}

export default CityInfoAmbassadors
