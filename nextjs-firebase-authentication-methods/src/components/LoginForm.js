import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/router";
import NextLink from "next/link";
import {
  Text,
  Box,
  Link,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const LoginForm = () => {
  const auth = useAuth();
  const router = useRouter();
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  const handleLoginCredentialsChange = ({ target: { name, value } }) =>
    setLoginCredentials({ ...loginCredentials, [name]: value });

  const handleLoginSubmitForm = (e) => {
    e.preventDefault();

    return auth.signIn(loginCredentials).then(() => {
      router.push("/");
    });
  };

  return (
    <Box my={4} textAlign="left">
      <form onSubmit={handleLoginSubmitForm}>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={loginCredentials.email}
            onChange={handleLoginCredentialsChange}
          />
        </FormControl>
        <FormControl mt={6} isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={loginCredentials.password}
              onChange={handleLoginCredentialsChange}
            />
            <InputRightElement width="3rem">
              <Button h="1.5rem" size="sm" onClick={handlePasswordVisibility}>
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Box mt={4} textAlign="center">
          <Stack isInline justifyContent="space-between">
            <Text>
              Don't have an account?{" "}
              <NextLink href="/signup">
                <Link color="teal.500">Sign up</Link>
              </NextLink>
            </Text>
            <NextLink href="/reset-password">
              <Link color="teal.500">Forgot your password?</Link>
            </NextLink>
          </Stack>
          <Button
            width="200px"
            mt={4}
            type="submit"
            colorScheme="teal"
            isDisabled={
              loginCredentials.email === "" || loginCredentials.password === ""
            }
          >
            Login
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default LoginForm;
