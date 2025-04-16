import '../styles/globals.css' // correto para projetos fora de /src
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
