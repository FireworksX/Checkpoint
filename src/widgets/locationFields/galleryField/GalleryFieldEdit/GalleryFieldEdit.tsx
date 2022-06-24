import { FC, useMemo } from 'react'
import * as Styled from './styles'
import { buildMediaFilePath } from 'src/utils/buildMediaFilePath'
import { MediaFile } from 'src/interfaces/MediaFile'
import { NewIcon } from './styles'

interface GalleryFieldEditProps {
  mediaFiles: MediaFile[]
  className?: string
}

const GalleryFieldEdit: FC<GalleryFieldEditProps> = ({ className, mediaFiles }) => {
  const parsedMediaFiles = useMemo(
    () => mediaFiles.map(file => ({ ...file, path: buildMediaFilePath(file) })),
    [mediaFiles]
  )

  return (
    <Styled.Root className={className}>
      <Styled.Wrapper>
        {parsedMediaFiles.map(file => (
          <Styled.Slide key={file._id}>
            <Styled.SlideImage src={file.path} />
          </Styled.Slide>
        ))}
        <Styled.Slide>
          <Styled.NewWrapper>
            <Styled.NewSlide>
              <Styled.NewIcon name='plus-circle' width={50} height={50} />
            </Styled.NewSlide>
          </Styled.NewWrapper>
        </Styled.Slide>
      </Styled.Wrapper>
    </Styled.Root>
  )
}

export default GalleryFieldEdit
