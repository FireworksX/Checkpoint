import { FC } from 'react'
import * as Styled from './styles'

interface LocationCardProps {
  className?: string
}

const LocationCard: FC<LocationCardProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Avatar src={'https://image.bugsm.co.kr/album/images/500/204702/20470222.jpg'} />
      <div>
        <Styled.Title>Tanah Lot</Styled.Title>
        <Styled.Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, similique velit!
        </Styled.Description>
        <Styled.LikesWrapper>
          <Styled.LikesLabel>Нравится: </Styled.LikesLabel>
          <Styled.LikesStack
            withPadding={false}
            size={30}
            logos={[
              {
                src: 'https://a.wattpad.com/useravatar/_Alone_Angel_14.256.232424.jpg'
              },
              {
                src: 'https://c-cl.cdn.smule.com/rs-z-sf-1/account/picture/76/67/e921f266-a2ce-43a0-9172-28d8fafae298.jpg'
              },
              {
                src: 'https://up.quizlet.com/1krtdn-AatKe-256s.jpg'
              }
            ]}
          />
        </Styled.LikesWrapper>
      </div>
    </Styled.Root>
  )
}

export default LocationCard
