import { Box, Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Header } from "../components/header";
import { ToDoTable } from "../components/toDoTable";

const Home: NextPage = () => {
  return (
    <Flex h="100vh" justifyContent="center" alignItems="center" background="#20272F">
      <Box w="40rem" backgroundColor="#14191f" borderRadius="5" p='6'>
        <Header/>
        <ToDoTable/>
      </Box>
    </Flex>
  );
};

export default Home;
