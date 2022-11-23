import { FC, ReactNode } from 'react'
import * as Styled from './styles'
import Spinner from 'src/components/Spinner/Spinner'
import PageHeader from '../PageHeader/PageHeader'

interface PageProps {
  fetching?: boolean
  safeAreaBottom?: boolean
  className?: string
  title?: ReactNode
  description?: string
  headerLeft?: ReactNode
  headerRight?: ReactNode
}

const Page: FC<PageProps> = ({
  className,
  children,
  headerLeft,
  headerRight,
  title,
  description,
  fetching,
  safeAreaBottom = true
}) => {
  const hasHeader = !!title || !!description || !!headerLeft || !!headerRight

  return (
    <Styled.Root className={className} safeAreaBottom={safeAreaBottom}>
      {hasHeader && <PageHeader description={description} left={headerLeft} right={headerRight}>
        {title}
      </PageHeader>}
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
