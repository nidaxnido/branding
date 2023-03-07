import { Button, Flex, HStack, Icon, IconButton, Spacer, Text } from "@chakra-ui/react";
import {FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import React, {useEffect } from 'react'
import { motion } from "framer-motion";
type Props = {}

export default function Header({}:Props){
    
    return (
        <Flex color='gray' >
            <HStack spacing={0} as={motion.div}
                initial={{x:-500, opacity:0, scale:0.5}}
                animate={{x:0, opacity:1, scale:1}}
                transition={{ duration: 1.5 }}
                >
                {/* <Icon as={FaFacebookF} /> */}
                <IconButton aria-label="facebook" icon={<FaFacebookF />} variant='ghost' />
                <IconButton aria-label="youtube" icon={<FaYoutube />} variant='ghost' />
                <IconButton aria-label="instagram" icon={<FaInstagram />} variant='ghost' />
                <IconButton aria-label="twitter" icon={<FaTwitter    />} variant='ghost' />
                {/* <Icon as={FaYoutube} /> */}
            </HStack>
            <Spacer />
           
                <Button leftIcon={<FiMail />} variant='ghost'>Get in touch</Button>
           
            
            
            
        </Flex>
    );
}
