import { FC } from 'react'
import * as Styled from './styles'
import Icon from '../Icon/Icon'
import LikesContainer from 'src/widgets/LikesContainer/LikesContainer'
import { Location } from 'src/interfaces/Location'

interface LocationCardProps extends Pick<Location, '_id' | 'likes'> {
  name?: string
  slug: string
  cover?: string
  description?: string
  className?: string
}

const LIMIT = 70

const LocationCard: FC<LocationCardProps> = ({ className, _id, cover, likes, slug, name, description }) => {
  const limitedDescription = (description?.length || '') > LIMIT ? (description || '').slice(0, LIMIT) + '...' : description

  return (
    <Styled.Root className={className} type='locationView' locationSlug={slug}>
      {cover && <Styled.Cover src={cover} />}
      <div>
        {name && <Styled.Title>{name}</Styled.Title>}
        {description && <Styled.Description>{limitedDescription}</Styled.Description>}
        <Styled.Footer>
          <LikesContainer type='location' target={_id} initialLike={likes?.isLiked}>
            {({ hasLike }) => (
              <Styled.Like>
                <Icon name={hasLike ? 'heart-fill' : 'heart'} />
                <Styled.LikeCount>{likes?.count}</Styled.LikeCount>
              </Styled.Like>
            )}
          </LikesContainer>

          {/*<Styled.Views>*/}
          {/*  <Icon name='eye' />*/}
          {/*  <Styled.ViewsCount>87.4к</Styled.ViewsCount>*/}
          {/*</Styled.Views>*/}
        </Styled.Footer>
      </div>
    </Styled.Root>
  )
}

export default LocationCard
