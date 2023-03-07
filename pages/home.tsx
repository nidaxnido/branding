import Head from 'next/head'
import Image from 'next/image'
import { Montserrat } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import Logos from '@/components/Logos'
import NavItem from '@/components/NavItem'
import Navbar from '@/components/Navbar'

const primary = Montserrat({weight:'500', subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Nida's Portofolio</title>
        <link rel="icon" href="/images/nida.svg" />
      </Head>
      <main className={primary.className}>
        <Flex>
          <Box w="50%" h="100vh" bg="nida.bg">
            <Logos />
            <Navbar pos="left" >
              <NavItem value="Resume" />
              <NavItem value="Projects" />
            </Navbar>
            <VStack w="70%" float="right" 
                    alignItems="left" fontSize="18px" 
                    mt="50px" padding="25px"
                    spacing="40px" >
              <Text color="nida.orange" fontSize="30px" lineHeight={1} fontWeight="bold">Hi, I'm</Text>
              <Text color="nida.green" fontSize="80px" lineHeight={1}>Ni'mal Mursyidah</Text>
              <Text color="nida.green">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, id velit vitae, dolorum, aut dolor ullam perferendis rem tenetur hic maiores accusantium quaerat nobis soluta numquam libero impedit. Pariatur, necessitatibus.</Text>
            </VStack>
          </Box>
          <Box w="50%" h="100vh" position="relative">
            <Navbar pos="right">
              <NavItem value="Blogs" />
              <NavItem value="Contact" />
            </Navbar>
            <Image src="/images/pp.jpg" alt="Ni'mal Mursyidah" fill />
          </Box>
          
          
        </Flex>
      </main>
      
    </>
  )
}
