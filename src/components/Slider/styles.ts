import styled from 'styled-components'

interface Props {
  isRange?: boolean
}

export const Root = styled.div<Props>`
  .slider {
    height: 30px;
  }

  .slider-thumb {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.background};
    box-shadow: ${({ theme }) => theme.baseStyles.shadows.shadowSecondary};
    border: 1px solid ${({ theme }) => theme.colors.border};
    outline: none;
  }

  .slider-track {
    height: 2px;
    border-radius: 1px;
    background: ${({ theme }) => theme.colors.border};
    position: relative;
    top: 15px;
  }

  .slider-track-${({ isRange }) => (isRange ? '1' : '0')} {
    background: ${({ theme }) => theme.colors.accentBlue};
  }
`
