import styled from 'styled-components'

export const Root = styled.div`
  background: ${({ theme }) => theme.colors.backgroundCard};
  padding: 10px ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
  justify-content: space-between;
`

export const Date = styled.div`
  ${({ theme }) => theme.typography.text_12_16}
  color: ${({ theme }) => theme.colors.secondary};
`

export const Body = styled.div`
  ${({ theme }) => theme.typography.text_14_20}
`
