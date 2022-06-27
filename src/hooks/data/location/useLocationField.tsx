import { FC } from 'react'
import DescriptionFieldEdit from 'src/widgets/locationFields/descriptionField/DescriptionFieldEdit/DescriptionFieldEdit'
import DescriptionFieldView from 'src/widgets/locationFields/descriptionField/DescriptionFieldView/DescriptionFieldView'
import TitleFieldView from '../../../widgets/locationFields/titleField/TitleFieldView/TitleFieldView'
import TitleFieldEdit from '../../../widgets/locationFields/titleField/TitleFieldEdit/TitleFieldEdit'
import KitchenTypeFieldView from '../../../widgets/locationFields/kitchenTypeField/KitchenTypeFieldView/KitchenTypeFieldView'
import KitchenTypeFieldEdit from '../../../widgets/locationFields/kitchenTypeField/KitchenTypeFieldEdit/KitchenTypeFieldEdit'
import WifispeedFieldEdit from '../../../widgets/locationFields/wifispeedField/WifispeedFieldEdit/WifispeedFieldEdit'
import WifispeedFieldView from '../../../widgets/locationFields/wifispeedField/WifispeedFieldView/WifispeedFieldView'
import AverageBillFieldView from '../../../widgets/locationFields/averageBillField/AverageBillFieldView/AverageBillFieldView'
import AverageBillFieldEdit from '../../../widgets/locationFields/averageBillField/AverageBillFieldEdit/AverageBillFieldEdit'

type FieldsScheme = typeof fieldsScheme
type FieldsSchemeName = keyof typeof fieldsScheme
type ComponentProps<T> = T extends FC<infer PROPS> ? PROPS : T

type LocationFieldsViewProps = {
  [K in FieldsSchemeName]: ComponentProps<FieldsScheme[K]['view']>
}

type LocationFieldsEditProps = {
  [K in FieldsSchemeName]: ComponentProps<FieldsScheme[K]['edit']>
}
type LocationFieldsView = {
  [K in FieldsSchemeName]: FieldsScheme[K]['view']
}

type LocationFieldsEdit = {
  [K in FieldsSchemeName]: FieldsScheme[K]['edit']
}

type LocationFieldViewProps<NAME extends FieldsSchemeName> = LocationFieldsViewProps[NAME]
type LocationFieldEditProps<NAME extends FieldsSchemeName> = LocationFieldsEditProps[NAME]

type LocationFieldView<NAME extends FieldsSchemeName> = LocationFieldsView[NAME]
type LocationFieldEdit<NAME extends FieldsSchemeName> = LocationFieldsEdit[NAME]

type Options<NAME extends FieldsSchemeName> = {
  fieldName: NAME
  isEdit: boolean
  viewProps: LocationFieldViewProps<NAME>
  editProps: LocationFieldEditProps<NAME>
}

const fieldsScheme = {
  title: {
    view: TitleFieldView,
    edit: TitleFieldEdit
  },
  description: {
    view: DescriptionFieldView,
    edit: DescriptionFieldEdit
  },
  kitchen: {
    view: KitchenTypeFieldView,
    edit: KitchenTypeFieldEdit
  },
  wifi: {
    view: WifispeedFieldView,
    edit: WifispeedFieldEdit
  },
  averageBill: {
    view: AverageBillFieldView,
    edit: AverageBillFieldEdit
  }
}

export const useLocationField = <NAME extends FieldsSchemeName>({
  fieldName,
  isEdit,
  viewProps,
  editProps
}: Options<NAME>) => {
  const ViewComponent = fieldsScheme[fieldName].view
  const EditComponent = fieldsScheme[fieldName].edit

  return isEdit ? <EditComponent {...editProps} /> : <ViewComponent {...viewProps} />
}
