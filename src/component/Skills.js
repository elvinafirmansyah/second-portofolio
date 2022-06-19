import React, { useEffect } from 'react';
import {
    Box,
    SimpleGrid,
    Text,
    useColorModeValue,
} from "@chakra-ui/react"

const Skills = () => {
    useEffect(() => {
        document.title = "Skills"
    }, []);
    return(
        <Box pt={["2rem", "4rem"]} pb='10rem'>
            <Text fontSize="6xl" as="h1" fontWeight="Bold" color={useColorModeValue("indigo", "yellowNeon")}>Skills</Text>
            <Box>
                <SimpleGrid 
                    mt={5}
                    mb={3}
                    columns={[1, 2, 4]}
                    spacing={10}
                >
                    <Box
                        bg={useColorModeValue('naturalYellow', 'lightIndigo')}
                        color={useColorModeValue('indigo', 'yellowNeon')}
                        padding={7}
                        borderRadius='11px'
                    >
                        <span class="iconify" data-icon="bxl:html5" data-width="26" data-height="26"></span>
                        <Text fontSize='xl' fontWeight='medium' as='h1' mt={2}>HTML</Text>
                    </Box>
                    <Box
                        bg={useColorModeValue('naturalYellow', 'lightIndigo')}
                        color={useColorModeValue('indigo', 'yellowNeon')}
                        padding={7}
                        borderRadius='11px'
                    >
                        <span class="iconify" data-icon="ci:css3" data-width="26" data-height="26"></span>
                        <Text fontSize='xl' fontWeight='medium' as='h1' mt={2}>CSS</Text>
                    </Box>
                    <Box
                        bg={useColorModeValue('naturalYellow', 'lightIndigo')}
                        color={useColorModeValue('indigo', 'yellowNeon')}
                        padding={7}
                        borderRadius='11px'
                    >
                        <span class="iconify" data-icon="akar-icons:bootstrap-fill" data-width="26" data-height="26"></span>
                        <Text fontSize='xl' fontWeight='medium' as='h1' mt={2}>Bootstrap</Text>
                    </Box>
                    <Box
                        bg={useColorModeValue('naturalYellow', 'lightIndigo')}
                        color={useColorModeValue('indigo', 'yellowNeon')}
                        padding={7}
                        borderRadius='11px'
                    >
                        <span class="iconify" data-icon="bxl:tailwind-css" data-width="26" data-height="26"></span>
                        <Text fontSize='xl' fontWeight='medium' as='h1' mt={2}>Tailwind</Text>
                    </Box>
                    <Box
                        bg={useColorModeValue('naturalYellow', 'lightIndigo')}
                        color={useColorModeValue('indigo', 'yellowNeon')}
                        padding={7}
                        borderRadius='11px'
                    >
                        <span class="iconify" data-icon="akar-icons:javascript-fill" data-width="26" data-height="26"></span>
                        <Text fontSize='xl' fontWeight='medium' as='h1' mt={2}>JavaScript</Text>
                    </Box>
                    <Box
                        bg={useColorModeValue('naturalYellow', 'lightIndigo')}
                        color={useColorModeValue('indigo', 'yellowNeon')}
                        padding={7}
                        borderRadius='11px'
                    >
                        <span class="iconify" data-icon="akar-icons:react-fill" data-width="26" data-height="26"></span>
                        <Text fontSize='xl' fontWeight='medium' as='h1' mt={2}>React JS</Text>
                    </Box>
                    <Box
                        bg={useColorModeValue('naturalYellow', 'lightIndigo')}
                        color={useColorModeValue('indigo', 'yellowNeon')}
                        padding={7}
                        borderRadius='11px'
                    >
                        <span class="iconify" data-icon="simple-icons:chakraui" data-width="26" data-height="26"></span>
                        <Text fontSize='xl' fontWeight='medium' as='h1' mt={2}>Chakra UI</Text>
                    </Box>
                    <Box
                        bg={useColorModeValue('naturalYellow', 'lightIndigo')}
                        color={useColorModeValue('indigo', 'yellowNeon')}
                        padding={7}
                        borderRadius='11px'
                    >
                        <span class="iconify" data-icon="akar-icons:figma-fill" data-width="26" data-height="26"></span>
                        <Text fontSize='xl' fontWeight='medium' as='h1' mt={2}>Figma</Text>
                    </Box>
                    <Box
                        bg={useColorModeValue('naturalYellow', 'lightIndigo')}
                        color={useColorModeValue('indigo', 'yellowNeon')}
                        padding={7}
                        borderRadius='11px'
                    >
                        <span class="iconify" data-icon="fe:git" data-width="26" data-height="26"></span>
                        <Text fontSize='xl' fontWeight='medium' as='h1' mt={2}>Git</Text>
                    </Box>
                    <Box
                        bg={useColorModeValue('naturalYellow', 'lightIndigo')}
                        color={useColorModeValue('indigo', 'yellowNeon')}
                        padding={7}
                        borderRadius='11px'
                    >
                        <span class="iconify" data-icon="akar-icons:github-fill" data-width="26" data-height="26"></span>
                        <Text fontSize='xl' fontWeight='medium' as='h1' mt={2}>Github</Text>
                    </Box>
                    <Box
                        bg={useColorModeValue('naturalYellow', 'lightIndigo')}
                        color={useColorModeValue('indigo', 'yellowNeon')}
                        padding={7}
                        borderRadius='11px'
                    >
                        <span class="iconify" data-icon="bx:minus-front" data-width="26" data-height="26"></span>
                        <Text fontSize='xl' fontWeight='medium' as='h1' mt={2} >Front End</Text>
                    </Box>
                </SimpleGrid>
            </Box>
        </Box>
    )
}

export default Skills;