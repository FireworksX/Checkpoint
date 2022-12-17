const userNameRegexp = /@([a-zA-Z|\S]+)/g
const hashtagsRegexp = /#([a-zA-Z\S]+)/g

export const useTextExtracts = (text = '') => {
  const userNames = text.match(userNameRegexp)
  const hashTags = text.match(hashtagsRegexp)

  return {
    userNames: userNames || [],
    hashTags: hashTags || []
  }
}
