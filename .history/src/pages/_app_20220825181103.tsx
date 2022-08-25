import type { AppProps } from 'next/app'
import { Characters } from '../components/characters'

import { GlobalStyle } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Characters/
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
