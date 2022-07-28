import { MediaFile } from 'src/interfaces/MediaFile'

export const buildMediaFilePath = (file: MediaFile) => {

  return `${file.path}/${file.fileName}`
}
