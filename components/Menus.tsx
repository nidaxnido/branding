import { IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import {HamburgerIcon} from '@chakra-ui/icons'
const CustomItem = ({caption}:{caption:string})=>{
    return <MenuItem bg="nida.bg" color="nida.green" _hover={{bg:"nida.orange", color:"nida.white"}}>
    {caption}
  </MenuItem>
}
export default function Menus(){
    return <Menu>
    <MenuButton
      as={IconButton}
      aria-label='Options'
      icon={<HamburgerIcon color="nida.green" boxSize="30px" />}
      variant='outline'
    />
    <MenuList bg="nida.white" color="nida.green">
      <CustomItem caption="About" />
      <CustomItem caption="Resume" />
      <CustomItem caption="Projects" />
      <CustomItem caption="Contact" />
    </MenuList>
  </Menu>
}