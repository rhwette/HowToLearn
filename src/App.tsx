// import React from 'react';
import { Grid, GridItem, Button } from '@chakra-ui/react';
import Header from './components/Header';
import Intro from './components/Intro';
import Problems from './components/Problems';

import { useState } from 'react';

function App() {
  const [isVisible, setVisibility] = useState(false);

  const handleClick = () => {
    console.log(isVisible);
    setVisibility(true);
    console.log(isVisible);
  };

  console.log(isVisible);

  return (
    <>
      <Button onClick={handleClick}>test</Button>
      <Grid
        templateAreas={` "header header"
                              "intro intro"
                              "problems problems"
                              "techniques techniques"
                              "ted ted"
                              "asideoakley oakley"
                              "feynman feynman"
                              "factsandfigs factsandfigs"
                              "kahan kahan"
                              "principles principles"
                              "resources resources"
                              "footer footer"
                              `}
      >
        <GridItem area="header" bg="white">
          <Header />
        </GridItem>

        <GridItem area="intro" bg="white">
          <Intro />
        </GridItem>

        <GridItem area="problems" bg="white">
          <Problems />
        </GridItem>

        <GridItem area="techniques" bg="lightblue">
          techniques
        </GridItem>
        <GridItem area="ted" bg="pink">
          ted
        </GridItem>
        <GridItem area="asideoakley" bg="orange">
          asideoakley
        </GridItem>
        <GridItem area="oakley" bg="dodgerblue">
          oakley
        </GridItem>
        <GridItem area="feynman" bg="green">
          feynman
        </GridItem>
        <GridItem area="factsandfigs" bg="blue">
          factsandfigs
        </GridItem>
        <GridItem area="kahan" bg="purple">
          kahan
        </GridItem>
        <GridItem area="principles" bg="yellow">
          principles
        </GridItem>
        <GridItem area="resources" bg="red">
          resources
        </GridItem>
        <GridItem area="footer" bg="black">
          footer
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
