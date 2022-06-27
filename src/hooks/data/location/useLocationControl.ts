import { useToggle } from 'react-use'
import { useLocationDescriptionField } from './fields/useLocationDescriptionField'
import { useLocationTitleField } from './fields/useLocationTitleField'
import { useLocationKitchenTypeField } from './fields/useLocationKitchenTypeField'
import { useLocationWifispeedField } from './fields/useLocationWifispeedField'
import {useLocationAverageBillField} from "./fields/useLocationAverageBillField";

const text =
  'Бистро и пекарня на набережной реки Карповки. «Футура» работает в отдельном здании во дворе кластера «Ленполиграфмаш» рядом с Ботаническим садом. В кафе сотрудничают с фермерскими хозяйствами и обновляют меню в зависимости от имеющихся сезонных продуктов на кухне. На открытой кухне повара выпекают хлеб, закваску для него готовят сами. Команда «Футуры» поддерживает философию безотходного производства и, например, кофейный жмых превращает в мороженое. По части напитков акцент делают на пиво и сидр. На основе последнего еще замешивают легкие коктейли — «алконады». Кофе варят на зерне от петербургских обжарщиков Verle Coffee Roasters. Помимо стандартного набора «эспрессо-капучино-раф», есть интересные напитки: фильтр-кофе с вишневым кордиалом и колд-брю с кокосовой сгущенкой.'

export const useLocationControl = () => {
  const [isEdit, toggleIsEdit] = useToggle(false)
  const { Component: TitleComponent, value: titleValue } = useLocationTitleField({ isEdit, initialText: 'Название' })
  const { Component: DescriptionComponent, value: descriptionValue } = useLocationDescriptionField({
    isEdit,
    initialText: text
  })
  const { Component: KitchenComponent, list: kitchenValue } = useLocationKitchenTypeField({
    isEdit
  })
  const { Component: WifispeedComponent, value: wifispeedValue } = useLocationWifispeedField({
    isEdit
  })
  const { Component: AverageBillComponent, values: averageBillValue } = useLocationAverageBillField({
    isEdit
  })

  return {
    isEdit,
    toggleIsEdit,
    TitleComponent,
    DescriptionComponent,
    KitchenComponent,
    WifispeedComponent,
    AverageBillComponent
  }
}
