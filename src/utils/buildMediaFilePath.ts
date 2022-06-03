import { MediaFile } from 'src/interfaces/MediaFile'

export const buildMediaFilePath = (file: MediaFile) => {
  const staticPath = import.meta.env.VITE_STATIC_PATH?.toString() || ''
  const staticFolder = import.meta.env.VITE_STATIC_FOLDER?.toString() || ''

  return `${staticPath}${file?.path.split(staticFolder)[1]}/${file.fileName}`
}
