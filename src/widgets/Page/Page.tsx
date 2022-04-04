import { FC } from 'react'
import { hasNavigationAtom } from 'src/store/uiStore'
import * as Styled from './styles'
import { useRecoilValue } from 'recoil'

interface PageProps {
  safeAreaBottom?: boolean
  className?: string
}

const Page: FC<PageProps> = ({ className, children, safeAreaBottom = true }) => {
  const hasNavigation = useRecoilValue(hasNavigationAtom)

  return (
    <Styled.Root className={className} safeAreaBottom={safeAreaBottom && hasNavigation}>
      {children}
    </Styled.Root>
  )
}

export default Page
