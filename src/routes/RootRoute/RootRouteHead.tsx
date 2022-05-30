import { Helmet } from 'react-helmet-async'

export const RootRouteHead = () => {
  return (
    <Helmet>
      <html lang='ru' />
      <meta charSet='utf-8' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta property='og:type' content='website' />
      <meta name='theme-color' content='#ffffff' />
      <title>CheckPoint</title>
    </Helmet>
  )
}
