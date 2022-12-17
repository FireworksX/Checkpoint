import styled from 'styled-components'
import Touchable from 'src/components/Touchable/Touchable'

export const Root = styled(Touchable)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textColorLight};
  background: #3f8ae0;
  background: linear-gradient(135deg, #6cf, #3f8ae0);
`
