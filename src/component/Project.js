import React, { useEffect } from 'react';
import {
    Box,
    SimpleGrid,
    Text,
    useColorModeValue,
    Image,
    Button,
} from "@chakra-ui/react"

const Project = () => {
    useEffect(() => {
        document.title = "Project"
    }, []);

    const projectData = [
        {
            id: 1,
            img: process.env.PUBLIC_URL + '/img/project1.png',
            title: 'Incriaysc',
            description: 'Incriaysc is the platform to search any words by JavaScript. Incriaysc is made to make easier all learners, english learners exactly to be more understand what the meaning all words which you need.',
            linkFirstButton: 'https://github.com/elvinafirmansyah/Dictionory-App',
            buttonText: 'Github',
            icon: 'fa-brands fa-github fa-lg',
            linkText: 'See More',
            iconLink: 'fa-solid fa-link'
        },
        {
            id: 2,
            img: process.env.PUBLIC_URL + '/img/project2.png',
            title: 'Quote App',
            description: 'This Quote App is definitely the leisure project thats simply made to fill emptiness at that time. that App is made to make all visiters to be supported at all of they do recently by all of the famous people and support themselves of being able to create the new stuff such as Winston S, Kody Keplinger and other ones. Made by JavaScript and Tailwind',
            linkFirstButton: 'https://github.com/elvinafirmansyah/Quotes-Tailwind',
            buttonText: 'Github',
            icon: 'fa-brands fa-github fa-lg',
            linkText: 'See More',
            iconLink: 'fa-solid fa-link'
        },
        {
            id: 3,
            img: process.env.PUBLIC_URL + '/img/project3.png',
            title: 'News API',
            description: 'Vin News is the project of Implementation API by React JS, that is made for online reader to be interactive within reading those news platforms, and we have CNN News, BBC News, CNBC, VOA. we provide all of those to be used because those platforms have the great news and included the most popular platform of news. hopefully you all will be pleased for reading all as both good as well as adding the useful news', 
            linkFirstButton: 'https://github.com/elvinafirmansyah/news-api-react',
            buttonText: 'Github',
            icon: 'fa-brands fa-github fa-lg',
            linkText: 'See More',
            iconLink: 'fa-solid fa-link'
        },
        {
            id: 4,
            img: process.env.PUBLIC_URL + '/img/project4.png',
            title: 'Register System and Form',
            description: 'This app is actually made to be practice project, i wanted to know how the system of register system work clearly.. in react js exactly. This project is already using the object.key feature and would be rendered as the keywoard automatically that is already typed on the input form',
            linkFirstButton: 'https://github.com/elvinafirmansyah/RegisterReact',
            buttonText: 'Github',
            icon: 'fa-brands fa-github fa-lg',
            linkText: 'See More',
            iconLink: 'fa-solid fa-link'
        },
        {
            id: 5,
            img: process.env.PUBLIC_URL + '/img/project5.png',
            title: 'Engxzu, English Learning Platform',
            description: 'Engxzu is an English learning platform from Indonesia owned by Ladies Of Twins. Founded in 2021 by Elvina Firmansyah with her twin sister, Elvira Firmansyah. Engxzu is an online learning application that provides a place to learn English, which will help students for solving problems in learning English.',
            linkFirstButton: 'https://github.com/Engxzu/Engxzu',
            buttonText: 'Github',
            icon: 'fa-brands fa-github fa-lg',
            linkText: 'See More',
            iconLink: 'fa-solid fa-link'
        },
        {
            id: 6,
            img: process.env.PUBLIC_URL + '/img/project6.png',
            title: 'Github API',
            description: 'This App is the implementation of API project by JavaScript. You are able to search any users who are already logged in. the result will be found automatically, depends on an user account presence and be able to get the information of the user such as the follower, name, repo, following and the status.',
            linkFirstButton: 'https://github.com/elvinafirmansyah/Github-API',
            buttonText: 'Github',
            icon: 'fa-brands fa-github fa-lg',
            linkText: 'See More',
            iconLink: 'fa-solid fa-link'
        },
        {
            id: 7,
            img: process.env.PUBLIC_URL + '/img/project7.png',
            title: 'Simple Profile Card',
            description: 'This is the simple information of me, you can see a few informations starting from the projects i have ever made, skills, and the followers on my instagram',
            linkFirstButton: 'https://github.com/elvinafirmansyah/profile-card',
            buttonText: 'Github',
            icon: 'fa-brands fa-github fa-lg',
            linkText: 'See More',
            iconLink: 'fa-solid fa-link'
        },
        {
            id: 8,
            img: process.env.PUBLIC_URL + '/img/design1.png',
            title: 'Shoes App | Mobile Design',
            description: 'Incriaysc is the platform to search any words. Incriaysc is made to make easier all learners, english learners exactly to be more understand what the meaning all those words.',
            linkFirstButton: 'https://github.com/elvinafirmansyah/Quotes-Tailwind',
            buttonText: 'Dribble',
            icon: 'fa-brands fa-dribbble fa-lg',
            linkText: 'See More',
            iconLink: 'fa-solid fa-link'
        },
        {
            id: 9,
            img: process.env.PUBLIC_URL + '/img/design2.png',
            title: 'Dierex, Electro Chat |  Web Design',
            description: 'Incriaysc is the platform to search any words. Incriaysc is made to make easier all learners, english learners exactly to be more understand what the meaning all those words.',
            linkFirstButton: 'https://github.com/elvinafirmansyah/Quotes-Tailwind',
            buttonText: 'Dribble',
            icon: 'fa-brands fa-dribbble fa-lg',
            linkText: 'See More',
            iconLink: 'fa-solid fa-link'
        },
        {
            id: 10,
            img: process.env.PUBLIC_URL + '/img/design3.png',
            title: 'Management Project & Task App | Mobile Design',
            description: 'Incriaysc is the platform to search any words. Incriaysc is made to make easier all learners, english learners exactly to be more understand what the meaning all those words.',
            linkFirstButton: 'https://github.com/elvinafirmansyah/Quotes-Tailwind',
            buttonText: 'Dribble',
            icon: 'fa-brands fa-dribbble fa-lg',
            linkText: 'See More',
            iconLink: 'fa-solid fa-link'
        },
        {
            id: 11,
            img: process.env.PUBLIC_URL + '/img/design4.png',
            title: 'Wallet App | Mobile Design',
            description: 'Incriaysc is the platform to search any words. Incriaysc is made to make easier all learners, english learners exactly to be more understand what the meaning all those words.',
            linkFirstButton: 'https://github.com/elvinafirmansyah/Quotes-Tailwind',
            buttonText: 'Dribble',
            icon: 'fa-brands fa-dribbble fa-lg',
            linkText: 'See More',
            iconLink: 'fa-solid fa-link'
        },
        {
            id: 12,
            img: process.env.PUBLIC_URL + '/img/design5.png',
            title: 'Vencvel | Travelling App',
            description: 'Incriaysc is the platform to search any words. Incriaysc is made to make easier all learners, english learners exactly to be more understand what the meaning all those words.',
            linkFirstButton: 'https://github.com/elvinafirmansyah/Quotes-Tailwind',
            buttonText: 'Dribble',
            icon: 'fa-brands fa-dribbble fa-lg',
            linkText: 'See More',
            iconLink: 'fa-solid fa-link'
        },
        {
            id: 13,
            img: process.env.PUBLIC_URL + '/img/design6.png',
            title: 'Crypto Dashboard | Web Design',
            description: 'Incriaysc is the platform to search any words. Incriaysc is made to make easier all learners, english learners exactly to be more understand what the meaning all those words.',
            linkFirstButton: 'https://github.com/elvinafirmansyah/Quotes-Tailwind',
            buttonText: 'Dribble',
            icon: 'fa-brands fa-dribbble fa-lg',
            linkText: 'See More',
            iconLink: 'fa-solid fa-link'
        },
        {
            id: 14,
            img: process.env.PUBLIC_URL + '/img/design7.png',
            title: 'Engxzu | Web Design',
            description: 'Incriaysc is the platform to search any words. Incriaysc is made to make easier all learners, english learners exactly to be more understand what the meaning all those words.',
            linkFirstButton: 'https://github.com/elvinafirmansyah/Quotes-Tailwind',
            buttonText: 'Dribble',
            icon: 'fa-brands fa-dribbble fa-lg',
            linkText: 'See More',
            iconLink: 'fa-solid fa-link'
        },
    ]

    return(
        <Box pt={[10, 12]}>
            <Text fontSize="6xl" as="h1" fontWeight="Bold" color={useColorModeValue("indigo", "yellowNeon")}>Project</Text>
            <Text as="h3" fontSize="xl">Selected Project i have worked on</Text>
                <Box>
                    {projectData.map((project) => (
                        <SimpleGrid columns={[1,2]} spacing={['10px', '10px', '40px', '40px']} my={10}>
                            <Box>
                                <Image
                                    src={project.img}
                                    borderRadius='15px'
                                    border='2px solid indigo'
                                >
                                </Image>
                            </Box>
                            <Box>
                                <Text 
                                    as='a' 
                                    fontWeight='bold' 
                                    fontSize='25px'
                                    _hover={{ textDecoration:'underline' }}
                                    cursor='pointer'
                                >
                                    <a href={project.link} target='blank'>
                                        {project.title}
                                    </a>
                                </Text>
                                <Text as='p'>{project.description}</Text>
                                <SimpleGrid
                                    column={[1, 1, 2, 2]}
                                    spacing={8}
                                    display='block'
                                >
                                    <Button 
                                        size='lg' 
                                        bg='naturalYellow' 
                                        _hover={{ bg: 'yellowNeon' }} 
                                        color='black'
                                        mr={3}
                                        my={3}
                                    >
                                        <a href={project.linkFirstButton} target='blank'>
                                            <i class={project.icon} style={{paddingRight: '5px'}}></i>
                                            {project.buttonText}
                                        </a>
                                    </Button>
                                    <Button 
                                        size='lg' 
                                        bg='black' 
                                        _hover={{ bg: 'blackAlpha.800', color: 'whiteAlpha.700' }} 
                                        color='white'
                                        border='2px solid indigo'
                                    >
                                        <a href={project.link} target='blank' fontWeight='light'>
                                            <i class={project.iconLink} style={{paddingRight: '5px'}}></i>
                                            {project.linkText}
                                        </a>
                                    </Button>
                                </SimpleGrid>
                            </Box>
                        </SimpleGrid> 
                    ))}
                </Box>
        </Box>
    )
}

export default Project;