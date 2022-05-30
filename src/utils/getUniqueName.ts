export const getUniqueName = (baseName: string) => {
  return process.env.NODE_ENV === 'development' ? `${baseName}_${Date.now()}` : baseName
}
