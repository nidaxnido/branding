import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { getProfileData } from "@/data/getProfileData";
import { personal, project } from "@/types";
import { Box, Flex,Heading,Image, VStack,Text, UnorderedList, ListItem, StackDivider, Divider, Button, Link } from "@chakra-ui/react";
import React from "react";
import Pdf from 'react-to-pdf'

const Title=({judul}:{judul:string}) =>{
  return <Text bg="nida.green" color="nida.bg" px="10px" py="5px" borderRadius="3px" mt="10px !important" mb="5px !important">{judul.toUpperCase()}</Text>
}

export default function Contact({data}:{data:personal}){
    // console.log(data)
    const ref = React.createRef<HTMLDivElement>()
    return <Box w="100vw" h="100%" minH="100vh" bg="nida.bg" color="nida.green" fontSize="14px" pb="50px">
        <Header />
        
        {/* {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>} */}
      
        <Flex alignItems="flex-end" justifyContent="end" w="90%" maxW="800px" mx="auto">
          <Pdf targetRef={ref} filename="resume-nida.pdf">
            {({ toPdf }:{toPdf:()=>void}) => <Button color="black" textDecor="underline" onClick={()=>{toPdf(); console.log("cekcek")}}>Download Resume</Button>}
          </Pdf>
        </Flex>
        {/* <div ref={ref}> */}
          
          <VStack ref={ref} mx="auto"  fontSize="14px" w="90%"
                  bg="white" maxW="800px" borderTopLeftRadius="10px"
                  >
              <Flex w="100%" justifyContent="space-between" 
                borderTopLeftRadius="10px" borderTopRightRadius="10px"
              >
                <Image src="/images/pp-green.png" alt="profile picture" w="200px" h="200px" borderTopLeftRadius="10px" />
                <Flex flexDir="column" w="calc(100% - 205px)" bg="nida.green" color="nida.bg" p="30px" borderTopRightRadius="10px" >
                  <Text fontSize="40px" fontWeight="bold">{data.fullname}</Text>
                  <Text >{data.role}</Text>
                </Flex>
              </Flex>
              <VStack w="100%" p="10px 50px 30px" alignItems="start" color="black">
                <Title judul="details" />
                <Text>Gresik, Indonesia</Text>
                <Text mt="0 !important">me@nidanido.com</Text>
                <Title judul="profile" />
                <Text>{data.about}</Text>
                <Title judul="education" />
                <Text fontWeight="bold">{data.education.major}</Text>
                <Text pl="30px">{data.education.university}, {data.education.city} </Text>
                <Text pl="30px" mt="0 !important" color="gray.600" fontSize="14px">{data.education.duration}</Text>
                <Title judul="employmet history" />
                {
                  data.employment.map(item=>{
                    return <Box key={item.role} >                      
                      <Text fontWeight="bold" >{item.role}</Text>
                      <Flex flexDir="column" pl="30px">
                        <Text>{item.company}, {item.city} </Text>
                        <Text mt="0 !important" color="gray.600" fontSize="14px">
                          {item.start} - {item.end}</Text>
                        <Text mt="5px">Responibilities:</Text>
                        <Flex pl="30px">
                          <ul>
                            {item.jobdesk.map(val=>{
                              return <li key={val}>{val}</li>
                            })}
                          </ul>
                        </Flex>
                        
                      </Flex>
                      
                    </Box>
                  })
                }
                <Title judul="skills" />
                <Flex wrap="wrap">
                  {data.skills.map(item=>{
                    return <Text key={item} border="1px solid" borderColor="nida.green" borderRadius="5px" m="5px" px="5px" >{item}</Text>
                  })}
                </Flex>
                <Title judul="languages" />
                {
                  data.languages.map(item=>{
                    return <Text key={item.lang}>{item.lang} - <Text as="span" color="gray.500">{item.level}</Text> </Text>
                  })
                }
              </VStack>
          </VStack>
        {/* </div> */}
        
        </Box>
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