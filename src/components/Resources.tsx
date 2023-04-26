import { Text, Center, Image, HStack } from '@chakra-ui/react';
import resourceImageA from '../assets/resources-tedED.png';
import resourceImageB from '../assets/resources-Medium.png';
import resourceImageC from '../assets/resources-dezeen.png';
import resourceImageD from '../assets/resources-goodreads.png';

const Resources = () => {
  return (
    <>
      <Center>
        <Text
          textAlign="center"
          pt="50px"
          px="50px"
          color="black"
          fontSize="5xl"
          fontWeight="bold"
        >
          Useful Resources
        </Text>
      </Center>

      <Center>
        <Text
          textAlign="center"
          px="50px"
          pb="20px"
          color="black"
          fontSize="xl"
          fontWeight="bold"
        >
          Further materials on learning techniques and hacks
        </Text>
      </Center>

      <Center>
        <HStack pb="25px">
          <Image src={resourceImageA} px="25px" />
          <Image src={resourceImageB} px="25px" />
        </HStack>
      </Center>

      <Center>
        <HStack pb="100px">
          <Image src={resourceImageC} px="25px" />
          <Image src={resourceImageD} px="25px" />
        </HStack>
      </Center>
    </>
  );
};

export default Resources;
