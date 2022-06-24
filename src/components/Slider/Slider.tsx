import { FC } from 'react'
import ReactSlider from 'react-slider'
import * as Styled from './styles'

type ValueType = number | [number, number]

interface SliderProps<T = ValueType> {
  value: T
  className?: string
  onChange?: (value: this['value'], index: number) => void
}

const Slider: FC<SliderProps> = ({ className, value = [0, 100], onChange }) => {
  return (
    <Styled.Root className={className} isRange={Array.isArray(value)}>
      <ReactSlider
        value={value}
        thumbClassName='slider-thumb'
        trackClassName='slider-track'
        minDistance={1}
        renderThumb={props => <div {...props} />}
        onChange={(value, index) => {
          if (onChange) {
            if (Array.isArray(value)) {
              onChange(value[0], index)
            }
            onChange(value, index)
          }
        }}
      />
    </Styled.Root>
  )
}

export default Slider
