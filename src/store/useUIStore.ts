import { useState } from 'react'
import { LinkNavigationProps } from 'src/widgets/Link/linkConfig'

interface Sport {
  name: string
  slug: string
  iconSlug?: SvgNames
  appLinkProps?: LinkNavigationProps
  onClick?: (sport: Sport) => any
}

export const useUIStore = () => {
  // TODO сделать через Portal
  const [sportList, setSportList] = useState<Sport[]>([])

  return {
    sportList,
    setSportList,
    hasSports: sportList.length > 0,
  }
}
