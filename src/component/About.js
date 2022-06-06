import React, { useEffect } from 'react';
import {
    Box,
    Text,
    useColorModeValue,
    Button,
} from "@chakra-ui/react"

import pdf from "./cv.pdf"

const About = () => {
    useEffect(() => {
        document.title = "About"
    }, []);
    return(
        <Box my={["3rem", "5rem"]}>
            <Text fontSize="6xl" as="h1" fontWeight="Bold" color={useColorModeValue("indigo", "yellowNeon")}>About</Text>   
            <Box
                py="13px"
            >
                <Text fontSize={["lg", "md"]} maxW={["100%", "80%"]}>
                    I’m Elvina Firmansyah who loves design and kinds of coding stuff. I'm a designer and web developer as well as a freelancer for the past a year based in Indonesia. I'm currently interested and focused on learning React JS & Javascript that would make easier us of creating something by ourselves, mainly the career and my experience of my future. Mostly all of my days are filled by coding, developing as both good as well as designing wonderful websites and other projects which i have ever made such as development and UI/UX design projects. I've been coding for a year and enjoyed what i have done recently, every parts of my journey exactly. My main focus these months is building accessible of being able to make lots of knowledge and digital experiences for variety and career of clients and my life.
                </Text>
                <Text fontSize={["lg", "md"]} maxW={["100%", "80%"]} mt={3}>
                    I'm excited to be a part of communities or industries that improves me about building the experiences and career of mine. i've personally been posting kinds of coding stuff and everything else on my blog that's be just made on Blogger
                </Text>
                <Text fontSize={["lg", "md"]} maxW={["100%", "80%"]} mt={3}>
                    When i'm working on teams, i tailor my approach to all your need. i constantly focus on achieving the best results for who i'm currently working with, while being able to understand what the requirements that will be, along way to promote growth of provide my experiences mainly.
                </Text>
            </Box>
            <Button 
                mt={4} 
                size="lg" 
                bg={useColorModeValue("naturalYellow", "yellowNeon")}
                color="indigo"
            >
                <a href={pdf} target="blank">Resume</a>
            </Button>
        </Box>
    )
}

export default About;