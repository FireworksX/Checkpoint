import { FC } from 'react'
import * as Styled from './styles'
import UserRowCard from '../../../../components/UserRowCard/UserRowCard'
import { useCurrentUser } from '../../../../hooks/data/useCurrentUser'

interface MapSearchUsersProps {
  className?: string
}

const MapSearchUsers: FC<MapSearchUsersProps> = ({ className }) => {
  const { user: author } = useCurrentUser()

  return (
    <Styled.Root className={className}>
      <UserRowCard
        username={author?.username}
        firstName={author?.firstName}
        lastName={author?.lastName}
        verify={author?.verify}
        phone={author?.phone}
        appLinkProps={{
          type: 'user',
          userSlug: author?.username || ''
        }}
      />
    </Styled.Root>
  )
}

export default MapSearchUsers
