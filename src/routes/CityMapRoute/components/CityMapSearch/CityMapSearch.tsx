import { FC } from 'react'
import * as Styled from './styles'
import Avatar from '../../../../widgets/Avatar/Avatar'
import { useInitialAvatarPlaceholder } from '../../../../widgets/Avatar/hooks/useInitialAvatarPlaceholder'
import CommonLogo from '../../../../components/CommonLogo/CommonLogo'
import { staticImagesMap } from '../../../../data/staticImagesMap'
import Icon from '../../../../components/Icon/Icon'
import { useMapFilter } from '../../hooks/useMapFilter'
import { iconToImage } from '../../../../utils/iconToImage'
import { buildFullName } from '../../../../utils/buildFullName'
import HorizontalScroll from "../../../../components/HorizontalScroll/HorizontalScroll";

interface CityMapSearchProps {
  className?: string
}

const CityMapSearch: FC<CityMapSearchProps> = ({ className }) => {
  const { user, category, clearFilter, chooseCategory, clearCategory } = useMapFilter()
  const isEmpty = !user && !category
  const avatarText = useInitialAvatarPlaceholder(user)

  return (
    <Styled.Root className={className}>
      <Styled.Target>
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
