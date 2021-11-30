import React from "react";
import Image from "next/image";
import { Box } from "@chakra-ui/react";

const ProjectCard = ({ image, alt }) => {
  return (
    <Box borderRadius="3xl" overflow="hidden">
      <Image
        src={image}
        width="800px"
        height="500px"
        alt={alt}
        objectFit="cover"
        objectPosition="center"
      />
    </Box>
  );
};

export default ProjectCard;
