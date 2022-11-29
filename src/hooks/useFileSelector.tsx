import { useCallback, useEffect, useRef, useState } from 'react'

interface Props {
  multiple?: boolean
  accept?: string
}

export const useFileSelector = (options?: Props) => {
  const [files, setFiles] = useState<File[] | undefined>()
  const [readFiles, setReadFiles] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement | null>(null)

  const onSelectFile = useCallback(e => {
    const newFiles: File[] = []

    for (const file of e.target.files) {
      newFiles.push(file)
    }

    setFiles(newFiles)
  }, [])

  const select = useCallback(() => {
    if (inputRef.current) {
      inputRef.current?.click()
    }
  }, [])

  useEffect(() => {
    if (files) {
      setReadFiles([])
      for (const file of files) {
        const reader = new FileReader()

        reader.onloadend = function () {
          if (typeof reader.result === 'string') {
            setReadFiles(val => [...val, reader.result as string])
          }
        }

        reader.readAsDataURL(file)
      }
    }
  }, [files])

  return {
    Selector: (
      <input
        ref={inputRef}
        multiple={options?.multiple}
        type='file'
        accept={options?.accept || 'image/*'}
        style={{ display: 'none' }}
        onChange={onSelectFile}
      />
    ),
    select,
    files,
    readFiles
  }
}
