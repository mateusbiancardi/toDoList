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

import { CloseIcon } from '@chakra-ui/icons'
import { useState } from 'react'

export function ToDoTable () {
    const [newTodo, setNewTodo] = useState<string>('')
    const [tasks, setTasks] = useState<{ newTodo: string; concluida: boolean; delete: boolean}[]>([])


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(event.target.value)
    }

    const handleClick = () => {
        console.log('Enviado')
        if (newTodo != ''){
            setTasks([...tasks, {newTodo, concluida: false, delete: false}])
        }
        setNewTodo('');
    }

    const handleCheckboxChange = (index: number) => {
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

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code == 'Enter' || event.code == 'NumpadEnter') {
            handleClick()
        }
    }

    const handleDeleteTask = (index: number) => {
        tasks.splice(index, 1)
        setTasks(tasks.map((task, i) => {
            if (i === index) {
                tasks.splice(index, 1)
            }
            return task;
          }));
    }
    
    return (
        <ChakraProvider theme={theme}>
            <Heading fontWeight="700" color="white">TO DO LIST</Heading>
            <InputGroup margin="1rem 0 0">
                <Input fontWeight="400" placeholder="Digite a tarefa" color="white" type='text' onChange={handleChange} onKeyDown={handleKeyDown}/>
                <InputRightAddon width='5.5rem' bg="#14191f">
                    <Button h='1.75rem' bg="#14191f" _hover={{backgroundColor: "#14191f"}} _active={{backgroundColor: "#14191f"}} color="white" onClick={handleClick}>
                        Adicionar
                    </Button>
                </InputRightAddon>
            </InputGroup>
            

            <Container w="100%" margin="1rem 0 0 0" padding="0">    
                {tasks.map((task, index) => (
                    <Flex margin="0.5rem 0 0 0" justifyContent='space-between'>
                        <Checkbox margin="0 0.5rem 0 0" isChecked={task.concluida} onChange={() => handleCheckboxChange(index)} style={task.concluida ? { textDecoration: 'line-through' } : undefined}>
                            <Text key={index} color='white'>{task.newTodo}</Text> 
                        </Checkbox>
                        <CloseIcon color='white' onClick={() => handleDeleteTask(index)} />
                    </Flex>
                ))}   
            </Container>

        </ChakraProvider>
    );
}