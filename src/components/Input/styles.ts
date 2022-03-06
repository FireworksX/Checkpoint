import styled, { css } from 'styled-components'
import Icon from 'src/components/Icon/Icon'

interface Props {
  status?: 'success' | 'error'
  hasIcon?: boolean
  isSlimArea?: boolean
}

export const Root = styled.div`
  position: relative;
  width: 100%;
`

export const Label = styled.div`
  ${({ theme }) => theme.typography.text_12_16};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 3px;
`

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`

export const Postfix = styled.div`
  ${({ theme }) => theme.typography.text_14_20}
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 24px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
`

const fieldColors = {
  success: css`
    ${({ theme }) => `border-color: ${theme.colors.primary};
    background-color: ${theme.colors.primaryBg};`}
  `,
  error: css`
    ${({ theme }) => `border-color: ${theme.colors.accentRed};
    background-color: ${theme.colors.accentRedBg};`}
  `,
  default: ''
}

const fieldBase = css<Props>`
  ${({ theme }) => theme.typography.text_14_24}
  font-weight: normal;
  width: 100%;
  padding: 10px 50px 10px 15px;
  appearance: none;
  outline: none;
  ${({ theme, hasIcon }) => css`
    padding-left: ${hasIcon && '30px'};
    border-radius: ${theme.baseStyles.radius.radiusMain};
    border: none;
    resize: none;
    background: ${({ theme }) => theme.colors.border};
    transition: background-color ${theme.animation.transitionDuration},
      border-color ${theme.animation.transitionDuration};
  `}

  @supports (-webkit-overflow-scrolling: touch) {
    ${({ theme }) => theme.typography.text_16_20}
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
  }

  &::-moz-placeholder {
    opacity: 1;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    opacity: 0.7;
    border-color: ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.backgroundWhite};
  }

  &:focus,
  & {
    ${({ status }) => fieldColors[status || 'default']}
  }
`

export const Input = styled.input<Props>`
  ${fieldBase}
`

const iconBase = `
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translate(0, -50%);
  top: 23px;
`

export const IconLeft = styled(Icon)`
  ${iconBase}
  left: 10px;
  height: 14px;
  width: 14px;
  top: 50%;
  color: ${({ theme }) => theme.colors.iconBasic};
`

export const IconCheck = styled(Icon).attrs({ name: 'check-circle' })`
  ${iconBase}
  color: ${({ theme }) => theme.colors.primary};
`

export const IconExclamation = styled(Icon).attrs({ name: 'exclamation-circle' })`
  ${iconBase}
  color: ${({ theme }) => theme.colors.accentRed};
`

export const TextArea = styled.textarea<Props>`
  min-height: 100px;
  ${fieldBase}
  ${({ isSlimArea, theme }) =>
    isSlimArea &&
    css`
      overflow: hidden;
      resize: none;
      min-height: 44px;
      transition: all ${theme.animation.transitionDuration};

      &:focus {
        min-height: 100px;
      }
    `}
`

export const Message = styled.div<Props>`
  position: absolute;
  top: calc(100% + 1px);
  left: 0;
  max-width: 100%;
  z-index: 4;
  ${({ theme }) => theme.typography.text_12_16}
  color: ${({ theme }) => theme.colors.textWhite};
  border-radius: 2px;
  pointer-events: none;
  padding: 4px 6px;
  background-color: ${({ theme, status }) =>
    status === 'success' ? theme.colors.primary : status === 'error' ? theme.colors.accentRed : 'transparent'};
`

export const Submit = styled.div<Props>`
  display: flex;
  margin-top: 10px;
  width: 100%;
`
