import { useCityInfo } from 'src/routes/CityInfoRoute/hooks/useCityInfo'
import { useToggle } from 'react-use'

const LIMIT = 3

export const useCityInfoFacts = () => {
  const [isOpen, toggleIsOpen] = useToggle(false)
  const { facts } = useCityInfo()

  const limitedFacts = (facts || []).slice(0, isOpen ? Infinity : LIMIT)

  return {
    facts: limitedFacts,
    isOpen,
    toggleIsOpen
  }
}
