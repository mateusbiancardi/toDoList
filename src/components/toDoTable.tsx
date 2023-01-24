import { ChakraProvider, Checkbox, Container, Flex, Text } from "@chakra-ui/react";
import '@fontsource/Inter/400.css';
import '@fontsource/Inter/700.css';

import theme from './theme';

export function ToDoTable () {
    return (
        <ChakraProvider theme={theme}>
            <Container w="100%" margin="1rem 0 0 0" padding="0">

                <Flex margin="0.5rem 0 0 0">
                    <Checkbox margin="0 0.5rem 0 0"/>
                    <Text color="white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maiores est itaque nobis unde perferendis voluptate doloribus explicabo, voluptatum esse saepe repellendus quod libero veniam provident cupiditate ad officia. Pariatur.</Text>
                </Flex>

                <Flex margin="0.5rem 0 0 0">
                    <Checkbox margin="0 0.5rem 0 0"/>
                    <Text color="white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque expedita tenetur ducimus consectetur eligendi exercitationem? Obcaecati cum atque laudantium in aperiam ratione minima quo ipsa, quod quisquam quam incidunt!</Text>
                </Flex>
                
            </Container>
        </ChakraProvider>
    );
}