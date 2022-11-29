import { random, randomArray } from '../utils/random'

export interface MockUser {
  verify: boolean
  username: string,
  firstName?: string,
  lastName?: string,
  bio?: string,
  avatar?: string,
}
export const currentUser = {
  firstName: 'Arthur',
  lastName: 'Abeltinsh',
  username: 'fireworks',
  bio: 'Saint-Peterburg, Russia | Founder of Checkpoint | Traveler | Front-end developer',
  avatar: 'https://avatars.githubusercontent.com/u/22668125?v=4',
  verify: true
}

const users = [
  currentUser,
  {
    firstName: 'FAB Uniquie Nation',
    username: 'uniquielyfab',
    bio: 'FL🚁LA🚁NY🚁HTX CEO of @blusgalore🛍 Book your Next Trip w/ Me(Link in Bio)🛫',
    avatar:
      'https://sun9-73.userapi.com/impg/vLGipLuW2F2hBJFS2euTN5nAtzH2yc-GqKDoVw/htpuU4MmP9U.jpg?size=1440x1800&quality=96&sign=4bd1eb9f93741b5340e34556f2b9de94&type=album'
  },
  {
    username: 'liqii.z',
    bio: 'Sometimes I post when I travel. Follow my pupper on @reggie.ddawg. He cute.',
    avatar:
      'https://sun9-10.userapi.com/s/v1/ig2/jjGxtVxsVV_Kf1dybCMpAxgiSU5VMFQa7VNUHLkO9m4iZ2tDF6s10XNsZL4XsUziVshy2j1P_lmH3k6wkmypPFPo.jpg?size=400x400&quality=95&crop=524,412,1124,1124&ava=1'
  },
  {
    firstName: 'Arzu & Ozan',
    username: 'thevoyagebuch',
    bio:
      'Our Travel Diary around the globe 🌎\n' +
      'Living in Switzerland🇨🇭\n' +
      '➡️ Tips & inspiration for your next Travels'
  }
]

const locations = [
  {
    type: 'place',
    name: 'meil.bali',
    location: 'Bali, Indonesia',
  },
  {
    type: 'place',
    name: 'The Coffee Club',
    location: 'Phuket, Thailand',
  }
]

const postSlugs = [
    'place',
    'hub',
    'coffeeclub',
    'meil',
    'io',
    'leningrad'
]

const postText = [
  'Was great meeting up with @annaferguson and Dave Bishop at the breakfast talk! 🍕#breakfast',
  "Told you the group chat was fun. Make fellow travel creator friends over in our @geneva home. Maybe it's where you'll meet your next travel squad? 🌎️",
  "Bonjour, une baguette s'il vous plait. 🥖😍\n" + 'Link in bio to find your Parisian pastry needs.',
  'Decisions, decisions, decisions... sorry to the die hard window seat lovers. ✈️'
]

const commentText = [
  'DUA x @puma styled soooo nice by @gabriellak_j for @britishvogue ~ proud moment for us @billywalsh 🫀🤞🏼',
  'Promote it on @perfect._.capture_ig',
  'B for a long flight and I don’t have to get up if someone in my row has to go to the bathroom 😆'
]

const getRandomDate = () => `202${random(1, 2)}-${random(10, 12)}-01 ${random(1, 23)}:${random(10, 59)}`
const getRandomBool = () => !!random(0, 1)
export const getRandomUser = () => randomArray(users)
const getRandomLocation = () => randomArray(locations)
const getRandomPostSlug = () => randomArray(postSlugs)
const getRandomComment = () => ({
  user: getRandomUser(),
  content: randomArray(commentText),
  date: getRandomDate()
})
export const getRandomList = <T>(count: number, callback: () => T): T[] => new Array(count).fill(null).map(callback)

export const getRandomPost = () => {
  const comments = getRandomList(random(3, 18), getRandomComment)

  return {
    slug: getRandomPostSlug(),
    user: getRandomUser(),
    content: randomArray(postText),
    date: getRandomDate(),
    target: getRandomLocation(),
    refer: getRandomBool()
        ? {
          user: getRandomUser()
        }
        : undefined,
    metrics: {
      connections: random(11, 120),
      likes: random(20, 120),
      comments: comments.length
    },
    comments,
    selfActions: {
      hasConnect: getRandomBool(),
      hasLike: getRandomBool()
    }
  }
}

