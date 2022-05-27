import styled from 'styled-components'
import AmbassadorCard from 'src/components/AmbassadorCard/AmbassadorCard'

export const Root = styled.div``

export const Header = styled.h2`
  ${({ theme }) => theme.typography.text_20_24};
  margin-bottom: 15px;
  font-weight: bold;
`

export const Description = styled.div`
  ${({ theme }) => theme.typography.text_14_20};
  margin-bottom: 10px;
`

export const Card = styled(AmbassadorCard)`
  margin: 0 7px;

  &:first-child {
    margin-left: ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
  }
`
