import React, { useEffect } from 'react';
import {
    Box,
    Text,
    useColorModeValue,
} from "@chakra-ui/react"

const Skills = () => {
    useEffect(() => {
        document.title = "Skills"
    }, []);
    return(
        <Box pt={[10, 12]}>
            <Text fontSize="6xl" as="h1" fontWeight="Bold" color={useColorModeValue("indigo", "yellowNeon")}>Skills</Text>
        </Box>
    )
}

export default Skills;