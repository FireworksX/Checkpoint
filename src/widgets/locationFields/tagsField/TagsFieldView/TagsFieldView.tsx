import { FC } from 'react'
import * as Styled from './styles'

interface TagsFieldViewProps {
  className?: string
}

const TagsFieldView: FC<TagsFieldViewProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Tag>#Art</Styled.Tag>
      <Styled.Tag>#Crypto</Styled.Tag>
      <Styled.Tag>#NFT</Styled.Tag>
      <Styled.Tag>#Social</Styled.Tag>
    </Styled.Root>
  )
}

export default TagsFieldView
