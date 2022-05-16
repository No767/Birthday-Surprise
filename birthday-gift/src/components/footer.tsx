import { FC } from 'react'
import { Text, Container, HStack, chakra} from "@chakra-ui/react"
import { SiReact, SiChakraui, SiNetlify, SiTypescript} from 'react-icons/si';
import '../index.css'

import { motion, isValidMotionProp } from 'framer-motion'; 

const Animated = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
  });

export const Footer: FC = () => {
    return(
        <>
        
        <Container centerContent={true} pt={200} pb={50}>
        <Animated
            animate={{
                y: [-100, 0],
                opacity: [0, 1],
              }}
              // @ts-ignore
              transition={{
                y: {
                  type: "spring",
                },
                duration: 3,
                delay: 0.5
              }}
              viewport={{
                once: true,
              }}>
        <Text>Built and Powered By</Text>
        </Animated>
        <HStack spacing='24px' pt={25}>
            <Animated
            animate={{
                y: [-100, 0],
                opacity: [0, 1],
              }}
              // @ts-ignore
              transition={{
                y: {
                  type: "spring",
                },
                duration: 3,
                delay: 0.6
              }}
              viewport={{
                once: true,
              }}>
            <SiTypescript className="colors"/>
            </Animated>
            <Animated
            animate={{
                y: [-100, 0],
                opacity: [0, 1],
              }}
              // @ts-ignore
              transition={{
                y: {
                  type: "spring",
                },
                duration: 3,
                delay: 0.7
              }}
              viewport={{
                once: true,
              }}>
            <SiReact className="colors"/>
            </Animated>
            <Animated
            animate={{
                y: [-100, 0],
                opacity: [0, 1],
              }}
              // @ts-ignore
              transition={{
                y: {
                  type: "spring",
                },
                duration: 3,
                delay: 0.8
              }}
              viewport={{
                once: true,
              }}>
                
            <SiChakraui className="colors"/>
            </Animated>
            <Animated
            animate={{
                y: [-100, 0],
                opacity: [0, 1],
              }}
              // @ts-ignore
              transition={{
                y: {
                  type: "spring",
                },
                duration: 3,
                delay: 0.9
              }}
              viewport={{
                once: true,
              }}>
                
            <SiNetlify className="colors"/>
            </Animated>
        </HStack>
        </Container>
        </>
    );
}