import { useRef, useLayoutEffect, useMemo } from 'react'
import isBrowser from 'src/utils/isBrowser'

// https://ru.reactjs.org/docs/portals.html
// создает дом-элемент внутри body, который служит контейнером для портала

const createServerUsePortalTarget = () => {
  return () => null
}

const createBrowserUsePortalTarget = (customId?: string) => {
  const id = customId || 'use-portal-root'
  let modalRoot = document.getElementById(id)!
  if (!modalRoot) {
    modalRoot = document.createElement('div')
    document.body.appendChild(modalRoot)
  }

  return () => {
    const divElem = document.createElement('div')
    const elemRef = useRef<HTMLDivElement>(divElem)

    useLayoutEffect(() => {
      const elem = elemRef.current
      modalRoot.appendChild(elem)

      return () => {
        modalRoot.removeChild(elem)
      }
    }, [])

    return elemRef.current
  }
}

export const usePortalTarget = (id?: string) => {
  return useMemo(() => (isBrowser ? createBrowserUsePortalTarget(id) : createServerUsePortalTarget()), [id])
}

