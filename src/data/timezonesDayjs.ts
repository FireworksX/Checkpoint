export const timezoneData = [
  { name: 'GMT-12', offset: 720 },
  { name: 'GMT-11', offset: 660 },
  { name: 'GMT-10', offset: 600 },
  { name: 'GMT-9', offset: 540 },
  { name: 'GMT-8', offset: 480 },
  { name: 'GMT-7', offset: 420 },
  { name: 'GMT-6', offset: 360 },
  { name: 'GMT-5', offset: 300 },
  { name: 'GMT-4', offset: 240 },
  { name: 'GMT-3:30', offset: 210 },
  { name: 'GMT-3', offset: 180 },
  { name: 'GMT-2', offset: 120 },
  { name: 'GMT-1', offset: 60 },
  { name: 'GMT+0', offset: 0 },
  { name: 'GMT+1', offset: -60 },
  { name: 'GMT+2', offset: -120 },
  { name: 'GMT+3', offset: -180 },
  { name: 'GMT+3:30', offset: -210 },
  { name: 'GMT+4', offset: -240 },
  { name: 'GMT+4:30', offset: -270 },
  { name: 'GMT+5', offset: -300 },
  { name: 'GMT+5:30', offset: -330 },
  { name: 'GMT+5:45', offset: -345 },
  { name: 'GMT+6', offset: -360 },
  { name: 'GMT+7', offset: -420 },
  { name: 'GMT+8', offset: -480 },
  { name: 'GMT+9', offset: -540 },
  { name: 'GMT+9:30', offset: -570 },
  { name: 'GMT+10', offset: -600 },
  { name: 'GMT+11', offset: -660 },
  { name: 'GMT+12', offset: -720 }
] as const

export type TimezoneName = typeof timezoneData[any]['name']

export const timezoneOffsets = timezoneData.reduce((acc, item) => {
  acc[item.name] = item.offset
  return acc
}, {} as { [P in TimezoneName]: number })

export const timezoneNames = timezoneData.map(({ name }) => name)
