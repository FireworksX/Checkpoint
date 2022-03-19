const fs = require('fs')
const path = require('path')

const fileControl = <T = any>(filePath: string) => {
  const getFileData = (): T => {
    return JSON.parse(fs.readFileSync(path.resolve(filePath)))
  }

  const updateFile = (data: T) => {
    return fs.writeFileSync(path.resolve(filePath), JSON.stringify(data))
  }

  return {
    getFileData,
    updateFile
  }
}

export default fileControl

module.exports = fileControl
