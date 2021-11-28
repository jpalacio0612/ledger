import React from "react";
import {
  Box,
  HStack,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import {
  AiOutlineSearch,
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <>
      <HStack
        spacing={8}
        fontSize="2xl"
        display={{ base: "none", md: "none", lg: "flex" }}
      >
        <Link>Home</Link>
        <Link>Servicios</Link>
        <Link>Proyectos</Link>
        <Link>Carreras</Link>
        <Button colorScheme="red">Contactanos</Button>
        <HStack>
          <AiOutlineSearch />
          <AiFillInstagram size={30} />
          <AiFillFacebook size={30} />
          <AiFillTwitterSquare size={30} />
        </HStack>
      </HStack>
      <Box display={{ base: "block", lg: "none" }}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            size="lg"
            variant="ghost"
            colorScheme="white"
          />
          <MenuList color="black">
            <MenuItem>Home</MenuItem>
            <MenuItem>Servicios</MenuItem>
            <MenuItem>Proyectos</MenuItem>
            <MenuItem>Carreras</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </>
  );
};

export default Navbar;
