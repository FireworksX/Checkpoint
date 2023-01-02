import styled from 'styled-components'
import Touchable from '../Touchable/Touchable'

export const Root = styled.div`
  border-radius: 5px;
  position: relative;

  .swiper-pagination {
    position: absolute;
    bottom: 15px;
    z-index: 2;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-pagination-bullet {
    width: 7px;
    height: 7px;
    background: ${({ theme }) => theme.colors.backgroundCard};
    border-radius: 50%;
    display: block;
    margin-right: 5px;

    &:last-child {
      margin-right: 0;
    }
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.primary};
  }
`

export const Slide = styled.div`
  height: 200px;
  background: ${({ theme }) => theme.colors.backgroundDark};
`

export const ButtonPrev = styled(Touchable)`
  position: absolute;
  top: 50%;
  left: ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.primary};
  z-index: 2;
`

export const ButtonNext = styled(ButtonPrev)`
  left: initial;
  right: ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
`
