import '../styles/color.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preload" href="/videos/wave.mp4" as="video" />
        <link rel="preload" href="/images/personal_photo.png" as="image" />
        <title>Thinh Dang Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
