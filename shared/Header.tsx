import { Flex, Heading, IconButton, useColorMode } from "@chakra-ui/core";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      h={16}
      px={4}
      borderBottomWidth="1px"
    >
      <Heading as="h1" size="lg">
        Sundeck
      </Heading>

      <Flex>
        <IconButton
          aria-label={`Switch to ${
            colorMode === "light" ? "dark" : "light"
          } mode`}
          variant="ghost"
          fontSize={20}
          onClick={toggleColorMode}
          icon={colorMode === "light" ? "moon" : "sun"}
        >
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </IconButton>
      </Flex>
    </Flex>
  );
};
