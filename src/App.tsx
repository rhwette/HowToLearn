// import React from 'react';
import { Grid, GridItem, Button } from '@chakra-ui/react';
import Header from './components/Header';

function App() {
  return (
    <>
      <Button>test</Button>
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
        <GridItem area="header" bg="coral">
          <Header />
        </GridItem>
        <GridItem area="intro" bg="lightblue">
          intro
        </GridItem>
        <GridItem area="problems" bg="lightgreen">
          problems
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
