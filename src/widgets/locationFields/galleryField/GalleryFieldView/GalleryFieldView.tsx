import { FC, useMemo } from 'react'
import * as Styled from './styles'
import { MediaFile } from 'src/interfaces/MediaFile'
import { buildMediaFilePath } from 'src/utils/buildMediaFilePath'

interface GalleryFieldViewProps {
  mediaFiles: MediaFile[]
  className?: string
}

const GalleryFieldView: FC<GalleryFieldViewProps> = ({ className, mediaFiles }) => {
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
      </Styled.Wrapper>
    </Styled.Root>
  )
}

export default GalleryFieldView
