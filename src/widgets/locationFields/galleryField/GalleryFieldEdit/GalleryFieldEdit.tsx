import { FC, ReactNode } from 'react'
import * as Styled from './styles'
import Button from 'src/components/Button/Button'
import Container from 'src/components/Container/Container'
import GalleryFieldView, { GalleryFieldViewProps } from '../GalleryFieldView/GalleryFieldView'

interface GalleryFieldEditProps extends GalleryFieldViewProps {
  className?: string
  Selector: ReactNode
  select(): void
}

const GalleryFieldEdit: FC<GalleryFieldEditProps> = ({
  className,
  mediaFiles,
  preloadMediaFiles,
  Selector,
  select
}) => {
  return (
    <Styled.Root className={className}>
      {Selector}

      {mediaFiles.length === 0 && preloadMediaFiles?.length === 0 ? (
        <Styled.EmptySlide>Пока ничего нет</Styled.EmptySlide>
      ) : (
        <GalleryFieldView mediaFiles={mediaFiles} preloadMediaFiles={preloadMediaFiles} />
      )}

      <Container>
        <Button size='l' stretched mode='tertiary' onClick={select}>
          Добавить изображение
        </Button>
      </Container>
    </Styled.Root>
  )
}

export default GalleryFieldEdit
