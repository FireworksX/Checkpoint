import styled from 'styled-components'
import Touchable from 'src/components/Touchable/Touchable'

interface Props {
  hasRemove?: boolean
}

export const Root = styled.div<Props>`
  display: flex;
  align-items: center;
  ${({ hasRemove }) => hasRemove ? 'padding: 3px 0 3px 10px' : 'padding: 3px 10px'};
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  background: ${({ theme }) => theme.colors.backgroundWhite};
  ${({ theme }) => theme.typography.text_14_24};
  margin: 0 5px 5px 0;
`

export const Remove = styled(Touchable)`
  width: 25px;
  text-align: center;
  border-left 1px solid ${({ theme }) => theme.colors.border};
  margin-left: 5px;
  padding-right: 3px;
`
