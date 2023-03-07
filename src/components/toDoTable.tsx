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
    const [tasks, setTasks] = useState<{ newTodo: string; checkmarked: boolean; delete: boolean}[]>([])


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(event.target.value)
    }

    const handleClick = () => {
        console.log('Enviado')
        if (newTodo != ''){
            setTasks([...tasks, {newTodo, checkmarked: false, delete: false}])
        }
        setNewTodo('');
    }

    const handleCheckboxChange = (index: number) => {
        setTasks(tasks.map((task, i) => {
          if (i === index) {
            return {
              ...task,
              checkmarked: !task.checkmarked
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
                        <Checkbox margin="0 0.5rem 0 0" isChecked={task.checkmarked} onChange={() => handleCheckboxChange(index)} style={{ textDecoration: task.checkmarked ? 'line-through' : undefined,  color: task.checkmarked ? 'gray' : 'white' }}>
                            <Text key={index}>{task.newTodo}</Text> 
                        </Checkbox>
                        <CloseIcon color='white' onClick={() => handleDeleteTask(index)} />
                    </Flex>
                ))}   
            </Container>

        </ChakraProvider>
    );
}