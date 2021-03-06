import styled from 'styled-components'
import Touchable from 'src/components/Touchable/Touchable'
import BaseImage from 'src/components/BaseImage/BaseImage'

export const Root = styled.div``

export const RatingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
`

export const CellWrapper = styled.div`
  text-align: center;
  background: rgb(252 232 159);
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
`

export const Cell = styled(Touchable)`
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  background: ${({ theme }) => theme.colors.accentAmberBg};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 5px;
`

export const CellImage = styled(BaseImage)`
  width: 36px;
  height: 36px;
`

export const CellValue = styled.div`
  ${({ theme }) => theme.typography.text_14_24};
  color: ${({ theme }) => theme.colors.textColor};
  padding: 3px 0;
  background: rgb(252 232 159);
  border-bottom-left-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  border-bottom-right-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
`
