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
  const [email, setEmail] = useState<string | undefined>()
  const cityInfoLink = useLinkConfig('map')

  const onFinish = useCallback(() => {
    routerInstance.navigate(cityInfoLink.link.name)
  }, [routerInstance, cityInfoLink])

  const viewsMap = [
    <WelcomeIntro
      key='welcomeIntroView'
      email={email}
      onNext={email => {
        setEmail(email)
        setStep(1)
      }}
    />,
    <WelcomeCode
      key='welcomeCodeView'
      email={email}
      onBack={() => setStep(0)}
      onRegister={() => setStep(2)}
      onLogin={onFinish}
    />,
    <WelcomeRegister key='welcomeRegisterView' email={email} onRegister={onFinish} onBack={() => setStep(0)} />
  ]

  return <Styled.Root className={className}>{viewsMap[step]}</Styled.Root>
}

export default route(WelcomeRoute, ROUTE_NAMES.welcome)
