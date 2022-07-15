import { FC } from 'react'
import * as Styled from './styles'
import CompilationCell from 'src/components/CompilationCell/CompilationCell'
import { useCityInfo } from 'src/routes/CityInfoRoute/hooks/useCityInfo'
import Link from '../../../../widgets/Link/Link'

interface CityInfoCompilationsProps {
  className?: string
}

const CityInfoCompilations: FC<CityInfoCompilationsProps> = ({ className }) => {
  const { categories, city } = useCityInfo()

  return (
    <Styled.Root className={className}>
      {categories.map((category, index) => (
        <Link type='cityMap' mapAuthor={city?.owner?.username} mapCategory={category.slug}>
          <CompilationCell
            key={`${category.slug}_${index}`}
            title={category.name}
            image={category.icon}
            description={category.description}
          />
        </Link>
      ))}
    </Styled.Root>
  )
}

export default CityInfoCompilations
