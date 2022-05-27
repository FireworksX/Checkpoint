import styled from 'styled-components'
import Touchable from '../Touchable/Touchable'

export const Root = styled.div`
  background: ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  min-width: 256px;
`

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0 15px 0;
`

export const Name = styled.div`
  ${({ theme }) => theme.typography.text_18_22};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 3px;
  text-align: center;
`

export const Description = styled.div`
  ${({ theme }) => theme.typography.text_14_20};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 25px;
  text-align: center;
`

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 20px;
  margin-bottom: 15px;
`

export const Tag = styled.div`
  ${({ theme }) => theme.typography.text_12_16};
  padding: 3px 10px;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.textWhite};
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
`

export const Instagram = styled(Touchable)`
  ${({ theme }) => theme.typography.text_14_24};
  font-weight: bold;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 15px;
  text-align: center;
`
