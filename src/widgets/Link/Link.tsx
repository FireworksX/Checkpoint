import React, { PropsWithChildren, useCallback } from 'react'
import cn from 'classnames'
import * as Styled from './styles'
import { useRoute } from 'react-router5'
import linkConfig, { LinkNavigationProps } from './linkConfig'
import { useRouter } from 'src/hooks/useRouter'
import { useLinkConfig } from './hooks/useLinkConfig'

export interface LinkPropsInternal {
  className?: string
  activeClassName?: string
  waitNavigate?: (navigate: () => void) => void | Promise<void>
  onClick?: (e: React.MouseEvent<any>) => any
}

export type LinkProps = PropsWithChildren<LinkPropsInternal> & LinkNavigationProps

const Link: React.FC<LinkProps> = props => {
  const { className, type, children, activeClassName = '', onClick, waitNavigate } = props
  const router = useRouter()
  const { isSamePage, link, href, routeParams } = useLinkConfig(type || 'profile', props)

  const navigateHandler = useCallback(() => {
    if (link) {
      router.routerInstance.navigate(link?.name, routeParams)
    }
  }, [link, router, routeParams])

  const onClickHandler = useCallback(
    (e: React.MouseEvent<any>) => {
      e.preventDefault()
      e.stopPropagation()

      if (onClick) {
        onClick(e)
      }

      if (waitNavigate) {
        waitNavigate(navigateHandler)
      } else {
        navigateHandler()
      }
    },
    [onClick, navigateHandler, waitNavigate]
  )

  return (
    <Styled.Root
      className={cn(className, {
        [activeClassName]: isSamePage
      })}
      tagName={href ? 'a' : 'span'}
      href={href}
      onClick={onClickHandler}
    >
      {children}
    </Styled.Root>
  )
}

export default Link
