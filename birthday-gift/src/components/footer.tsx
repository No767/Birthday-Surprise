import { FC } from 'react'
import { Text, Container, HStack} from "@chakra-ui/react"
import { SiReact, SiChakraui, SiNetlify, SiTypescript} from 'react-icons/si';
import '../index.css'
export const Footer: FC = () => {
    return(
        <>
        
        <Container centerContent={true} pt={200}>
        <Text>Built and Powered By</Text>
        <HStack spacing='24px' pt={25}>
            <SiTypescript className="colors"/>
            <SiReact className="colors"/>
            <SiChakraui className="colors"/>
            <SiNetlify className="colors"/>
        </HStack>
        </Container>
        </>
    );
}