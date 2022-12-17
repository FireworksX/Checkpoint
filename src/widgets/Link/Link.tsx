import React, { PropsWithChildren, useCallback } from 'react'
import cn from 'classnames'
import * as Styled from './styles'
import { LinkNavigationProps } from './linkConfig'
import { useRouter } from 'src/hooks/useRouter'
import { useLinkConfig } from './hooks/useLinkConfig'
import { TouchableProps } from 'src/components/Touchable/Touchable'
import { ROUTE_NAMES } from 'src/router/constants'

export interface LinkPropsInternal extends TouchableProps {
  className?: string
  activeClassName?: string
  partialActive?: keyof typeof ROUTE_NAMES
  waitNavigate?: () => Promise<unknown> // Ждёт резолва промиса, после чего выполняет навигацию
  onClick?: (e: React.MouseEvent<any>) => any
}

export type LinkProps = PropsWithChildren<LinkPropsInternal> & LinkNavigationProps

const Link: React.FC<LinkProps> = props => {
  const {
    className,
    type,
    children,
    activeClassName = '',
    onClick,
    waitNavigate,
    partialActive,
    ...touchableProps
  } = props
  const router = useRouter()
  const { isSamePage, link, href, routeParams } = useLinkConfig(type || 'profile', props)
  const isActive = partialActive && router.isActive(partialActive)

  const navigateHandler = useCallback(() => {
    if (link) {
      router.routerInstance.navigate(link?.name, routeParams)
    }
  }, [link, router, routeParams])

  const onClickHandler = useCallback(
    async (e: React.MouseEvent<any>) => {
      e.preventDefault()
      e.stopPropagation()

      if (onClick) {
        onClick(e)
      }

      if (waitNavigate) {
        await waitNavigate()
        navigateHandler()
      } else {
        navigateHandler()
      }
    },
    [onClick, navigateHandler, waitNavigate]
  )

  return (
    <Styled.Root
      className={cn(className, {
        [activeClassName]: isSamePage || isActive
      })}
      tagName={href ? 'a' : 'span'}
      href={href}
      onClick={onClickHandler}
      {...touchableProps}
    >
      {children}
    </Styled.Root>
  )
}

export default Link
