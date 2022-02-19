import styled from 'styled-components'
import Link, { LinkProps } from 'src/widgets/Link/Link'

interface Props {
  switcherWidth?: number
  switcherOffset?: number
}

export const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: ${({ theme }) => theme.colors.secondaryBg};
  border: 2px solid ${({ theme }) => theme.colors.secondaryBg};
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  position: relative;
  overflow: hidden;
`

export const Switcher = styled.div<Props>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  transition: all ${({ theme }) => theme.animation.transitionDuration};
  width: ${({ switcherWidth }) => switcherWidth}px;
  transform: translateX(${({ switcherOffset }) => switcherOffset}px);
  background: ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
`

export const Cell = styled(Link)<LinkProps>`
  ${({ theme }) => theme.typography.text_14_24}
  color: ${({ theme }) => theme.colors.textColor};
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 36px;
  cursor: pointer;
`
