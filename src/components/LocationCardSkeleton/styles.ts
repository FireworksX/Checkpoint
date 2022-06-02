import styled from 'styled-components'

export const Root = styled.div`
  background: ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  padding: 10px ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
  display: flex;
  align-items: center;
`

export const Cover = styled.div`
  background: ${({ theme }) => theme.colors.skeleton};
  flex-basis: 80px;
  margin-right: 15px;
  width: 80px;
  min-width: 80px;
  height: 80px;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
`

export const Wrapper = styled.div`
  width: 100%;
`

export const Title = styled.div`
  background: ${({ theme }) => theme.colors.skeleton};
  height: 16px;
  margin-bottom: 5px;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusSecond};
  width: 60%;
`

export const Description = styled.div`
  background: ${({ theme }) => theme.colors.skeleton};
  height: 26px;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusSecond};
`
