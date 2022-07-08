import { FC } from 'react'
import * as Styled from './styles'

interface CityMapSearchProps {
  className?: string
}

const CityMapSearch: FC<CityMapSearchProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Target placeholder='Поиск мест и адресов' />
    </Styled.Root>
  )
}

export default CityMapSearch
