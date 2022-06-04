export const buildFullName = (...names: (string | undefined)[]) => names.filter(Boolean).join(' ')
