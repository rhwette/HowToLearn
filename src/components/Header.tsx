import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <HStack>
      <Image m="10px" src={logo} boxSize="60px" />
    </HStack>
  );
};

export default Header;
