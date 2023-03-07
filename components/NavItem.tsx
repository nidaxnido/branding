import Link from "next/link";
import { Text } from "@chakra-ui/react";
export default function NavItem({value}:{value:string}){
    return <Link href={`/${value.toLowerCase()}`} >
    <Text padding="10px"
        _hover={{textDecor:"underline"}}>{value}</Text>
  </Link>

}