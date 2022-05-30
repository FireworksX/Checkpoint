export const getCacheKey = (url: string, data?: any) => {
  try {
    return `${url}:${JSON.stringify(data || {})}`
  } catch (e) {
    console.log(e)
    return url
  }
}
