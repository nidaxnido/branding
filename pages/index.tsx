import Head from 'next/head'
// import Image from 'next/image'

import styles from '@/styles/Home.module.css'
import { Box, Flex, Text, VStack, Image, Center } from '@chakra-ui/react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { useMediaQuery } from 'react-responsive'
import MobileView from '@/components/MobileView'
import { getProfileData } from '@/data/getProfileData'
import { personal } from '@/types'
import Header from '@/components/Header'




export default function Home({data}:{data:personal}) {
  const isMobile = useMediaQuery({query: '(max-width:768px)'}) 
  // console.log(data) 
  return (
    <>
     
      
        {
          isMobile? <MobileView data={data} />
          :
         <Box w="100vw" h="100vh" bg="nida.bg">
          <Header />
           <Flex bg="nida.bg" position="relative" height="calc(100% - 120px)" >
            
            <Flex w="50%" h="100%" bg="nida.bg" color="nida.green" 
            justifyContent="center" alignItems="center">
            
              <VStack w="80%" 
                        alignItems="left" fontSize="18px" 
                         padding="25px"
                        spacing="40px"
                        border="1px dashed" borderColor="nida.green" >
                  <Text  fontSize="20px" lineHeight={1} fontWeight="bold">Hi, I'm</Text>
                  <Text  fontSize="40px" mt="20px" lineHeight={1} >{data.fullname}</Text>
                  <Flex mt="10px !important"><Text  fontSize="18px" >You can call me </Text>
                  <Text ml="10px" color="nida.orange" textDecor="underline" fontSize="18px">{data.nickname}</Text>
                  </Flex>
                  <Text  fontSize="18px">{data.about}</Text>
                </VStack>
            
              
            </Flex>
            <Flex w="50%" h="100%" position="relative" justifyContent="right" >
              <Image src="/images/pp2.png" alt="Ni'mal Mursyidah" position="absolute" bottom="0" left="0" h="auto" w="100%" maxH="780px" maxW="780px" />
            </Flex>
            
            
          </Flex>

         </Box>
        }
        
      
      
    </>
  )
}
export async function getStaticProps(){
  const data = await getProfileData();
  // console.log(data)
  return {
    props:{
      data
    }
  }
}