import { HStack, Image, Text } from '@chakra-ui/react';
// import tedImage from '../assets/intro-image.png';
import './Ted.css';

const Ted = () => {
  return (
    <>
      <Text
        textAlign="center"
        px="50px"
        color="#000"
        fontSize="4xl"
        fontWeight="bold"
      >
        TED talks
      </Text>

      <Text
        textAlign="center"
        px="50px"
        pb="25px"
        color="#000"
        fontSize="xl"
        fontWeight="normal"
      >
        For lovers of procrastination
      </Text>

      <HStack justifyContent="space-between">
        <iframe
          className="video__iframe"
          src="https://www.youtube.com/embed/5MgBikgcWnY?start=11"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          // allowfullscreen>
        ></iframe>

        <iframe
          className="video__iframe"
          src="https://www.youtube.com/embed/arj7oStGLkU?start=11"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          // allowfullscreen>
        ></iframe>
      </HStack>
    </>
  );
};

export default Ted;
