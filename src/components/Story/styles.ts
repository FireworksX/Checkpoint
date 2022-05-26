import styled from 'styled-components'
import BaseImage from 'src/components/BaseImage/BaseImage'

export const Root = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 4px;
  border-radius: 50%;
  width: 80px;
  height: 80px;
`

export const Image = styled(BaseImage)`
  width: 100%;
  height: 100%;
  min-width: 100%;
  object-fit: cover;
  border-radius: 50%;
`
