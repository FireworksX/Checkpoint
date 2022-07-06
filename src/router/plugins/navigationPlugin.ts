import { PluginFactory } from 'router5'
import isBrowser from 'src/utils/isBrowser'
import { noop } from 'src/utils/helpers'

declare module 'router5' {
  interface Router {
    historyBack(): void
    historyForward(): void
  }
}

export const navigationPlugin = (): PluginFactory => router => {
  const onStart = () => {
    if (router) {
      router.historyBack = isBrowser ? window.history.back.bind(window.history) : noop
      router.historyForward = isBrowser ? window.history.forward.bind(window.history) : noop
    }
  }

  return { onStart }
}
