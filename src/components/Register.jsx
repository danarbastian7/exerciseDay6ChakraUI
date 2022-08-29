import { useState } from "react"
import {
  Text,
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  InputGroup,
  Button,
  Modal,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Radio,
  HStack,
  RadioGroup,
} from "@chakra-ui/react"

const Register = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [gender, setGender] = useState("")
  const [currentEmail, setCurrentEmail] = useState("")
  const [currentUser, setCurrentUser] = useState("")
  const [currentPassword, setCurrentPassword] = useState("")
  // const handleSubmit = event => {
  //     event.preventDefault()
  //     alert <ModalHeader >
  //         `Name: ${name}
  //         Email: ${email}
  //         Password: ${password}`
  //*Call Modal*
  const { isOpen, onOpen, onClose } = useDisclosure()
  const submitBtnHandler = () => {
    setCurrentEmail(email)
    setCurrentUser(name)
    setCurrentPassword(password)
    onOpen()
  }

  return (
    <Flex
      flexDirection={"column"}
      width={"100wh"}
      height={"50vh"}
      align={"center"}
      justifyContent={"center"}
    >
      <Box
        w={["full", "md"]}
        p={[9, 10]}
        mt={[20, "30vh"]}
        mx="auto"
        border={["none", "1px"]}
        borderColor={["", "blue.300"]}
        borderRadius={[10]}
      >
        <Box p={"2"} />
        <Box textAlign={"center"}>
          <Heading>Register</Heading>
        </Box>

        <FormControl isRequired>
          <FormLabel>User Name</FormLabel>
          <Input
            type={"name"}
            placeholder="Write Your Name"
            size={"lg"}
            onChange={(name) => setName(name.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type={"email"}
            placeholder="Write your email here"
            size={"lg"}
            onChange={(email) => setEmail(email.target.value)}
          />
        </FormControl>
        <InputGroup>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type={show ? "text" : "password"}
              placeholder="Input your password"
              size={"lg"}
              onChange={(password) => setPassword(password.target.value)}
            />
          </FormControl>
          <InputRightElement width={"4.5rem"}>
            <Button h={"1.5rem"} size="sm" mt={"-10px"} onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Text align={"flex-start"}>Gender</Text>
        <RadioGroup onChange={setGender} value={gender}>
          <HStack direction={"row"}>
            <Radio value={"Male"}>Male</Radio>
            <Radio value={"Female"}>Female</Radio>
          </HStack>
        </RadioGroup>
        <Button
          width={"full"}
          mt={4}
          type="submit"
          backgroundColor={"twitter.100"}
          variant={"box"}
          onClick={submitBtnHandler}
        >
          Register
        </Button>

        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Result</ModalHeader>

            <ModalCloseButton />
            <ModalBody>
              <Text>Username: {name} </Text>
              <Text>Email: {email}</Text>
              <Text>Password: {password}</Text>
              <Text>Gender: {gender}</Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme={"blue"} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Flex>
  )
}

export default Register
