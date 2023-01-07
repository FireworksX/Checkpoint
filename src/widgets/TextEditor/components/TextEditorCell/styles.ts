import styled from 'styled-components'

export const Root = styled.div`
    background: ${({ theme }) => theme.colors.backgroundCard};
    border-radius: ${({ theme }) => theme.baseStyles.radius.radiusSmall};
    padding: 3px 5px;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.textColorDark};
    ${({ theme }) => theme.typography.text_16_20};
`

export const Before = styled.div`
  background: ${({ theme }) => theme.colors.border};
  ${({ theme }) => theme.typography.text_14_20};
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusSmall};
  height: 20px;
  min-width: 20px;
  text-align: center;
  margin-right: 5px;
`
