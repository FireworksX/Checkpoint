import { random, randomArray } from '../utils/random'

export interface MockUser {
  verify: boolean
  userName: string
  firstName?: string
  lastName?: string
  bio?: string
  avatar?: string
}
export const currentUser = {
  firstName: 'Arthur',
  lastName: 'Abeltinsh',
  userName: 'fireworks',
  bio: 'Saint-Peterburg, Russia | Founder of Checkpoint | Traveler | Front-end developer',
  avatar: 'https://avatars.githubusercontent.com/u/22668125?v=4',
  verify: true
}

const users = [
  currentUser,
  {
    firstName: 'FAB Uniquie Nation',
    userName: 'uniquielyfab',
    bio: 'FL🚁LA🚁NY🚁HTX CEO of @blusgalore🛍 Book your Next Trip w/ Me(Link in Bio)🛫',
    avatar:
      'https://sun9-73.userapi.com/impg/vLGipLuW2F2hBJFS2euTN5nAtzH2yc-GqKDoVw/htpuU4MmP9U.jpg?size=1440x1800&quality=96&sign=4bd1eb9f93741b5340e34556f2b9de94&type=album'
  },
  {
    userName: 'liqii.z',
    bio: 'Sometimes I post when I travel. Follow my pupper on @reggie.ddawg. He cute.',
    avatar:
      'https://sun9-10.userapi.com/s/v1/ig2/jjGxtVxsVV_Kf1dybCMpAxgiSU5VMFQa7VNUHLkO9m4iZ2tDF6s10XNsZL4XsUziVshy2j1P_lmH3k6wkmypPFPo.jpg?size=400x400&quality=95&crop=524,412,1124,1124&ava=1'
  },
  {
    firstName: 'Arzu & Ozan',
    userName: 'thevoyagebuch',
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
    slug: 'meil.bali',
    location: 'Bali, Indonesia',
    logo: 'https://sun9-84.userapi.com/impg/5fEM96FZsza6mVzbBaxwwWNvUaTVol6RzsoyDQ/zJnJ0aBc3WU.jpg?size=100x100&quality=95&sign=7372f3f7b0748b9de6466e83e0b07477&type=album'
  },
  {
    type: 'place',
    name: 'The Coffee Club',
    slug: 'the_coffee_club',
    location: 'Phuket, Thailand',
    logo: 'https://sun9-38.userapi.com/impg/jPsYTlllNXXSDN-CjXnNZ9PvvLadng9lbXHbhQ/RGx6_wIirAE.jpg?size=100x100&quality=95&sign=a45f001cdfc68dd2801fbd06d11fca8c&type=album'
  },
  {
    type: 'place',
    name: 'Rebeir Cafe',
    slug: 'rebeir_cafe',
    location: 'Bangkok, Thailand',
    logo: 'https://sun9-49.userapi.com/impg/SoGUD6W2Bn3Ix6iz8wBB-klidlxdaxOHhcmssQ/f-xE6ob2FRk.jpg?size=100x100&quality=95&sign=7780d71569d9529c90a6d3f544e74a8a&type=album'
  }
]

const postSlugs = ['place', 'hub', 'coffeeclub', 'meil', 'io', 'leningrad']

const postText = [
  'Was great meeting up with @annaferguson and Dave Bishop at the breakfast talk! 🍕#breakfast',
  "Told you the group chat was fun. Make fellow travel creator friends over in our @geneva home. Maybe it's where you'll meet your next travel squad? 🌎️",
  "Bonjour, une baguette s'il vous plait. 🥖😍\n" + 'Link in bio to find your Parisian pastry needs.',
  'Decisions, decisions, decisions... sorry to the die hard window seat lovers. ✈️',
  'Trip to Tulum sounds great - count us in. 🙋🙋‍♀️ Be like @missnay_xo and use Travis to find dreamy things to do on your next destination.'
]

const commentText = [
  'DUA x @puma styled soooo nice by @gabriellak_j for @britishvogue ~ proud moment for us @billywalsh 🫀🤞🏼',
  'Promote it on @perfect._.capture_ig',
  'B for a long flight and I don’t have to get up if someone in my row has to go to the bathroom 😆'
]

const getRandomDate = () => `202${random(1, 2)}-${random(10, 12)}-01 ${random(1, 23)}:${random(10, 59)}`
const getRandomBool = () => !!random(0, 1)
export const getRandomUser = () => randomArray(users)
export const getRandomLocation = () => randomArray(locations)
const getRandomPostSlug = () => randomArray(postSlugs)
export const getRandomPostText = () => randomArray(postText)
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
