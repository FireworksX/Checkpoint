import styled, { css } from 'styled-components'
import { InitialsAvatarProps, InitialsAvatarTextGradients } from './InitialsAvatar'

interface Props {
  gradientName: InitialsAvatarTextGradients
  size: NonNullable<InitialsAvatarProps['size']>
}

const gradients: Record<InitialsAvatarTextGradients, any> = {
  red: css`
    background: #e52e40;
    background: linear-gradient(135deg, #ff7583, #e52e40);
  `,
  pink: css`
    background: #e62e6b;
    background: linear-gradient(135deg, #ff8880, #e62e6b);
  `,
  orange: css`
    background: #e66b2e;
    background: linear-gradient(135deg, #ffbf80, #e66b2e);
  `,
  yellow: css`
    background: #e7a902;
    background: linear-gradient(135deg, #ffd54f, #e7a902);
  `,
  green: css`
    background: #6cd97e;
    background: linear-gradient(135deg, #6cd97e, #12b212);
  `,
  'l-blue': css`
    background: #2bb4d6;
    background: linear-gradient(135deg, #7df1fa, #2bb4d6);
  `,
  blue: css`
    background: #3f8ae0;
    background: linear-gradient(135deg, #6cf, #3f8ae0);
  `,
  violet: css`
    background: #8f3fe0;
    background: linear-gradient(135deg, #d3a6ff, #8f3fe0);
  `
}

function getInitialsFontSize(avatarSize: number) {
  const calculatedFontSize = Math.ceil(avatarSize * 0.36)
  const evenFix = calculatedFontSize % 2
  return calculatedFontSize + evenFix
}

export const Root = styled.div<Props>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  font-size: ${({ size }) => getInitialsFontSize(size)}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ gradientName }) => gradients[gradientName]}
`

export const Body = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textColorLight};
`
