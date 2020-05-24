import {
  Flex,
  Heading,
  IconButton,
  Tooltip,
  useColorMode
} from "@chakra-ui/core";
import Link from "next/link";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const colorModeLabel = `Switch to ${
    colorMode === "light" ? "dark" : "light"
  } mode`;

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
        <Tooltip hasArrow label={colorModeLabel} aria-label={colorModeLabel}>
          <IconButton
            aria-label={colorModeLabel}
            variant="ghost"
            fontSize={20}
            onClick={toggleColorMode}
            icon={colorMode === "light" ? "moon" : "sun"}
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
};
