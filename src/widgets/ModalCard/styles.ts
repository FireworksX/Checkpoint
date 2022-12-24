import styled, { css } from 'styled-components'
import BottomSheet from '../BottomSheet/BottomSheet'

interface Props {
  actionsHorizontal?: boolean
}

export const Root = styled(BottomSheet).attrs({ withBackground: false, withHeader: false })`
  padding: 10px;
`

export const Body = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 18px;
  padding: ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Icon = styled.div`
  margin: 8px auto 16px;
  color: ${({ theme }) => theme.colors.primary};
`

export const Header = styled.div`
  ${({ theme }) => theme.typography.text_20_24};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textColorDark};
  padding: 0 8px;
`

export const Description = styled.div`
  ${({ theme }) => theme.typography.text_14_24};
  margin-top: 8px;
  padding: 0 8px;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`

export const Actions = styled.div<Props>`
  margin-top: 10px;
  width: 100%;
  ${({ actionsHorizontal }) =>
    actionsHorizontal &&
    css`
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 15px;
    `};
`

export const CloseIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.secondaryLightBg};
  color: ${({ theme }) => theme.colors.secondary};
`
