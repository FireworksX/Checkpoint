import { useCallback, useEffect, useMemo, useState } from 'react'
import { useMutation } from '../useMutation'
import { apiEndpoints } from '../../data/apiEndpoints'
import { MediaFile } from 'src/interfaces/MediaFile'
import isBrowser from '../../utils/isBrowser'
import { useQueue } from '../useQueue'

export const useUploadFile = (files?: File[] | null) => {
  const [progress, setProgress] = useState(0)
  const [resultFiles, setResultFiles] = useState<MediaFile[]>([])

  const { currentValue, currentIndex, goNext, hasNext } = useQueue<File>(files || [])

  const formData = useMemo(() => (isBrowser ? new FormData() : undefined), [])

  if (currentValue && isBrowser) {
    formData?.delete('file')
    formData?.append('file', currentValue)
  }

  const { fetching, execute } = useMutation<MediaFile, FormData>(apiEndpoints.MEDIA_UPLOAD, {
    onUploadProgress(progressEvent) {
      const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
      setProgress(percentCompleted)
    }
  })

  const runHandler = useCallback(async () => {
    if (formData && currentValue) {
      const result = await execute(formData)

      if (result.success && result.data) {
        setResultFiles(curr => [...curr, result.data!])
        setProgress(0)
      }

      if (hasNext) {
        goNext()
      }
    }
  }, [currentValue, execute, formData, goNext, hasNext])

  useEffect(() => {
    runHandler()
  }, [currentIndex])

  return {
    runHandler,
    fetching,
    currentIndex,
    progress,
    resultFiles
  }
}
