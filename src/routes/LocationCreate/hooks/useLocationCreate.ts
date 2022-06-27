import { useLocationControl } from 'src/hooks/data/location/useLocationControl'

export const useLocationCreate = () => {
  const { TitleComponent, DescriptionComponent, KitchenComponent, WifispeedComponent, AverageBillComponent, toggleIsEdit } =
    useLocationControl()

  return {
    TitleComponent,
    DescriptionComponent,
    KitchenComponent,
    WifispeedComponent,
    AverageBillComponent,
    toggleIsEdit
  }
}
