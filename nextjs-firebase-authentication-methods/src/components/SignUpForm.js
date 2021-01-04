import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../hooks/useAuth";
import NextLink from "next/link";
import {
  Text,
  Box,
  Link,
  FormControl,
  FormLabel,
  Input,
  Button,
  IconButton,
  InputGroup,
  InputRightElement,
  Stack,
  Divider,
  Tooltip,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

const SignUpForm = () => {
  const auth = useAuth();
  const router = useRouter();
  const [signUpCredentials, setSignUpCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSignUpCredentialsChange = ({ target: { name, value } }) =>
    setSignUpCredentials({ ...signUpCredentials, [name]: value });

  const handleSignUpSubmitForm = (e) => {
    e.preventDefault();

    return auth.signUp(signUpCredentials).then(() => {
      router.push("/");
    });
  };

  return (
    <Box my={4} textAlign="left">
      <form onSubmit={handleSignUpSubmitForm}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={signUpCredentials.name}
            onChange={handleSignUpCredentialsChange}
          />
        </FormControl>
        <FormControl isRequired mt={6}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={signUpCredentials.email}
            onChange={handleSignUpCredentialsChange}
          />
        </FormControl>
        <FormControl isRequired mt={6}>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={signUpCredentials.password}
              onChange={handleSignUpCredentialsChange}
            />
            <InputRightElement width="3rem">
              <Button h="1.5rem" size="sm" onClick={handlePasswordVisibility}>
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Box mt={4}>
          <Stack isInline justifyContent="space-between" align="center">
            <Button
              width="200px"
              type="submit"
              colorScheme="teal"
              isDisabled={
                signUpCredentials.name === "" ||
                signUpCredentials.email === "" ||
                signUpCredentials.password === ""
              }
            >
              Sign up
            </Button>
            <Text>
              Already have an account?{" "}
              <NextLink href="/login">
                <Link color="teal.500">Login</Link>
              </NextLink>
            </Text>
          </Stack>
        </Box>
        <Box mt={4}>
          <Divider />
          <Stack mt={4} isInline align="center" justify="center">
            <Text>Sign up using other method</Text>
            <Tooltip hasArrow label="Using Google" placement="top">
              <IconButton icon={<FaGoogle />} onClick={auth.signInWithGoogle} />
            </Tooltip>
            <Tooltip hasArrow label="Using Facebook" placement="top">
              <IconButton
                icon={<FaFacebook />}
                onClick={auth.signInWithFacebook}
              />
            </Tooltip>
            <Tooltip hasArrow label="Using Github" placement="top">
              <IconButton icon={<FaGithub />} onClick={auth.signInWithGithub} />
            </Tooltip>
          </Stack>
        </Box>
      </form>
    </Box>
  );
};

export default SignUpForm;
