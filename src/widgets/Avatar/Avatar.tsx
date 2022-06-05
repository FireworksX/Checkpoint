import { FC } from 'react'
import * as Styled from './styles'
import CommonLogo, { CommonLogoProps, DEFAULT_LOGO_SIZE } from 'src/components/CommonLogo/CommonLogo'
import InitialsAvatar, { InitialsAvatarNumberGradients } from './components/InitialsAvatar/InitialsAvatar'

export interface AvatarProps {
  src?: string
  uniqueId?: string | number // По этому коду будет вычисляться цвет для заливки
  children?: string
  size?: CommonLogoProps['size']
  className?: string
}

const Avatar: FC<AvatarProps> = ({ className, src, uniqueId, children, size }) => {
  const gradientCode = uniqueId ? (((+uniqueId % 6) + 1) as InitialsAvatarNumberGradients) : 1

  return (
    <Styled.Root className={className}>
      {src ? (
        <CommonLogo src={src} size={size || DEFAULT_LOGO_SIZE} withRadius withBackground alt={children} />
      ) : (
        <InitialsAvatar gradientColor={gradientCode} size={size}>
          {children}
        </InitialsAvatar>
      )}
    </Styled.Root>
  )
}

export default Avatar
