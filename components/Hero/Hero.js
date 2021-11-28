import React from "react";
import Lottie from "../Lottie";
import { Box, Heading, Text, Button, Grid } from "@chakra-ui/react";
import developmentProcess from "../../lotties/development-process.json";

const options = {
  loop: false,
  autoplay: true,
  animationData: developmentProcess,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Hero = () => {
  return (
    <Grid
      as="section"
      height={{ base: "auto", lg: "100vh" }}
      display="grid"
      templateAreas={{
        base: "'title' 'chart' 'description'",
        lg: "'title chart' 'description chart'",
      }}
      templateColumns={{
        base: "1fr",
        lg: "1fr 1.5fr",
      }}
      paddingX={{ base: 2, md: 2, lg: 12 }}
      paddingY={8}
      bgImage="/images/hero-background.png"
      bgSize="cover"
    >
      <Heading
        as="h1"
        gridArea="title"
        alignSelf="end"
        color="white"
        size="3xl"
        marginY={4}
      >
        Lorem Ipsum is simply{" "}
        <Box as="span" color="red.500">
          dummy
        </Box>
      </Heading>
      <Box gridArea="description">
        <Text
          color="white"
          fontSize={{ base: "xl", md: "2xl", lg: "2xl" }}
          marginY={4}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        <Button
          colorScheme="red"
          width={{ base: "100%", lg: 300 }}
          height={{ base: 16, md: 20, lg: 20 }}
          fontSize="2xl"
          marginY={4}
        >
          Learn More
        </Button>
      </Box>
      <Box width="100%" display="flex" alignItems="center" gridArea="chart">
        <Lottie options={options} width="100%" speed={3} height="auto" />
      </Box>
    </Grid>
  );
};

export default Hero;
