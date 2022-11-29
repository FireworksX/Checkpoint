export const random = (min: number, max: number) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1)
  return Math.round(rand)
}

export const randomArray = <T = unknown>(data: T[]): T | undefined =>
  data.length > 0 ? data[random(0, data.length - 1)] : undefined
