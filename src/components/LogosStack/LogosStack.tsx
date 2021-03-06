import React from 'react'
import * as Styled from './styles'
import CommonLogo, { CommonLogoSize } from 'src/components/CommonLogo/CommonLogo'

export interface LogoType {
  src: string
}

interface LogosStackProps {
  logos: LogoType[]
  size?: CommonLogoSize
  className?: string
  logoClassName?: string
  sportSlug?: string
  direction?: 'left' | 'right'
  withPadding?: boolean
  isStuck?: boolean
}

const LogosStack: React.FunctionComponent<LogosStackProps> = ({
  direction = 'left',
  size = 20,
  logos,
  withPadding = true,
  className,
  logoClassName,
  isStuck = false
}) => {
  return (
    logos && (
      <Styled.Root className={className} isReverse={direction === 'right'}>
        {logos.map((logo, index) => (
          <Styled.Logo
            key={`${index}_${logo.src}`}
            index={logos.length - index}
            withPadding={withPadding}
            isReverse={direction === 'right'}
            isStuck={isStuck}
          >
            <CommonLogo className={logoClassName} src={logo.src} size={size} />
          </Styled.Logo>
        ))}
      </Styled.Root>
    )
  )
}

export default LogosStack
