import { FC } from 'react'
import { hasNavigationAtom } from 'src/store/uiStore'
import * as Styled from './styles'
import { useRecoilValue } from 'recoil'
import Spinner from 'src/components/Spinner/Spinner'

interface PageProps {
  fetching?: boolean
  safeAreaBottom?: boolean
  className?: string
}

const Page: FC<PageProps> = ({ className, children, fetching, safeAreaBottom = true }) => {
  const hasNavigation = useRecoilValue(hasNavigationAtom)

  return (
    <Styled.Root className={className} safeAreaBottom={safeAreaBottom && hasNavigation}>
      {fetching && (
        <Styled.ScreenSpinner>
          <Styled.SpinnerWrapper>
            <Spinner size='medium' />
          </Styled.SpinnerWrapper>
        </Styled.ScreenSpinner>
      )}
      {children}
    </Styled.Root>
  )
}

export default Page
