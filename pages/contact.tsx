import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { Box, Flex,Heading,Image, VStack,Text, UnorderedList, ListItem } from "@chakra-ui/react";
import Link from "next/link";

export default function Contact(){
    return <Box w="100vw" h="100vh" bg="nida.bg" color="nida.green">
        <Header />
        <VStack mx="auto"  fontSize={{base:"14px", sm:"16px", md:"20px"}} w="90%" maxW="600px">
            <Text fontSize="50px" fontWeight="bold">Contact Me</Text>
            <Flex>
                <Text>Let's get connected via email 
                <Text as="span" textDecor="underline" pl="8px"> me@nidanido.com</Text>
                <Text as="span"> or hit me up on socials below:</Text></Text>
            </Flex>
            <UnorderedList w="90%">
                <ListItem>Instagram : 
                    <Link href="https://www.instagram.com/nida.nido"><Text as="span" _hover={{color:"nida.orange"}} textDecor="underline">(https://www.instagram.com/nida.nido)</Text></Link>
                </ListItem>
                <ListItem>Twitter : 
                    <Link href="https://twitter.com/nidahoshi"><Text as="span" _hover={{color:"nida.orange"}} textDecor="underline">(https://twitter.com/nidahoshi)</Text></Link>
                </ListItem>
                <ListItem>LinkedIn : 
                    <Link href="https://www.linkedin.com/in/nidanido/"><Text as="span" _hover={{color:"nida.orange"}} textDecor="underline">(https://www.linkedin.com/in/nidanido/)</Text></Link>
                </ListItem>
                <ListItem>Github : 
                    <Link href="https://www.linkedin.com/in/nidanido/"><Text as="span" _hover={{color:"nida.orange"}} textDecor="underline">(https://www.linkedin.com/in/nidanido/)</Text></Link>
                </ListItem>

            </UnorderedList>
        </VStack>
        </Box>
}