import styled from 'styled-components'

export const Root = styled.div`
  text-align: center;
  padding: 48px 32px;
`

export const Icon = styled.div`
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
`

export const Header = styled.h2`
  ${({ theme }) => theme.typography.text_16_20};
  font-weight: bold;
`

export const Description = styled.h3`
  ${({ theme }) => theme.typography.text_14_24};
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 8px;
`

export const Actions = styled.h3`
  margin-top: 10px;
`
