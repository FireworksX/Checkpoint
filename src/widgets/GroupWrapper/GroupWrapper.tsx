import React from 'react'
import * as Styled from './styles'
import { CommonLogoProps } from 'src/components/CommonLogo/CommonLogo'

interface GroupWrapperProps {
  title: string
  description?: string
  logo?: CommonLogoProps['src']
  className?: string
}

const GroupWrapper: React.FC<GroupWrapperProps> = ({ className, logo, title, description, children }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Wrapper>
        <Styled.Touch>
          <Styled.Logo src={logo} size={44} />
          <div>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Description>{description}</Styled.Description>
          </div>
          <Styled.Arrow />
        </Styled.Touch>
      </Styled.Wrapper>

      {children && <Styled.Body>{children}</Styled.Body>}
    </Styled.Root>
  )
}

export default GroupWrapper
