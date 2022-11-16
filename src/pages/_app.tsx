import { SessionProvider as AuthProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <AuthProvider session={session}>
      <Component {...pageProps} />
    </AuthProvider>
  )
}