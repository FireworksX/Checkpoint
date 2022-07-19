import { FC } from 'react'
import * as Styled from './styles'
import Spinner from 'src/components/Spinner/Spinner'

interface PageProps {
  fetching?: boolean
  safeAreaBottom?: boolean
  className?: string
}

const Page: FC<PageProps> = ({ className, children, fetching, safeAreaBottom = true }) => {

  return (
    <Styled.Root className={className} safeAreaBottom={safeAreaBottom}>
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
