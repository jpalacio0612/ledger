import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Button, VStack, HStack } from "@chakra-ui/react";

import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { useLockScroll } from "../../hooks/useLockScroll";
import ScrollLink from "../ScrollLink";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

const SideMenu = ({ showMenu, onCloseMenu }) => {
  const ref = useRef();
  useLockScroll(showMenu);
  useOnClickOutside(ref, showMenu, onCloseMenu);
  const tabIndex = showMenu ? "0" : "-1";

  return (
    <VStack
      as="nav"
      bg="gray.800"
      color="white"
      align="center"
      position="fixed"
      w={{ base: "full", md: "2xs" }}
      left={showMenu ? 0 : "-100%"}
      overflow="scroll"
      h="full"
      top="102px"
      transition="500ms"
      zIndex="popover"
      ref={ref}
      fontSize="2xl"
      spacing={4}
    >
      <ScrollLink to="our-services" onClick={onCloseMenu}>
        Home
      </ScrollLink>
      <ScrollLink to="our-services" onClick={onCloseMenu}>
        Servicios
      </ScrollLink>
      <ScrollLink to="our-services" onClick={onCloseMenu}>
        Proyectos
      </ScrollLink>
      <Button colorScheme="red">Contactanos</Button>
      <HStack>
        <AiFillInstagram size={30} />
        <AiFillFacebook size={30} />
        <AiFillTwitterSquare size={30} />
      </HStack>
    </VStack>
  );
};

SideMenu.propTypes = {
  showMenu: PropTypes.bool,
  onCloseMenu: PropTypes.func,
};

export default SideMenu;
