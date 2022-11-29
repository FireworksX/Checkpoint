const userNameRegexp = /@([a-zA-Z]{2,})/g
const hashtagsRegexp = /#([a-zA-Z]{2,})/g

export const useTextExtracts = (text = '') => {
  const userNames = text.match(userNameRegexp)
  const hashTags = text.match(hashtagsRegexp)

  return {
    userNames: userNames || [],
    hashTags: hashTags || []
  }
}
