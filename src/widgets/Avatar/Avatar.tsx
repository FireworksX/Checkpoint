import { FC, useMemo } from 'react'
import * as Styled from './styles'
import CommonLogo, { CommonLogoProps, DEFAULT_LOGO_SIZE } from 'src/components/CommonLogo/CommonLogo'
import InitialsAvatar, { InitialsAvatarNumberGradients } from './components/InitialsAvatar/InitialsAvatar'
import Icon from '../../components/Icon/Icon'

export interface AvatarProps {
  mode?: 'circle' | 'square'
  src?: string
  uniqueId?: string // По этому коду будет вычисляться цвет для заливки
  children?: string
  size?: CommonLogoProps['size']
  className?: string
  onReset?: Callback
}

const Avatar: FC<AvatarProps> = ({ className, src, mode = 'circle', uniqueId, children, size, onReset }) => {
  const numbers = useMemo(
    () =>
      (uniqueId || '')
        .split('')
        .map(char => char.charCodeAt(0))
        .reduce((acc, val) => acc + val, 0),
    [uniqueId]
  )

  const gradientCode = uniqueId ? (((numbers % 6) + 1) as InitialsAvatarNumberGradients) : 1

  return (
    <Styled.Root className={className}>
      {src ? (
        <>
          {onReset && (
            <Styled.Reset onClick={onReset}>
              <Icon name='close-circle' />
            </Styled.Reset>
          )}
          <CommonLogo src={src} size={size || DEFAULT_LOGO_SIZE} withRadius withBackground withBorder alt={children} />
        </>
      ) : (
        <InitialsAvatar gradientColor={gradientCode} size={size}>
          {children}
        </InitialsAvatar>
      )}
    </Styled.Root>
  )
}

export default Avatar
