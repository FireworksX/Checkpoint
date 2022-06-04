import styled from 'styled-components'

export const Root = styled.div`
  height: 52px;
  display: flex;
  align-items: center;
`

export const Left = styled.div`
  flex-basis: 0;
  flex-shrink: 0;
  flex-grow: 1;
  padding: 4px 0 4px 4px;
`

export const Center = styled.div`
  flex-basis: 0;
  flex-shrink: 0;
  flex-grow: 1;
  padding: 0 4px;
  text-align: center;
  ${({ theme }) => theme.typography.text_20_24};
  font-weight: bold;
  white-space: nowrap;
`

export const Right = styled.div`
  flex-basis: 0;
  flex-shrink: 0;
  flex-grow: 1;
  padding: 4px 4px 4px 0;
  text-align: right;
`
