import { OrderedList, ListItem, Text, Center } from '@chakra-ui/react';

const FactsAndFigs = () => {
  return (
    <>
      <Center>
        <Text
          textAlign="center"
          pt="100px"
          px="50px"
          color="#000"
          fontSize="5xl"
          fontWeight="bold"
        >
          Facts and figures
        </Text>
      </Center>

      <Center>
        <Text
          textAlign="center"
          px="50px"
          color="#000"
          fontSize="xl"
          fontWeight="normal"
        >
          On learning and the brain
        </Text>
      </Center>

      <Center>
        <OrderedList listStyleType={'disc'} color="black">
          {/* List Item #1 starts here */}
          <ListItem color="black" fontSize="xl" fontWeight={'bold'}>
            86 billion
          </ListItem>

          <ListItem
            pb="10px"
            listStyleType={'none'}
            color="black"
            fontSize="l"
            fontWeight={'normal'}
          >
            The number of neurons in the human brain
          </ListItem>

          {/* List Item #2 starts here */}
          <ListItem color="black" fontSize="xl" fontWeight={'bold'}>
            1,000 terabytes
          </ListItem>

          <ListItem
            pb="10px"
            listStyleType={'none'}
            color="black"
            fontSize="l"
            fontWeight={'normal'}
          >
            the information storage capacity of a human
          </ListItem>

          {/* List Item #3 starts here */}
          <ListItem color="black" fontSize="xl" fontWeight={'bold'}>
            420 million
          </ListItem>

          <ListItem
            listStyleType={'none'}
            color="black"
            fontSize="l"
            fontWeight={'normal'}
          >
            The number of adults under 25 with insufficient education for
            finding employment
          </ListItem>

          <ListItem
            pb="10px"
            listStyleType={'none'}
            color="black"
            fontSize="s"
            fontWeight={'normal'}
            fontStyle={'italic'}
          >
            World Bank 2017
          </ListItem>

          {/* List Item #4 starts here */}
          <ListItem color="black" fontSize="xl" fontWeight={'bold'}>
            26 years old
          </ListItem>

          <ListItem
            pb="10px"
            listStyleType={'none'}
            color="black"
            fontSize="l"
            fontWeight={'normal'}
          >
            The age at which Albert Einstein published his groundbreaking paper
            on special relativity
          </ListItem>

          {/* List Item #5 starts here */}
          <ListItem color="black" fontSize="xl" fontWeight={'bold'}>
            1897
          </ListItem>

          <ListItem
            pb="10px"
            listStyleType={'none'}
            color="black"
            fontSize="l"
            fontWeight={'normal'}
          >
            Publication of Ivan Pavlov's research on classical conditioning
          </ListItem>

          {/* List Item #6 starts here */}
          <ListItem color="black" fontSize="xl" fontWeight={'bold'}>
            73%
          </ListItem>

          <ListItem
            listStyleType={'none'}
            color="black"
            fontSize="l"
            fontWeight={'normal'}
          >
            The percentage of adults in the US who consider themselves lifelong
            learners
          </ListItem>

          <ListItem
            pb="10px"
            listStyleType={'none'}
            color="black"
            fontSize="s"
            fontWeight={'normal'}
            fontStyle={'italic'}
          >
            Pew Research Center
          </ListItem>

          {/* List Item #7 starts here */}
          <ListItem color="black" fontSize="xl" fontWeight={'bold'}>
            500 trillion
          </ListItem>

          <ListItem
            pb="10px"
            listStyleType={'none'}
            color="black"
            fontSize="l"
            fontWeight={'normal'}
          >
            The number of nerve synapses responsible for learing in the average
            adult human
          </ListItem>

          {/* List Item #8 starts here */}
          <ListItem color="black" fontSize="xl" fontWeight={'bold'}>
            1885
          </ListItem>

          <ListItem
            pb="10px"
            listStyleType={'none'}
            color="black"
            fontSize="l"
            fontWeight={'normal'}
          >
            Development of the forgetting curve
          </ListItem>
        </OrderedList>
      </Center>
    </>
  );
};

export default FactsAndFigs;
