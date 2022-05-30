import { FC, useCallback, useState } from 'react'
import * as Styled from './styles'
import { ROUTE_NAMES } from 'src/router/constants'
import { route } from 'src/hoc/route'
import { useRouter } from 'src/hooks/useRouter'
import WelcomeIntro from './widgets/WelcomeIntro/WelcomeIntro'
import WelcomeCode from './widgets/WelcomeCode/WelcomeCode'
import WelcomeRegister from './widgets/WelcomeRegister/WelcomeRegister'
import { useLinkConfig } from 'src/widgets/Link/hooks/useLinkConfig'

interface WelcomeRouteProps {
  className?: string
}

const WelcomeRoute: FC<WelcomeRouteProps> = ({ className }) => {
  const { routerInstance } = useRouter()
  const [step, setStep] = useState(0)
  const cityInfoLink = useLinkConfig('cityList')

  const onFinish = useCallback(() => {
    routerInstance.navigate(cityInfoLink.link.name)
  }, [routerInstance])

  const viewsMap = [
    <WelcomeIntro key='welcomeIntroView' onNext={() => setStep(1)} />,
    <WelcomeCode key='welcomeCodeView' onBack={() => setStep(0)} onRegister={() => setStep(2)} onLogin={onFinish} />,
    <WelcomeRegister key='welcomeRegisterView' onRegister={onFinish} onBack={() => setStep(0)} />
  ]

  return <Styled.Root className={className}>{viewsMap[step]}</Styled.Root>
}

export default route(WelcomeRoute, ROUTE_NAMES.welcome)
