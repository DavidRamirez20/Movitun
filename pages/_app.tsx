import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <> 
      <Component {...pageProps} />
      <Script src="https://kit.fontawesome.com/6396d12f7f.js" crossOrigin="anonymous"></Script>
    </> 
  )
}

export default MyApp
