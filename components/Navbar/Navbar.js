import React, { useState } from "react";
import { Box, HStack, Link, Button, IconButton } from "@chakra-ui/react";
import {
  AiOutlineSearch,
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import ScrollLink from "../ScrollLink";
import SideMenu from "../SideMenu";
import { useDebounce } from "../../hooks/useDebounce";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuDebounced = useDebounce(showMenu, 100);

  const onCloseMenu = () => {
    setShowMenu(false);
  };

  const onOpenMenu = () => {
    setShowMenu(true);
  };

  return (
    <>
      <HStack
        spacing={8}
        fontSize="2xl"
        display={{ base: "none", md: "none", lg: "flex" }}
      >
        <ScrollLink to="home">Home</ScrollLink>
        <ScrollLink to="our-services">Servicios</ScrollLink>
        <ScrollLink to="success-cases">Proyectos</ScrollLink>
        <Button colorScheme="red">Contactanos</Button>
        <HStack>
          <AiFillInstagram size={30} />
          <AiFillFacebook size={30} />
          <AiFillTwitterSquare size={30} />
        </HStack>
      </HStack>
      <Box display={{ base: "block", lg: "none" }}>
        {!showMenuDebounced ? (
          <IconButton
            icon={<HamburgerIcon width={8} height={8} onClick={onOpenMenu} />}
            size="lg"
            variant="ghost"
            colorScheme="white"
          />
        ) : (
          <IconButton
            icon={<CloseIcon width={6} height={6} onClick={onCloseMenu} />}
            size="lg"
            variant="ghost"
            colorScheme="white"
          />
        )}
        <SideMenu showMenu={showMenu} onCloseMenu={onCloseMenu} />
      </Box>
    </>
  );
};

export default Navbar;
