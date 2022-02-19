import styled, { css } from 'styled-components'

export const Root = styled.div`
  background: ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  padding: 12px;
  box-shadow: ${({ theme }) => theme.baseStyles.shadows.shadowBasic};
  min-width: 236px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const Logos = styled.div`
  display: flex;
  align-items: center;
`

export const Logo = styled.div`
  width: 32px;
  height: 32px;
  background: ${({ theme }) => theme.colors.skeleton};
  border-radius: 50%;

  &:last-child {
    margin-left: -5px;
  }
`

const blockCss = css`
  background: ${({ theme }) => theme.colors.skeleton};
  height: 20px;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
`

export const Date = styled.div`
  width: 35%;
  margin-left: auto;
  ${blockCss};
`

export const League = styled.div`
  width: 45%;
  ${blockCss}
  height: 15px;
  margin-bottom: 7px;
`

export const Team = styled.div`
  width: 75%;
  ${blockCss}
  margin-bottom: 5px;

  &:last-child {
    margin-bottom: 15px;
  }
`

export const Prediction = styled.div`
  ${blockCss}
  height: 30px;
`
