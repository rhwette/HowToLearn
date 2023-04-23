import { HStack, Image, Text } from '@chakra-ui/react';
import introImage from '../assets/intro-image.png';

const Intro = () => {
  return (
    <HStack justifyContent="space-between">
      <div>
        <Text px="50px" color="#000" fontSize="4xl" fontWeight="bold">
          Learning How to Learn
        </Text>
        <Text
          minWidth="200px"
          px="50px"
          color="#000"
          fontSize="xl"
          fontWeight="normal"
        >
          The most effective, cutting-edge learning techniques that you can
          apply in your daily life
        </Text>
      </div>
      <Image src={introImage} marginRight="50" boxSize="300px" />
    </HStack>
  );
};

export default Intro;
