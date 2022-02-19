import styled, { css } from 'styled-components'

interface Props {
  isReverse?: boolean
  index?: number
  withPadding?: boolean
  isStuck?: boolean
}

export const Root = styled.div<Props>`
  display: inline-flex;
  align-items: center;
  flex-direction: ${({ isReverse }) => (isReverse ? 'row-reverse' : 'row')};
`

export const Logo = styled.div<Props>`
  padding: ${({ withPadding }) => (withPadding ? '4px' : 'initial')};
  background: ${({ theme }) => theme.colors.backgroundWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  z-index: ${({ index }) => index};
  box-shadow: ${({ theme }) => theme.baseStyles.shadows.shadowBasic};
  border: 1px solid ${({ theme }) => theme.colors.backgroundWhite};

  &:not(:first-child) {
    margin-left: ${({ isStuck }) => (isStuck ? '-8px' : '-4px')};
  }

  &:first-child {
    background: ${({ theme }) => theme.colors.secondaryBg};
  }

  ${({ isReverse }) =>
    isReverse &&
    css`
      &:first-child {
        margin-left: -4px;
      }
      &:last-child {
        margin-left: 0;
      }
    `}
`
