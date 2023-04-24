import { Text, Flex, Box } from '@chakra-ui/react';

const Oakley = () => {
  return (
    <Flex>
      <Box flex="1" bg="white">
        <Text
          textAlign="left"
          px="50px"
          pt="100px"
          color="#000"
          fontSize="2xl"
          fontWeight="bold"
        >
          {' '}
          Barbara Oakley's story.
        </Text>
      </Box>

      <Box flex="8" bg="white">
        <Text
          textAlign="left"
          px="50px"
          pt="100px"
          color="#000"
          fontSize="l"
          fontWeight="normal"
        >
          Math didn't come naturally to Barbara in childhood. She thought of
          herself as more of a humanities person, and not a brilliant one at
          that. With an eye to becoming a linguist, after school she enlisted in
          the army, who sent her to learn Russian. After several years of
          service, during which she rose to the rank of Captain, Barbara left
          the army and decided to study engineering. In was during this time
          that she developed her learning methodology as she was forced to
          reprogram her brain for a different kind of learning. It turns out
          that when something doesn't come naturally to you, having to work hard
          to gain the knowledge that other people may get at first glance gives
          you a deeper, more comprehensive understanding of the subject matter.
        </Text>
      </Box>
    </Flex>
  );
};

export default Oakley;
