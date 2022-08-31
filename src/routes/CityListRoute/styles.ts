import styled from 'styled-components'
import BaseImage from 'src/components/BaseImage/BaseImage'
import Container from '../../components/Container/Container'

export const Root = styled.div``

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0 50px 0;
`

export const Image = styled(BaseImage)`
  width: 80px;
  height: 80px;
`

export const Title = styled.div`
  ${({ theme }) => theme.typography.text_32_38}
  color: ${({ theme }) => theme.colors.textColor};
  text-align: center;
  font-weight: 500;
  margin-bottom: 15px;
`

export const Description = styled.p`
  ${({ theme }) => theme.typography.text_14_24}
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 40px;
  text-align: center;
  padding: 0 15%;
`

export const SurpriseWrapper = styled(Container)`
  margin-bottom: 15px;
`
