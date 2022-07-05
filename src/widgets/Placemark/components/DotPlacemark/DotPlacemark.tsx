import { FC } from 'react'
import * as Styled from './styles'

interface DotPlacemarkProps {
  className?: string
}

const DotPlacemark: FC<DotPlacemarkProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' xmlnsXlink='http://www.w3.org/1999/xlink'>
        <defs>
          <path id='2ccc4e9f8fe2f8acc9e7eab53f797f56__b' d='M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14z'/>
          <filter
            id='2ccc4e9f8fe2f8acc9e7eab53f797f56__a'
            width='150%'
            height='150%'
            x='-25%'
            y='-17.9%'
            filterUnits='objectBoundingBox'
          >
            <feOffset dy='1' in='SourceAlpha' result='shadowOffsetOuter1'/>
            <feGaussianBlur stdDeviation='1' in='shadowOffsetOuter1' result='shadowBlurOuter1'/>
            <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0' in='shadowBlurOuter1'/>
          </filter>
        </defs>
        <g fill='none' fillRule='evenodd' transform='translate(4 4)'>
          <use
            fill='#000'
            filter='url(#2ccc4e9f8fe2f8acc9e7eab53f797f56__a)'
            xlinkHref='#2ccc4e9f8fe2f8acc9e7eab53f797f56__b'
          />
          <use fill='#FFF' xlinkHref='#2ccc4e9f8fe2f8acc9e7eab53f797f56__b'/>
          <path d='M7 12A5 5 0 1 1 7 2a5 5 0 0 1 0 10z' fill='currentColor'/>
          <path fill='#000' className='tint' d='M7 12A5 5 0 1 1 7 2a5 5 0 0 1 0 10z'/>
        </g>
      </svg>
    </Styled.Root>
  )
}

export default DotPlacemark
