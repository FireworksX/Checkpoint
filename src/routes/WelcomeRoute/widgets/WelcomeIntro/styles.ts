import styled from 'styled-components'
import Container from 'src/components/Container/Container'
import ButtonComp from 'src/components/Button/Button'

export const Root = styled(Container)`
  min-height: 70vh;
  padding-bottom: 20px;
`

export const Title = styled.div`
  ${({ theme }) => theme.typography.text_18_22}
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
  margin-bottom: 15px;
`

export const Description = styled.p`
  ${({ theme }) => theme.typography.text_14_24}
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 20px;
`

export const Button = styled(ButtonComp)`
  margin-bottom: 20px;
`
