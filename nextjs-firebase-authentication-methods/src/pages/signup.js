import SignUpForm from "../components/SignUpForm";
import { Box, Flex, Heading } from "@chakra-ui/react";

const SignUpPage = () => {
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
        <Heading>Create a New Account</Heading>
        <SignUpForm />
      </Box>
    </Flex>
  );
};

export default SignUpPage;
