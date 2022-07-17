import styled from 'styled-components'
import BaseImage from 'src/components/BaseImage/BaseImage'
import Touchable from '../Touchable/Touchable'
import Link from 'src/widgets/Link/Link'

export const Root = styled(Link)`
  padding: 10px ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
  display: flex;
  align-items: center;
`

export const Cover = styled(BaseImage)`
  flex-basis: 80px;
  margin-right: 15px;
  width: 80px;
  max-width: 80px;
  height: 80px;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
`

export const Title = styled.div`
  ${({ theme }) => theme.typography.text_14_20};
  font-weight: bold;
  margin-bottom: 5px;
`

export const Description = styled.div`
  ${({ theme }) => theme.typography.text_12_16};
  line-height: 20px;
  color: ${({ theme }) => theme.colors.secondary};
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`

export const Like = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
  margin-right: 15px;
`

export const LikeCount = styled.div`
  ${({ theme }) => theme.typography.text_10_12};
  margin-left: 3px;
`

export const Views = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
`

export const ViewsCount = styled.div`
  ${({ theme }) => theme.typography.text_10_12};
  margin-left: 3px;
`
