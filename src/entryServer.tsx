import ReactDOMServer from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import { App } from './App'
import { configureRouter } from './router/configureRouter'
import { createApiClients } from './utils/createApiClients'

export function render(url: string) {
  const router = configureRouter()
  router.start(url)

  const { urqlClient } = createApiClients('')

  const Application = <App router={router} urqlClient={urqlClient} />

  const sheet = new ServerStyleSheet()
  const styledChunks = sheet.collectStyles(Application)

  const appHtml = ReactDOMServer.renderToString(styledChunks)

  return {
    appHtml,
    stylesTags: sheet.getStyleTags()
  }
}
