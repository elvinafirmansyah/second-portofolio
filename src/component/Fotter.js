import React from "react";
import { 
  Flex, 
  Text, 
  Container,
  useColorModeValue,
  Box,
  Image,
} from "@chakra-ui/react";

const Fotter = () => {
  return (
    <Box>
      <Flex 
        pos='fixed'
        bg={useColorModeValue("indigo", "kaca")}
        padding="1.2rem 1.5rem"
        width='100%'
        bottom={0}
      >
          <Container 
            maxW='container.lg' 
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            minHeight='100%'
          >
            <Text
              color={useColorModeValue("naturalYellow", "white")} 
              fontWeight='semibold'
              pr={2}
            >
                Support Me by
            </Text>
            <a
              href="https://www.buymeacoffee.com/elvinafirmh"
              target="blank"
            >
              <Image src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" rounded="md" />
            </a>
          </Container>
      </Flex>
    </Box>
  );
};

export default Fotter;