import LoginForm from "../components/LoginForm";
import { Box, Flex, Heading } from "@chakra-ui/react";

const LoginPage = () => {
  return (
    <Flex minHeight="100vh" width="full" align="center" justifyContent="center">
      <Box
        p={4}
        borderWidth={1}
        px={4}
        width="full"
        maxW="600px"
        borderRadius={4}
        textAlign="center"
        boxShadow="lg"
      >
        <Heading>Sign In to Your Account</Heading>
        <LoginForm />
      </Box>
    </Flex>
  );
};

export default LoginPage;
