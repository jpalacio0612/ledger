import React from "react";
import Image from "next/image";
import {
  Box,
  HStack,
  VStack,
  Heading,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";
import ScrollLink from "../../components/ScrollLink";

const Footer = () => {
  return (
    <Box as="footer" bgColor="red.600" color="black" padding={4}>
      <Box
        display="flex"
        justifyContent="space-between"
        maxWidth="6xl"
        flexDirection={{ base: "column", lg: "row" }}
        margin="0 auto"
      >
        <Box>
          <Image
            priority
            src="/images/black-logo.svg"
            alt="ledger"
            width={250}
            height={88}
          />
          <HStack marginY={4}>
            <AiFillInstagram size={30} color="black" />
            <AiFillFacebook size={30} color="black" />
            <AiFillTwitterSquare size={30} color="black" />
            <AiFillLinkedin size={30} color="black" />
          </HStack>
          <VStack
            color="black"
            alignItems="flex-start"
            fontSize="xl"
            textDecoration="underline"
          >
            <ScrollLink to="home">Home</ScrollLink>
            <ScrollLink to="our-services">Servicios</ScrollLink>
            <ScrollLink to="success-cases">Proyectos</ScrollLink>
          </VStack>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading>Get In Touch...</Heading>
          <Box display="flex" alignItems="center">
            <Input
              placeholder="Email"
              size="lg"
              bgColor="white"
              marginY={4}
              height="50px"
            />
            <Button height="50px">Send</Button>
          </Box>
        </Box>
      </Box>
      <Text textAlign="center">Copyright © 2021 • Ledger </Text>
    </Box>
  );
};

export default Footer;
