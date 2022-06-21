import { FC } from 'react'
import * as Styled from './styles'
import { MODAL_NAMES } from 'src/router/constants'
import BottomSheet from 'src/widgets/BottomSheet/BottomSheet'
import SimpleCell from "../../components/SimpleCell/SimpleCell";

interface LocationFieldsModalProps {
  className?: string
}

const LocationFieldsModal: FC<LocationFieldsModalProps> = ({ className }) => {

  return (
    <BottomSheet name={MODAL_NAMES.locationFields} withHeader autoClose>
      <Styled.Root className={className}>
        <SimpleCell>Описание</SimpleCell>
        <SimpleCell>Теги</SimpleCell>
        {/*<SimpleCell>Комментарии</SimpleCell>*/}
        <SimpleCell>Тип кухни</SimpleCell>
        {/*<SimpleCell>Любимые блюда</SimpleCell>*/}
        {/*<SimpleCell>Любимые напитки</SimpleCell>*/}
        <SimpleCell>Скорость Wi-Fi</SimpleCell>
        {/*<SimpleCell>Время работы</SimpleCell>*/}
        <SimpleCell>Средний чек</SimpleCell>
        <SimpleCell>Рейтинг</SimpleCell>
        {/*<SimpleCell expandable>Подключить бронирование</SimpleCell>*/}
      </Styled.Root>
    </BottomSheet>
  )
}

export default LocationFieldsModal
