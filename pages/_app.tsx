import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
export default function App({ Component, pageProps }: AppProps) {

  const theme = extendTheme({
    colors:{
      nida:{
        bg:"#f0f0f0",
        green:"#478778",
        white:"#eeebe7",
        orange:"#ff8e8e",

      }
    }
  })
  return <ChakraProvider theme={theme}>
    <Component {...pageProps} />
    </ChakraProvider>
}
