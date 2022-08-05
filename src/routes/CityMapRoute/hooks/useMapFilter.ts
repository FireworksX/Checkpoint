import { useRouter } from 'src/hooks/useRouter'
import { useRequest } from 'src/hooks/useRequest'
import { AuthUserResponse } from 'src/interfaces/User'
import { apiEndpoints } from 'src/data/apiEndpoints'
import { MODAL_NAMES, ROUTE_PARAMS } from 'src/router/constants'
import { useLinkConfig } from 'src/widgets/Link/hooks/useLinkConfig'
import { useModal } from 'src/hooks/useModal'
import { CategoryInner, ChooseCategoryModalContext } from 'src/modals/ChooseCategoryModal/ChooseCategoryModal'
import { buildLinkConfig } from 'src/widgets/Link/buildLinkConfig'
import { useCallback } from 'react'

export const useMapFilter = () => {
  const router = useRouter()
  const { route, navigate, citySlug } = router
  const mapAuthor = route.params[ROUTE_PARAMS.mapAuthor]
  const mapCategory = route.params[ROUTE_PARAMS.mapCategory]

  const mainMapLink = useLinkConfig('cityMap', { safeOptionalParams: false, citySlug })
  const mapSearchLink = useLinkConfig('cityMapSearch')

  const { open: openChooseCategory, close: closeChooseCategory } = useModal<ChooseCategoryModalContext>(
    MODAL_NAMES.chooseCategory
  )

  const { data: userResponse } = useRequest<AuthUserResponse>(`${apiEndpoints.USERS_DETAIL}/${mapAuthor}`, {
    pause: !mapAuthor
  })

  const user = userResponse?.data
  const category = user?.categories?.find(({ slug }) => slug === mapCategory)

  const isEmpty = !user && !category

  const onChooseCategory = useCallback(
    async (category: CategoryInner) => {
      const buildNewLink = buildLinkConfig('cityMap', {
        safeOptionalParams: false,
        [ROUTE_PARAMS.mapAuthor]: mapAuthor,
        [ROUTE_PARAMS.mapCategory]: category.slug,
        citySlug,
        router
      })

      await closeChooseCategory()

      navigate(buildNewLink.link.name, buildNewLink.routeParams)
    },
    [closeChooseCategory, citySlug, mapAuthor, router, navigate]
  )

  const clearFilter = () => navigate(mainMapLink.link.name, mainMapLink.routeParams)

  const clearCategory = useCallback(() => {
    const buildNewLink = buildLinkConfig('cityMap', {
      safeOptionalParams: false,
      [ROUTE_PARAMS.mapAuthor]: mapAuthor,
      citySlug,
      router
    })

    navigate(buildNewLink.link.name, buildNewLink.routeParams)
  }, [closeChooseCategory, citySlug, mapAuthor, router, navigate, closeChooseCategory])

  const chooseCategory = () => openChooseCategory({ list: user?.categories || [], onSelect: onChooseCategory })

  const onClickSearch = useCallback(() => {
    if (isEmpty) {
      navigate(mapSearchLink.link.name, mainMapLink.routeParams)
    }
  }, [isEmpty, navigate, mapSearchLink, mainMapLink.routeParams])

  return {
    isEmpty,
    user,
    category,
    clearFilter,
    chooseCategory,
    clearCategory,
    onClickSearch
  }
}
