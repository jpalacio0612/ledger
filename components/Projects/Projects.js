import React from "react";
import { Box, Heading, Grid } from "@chakra-ui/react";
import ProjectCard from "../ProjectCard";

const Projects = () => {
  return (
    <Box
      as="section"
      id="success-cases"
      height="auto"
      padding={4}
      bgColor="gray.900"
      color="white"
      paddingBottom={16}
    >
      <Heading textAlign="center" marginY={8} size="2xl">
        Success Cases
      </Heading>
      <Grid
        gridTemplateColumns="repeat(auto-fit, minmax(240px, 1fr))"
        width="100%"
        gridGap={4}
        justifyItems="center"
      >
        <ProjectCard image="/images/grettas.png" alt="grettas" />
        <ProjectCard image="/images/segudir.png" alt="segudir" />
      </Grid>
    </Box>
  );
};

export default Projects;
