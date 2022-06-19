import React, { useEffect } from 'react';
import {
    Box,
    Text,
    useColorModeValue,
    Stack,
    Button,
} from "@chakra-ui/react"
import { Link } from 'react-router-dom';


const Home = () => {
    useEffect(() => {
        document.title = "Home"
    }, []);
    return(
        <Box pt={["2rem", "5rem"]} pb={['9rem', '8rem', '9rem', '7rem']}>
            <Text fontSize="6xl" as="h1" fontWeight="Bold" color={useColorModeValue("indigo", "yellowNeon")}>hello, I'm Elvina</Text>
            <Box>
                <Text fontSize="3xl" fontWeight="semibold" color={useColorModeValue("naturalYellow", "gray.500")}>I build and design creative websites and crafts</Text>
            </Box>
            <Box
                py="10px"
            >
                <Text fontSize={["lg", "md"]} maxW={["100%", "80%"]}>
                    I’m Elvina Firmansyah who loves design and kinds of coding stuff. I'm a designer and web developer as well as a freelancer for the past a year based in Indonesia. I'm currently interested and focused on learning React JS & Javascript that make lots of thing in the world as well, mainly the career and my experience of my future. Mostly all of my days are filled by coding, developing as both good as well as designing wonderful websites and other projects which i have ever made such as development and UI/UX design projects. I've been coding for a year and enjoyed what i have done recently, every parts of my journey exactly. My main focus these months is building accessible of being able to make lots of knowledge and digital experiences for variety and career of clients and my life.
                </Text>
            </Box>
            <Box
            display="flex"
            flexBasis={{ base: "100%", md: "auto" }}
            my="11.5px"
            >
            <Stack
                spacing={6}
                align={["baseline", "center", "center", "center"]}
                justify={["start", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row"]}
            >
                <Button 
                    bg={useColorModeValue("indigo", "yellowNeon")}
                    size="lg"
                    color={useColorModeValue("white", "indigo")}
                    fontSize={16}
                    padding={6}
                    borderRadius="7px"
                    _hover={{ bg: (useColorModeValue("lightIndigo", "lightYellow")) }}
                >
                    <Link to='contact'>Get In Touch</Link>
                </Button>
                <Button
                    bg={useColorModeValue("indigo", "yellowNeon")}
                    size="lg"
                    color={useColorModeValue("white", "indigo")}
                    fontSize={16}
                    padding={6}
                    borderRadius="7px"
                    _hover={{ bg: (useColorModeValue("lightIndigo", "lightYellow")) }}
                >
                    <Link to='project'>Check Out My Project</Link>
                </Button>   
            </Stack>
            </Box>
            <Stack
                direction={["column", "row"]}
                spacing={3}
                mt="20px"
                color={useColorModeValue("gray.900", "gray.300")}
                fontWeight="medium"
            >
                <Box>
                    <Text>Front End Developer</Text>
                </Box>
                <Box 
                    display={["none", "block"]}
                >
                    <Text>|</Text>
                </Box>
                <Box>
                    <Text>UI/UX Designer</Text>
                </Box>
            </Stack>
        </Box>
    )
}

export default Home;