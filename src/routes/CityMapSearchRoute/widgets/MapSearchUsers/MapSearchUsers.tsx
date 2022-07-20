import { FC } from 'react'
import * as Styled from './styles'
import UserRowCard from 'src/components/UserRowCard/UserRowCard'
import { useMapSearchUsers } from './hooks/useMapSearchUsers'

interface MapSearchUsersProps {
  className?: string
}

const MapSearchUsers: FC<MapSearchUsersProps> = ({ className }) => {
  const { list } = useMapSearchUsers()

  return (
    <Styled.Root className={className}>
      {list.map(user => (
        <UserRowCard
          key={user._id}
          username={user?.username}
          firstName={user?.firstName}
          lastName={user?.lastName}
          verify={user?.verify}
          phone={user?.phone}
          appLinkProps={{
            type: 'user',
            userSlug: user?.username || ''
          }}
        />
      ))}
    </Styled.Root>
  )
}

export default MapSearchUsers
