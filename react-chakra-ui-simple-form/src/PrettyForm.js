import React, { useState } from "react";
import {
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  FormHelperText,
} from "@chakra-ui/core";

export default function PrettyForm() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const isInvalid = emailAddress === "" || password === "";

  const handleSignIn = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSignIn}>
      <Stack maxWidth={600} margin="auto" spacing={5} marginTop={5}>
        <FormControl>
          <FormLabel htmlFor="email">Email Address</FormLabel>
          <Input
            isRequired
            type="email"
            id="email"
            aria-describedby="email-helper-text"
            onChange={({ target }) => setEmailAddress(target.value)}
            value={emailAddress}
          />
          <FormHelperText id="email-helper-text">
            Your user account email address.
          </FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <InputGroup>
            <Input
              isRequired
              type={showPassword ? "text" : "password"}
              id="password"
              aria-describedby="password-helper-text"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            <InputRightElement width="4.5rem">
              <Button
                height="1.75rem"
                size="sm"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormHelperText id="password-helper-text">
            The password you used to sign up with.
          </FormHelperText>
        </FormControl>
        <FormControl>
          <Button variantColor="blue" type="submit" isDisabled={isInvalid}>
            Sign In
          </Button>
        </FormControl>
      </Stack>
    </form>
  );
}
