import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import {
    Box,
    Text,
    useColorModeValue,
    Input,
    Textarea,
    SimpleGrid,
    Button,
    Flex,
} from "@chakra-ui/react"
import { send } from 'emailjs-com'


const Contact = () => {
    const [sendName, setSendName] = useState('');
    const [sendEmail, setSendEmail] =  useState('');
    const [message, setMessage] = useState('');

    const handleName = (e) => {
        setSendName(e.target.value);
    }

    const handleEmail = (e) => {
        setSendEmail(e.target.value);
    }

    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        send(
            'service_8wv3n96',
            'template_zyo359m',
            {sendName, sendEmail, message},
            'b71T6Ns8_PVoBz1vW'
        ).then((response) => {
            Swal.fire({
                title: 'Thank You',
                text: 'Your message has been sent successfully',
                icon: 'success',
                confirmButtonText: 'close'
            },  response.status, response.text)
        }).catch((err) => {
            Swal.fire({
                title: 'Oops...',
                text: 'Your message could not be sent',
                icon: 'error',
                confirmButtonText: 'close'
            }, err)
        })
    }

    useEffect(() => {
        document.title = "Contact"
    }, []);
    return(
        <Box pt={[10, 12]}>
            <Text fontSize="6xl" as="h1" fontWeight="Bold" color={useColorModeValue("indigo", "yellowNeon")}>Contact</Text>
            <SimpleGrid
                columns={[1, 1, 2, 2]}
                spacing={10}
                my={7}
            >
                <Box>
                    <Text my={3} fontSize='lg' fontWeight='medium' color={useColorModeValue('naturalYellow', 'white')}>Email: elvinafirmansyah@gmail.com</Text>
                    <Text my={3} color={useColorModeValue('naturalYellow', 'white')} fontSize='lg' fontWeight='medium'>Phone: +62 0896-3087-3931</Text>
                    <Text my={3} color={useColorModeValue('naturalYellow', 'white')} fontSize='lg' fontWeight='medium'>Discord: elvn#6545</Text>
                    <Flex
                        display='flex'
                        my={8}
                    >
                        <Box 
                            mr={7}
                            color={useColorModeValue('indigo', 'white')}
                        >
                            <a href='https://www.instagram.com/elvinaelvira.s/' target='blank'><i className='fa-brands fa-instagram fa-2xl'></i></a>
                        </Box>
                        <Box 
                            mr={7}
                            color={useColorModeValue('indigo', 'white')}
                        >
                            <a href='https://m.facebook.com/elvina.firmansyah.50' target='blank'><i className='fa-brands fa-facebook fa-2xl'></i></a>
                        </Box>
                        <Box 
                            mr={7}
                            color={useColorModeValue('indigo', 'white')}
                        >
                            <a href='https://twitter.com/elvina_one' target='blank'><i className='fa-brands fa-twitter fa-2xl'></i></a>
                        </Box>
                        <Box 
                            mr={7}
                            color={useColorModeValue('indigo', 'white')}
                        >
                            <a href='https://github.com/elvinafirmansyah' target='blank'><i className='fa-brands fa-github fa-2xl'></i></a>
                        </Box>
                        <Box 
                            mr={7}
                            color={useColorModeValue('indigo', 'white')}
                        >
                            <a href='https://dribbble.com/Elvina_Vin19' target='blank'><i className='fa-brands fa-dribbble fa-2xl'></i></a>
                        </Box>
                    </Flex>
                </Box>
                <form onSubmit={handleSubmit}>
                    <Box>
                        <label>Name</label>
                        <Input value={sendName} onChange={handleName} outline={useColorModeValue('0.8px solid lightgray', 'gray')} placeholder='First name' my={3} />
                        <label>Email</label>
                        <Input value={sendEmail} onChange={handleEmail} type='email' outline={useColorModeValue('0.8px solid lightgray', 'gray')} placeholder='Email' my={3} />
                        <label>Message</label>
                        <Textarea placeholder='Send your message here' onChange={handleMessage} outline={useColorModeValue('0.8px solid lightgray', 'gray')} value={message} my={3} />
                    </Box>
                    <Button 
                        bg={useColorModeValue("indigo", "yellowNeon")}
                        _hover={{bg: (useColorModeValue('lightIndigo', 'naturalYellow'))}}
                        color={useColorModeValue('yellowNeon', 'indigo')}
                        my={2}
                        type='submit'
                    >
                        Submit
                    </Button>
                </form>
            </SimpleGrid>
        </Box>
    )
}

export default Contact;