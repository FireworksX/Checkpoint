import { FC, useCallback, useState } from 'react'
import * as Styled from './styles'
import { ROUTE_NAMES } from 'src/router/constants'
import { route } from 'src/hoc/route'
import { useKeepNavigation } from 'src/hooks/keepNavigation'
import WelcomeIntro from './widgets/WelcomeIntro/WelcomeIntro'
import WelcomeRegister from './widgets/WelcomeRegister/WelcomeRegister'
import WelcomeAuth from './widgets/WelcomeAuth/WelcomeAuth'
import { UserInterface } from 'src/interfaces/UserInterface'
import { useRouter } from 'src/hooks/useRouter'
import { buildName } from 'src/utils/buildName'

interface WelcomeRouteProps {
  className?: string
}

const STEP_MAP = {
  initial: 0,
  login: 1,
  invite: 2
}

const WelcomeRoute: FC<WelcomeRouteProps> = ({ className }) => {
  useKeepNavigation(false)
  const [currentStep, setCurrentStep] = useState(0)
  const { routerInstance } = useRouter()

  const onSuccess = useCallback(() => {
    routerInstance.navigate(buildName(ROUTE_NAMES.home))
  }, [routerInstance])

  return (
    <Styled.Root className={className}>
      <Styled.Overlay />
      <Styled.OverlayTexts>
        <Styled.Title>Welcome to Placesato</Styled.Title>
        <Styled.Description>Find your destination</Styled.Description>
      </Styled.OverlayTexts>
      <Styled.Slider activeSlide={currentStep} allowTouchMove={false}>
        <WelcomeIntro
          onClickInvite={() => setCurrentStep(STEP_MAP.invite)}
          onClickLogin={() => setCurrentStep(STEP_MAP.login)}
        />
        <WelcomeAuth onSuccess={onSuccess} />
        <WelcomeRegister onSendInvite={() => setCurrentStep(STEP_MAP.initial)} />
      </Styled.Slider>
    </Styled.Root>
  )
}

export default route(WelcomeRoute, ROUTE_NAMES.welcome)
