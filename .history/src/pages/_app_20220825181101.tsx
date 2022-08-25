import type { AppProps } from 'next/app'

import { GlobalStyle } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <charact
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
