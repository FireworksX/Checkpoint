import React, { FC, useMemo } from 'react'
import * as Styled from './styles'
import { useTextExtracts } from '../../hooks/useTextExctracts'

export type DisplayTextType = string | (string | undefined)[] | undefined
interface DisplayTextProps {
  className?: string
  children: DisplayText
}

const DisplayText: FC<DisplayTextProps> = ({ className, children }) => {
  const proxyChildren = React.Children.toArray(children).join('')
  const { userNames, hashTags } = useTextExtracts(proxyChildren)

  const parsedText = useMemo(
    () =>
      [...userNames, ...hashTags].reduce((acc, name) => {
        return acc.replace(name, `<span>${name}</span>`)
      }, proxyChildren),
    [userNames, proxyChildren, hashTags]
  )

  return (
    <Styled.Root className={className}>
      <div dangerouslySetInnerHTML={{ __html: parsedText }} />
    </Styled.Root>
  )
}

export default DisplayText
