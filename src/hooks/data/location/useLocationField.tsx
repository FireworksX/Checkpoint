import { FC } from 'react'
import DescriptionFieldEdit from 'src/widgets/locationFields/descriptionField/DescriptionFieldEdit/DescriptionFieldEdit'
import DescriptionFieldView from 'src/widgets/locationFields/descriptionField/DescriptionFieldView/DescriptionFieldView'
import TitleFieldView from 'src/widgets/locationFields/titleField/TitleFieldView/TitleFieldView'
import TitleFieldEdit from 'src/widgets/locationFields/titleField/TitleFieldEdit/TitleFieldEdit'
import KitchenTypeFieldView from 'src/widgets/locationFields/kitchenTypeField/KitchenTypeFieldView/KitchenTypeFieldView'
import KitchenTypeFieldEdit from 'src/widgets/locationFields/kitchenTypeField/KitchenTypeFieldEdit/KitchenTypeFieldEdit'
import WifispeedFieldEdit from 'src/widgets/locationFields/wifispeedField/WifispeedFieldEdit/WifispeedFieldEdit'
import WifispeedFieldView from 'src/widgets/locationFields/wifispeedField/WifispeedFieldView/WifispeedFieldView'
import AverageBillFieldView from 'src/widgets/locationFields/averageBillField/AverageBillFieldView/AverageBillFieldView'
import AverageBillFieldEdit from 'src/widgets/locationFields/averageBillField/AverageBillFieldEdit/AverageBillFieldEdit'
import TagsFieldView from 'src/widgets/locationFields/tagsField/TagsFieldView/TagsFieldView'
import TagsFieldEdit from 'src/widgets/locationFields/tagsField/TagsFieldEdit/TagsFieldEdit'
import RatingFieldView from 'src/widgets/locationFields/ratingField/RatingFieldView/RatingFieldView'
import GalleryFieldView from "../../../widgets/locationFields/galleryField/GalleryFieldView/GalleryFieldView";
import GalleryFieldEdit from "../../../widgets/locationFields/galleryField/GalleryFieldEdit/GalleryFieldEdit";

export type FieldsScheme = typeof fieldsScheme
export type FieldsSchemeName = keyof typeof fieldsScheme
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

export const fieldsScheme = {
  title: {
    type: 'title' as const,
    label: 'Заголовок',
    view: TitleFieldView,
    edit: TitleFieldEdit
  },
  description: {
    type: 'description' as const,
    label: 'Описание',
    view: DescriptionFieldView,
    edit: DescriptionFieldEdit
  },
  kitchen: {
    type: 'kitchen' as const,
    label: 'Тип кухни',
    view: KitchenTypeFieldView,
    edit: KitchenTypeFieldEdit
  },
  wifi: {
    type: 'wifi' as const,
    label: 'Скорость Wi-Fi',
    view: WifispeedFieldView,
    edit: WifispeedFieldEdit
  },
  averageBill: {
    type: 'averageBill' as const,
    label: 'Средний чек',
    view: AverageBillFieldView,
    edit: AverageBillFieldEdit
  },
  tags: {
    type: 'tags' as const,
    label: 'Теги',
    view: TagsFieldView,
    edit: TagsFieldEdit
  },
  polls: {
    type: 'polls' as const,
    label: 'Голосовалка',
    view: RatingFieldView,
    edit: RatingFieldView
  },
  gallery: {
    type: 'gallery' as const,
    label: 'Галерея',
    view: GalleryFieldView,
    edit: GalleryFieldEdit
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
