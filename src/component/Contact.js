import React, { useEffect } from 'react';
import {
    Box,
    Text,
    useColorModeValue,
} from "@chakra-ui/react"


const Contact = () => {
    useEffect(() => {
        document.title = "Contact"
    }, []);
    return(
        <Box pt={[10, 12]}>
            <Text fontSize="6xl" as="h1" fontWeight="Bold" color={useColorModeValue("indigo", "yellowNeon")}>Contact</Text>
        </Box>
    )
}

export default Contact;