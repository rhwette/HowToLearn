import { Image, Text, Center, Box, Stack } from '@chakra-ui/react';
import kahanImage from '../assets/khan-book-2.png';

const Kahan = () => {
  return (
    <>
      <Text
        textAlign="left"
        pt="25px"
        px="50px"
        color="#000"
        fontSize="xl"
        fontWeight="normal"
      >
        Salman Khan
      </Text>

      <Text
        textAlign="left"
        pt="5px"
        px="50px"
        color="#000"
        fontSize="2xl"
        fontWeight="bold"
      >
        The One World Schoolhouse
      </Text>

      <Text
        textAlign="left"
        lineHeight={'100%'}
        pt="5px"
        px="100px"
        color="#000"
        fontSize="xl"
        fontWeight="normal"
      >
        Sal Khan's passion and innovation is transforming learning for millions
        of students worldwide. The One World Schoolhouse is a must-read for all
        who are committed to improving education so students everywhere can gain
        the skills and knowledge to be successful in school, careers and life.
      </Text>

      <Stack direction="row" pt="25px" pb="150px" mx="100px">
        <Box boxSize="200px">
          <Image src={kahanImage} />
        </Box>

        <Box boxSize="200px">
          <Image src={kahanImage} />
        </Box>

        <Box boxSize="200px">
          <Image src={kahanImage} />
        </Box>

        <Box boxSize="200px">
          <Image src={kahanImage} />
        </Box>
      </Stack>
    </>
  );
};

export default Kahan;
