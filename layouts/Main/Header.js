import React from "react";
import Image from "next/image";
import { Box } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";

const Header = () => {
  return (
    <Box
      as="header"
      width="100%"
      position={{ base: "static", md: "static", lg: "absolute" }}
      bgColor={{ base: "gray.800", md: "gray.800", lg: "transparent" }}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      color="white"
      paddingX={2}
      paddingY={2}
    >
      <Image
        src="/images/white-logo.png"
        alt="ledger"
        width={250}
        height={88}
      />
      <Navbar />
    </Box>
  );
};

export default Header;
