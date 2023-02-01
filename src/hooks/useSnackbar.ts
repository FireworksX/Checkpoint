import { useCallback, useMemo, useRef } from 'react'
import { useRecoilState } from 'recoil'
import { snackbarAtom } from '../store/uiStore'
import { promiseWaiter } from '../utils/promiseWaiter'

export interface SnackbarOptions {
  text?: string
  autoClose?: boolean
  autoCloseInterval?: number
  icon?: SvgNames
  action?: {
    text: string | number
    onClick: Callback<unknown>
  }
}

const DEFAULT_OPTIONS = {
  autoClose: true,
  autoCloseInterval: 3000,
  icon: 'info' as const
}

export const useSnackbar = (options?: SnackbarOptions) => {
  const resultOptions: SnackbarOptions = useMemo(() => ({ ...DEFAULT_OPTIONS, ...options }), [options])
  const [snackbarOptions, setSnackbarOptions] = useRecoilState(snackbarAtom)
  const timeoutRef = useRef<number>()

  const safeClose = useCallback(async () => {
    setSnackbarOptions(data => ({
      isOpen: false,
      options: data.options
    }))

    await promiseWaiter()
    setSnackbarOptions({
      isOpen: false,
      options: undefined
    })
  }, [setSnackbarOptions])

  const open = useCallback(() => {
    if (!snackbarOptions.isOpen) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = undefined
      setSnackbarOptions({
        isOpen: true,
        options: resultOptions
      })

      if (resultOptions.autoClose) {
        timeoutRef.current = setTimeout(() => {
          safeClose()
        }, resultOptions.autoCloseInterval) as any as number
      }
    }
  }, [snackbarOptions, setSnackbarOptions, resultOptions, timeoutRef, safeClose])

  const close = useCallback(async () => {
    clearTimeout(timeoutRef.current)
    timeoutRef.current = undefined
    await safeClose()
  }, [timeoutRef, safeClose])

  return {
    isOpen: snackbarOptions.isOpen,
    open,
    close,
    options: snackbarOptions.options
  }
}
