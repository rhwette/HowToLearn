import { Image, Text, Center, Box } from '@chakra-ui/react';
import feynmanImage from '../assets/feynman.png';

const Feynman = () => {
  return (
    <Center>
      <Box pt="50px" bg="white">
        <Image src={feynmanImage} />
        <Text
          textAlign="center"
          pt="25px"
          px="50px"
          color="#000"
          fontSize="4xl"
          fontWeight="bold"
        >
          The Feynman Technique
        </Text>
        <Text
          textAlign="center"
          px="50px"
          color="#000"
          fontSize="xl"
          fontWeight="normal"
        >
          Learn without forgetting
        </Text>
      </Box>
    </Center>
  );
};

export default Feynman;
