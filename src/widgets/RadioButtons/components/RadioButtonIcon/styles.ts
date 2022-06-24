import styled from 'styled-components'
import IconComp from 'src/components/Icon/Icon'

export const Root = styled.div`
    padding: 0 15px;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  background: ${({ theme }) => theme.colors.backgroundWhite};
  
`

export const Icon = styled(IconComp).attrs({ width: 20, height: 20 })``
