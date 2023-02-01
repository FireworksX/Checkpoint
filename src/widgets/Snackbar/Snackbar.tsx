import { FC } from 'react'
import * as Styled from './styles'
import { useSnackbar } from 'src/hooks/useSnackbar'

interface SnackbarProps {
  className?: string
}

const Snackbar: FC<SnackbarProps> = ({ className }) => {
  const { isOpen, close, options } = useSnackbar()

  return (
    <Styled.Root className={className} isOpen={isOpen} onClick={close}>
      <Styled.Before name={options?.icon as SvgNames} width={20} height={20} />
      <Styled.Body>
        {options?.text}
        {options?.action && <Styled.Action onClick={options?.action.onClick}>{options?.action.text}</Styled.Action>}
      </Styled.Body>
    </Styled.Root>
  )
}

export default Snackbar
