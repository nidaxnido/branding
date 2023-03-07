import { Flex } from "@chakra-ui/react";

export default function Navbar({children, pos}:{children:React.ReactNode, pos:string}){
    return <Flex color={pos=="left"? "nida.white":"nida.green"} 
                fontSize="20px" 
                justifyContent="right" 
                mt="80px"
                position={pos=="right"? "absolute":"relative"}
                zIndex={1}
                // _hover={{textDecor:"underline/"}}
                // position={pos == "right"??"absolute"}
            >
                {children}
            </Flex>
}