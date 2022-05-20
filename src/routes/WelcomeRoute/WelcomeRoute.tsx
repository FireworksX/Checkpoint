import { FC, useCallback, useState } from 'react'
import * as Styled from './styles'
import { ROUTE_NAMES } from 'src/router/constants'
import { route } from 'src/hoc/route'
import { useRouter } from 'src/hooks/useRouter'
import { buildName } from 'src/utils/buildName'
import WelcomeIntro from './widgets/WelcomeIntro/WelcomeIntro'
import WelcomeCode from './widgets/WelcomeCode/WelcomeCode'
import WelcomeRegister from './widgets/WelcomeRegister/WelcomeRegister'

interface WelcomeRouteProps {
  className?: string
}

const WelcomeRoute: FC<WelcomeRouteProps> = ({ className }) => {
  const { routerInstance } = useRouter()
  const [phone, setPhone] = useState('')
  const [phoneCode, setPhoneCode] = useState('')
  const [step, setStep] = useState(2)

  const onSuccess = useCallback(() => {
    routerInstance.navigate(buildName(ROUTE_NAMES.home))
  }, [routerInstance])

  const viewsMap = [
    <WelcomeIntro
      phone={phone}
      onSubmit={({ phone, phoneCode }) => {
        setPhone(phone)
        setPhoneCode(phoneCode)
        setStep(1)
      }}
    />,
    <WelcomeCode
      phone={phone}
      phoneCode={phoneCode}
      onSubmit={() => setStep(2)}
      onBack={() => setStep(0)}
    />,
    <WelcomeRegister onBack={() => setStep(0)} />
  ]

  return <Styled.Root className={className}>{viewsMap[step]}</Styled.Root>
}

export default route(WelcomeRoute, ROUTE_NAMES.welcome)
