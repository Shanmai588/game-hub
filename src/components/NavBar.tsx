import { HStack, Image, Text } from '@chakra-ui/react'
import KFCLogo from '../assets/KFC.webp'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    // horizontal stack
    <HStack justifyContent="space-between" padding="10px">
        <Image src={KFCLogo} boxSize="60px"></Image>
        <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  )
}

export default NavBar