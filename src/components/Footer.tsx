import { Text, Image } from '@chakra-ui/react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <Text textAlign={'left'} color="#D3D3D3" px="25px">
      <Image m="10px" src={logo} boxSize="60px" />
      &#169; 2023 rhwette
    </Text>
  );
};

export default Footer;
