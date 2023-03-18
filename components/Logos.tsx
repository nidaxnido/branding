import { Box, Text } from "@chakra-ui/react";
import { Sacramento } from '@next/font/google'

const logo = Sacramento({weight:'400', subsets: ['latin'] })
export default function Logos(){
    return <Box position="fixed">
    <span className={logo.className}>
    <Text as="span" 
      color="nida.orange"
      fontWeight="bold"
      fontSize="120px">N</Text>
      <Text as="span" 
      color="nida.green"
      fontWeight="bold"
      fontSize="120px">ida</Text>
    </span>
  </Box>
}