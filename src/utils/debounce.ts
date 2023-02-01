export const debounce = (f: Callback<unknown>, ms: number) => {
  let timer: any

  return (...args: unknown[]) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      f.apply(this, args)
    }, ms)
  }
}
