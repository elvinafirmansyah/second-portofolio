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
            img: process.env.PUBLIC_URL + '/img/project9.png',
            title: 'Dribble API',
            description: 'Driible API is made by the feature of Dribble itself, i made it by applying the feature of dribble itself. it could be accessed by taking your own token instead of by just taking automatically. I made it for just filling my emptyness as both good as well as knowing how the dribble api is taken immediately on your own web by react itself.',
            linkFirstButton: null,
            buttonText: 'Github',
            icon: 'fa-brands fa-github fa-lg',
            linkText: 'See More',
            iconLink: 'fa-solid fa-link',
            link: 'https://dribblevin.vercel.app/',
        },
        {
            img: process.env.PUBLIC_URL + '/img/project3.png',
            title: 'News API',
            description: 'Vin News is the project of Implementation API by React JS, that is made for online reader to be interactive within reading those news platforms, and we have CNN News, BBC News, CNBC, VOA. we provide all of those to be used because those platforms have the great news and included the most popular platform of news. hopefully you all will be pleased for reading all as both good as well as adding the useful news, Made by React JS', 
            linkFirstButton: 'https://github.com/elvinafirmansyah/news-api-react',
            buttonText: 'Github',
            icon: 'fa-brands fa-github fa-lg',
            linkText: 'See More',
            iconLink: 'fa-solid fa-link',
            link: 'https://vina-news.netlify.app/'
        },
        {
            img: process.env.PUBLIC_URL + '/img/project8.png',
            title: 'ElShop - Simple Cart System',
            description: 'This is simply a Cart System made by React. i started making this project since a couple of weeks ago, i made it in 1 week because it is made to fill my emptiness of doing something as both good as well as adding an experinece of how the cart system works as it is simply by react itself',
            linkFirstButton: 'https://github.com/elvinafirmansyah/Cart_System',
            buttonText: 'Github',
            icon: 'fa-brands fa-github fa-lg',
            linkText: 'See More',
            iconLink: 'fa-solid fa-link',
            link: 'https://elvinashop.vercel.app/'
        },
        {
            img: process.env.PUBLIC_URL + '/img/project1.png',
            title: 'Incriaysc',
            description: 'Incriaysc is the platform to search any words by JavaScript. Incriaysc is made to make easier all learners, english learners exactly to be more understand what the meaning all words which you need. Made by JavaScript and Tailwind',
            linkFirstButton: 'https://github.com/elvinafirmansyah/Dictionory-App',
            buttonText: 'Github',
            icon: 'fa-brands fa-github fa-lg',
            linkText: 'See More',
            iconLink: 'fa-solid fa-link',
            link: 'https://dictionorycdn.vercel.app/'
        },
        {
            img: process.env.PUBLIC_URL + '/img/project2.png',
            title: 'Quote App',
            description: 'This Quote App is definitely the leisure project thats simply made to fill emptiness at that time. that App is made to make all visiters to be supported at all of they do recently by all of the famous people and support themselves of being able to create the new stuff, Eg Winston S, Kody Keplinger and other ones. Made by JavaScript and Tailwind',
            linkFirstButton: 'https://github.com/elvinafirmansyah/Quotes-Tailwind',
            buttonText: 'Github',
            icon: 'fa-brands fa-github fa-lg',
            linkText: 'See More',
            iconLink: 'fa-solid fa-link',
            link: 'https://vinaquote.netlify.app/'
        },
        {
            img: process.env.PUBLIC_URL + '/img/project4.png',
            title: 'Register System and Form',
            description: 'This app is actually made to be a practice project, i wanted to know how the system of register system work clearly.. in react js exactly. This project is already using the object.key feature and would be rendered as the keywoard automatically that is already typed on the input form, Made by React JS',
            linkFirstButton: 'https://github.com/elvinafirmansyah/RegisterReact',
            buttonText: 'Github',
            icon: 'fa-brands fa-github fa-lg',
            linkText: 'See More',
            iconLink: 'fa-solid fa-link',
            link: 'https://csb-19cuk6.netlify.app/'
        },
        {
            img: process.env.PUBLIC_URL + '/img/project5.png',
            title: 'Engxzu, English Learning Platform',
            description: 'Engxzu is an English learning platform from Indonesia owned by Ladies Of Twins. Founded in 2021 by Elvina Firmansyah with her twin sister, Elvira Firmansyah. Engxzu is an online learning application that provides a place to learn English, which will help students for solving problems in learning English. Made by Bootstrap',
            linkFirstButton: 'https://github.com/Engxzu/Engxzu',
            buttonText: 'Github',
            icon: 'fa-brands fa-github fa-lg',
            linkText: 'See More',
            iconLink: 'fa-solid fa-link',
            link: 'https://engxzu.netlify.app/'
        },
        {
            img: process.env.PUBLIC_URL + '/img/project6.png',
            title: 'Github API',
            description: 'This App is the implementation of API project by JavaScript. You are able to search any users who are already logged in. the result will be found automatically, depends on an user account presence and be able to get the information of the user such as the follower, name, repo, following and the status. Made by JavaScript and Bootstrap',
            linkFirstButton: 'https://github.com/elvinafirmansyah/Github-API',
            buttonText: 'Github',
            icon: 'fa-brands fa-github fa-lg',
            linkText: 'See More',
            iconLink: 'fa-solid fa-link',
            link: 'https://elvinagithub.netlify.app/'
        },
        {
            img: process.env.PUBLIC_URL + '/img/project7.png',
            title: 'Simple Profile Card',
            description: 'This is the simple information of me, you can see a few informations starting from the projects i have ever made, skills, and the followers on my instagram, Made by Boostrap',
            linkFirstButton: 'https://github.com/elvinafirmansyah/profile-card',
            buttonText: 'Github',
            icon: 'fa-brands fa-github fa-lg',
            linkText: 'See More',
            iconLink: 'fa-solid fa-link',
            link: 'https://profilecardelvina.netlify.app/'
        },
        {
            img: process.env.PUBLIC_URL + '/img/design1.png',
            title: 'Shoes App | Mobile Design',
            description: 'This is the design with orange theme. i would say that this is particularly ui/ux design of the shoes app that is filled by the simple design with the App design concept. Hopefully you would love to see all of my design that are recently made by myself. i build the complexity of building and deploying my own model to be as clean as possible',
            linkFirstButton: 'https://dribbble.com/shots/17081283-Shoes-App-Mobile-Design',
            buttonText: 'Dribble',
            icon: 'fa-brands fa-dribbble fa-lg',
            linkText: 'See More',
            iconLink: 'fa-solid fa-link',
            link: 'https://dribbble.com/shots/17081283-Shoes-App-Mobile-Design/attachments/12171342?mode=media'
        },
        {
            img: process.env.PUBLIC_URL + '/img/design8.png',
            title: 'ElMovie | Movie Dashboard Design',
            description: 'This is my new post on Dribble, Hopefully, you are more likely to like what all parts are used on this post. i decided to choose a dark and blue theme to be used on this design that is already mixed. i made a dashboard for a movie app platform like Netflix, honestly im inspired by Hulu. Hopefully you would love to see all, and you would be more likely to like it.',
            linkFirstButton: 'https://dribbble.com/shots/17439969-Engxzu-English-learn-Platform',
            buttonText: 'Dribble',
            icon: 'fa-brands fa-dribbble fa-lg',
            linkText: 'See More',
            iconLink: 'fa-solid fa-link',
            link: 'https://dribbble.com/shots/17439969-Engxzu-English-learn-Platform/attachments/12570570?mode=media'
        },
        {
            img: process.env.PUBLIC_URL + '/img/design2.png',
            title: 'Dierex, Electro Chat |  Web Design',
            description: 'Dierex is named for this platform because of it is artificial word of direct message with the blue and green theme. Dierex is made to make all users more acessable of chatting and sending any message quickly and safely at once online via web',
            linkFirstButton: 'https://dribbble.com/shots/16344929-Dierex-Electro-Chat-Fast-and-Easy-for-You',
            buttonText: 'Dribble',
            icon: 'fa-brands fa-dribbble fa-lg',
            linkText: 'See More',
            iconLink: 'fa-solid fa-link',
            link: 'https://dribbble.com/shots/16344929-Dierex-Electro-Chat-Fast-and-Easy-for-You/attachments/8720825?mode=media'
        },
        {
            img: process.env.PUBLIC_URL + '/img/design3.png',
            title: 'Management Project & Task App | Mobile Design',
            description: 'This is Management Project & Task app to make easy of planning all ur need to be comfortable and presentable. That is genuinely one of the community apps which is able to invite someone to be a part of ur project. i made it with a few pastel colors of being able to get accessibility and great performance of an app',
            linkFirstButton: 'https://dribbble.com/shots/16408144-Management-Project-Task-UI-Design-by-Elvina',
            buttonText: 'Dribble',
            icon: 'fa-brands fa-dribbble fa-lg',
            linkText: 'See More',
            iconLink: 'fa-solid fa-link',
            link: 'https://dribbble.com/shots/16408144-Management-Project-Task-UI-Design-by-Elvina/attachments/10255311?mode=media'
        },
        {
            img: process.env.PUBLIC_URL + '/img/design4.png',
            title: 'Wallet App | Mobile Design',
            description: 'i made a transaction app design of being able to make a best facility in the minimalist design, by myself. i chose the glass theme as the main color which is supported by the galaxy colors such as tosca, light blue, dark purple that are already mixed. i hope this design will inspirate u all to be more extra sprited and improve me as long as time goes',
            linkFirstButton: 'https://dribbble.com/shots/17081347-Wallet-App',
            buttonText: 'Dribble',
            icon: 'fa-brands fa-dribbble fa-lg',
            linkText: 'See More',
            iconLink: 'fa-solid fa-link',
            link: 'https://dribbble.com/shots/17081347-Wallet-App/attachments/12171415?mode=media',
        },
        {
            img: process.env.PUBLIC_URL + '/img/design5.png',
            title: 'Vencvel | Travelling App',
            description: 'Vencvel is the platform of making easy for someone who needs to travel and check in easily and quickly. i made it by figma and one of the web designs. it has to be my best design that is made for my first web design actually so i definitely appreciate on what i have made at all parts of Vencvel, Hopefully u would love and like to see it. although it is absolutely still not completely clean.',
            linkFirstButton: 'https://dribbble.com/shots/16250626-Vencvel-Makes-it-Easy-for-you-to-Travel',
            buttonText: 'Dribble',
            icon: 'fa-brands fa-dribbble fa-lg',
            linkText: 'See More',
            iconLink: 'fa-solid fa-link',
            link: 'https://dribbble.com/shots/16250626-Vencvel-Makes-it-Easy-for-you-to-Travel/attachments/8115591?mode=media'
        },
        {
            img: process.env.PUBLIC_URL + '/img/design6.png',
            title: 'Crypto Dashboard | Web Design',
            description: 'This is the Crypto Dashboard design and would make easier for someone who want to invest in crypto, and kind of that stuff. I made it by Figma of being a first dashboard app to be designed. That is one of web designs',
            linkFirstButton: 'https://dribbble.com/shots/16622852-Crypto-Dashboard-by-Elvina',
            buttonText: 'Dribble',
            icon: 'fa-brands fa-dribbble fa-lg',
            linkText: 'See More',
            iconLink: 'fa-solid fa-link',
            link: 'https://dribbble.com/shots/16622852-Crypto-Dashboard-by-Elvina/attachments/11653182?mode=media'
        },
        {
            img: process.env.PUBLIC_URL + '/img/design7.png',
            title: 'Engxzu | Web Design',
            description: 'This is the implementation of Engxzu design that has already been deployed on a web. That is naturally the collabaration project with my sister, we had to prepare all meaningful layers and useful layers that would be deployed on the page firstly at that time starting from design and code definitely, we coded it by dividing what things should be done by us previously, and finally its done in the middle of febuary this year exactly. i hope this project will be helpful for people who need to improve their skills to be fluent in english  basically',
            linkFirstButton: 'https://dribbble.com/shots/17439969-Engxzu-English-learn-Platform',
            buttonText: 'Dribble',
            icon: 'fa-brands fa-dribbble fa-lg',
            linkText: 'See More',
            iconLink: 'fa-solid fa-link',
            link: 'https://dribbble.com/shots/17439969-Engxzu-English-learn-Platform/attachments/12570570?mode=media'
        },
    ]

    return(
        <Box pt={["2rem", "4rem"]} pb={['9rem', '8rem', '9rem', '7rem']}>
            <Text fontSize="6xl" as="h1" fontWeight="Bold" color={useColorModeValue("indigo", "yellowNeon")}>Project</Text>
            <Text as="h3" fontSize="xl">Selected Project i have worked on</Text>
                <Box>
                    {projectData.map((project) => (
                        <SimpleGrid columns={[1,2]} spacing={['10px', '10px', '40px', '40px']} mt={10} mb={6}>
                            <Box>
                                <a href={project.link} target='blank'>
                                    <Image
                                        src={project.img}
                                        borderRadius='15px'
                                        border='2px solid indigo'
                                    >
                                    </Image>
                                </a>
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
                                    spacing={3}
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