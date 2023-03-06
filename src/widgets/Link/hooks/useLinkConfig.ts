import { LinkType } from '../linkConfig'
import { useRouter } from 'src/hooks/useRouter'
import { useLinkFinalType } from './useLinkFinalType'
import { buildLinkConfig, LinkProps } from '../buildLinkConfig'
import { useCallback, useEffect, useState } from 'react'

export const useLinkConfig = (type: LinkType, props?: Omit<LinkProps, 'router'>) => {
  const [stateProps, setStateProps] = useState(props)
  const router = useRouter()
  const finalType = useLinkFinalType(type, stateProps)

  useEffect(() => {
    setStateProps(props)
  }, [props])

  const execute = useCallback(
    () => buildLinkConfig(finalType.type, { ...finalType.props, router }),
    [finalType, router]
  )

  const reExecute = useCallback(
    (executeProps: Partial<Omit<LinkProps, 'router'>>) => {
      const resultProps = { ...props, ...executeProps }

      setStateProps(resultProps)

      return execute(resultProps)
    },
    [props, execute]
  )

  return [execute(), reExecute]
}
