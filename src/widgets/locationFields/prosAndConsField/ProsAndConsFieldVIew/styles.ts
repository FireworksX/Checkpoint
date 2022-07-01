import styled from 'styled-components'
import BaseImage from 'src/components/BaseImage/BaseImage'

export const Root = styled.div``

export const Title = styled.h3`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.typography.text_14_24};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  margin-bottom: 10px;
`

export const TitleIcon = styled(BaseImage)`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`
