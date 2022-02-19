import { FC } from 'react'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  title?: string
  name: SvgNames
  width?: number
  height?: number
  className?: string
  onClick?: () => void
}

const Icon: FC<IconProps> = ({ title, name, width = 20, height = 20, className, onClick, ...rest }) => {
  return (
    <svg
      key={name}
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width={width}
      height={height}
      className={className}
      onClick={onClick}
      {...rest}
    >
      {title && <title>{title}</title>}
      <use xlinkHref={`#${name}`} fill='currentColor' />
    </svg>
  )
}

export default Icon
