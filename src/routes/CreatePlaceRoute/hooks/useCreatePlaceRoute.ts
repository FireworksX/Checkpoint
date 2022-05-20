import { useForm } from 'src/hooks/useForm'
import { useRecoilValue } from 'recoil'
import { useIsomorphicEffect } from 'src/hooks/useIsomorphicEffect'
import { useCreatePlace } from 'src/hooks/data/useCreatePlace'
import { useRouter } from 'src/hooks/useRouter'
import { mapSaveCenterAtom } from 'src/store/mapStore'
import { PlaceInterfaceCreate } from 'src/interfaces/PlaceInterface'

export const useCreatePlaceRoute = () => {
  const saveCenter = useRecoilValue(mapSaveCenterAtom)
  const { register, handleSubmit, setValue } = useForm<PlaceInterfaceCreate>()
  const { onCreate } = useCreatePlace()
  const { back } = useRouter()

  const onSubmit = handleSubmit(async data => {
    const { success } = await onCreate(data)

    if (success) {
      back()
    }
  })

  useIsomorphicEffect(() => {
    if (saveCenter.lat && saveCenter.lng) {
      setValue('lat', saveCenter.lat)
      setValue('lng', saveCenter.lng)
    }
  }, [saveCenter])

  return {
    setValue,
    register,
    onSubmit
  }
}
