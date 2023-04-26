import { OrderedList, ListItem, Text, Center, Image } from '@chakra-ui/react';
import triangleImage from '../assets/kaufman-triangle.svg';
import './Principles.css';

const Principles = () => {
  return (
    <>
      <Center>
        <Text
          textAlign="center"
          pt="50px"
          px="50px"
          color="#D3D3D3"
          fontSize="5xl"
          fontWeight="bold"
        >
          Ten principles of skill acquisition
        </Text>
      </Center>

      <Center>
        <Text
          textAlign="center"
          px="50px"
          pb="20px"
          color="#D3D3D3"
          fontSize="xl"
          fontWeight="bold"
        >
          by Josh Kaufman
        </Text>
      </Center>

      <Center>
        <OrderedList>
          {/* List Item #1 starts here */}
          <ListItem
            listStyleType="decimal"
            fontWeight="bold"
            color="#D3D3D3"
            fontSize="xl"
          >
            <Text fontWeight={'normal'} ml={'10px'}>
              Choose a lovable project
            </Text>
          </ListItem>

          {/* List Item #2 starts here */}
          <ListItem
            listStyleType="decimal"
            fontWeight="bold"
            color="#D3D3D3"
            fontSize="xl"
          >
            <Text fontWeight={'normal'} ml={'10px'}>
              Focus your energy on one skill at a time
            </Text>
          </ListItem>

          {/* List Item #3 starts here */}
          <ListItem
            listStyleType="decimal"
            fontWeight="bold"
            color="#D3D3D3"
            fontSize="xl"
          >
            <Text fontWeight={'normal'} ml={'10px'}>
              Define your target performance level
            </Text>
          </ListItem>

          {/* List Item #4 starts here */}
          <ListItem
            listStyleType="decimal"
            fontWeight="bold"
            color="#D3D3D3"
            fontSize="xl"
          >
            <Text fontWeight={'normal'} ml={'10px'}>
              Deconstruct the skill into sub-skills
            </Text>
          </ListItem>

          {/* List Item #5 starts here */}
          <ListItem
            listStyleType="decimal"
            fontWeight="bold"
            color="#D3D3D3"
            fontSize="xl"
          >
            <Text fontWeight={'normal'} ml={'10px'}>
              Obtain critical tools
            </Text>
          </ListItem>

          {/* List Item #6 starts here */}
          <ListItem
            listStyleType="decimal"
            fontWeight="bold"
            color="#D3D3D3"
            fontSize="xl"
          >
            <Text fontWeight={'normal'} ml={'10px'}>
              Eliminate barriers to practice
            </Text>
          </ListItem>

          {/* List Item #7 starts here */}
          <ListItem
            listStyleType="decimal"
            fontWeight="bold"
            color="#D3D3D3"
            fontSize="xl"
          >
            <Text fontWeight={'normal'} ml={'10px'}>
              Make dedicated time for practice
            </Text>
          </ListItem>

          {/* List Item #8 starts here */}
          <ListItem
            listStyleType="decimal"
            fontWeight="bold"
            color="#D3D3D3"
            fontSize="xl"
          >
            <Text fontWeight={'normal'} ml={'10px'}>
              Create fast feedback loops
            </Text>
          </ListItem>

          {/* List Item #9 starts here */}
          <ListItem
            listStyleType="decimal"
            fontWeight="bold"
            color="#D3D3D3"
            fontSize="xl"
          >
            <Text fontWeight={'normal'} ml={'10px'}>
              Practice by the clock in short bursts
            </Text>
          </ListItem>

          {/* List Item #10 starts here */}
          <ListItem
            listStyleType="decimal"
            fontWeight="bold"
            color="#D3D3D3"
            fontSize="xl"
          >
            <Text fontWeight={'normal'} ml={'10px'}>
              Emphasize quantity and speed
            </Text>
          </ListItem>
        </OrderedList>

        <Image
          className="kaufman__triangle rotation"
          src={triangleImage}
          boxSize="400px"
        />
      </Center>
    </>
  );
};

export default Principles;
