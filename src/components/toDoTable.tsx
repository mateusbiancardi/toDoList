import theme from '../styles/theme';
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

import { useState } from 'react'
import { CloseIcon } from '@chakra-ui/icons';

export function ToDoTable () {
    type Items = {
        newTodo: string,
        checkmarked: boolean,
    }

    const [newTodo, setNewTodo] = useState<string>('')
    const [tasks, setTasks] = useState<Items[]>([])
    const [filterTasks, setFilterTasks] = useState<Items[]>(tasks)
    const [filter, setFilter] = useState('Todos')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(event.target.value)
    }

    const handleClick = () => {
        console.log('Enviado')
        if (newTodo != ''){
            setTasks([...tasks, {newTodo, checkmarked: false}])
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
        setTasks(tasks.filter((task, i) => i !== index))
    }

    const handleFilterChange = (filter: string) => {
        setFilter(filter)
        //setFilterTasks(handleFilter())
    }

    /*const handleFilter = () => {
        return filter == 'Em andamento' ? tasks.filter(task => task.checkmarked) : filter == 'Completo' ? tasks.filter(task => !task.checkmarked) : tasks
    }*/
          
    return (
        <ChakraProvider theme={theme}>
            <Heading display='flex' fontWeight="700" color="white">
                TO DO LIST
            </Heading>
            <InputGroup margin="1rem 0 0">
                <Input fontWeight="400" placeholder="Digite a tarefa" color="white" type='text' onChange={handleChange} onKeyDown={handleKeyDown}/>
                <InputRightAddon width='5.5rem' bg="#14191f">
                    <Button h='1.75rem' bg="#14191f" _hover={{backgroundColor: "#14191f"}} _active={{backgroundColor: "#14191f"}} color="white" onClick={handleClick}>
                        Adicionar
                    </Button>
                </InputRightAddon>
            </InputGroup>
            

            <Container w="100%" margin="1rem 0 0 0" padding="0"> 
                <Flex justifyContent='space-between' margin="1rem 0 0">
                    <Button onClick={() => handleFilterChange('Todos')}>
                        Todos
                    </Button> 
                    <Button onClick={() => handleFilterChange('Em andamento')}>
                        Em Andamento
                    </Button>
                    <Button onClick={() => handleFilterChange('Completo')}>
                        Concluídas
                    </Button>
                </ Flex>  
                {(filter == 'Em andamento' ? tasks.filter(task => !task.checkmarked) : filter == 'Completo' ? tasks.filter(task => task.checkmarked) : tasks).map((task, index) => (
                    <Flex key={index} margin="0.5rem 0 0 0" justifyContent='space-between'>
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