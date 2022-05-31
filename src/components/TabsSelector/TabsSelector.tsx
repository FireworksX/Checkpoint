import React, { createRef, FC, useCallback, useEffect, useState } from 'react'
import * as Styled from './styles'
import { LinkNavigationProps } from 'src/widgets/Link/linkConfig'

export interface TabsSelectorItem {
  name: string
  label: string
  appLinkProps?: LinkNavigationProps
}

interface TabsSelectorProps {
  items: TabsSelectorItem[]
  value: string // находит из массива items по имени
  onChange?: (item: TabsSelectorItem) => void
  className?: string
}

const TabsSelector: FC<TabsSelectorProps> = ({ className, items, value, onChange }) => {
  const rootRef = createRef<HTMLDivElement>()
  const [switcherWidth, setSwitcherWidth] = useState(0)
  const [switcherOffset, setSwitcherOffset] = useState(0)

  const activeIndex = items.findIndex(({ name }) => name === value)

  const update = useCallback(() => {
    const containerWidth = rootRef.current?.getBoundingClientRect().width

    if (containerWidth && items.length > 0) {
      const switcherWidth = containerWidth / items.length
      setSwitcherWidth(switcherWidth)
      setSwitcherOffset(switcherWidth * activeIndex)
    }
  }, [items, rootRef, activeIndex])

  useEffect(() => {
    const debounceUpdate = update //TODO debounce(update, 300)
    window.addEventListener('resize', debounceUpdate)

    return () => window.removeEventListener('resize', debounceUpdate)
  }, [update])

  useEffect(() => {
    update()
  }, [items, rootRef, activeIndex, update])

  return (
    <Styled.Root ref={rootRef} className={className}>
      <Styled.Switcher switcherWidth={switcherWidth} switcherOffset={switcherOffset} />
      {items.map(el => (
        <Styled.Cell {...el.appLinkProps} key={el.name} onClick={() => onChange && onChange(el)}>
          {el.label}
        </Styled.Cell>
      ))}
    </Styled.Root>
  )
}

export default TabsSelector
