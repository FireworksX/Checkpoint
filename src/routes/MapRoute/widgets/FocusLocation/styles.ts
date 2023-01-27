import styled from 'styled-components'
import { zIndex } from '../../../../router/constants'

export const Root = styled.div`
  ${({ theme }) => theme.typography.text_26_30};
  font-weight: bold;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.textColorDark};
  padding: 30px ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${zIndex.mapLocation};
  pointer-events: none;
`
