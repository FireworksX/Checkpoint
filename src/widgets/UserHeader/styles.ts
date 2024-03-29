import styled from 'styled-components'
import Container from 'src/components/Container/Container'
import Icon from 'src/components/Icon/Icon'
import Avatar from 'src/widgets/Avatar/Avatar'
import DisplayText from "../DisplayText/DisplayText";

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

export const Actions = styled.div`
  grid-column: 1 / 4;
`

export const AvatarComponent = styled(Avatar).attrs({ size: 90 })``

export const Name = styled.h2`
  ${({ theme }) => theme.typography.text_20_24}
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`

export const VerifyIcon = styled(Icon).attrs({
  name: 'bag'
})`
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 10px;
`

export const Description = styled(DisplayText)`
  ${({ theme }) => theme.typography.text_14_20}
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 15px;
`
