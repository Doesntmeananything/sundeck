import {
  Flex,
  Heading,
  IconButton,
  useColorMode,
  Tooltip
} from "@chakra-ui/core";
import Link from "next/link";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      h={16}
      px={6}
      borderBottomWidth="1px"
    >
      <Heading as="h1" size="lg">
        <Link href="/">
          <a>Sundeck</a>
        </Link>
      </Heading>

      <Flex>
        <Tooltip
          hasArrow
          label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`}
          aria-label={`Switch to ${
            colorMode === "light" ? "dark" : "light"
          } mode`}
        >
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
        </Tooltip>
      </Flex>
    </Flex>
  );
};
