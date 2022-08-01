import { FC } from 'react'
import * as Styled from './styles'
import { AvatarProps } from '../../Avatar'
import { DEFAULT_LOGO_SIZE } from 'src/components/CommonLogo/CommonLogo'

/**
 * Градиенты, которые можно использовать в алгоритме поиска градиентов по числовому идентификатору пользователя.
 * @example user.id % 6 + 1
 */
export type InitialsAvatarNumberGradients = 1 | 2 | 3 | 4 | 5 | 6
export type InitialsAvatarTextGradients = 'red' | 'pink' | 'orange' | 'yellow' | 'green' | 'l-blue' | 'blue' | 'violet'

export interface InitialsAvatarProps extends Pick<AvatarProps, 'size'> {
  className?: string
  gradientColor?: InitialsAvatarNumberGradients | InitialsAvatarTextGradients
}

const COLORS_NUMBER_TO_TEXT_MAP: Record<InitialsAvatarNumberGradients, InitialsAvatarTextGradients> = {
  1: 'red',
  2: 'orange',
  3: 'yellow',
  4: 'green',
  5: 'l-blue',
  6: 'violet'
}

const InitialsAvatar: FC<InitialsAvatarProps> = ({ className, gradientColor, size, children }) => {
  const gradientName =
    typeof gradientColor === 'string' ? gradientColor : gradientColor && COLORS_NUMBER_TO_TEXT_MAP[gradientColor]

  return (
    <Styled.Root className={className} size={size || DEFAULT_LOGO_SIZE} gradientName={gradientName || 'red'}>
      <Styled.Body>{children}</Styled.Body>
    </Styled.Root>
  )
}

export default InitialsAvatar
