import styled from 'styled-components'

interface Props {
  safeAreaBottom?: boolean
}

export const Root = styled.div<Props>`
  padding-bottom: ${({ safeAreaBottom }) => safeAreaBottom && '70px'};
`
