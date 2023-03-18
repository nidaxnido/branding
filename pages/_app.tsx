import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Head from 'next/head'
import { Montserrat } from '@next/font/google'
const primary = Montserrat({weight:'500', subsets: ['latin'] })
export default function App({ Component, pageProps }: AppProps) {

  
  const theme = extendTheme({
    colors:{
      nida:{
        bg:"#f0f0f0",
        green:"#478778",
        white:"#eeebe7",
        orange:"#ff8e8e",

      }
    },breakpoints:{
      sm:"376px",
      md:"426px",
      lg:"769px",
      xl:"1025px",

    }
  })
  return <ChakraProvider theme={theme}>
     <Head>
        <title>Nida's Portofolio</title>
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <main className={primary.className}>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
}
