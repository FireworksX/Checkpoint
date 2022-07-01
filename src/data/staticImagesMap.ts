import classicalBuilding from '../../public/assets/images/emoji/classical-building.png'
import manWalkingLightSkinTone from '../../public/assets/images/emoji/man-walking-light-skin-tone.png'
import potOfFood from '../../public/assets/images/emoji/pot-of-food.png'
import cameraWithFlash from '../../public/assets/images/emoji/camera-with-flash.png'
import beerMug from '../../public/assets/images/emoji/beer-mug.png'
import worldMap from '../../public/assets/images/emoji/world-map.png'
import sunset from '../../public/assets/images/emoji/sunset.png'
import church from '../../public/assets/images/emoji/church.png'
import automobile from '../../public/assets/images/emoji/automobile.png'
import wrench from '../../public/assets/images/emoji/wrench.png'
import stopwatch from '../../public/assets/images/emoji/stopwatch.png'
import personInLotusPosition from '../../public/assets/images/emoji/person-in-lotus-position.png'
import plus from '../../public/assets/images/emoji/plus.png'
import redHeart from '../../public/assets/images/emoji/red-heart.png'
import dottedLineFace from '../../public/assets/images/emoji/dotted-line-face.png'
import perseveringFace from '../../public/assets/images/emoji/persevering-face.png'
import slightlyFrowningFace from '../../public/assets/images/emoji/slightly-frowning-face.png'
import neutralFace from '../../public/assets/images/emoji/neutral-face.png'
import slightlySmilingFace from '../../public/assets/images/emoji/slightly-smiling-face.png'
import grinningFaceWithSmilingEyes from '../../public/assets/images/emoji/grinning-face-with-smiling-eyes.png'
import thumbsUp from '../../public/assets/images/emoji/thumbs-up.png'
import thumbsDown from '../../public/assets/images/emoji/thumbs-down.png'

export const staticImagesMap = {
  perseveringFace,
  slightlyFrowningFace,
  neutralFace,
  slightlySmilingFace,
  grinningFaceWithSmilingEyes,
  classicalBuilding,
  manWalkingLightSkinTone,
  potOfFood,
  cameraWithFlash,
  beerMug,
  worldMap,
  sunset,
  church,
  automobile,
  wrench,
  stopwatch,
  personInLotusPosition,
  plus,
  redHeart,
  dottedLineFace,
  thumbsUp,
  thumbsDown
} as const

type Key = keyof typeof staticImagesMap

export const staticImagesMapKebab = Object.keys(staticImagesMap).reduce<Record<string, string>>((acc, key) => {
  const lowerKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()

  acc[lowerKey] = staticImagesMap[key as Key]

  return acc
}, {})
