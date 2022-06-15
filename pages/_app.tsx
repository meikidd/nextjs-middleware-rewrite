import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps, router }: AppProps) {
  console.log('MyApp:', router.pathname, JSON.stringify(router.query))
  return <Component {...pageProps} />
}

export default MyApp
