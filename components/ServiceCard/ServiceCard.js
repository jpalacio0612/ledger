import React from "react";
import Image from "next/image";
import { Box, Heading, Text } from "@chakra-ui/react";

const ServiceCard = ({ image, title, description }) => {
  return (
    <Box
      maxWidth={500}
      bgColor="white"
      color="gray.900"
      borderRadius="2xl"
      overflow="hidden"
    >
      <Image
        src={image}
        width="100%"
        height="50px"
        alt="planning"
        layout="responsive"
        objectFit="cover"
      />
      <Box padding={4}>
        <Heading marginBottom={2}>{title}</Heading>
        <Text>{description}</Text>
      </Box>
    </Box>
  );
};

export default ServiceCard;
