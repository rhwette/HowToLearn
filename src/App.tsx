import { Grid, GridItem, Button } from '@chakra-ui/react';
import Header from './components/Header';
import Intro from './components/Intro';
import Problems from './components/Problems';
import Techniques from './components/Techniques';
import Ted from './components/Ted';
import Oakley from './components/Oakley';
import Feynman from './components/Feynman';
import FactsAndFigs from './components/FactsAndFigs';
import Kahan from './components/Kahan';
import Principles from './components/Principles';
import Resources from './components/Resources';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Grid
        templateAreas={` "header header"
                              "intro intro"
                              "problems problems"
                              "techniques techniques"
                              "ted ted"
                              "oakleyaside oakleyaside"
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

        <GridItem area="techniques" bg="white">
          <Techniques />
        </GridItem>

        <GridItem area="ted" bg="white">
          <Ted />
        </GridItem>

        <GridItem area="oakleyaside" bg="orange">
          <Oakley />
        </GridItem>

        <GridItem area="feynman" bg="white">
          <Feynman />
        </GridItem>

        <GridItem area="factsandfigs" bg="white">
          <FactsAndFigs />
        </GridItem>

        <GridItem area="kahan" bg="gray">
          <Kahan />
        </GridItem>

        <GridItem area="principles" bg="light-gray">
          <Principles />
        </GridItem>

        <GridItem area="resources" bg="#D3D3D3">
          <Resources />
        </GridItem>

        <GridItem area="footer" bg="black">
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
