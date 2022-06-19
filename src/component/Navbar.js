import React from "react";
import { 
  Box, 
  Flex, 
  Text, 
  Stack, 
  useColorMode, 
  IconButton, 
  useColorModeValue
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <NavBarContainer {...props}>
        <Logo
          w="100px"
          color={useColorModeValue("indigo", "white")}
        />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} />
      </NavBarContainer>
  );
};

const Logo = (props) => {
  return(
    <Box {...props}>
      <Text fontSize='lg' fontWeight='medium'>Elvina</Text>
    </Box>
  )
}

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill={useColorModeValue("indigo", "white")}
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill={useColorModeValue("indigo", "white")}
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={6}
        align={["baseline", "baseline", "center", "center"]}
        justify={["start", "flex-end", "flex-end", "flex-end"]}
        direction={["column", "column", "row", "row"]}
        pt={[6, 3, 0, 0]}
      >
        <Box 
          color={useColorModeValue('black', 'yellowNeon')}
          _hover={{ bg: (useColorModeValue("gray.50", "kaca")) }}
          py={[0, 2]}
          px={[0, 0, 3, 3]}
          borderRadius="7px"
        >
          <Link to='/'>Home</Link>
        </Box>
        <Box 
          color={useColorModeValue('black', 'yellowNeon')}
          _hover={{ bg: (useColorModeValue("gray.50", "kaca")) }}
          py={[0, 2]}
          px={[0, 0, 3, 3]}
          borderRadius="7px"
        >
          <Link to='about'>About</Link>
        </Box>
        <Box 
          color={useColorModeValue('black', 'yellowNeon')}
          _hover={{ bg: (useColorModeValue("gray.50", "kaca")) }}
          py={[0, 2]}
          px={[0, 0, 3, 3]}
          borderRadius="7px"
        >
          <Link to='project'>Project</Link>
        </Box>
        <Box 
          color={useColorModeValue('black', 'yellowNeon')}
          _hover={{ bg: (useColorModeValue("gray.50", "kaca")) }}
          py={[0, 2]}
          px={[0, 0, 3, 3]}
          borderRadius="7px"
        >
          <Link to='skills'>Skills</Link>
        </Box>
        <Box 
          color={useColorModeValue('black', 'yellowNeon')}
          _hover={{ bg: (useColorModeValue("gray.50", "kaca")) }}
          py={[0, 2]}
          px={[0, 0, 3, 3]}
          borderRadius="7px"
        >
          <Link to='contact'>Contact</Link>
        </Box>
        <DarkMode />
      </Stack>
    </Box>
  );
};

const DarkMode = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <IconButton
      aria-label="Toggle theme"
      bg={useColorModeValue("indigo", "yellowNeon")}
      _hover={{ bg: (useColorModeValue("lightIndigo", "lightYellow")) }}
      color={useColorModeValue("yellowNeon", "indigo")}
      icon={useColorModeValue(<i class="fa-solid fa-moon"></i>, <i class="fa-solid fa-sun"></i>)}
      onClick={toggleColorMode}
    ></IconButton>
  )
}

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      pt={[4]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;