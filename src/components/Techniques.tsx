import { Image, Grid, Box, Text, Center } from '@chakra-ui/react';
import techImage1 from '../assets/learning-techniques-book.png';
import techImage2 from '../assets/learning-techniques-competence.png';
import techImage3 from '../assets/learning-techniques-interleaving.png';
import techImage4 from '../assets/learning-techniques-question.png';
import techImage5 from '../assets/learning-techniques-recall.png';

const Techniques = () => {
  return (
    <>
      <Text
        textAlign="center"
        px="50px"
        color="#000"
        fontSize="4xl"
        fontWeight="bold"
      >
        Learning Techniques
      </Text>

      <Text
        textAlign="center"
        px="50px"
        color="#000"
        fontSize="xl"
        fontWeight="normal"
      >
        Five Strategies from Barbara Oakley
      </Text>

      <Center>
        <Grid
          templateColumns="repeat(3, 308px)"
          templateRows="repeat(2, 450px)"
          gap={4}
        >
          <Box bg="white" padding="4">
            <Image src={techImage1} boxSize="300px" pb="15px" />
            <Text textAlign="left" color="#000" fontSize="l" fontWeight="bold">
              Two Ways of Thinking
            </Text>
            <Text
              textAlign="left"
              color="#000"
              fontSize="sm"
              fontWeight="normal"
            >
              Deep understanding comes from being able to toggle back and forth
              between focused and diffused thinking.
            </Text>
          </Box>

          <Box bg="white" padding="4">
            <Image src={techImage2} boxSize="300px" pb="15px" />
            <Text textAlign="left" color="#000" fontSize="l" fontWeight="bold">
              Illusion of Competence
            </Text>
            <Text
              textAlign="left"
              color="#000"
              fontSize="sm"
              fontWeight="normal"
            >
              Test yourself, write it down, tell other people, and repeat the
              process in different settings. Only then can you be truly certain
              you've understood something.
            </Text>
          </Box>

          <Box bg="white" padding="4">
            <Image src={techImage3} boxSize="300px" pb="15px" />
            <Text textAlign="left" color="#000" fontSize="l" fontWeight="bold">
              Interleaving
            </Text>
            <Text
              textAlign="left"
              color="#000"
              fontSize="sm"
              fontWeight="normal"
            >
              When you learn multiple skills at the same time, they reinforce
              each other.
            </Text>
          </Box>

          <Box bg="white" padding="4">
            <Image src={techImage4} boxSize="300px" pb="15px" />
            <Text textAlign="left" color="#000" fontSize="l" fontWeight="bold">
              Questions
            </Text>
            <Text
              textAlign="left"
              color="#000"
              fontSize="sm"
              fontWeight="normal"
            >
              When listening to your teacher, think up a good question,
              something that you're really itching to know.
            </Text>
          </Box>

          <Box bg="white" padding="4">
            <Image src={techImage5} boxSize="300px" pb="15px" />
            <Text textAlign="left" color="#000" fontSize="l" fontWeight="bold">
              Recall
            </Text>
            <Text
              textAlign="left"
              color="#000"
              fontSize="sm"
              fontWeight="normal"
            >
              Improving your ability to remember key bits of information helps
              to connect different part of the brain.
            </Text>
          </Box>

          {/* grid items here */}
        </Grid>
      </Center>
    </>
  );
};

export default Techniques;
