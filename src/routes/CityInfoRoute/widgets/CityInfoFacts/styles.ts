import styled from 'styled-components'
import Container from 'src/components/Container/Container'
import BaseImage from '../../../../components/BaseImage/BaseImage'
import Touchable from '../../../../components/Touchable/Touchable'

export const Root = styled(Container)``

export const Header = styled.h2`
  ${({ theme }) => theme.typography.text_18_22};
  font-weight: bold;
  margin-bottom: 15px;
`

export const FactsSection = styled.div`
  background: ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  padding-top: 10px;
  margin-bottom: 15px;
`

export const Fact = styled.div`
  display: flex;
  align-items: center;
  padding: 10px ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
`

export const FactImage = styled(BaseImage)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`

export const FactName = styled.div`
  ${({ theme }) => theme.typography.text_14_24};
  flex-grow: 1;
`

export const FactValue = styled.div`
  ${({ theme }) => theme.typography.text_14_24};
  font-weight: bold;
`

export const FactsMore = styled(Touchable)`
  ${({ theme }) => theme.typography.text_14_24};
  padding: 12px;
  text-align: center;
`

export const TransferSection = styled.div`
  background: ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  padding: ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
  display: flex;
`

export const TransferImage = styled(BaseImage)`
  width: 20px;
  height: 20px;
  margin-right: 20px;
`

export const TransferText = styled.div`
  ${({ theme }) => theme.typography.text_14_24};
  color: ${({ theme }) => theme.colors.textColor};
`

export const TransferDescription = styled.div`
  ${({ theme }) => theme.typography.text_12_16};
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 10px;
`
