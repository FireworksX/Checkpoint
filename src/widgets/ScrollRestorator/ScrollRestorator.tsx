import {FC, ReactNode, useEffect} from 'react'
import * as Styled from './styles'
import {useRouter} from "../../hooks/useRouter";

interface ScrollRestoratorProps {
  children: ReactNode
}

const ScrollRestorator: FC<ScrollRestoratorProps> = ({ children }) => {
  const { routerInstance, route } = useRouter()

  useEffect(() => {
    const { scroll } = routerInstance.getDependencies()

    if (typeof scroll === 'number') {
      window.scrollTo(0, scroll)
      routerInstance.setDependency('scroll', null)
    }
  }, [route, routerInstance])

  return children
}

export default ScrollRestorator
