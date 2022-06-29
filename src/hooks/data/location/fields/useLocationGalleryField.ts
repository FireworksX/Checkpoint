import { useEffect, useState } from 'react'
import { useLocationField } from '../useLocationField'
import { MediaFile } from '../../../../interfaces/MediaFile'
import { useFileSelector } from '../../../useFileSelector'
import { useUploadFile } from '../../useUploadFile'

interface Props {
  isEdit: boolean
  initialMediaFiles?: MediaFile[]
}

export const useLocationGalleryField = ({ isEdit, initialMediaFiles }: Props) => {
  const { select, Selector, files: innerFiles, readFiles } = useFileSelector({ multiple: true })
  const [files, setFiles] = useState<MediaFile[]>(initialMediaFiles || [])
  const { progress, currentIndex, resultFiles, runHandler } = useUploadFile(innerFiles)

  const preloadFiles = readFiles
    .map((src, index) => ({
      src,
      progress: index === currentIndex ? progress : 0,
      isLoading: index >= currentIndex
    }))
    .slice(resultFiles.length - 1, -1)

  useEffect(() => {
    runHandler()
  }, [innerFiles])

  const Component = useLocationField({
    fieldName: 'gallery',
    isEdit,
    viewProps: {
      mediaFiles: resultFiles
    },
    editProps: {
      mediaFiles: resultFiles,
      preloadMediaFiles: preloadFiles,
      select,
      Selector
    }
  })

  return {
    fieldName: 'gallery',
    Component,
    files
  }
}
