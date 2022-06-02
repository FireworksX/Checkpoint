import { FC } from 'react'
import * as Styled from './styles'

interface LocationCardProps {
  name: string
  cover?: string
  description?: string
  className?: string
}

const LocationCard: FC<LocationCardProps> = ({ className, cover, name, description }) => {
  return (
    <Styled.Root className={className}>
      {cover && <Styled.Cover src={cover} />}
      <div>
        <Styled.Title>{name}</Styled.Title>
        {description && <Styled.Description>{description}</Styled.Description>}
        {/*<Styled.LikesWrapper>*/}
        {/*  <Styled.LikesLabel>Нравится: </Styled.LikesLabel>*/}
        {/*  <Styled.LikesStack*/}
        {/*    withPadding={false}*/}
        {/*    size={30}*/}
        {/*    logos={[*/}
        {/*      {*/}
        {/*        src: 'https://a.wattpad.com/useravatar/_Alone_Angel_14.256.232424.jpg'*/}
        {/*      },*/}
        {/*      {*/}
        {/*        src: 'https://c-cl.cdn.smule.com/rs-z-sf-1/account/picture/76/67/e921f266-a2ce-43a0-9172-28d8fafae298.jpg'*/}
        {/*      },*/}
        {/*      {*/}
        {/*        src: 'https://up.quizlet.com/1krtdn-AatKe-256s.jpg'*/}
        {/*      }*/}
        {/*    ]}*/}
        {/*  />*/}
        {/*</Styled.LikesWrapper>*/}
      </div>
    </Styled.Root>
  )
}

export default LocationCard
