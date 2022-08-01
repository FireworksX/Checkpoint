import { useEffect, useState } from 'react'
import { useLocationField } from '../useLocationField'
import { MediaFile } from 'src/interfaces/MediaFile'
import { useFileSelector } from '../../../useFileSelector'
import { useUploadFile } from '../../useUploadFile'

export interface LocationGalleryFieldProps {
  isEdit: boolean
  initialMediaFiles?: MediaFile[]
}

const DEFAULT: MediaFile[] = []

export const useLocationGalleryField = ({ isEdit, initialMediaFiles }: LocationGalleryFieldProps) => {
  const { select, Selector, files: innerFiles, readFiles } = useFileSelector({ multiple: true })
  const { progress, currentIndex, hasNext, resultFiles, runHandler } = useUploadFile(innerFiles)
  const [proxyResultFiles, setProxyResultFiles] = useState(initialMediaFiles || DEFAULT)

  useEffect(() => {
    if (resultFiles.length > 0) {
      setProxyResultFiles(resultFiles)
    }
  }, [resultFiles])

  useEffect(() => {
    setProxyResultFiles(initialMediaFiles || DEFAULT)
  }, [initialMediaFiles])

  const preloadFiles = readFiles.map((src, index) => ({
    src,
    progress: index === currentIndex ? progress : 0,
    isLoading: index >= currentIndex
  }))

  useEffect(() => {
    runHandler()
  }, [innerFiles])

  const Component = useLocationField({
    fieldName: 'gallery',
    isEdit,
    viewProps: {
      mediaFiles: proxyResultFiles
    },
    editProps: {
      mediaFiles: !hasNext ? proxyResultFiles : [],
      preloadMediaFiles: preloadFiles,
      select,
      Selector
    }
  })

  return {
    fieldName: 'gallery',
    Component,
    files: resultFiles,
    isEmpty: proxyResultFiles.length === 0
  }
}
