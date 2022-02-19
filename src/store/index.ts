import React, { useState, useCallback, Context, FC } from 'react'
import constate from 'constate'
import { useUIStore } from './useUIStore'
import { useMapStore } from './useMapStore'

const useStoreInternal = () => {
  const uiStore = useUIStore()
  const mapStore = useMapStore()

  return { uiStore, mapStore }
}

type StoreType = ReturnType<typeof useStoreInternal>

const { StoreProvider, useStore } = (function createExport(): {
  StoreProvider: FC<unknown>
  useStore: {
    [P in keyof StoreType]: () => StoreType[P]
  }
} {
  const [StoreProvider, useUIStore, useMapStore] = constate(
    useStoreInternal,
    v => v.uiStore,
    v => v.mapStore
  )

  return {
    StoreProvider,
    useStore: {
      uiStore: useUIStore,
      mapStore: useMapStore
    }
  }
})()

export { StoreProvider, useStore }
