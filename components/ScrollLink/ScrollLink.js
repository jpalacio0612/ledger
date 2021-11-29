import React from "react";
import { Link } from "react-scroll";
import { Box } from "@chakra-ui/react";

const ScrollLink = ({ children, to, onClick }) => {
  return (
    <Box cursor="pointer" _hover={{ textDecoration: "underline" }}>
      <Link to={to} smooth onClick={onClick}>
        {children}
      </Link>
    </Box>
  );
};

export default ScrollLink;
