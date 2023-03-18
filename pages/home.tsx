import Head from 'next/head'
// import Image from 'next/image'
import { Montserrat } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Box, Flex, Text, VStack, Image, Center } from '@chakra-ui/react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { useMediaQuery } from 'react-responsive'
import MobileView from '@/components/MobileView'
import { getProfileData } from '@/data/getProfileData'
import { personal } from '@/types'


const primary = Montserrat({weight:'500', subsets: ['latin'] })

export default function Home({data}:{data:personal}) {
  const isMobile = useMediaQuery({query: '(max-width:768px)'}) 
  console.log(data) 
  return (
    <>
     
      <main className={primary.className}>
        {
          isMobile? <MobileView data={data} />
          :
          <Flex bg="nida.bg" position="relative" >
            <Navbar theme="home" />
            <Box w="50%" h="100vh" bg="nida.green">
            {/* <Logos />   */}
            <Image src="/images/name-pink.svg" alt="logo" position="absolute" w="200px" />
            <Center w="100%" h="100%">
              <VStack w="80%" 
                        alignItems="left" fontSize="18px" 
                        mt="50px" padding="25px"
                        spacing="40px"
                        border="1px dashed" borderColor="nida.white" >
                  <Text color="nida.white" fontSize="20px" lineHeight={1} fontWeight="bold">Hi, I'm</Text>
                  <Text color="nida.white" fontSize="40px" mt="20px" lineHeight={1} >{data.fullname}</Text>
                  <Flex mt="10px !important"><Text color="nida.white" fontSize="18px" >You can call me </Text>
                  <Text ml="10px" color="nida.orange" textDecor="underline" fontSize="18px">{data.nickname}</Text>
                  </Flex>
                  <Text color="nida.white" fontSize="18px">{data.about}</Text>
                </VStack>
            </Center>
              
            </Box>
            <Box w="50%" h="100vh" position="relative" >
              <Image src="/images/pp.jpg" alt="Ni'mal Mursyidah" position="absolute" bottom="0" width="100%" />
            </Box>
            
            
          </Flex>
        }
        
      </main>
      
    </>
  )
}
export async function getStaticProps(){
  const data = await getProfileData();
  console.log(data)
  return {
    props:{
      data
    }
  }
}