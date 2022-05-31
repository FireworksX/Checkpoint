import { FC } from 'react'
import * as Styled from './styles'
import { staticImagesMap } from 'src/data/staticImagesMap'
import CompilationCell from '../../../../components/CompilationCell/CompilationCell'

interface CityInfoCompilationsProps {
  className?: string
}

const CityInfoCompilations: FC<CityInfoCompilationsProps> = ({ className }) => {
  const list = [
    {
      title: 'От местных',
      description: 'Куда ходят местные',
      image: staticImagesMap.manWalkingLightSkinTone
    },
    {
      title: 'Известное',
      description: 'Места с открыток',
      image: staticImagesMap.classicalBuilding
    },
    {
      title: 'Поесть',
      description: 'Где покушать',
      image: staticImagesMap.potOfFood
    },
    {
      title: 'Маршруты',
      description: 'Где гулять',
      image: staticImagesMap.worldMap
    },
    {
      title: 'Пофоткаться',
      description: 'Для фото в Инстаграм',
      image: staticImagesMap.cameraWithFlash
    },
    {
      title: 'Бары',
      description: 'Где пить',
      image: staticImagesMap.beerMug
    }
  ]

  return (
    <Styled.Root className={className}>
      {list.map((el, index) => (
        <CompilationCell key={`${el.title}_${index}`} title={el.title} image={el.image} description={el.description} />
      ))}
    </Styled.Root>
  )
}

export default CityInfoCompilations
