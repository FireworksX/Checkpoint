import { FC, useCallback, useState } from 'react'
import * as Styled from './styles'
import { ROUTE_NAMES } from 'src/router/constants'
import { route } from 'src/hoc/route'
import { useRouter } from 'src/hooks/useRouter'
import { buildName } from 'src/utils/buildName'
import PageHeader from '../../widgets/PageHeader/PageHeader'
import WelcomeIntro from "./widgets/WelcomeIntro/WelcomeIntro";

interface WelcomeRouteProps {
  className?: string
}


const WelcomeRoute: FC<WelcomeRouteProps> = ({ className }) => {
  const { routerInstance } = useRouter()
  const [step, setStep] = useState(0)

  const onSuccess = useCallback(() => {
    routerInstance.navigate(buildName(ROUTE_NAMES.home))
  }, [routerInstance])

  const viewsMap = [<WelcomeIntro/>]


  return (
    <Styled.Root className={className}>
      {viewsMap[step]}
    </Styled.Root>
  )
}

export default route(WelcomeRoute, ROUTE_NAMES.welcome)
