import { Flex, Image } from '@chakra-ui/react'
import { useMediaQuery } from 'react-responsive'
import Menus from './Menus'
import Navbar from './Navbar'

export default function(){
    const isMobile = useMediaQuery({query: '(max-width:768px)'}) 
    return <>
    {isMobile?
        <Flex w="100%" justifyContent="space-between" p="15px" pl="0" pb="0" alignItems="center"
            my={{md:"20px"}} >
            <Image src="/images/name-pink.svg" alt="logo" w="140px"  />
            <Menus />
        </Flex>
        :
        <Flex justifyContent="space-between" alignItems="center" p="20px">
            <Image src="/images/name-pink.svg" alt="logo" w="200px" />
            <Navbar theme="general" />
        </Flex>
    }
    </>
}