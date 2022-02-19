process.env.DOCUMENTS = ((process.argv.join(' ').match(/(?:--documents|-D) ([^\s]+)/) || [])[1] || '').trim()

if (!process.env.DOCUMENTS) {
  console.log('Provide path to graphql file')
  process.exit(1)
}
