import { FC } from 'react'
import * as Styled from './styles'
import Icon from '../Icon/Icon'

interface LocationCardProps {
  name: string
  slug: string
  cover?: string
  description?: string
  className?: string
}

const descr =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque aut corporis facilis laudantium minus necessitatibus neque nobis officia perspiciatis rem, voluptas? Aspernatur cumque, eligendi laboriosam natus ratione sapiente veritatis.'

const LocationCard: FC<LocationCardProps> = ({ className, cover, slug, name, description = descr }) => {
  const limitedDescription = (description || '').slice(0, 70) + '...'

  return (
    <Styled.Root className={className} type='locationView' locationSlug={slug}>
      {cover && <Styled.Cover src={cover} />}
      <div>
        <Styled.Title>{name}</Styled.Title>
        {description && <Styled.Description>{limitedDescription}</Styled.Description>}
        <Styled.Footer>
          <Styled.Like>
            <Icon name='heart' />
            <Styled.LikeCount>24</Styled.LikeCount>
          </Styled.Like>
          <Styled.Views>
            <Icon name='eye' />
            <Styled.ViewsCount>87.4к</Styled.ViewsCount>
          </Styled.Views>
        </Styled.Footer>
      </div>
    </Styled.Root>
  )
}

export default LocationCard
