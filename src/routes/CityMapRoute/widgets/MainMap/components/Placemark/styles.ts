import styled from 'styled-components'
import Touchable from 'src/components/Touchable/Touchable'

export const Root = styled(Touchable)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #292929;
  border: 2px solid ${({ theme }) => theme.colors.border};
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    left: -12px;
    top: -12px;
    border-radius: 50%;
    background: #292929;
    opacity: 0.2;
  }
`
