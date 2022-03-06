import { FC } from 'react'
import * as Styled from './styles'
import { useStore } from 'src/store'

interface PageProps {
  safeAreaBottom?: boolean
  className?: string
}

const Page: FC<PageProps> = ({ className, children, safeAreaBottom = true }) => {
  const { hasNavigation } = useStore.uiStore()

  return (
    <Styled.Root className={className} safeAreaBottom={safeAreaBottom && hasNavigation}>
      {children}
    </Styled.Root>
  )
}

export default Page
