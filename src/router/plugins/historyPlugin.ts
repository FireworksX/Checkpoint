import { PluginFactory } from 'router5'
import { State } from 'router5/dist/types/base'

declare module 'router5' {
  interface Router {
    history: State[]
  }
}

export const historyPlugin = (): PluginFactory => router => {
  const onStart = () => {
    let history: State[] = []

    if (router) {
      router.history = history

      router.subscribe(({ route }) => {
        const findIndex = history.findIndex(({ path }) => path === route.path)

        if (findIndex === -1) {
          history.push(route)
        } else {
          history = history.slice(0, findIndex)
        }
      })
    }
  }

  return { onStart }
}
