import React, { PropsWithChildren, useCallback } from 'react'
import cn from 'classnames'
import * as Styled from './styles'
import { useRoute } from 'react-router5'
import linkConfig, { LinkNavigationProps } from './linkConfig'
import { useRouter } from 'src/hooks/useRouter'

export interface LinkPropsInternal {
  className?: string
  activeClassName?: string
  onClick?: (e: React.MouseEvent<any>) => any
}

export type LinkProps = PropsWithChildren<LinkPropsInternal> & LinkNavigationProps

const Link: React.FC<LinkProps> = props => {
  const { className, type, children, activeClassName = '', onClick } = props
  const router = useRouter()
  const { route } = useRoute()
  const link = type && linkConfig[type]

  const routeParams: { [key: string]: any } = {}

  if (type) {
    linkConfig[type].params.optional.forEach(key => {
      routeParams[key] = props[key] || router.getParam(key)
    })
    linkConfig[type].params.required.forEach(key => {
      routeParams[key] = props[key]
    })
  }

  const href = router.routerInstance.buildUrl(link?.name || 'root', routeParams)
  const isSamePage = route?.path === href

  const onClickHandler = useCallback((e: React.MouseEvent<any>) => {
    e.preventDefault()
    e.stopPropagation()

    if (onClick) {
      onClick(e)
    }

    if (link) {
      router.routerInstance.navigate(link?.name, routeParams)
    }
  }, [])

  return (
    <Styled.Root
      className={cn(className, {
        [activeClassName]: isSamePage
      })}
      href={href}
      onClick={onClickHandler}
    >
      {children}
    </Styled.Root>
  )
}

export default Link
