import styled from 'styled-components'
import Container from 'src/components/Container/Container'

export const Root = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 15px;
`
