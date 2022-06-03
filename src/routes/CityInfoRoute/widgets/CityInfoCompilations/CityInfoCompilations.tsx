import { FC } from 'react'
import * as Styled from './styles'
import CompilationCell from 'src/components/CompilationCell/CompilationCell'
import { useCityInfo } from 'src/routes/CityInfoRoute/hooks/useCityInfo'

interface CityInfoCompilationsProps {
  className?: string
}

const CityInfoCompilations: FC<CityInfoCompilationsProps> = ({ className }) => {
  const { categories } = useCityInfo()

  return (
    <Styled.Root className={className}>
      {categories.map((category, index) => (
        <CompilationCell
          key={`${category.slug}_${index}`}
          title={category.name}
          image={category.icon}
          description={category.description}
        />
      ))}
    </Styled.Root>
  )
}

export default CityInfoCompilations
