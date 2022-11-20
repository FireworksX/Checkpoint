import styled from 'styled-components'
import Container from 'src/components/Container/Container'
import Icon from 'src/components/Icon/Icon'
import Avatar from 'src/widgets/Avatar/Avatar'

export const Root = styled.div`
  padding-top: 25px;
  padding-bottom: 30px;
`

export const Wrapper = styled(Container)``

export const Head = styled.div`
  display: grid;
  grid-template-columns: 90px auto;
  grid-gap: 25px;
  align-items: center;
  margin-bottom: 15px;
`

export const Counters = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

export const Counter = styled.div`
  text-align: center;
`

export const CounterValue = styled.div`
  ${({ theme }) => theme.typography.text_18_22};
  font-weight: bold;
`

export const CounterDescription = styled.div`
  ${({ theme }) => theme.typography.text_14_20};
  color: ${({ theme }) => theme.colors.secondary};
`

export const AvatarComponent = styled(Avatar).attrs({ size: 90 })`
`

export const Name = styled.h2`
  ${({ theme }) => theme.typography.text_20_24}
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`

export const VerifyIcon = styled(Icon).attrs({
  name: 'check-star'
})`
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 10px;
`

export const Description = styled.p`
  ${({ theme }) => theme.typography.text_14_20}
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 15px;
`
