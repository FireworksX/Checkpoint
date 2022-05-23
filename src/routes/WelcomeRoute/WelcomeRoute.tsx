import { FC, useCallback, useState } from 'react'
import * as Styled from './styles'
import { ROUTE_NAMES } from 'src/router/constants'
import { route } from 'src/hoc/route'
import { useRouter } from 'src/hooks/useRouter'
import { buildName } from 'src/utils/buildName'
import WelcomeIntro from './widgets/WelcomeIntro/WelcomeIntro'
import WelcomeCode from './widgets/WelcomeCode/WelcomeCode'
import WelcomeRegister from './widgets/WelcomeRegister/WelcomeRegister'
import { withInValidateUser } from 'src/hoc/withInValidateUser'

interface WelcomeRouteProps {
  className?: string
}

const WelcomeRoute: FC<WelcomeRouteProps> = ({ className }) => {
  const { routerInstance } = useRouter()
  const [step, setStep] = useState(0)

  const onFinish = useCallback(() => {
    routerInstance.navigate(buildName(ROUTE_NAMES.home))
  }, [routerInstance])

  const viewsMap = [
    <WelcomeIntro onNext={() => setStep(1)} />,
    <WelcomeCode onBack={() => setStep(0)} onRegister={() => setStep(2)} onLogin={onFinish} />,
    <WelcomeRegister onRegister={onFinish} onBack={() => setStep(0)} />
  ]

  return <Styled.Root className={className}>{viewsMap[step]}</Styled.Root>
}

export default route(withInValidateUser(WelcomeRoute), ROUTE_NAMES.welcome)
