import { FC, useMemo } from 'react'
import * as Styled from './styles'
import { useTextExtracts } from '../../hooks/useTextExctracts'

interface DisplayTextProps {
  className?: string
  children: string
}

const DisplayText: FC<DisplayTextProps> = ({ className, children }) => {
  const { userNames, hashTags } = useTextExtracts(children)

  const parsedText = useMemo(
    () =>
      [...userNames, ...hashTags].reduce((acc, name) => {
        return acc.replace(name, `<span>${name}</span>`)
      }, children),
    [userNames, children, hashTags]
  )

  return <Styled.Root className={className} dangerouslySetInnerHTML={{ __html: parsedText }} />
}

export default DisplayText
