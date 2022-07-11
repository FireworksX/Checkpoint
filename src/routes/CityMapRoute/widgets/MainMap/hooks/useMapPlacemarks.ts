import { LocationPlacemark } from 'src/interfaces/Placemark'
import { useCallback } from 'react'
import { useModal } from '../../../../../hooks/useModal'
import { MODAL_NAMES } from '../../../../../router/constants'
import { LocationPreloadModalContext } from '../../../../../modals/LocationPreloadModal/LocationPreloadModal'

const author = {
  bio: 'Да-да, это мы) Следим за порядком в нашем любимом городе',
  createdAt: '2022-06-03T15:49:33.213Z',
  firstName: 'checkpoint',
  lastName: 'spb',
  phone: '70000000001',
  username: 'checkpoint-spb',
  verify: true,
  _id: '629a2d8d4a09e83ef51861a7'
}

const categories = [
  {
    author: '629a2d8d4a09e83ef51861a7',
    createdAt: '2022-06-05T06:12:10.045Z',
    description: 'Вайб Южной кореи',
    icon: 'pot-of-food',
    name: 'Корея',
    slug: '1',
    _id: '629c493a0fe1e87fe04f14bf'
  },
  {
    author: '629a2d8d4a09e83ef51861a7',
    createdAt: '2022-06-04T17:30:09.457Z',
    description: 'Где пить пиво',
    icon: 'beer-mug',
    name: 'Бары',
    slug: 'bary-4',
    _id: '629b96a10fe1e87fe04f1250'
  }
]

const data: LocationPlacemark[] = [
  {
    _id: 'tast2',
    slug: 'rangerouse',
    title: 'Rangerouse',
    author,
    category: categories[0],
    coords: {
      lat: 59.97365873543813,
      lng: 30.315265134285323
    }
  },
  {
    _id: 'sdf',
    slug: 'futura-2',
    title: 'Футура',
    description:
      'Бистро и пекарня на набережной реки Карповки. «Футура» работает в отдельном здании во дворе кластера «Ленполиграфмаш» рядом с Ботаническим садом. В кафе сотрудничают с фермерскими хозяйствами и обновляют меню в зависимости от имеющихся сезонных',
    author,
    category: categories[0],
    coords: {
      lat: 59.96937261645445,
      lng: 30.317346612006865
    }
  }
]

export const useMapPlacemarks = () => {
  const { open, close } = useModal<LocationPreloadModalContext>(MODAL_NAMES.locationPreloadModal)

  const onClickPlacemark = useCallback(
    (placemark: LocationPlacemark) =>
      open({
        placemark,
        onClose: close
      }),
    [open, close]
  )

  return {
    placemarks: data,
    onClickPlacemark
  }
}
