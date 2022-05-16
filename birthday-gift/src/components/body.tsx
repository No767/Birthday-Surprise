import { FC } from 'react';
import { Text, Heading, Container, chakra, Image, Center } from "@chakra-ui/react"
import { motion, isValidMotionProp } from 'framer-motion'; 

const Animated = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
  });

export const Body: FC = () => {
    return (
        <>
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
          }}
          viewport={{
            once: true,
          }}
        >
        <Container centerContent={true} pt={50}>
        <Text align="center" fontSize='4xl'>Happy Birthday Elmene!!!</Text>
        </Container>
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
            delay: 0.3
          }}
          viewport={{
            once: true,
          }}>
        <Container centerContent={true} pt={50}>
        <Text align="center">I just wanted to say happy birthday to you. I didn't know what to give for your birthday, so here u go! u get your own website! - Noelle</Text>
        </Container>
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
            delay: 0.6
          }}
          viewport={{
            once: true,
          }}>
        <Container centerContent={true} pt={50}>
            <Image src="https://raw.githubusercontent.com/No767/Birthday-Surprise/master/birthday-gift/src/assets/flowers.jpg" align="center" sizes="md" htmlHeight={256} htmlWidth={256} borderRadius="2xl"/>
            <Text pt={25}>And have a pic of some flowers!!!</Text>
        </Container>
        </Animated>
        
        </>
    );
}