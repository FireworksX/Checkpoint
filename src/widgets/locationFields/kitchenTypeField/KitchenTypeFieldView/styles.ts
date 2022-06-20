import styled from 'styled-components'

export const Root = styled.div``

export const Title = styled.h3`
  ${({ theme }) => theme.typography.text_14_24};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  margin-bottom: 10px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Cell = styled.div`
  padding: 3px 10px;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  background: ${({ theme }) => theme.colors.backgroundWhite};
  ${({ theme }) => theme.typography.text_14_24};
  margin: 0 5px 5px 0;
`
