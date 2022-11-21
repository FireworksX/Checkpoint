import styled from 'styled-components'

export const Root = styled.div`
  display: grid;
  grid-template-columns: 44px auto;
  grid-gap: 10px;
  background: ${({ theme }) => theme.colors.backgroundCard};
  border: 2px solid ${({ theme }) => theme.colors.borderCard};
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  padding: 10px ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
  align-items: center;
`

export const Name = styled.div`
  ${({ theme }) => theme.typography.text_18_22};
  font-weight: bold;
`

export const Destination = styled.div`
  ${({ theme }) => theme.typography.text_14_20};
  color: ${({ theme }) => theme.colors.secondary};
`
