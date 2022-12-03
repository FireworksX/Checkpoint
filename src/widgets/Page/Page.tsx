import { forwardRef, ReactNode, useImperativeHandle, useState } from 'react'
import * as Styled from './styles'
import Spinner from 'src/components/Spinner/Spinner'
import PageHeader from '../PageHeader/PageHeader'
import { promiseWaiter } from '../../utils/promiseWaiter'

interface PageProps {
  fetching?: boolean
  safeAreaBottom?: boolean
  className?: string
  title?: ReactNode
  description?: string
  headerLeft?: ReactNode
  headerRight?: ReactNode
  children?: ReactNode
}

export type PageFetchingState = 'error' | 'success' | undefined

export type PageRef = { fetchingError: () => Promise<void>; fetchingSuccess: () => Promise<void> }

const Page = forwardRef<PageRef, PageProps>(
  ({ className, children, headerLeft, headerRight, title, description, fetching, safeAreaBottom = true }, ref) => {
    const [fetchingState, setFetchingState] = useState<PageFetchingState>()
    const hasHeader = !!title || !!description || !!headerLeft || !!headerRight
    const proxyFetching = fetching || fetchingState === 'error' || fetchingState === 'success'

    useImperativeHandle(ref, () => ({
      async fetchingError() {
        setFetchingState('error')
        await promiseWaiter(1000)
        setFetchingState(undefined)
      },
      async fetchingSuccess() {
        setFetchingState('success')
        await promiseWaiter(1000)
        setFetchingState(undefined)
      }
    }))

    return (
      <Styled.Root className={className} ref={ref} safeAreaBottom={safeAreaBottom}>
        {hasHeader && (
          <PageHeader description={description} left={headerLeft} right={headerRight}>
            {title}
          </PageHeader>
        )}
        {proxyFetching && (
          <Styled.ScreenSpinner>
            <Styled.SpinnerWrapper>
              <Spinner size='large' state={fetchingState} />
            </Styled.SpinnerWrapper>
          </Styled.ScreenSpinner>
        )}
        {children}
      </Styled.Root>
    )
  }
)

Page.displayName = 'Page'

export default Page
