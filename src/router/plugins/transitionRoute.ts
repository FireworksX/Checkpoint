import { Router, State } from 'router5'

declare module 'router5' {
  interface Router {
    transitionState?: State
  }
}

export const transitionRoutePlugin = (router: Router) => {

  const setTranstionState = (state: State | undefined) => {
    router.transitionState = state
  }

  return {
    onTransitionStart: toState => setTranstionState(toState),
    onTransitionSuccess: () => setTranstionState(undefined),
    onTransitionCancel: () => setTranstionState(undefined),
    onTransitionError: () => setTranstionState(undefined),
  }
}
