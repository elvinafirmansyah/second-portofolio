import React, { useState, useEffect } from 'react';
import './main.css';
import Home from './component/Home';
import About from './component/About';
import Project from './component/Project';
import Contact from './component/Contact';
import Skills from './component/Skills';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./component/Navbar"
import { Container, Box, Text } from '@chakra-ui/react';
import CircleLoader from "react-spinners/CircleLoader";


const App = () => {
  const [loading, setLoading] = useState(false);  
  useEffect(() => {
    setLoading(true)
    document.title = 'Loading...'
    setTimeout(() => {
      setLoading(false)
    }, 4000);
  }, []);
  return(
      <Box>
        {loading ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minH="100vh"
            >
              <CircleLoader color="#fff200" loading={loading} size={40} />
              <Text as="h2" fontSize="xl" mx={3} color="yellowNeon">Loading...</Text>
            </Box>
          ) : (
            <Container maxW="container.lg">
              <Navbar />
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='about' element={<About />}/>
                <Route path='project' element={<Project />}/>
                <Route path='skills' element={<Skills/>} />
                <Route path='contact' element={<Contact />}/>
              </Routes>
            </Container>
          )
        }
      </Box>
  )
}

export default App;

