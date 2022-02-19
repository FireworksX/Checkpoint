import styled from 'styled-components'
import Touchable from 'src/components/Touchable/Touchable'
import Icon from 'src/components/Icon/Icon'
import CommonLogo from 'src/components/CommonLogo/CommonLogo'

export const Root = styled.div`
  padding: 10px;
`

export const Wrapper = styled.div`
  padding: 7px 10px;
  border-radius: 10px;
  margin-bottom: 10px;
`

export const Touch = styled(Touchable)`
  display: flex;
  align-items: center;
`

export const Body = styled.div``

export const Delimiter = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
`

export const Logo = styled(CommonLogo)`
  width: 60px;
  margin-right: 10px;
`

export const Title = styled.div`
  ${({ theme }) => theme.typography.text_14_24}
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 3px;
`

export const Description = styled.div`
  ${({ theme }) => theme.typography.text_12_16}
  color: ${({ theme }) => theme.colors.secondary};
`

export const Arrow = styled(Icon).attrs({
  name: 'arrow-chevron',
  width: 16,
  height: 16
})`
  color: ${({ theme }) => theme.colors.secondary};
  margin-left: auto;
`
