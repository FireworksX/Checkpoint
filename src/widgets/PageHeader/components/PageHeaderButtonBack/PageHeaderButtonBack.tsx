import { FC } from 'react'
import * as Styled from './styles'
import { useRouter } from 'src/hooks/useRouter'

interface PageHeaderButtonBackProps {
  className?: string
}

const PageHeaderButtonBack: FC<PageHeaderButtonBackProps> = ({ className }) => {
  const { back } = useRouter()
  return (
    <Styled.Root className={className} onClick={back}>
      <Styled.BackIcon />
    </Styled.Root>
  )
}

export default PageHeaderButtonBack
