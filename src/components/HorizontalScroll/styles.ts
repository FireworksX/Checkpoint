import styled from 'styled-components'

export const Root = styled.div`
  overflow: auto;
  display: flex;

  // hide scroll
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`
