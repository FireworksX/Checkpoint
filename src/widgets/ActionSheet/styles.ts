import styled from 'styled-components'
import BottomSheet from '../BottomSheet/BottomSheet'
import Touchable from 'src/components/Touchable/Touchable'

export const Root = styled(BottomSheet)`
  padding: ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
`

export const Body = styled.div`
  margin-bottom: 7px;
`

export const CancelButton = styled(Touchable)`
  background-color: ${({ theme }) => theme.colors.background} !important;
  height: 52px;
  border-radius: 14px;
  ${({ theme }) => theme.typography.text_20_24};
  font-weight: bold !important;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.accentBlue} !important;
`
