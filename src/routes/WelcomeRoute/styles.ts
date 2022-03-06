import styled from 'styled-components'
import Page from 'src/widgets/Page/Page'
import Container from 'src/components/Container/Container'

export const Root = styled(Page)`
  position: relative;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60vh;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 35px;
  transform: translateY(-50px) skew(-8deg) rotate(-8deg);
`

export const OverlayTexts = styled(Container)`
  position: relative;
  height: 60vh;
`

export const HeaderLabel = styled.div`
  ${({ theme }) => theme.typography.text_14_20};
  color: ${({ theme }) => theme.colors.basicWhite};
  padding-top: 40px;
  margin-bottom: 60px;
  font-weight: bold;
`

export const Title = styled.h1`
  ${({ theme }) => theme.typography.text_32_38};
  color: ${({ theme }) => theme.colors.basicWhite};
  margin-bottom: 10px;
  font-weight: bold;
`

export const Description = styled.h2`
  ${({ theme }) => theme.typography.text_14_24};
  color: ${({ theme }) => theme.colors.basicWhite};
`
