const fs = require('fs')
const path = require('path')

export const fileControl = <T = any>(filePath: string) => {
  const getFileData = (): T => {
    return JSON.parse(fs.readFileSync(path.resolve(filePath)))
  }

  const updateFile = () => {
    return fs.writeFileSync(path.resolve(filePath))
  }

  return {
    getFileData,
    updateFile
  }
}
