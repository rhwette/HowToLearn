import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <HStack>
      <Image src={logo} />
    </HStack>
  );
};

export default Header;
