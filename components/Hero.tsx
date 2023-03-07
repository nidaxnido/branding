import { Box, Button, Center, Circle, Flex, HStack, Icon, IconButton, Spacer, Text } from "@chakra-ui/react";
import {FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import React, {useEffect } from 'react'
import { motion } from "framer-motion";
import {Typewriter, useTypewriter } from 'react-simple-typewriter'
type Props = {}

export default function Hero({}:Props){
    const [text, count] = useTypewriter({
        words: ['Hi..', "My name is ni'mal Mursyidah", 
                "You can call me Nida", "I'm a Web Developer", 
                "Currently focusing on frontend developer",
                "Let's connect to know more!"],
        loop:true,
        delaySpeed:2000
    })
    return (
        <Center align="center" border='1px solid red' w='100%' h='90vh'>
            <Box w='calc(80vh)' h='80vh' >
            <Circle border='2px solid' borderColor='gray.500' size='100%' >{text}</Circle>
            </Box>
            
        </Center>
        
    );
}
