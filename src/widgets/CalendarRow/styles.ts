import styled from 'styled-components'
import Touchable from 'src/components/Touchable/Touchable'
import Icon from 'src/components/Icon/Icon'

interface Props {
  isLeftArrow?: boolean
}

export const Root = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
`

export const ArrowButton = styled(Touchable)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  min-width: 40px;
  height: 40px;
`

export const ArrowIcon = styled(Icon).attrs({
  name: 'arrow-chevron',
  width: 24,
  height: 24
})<Props>`
  ${({ isLeftArrow }) => isLeftArrow && `transform: rotate(180deg);`}
  color: ${({ theme }) => theme.colors.secondary};
`

export const Title = styled(Touchable)`
  ${({ theme }) => theme.typography.text_26_30}
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textColor};
  margin: 0 12px;
`
