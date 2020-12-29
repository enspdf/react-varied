import { useState } from "react";
import firebaseClient from "../firebaseClient";
import firebase from "firebase/app";
import "firebase/auth";
import {
  Box,
  Flex,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Stack,
  Button,
  Heading,
  useToast,
} from "@chakra-ui/react";

export default function Login() {
  firebaseClient();

  const toast = useToast();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleCreateAccount = async () => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(() => {
        window.location.href = "/";
      })
      .catch((error) => {
        const message = error.message;

        toast({
          title: "An error ocurred",
          description: message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  const handleLogin = async () => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        window.location.href = "/";
      })
      .catch((error) => {
        const message = error.message;

        toast({
          title: "An error ocurred",
          description: message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  return (
    <Flex>
      <Box w={500} p={4} my={12} mx="auto">
        <Heading as="h2" textAlign="center">
          Login
        </Heading>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="emailAddress"
            value={email}
            aria-describedby="email-helper-text"
          ></Input>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            onChange={(e) => setPass(e.target.value)}
            type="password"
            id="pass"
            value={pass}
            aria-describedby="password-helper-text"
          ></Input>
        </FormControl>
        <Stack justify="center" mt={6} isInline spacing={10}>
          <Button
            minWidth="40%"
            variant="solid"
            colorScheme="blue"
            isDisabled={email === "" || pass === ""}
            onClick={handleCreateAccount}
          >
            Create Account
          </Button>
          <Button
            minWidth="40%"
            variant="solid"
            colorScheme="blue"
            isDisabled={email === "" || pass === ""}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
}
