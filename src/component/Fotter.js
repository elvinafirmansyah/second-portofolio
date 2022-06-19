import React from "react";
import { 
  Flex, 
  Text, 
  Container,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";

const Fotter = () => {
  return (
    <Box>
      <Flex 
        pos='fixed'
        bg={useColorModeValue("yellowNeon", "white")}
        padding="1.5rem 1.5rem"
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
            color={useColorModeValue("naturalYellow", "indigo")} 
            >
                Support Me by
            </Text>
            <Text
                color={useColorModeValue("naturalYellow", "indigo")} 
            >
                Support Me by
            </Text>
          </Container>
      </Flex>
    </Box>
  );
};

export default Fotter;