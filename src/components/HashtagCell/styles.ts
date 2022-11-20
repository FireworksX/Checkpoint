import styled from 'styled-components'
import Button from 'src/components/Button/Button'

interface Props {
    isActive?: boolean
}

export const Root = styled(Button).attrs<Props>({ mode: 'outline' })`
  border-radius: 10px;
  background-color: ${({isActive, theme}) => isActive && theme.colors.primaryBg};
`
