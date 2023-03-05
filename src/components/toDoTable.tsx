import '@fontsource/Inter/400.css';
import '@fontsource/Inter/700.css';

import theme from './theme';
import {
    Button,
    ChakraProvider,
    Checkbox,
    Container,
    Flex,
    Heading,
    Input,
    InputGroup,
    InputRightAddon,
    Text
} from '@chakra-ui/react'

import { DeleteIcon } from '@chakra-ui/icons'
import { useState } from 'react'

export function ToDoTable () {
    const [newTodo, setNewTodo] = useState<string>('')
    const [tasks, setTasks] = useState<{ newTodo: string; concluida: boolean}[]>([])

    //Altera o texto de newTodo
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(event.target.value)
    }

    const handleClick = () => {
        console.log('Enviado')
        if (newTodo != ''){
            setTasks([...tasks, {newTodo, concluida: false}])
        }
        setNewTodo('');
    }

    const handleCheckboxChange = (index: number) => {
        // Inverte o estado de concluída da tarefa
        setTasks(tasks.map((task, i) => {
          if (i === index) {
            return {
              ...task,
              concluida: !task.concluida
            };
          }
          return task;
        }));
      }
    
    return (
        <ChakraProvider theme={theme}>
            <Heading fontWeight="700" color="white">TO DO LIST</Heading>
            <InputGroup margin="1rem 0 0">
                <Input fontWeight="400" placeholder="Digite a tarefa" color="white" type='text' onChange={handleChange} />
                <InputRightAddon width='5.5rem' bg="#14191f">
                    <Button h='1.75rem' bg="#14191f" _hover="#14191f" _active="#14191f" color="white" onClick={handleClick}>
                        Adicionar
                    </Button>
                </InputRightAddon>
            </InputGroup>
            

            <Container w="100%" margin="1rem 0 0 0" padding="0">    
                {tasks.map((task, index) => (
                    <Flex margin="0.5rem 0 0 0">
                        <Checkbox margin="0 0.5rem 0 0" isChecked={task.concluida} onChange={() => handleCheckboxChange(index)} style={task.concluida ? { textDecoration: 'line-through' } : undefined}>
                            <Text key={index} color='white'>{task.newTodo}</Text>
                        </Checkbox>
                    </Flex>
                ))}   
            </Container>

        </ChakraProvider>
    );
}