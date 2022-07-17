import styled from 'styled-components'
import Button from 'src/components/Button/Button'
import IconComp from 'src/components/Icon/Icon'

interface Props {
  hasLike?: boolean
}

export const Root = styled(Button)``

export const Icon = styled(IconComp)<Props>`
  color: ${({ theme, hasLike }) => (hasLike ? theme.colors.accentRed : theme.colors.primary)};
`
