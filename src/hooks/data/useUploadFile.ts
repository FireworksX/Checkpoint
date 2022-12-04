import { useCallback, useEffect, useMemo, useState } from 'react'
import { apiEndpoints } from 'src/data/apiEndpoints'
import { MediaFile } from 'src/interfaces/MediaFile'
import isBrowser from 'src/utils/isBrowser'
import { useQueue } from 'src/hooks/useQueue'
import { useApiClient } from '../useApiClient'
import { useToggle } from 'react-use'

interface Options {
  pause?: boolean
}

export const useUploadFile = (files?: File[] | null, options?: Options) => {
  const pause = !!options?.pause
  const [fetching, toggleFetching] = useToggle(false)
  const apiClient = useApiClient()
  const [progress, setProgress] = useState(0)
  const [resultFiles, setResultFiles] = useState<MediaFile[]>([])

  const { currentValue, currentIndex, goNext, hasNext } = useQueue(files || [])

  const formData = useMemo(() => (isBrowser ? new FormData() : undefined), [])

  if (currentValue && isBrowser) {
    formData?.delete('file')
    formData?.append('file', currentValue)
  }

  const execute = useCallback(
    async (formData: FormData) => {
      toggleFetching()
      const { data } = await apiClient.post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })

      toggleFetching()

      return data
    },
    [apiClient, toggleFetching]
  )

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
    if (!pause) {
      runHandler()
    }
  }, [currentIndex, runHandler, pause])

  return {
    runHandler,
    fetching,
    currentIndex,
    progress,
    resultFiles,
    hasNext
  }
}
