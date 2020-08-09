const {
  Input,
  Stack,
  InputLeftAddon,
  Icon,
  InputGroup,
  Button,
  FormControl,
  Divider,
  FormHelperText,
} = require("@chakra-ui/core");

const form = () => {
  return (
    <form action="submit">
      <Stack spacing={3}>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftAddon children={<Icon name="info" />} />
            <Input
              type="name"
              placeholder="First name"
              aria-label="First name"
            />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftAddon children={<Icon name="info" />} />
            <Input type="name" placeholder="Last name" aria-label="Last name" />
          </InputGroup>
        </FormControl>
        <Divider />
        <FormControl isRequired>
          <InputGroup>
            <InputLeftAddon children={<Icon name="email" />} />
            <Input type="email" placeholder="Email" aria-label="Email" />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftAddon children={<Icon name="lock" />} />
            <Input
              type="password"
              placeholder="Password"
              aria-label="Password"
            />
          </InputGroup>
        </FormControl>
        <Button
          type="submit"
          boxShadow="sm"
          _hover={{ boxShadow: "md" }}
          _active={{ boxShadow: "lg" }}
        >
          Sign up!
        </Button>
        <FormHelperText textAlign="center">
          We will never share your email!
          <br />
          ☝🏼
        </FormHelperText>
      </Stack>
    </form>
  );
};

export default form;
