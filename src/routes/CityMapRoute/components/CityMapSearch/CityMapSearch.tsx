import { FC } from 'react'
import * as Styled from './styles'
import Avatar from 'src/widgets/Avatar/Avatar'
import { useInitialAvatarPlaceholder } from 'src/widgets/Avatar/hooks/useInitialAvatarPlaceholder'
import CommonLogo from 'src/components/CommonLogo/CommonLogo'
import { staticImagesMap } from 'src/data/staticImagesMap'
import Icon from 'src/components/Icon/Icon'
import { useMapFilter } from '../../hooks/useMapFilter'
import { iconToImage } from 'src/utils/iconToImage'
import { buildFullName } from 'src/utils/buildFullName'
import HorizontalScroll from 'src/components/HorizontalScroll/HorizontalScroll'

interface CityMapSearchProps {
  className?: string
}

const CityMapSearch: FC<CityMapSearchProps> = ({ className }) => {
  const { user, category, clearFilter, chooseCategory, clearCategory, isEmpty, onClickSearch } = useMapFilter()
  const avatarText = useInitialAvatarPlaceholder(user)

  return (
    <Styled.Root className={className}>
      <Styled.Target onClick={onClickSearch}>
        {isEmpty && <Styled.Placeholder>Поиск людей и мест</Styled.Placeholder>}
        {!isEmpty && (
          <HorizontalScroll>
            <Styled.Cell
              before={
                <Avatar size={20} uniqueId={user?.phone}>
                  {avatarText}
                </Avatar>
              }
            >
              {buildFullName(user?.firstName, user?.lastName)}
            </Styled.Cell>

            <Styled.Separator>
              <Icon name='arrow-chevron' />
            </Styled.Separator>

            {category ? (
              <Styled.Cell
                removable
                before={category?.icon && <CommonLogo size={20} src={iconToImage(category?.icon)} />}
                onRemove={clearCategory}
              >
                {category?.name}
              </Styled.Cell>
            ) : (
              <Styled.Cell before={<CommonLogo size={20} src={staticImagesMap.sunset} />} onClick={chooseCategory}>
                Все локации
              </Styled.Cell>
            )}
          </HorizontalScroll>
        )}

        {!isEmpty && (
          <Styled.Reset onClick={clearFilter}>
            <Icon name='close-circle' />
          </Styled.Reset>
        )}
      </Styled.Target>
    </Styled.Root>
  )
}

export default CityMapSearch
