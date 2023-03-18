import { personal } from "@/types";
import { Flex, Image, VStack,Text, Box } from "@chakra-ui/react";
import Header from "./Header";
import Logos from "./Logos";
import Menus from "./Menus";

export default function MobileView({data}:{data:personal}){
    return <Flex flexDir="column" alignItems="center" 
                w="100vw" bg="nida.bg" h="100%" minH="100vh"
                p={{md:"70px"}} pt={{md:"20px"}}>
            {/* <Logos /> */}
            
        <Header />
        <Image src="/images/pp2.png" borderTopLeftRadius="10px" borderTopRightRadius="10px" />
        <VStack w="100%" bg="nida.green" color="nida.white" alignItems="left"
                 p={{base:"25px", sm:"40px"}} spacing="30px"
                 borderBottomLeftRadius="10px" borderBottomRightRadius="10px"
                  >
            <Box p="15px" border="1px dashed" borderColor="nida.white" borderRadius="10px" >
                <Text color="nida.white" fontSize="20px" lineHeight={1} fontWeight="bold" mb="15px">Hi, I'm</Text>
                <Text color="nida.white" fontSize={{base:"40px", sm:"50px"}} lineHeight={1} >{data.fullname}</Text>
                <Flex mt="10px !important" mb="30px">
                    <Text color="nida.white" fontSize="20px" >You can call me </Text>
                    <Text ml="10px" color="nida.orange" textDecor="underline" fontSize="20px">{data.nickname}</Text>
                </Flex>
                <Text color="nida.white" fontSize="20px">{data.about}</Text>
            </Box>
        </VStack>


    </Flex>
    
}