import { Flex, Heading, useTheme, Theme } from "@chakra-ui/react";

const AppHeader = () => {
  const theme: Theme = useTheme();

  return (
    <Flex
      as="nav"
      flex="1"
      mb={4}
      padding="1.5rem"
      bg={theme.colors.blue[700]}
      color="white"
    >
      <Heading size="md">Recording Audio/Screen/Video</Heading>
    </Flex>
  );
};

export default AppHeader;
