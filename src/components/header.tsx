import '@fontsource/Inter/400.css';
import '@fontsource/Inter/700.css';

import theme from './theme';
import {
    Button,
    ChakraProvider,
    Heading,
    Input,
    InputGroup,
    InputRightAddon,
} from '@chakra-ui/react'

export function Header () {
    
  return (
        <ChakraProvider theme={theme}>
                <Heading fontWeight="700" color="white">TO DO LIST</Heading>

                <InputGroup margin="1rem 0 0">
                    <Input fontWeight="400" placeholder="Digite a tarefa" color="white"/>

                    <InputRightAddon width='5.5rem' bg="#14191f"> 

                        <Button h='1.75rem' bg="#14191f" _hover="#14191f" _active="#14191f"  color="white">
                            Adicionar
                        </Button>

                    </InputRightAddon>
                </InputGroup>
        </ChakraProvider>
    );
}