import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { getProjectsData } from "@/data/getProfileData";
import { project } from "@/types";
import { Box, Flex,Heading,Image, VStack,Text, UnorderedList, ListItem, StackDivider, Divider, Button, Link } from "@chakra-ui/react";
// import Link from "next/link";

export default function Contact({data}:{data:project[]}){
    
    return <Box w="100vw" h="100%" bg="nida.bg" color="nida.green" fontSize="16px" pb="50px">
        <Header />
        <VStack mx="auto"  fontSize={{base:"14px", sm:"16px", md:"20px", lg:"25px"}} w="90%" >
            <Text fontSize="50px" fontWeight="bold">Projects</Text>
            <Divider size="5px" color="nida.orange"  />
            <VStack w="100%" spacing="20px"  
                    divider={<StackDivider borderColor="nida.orange"
                    mb="30px"
                     />}>
                {
                    data.map(item=>{
                        return <Flex key={item.id} fontSize="16px" border="1px dashed" borderColor="nida.green"
                        alignItems="center"
                        p="25px"
                        flexDir={{base:"column", lg:"row"}}
                        borderRadius="10px"
                        >
                            {/* <Flex py="25px"> */}
                                <Image src={item.image} alt={"image"+item.name} w="400px" h="200px" borderRadius="10px" 
                                // mt="30px"  
                                />
                            {/* </Flex> */}
                            
                            <VStack align="left" p="25px" >
                                <Text fontSize="25px" fontWeight="bold" textDecor="underline">{item.name}</Text>
                                <Text fontWeight="bold">Description</Text>
                                <Text>{item.description}</Text>
                                <Flex justifyContent="flex-end">
                                    <Link href={item.liveLink} isExternal>
                                        <Button bg="nida.green" color="nida.bg" mr="20px" _hover={{bg:"nida.orange", color:"nida.green", border:"1px solid", borderColor:"nida.green"}}>Live Link</Button>
                                    </Link>
                                    <Link href={item.githubLink} isExternal>
                                        <Button bg="nida.white" color="nida.green" border="1px solid" borderColor="nida.green"
                                                _hover={{bg:"nida.orange", color:"nida.green", border:"1px solid", borderColor:"nida.green"}}
                                        >Github Link</Button>
                                    </Link>
                                </Flex>
                                
                                
                            </VStack>
                        </Flex>
                    })
                }
            </VStack>
            


            
        </VStack>
        </Box>
}
export async function getStaticProps(){
    const data = await getProjectsData();
    console.log(data)
    return {
      props:{
        data
      }
    }
  }