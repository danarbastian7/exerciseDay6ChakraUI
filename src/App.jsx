// import logo from "./logo.svg"
// import "./App.css"

import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Counter from "./pages/Counter"
import TextPage from "./pages/TextPage"
import List from "./pages/List"
import Filter from "./pages/Filter"
import RegisterPage from "./pages/RegisterPage"
import {
  ChakraProvider,
  Flex,
  Text,
  Box,
  Tabs,
  TabList,
  Tab,
} from "@chakra-ui/react"

const data = [
  {
    fullName: "Naruto",
    position: "Kucing",
    age: 100,
  },
  { fullName: "Doraemon", position: "Hokage", age: 17 },
  {
    fullName: "Bill",
    position: "CEO",
    age: 40,
  },
]

import Profile from "./components/Profile/index"
// import RegisterPage from "./pages/RegisterPage"

function App() {
  const renderProfiles = () => {
    let result = data.map((val) => {
      return (
        <Profile
          fullName={val.fullName}
          position={val.position}
          age={val.age}
        />
      )
    })
    return result
  }

  return (
    <Box className="App">
      <Text
        fontSize="3xl"
        fontWeight={"bold"}
        fontFamily={"serif"}
        color={"blue.500"}
        align={"center"}
        justifyContent={"center"}
      >
        <Link to="App">Hello World</Link>
      </Text>
      <ChakraProvider>
        <Flex justify={"center"} boxSizing={"inherit"}>
          <Tabs size={"md"} varian={"enclosed"}>
            <TabList mb="1em">
              <Link to="/home">
                <Tab>Home</Tab>
              </Link>
              <Link to="/about">
                <Tab>About</Tab>
              </Link>
              <Link to="/counter">
                <Tab>Counter</Tab>
              </Link>
              <Link to="/text">
                <Tab>Text Area</Tab>
              </Link>
              <Link to="/list">
                <Text mt={"2"}>List</Text>
              </Link>
              <Link to="/filter">
                <Tab>Filter</Tab>
              </Link>
              <Link to="/RegisterPage">
                <Tab>Register Page</Tab>
              </Link>
            </TabList>
          </Tabs>
        </Flex>
      </ChakraProvider>

      {/* <UnorderedList>
        <ListItem>
          <Link to="/home">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/about">About</Link>
        </ListItem>
        <ListItem>
          <Link to="/counter">Counter</Link>
        </ListItem>
        <ListItem>
          <Link to="/text">Text Area</Link>
        </ListItem>
        <ListItem>
          <Link to="/list">List</Link>
        </ListItem>
        <ListItem>
          <Link to="/filter">Filter</Link>
        </ListItem>
        <ListItem>
          <Link to="/Registerpage">Register Page</Link>
        </ListItem>
      </UnorderedList> */}
      {/* {renderProfiles()} */}

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/text" element={<TextPage />} />
        <Route path="/list" element={<List />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/Registerpage" element={<RegisterPage />} />
      </Routes>
    </Box>
  )
}

export default App
