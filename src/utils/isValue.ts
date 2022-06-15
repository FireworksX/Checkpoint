export const isEmptyValue = (value: any): value is null | undefined => !value && (value === null || value === undefined)
export const isValue = <T>(value: T): value is Exclude<T, null | undefined> => !isEmptyValue(value)
