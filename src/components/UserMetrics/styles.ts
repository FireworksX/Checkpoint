import styled from 'styled-components'
import Link from 'src/widgets/Link/Link'

export const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  border-top: 2px solid ${({ theme }) => theme.colors.border};
`

export const MetricCell = styled(Link)`
  text-align: center;
  padding: 10px 0;
`

export const MetricLabel = styled.div`
  ${({ theme }) => theme.typography.text_14_20}
  color: ${({ theme }) => theme.colors.secondary};
`

export const MetricValue = styled.div`
  ${({ theme }) => theme.typography.text_16_20}
  font-weight: bold;
  margin-bottom: 5px;
`
