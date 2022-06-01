import { FC } from 'react'
import { createPortal } from 'react-dom'
import { usePortalTarget } from './usePortalTarget'
import isBrowser from 'src/utils/isBrowser'

interface PortalProps {
  id?: string
}

const Portal: FC<PortalProps> = ({ id, children }) => {
  const targetElem = usePortalTarget(id)()

  if (!isBrowser) return null

  return createPortal(children, targetElem!)
}

export default Portal
