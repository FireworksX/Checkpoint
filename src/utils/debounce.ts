export const debounce = (f, ms) => {
  let timer: any

  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      f.apply(this, args)
    }, ms)
  }
}
