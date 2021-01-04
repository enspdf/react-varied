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
  Stack,
} from "@chakra-ui/react";

const ResetPasswordForm = () => {
  const [email, setEmail] = useState("");
  const auth = useAuth();
  const router = useRouter();

  const handleResetPasswordSubmitForm = (e) => {
    e.preventDefault();

    auth.sendPasswordResetEmail(email).then(() => {
      router.push("/login");
    });
  };

  return (
    <Box mt={4} textAlign="left">
      <form onSubmit={handleResetPasswordSubmitForm}>
        <FormControl isRequired>
          <FormLabel>Email Address</FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="Email address"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
          />
        </FormControl>
        <Box mt={4}>
          <Stack isInline justifyContent="space-between" align="center">
            <Button type="submit" colorScheme="teal" isDisabled={email === ""}>
              Send reset link
            </Button>
            <Text>
              Didn't forgot?{" "}
              <NextLink href="/login">
                <Link color="teal.500">Login</Link>
              </NextLink>
            </Text>
          </Stack>
        </Box>
      </form>
    </Box>
  );
};

export default ResetPasswordForm;
