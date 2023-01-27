import { FC } from 'react'
import * as Styled from './styles'
import {useFocusCity} from "./hooks/useFocusCity";

interface FocusLocationProps {
  className?: string
}

const FocusLocation: FC<FocusLocationProps> = ({ className }) => {
  const city = useFocusCity()

  return <Styled.Root className={className}>{city}</Styled.Root>
}

export default FocusLocation
