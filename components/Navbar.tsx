import { Flex,HStack,Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const Item = ({link, caption, color, path}
                :{link:string, caption:string, color:string, path:string})=>{
    return <Link href={link}>
            <Text _hover={{textDecor:"underline"}} color={path == link? "nida.orange": color} textDecor={path == link? "underline": "none"}>{caption}</Text>
        </Link>
}

export default function Navbar({theme}:{theme?:string}){
    const warna = theme? theme : "general"
    const router = useRouter();    
    return <>
    {warna == "general"? 
            <HStack 
                fontSize="20px" 
                spacing="20px"
                fontWeight="bold"
                m="15px"
                zIndex={999999}
            >   
                <Item link="/" caption="About" color="nida.green" path={router.asPath} />
                <Item link="/resume" caption="Resume" color="nida.green" path={router.asPath} />
                <Item link="/projects" caption="Projects" color="nida.green" path={router.asPath} />
                <Item link="/contact" caption="Contact" color="nida.green" path={router.asPath} />
                
            </HStack>:
            <HStack 
            w="100%"
            fontSize="20px" 
            justifyContent="center" 
            mt="80px"
            position="absolute"
            spacing="20px"
            fontWeight="bold"
            zIndex={999}
            // _hover={{textDecor:"underline/"}}
            // position={pos == "right"??"absolute"}
        >   
            <Item link="/" caption="About" color="nida.white" path={router.asPath} />
            <Item link="/resume" caption="Resume" color="nida.white" path={router.asPath} />
            <Item link="/projects" caption="Projects" color="nida.green" path={router.asPath} />
            <Item link="/contact" caption="Contact" color="nida.green" path={router.asPath} />
            
        </HStack>
    }
    </>
}