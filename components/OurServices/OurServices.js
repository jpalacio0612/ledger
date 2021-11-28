import React from "react";
import { Box, Heading, Grid } from "@chakra-ui/react";
import ServiceCard from "../ServiceCard";

const OurServices = () => {
  return (
    <Box
      as="section"
      id="our-services"
      height="auto"
      padding={4}
      bgColor="gray.900"
      color="white"
      paddingBottom={16}
    >
      <Heading textAlign="center" marginY={8} size="2xl">
        Our Services
      </Heading>
      <Grid
        gridTemplateColumns="repeat(auto-fit, minmax(240px, 1fr))"
        width="100%"
        gridGap={4}
        justifyItems="center"
      >
        <ServiceCard
          image="/images/planning.jpg"
          title="Planning"
          description="lorem ipsun dolor sit amet consectetur adipisicing elit. Quisquam,
            quidem, doloremque, voluptate, quibusdam quae quaerat dolore,
            voluptas, ipsum dolores quisquam dolorum quis, quam. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
        />
        <ServiceCard
          image="/images/development.jpg"
          title="Design & Development"
          description="lorem ipsun dolor sit amet consectetur adipisicing elit. Quisquam,
            quidem, doloremque, voluptate, quibusdam quae quaerat dolore,
            voluptas, ipsum dolores quisquam dolorum quis, quam. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
        />
        <ServiceCard
          image="/images/launch.jpg"
          title="Launch"
          description="lorem ipsun dolor sit amet consectetur adipisicing elit. Quisquam,
            quidem, doloremque, voluptate, quibusdam quae quaerat dolore,
            voluptas, ipsum dolores quisquam dolorum quis, quam. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
        />
      </Grid>
    </Box>
  );
};

export default OurServices;
