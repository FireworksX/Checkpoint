import styled from 'styled-components'
import BaseImage from 'src/components/BaseImage/BaseImage'
import LogosStack from '../LogosStack/LogosStack'

export const Root = styled.div`
  background: ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
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
  color: ${({ theme }) => theme.colors.secondary};
`

export const LikesWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`

export const LikesLabel = styled.div`
  ${({ theme }) => theme.typography.text_12_16};
  margin-right: 10px;
`

export const LikesStack = styled(LogosStack).attrs({ size: 30, withPadding: false, logoClassName: 'logo' })`
  .logo {
    border-radius: 50%;
  }
`
