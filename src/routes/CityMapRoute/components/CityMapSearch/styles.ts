import styled from 'styled-components'
import Chip from 'src/widgets/ChipsInput/components/Chip/Chip'
import Touchable from '../../../../components/Touchable/Touchable'
import {rgbToRgba} from "../../../../styles/theme/baseStyleds";

export const Root = styled.div`
  padding: 25px 15px 15px;
  background: ${({ theme }) => theme.colors.background};
  border-bottom-left-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  border-bottom-right-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  box-shadow: ${({ theme }) => theme.baseStyles.shadows.shadowBig};
`

export const Target = styled.div`
  background: ${({ theme }) => theme.colors.secondaryLightBg};
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  border: 1px solid ${({ theme }) => theme.colors.border};
  height: 50px;
  display: flex;
  align-items: center;
  padding: 3px 45px 3px 6px;
  position: relative;
`

export const Placeholder = styled.div`
  ${({ theme }) => theme.typography.text_14_24};
  color: ${({ theme }) => theme.colors.secondary};
  padding-left: 10px;
`

export const Cell = styled(Chip)`
  padding: 7px 10px;
  margin: 0;
  white-space: nowrap;
`

export const Separator = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
  width: 20px;
`

export const Reset = styled(Touchable)`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 40px;
  background: ${({ theme }) => theme.colors.secondaryLightBg};
  color: ${({ theme }) => theme.colors.iconBasic};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 40px;
    bottom: 0;
    width: 20px;
    background: linear-gradient(
      to right,
      ${({ theme }) => rgbToRgba(theme.colors.secondaryLightBg, 0)},
      ${({ theme }) => theme.colors.secondaryLightBg} 100%
    );
  }
`
