import { FC, useMemo } from 'react'
import * as Styled from './styles'
import { MediaFile } from 'src/interfaces/MediaFile'
import { buildMediaFilePath } from 'src/utils/buildMediaFilePath'

interface PreloadMediaFile {
  src: string
  isLoading: boolean
  progress: number
}

export interface GalleryFieldViewProps {
  mediaFiles: MediaFile[]
  preloadMediaFiles?: PreloadMediaFile[]
  className?: string
}

const GalleryFieldView: FC<GalleryFieldViewProps> = ({ className, mediaFiles, preloadMediaFiles = [] }) => {
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

        {preloadMediaFiles.map((file, index) => (
            <Styled.Slide key={index}>
              <Styled.SlideImage src={file.src} />
              {file.isLoading && <Styled.Progress progress={file.progress} />}
            </Styled.Slide>
        ))}
      </Styled.Wrapper>
    </Styled.Root>
  )
}

export default GalleryFieldView
